import type { Drill } from "./types.ts";
import type { Trap } from "../types.ts";
import { frac, gcd, num, poly, signed, simplify } from "./helpers.ts";

function fracAnswer(n: number, d: number) {
  const [sn, sd] = simplify(n, d);
  if (sd === 1) return { type: "number" as const, value: sn };
  return { type: "fraction" as const, n: sn, d: sd, simplest: true };
}

function fracDisplay(n: number, d: number): string {
  return frac(n, d);
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1 (SL, Level 1): Definite Integrals & Boundary Conditions (+ C)
  // ===========================================================================
  {
    id: "5b-integration-des-maclaurin.definite-and-boundary",
    topicId: "5b-integration-des-maclaurin",
    title: "Definite Integrals & Boundary Conditions",
    level: 1,
    ibLevel: "SL",
    guideRef: "integration-areas-kinematics",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          // Definite polynomial integral with exact integer result
          const a3 = rng.nonZero(-3, 4);
          const b2 = rng.int(-4, 5);
          const c = rng.nonZero(-5, 6);
          const p = rng.int(0, 2);
          const q = p + rng.int(1, 3);
          const F = (x: number) => a3 * x ** 3 + b2 * x ** 2 + c * x;
          const ans = F(q) - F(p);
          const integrand = poly([[3 * a3, "x^2"], [2 * b2, "x"], [c, ""]]);
          const anti = poly([[a3, "x^3"], [b2, "x^2"], [c, "x"]]);
          const traps: Trap[] = [];
          if (F(q) + F(p) !== ans && p > 0) {
            traps.push({
              spec: { type: "number" as const, value: F(q) + F(p) },
              feedback: "Subtract the lower limit F(a) from F(b), rather than adding them.",
            });
          }
          return {
            prompt: `Evaluate the exact definite integral of {{${integrand}}} from {{x = ${p}}} to {{x = ${q}}}.`,
            answer: { type: "number", value: ans },
            hint: `Integrate term by term to get {{F(x) = ${anti}}}, then compute {{F(${q}) - F(${p})}}.`,
            traps,
            solution: [
              `Antiderivative: {{F(x) = ${anti}}}.`,
              `Evaluate: {{F(${q}) = ${num(F(q))}}} and {{F(${p}) = ${num(F(p))}}}.`,
              `Subtract: {{${num(F(q))} - (${num(F(p))}) = ${num(ans)}}}.`,
            ],
          };
        }
        // Boundary condition (+ C) for polynomial derivative
        const a = rng.nonZero(-2, 3);
        const b = rng.nonZero(-4, 4);
        const c = rng.int(-4, 5);
        const x0 = rng.int(1, 2);
        const x1 = x0 === 1 ? rng.pick([2, 3, -1]) : rng.pick([1, 3, -1]);
        const C = rng.nonZero(-6, 8);
        const f = (x: number) => a * x ** 3 + b * x ** 2 + c * x + C;
        const y0 = f(x0);
        const ans = f(x1);
        const deriv = poly([[3 * a, "x^2"], [2 * b, "x"], [c, ""]]);
        const base = poly([[a, "x^3"], [b, "x^2"], [c, "x"]]);
        const traps: Trap[] = [];
        if (ans - C !== ans) {
          traps.push({
            spec: { type: "number" as const, value: ans - C },
            feedback: "You forgot to add the constant of integration C!",
          });
        }
        return {
          prompt: `A curve satisfies {{f'(x) = ${deriv}}} and {{f(${x0}) = ${num(y0)}}}. Find the exact value of {{f(${num(x1)})}}.`,
          answer: { type: "number", value: ans },
          hint: `Integrate to {{f(x) = ${base} + C}}, find {{C}} using {{f(${x0}) = ${num(y0)}}}, then evaluate {{f(${num(x1)})}}.`,
          traps,
          solution: [
            `Integrate term by term: {{f(x) = ${base} + C}}.`,
            `Substitute {{x = ${x0}}}: {{${num(y0 - C)} + C = ${num(y0)}}}, so {{C = ${num(C)}}}.`,
            `Evaluate at {{x = ${num(x1)}}}: {{f(${num(x1)}) = ${num(ans - C)} ${signed(C)} = ${num(ans)}}}.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Trig definite integral: ∫_0^(π/(2k)) (p*k sin(kx) + q*k cos(kx)) dx = p + q
          const k = rng.int(1, 5);
          const p = rng.int(1, 6);
          const q = rng.nonZero(-5, 6);
          const ans = p + q;
          const m = p * k;
          const n = q * k;
          const arg = k === 1 ? "x" : `${k}x`;
          const upper = k === 1 ? "pi/2" : `pi/${2 * k}`;
          const integrand = poly([[m, `sin(${arg})`], [n, `cos(${arg})`]]);
          const traps: Trap[] = [];
          if (q - p !== ans) {
            traps.push({
              spec: { type: "number" as const, value: q - p },
              feedback: "Watch the lower limit at x = 0: cos(0) = 1, so subtracting −p cos(0) ADDS p!",
            });
          }
          if (k > 1 && ans * k !== ans) {
            traps.push({
              spec: { type: "number" as const, value: ans * k },
              feedback: `Remember to divide by the inner derivative k = ${k} when integrating trig functions.`,
            });
          }
          return {
            prompt: `Evaluate the exact definite integral of {{${integrand}}} from {{x = 0}} to {{x = ${upper}}} (in radians).`,
            answer: { type: "number", value: ans },
            hint: `Divide by {{${k}}} for the chain rule; remember {{cos(0) = 1}} and {{sin(pi/2) = 1}}.`,
            traps,
            solution: [
              `Antiderivative: {{${poly([[-p, `cos(${arg})`], [q, `sin(${arg})`]])}}}.`,
              `At {{x = ${upper}}}: {{- (${p})(0) ${signed(q)}(1) = ${num(q)}}}.`,
              `At {{x = 0}}: {{${num(-p)}(1) ${signed(q)}(0) = ${num(-p)}}}.`,
              `Subtract: {{${num(q)} - (${num(-p)}) = ${num(ans)}}}.`,
            ],
          };
        }
        if (mode === 1) {
          // Boundary condition with exponential: f'(x) = a*k e^(kx) + b, f(0) = y0 -> find C
          const k = rng.int(2, 5);
          const a = rng.nonZero(-5, 6);
          const b = rng.nonZero(-6, 6);
          const y0 = rng.int(-5, 12);
          const C = y0 - a;
          const ak = a * k;
          const expr = poly([[ak, `e^(${k}x)`], [b, ""]]);
          const anti = poly([[a, `e^(${k}x)`], [b, "x"]]);
          return {
            prompt: `Given {{f'(x) = ${expr}}} and {{f(0) = ${num(y0)}}}, write {{f(x) = ${anti} + C}} and find the exact value of {{C}}.`,
            answer: { type: "number", value: C },
            hint: `Substitute {{x = 0}} and remember {{e^0 = 1}}, not {{0}}!`,
            traps: [
              {
                spec: { type: "number", value: y0 },
                feedback: `Careful: e^0 = 1, not 0! So f(0) = ${num(a)} + C, not C.`,
              },
            ],
            solution: [
              `Integrate: {{f(x) = ${anti} + C}}.`,
              `Substitute {{x = 0}}: {{${num(a)} e^0 + 0 + C = ${num(y0)}}}, so {{${num(a)} + C = ${num(y0)}}}.`,
              `Hence {{C = ${num(y0)} - (${num(a)}) = ${num(C)}}}.`,
            ],
          };
        }
        // Simple u-substitution definite integral: ∫_0^b c*2x*(x^2 + d)^p dx
        const p = rng.pick([1, 2]);
        const mult = rng.int(1, 3);
        const c = mult * (p + 1);
        const b = rng.int(1, p === 1 ? 4 : 2);
        const d = rng.int(1, p === 1 ? 5 : 3);
        const u0 = d;
        const u1 = b * b + d;
        const ans = mult * (u1 ** (p + 1) - u0 ** (p + 1));
        const lead = 2 * c;
        const traps: Trap[] = [];
        const forgetLower = mult * u1 ** (p + 1);
        if (forgetLower !== ans) {
          traps.push({
            spec: { type: "number", value: forgetLower },
            feedback: `Don't forget the lower limit! At x = 0, u = ${u0} (not 0).`,
          });
        }
        return {
          prompt: `Use the substitution {{u = x^2 + ${d}}} to evaluate the exact definite integral of {{${lead}x(x^2 + ${d})${p === 1 ? "" : `^${p}`}}} from {{x = 0}} to {{x = ${b}}}.`,
          answer: { type: "number", value: ans },
          hint: `With {{u = x^2 + ${d}}}, {{${lead}x dx = ${c} du}} and the limits become {{u = ${u0}}} to {{u = ${u1}}}.`,
          traps,
          solution: [
            `Let {{u = x^2 + ${d}}}, so {{du = 2x dx}} and {{${lead}x dx = ${c} du}}.`,
            `Change limits: {{x = 0 -> u = ${u0}}}, {{x = ${b} -> u = ${u1}}}.`,
            `Integrate {{${c} u${p === 1 ? "" : `^${p}`} du}} to {{[${mult === 1 ? "" : mult}u^${p + 1}]_${u0}^${u1} = ${num(ans)}}}.`,
          ],
        };
      }

      // Tier 3: unknown upper limit k OR radical + power definite integral
      if (rng.bool(0.5)) {
        const a = rng.int(1, 5);
        const b = rng.int(1, 8);
        const k = rng.int(2, 7);
        const val = a * k * k + b * k;
        const integrand = poly([[2 * a, "x"], [b, ""]]);
        const anti = poly([[a, "x^2"], [b, "x"]]);
        return {
          prompt: `The definite integral of {{${integrand}}} from {{x = 0}} to {{x = k}} (where {{k > 0}}) equals {{${val}}}. Find the exact value of {{k}}.`,
          answer: { type: "number", value: k },
          hint: `Evaluate the integral in terms of {{k}} to get the quadratic {{${anti.replace(/x/g, "k")} = ${val}}}.`,
          solution: [
            `Integrating from {{0}} to {{k}} gives {{${a === 1 ? "" : a}k^2 + ${b}k = ${val}}}.`,
            `Rearranging: {{${a === 1 ? "" : a}k^2 + ${b}k - ${val} = 0}}.`,
            `Since {{k > 0}}, solving yields the unique positive root {{k = ${k}}}.`,
          ],
        };
      }
      // Radical + polynomial integral from p^2 to q^2
      const a = rng.nonZero(-4, 6);
      const b3 = rng.nonZero(-2, 3);
      const p = rng.int(1, 2);
      const q = p + rng.int(1, 2);
      const lo = p * p;
      const hi = q * q;
      const ans = 2 * a * (q - p) + b3 * (hi ** 3 - lo ** 3);
      const bTerm = 3 * b3;
      const bStr = bTerm > 0 ? `+ ${bTerm}x^2` : `- ${Math.abs(bTerm)}x^2`;
      return {
        prompt: `Evaluate the exact definite integral of {{${a}/sqrt(x) ${bStr}}} from {{x = ${lo}}} to {{x = ${hi}}}.`,
        answer: { type: "number", value: ans },
        hint: `Rewrite {{${a}/sqrt(x) = ${a}x^(-1/2)}} whose antiderivative is {{${2 * a} sqrt(x)}}.`,
        solution: [
          `Antiderivative: {{F(x) = ${2 * a} sqrt(x) ${b3 > 0 ? `+ ${b3 === 1 ? "" : b3}x^3` : `- ${Math.abs(b3) === 1 ? "" : Math.abs(b3)}x^3`}}}.`,
          `Evaluate: {{F(${hi}) - F(${lo}) = ${2 * a}(${q} - ${p}) ${b3 > 0 ? `+ ${b3}` : `- ${Math.abs(b3)}`}(${hi ** 3} - ${lo ** 3}) = ${num(ans)}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2 (SL, Level 2): Total Area Between Curves & Kinematics Distance
  // ===========================================================================
  {
    id: "5b-integration-des-maclaurin.areas-and-kinematics",
    topicId: "5b-integration-des-maclaurin",
    title: "Areas Between Curves & Kinematics Total Distance",
    level: 2,
    ibLevel: "SL",
    guideRef: "integration-areas-kinematics",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          // Area under y = a(r*x - x^2) above x-axis
          const a = rng.int(1, 5);
          const r = rng.int(2, 6);
          const numVal = a * r ** 3;
          const denVal = 6;
          const [sn, sd] = simplify(numVal, denVal);
          const expr = poly([[a * r, "x"], [-a, "x^2"]]);
          return {
            prompt: `Find the exact area enclosed between the parabola {{y = ${expr}}} and the {{x}}-axis. Give your answer as an exact integer or simplified fraction.`,
            answer: fracAnswer(sn, sd),
            hint: `Factorise to find the roots {{x = 0}} and {{x = ${r}}}, then integrate from {{0}} to {{${r}}}.`,
            solution: [
              `The {{x}}-intercepts are {{x = 0}} and {{x = ${r}}}, with {{y >= 0}} on {{[0, ${r}]}}.`,
              `Area {{= [${fracDisplay(a * r, 2).replace(/\{\{|\}\}/g, "")} x^2 - ${fracDisplay(a, 3).replace(/\{\{|\}\}/g, "")} x^3]_0^${r} = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
            ],
          };
        }
        // Linear velocity total distance: v(t) = a(t - r) on [0, T]
        const a = rng.int(1, 5);
        const r = rng.int(1, 4);
        const T = r + rng.int(1, 4);
        const numDist = a * (r * r + (T - r) * (T - r));
        const [sn, sd] = simplify(numDist, 2);
        const numDisp = a * (T * T - 2 * r * T);
        const [dn, dd] = simplify(numDisp, 2);
        const traps: Trap[] = [];
        if (sn * dd !== dn * sd) {
          traps.push({
            spec: fracAnswer(dn, dd),
            feedback: "That is the net displacement! Split at v(t) = 0 to find total distance travelled.",
          });
        }
        const vExpr = poly([[a, "t"], [-a * r, ""]]);
        return {
          prompt: `A particle moves with velocity {{v(t) = ${vExpr}}} m s⁻¹ for {{0 <= t <= ${T}}}. Find the exact **total distance** travelled (in m) as an integer or simplified fraction.`,
          answer: fracAnswer(sn, sd),
          hint: `Split the integral at the turning instant {{t = ${r}}} where {{v(t) = 0}}.`,
          traps,
          solution: [
            `{{v(t) = 0}} at {{t = ${r}}} inside {{[0, ${T}]}}.`,
            `Distance on {{[0, ${r}]}} is {{${fracDisplay(a * r * r, 2).replace(/\{\{|\}\}/g, "")}}}; distance on {{[${r}, ${T}]}} is {{${fracDisplay(a * (T - r) ** 2, 2).replace(/\{\{|\}\}/g, "")}}}.`,
            `Total distance {{= ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}} m.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Total geometric area between y = a(x^2 - r^2) and x-axis on [0, b], r < b
          const a = rng.int(1, 3);
          const r = rng.int(1, 3);
          const b = r + rng.int(1, 3);
          const totalNum = a * (b ** 3 - 3 * r * r * b + 4 * r ** 3);
          const [sn, sd] = simplify(totalNum, 3);
          const signedNum = a * (b ** 3 - 3 * r * r * b);
          const [gn, gd] = simplify(signedNum, 3);
          const traps: Trap[] = [];
          if (gn * sd !== sn * gd) {
            traps.push({
              spec: fracAnswer(gn, gd),
              feedback: `That's the raw signed integral! The curve crosses the x-axis at x = ${r}, so split into [0, ${r}] and [${r}, ${b}].`,
            });
          }
          const expr = poly([[a, "x^2"], [-a * r * r, ""]]);
          return {
            prompt: `Find the exact **total geometric area** enclosed between {{y = ${expr}}} and the {{x}}-axis from {{x = 0}} to {{x = ${b}}}. Give your answer as an integer or simplified fraction.`,
            answer: fracAnswer(sn, sd),
            hint: `Locate the root {{x = ${r}}} inside {{[0, ${b}]}} and sum the magnitudes of the two sub-integrals.`,
            traps,
            solution: [
              `The curve crosses the {{x}}-axis at {{x = ${r}}}.`,
              `Area below axis on {{[0, ${r}]}} is ${fracDisplay(2 * a * r ** 3, 3)}; area above axis on {{[${r}, ${b}]}} is ${fracDisplay(a * (b ** 3 - 3 * r * r * b + 2 * r ** 3), 3)}.`,
              `Total geometric area {{= ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
            ],
          };
        }
        // Area between parabola y = (a*r + m)x - a*x^2 and line y = m*x
        const a = rng.int(1, 4);
        const r = rng.int(2, 5);
        const m = rng.int(1, 5);
        const [sn, sd] = simplify(a * r ** 3, 6);
        const para = poly([[a * r + m, "x"], [-a, "x^2"]]);
        const line = poly([[m, "x"]]);
        return {
          prompt: `Find the exact area enclosed between the parabola {{y = ${para}}} and the line {{y = ${line}}}. Give your answer as an integer or simplified fraction.`,
          answer: fracAnswer(sn, sd),
          hint: `Equate the two curves to find intersections {{x = 0}} and {{x = ${r}}}, then integrate upper minus lower.`,
          solution: [
            `Intersections: {{${poly([[a * r, "x"], [-a, "x^2"]])} = 0}} gives {{x = 0}} and {{x = ${r}}}.`,
            `Integrate {{${poly([[a * r, "x"], [-a, "x^2"]])}}} from {{0}} to {{${r}}} to obtain ${fracDisplay(sn, sd)}.`,
          ],
        };
      }

      // Tier 3: Quadratic velocity with TWO roots inside [0, T]
      const sign = rng.pick([1, -1]);
      const a = sign * rng.int(1, 4);
      const r1 = rng.int(1, 3);
      const r2 = r1 + rng.int(1, 2);
      const T = r2 + rng.int(1, 3);
      const G = (t: number) => a * (2 * t ** 3 - 3 * (r1 + r2) * t ** 2 + 6 * r1 * r2 * t);
      const d1 = Math.abs(G(r1) - G(0));
      const d2 = Math.abs(G(r2) - G(r1));
      const d3 = Math.abs(G(T) - G(r2));
      const [sn, sd] = simplify(d1 + d2 + d3, 6);
      const [dn, dd] = simplify(G(T), 6);
      const traps: Trap[] = [];
      if (dn * sd !== sn * dd) {
        traps.push({
          spec: fracAnswer(dn, dd),
          feedback: `That's net displacement! Split at both turning instants t = ${r1} and t = ${r2} to get total distance.`,
        });
      }
      const vExpr = poly([[a, "t^2"], [-a * (r1 + r2), "t"], [a * r1 * r2, ""]]);
      const leadStr = a === 1 ? "" : a === -1 ? "-" : String(a);
      return {
        prompt: `A particle moves with velocity {{v(t) = ${vExpr}}} m s⁻¹ for {{0 <= t <= ${T}}}. Find the exact **total distance** travelled (in m) as an integer or simplified fraction.`,
        answer: fracAnswer(sn, sd),
        hint: `Factorise {{v(t) = ${leadStr}(t - ${r1})(t - ${r2})}} and sum magnitudes over {{[0, ${r1}]}}, {{[${r1}, ${r2}]}}, and {{[${r2}, ${T}]}}.`,
        traps,
        solution: [
          `Turning instants where {{v(t) = 0}} are {{t = ${r1}}} and {{t = ${r2}}}.`,
          `Antiderivative values: {{F(0) = 0}}, {{F(${r1}) = ${fracDisplay(G(r1), 6).replace(/\{\{|\}\}/g, "")}}}, {{F(${r2}) = ${fracDisplay(G(r2), 6).replace(/\{\{|\}\}/g, "")}}}, {{F(${T}) = ${fracDisplay(G(T), 6).replace(/\{\{|\}\}/g, "")}}}.`,
          `Summing interval magnitudes: ${fracDisplay(d1, 6)} + ${fracDisplay(d2, 6)} + ${fracDisplay(d3, 6)} = ${fracDisplay(sn, sd)} m.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3 (HL, Level 2): Integration by Parts & Volumes of Revolution
  // ===========================================================================
  {
    id: "5b-integration-des-maclaurin.ibp-and-volumes-hl",
    topicId: "5b-integration-des-maclaurin",
    title: "[HL] Integration by Parts & Volumes of Revolution",
    level: 2,
    ibLevel: "HL",
    guideRef: "advanced-integration-volumes-hl",
    generate(rng, tier) {
      if (tier === 1) {
        // Volume of revolution about x-axis: V/pi for y = a*x, a*sqrt(x), or a*x^2
        const kind = rng.int(0, 2);
        const a = rng.int(1, 4);
        const p = rng.int(0, 2);
        const q = p + rng.int(1, kind === 2 ? 2 : 3);
        if (kind === 0) {
          const [sn, sd] = simplify(a * a * (q ** 3 - p ** 3), 3);
          const fn = a === 1 ? "x" : `${a}x`;
          return {
            prompt: `The region bounded by {{y = ${fn}}}, the {{x}}-axis, {{x = ${p}}}, and {{x = ${q}}} is rotated {{2pi}} radians about the {{x}}-axis. Find the exact value of {{V/pi}} as an integer or simplified fraction.`,
            answer: fracAnswer(sn, sd),
            hint: `Use {{V/pi =}} integral of {{y^2 dx = ${a * a === 1 ? "" : a * a}x^2 dx}} from {{${p}}} to {{${q}}}.`,
            solution: [
              `Square {{y}}: {{y^2 = ${a * a === 1 ? "" : a * a}x^2}}.`,
              `Integrate from {{${p}}} to {{${q}}}: {{[${fracDisplay(a * a, 3).replace(/\{\{|\}\}/g, "")} x^3]_${p}^${q} = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
            ],
          };
        }
        if (kind === 1) {
          const [sn, sd] = simplify(a * a * (q ** 2 - p ** 2), 2);
          const fn = a === 1 ? "sqrt(x)" : `${a} sqrt(x)`;
          return {
            prompt: `The region bounded by {{y = ${fn}}}, the {{x}}-axis, {{x = ${p}}}, and {{x = ${q}}} is rotated {{2pi}} radians about the {{x}}-axis. Find the exact value of {{V/pi}} as an integer or simplified fraction.`,
            answer: fracAnswer(sn, sd),
            hint: `Square {{y}} cleanly: {{y^2 = ${a * a === 1 ? "" : a * a}x}}, then integrate from {{${p}}} to {{${q}}}.`,
            solution: [
              `{{y^2 = ${a * a === 1 ? "" : a * a}x}}.`,
              `{{V/pi = [${fracDisplay(a * a, 2).replace(/\{\{|\}\}/g, "")} x^2]_${p}^${q} = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
            ],
          };
        }
        const [sn, sd] = simplify(a * a * (q ** 5 - p ** 5), 5);
        const fn = a === 1 ? "x^2" : `${a}x^2`;
        return {
          prompt: `The region bounded by {{y = ${fn}}}, the {{x}}-axis, {{x = ${p}}}, and {{x = ${q}}} is rotated {{2pi}} radians about the {{x}}-axis. Find the exact value of {{V/pi}} as an integer or simplified fraction.`,
          answer: fracAnswer(sn, sd),
          hint: `Remember to square {{y}}: {{y^2 = ${a * a === 1 ? "" : a * a}x^4}}.`,
          solution: [
            `{{y^2 = ${a * a === 1 ? "" : a * a}x^4}}.`,
            `{{V/pi = [${fracDisplay(a * a, 5).replace(/\{\{|\}\}/g, "")} x^5]_${p}^${q} = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Volume about y-axis: y = a*x^2 (x >= 0) between y = c and y = d
          const a = rng.int(1, 5);
          const c = rng.int(0, 3);
          const d = c + rng.int(2, 5);
          const [sn, sd] = simplify(d * d - c * c, 2 * a);
          const fn = a === 1 ? "x^2" : `${a}x^2`;
          return {
            prompt: `The region in the first quadrant bounded by {{y = ${fn}}}, the {{y}}-axis, {{y = ${c}}}, and {{y = ${d}}} is rotated {{2pi}} radians about the **{{y}}-axis**. Find the exact value of {{V/pi}} as an integer or simplified fraction.`,
            answer: fracAnswer(sn, sd),
            hint: `Express {{x^2 = y${a === 1 ? "" : `/${a}`}}} and integrate with respect to {{y}} from {{${c}}} to {{${d}}}.`,
            solution: [
              `Rearranging gives {{x^2 = ${a === 1 ? "y" : `y/${a}`}}}.`,
              `{{V/pi =}} integral from {{${c}}} to {{${d}}} of {{x^2 dy = [y^2/${2 * a}]_${c}^${d} = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
            ],
          };
        }
        // IBP definite integral: ∫_0^1 (ax + b) e^x dx = b*e + (a - b), find constant term q = a - b
        const a = rng.nonZero(-7, 9);
        let b = rng.nonZero(-7, 8);
        if (b === a) b += 1;
        const q = a - b;
        const lin = poly([[a, "x"], [b, ""]]);
        const traps: Trap[] = [];
        if (-q !== q) {
          traps.push({
            spec: { type: "number" as const, value: -q },
            feedback: "Check the subtraction at the lower limit x = 0: subtracting F(0) reverses its sign!",
          });
        }
        return {
          prompt: `Use integration by parts to write the exact definite integral of {{(${lin}) e^x}} from {{x = 0}} to {{x = 1}} in the form {{p e + q}} (with integers {{p, q}}). Find the exact value of {{q}}.`,
          answer: { type: "number", value: q },
          hint: `Choose {{u = ${lin}}} and {{dv/dx = e^x}}; evaluate {{[(${poly([[a, "x"], [b - a, ""]])}) e^x]_0^1}}.`,
          traps,
          solution: [
            `Set {{u = ${lin}}} and {{dv/dx = e^x}} so {{du/dx = ${a}}} and {{v = e^x}}.`,
            `Antiderivative: {{(${poly([[a, "x"], [b - a, ""]])}) e^x}}.`,
            `Evaluate from {{0}} to {{1}}: {{${num(b)} e - (${num(b - a)}) = ${num(b)} e ${signed(q)}}}, so {{q = ${num(q)}}}.`,
          ],
        };
      }

      // Tier 3: Hollow washer volume OR repeated IBP ∫_0^1 (ax^2 + bx + c) e^x dx
      if (rng.bool(0.5)) {
        // Washer between y = a*r*x and y = a*x^2 on [0, r]
        const a = rng.int(1, 3);
        const r = rng.int(1, 4);
        const [sn, sd] = simplify(2 * a * a * r ** 5, 15);
        const outer = poly([[a * r, "x"]]);
        const inner = poly([[a, "x^2"]]);
        return {
          prompt: `The region enclosed between {{y = ${outer}}} and {{y = ${inner}}} (for {{0 <= x <= ${r}}}) is rotated {{2pi}} radians about the {{x}}-axis. Find the exact washer volume {{V/pi}} as an integer or simplified fraction.`,
          answer: fracAnswer(sn, sd),
          hint: `Use the washer formula {{V/pi =}} integral from {{0}} to {{${r}}} of {{((${outer})^2 - (${inner})^2) dx}}.`,
          solution: [
            `On {{[0, ${r}]}}, {{${outer} >= ${inner}}}.`,
            `{{V/pi =}} integral from {{0}} to {{${r}}} of {{(${a * a * r * r}x^2 - ${a * a === 1 ? "" : a * a}x^4) dx = ${a * a} * ${r ** 5}(1/3 - 1/5) = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
          ],
        };
      }
      // Repeated IBP: ∫_0^1 (ax^2 + bx + c) e^x dx = (a + c)e + (b - 2a - c)
      const a = rng.nonZero(-4, 5);
      const b = rng.nonZero(-6, 6);
      const c = rng.int(-4, 5);
      const pVal = a + c;
      const qVal = b - 2 * a - c;
      const quad = poly([[a, "x^2"], [b, "x"], [c, ""]]);
      const antiPoly = poly([[a, "x^2"], [b - 2 * a, "x"], [c - b + 2 * a, ""]]);
      return {
        prompt: `Apply integration by parts twice to write the exact definite integral of {{(${quad}) e^x}} from {{x = 0}} to {{x = 1}} in the form {{p e + q}} (integers {{p, q}}). Find the exact value of {{q}}.`,
        answer: { type: "number", value: qVal },
        hint: `Differentiate the quadratic twice while integrating {{e^x}}; recall the alternating sign pattern {{(Q - Q' + Q'') e^x}}.`,
        solution: [
          `Repeated IBP yields antiderivative {{(${antiPoly}) e^x}}.`,
          `At {{x = 1}}: {{${num(pVal)} e}}. At {{x = 0}}: {{${num(-qVal)}}}.`,
          `Subtracting gives {{${num(pVal)} e ${signed(qVal)}}}, so {{q = ${num(qVal)}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4 (HL, Level 3): First-Order ODEs (Separable, Integrating Factor, Homogeneous)
  // ===========================================================================
  {
    id: "5b-integration-des-maclaurin.first-order-odes-hl",
    topicId: "5b-integration-des-maclaurin",
    title: "[HL] First-Order ODEs: Separation, Integrating Factor & Homogeneous",
    level: 3,
    ibLevel: "HL",
    guideRef: "differential-equations-hl",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          // Separable: 2y dy/dx = 3a x^2 + 2b x + c, y(0) = y0 -> find y(x1)^2
          const a = rng.int(1, 3);
          const b = rng.int(-2, 4);
          const c = rng.int(1, 5);
          const y0 = rng.int(1, 5);
          const x1 = rng.int(1, 3);
          const rhs = poly([[3 * a, "x^2"], [2 * b, "x"], [c, ""]]);
          const anti = poly([[a, "x^3"], [b, "x^2"], [c, "x"]]);
          const C = y0 * y0;
          const ans = a * x1 ** 3 + b * x1 ** 2 + c * x1 + C;
          const traps = y0 > 1
            ? [
                {
                  spec: { type: "number" as const, value: ans - C + y0 },
                  feedback: `Careful: at x = 0, y² = ${y0}² = ${C}, not ${y0}!`,
                },
              ]
            : [];
          return {
            prompt: `Solve the separable ODE {{2y (dy/dx) = ${rhs}}} with {{y(0) = ${y0}}}. Find the exact value of {{[y(${x1})]^2}}.`,
            answer: { type: "number", value: ans },
            hint: `Integrate both sides directly: {{y^2 = ${anti} + C}}, then use {{y(0) = ${y0}}}.`,
            traps,
            solution: [
              `Separating and integrating gives {{y^2 = ${anti} + C}}.`,
              `At {{x = 0, y = ${y0}}}: {{C = ${y0}^2 = ${C}}}.`,
              `At {{x = ${x1}}}: {{[y(${x1})]^2 = ${num(ans - C)} + ${C} = ${num(ans)}}}.`,
            ],
          };
        }
        // Exponential separable: dy/dx = k*y, y(0) = e^m -> find exact ln(y(t))
        const k = rng.nonZero(-4, 6);
        const m = rng.int(1, 6);
        const t = rng.int(1, 5);
        const ans = k * t + m;
        return {
          prompt: `A function satisfies {{dy/dx = ${k === 1 ? "" : k === -1 ? "-" : k}y}} with {{y(0) = e^${m}}}. Find the exact value of {{ln(y(${t}))}}.`,
          answer: { type: "number", value: ans },
          hint: `Separate to {{(1/y) dy = ${k} dx}} to obtain {{ln y = ${k}x + C}}.`,
          solution: [
            `Separating variables gives {{ln y = ${k === 1 ? "" : k === -1 ? "-" : k}x + C}}.`,
            `Using {{y(0) = e^${m}}} gives {{C = ln(e^${m}) = ${m}}}.`,
            `Thus {{ln(y(${t})) = ${num(k)}(${t}) + ${m} = ${num(ans)}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Linear ODE via integrating factor mu(x) = x^n: dy/dx + (n/x)y = c x^m, y(1) = y1 -> find y(2)
        const n = rng.int(1, 3);
        const m = rng.int(0, 2);
        const k = rng.nonZero(-3, 5);
        const c = k * (n + m + 1);
        const y1 = rng.int(-3, 9);
        const C = y1 - k;
        const numVal = k * 2 ** (n + m + 1) + C;
        const denVal = 2 ** n;
        const [sn, sd] = simplify(numVal, denVal);
        const rhs = m === 0 ? `${c}` : m === 1 ? `${c}x` : `${c}x^2`;
        const pTerm = n === 1 ? "(1/x)" : `(${n}/x)`;
        const muStr = n === 1 ? "x" : `x^${n}`;
        const pow = n + m + 1;
        return {
          prompt: `Solve the linear ODE {{dy/dx + ${pTerm} y = ${rhs}}} ({{x > 0}}) subject to {{y(1) = ${num(y1)}}}. Find the exact value of {{y(2)}} as an integer or simplified fraction.`,
          answer: fracAnswer(sn, sd),
          hint: `The integrating factor is {{mu(x) = e^(${n} ln x) = ${muStr}}}, turning the LHS into {{d/dx(${muStr} y)}}.`,
          solution: [
            `Integrating factor: {{mu(x) = ${muStr}}}. Multiplying gives {{d/dx(${muStr} y) = ${c} x^${n + m}}}.`,
            `Integrate: {{${muStr} y = ${k === 1 ? "" : k === -1 ? "-" : k}x^${pow} + C}}.`,
            `At {{x = 1, y = ${num(y1)}}}: {{${num(y1)} = ${num(k)} + C}}, so {{C = ${num(C)}}}.`,
            `At {{x = 2}}: {{${2 ** n} y(2) = ${num(k * 2 ** pow)} ${signed(C)} = ${num(numVal)}}}, hence {{y(2) = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
          ],
        };
      }

      // Tier 3: Linear e^(ax) integrating factor OR Homogeneous y = vx
      if (rng.bool(0.5)) {
        // dy/dx + a*y = c*e^(b*x), y(0) = y0 -> y = k e^(bx) + C e^(-ax), find C
        const a = rng.int(1, 4);
        const b = rng.int(1, 4);
        const k = rng.nonZero(-4, 6);
        const c = k * (a + b);
        const y0 = rng.int(-5, 12);
        const C = y0 - k;
        const aTerm = a === 1 ? "y" : `${a}y`;
        const bExp = b === 1 ? "x" : `${b}x`;
        const aExp = a === 1 ? "x" : `${a}x`;
        return {
          prompt: `Solve {{dy/dx + ${aTerm} = ${c} e^(${bExp})}} with {{y(0) = ${num(y0)}}}, writing the particular solution as {{y = p e^(${bExp}) + q e^(-${aExp})}}. Find the exact integer {{q}}.`,
          answer: { type: "number", value: C },
          hint: `Multiply by {{mu(x) = e^(${aExp})}}, integrate {{${c} e^(${a + b}x)}} with {{+ C}}, and apply {{y(0) = ${num(y0)}}}.`,
          traps: [
            {
              spec: { type: "number", value: y0 },
              feedback: `Remember y(0) = p + q, not just q! Subtract p = ${num(k)} from y(0) = ${num(y0)}.`,
            },
          ],
          solution: [
            `Integrating factor {{mu(x) = e^(${aExp})}} gives {{d/dx(e^(${aExp}) y) = ${c} e^(${a + b}x)}}.`,
            `Integrate: {{e^(${aExp}) y = ${num(k)} e^(${a + b}x) + C}}.`,
            `At {{x = 0}}: {{${num(y0)} = ${num(k)} + C}}, so {{q = C = ${num(C)}}}.`,
          ],
        };
      }
      // Homogeneous ODE: dy/dx = (a*x + b*y)/x, x > 0, y(1) = y1 -> find y(2)
      const b = rng.int(2, 4);
      const r = rng.nonZero(-3, 4);
      const a = (b - 1) * r;
      const y1 = rng.int(-4, 8);
      const A = y1 + r;
      const y2 = A * 2 ** b - 2 * r;
      const numExpr = poly([[a, "x"], [b, "y"]]);
      return {
        prompt: `Use the homogeneous substitution {{y = vx}} to solve {{dy/dx = (${numExpr})/x}} ({{x > 0}}) given {{y(1) = ${num(y1)}}}. Find the exact value of {{y(2)}}.`,
        answer: { type: "number", value: y2 },
        hint: `Substitute {{dy/dx = v + x (dv/dx)}} to get {{x (dv/dx) = ${b - 1}(v ${signed(r)})}}, then separate variables.`,
        solution: [
          `With {{y = vx}}, {{v + x (dv/dx) = ${num(a)} + ${b}v}}, so {{x (dv/dx) = ${b - 1}v ${signed(a)} = ${b - 1}(v ${signed(r)})}}.`,
          `Separating and integrating gives {{v ${signed(r)} = A x^${b - 1}}}, so {{y = A x^${b} ${signed(-r)}x}}.`,
          `From {{y(1) = ${num(y1)}}}: {{A ${signed(-r)} = ${num(y1)}}} gives {{A = ${num(A)}}}.`,
          `Hence {{y(2) = ${num(A)}(${2 ** b}) ${signed(-2 * r)} = ${num(y2)}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 5 (HL, Level 3): Maclaurin Series Coefficient Extraction
  // ===========================================================================
  {
    id: "5b-integration-des-maclaurin.maclaurin-coefficients-hl",
    topicId: "5b-integration-des-maclaurin",
    title: "[HL] Maclaurin Series Coefficient Extraction",
    level: 3,
    ibLevel: "HL",
    guideRef: "maclaurin-series-hl",
    generate(rng, tier) {
      if (tier === 1) {
        // Composite single standard function: e^(ax), sin(ax), cos(ax), ln(1 + ax)
        const fnKind = rng.int(0, 3);
        const a = rng.nonZero(-4, 4);
        const ax = a === 1 ? "x" : a === -1 ? "-x" : `${a}x`;
        if (fnKind === 0) {
          const deg = rng.pick([2, 3, 4]);
          const fact = deg === 2 ? 2 : deg === 3 ? 6 : 24;
          const [sn, sd] = simplify(a ** deg, fact);
          return {
            prompt: `Find the exact coefficient of {{x^${deg}}} in the Maclaurin series of {{e^(${ax})}} as an integer or simplified fraction.`,
            answer: fracAnswer(sn, sd),
            hint: `Substitute {{u = ${ax}}} into the {{u^${deg}/${deg}!}} term of {{e^u}}.`,
            solution: [
              `The {{u^${deg}}} term of {{e^u}} is {{u^${deg}/${fact}}}.`,
              `Substituting {{u = ${ax}}} gives {{(${a})^${deg} / ${fact} = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
            ],
          };
        }
        if (fnKind === 1) {
          const [sn, sd] = simplify(-(a ** 3), 6);
          return {
            prompt: `Find the exact coefficient of {{x^3}} in the Maclaurin series of {{sin(${ax})}} as an integer or simplified fraction.`,
            answer: fracAnswer(sn, sd),
            hint: `Substitute {{u = ${ax}}} into {{-u^3/3!}} from {{sin u = u - u^3/6 + ...}}.`,
            solution: [
              `From {{sin u = u - u^3/6 + ...}}, the {{x^3}} coefficient is {{-(${a})^3 / 6 = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
            ],
          };
        }
        if (fnKind === 2) {
          const deg = rng.pick([2, 4]);
          const numVal = deg === 2 ? -(a ** 2) : a ** 4;
          const denVal = deg === 2 ? 2 : 24;
          const [sn, sd] = simplify(numVal, denVal);
          return {
            prompt: `Find the exact coefficient of {{x^${deg}}} in the Maclaurin series of {{cos(${ax})}} as an integer or simplified fraction.`,
            answer: fracAnswer(sn, sd),
            hint: `Use {{cos u = 1 - u^2/2! + u^4/4! - ...}} with {{u = ${ax}}}.`,
            solution: [
              `The {{u^${deg}}} term of {{cos u}} is {{${deg === 2 ? "-u^2/2" : "+u^4/24"}}}.`,
              `Substituting {{u = ${ax}}} yields coefficient ${fracDisplay(sn, sd)}.`,
            ],
          };
        }
        const deg = rng.pick([2, 3, 4]);
        const sign = deg % 2 === 0 ? -1 : 1;
        const [sn, sd] = simplify(sign * a ** deg, deg);
        const inside = a > 0 ? `1 + ${ax}` : `1 - ${Math.abs(a) === 1 ? "x" : `${Math.abs(a)}x`}`;
        return {
          prompt: `Find the exact coefficient of {{x^${deg}}} in the Maclaurin series of {{ln(${inside})}} as an integer or simplified fraction.`,
          answer: fracAnswer(sn, sd),
          hint: `Remember {{ln(1 + u) = u - u^2/2 + u^3/3 - u^4/4 + ...}} has plain integer denominators (no factorials!).`,
          solution: [
            `Substitute {{u = ${ax}}} into {{${sign < 0 ? "-" : ""}u^${deg}/${deg}}}.`,
            `Coefficient {{= ${sign < 0 ? "-" : ""}(${a})^${deg} / ${deg} = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Product of two standard Maclaurin series -> coeff of x^3
        const mode = rng.int(0, 2);
        const a = rng.nonZero(-3, 3);
        const b = rng.nonZero(-3, 3);
        const ax = a === 1 ? "x" : a === -1 ? "-x" : `${a}x`;
        const bx = b === 1 ? "x" : b === -1 ? "-x" : `${b}x`;
        if (mode === 0) {
          // e^(ax) cos(bx): x^3 coeff = (a^3 - 3*a*b^2) / 6
          const [sn, sd] = simplify(a ** 3 - 3 * a * b * b, 6);
          return {
            prompt: `Find the exact coefficient of {{x^3}} in the Maclaurin expansion of {{e^(${ax}) cos(${bx})}} as an integer or simplified fraction.`,
            answer: fracAnswer(sn, sd),
            hint: `Multiply {{(1 + ${ax} + ${fracDisplay(a * a, 2).replace(/\{\{|\}\}/g, "")}x^2 + ${fracDisplay(a ** 3, 6).replace(/\{\{|\}\}/g, "")}x^3)}} by {{(1 - ${fracDisplay(b * b, 2).replace(/\{\{|\}\}/g, "")}x^2)}}.`,
            solution: [
              `Expand factors: {{e^(${ax}) = 1 + ${ax} + (${a * a}/2)x^2 + (${a ** 3}/6)x^3 + ...}} and {{cos(${bx}) = 1 - (${b * b}/2)x^2 + ...}}.`,
              `Collect {{x^3}} pairs: {{(${a ** 3}/6)(1) + (${a})(-${b * b}/2) = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
            ],
          };
        }
        if (mode === 1) {
          // e^(ax) sin(bx): x^3 coeff = (3*a^2*b - b^3) / 6
          const [sn, sd] = simplify(3 * a * a * b - b ** 3, 6);
          return {
            prompt: `Find the exact coefficient of {{x^3}} in the Maclaurin expansion of {{e^(${ax}) sin(${bx})}} as an integer or simplified fraction.`,
            answer: fracAnswer(sn, sd),
            hint: `Collect products of degree {{3}} from {{(1 + ${ax} + (${a * a}/2)x^2)}} and {{(${bx} - (${b ** 3}/6)x^3)}}.`,
            solution: [
              `Expand factors up to {{x^3}}: {{e^(${ax})}} and {{sin(${bx}) = ${bx} - (${b ** 3}/6)x^3 + ...}}.`,
              `Coefficient of {{x^3}} is {{(1)(-${b ** 3}/6) + (${a * a}/2)(${b}) = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
            ],
          };
        }
        // e^(ax) ln(1 + bx): x^3 coeff = (2*b^3 - 3*a*b^2 + 3*a^2*b) / 6
        const inside = b > 0 ? `1 + ${bx}` : `1 - ${Math.abs(b) === 1 ? "x" : `${Math.abs(b)}x`}`;
        const [sn, sd] = simplify(2 * b ** 3 - 3 * a * b * b + 3 * a * a * b, 6);
        return {
          prompt: `Find the exact coefficient of {{x^3}} in the Maclaurin expansion of {{e^(${ax}) ln(${inside})}} as an integer or simplified fraction.`,
          answer: fracAnswer(sn, sd),
          hint: `Multiply {{1 + ${ax} + (${a * a}/2)x^2}} by {{${bx} - (${b * b}/2)x^2 + (${b ** 3}/3)x^3}} and collect {{x^3}} terms.`,
          solution: [
            `Coefficient of {{x^3}} equals {{(1)(${b ** 3}/3) + (${a})(-${b * b}/2) + (${a * a}/2)(${b})}}.`,
            `Simplifying over denominator {{6}} yields ${fracDisplay(sn, sd)}.`,
          ],
        };
      }

      // Tier 3: Maclaurin series solution of a first-order ODE -> coeff of x^3
      if (rng.bool(0.5)) {
        // Linear ODE: dy/dx = a*y + b*x + c, y(0) = y0
        const a = rng.nonZero(-3, 3);
        const b = rng.nonZero(-4, 5);
        const c = rng.int(-3, 4);
        const y0 = rng.int(1, 4);
        const y1 = a * y0 + c;
        const y2 = a * y1 + b;
        const y3 = a * y2;
        const [sn, sd] = simplify(y3, 6);
        const odeRhs = poly([[a, "y"], [b, "x"], [c, ""]]);
        const traps: Trap[] = [];
        if (y3 !== 0 && gcd(Math.abs(y3), 6) < 6) {
          traps.push({
            spec: { type: "number" as const, value: y3 },
            feedback: "You found y'''(0), not the coefficient of x³! Remember to divide by 3! = 6.",
          });
        }
        return {
          prompt: `The function {{y(x)}} satisfies {{dy/dx = ${odeRhs}}} with {{y(0) = ${y0}}}. Find the exact coefficient of {{x^3}} in its Maclaurin series as an integer or simplified fraction.`,
          answer: fracAnswer(sn, sd),
          hint: `Compute {{y'(0)}}, differentiate to find {{y''(0)}} and {{y'''(0)}}, and remember to divide {{y'''(0)}} by {{3! = 6}}.`,
          traps,
          solution: [
            `{{y(0) = ${y0}}} and {{y'(0) = ${num(y1)}}}.`,
            `Differentiating: {{y'' = ${a === 1 ? "" : a === -1 ? "-" : a}y' ${signed(b)}}} gives {{y''(0) = ${num(y2)}}}; {{y''' = ${a === 1 ? "" : a === -1 ? "-" : a}y''}} gives {{y'''(0) = ${num(y3)}}}.`,
            `Coefficient of {{x^3}} is {{y'''(0)/3! = ${num(y3)}/6 = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
          ],
        };
      }
      // Nonlinear ODE: dy/dx = y^2 + b*x, y(0) = y0
      const b = rng.nonZero(-4, 5);
      const y0 = rng.int(1, 3);
      const y1 = y0 * y0;
      const y2 = 2 * y0 * y1 + b;
      const y3 = 2 * y1 * y1 + 2 * y0 * y2;
      const [sn, sd] = simplify(y3, 6);
      const odeRhs = poly([[1, "y^2"], [b, "x"]]);
      const traps = y3 !== 0
        ? [
            {
              spec: { type: "number" as const, value: y3 },
              feedback: "You computed y'''(0), not the coefficient of x³! Divide by 3! = 6.",
            },
          ]
        : [];
      return {
        prompt: `The function {{y(x)}} satisfies {{dy/dx = ${odeRhs}}} with {{y(0) = ${y0}}}. Find the exact coefficient of {{x^3}} in its Maclaurin series as an integer or simplified fraction.`,
        answer: fracAnswer(sn, sd),
        hint: `Differentiate implicitly: {{y'' = 2y y' ${signed(b)}}} and {{y''' = 2(y')^2 + 2y y''}}, then divide {{y'''(0)}} by {{6}}.`,
        traps,
        solution: [
          `{{y(0) = ${y0}}}, {{y'(0) = ${y0}^2 = ${y1}}}.`,
          `{{y'' = 2y y' ${signed(b)}}} gives {{y''(0) = 2(${y0})(${y1}) ${signed(b)} = ${num(y2)}}}.`,
          `{{y''' = 2(y')^2 + 2y y''}} gives {{y'''(0) = 2(${y1})^2 + 2(${y0})(${num(y2)}) = ${num(y3)}}}.`,
          `Coefficient of {{x^3}} is {{${num(y3)}/6 = ${fracDisplay(sn, sd).replace(/\{\{|\}\}/g, "")}}}.`,
        ],
      };
    },
  },
];
