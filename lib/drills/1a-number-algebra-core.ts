import type { AnswerSpec, Trap } from "../types.ts";
import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, num, poly, simplify } from "./helpers.ts";

function rawFrac(n: number, d: number): string {
  const [a, b] = simplify(n, d);
  return b === 1 ? `${a}` : `${a}/${b}`;
}

function exactRational(n: number, d: number): AnswerSpec {
  const [a, b] = simplify(n, d);
  if (b === 1) return { type: "number", value: a };
  return { type: "fraction", n: a, d: b, simplest: true, allowDecimal: true };
}

function nCr(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  const k = Math.min(r, n - r);
  let res = 1;
  for (let i = 1; i <= k; i++) {
    res = (res * (n - k + i)) / i;
  }
  return Math.round(res);
}

function nPr(n: number, r: number): number {
  let res = 1;
  for (let i = 0; i < r; i++) res *= n - i;
  return res;
}

function fact(n: number): number {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

function linFactor(a: number, b: number): string {
  // Returns "(ax + b)" cleanly formatted for ASCII maths markup.
  return `(${poly([[a, "x"], [b, ""]])})`;
}

const arithGeomDrill: Drill = {
  id: "1a-number-algebra-core.arith-geom-seq",
  topicId: "1a-number-algebra-core",
  title: "Arithmetic & Geometric Terms and Sums",
  level: 1,
  ibLevel: "SL",
  guideRef: "sequences-series-sigma",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      if (rng.bool(0.55)) {
        const u1 = rng.int(-9, 15);
        const d = rng.nonZero(-6, 7);
        const n = rng.int(8, 22);
        const ans = u1 + (n - 1) * d;
        const trapVal = u1 + n * d;
        const traps: Trap[] =
          trapVal !== ans
            ? [{ spec: { type: "number", value: trapVal }, feedback: "Use (n − 1)d, not nd — the first term already occupies position 1." }]
            : [];
        return {
          prompt: `An arithmetic sequence has {{u_1 = ${u1}}} and common difference {{d = ${d}}}. Find {{u_${n}}}.`,
          answer: { type: "number", value: ans },
          hint: "Substitute into {{u_n = u_1 + (n - 1)d}}.",
          traps,
          solution: [
            `Use {{u_n = u_1 + (n - 1)d}} with {{u_1 = ${u1}}}, {{d = ${d}}}, and {{n = ${n}}}.`,
            `{{u_${n} = ${u1} + (${n - 1})(${d}) = ${u1} + ${(n - 1) * d} = ${ans}}}.`,
          ],
        };
      }
      const u1 = rng.nonZero(-5, 6);
      const r = rng.pick([2, -2, 3, -3] as const);
      const n = r === 2 || r === -2 ? rng.int(4, 7) : rng.int(4, 5);
      const ans = u1 * Math.pow(r, n - 1);
      const trapVal = u1 * Math.pow(r, n);
      const traps: Trap[] =
        trapVal !== ans
          ? [{ spec: { type: "number", value: trapVal }, feedback: "The exponent in {{u_n = u_1 r^(n-1)}} is {{n - 1}}, not {{n}}." }]
          : [];
      return {
        prompt: `A geometric sequence has {{u_1 = ${u1}}} and common ratio {{r = ${r}}}. Find {{u_${n}}}.`,
        answer: { type: "number", value: ans },
        hint: "Use {{u_n = u_1 r^(n-1)}} carefully keeping signs inside brackets.",
        traps,
        solution: [
          `Substitute into {{u_n = u_1 r^(n-1)}} with {{n = ${n}}}.`,
          `{{u_${n} = ${u1} * (${r})^${n - 1} = ${u1} * ${Math.pow(r, n - 1)} = ${ans}}}.`,
        ],
      };
    }

    if (tier === 2) {
      const mode = rng.int(0, 2);
      if (mode === 0) {
        // Arithmetic sum S_n
        const u1 = rng.int(-8, 12);
        const d = rng.nonZero(-5, 6);
        const n = rng.int(10, 24);
        const un = u1 + (n - 1) * d;
        const ans = (n * (u1 + un)) / 2;
        return {
          prompt: `An arithmetic sequence has {{u_1 = ${u1}}} and {{d = ${d}}}. Calculate the sum of the first {{${n}}} terms, {{S_${n}}}.`,
          answer: { type: "number", value: ans },
          hint: "Apply {{S_n = (n/2)(2u_1 + (n - 1)d)}}.",
          solution: [
            `{{S_${n} = (${n}/2)[2(${u1}) + (${n - 1})(${d})]}}.`,
            `{{= ${clean(n / 2)} * (${2 * u1 + (n - 1) * d}) = ${ans}}}.`,
          ],
        };
      }
      if (mode === 1) {
        // Sigma arithmetic sum starting at m >= 2
        const m = rng.int(2, 6);
        const count = rng.int(8, 15);
        const top = m + count - 1;
        const a = rng.nonZero(-4, 5);
        const b = rng.int(-7, 9);
        const first = a * m + b;
        const last = a * top + b;
        const ans = (count * (first + last)) / 2;
        const expr = poly([[a, "k"], [b, ""]]);
        const wrongCount = top - m;
        const trapVal = (wrongCount * (first + last)) / 2;
        const traps: Trap[] =
          Number.isInteger(trapVal) && trapVal !== ans
            ? [{ spec: { type: "number", value: trapVal }, feedback: `From {{k = ${m}}} to {{k = ${top}}} inclusive there are {{${top} - ${m} + 1 = ${count}}} terms, not {{${wrongCount}}}.` }]
            : [];
        return {
          prompt: `Evaluate the exact arithmetic sum {{∑_(k=${m})^${top} (${expr})}}.`,
          answer: { type: "number", value: ans },
          hint: `Count the number of terms as {{${top} - ${m} + 1}}, then use {{(count/2)(first + last)}}.`,
          traps,
          solution: [
            `First term ({{k = ${m}}}): {{${first}}}. Last term ({{k = ${top}}}): {{${last}}}.`,
            `Number of terms: {{${top} - ${m} + 1 = ${count}}}.`,
            `Sum: {{(${count}/2)(${first} + ${last}) = ${ans}}}.`,
          ],
        };
      }
      // Geometric finite sum
      const u1 = rng.nonZero(-4, 5);
      const r = rng.pick([2, -2, 3, -3] as const);
      const n = r === 2 || r === -2 ? rng.int(4, 7) : rng.int(4, 5);
      const ans = (u1 * (Math.pow(r, n) - 1)) / (r - 1);
      return {
        prompt: `A geometric sequence has {{u_1 = ${u1}}} and {{r = ${r}}}. Calculate {{S_${n}}}.`,
        answer: { type: "number", value: ans },
        hint: "Use {{S_n = u_1(r^n - 1) / (r - 1)}}.",
        solution: [
          `Substitute into {{S_n = u_1(r^n - 1)/(r - 1)}} with {{n = ${n}}}.`,
          `{{S_${n} = ${u1}((${r})^${n} - 1) / (${r} - 1) = ${u1} * (${Math.pow(r, n) - 1}) / (${r - 1}) = ${ans}}}.`,
        ],
      };
    }

    // Tier 3
    const mode = rng.int(0, 2);
    if (mode === 0) {
      // Given u_p and u_q of AP, find S_n
      const u1 = rng.int(-6, 10);
      const d = rng.nonZero(-5, 6);
      const p = rng.int(2, 5);
      const q = p + rng.int(3, 6);
      const up = u1 + (p - 1) * d;
      const uq = u1 + (q - 1) * d;
      const n = rng.int(10, 18);
      const ans = (n * (2 * u1 + (n - 1) * d)) / 2;
      return {
        prompt: `An arithmetic sequence has {{u_${p} = ${up}}} and {{u_${q} = ${uq}}}. Find {{S_${n}}}.`,
        answer: { type: "number", value: ans },
        hint: `Subtract {{u_${q} - u_${p} = ${q - p}d}} to find {{d}}, then recover {{u_1}} and compute {{S_${n}}}.`,
        solution: [
          `{{u_${q} - u_${p} = ${q - p}d = ${uq - up} ⇒ d = ${d}}}.`,
          `{{u_1 = u_${p} - ${p - 1}d = ${up} - ${(p - 1) * d} = ${u1}}}.`,
          `{{S_${n} = (${n}/2)[2(${u1}) + ${n - 1}(${d})] = ${ans}}}.`,
        ],
      };
    }
    if (mode === 1) {
      // Recover u_k from S_n = a n^2 + b n
      const a = rng.nonZero(-4, 5);
      const b = rng.int(-7, 9);
      const k = rng.int(5, 15);
      const sk = a * k * k + b * k;
      const sk1 = a * (k - 1) * (k - 1) + b * (k - 1);
      const ans = sk - sk1;
      const sExpr = poly([[a, "n^2"], [b, "n"]]);
      const traps: Trap[] =
        sk !== ans
          ? [{ spec: { type: "number", value: sk }, feedback: `{{${sk}}} is {{S_${k}}} (the sum), whereas {{u_${k} = S_${k} - S_${k - 1}}}.` }]
          : [];
      return {
        prompt: `The sum of the first {{n}} terms of a sequence is {{S_n = ${sExpr}}}. Determine {{u_${k}}}.`,
        answer: { type: "number", value: ans },
        hint: `Use the recovery identity {{u_${k} = S_${k} - S_${k - 1}}}.`,
        traps,
        solution: [
          `Compute {{S_${k} = ${sk}}} and {{S_${k - 1} = ${sk1}}}.`,
          `{{u_${k} = S_${k} - S_${k - 1} = ${sk} - (${sk1}) = ${ans}}}.`,
        ],
      };
    }
    // Given u_2 and u_5 of GP, find u_1
    const u1 = rng.nonZero(-6, 7);
    const r = rng.pick([2, -2, 3, -3] as const);
    const u2 = u1 * r;
    const u5 = u1 * Math.pow(r, 4);
    return {
      prompt: `In a geometric sequence, {{u_2 = ${u2}}} and {{u_5 = ${u5}}}. Find the first term {{u_1}}.`,
      answer: { type: "number", value: u1 },
      hint: "Divide {{u_5 / u_2 = r^3}} to find the unique real ratio {{r}}, then divide {{u_2}} by {{r}}.",
      solution: [
        `{{u_5 / u_2 = r^3 = ${u5} / (${u2}) = ${Math.pow(r, 3)} ⇒ r = ${r}}}.`,
        `{{u_1 = u_2 / r = ${u2} / (${r}) = ${u1}}}.`,
      ],
    };
  },
};

const infiniteGeomDrill: Drill = {
  id: "1a-number-algebra-core.infinite-geometric",
  topicId: "1a-number-algebra-core",
  title: "Infinite Geometric Series (S∞)",
  level: 2,
  ibLevel: "SL",
  guideRef: "sequences-series-sigma",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const posRatios: ReadonlyArray<[number, number]> = [
      [1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 6], [5, 6],
    ];
    if (tier === 1) {
      const [p, q] = rng.pick(posRatios);
      const u1 = rng.int(2, 24);
      // S_inf = u1 / (1 - p/q) = (u1 * q) / (q - p)
      const ans = exactRational(u1 * q, q - p);
      return {
        prompt: `A geometric series has {{u_1 = ${u1}}} and {{r = ${p}/${q}}}. Find the exact sum to infinity {{S_∞}} (as a whole number or fraction in simplest form).`,
        answer: ans,
        hint: "Since {{|r| < 1}}, substitute into {{S_∞ = u_1 / (1 - r)}}.",
        solution: [
          `Check convergence: {{|${p}/${q}| < 1}}.`,
          `{{S_∞ = ${u1} / (1 - ${p}/${q}) = ${u1} / (${q - p}/${q}) = ${rawFrac(u1 * q, q - p)}}}.`,
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.55)) {
        // Negative ratio S_inf
        const [p, q] = rng.pick(posRatios);
        const u1 = rng.int(3, 30);
        // S_inf = u1 / (1 + p/q) = (u1 * q) / (q + p)
        const ans = exactRational(u1 * q, q + p);
        const trapAns = exactRational(u1 * q, q - p);
        return {
          prompt: `Find the exact sum to infinity of the geometric series with {{u_1 = ${u1}}} and {{r = -${p}/${q}}} (give an exact integer or simplified fraction).`,
          answer: ans,
          hint: "Watch the double negative in the denominator: {{1 - (-p/q) = 1 + p/q}}.",
          traps: [
            {
              spec: trapAns,
              feedback: "Watch the sign of {{r}}: subtracting a negative ratio adds it ({{1 - (-r) = 1 + |r|}}).",
            },
          ],
          solution: [
            `Since {{|-${p}/${q}| < 1}}, the series converges.`,
            `{{S_∞ = ${u1} / (1 - (-${p}/${q})) = ${u1} / (${q + p}/${q}) = ${rawFrac(u1 * q, q + p)}}}.`,
          ],
        };
      }
      // Given u1 and S_inf, find exact r (both positive and negative r)
      const [p, q] = rng.pick(posRatios);
      const neg = rng.bool(0.5);
      const rNum = neg ? -p : p;
      const denom = q - rNum; // > 0 since |rNum| < q
      const mult = rng.int(1, 5);
      const u1 = mult * denom;
      const sInf = mult * q;
      const ans = exactRational(rNum, q);
      return {
        prompt: `A convergent geometric series has {{u_1 = ${u1}}} and {{S_∞ = ${sInf}}}. Find the exact common ratio {{r}} as a fraction in simplest form.`,
        answer: ans,
        hint: "Rearrange {{S_∞ = u_1 / (1 - r)}} to {{1 - r = u_1 / S_∞}}.",
        solution: [
          `{{${sInf} = ${u1} / (1 - r) ⇒ 1 - r = ${u1} / ${sInf} = ${rawFrac(denom, q)}}}.`,
          `{{r = 1 - ${rawFrac(denom, q)} = ${rawFrac(rNum, q)}}}.`,
        ],
      };
    }

    // Tier 3
    const mode = rng.int(0, 2);
    if (mode === 0) {
      // Shifted sigma infinite series starting at k = 2 or k = 3
      const [p, q] = rng.pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5]] as const);
      const neg = rng.bool(0.5);
      const rNum = neg ? -p : p;
      const start = rng.pick([2, 3] as const);
      const scale = rng.int(1, 6) * Math.pow(q, start - 1);
      // First term at k = start is scale * (rNum/q)^(start - 1) = (scale / q^(start-1)) * rNum^(start-1)
      const u1 = (scale / Math.pow(q, start - 1)) * Math.pow(rNum, start - 1);
      // S_inf = u1 / (1 - rNum/q) = (u1 * q) / (q - rNum)
      const ans = exactRational(u1 * q, q - rNum);
      return {
        prompt: `Evaluate the exact infinite sum {{∑_(k=${start})^∞ ${scale}(${rNum}/${q})^(k-1)}} as an integer or fraction in simplest form.`,
        answer: ans,
        hint: `Find the actual first term by substituting {{k = ${start}}} before applying {{S_∞ = u_1/(1 - r)}}!`,
        solution: [
          `First term at {{k = ${start}}}: {{u_1 = ${scale}(${rNum}/${q})^${start - 1} = ${u1}}}.`,
          `Common ratio {{r = ${rNum}/${q}}} satisfies {{|r| < 1}}.`,
          `{{S_∞ = ${u1} / (1 - (${rNum}/${q})) = ${rawFrac(u1 * q, q - rNum)}}}.`,
        ],
      };
    }
    if (mode === 1) {
      // Bouncing ball total vertical distance: H + 2*H*(p/q)/(1 - p/q) = H*(q + p)/(q - p)
      const [p, q] = rng.pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5], [4, 5]] as const);
      const H = rng.int(4, 20);
      const ans = exactRational(H * (q + p), q - p);
      const trapSingle = exactRational(H * q, q - p);
      return {
        prompt: `A ball dropped from {{${H}}} m rebounds to {{${p}/${q}}} of its previous height on every bounce. Find the exact total vertical distance travelled (in metres, as an integer or simplified fraction).`,
        answer: ans,
        hint: "The initial drop happens once, while every rebound height is travelled twice (up and down).",
        traps: [
          {
            spec: trapSingle,
            feedback: "Remember each rebound travels BOTH upwards and downwards: add {{2 * (rebound sum)}} to the initial drop!",
          },
        ],
        solution: [
          `First rebound height is {{${H} * (${p}/${q}) = ${rawFrac(H * p, q)}}}; sum of rebound heights is {{(${rawFrac(H * p, q)}) / (1 - ${p}/${q}) = ${rawFrac(H * p, q - p)}}}.`,
          `Total vertical distance: {{${H} + 2 * (${rawFrac(H * p, q - p)}) = ${rawFrac(H * (q + p), q - p)}}} m.`,
        ],
      };
    }
    // Positive-term geometric sequence given u_1 and u_3
    const [p, q] = rng.pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5]] as const);
    const k = rng.int(1, 5);
    const u1 = k * q * q;
    const u3 = k * p * p;
    const ans = exactRational(u1 * q, q - p);
    return {
      prompt: `A geometric sequence of positive terms has {{u_1 = ${u1}}} and {{u_3 = ${u3}}}. Find the exact sum to infinity {{S_∞}} (as an integer or simplified fraction).`,
      answer: ans,
      hint: "Use {{r^2 = u_3 / u_1}} and take the positive root since all terms are positive.",
      solution: [
        `{{r^2 = ${u3} / ${u1} = ${p * p}/${q * q}}}. Since all terms are positive, {{r = ${p}/${q}}}.`,
        `{{S_∞ = ${u1} / (1 - ${p}/${q}) = ${rawFrac(u1 * q, q - p)}}}.`,
      ],
    };
  },
};

const logLawsDrill: Drill = {
  id: "1a-number-algebra-core.log-laws-equations",
  topicId: "1a-number-algebra-core",
  title: "Logarithm Laws, Change of Base & Equations",
  level: 2,
  ibLevel: "SL",
  guideRef: "exponents-logarithms-proof",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      if (rng.bool(0.5)) {
        // Exact change-of-base / power log: log_{b^m}(b^k) = k/m
        const b = rng.pick([2, 3, 5] as const);
        const m = b === 5 ? rng.pick([1, 2] as const) : rng.pick([1, 2, 3] as const);
        const maxK = b === 2 ? 6 : b === 3 ? 4 : 3;
        const k = rng.nonZero(-maxK, maxK);
        const baseVal = Math.pow(b, m);
        const argStr = k >= 0 ? `${Math.pow(b, k)}` : `1/${Math.pow(b, -k)}`;
        const ans = exactRational(k, m);
        return {
          prompt: `Evaluate {{log_${baseVal}(${argStr})}} exactly (as an integer or fraction in simplest form).`,
          answer: ans,
          hint: `Rewrite both the base {{${baseVal}}} and argument {{${argStr}}} as powers of {{${b}}}.`,
          solution: [
            `Write {{${baseVal} = ${b}^${m}}} and {{${argStr} = ${b}^(${k})}}.`,
            `By change of base to base {{${b}}}: {{log_${baseVal}(${argStr}) = ${k}/${m} = ${rawFrac(k, m)}}}.`,
          ],
        };
      }
      // Rational exponent evaluation (a^q / c^q)^(±p/q)
      const q = rng.pick([2, 3] as const);
      const a = q === 2 ? rng.pick([2, 3, 4, 5] as const) : rng.pick([2, 3, 4] as const);
      const cCandidates = (q === 2 ? [2, 3, 4, 5] : [2, 3, 4]).filter((x) => x !== a && simplify(a, x)[0] === a);
      const c = rng.pick(cCandidates);
      const p = q === 2 ? rng.pick([1, 3] as const) : rng.pick([1, 2] as const);
      const neg = rng.bool(0.5);
      const numBase = Math.pow(a, q);
      const denBase = Math.pow(c, q);
      const expStr = neg ? `-${p}/${q}` : `${p}/${q}`;
      const ansN = neg ? Math.pow(c, p) : Math.pow(a, p);
      const ansD = neg ? Math.pow(a, p) : Math.pow(c, p);
      return {
        prompt: `Evaluate {{(${numBase}/${denBase})^(${expStr})}} as an exact fraction in simplest form.`,
        answer: exactRational(ansN, ansD),
        hint: neg ? "First invert the fraction for the negative sign, then take the root before raising to the power." : "Take the root first, then raise to the integer power.",
        solution: [
          neg
            ? `Invert for the negative exponent: {{(${denBase}/${numBase})^(${p}/${q})}}.`
            : `Take the {{${q}}}th root first: {{(${a}/${c})^${p}}}.`,
          `Final exact value: {{${rawFrac(ansN, ansD)}}}.`,
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.5)) {
        // Linear log equation log_a(px + q) = k
        const a = rng.pick([2, 3, 4, 5] as const);
        const k = a <= 3 ? rng.int(2, 4) : rng.int(1, 3);
        const rhs = Math.pow(a, k);
        const p = rng.int(2, 6);
        const x = rng.int(-5, 12);
        const q = rhs - p * x;
        const inner = poly([[p, "x"], [q, ""]]);
        return {
          prompt: `Solve {{log_${a}(${inner}) = ${k}}} for {{x}}.`,
          answer: { type: "number", value: x },
          hint: `Rewrite in exponential form: {{${inner} = ${a}^${k}}}.`,
          solution: [
            `Convert to exponential form: {{${inner} = ${a}^${k} = ${rhs}}}.`,
            `Solve for {{x}}: {{${p}x = ${rhs - q} ⇒ x = ${x}}}.`,
          ],
        };
      }
      // Log laws linear combination given log_a(x) = u and log_a(y) = v
      const u = rng.nonZero(-4, 5);
      const v = rng.nonZero(-4, 5);
      const cA = rng.int(1, 3);
      const pX = rng.pick([1, 2, 3] as const);
      const pY = rng.pick([1, 2, 3] as const);
      const ans = cA + pX * u - pY * v;
      const aPart = cA === 1 ? "a" : `a^${cA}`;
      const xPart = pX === 1 ? "x" : `x^${pX}`;
      const yPart = pY === 1 ? "y" : `y^${pY}`;
      const xTerm = pX === 1 ? "log_a(x)" : `${pX} log_a(x)`;
      const yTerm = pY === 1 ? "log_a(y)" : `${pY} log_a(y)`;
      return {
        prompt: `Given {{log_a(x) = ${u}}} and {{log_a(y) = ${v}}}, evaluate {{log_a((${aPart} * ${xPart}) / ${yPart})}}.`,
        answer: { type: "number", value: ans },
        hint: "Split with the product, quotient, and power laws, using {{log_a(a^k) = k}}.",
        solution: [
          `Expand: {{log_a(${aPart}) + ${xTerm} - ${yTerm}}}.`,
          `Substitute: {{${cA} + ${pX}(${u}) - ${pY}(${v}) = ${ans}}}.`,
        ],
      };
    }

    // Tier 3
    if (rng.bool(0.5)) {
      // Change-of-base equation log_{a^m}(x) + log_a(x) = c -> ((1 + m)/m) log_a(x) = c
      const a = rng.pick([2, 3] as const);
      const m = rng.pick([2, 3] as const);
      const kMult = a === 2 ? rng.int(1, 2) : 1; // log_a(x) = m * kMult
      const logAx = m * kMult;
      const c = (m + 1) * kMult;
      const baseBig = Math.pow(a, m);
      const x = Math.pow(a, logAx);
      return {
        prompt: `Solve {{log_${baseBig}(x) + log_${a}(x) = ${c}}} for {{x}}.`,
        answer: { type: "number", value: x },
        hint: `Rewrite {{log_${baseBig}(x) = (1/${m}) log_${a}(x)}} via change of base.`,
        solution: [
          `Since {{${baseBig} = ${a}^${m}}}, {{log_${baseBig}(x) = (1/${m}) log_${a}(x)}}.`,
          `Combine: {{(${m + 1}/${m}) log_${a}(x) = ${c} ⇒ log_${a}(x) = ${logAx} ⇒ x = ${a}^${logAx} = ${x}}}.`,
        ],
      };
    }
    // Quadratic log equation with guaranteed extraneous root: log_a(x + p) + log_a(x - q) = k
    const cases: ReadonlyArray<[number, number, number, number]> = [
      [2, 3, 4, 2],   // 2^3 = 8 = 4*2
      [2, 4, 8, 2],   // 2^4 = 16 = 8*2
      [2, 5, 8, 4],   // 2^5 = 32 = 8*4
      [3, 2, 9, 1],   // 3^2 = 9 = 9*1
      [3, 3, 9, 3],   // 3^3 = 27 = 9*3
      [5, 2, 25, 1],  // 5^2 = 25 = 25*1
      [2, 3, 8, 1],   // 2^3 = 8 = 8*1
      [2, 4, 16, 1],  // 2^4 = 16 = 16*1
    ];
    const [a, k, f1, f2] = rng.pick(cases);
    const r1 = rng.int(2, 12);
    const p = f1 - r1;
    const negQ = f2 - r1; // second factor is x + negQ
    const r2 = -f1 - negQ; // extraneous root: at r2, x+p = -f2 < 0 and x+negQ = -f1 < 0
    const fac1 = poly([[1, "x"], [p, ""]]);
    const fac2 = poly([[1, "x"], [negQ, ""]]);
    const bCoef = p + negQ;
    const cCoef = p * negQ - f1 * f2;
    const quadStr = poly([[1, "x^2"], [bCoef, "x"], [cCoef, ""]]);
    return {
      prompt: `Solve {{log_${a}(${fac1}) + log_${a}(${fac2}) = ${k}}} for {{x ∈ ℝ}}.`,
      answer: { type: "number", value: r1 },
      hint: "Combine the logarithms, solve the resulting quadratic, and reject the extraneous root that makes the log arguments negative.",
      traps: [
        {
          spec: { type: "list", values: [r1, r2], ordered: false },
          feedback: `Check the domain: {{x = ${r2}}} gives logarithms of negative numbers and must be rejected!`,
        },
      ],
      solution: [
        `Combine logs: {{(${fac1})(${fac2}) = ${a}^${k} = ${f1 * f2} ⇒ ${quadStr} = 0}}.`,
        `Roots of the quadratic are {{x = ${r1}}} and {{x = ${r2}}}.`,
        `Reject {{x = ${r2}}} (makes both arguments negative), leaving {{x = ${r1}}}.`,
      ],
    };
  },
};

const binomialCountingDrill: Drill = {
  id: "1a-number-algebra-core.binomial-counting",
  topicId: "1a-number-algebra-core",
  title: "Binomial Coefficients & [HL] Counting Principles",
  level: 2,
  ibLevel: "SL",
  guideRef: "binomial-counting-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      if (rng.bool(0.45)) {
        const n = rng.int(5, 11);
        const r = rng.int(2, Math.min(4, n - 2));
        const ans = nCr(n, r);
        return {
          prompt: `Evaluate the binomial coefficient {{${n}C${r}}}.`,
          answer: { type: "number", value: ans },
          hint: "Use {{nCr = n! / (r!(n - r)!)}} and cancel the largest factorial first.",
          solution: [
            `{{${n}C${r} = ${n}! / (${r}! * ${n - r}!) = ${ans}}}.`,
          ],
        };
      }
      const n = rng.int(4, 7);
      const r = rng.int(2, n - 1);
      const b = rng.nonZero(-3, 4);
      const ans = nCr(n, r) * Math.pow(b, r);
      const binom = poly([[1, ""], [b, "x"]]);
      return {
        prompt: `Find the coefficient of {{x^${r}}} in the expansion of {{(${binom})^${n}}}.`,
        answer: { type: "number", value: ans },
        hint: `Compute {{${n}C${r} * (${b})^${r}}}.`,
        solution: [
          `The {{x^${r}}} term is {{${n}C${r} * 1^${n - r} * (${b}x)^${r} = ${nCr(n, r)} * ${Math.pow(b, r)}x^${r}}}.`,
          `Hence the coefficient is {{${ans}}}.`,
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.55)) {
        const n = rng.int(4, 6);
        const r = rng.int(1, n - 1);
        const a = rng.pick([2, 3] as const);
        const b = rng.nonZero(-3, 3);
        const ans = nCr(n, r) * Math.pow(a, n - r) * Math.pow(b, r);
        const binom = poly([[a, ""], [b, "x"]]);
        const traps: Trap[] =
          b < 0 && r % 2 === 1
            ? [{ spec: { type: "number", value: -ans }, feedback: "Watch the minus sign: an odd power of a negative term stays negative." }]
            : [];
        return {
          prompt: `Find the coefficient of {{x^${r}}} in the binomial expansion of {{(${binom})^${n}}}.`,
          answer: { type: "number", value: ans },
          hint: `Use {{T_(r+1) = ${n}C${r} * (${a})^${n - r} * (${b}x)^${r}}}.`,
          traps,
          solution: [
            `Set {{r = ${r}}}: {{${n}C${r} * ${a}^${n - r} * (${b})^${r} = ${nCr(n, r)} * ${Math.pow(a, n - r)} * ${Math.pow(b, r)} = ${ans}}}.`,
          ],
        };
      }
      // Constant term in (a x + b/x)^(2m)
      const m = rng.pick([2, 3, 4] as const);
      const n = 2 * m;
      const a = rng.pick([1, 2, 3] as const);
      const b = rng.pick([-3, -2, -1, 1, 2, 3] as const);
      const ans = nCr(n, m) * Math.pow(a, m) * Math.pow(b, m);
      const firstPart = a === 1 ? "x" : `${a}x`;
      const secondPart = b < 0 ? `- ${Math.abs(b)}/x` : `+ ${b}/x`;
      return {
        prompt: `Find the constant term (term independent of {{x}}) in the expansion of {{(${firstPart} ${secondPart})^${n}}}.`,
        answer: { type: "number", value: ans },
        hint: `Set the net exponent of {{x}} equal to {{0}}: {{${n} - 2r = 0 ⇒ r = ${m}}}.`,
        solution: [
          `Power of {{x}} in general term is {{x^(${n} - 2r)}}; setting {{${n} - 2r = 0}} gives {{r = ${m}}}.`,
          `Constant term: {{${n}C${m} * ${a}^${m} * (${b})^${m} = ${nCr(n, m)} * ${Math.pow(a, m)} * ${Math.pow(b, m)} = ${ans}}}.`,
        ],
      };
    }

    // Tier 3: Constant term with x^2 & 1/x OR [HL] counting (nPr, block, committee with restriction)
    const mode = rng.int(0, 2);
    if (mode === 0) {
      // Constant term in (a x^2 + b/x)^(3m) -> power 6m - 3r = 0 => r = 2m
      const m = rng.pick([2, 3] as const);
      const n = 3 * m;
      const r = 2 * m;
      const a = rng.pick([1, 2, 3] as const);
      const b = rng.pick([-2, -1, 1, 2] as const);
      const ans = nCr(n, r) * Math.pow(a, m) * Math.pow(b, r);
      const firstPart = a === 1 ? "x^2" : `${a}x^2`;
      const secondPart = b < 0 ? `- ${Math.abs(b)}/x` : `+ ${b}/x`;
      return {
        prompt: `Find the term independent of {{x}} in the expansion of {{(${firstPart} ${secondPart})^${n}}}.`,
        answer: { type: "number", value: ans },
        hint: `Simplify the exponent of {{x}} to {{2(${n} - r) - r = ${2 * n} - 3r}} and set it equal to {{0}}.`,
        solution: [
          `Set {{${2 * n} - 3r = 0 ⇒ r = ${r}}}.`,
          `Value: {{${n}C${r} * ${a}^${m} * (${b})^${r} = ${nCr(n, r)} * ${Math.pow(a, m)} * ${Math.pow(b, r)} = ${ans}}}.`,
        ],
      };
    }
    if (mode === 1) {
      // [HL] Permutations nPr OR Block method
      if (rng.bool(0.5)) {
        const n = rng.int(6, 10);
        const r = rng.int(3, 4);
        const ans = nPr(n, r);
        const trapComb = nCr(n, r);
        return {
          prompt: `[HL] How many ordered {{${r}}}-letter passwords with no repeated letters can be formed from {{${n}}} distinct letters?`,
          answer: { type: "number", value: ans },
          hint: "Order matters and repeats are forbidden, so use {{nPr = n! / (n - r)!}}.",
          traps: [
            { spec: { type: "number", value: trapComb }, feedback: "That counts unordered combinations ({{nCr}}) — passwords depend on order, so use {{nPr}}!" },
          ],
          solution: [
            `Use permutations: {{${n}P${r} = ${n}! / ${n - r}! = ${ans}}}.`,
          ],
        };
      }
      const total = rng.int(5, 7);
      const block = rng.pick([2, 3] as const);
      const units = total - block + 1;
      const ans = fact(units) * fact(block);
      const trapNoInternal = fact(units);
      return {
        prompt: `[HL] {{${total}}} distinct books are arranged on a shelf. In how many ways can they be ordered if {{${block}}} specific books must stay together?`,
        answer: { type: "number", value: ans },
        hint: `Glue the {{${block}}} books into one block ({{${units}}} units to arrange), then multiply by internal permutations {{${block}!}}.`,
        traps: [
          { spec: { type: "number", value: trapNoInternal }, feedback: `Do not forget to multiply by {{${block}! = ${fact(block)}}} for the internal orders inside the block!` },
        ],
        solution: [
          `Block method: arrange {{${units}}} units in {{${units}! = ${fact(units)}}} ways and order the block internally in {{${block}! = ${fact(block)}}} ways.`,
          `Total arrangements: {{${fact(units)} * ${fact(block)} = ${ans}}}.`,
        ],
      };
    }
    // [HL] Combinations with "at least 1" restriction
    const gA = rng.int(4, 6);
    const gB = rng.int(3, 5);
    const k = rng.int(3, Math.min(5, gA));
    const total = nCr(gA + gB, k);
    const noneB = nCr(gA, k);
    const ans = total - noneB;
    return {
      prompt: `[HL] A committee of {{${k}}} students is chosen from {{${gA}}} Year 12 and {{${gB}}} Year 13 students. How many committees include at least {{1}} Year 13 student?`,
      answer: { type: "number", value: ans },
      hint: `Use complementary counting: total committees {{${gA + gB}C${k}}} minus committees with zero Year 13 students {{${gA}C${k}}}.`,
      solution: [
        `Total committees: {{${gA + gB}C${k} = ${total}}}.`,
        `Committees with zero Year 13 students: {{${gA}C${k} = ${noneB}}}.`,
        `At least one Year 13 student: {{${total} - ${noneB} = ${ans}}}.`,
      ],
    };
  },
};

const partialFractionsDrill: Drill = {
  id: "1a-number-algebra-core.partial-fractions",
  topicId: "1a-number-algebra-core",
  title: "[HL] Partial Fractions Constants",
  level: 3,
  ibLevel: "HL",
  guideRef: "partial-fractions-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      // Distinct linear: A/(x + p) + B/(x + q)
      const p = rng.nonZero(-4, 4);
      const qPool = [-4, -3, -2, -1, 1, 2, 3, 4].filter((v) => v !== p);
      const q = rng.pick(qPool);
      const A = rng.nonZero(-5, 6);
      const B = rng.nonZero(-5, 6);
      const c1 = A + B;
      const c0 = A * q + B * p;
      const numStr = poly([[c1, "x"], [c0, ""]]);
      const f1 = linFactor(1, p);
      const f2 = linFactor(1, q);
      const askA = rng.bool(0.5);
      const targetName = askA ? "A" : "B";
      const targetVal = askA ? A : B;
      const rootVal = askA ? -p : -q;
      return {
        prompt: `[HL] Given {{(${numStr})/(${f1}${f2}) ≡ A/${f1} + B/${f2}}}, find the constant {{${targetName}}}.`,
        answer: { type: "number", value: targetVal },
        hint: `Clear denominators to get {{${numStr} ≡ A${f2} + B${f1}}} and substitute {{x = ${rootVal}}}.`,
        solution: [
          `Clear denominators: {{${numStr} ≡ A${f2} + B${f1}}}.`,
          `Substitute {{x = ${rootVal}}}: {{${c1 * rootVal + c0} = ${targetName}(${askA ? rootVal + q : rootVal + p}) ⇒ ${targetName} = ${targetVal}}}.`,
        ],
      };
    }

    if (tier === 2) {
      if (rng.bool(0.55)) {
        // Distinct linear with (2x + p)(x + q), p odd so no cancellation
        const p = rng.pick([-3, -1, 1, 3] as const);
        const q = rng.nonZero(-4, 4);
        const A = rng.nonZero(-4, 5);
        const B = rng.nonZero(-4, 5);
        // A(x + q) + B(2x + p) = (A + 2B)x + (Aq + Bp)
        const c1 = A + 2 * B;
        const c0 = A * q + B * p;
        const numStr = poly([[c1, "x"], [c0, ""]]);
        const f1 = linFactor(2, p);
        const f2 = linFactor(1, q);
        return {
          prompt: `[HL] Find the constants {{A, B}} (in that exact order) such that {{(${numStr})/(${f1}${f2}) ≡ A/${f1} + B/${f2}}}.`,
          answer: { type: "list", values: [A, B], ordered: true },
          hint: `Multiply through and substitute {{x = ${-q}}} for {{B}}, then equate {{x}} coefficients for {{A}}.`,
          solution: [
            `Clear denominators: {{${numStr} ≡ A${f2} + B${f1}}}.`,
            `Set {{x = ${-q}}}: {{${-c1 * q + c0} = B(${-2 * q + p}) ⇒ B = ${B}}}.`,
            `Equate {{x}} coefficients: {{${c1} = A + 2(${B}) ⇒ A = ${A}}}. Answer: {{${A}, ${B}}}.`,
          ],
        };
      }
      // Simple repeated linear: A/(x + p) + B/(x + p)^2
      const p = rng.nonZero(-5, 5);
      const A = rng.nonZero(-5, 6);
      const B = rng.nonZero(-6, 7);
      // A(x + p) + B = Ax + (Ap + B)
      const numStr = poly([[A, "x"], [A * p + B, ""]]);
      const f = linFactor(1, p);
      return {
        prompt: `[HL] Find the constants {{A, B}} (in that exact order) such that {{(${numStr})/${f}^2 ≡ A/${f} + B/${f}^2}}.`,
        answer: { type: "list", values: [A, B], ordered: true },
        hint: `Multiply through by {{${f}^2}}: {{${numStr} ≡ A${f} + B}}.`,
        solution: [
          `Clear denominators: {{${numStr} ≡ A${f} + B}}.`,
          `Comparing {{x}} coefficients gives {{A = ${A}}}; setting {{x = ${-p}}} gives {{B = ${B}}}.`,
        ],
      };
    }

    // Tier 3: 3-term repeated linear OR irreducible quadratic
    if (rng.bool(0.5)) {
      // A/(x + p) + B/(x + q) + C/(x + q)^2
      const p = rng.nonZero(-3, 3);
      const qPool = [-3, -2, -1, 1, 2, 3].filter((v) => v !== p);
      const q = rng.pick(qPool);
      const A = rng.nonZero(-3, 4);
      const B = rng.nonZero(-3, 4);
      const C = rng.nonZero(-4, 5);
      // A(x+q)^2 + B(x+p)(x+q) + C(x+p)
      const c2 = A + B;
      const c1 = 2 * A * q + B * (p + q) + C;
      const c0 = A * q * q + B * p * q + C * p;
      const numStr = poly([[c2, "x^2"], [c1, "x"], [c0, ""]]);
      const f1 = linFactor(1, p);
      const f2 = linFactor(1, q);
      return {
        prompt: `[HL] Find {{A, B, C}} (in that exact order) such that {{(${numStr})/(${f1}${f2}^2) ≡ A/${f1} + B/${f2} + C/${f2}^2}}.`,
        answer: { type: "list", values: [A, B, C], ordered: true },
        hint: `Substitute {{x = ${-p}}} for {{A}}, {{x = ${-q}}} for {{C}}, then compare {{x^2}} coefficients ({{${c2} = A + B}}) for {{B}}.`,
        solution: [
          `Clear denominators: {{${numStr} ≡ A${f2}^2 + B${f1}${f2} + C${f1}}}.`,
          `Set {{x = ${-p}}} → {{A = ${A}}}; set {{x = ${-q}}} → {{C = ${C}}}.`,
          `Equate {{x^2}} coefficients: {{${c2} = ${A} + B ⇒ B = ${B}}}. Answer: {{${num(A)}, ${num(B)}, ${num(C)}}}.`,
        ],
      };
    }
    // Irreducible quadratic: A/(x + p) + (Bx + C)/(x^2 + k)
    const p = rng.nonZero(-3, 3);
    const k = rng.pick([1, 2, 3, 4] as const);
    const A = rng.nonZero(-3, 4);
    const B = rng.nonZero(-3, 4);
    const C = rng.nonZero(-4, 4);
    // A(x^2 + k) + (Bx + C)(x + p) = (A+B)x^2 + (Bp+C)x + (Ak + Cp)
    const c2 = A + B;
    const c1 = B * p + C;
    const c0 = A * k + C * p;
    const numStr = poly([[c2, "x^2"], [c1, "x"], [c0, ""]]);
    const f1 = linFactor(1, p);
    const qf = `(x^2 + ${k})`;
    return {
      prompt: `[HL] Find {{A, B, C}} (in that exact order) such that {{(${numStr})/(${f1}${qf}) ≡ A/${f1} + (Bx + C)/${qf}}}.`,
      answer: { type: "list", values: [A, B, C], ordered: true },
      hint: `Substitute {{x = ${-p}}} for {{A}}, compare {{x^2}} coefficients for {{B}}, and set {{x = 0}} for {{C}}.`,
      solution: [
        `Clear denominators: {{${numStr} ≡ A${qf} + (Bx + C)${f1}}}.`,
        `Set {{x = ${-p}}}: {{A = ${A}}}. Compare {{x^2}} coefficients: {{${c2} = ${A} + B ⇒ B = ${B}}}.`,
        `Set {{x = 0}}: {{${c0} = ${A * k} + (${p})C ⇒ C = ${C}}}. Answer: {{${A}, ${B}, ${C}}}.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  arithGeomDrill,
  infiniteGeomDrill,
  logLawsDrill,
  binomialCountingDrill,
  partialFractionsDrill,
];
