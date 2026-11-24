import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { clean, frac, num, simplify } from "./helpers.ts";

function makeFracAnswer(n: number, d: number) {
  const [sn, sd] = simplify(n, d);
  if (sd === 1) return { type: "number" as const, value: sn };
  return { type: "fraction" as const, n: sn, d: sd, simplest: true };
}

function fracTrap(n: number, d: number, ansN: number, ansD: number, feedback: string): Trap | null {
  const [tn, td] = simplify(n, d);
  const [an, ad] = simplify(ansN, ansD);
  if (tn === an && td === ad) return null;
  if (td === 0) return null;
  return {
    spec: td === 1 ? { type: "number", value: tn } : { type: "fraction", n: tn, d: td, simplest: true },
    feedback,
  };
}

function numTrap(val: number, ans: number, feedback: string): Trap | null {
  const v = clean(val);
  const a = clean(ans);
  if (Math.abs(v - a) < 1e-9) return null;
  return { spec: { type: "number", value: v }, feedback };
}

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1 (LEVEL 1 · SL): OUTLIER FENCES & LINEAR DATA CODING
  // =========================================================================
  {
    id: "4-stats-probability.outliers-linear-coding",
    topicId: "4-stats-probability",
    title: "Outlier Fences (1.5×IQR) & Linear Data Coding",
    level: 1,
    ibLevel: "SL",
    guideRef: "descriptive-stats-sampling",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const q1 = rng.int(12, 60);
        const halfIqr = rng.int(3, 14); // even IQR = 2 * halfIqr -> 1.5*IQR = 3 * halfIqr (exact integer)
        const iqr = 2 * halfIqr;
        const q3 = q1 + iqr;
        const askUpper = rng.bool();
        const ans = askUpper ? q3 + 3 * halfIqr : q1 - 3 * halfIqr;
        const wrongOther = askUpper ? q1 - 3 * halfIqr : q3 + 3 * halfIqr;
        const wrongOne = askUpper ? q3 + iqr : q1 - iqr;
        const traps = [
          numTrap(wrongOther, ans, `That is the ${askUpper ? "lower" : "upper"} fence — check whether the question asks for the upper or lower boundary!`),
          numTrap(wrongOne, ans, "Remember to multiply the IQR by `1.5`, not `1`!"),
        ].filter((t): t is Trap => t !== null);

        return {
          prompt: `A dataset has lower quartile {{Q_1 = ${q1}}} and upper quartile {{Q_3 = ${q3}}}. Calculate the **${askUpper ? "upper" : "lower"} outlier fence**.`,
          answer: { type: "number", value: ans },
          hint: `First find {{IQR = Q_3 - Q_1}}, then compute ${askUpper ? "{{Q_3 + 1.5 * IQR}}" : "{{Q_1 - 1.5 * IQR}}"}.`,
          traps,
          solution: [
            `{{IQR = Q_3 - Q_1 = ${q3} - ${q1} = ${iqr}}}.`,
            `${askUpper ? "Upper" : "Lower"} fence = ${askUpper ? `{{${q3} + 1.5 * ${iqr} = ${q3} + ${3 * halfIqr} = ${num(ans)}}}` : `{{${q1} - 1.5 * ${iqr} = ${q1} - ${3 * halfIqr} = ${num(ans)}}}`}.`,
          ],
        };
      }

      if (tier === 2) {
        const mu = rng.int(8, 40);
        const sd = rng.int(2, 9);
        const a = rng.pick([-4, -3, -2, 2, 3, 4, 5]);
        const b = rng.nonZero(-18, 25);
        const bStr = b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
        const mode = rng.pick(["mean", "sd", "var"] as const);

        if (mode === "mean") {
          const ans = a * mu + b;
          const traps = [
            numTrap(a * mu, ans, "Unlike spread, the mean IS shifted by the constant term!"),
          ].filter((t): t is Trap => t !== null);
          return {
            prompt: `Dataset {{X}} has mean \`${mu}\` and standard deviation \`${sd}\`. Each value is transformed via {{Y = ${a}X ${bStr}}}. Find the exact **mean** of {{Y}}.`,
            answer: { type: "number", value: ans },
            hint: "The mean transforms linearly: {{ȳ = a x̄ + b}}.",
            traps,
            solution: [
              `Apply {{ȳ = a x̄ + b}}: {{${a}(${mu}) ${bStr} = ${a * mu} ${bStr} = ${num(ans)}}}.`,
            ],
          };
        }

        if (mode === "sd") {
          const ans = Math.abs(a) * sd;
          const traps = [
            numTrap(a * sd, ans, "Standard deviation is ALWAYS non-negative: multiply by {{|a|}}, not {{a}}!"),
            numTrap(Math.abs(a) * sd + b, ans, "Adding or subtracting a constant shifts all values equally and leaves SD unchanged!"),
            numTrap(a * a * sd, ans, "You multiplied by {{a^2}} — that rule is for **variance**, whereas SD multiplies by {{|a|}}!"),
          ].filter((t): t is Trap => t !== null);
          return {
            prompt: `Dataset {{X}} has mean \`${mu}\` and standard deviation \`${sd}\`. Each value is transformed via {{Y = ${a}X ${bStr}}}. Find the exact **standard deviation** of {{Y}}.`,
            answer: { type: "number", value: ans },
            hint: "Standard deviation ignores the shift `+b` and multiplies by {{|a|}}.",
            traps,
            solution: [
              `Under {{Y = aX + b}}, {{σ_Y = |a| * σ_X}}.`,
              `{{σ_Y = |${a}| * ${sd} = ${Math.abs(a)} * ${sd} = ${ans}}}.`,
            ],
          };
        }

        const vX = sd * sd;
        const ans = a * a * vX;
        const traps = [
          numTrap(Math.abs(a) * vX, ans, "Variance scales by {{a^2}}, not {{|a|}}!"),
          numTrap(ans + b, ans, "Shifting every datum by a constant does NOT change variance!"),
          numTrap(Math.abs(a) * sd, ans, "That is the standard deviation of {{Y}} — square it to get the **variance**!"),
        ].filter((t): t is Trap => t !== null);
        return {
          prompt: `Dataset {{X}} has mean \`${mu}\` and **variance** \`${vX}\`. Each value is transformed via {{Y = ${a}X ${bStr}}}. Find the exact **variance** of {{Y}}.`,
          answer: { type: "number", value: ans },
          hint: "Recall {{Var(aX + b) = a^2 Var(X)}} — ignore the shift `+b` and square {{a}}!",
          traps,
          solution: [
            `Under {{Y = aX + b}}, {{Var(Y) = a^2 * Var(X)}}.`,
            `{{Var(Y) = (${a})^2 * ${vX} = ${a * a} * ${vX} = ${ans}}}.`,
          ],
        };
      }

      // Tier 3: Summary-totals variance OR reverse coding
      if (rng.bool()) {
        const n = rng.pick([4, 5, 6, 8, 10]);
        const mu = rng.int(6, 25);
        const sd = rng.int(2, 8);
        const variance = sd * sd;
        const sumX = n * mu;
        const sumX2 = n * (variance + mu * mu);
        const askSd = rng.bool();
        const ans = askSd ? sd : variance;
        const traps = [
          numTrap(askSd ? variance : sd, ans, askSd ? "That is the variance `σ²` — take the square root for standard deviation `σ`!" : "That is the standard deviation `σ` — this question asks for variance `σ²`!"),
        ].filter((t): t is Trap => t !== null);

        return {
          prompt: `A sample of \`${n}\` observations satisfies {{sum x_i = ${sumX}}} and {{sum x_i^2 = ${sumX2}}}. Calculate the exact population **${askSd ? "standard deviation `σ`" : "variance `σ²`"}**.`,
          answer: { type: "number", value: ans },
          hint: `First find {{μ = ${sumX}/${n}}}, then apply {{σ^2 = (sum x_i^2)/n - μ^2}}.`,
          traps,
          solution: [
            `Mean {{μ = ${sumX} / ${n} = ${mu}}}.`,
            `Variance {{σ^2 = ${sumX2} / ${n} - ${mu}^2 = ${variance + mu * mu} - ${mu * mu} = ${variance}}}.`,
            ...(askSd ? [`Standard deviation {{σ = sqrt(${variance}) = ${sd}}}.`] : []),
          ],
        };
      }

      const xMean = rng.int(5, 22);
      const xSd = rng.int(2, 7);
      const a = rng.pick([-3, -2, 2, 3, 4]);
      const b = rng.nonZero(-15, 20);
      const bStr = b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
      const yMean = a * xMean + b;
      const yVar = a * a * xSd * xSd;
      const askMean = rng.bool();
      const ans = askMean ? xMean : xSd;
      const traps = askMean
        ? [numTrap((yMean + b) / a, ans, "Check the sign when reversing `+b`: subtract `b` before dividing by `a`!")]
        : [numTrap(xSd * xSd, ans, "That is the original **variance** `σ_X²` — take the square root for standard deviation!")];

      return {
        prompt: `Coded data {{Y = ${a}X ${bStr}}} have mean \`${num(yMean)}\` and **variance** \`${yVar}\`. Find the exact **${askMean ? "mean" : "standard deviation"}** of the original dataset {{X}}.`,
        answer: { type: "number", value: ans },
        hint: askMean ? `Solve {{${a} x̄ ${bStr} = ${num(yMean)}}}.` : `First solve {{${a * a} * Var(X) = ${yVar}}}, then take the square root.`,
        traps: traps.filter((t): t is Trap => t !== null),
        solution: askMean
          ? [
              `Set {{${a} x̄ ${bStr} = ${num(yMean)}}}.`,
              `{{${a} x̄ = ${num(yMean - b)}}} ⇒ {{x̄ = ${xMean}}}.`,
            ]
          : [
              `Since {{Var(Y) = (${a})^2 Var(X)}}, {{Var(X) = ${yVar} / ${a * a} = ${xSd * xSd}}}.`,
              `Taking the positive square root gives {{σ_X = sqrt(${xSd * xSd}) = ${xSd}}}.`,
            ],
      };
    },
  },

  // =========================================================================
  // DRILL 2 (LEVEL 1 · SL): COMBINED, CONDITIONAL PROBABILITY & INDEPENDENCE
  // =========================================================================
  {
    id: "4-stats-probability.conditional-independence",
    topicId: "4-stats-probability",
    title: "Combined & Conditional Probability and Independence",
    level: 1,
    ibLevel: "SL",
    guideRef: "probability-conditional-bayes",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        // Exact hundredths Addition Law
        const inter = rng.int(5, 30);
        const onlyA = rng.int(10, 40);
        const onlyB = rng.int(10, Math.min(40, 95 - inter - onlyA));
        const pA = clean((onlyA + inter) / 100);
        const pB = clean((onlyB + inter) / 100);
        const pInter = clean(inter / 100);
        const pUnion = clean((onlyA + onlyB + inter) / 100);
        const askUnion = rng.bool();

        if (askUnion) {
          const traps = [
            numTrap(clean(pA + pB), pUnion, "You forgot to subtract the overlap {{P(A ∩ B)}}!"),
          ].filter((t): t is Trap => t !== null);
          return {
            prompt: `Events {{A}} and {{B}} satisfy {{P(A) = ${pA}}}, {{P(B) = ${pB}}}, and {{P(A ∩ B) = ${pInter}}}. Find {{P(A ∪ B)}} as an exact decimal.`,
            answer: { type: "number", value: pUnion },
            hint: "Use {{P(A ∪ B) = P(A) + P(B) - P(A ∩ B)}}.",
            traps,
            solution: [
              `{{P(A ∪ B) = ${pA} + ${pB} - ${pInter} = ${pUnion}}}.`,
            ],
          };
        }

        const traps = [
          numTrap(clean(pA * pB), pInter, "You multiplied {{P(A)P(B)}}, which only holds if the events are known to be independent!"),
        ].filter((t): t is Trap => t !== null);
        return {
          prompt: `Events {{A}} and {{B}} satisfy {{P(A) = ${pA}}}, {{P(B) = ${pB}}}, and {{P(A ∪ B) = ${pUnion}}}. Find {{P(A ∩ B)}} as an exact decimal.`,
          answer: { type: "number", value: pInter },
          hint: "Rearrange the addition law: {{P(A ∩ B) = P(A) + P(B) - P(A ∪ B)}}.",
          traps,
          solution: [
            `{{P(A ∩ B) = ${pA} + ${pB} - ${pUnion} = ${pInter}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Conditional probability P(A | B) from Venn values (exact fraction)
          const denomB = rng.pick([20, 25, 40, 50]);
          const bCount = rng.int(Math.ceil(denomB * 0.25), Math.floor(denomB * 0.6));
          const interCount = rng.int(2, bCount - 2);
          const aOnly = rng.int(2, Math.min(denomB - bCount - 1, Math.floor(denomB * 0.45)));
          const aCount = aOnly + interCount;
          const unionCount = aOnly + bCount;
          const pA = clean(aCount / denomB);
          const pB = clean(bCount / denomB);
          const pU = clean(unionCount / denomB);
          const [an, ad] = simplify(interCount, bCount);
          const traps = [
            fracTrap(interCount, aCount, an, ad, "That is {{P(B | A)}} — remember the event after the bar (`B`) goes in the denominator!"),
          ].filter((t): t is Trap => t !== null);

          return {
            prompt: `Given {{P(A) = ${pA}}}, {{P(B) = ${pB}}}, and {{P(A ∪ B) = ${pU}}}, calculate {{P(A | B)}} as a simplified fraction.`,
            answer: makeFracAnswer(an, ad),
            hint: "First find {{P(A ∩ B) = P(A) + P(B) - P(A ∪ B)}}, then divide by {{P(B)}}.",
            traps,
            solution: [
              `{{P(A ∩ B) = ${pA} + ${pB} - ${pU} = ${clean(interCount / denomB)}}}.`,
              `{{P(A | B) = ${clean(interCount / denomB)} / ${pB} = ${interCount}/${bCount} =}} ${frac(an, ad)}.`,
            ],
          };
        }

        // Independent events union P(A ∪ B)
        const aTenths = rng.int(2, 8);
        const bTenths = rng.int(2, 8);
        const pA = clean(aTenths / 10);
        const pB = clean(bTenths / 10);
        const pInter = clean((aTenths * bTenths) / 100);
        const pUnion = clean(pA + pB - pInter);
        const traps = [
          numTrap(pInter, pUnion, "That is the intersection {{P(A ∩ B)}} — now substitute into {{P(A ∪ B) = P(A) + P(B) - P(A ∩ B)}}."),
        ].filter((t): t is Trap => t !== null);

        return {
          prompt: `Events {{A}} and {{B}} are **independent**, with {{P(A) = ${pA}}} and {{P(B) = ${pB}}}. Find {{P(A ∪ B)}} as an exact decimal.`,
          answer: { type: "number", value: pUnion },
          hint: "Because they are independent, {{P(A ∩ B) = P(A) * P(B)}} first!",
          traps,
          solution: [
            `Independence gives {{P(A ∩ B) = ${pA} * ${pB} = ${pInter}}}.`,
            `{{P(A ∪ B) = ${pA} + ${pB} - ${pInter} = ${pUnion}}}.`,
          ],
        };
      }

      // Tier 3: Reverse solving P(B) for independent events OR P(A | B') from survey counts
      if (rng.bool()) {
        const aTenths = rng.pick([2, 4, 5, 6, 8]);
        const bTenths = rng.int(2, 8);
        const pA = clean(aTenths / 10);
        const pB = clean(bTenths / 10);
        const pUnion = clean(pA + pB - pA * pB);
        const traps = [
          numTrap(clean(pUnion - pA), pB, "You assumed mutually exclusive ({{P(A ∩ B) = 0}}) instead of independent ({{P(A ∩ B) = P(A)P(B)}})!"),
        ].filter((t): t is Trap => t !== null);

        return {
          prompt: `Events {{A}} and {{B}} are **independent**, with {{P(A) = ${pA}}} and {{P(A ∪ B) = ${pUnion}}}. Solve for {{P(B)}} as an exact decimal.`,
          answer: { type: "number", value: pB },
          hint: `Let {{p = P(B)}} so {{P(A ∩ B) = ${pA}p}}, then solve {{${pA} + p - ${pA}p = ${pUnion}}}.`,
          traps,
          solution: [
            `Let {{p = P(B)}}. Then {{${pUnion} = ${pA} + p - ${pA}p = ${pA} + ${clean(1 - pA)}p}}.`,
            `{{${clean(1 - pA)}p = ${clean(pUnion - pA)}}} ⇒ {{p = ${pB}}}.`,
          ],
        };
      }

      // Two-way survey P(B | A')
      const total = rng.pick([80, 100, 120, 150]);
      const nBoth = rng.int(10, Math.floor(total * 0.25));
      const nAOnly = rng.int(12, Math.floor(total * 0.3));
      const nBOnly = rng.int(8, Math.floor(total * 0.25));
      const nA = nAOnly + nBoth;
      const nB = nBOnly + nBoth;
      const nNotA = total - nA;
      const [an, ad] = simplify(nBOnly, nNotA);
      const traps = [
        fracTrap(nBOnly, total, an, ad, "The denominator must be the number of students NOT taking Physics (`n(A')`), not the total cohort!"),
      ].filter((t): t is Trap => t !== null);

      return {
        prompt: `In a cohort of \`${total}\` students, \`${nA}\` study Physics, \`${nB}\` study Chemistry, and \`${nBoth}\` study both. Given that a randomly chosen student does **not** study Physics, find the exact probability they study Chemistry (as a simplified fraction).`,
        answer: makeFracAnswer(an, ad),
        hint: `Find how many students do NOT study Physics (\`${total} − ${nA}\`) and how many study Chemistry only (\`${nB} − ${nBoth}\`).`,
        traps,
        solution: [
          `Students not studying Physics: {{${total} - ${nA} = ${nNotA}}}.`,
          `Students studying Chemistry only: {{${nB} - ${nBoth} = ${nBOnly}}}.`,
          `{{P(C | P') = ${nBOnly} / ${nNotA} =}} ${frac(an, ad)}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3 (LEVEL 2 · SL): BINOMIAL MEAN/VARIANCE & NORMAL Z-STANDARDISATION
  // =========================================================================
  {
    id: "4-stats-probability.binomial-normal-z",
    topicId: "4-stats-probability",
    title: "Binomial Mean/Variance & Normal z-Standardisation",
    level: 2,
    ibLevel: "SL",
    guideRef: "discrete-binomial-normal",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        if (rng.bool()) {
          // Binomial E(X) or Var(X)
          const p = rng.pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8]);
          const n = p === 0.25 || p === 0.75 ? rng.pick([8, 12, 16, 20, 24, 32, 40]) : rng.pick([10, 15, 20, 25, 30, 40, 50]);
          const askVar = rng.bool();
          const mean = clean(n * p);
          const variance = clean(n * p * (1 - p));
          const ans = askVar ? variance : mean;
          const traps = [
            numTrap(askVar ? mean : variance, ans, askVar ? "That is the mean {{np}} — multiply by {{1 - p}} for the variance!" : "That is the variance {{np(1 - p)}} — this asks for the mean {{np}}!"),
          ].filter((t): t is Trap => t !== null);

          return {
            prompt: `A random variable follows {{X ~ B(${n}, ${p})}}. Calculate the exact **${askVar ? "variance `Var(X)`" : "expected value `E(X)`"}**.`,
            answer: { type: "number", value: ans },
            hint: askVar ? "Use {{Var(X) = np(1 - p)}}." : "Use {{E(X) = np}}.",
            traps,
            solution: askVar
              ? [`{{Var(X) = np(1 - p) = ${n} * ${p} * ${clean(1 - p)} = ${variance}}}.`]
              : [`{{E(X) = np = ${n} * ${p} = ${mean}}}.`],
          };
        }

        // Normal z-score (remember N(mu, sigma^2)!)
        const mu = rng.int(40, 120);
        const sd = rng.pick([2, 4, 5, 8, 10]);
        const zSteps = rng.nonZero(-12, 12); // z in multiples of 0.25 or 0.5
        const z = clean(zSteps * 0.25);
        const x = clean(mu + z * sd);
        const traps = [
          numTrap(clean((x - mu) / (sd * sd)), z, `You divided by the variance \`${sd * sd}\` instead of the standard deviation {{σ = sqrt(${sd * sd}) = ${sd}}}!`),
          numTrap(clean(-z), z, "Check the order of subtraction in {{z = (x - μ) / σ}}!"),
        ].filter((t): t is Trap => t !== null);

        return {
          prompt: `A Normal random variable follows {{X ~ N(${mu}, ${sd * sd})}}. Calculate the exact standardised **{{z}}-score** for {{x = ${x}}}.`,
          answer: { type: "number", value: z },
          hint: `First take the square root of the variance \`${sd * sd}\` to get {{σ = ${sd}}}, then evaluate {{z = (x - μ) / σ}}.`,
          traps,
          solution: [
            `Identify {{μ = ${mu}}} and {{σ = sqrt(${sd * sd}) = ${sd}}}.`,
            `{{z = (${x} - ${mu}) / ${sd} = ${num(clean(x - mu))} / ${sd} = ${num(z)}}}.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          // Recover n or p from Binomial mean & variance
          const p = rng.pick([0.2, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8]);
          const n = p === 0.25 || p === 0.75 ? rng.pick([16, 20, 24, 32, 40, 48]) : rng.pick([15, 20, 25, 30, 40, 50]);
          const mean = clean(n * p);
          const variance = clean(n * p * (1 - p));
          const askN = rng.bool();
          const ans = askN ? n : p;
          const traps = askN
            ? []
            : [numTrap(clean(1 - p), p, "Careful: {{Var(X) / E(X) = 1 - p}}, so subtract from `1` to get {{p}}!")];

          return {
            prompt: `A Binomial variable {{X ~ B(n, p)}} has mean \`${mean}\` and variance \`${variance}\`. Find the exact value of **{{${askN ? "n" : "p"}}}**.`,
            answer: { type: "number", value: ans },
            hint: "Divide {{Var(X) = np(1 - p)}} by {{E(X) = np}} to find {{1 - p}} immediately!",
            traps: traps.filter((t): t is Trap => t !== null),
            solution: [
              `{{1 - p = Var(X) / E(X) = ${variance} / ${mean} = ${clean(1 - p)}}} ⇒ {{p = ${p}}}.`,
              ...(askN ? [`{{n = E(X) / p = ${mean} / ${p} = ${n}}}.`] : []),
            ],
          };
        }

        // Solve for unknown sigma or mu from a given Normal z-score
        const mu = rng.int(35, 110);
        const sd = rng.int(3, 14);
        const z = rng.pick([-2.5, -2, -1.5, -1, 1, 1.5, 2, 2.5]);
        const x = clean(mu + z * sd);
        const askSigma = rng.bool();
        if (askSigma) {
          return {
            prompt: `For {{X ~ N(${mu}, σ^2)}}, the value {{x = ${x}}} corresponds to a standard Normal score of {{z = ${num(z)}}}. Find the exact standard deviation {{σ}}.`,
            answer: { type: "number", value: sd },
            hint: `Substitute into {{(${x} - ${mu}) / σ = ${num(z)}}} and solve for positive {{σ}}.`,
            solution: [
              `{{(${x} - ${mu}) / σ = ${num(z)}}} ⇒ {{${num(clean(x - mu))} = ${num(z)} σ}}.`,
              `{{σ = ${num(clean(x - mu))} / ${num(z)} = ${sd}}}.`,
            ],
          };
        }

        return {
          prompt: `For {{X ~ N(μ, ${sd * sd})}}, the value {{x = ${x}}} corresponds to a standard Normal score of {{z = ${num(z)}}}. Find the exact mean {{μ}}.`,
          answer: { type: "number", value: mu },
          hint: `Use {{σ = sqrt(${sd * sd}) = ${sd}}} in {{(${x} - μ) / ${sd} = ${num(z)}}}.`,
          solution: [
            `Here {{σ = ${sd}}}. From {{(${x} - μ) / ${sd} = ${num(z)}}}, we get {{${x} - μ = ${num(clean(z * sd))}}}.`,
            `{{μ = ${x} - (${num(clean(z * sd))}) = ${mu}}}.`,
          ],
        };
      }

      // Tier 3: Simultaneous Normal (x1, z1), (x2, z2) solving for sigma OR exact small-n Binomial fraction
      if (rng.bool()) {
        const mu = rng.int(40, 100);
        const sd = rng.int(4, 15);
        const z1 = rng.pick([-2, -1.5, -1]);
        const z2 = rng.pick([1, 1.5, 2, 2.5]);
        const x1 = clean(mu + z1 * sd);
        const x2 = clean(mu + z2 * sd);
        const askMu = rng.bool();
        const ans = askMu ? mu : sd;
        return {
          prompt: `A Normal RV {{X ~ N(μ, σ^2)}} maps {{x = ${x1}}} to {{z = ${num(z1)}}} and {{x = ${x2}}} to {{z = ${num(z2)}}}. Solve simultaneously to find the exact value of **{{${askMu ? "μ" : "σ"}}}**.`,
          answer: { type: "number", value: ans },
          hint: `Subtract the two equations {{${x1} - μ = ${num(z1)}σ}} and {{${x2} - μ = ${num(z2)}σ}} to eliminate {{μ}} first!`,
          solution: [
            `Equation (1): {{${x1} - μ = ${num(z1)}σ}}; Equation (2): {{${x2} - μ = ${num(z2)}σ}}.`,
            `Subtracting (1) from (2): {{${clean(x2 - x1)} = ${clean(z2 - z1)}σ}} ⇒ {{σ = ${sd}}}.`,
            ...(askMu ? [`Substitute back: {{μ = ${x2} - ${num(z2)}(${sd}) = ${mu}}}.`] : []),
          ],
        };
      }

      // Exact small-n Binomial P(X = r)
      const n = rng.pick([3, 4, 5]);
      const [pn, pd] = rng.pick([
        [1, 2],
        [1, 3],
        [2, 3],
        [1, 4],
        [3, 4],
      ] as const);
      const r = rng.int(1, n - 1);
      const comb = (a: number, b: number) => {
        let c = 1;
        for (let i = 0; i < b; i++) c = (c * (a - i)) / (i + 1);
        return Math.round(c);
      };
      const nCr = comb(n, r);
      const numVal = nCr * Math.pow(pn, r) * Math.pow(pd - pn, n - r);
      const denVal = Math.pow(pd, n);
      const [an, ad] = simplify(numVal, denVal);
      const traps = [
        fracTrap(Math.pow(pn, r) * Math.pow(pd - pn, n - r), denVal, an, ad, `You forgot to multiply by the binomial coefficient {{${n}C${r} = ${nCr}}}!`),
      ].filter((t): t is Trap => t !== null);

      return {
        prompt: `Let {{X ~ B(${n}, ${pn}/${pd})}}. Calculate the exact probability {{P(X = ${r})}} as a simplified fraction.`,
        answer: makeFracAnswer(an, ad),
        hint: `Apply {{P(X = ${r}) = ${n}C${r} * (${pn}/${pd})^${r} * (${pd - pn}/${pd})^${n - r}}}.`,
        traps,
        solution: [
          `{{${n}C${r} = ${nCr}}}.`,
          `{{P(X = ${r}) = ${nCr} * (${pn}/${pd})^${r} * (${pd - pn}/${pd})^${n - r} = ${numVal}/${denVal} =}} ${frac(an, ad)}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4 (LEVEL 3 · HL): BAYES' THEOREM POSTERIOR PROBABILITY
  // =========================================================================
  {
    id: "4-stats-probability.bayes-theorem-hl",
    topicId: "4-stats-probability",
    title: "[HL] Bayes' Theorem Posterior Probability",
    level: 3,
    ibLevel: "HL",
    guideRef: "probability-conditional-bayes",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        // 2-branch Bayes (exact simplified fraction)
        const p1 = rng.pick([20, 25, 30, 35, 40, 45, 55, 60, 65, 70, 75, 80]);
        const p2 = 100 - p1;
        const r1 = rng.int(2, 9);
        let r2 = rng.int(2, 9);
        if (r2 === r1) r2 = (r1 % 8) + 2;
        const w1 = p1 * r1;
        const w2 = p2 * r2;
        const total = w1 + w2;
        const targetFirst = rng.bool();
        const targetW = targetFirst ? w1 : w2;
        const [an, ad] = simplify(targetW, total);
        const traps = [
          fracTrap(targetFirst ? w2 : w1, total, an, ad, `That is the posterior for Plant ${targetFirst ? "B" : "A"} — check which plant the question asks for!`),
        ].filter((t): t is Trap => t !== null);

        return {
          prompt: `[HL] Plant \`A\` produces \`${p1}%\` of valves (\`${r1}%\` faulty) and Plant \`B\` produces \`${p2}%\` (\`${r2}%\` faulty). Given a randomly chosen valve is faulty, find the exact probability it came from **Plant \`${targetFirst ? "A" : "B"}\`** (as a simplified fraction).`,
          answer: makeFracAnswer(an, ad),
          hint: "Compute both faulty branches (`share × fault rate`), sum them for the denominator, and divide the target branch by the sum.",
          traps,
          solution: [
            `Multiply share × rate (in ten-thousandths): Plant A gives {{${p1} * ${r1} = ${w1}}}, Plant B gives {{${p2} * ${r2} = ${w2}}}.`,
            `Total faulty weight = {{${w1} + ${w2} = ${total}}}.`,
            `By Bayes' theorem, {{P(${targetFirst ? "A" : "B"} | F) = ${targetW} / ${total} =}} ${frac(an, ad)}.`,
          ],
        };
      }

      if (tier === 2) {
        // 3-branch Bayes (exact simplified fraction)
        const splits = [
          [50, 30, 20],
          [45, 35, 20],
          [40, 35, 25],
          [50, 25, 25],
          [60, 25, 15],
          [40, 40, 20],
          [55, 30, 15],
        ] as const;
        const [p1, p2, p3] = rng.pick(splits);
        const r1 = rng.int(1, 6);
        const r2 = rng.int(2, 7);
        const r3 = rng.int(3, 9);
        const w1 = p1 * r1;
        const w2 = p2 * r2;
        const w3 = p3 * r3;
        const total = w1 + w2 + w3;
        const idx = rng.pick([0, 1, 2] as const);
        const names = ["M_1", "M_2", "M_3"] as const;
        const ws = [w1, w2, w3];
        const [an, ad] = simplify(ws[idx], total);

        return {
          prompt: `[HL] Three machines {{M_1, M_2, M_3}} supply \`${p1}%\`, \`${p2}%\`, and \`${p3}%\` of sensors, with defect rates \`${r1}%\`, \`${r2}%\`, and \`${r3}%\` respectively. Given a randomly chosen sensor is defective ({{D}}), find exact **{{P(${names[idx]} | D)}}** as a simplified fraction.`,
          answer: makeFracAnswer(an, ad),
          hint: "Sum all three defective branches {{P(M_i)P(D | M_i)}} for the denominator, and put the target machine's branch on top.",
          solution: [
            `Defective branch weights (× 10⁻⁴): {{M_1: ${p1}*${r1} = ${w1}}}, {{M_2: ${p2}*${r2} = ${w2}}}, {{M_3: ${p3}*${r3} = ${w3}}}.`,
            `Total defective weight: {{${w1} + ${w2} + ${w3} = ${total}}}.`,
            `{{P(${names[idx]} | D) = ${ws[idx]} / ${total} =}} ${frac(an, ad)}.`,
          ],
        };
      }

      // Tier 3: Complement Bayes P(B_1 | not A) (e.g. arrived ON TIME / tested NEGATIVE)
      const pRain = rng.pick([20, 25, 30, 35, 40, 45, 50, 60]);
      const pDry = 100 - pRain;
      const lateRain = rng.pick([30, 40, 50, 60, 70]);
      const lateDry = rng.pick([5, 10, 15, 20]);
      const onTimeRain = 100 - lateRain;
      const onTimeDry = 100 - lateDry;
      const w1 = pRain * onTimeRain;
      const w2 = pDry * onTimeDry;
      const total = w1 + w2;
      const [an, ad] = simplify(w1, total);
      const traps = [
        fracTrap(pRain * lateRain, pRain * lateRain + pDry * lateDry, an, ad, "Careful: you conditioned on arriving **late** instead of arriving **on time**!"),
      ].filter((t): t is Trap => t !== null);

      return {
        prompt: `[HL] It rains on \`${pRain}%\` of mornings ({{R}}). A train is late with probability \`${clean(lateRain / 100)}\` if it rains and \`${clean(lateDry / 100)}\` if it is dry. Given the train arrived **on time**, find the exact probability that it rained (as a simplified fraction).`,
        answer: makeFracAnswer(an, ad),
        hint: `Conditioning on **on time** uses complements: {{P("on time" | R) = ${clean(onTimeRain / 100)}}} and {{P("on time" | R') = ${clean(onTimeDry / 100)}}}.`,
        traps,
        solution: [
          `On-time branch weights (× 10⁻⁴): Rain & on time = {{${pRain} * ${onTimeRain} = ${w1}}}; Dry & on time = {{${pDry} * ${onTimeDry} = ${w2}}}.`,
          `Total on-time weight = {{${w1} + ${w2} = ${total}}}.`,
          `By Bayes' theorem, {{P(R | "on time") = ${w1} / ${total} =}} ${frac(an, ad)}.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 5 (LEVEL 3 · HL): CONTINUOUS PDFs — CONSTANT k, E(X) & VAR(aX + b)
  // =========================================================================
  {
    id: "4-stats-probability.continuous-pdf-hl",
    topicId: "4-stats-probability",
    title: "[HL] Continuous PDFs: Constant k, E(X) & Linear Variance",
    level: 3,
    ibLevel: "HL",
    guideRef: "continuous-rvs-pdf-cdf-hl",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        // Normalising constant k for k x, k x^2, k(b - x), or k(x + c) on [0, b]
        const form = rng.pick(["linear", "quad", "desc", "shifted"] as const);
        if (form === "linear") {
          const b = rng.int(2, 12);
          // int_0^b kx dx = k b^2 / 2 = 1 => k = 2 / b^2
          const [an, ad] = simplify(2, b * b);
          const traps = [
            fracTrap(1, b * b, an, ad, "Remember the integral of {{x}} is {{x^2 / 2}}, not {{x^2}}!"),
          ].filter((t): t is Trap => t !== null);
          return {
            prompt: `[HL] A continuous RV {{X}} has PDF {{f(x) = kx}} for {{0 <= x <= ${b}}}, and \`0\` otherwise. Find the exact value of {{k}} as a simplified fraction.`,
            answer: makeFracAnswer(an, ad),
            hint: `Integrate {{∫_0^${b} kx dx = 1}} and solve for {{k}}.`,
            traps,
            solution: [
              `{{∫_0^${b} kx dx = [k x^2 / 2]_0^${b} = (${b * b}/2)k = 1}}.`,
              `Therefore {{k = 2 / ${b * b} =}} ${frac(an, ad)}.`,
            ],
          };
        }
        if (form === "quad") {
          const b = rng.int(2, 8);
          // int_0^b k x^2 dx = k b^3 / 3 = 1 => k = 3 / b^3
          const [an, ad] = simplify(3, b * b * b);
          const traps = [
            fracTrap(1, b * b * b, an, ad, "Remember the antiderivative of {{x^2}} is {{x^3 / 3}}!"),
          ].filter((t): t is Trap => t !== null);
          return {
            prompt: `[HL] A continuous RV {{X}} has PDF {{f(x) = k x^2}} for {{0 <= x <= ${b}}}, and \`0\` otherwise. Find the exact value of {{k}} as a simplified fraction.`,
            answer: makeFracAnswer(an, ad),
            hint: `Integrate {{∫_0^${b} k x^2 dx = [k x^3 / 3]_0^${b} = 1}}.`,
            traps,
            solution: [
              `{{∫_0^${b} k x^2 dx = (${b * b * b}/3)k = 1}}.`,
              `Therefore {{k = 3 / ${b * b * b} =}} ${frac(an, ad)}.`,
            ],
          };
        }
        if (form === "shifted") {
          const b = rng.int(2, 8);
          const c = rng.int(1, 5);
          // int_0^b k(x + c) dx = k(b^2/2 + bc) = k * b(b + 2c) / 2 = 1 => k = 2 / (b(b + 2c))
          const den = b * (b + 2 * c);
          const [an, ad] = simplify(2, den);
          return {
            prompt: `[HL] A continuous RV {{X}} has PDF {{f(x) = k(x + ${c})}} for {{0 <= x <= ${b}}}, and \`0\` otherwise. Find the exact value of {{k}} as a simplified fraction.`,
            answer: makeFracAnswer(an, ad),
            hint: `Evaluate {{∫_0^${b} k(x + ${c}) dx = k[x^2/2 + ${c}x]_0^${b} = 1}}.`,
            solution: [
              `{{∫_0^${b} k(x + ${c}) dx = k(${b * b}/2 + ${b * c}) = (${den}/2)k = 1}}.`,
              `Therefore {{k = 2 / ${den} =}} ${frac(an, ad)}.`,
            ],
          };
        }
        const b = rng.int(2, 12);
        // f(x) = k(b - x) on [0, b]: area = k b^2 / 2 = 1 => k = 2 / b^2
        const [an, ad] = simplify(2, b * b);
        return {
          prompt: `[HL] A continuous RV {{X}} has PDF {{f(x) = k(${b} - x)}} for {{0 <= x <= ${b}}}, and \`0\` otherwise. Find the exact value of {{k}} as a simplified fraction.`,
          answer: makeFracAnswer(an, ad),
          hint: `Evaluate {{∫_0^${b} k(${b} - x) dx = 1}} (or use triangle area {{(1/2) * ${b} * (${b}k) = 1}}).`,
          solution: [
            `{{∫_0^${b} k(${b} - x) dx = k[${b}x - x^2/2]_0^${b} = (${b * b}/2)k = 1}}.`,
            `Therefore {{k = 2 / ${b * b} =}} ${frac(an, ad)}.`,
          ],
        };
      }

      if (tier === 2) {
        // Exact E(X) for f(x) = (2/b^2) x OR (3/b^3) x^2 on [0, b], or P(a < X < c)
        const mode = rng.pick(["ex1", "ex2", "prob"] as const);
        if (mode === "ex1") {
          const b = rng.int(2, 14);
          const [kn, kd] = simplify(2, b * b);
          // E(X) = (2/b^2) * b^3 / 3 = 2b / 3
          const [an, ad] = simplify(2 * b, 3);
          return {
            prompt: `[HL] A continuous RV {{X}} has PDF {{f(x) = (${kn}/${kd}) x}} for {{0 <= x <= ${b}}}, and \`0\` otherwise. Calculate the exact expected value {{E(X)}} (as a simplified fraction or integer).`,
            answer: makeFracAnswer(an, ad),
            hint: `Evaluate {{E(X) = ∫_0^${b} x f(x) dx = (${kn}/${kd}) ∫_0^${b} x^2 dx}}.`,
            solution: [
              `{{E(X) = (${kn}/${kd}) [x^3 / 3]_0^${b} = (2 / ${b * b}) * (${b * b * b} / 3) = ${2 * b}/3 =}} ${frac(an, ad)}.`,
            ],
          };
        }
        if (mode === "ex2") {
          const b = rng.int(2, 10);
          const [kn, kd] = simplify(3, b * b * b);
          // E(X) = (3/b^3) * b^4 / 4 = 3b / 4
          const [an, ad] = simplify(3 * b, 4);
          return {
            prompt: `[HL] A continuous RV {{X}} has PDF {{f(x) = (${kn}/${kd}) x^2}} for {{0 <= x <= ${b}}}, and \`0\` otherwise. Calculate the exact expected value {{E(X)}} (as a simplified fraction or integer).`,
            answer: makeFracAnswer(an, ad),
            hint: `Evaluate {{E(X) = ∫_0^${b} x f(x) dx = (${kn}/${kd}) ∫_0^${b} x^3 dx}}.`,
            solution: [
              `{{E(X) = (${kn}/${kd}) [x^4 / 4]_0^${b} = (3 / ${b * b * b}) * (${b * b * b * b} / 4) = ${3 * b}/4 =}} ${frac(an, ad)}.`,
            ],
          };
        }
        const b = rng.int(3, 10);
        const a = rng.int(1, b - 1);
        const [kn, kd] = simplify(2, b * b);
        // P(a < X < b) = (b^2 - a^2) / b^2
        const [an, ad] = simplify(b * b - a * a, b * b);
        const traps = [
          fracTrap(a * a, b * b, an, ad, `That is {{P(0 < X < ${a})}} — subtract from \`1\` for {{P(${a} < X < ${b})}}!`),
        ].filter((t): t is Trap => t !== null);
        return {
          prompt: `[HL] A continuous RV {{X}} has PDF {{f(x) = (${kn}/${kd}) x}} for {{0 <= x <= ${b}}}, and \`0\` otherwise. Calculate exact {{P(${a} < X < ${b})}} as a simplified fraction.`,
          answer: makeFracAnswer(an, ad),
          hint: `Evaluate {{∫_${a}^${b} (${kn}/${kd}) x dx = [x^2 / ${b * b}]_${a}^${b}}}.`,
          traps,
          solution: [
            `Antiderivative is {{F(x) = x^2 / ${b * b}}}.`,
            `{{P(${a} < X < ${b}) = (${b * b} - ${a * a}) / ${b * b} = ${b * b - a * a} / ${b * b} =}} ${frac(an, ad)}.`,
          ],
        };
      }

      // Tier 3: Var(aX + c) from E(X) & E(X^2) OR direct Var(X) for f(x) = (2/b^2)x
      if (rng.bool()) {
        const ex = rng.int(2, 9);
        const v = rng.int(2, 12);
        const ex2 = ex * ex + v;
        const a = rng.pick([-4, -3, -2, 2, 3, 4, 5]);
        const c = rng.nonZero(-12, 15);
        const cStr = c > 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
        const ans = a * a * v;
        const traps = [
          numTrap(Math.abs(a) * v, ans, "Remember {{Var(aX + b) = a^2 Var(X)}} — square the coefficient {{a}}!"),
          numTrap(a * a * ex2, ans, "You forgot to subtract {{[E(X)]^2}} from {{E(X^2)}} first!"),
        ].filter((t): t is Trap => t !== null);

        return {
          prompt: `[HL] A random variable {{X}} satisfies {{E(X) = ${ex}}} and {{E(X^2) = ${ex2}}}. Calculate the exact value of **{{Var(${a}X ${cStr})}}**.`,
          answer: { type: "number", value: ans },
          hint: `First find {{Var(X) = E(X^2) - [E(X)]^2}}, then multiply by {{(${a})^2}}.`,
          traps,
          solution: [
            `{{Var(X) = ${ex2} - ${ex}^2 = ${ex2} - ${ex * ex} = ${v}}}.`,
            `{{Var(${a}X ${cStr}) = (${a})^2 * ${v} = ${a * a} * ${v} = ${ans}}}.`,
          ],
        };
      }

      const b = rng.int(2, 10);
      const [kn, kd] = simplify(2, b * b);
      // For f(x) = (2/b^2)x on [0,b]: E(X) = 2b/3, E(X^2) = (2/b^2)(b^4/4) = b^2/2
      // Var(X) = b^2/2 - 4b^2/9 = b^2 / 18!
      const [an, ad] = simplify(b * b, 18);
      return {
        prompt: `[HL] A continuous RV {{X}} has PDF {{f(x) = (${kn}/${kd}) x}} for {{0 <= x <= ${b}}}, and \`0\` otherwise. Calculate the exact **variance** {{Var(X)}} as a simplified fraction.`,
        answer: makeFracAnswer(an, ad),
        hint: `Compute {{E(X) = 2(${b})/3}} and {{E(X^2) = (${b})^2 / 2}}, then subtract {{E(X^2) - [E(X)]^2}}.`,
        solution: [
          `{{E(X) = (2/${b * b}) ∫_0^${b} x^2 dx = ${2 * b}/3}}.`,
          `{{E(X^2) = (2/${b * b}) ∫_0^${b} x^3 dx = ${b * b}/2}}.`,
          `{{Var(X) = ${b * b}/2 - ${4 * b * b}/9 = ${b * b}/18 =}} ${frac(an, ad)}.`,
        ],
      };
    },
  },
];
