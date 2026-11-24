import type { AnswerSpec, Trap } from "../types.ts";
import type { Drill, Rng } from "./types.ts";
import { clean, num, poly, simplify } from "./helpers.ts";

/** Plain ASCII simplified fraction string (no {{ }} wrapper) for embedding inside {{ ... }}. */
function fracRaw(n: number, d: number): string {
  const [sn, sd] = simplify(n, d);
  if (sd === 1) return String(sn);
  return `${sn}/${sd}`;
}

/** Build an exact fraction spec when denominator > 1, or clean integer number spec when d === 1. */
function ratSpec(n: number, d: number): AnswerSpec {
  const [sn, sd] = simplify(n, d);
  if (sd === 1) return { type: "number", value: sn };
  return { type: "fraction", n: sn, d: sd, simplest: true, allowDecimal: true };
}

/** Add a trap only if its numeric value differs strictly from the correct numeric value. */
function pushNumTrap(traps: Trap[], val: number, correct: number, feedback: string) {
  if (Math.abs(val - correct) > 1e-9) {
    traps.push({ spec: { type: "number", value: clean(val) }, feedback });
  }
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1 (SL, Level 1): Composite & Inverse Evaluation
  // ===========================================================================
  {
    id: "2-functions.composite-inverse",
    topicId: "2-functions",
    title: "Composite & Inverse Function Evaluation",
    level: 1,
    ibLevel: "SL",
    guideRef: "functions-inverse-transforms",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        if (rng.bool(0.55)) {
          // Linear composite (f ∘ g)(k)
          const a = rng.nonZero(-4, 5);
          const b = rng.int(-7, 7);
          const c = rng.nonZero(-4, 4);
          const d = rng.int(-6, 6);
          const k = rng.int(-4, 5);
          const gk = c * k + d;
          const ans = a * gk + b;
          const fk = a * k + b;
          const rev = c * fk + d;
          const traps: Trap[] = [];
          pushNumTrap(traps, rev, ans, "That is {{(g ∘ f)}} instead of {{(f ∘ g)}} — apply the inner function {{g}} first.");
          return {
            prompt: `Given {{f(x) = ${poly([[a, "x"], [b, ""]])}}} and {{g(x) = ${poly([[c, "x"], [d, ""]])}}}, evaluate {{(f ∘ g)(${k})}}.`,
            answer: { type: "number", value: ans },
            hint: `Evaluate {{g(${k})}} first, then substitute that output into {{f(x)}}.`,
            traps,
            solution: [
              `Inner function first: {{g(${k}) = ${c}(${k}) ${d >= 0 ? `+ ${d}` : `- ${-d}`} = ${gk}}}.`,
              `Now apply {{f}}: {{f(${gk}) = ${a}(${gk}) ${b >= 0 ? `+ ${b}` : `- ${-b}`} = ${ans}}}.`,
            ],
          };
        }
        // Linear inverse f^(-1)(y) engineered for exact integer answer x0
        const a = rng.pick([-5, -4, -3, -2, 2, 3, 4, 5]);
        const b = rng.nonZero(-9, 9);
        const x0 = rng.int(-6, 6);
        const y = a * x0 + b;
        const traps: Trap[] = [];
        pushNumTrap(traps, a * y + b, x0, "You computed {{f(" + y + ")}} instead of {{f^(-1)(" + y + ")}} — solve {{f(x) = " + y + "}}.");
        return {
          prompt: `Let {{f(x) = ${poly([[a, "x"], [b, ""]])}}}. Find the exact value of {{f^(-1)(${y})}}.`,
          answer: { type: "number", value: x0 },
          hint: `Set {{${poly([[a, "x"], [b, ""]]) } = ${y}}} and solve for {{x}}.`,
          traps,
          solution: [
            `Solve {{f(x) = ${y}}}: {{${poly([[a, "x"], [b, ""]])} = ${y}}}.`,
            `{{${a}x = ${y - b} => x = ${x0}}}, so {{f^(-1)(${y}) = ${x0}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Quadratic + linear composite
          const a = rng.pick([-2, 1, 2, 3]);
          const b = rng.int(-5, 5);
          const c = rng.nonZero(-4, 4);
          const d = rng.int(-5, 5);
          const k = rng.int(-4, 4);
          const gk = c * k + d;
          const ans = a * gk * gk + b;
          const rev = c * (a * k * k + b) + d;
          const traps: Trap[] = [];
          pushNumTrap(traps, rev, ans, "Remember {{(f ∘ g)(x) = f(g(x))}} applies {{g}} first, then {{f}}.");
          return {
            prompt: `Given {{f(x) = ${poly([[a, "x^2"], [b, ""]])}}} and {{g(x) = ${poly([[c, "x"], [d, ""]])}}}, find {{(f ∘ g)(${k})}}.`,
            answer: { type: "number", value: ans },
            hint: `Compute {{g(${k})}} first, then square it before multiplying by {{${a}}}.`,
            traps,
            solution: [
              `{{g(${k}) = ${c}(${k}) ${d >= 0 ? `+ ${d}` : `- ${-d}`} = ${gk}}}.`,
              `{{f(${gk}) = ${a}(${gk})^2 ${b >= 0 ? `+ ${b}` : `- ${-b}`} = ${ans}}}.`,
            ],
          };
        }
        // Rational inverse f^(-1)(y) for f(x) = (ax + b)/(x + d)
        const a = rng.nonZero(-4, 5);
        const d = rng.nonZero(-5, 5);
        let x0 = rng.int(-5, 5);
        if (x0 === -d) x0 += 1;
        let y = rng.nonZero(-4, 5);
        if (y === a) y += 1;
        const b = y * (x0 + d) - a * x0; // guarantees f(x0) = y and ad - b = (a - y)(x0 + d) != 0!
        return {
          prompt: `Let {{f(x) = (${poly([[a, "x"], [b, ""]])})/(${poly([[1, "x"], [d, ""]])})}} for {{x != ${-d}}}. Find the exact value of {{f^(-1)(${y})}}.`,
          answer: { type: "number", value: x0 },
          hint: `Instead of deriving {{f^(-1)(x)}}, directly solve {{(${poly([[a, "x"], [b, ""]])})/(${poly([[1, "x"], [d, ""]])}) = ${y}}}.`,
          solution: [
            `Set {{(${poly([[a, "x"], [b, ""]])})/(${poly([[1, "x"], [d, ""]])}) = ${y}}}.`,
            `Multiply through: {{${poly([[a, "x"], [b, ""]])} = ${y}(${poly([[1, "x"], [d, ""]])}) = ${poly([[y, "x"], [y * d, ""]])}}}.`,
            `Collect {{x}}-terms: {{${a - y}x = ${y * d - b} => x = ${x0}}}.`,
          ],
        };
      }

      // Tier 3: Chained (f ∘ g)^(-1)(y) or rational inverse with exact fraction answer
      if (rng.bool(0.5)) {
        const a = rng.pick([-4, -3, -2, 2, 3, 4]);
        const b = rng.nonZero(-6, 6);
        const c = rng.pick([-3, -2, 2, 3, 4]);
        const d = rng.nonZero(-6, 6);
        const x0 = rng.int(-5, 5);
        const y = a * (c * x0 + d) + b;
        return {
          prompt: `Let {{f(x) = ${poly([[a, "x"], [b, ""]])}}} and {{g(x) = ${poly([[c, "x"], [d, ""]])}}}. Find the exact value of {{(f ∘ g)^(-1)(${y})}}.`,
          answer: { type: "number", value: x0 },
          hint: `Use {{(f ∘ g)^(-1)(${y}) = g^(-1)(f^(-1)(${y}))}}, or solve {{f(g(x)) = ${y}}} directly.`,
          solution: [
            `First undo {{f}}: {{${poly([[a, "u"], [b, ""]])} = ${y} => u = ${c * x0 + d}}}.`,
            `Now undo {{g}}: {{${poly([[c, "x"], [d, ""]])} = ${c * x0 + d} => x = ${x0}}}.`,
          ],
        };
      }
      // Rational f(x) = (ax + b)/(cx + d), find f^(-1)(y) as exact simplified fraction
      const a = rng.nonZero(-4, 5);
      const b = rng.nonZero(-7, 7);
      const c = rng.pick([2, 3, 4]);
      const d = rng.nonZero(-7, 7);
      let y = rng.nonZero(-4, 5);
      // Avoid a - y*c === 0 and avoid ad - bc === 0
      const safeD = a * d === b * c ? d + 1 : d;
      if (a === y * c) y += 1;
      const numVal = y * safeD - b;
      const denVal = a - y * c;
      const [sn, sd] = simplify(numVal, denVal);
      return {
        prompt: `Let {{f(x) = (${poly([[a, "x"], [b, ""]])})/(${poly([[c, "x"], [safeD, ""]])})}}. Find the exact value of {{f^(-1)(${y})}} (simplified fraction or integer).`,
        answer: ratSpec(sn, sd),
        hint: `Set {{f(x) = ${y}}}, multiply both sides by {{(${poly([[c, "x"], [safeD, ""]])})}}, and solve for {{x}}.`,
        solution: [
          `{{${poly([[a, "x"], [b, ""]])} = ${y}(${poly([[c, "x"], [safeD, ""]])}) = ${poly([[y * c, "x"], [y * safeD, ""]])}}}.`,
          `{{${denVal}x = ${numVal} => x = ${fracRaw(sn, sd)}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2 (SL, Level 1): Quadratic Discriminant, Vertex & Tangency
  // ===========================================================================
  {
    id: "2-functions.quadratic-discriminant-vertex",
    topicId: "2-functions",
    title: "Quadratic Discriminant, Vertex & Tangency",
    level: 1,
    ibLevel: "SL",
    guideRef: "quadratics-exponentials-rationals",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        if (rng.bool(0.6)) {
          const a = rng.nonZero(-4, 5);
          const b = rng.int(-9, 9);
          const c = rng.nonZero(-8, 8);
          const disc = b * b - 4 * a * c;
          const traps: Trap[] = [];
          pushNumTrap(traps, b * b + 4 * a * c, disc, "Check the sign in {{Δ = b^2 - 4ac}} (subtract {{4ac}}, do not add).");
          if (b < 0) pushNumTrap(traps, -b * b - 4 * a * c, disc, "Remember {{(" + b + ")^2 = +" + b * b + "}}, always non-negative!");
          return {
            prompt: `Calculate the discriminant {{Δ = b^2 - 4ac}} of {{${poly([[a, "x^2"], [b, "x"], [c, ""]])} = 0}}.`,
            answer: { type: "number", value: disc },
            hint: `Substitute {{a = ${a}}}, {{b = ${b}}}, {{c = ${c}}} into {{b^2 - 4ac}}.`,
            traps,
            solution: [
              `{{Δ = (${b})^2 - 4(${a})(${c}) = ${b * b} - (${4 * a * c}) = ${disc}}}.`,
            ],
          };
        }
        // Axis of symmetry x = h
        const a = rng.nonZero(-4, 4);
        const h = rng.nonZero(-6, 6);
        const b = -2 * a * h;
        const c = rng.int(-9, 9);
        const traps: Trap[] = [];
        pushNumTrap(traps, -h, h, "Remember the minus sign in {{x = -b/(2a)}}.");
        return {
          prompt: `Find the x-coordinate of the vertex (axis of symmetry) of {{f(x) = ${poly([[a, "x^2"], [b, "x"], [c, ""]])}}}.`,
          answer: { type: "number", value: h },
          hint: `Use {{x = -b/(2a)}} with {{a = ${a}}} and {{b = ${b}}}.`,
          traps,
          solution: [`{{x = -(${b})/(2(${a})) = ${-b}/${2 * a} = ${h}}}.`],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Vertex (h, k) as ordered pair
          const a = rng.pick([-3, -2, -1, 1, 2, 3]);
          const h = rng.nonZero(-5, 5);
          const k = rng.int(-8, 8);
          const b = -2 * a * h;
          const c = a * h * h + k;
          return {
            prompt: `Find the coordinates of the vertex of {{f(x) = ${poly([[a, "x^2"], [b, "x"], [c, ""]])}}} (enter as \`h, k\`).`,
            answer: { type: "list", values: [h, k], ordered: true, display: `(${h}, ${k})` },
            hint: `Find {{h = -b/(2a)}} first, then evaluate {{k = f(h)}} (or complete the square).`,
            solution: [
              `Complete the square: {{f(x) = ${a === 1 ? "" : a === -1 ? "-" : a}(x ${h > 0 ? `- ${h}` : `+ ${-h}`})^2 ${k >= 0 ? `+ ${k}` : `- ${-k}`}}}.`,
              `The vertex is {{(${h}, ${k})}}.`,
            ],
          };
        }
        // Find k so ax^2 + bx + k = 0 has one repeated root (exact integer k = a * r^2)
        const a = rng.pick([1, 2, 3, 4]);
        const r = rng.nonZero(-5, 5);
        const b = 2 * a * r;
        const kAns = a * r * r;
        return {
          prompt: `Find the value of {{k}} for which {{${poly([[a, "x^2"], [b, "x"]])} + k = 0}} has exactly one repeated real root.`,
          answer: { type: "number", value: kAns },
          hint: `One repeated real root occurs when the discriminant {{Δ = b^2 - 4ak = 0}}.`,
          solution: [
            `Set {{Δ = (${b})^2 - 4(${a})(k) = 0 => ${b * b} - ${4 * a}k = 0}}.`,
            `Solving gives {{k = ${b * b}/${4 * a} = ${kAns}}}.`,
          ],
        };
      }

      // Tier 3: Line y = mx + c tangent to y = ax^2 + px + q
      const a = rng.pick([1, 2, 3]);
      const t = rng.nonZero(-5, 5); // tangency x-coordinate
      const m = rng.nonZero(-6, 6);
      const p = m - 2 * a * t;
      const q = rng.int(-9, 9);
      // Intersection: ax^2 + (p - m)x + (q - c) = 0 = a(x - t)^2 = ax^2 - 2at x + at^2
      // So q - c = a t^2 => c = q - a t^2
      const cAns = q - a * t * t;
      return {
        prompt: `The straight line {{y = ${poly([[m, "x"]])} + c}} is tangent to the parabola {{y = ${poly([[a, "x^2"], [p, "x"], [q, ""]])}}}. Find the exact value of {{c}}.`,
        answer: { type: "number", value: cAns },
        hint: `Equate the two expressions to get a quadratic in {{x}}, then set its discriminant {{Δ = 0}}.`,
        solution: [
          `Equating gives {{${poly([[a, "x^2"], [p - m, "x"]])} + (${q} - c) = 0}}.`,
          `Tangency requires {{Δ = (${p - m})^2 - 4(${a})(${q} - c) = 0 => ${(p - m) * (p - m)} = ${4 * a}(${q} - c)}}.`,
          `Thus {{${q} - c = ${a * t * t} => c = ${cAns}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3 (SL, Level 2): Linear Rational Asymptotes & Intercepts
  // ===========================================================================
  {
    id: "2-functions.linear-rational-asymptotes",
    topicId: "2-functions",
    title: "Linear Rational Asymptotes (ax + b)/(cx + d)",
    level: 2,
    ibLevel: "SL",
    guideRef: "quadratics-exponentials-rationals",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const askVA = rng.bool(0.5);
        const c = rng.pick([1, 2, 3]);
        const va = rng.nonZero(-6, 6);
        const d = -c * va;
        const ha = rng.nonZero(-5, 5);
        const a = c * ha;
        let b = rng.nonZero(-9, 9);
        if (a * d === b * c) b += 1;
        const numExpr = poly([[a, "x"], [b, ""]]);
        const denExpr = poly([[c, "x"], [d, ""]]);
        if (askVA) {
          const traps: Trap[] = [];
          pushNumTrap(traps, -va, va, "Remember to solve {{cx + d = 0}}, so {{x = -d/c}} (watch the sign!).");
          pushNumTrap(traps, ha, va, "That is the horizontal asymptote {{y = a/c}} — set the denominator equal to zero for the vertical asymptote.");
          return {
            prompt: `For {{f(x) = (${numExpr})/(${denExpr})}}, find the value {{p}} of its vertical asymptote {{x = p}}.`,
            answer: { type: "number", value: va },
            hint: `Set the denominator {{${denExpr} = 0}} and solve for {{x}}.`,
            traps,
            solution: [`Set denominator to zero: {{${denExpr} = 0 => x = ${va}}}.`],
          };
        }
        const traps: Trap[] = [];
        pushNumTrap(traps, va, ha, "That is the vertical asymptote — for the horizontal asymptote take the leading-coefficient ratio {{a/c}}.");
        return {
          prompt: `For {{f(x) = (${numExpr})/(${denExpr})}}, find the value {{q}} of its horizontal asymptote {{y = q}}.`,
          answer: { type: "number", value: ha },
          hint: `Take the ratio of the {{x}}-coefficients in the numerator and denominator.`,
          traps,
          solution: [`Leading-coefficient ratio: {{y = ${a}/${c} = ${ha}}}.`],
        };
      }

      if (tier === 2) {
        // Exact fractional VA or HA, sometimes with reversed denominator (d + cx)
        const c = rng.pick([-4, -3, -2, 2, 3, 4, 5]);
        const d = rng.nonZero(-9, 9);
        const a = rng.nonZero(-9, 9);
        let b = rng.nonZero(-9, 9);
        if (a * d === b * c) b += 1;
        const flipNum = rng.bool(0.45);
        const flipDen = rng.bool(0.45);
        const numExpr = flipNum ? poly([[b, ""], [a, "x"]]) : poly([[a, "x"], [b, ""]]);
        const denExpr = flipDen ? poly([[d, ""], [c, "x"]]) : poly([[c, "x"], [d, ""]]);
        if (rng.bool(0.5)) {
          const [sn, sd] = simplify(-d, c);
          return {
            prompt: `Find the exact value {{p}} of the vertical asymptote {{x = p}} of {{f(x) = (${numExpr})/(${denExpr})}} (simplified fraction or integer).`,
            answer: ratSpec(sn, sd),
            hint: `Set the denominator {{${denExpr} = 0}} carefully.`,
            solution: [`Solve {{${denExpr} = 0 => ${c}x = ${-d} => x = ${fracRaw(sn, sd)}}}.`],
          };
        }
        const [sn, sd] = simplify(a, c);
        return {
          prompt: `Find the exact value {{q}} of the horizontal asymptote {{y = q}} of {{f(x) = (${numExpr})/(${denExpr})}} (simplified fraction or integer).`,
          answer: ratSpec(sn, sd),
          hint: `Identify the coefficient of {{x}} in the numerator ({{${a}}}) and in the denominator ({{${c}}}) — watch for reversed term order!`,
          solution: [`Divide the {{x}}-coefficients: {{y = (${a})/(${c}) = ${fracRaw(sn, sd)}}}.`],
        };
      }

      // Tier 3: Find sum p + q of VA x = p and HA y = q, with non-trivial reversed terms
      const c = rng.pick([-3, -2, 2, 3, 4]);
      const d = rng.nonZero(-8, 8);
      const a = rng.nonZero(-8, 8);
      let b = rng.nonZero(-8, 8);
      if (a * d === b * c) b += 1;
      const flipNum = rng.bool(0.5);
      const flipDen = rng.bool(0.5);
      const numExpr = flipNum ? poly([[b, ""], [a, "x"]]) : poly([[a, "x"], [b, ""]]);
      const denExpr = flipDen ? poly([[d, ""], [c, "x"]]) : poly([[c, "x"], [d, ""]]);
      // p = -d/c, q = a/c => p + q = (a - d)/c
      const [sn, sd] = simplify(a - d, c);
      return {
        prompt: `The curve {{f(x) = (${numExpr})/(${denExpr})}} has vertical asymptote {{x = p}} and horizontal asymptote {{y = q}}. Find the exact value of {{p + q}} (simplified fraction or integer).`,
        answer: ratSpec(sn, sd),
        hint: `Compute {{p = -d/c}} and {{q = a/c}} using the exact {{x}}-coefficients, then add them.`,
        solution: [
          `Vertical asymptote: {{p = ${fracRaw(-d, c)}}}.`,
          `Horizontal asymptote: {{q = ${fracRaw(a, c)}}}.`,
          `Sum: {{p + q = ${fracRaw(-d, c)} + ${fracRaw(a, c)} = ${fracRaw(sn, sd)}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4 (HL, Level 2): Remainder Theorem, Factor Theorem & Vieta
  // ===========================================================================
  {
    id: "2-functions.remainder-vieta-hl",
    topicId: "2-functions",
    title: "[HL] Remainder Theorem & Vieta Root Sums/Products",
    level: 2,
    ibLevel: "HL",
    guideRef: "polynomials-vieta-rationals-hl",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        // Remainder Theorem P(r) for cubic
        const a = rng.pick([-2, 1, 2, 3]);
        const b = rng.int(-5, 5);
        const c = rng.int(-6, 6);
        const d = rng.nonZero(-7, 7);
        const r = rng.pick([-3, -2, -1, 1, 2, 3]);
        const rem = a * r * r * r + b * r * r + c * r + d;
        const oppRem = a * (-r) ** 3 + b * (-r) ** 2 + c * (-r) + d;
        const traps: Trap[] = [];
        pushNumTrap(traps, oppRem, rem, `Dividing by {{(x ${r > 0 ? `- ${r}` : `+ ${-r}`})}} evaluates {{P(${r})}}, not {{P(${-r})}}!`);
        const div = r > 0 ? `(x - ${r})` : `(x + ${-r})`;
        return {
          prompt: `Use the Remainder Theorem to find the remainder when {{P(x) = ${poly([[a, "x^3"], [b, "x^2"], [c, "x"], [d, ""]])}}} is divided by {{${div}}}.`,
          answer: { type: "number", value: rem },
          hint: `Substitute {{x = ${r}}} into {{P(x)}}.`,
          traps,
          solution: [
            `By the Remainder Theorem, remainder {{= P(${r})}}.`,
            `{{P(${r}) = ${a}(${r})^3 ${b >= 0 ? `+ ${b}` : `- ${-b}`}(${r})^2 ${c >= 0 ? `+ ${c}` : `- ${-c}`}(${r}) ${d >= 0 ? `+ ${d}` : `- ${-d}`} = ${rem}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Factor Theorem: find k in a x^3 + b x^2 + k x + d divisible by (x - r)
          const a = rng.pick([1, 2, 3]);
          const b = rng.int(-5, 5);
          const kAns = rng.nonZero(-7, 7);
          const r = rng.pick([-3, -2, -1, 1, 2, 3]);
          const d = -(a * r * r * r + b * r * r + kAns * r);
          const div = r > 0 ? `(x - ${r})` : `(x + ${-r})`;
          return {
            prompt: `Given that {{${div}}} is a factor of {{P(x) = ${poly([[a, "x^3"], [b, "x^2"]])} + kx ${d >= 0 ? `+ ${d}` : `- ${-d}`}}}, find the exact value of {{k}}.`,
            answer: { type: "number", value: kAns },
            hint: `By the Factor Theorem, set {{P(${r}) = 0}} and solve for {{k}}.`,
            solution: [
              `Set {{P(${r}) = 0}}: {{${a * r * r * r + b * r * r + d} + (${r})k = 0}}.`,
              `Hence {{${r}k = ${-(a * r * r * r + b * r * r + d)} => k = ${kAns}}}.`,
            ],
          };
        }
        // Vieta cubic sum or product
        const a = rng.pick([1, 2, 3, 4]);
        const b = rng.nonZero(-12, 12);
        const c = rng.int(-9, 9);
        const d = rng.nonZero(-12, 12);
        if (rng.bool(0.5)) {
          const [sn, sd] = simplify(-b, a);
          return {
            prompt: `The cubic {{${poly([[a, "x^3"], [b, "x^2"], [c, "x"], [d, ""]])} = 0}} has roots {{α, β, γ}}. Find the exact sum of roots {{α + β + γ}} (simplified fraction or integer).`,
            answer: ratSpec(sn, sd),
            hint: `Use Vieta's formula {{α + β + γ = -a_2/a_3}}.`,
            solution: [`By Vieta's formula: {{α + β + γ = -(${b})/(${a}) = ${fracRaw(sn, sd)}}}.`],
          };
        }
        const [sn, sd] = simplify(-d, a);
        return {
          prompt: `The cubic {{${poly([[a, "x^3"], [b, "x^2"], [c, "x"], [d, ""]])} = 0}} has roots {{α, β, γ}}. Find the exact product of roots {{αβγ}} (simplified fraction or integer).`,
          answer: ratSpec(sn, sd),
          hint: `Use Vieta's formula {{αβγ = (-1)^3 a_0/a_3 = -d/a}} (watch the negative sign for odd degree {{3}}!).`,
          solution: [`By Vieta's formula: {{αβγ = -(${d})/(${a}) = ${fracRaw(sn, sd)}}}.`],
        };
      }

      // Tier 3: Symmetric root expressions: alpha^2 + beta^2 (quadratic) or 1/alpha + 1/beta + 1/gamma (cubic)
      if (rng.bool(0.5)) {
        const a = rng.pick([1, 2, 3]);
        const b = rng.nonZero(-9, 9);
        const c = rng.nonZero(-8, 8);
        // alpha^2 + beta^2 = (b^2 - 2ac)/a^2
        const [sn, sd] = simplify(b * b - 2 * a * c, a * a);
        return {
          prompt: `The quadratic {{${poly([[a, "x^2"], [b, "x"], [c, ""]])} = 0}} has roots {{α}} and {{β}}. Find the exact value of {{α^2 + β^2}} (simplified fraction or integer).`,
          answer: ratSpec(sn, sd),
          hint: `Rewrite {{α^2 + β^2 = (α + β)^2 - 2αβ}} using Vieta's formulas.`,
          solution: [
            `By Vieta: {{α + β = ${fracRaw(-b, a)}}} and {{αβ = ${fracRaw(c, a)}}}.`,
            `{{α^2 + β^2 = (${fracRaw(-b, a)})^2 - 2(${fracRaw(c, a)}) = ${fracRaw(sn, sd)}}}.`,
          ],
        };
      }
      // Cubic 1/alpha + 1/beta + 1/gamma = (c/a)/(-d/a) = -c/d
      const a = rng.pick([1, 2, 3]);
      const b = rng.int(-8, 8);
      const c = rng.nonZero(-11, 11);
      const d = rng.nonZero(-11, 11);
      const [sn, sd] = simplify(-c, d);
      return {
        prompt: `The cubic {{${poly([[a, "x^3"], [b, "x^2"], [c, "x"], [d, ""]])} = 0}} has non-zero roots {{α, β, γ}}. Find the exact value of {{1/α + 1/β + 1/γ}} (simplified fraction or integer).`,
        answer: ratSpec(sn, sd),
        hint: `Combine over {{αβγ}} to get {{(αβ + βγ + γα)/(αβγ)}}, then substitute Vieta's formulas {{c/a}} and {{-d/a}}.`,
        solution: [
          `{{1/α + 1/β + 1/γ = (αβ + βγ + γα)/(αβγ)}}.`,
          `Since {{Σαβ = ${fracRaw(c, a)}}} and {{αβγ = ${fracRaw(-d, a)}}}, the ratio simplifies to {{-(${c})/(${d}) = ${fracRaw(sn, sd)}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 5 (HL, Level 3): Parity, Self-Inverse, Modulus & Oblique Asymptotes
  // ===========================================================================
  {
    id: "2-functions.parity-modulus-oblique-hl",
    topicId: "2-functions",
    title: "[HL] Parity, Modulus Equations & Oblique Asymptotes",
    level: 3,
    ibLevel: "HL",
    guideRef: "modulus-reciprocal-even-odd-hl",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        if (rng.bool(0.65)) {
          // Parity classification with wide random parameterization (>1000 distinct prompts)
          const kind = rng.pick(["evenPoly", "oddPoly", "neitherPoly", "oddRat", "evenRat"] as const);
          const a = rng.nonZero(-6, 6);
          const b = rng.nonZero(-7, 7);
          const c = rng.nonZero(-8, 8);
          const k = rng.int(1, 9);
          let expr = "";
          let parity: "even" | "odd" | "neither" = "even";
          let reason = "";
          if (kind === "evenPoly") {
            expr = poly([[a, "x^4"], [b, "x^2"], [c, ""]]);
            parity = "even";
            reason = `Every term has an even power of {{x}}, so {{f(-x) = f(x)}}.`;
          } else if (kind === "oddPoly") {
            expr = poly([[a, "x^3"], [b, "x"]]);
            parity = "odd";
            reason = `Every term has an odd power of {{x}}, so {{f(-x) = -f(x)}}.`;
          } else if (kind === "neitherPoly") {
            expr = rng.bool(0.5)
              ? poly([[a, "x^3"], [b, "x^2"], [c, ""]])
              : poly([[a, "x^2"], [b, "x"], [c, ""]]);
            parity = "neither";
            reason = `Mixing even and odd powers means {{f(-x)}} equals neither {{f(x)}} nor {{-f(x)}}.`;
          } else if (kind === "oddRat") {
            expr = `(${poly([[a, "x^3"], [b, "x"]])})/(x^2 + ${k})`;
            parity = "odd";
            reason = `Numerator is odd and denominator {{x^2 + ${k}}} is even, so {{f(-x) = -f(x)}}.`;
          } else {
            expr = `(${poly([[a, "x^2"], [c, ""]])})/(x^2 + ${k})`;
            parity = "even";
            reason = `Both numerator and denominator are even, so {{f(-x) = f(x)}}.`;
          }
          return {
            prompt: `Classify the function {{f(x) = ${expr}}} on {{ℝ}} as \`even\`, \`odd\`, or \`neither\`.`,
            answer: { type: "text", accept: [parity], display: parity },
            hint: `Replace {{x}} with {{-x}} and compare {{f(-x)}} against {{f(x)}} and {{-f(x)}}.`,
            solution: [reason, `Therefore {{f}} is **${parity}**.`],
          };
        }
        // Self-inverse parameter k in (kx + b)/(cx + d)
        const c = rng.pick([1, 2, 3, 4]);
        const d = rng.nonZero(-9, 9);
        const kAns = -d;
        let b = rng.nonZero(-9, 9);
        if (kAns * d === b * c) b += 1;
        return {
          prompt: `Find the value of {{k}} for which {{f(x) = (kx ${b >= 0 ? `+ ${b}` : `- ${-b}`})/(${poly([[c, "x"], [d, ""]])})}} is a self-inverse function.`,
          answer: { type: "number", value: kAns },
          hint: `For {{(ax + b)/(cx + d)}} to be self-inverse, its vertical and horizontal asymptotes must meet on {{y = x}}, requiring {{a + d = 0}}.`,
          solution: [`Set {{k + (${d}) = 0 => k = ${kAns}}}.`],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Oblique asymptote of (ax^2 + bx + c)/(x - p)
          const m = rng.nonZero(-4, 4);
          const q = rng.int(-6, 6);
          const p = rng.nonZero(-5, 5);
          const R = rng.nonZero(-7, 7);
          // Expand (mx + q)(x - p) + R = m x^2 + (q - m p) x + (R - q p)
          const A = m;
          const B = q - m * p;
          const C = R - q * p;
          const numExpr = poly([[A, "x^2"], [B, "x"], [C, ""]]);
          const denExpr = poly([[1, "x"], [-p, ""]]);
          const oaExpr = poly([[m, "x"], [q, ""]]);
          return {
            prompt: `Find the oblique asymptote {{y = mx + c}} of {{f(x) = (${numExpr})/(${denExpr})}}. Enter the simplified expression for {{mx + c}}.`,
            answer: { type: "expression", expr: oaExpr, form: "simplified", display: `{{y = ${oaExpr}}}` },
            hint: `Divide {{${numExpr}}} by {{(${denExpr})}} using polynomial long division or synthetic division.`,
            solution: [
              `Polynomial division gives {{${numExpr} = (${oaExpr})(${denExpr}) ${R >= 0 ? `+ ${R}` : `- ${-R}`}}}.`,
              `Thus {{f(x) = ${oaExpr} ${R >= 0 ? `+ ${R}` : `- ${-R}`}/(${denExpr})}}, so the oblique asymptote is {{y = ${oaExpr}}}.`,
            ],
          };
        }
        // Modulus equation |a x - a m| = a k => exact integer solutions x1 = m - k, x2 = m + k
        const a = rng.pick([1, 2, 3]);
        const m = rng.int(-5, 5);
        const k = rng.int(1, 6);
        const x1 = m - k;
        const x2 = m + k;
        const inside = poly([[a, "x"], [-a * m, ""]]);
        const rhs = a * k;
        return {
          prompt: `Solve {{|${inside}| = ${rhs}}} and enter both exact solutions as a comma-separated list.`,
          answer: { type: "list", values: [x1, x2], ordered: false, display: `${num(x1)}, ${num(x2)}` },
          hint: `Split into {{${inside} = ${rhs}}} and {{${inside} = -${rhs}}}.`,
          solution: [
            `Case 1: {{${inside} = ${rhs} => ${a}x = ${a * m + rhs} => x = ${x2}}}.`,
            `Case 2: {{${inside} = -${rhs} => ${a}x = ${a * m - rhs} => x = ${x1}}}.`,
            `Solutions: {{x = ${x1}}} and {{x = ${x2}}}.`,
          ],
        };
      }

      // Tier 3: Non-monic oblique asymptote OR reciprocal/restricted-inverse HL checks
      const mode = rng.pick(["obliqueNonMonic", "reciprocalExtremum", "restrictedVertex"] as const);
      if (mode === "obliqueNonMonic") {
        const d = rng.pick([2, 3]);
        const e = rng.pick([-5, -1, 1, 5].filter((v) => v % d !== 0));
        const m = rng.nonZero(-3, 4);
        const q = rng.nonZero(-5, 5);
        const R = rng.nonZero(-6, 6);
        // (mx + q)(dx + e) + R = (md)x^2 + (me + qd)x + (qe + R)
        const A = m * d;
        const B = m * e + q * d;
        const C = q * e + R;
        const numExpr = poly([[A, "x^2"], [B, "x"], [C, ""]]);
        const denExpr = poly([[d, "x"], [e, ""]]);
        const oaExpr = poly([[m, "x"], [q, ""]]);
        return {
          prompt: `Find the oblique asymptote {{y = mx + c}} of {{f(x) = (${numExpr})/(${denExpr})}}. Enter the simplified expression for {{mx + c}}.`,
          answer: { type: "expression", expr: oaExpr, form: "simplified", display: `{{y = ${oaExpr}}}` },
          hint: `Perform polynomial long division of {{${numExpr}}} by {{(${denExpr})}}.`,
          solution: [
            `Long division yields {{${numExpr} = (${oaExpr})(${denExpr}) ${R >= 0 ? `+ ${R}` : `- ${-R}`}}}.`,
            `Hence the oblique asymptote is {{y = ${oaExpr}}}.`,
          ],
        };
      }
      if (mode === "reciprocalExtremum") {
        const x0 = rng.int(-6, 6);
        const y0 = rng.pick([-6, -5, -4, -3, -2, 2, 3, 4, 5, 6]);
        const isMin = rng.bool(0.5);
        const origType = isMin ? "local minimum" : "local maximum";
        const newType = isMin ? "local maximum" : "local minimum";
        const [sn, sd] = simplify(1, y0);
        return {
          prompt: `A smooth curve {{y = f(x)}} has a ${origType} at {{(${x0}, ${y0})}}. Find the exact y-coordinate of the corresponding ${newType} on {{y = 1/f(x)}} (simplified fraction).`,
          answer: ratSpec(sn, sd),
          hint: `Under {{y = 1/f(x)}}, the x-coordinate stays fixed and the y-coordinate becomes {{1/y_0}} (keeping its sign!).`,
          solution: [
            `Reciprocating {{y_0 = ${y0}}} flips a ${origType} into a ${newType} at {{(${x0}, ${fracRaw(sn, sd)})}}.`,
          ],
        };
      }
      // Restricted quadratic largest domain threshold k
      const a = rng.pick([-3, -2, -1, 1, 2, 3]);
      const h = rng.nonZero(-7, 7);
      const v = rng.int(-9, 9);
      const b = -2 * a * h;
      const c = a * h * h + v;
      const side = rng.bool(0.5) ? "x >= k" : "x <= k";
      return {
        prompt: `The quadratic {{f(x) = ${poly([[a, "x^2"], [b, "x"], [c, ""]])}}} is restricted to the largest domain of the form {{${side}}} on which {{f^(-1)}} exists. State the exact value of {{k}}.`,
        answer: { type: "number", value: h },
        hint: `A quadratic is one-to-one on either side of its axis of symmetry {{x = -b/(2a)}}.`,
        solution: [
          `Find the vertex x-coordinate: {{x = -(${b})/(2(${a})) = ${h}}}.`,
          `Thus the largest one-to-one domain of the form {{${side}}} begins at {{k = ${h}}}.`,
        ],
      };
    },
  },
];
