// Builds one watercolor wash as an SVG string. Used by gen-brand-set.mjs.
//
// Layer 1 — wet-on-wet wash: large, heavily blurred color fields that melt into each other.
// Layer 2 — pigment edges: a few patches drawn mostly as dried "tide lines" with a faint body.
// Layer 3 — irregular mask so the whole wash fades into bare paper at the top/right.

const edgeFilter = (id, seed) => `
    <filter id="${id}" x="-40%" y="-40%" width="180%" height="180%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.007" numOctaves="5" seed="${seed}" result="warp"/>
      <feDisplacementMap in="SourceGraphic" in2="warp" scale="150" xChannelSelector="R" yChannelSelector="G" result="shape"/>
      <feGaussianBlur in="shape" stdDeviation="2.5" result="soft"/>
      <feMorphology in="soft" operator="erode" radius="14" result="core"/>
      <feGaussianBlur in="core" stdDeviation="12" result="coreSoft"/>
      <feComposite in="soft" in2="coreSoft" operator="out" result="band"/>
      <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="${seed + 60}" result="breakNoise"/>
      <feColorMatrix in="breakNoise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  3 0 0 0 -1.1" result="breakMask"/>
      <feComposite in="band" in2="breakMask" operator="in" result="brokenBand"/>
      <feGaussianBlur in="brokenBand" stdDeviation="1.2" result="edgeFinal"/>
      <feGaussianBlur in="shape" stdDeviation="24" result="body"/>
      <feComponentTransfer in="body" result="bodyFaint"><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
      <feMerge><feMergeNode in="bodyFaint"/><feMergeNode in="edgeFinal"/></feMerge>
    </filter>`;

// how far each patch spreads — raise to widen every color field at once
const SPREAD = { wash: 1.4, edges: 1.3 };

const DEFAULT_BLOOMS = [[640, 740, 80, 56], [1000, 560, 70, 50], [420, 330, 50, 40]];
const DEFAULT_VEIN = "M260 420 C 360 500, 440 560, 540 640 S 700 760, 780 900";

export function build({
  paper, wash, edges, streak,
  wetSeed = 17, mottleSeed = 51, outlineSeed = 23,
  blooms = DEFAULT_BLOOMS, vein = DEFAULT_VEIN,
  spread = [-240, 10, 1800, 1260], // [x, y, w, h] of the area the wash bleeds into
}) {
  const ellipse = ([cx, cy, rx, ry, color, op], extra = "", k = 1) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="${Math.round(rx * k)}" ry="${Math.round(ry * k)}" fill="${color}" opacity="${op}" ${extra}/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  <defs>
    <filter id="wet" x="-50%" y="-50%" width="200%" height="200%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.004" numOctaves="4" seed="${wetSeed}" result="warp"/>
      <feDisplacementMap in="SourceGraphic" in2="warp" scale="260" xChannelSelector="R" yChannelSelector="G" result="shape"/>
      <feGaussianBlur in="shape" stdDeviation="48"/>
    </filter>
    <filter id="mottle" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="3" seed="${mottleSeed}"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.4 -0.45"/>
      <feGaussianBlur stdDeviation="20"/>
    </filter>
    <filter id="outline" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="4" seed="${outlineSeed}" result="warp"/>
      <feDisplacementMap in="SourceGraphic" in2="warp" scale="280" xChannelSelector="R" yChannelSelector="G"/>
      <feGaussianBlur stdDeviation="36"/>
    </filter>
    <mask id="spread" maskUnits="userSpaceOnUse" x="0" y="0" width="1600" height="1000">
      <rect width="1600" height="1000" fill="#000"/>
      <rect x="${spread[0]}" y="${spread[1]}" width="${spread[2]}" height="${spread[3]}" rx="280" fill="#fff" filter="url(#outline)"/>
    </mask>${edges.map((e, i) => edgeFilter(`edge${i}`, e[6])).join("")}
    <filter id="bloom" x="-60%" y="-60%" width="220%" height="220%">
      <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="3" seed="9" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="70" xChannelSelector="R" yChannelSelector="G"/>
      <feGaussianBlur stdDeviation="22"/>
    </filter>
    <filter id="streak" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="22" xChannelSelector="R" yChannelSelector="G" result="s"/>
      <feGaussianBlur in="s" stdDeviation="1.3"/>
    </filter>
  </defs>

  <rect width="1600" height="1000" fill="${paper}"/>

  <g mask="url(#spread)">
    <!-- layer 1: wet-on-wet wash -->
    <g filter="url(#wet)">
      ${wash.map((w) => ellipse(w, w[6] === "normal" ? "" : 'style="mix-blend-mode:multiply"', SPREAD.wash)).join("\n      ")}
    </g>

    <!-- uneven pigment density: soft pale patches inside the wash -->
    <rect width="1600" height="1000" filter="url(#mottle)" opacity="0.55"/>

    <!-- layer 2: dried pigment edges -->
    <g style="mix-blend-mode:multiply">
      ${edges.map((e, i) => ellipse(e, `filter="url(#edge${i})"`, SPREAD.edges)).join("\n      ")}
    </g>

    <!-- blooms: soft pale spots where water pushed pigment away -->
    <g fill="${paper}" opacity="0.38" filter="url(#bloom)">
      ${blooms.map(([cx, cy, rx, ry]) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"/>`).join("\n      ")}
    </g>

    <!-- faint pigment veins -->
    <g fill="none" stroke="${streak}" stroke-linecap="round" opacity="0.2" filter="url(#streak)" style="mix-blend-mode:multiply">
      <path d="${vein}" stroke-width="1.8"/>
    </g>
  </g>
</svg>
`;
}
