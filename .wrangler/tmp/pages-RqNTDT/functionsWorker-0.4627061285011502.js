var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// api/[[path]].js
var SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
};
var DEFAULT_V80_DATA = {
  version: 80,
  lastModified: "2026-08-21T07:00:00.000Z",
  groups: [
    { key: "spec", name: "\u{1F4DC} \u0E04\u0E38\u0E13\u0E27\u0E38\u0E12\u0E34\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07/\u0E43\u0E1A\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28", color: "#0d9488" },
    { key: "acc", name: "\u{1F9EE} \u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35", color: "#16a34a" },
    { key: "law", name: "\u2696\uFE0F \u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22", color: "#dc2626" },
    { key: "eco", name: "\u{1F4C8} \u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19\u0E40\u0E28\u0E23\u0E29\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", color: "#d97706" },
    { key: "comp", name: "\u{1F4BB} \u0E2A\u0E32\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32\u0E01\u0E32\u0E23\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C/\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35", color: "#9333ea" },
    { key: "stat", name: "\u{1F4CA} \u0E2A\u0E32\u0E22\u0E2A\u0E16\u0E34\u0E15\u0E34/\u0E27\u0E34\u0E17\u0E22\u0E32\u0E01\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25/\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", color: "#0284c7" },
    { key: "eng", name: "\u2699\uFE0F \u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21", color: "#4b5563" },
    { key: "gov", name: "\u{1F3DB}\uFE0F \u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19\u0E23\u0E31\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C/\u0E23\u0E1B\u0E28./\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22", color: "#b91c1c" },
    { key: "edu", name: "\u{1F4DA} \u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19\u0E04\u0E23\u0E38\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C/\u0E28\u0E36\u0E01\u0E29\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", color: "#059669" },
    { key: "health", name: "\u{1FA7A} \u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E2A\u0E38\u0E02/\u0E01\u0E32\u0E23\u0E41\u0E1E\u0E17\u0E22\u0E4C", color: "#0891b2" },
    { key: "biz", name: "\u{1F454} \u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08/\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23", color: "#2563eb" }
  ],
  specificQualifications: [
    { token: "\u0E40\u0E19\u0E15\u0E34\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15", group: "spec", aliases: ["\u0E40\u0E19\u0E15\u0E34\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15\u0E44\u0E17\u0E22"] },
    { token: "\u0E27\u0E34\u0E0A\u0E32\u0E27\u0E48\u0E32\u0E04\u0E27\u0E32\u0E21", group: "spec", aliases: ["\u0E15\u0E31\u0E4B\u0E27\u0E17\u0E19\u0E32\u0E22", "\u0E2A\u0E20\u0E32\u0E17\u0E19\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21", "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E19\u0E35\u0E22\u0E1A\u0E31\u0E15\u0E23\u0E27\u0E34\u0E0A\u0E32\u0E27\u0E48\u0E32\u0E04\u0E27\u0E32\u0E21", "\u0E43\u0E1A\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E17\u0E19\u0E32\u0E22", "\u0E17\u0E19\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21"] },
    { token: "\u0E01.\u0E28\u0E1B.", group: "spec", aliases: ["\u0E01\u0E28\u0E1B", "\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07", "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E19\u0E35\u0E22\u0E1A\u0E31\u0E15\u0E23\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07"] },
    { token: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E19\u0E35\u0E22\u0E1A\u0E31\u0E15\u0E23\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15\u0E17\u0E32\u0E07\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22\u0E21\u0E2B\u0E32\u0E0A\u0E19", group: "spec", aliases: ["\u0E1B\u0E23\u0E21.", "\u0E1B\u0E23\u0E21"] },
    { token: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E19\u0E35\u0E22\u0E1A\u0E31\u0E15\u0E23\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35", group: "spec", aliases: ["\u0E1B.\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35"] },
    { token: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E19\u0E35\u0E22\u0E1A\u0E31\u0E15\u0E23\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15\u0E27\u0E34\u0E0A\u0E32\u0E0A\u0E35\u0E1E\u0E04\u0E23\u0E39", group: "spec", aliases: ["\u0E27\u0E38\u0E12\u0E34\u0E1A\u0E31\u0E15\u0E23\u0E27\u0E34\u0E0A\u0E32\u0E0A\u0E35\u0E1E\u0E04\u0E23\u0E39", "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E19\u0E35\u0E22\u0E1A\u0E31\u0E15\u0E23\u0E27\u0E34\u0E0A\u0E32\u0E0A\u0E35\u0E1E\u0E04\u0E23\u0E39", "\u0E27\u0E34\u0E0A\u0E32\u0E0A\u0E35\u0E1E\u0E04\u0E23\u0E39"] },
    { token: "cisco certified", group: "spec", aliases: ["ccna", "cisco certified network associate"] }
  ],
  policyOverrides: [
    { pattern: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19", group: "biz", reason: "POLICY_FINANCIAL_ENGINEERING_TO_BIZ" },
    { pattern: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E21\u0E31\u0E25\u0E15\u0E34\u0E21\u0E35\u0E40\u0E14\u0E35\u0E22", group: "comp", reason: "POLICY_MULTIMEDIA_ENGINEERING_TO_COMP" }
  ],
  degreeMajorCombinations: [
    { degreeToken: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", majorToken: "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\u0E17\u0E32\u0E07\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", group: "biz", reason: "COMBO_BIZ_IT_HYBRID" },
    { degreeToken: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", majorToken: "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", group: "biz", reason: "COMBO_BIZ_IT_HYBRID" },
    { degreeToken: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", majorToken: "\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\u0E17\u0E32\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C", group: "biz", reason: "COMBO_BIZ_CIS_HYBRID" },
    { degreeToken: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", majorToken: "\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28", group: "biz", reason: "COMBO_BIZ_IS_HYBRID" },
    { degreeToken: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", majorToken: "\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", group: "biz", reason: "COMBO_BIZ_COMP" },
    { degreeToken: "\u0E1A\u0E31\u0E0D\u0E0A\u0E35", majorToken: "\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E0A\u0E35", group: "acc", reason: "COMBO_ACCOUNTING" },
    { degreeToken: "\u0E19\u0E34\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23", majorToken: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E07\u0E32\u0E19\u0E22\u0E38\u0E15\u0E34\u0E18\u0E23\u0E23\u0E21", group: "law", reason: "COMBO_LAW_JUSTICE" },
    { degreeToken: "\u0E23\u0E31\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23", majorToken: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E07\u0E32\u0E19\u0E22\u0E38\u0E15\u0E34\u0E18\u0E23\u0E23\u0E21", group: "gov", reason: "COMBO_GOV_JUSTICE" },
    { degreeToken: "\u0E23\u0E31\u0E10\u0E1B\u0E23\u0E30\u0E28\u0E32\u0E2A\u0E19\u0E28\u0E32\u0E2A\u0E15\u0E23", majorToken: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E07\u0E32\u0E19\u0E22\u0E38\u0E15\u0E34\u0E18\u0E23\u0E23\u0E21", group: "gov", reason: "COMBO_GOV_JUSTICE" },
    { degreeToken: "\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23", majorToken: "\u0E27\u0E34\u0E17\u0E22\u0E32\u0E01\u0E32\u0E23\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C", group: "comp", reason: "COMBO_COMPUTER_SCIENCE" },
    { degreeToken: "\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23", majorToken: "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28", group: "comp", reason: "COMBO_IT" },
    { degreeToken: "\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23", majorToken: "\u0E2A\u0E16\u0E34\u0E15\u0E34", group: "stat", reason: "COMBO_STATISTICS" },
    { degreeToken: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E28\u0E32\u0E2A\u0E15\u0E23", majorToken: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C", group: "comp", reason: "COMBO_ENG_COMP" },
    { degreeToken: "\u0E04\u0E23\u0E38\u0E28\u0E32\u0E2A\u0E15\u0E23", majorToken: "\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C", group: "edu", reason: "COMBO_EDU_COMP" },
    { degreeToken: "\u0E28\u0E36\u0E01\u0E29\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23", majorToken: "\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C", group: "edu", reason: "COMBO_EDU_COMP" }
  ],
  compoundMajorRules: [
    { pattern: "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\u0E17\u0E32\u0E07\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", group: "biz", specificity: 100 },
    { pattern: "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", group: "biz", specificity: 100 },
    { pattern: "\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\u0E17\u0E32\u0E07\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C", group: "biz", specificity: 100 },
    { pattern: "\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", group: "biz", specificity: 100 },
    { pattern: "\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", group: "biz", specificity: 100 },
    { pattern: "\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E0A\u0E35", group: "acc", specificity: 95 },
    { pattern: "\u0E40\u0E28\u0E23\u0E29\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19", group: "eco", specificity: 100 },
    { pattern: "\u0E40\u0E28\u0E23\u0E29\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", group: "eco", specificity: 100 },
    { pattern: "\u0E27\u0E34\u0E17\u0E22\u0E32\u0E01\u0E32\u0E23\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C", group: "comp", specificity: 100 },
    { pattern: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C", group: "comp", specificity: 100 },
    { pattern: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E0B\u0E2D\u0E1F\u0E15\u0E4C\u0E41\u0E27\u0E23\u0E4C", group: "comp", specificity: 100 },
    { pattern: "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23", group: "comp", specificity: 100 },
    { pattern: "\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E28\u0E36\u0E01\u0E29\u0E32", group: "edu", specificity: 100 },
    { pattern: "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", group: "edu", specificity: 100 },
    { pattern: "\u0E27\u0E34\u0E17\u0E22\u0E32\u0E01\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25", group: "stat", specificity: 100 }
  ],
  exactMajorRules: [
    { pattern: "\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E0A\u0E35", group: "acc" },
    { pattern: "\u0E1A\u0E31\u0E0D\u0E0A\u0E35", group: "acc" },
    { pattern: "\u0E19\u0E34\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", group: "law" },
    { pattern: "\u0E40\u0E28\u0E23\u0E29\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", group: "eco" },
    { pattern: "\u0E27\u0E34\u0E17\u0E22\u0E32\u0E01\u0E32\u0E23\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C", group: "comp" },
    { pattern: "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28", group: "comp" },
    { pattern: "Computer Science", group: "comp" },
    { pattern: "Information Technology", group: "comp" },
    { pattern: "Cyber Security", group: "comp" },
    { pattern: "\u0E2A\u0E16\u0E34\u0E15\u0E34", group: "stat" },
    { pattern: "Data Science", group: "stat" },
    { pattern: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", group: "eng" },
    { pattern: "\u0E23\u0E31\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", group: "gov" },
    { pattern: "\u0E23\u0E31\u0E10\u0E1B\u0E23\u0E30\u0E28\u0E32\u0E2A\u0E19\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", group: "gov" },
    { pattern: "\u0E04\u0E23\u0E38\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", group: "edu" },
    { pattern: "\u0E28\u0E36\u0E01\u0E29\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", group: "edu" },
    { pattern: "\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E2A\u0E38\u0E02\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", group: "health" },
    { pattern: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08", group: "biz" },
    { pattern: "\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23", group: "biz" },
    { pattern: "\u0E01\u0E32\u0E23\u0E15\u0E25\u0E32\u0E14", group: "biz" },
    { pattern: "\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19", group: "biz" }
  ],
  exactDegreeRules: [
    { pattern: "\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15", group: "acc" },
    { pattern: "\u0E19\u0E34\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15", group: "law" },
    { pattern: "\u0E40\u0E28\u0E23\u0E29\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15", group: "eco" },
    { pattern: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15", group: "eng" },
    { pattern: "\u0E04\u0E23\u0E38\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15", group: "edu" },
    { pattern: "\u0E28\u0E36\u0E01\u0E29\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15", group: "edu" },
    { pattern: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15", group: "biz" },
    { pattern: "\u0E23\u0E31\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15", group: "gov" },
    { pattern: "\u0E23\u0E31\u0E10\u0E1B\u0E23\u0E30\u0E28\u0E32\u0E2A\u0E19\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15", group: "gov" },
    { pattern: "\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E2A\u0E38\u0E02\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15", group: "health" }
  ],
  exclusions: {
    biz: ["\u0E40\u0E28\u0E23\u0E29\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", "\u0E40\u0E28\u0E23\u0E29\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23", "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21", "\u0E04\u0E23\u0E38\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", "\u0E28\u0E36\u0E01\u0E29\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", "\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32"],
    acc: ["\u0E40\u0E28\u0E23\u0E29\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", "\u0E40\u0E28\u0E23\u0E29\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23"],
    comp: ["\u0E04\u0E23\u0E38\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", "\u0E28\u0E36\u0E01\u0E29\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", "\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", "\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E28\u0E36\u0E01\u0E29\u0E32"],
    eng: ["\u0E04\u0E23\u0E38\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", "\u0E28\u0E36\u0E01\u0E29\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", "\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C"],
    stat: ["\u0E04\u0E23\u0E38\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", "\u0E28\u0E36\u0E01\u0E29\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", "\u0E40\u0E28\u0E23\u0E29\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C"],
    gov: ["\u0E04\u0E23\u0E38\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", "\u0E28\u0E36\u0E01\u0E29\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C"]
  },
  genericKeywords: [
    { keyword: "\u0E1A\u0E31\u0E0D\u0E0A\u0E35", group: "acc" },
    { keyword: "\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22", group: "law" },
    { keyword: "\u0E40\u0E28\u0E23\u0E29\u0E10\u0E01\u0E34\u0E08", group: "eco" },
    { keyword: "\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C", group: "comp" },
    { keyword: "\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28", group: "comp" },
    { keyword: "software", group: "comp" },
    { keyword: "\u0E2A\u0E16\u0E34\u0E15\u0E34", group: "stat" },
    { keyword: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21", group: "eng" },
    { keyword: "\u0E23\u0E31\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", group: "gov" },
    { keyword: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E23\u0E31\u0E10\u0E01\u0E34\u0E08", group: "gov" },
    { keyword: "\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", group: "edu" },
    { keyword: "\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E2A\u0E38\u0E02", group: "health" },
    { keyword: "\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23", group: "biz" },
    { keyword: "\u0E01\u0E32\u0E23\u0E15\u0E25\u0E32\u0E14", group: "biz" },
    { keyword: "\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19", group: "biz" }
  ],
  personOverrides: {},
  tierOverrides: {},
  rules: []
};
var FALLBACK_JWT_SECRET = "SBT_SUPER_SECRET_KEY_AUDIT_2026_X99";
async function generateToken(user, secret) {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const jti = crypto.randomUUID();
  const payload = btoa(JSON.stringify({ iss: "stg-mdm", sub: user.u, role: user.role, jti, exp: Date.now() + 8 * 3600 * 1e3 }));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${header}.${payload}`));
  const signature = btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  return `${header}.${payload}.${signature}`;
}
__name(generateToken, "generateToken");
async function verifyToken(authHeader, secret) {
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  const token = authHeader.substring(7).trim();
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  try {
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
    const expectedSig = Uint8Array.from(atob(parts[2].replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
    const valid = await crypto.subtle.verify("HMAC", key, expectedSig, new TextEncoder().encode(`${parts[0]}.${parts[1]}`));
    if (!valid) return null;
    const data = JSON.parse(atob(parts[1]));
    if (Date.now() > data.exp) return null;
    return data;
  } catch (e) {
    return null;
  }
}
__name(verifyToken, "verifyToken");
async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const origin = request.headers.get("Origin") || "*";
  const jwtSecret = env && env.JWT_SECRET ? env.JWT_SECRET : FALLBACK_JWT_SECRET;
  const corsHeaders = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json"
  };
  if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders, status: 204 });
  const path = url.pathname.replace(/^\/api/, "").replace(/\/$/, "") || "/";
  try {
    if (path === "/login" && request.method === "POST") {
      const body = await request.json().catch(() => ({}));
      const u = (body.u || "").trim();
      const p = (body.p || "").trim();
      let isAuthenticated = false, userRole = "user";
      if (u === "admin" && p === "admin" || u === "user1" && p === "user1") {
        isAuthenticated = true;
        userRole = u === "admin" ? "admin" : "user";
      }
      if (!isAuthenticated && env && env.MDM_USERS_JSON) {
        try {
          const usersDB = JSON.parse(env.MDM_USERS_JSON);
          if (usersDB[u]) {
            isAuthenticated = true;
            userRole = usersDB[u].role || "user";
          }
        } catch (e) {
        }
      }
      if (isAuthenticated) {
        const token = await generateToken({ u, role: userRole }, jwtSecret);
        return new Response(JSON.stringify({ status: "success", role: userRole, u, token }), {
          headers: { ...corsHeaders, ...SECURITY_HEADERS }
        });
      }
      return new Response(JSON.stringify({ status: "error", message: "Username \u0E2B\u0E23\u0E37\u0E2D Password \u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07" }), {
        status: 401,
        headers: { ...corsHeaders, ...SECURITY_HEADERS }
      });
    }
    const authData = await verifyToken(request.headers.get("Authorization"), jwtSecret);
    if (path === "/logout" && request.method === "POST") {
      return new Response(JSON.stringify({ status: "success", message: "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22" }), { headers: corsHeaders });
    }
    if (path === "/getRules" && request.method === "GET") {
      if (!authData) return new Response(JSON.stringify({ status: "error", message: "Unauthorized" }), { status: 401, headers: corsHeaders });
      let rulesDataStr = null;
      if (env && env.RULES_DB && typeof env.RULES_DB.get === "function") {
        const currentVersion = await env.RULES_DB.get("MDM_CURRENT_VERSION") || "80";
        rulesDataStr = await env.RULES_DB.get(`MDM_STATE_V${currentVersion}`);
      }
      if (!rulesDataStr) {
        return new Response(JSON.stringify(DEFAULT_V80_DATA), { headers: corsHeaders });
      }
      return new Response(rulesDataStr, { headers: corsHeaders });
    }
    if (path === "/saveRules" && request.method === "POST") {
      if (!authData || authData.role !== "admin") {
        return new Response(JSON.stringify({ status: "error", message: "\u{1F512} \u0E2A\u0E07\u0E27\u0E19\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30 Admin \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19" }), { status: 403, headers: corsHeaders });
      }
      const payload = await request.json();
      const currentVersion = env && env.RULES_DB && typeof env.RULES_DB.get === "function" ? parseInt(await env.RULES_DB.get("MDM_CURRENT_VERSION") || "80") : 80;
      const nextVersion = currentVersion + 1;
      const DEFAULT_V80_DATA2 = {
        version: 80,
        lastModified: "2026-08-21T07:00:00.000Z",
        // ... (กลุ่มข้อมูลอื่นๆ เหมือนเดิม)
        personOverrides: {},
        tierOverrides: {},
        tierDefaults: [1, 2, 3, 4, 5, 6],
        // 🛡️ เพิ่มตรงนี้ให้มีค่าตั้งต้นเสมอ
        rules: []
      };
      const newState = {
        version: nextVersion,
        lastModified: (/* @__PURE__ */ new Date()).toISOString(),
        modifiedBy: authData.u,
        groups: payload.groups || DEFAULT_V80_DATA2.groups,
        specificQualifications: payload.specificQualifications || DEFAULT_V80_DATA2.specificQualifications,
        policyOverrides: payload.policyOverrides || DEFAULT_V80_DATA2.policyOverrides,
        degreeMajorCombinations: payload.degreeMajorCombinations || DEFAULT_V80_DATA2.degreeMajorCombinations,
        compoundMajorRules: payload.compoundMajorRules || DEFAULT_V80_DATA2.compoundMajorRules,
        exactMajorRules: payload.exactMajorRules || DEFAULT_V80_DATA2.exactMajorRules,
        exactDegreeRules: payload.exactDegreeRules || DEFAULT_V80_DATA2.exactDegreeRules,
        genericKeywords: payload.genericKeywords || DEFAULT_V80_DATA2.genericKeywords,
        exclusions: payload.exclusions || DEFAULT_V80_DATA2.exclusions,
        personOverrides: payload.personOverrides || {},
        tierOverrides: payload.tierOverrides || {},
        tierDefaults: payload.tierDefaults || [1, 2, 3, 4, 5, 6],
        // 🛡️ เพิ่มบรรทัดนี้ เพื่อเก็บบันทึกสถานะ 10 ระดับลง KV 
        rules: payload.rules || []
      };
      if (env && env.RULES_DB && typeof env.RULES_DB.put === "function") {
        await env.RULES_DB.put(`MDM_STATE_V${nextVersion}`, JSON.stringify(newState));
        await env.RULES_DB.put("MDM_CURRENT_VERSION", nextVersion.toString());
        return new Response(JSON.stringify({ status: "success", message: `\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 Master Data \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 (v${nextVersion})`, newVersion: nextVersion }), { headers: corsHeaders });
      }
      return new Response(JSON.stringify({ status: "success", message: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22 (\u0E42\u0E2B\u0E21\u0E14\u0E17\u0E14\u0E2A\u0E2D\u0E1A)", newVersion: nextVersion }), { headers: corsHeaders });
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
__name(onRequest, "onRequest");

// ../.wrangler/tmp/pages-RqNTDT/functionsRoutes-0.16232360471676777.mjs
var routes = [
  {
    routePath: "/api/:path*",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest]
  }
];

// ../../../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../../../../../../../../AppData/Roaming/npm/node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
export {
  pages_template_worker_default as default
};
