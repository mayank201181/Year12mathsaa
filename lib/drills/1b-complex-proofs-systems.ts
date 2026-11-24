import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, gcd, num, poly, simplify } from "./helpers.ts";

/** Format a Cartesian complex number a + bi cleanly for {{ }} and AnswerSpec.expr. */
function fmtComplex(a: number, b: number): string {
  const re = clean(a);
  const im = clean(b);
  if (re === 0 && im === 0) return "0";
  if (re === 0) {
    if (im === 1) return "i";
    if (im === -1) return "-i";
    return `${im}i`;
  }
  if (im === 0) return String(re);
  const sign = im > 0 ? " + " : " - ";
  const absIm = Math.abs(im);
  return `${re}${sign}${absIm === 1 ? "" : absIm}i`;
}

/** Format a simplified rational multiple of pi: (p/d)*pi into ASCII expr like "3pi/4", "-pi/2", "pi". */
function fmtPiFrac(p: number, d: number): string {
  const [n, den] = simplify(p, d);
  if (n === 0) return "0";
  const neg = n < 0 ? "-" : "";
  const an = Math.abs(n);
  if (den === 1) return an === 1 ? `${neg}pi` : `${neg}${an}pi`;
  return an === 1 ? `${neg}pi/${den}` : `${neg}${an}pi/${den}`;
}

/** Wrap a multiple of pi/d (numerator p, denominator d) strictly into (-d, d], i.e. (-pi, pi]. */
function wrapPrincipalNum(p: number, d: number): number {
  const period = 2 * d;
  let r = ((p % period) + period) % period;
  if (r > d) r -= period;
  return r;
}

/** Format linear 3-variable LHS nicely via poly(). */
function fmtLin3(a: number, b: number, c: number): string {
  return poly([
    [a, "x"],
    [b, "y"],
    [c, "z"],
  ]);
}

const PYTH_TRIPLES: ReadonlyArray<readonly [number, number, number]> = [
  [3, 4, 5],
  [5, 12, 13],
  [8, 15, 17],
  [7, 24, 25],
  [6, 8, 10],
  [9, 12, 15],
];

interface SpecialRay {
  p: number; // angle = p * pi / 12 in (-12, 12]
  makeCartesian: (k: number) => string;
  quadrant: string;
}

const SPECIAL_RAYS: readonly SpecialRay[] = [
  { p: 2, makeCartesian: (k) => `${k === 1 ? "" : k}sqrt(3) + ${k === 1 ? "" : k}i`, quadrant: "Quadrant I (ref π/6)" },
  { p: 3, makeCartesian: (k) => `${k} + ${k === 1 ? "" : k}i`, quadrant: "Quadrant I (ref π/4)" },
  { p: 4, makeCartesian: (k) => `${k} + ${k === 1 ? "" : k}sqrt(3)i`, quadrant: "Quadrant I (ref π/3)" },
  { p: 6, makeCartesian: (k) => `${k === 1 ? "" : k}i`, quadrant: "positive imaginary axis" },
  { p: 8, makeCartesian: (k) => `-${k} + ${k === 1 ? "" : k}sqrt(3)i`, quadrant: "Quadrant II (ref π/3)" },
  { p: 9, makeCartesian: (k) => `-${k} + ${k === 1 ? "" : k}i`, quadrant: "Quadrant II (ref π/4)" },
  { p: 10, makeCartesian: (k) => `-${k === 1 ? "" : k}sqrt(3) + ${k === 1 ? "" : k}i`, quadrant: "Quadrant II (ref π/6)" },
  { p: 12, makeCartesian: (k) => `-${k}`, quadrant: "negative real axis" },
  { p: -10, makeCartesian: (k) => `-${k === 1 ? "" : k}sqrt(3) - ${k === 1 ? "" : k}i`, quadrant: "Quadrant III (ref π/6)" },
  { p: -9, makeCartesian: (k) => `-${k} - ${k === 1 ? "" : k}i`, quadrant: "Quadrant III (ref π/4)" },
  { p: -8, makeCartesian: (k) => `-${k} - ${k === 1 ? "" : k}sqrt(3)i`, quadrant: "Quadrant III (ref π/3)" },
  { p: -6, makeCartesian: (k) => `-${k === 1 ? "" : k}i`, quadrant: "negative imaginary axis" },
  { p: -4, makeCartesian: (k) => `${k} - ${k === 1 ? "" : k}sqrt(3)i`, quadrant: "Quadrant IV (ref π/3)" },
  { p: -3, makeCartesian: (k) => `${k} - ${k === 1 ? "" : k}i`, quadrant: "Quadrant IV (ref π/4)" },
  { p: -2, makeCartesian: (k) => `${k === 1 ? "" : k}sqrt(3) - ${k === 1 ? "" : k}i`, quadrant: "Quadrant IV (ref π/6)" },
];

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: Complex Arithmetic, Conjugates & Modulus
  // ===========================================================================
  {
    id: "1b-complex-proofs-systems.complex-arithmetic-modulus",
    topicId: "1b-complex-proofs-systems",
    title: "Complex Arithmetic, Division & Modulus",
    level: 1,
    ibLevel: "HL",
    guideRef: "complex-cartesian-argand",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Product (a + bi)(c + di)
          const a = rng.nonZero(-6, 6);
          const b = rng.nonZero(-6, 6);
          const c = rng.nonZero(-5, 5);
          const d = rng.nonZero(-5, 5);
          const re = a * c - b * d;
          const im = a * d + b * c;
          const ans = fmtComplex(re, im);
          return {
            prompt: `Expand and simplify {{(${fmtComplex(a, b)})(${fmtComplex(c, d)})}} in Cartesian form {{a + bi}}.`,
            answer: { type: "expression", expr: ans, form: "simplified" },
            hint: "Expand like two binomials and replace {{i^2}} with {{-1}}.",
            solution: [
              `Expand: {{${a * c} + (${a * d})i + (${b * c})i + (${b * d})i^2}}.`,
              `Replace {{i^2 = -1}}: real part = {{${a * c} - (${b * d}) = ${re}}}, imaginary part = {{${a * d} + (${b * c}) = ${im}}}.`,
              `Result: {{${ans}}}.`,
            ],
          };
        }
        if (mode === 1) {
          // Exact integer modulus via Pythagorean triple
          const [t1, t2, h] = rng.pick(PYTH_TRIPLES);
          const swap = rng.bool();
          const a = (swap ? t2 : t1) * (rng.bool() ? 1 : -1);
          const b = (swap ? t1 : t2) * (rng.bool() ? 1 : -1);
          return {
            prompt: `Calculate the exact modulus {{|z|}} of {{z = ${fmtComplex(a, b)}}}.`,
            answer: { type: "number", value: h },
            hint: "Use {{|a + bi| = sqrt(a^2 + b^2)}}.",
            solution: [
              `{{|z| = sqrt((${a})^2 + (${b})^2) = sqrt(${a * a} + ${b * b}) = sqrt(${h * h}) = ${h}}}.`,
            ],
          };
        }
        // Linear combination with conjugate: p z + q z*
        const a = rng.nonZero(-6, 6);
        const b = rng.nonZero(-6, 6);
        const p = rng.int(2, 4);
        const q = rng.nonZero(-3, 3);
        const re = (p + q) * a;
        const im = (p - q) * b;
        const ans = fmtComplex(re, im);
        const opStr = q > 0 ? `+ ${q === 1 ? "" : q}z^∗` : `- ${Math.abs(q) === 1 ? "" : Math.abs(q)}z^∗`;
        return {
          prompt: `Given {{z = ${fmtComplex(a, b)}}}, evaluate {{${p}z ${opStr}}} in simplified form {{a + bi}}.`,
          answer: { type: "expression", expr: ans, form: "simplified" },
          hint: `First write the conjugate {{z^∗ = ${fmtComplex(a, -b)}}}, then combine real and imaginary parts.`,
          solution: [
            `Conjugate: {{z^∗ = ${fmtComplex(a, -b)}}}.`,
            `Real part: {{${p}(${a}) + (${q})(${a}) = ${re}}}; imaginary part: {{${p}(${b}) + (${q})(${-b}) = ${im}}}.`,
            `Result: {{${ans}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.65)) {
          // Exact division (P + Qi)/(c + di) = x + yi
          const x = rng.nonZero(-5, 5);
          const y = rng.nonZero(-5, 5);
          const c = rng.nonZero(-4, 4);
          const d = rng.nonZero(-4, 4);
          const P = x * c - y * d;
          const Q = x * d + y * c;
          const den = c * c + d * d;
          const ans = fmtComplex(x, y);
          return {
            prompt: `Express {{(${fmtComplex(P, Q)}) / (${fmtComplex(c, d)})}} in simplified Cartesian form {{a + bi}}.`,
            answer: { type: "expression", expr: ans, form: "simplified" },
            hint: `Multiply numerator and denominator by the conjugate {{${fmtComplex(c, -d)}}}.`,
            solution: [
              `Multiply top and bottom by {{${fmtComplex(c, -d)}}}.`,
              `Denominator: {{(${c})^2 + (${d})^2 = ${den}}}.`,
              `Numerator: {{(${fmtComplex(P, Q)})(${fmtComplex(c, -d)}) = ${fmtComplex(x * den, y * den)}}}.`,
              `Divide by {{${den}}}: {{${ans}}}.`,
            ],
          };
        }
        // Modulus of product |(a+bi)(c+di)|
        const [t1, t2, h1] = rng.pick(PYTH_TRIPLES.slice(0, 4));
        const [u1, u2, h2] = rng.pick(PYTH_TRIPLES.slice(0, 4));
        const a = t1 * (rng.bool() ? 1 : -1);
        const b = t2 * (rng.bool() ? 1 : -1);
        const c = u1 * (rng.bool() ? 1 : -1);
        const d = u2 * (rng.bool() ? 1 : -1);
        const modVal = h1 * h2;
        return {
          prompt: `Use modulus laws to calculate {{|(${fmtComplex(a, b)})(${fmtComplex(c, d)})|}}.`,
          answer: { type: "number", value: modVal },
          hint: "Apply {{|uv| = |u||v|}} instead of expanding the product.",
          solution: [
            `{{|${fmtComplex(a, b)}| = ${h1}}} and {{|${fmtComplex(c, d)}| = ${h2}}}.`,
            `By {{|uv| = |u||v|}}, the modulus is {{${h1} * ${h2} = ${modVal}}}.`,
          ],
        };
      }

      // Tier 3: Solve linear equation involving z and z*
      const x = rng.nonZero(-6, 6);
      const y = rng.nonZero(-6, 6);
      const p = rng.int(2, 5);
      let q = rng.nonZero(-4, 4);
      while (Math.abs(q) === p) q = rng.nonZero(-4, 4);
      const R = (p + q) * x;
      const I = (p - q) * y;
      const ans = fmtComplex(x, y);
      const qTerm = q > 0 ? `+ ${q === 1 ? "" : q}z^∗` : `- ${Math.abs(q) === 1 ? "" : Math.abs(q)}z^∗`;
      return {
        prompt: `Solve {{${p}z ${qTerm} = ${fmtComplex(R, I)}}} for {{z}} in simplified Cartesian form {{a + bi}}.`,
        answer: { type: "expression", expr: ans, form: "simplified" },
        hint: "Substitute {{z = x + yi}} and {{z^∗ = x - yi}}, then equate real and imaginary parts separately.",
        solution: [
          `Substitute {{z = x + yi}}: {{${p + q}x + (${p - q})yi = ${fmtComplex(R, I)}}}.`,
          `Equate real parts: {{${p + q}x = ${R} => x = ${x}}}.`,
          `Equate imaginary parts: {{${p - q}y = ${I} => y = ${y}}}, so {{z = ${ans}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: Principal Argument & Polar/Euler Conversion
  // ===========================================================================
  {
    id: "1b-complex-proofs-systems.polar-euler-arg",
    topicId: "1b-complex-proofs-systems",
    title: "Principal Argument & Polar/Euler Form",
    level: 2,
    ibLevel: "HL",
    guideRef: "polar-euler-demoivre",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const ray = rng.pick(SPECIAL_RAYS);
        const k = rng.int(1, 10);
        const zStr = ray.makeCartesian(k);
        const ansExpr = fmtPiFrac(ray.p, 12);
        return {
          prompt: `Find the exact principal argument arg(z) ∈ (−π, π] in terms of {{pi}} for {{z = ${zStr}}}.`,
          answer: { type: "expression", expr: ansExpr },
          hint: "Sketch the point on the Argand plane first to confirm its quadrant, then restrict the angle to {{(-pi, pi]}}.",
          solution: [
            `Locate {{z = ${zStr}}}: it lies in ${ray.quadrant}.`,
            `Measuring within {{(-pi, pi]}} gives arg(z) = {{${ansExpr}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Principal argument of product/quotient in Euler form (with wrap-around into (-pi, pi])
        const r1 = rng.int(2, 9);
        const r2 = rng.int(2, 9);
        const choices = [-11, -10, -9, -8, -6, -4, -3, -2, 2, 3, 4, 6, 8, 9, 10, 11];
        const p1 = rng.pick(choices);
        let p2 = rng.pick(choices);
        const isProduct = rng.bool();
        let raw = isProduct ? p1 + p2 : p1 - p2;
        let wrapped = wrapPrincipalNum(raw, 12);
        while (wrapped === 0) {
          p2 = rng.pick(choices);
          raw = isProduct ? p1 + p2 : p1 - p2;
          wrapped = wrapPrincipalNum(raw, 12);
        }
        const a1 = fmtPiFrac(p1, 12);
        const a2 = fmtPiFrac(p2, 12);
        const ans = fmtPiFrac(wrapped, 12);
        const opWord = isProduct ? "zw" : "z/w";
        const opSign = isProduct ? "+" : "-";
        return {
          prompt: `Given {{z = ${r1} e^(i(${a1}))}} and {{w = ${r2} e^(i(${a2}))}}, find the exact principal argument arg(${opWord}) ∈ (−π, π] in terms of {{pi}}.`,
          answer: { type: "expression", expr: ans },
          hint: isProduct
            ? "Add the arguments and adjust by {{+- 2pi}} if the result lies outside {{(-pi, pi]}}."
            : "Subtract the arguments (arg(z) − arg(w)) and adjust by {{+- 2pi}} into {{(-pi, pi]}}.",
          solution: [
            `Combine arguments: {{(${a1}) ${opSign} (${a2}) = ${fmtPiFrac(raw, 12)}}}.`,
            wrapped === raw
              ? `This already lies in {{(-pi, pi]}}, so the principal argument is {{${ans}}}.`
              : `Adjust by {{2pi}} to bring into {{(-pi, pi]}}: {{${ans}}}.`,
          ],
        };
      }

      // Tier 3: Euler form to exact Cartesian form (or negative-modulus normalisation)
      if (rng.bool(0.55)) {
        const angleOptions: ReadonlyArray<{ p: number; d: number; cosN: number; sinN: number; label: string }> = [
          { p: 1, d: 6, cosN: 1, sinN: 1, label: "pi/6" },
          { p: 5, d: 6, cosN: -1, sinN: 1, label: "5pi/6" },
          { p: -5, d: 6, cosN: -1, sinN: -1, label: "-5pi/6" },
          { p: -1, d: 6, cosN: 1, sinN: -1, label: "-pi/6" },
          { p: 1, d: 3, cosN: 1, sinN: 1, label: "pi/3" },
          { p: 2, d: 3, cosN: -1, sinN: 1, label: "2pi/3" },
          { p: -2, d: 3, cosN: -1, sinN: -1, label: "-2pi/3" },
          { p: -1, d: 3, cosN: 1, sinN: -1, label: "-pi/3" },
        ];
        const ang = rng.pick(angleOptions);
        const m = rng.int(1, 8);
        const r = 2 * m;
        let expr: string;
        if (ang.d === 6) {
          // r cos = ± m sqrt(3), r sin = ± m
          const rePart = `${ang.cosN < 0 ? "-" : ""}${m === 1 ? "" : m}sqrt(3)`;
          const imSign = ang.sinN > 0 ? " + " : " - ";
          expr = `${rePart}${imSign}${m === 1 ? "" : m}i`;
        } else {
          // r cos = ± m, r sin = ± m sqrt(3)
          const rePart = `${ang.cosN < 0 ? "-" : ""}${m}`;
          const imSign = ang.sinN > 0 ? " + " : " - ";
          expr = `${rePart}${imSign}${m === 1 ? "" : m}sqrt(3)i`;
        }
        return {
          prompt: `Convert {{z = ${r} e^(i(${ang.label}))}} to exact Cartesian form {{a + bi}} (use \`sqrt(3)\`).`,
          answer: { type: "expression", expr },
          hint: "Use {{r e^(i theta) = r cos(theta) + i r sin(theta)}} with exact special-angle values.",
          solution: [
            `Apply Euler's formula: {{z = ${r}(cos(${ang.label}) + i sin(${ang.label}))}}.`,
            `Evaluate exact trig ratios and multiply by {{${r}}}: {{z = ${expr}}}.`,
          ],
        };
      }
      // Normalise negative modulus -r e^(i theta) into standard principal argument
      const r = rng.int(2, 12);
      const p = rng.pick([-11, -10, -9, -8, -7, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11]);
      const thetaStr = fmtPiFrac(p, 12);
      const shifted = wrapPrincipalNum(p + 12, 12);
      const ans = fmtPiFrac(shifted, 12);
      return {
        prompt: `Write {{w = -${r}(cos(${thetaStr}) + i sin(${thetaStr}))}} in standard polar form with {{r > 0}}. Find the exact principal argument arg(w) ∈ (−π, π] in terms of {{pi}}.`,
        answer: { type: "expression", expr: ans },
        hint: "Absorb the minus sign by adding or subtracting {{pi}} so the angle lands inside {{(-pi, pi]}}.",
        solution: [
          `Since {{-1 = e^(i pi)}}, shift the argument by {{pi}}: {{${thetaStr} + pi}}.`,
          `Reducing into {{(-pi, pi]}} gives arg(w) = {{${ans}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: De Moivre Powers & nth Roots
  // ===========================================================================
  {
    id: "1b-complex-proofs-systems.demoivre-nth-roots",
    topicId: "1b-complex-proofs-systems",
    title: "De Moivre Powers & nth Roots",
    level: 2,
    ibLevel: "HL",
    guideRef: "polar-euler-demoivre",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          // Modulus of nth roots of z^n = R e^(i theta)
          const base = rng.int(2, 5);
          const n = base <= 3 ? rng.int(3, 5) : rng.int(2, 3);
          const R = Math.pow(base, n);
          const p = rng.pick([-5, -3, -2, -1, 1, 2, 3, 5, 6]);
          const theta = fmtPiFrac(p, 6);
          return {
            prompt: `Find the modulus of every complex root of the equation {{z^${n} = ${R} e^(i(${theta}))}}.`,
            answer: { type: "number", value: base },
            hint: `Take moduli of both sides: {{|z|^${n} = ${R}}}, then take the positive ${n}th root.`,
            solution: [
              `Every ${n}th root has modulus {{${R}^(1/${n}) = ${base}}}.`,
            ],
          };
        }
        // Angular spacing 2pi/n between consecutive roots
        const n = rng.pick([3, 4, 5, 6, 8, 9, 10, 12]);
        const R = rng.int(2, 25);
        const p = rng.pick([-3, -2, -1, 1, 2, 3]);
        const theta = fmtPiFrac(p, 4);
        const spacing = fmtPiFrac(2, n);
        return {
          prompt: `The ${n} roots of {{z^${n} = ${R} e^(i(${theta}))}} form a regular ${n}-gon on the Argand plane. Find the exact angle (in radians, in terms of {{pi}}) between consecutive roots.`,
          answer: { type: "expression", expr: spacing },
          hint: `The ${n} roots divide the full circle {{2pi}} into ${n} equal sectors.`,
          solution: [
            `Consecutive roots are spaced by {{2pi / ${n} = ${spacing}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Principal argument of z^n via De Moivre
        const r = rng.int(2, 8);
        const d = rng.pick([3, 4, 6, 8, 12]);
        let p = rng.nonZero(-(d - 1), d - 1);
        while (gcd(Math.abs(p), d) !== 1) p = rng.nonZero(-(d - 1), d - 1);
        let n = rng.int(3, 9);
        let wrapped = wrapPrincipalNum(n * p, d);
        while (wrapped === 0) {
          n = rng.int(3, 9);
          wrapped = wrapPrincipalNum(n * p, d);
        }
        const theta = fmtPiFrac(p, d);
        const ans = fmtPiFrac(wrapped, d);
        return {
          prompt: `Let {{z = ${r} e^(i(${theta}))}}. Use De Moivre's theorem to find the exact principal argument arg({{z^${n}}}) ∈ (−π, π] in terms of {{pi}}.`,
          answer: { type: "expression", expr: ans },
          hint: `Multiply the argument by {{${n}}} and adjust by multiples of {{2pi}} into {{(-pi, pi]}}.`,
          solution: [
            `By De Moivre's theorem, raw argument = {{${n} * (${theta}) = ${fmtPiFrac(n * p, d)}}}.`,
            `Adjusting modulo {{2pi}} into {{(-pi, pi]}} gives {{${ans}}}.`,
          ],
        };
      }

      // Tier 3: Exact integer value of real-axis De Moivre power OR k-th nth-root argument
      if (rng.bool(0.5)) {
        const k = rng.int(1, 3);
        const forms = [
          { base: `${k} + ${k === 1 ? "" : k}i`, n: 4, val: -4 * Math.pow(k, 4), rDesc: `${k}sqrt(2)`, ang: "pi/4" },
          { base: `${k} - ${k === 1 ? "" : k}i`, n: 4, val: -4 * Math.pow(k, 4), rDesc: `${k}sqrt(2)`, ang: "-pi/4" },
          { base: `${k} + ${k === 1 ? "" : k}sqrt(3)i`, n: 3, val: -8 * Math.pow(k, 3), rDesc: `${2 * k}`, ang: "pi/3" },
          { base: `${k} - ${k === 1 ? "" : k}sqrt(3)i`, n: 3, val: -8 * Math.pow(k, 3), rDesc: `${2 * k}`, ang: "-pi/3" },
          { base: `${k} + ${k === 1 ? "" : k}sqrt(3)i`, n: 6, val: 64 * Math.pow(k, 6), rDesc: `${2 * k}`, ang: "pi/3" },
          { base: `-${k} + ${k === 1 ? "" : k}i`, n: 4, val: -4 * Math.pow(k, 4), rDesc: `${k}sqrt(2)`, ang: "3pi/4" },
        ];
        const f = rng.pick(forms);
        return {
          prompt: `Use De Moivre's theorem to find the exact integer value of {{(${f.base})^${f.n}}}.`,
          answer: { type: "number", value: f.val },
          hint: `Convert {{${f.base}}} to Euler form {{${f.rDesc} e^(i(${f.ang}))}}, then raise modulus to power ${f.n} and multiply angle by ${f.n}.`,
          solution: [
            `In Euler form, {{${f.base} = ${f.rDesc} e^(i(${f.ang}))}}.`,
            `Applying De Moivre's theorem gives {{(${f.base})^${f.n} = ${f.val}}}.`,
          ],
        };
      }
      // Specific nth-root argument w_m = r^(1/n) e^(i(theta + 2 m pi)/n)
      const n = rng.pick([3, 4, 5, 6]);
      const p0 = rng.pick([-3, -2, -1, 1, 2, 3]); // theta = p0 * pi / 4
      const R = rng.int(2, 16);
      const m = rng.int(1, n - 1);
      // angle = (p0 * pi/4 + 2 m pi)/n = (p0 + 8 m) * pi / (4 n)
      const numRaw = p0 + 8 * m;
      const den = 4 * n;
      const wrapped = wrapPrincipalNum(numRaw, den);
      const thetaStr = fmtPiFrac(p0, 4);
      const ans = fmtPiFrac(wrapped, den);
      return {
        prompt: `The ${n} roots of {{z^${n} = ${R} e^(i(${thetaStr}))}} are labelled {{z_k = ${R}^(1/${n}) e^(i(theta + 2k pi)/${n})}} for {{k = 0, 1, …, ${n - 1}}}. Find the exact principal argument ∈ (−π, π] of {{z_${m}}} in terms of {{pi}}.`,
        answer: { type: "expression", expr: ans },
        hint: `Compute {{((${thetaStr}) + ${2 * m}pi)/${n}}}, then reduce modulo {{2pi}} into {{(-pi, pi]}}.`,
        solution: [
          `For {{k = ${m}}}, raw angle = {{((${thetaStr}) + ${2 * m}pi)/${n} = ${fmtPiFrac(numRaw, den)}}}.`,
          `Expressing inside {{(-pi, pi]}} gives {{${ans}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4: Mathematical Induction & Proof by Contradiction (FA2029 — NO counterexample)
  // ===========================================================================
  {
    id: "1b-complex-proofs-systems.induction-contradiction-steps",
    topicId: "1b-complex-proofs-systems",
    title: "Induction Steps & Contradiction Setup",
    level: 2,
    ibLevel: "HL",
    guideRef: "induction-contradiction",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // (k+1)th term of sum (a r + b)
          const a = rng.int(2, 9);
          const b = rng.nonZero(-9, 9);
          const summand = poly([
            [a, "r"],
            [b, ""],
          ]);
          const ansExpr = poly([
            [a, "k"],
            [a + b, ""],
          ]);
          return {
            prompt: `In proving a closed-form formula for {{sum_(r=1)^n (${summand})}} by mathematical induction, what exact simplified expression in {{k}} must be added to the {{n = k}} sum during the {{n = k + 1}} step?`,
            answer: { type: "expression", expr: ansExpr, form: "simplified" },
            hint: `Substitute {{r = k + 1}} into {{${summand}}} and simplify.`,
            solution: [
              `The {{(k + 1)}}th term is {{${a}(k + 1) ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`} = ${ansExpr}}}.`,
            ],
          };
        }
        if (mode === 1) {
          // Proof by contradiction for sqrt(p) irrational
          const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];
          const p = rng.pick(primes);
          const vA = rng.pick(["a", "p", "u"]);
          const vB = vA === "a" ? "b" : vA === "p" ? "q" : "v";
          return {
            prompt: `In a proof by contradiction that {{sqrt(${p})}} is irrational, assuming {{sqrt(${p}) = ${vA}/${vB}}} in lowest terms leads to {{${vA}^2 = ${p}${vB}^2}} and hence {{${vA} = ${p}m}}. Substituting {{${vA} = ${p}m}} back gives {{${vB}^2 = c m^2}}. Find the integer {{c}}.`,
            answer: { type: "number", value: p },
            hint: `Substitute {{${vA} = ${p}m}} into {{${vA}^2 = ${p}${vB}^2}} and divide both sides by {{${p}}}.`,
            solution: [
              `{{(${p}m)^2 = ${p}${vB}^2 => ${p * p}m^2 = ${p}${vB}^2 => ${vB}^2 = ${p}m^2}}.`,
              `Thus {{c = ${p}}}, showing {{${p}}} also divides {{${vB}}} and contradicting {{gcd(${vA}, ${vB}) = 1}}.`,
            ],
          };
        }
        // Base case evaluation of divisibility induction f(n) = a^n - b^n divisible by d = a - b at n = 2
        const b = rng.int(1, 6);
        const d = rng.int(2, 9);
        const a = b + d;
        const val = a * a - b * b;
        const quot = val / d;
        return {
          prompt: `To test {{P(2)}} while proving {{${a}^n - ${b}^n}} is divisible by {{${d}}}, express {{${a}^2 - ${b}^2}} as {{${d} * q}}. What integer is {{q}}?`,
          answer: { type: "number", value: quot },
          hint: `Evaluate {{${a}^2 - ${b}^2 = ${val}}} and divide by {{${d}}} (or factor {{(${a} - ${b})(${a} + ${b})}}).`,
          solution: [
            `{{${a}^2 - ${b}^2 = ${a * a} - ${b * b} = ${val} = ${d} * ${quot}}}, so {{q = ${quot}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.55)) {
          // Divisibility inductive step a^(k+1) - b^(k+1) = d(M A + b^k)
          const b = rng.int(1, 7);
          const d = rng.int(2, 10);
          const a = b + d;
          return {
            prompt: `In proving by induction that {{${a}^n - ${b}^n}} is divisible by {{${d}}} for all {{n ∈ ℤ^+}}, we assume {{${a}^k - ${b}^k = ${d}A}} ({{A ∈ ℤ}}). Substituting {{${a}^k = ${d}A + ${b}^k}} into {{${a}^(k+1) - ${b}^(k+1)}} yields {{${d}(M A + ${b}^k)}}. Find the integer {{M}}.`,
            answer: { type: "number", value: a },
            hint: `Write {{${a}^(k+1) - ${b}^(k+1) = ${a}(${d}A + ${b}^k) - ${b} * ${b}^k}} and factor out {{${d}}}.`,
            solution: [
              `{{${a}(${d}A + ${b}^k) - ${b} * ${b}^k = ${a * d}A + (${a} - ${b})${b}^k = ${a * d}A + ${d} * ${b}^k = ${d}(${a}A + ${b}^k)}}.`,
              `Hence {{M = ${a}}}.`,
            ],
          };
        }
        // Summation inductive step quadratic simplification: S(k) + u_{k+1} for sum (2 a r + b)
        const a = rng.int(1, 5);
        const b = rng.nonZero(-6, 6);
        const summand = poly([
          [2 * a, "r"],
          [b, ""],
        ]);
        const sk = poly([
          [a, "k^2"],
          [a + b, "k"],
        ]);
        const ans = poly([
          [a, "k^2"],
          [3 * a + b, "k"],
          [2 * a + b, ""],
        ]);
        return {
          prompt: `In proving {{sum_(r=1)^n (${summand}) = ${poly([[a, "n^2"], [a + b, "n"]])}}} by induction, add the {{(k + 1)}}th term to {{${sk}}} and write the result as a simplified expanded quadratic in {{k}}.`,
          answer: { type: "expression", expr: ans, form: "expanded" },
          hint: `Add {{${2 * a}(k + 1) ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}}} to {{${sk}}} and collect like terms.`,
          solution: [
            `The {{(k + 1)}}th term is {{${poly([[2 * a, "k"], [2 * a + b, ""]])}}}.`,
            `Adding to {{${sk}}} gives {{${ans}}}.`,
          ],
        };
      }

      // Tier 3: Inequality induction smallest valid base case n_0 for 2^n > a n + b (guaranteed monotonic for n >= n_0)
      if (rng.bool(0.65)) {
        const a = rng.int(2, 12);
        const b = rng.int(1, 20);
        let n0 = 2;
        while (Math.pow(2, n0) <= a * n0 + b) n0++;
        return {
          prompt: `When proving by mathematical induction that {{2^n > ${a}n + ${b}}} for all integers {{n >= n_0}}, find the smallest valid integer base case {{n_0 >= 2}}.`,
          answer: { type: "number", value: n0 },
          hint: `Evaluate {{2^n}} and {{${a}n + ${b}}} for consecutive integers until {{2^n}} first exceeds {{${a}n + ${b}}}.`,
          solution: [
            `At {{n = ${n0 - 1}}}: {{2^${n0 - 1} = ${Math.pow(2, n0 - 1)} <= ${a * (n0 - 1) + b}}} (false).`,
            `At {{n = ${n0}}}: {{2^${n0} = ${Math.pow(2, n0)} > ${a * n0 + b}}} (true, and since {{2^n > ${a}}}, it stays true for all {{n >= ${n0}}}).`,
            `Smallest valid base case: {{n_0 = ${n0}}}.`,
          ],
        };
      }
      // Higher-derivative induction coefficient check: d^n/dx^n (x e^(m x)) = m^(n-1)(m x + n) e^(m x)
      const m = rng.int(2, 4);
      const n = rng.int(2, 5);
      const x0 = rng.int(1, 6);
      const coeff = Math.pow(m, n - 1) * (m * x0 + n);
      return {
        prompt: `By mathematical induction, {{d^n/dx^n (x e^(${m}x)) = ${m}^(n - 1)(${m}x + n) e^(${m}x)}} for {{n ∈ ℤ^+}}. Evaluate the exact coefficient multiplying {{e^(${m * x0})}} when {{n = ${n}}} and {{x = ${x0}}}.`,
        answer: { type: "number", value: coeff },
        hint: `Substitute {{n = ${n}}} and {{x = ${x0}}} into {{${m}^(n - 1)(${m}x + n)}}.`,
        solution: [
          `Coefficient = {{${m}^${n - 1}(${m} * ${x0} + ${n}) = ${Math.pow(m, n - 1)} * ${m * x0 + n} = ${coeff}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 5: 3×3 Linear Systems & Parameter Consistency
  // ===========================================================================
  {
    id: "1b-complex-proofs-systems.systems-3x3-consistency",
    topicId: "1b-complex-proofs-systems",
    title: "3×3 Linear Systems & Consistency",
    level: 3,
    ibLevel: "HL",
    guideRef: "linear-systems-3x3",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        // Classify a reduced 3x3 row-echelon matrix as unique, infinite, or inconsistent
        const b1 = rng.nonZero(-4, 4);
        const c1 = rng.nonZero(-4, 4);
        const d1 = rng.int(-6, 6);
        const c2 = rng.nonZero(-4, 4);
        const d2 = rng.int(-6, 6);
        const regime = rng.int(0, 2); // 0=unique, 1=infinite, 2=inconsistent
        const p = regime === 0 ? rng.nonZero(-6, 6) : 0;
        const q = regime === 1 ? 0 : regime === 2 ? rng.nonZero(-7, 7) : rng.int(-7, 7);
        const spec =
          regime === 0
            ? ({ type: "text", accept: ["unique", "unique solution"] } as const)
            : regime === 1
              ? ({ type: "text", accept: ["infinite", "infinitely many", "infinitely many solutions"] } as const)
              : ({ type: "text", accept: ["inconsistent", "no solution", "none"] } as const);
        const label = regime === 0 ? "unique" : regime === 1 ? "infinite" : "inconsistent";
        return {
          prompt: `A 3×3 augmented matrix reduces to row-echelon rows {{[1, ${b1}, ${c1} | ${d1}]}}, {{[0, 1, ${c2} | ${d2}]}}, {{[0, 0, ${p} | ${q}]}}. Classify the system by typing \`unique\`, \`infinite\`, or \`inconsistent\`.`,
          answer: { type: "text", accept: [...spec.accept] },
          hint: "Inspect the final row {{[0, 0, p | q]}}: {{p ≠ 0}} ⇒ unique; {{p = 0, q = 0}} ⇒ infinite; {{p = 0, q ≠ 0}} ⇒ inconsistent.",
          solution: [
            `The final row represents {{${p}z = ${q}}}.`,
            regime === 0
              ? `Since the pivot {{${p} ≠ 0}}, back-substitution yields a **unique** solution.`
              : regime === 1
                ? `Since {{0z = 0}} leaves {{z}} as a free parameter, there are **infinite** solutions (a line).`
                : `Since {{0z = ${q}}} is impossible, the system is **inconsistent** (no solution).`,
            `Classification: **${label}**.`,
          ],
        };
      }

      if (tier === 2) {
        // Parametric 3x3 system: find singular k for infinite OR inconsistent
        const b1 = rng.nonZero(-2, 2);
        const c1 = rng.nonZero(-3, 3);
        const d1 = rng.int(-4, 4);
        const c2 = rng.nonZero(-3, 3);
        const d2 = rng.int(-4, 4);
        const m2 = rng.pick([1, 2, -1]);
        const m3 = rng.pick([1, 2, -1]);
        const n3 = rng.pick([1, 2, -1]);
        const isInfinite = rng.bool();
        const r3 = isInfinite ? 0 : rng.nonZero(-4, 4);

        const kCrit = m3 * c1 + n3 * c2;
        const eq1 = `${fmtLin3(1, b1, c1)} = ${d1}`;
        const eq2 = `${fmtLin3(m2, m2 * b1 + 1, m2 * c1 + c2)} = ${m2 * d1 + d2}`;
        const a3 = m3;
        const b3 = m3 * b1 + n3;
        const rhs3 = m3 * d1 + n3 * d2 + r3;
        const xy3 = poly([
          [a3, "x"],
          [b3, "y"],
        ]);
        const eq3 = `${xy3} + kz = ${rhs3}`;
        const goal = isInfinite ? "infinitely many solutions" : "no solution (inconsistent)";

        return {
          prompt: `Consider the 3×3 system: {{${eq1}}}, {{${eq2}}}, and {{${eq3}}}. Find the exact value of {{k}} for which the system has ${goal}.`,
          answer: { type: "number", value: kCrit },
          hint: "Eliminate {{x}} from Equations 2 and 3 using Equation 1, then eliminate {{y}} from Equation 3 to find where the {{z}}-pivot vanishes.",
          solution: [
            `Eliminate {{x}}: {{R_2 <- R_2 - (${m2})R_1}} gives {{[0, 1, ${c2} | ${d2}]}}; {{R_3 <- R_3 - (${m3})R_1}} gives {{[0, ${n3}, k - (${m3 * c1}) | ${n3 * d2 + r3}]}}.`,
            `Eliminate {{y}}: {{R_3 <- R_3 - (${n3})R_2}} gives {{[0, 0, k - (${kCrit}) | ${r3}]}}.`,
            `Setting the pivot to zero gives {{k = ${kCrit}}}, producing {{0z = ${r3}}} (${goal}).`,
          ],
        };
      }

      // Tier 3: Two-parameter (k, m) system — find m for infinite solutions OR solve unique 3x3 for z
      if (rng.bool(0.55)) {
        const b1 = rng.nonZero(-2, 2);
        const c1 = rng.nonZero(-3, 3);
        const d1 = rng.nonZero(-5, 5);
        const c2 = rng.nonZero(-3, 3);
        const d2 = rng.nonZero(-5, 5);
        const m2 = rng.pick([1, 2, -1]);
        const m3 = rng.pick([1, 2, -1]);
        const n3 = rng.pick([1, 2, -1]);
        const kCrit = m3 * c1 + n3 * c2;
        const mCrit = m3 * d1 + n3 * d2;

        const eq1 = `${fmtLin3(1, b1, c1)} = ${d1}`;
        const eq2 = `${fmtLin3(m2, m2 * b1 + 1, m2 * c1 + c2)} = ${m2 * d1 + d2}`;
        const xy3 = poly([
          [m3, "x"],
          [m3 * b1 + n3, "y"],
        ]);
        const eq3 = `${xy3} + kz = m`;

        return {
          prompt: `Consider the system {{${eq1}}}, {{${eq2}}}, {{${eq3}}}. When {{k = ${num(kCrit)}}}, find the exact value of {{m}} for which the system has infinitely many solutions.`,
          answer: { type: "number", value: mCrit },
          hint: "Reduce the augmented matrix to row-echelon form and set the final RHS expression equal to 0.",
          solution: [
            `{{R_2 <- R_2 - (${m2})R_1}} gives {{[0, 1, ${c2} | ${d2}]}}; {{R_3 <- R_3 - (${m3})R_1}} gives {{[0, ${n3}, k - (${m3 * c1}) | m - (${m3 * d1})]}}.`,
            `{{R_3 <- R_3 - (${n3})R_2}} gives {{[0, 0, k - (${kCrit}) | m - (${mCrit})]}}.`,
            `For infinitely many solutions when {{k = ${kCrit}}}, require {{m - (${mCrit}) = 0 => m = ${mCrit}}}.`,
          ],
        };
      }
      // Unique 3x3 system built from integer triple (x0, y0, z0)
      const x0 = rng.int(-3, 4);
      const y0 = rng.int(-3, 4);
      const z0 = rng.nonZero(-4, 5);
      const b1 = rng.nonZero(-2, 2);
      const c1 = rng.nonZero(-2, 2);
      const c2 = rng.nonZero(-2, 2);
      const p3 = rng.pick([-2, -1, 1, 2]);
      const m2 = rng.pick([1, 2, -1]);
      const m3 = rng.pick([1, 2, -1]);
      const n3 = rng.pick([1, -1, 2]);

      const d1 = x0 + b1 * y0 + c1 * z0;
      const d2Prime = y0 + c2 * z0;
      const d3Prime = p3 * z0;

      const eq1 = `${fmtLin3(1, b1, c1)} = ${d1}`;
      const eq2 = `${fmtLin3(m2, m2 * b1 + 1, m2 * c1 + c2)} = ${m2 * d1 + d2Prime}`;
      const eq3 = `${fmtLin3(m3, m3 * b1 + n3, m3 * c1 + n3 * c2 + p3)} = ${m3 * d1 + n3 * d2Prime + d3Prime}`;

      return {
        prompt: `Use Gaussian elimination to solve the 3×3 system {{${eq1}}}, {{${eq2}}}, {{${eq3}}}, and enter the exact value of {{z}}.`,
        answer: { type: "number", value: z0 },
        hint: "Eliminate {{x}} from Equations 2 and 3 using Equation 1, then eliminate {{y}} from Equation 3 to isolate {{z}}.",
        solution: [
          `{{R_2 <- R_2 - (${m2})R_1}} gives {{y + (${c2})z = ${d2Prime}}}.`,
          `{{R_3 <- R_3 - (${m3})R_1}}, then {{R_3 <- R_3 - (${n3})R_2}}, gives {{${p3}z = ${d3Prime}}}.`,
          `Therefore {{z = ${z0}}} (with {{y = ${y0}}} and {{x = ${x0}}}).`,
        ],
      };
    },
  },
];
