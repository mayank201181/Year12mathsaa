import type { AnswerSpec, Trap } from "../types.ts";
import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, frac, num, poly, simplify } from "./helpers.ts";

/** Exact integer or simplified fraction AnswerSpec. */
function exactSpec(rawN: number, rawD: number): AnswerSpec {
  const [n, d] = simplify(rawN, rawD);
  if (d === 1) return { type: "number", value: n };
  return { type: "fraction", n, d, simplest: true };
}

/** True if two rational numbers a/b and c/d are equal. */
function sameFrac(a: number, b: number, c: number, d: number): boolean {
  return a * d === c * b;
}

/** Format a non-zero linear expression a*x + b cleanly for {{ }}. */
function lin(a: number, b: number, v = "x"): string {
  return poly([
    [a, v],
    [b, ""],
  ]);
}

/** Add a trap only if it differs from the true answer (n/d). */
function pushTrap(traps: Trap[], ansN: number, ansD: number, trapN: number, trapD: number, feedback: string) {
  if (trapD === 0) return;
  if (sameFrac(ansN, ansD, trapN, trapD)) return;
  traps.push({ spec: exactSpec(trapN, trapD), feedback });
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: Chain, Product & Quotient Derivative Evaluation at a Point (SL, L1)
  // ===========================================================================
  {
    id: "5a-differentiation.rules-at-point",
    topicId: "5a-differentiation",
    title: "Chain, Product & Quotient Rules at a Point",
    level: 1,
    ibLevel: "SL",
    guideRef: "limits-rules-tangents",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        // Chain rule on (ax + b)^n evaluated at x0
        const a = rng.pick([2, 3, 4, 5, -2, -3]);
        const n = rng.pick([2, 3]);
        const x0 = rng.int(-2, 3);
        const uVal = rng.pick([-3, -2, -1, 1, 2, 3]);
        const b = uVal - a * x0;
        const inner = lin(a, b);
        const ans = n * a * Math.pow(uVal, n - 1);
        const forgotChain = n * Math.pow(uVal, n - 1);
        const traps: Trap[] = [];
        pushTrap(traps, ans, 1, forgotChain, 1, `You forgot to multiply by the inner derivative ${num(a)}!`);
        return {
          prompt: `Let {{f(x) = (${inner})^${n}}}. Find the exact value of {{f'(${x0})}}.`,
          answer: exactSpec(ans, 1),
          hint: `Apply the chain rule: multiply {{${n}(${inner})^${n - 1}}} by the inner derivative {{${a}}}.`,
          traps,
          solution: [
            `By the chain rule, {{f'(x) = ${n}(${inner})^${n - 1} * (${a}) = ${n * a}(${inner})^${n - 1}}}.`,
            `At {{x = ${x0}}}, {{${inner} = ${uVal}}}, so {{f'(${x0}) = ${n * a} * (${uVal})^${n - 1} = ${ans}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Product rule: f(x) = (ax + b) e^(cx + d) at x0 where c*x0 + d = 0
          const a = rng.nonZero(-4, 5);
          const c = rng.pick([-3, -2, -1, 1, 2, 3]);
          const x0 = rng.int(-2, 3);
          const d = -c * x0;
          const b = rng.nonZero(-6, 6);
          const expStr = lin(c, d);
          const linStr = lin(a, b);
          const u0 = a * x0 + b;
          const ans = a + c * u0;
          const traps: Trap[] = [];
          pushTrap(traps, ans, 1, a * c, 1, "Remember the product rule is {{u'v + uv'}}, NOT {{u'v'}}!");
          pushTrap(traps, ans, 1, a + u0, 1, `Remember the chain-rule factor {{${c}}} when differentiating {{e^(${expStr})}}!`);
          return {
            prompt: `Let {{f(x) = (${linStr}) e^(${expStr})}}. Find the exact value of {{f'(${x0})}}.`,
            answer: exactSpec(ans, 1),
            hint: `Use the product rule {{u'v + uv'}} and notice that at {{x = ${x0}}}, the exponent equals {{0}} so {{e^0 = 1}}.`,
            traps,
            solution: [
              `Set {{u = ${linStr}}} ({{u' = ${a}}}) and {{v = e^(${expStr})}} ({{v' = ${c} e^(${expStr})}}).`,
              `Product rule: {{f'(x) = [${a} + (${c})(${linStr})] e^(${expStr})}}.`,
              `At {{x = ${x0}}}, {{e^0 = 1}} and {{${linStr} = ${u0}}}, so {{f'(${x0}) = ${a} + (${c})(${u0}) = ${ans}}}.`,
            ],
          };
        } else {
          // Quotient rule: f(x) = (ax + b)/(cx + d) at x0
          let a = 1, b = 1, c = 1, d = 1, x0 = 0, denom = 1, numer = 1;
          for (let tries = 0; tries < 30; tries++) {
            a = rng.nonZero(-5, 5);
            b = rng.nonZero(-6, 6);
            c = rng.pick([1, 2, 3]);
            x0 = rng.int(-2, 3);
            denom = rng.pick([-3, -2, -1, 1, 2, 3, 4]);
            d = denom - c * x0;
            numer = a * d - b * c;
            if (d !== 0 && numer !== 0) break;
          }
          const top = lin(a, b);
          const bot = lin(c, d);
          const denSq = denom * denom;
          const traps: Trap[] = [];
          pushTrap(traps, numer, denSq, -numer, denSq, "You reversed the quotient rule subtraction: it is {{(u'v - uv')/v^2}}, not {{(uv' - u'v)/v^2}}!");
          return {
            prompt: `Given {{f(x) = (${top})/(${bot})}}, find the exact value of {{f'(${x0})}}. Give your answer as an exact integer or simplified fraction.`,
            answer: exactSpec(numer, denSq),
            hint: "Apply the quotient rule {{(u'v - uv')/v^2}} and simplify the constant numerator.",
            traps,
            solution: [
              `With {{u = ${top}}} ({{u' = ${a}}}) and {{v = ${bot}}} ({{v' = ${c}}}),`,
              `{{f'(x) = (${a}(${bot}) - (${top})(${c}))/(${bot})^2 = ${numer}/(${bot})^2}}.`,
              `At {{x = ${x0}}}, {{${bot} = ${denom}}}, so {{f'(${x0}) = ${numer}/${denSq}}} = ${frac(numer, denSq)}.`,
            ],
          };
        }
      }

      // Tier 3: Quotient with quadratic numerator (a x^2 + b)/(cx + d) OR ln(a x^2 + b) at x0
      if (rng.bool(0.5)) {
        const a = rng.pick([1, 2, 3, -1, -2]);
        const b = rng.nonZero(-5, 6);
        const c = rng.pick([1, 2]);
        const x0 = rng.nonZero(-2, 3);
        const v0 = rng.pick([-3, -2, -1, 1, 2, 3]);
        const d = v0 - c * x0;
        const topExpr = poly([[a, "x^2"], [b, ""]]);
        const botExpr = lin(c, d);
        const u0 = a * x0 * x0 + b;
        const uPrime0 = 2 * a * x0;
        const numVal = uPrime0 * v0 - u0 * c;
        const denVal = v0 * v0;
        const traps: Trap[] = [];
        pushTrap(traps, numVal, denVal, -numVal, denVal, "Check the order in the quotient rule numerator: {{u'v - uv'}}!");
        return {
          prompt: `Let {{f(x) = (${topExpr})/(${botExpr})}}. Find the exact value of {{f'(${x0})}} as an exact integer or simplified fraction.`,
          answer: exactSpec(numVal, denVal),
          hint: "Compute {{u, u', v, v'}} at {{x = " + x0 + "}} directly, then plug into {{(u'v - uv')/v^2}}.",
          traps,
          solution: [
            `At {{x = ${x0}}}: {{u = ${u0}}}, {{u' = ${2 * a}x = ${uPrime0}}}, {{v = ${v0}}}, {{v' = ${c}}}.`,
            `Quotient rule: {{f'(${x0}) = ((${uPrime0})(${v0}) - (${u0})(${c}))/(${v0})^2 = ${numVal}/${denVal}}} = ${frac(numVal, denVal)}.`,
          ],
        };
      } else {
        // Chain rule on ln(a x^2 + bx + c) at x0 where inside > 0
        const a = rng.pick([1, 2, 3]);
        const b = rng.nonZero(-5, 5);
        const x0 = rng.nonZero(-2, 3);
        const inside0 = rng.pick([2, 3, 4, 5, 6, 8]);
        const c = inside0 - a * x0 * x0 - b * x0;
        const quad = poly([[a, "x^2"], [b, "x"], [c, ""]]);
        const deriv0 = 2 * a * x0 + b;
        const traps: Trap[] = [];
        pushTrap(traps, deriv0, inside0, 1, inside0, "Remember the chain rule factor: {{d/dx[ln(u)] = u'/u}}, not {{1/u}}!");
        return {
          prompt: `Let {{f(x) = ln(${quad})}}. Find the exact value of {{f'(${x0})}} as an exact integer or simplified fraction.`,
          answer: exactSpec(deriv0, inside0),
          hint: "Differentiate {{ln(u)}} as {{u'/u}} using the chain rule.",
          traps,
          solution: [
            `Let {{u = ${quad}}}, so {{u' = ${lin(2 * a, b)}}}.`,
            `At {{x = ${x0}}}, {{u = ${inside0}}} and {{u' = ${deriv0}}}.`,
            `Thus {{f'(${x0}) = ${deriv0}/${inside0}}} = ${frac(deriv0, inside0)}.`,
          ],
        };
      }
    },
  },

  // ===========================================================================
  // DRILL 2: Tangent & Normal Gradient / y-Intercept (SL, L2)
  // ===========================================================================
  {
    id: "5a-differentiation.tangent-normal",
    topicId: "5a-differentiation",
    title: "Tangent & Normal Gradients and Intercepts",
    level: 2,
    ibLevel: "SL",
    guideRef: "limits-rules-tangents",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        // Quadratic tangent y-intercept at x0
        const a = rng.pick([1, 2, 3, -1, -2]);
        const b = rng.nonZero(-6, 6);
        const c = rng.int(-6, 6);
        const x0 = rng.nonZero(-3, 3);
        const expr = poly([[a, "x^2"], [b, "x"], [c, ""]]);
        const y0 = a * x0 * x0 + b * x0 + c;
        const m = 2 * a * x0 + b;
        const yInt = y0 - m * x0;
        const traps: Trap[] = [];
        pushTrap(traps, yInt, 1, m, 1, "That is the gradient {{m}}, not the y-intercept {{c = y_0 - m x_0}}!");
        pushTrap(traps, yInt, 1, y0, 1, "That is the y-coordinate at the point of tangency, not the y-intercept of the tangent line!");
        return {
          prompt: `Find the exact y-intercept of the tangent line to {{y = ${expr}}} at {{x = ${x0}}}.`,
          answer: exactSpec(yInt, 1),
          hint: `Compute {{y_0}} and {{m = y'(${x0})}}, then evaluate {{c = y_0 - m x_0}}.`,
          traps,
          solution: [
            `At {{x = ${x0}}}, {{y_0 = ${y0}}}.`,
            `{{dy/dx = ${lin(2 * a, b)}}}, so tangent gradient {{m = ${m}}}.`,
            `Tangent line: {{y - (${y0}) = ${m}(x - (${x0}))}} ⇒ y-intercept {{c = ${y0} - (${m})(${x0}) = ${yInt}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Normal gradient to cubic y = a x^3 + b x^2 + c x + d at x0
        let a = 1, b = 0, c = 1, d = 0, x0 = 1, mT = 1;
        for (let tries = 0; tries < 30; tries++) {
          a = rng.pick([1, 2, -1]);
          b = rng.int(-4, 4);
          c = rng.int(-5, 5);
          d = rng.int(-5, 5);
          x0 = rng.nonZero(-2, 3);
          mT = 3 * a * x0 * x0 + 2 * b * x0 + c;
          if (Math.abs(mT) >= 2 && Math.abs(mT) <= 24) break;
        }
        const expr = poly([[a, "x^3"], [b, "x^2"], [c, "x"], [d, ""]]);
        const derivExpr = poly([[3 * a, "x^2"], [2 * b, "x"], [c, ""]]);
        const traps: Trap[] = [];
        pushTrap(traps, -1, mT, mT, 1, "That is the TANGENT gradient — take the negative reciprocal {{-1/m_T}} for the normal!");
        pushTrap(traps, -1, mT, 1, mT, "Remember the MINUS sign in the perpendicular gradient {{m_N = -1/m_T}}!");
        return {
          prompt: `Find the exact gradient of the NORMAL to {{y = ${expr}}} at {{x = ${x0}}}. Give your answer as an exact integer or simplified fraction.`,
          answer: exactSpec(-1, mT),
          hint: "Differentiate to find the tangent gradient {{m_T}}, then compute {{m_N = -1/m_T}}.",
          traps,
          solution: [
            `{{dy/dx = ${derivExpr}}}.`,
            `At {{x = ${x0}}}, tangent gradient {{m_T = ${mT}}}.`,
            `Normal gradient: {{m_N = -1/(${mT})}} = ${frac(-1, mT)}.`,
          ],
        };
      }

      // Tier 3: Normal y-intercept to y = a x^2 + b x + c at x0 (exact fraction/integer)
      let a = 1, b = 1, c = 0, x0 = 1, y0 = 2, mT = 3;
      for (let tries = 0; tries < 30; tries++) {
        a = rng.pick([1, 2, 3, -1, -2]);
        b = rng.int(-5, 5);
        c = rng.int(-6, 6);
        x0 = rng.nonZero(-3, 3);
        mT = 2 * a * x0 + b;
        y0 = a * x0 * x0 + b * x0 + c;
        if (Math.abs(mT) >= 2 && Math.abs(mT) <= 12) break;
      }
      const expr = poly([[a, "x^2"], [b, "x"], [c, ""]]);
      // Normal: y = y0 + (-1/mT)(x - x0) => at x = 0, y = y0 + x0 / mT = (y0*mT + x0)/mT
      const numVal = y0 * mT + x0;
      const denVal = mT;
      const traps: Trap[] = [];
      pushTrap(traps, numVal, denVal, y0 - mT * x0, 1, "That is the y-intercept of the TANGENT, not the NORMAL!");
      pushTrap(traps, numVal, denVal, y0 * mT - x0, mT, "Check the sign: {{y = y_0 - (1/m_T)(x - x_0)}} gives {{c = y_0 + x_0/m_T}}.");
      return {
        prompt: `Find the exact y-intercept of the NORMAL line to {{y = ${expr}}} at {{x = ${x0}}}. Give your answer as an exact integer or simplified fraction.`,
        answer: exactSpec(numVal, denVal),
        hint: "Find {{y_0}} and {{m_T = y'(" + x0 + ")}}, then set {{x = 0}} in {{y - y_0 = (-1/m_T)(x - x_0)}}.",
        traps,
        solution: [
          `At {{x = ${x0}}}, {{y_0 = ${y0}}} and {{m_T = ${lin(2 * a, b)} = ${mT}}}.`,
          `Normal gradient is {{m_N = ${frac(-1, mT).replace(/\{\{|\}\}/g, "")}}}.`,
          `Setting {{x = 0}} in {{y - (${y0}) = (-1/(${mT}))(x - (${x0}))}} gives {{y = ${y0} + (${x0})/(${mT})}} = ${frac(numVal, denVal)}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: Stationary Points, Inflection & Kinematics (SL, L2)
  // ===========================================================================
  {
    id: "5a-differentiation.stationary-inflection-kinematics",
    topicId: "5a-differentiation",
    title: "Stationary Points, Inflection & Kinematics",
    level: 2,
    ibLevel: "SL",
    guideRef: "curve-sketching-optimization-kinematics",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          // Point of inflection x-coordinate of a cubic with exact integer inflection p
          const a = rng.pick([1, 2, 3, -1, -2]);
          const p = rng.int(-5, 5);
          const b = -3 * a * p;
          const c = rng.nonZero(-8, 8);
          const d = rng.int(-9, 9);
          const expr = poly([[a, "x^3"], [b, "x^2"], [c, "x"], [d, ""]]);
          const f1 = poly([[3 * a, "x^2"], [2 * b, "x"], [c, ""]]);
          const f2 = lin(6 * a, 2 * b);
          return {
            prompt: `Find the x-coordinate of the point of inflection of {{f(x) = ${expr}}}.`,
            answer: exactSpec(p, 1),
            hint: "Differentiate twice to get the linear function {{f''(x)}} and solve {{f''(x) = 0}}.",
            solution: [
              `{{f'(x) = ${f1}}} and {{f''(x) = ${f2}}}.`,
              `Solving {{${f2} = 0}} gives {{x = ${p}}} (and {{f''(x)}} changes sign across {{x = ${p}}}).`,
            ],
          };
        } else {
          // Kinematics: acceleration at t = t0 from cubic s(t)
          const a = rng.pick([1, 2, 3]);
          const b = rng.int(-8, 6);
          const c = rng.int(-6, 9);
          const d = rng.int(0, 8);
          const t0 = rng.int(1, 5);
          const expr = poly([[a, "t^3"], [b, "t^2"], [c, "t"], [d, ""]]);
          const vExpr = poly([[3 * a, "t^2"], [2 * b, "t"], [c, ""]]);
          const aExpr = lin(6 * a, 2 * b, "t");
          const acc = 6 * a * t0 + 2 * b;
          const vel = 3 * a * t0 * t0 + 2 * b * t0 + c;
          const traps: Trap[] = [];
          pushTrap(traps, acc, 1, vel, 1, "That is the VELOCITY {{v(" + t0 + ")}}; differentiate once more for acceleration {{a(t) = s''(t)}}!");
          return {
            prompt: `A particle has displacement {{s(t) = ${expr}}} metres for {{t >= 0}}. Find its acceleration (in m s⁻²) at {{t = ${t0}}} s.`,
            answer: exactSpec(acc, 1),
            hint: "Differentiate {{s(t)}} twice to get {{a(t) = s''(t)}}, then substitute {{t = " + t0 + "}}.",
            traps,
            solution: [
              `Velocity: {{v(t) = s'(t) = ${vExpr}}}.`,
              `Acceleration: {{a(t) = v'(t) = ${aExpr}}}.`,
              `At {{t = ${t0}}}, {{a(${t0}) = ${6 * a}(${t0}) + (${2 * b}) = ${acc}}} m s⁻².`,
            ],
          };
        }
      }

      if (tier === 2) {
        // Cubic f(x) = 2a x^3 - 3a(r1 + r2) x^2 + 6a r1 r2 x + d with exact integer turning points r1 < r2
        const a = rng.pick([1, -1]);
        const r1 = rng.int(-4, 2);
        const gap = rng.int(2, 5);
        const r2 = r1 + gap;
        const d = rng.int(-7, 7);
        const wantMax = rng.bool(0.5);
        // f'(x) = 6a(x - r1)(x - r2)
        // If a > 0: f' is + before r1, - between r1 and r2, + after r2 => r1 is local max, r2 is local min.
        // If a < 0: f' is - before r1, + between r1 and r2, - after r2 => r1 is local min, r2 is local max.
        const xMax = a > 0 ? r1 : r2;
        const xMin = a > 0 ? r2 : r1;
        const ans = wantMax ? xMax : xMin;
        const other = wantMax ? xMin : xMax;
        const c3 = 2 * a;
        const c2 = -3 * a * (r1 + r2);
        const c1 = 6 * a * r1 * r2;
        const expr = poly([[c3, "x^3"], [c2, "x^2"], [c1, "x"], [d, ""]]);
        const f1 = poly([[6 * a, "x^2"], [2 * c2, "x"], [c1, ""]]);
        const f2 = lin(12 * a, 2 * c2);
        const label = wantMax ? "local maximum" : "local minimum";
        const traps: Trap[] = [];
        pushTrap(traps, ans, 1, other, 1, `Check the sign of {{f''(x)}}: {{x = ${other}}} is the ${wantMax ? "local minimum" : "local maximum"}, not the ${label}!`);
        return {
          prompt: `Find the x-coordinate of the ${label} of {{f(x) = ${expr}}}.`,
          answer: exactSpec(ans, 1),
          hint: `Factorise {{f'(x) = 0}} to find both stationary x-values, then test each in {{f''(x)}} (${wantMax ? "{{f'' < 0}}" : "{{f'' > 0}}"} for a ${label}).`,
          traps,
          solution: [
            `{{f'(x) = ${f1} = ${6 * a}(x - (${r1}))(x - (${r2})) = 0}} ⇒ {{x = ${r1}}} or {{x = ${r2}}}.`,
            `{{f''(x) = ${f2}}}. At {{x = ${ans}}}, {{f''(${ans}) = ${12 * a * ans + 2 * c2}}} (${wantMax ? "{{< 0}}" : "{{> 0}}"}), confirming the ${label} is at {{x = ${ans}}}.`,
          ],
        };
      }

      // Tier 3: Kinematics — acceleration at the later rest time OR local extremum y-value
      if (rng.bool(0.5)) {
        // s(t) = 2 t^3 - 3(r1 + r2) t^2 + 6 r1 r2 t + d with 0 < r1 < r2
        const r1 = rng.int(1, 3);
        const r2 = r1 + rng.int(1, 4);
        const d = rng.int(0, 9);
        const c2 = -3 * (r1 + r2);
        const c1 = 6 * r1 * r2;
        const expr = poly([[2, "t^3"], [c2, "t^2"], [c1, "t"], [d, ""]]);
        const askLater = rng.bool(0.5);
        const tTarget = askLater ? r2 : r1;
        // v(t) = 6(t - r1)(t - r2), a(t) = 12t - 6(r1 + r2)
        const acc = 12 * tTarget - 6 * (r1 + r2);
        const traps: Trap[] = [];
        pushTrap(traps, acc, 1, tTarget, 1, `That is the rest time {{t = ${tTarget}}} s — substitute it into {{a(t) = s''(t)}} to find the acceleration!`);
        return {
          prompt: `A particle moves with displacement {{s(t) = ${expr}}} metres ({{t >= 0}}). Find its acceleration (in m s⁻²) at the ${askLater ? "SECOND" : "FIRST"} time it is instantaneously at rest.`,
          answer: exactSpec(acc, 1),
          hint: "Solve {{v(t) = s'(t) = 0}} for the two rest times, then substitute the required time into {{a(t) = v'(t)}}.",
          traps,
          solution: [
            `{{v(t) = 6t^2 ${c2 * 2 < 0 ? "-" : "+"} ${Math.abs(c2 * 2)}t + ${c1} = 6(t - ${r1})(t - ${r2}) = 0}} ⇒ rest at {{t = ${r1}}} s and {{t = ${r2}}} s.`,
            `{{a(t) = ${lin(12, 2 * c2, "t")}}}. At {{t = ${tTarget}}}, {{a(${tTarget}) = ${acc}}} m s⁻².`,
          ],
        };
      } else {
        // Find the local maximum OR minimum VALUE (y-coordinate!) of cubic
        const a = rng.pick([1, -1]);
        const r1 = rng.int(-3, 1);
        const r2 = r1 + rng.pick([2, 3]);
        const d = rng.int(-6, 6);
        const c3 = 2 * a;
        const c2 = -3 * a * (r1 + r2);
        const c1 = 6 * a * r1 * r2;
        const wantMax = rng.bool(0.5);
        const xTarget = wantMax ? (a > 0 ? r1 : r2) : (a > 0 ? r2 : r1);
        const yVal = c3 * xTarget ** 3 + c2 * xTarget ** 2 + c1 * xTarget + d;
        const expr = poly([[c3, "x^3"], [c2, "x^2"], [c1, "x"], [d, ""]]);
        const label = wantMax ? "local maximum value" : "local minimum value";
        const traps: Trap[] = [];
        pushTrap(traps, yVal, 1, xTarget, 1, `That is the x-coordinate {{x = ${xTarget}}} — substitute it back into {{f(x)}} to find the ${label}!`);
        return {
          prompt: `Find the exact ${label} (y-value) of {{f(x) = ${expr}}}.`,
          answer: exactSpec(yVal, 1),
          hint: "Find both roots of {{f'(x) = 0}}, use {{f''(x)}} to pick the right root, then substitute into {{f(x)}}.",
          traps,
          solution: [
            `{{f'(x) = ${6 * a}(x - (${r1}))(x - (${r2})) = 0}} ⇒ {{x = ${r1}, ${r2}}}.`,
            `Testing {{f''(x) = ${lin(12 * a, 2 * c2)}}} shows the ${label} occurs at {{x = ${xTarget}}}.`,
            `Evaluating {{f(${xTarget}) = ${yVal}}}.`,
          ],
        };
      }
    },
  },

  // ===========================================================================
  // DRILL 4: [HL] L'Hôpital's Rule 0/0 Limit Evaluation (HL, L3)
  // ===========================================================================
  {
    id: "5a-differentiation.lhopital-limits-hl",
    topicId: "5a-differentiation",
    title: "[HL] L'Hôpital's Rule (0/0 Indeterminate Limits)",
    level: 3,
    ibLevel: "HL",
    guideRef: "first-principles-lhopital-hl",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        // 1-step L'Hôpital: (e^(ax)-1)/(bx), sin(ax)/(bx), ln(1+ax)/(bx), tan(ax)/sin(bx)
        const a = rng.int(1, 10);
        const b = rng.int(1, 9);
        const kind = rng.int(0, 3);
        const ax = a === 1 ? "x" : `${a}x`;
        const bx = b === 1 ? "x" : `${b}x`;
        const traps: Trap[] = [];
        pushTrap(traps, a, b, b, a, "You inverted the ratio! Differentiate numerator over denominator: {{f'(0)/g'(0)}}.");
        if (kind === 0) {
          return {
            prompt: `Use L'Hôpital's rule to evaluate {{lim_(x -> 0) (e^(${ax}) - 1)/(${bx})}}. Give your answer as an exact integer or simplified fraction.`,
            answer: exactSpec(a, b),
            hint: "Verify {{0/0}}, then differentiate numerator and denominator separately.",
            traps,
            solution: [
              "At {{x = 0}}, form is {{0/0}}. Applying L'Hôpital's rule:",
              `{{lim_(x -> 0) (${a} e^(${ax}))/${b} = ${a}/${b}}} = ${frac(a, b)}.`,
            ],
          };
        } else if (kind === 1) {
          return {
            prompt: `Use L'Hôpital's rule to evaluate {{lim_(x -> 0) (sin(${ax}))/(${bx})}}. Give your answer as an exact integer or simplified fraction.`,
            answer: exactSpec(a, b),
            hint: "Check {{0/0}} and apply {{d/dx(sin(ax)) = a cos(ax)}}.",
            traps,
            solution: [
              "At {{x = 0}}, form is {{0/0}}. Applying L'Hôpital's rule:",
              `{{lim_(x -> 0) (${a} cos(${ax}))/${b} = ${a}/${b}}} = ${frac(a, b)}.`,
            ],
          };
        } else if (kind === 2) {
          return {
            prompt: `Use L'Hôpital's rule to evaluate {{lim_(x -> 0) (ln(1 + ${ax}))/(${bx})}}. Give your answer as an exact integer or simplified fraction.`,
            answer: exactSpec(a, b),
            hint: "Check {{0/0}} and recall {{d/dx[ln(1 + ax)] = a/(1 + ax)}}.",
            traps,
            solution: [
              "At {{x = 0}}, form is {{0/0}}. Applying L'Hôpital's rule:",
              `{{lim_(x -> 0) (${a}/(1 + ${ax}))/${b} = ${a}/${b}}} = ${frac(a, b)}.`,
            ],
          };
        } else {
          return {
            prompt: `Use L'Hôpital's rule to evaluate {{lim_(x -> 0) (tan(${ax}))/(sin(${bx}))}}. Give your answer as an exact integer or simplified fraction.`,
            answer: exactSpec(a, b),
            hint: "Verify {{0/0}}, differentiate {{tan(ax)}} to {{a sec^2(ax)}} and {{sin(bx)}} to {{b cos(bx)}}.",
            traps,
            solution: [
              "At {{x = 0}}, form is {{0/0}}. Applying L'Hôpital's rule:",
              `{{lim_(x -> 0) (${a} sec^2(${ax}))/(${b} cos(${bx})) = ${a}/${b}}} = ${frac(a, b)}.`,
            ],
          };
        }
      }

      if (tier === 2) {
        // 2-step L'Hôpital: (1 - cos(ax))/(bx^2), (e^(ax) - 1 - ax)/(bx^2), (ln(1 + ax) - ax)/(bx^2)
        const a = rng.int(1, 6);
        const b = rng.int(1, 5);
        const kind = rng.int(0, 2);
        const ax = a === 1 ? "x" : `${a}x`;
        const bx2 = b === 1 ? "x^2" : `${b}x^2`;
        const traps: Trap[] = [];
        if (kind === 0) {
          // (1 - cos(ax))/(bx^2) -> a^2 / (2b)
          const numV = a * a;
          const denV = 2 * b;
          pushTrap(traps, numV, denV, a * a, b, "Remember {{d^2/dx^2(b x^2) = 2b}}, not {{b}}!");
          pushTrap(traps, numV, denV, a, 2 * b, "Each differentiation of {{cos(" + ax + ")}} brings out a chain factor of {{" + a + "}}, giving {{" + a + "^2}}!");
          return {
            prompt: `Evaluate {{lim_(x -> 0) (1 - cos(${ax}))/(${bx2})}} using L'Hôpital's rule. Give your answer as an exact integer or simplified fraction.`,
            answer: exactSpec(numV, denV),
            hint: "Apply L'Hôpital TWICE (checking {{0/0}} before each step)!",
            traps,
            solution: [
              `Form {{0/0}} ⇒ 1st L'Hôpital: {{lim_(x -> 0) (${a} sin(${ax}))/(${2 * b}x)}} (still {{0/0}}).`,
              `2nd L'Hôpital: {{lim_(x -> 0) (${a * a} cos(${ax}))/(${2 * b}) = ${numV}/${denV}}} = ${frac(numV, denV)}.`,
            ],
          };
        } else if (kind === 1) {
          // (e^(ax) - 1 - ax)/(bx^2) -> a^2 / (2b)
          const numV = a * a;
          const denV = 2 * b;
          pushTrap(traps, numV, denV, a * a, b, "The denominator {{b x^2}} differentiates twice to {{2b}}, not {{b}}!");
          return {
            prompt: `Evaluate {{lim_(x -> 0) (e^(${ax}) - 1 - ${ax})/(${bx2})}} using L'Hôpital's rule. Give your answer as an exact integer or simplified fraction.`,
            answer: exactSpec(numV, denV),
            hint: "Check {{0/0}}, differentiate top and bottom once (still {{0/0}}), then differentiate a second time.",
            traps,
            solution: [
              `Form {{0/0}} ⇒ 1st L'Hôpital: {{lim_(x -> 0) (${a} e^(${ax}) - ${a})/(${2 * b}x)}} (still {{0/0}}).`,
              `2nd L'Hôpital: {{lim_(x -> 0) (${a * a} e^(${ax}))/(${2 * b}) = ${numV}/${denV}}} = ${frac(numV, denV)}.`,
            ],
          };
        } else {
          // (ln(1 + ax) - ax)/(bx^2) -> -a^2 / (2b)
          const numV = -a * a;
          const denV = 2 * b;
          pushTrap(traps, numV, denV, a * a, 2 * b, "Watch the negative sign when differentiating {{a(1 + ax)^(-1)}} to {{-a^2(1 + ax)^(-2)}}!");
          return {
            prompt: `Evaluate {{lim_(x -> 0) (ln(1 + ${ax}) - ${ax})/(${bx2})}} using L'Hôpital's rule. Give your answer as an exact integer or simplified fraction.`,
            answer: exactSpec(numV, denV),
            hint: "Differentiate twice, writing {{a/(1 + ax)}} as {{a(1 + ax)^(-1)}} for the second step.",
            traps,
            solution: [
              `Form {{0/0}} ⇒ 1st L'Hôpital: {{lim_(x -> 0) (${a}(1 + ${ax})^(-1) - ${a})/(${2 * b}x)}} (still {{0/0}}).`,
              `2nd L'Hôpital: {{lim_(x -> 0) (-${a * a}(1 + ${ax})^(-2))/(${2 * b}) = ${numV}/${denV}}} = ${frac(numV, denV)}.`,
            ],
          };
        }
      }

      // Tier 3: 3-step L'Hôpital or inverse-trig L'Hôpital at x -> 0
      const a = rng.int(1, 5);
      const b = rng.int(1, 4);
      const kind = rng.int(0, 2);
      const ax = a === 1 ? "x" : `${a}x`;
      const bx3 = b === 1 ? "x^3" : `${b}x^3`;
      const traps: Trap[] = [];
      if (kind === 0) {
        // (sin(ax) - ax)/(b x^3) -> -a^3 / (6b)
        const numV = -(a ** 3);
        const denV = 6 * b;
        pushTrap(traps, numV, denV, a ** 3, 6 * b, "Check the signs: {{sin -> cos -> -sin -> -cos}}, so the limit is NEGATIVE!");
        return {
          prompt: `Evaluate {{lim_(x -> 0) (sin(${ax}) - ${ax})/(${bx3})}} using L'Hôpital's rule. Give your answer as an exact integer or simplified fraction.`,
          answer: exactSpec(numV, denV),
          hint: "Apply L'Hôpital three times, checking {{0/0}} before each step (denominator becomes {{6b}}).",
          traps,
          solution: [
            `1st ({{0/0}}): {{(${a} cos(${ax}) - ${a})/(${3 * b}x^2)}}.`,
            `2nd ({{0/0}}): {{(-${a * a} sin(${ax}))/(${6 * b}x)}}.`,
            `3rd ({{0/0}}): {{(-${a ** 3} cos(${ax}))/(${6 * b}) -> ${numV}/${denV}}} = ${frac(numV, denV)}.`,
          ],
        };
      } else if (kind === 1) {
        // (e^(ax) - e^(-ax) - 2ax)/(b x^3) -> a^3 / (3b)
        const numV = 2 * a ** 3;
        const denV = 6 * b;
        pushTrap(traps, numV, denV, a ** 3, 6 * b, "At the third step, {{e^0 + e^0 = 2}}, giving {{2 a^3 / (6b) = a^3 / (3b)}}!");
        return {
          prompt: `Evaluate {{lim_(x -> 0) (e^(${ax}) - e^(-${ax}) - ${2 * a}x)/(${bx3})}} using L'Hôpital's rule. Give your answer as an exact integer or simplified fraction.`,
          answer: exactSpec(numV, denV),
          hint: "Differentiate top and bottom three times, flipping the sign on {{e^(-ax)}} at every step.",
          traps,
          solution: [
            `1st ({{0/0}}): {{(${a} e^(${ax}) + ${a} e^(-${ax}) - ${2 * a})/(${3 * b}x^2)}}.`,
            `2nd ({{0/0}}): {{(${a * a} e^(${ax}) - ${a * a} e^(-${ax}))/(${6 * b}x)}}.`,
            `3rd ({{0/0}}): {{(${a ** 3} e^(${ax}) + ${a ** 3} e^(-${ax}))/(${6 * b}) -> ${numV}/${denV}}} = ${frac(numV, denV)}.`,
          ],
        };
      } else {
        // (ax - arctan(ax))/(b x^3) -> a^3 / (3b)
        const numV = a ** 3;
        const denV = 3 * b;
        pushTrap(traps, numV, denV, a, 3 * b, "After simplifying {{a - a/(1 + a^2 x^2)}}, the numerator is {{a^3 x^2 / (1 + a^2 x^2)}}!");
        return {
          prompt: `Evaluate {{lim_(x -> 0) (${ax} - arctan(${ax}))/(${bx3})}} using L'Hôpital's rule. Give your answer as an exact integer or simplified fraction.`,
          answer: exactSpec(numV, denV),
          hint: "Apply L'Hôpital once using {{d/dx(arctan(ax)) = a/(1 + a^2 x^2)}}, then combine the numerator into a single fraction to cancel {{x^2}}!",
          traps,
          solution: [
            `Form {{0/0}} ⇒ L'Hôpital gives {{lim_(x -> 0) (${a} - ${a}/(1 + ${a * a}x^2))/(${3 * b}x^2)}}.`,
            `Simplify numerator: {{${a} - ${a}/(1 + ${a * a}x^2) = (${a ** 3}x^2)/(1 + ${a * a}x^2)}}.`,
            `Cancel {{x^2}} and take {{x -> 0}}: {{${a ** 3}/(${3 * b}(1))}} = ${frac(numV, denV)}.`,
          ],
        };
      }
    },
  },

  // ===========================================================================
  // DRILL 5: [HL] Implicit Differentiation & Related Rates (HL, L3)
  // ===========================================================================
  {
    id: "5a-differentiation.implicit-related-rates-hl",
    topicId: "5a-differentiation",
    title: "[HL] Implicit Differentiation & Related Rates",
    level: 3,
    ibLevel: "HL",
    guideRef: "implicit-related-rates-trig-hl",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        // Implicit conic a x^2 + b y^2 = c at (x0, y0)
        const a = rng.pick([1, 2, 3, 4, 5]);
        const b = rng.pick([1, 2, 3, 4, -1, -2, -3]);
        const x0 = rng.nonZero(-4, 4);
        const y0 = rng.nonZero(-4, 4);
        const c = a * x0 * x0 + b * y0 * y0;
        const lhs = poly([[a, "x^2"], [b, "y^2"]]);
        const numV = -(a * x0);
        const denV = b * y0;
        const traps: Trap[] = [];
        pushTrap(traps, numV, denV, a * x0, b * y0, "Watch the sign when moving the {{x}}-term to the right-hand side!");
        pushTrap(traps, numV, denV, -b * y0, a * x0, "You inverted the fraction: solve {{2ax + 2by(dy/dx) = 0}} for {{dy/dx}}.");
        return {
          prompt: `Find the exact value of {{dy/dx}} at the point {{(${x0}, ${y0})}} on the curve {{${lhs} = ${c}}}. Give your answer as an exact integer or simplified fraction.`,
          answer: exactSpec(numV, denV),
          hint: "Differentiate both sides w.r.t. {{x}} (remembering the constant RHS differentiates to {{0}}) and substitute {{x = " + x0 + ", y = " + y0 + "}}.",
          traps,
          solution: [
            `Differentiating implicitly: {{${lin(2 * a, 0)} ${2 * b < 0 ? "-" : "+"} ${Math.abs(2 * b)}y (dy/dx) = 0}}.`,
            `At {{(${x0}, ${y0})}}: {{${2 * a * x0} + (${2 * b * y0})(dy/dx) = 0}} ⇒ {{dy/dx = ${frac(numV, denV).replace(/\{\{|\}\}/g, "")}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Mixed implicit a x^2 + b xy + d y^2 = c at (x0, y0)
        let a = 1, b = 1, d = 1, x0 = 1, y0 = 1, denV = 1, numV = 1, c = 3;
        for (let tries = 0; tries < 40; tries++) {
          a = rng.pick([1, 2, 3]);
          b = rng.pick([-3, -2, -1, 1, 2, 3]);
          d = rng.pick([1, 2, 3, -1, -2]);
          x0 = rng.nonZero(-3, 3);
          y0 = rng.nonZero(-3, 3);
          denV = b * x0 + 2 * d * y0;
          numV = -(2 * a * x0 + b * y0);
          c = a * x0 * x0 + b * x0 * y0 + d * y0 * y0;
          if (denV !== 0 && numV !== 0) break;
        }
        const lhs = poly([[a, "x^2"], [b, "xy"], [d, "y^2"]]);
        const traps: Trap[] = [];
        pushTrap(traps, numV, denV, -numV, denV, "Check your sign when isolating {{dy/dx}}!");
        return {
          prompt: `Find the exact gradient {{dy/dx}} at {{(${x0}, ${y0})}} on the curve {{${lhs} = ${c}}}. Give your answer as an exact integer or simplified fraction.`,
          answer: exactSpec(numV, denV),
          hint: "Apply the product rule to the {{xy}} term: {{d/dx(xy) = y + x(dy/dx)}}.",
          traps,
          solution: [
            `Differentiating implicitly: {{${2 * a}x + (${b})(y + x(dy/dx)) + (${2 * d})y(dy/dx) = 0}}.`,
            `At {{(${x0}, ${y0})}}: {{${2 * a * x0 + b * y0} + (${denV})(dy/dx) = 0}} ⇒ {{dy/dx}} = ${frac(numV, denV)}.`,
          ],
        };
      }

      // Tier 3: Mix of related-rates ladder, related-rates cone, and implicit cubic
      const mode = rng.int(0, 2);
      if (mode === 0) {
        // Sliding ladder using Pythagorean triples
        const triples: Array<[number, number, number]> = [
          [3, 4, 5],
          [4, 3, 5],
          [5, 12, 13],
          [12, 5, 13],
          [8, 15, 17],
          [15, 8, 17],
          [7, 24, 25],
          [24, 7, 25],
        ];
        const [bx, by, bL] = rng.pick(triples);
        const k = rng.pick([1, 2]);
        const x = bx * k;
        const y = by * k;
        const L = bL * k;
        const vNum = rng.pick([1, 2, 3, 4, 5, 6]); // dx/dt in m/s (positive away from wall)
        // x(dx/dt) + y(dy/dt) = 0 => dy/dt = -(x * vNum) / y
        const numV = -(x * vNum);
        const denV = y;
        const traps: Trap[] = [];
        pushTrap(traps, numV, denV, x * vNum, y, "Because the top slides DOWN the wall, {{dy/dt}} must be NEGATIVE!");
        pushTrap(traps, numV, denV, -(y * vNum), x, "Check your ratio: {{2x(dx/dt) + 2y(dy/dt) = 0}} gives {{dy/dt = -(x/y)(dx/dt)}}, not {{-(y/x)(dx/dt)}}.");
        return {
          prompt: `A {{${L}}} m ladder leans against a vertical wall. Its foot slides away from the wall at {{${vNum}}} m s⁻¹. Find the exact rate {{dy/dt}} (in m s⁻¹, including sign) of the top of the ladder when the foot is {{${x}}} m from the wall. Give an exact integer or simplified fraction.`,
          answer: exactSpec(numV, denV),
          hint: `Use {{x^2 + y^2 = ${L * L}}} to find {{y = ${y}}} m first, then differentiate with respect to {{t}}.`,
          traps,
          solution: [
            `By Pythagoras, when {{x = ${x}}}, {{y = sqrt(${L}^2 - ${x}^2) = ${y}}} m.`,
            `Differentiating {{x^2 + y^2 = ${L * L}}} w.r.t. {{t}}: {{2x(dx/dt) + 2y(dy/dt) = 0}} ⇒ {{dy/dt = -(x/y)(dx/dt)}}.`,
            `Substituting {{x = ${x}, y = ${y}, dx/dt = ${vNum}}}: {{dy/dt = -(${x}/${y})(${vNum})}} = ${frac(numV, denV)} m s⁻¹.`,
          ],
        };
      } else if (mode === 1) {
        // Inverted conical tank: r/h = p/q, dV/dt = inflow * pi, find dh/dt at depth h
        const ratios: Array<[number, number]> = [
          [1, 2],
          [1, 3],
          [2, 3],
          [1, 4],
          [3, 4],
        ];
        const [p, q] = rng.pick(ratios);
        const mult = rng.pick([2, 3, 4]);
        const R = p * mult;
        const H = q * mult;
        const h = rng.int(1, H - 1);
        const inflow = rng.pick([1, 2, 3, 4, 5, 6, 8, 9]);
        // V = (pi/3)(p/q)^2 h^3 => dV/dt = pi (p^2 / q^2) h^2 (dh/dt)
        // inflow * pi = pi (p^2 h^2 / q^2) (dh/dt) => dh/dt = (inflow * q^2) / (p^2 * h^2)
        const numV = inflow * q * q;
        const denV = p * p * h * h;
        return {
          prompt: `Water is poured into an inverted conical tank of top radius {{${R}}} m and height {{${H}}} m at {{${inflow} pi}} m³ min⁻¹. Find the exact rate {{dh/dt}} (in m min⁻¹) when the water depth is {{h = ${h}}} m. Give an exact integer or simplified fraction.`,
          answer: exactSpec(numV, denV),
          hint: `Use similar triangles {{r/h = ${R}/${H} = ${p}/${q}}} to write {{V}} solely in terms of {{h}} BEFORE differentiating w.r.t. {{t}}!`,
          solution: [
            `Similar triangles: {{r = (${p}/${q})h}}, so {{V = (1/3) pi r^2 h = (${p * p} pi / ${3 * q * q}) h^3}}.`,
            `Differentiate w.r.t. {{t}}: {{dV/dt = (${p * p} pi / ${q * q}) h^2 (dh/dt)}}.`,
            `Substitute {{dV/dt = ${inflow} pi}} and {{h = ${h}}}: {{dh/dt = (${inflow} * ${q * q})/(${p * p} * ${h * h})}} = ${frac(numV, denV)} m min⁻¹.`,
          ],
        };
      } else {
        // Implicit cubic: a x^3 + b xy + d y^2 = c at (x0, y0)
        let a = 1, b = 1, d = 1, x0 = 1, y0 = 1, denV = 1, numV = 1, c = 3;
        for (let tries = 0; tries < 40; tries++) {
          a = rng.pick([1, 2, -1]);
          b = rng.pick([-3, -2, -1, 1, 2, 3]);
          d = rng.pick([1, 2, 3, -1, -2]);
          x0 = rng.nonZero(-2, 2);
          y0 = rng.nonZero(-3, 3);
          denV = b * x0 + 2 * d * y0;
          numV = -(3 * a * x0 * x0 + b * y0);
          c = clean(a * x0 ** 3 + b * x0 * y0 + d * y0 * y0);
          if (denV !== 0 && numV !== 0) break;
        }
        const lhs = poly([[a, "x^3"], [b, "xy"], [d, "y^2"]]);
        return {
          prompt: `Find the exact value of {{dy/dx}} at {{(${x0}, ${y0})}} on the implicit curve {{${lhs} = ${c}}}. Give your answer as an exact integer or simplified fraction.`,
          answer: exactSpec(numV, denV),
          hint: "Differentiate term by term using the product rule on {{xy}}, then plug in {{(${x0}, ${y0})}} directly.",
          solution: [
            `Implicit differentiation: {{${3 * a}x^2 + (${b})(y + x(dy/dx)) + (${2 * d})y(dy/dx) = 0}}.`,
            `At {{(${x0}, ${y0})}}: {{${3 * a * x0 * x0 + b * y0} + (${denV})(dy/dx) = 0}} ⇒ {{dy/dx}} = ${frac(numV, denV)}.`,
          ],
        };
      }
    },
  },
];
