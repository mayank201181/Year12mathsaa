import type { AnswerSpec, Trap } from "../types.ts";
import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, frac, num, simplify } from "./helpers.ts";

// Format an exact multiple of pi as (n*pi)/d for both {{ }} markup and expression spec.
function piExpr(n: number, d: number): { expr: string; tex: string } {
  const [a, b] = simplify(n, d);
  if (a === 0) return { expr: "0", tex: "0" };
  const sign = a < 0 ? "-" : "";
  const absA = Math.abs(a);
  const numStr = absA === 1 ? "pi" : `${absA}pi`;
  const expr = b === 1 ? `${sign}${numStr}` : `${sign}${numStr}/${b}`;
  return { expr, tex: `{{${expr}}}` };
}

function piSpec(n: number, d: number): AnswerSpec {
  const [a, b] = simplify(n, d);
  if (a === 0) return { type: "number", value: 0 };
  const { expr, tex } = piExpr(a, b);
  return { type: "expression", expr, display: tex };
}

// Exact trig value lookup for multiples of pi/12 that are multiples of pi/6 or pi/4 (k in 0..23).
// Represent angles as k * pi / 12 where k mod 2 === 0 (multiples of pi/6) or k mod 3 === 0 (multiples of pi/4).
interface ExactVal {
  spec: AnswerSpec;
  tex: string;
  trapOpp?: AnswerSpec;
}

function exactFromKey(key: string): ExactVal {
  switch (key) {
    case "0":
      return { spec: { type: "number", value: 0 }, tex: "{{0}}" };
    case "1":
      return { spec: { type: "number", value: 1 }, tex: "{{1}}", trapOpp: { type: "number", value: -1 } };
    case "-1":
      return { spec: { type: "number", value: -1 }, tex: "{{-1}}", trapOpp: { type: "number", value: 1 } };
    case "2":
      return { spec: { type: "number", value: 2 }, tex: "{{2}}", trapOpp: { type: "number", value: -2 } };
    case "-2":
      return { spec: { type: "number", value: -2 }, tex: "{{-2}}", trapOpp: { type: "number", value: 2 } };
    case "1/2":
      return {
        spec: { type: "fraction", n: 1, d: 2, simplest: true },
        tex: "{{1/2}}",
        trapOpp: { type: "fraction", n: -1, d: 2 },
      };
    case "-1/2":
      return {
        spec: { type: "fraction", n: -1, d: 2, simplest: true },
        tex: "{{-1/2}}",
        trapOpp: { type: "fraction", n: 1, d: 2 },
      };
    case "sqrt(2)/2":
      return {
        spec: { type: "expression", expr: "sqrt(2)/2", display: "{{sqrt(2)/2}}" },
        tex: "{{sqrt(2)/2}}",
        trapOpp: { type: "expression", expr: "-sqrt(2)/2" },
      };
    case "-sqrt(2)/2":
      return {
        spec: { type: "expression", expr: "-sqrt(2)/2", display: "{{-sqrt(2)/2}}" },
        tex: "{{-sqrt(2)/2}}",
        trapOpp: { type: "expression", expr: "sqrt(2)/2" },
      };
    case "sqrt(3)/2":
      return {
        spec: { type: "expression", expr: "sqrt(3)/2", display: "{{sqrt(3)/2}}" },
        tex: "{{sqrt(3)/2}}",
        trapOpp: { type: "expression", expr: "-sqrt(3)/2" },
      };
    case "-sqrt(3)/2":
      return {
        spec: { type: "expression", expr: "-sqrt(3)/2", display: "{{-sqrt(3)/2}}" },
        tex: "{{-sqrt(3)/2}}",
        trapOpp: { type: "expression", expr: "sqrt(3)/2" },
      };
    case "sqrt(3)/3":
      return {
        spec: { type: "expression", expr: "sqrt(3)/3", display: "{{sqrt(3)/3}}" },
        tex: "{{sqrt(3)/3}}",
        trapOpp: { type: "expression", expr: "-sqrt(3)/3" },
      };
    case "-sqrt(3)/3":
      return {
        spec: { type: "expression", expr: "-sqrt(3)/3", display: "{{-sqrt(3)/3}}" },
        tex: "{{-sqrt(3)/3}}",
        trapOpp: { type: "expression", expr: "sqrt(3)/3" },
      };
    case "sqrt(3)":
      return {
        spec: { type: "expression", expr: "sqrt(3)", display: "{{sqrt(3)}}" },
        tex: "{{sqrt(3)}}",
        trapOpp: { type: "expression", expr: "-sqrt(3)" },
      };
    case "-sqrt(3)":
      return {
        spec: { type: "expression", expr: "-sqrt(3)", display: "{{-sqrt(3)}}" },
        tex: "{{-sqrt(3)}}",
        trapOpp: { type: "expression", expr: "sqrt(3)" },
      };
    case "sqrt(2)":
      return {
        spec: { type: "expression", expr: "sqrt(2)", display: "{{sqrt(2)}}" },
        tex: "{{sqrt(2)}}",
        trapOpp: { type: "expression", expr: "-sqrt(2)" },
      };
    case "-sqrt(2)":
      return {
        spec: { type: "expression", expr: "-sqrt(2)", display: "{{-sqrt(2)}}" },
        tex: "{{-sqrt(2)}}",
        trapOpp: { type: "expression", expr: "sqrt(2)" },
      };
    case "2*sqrt(3)/3":
      return {
        spec: { type: "expression", expr: "2*sqrt(3)/3", display: "{{2 sqrt(3)/3}}" },
        tex: "{{2 sqrt(3)/3}}",
        trapOpp: { type: "expression", expr: "-2*sqrt(3)/3" },
      };
    case "-2*sqrt(3)/3":
      return {
        spec: { type: "expression", expr: "-2*sqrt(3)/3", display: "{{-2 sqrt(3)/3}}" },
        tex: "{{-2 sqrt(3)/3}}",
        trapOpp: { type: "expression", expr: "2*sqrt(3)/3" },
      };
    default:
      throw new Error(`Unknown exact trig key: ${key}`);
  }
}

interface AngleEntry {
  k12: number; // angle = k12 * pi / 12
  sin: string;
  cos: string;
  tan: string | null;
  sec: string | null;
  csc: string | null;
  cot: string | null;
  quadrant: string;
  ref: string;
}

const UNIT_ANGLES: AngleEntry[] = [
  { k12: 0, sin: "0", cos: "1", tan: "0", sec: "1", csc: null, cot: null, quadrant: "positive x-axis", ref: "0" },
  { k12: 2, sin: "1/2", cos: "sqrt(3)/2", tan: "sqrt(3)/3", sec: "2*sqrt(3)/3", csc: "2", cot: "sqrt(3)", quadrant: "Quadrant I", ref: "pi/6" },
  { k12: 3, sin: "sqrt(2)/2", cos: "sqrt(2)/2", tan: "1", sec: "sqrt(2)", csc: "sqrt(2)", cot: "1", quadrant: "Quadrant I", ref: "pi/4" },
  { k12: 4, sin: "sqrt(3)/2", cos: "1/2", tan: "sqrt(3)", sec: "2", csc: "2*sqrt(3)/3", cot: "sqrt(3)/3", quadrant: "Quadrant I", ref: "pi/3" },
  { k12: 6, sin: "1", cos: "0", tan: null, sec: null, csc: "1", cot: "0", quadrant: "positive y-axis", ref: "pi/2" },
  { k12: 8, sin: "sqrt(3)/2", cos: "-1/2", tan: "-sqrt(3)", sec: "-2", csc: "2*sqrt(3)/3", cot: "-sqrt(3)/3", quadrant: "Quadrant II", ref: "pi/3" },
  { k12: 9, sin: "sqrt(2)/2", cos: "-sqrt(2)/2", tan: "-1", sec: "-sqrt(2)", csc: "sqrt(2)", cot: "-1", quadrant: "Quadrant II", ref: "pi/4" },
  { k12: 10, sin: "1/2", cos: "-sqrt(3)/2", tan: "-sqrt(3)/3", sec: "-2*sqrt(3)/3", csc: "2", cot: "-sqrt(3)", quadrant: "Quadrant II", ref: "pi/6" },
  { k12: 12, sin: "0", cos: "-1", tan: "0", sec: "-1", csc: null, cot: null, quadrant: "negative x-axis", ref: "0" },
  { k12: 14, sin: "-1/2", cos: "-sqrt(3)/2", tan: "sqrt(3)/3", sec: "-2*sqrt(3)/3", csc: "-2", cot: "sqrt(3)", quadrant: "Quadrant III", ref: "pi/6" },
  { k12: 15, sin: "-sqrt(2)/2", cos: "-sqrt(2)/2", tan: "1", sec: "-sqrt(2)", csc: "-sqrt(2)", cot: "1", quadrant: "Quadrant III", ref: "pi/4" },
  { k12: 16, sin: "-sqrt(3)/2", cos: "-1/2", tan: "sqrt(3)", sec: "-2", csc: "-2*sqrt(3)/3", cot: "sqrt(3)/3", quadrant: "Quadrant III", ref: "pi/3" },
  { k12: 18, sin: "-1", cos: "0", tan: null, sec: null, csc: "-1", cot: "0", quadrant: "negative y-axis", ref: "pi/2" },
  { k12: 20, sin: "-sqrt(3)/2", cos: "1/2", tan: "-sqrt(3)", sec: "2", csc: "-2*sqrt(3)/3", cot: "-sqrt(3)/3", quadrant: "Quadrant IV", ref: "pi/3" },
  { k12: 21, sin: "-sqrt(2)/2", cos: "sqrt(2)/2", tan: "-1", sec: "sqrt(2)", csc: "-sqrt(2)", cot: "-1", quadrant: "Quadrant IV", ref: "pi/4" },
  { k12: 22, sin: "-1/2", cos: "sqrt(3)/2", tan: "-sqrt(3)/3", sec: "2*sqrt(3)/3", csc: "-2", cot: "-sqrt(3)", quadrant: "Quadrant IV", ref: "pi/6" },
];

function fracOrIntSpec(n: number, d: number): AnswerSpec {
  const [a, b] = simplify(n, d);
  if (b === 1) return { type: "number", value: a };
  return { type: "fraction", n: a, d: b, simplest: true };
}

// ---------------------------------------------------------------------------
// Drill 1: 3D Geometry, Solids & Cosine Rule / Triangle Area
// ---------------------------------------------------------------------------
const PYTH_QUADS: readonly [number, number, number, number][] = [
  [1, 2, 2, 3],
  [2, 3, 6, 7],
  [1, 4, 8, 9],
  [4, 4, 7, 9],
  [2, 6, 9, 11],
  [6, 6, 7, 11],
  [3, 4, 12, 13],
  [2, 5, 14, 15],
  [2, 10, 11, 15],
  [1, 12, 12, 17],
  [8, 9, 12, 17],
  [6, 10, 15, 19],
];

const PYTH_TRIPLES: readonly [number, number, number][] = [
  [3, 4, 5],
  [5, 12, 13],
  [6, 8, 10],
  [8, 15, 17],
  [9, 12, 15],
  [7, 24, 25],
];

function gen3dCosineArea(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const mode = rng.int(1, 3);
  if (tier === 1) {
    if (mode === 1) {
      // 3D distance using Pythagorean quadruple
      const [dx0, dy0, dz0, d0] = rng.pick(PYTH_QUADS);
      const perm = rng.shuffle([dx0, dy0, dz0]);
      const sx = rng.bool() ? 1 : -1;
      const sy = rng.bool() ? 1 : -1;
      const sz = rng.bool() ? 1 : -1;
      const x1 = rng.int(-5, 5);
      const y1 = rng.int(-5, 5);
      const z1 = rng.int(-5, 5);
      const x2 = x1 + sx * perm[0];
      const y2 = y1 + sy * perm[1];
      const z2 = z1 + sz * perm[2];
      return {
        prompt: `Find the exact distance between the 3D points A(${num(x1)}, ${num(y1)}, ${num(z1)}) and B(${num(x2)}, ${num(y2)}, ${num(z2)}).`,
        answer: { type: "number", value: d0 },
        traps: [{ spec: { type: "number", value: d0 * d0 }, feedback: "You found d² — take the square root to get the distance d." }],
        hint: "Use {{d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)}}.",
        solution: [
          `Differences: {{Delta x = ${sx * perm[0]}}}, {{Delta y = ${sy * perm[1]}}}, {{Delta z = ${sz * perm[2]}}}.`,
          `{{d = sqrt(${perm[0] * perm[0]} + ${perm[1] * perm[1]} + ${perm[2] * perm[2]}) = sqrt(${d0 * d0}) = ${d0}}}.`,
        ],
      };
    }
    if (mode === 2) {
      // Right square pyramid volume
      const s = rng.int(3, 12);
      const h = 3 * rng.int(2, 8);
      const vol = (s * s * h) / 3;
      return {
        prompt: `A right square-based pyramid has base side length ${s} cm and vertical height ${h} cm. Find its volume in cm³.`,
        answer: { type: "number", value: vol },
        traps: [{ spec: { type: "number", value: vol * 3 }, feedback: "Do not forget the 1/3 factor in V = (1/3) × base area × height." }],
        hint: "Apply {{V = (1/3) A h}} where base area {{A = s^2}}.",
        solution: [
          `Base area {{A = ${s}^2 = ${s * s}}} cm².`,
          `Volume {{V = (1/3) * ${s * s} * ${h} = ${vol}}} cm³.`,
        ],
      };
    }
    // Triangle area with 30° or 150° (exact)
    const a = 2 * rng.int(2, 10);
    const b = rng.int(3, 12);
    const ang = rng.bool() ? 30 : 150;
    const area = (a * b) / 4;
    return {
      prompt: `In triangle ABC, a = ${a} cm, b = ${b} cm, and the included angle ∠C = ${ang}°. Find the exact area of triangle ABC in cm².`,
      answer: { type: "number", value: clean(area) },
      hint: `Use {{A = (1/2) ab sin C}} and recall {{sin ${ang}° = 1/2}}.`,
      solution: [
        `{{sin ${ang}° = 1/2}}.`,
        `{{A = (1/2)(${a})(${b})(1/2) = ${num(area)}}} cm².`,
      ],
    };
  }

  if (tier === 2) {
    if (mode === 1) {
      // Exact c^2 via cosine rule at 60° or 120°
      const a = rng.int(4, 12);
      const b = rng.int(4, 13);
      const obtuse = rng.bool();
      const ang = obtuse ? 120 : 60;
      const c2 = obtuse ? a * a + b * b + a * b : a * a + b * b - a * b;
      const wrongSign = obtuse ? a * a + b * b - a * b : a * a + b * b + a * b;
      return {
        prompt: `In triangle ABC, a = ${a} cm, b = ${b} cm, and ∠C = ${ang}°. Find the exact integer value of {{c^2}}.`,
        answer: { type: "number", value: c2 },
        traps: [{ spec: { type: "number", value: wrongSign }, feedback: `Check the sign of cos ${ang}° (${obtuse ? "−1/2" : "+1/2"})!` }],
        hint: `Substitute into {{c^2 = a^2 + b^2 - 2ab cos ${ang}°}}.`,
        solution: [
          `{{cos ${ang}° = ${obtuse ? "-1/2" : "1/2"}}}.`,
          `{{c^2 = ${a}^2 + ${b}^2 - 2(${a})(${b})(${obtuse ? "-1/2" : "1/2"}) = ${a * a} + ${b * b} ${obtuse ? "+" : "-"} ${a * b} = ${c2}}}.`,
        ],
      };
    }
    if (mode === 2) {
      // Cone curved or total surface area in terms of pi using Pythagorean triple
      const [r0, h0, l0] = rng.pick(PYTH_TRIPLES);
      const swap = rng.bool();
      const r = swap ? h0 : r0;
      const h = swap ? r0 : h0;
      const total = rng.bool();
      const coeff = total ? r * l0 + r * r : r * l0;
      return {
        prompt: `A right circular cone has base radius r = ${r} cm and vertical height h = ${h} cm. Find its exact ${total ? "total" : "curved"} surface area in cm², in terms of π.`,
        answer: { type: "expression", expr: `${coeff}pi`, display: `{{${coeff}pi}}` },
        hint: `Find slant height {{l = sqrt(r^2 + h^2)}}, then use ${total ? "{{pi r l + pi r^2}}" : "{{pi r l}}"}.`,
        solution: [
          `Slant height {{l = sqrt(${r}^2 + ${h}^2) = ${l0}}} cm.`,
          total
            ? `Total SA {{= pi(${r})(${l0}) + pi(${r}^2) = ${r * l0}pi + ${r * r}pi = ${coeff}pi}} cm².`
            : `Curved SA {{= pi(${r})(${l0}) = ${coeff}pi}} cm².`,
        ],
      };
    }
    // Back-bearing calculation
    const fwd = rng.int(10, 350);
    const back = fwd < 180 ? fwd + 180 : fwd - 180;
    const fwdStr = String(fwd).padStart(3, "0");
    const backStr = String(back).padStart(3, "0");
    return {
      prompt: `Lighthouse B lies on a true bearing of ${fwdStr}° from port A. Find the true bearing (in degrees) of A from B.`,
      answer: { type: "number", value: back, display: `${backStr}°` },
      hint: "Add 180° if the forward bearing is less than 180°, or subtract 180° if it is at least 180°.",
      solution: [
        fwd < 180
          ? `Since ${fwdStr}° < 180°, the back-bearing is {{${fwd}° + 180° = ${backStr}°}}.`
          : `Since ${fwdStr}° ≥ 180°, the back-bearing is {{${fwd}° - 180° = ${backStr}°}}.`,
      ],
    };
  }

  // Tier 3: SSS cos C exact fraction, OR 3D sphere from volume, OR bearings + cosine rule
  if (mode === 1) {
    // SSS triangle -> exact cos C
    const a = rng.int(4, 10);
    const b = rng.int(4, 10);
    const cMin = Math.abs(a - b) + 1;
    const cMax = a + b - 1;
    const c = rng.int(cMin, cMax);
    const numCos = a * a + b * b - c * c;
    const denCos = 2 * a * b;
    const [sn, sd] = simplify(numCos, denCos);
    return {
      prompt: `In triangle ABC, a = ${a}, b = ${b}, and c = ${c}. Use the cosine rule to find the exact value of {{cos C}} ${sd === 1 ? "" : "as a simplified fraction"}.`,
      answer: fracOrIntSpec(sn, sd),
      hint: "Apply {{cos C = (a^2 + b^2 - c^2) / (2ab)}} and simplify.",
      solution: [
        `{{cos C = (${a}^2 + ${b}^2 - ${c}^2) / (2 * ${a} * ${b}) = (${a * a} + ${b * b} - ${c * c}) / ${denCos} = ${numCos} / ${denCos}}}.`,
        `Simplified: ${frac(sn, sd)}.`,
      ],
    };
  }
  if (mode === 2) {
    // Bearings interior angle + exact c^2 (interior angle 60° or 120°)
    const b1 = rng.int(15, 110);
    const interior = rng.bool() ? 60 : 120;
    const b2 = b1 + 180 - interior;
    const d1 = rng.int(5, 12);
    const d2 = rng.int(5, 12);
    const ans = interior === 120 ? d1 * d1 + d2 * d2 + d1 * d2 : d1 * d1 + d2 * d2 - d1 * d2;
    return {
      prompt: `A drone flies ${d1} km from O on a bearing of ${String(b1).padStart(3, "0")}° to A, then ${d2} km on a bearing of ${String(b2).padStart(3, "0")}° to B. Find the exact integer value of {{OB^2}}.`,
      answer: { type: "number", value: ans },
      hint: `Find back-bearing from A to O (${b1 + 180}°), subtract ${b2}° to get ∠OAB = ${interior}°, then use the cosine rule.`,
      solution: [
        `Back-bearing A → O is {{${b1}° + 180° = ${b1 + 180}°}}, so {{∠OAB = ${b1 + 180}° - ${b2}° = ${interior}°}}.`,
        `By cosine rule: {{OB^2 = ${d1}^2 + ${d2}^2 - 2(${d1})(${d2}) cos ${interior}° = ${ans}}}.`,
      ],
    };
  }
  // Ambiguous-case minimum side h = b sin 30° or b sin 45° or b sin 60° (exact b sin 30° -> clean integer!)
  const b = 2 * rng.int(4, 18);
  const h = b / 2;
  return {
    prompt: `In triangle ABC, ∠A = 30° and b = ${b} cm. What is the minimum possible length of side a (in cm) for which at least one triangle ABC can be formed?`,
    answer: { type: "number", value: h },
    traps: [{ spec: { type: "number", value: b }, feedback: "When a = b, you get one isosceles triangle — the minimum valid length is the altitude h = b sin A." }],
    hint: "A triangle exists if and only if {{a >= h = b sin A}}.",
    solution: [
      `The shortest distance from vertex C to the base ray is the altitude {{h = b sin A = ${b} sin 30° = ${b} * (1/2) = ${h}}} cm.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Drill 2: Radians ↔ Degrees, Arc Length & Sector Area
// ---------------------------------------------------------------------------
const DEG_LIST = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 210, 225, 240, 270, 300, 315, 330, 360, 405, 420, 450, 480, 540, 600, 720] as const;

function genRadiansArcsSectors(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const mode = rng.int(1, 3);
  if (tier === 1) {
    if (mode === 1) {
      const deg = rng.pick(DEG_LIST);
      const [n, d] = simplify(deg, 180);
      const { expr, tex } = piExpr(n, d);
      return {
        prompt: `Convert ${deg}° into exact radians in terms of π (e.g. 2pi/3).`,
        answer: { type: "expression", expr, display: tex },
        hint: "Multiply by {{pi / 180}} and simplify the fraction.",
        solution: [`{{${deg}° * (pi / 180°) = ${expr}}} radians.`],
      };
    }
    if (mode === 2) {
      const deg = rng.pick(DEG_LIST);
      const [n, d] = simplify(deg, 180);
      const { tex } = piExpr(n, d);
      return {
        prompt: `Convert ${tex} radians into degrees.`,
        answer: { type: "number", value: deg, display: `${deg}°` },
        hint: "Replace {{pi}} with {{180°}} (multiply by {{180 / pi}}).",
        solution: [`{{(${n} * 180°) / ${d} = ${deg}°}}.`],
      };
    }
    // Arc length l = r * theta
    const r = rng.int(3, 15);
    const thetaTenths = rng.int(4, 28);
    const theta = clean(thetaTenths / 10);
    const arc = clean(r * theta);
    return {
      prompt: `A sector of a circle has radius r = ${r} cm and central angle θ = ${num(theta)} radians. Find the exact arc length in cm.`,
      answer: { type: "number", value: arc },
      hint: "Use the radian arc-length formula {{l = r theta}}.",
      solution: [`{{l = r theta = ${r} * ${num(theta)} = ${num(arc)}}} cm.`],
    };
  }

  if (tier === 2) {
    if (mode === 1) {
      // Sector area A = 1/2 r^2 theta (exact decimal)
      const r = 2 * rng.int(2, 9);
      const thetaTenths = rng.int(3, 25);
      const theta = clean(thetaTenths / 10);
      const area = clean(0.5 * r * r * theta);
      const arcTrap = clean(r * theta);
      return {
        prompt: `A circular sector has radius r = ${r} cm and central angle θ = ${num(theta)} radians. Find the exact area of the sector in cm².`,
        answer: { type: "number", value: area },
        traps: [{ spec: { type: "number", value: arcTrap }, feedback: "rθ gives the arc length — sector area is A = ½r²θ." }],
        hint: "Apply {{A = (1/2) r^2 theta}}.",
        solution: [`{{A = (1/2)(${r}^2)(${num(theta)}) = ${r * r / 2} * ${num(theta)} = ${num(area)}}} cm².`],
      };
    }
    if (mode === 2) {
      // Sector perimeter P = 2r + r*theta
      const r = rng.int(3, 14);
      const thetaTenths = rng.int(5, 25);
      const theta = clean(thetaTenths / 10);
      const arc = clean(r * theta);
      const perim = clean(2 * r + arc);
      return {
        prompt: `A sector has radius r = ${r} cm and central angle θ = ${num(theta)} radians. Find the total perimeter of the sector in cm.`,
        answer: { type: "number", value: perim },
        traps: [{ spec: { type: "number", value: arc }, feedback: "Don't forget to add the two straight radii (2r) to the arc length!" }],
        hint: "Perimeter of a sector is {{P = 2r + r theta}}.",
        solution: [`Arc length {{l = ${r} * ${num(theta)} = ${num(arc)}}} cm, so perimeter {{P = 2(${r}) + ${num(arc)} = ${num(perim)}}} cm.`],
      };
    }
    // Exact sector area in terms of pi
    const r = 2 * rng.int(2, 9);
    const numK = rng.pick([1, 2, 3, 5, 7]);
    const denK = rng.pick([3, 4, 6]);
    const [sn, sd] = simplify(r * r * numK, 2 * denK);
    const ang = piExpr(numK, denK);
    const ans = piExpr(sn, sd);
    return {
      prompt: `A sector has radius r = ${r} cm and central angle θ = ${ang.tex} radians. Find the exact area of the sector in cm², in terms of π.`,
      answer: { type: "expression", expr: ans.expr, display: ans.tex },
      hint: "Substitute into {{A = (1/2) r^2 theta}} and simplify the fraction multiplying π.",
      solution: [`{{A = (1/2)(${r}^2)(${ang.expr}) = ${ans.expr}}} cm².`],
    };
  }

  // Tier 3: Reverse radius from arc+area, or exact minor segment area, or reverse angle from perimeter
  if (mode === 1) {
    // Given arc length l and sector area A, find radius r = 2A / l
    const r = rng.int(3, 18);
    const thetaTenths = rng.int(4, 24);
    const theta = clean(thetaTenths / 10);
    const l = clean(r * theta);
    const A = clean(0.5 * r * r * theta);
    return {
      prompt: `A circular sector has arc length l = ${num(l)} cm and area A = ${num(A)} cm². Find the radius r of the circle in cm.`,
      answer: { type: "number", value: r },
      hint: "Combine {{l = r theta}} and {{A = (1/2) r^2 theta}} into {{A = (1/2) r l}}.",
      solution: [
        `Since {{A = (1/2) r l}}, we have {{r = 2A / l = (2 * ${num(A)}) / ${num(l)} = ${r}}} cm.`,
      ],
    };
  }
  if (mode === 2) {
    // Exact minor segment area for theta = pi/2 with even r
    const r = 2 * rng.int(2, 12);
    const halfR2 = (r * r) / 2;
    const piCoeff = simplify(halfR2, 2);
    const piPart = piExpr(piCoeff[0], piCoeff[1]).expr;
    const expr = `${piPart} - ${halfR2}`;
    return {
      prompt: `A chord of a circle of radius ${r} cm subtends a central angle of {{pi/2}} radians. Find the exact area of the minor segment in cm² (in terms of π).`,
      answer: { type: "expression", expr, display: `{{${expr}}}` },
      hint: "Use {{A_segment = (1/2) r^2 (theta - sin theta)}} with {{sin(pi/2) = 1}}.",
      solution: [
        `Sector area {{= (1/2)(${r}^2)(pi/2) = ${piPart}}} cm²; triangle area {{= (1/2)(${r}^2)(1) = ${halfR2}}} cm².`,
        `Minor segment area {{= ${expr}}} cm².`,
      ],
    };
  }
  // Given perimeter P and radius r, find central angle theta in radians
  const r = rng.int(3, 14);
  const thetaTenths = rng.int(5, 30);
  const theta = clean(thetaTenths / 10);
  const P = clean(2 * r + r * theta);
  return {
    prompt: `A sector of radius r = ${r} cm has total perimeter ${num(P)} cm. Find its central angle θ in radians.`,
    answer: { type: "number", value: theta },
    hint: "Use {{P = 2r + r theta}} and solve for θ.",
    solution: [
      `Arc length {{l = P - 2r = ${num(P)} - ${2 * r} = ${num(clean(P - 2 * r))}}} cm.`,
      `Central angle {{theta = l / r = ${num(clean(P - 2 * r))} / ${r} = ${num(theta)}}} radians.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Drill 3: Non-GDC Exact Unit-Circle Ratios Across All 4 Quadrants
// ---------------------------------------------------------------------------
function genExactUnitCircle(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  if (tier === 1) {
    const fn = rng.pick(["sin", "cos", "tan"] as const);
    const pool = UNIT_ANGLES.filter((e) => e[fn] !== null);
    const entry = rng.pick(pool);
    const ang = piExpr(entry.k12, 12);
    const val = exactFromKey(entry[fn]!);
    const traps: Trap[] = val.trapOpp
      ? [{ spec: val.trapOpp, feedback: `Check the ASTC sign in ${entry.quadrant}!` }]
      : [];
    return {
      prompt: `Without a calculator, evaluate {{${fn}(${ang.expr})}} exactly (use sqrt(...) for square roots).`,
      answer: val.spec,
      traps,
      hint: `Locate ${ang.tex} (${entry.quadrant}) with reference angle {{${entry.ref}}} and apply ASTC.`,
      solution: [
        `${ang.tex} lies on/in ${entry.quadrant} with reference angle {{${entry.ref}}}.`,
        `Therefore {{${fn}(${ang.expr}) = ${val.tex.slice(2, -2)}}}.`,
      ],
    };
  }

  if (tier === 2) {
    // Coterminal & negative angles in [-2pi, 4pi]
    const fn = rng.pick(["sin", "cos", "tan"] as const);
    const pool = UNIT_ANGLES.filter((e) => e[fn] !== null && e.k12 !== 0);
    const entry = rng.pick(pool);
    const shift = rng.pick([-1, 0, 1] as const);
    const k12Total = entry.k12 + shift * 24;
    const ang = piExpr(k12Total, 12);
    const coterm = piExpr(entry.k12, 12);
    const val = exactFromKey(entry[fn]!);
    const traps: Trap[] = val.trapOpp
      ? [{ spec: val.trapOpp, feedback: `Reduce ${ang.tex} by adding/subtracting 2π to ${coterm.tex} (${entry.quadrant}), then check its ASTC sign.` }]
      : [];
    return {
      prompt: `Without a calculator, find the exact value of {{${fn}(${ang.expr})}} (use sqrt(...) if needed).`,
      answer: val.spec,
      traps,
      hint: `Find a coterminal angle in {{[0, 2pi)}} by adding or subtracting {{2pi}}, then use ASTC.`,
      solution: [
        shift === 0
          ? `${ang.tex} lies in ${entry.quadrant} with reference angle {{${entry.ref}}}.`
          : `${ang.tex} is coterminal with ${coterm.tex} (${entry.quadrant}, reference angle {{${entry.ref}}}).`,
        `Hence {{${fn}(${ang.expr}) = ${val.tex.slice(2, -2)}}}.`,
      ],
    };
  }

  // Tier 3: Exact Paper 1 expressions like a*sin(t) or sin(t1)*cos(t2) or sin^2(t1) + cos^2(t2)
  const mode = rng.int(1, 2);
  if (mode === 1) {
    // Evaluate k * fn(angle) where value is rational or clean surd
    const fn = rng.pick(["sin", "cos", "tan"] as const);
    const pool = UNIT_ANGLES.filter((e) => e[fn] !== null && e[fn] !== "0");
    const entry = rng.pick(pool);
    const mult = rng.pick([2, 4, 6, -2, -4, -6] as const);
    const ang = piExpr(entry.k12, 12);
    const rawKey = entry[fn]!;
    // Build exact simplified product of mult * rawKey
    let spec: AnswerSpec;
    let ansText: string;
    const sign = (mult < 0 ? -1 : 1) * (rawKey.startsWith("-") ? -1 : 1);
    const absM = Math.abs(mult);
    const posKey = rawKey.replace(/^-/, "");
    if (posKey === "1") {
      spec = { type: "number", value: sign * absM };
      ansText = String(sign * absM);
    } else if (posKey === "1/2") {
      spec = { type: "number", value: (sign * absM) / 2 };
      ansText = String((sign * absM) / 2);
    } else if (posKey === "sqrt(2)/2") {
      const c = absM / 2;
      const e = `${sign < 0 ? "-" : ""}${c === 1 ? "" : `${c}*`}sqrt(2)`;
      const d = `${sign < 0 ? "-" : ""}${c === 1 ? "" : `${c} `}sqrt(2)`;
      spec = { type: "expression", expr: e, display: `{{${d}}}` };
      ansText = d;
    } else if (posKey === "sqrt(3)/2") {
      const c = absM / 2;
      const e = `${sign < 0 ? "-" : ""}${c === 1 ? "" : `${c}*`}sqrt(3)`;
      const d = `${sign < 0 ? "-" : ""}${c === 1 ? "" : `${c} `}sqrt(3)`;
      spec = { type: "expression", expr: e, display: `{{${d}}}` };
      ansText = d;
    } else if (posKey === "sqrt(3)") {
      const e = `${sign < 0 ? "-" : ""}${absM}*sqrt(3)`;
      const d = `${sign < 0 ? "-" : ""}${absM} sqrt(3)`;
      spec = { type: "expression", expr: e, display: `{{${d}}}` };
      ansText = d;
    } else {
      // sqrt(3)/3
      const [sn, sd] = simplify(absM, 3);
      const e = sd === 1
        ? `${sign < 0 ? "-" : ""}${sn === 1 ? "" : `${sn}*`}sqrt(3)`
        : `${sign < 0 ? "-" : ""}${sn === 1 ? "" : `${sn}*`}sqrt(3)/${sd}`;
      const d = sd === 1
        ? `${sign < 0 ? "-" : ""}${sn === 1 ? "" : `${sn} `}sqrt(3)`
        : `${sign < 0 ? "-" : ""}${sn === 1 ? "" : `${sn} `}sqrt(3)/${sd}`;
      spec = { type: "expression", expr: e, display: `{{${d}}}` };
      ansText = d;
    }
    return {
      prompt: `Without a calculator, find the exact simplified value of {{${mult} ${fn}(${ang.expr})}}.`,
      answer: spec,
      hint: `First evaluate {{${fn}(${ang.expr})}} in ${entry.quadrant}, then multiply by ${num(mult)}.`,
      solution: [
        `{{${fn}(${ang.expr}) = ${exactFromKey(rawKey).tex.slice(2, -2)}}}.`,
        `Multiplying by ${num(mult)} gives {{${ansText}}}.`,
      ],
    };
  }

  // mode 2: Exact rational value of sin^2(a) + cos^2(b) or sin^2(a) - cos^2(b)
  const sqPool = UNIT_ANGLES.filter((e) => e.k12 % 2 === 0 || e.k12 % 3 === 0);
  const e1 = rng.pick(sqPool);
  const e2 = rng.pick(sqPool);
  const addOp = rng.bool();
  const sqNum = (key: string): number => {
    const p = key.replace(/^-/, "");
    if (p === "0") return 0;
    if (p === "1/2") return 1; // over 4
    if (p === "sqrt(2)/2") return 2; // over 4
    if (p === "sqrt(3)/2") return 3; // over 4
    return 4; // 1 -> 4/4
  };
  const n1 = sqNum(e1.sin);
  const n2 = sqNum(e2.cos);
  const totN = addOp ? n1 + n2 : n1 - n2;
  const a1 = piExpr(e1.k12, 12);
  const a2 = piExpr(e2.k12, 12);
  const [sn, sd] = simplify(totN, 4);
  return {
    prompt: `Without a calculator, evaluate {{sin^2(${a1.expr}) ${addOp ? "+" : "-"} cos^2(${a2.expr})}} exactly ${sd === 1 ? "" : "as a simplified fraction"}.`,
    answer: fracOrIntSpec(sn, sd),
    hint: `Find {{sin(${a1.expr})}} and {{cos(${a2.expr})}} first, square each, then ${addOp ? "add" : "subtract"}.`,
    solution: [
      `{{sin^2(${a1.expr}) = ${n1}/4}} and {{cos^2(${a2.expr}) = ${n2}/4}}.`,
      `Result {{= (${n1} ${addOp ? "+" : "-"} ${n2})/4 = ${totN}/4}} = ${frac(sn, sd)}.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Drill 4: Sinusoidal Wave Parameters (Amplitude, Period, Midline, Range, Shift)
// ---------------------------------------------------------------------------
function genSinusoidalFeatures(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const fn = rng.bool() ? "sin" : "cos";
  if (tier === 1) {
    const a = rng.nonZero(-9, 9);
    const b = rng.int(1, 6);
    const d = rng.int(-8, 12);
    const dPart = d === 0 ? "" : d > 0 ? ` + ${d}` : ` - ${Math.abs(d)}`;
    const eq = `{{f(x) = ${a === 1 ? "" : a === -1 ? "-" : a} ${fn}(${b === 1 ? "" : b}x)${dPart}}}`;
    const ask = rng.int(1, 4);
    if (ask === 1) {
      return {
        prompt: `Find the amplitude of ${eq}.`,
        answer: { type: "number", value: Math.abs(a) },
        traps: a < 0 ? [{ spec: { type: "number", value: a }, feedback: "Amplitude is always positive: take |a|!" }] : undefined,
        hint: "Amplitude is {{|a|}}, the positive distance from the principal axis to a crest.",
        solution: [`Amplitude {{= |${a}| = ${Math.abs(a)}}}.`],
      };
    }
    if (ask === 2) {
      const mx = d + Math.abs(a);
      return {
        prompt: `Find the maximum value of ${eq}.`,
        answer: { type: "number", value: mx },
        hint: "Maximum value equals principal axis plus amplitude: {{d + |a|}}.",
        solution: [`Maximum {{= ${d} + |${a}| = ${mx}}}.`],
      };
    }
    if (ask === 3) {
      const mn = d - Math.abs(a);
      return {
        prompt: `Find the minimum value of ${eq}.`,
        answer: { type: "number", value: mn },
        hint: "Minimum value equals principal axis minus amplitude: {{d - |a|}}.",
        solution: [`Minimum {{= ${d} - |${a}| = ${mn}}}.`],
      };
    }
    return {
      prompt: `Find the y-value of the principal axis (midline) of ${eq}.`,
      answer: { type: "number", value: d },
      hint: "In {{a ${fn}(bx) + d}}, the principal axis is the horizontal line {{y = d}}.",
      solution: [`The vertical shift is ${num(d)}, so the principal axis is {{y = ${d}}}.`],
    };
  }

  if (tier === 2) {
    const mode = rng.int(1, 3);
    if (mode === 1) {
      // Period 2pi / b for integer b
      const a = rng.nonZero(-7, 7);
      const b = rng.pick([2, 3, 4, 5, 6, 8, 9, 10, 12] as const);
      const d = rng.int(-5, 9);
      const dPart = d === 0 ? "" : d > 0 ? ` + ${d}` : ` - ${Math.abs(d)}`;
      const per = piExpr(2, b);
      return {
        prompt: `Find the exact period of {{f(x) = ${a} ${fn}(${b}x)${dPart}}} in terms of π.`,
        answer: piSpec(2, b),
        hint: "Apply {{T = 2pi / b}} and simplify.",
        solution: [`With {{b = ${b}}}, period {{T = 2pi / ${b} = ${per.expr}}}.`],
      };
    }
    if (mode === 2) {
      // Period of f(t) = a cos((pi/k) t) + d -> exact integer 2k!
      const a = rng.nonZero(-8, 8);
      const k = rng.int(2, 18);
      const d = rng.int(5, 25);
      return {
        prompt: `A periodic model is given by {{h(t) = ${a} ${fn}((pi/${k}) t) + ${d}}}. Find its exact period T.`,
        answer: { type: "number", value: 2 * k },
        traps: [{ spec: { type: "number", value: k }, feedback: "T = 2π / b = 2π / (π/k) = 2k, not k!" }],
        hint: `Substitute {{b = pi/${k}}} into {{T = 2pi / b}}.`,
        solution: [`{{T = 2pi / (pi/${k}) = 2 * ${k} = ${2 * k}}}.`],
      };
    }
    // Horizontal shift c from f(x) = a sin(bx - k*pi/m) + d (always positive rightward shift)
    const b = rng.pick([2, 3, 4] as const);
    const m = rng.pick([2, 3, 4, 6] as const);
    const k = rng.pick([1, 2, 3, 5] as const);
    const inside = piExpr(k, m);
    const shift = piExpr(k, b * m);
    const a = rng.int(2, 7);
    return {
      prompt: `The graph of {{y = ${a} ${fn}(${b}x)}} is translated horizontally to the right by c units to give {{y = ${a} ${fn}(${b}x - ${inside.expr})}}. Find the exact value of c in terms of π.`,
      answer: piSpec(k, b * m),
      traps:
        b > 1
          ? [{ spec: piSpec(k, m), feedback: `Factor out b = ${b} first: ${b}x − ${inside.expr} = ${b}(x − ${shift.expr})!` }]
          : undefined,
      hint: `Factor out ${b}: {{${b}x - ${inside.expr} = ${b}(x - c)}}.`,
      solution: [
        `Factor out ${b}: {{${b}x - ${inside.expr} = ${b}(x - ${shift.expr})}}.`,
        `Thus the horizontal shift right is {{c = ${shift.expr}}}.`,
      ],
    };
  }

  // Tier 3: Reverse modelling from max/min/period OR counting roots of sin(kx) = v on [0, 2pi]
  const mode = rng.int(1, 3);
  if (mode === 1) {
    // Given max and min, find midline or amplitude
    const amp = rng.int(3, 25);
    const mid = rng.int(amp + 2, amp + 40);
    const mx = mid + amp;
    const mn = mid - amp;
    const askAmp = rng.bool();
    return {
      prompt: `A sinusoidal wave oscillates between a minimum value of ${mn} and a maximum value of ${mx}. Find its ${askAmp ? "amplitude" : "principal axis (midline) value d"}.`,
      answer: { type: "number", value: askAmp ? amp : mid },
      hint: askAmp ? "Amplitude {{= (max - min) / 2}}." : "Principal axis {{d = (max + min) / 2}}.",
      solution: [
        askAmp
          ? `Amplitude {{= (${mx} - ${mn}) / 2 = ${2 * amp} / 2 = ${amp}}}.`
          : `Principal axis {{d = (${mx} + ${mn}) / 2 = ${2 * mid} / 2 = ${mid}}}.`,
      ],
    };
  }
  if (mode === 2) {
    // Given max at t=0 and next min at t=h -> find b in y = a cos(bt) + d
    const halfT = rng.int(3, 15);
    const T = 2 * halfT;
    const bExpr = piExpr(2, T);
    return {
      prompt: `A cosine wave {{y = a cos(bt) + d}} ({{b > 0}}) reaches a crest at t = 0 and its very next trough at t = ${halfT}. Find the exact value of b in terms of π.`,
      answer: piSpec(2, T),
      traps: [{ spec: piSpec(2, halfT), feedback: "Crest to next trough is only HALF a period — double it to get the full period T!" }],
      hint: `Crest-to-trough is half a period, so {{T = 2 * ${halfT} = ${T}}}, then use {{b = 2pi / T}}.`,
      solution: [
        `Full period {{T = 2 * ${halfT} = ${T}}}.`,
        `Therefore {{b = 2pi / ${T} = ${bExpr.expr}}}.`,
      ],
    };
  }
  // Number of solutions of sin(kx) = val or cos(kx) = val on [0, 2pi)
  const k = rng.int(2, 6);
  const valStr = rng.pick(["1/2", "-1/2", "sqrt(3)/2", "-sqrt(2)/2", "0.4", "-0.7"] as const);
  const roots = 2 * k;
  return {
    prompt: `How many distinct solutions does the equation {{${fn}(${k}x) = ${valStr}}} have in the interval {{0 <= x < 2pi}}?`,
    answer: { type: "number", value: roots },
    traps: [{ spec: { type: "number", value: 2 }, feedback: `Transform the domain to 0 ≤ ${k}x < ${2 * k}π: there are ${k} full cycles, giving 2 × ${k} = ${roots} roots!` }],
    hint: `Let {{u = ${k}x}} so {{0 <= u < ${2 * k}pi}} (${k} complete periods, 2 roots per period).`,
    solution: [
      `On {{0 <= u < ${2 * k}pi}}, {{${fn}(u) = ${valStr}}} hits 2 solutions in each of the ${k} complete cycles.`,
      `Total distinct solutions {{= 2 * ${k} = ${roots}}}.`,
    ],
  };
}

// ---------------------------------------------------------------------------
// Drill 5: [HL] Reciprocal, Inverse & Compound-Angle Trig Exact Values
// ---------------------------------------------------------------------------
interface InversePrompt {
  fn: "arcsin" | "arccos" | "arctan";
  argTex: string;
  n: number;
  d: number;
}

const INVERSE_POOL: InversePrompt[] = [
  { fn: "arcsin", argTex: "0", n: 0, d: 1 },
  { fn: "arcsin", argTex: "1/2", n: 1, d: 6 },
  { fn: "arcsin", argTex: "-1/2", n: -1, d: 6 },
  { fn: "arcsin", argTex: "sqrt(2)/2", n: 1, d: 4 },
  { fn: "arcsin", argTex: "-sqrt(2)/2", n: -1, d: 4 },
  { fn: "arcsin", argTex: "sqrt(3)/2", n: 1, d: 3 },
  { fn: "arcsin", argTex: "-sqrt(3)/2", n: -1, d: 3 },
  { fn: "arcsin", argTex: "1", n: 1, d: 2 },
  { fn: "arcsin", argTex: "-1", n: -1, d: 2 },
  { fn: "arccos", argTex: "1", n: 0, d: 1 },
  { fn: "arccos", argTex: "sqrt(3)/2", n: 1, d: 6 },
  { fn: "arccos", argTex: "sqrt(2)/2", n: 1, d: 4 },
  { fn: "arccos", argTex: "1/2", n: 1, d: 3 },
  { fn: "arccos", argTex: "0", n: 1, d: 2 },
  { fn: "arccos", argTex: "-1/2", n: 2, d: 3 },
  { fn: "arccos", argTex: "-sqrt(2)/2", n: 3, d: 4 },
  { fn: "arccos", argTex: "-sqrt(3)/2", n: 5, d: 6 },
  { fn: "arccos", argTex: "-1", n: 1, d: 1 },
  { fn: "arctan", argTex: "0", n: 0, d: 1 },
  { fn: "arctan", argTex: "sqrt(3)/3", n: 1, d: 6 },
  { fn: "arctan", argTex: "-sqrt(3)/3", n: -1, d: 6 },
  { fn: "arctan", argTex: "1", n: 1, d: 4 },
  { fn: "arctan", argTex: "-1", n: -1, d: 4 },
  { fn: "arctan", argTex: "sqrt(3)", n: 1, d: 3 },
  { fn: "arctan", argTex: "-sqrt(3)", n: -1, d: 3 },
];

function genHlTrig(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  if (tier === 1) {
    if (rng.bool(0.6)) {
      // Exact sec / csc / cot on unit circle
      const fn = rng.pick(["sec", "csc", "cot"] as const);
      const pool = UNIT_ANGLES.filter((e) => e[fn] !== null);
      const entry = rng.pick(pool);
      const ang = piExpr(entry.k12, 12);
      const val = exactFromKey(entry[fn]!);
      const fnDisp = fn === "sec" ? "sec" : `"${fn}"`;
      const recipHint = fn === "sec" ? "1 / cos θ" : fn === "csc" ? "1 / sin θ" : "cos θ / sin θ";
      return {
        prompt: `[HL] Without a calculator, evaluate {{${fnDisp}(${ang.expr})}} exactly (use sqrt(...) if needed).`,
        answer: val.spec,
        traps: val.trapOpp ? [{ spec: val.trapOpp, feedback: `Check the sign in ${entry.quadrant}!` }] : undefined,
        hint: `Use {{${fnDisp} theta = ${recipHint}}} at ${ang.tex} (${entry.quadrant}).`,
        solution: [
          `At ${ang.tex} (${entry.quadrant}), {{${fnDisp}(${ang.expr}) = ${val.tex.slice(2, -2)}}}.`,
        ],
      };
    }
    // Principal values of arcsin / arccos / arctan
    const p = rng.pick(INVERSE_POOL);
    const ans = piExpr(p.n, p.d);
    const rangeNote =
      p.fn === "arcsin" ? "[-pi/2, pi/2]" : p.fn === "arccos" ? "[0, pi]" : "(-pi/2, pi/2)";
    return {
      prompt: `[HL] Find the exact principal value of {{${p.fn}(${p.argTex})}} in radians (in terms of π).`,
      answer: piSpec(p.n, p.d),
      hint: `The principal range of ${p.fn} is {{${rangeNote}}}.`,
      solution: [
        `Inside {{${rangeNote}}}, {{${p.fn}(${p.argTex}) = ${ans.expr}}}.`,
      ],
    };
  }

  if (tier === 2) {
    const mode = rng.int(1, 3);
    if (mode === 1) {
      // Inverse composite: sin(arccos(s*a/c)), cos(arcsin(s*a/c)), or tan(arccos(s*a/c))
      const [a0, b0, c] = rng.pick([
        [3, 4, 5],
        [4, 3, 5],
        [5, 12, 13],
        [12, 5, 13],
        [8, 15, 17],
        [15, 8, 17],
        [7, 24, 25],
        [24, 7, 25],
      ] as const);
      const neg = rng.bool();
      const s = neg ? -1 : 1;
      const variant = rng.int(1, 3);
      if (variant === 1) {
        // cos(arcsin(s * a0 / c)) -> ALWAYS positive b0/c (range [-pi/2, pi/2])
        return {
          prompt: `[HL] Find the exact value of {{cos(arcsin(${s * a0}/${c}))}} as a simplified fraction.`,
          answer: fracOrIntSpec(b0, c),
          traps: neg ? [{ spec: fracOrIntSpec(-b0, c), feedback: "arcsin outputs angles in [−π/2, π/2] (Q4/Q1), where cosine is ALWAYS positive!" }] : undefined,
          hint: "Let {{alpha = arcsin(...) ∈ [-pi/2, pi/2]}}; cosine is non-negative on that entire interval.",
          solution: [
            `Since {{alpha ∈ [-pi/2, pi/2]}}, {{cos alpha = +sqrt(1 - (${s * a0}/${c})^2) = ${b0}/${c}}}.`,
          ],
        };
      }
      if (variant === 2) {
        // sin(arccos(s * a0 / c)) -> ALWAYS positive b0/c (range [0, pi])
        return {
          prompt: `[HL] Find the exact value of {{sin(arccos(${s * a0}/${c}))}} as a simplified fraction.`,
          answer: fracOrIntSpec(b0, c),
          traps: neg ? [{ spec: fracOrIntSpec(-b0, c), feedback: "arccos outputs angles in [0, π] (Q1/Q2), where sine is ALWAYS positive!" }] : undefined,
          hint: "Let {{alpha = arccos(...) ∈ [0, pi]}}; sine is non-negative on [0, π].",
          solution: [
            `Since {{alpha ∈ [0, pi]}}, {{sin alpha = +sqrt(1 - (${s * a0}/${c})^2) = ${b0}/${c}}}.`,
          ],
        };
      }
      // tan(arccos(s * a0 / c)) -> s * b0 / a0 (Q2 if negative, Q1 if positive)
      const [sn, sd] = simplify(s * b0, a0);
      return {
        prompt: `[HL] Find the exact value of {{tan(arccos(${s * a0}/${c}))}} as a simplified fraction.`,
        answer: fracOrIntSpec(sn, sd),
        hint: `Let {{alpha = arccos(${s * a0}/${c}) ∈ [0, pi]}} (${neg ? "Quadrant II" : "Quadrant I"}), find {{sin alpha = ${b0}/${c}}}, and divide by {{cos alpha}}.`,
        solution: [
          `In ${neg ? "Q2" : "Q1"}, {{sin alpha = ${b0}/${c}}} and {{cos alpha = ${s * a0}/${c}}}.`,
          `Therefore {{tan alpha = (${b0}/${c}) / (${s * a0}/${c}) = ${sn}/${sd}}}.`,
        ],
      };
    }

    if (mode === 2) {
      // Double-angle tan(2theta) from rational tan(theta) = p/q (p != ±q)
      const pairs: readonly [number, number][] = [
        [1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [2, 1], [3, 1], [3, 2], [4, 3], [5, 2], [5, 3],
      ];
      const [p0, q] = rng.pick(pairs);
      const p = rng.bool() ? p0 : -p0;
      const numVal = 2 * p * q;
      const denVal = q * q - p * p;
      const [sn, sd] = simplify(numVal, denVal);
      const tanStr = q === 1 ? `${p}` : `${p}/${q}`;
      return {
        prompt: `[HL] Given that {{tan theta = ${tanStr}}}, find the exact value of {{tan 2theta}} ${sd === 1 ? "" : "as a simplified fraction"}.`,
        answer: fracOrIntSpec(sn, sd),
        hint: "Apply {{tan 2theta = (2 tan theta) / (1 - tan^2 theta)}}.",
        solution: [
          `{{tan 2theta = (2 * (${tanStr})) / (1 - (${tanStr})^2) = ${numVal} / ${denVal}}} = ${frac(sn, sd)}.`,
        ],
      };
    }

    // Principal range trap: arcsin(sin(theta)) or arccos(cos(theta)) for angles outside principal range
    const isSin = rng.bool();
    const kList = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22] as const;
    const baseK = rng.pick(kList);
    const shift = rng.pick([-1, 0, 1] as const);
    const k12 = baseK + shift * 24;
    const ang = piExpr(k12, 12);
    // Compute exact principal output n/12 * pi
    let outK12: number;
    if (isSin) {
      // Map baseK (in 0..23) to [-6..6] with same sin
      if (baseK <= 6) outK12 = baseK;
      else if (baseK <= 18) outK12 = 12 - baseK;
      else outK12 = baseK - 24;
    } else {
      // Map baseK (in 0..23) to [0..12] with same cos
      outK12 = baseK <= 12 ? baseK : 24 - baseK;
    }
    const out = piExpr(outK12, 12);
    const fnName = isSin ? "arcsin" : "arccos";
    const innerFn = isSin ? "sin" : "cos";
    return {
      prompt: `[HL] Find the exact value of {{${fnName}(${innerFn}(${ang.expr}))}} in terms of π.`,
      answer: piSpec(outK12, 12),
      hint: `Evaluate {{${innerFn}(${ang.expr})}} first, then return the unique angle in {{${isSin ? "[-pi/2, pi/2]" : "[0, pi]"}}}.`,
      solution: [
        `The output of ${fnName} must lie inside {{${isSin ? "[-pi/2, pi/2]" : "[0, pi]"}}}.`,
        `Matching the exact ${innerFn} value inside that interval gives ${out.tex}.`,
      ],
    };
  }

  // Tier 3: Compound-angle sin(A ± B), cos(A ± B), tan(A ± B) from triples/rationals
  const mode = rng.int(1, 2);
  if (mode === 1) {
    // Compound sin(A +- B) or cos(A +- B) for acute angles A, B from Pythagorean triples
    const triples: readonly [number, number, number][] = [
      [3, 4, 5],
      [4, 3, 5],
      [5, 12, 13],
      [12, 5, 13],
      [8, 15, 17],
      [15, 8, 17],
      [7, 24, 25],
    ];
    const [sa, ca, ha] = rng.pick(triples);
    const [sb, cb, hb] = rng.pick(triples);
    const isSin = rng.bool();
    const isPlus = rng.bool();
    const op = isPlus ? "+" : "-";
    let numAns: number;
    if (isSin) {
      numAns = isPlus ? sa * cb + ca * sb : sa * cb - ca * sb;
    } else {
      numAns = isPlus ? ca * cb - sa * sb : ca * cb + sa * sb;
    }
    const denAns = ha * hb;
    const [sn, sd] = simplify(numAns, denAns);
    const target = `${isSin ? "sin" : "cos"}(alpha ${op} beta)`;
    return {
      prompt: `[HL] Acute angles α and β satisfy {{sin alpha = ${sa}/${ha}}} and {{cos beta = ${cb}/${hb}}}. Find the exact value of {{${target}}} ${sd === 1 ? "" : "as a simplified fraction"}.`,
      answer: fracOrIntSpec(sn, sd),
      hint: `Find {{cos alpha = ${ca}/${ha}}} and {{sin beta = ${sb}/${hb}}}, then expand {{${target}}}.`,
      solution: [
        `Since α, β are acute: {{cos alpha = ${ca}/${ha}}} and {{sin beta = ${sb}/${hb}}}.`,
        isSin
          ? `{{${target} = (${sa}/${ha})(${cb}/${hb}) ${op} (${ca}/${ha})(${sb}/${hb}) = ${numAns}/${denAns}}} = ${frac(sn, sd)}.`
          : `{{${target} = (${ca}/${ha})(${cb}/${hb}) ${isPlus ? "-" : "+"} (${sa}/${ha})(${sb}/${hb}) = ${numAns}/${denAns}}} = ${frac(sn, sd)}.`,
      ],
    };
  }

  // Compound tan(alpha +- beta) from rational tan alpha, tan beta (avoiding zero denominator)
  const fracs: readonly [number, number][] = [
    [1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [3, 4], [2, 5], [3, 5], [1, 6], [1, 7],
  ];
  const [rawP1, q1] = rng.pick(fracs);
  const [p2, rawQ2] = rng.pick(fracs);
  const isPlus = rng.bool();
  const p1 = rng.bool() ? -rawP1 : rawP1;
  let q2 = rawQ2;
  // Ensure denominator q1*q2 -+ p1*p2 != 0
  let den = isPlus ? q1 * q2 - p1 * p2 : q1 * q2 + p1 * p2;
  if (den === 0) {
    q2 += 1;
    den = isPlus ? q1 * q2 - p1 * p2 : q1 * q2 + p1 * p2;
  }
  const numVal = isPlus ? p1 * q2 + p2 * q1 : p1 * q2 - p2 * q1;
  const [sn, sd] = simplify(numVal, den);
  const op = isPlus ? "+" : "-";
  return {
    prompt: `[HL] Given {{tan alpha = ${p1}/${q1}}} and {{tan beta = ${p2}/${q2}}}, find the exact value of {{tan(alpha ${op} beta)}} ${sd === 1 ? "" : "as a simplified fraction"}.`,
    answer: fracOrIntSpec(sn, sd),
    hint: `Apply {{tan(alpha ${op} beta) = (tan alpha ${op} tan beta) / (1 ${isPlus ? "-" : "+"} tan alpha tan beta)}}.`,
    solution: [
      `Numerator {{= ${p1}/${q1} ${op} ${p2}/${q2} = ${numVal}/${q1 * q2}}}; denominator {{= 1 ${isPlus ? "-" : "+"} (${p1 * p2})/${q1 * q2} = ${den}/${q1 * q2}}}.`,
      `Dividing gives {{${numVal}/${den}}} = ${frac(sn, sd)}.`,
    ],
  };
}

export const drills: Drill[] = [
  {
    id: "3a-geometry-trig.radians-arcs-sectors",
    topicId: "3a-geometry-trig",
    title: "Radians ↔ Degrees, Arcs & Sectors",
    level: 1,
    ibLevel: "SL",
    guideRef: "radians-unit-circle-exact",
    generate: genRadiansArcsSectors,
  },
  {
    id: "3a-geometry-trig.exact-unit-circle",
    topicId: "3a-geometry-trig",
    title: "Non-GDC Exact Unit-Circle Ratios",
    level: 1,
    ibLevel: "SL",
    guideRef: "radians-unit-circle-exact",
    generate: genExactUnitCircle,
  },
  {
    id: "3a-geometry-trig.3d-cosine-area",
    topicId: "3a-geometry-trig",
    title: "3D Geometry, Cosine Rule, Bearings & Area",
    level: 2,
    ibLevel: "SL",
    guideRef: "3d-geometry-sine-cosine",
    generate: gen3dCosineArea,
  },
  {
    id: "3a-geometry-trig.sinusoidal-features",
    topicId: "3a-geometry-trig",
    title: "Sinusoidal Amplitude, Period, Midline & Phase Shift",
    level: 2,
    ibLevel: "SL",
    guideRef: "trig-identities-graphs-equations",
    generate: genSinusoidalFeatures,
  },
  {
    id: "3a-geometry-trig.hl-reciprocal-inverse-compound",
    topicId: "3a-geometry-trig",
    title: "[HL] Reciprocal, Inverse & Compound-Angle Exact Values",
    level: 3,
    ibLevel: "HL",
    guideRef: "reciprocal-inverse-compound-hl",
    generate: genHlTrig,
  },
];
