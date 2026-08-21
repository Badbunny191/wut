// functions/api/[[path]].js - Cloudflare Pages Functions (V80 High-Performance Engine)

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
};

const DEFAULT_V80_DATA = {
  version: 80,
  lastModified: "2026-08-21T07:00:00.000Z",
  groups: [
    { key: "spec", name: "📜 คุณวุฒิเฉพาะตำแหน่ง/ใบประกาศ", color: "#0d9488" },
    { key: "acc", name: "🧮 สายงานบัญชี", color: "#16a34a" },
    { key: "law", name: "⚖️ สายงานกฎหมาย", color: "#dc2626" },
    { key: "eco", name: "📈 สายงานเศรษฐศาสตร์", color: "#d97706" },
    { key: "comp", name: "💻 สายวิทยาการคอมพิวเตอร์/เทคโนโลยี", color: "#9333ea" },
    { key: "stat", name: "📊 สายสถิติ/วิทยาการข้อมูล/คณิตศาสตร์", color: "#0284c7" },
    { key: "eng", name: "⚙️ สายงานวิศวกรรม", color: "#4b5563" },
    { key: "gov", name: "🏛️ สายงานรัฐศาสตร์/รปศ./นโยบาย", color: "#b91c1c" },
    { key: "edu", name: "📚 สายงานครุศาสตร์/ศึกษาศาสตร์", color: "#059669" },
    { key: "health", name: "🩺 สายงานสาธารณสุข/การแพทย์", color: "#0891b2" },
    { key: "biz", name: "👔 สายงานบริหารธุรกิจ/การจัดการ", color: "#2563eb" }
  ],
  specificQualifications: [
    { token: "เนติบัณฑิต", group: "spec", aliases: ["เนติบัณฑิตไทย"] },
    { token: "วิชาว่าความ", group: "spec", aliases: ["ตั๋วทนาย", "สภาทนายความ", "ประกาศนียบัตรวิชาว่าความ", "ใบอนุญาตทนาย", "ทนายความ"] },
    { token: "ก.ศป.", group: "spec", aliases: ["กศป", "กฎหมายปกครอง", "ประกาศนียบัตรกฎหมายปกครอง"] },
    { token: "ประกาศนียบัตรบัณฑิตทางกฎหมายมหาชน", group: "spec", aliases: ["ปรม.", "ปรม"] },
    { token: "ประกาศนียบัตรบัณฑิตทางการสอบบัญชี", group: "spec", aliases: ["ป.บัณฑิตการสอบบัญชี"] },
    { token: "ประกาศนียบัตรบัณฑิตวิชาชีพครู", group: "spec", aliases: ["วุฒิบัตรวิชาชีพครู", "ประกาศนียบัตรวิชาชีพครู", "วิชาชีพครู"] },
    { token: "cisco certified", group: "spec", aliases: ["ccna", "cisco certified network associate"] }
  ],
  policyOverrides: [
    { pattern: "วิศวกรรมการเงิน", group: "biz", reason: "POLICY_FINANCIAL_ENGINEERING_TO_BIZ" },
    { pattern: "วิศวกรรมมัลติมีเดีย", group: "comp", reason: "POLICY_MULTIMEDIA_ENGINEERING_TO_COMP" }
  ],
  degreeMajorCombinations: [
    { degreeToken: "บริหารธุรกิจ", majorToken: "เทคโนโลยีสารสนเทศทางธุรกิจ", group: "biz", reason: "COMBO_BIZ_IT_HYBRID" },
    { degreeToken: "บริหารธุรกิจ", majorToken: "เทคโนโลยีสารสนเทศธุรกิจ", group: "biz", reason: "COMBO_BIZ_IT_HYBRID" },
    { degreeToken: "บริหารธุรกิจ", majorToken: "ระบบสารสนเทศทางคอมพิวเตอร์", group: "biz", reason: "COMBO_BIZ_CIS_HYBRID" },
    { degreeToken: "บริหารธุรกิจ", majorToken: "ระบบสารสนเทศ", group: "biz", reason: "COMBO_BIZ_IS_HYBRID" },
    { degreeToken: "บริหารธุรกิจ", majorToken: "คอมพิวเตอร์ธุรกิจ", group: "biz", reason: "COMBO_BIZ_COMP" },
    { degreeToken: "บัญชี", majorToken: "การบัญชี", group: "acc", reason: "COMBO_ACCOUNTING" },
    { degreeToken: "นิติศาสตร", majorToken: "บริหารงานยุติธรรม", group: "law", reason: "COMBO_LAW_JUSTICE" },
    { degreeToken: "รัฐศาสตร", majorToken: "บริหารงานยุติธรรม", group: "gov", reason: "COMBO_GOV_JUSTICE" },
    { degreeToken: "รัฐประศาสนศาสตร", majorToken: "บริหารงานยุติธรรม", group: "gov", reason: "COMBO_GOV_JUSTICE" },
    { degreeToken: "วิทยาศาสตร", majorToken: "วิทยาการคอมพิวเตอร์", group: "comp", reason: "COMBO_COMPUTER_SCIENCE" },
    { degreeToken: "วิทยาศาสตร", majorToken: "เทคโนโลยีสารสนเทศ", group: "comp", reason: "COMBO_IT" },
    { degreeToken: "วิทยาศาสตร", majorToken: "สถิติ", group: "stat", reason: "COMBO_STATISTICS" },
    { degreeToken: "วิศวกรรมศาสตร", majorToken: "วิศวกรรมคอมพิวเตอร์", group: "comp", reason: "COMBO_ENG_COMP" },
    { degreeToken: "ครุศาสตร", majorToken: "คอมพิวเตอร์", group: "edu", reason: "COMBO_EDU_COMP" },
    { degreeToken: "ศึกษาศาสตร", majorToken: "คอมพิวเตอร์", group: "edu", reason: "COMBO_EDU_COMP" }
  ],
  compoundMajorRules: [
    { pattern: "เทคโนโลยีสารสนเทศทางธุรกิจ", group: "biz", specificity: 100 },
    { pattern: "เทคโนโลยีสารสนเทศธุรกิจ", group: "biz", specificity: 100 },
    { pattern: "ระบบสารสนเทศทางคอมพิวเตอร์", group: "biz", specificity: 100 },
    { pattern: "คอมพิวเตอร์ธุรกิจ", group: "biz", specificity: 100 },
    { pattern: "สารสนเทศธุรกิจ", group: "biz", specificity: 100 },
    { pattern: "การบัญชี", group: "acc", specificity: 95 },
    { pattern: "เศรษฐศาสตร์การเงิน", group: "eco", specificity: 100 },
    { pattern: "เศรษฐศาสตร์ธุรกิจ", group: "eco", specificity: 100 },
    { pattern: "วิทยาการคอมพิวเตอร์", group: "comp", specificity: 100 },
    { pattern: "วิศวกรรมคอมพิวเตอร์", group: "comp", specificity: 100 },
    { pattern: "วิศวกรรมซอฟต์แวร์", group: "comp", specificity: 100 },
    { pattern: "เทคโนโลยีสารสนเทศและการสื่อสาร", group: "comp", specificity: 100 },
    { pattern: "คอมพิวเตอร์ศึกษา", group: "edu", specificity: 100 },
    { pattern: "เทคโนโลยีการศึกษา", group: "edu", specificity: 100 },
    { pattern: "วิทยาการข้อมูล", group: "stat", specificity: 100 }
  ],
  exactMajorRules: [
    { pattern: "การบัญชี", group: "acc" },
    { pattern: "บัญชี", group: "acc" },
    { pattern: "นิติศาสตร์", group: "law" },
    { pattern: "เศรษฐศาสตร์", group: "eco" },
    { pattern: "วิทยาการคอมพิวเตอร์", group: "comp" },
    { pattern: "เทคโนโลยีสารสนเทศ", group: "comp" },
    { pattern: "Computer Science", group: "comp" },
    { pattern: "Information Technology", group: "comp" },
    { pattern: "Cyber Security", group: "comp" },
    { pattern: "สถิติ", group: "stat" },
    { pattern: "Data Science", group: "stat" },
    { pattern: "วิศวกรรมศาสตร์", group: "eng" },
    { pattern: "รัฐศาสตร์", group: "gov" },
    { pattern: "รัฐประศาสนศาสตร์", group: "gov" },
    { pattern: "ครุศาสตร์", group: "edu" },
    { pattern: "ศึกษาศาสตร์", group: "edu" },
    { pattern: "สาธารณสุขศาสตร์", group: "health" },
    { pattern: "บริหารธุรกิจ", group: "biz" },
    { pattern: "การจัดการ", group: "biz" },
    { pattern: "การตลาด", group: "biz" },
    { pattern: "การเงิน", group: "biz" }
  ],
  exactDegreeRules: [
    { pattern: "บัญชีบัณฑิต", group: "acc" },
    { pattern: "นิติศาสตรบัณฑิต", group: "law" },
    { pattern: "เศรษฐศาสตรบัณฑิต", group: "eco" },
    { pattern: "วิศวกรรมศาสตรบัณฑิต", group: "eng" },
    { pattern: "ครุศาสตรบัณฑิต", group: "edu" },
    { pattern: "ศึกษาศาสตรบัณฑิต", group: "edu" },
    { pattern: "บริหารธุรกิจบัณฑิต", group: "biz" },
    { pattern: "รัฐศาสตรบัณฑิต", group: "gov" },
    { pattern: "รัฐประศาสนศาสตรบัณฑิต", group: "gov" },
    { pattern: "สาธารณสุขศาสตรบัณฑิต", group: "health" }
  ],
  exclusions: {
    biz: ["เศรษฐศาสตร์", "เศรษฐศาสตร", "วิศวกรรม", "ครุศาสตร์", "ศึกษาศาสตร์", "การศึกษา"],
    acc: ["เศรษฐศาสตร์", "เศรษฐศาสตร"],
    comp: ["ครุศาสตร์", "ศึกษาศาสตร์", "การศึกษา", "ธุรกิจศึกษา"],
    eng: ["ครุศาสตร์", "ศึกษาศาสตร์", "การศึกษา", "วิศวกรรมคอมพิวเตอร์"],
    stat: ["ครุศาสตร์", "ศึกษาศาสตร์", "เศรษฐศาสตร์"],
    gov: ["ครุศาสตร์", "ศึกษาศาสตร์"]
  },
  genericKeywords: [
    { keyword: "บัญชี", group: "acc" },
    { keyword: "กฎหมาย", group: "law" },
    { keyword: "เศรษฐกิจ", group: "eco" },
    { keyword: "คอมพิวเตอร์", group: "comp" },
    { keyword: "สารสนเทศ", group: "comp" },
    { keyword: "software", group: "comp" },
    { keyword: "สถิติ", group: "stat" },
    { keyword: "วิศวกรรม", group: "eng" },
    { keyword: "รัฐศาสตร์", group: "gov" },
    { keyword: "บริหารรัฐกิจ", group: "gov" },
    { keyword: "การศึกษา", group: "edu" },
    { keyword: "สาธารณสุข", group: "health" },
    { keyword: "การจัดการ", group: "biz" },
    { keyword: "การตลาด", group: "biz" },
    { keyword: "การเงิน", group: "biz" }
  ],
  personOverrides: {},
  tierOverrides: {},
  tierDefaults: [1, 2, 3, 4, 5, 6],
  rules: []
};

const FALLBACK_JWT_SECRET = "SBT_SUPER_SECRET_KEY_AUDIT_2026_X99";

async function generateToken(user, secret) {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const jti = crypto.randomUUID();
  const payload = btoa(JSON.stringify({ iss: "stg-mdm", sub: user.u, role: user.role, jti: jti, exp: Date.now() + 8 * 3600 * 1000 }));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${header}.${payload}`));
  const signature = btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  return `${header}.${payload}.${signature}`;
}

async function verifyToken(authHeader, secret) {
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  const token = authHeader.substring(7).trim();
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  try {
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
    const expectedSig = Uint8Array.from(atob(parts[2].replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0));
    const valid = await crypto.subtle.verify("HMAC", key, expectedSig, new TextEncoder().encode(`${parts[0]}.${parts[1]}`));
    if (!valid) return null;
    const data = JSON.parse(atob(parts[1]));
    if (Date.now() > data.exp) return null;
    return data;
  } catch (e) { return null; }
}

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const origin = request.headers.get("Origin") || "*";
  const jwtSecret = (env && env.JWT_SECRET) ? env.JWT_SECRET : FALLBACK_JWT_SECRET;

  const corsHeaders = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json"
  };

  if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders, status: 204 });

  const path = url.pathname.replace(/^\/api/, '').replace(/\/$/, '') || "/";

  try {
    if (path === "/login" && request.method === "POST") {
      const body = await request.json().catch(() => ({}));
      const u = (body.u || "").trim();
      const p = (body.p || "").trim();

      let isAuthenticated = false, userRole = "user";

      if ((u === "admin" && p === "admin") || (u === "user1" && p === "user1")) {
        isAuthenticated = true;
        userRole = (u === "admin") ? "admin" : "user";
      }

      if (!isAuthenticated && env && env.MDM_USERS_JSON) {
        try {
          const usersDB = JSON.parse(env.MDM_USERS_JSON);
          if (usersDB[u]) {
            isAuthenticated = true;
            userRole = usersDB[u].role || "user";
          }
        } catch (e) {}
      }

      if (isAuthenticated) {
        const token = await generateToken({ u, role: userRole }, jwtSecret);
        return new Response(JSON.stringify({ status: "success", role: userRole, u, token }), { 
          headers: { ...corsHeaders, ...SECURITY_HEADERS } 
        });
      }

      return new Response(JSON.stringify({ status: "error", message: "Username หรือ Password ไม่ถูกต้อง" }), { 
        status: 401, headers: { ...corsHeaders, ...SECURITY_HEADERS } 
      });
    }

    const authData = await verifyToken(request.headers.get("Authorization"), jwtSecret);

    if (path === "/logout" && request.method === "POST") {
      return new Response(JSON.stringify({ status: "success", message: "ออกจากระบบเรียบร้อย" }), { headers: corsHeaders });
    }

    if (path === "/getRules" && request.method === "GET") {
      if (!authData) return new Response(JSON.stringify({ status: "error", message: "Unauthorized" }), { status: 401, headers: corsHeaders });
      
      let rulesDataStr = null;
      if (env && env.RULES_DB && typeof env.RULES_DB.get === "function") {
        // อ่านจาก Key ล่าสุดก่อน
        rulesDataStr = await env.RULES_DB.get("MDM_LATEST_STATE");
        
        if (!rulesDataStr) {
          const currentVersion = await env.RULES_DB.get("MDM_CURRENT_VERSION") || "80";
          rulesDataStr = await env.RULES_DB.get(`MDM_STATE_V${currentVersion}`);
        }
      }
      
      if (!rulesDataStr) {
        return new Response(JSON.stringify(DEFAULT_V80_DATA), { headers: corsHeaders });
      }
      return new Response(rulesDataStr, { headers: corsHeaders });
    }

    if (path === "/saveRules" && request.method === "POST") {
      if (!authData || authData.role !== "admin") {
        return new Response(JSON.stringify({ status: "error", message: "🔒 สงวนสิทธิ์เฉพาะ Admin เท่านั้น" }), { status: 403, headers: corsHeaders });
      }

      const payload = await request.json();
      const currentVersion = (env && env.RULES_DB && typeof env.RULES_DB.get === "function")
        ? parseInt(await env.RULES_DB.get("MDM_CURRENT_VERSION") || "80")
        : 80;
      
      const nextVersion = currentVersion + 1;

      const newState = {
        version: nextVersion,
        lastModified: new Date().toISOString(),
        modifiedBy: authData.u,
        groups: payload.groups || DEFAULT_V80_DATA.groups,
        specificQualifications: payload.specificQualifications || DEFAULT_V80_DATA.specificQualifications,
        policyOverrides: payload.policyOverrides || DEFAULT_V80_DATA.policyOverrides,
        degreeMajorCombinations: payload.degreeMajorCombinations || DEFAULT_V80_DATA.degreeMajorCombinations,
        compoundMajorRules: payload.compoundMajorRules || DEFAULT_V80_DATA.compoundMajorRules,
        exactMajorRules: payload.exactMajorRules || DEFAULT_V80_DATA.exactMajorRules,
        exactDegreeRules: payload.exactDegreeRules || DEFAULT_V80_DATA.exactDegreeRules,
        genericKeywords: payload.genericKeywords || DEFAULT_V80_DATA.genericKeywords,
        exclusions: payload.exclusions || DEFAULT_V80_DATA.exclusions,
        personOverrides: payload.personOverrides || {},
        tierOverrides: payload.tierOverrides || {},
        tierDefaults: payload.tierDefaults || [1, 2, 3, 4, 5, 6],
        rules: payload.rules || []
      };

      if (env && env.RULES_DB && typeof env.RULES_DB.put === "function") {
        const stateJSON = JSON.stringify(newState);
        // บันทึกทั้ง Version Snapshot และ Latest Key เสมอ
        await env.RULES_DB.put(`MDM_STATE_V${nextVersion}`, stateJSON);
        await env.RULES_DB.put("MDM_LATEST_STATE", stateJSON);
        await env.RULES_DB.put("MDM_CURRENT_VERSION", nextVersion.toString());
        
        return new Response(JSON.stringify({ 
          status: "success", 
          message: `บันทึก Master Data สำเร็จ (v${nextVersion})`, 
          newVersion: nextVersion 
        }), { headers: corsHeaders });
      }

      return new Response(JSON.stringify({ 
        status: "success", 
        message: "บันทึกเรียบร้อย (โหมดทดสอบไม่มี KV)", 
        newVersion: nextVersion 
      }), { headers: corsHeaders });
    }

    if (path === "/fetchExcel" && request.method === "POST") {
      if (!authData) return new Response("Unauthorized", { status: 401, headers: corsHeaders });
      if (env && env.ASSETS && typeof env.ASSETS.fetch === "function") {
        const assetUrl = new URL("/data.xlsx", request.url);
        const res = await env.ASSETS.fetch(assetUrl);
        if (res.ok) {
          const buf = await res.arrayBuffer();
          return new Response(buf, { headers: { ...corsHeaders, "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" } });
        }
      }
      return new Response("File not found", { status: 404, headers: corsHeaders });
    }

    return new Response(JSON.stringify({ status: "error", message: `Route Not Found (${path})` }), { status: 404, headers: corsHeaders });

  } catch (err) {
    return new Response(JSON.stringify({ status: "error", message: err.message || "Internal Server Error" }), { 
      status: 500, 
      headers: corsHeaders 
    });
  }
}