import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

// All icons are drawn centered around (120,120) in a 240x240 canvas, stroke-based, bold and simple
// so they stay legible when displayed at ~64px in the evidence list.
const ICONS = {
  bottle: (c) => `
    <rect x="106" y="66" width="28" height="14" rx="4" fill="none" stroke="${c}" stroke-width="8"/>
    <path d="M96 90 h48 a8 8 0 0 1 8 8 v56 a10 10 0 0 1 -10 10 h-44 a10 10 0 0 1 -10 -10 v-56 a8 8 0 0 1 8 -8 z" fill="none" stroke="${c}" stroke-width="8" stroke-linejoin="round"/>
    <path d="M96 118 h48" stroke="${c}" stroke-width="6"/>`,
  cap: (c) => `
    <path d="M120 78 l64 26 -64 26 -64 -26 z" fill="none" stroke="${c}" stroke-width="8" stroke-linejoin="round"/>
    <path d="M92 116 v28 c0 10 12 18 28 18 s28 -8 28 -18 v-28" fill="none" stroke="${c}" stroke-width="8" stroke-linecap="round"/>
    <path d="M184 104 v34" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`,
  fork: (c) => `
    <path d="M100 66 v40 a12 12 0 0 0 24 0 v-40 M112 66 v46" stroke="${c}" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M112 112 v62" stroke="${c}" stroke-width="8" stroke-linecap="round"/>
    <path d="M150 66 v50 a10 10 0 0 0 10 10 v48" stroke="${c}" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M150 66 v34 M170 66 v34" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`,
  house: (c) => `
    <path d="M76 128 l44 -40 44 40" fill="none" stroke="${c}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M90 118 v56 a6 6 0 0 0 6 6 h48 a6 6 0 0 0 6 -6 v-56" fill="none" stroke="${c}" stroke-width="8" stroke-linejoin="round"/>
    <rect x="110" y="146" width="20" height="34" fill="none" stroke="${c}" stroke-width="7"/>`,
  diamond: (c) => `
    <path d="M88 100 h64 l24 28 -56 54 -56 -54 z" fill="none" stroke="${c}" stroke-width="8" stroke-linejoin="round"/>
    <path d="M88 100 l32 28 32 -28 M60 128 h120 M120 128 l-32 54 M120 128 l32 54" stroke="${c}" stroke-width="5" fill="none" stroke-linejoin="round"/>`,
  car: (c) => `
    <path d="M64 150 l14 -32 a10 10 0 0 1 9 -6 h66 a10 10 0 0 1 9 6 l14 32" fill="none" stroke="${c}" stroke-width="8" stroke-linejoin="round"/>
    <rect x="56" y="150" width="128" height="30" rx="10" fill="none" stroke="${c}" stroke-width="8"/>
    <circle cx="88" cy="182" r="12" fill="none" stroke="${c}" stroke-width="8"/>
    <circle cx="152" cy="182" r="12" fill="none" stroke="${c}" stroke-width="8"/>`,
  hardhat: (c) => `
    <path d="M60 148 a60 60 0 0 1 120 0" fill="none" stroke="${c}" stroke-width="8" stroke-linecap="round"/>
    <path d="M48 148 h144" stroke="${c}" stroke-width="8" stroke-linecap="round"/>
    <path d="M120 84 v18" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`,
  block: (c) => `
    <rect x="66" y="128" width="44" height="44" rx="8" fill="none" stroke="${c}" stroke-width="8"/>
    <rect x="130" y="128" width="44" height="44" rx="8" fill="none" stroke="${c}" stroke-width="8"/>
    <rect x="98" y="66" width="44" height="44" rx="8" fill="none" stroke="${c}" stroke-width="8"/>`,
  book: (c) => `
    <path d="M120 84 c-14 -12 -38 -12 -54 -4 v78 c16 -8 40 -8 54 4 c14 -12 38 -12 54 -4 v-78 c-16 -8 -40 -8 -54 4 z" fill="none" stroke="${c}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M120 84 v78" stroke="${c}" stroke-width="7"/>`,
  briefcase: (c) => `
    <rect x="60" y="104" width="120" height="76" rx="10" fill="none" stroke="${c}" stroke-width="8"/>
    <path d="M96 104 v-14 a10 10 0 0 1 10 -10 h28 a10 10 0 0 1 10 10 v14" fill="none" stroke="${c}" stroke-width="8" stroke-linejoin="round"/>
    <path d="M60 140 h120" stroke="${c}" stroke-width="7"/>`,
  megaphone: (c) => `
    <path d="M70 118 l56 -30 v76 l-56 -30 z" fill="none" stroke="${c}" stroke-width="8" stroke-linejoin="round"/>
    <path d="M126 88 l38 -16 v92 l-38 -16" fill="none" stroke="${c}" stroke-width="8" stroke-linejoin="round"/>
    <path d="M70 118 h-14 a10 10 0 0 0 0 20 h14" fill="none" stroke="${c}" stroke-width="8"/>
    <path d="M92 148 l6 26" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`,
  leaf: (c) => `
    <path d="M120 64 c30 36 48 64 48 86 a48 48 0 0 1 -96 0 c0 -22 18 -50 48 -86 z" fill="none" stroke="${c}" stroke-width="8" stroke-linejoin="round"/>`,
};

function escapeXml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildThumb({ icon, accent, label }) {
  const iconFn = ICONS[icon];
  if (!iconFn) throw new Error(`Unknown icon: ${icon}`);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240" role="img" aria-label="${escapeXml(label)}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#123f59"/>
      <stop offset="100%" stop-color="#081f2e"/>
    </linearGradient>
    <radialGradient id="glow" cx="30%" cy="25%" r="70%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="4" y="4" width="232" height="232" rx="40" fill="url(#bg)"/>
  <rect x="4" y="4" width="232" height="232" rx="40" fill="url(#glow)"/>
  <rect x="4" y="4" width="232" height="232" rx="40" fill="none" stroke="#ffffff" stroke-opacity="0.10" stroke-width="2"/>
  ${iconFn(accent)}
</svg>
`;
}

const ACCENT = {
  "paid-media-strategy": "#d3ff3a",
  "lead-generation-funnel": "#8bd3f5",
  "performance-analysis": "#ffc769",
  "account-integrated-management": "#b7a7ff",
  "brand-content-creative": "#ff9ccf",
};

const CASES = [
  { slug: "personalized-fragrance-launch", icon: "bottle", variant: "paid-media-strategy", label: "Personalized Fragrance" },
  { slug: "skills-education-lead-generation", icon: "cap", variant: "lead-generation-funnel", label: "Skills Education" },
  { slug: "buffet-local-customer-growth", icon: "fork", variant: "paid-media-strategy", label: "Buffet Restaurant" },
  { slug: "real-estate-dual-lead-flows", icon: "house", variant: "performance-analysis", label: "Real Estate" },
  { slug: "jewelry-customer-acquisition", icon: "diamond", variant: "account-integrated-management", label: "Jewelry Retail" },
  { slug: "restaurant-local-engagement", icon: "fork", variant: "paid-media-strategy", label: "Restaurant" },
  { slug: "preschool-enrollment-campaign", icon: "block", variant: "lead-generation-funnel", label: "Private Preschool" },
  { slug: "automotive-customer-inquiries", icon: "car", variant: "lead-generation-funnel", label: "Automotive" },
  { slug: "automotive-messages-engagement", icon: "car", variant: "performance-analysis", label: "Automotive" },
  { slug: "construction-customer-inquiries", icon: "hardhat", variant: "account-integrated-management", label: "Construction" },
  { slug: "korean-education-enrollment", icon: "book", variant: "lead-generation-funnel", label: "Korean Education" },
  { slug: "business-services-brand-identity", icon: "briefcase", variant: "brand-content-creative", label: "Business Services" },
  { slug: "marketing-services-brand-content", icon: "megaphone", variant: "brand-content-creative", label: "Marketing Services" },
  { slug: "dermatology-multi-format-content", icon: "leaf", variant: "brand-content-creative", label: "Dermatology Clinic" },
];

for (const c of CASES) {
  const svg = buildThumb({ icon: c.icon, accent: ACCENT[c.variant], label: c.label });
  const file = `public/work/${c.slug}/thumb-brand.svg`;
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, svg, "utf8");
  console.log("wrote", file);
}
