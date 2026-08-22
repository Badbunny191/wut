// classifier.js - ระบบคัดกรองและจัดกลุ่มคุณวุฒิ สตง. (V80 Single Engine)

const STANDARD_TIERS_DEF = [
    { id: 1, name: "ปริญญาเอกหรือเทียบเท่า", defaultChecked: true, regex: /ปริญญาเอก|ป\.เอก|ดุษฎี|doctor|ph\.?d|dba/i },
    { id: 2, name: "ปริญญาโทหรือเทียบเท่า", defaultChecked: true, regex: /ปริญญาโท|ป\.โท|มหาบัณฑิต|master|mba|ll\.?m|mpa|m\.?sc|m\.?a\b/i },
    { id: 3, name: "ประกาศนียบัตรชั้นสูง (สูงกว่าปริญญาตรี/ต่ำกว่าปริญญาโท)", defaultChecked: true, regex: /^(?=.*(?:ประกาศนียบัตรบัณฑิต|ป\.บัณฑิต|สูงกว่าปริญญาตรี|postgraduate|ปรม|วิชาชีพครู))(?!.*(?:ปวช|ปวส|ประกาศนียบัตรวิชาชีพ))/i },
    { id: 4, name: "ปริญญาตรีหรือเทียบเท่า", defaultChecked: true, regex: /ปริญญาตรี|ป\.ตรี|บัณฑิต|bachelor|b\.?a\b|b\.?s\b|b\.?b\.?a|ll\.?b|ปทส/i },
    { id: 5, name: "วุฒิอื่น ๆ เป็นกลุ่มที่หน่วยงานผลิตมาเพื่อใช้เฉพาะตำแหน่ง", defaultChecked: true, regex: /เนติ|ว่าความ|ทนาย|ก\.ศป|กศป|ศาลปกครอง|วุฒิบัตร|ใบอนุญาต|เฉพาะตำแหน่ง|วุฒิอื่น/i },
    { id: 6, name: "ทักษะประสบการณ์ที่ใช้แทนวุฒิการศึกษา", defaultChecked: true, regex: /ทักษะ|ประสบการณ์|แทนวุฒิ/i },
    { id: 7, name: "ปวส. หรือเทียบเท่า / อนุปริญญา / ปวท.", defaultChecked: false, regex: /ปวส|ปวท|อนุปริญญา|วิชาชีพชั้นสูง|วิชาชีพเทคนิค/i },
    { id: 8, name: "ปวช. หรือเทียบเท่า", defaultChecked: false, regex: /(?<!ต่ำกว่า\s*)ปวช|(?<!ต่ำกว่า\s*)ประกาศนียบัตรวิชาชีพ(?!ชั้นสูง)/i },
    { id: 9, name: "มัธยมศึกษา (รวม ม.ต้น, ม.ปลาย, สอบเทียบ)", defaultChecked: false, regex: /มัธยม|ม\.[1-6]|ม\.ศ\.|มศ\.|ต่ำกว่าประกาศนียบัตรวิชาชีพ|ต่ำกว่า\s*ปวช/i },
    { id: 10, name: "ประถมศึกษา (รวม ป.1-6, ป.3, ป.4, ใบสุทธิ)", defaultChecked: false, regex: /ประถม|ป\.[1-7]|ใบสุทธิ|อนุบาล/i }
];

const SYSTEM_GROUPS = [
    { key: "other", name: "📝 ปริญญาสาขาอื่นๆ / วุฒิอื่นๆ", color: "#6b7280" }
];

const PROFESSIONAL_GROUPS = new Set(["acc", "law", "eco", "comp", "stat", "eng", "health"]);

const TIERS = {
    PERSON: 10000,
    BASIC: 9500,
    SPECIFIC: 9000,
    EXACT_FULL_MAJOR: 8500,
    POLICY: 8000,
    COMBO: 7000,
    PROFESSIONAL_MAJOR: 6500,
    EXACT_DEGREE: 6000,
    EXACT_MAJOR: 5000,
    COMPOUND: 4000,
    GENERIC: 3000
};

const normCache = new Map();
const classCache = new Map();

function getActiveDataSource() {
    if (typeof v78MasterData !== 'undefined' && v78MasterData && v78MasterData.groups) return v78MasterData;
    if (typeof rulesDataGlobal !== 'undefined' && rulesDataGlobal && rulesDataGlobal.groups) return rulesDataGlobal;
    return {};
}

function normalizeField(text) {
    if (!text) return "";
    if (normCache.has(text)) return normCache.get(text);

    let s = String(text).normalize("NFC").toLowerCase().trim().replace(/\s+/g, " ");
    s = s.replace(/\s*\(เกียรตินิยมอันดับ\s*(หนึ่ง|สอง|1|2)\)\s*/g, " ");
    s = s.replace(/\s*\(เกียรตินิยม\)\s*/g, " ");
    s = s.replace(/^(กลุ่มนิติศาสตร์|กลุ่มบริหารธุรกิจ|กลุ่มเศรษฐศาสตร์|กลุ่มรัฐศาสตร์|กลุ่มการบัญชี|กลุ่มวิทยาศาสตร์|กลุ่มพาณิชยศาสตร์|กลุ่ม)(ไม่ระบุวิชาเอก|ไม่ระบุสาขาวิชาเอก)?\s*/g, "");
    s = s.replace(/^(สาขาวิชาเอก|สาขาวิชา|สาขา|วิชาเอก|แผนกวิชา|แผนก)\s*/g, "");
    
    if (/ไม่ระบุ|อื่นๆ|อื่น ๆ/i.test(s) && /วิชาเอก|สาขา/i.test(s)) s = "";
    
    const emptyValues = new Set(["", "-", "ไม่ระบุ", "ไม่ระบุวิชาเอก", "อื่นๆ", "อื่น ๆ", "อื่นๆ ไม่ระบุวิชาเอก", "ไม่ระบุสาขาวิชาเอก", "บริหารไม่ระบุวิชาเอก", "บริหารธุรกิจไม่ระบุวิชาเอก"]);
    const result = emptyValues.has(s) ? "" : s.trim();
    normCache.set(text, result);
    return result;
}

function cleanAndValidateMajor(rawMajor) {
    if (!rawMajor || typeof rawMajor !== 'string') return "";
    let cleaned = normalizeField(rawMajor);
    if (!cleaned) return "";

    const invalidPatterns = [
        /^ไม่ระบุ$/i, /^ไม่มี$/i, /^ทั่วไป$/i, /^รอกำหนด$/i,
        /^-+$/, /^\.+$/, /^กลุ่ม.*ไม่ระบุวิชาเอก$/i
    ];
    if (invalidPatterns.some(rx => rx.test(cleaned))) return "";

    const programBlacklist = [
        "โครงการพิเศษ", "ภาคพิเศษ", "นานาชาติ", "หลักสูตรนานาชาติ",
        "เสาร์-อาทิตย์", "นอกเวลาราชการ", "ต่อเนื่อง", "ภาคค่ำ"
    ];
    if (programBlacklist.some(term => cleaned.includes(term))) return "";

    return cleaned;
}

function prepareRulesIndex(src) {
    if (!src) return;
    (src.specificQualifications || []).forEach(spec => {
        spec._tokensNorm = [spec.token, ...(spec.aliases || [])].filter(Boolean).map(t => normalizeField(t));
    });
    (src.policyOverrides || []).forEach(pol => { pol._norm = normalizeField(pol.pattern); });
    (src.degreeMajorCombinations || []).forEach(combo => {
        combo._dNorm = normalizeField(combo.degreeToken);
        combo._mNorm = normalizeField(combo.majorToken);
    });
    (src.compoundMajorRules || []).forEach(comp => { comp._norm = normalizeField(comp.pattern); });
    (src.exactMajorRules || []).forEach(em => { em._norm = normalizeField(em.pattern); });
    (src.exactDegreeRules || []).forEach(ed => { ed._norm = normalizeField(ed.pattern); });
    (src.genericKeywords || []).forEach(gen => { gen._norm = normalizeField(gen.keyword); });

    src._exclusionsNorm = {};
    if (src.exclusions) {
        Object.entries(src.exclusions).forEach(([grp, arr]) => {
            src._exclusionsNorm[grp] = (arr || []).map(x => normalizeField(x));
        });
    }
    classCache.clear();
}

function classifyEducationTier(lvl, rawDegree = "") {
    const cleanLvl = (lvl || "").trim();
    const cleanDeg = (rawDegree || "").trim();
    if (!cleanLvl && !cleanDeg) return STANDARD_TIERS_DEF.find(t => t.id === 10);

    const dataSrc = getActiveDataSource();
    if (dataSrc.tierOverrides && dataSrc.tierOverrides[cleanLvl]) {
        const target = STANDARD_TIERS_DEF.find(t => t.id === dataSrc.tierOverrides[cleanLvl]);
        if (target) return target;
    }

    const fullText = `${cleanLvl} ${cleanDeg}`.trim();
    const evaluationPriority = [3, 1, 2, 5, 6, 4, 10, 9, 8, 7];

    for (const tierId of evaluationPriority) {
        const tier = STANDARD_TIERS_DEF.find(t => t.id === tierId);
        if (tier && tier.regex.test(fullText)) return tier;
    }
    return STANDARD_TIERS_DEF.find(t => t.id === 10);
}

function getTierScore(tierId) {
    if (tierId === 1) return 4.0;
    if (tierId === 2) return 3.0;
    if (tierId === 3) return 2.5;
    if (tierId === 4) return 2.0;
    if (tierId === 5) return 2.0;
    if (tierId === 6) return 1.5;
    if (tierId === 7) return 1.5;
    if (tierId === 8) return 1.2;
    if (tierId >= 9) return 1.0;
    return 0;
}

function isGroupExcluded(text, groupKey, dataSrc) {
    const src = dataSrc || getActiveDataSource();
    const exList = src._exclusionsNorm?.[groupKey] || src.exclusions?.[groupKey];
    if (!exList || exList.length === 0) return false;
    for (let i = 0; i < exList.length; i++) {
        if (text.includes(exList[i])) return true;
    }
    return false;
}

function classifyQualificationV80(lvl, rawDegree, rawMajor, personKey, rowContext) {
    const dataSrc = getActiveDataSource();

    // 0.1 ตรวจสอบกรณีได้รับการอนุมัติรายคน (Manual Approve)
    if (dataSrc.personApproved && dataSrc.personApproved[personKey]) {
        return { 
            group: "approved", 
            status: "APPROVED", 
            reason: "MANUAL_APPROVE", 
            specificity: 99999 
        };
    }

    // 0.2 ตรวจสอบกรณีมีการโยกย้ายกลุ่มรายคน (Person Override)
    if (personKey && dataSrc.personOverrides) {
        const pk = String(personKey).split('_');
        const pos = rowContext ? (rowContext['เลขที่ตำแหน่ง'] || rowContext.pos) : (pk[0] || '');
        const name = rowContext ? (rowContext['ชื่อ-นามสกุล'] || rowContext.name) : (pk[1] || '');
        const exactKey = `${pos}_${name}_${lvl}_${rawDegree}_${rawMajor}`;
        const legacyKey = `${pos}_${name}`;

        const overrideGrp = dataSrc.personOverrides[exactKey] || dataSrc.personOverrides[legacyKey] || dataSrc.personOverrides[personKey];
        if (overrideGrp) {
            return { 
                group: overrideGrp, 
                status: "OVERRIDE", 
                reason: "PERSON_OVERRIDE", 
                matchedRule: "Admin Custom Set", 
                specificity: TIERS.PERSON 
            };
        }
    }

    const cleanM = cleanAndValidateMajor(rawMajor);
    const cleanD = normalizeField(rawDegree);

    // 0.3 ตรวจสอบ Exact Major / Exact Degree Rules ที่กดบันทึกโดยตรง
    if (dataSrc.exactMajorRules) {
        const foundExact = dataSrc.exactMajorRules.find(r => {
            const pNorm = normalizeField(r.pattern);
            return (cleanM && pNorm === cleanM) || (!cleanM && cleanD && pNorm === cleanD);
        });
        if (foundExact) {
            return { 
                group: foundExact.group, 
                status: "AUTO", 
                reason: cleanM ? "EXACT_MAJOR" : "EXACT_DEGREE", 
                matchedRule: foundExact.pattern, 
                sourceField: cleanM ? "major" : "degree", 
                confidence: 1.0, 
                specificity: 9999 
            };
        }
    }

    // 0.4 ตรวจสอบระดับการศึกษา (Tier Evaluation)
    const tierObj = classifyEducationTier(lvl, rawDegree);
    const activeDefaults = new Set(dataSrc.tierDefaults || [1, 2, 3, 4, 5, 6]);

    // ตัดการศึกษาขั้นพื้นฐานที่ไม่อยู่ในกลุ่ม Default ออก
    if (!activeDefaults.has(tierObj.id) && tierObj.id !== 3 && tierObj.id !== 5) {
        return { group: "none", status: "BASIC_EDU", reason: "BELOW_BACHELOR_EXCLUDE" };
    }

    // 🛡️ 0.5 [สำคัญมาก] บังคับให้ Tier 3 (ป.บัณฑิต / ประกาศนียบัตรชั้นสูง) และ Tier 5 เข้ากลุ่ม spec ทันที
    if (tierObj.id === 3 || tierObj.id === 5) {
        return { 
            group: "spec", 
            status: "AUTO", 
            reason: "POSTGRAD_CERT_OVERRIDE", 
            matchedRule: tierObj.name, 
            sourceField: "level", 
            confidence: 1.0, 
            specificity: 9500 
        };
    }

    const memoKey = `${lvl}|${rawDegree}|${rawMajor}`;
    if (classCache.has(memoKey)) return classCache.get(memoKey);

    const fullText = `${cleanD} ${cleanM}`.trim();
    const candidates = [];

    // 1. ตรวจสอบคุณวุฒิเฉพาะตำแหน่ง (Specific Qualifications)
    const specs = dataSrc.specificQualifications || [];
    for (let i = 0; i < specs.length; i++) {
        const spec = specs[i];
        const tokens = spec._tokensNorm || [normalizeField(spec.token)];
        for (let j = 0; j < tokens.length; j++) {
            if (tokens[j] && fullText.includes(tokens[j])) {
                candidates.push({ 
                    group: spec.group, 
                    tier: TIERS.SPECIFIC, 
                    patternLength: tokens[j].length, 
                    matchedRule: spec.token, 
                    reason: "SPECIFIC", 
                    confidence: 0.99, 
                    specificity: tokens[j].length 
                });
                break;
            }
        }
    }

    // 2. ตรวจสอบกฎเชิงนโยบาย (Policy Overrides)
    const policies = dataSrc.policyOverrides || [];
    for (let i = 0; i < policies.length; i++) {
        const pol = policies[i];
        const pNorm = pol._norm !== undefined ? pol._norm : normalizeField(pol.pattern);
        if (pNorm && fullText.includes(pNorm)) {
            candidates.push({ 
                group: pol.group, 
                tier: TIERS.POLICY, 
                patternLength: pNorm.length, 
                matchedRule: pol.pattern, 
                reason: pol.reason || "POLICY", 
                confidence: 0.98, 
                specificity: pNorm.length 
            });
        }
    }

    // 3. ตรวจสอบ Degree + Major Combinations
    const combos = dataSrc.degreeMajorCombinations || [];
    for (let i = 0; i < combos.length; i++) {
        const combo = combos[i];
        const dNorm = combo._dNorm !== undefined ? combo._dNorm : normalizeField(combo.degreeToken);
        const mNorm = combo._mNorm !== undefined ? combo._mNorm : normalizeField(combo.majorToken);
        if (dNorm && mNorm && cleanD.includes(dNorm) && cleanM.includes(mNorm)) {
            candidates.push({ 
                group: combo.group, 
                tier: TIERS.COMBO, 
                patternLength: dNorm.length + mNorm.length, 
                matchedRule: `${combo.degreeToken} + ${combo.majorToken}`, 
                reason: combo.reason || "COMBO", 
                confidence: 0.99, 
                specificity: dNorm.length + mNorm.length 
            });
        }
    }

    // 4. Major-First Priority: ตรวจจากสาขาวิชาเอกก่อน
    if (cleanM) {
        const compounds = dataSrc.compoundMajorRules || [];
        for (let i = 0; i < compounds.length; i++) {
            const comp = compounds[i];
            const pNorm = comp._norm !== undefined ? comp._norm : normalizeField(comp.pattern);
            if (pNorm && cleanM.includes(pNorm) && !isGroupExcluded(cleanM, comp.group, dataSrc)) {
                const isProf = PROFESSIONAL_GROUPS.has(comp.group);
                candidates.push({ 
                    group: comp.group, 
                    tier: isProf ? TIERS.PROFESSIONAL_MAJOR : TIERS.COMPOUND, 
                    patternLength: pNorm.length, 
                    matchedRule: comp.pattern, 
                    reason: "COMPOUND_MAJOR", 
                    confidence: 0.96, 
                    specificity: (Number(comp.specificity) || pNorm.length) + (isProf ? 500 : 0) 
                });
            }
        }

        const exactMajors = dataSrc.exactMajorRules || [];
        for (let i = 0; i < exactMajors.length; i++) {
            const em = exactMajors[i];
            const pNorm = em._norm !== undefined ? em._norm : normalizeField(em.pattern);
            if (pNorm && cleanM.includes(pNorm) && !isGroupExcluded(cleanM, em.group, dataSrc)) {
                const isFullMatch = (cleanM === pNorm);
                const isProf = PROFESSIONAL_GROUPS.has(em.group);
                candidates.push({
                    group: em.group,
                    tier: isFullMatch ? TIERS.EXACT_FULL_MAJOR : (isProf ? TIERS.PROFESSIONAL_MAJOR : TIERS.EXACT_MAJOR),
                    patternLength: pNorm.length,
                    matchedRule: em.pattern,
                    reason: isFullMatch ? "EXACT_FULL_MAJOR" : "EXACT_MAJOR",
                    confidence: isFullMatch ? 0.99 : (isProf ? 0.94 : 0.90),
                    specificity: pNorm.length + (isFullMatch ? 1000 : 0)
                });
            }
        }
    }

    // 5. Degree Fallback: ตรวจสอบจากชื่อวุฒิแม่ด้านหน้าเมื่อสาขาไม่พบกฎตรง
    if (cleanD) {
        const exactDegrees = dataSrc.exactDegreeRules || [];
        for (let i = 0; i < exactDegrees.length; i++) {
            const ed = exactDegrees[i];
            const pNorm = ed._norm !== undefined ? ed._norm : normalizeField(ed.pattern);
            if (pNorm && cleanD.includes(pNorm) && !isGroupExcluded(cleanD, ed.group, dataSrc)) {
                candidates.push({ 
                    group: ed.group, 
                    tier: TIERS.EXACT_DEGREE, 
                    patternLength: pNorm.length, 
                    matchedRule: ed.pattern, 
                    reason: "EXACT_DEGREE", 
                    confidence: 0.90, 
                    specificity: pNorm.length 
                });
            }
        }
    }

    // 6. Generic Keywords Fallback: กวาดดูคีย์เวิร์ดทั่วไปทั้งในสาขาและวุฒิ
    const generics = dataSrc.genericKeywords || [];
    for (let i = 0; i < generics.length; i++) {
        const gen = generics[i];
        const kNorm = gen._norm !== undefined ? gen._norm : normalizeField(gen.keyword);
        if (!kNorm) continue;
        
        const matchInMajor = cleanM && cleanM.includes(kNorm);
        const matchInDegree = cleanD && cleanD.includes(kNorm);

        if (matchInMajor && !isGroupExcluded(cleanM, gen.group, dataSrc)) {
            candidates.push({ 
                group: gen.group, 
                tier: TIERS.GENERIC, 
                patternLength: kNorm.length, 
                matchedRule: gen.keyword, 
                reason: "GENERIC_MAJOR", 
                confidence: 0.75, 
                specificity: kNorm.length 
            });
        } else if (matchInDegree && !isGroupExcluded(cleanD, gen.group, dataSrc)) {
            candidates.push({ 
                group: gen.group, 
                tier: TIERS.GENERIC - 500, 
                patternLength: kNorm.length, 
                matchedRule: gen.keyword, 
                reason: "GENERIC_DEGREE", 
                confidence: 0.70, 
                specificity: kNorm.length 
            });
        }
    }

    if (tierObj && tierObj.id >= 9) {
        const res = { 
            group: "other", 
            status: "AUTO", 
            reason: "BASIC_EDU", 
            matchedRule: "การศึกษาขั้นพื้นฐาน", 
            specificity: TIERS.BASIC 
        };
        classCache.set(memoKey, res);
        return res;
    }

    if (candidates.length === 0) {
        const res = { 
            group: "other", 
            status: "UNKNOWN", 
            reason: "UNRESOLVED", 
            matchedRule: cleanM || cleanD || "N/A", 
            specificity: 0 
        };
        classCache.set(memoKey, res);
        return res;
    }

    candidates.sort((a, b) => {
        if (b.tier !== a.tier) return b.tier - a.tier;
        if (b.patternLength !== a.patternLength) return b.patternLength - a.patternLength;
        if (b.specificity !== a.specificity) return b.specificity - a.specificity;
        return b.confidence - a.confidence;
    });

    const best = candidates[0];
    const res = {
        group: best.group || "other",
        status: "AUTO",
        reason: best.reason,
        matchedRule: best.matchedRule,
        confidence: best.confidence,
        specificity: best.tier + best.specificity
    };
    classCache.set(memoKey, res);
    return res;
}