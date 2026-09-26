// Generates the set of brand watercolor washes used as random section backgrounds.
// Same palette + technique as watercolor-brand (brand-1); each layout moves the color
// masses, pink accent, blooms and bleed area so no two sections look alike.
//
//   node docs/watercolor-preview/gen-brand-set.mjs   -> docs/watercolor-preview/set/brand-N.svg
//
// Rule kept from brand-1: the pink accent is blended "normal" and never sits on top of
// teal, otherwise the two complementary colors turn grey.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "./gen-watercolor.mjs";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "set");
mkdirSync(outDir, { recursive: true });

const PAPER = "#fcfdfd";
const C = {
  sky: "#4fc3f7", blue: "#5fa8f0", mist: "#90d4f8", aqua: "#6cc9e6",
  teal: "#5fdcbc", cyan: "#26c6da", pink: "#f7a8cf",
  eBlue: "#1e88e5", eSky: "#42a5f5", eTeal: "#1fbf95", eCyan: "#00acc1", ePink: "#ec7fb4",
};
const pink = (cx, cy, rx, ry, op = 0.62) => [cx, cy, rx, ry, C.pink, op, "normal"];

const layouts = {
  // brand-1 is the original watercolor-brand: blue left, teal right, pink top-right
  "brand-1": {
    wash: [
      [180, 700, 560, 460, C.sky, 0.55], [520, 420, 420, 360, C.blue, 0.4], [300, 260, 320, 260, C.mist, 0.35],
      [900, 500, 420, 380, C.aqua, 0.32], [1100, 580, 400, 300, C.teal, 0.42], [700, 880, 460, 220, C.cyan, 0.45],
      pink(1330, 170, 330, 210),
    ],
    edges: [
      [1320, 200, 200, 140, C.ePink, 0.14, 37], [300, 560, 300, 240, C.eBlue, 0.3, 3], [640, 360, 260, 200, C.eSky, 0.22, 11],
      [1060, 600, 300, 220, C.eTeal, 0.26, 8], [620, 820, 320, 160, C.eCyan, 0.26, 21],
    ],
  },
  // diagonal: blue pooled top-left, teal bottom-right, pink tucked bottom-left
  "brand-2": {
    wetSeed: 61, mottleSeed: 12, outlineSeed: 44,
    spread: [-260, -260, 1720, 1320],
    wash: [
      [260, 200, 560, 380, C.blue, 0.42], [620, 360, 420, 320, C.sky, 0.45], [120, 520, 300, 260, C.mist, 0.35],
      [980, 620, 420, 340, C.aqua, 0.34], [1300, 820, 420, 300, C.teal, 0.44], [900, 180, 320, 200, C.mist, 0.3],
      pink(220, 900, 300, 190, 0.58),
    ],
    edges: [
      [360, 260, 320, 220, C.eBlue, 0.28, 5], [760, 460, 260, 200, C.eSky, 0.22, 14],
      [1240, 780, 300, 220, C.eTeal, 0.26, 29], [240, 880, 200, 130, C.ePink, 0.13, 41],
    ],
    blooms: [[520, 300, 70, 50], [1100, 700, 80, 56], [860, 520, 46, 36]],
    vein: "M180 180 C 300 300, 420 340, 520 460 S 700 600, 760 720",
  },
  // horizon: a blue band through the middle, teal rising top-right, cyan along the bottom
  "brand-3": {
    wetSeed: 88, mottleSeed: 73, outlineSeed: 7,
    spread: [-240, 60, 2080, 1080],
    wash: [
      [200, 520, 460, 300, C.sky, 0.5], [700, 500, 480, 280, C.blue, 0.4], [1150, 540, 420, 280, C.aqua, 0.34],
      [1300, 220, 380, 240, C.teal, 0.4], [760, 900, 560, 200, C.cyan, 0.42], [420, 250, 300, 200, C.mist, 0.3],
      pink(140, 150, 300, 190, 0.55),
    ],
    edges: [
      [360, 520, 320, 180, C.eBlue, 0.28, 17], [900, 500, 300, 170, C.eSky, 0.22, 26],
      [1320, 240, 260, 170, C.eTeal, 0.26, 33], [720, 880, 380, 140, C.eCyan, 0.24, 47],
    ],
    blooms: [[560, 480, 80, 44], [1040, 560, 60, 40], [300, 640, 50, 36]],
    vein: "M420 360 C 560 420, 640 520, 760 560 S 980 640, 1100 700",
  },
  // airy: fewer, smaller washes with more bare paper above and below
  "brand-4": {
    wetSeed: 29, mottleSeed: 95, outlineSeed: 58,
    spread: [-240, 90, 2080, 820],
    wash: [
      [420, 560, 420, 320, C.sky, 0.46], [700, 420, 340, 260, C.blue, 0.34], [1120, 600, 340, 260, C.teal, 0.38],
      [860, 760, 300, 180, C.cyan, 0.34], [300, 320, 260, 200, C.mist, 0.3],
      pink(1040, 240, 260, 170, 0.5),
    ],
    edges: [
      [480, 560, 280, 200, C.eBlue, 0.26, 52], [1120, 620, 240, 180, C.eTeal, 0.24, 63], [1030, 250, 170, 110, C.ePink, 0.12, 71],
    ],
    blooms: [[620, 520, 70, 50], [900, 680, 50, 36]],
    vein: "M360 420 C 440 500, 520 540, 600 620 S 700 700, 760 780",
  },
  // teal-led: teal/aqua carry the middle, blue hugs the left edge, pink top-left
  "brand-5": {
    wetSeed: 104, mottleSeed: 38, outlineSeed: 81,
    spread: [-240, 10, 1800, 1260],
    wash: [
      [60, 620, 360, 420, C.blue, 0.42], [760, 520, 520, 380, C.aqua, 0.38], [1100, 420, 440, 340, C.teal, 0.42],
      [640, 880, 520, 200, C.cyan, 0.42], [1380, 760, 300, 260, C.mist, 0.32], [380, 420, 300, 240, C.sky, 0.36],
      pink(260, 130, 320, 180, 0.55),
    ],
    edges: [
      [180, 640, 240, 280, C.eBlue, 0.28, 9], [860, 520, 320, 240, C.eCyan, 0.24, 19],
      [1160, 420, 300, 230, C.eTeal, 0.26, 31], [280, 150, 200, 110, C.ePink, 0.13, 43],
    ],
    blooms: [[980, 460, 80, 56], [560, 640, 60, 44], [1300, 600, 50, 40]],
    vein: "M820 300 C 900 400, 960 460, 1040 560 S 1160 700, 1220 820",
  },
  // pooled: color settles toward the bottom, paper stays open at the top
  "brand-6": {
    wetSeed: 142, mottleSeed: 66, outlineSeed: 15,
    spread: [-260, 280, 2120, 1060],
    wash: [
      [220, 820, 520, 320, C.sky, 0.52], [640, 760, 440, 280, C.blue, 0.4], [1040, 860, 480, 260, C.cyan, 0.42],
      [1420, 780, 360, 260, C.teal, 0.42], [820, 560, 380, 200, C.mist, 0.3],
      pink(1180, 440, 260, 160, 0.52),
    ],
    edges: [
      [300, 800, 340, 200, C.eBlue, 0.28, 57], [760, 780, 300, 180, C.eSky, 0.22, 66],
      [1380, 800, 260, 190, C.eTeal, 0.26, 75], [1180, 450, 180, 110, C.ePink, 0.12, 84],
    ],
    blooms: [[520, 820, 80, 50], [1000, 800, 64, 44], [240, 700, 44, 32]],
    vein: "M140 640 C 280 700, 380 760, 500 800 S 700 880, 800 960",
  },
};

for (const [name, layout] of Object.entries(layouts)) {
  writeFileSync(join(outDir, `${name}.svg`), build({ paper: PAPER, streak: "#0277bd", ...layout }));
}
console.log(`wrote ${Object.keys(layouts).length} layouts to ${outDir}`);
