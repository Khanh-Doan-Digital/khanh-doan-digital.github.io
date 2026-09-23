import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const ICONS = {
  wallet: (cx, cy, color) => `
    <rect x="${cx - 13}" y="${cy - 9}" width="26" height="18" rx="4" fill="none" stroke="${color}" stroke-width="2.2"/>
    <path d="M${cx - 13} ${cy - 4} h26" stroke="${color}" stroke-width="2.2"/>
    <circle cx="${cx + 7}" cy="${cy + 3}" r="2" fill="${color}"/>`,
  eye: (cx, cy, color) => `
    <path d="M${cx - 15} ${cy} c 5 -9 25 -9 30 0 c -5 9 -25 9 -30 0 z" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round"/>
    <circle cx="${cx}" cy="${cy}" r="5" fill="none" stroke="${color}" stroke-width="2.2"/>`,
  formPlus: (cx, cy, color) => `
    <rect x="${cx - 12}" y="${cy - 13}" width="20" height="26" rx="3" fill="none" stroke="${color}" stroke-width="2.2"/>
    <path d="M${cx - 7} ${cy - 6} h10 M${cx - 7} ${cy} h10 M${cx - 7} ${cy + 6} h6" stroke="${color}" stroke-width="2"/>
    <circle cx="${cx + 12}" cy="${cy + 10}" r="8" fill="${color}"/>
    <path d="M${cx + 12} ${cy + 6} v8 M${cx + 8} ${cy + 10} h8" stroke="#0e3b53" stroke-width="2"/>`,
  tag: (cx, cy, color) => `
    <path d="M${cx - 13} ${cy - 10} h14 l12 12 -14 14 -12 -12 z" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round"/>
    <circle cx="${cx - 4}" cy="${cy - 1}" r="2.2" fill="${color}"/>`,
  spark: (cx, cy, color) => `
    <path d="M${cx} ${cy - 15} l3.5 10 10 3.5 -10 3.5 -3.5 10 -3.5 -10 -10 -3.5 10 -3.5 z" fill="${color}" fill-opacity="0.9"/>`,
  chat: (cx, cy, color) => `
    <path d="M${cx - 14} ${cy - 10} h24 a6 6 0 0 1 6 6 v10 a6 6 0 0 1 -6 6 h-14 l-8 8 v-8 h-2 a6 6 0 0 1 -6 -6 v-10 a6 6 0 0 1 6 -6 z" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round"/>`,
};

function pickIcon(labelEn) {
  const l = labelEn.toLowerCase();
  if (l.includes("spend")) return "wallet";
  if (l.includes("impression")) return "eye";
  if (l.includes("registration")) return "formPlus";
  if (l.includes("cpa")) return "tag";
  if (l.includes("engagement")) return "spark";
  if (l.includes("conversation")) return "chat";
  return "chat";
}

function statCard(x, y, w, h, metric, accent) {
  const cx = x + 66;
  const cy = y + 66;
  const icon = ICONS[pickIcon(metric.label.en)](cx, cy, accent);
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="20" fill="url(#panel)" stroke="#ffffff" stroke-opacity="0.10"/>
    <circle cx="${cx}" cy="${cy}" r="30" fill="${accent}" fill-opacity="0.16"/>
    ${icon}
    <text x="${x + 40}" y="${y + h - 96}" font-size="52" font-weight="800" fill="#e9eef3">${escapeXml(metric.value)}</text>
    <text x="${x + 40}" y="${y + h - 56}" font-size="15" font-weight="700" letter-spacing="1.8" fill="#9db3c2">${escapeXml(metric.label.en.toUpperCase())}</text>
  `;
}

function escapeXml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildCover({ caseNumber, categoryLabel, headline, periodLabel, metrics, accent }) {
  const cardY = 377;
  const cardH = 380;
  const cardW = 700;
  const gap = 40;
  const leftX = 80;
  const rightX = leftX + cardW + gap;
  const pillWidth = Math.max(160, periodLabel.length * 10 + 56);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" role="img" aria-label="${escapeXml(headline)} — case cover">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#123f59"/>
      <stop offset="100%" stop-color="#081f2e"/>
    </linearGradient>
    <radialGradient id="glowAccent" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowBlue" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#84b3ce" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#84b3ce" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.03"/>
    </linearGradient>
  </defs>

  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1480" cy="90" r="360" fill="url(#glowAccent)"/>
  <circle cx="60" cy="860" r="320" fill="url(#glowBlue)"/>

  <g font-family="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif">
    <rect x="80" y="66" width="72" height="44" rx="10" fill="${accent}"/>
    <text x="116" y="95" text-anchor="middle" font-size="21" font-weight="700" letter-spacing="0.5" fill="#0e3b53">${caseNumber}</text>

    <text x="168" y="94" font-size="15" font-weight="700" letter-spacing="2.4" fill="${accent}">${escapeXml(categoryLabel.toUpperCase())}</text>

    <rect x="${1520 - pillWidth}" y="62" width="${pillWidth}" height="46" rx="23" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.18"/>
    <text x="1500" y="91" text-anchor="end" font-size="14" font-weight="700" letter-spacing="1.6" fill="#e9eef3">${escapeXml(periodLabel.toUpperCase())}</text>

    <text x="78" y="205" font-size="56" font-weight="800" letter-spacing="-1.2" fill="#e9eef3">${escapeXml(headline)}</text>
    <rect x="80" y="228" width="120" height="6" rx="3" fill="${accent}"/>

    ${statCard(leftX, cardY, cardW, cardH, metrics[0], accent)}
    ${statCard(rightX, cardY, cardW, cardH, metrics[1], accent)}
  </g>
</svg>
`;
}

const CASES = [
  {
    file: "public/work/fertilizer-multi-channel-reach/cover-brand.svg",
    caseNumber: "01",
    categoryLabel: "Multi-platform Reach",
    headline: "Multi-channel Brand Reach",
    periodLabel: "45 days",
    accent: "#d3ff3a",
    metrics: [
      { label: { en: "Media spend" }, value: "VND 854.6M" },
      { label: { en: "Impressions" }, value: "110.4M+" },
    ],
  },
  {
    file: "public/work/nutrition-course-registrations/cover-brand.svg",
    caseNumber: "02",
    categoryLabel: "Lead Generation",
    headline: "Course Registration Growth",
    periodLabel: "Meta 12 months",
    accent: "#8bd3f5",
    metrics: [
      { label: { en: "Website registrations" }, value: "7,705" },
      { label: { en: "Average CPA" }, value: "VND 64,309" },
    ],
  },
  {
    file: "public/work/pet-food-always-on-awareness/cover-brand.svg",
    caseNumber: "06",
    categoryLabel: "Always-on Media",
    headline: "Always-on Brand Awareness",
    periodLabel: "6 months",
    accent: "#b7a7ff",
    metrics: [
      { label: { en: "Meta engagements" }, value: "603,802" },
      { label: { en: "TikTok impressions" }, value: "9.94M" },
    ],
  },
  {
    file: "public/work/yoga-inquiry-generation/cover-brand.svg",
    caseNumber: "12",
    categoryLabel: "Performance Analysis",
    headline: "Yoga Inquiry Generation",
    periodLabel: "4 months",
    accent: "#ffc769",
    metrics: [
      { label: { en: "Conversations" }, value: "423" },
      { label: { en: "Average CPA" }, value: "VND 43,965" },
    ],
  },
];

for (const c of CASES) {
  const svg = buildCover(c);
  mkdirSync(dirname(c.file), { recursive: true });
  writeFileSync(c.file, svg, "utf8");
  console.log("wrote", c.file);
}
