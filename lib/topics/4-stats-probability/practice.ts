import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // DIAGNOSTIC QUIZ (10 crisp short questions across all 4 sections: 7 SL + 3 HL)
  // =========================================================================
  quiz: [
    {
      id: "4-stats-probability-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "descriptive-stats-sampling",
      question:
        "A dataset has lower quartile {{Q_1 = 15}} and upper quartile {{Q_3 = 27}}. Calculate the **lower outlier fence** {{Q_1 - 1.5 * IQR}}.",
      answer: { type: "number", value: -3 },
      hints: [
        "Find {{IQR = Q_3 - Q_1 = 27 - 15}} first, then subtract `1.5 × IQR` from {{Q_1}}.",
      ],
      traps: [
        {
          spec: { type: "number", value: 45 },
          feedback: "That is the **upper** fence {{Q_3 + 1.5 * IQR}} — this question asks for the **lower** fence {{Q_1 - 1.5 * IQR}}.",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "Remember to multiply `IQR = 12` by `1.5` (giving `18`), not `1`!",
        },
      ],
      solution: [
        "{{IQR = Q_3 - Q_1 = 27 - 15 = 12}}.",
        "Lower fence: {{15 - 1.5 * 12 = 15 - 18 = -3}}.",
      ],
    },
    {
      id: "4-stats-probability-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Find",
      guideRef: "descriptive-stats-sampling",
      question:
        "A dataset {{X}} has mean `16` and **variance** `9`. Every value is coded using {{Y = 2X + 5}}. Find the exact **standard deviation** of {{Y}}.",
      answer: { type: "number", value: 6 },
      hints: [
        "First find the original standard deviation {{σ_X = sqrt(9)}}.",
        "Adding `+5` does not affect spread; multiplying by `2` multiplies SD by `|2|`.",
      ],
      traps: [
        {
          spec: { type: "number", value: 18 },
          feedback: "You multiplied the **variance** `9` by `2` instead of taking {{sqrt(9) = 3}} first!",
        },
        {
          spec: { type: "number", value: 36 },
          feedback: "`36` is the **variance** of {{Y}}; take the square root to get the standard deviation.",
        },
        {
          spec: { type: "number", value: 11 },
          feedback: "Adding `+5` shifts every value equally and leaves standard deviation unchanged.",
        },
      ],
      solution: [
        "Original standard deviation is {{σ_X = sqrt(9) = 3}}.",
        "Under {{Y = 2X + 5}}, {{σ_Y = |2| * 3 = 6}}.",
      ],
    },
    {
      id: "4-stats-probability-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "descriptive-stats-sampling",
      question:
        "Five measurements satisfy {{sum x_i = 35}} and {{sum x_i^2 = 265}}. Calculate the exact population **variance** {{σ^2}}.",
      answer: { type: "number", value: 4 },
      hints: [
        "Find the mean {{μ = 35 / 5 = 7}}.",
        "Use {{σ^2 = (sum x_i^2) / n - μ^2}}.",
      ],
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "`2` is the standard deviation {{σ}} — the question asks for the **variance** {{σ^2}}.",
        },
      ],
      solution: [
        "{{μ = 35 / 5 = 7}}.",
        "{{σ^2 = 265 / 5 - 7^2 = 53 - 49 = 4}}.",
      ],
    },
    {
      id: "4-stats-probability-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Find",
      guideRef: "probability-conditional-bayes",
      question:
        "Events {{A}} and {{B}} satisfy {{P(A) = 0.6}}, {{P(B) = 0.5}}, and {{P(A ∪ B) = 0.8}}. Find {{P(A ∩ B)}} as a decimal.",
      answer: { type: "number", value: 0.3 },
      hints: [
        "Rearrange {{P(A ∪ B) = P(A) + P(B) - P(A ∩ B)}} for {{P(A ∩ B)}}.",
      ],
      solution: [
        "{{P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.6 + 0.5 - 0.8 = 0.3}}.",
      ],
    },
    {
      id: "4-stats-probability-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "probability-conditional-bayes",
      question:
        "Given {{P(A) = 0.5}}, {{P(B) = 0.4}}, and {{P(A ∩ B) = 0.2}}, calculate {{P(B | A)}} as a decimal.",
      answer: { type: "number", value: 0.4 },
      hints: [
        "Apply {{P(B | A) = P(A ∩ B) / P(A)}}.",
        "Remember: the event after the bar (`A`) goes in the denominator.",
      ],
      traps: [
        {
          spec: { type: "number", value: 0.5 },
          feedback: "That is {{P(A | B) = 0.2 / 0.4}} — check which event sits after the conditional bar!",
        },
      ],
      solution: [
        "{{P(B | A) = P(A ∩ B) / P(A) = 0.2 / 0.5 = 0.4}}.",
      ],
    },
    {
      id: "4-stats-probability-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "discrete-binomial-normal",
      question:
        "A random variable follows {{X ~ B(16, 0.25)}}. Calculate the exact **variance** {{Var(X)}}.",
      answer: { type: "number", value: 3 },
      hints: [
        "Use {{Var(X) = np(1 - p)}} with {{n = 16}} and {{p = 0.25}}.",
      ],
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "`4` is the mean {{np}} — multiply by {{1 - p = 0.75}} to get the variance!",
        },
      ],
      solution: [
        "{{Var(X) = np(1 - p) = 16 * 0.25 * 0.75 = 4 * 0.75 = 3}}.",
      ],
    },
    {
      id: "4-stats-probability-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "discrete-binomial-normal",
      question:
        "Test scores follow {{X ~ N(70, 25)}}. Calculate the exact standardised **{{z}}-score** for an observation of `82`.",
      answer: { type: "number", value: 2.4 },
      hints: [
        "In {{N(70, 25)}}, `25` is the **variance** {{σ^2}}, so {{σ = 5}}.",
        "Evaluate {{z = (x - μ) / σ = (82 - 70) / 5}}.",
      ],
      traps: [
        {
          spec: { type: "number", value: 0.48 },
          feedback: "You divided by the variance `25` instead of the standard deviation {{σ = sqrt(25) = 5}}!",
        },
      ],
      solution: [
        "Here {{μ = 70}} and {{σ = sqrt(25) = 5}}.",
        "{{z = (82 - 70) / 5 = 12 / 5 = 2.4}}.",
      ],
    },
    {
      id: "4-stats-probability-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "probability-conditional-bayes",
      question:
        "[HL] Factory `A` supplies `60%` of relays (`2%` faulty) and Factory `B` supplies `40%` (`5%` faulty). Given a randomly selected relay is faulty, find the exact probability it came from Factory `A` (as a simplified fraction).",
      answer: { type: "fraction", n: 3, d: 8, simplest: true },
      hints: [
        "Find the two faulty branches: {{0.60 * 0.02 = 0.012}} and {{0.40 * 0.05 = 0.020}}.",
        "Divide the Factory `A` faulty branch by their sum {{0.012 + 0.020}}.",
      ],
      traps: [
        {
          spec: { type: "fraction", n: 5, d: 8, simplest: true },
          feedback: "`5/8` is the probability it came from Factory `B`, not Factory `A`.",
        },
      ],
      solution: [
        "{{P(A ∩ F) = 0.60 * 0.02 = 0.012}} and {{P(B ∩ F) = 0.40 * 0.05 = 0.020}}.",
        "{{P(F) = 0.012 + 0.020 = 0.032}}.",
        "{{P(A | F) = 0.012 / 0.032 = 12 / 32 = 3/8}}.",
      ],
    },
    {
      id: "4-stats-probability-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "continuous-rvs-pdf-cdf-hl",
      question:
        "[HL] A continuous random variable {{X}} has PDF {{f(x) = kx}} for {{0 <= x <= 6}}, and `0` otherwise. Find the exact value of {{k}} as a simplified fraction.",
      answer: { type: "fraction", n: 1, d: 18, simplest: true },
      hints: [
        "Set the total area under the PDF equal to `1`: {{∫_0^6 kx dx = 1}}.",
        "Evaluate {{[k x^2 / 2]_0^6 = 18k = 1}}.",
      ],
      traps: [
        {
          spec: { type: "fraction", n: 1, d: 36, simplest: true },
          feedback: "Remember the antiderivative of {{x}} is {{x^2 / 2}}, not {{x^2}}!",
        },
      ],
      solution: [
        "{{∫_0^6 kx dx = [k x^2 / 2]_0^6 = 18k = 1}}.",
        "Therefore {{k = 1/18}}.",
      ],
    },
    {
      id: "4-stats-probability-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "continuous-rvs-pdf-cdf-hl",
      question:
        "[HL] A continuous random variable {{X}} satisfies {{E(X) = 3}} and {{E(X^2) = 14}}. Calculate the exact variance {{Var(X)}}.",
      answer: { type: "number", value: 5 },
      hints: [
        "Use the computational formula {{Var(X) = E(X^2) - [E(X)]^2}}.",
        "Don't forget to square {{E(X) = 3}} before subtracting!",
      ],
      traps: [
        {
          spec: { type: "number", value: 11 },
          feedback: "You computed {{E(X^2) - E(X)}} instead of {{E(X^2) - [E(X)]^2}}!",
        },
      ],
      solution: [
        "{{Var(X) = E(X^2) - [E(X)]^2 = 14 - 3^2 = 14 - 9 = 5}}.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (EXACTLY 2 PAPERS: p1 Non-GDC × 15, p2 GDC/HL × 15)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER 1: NON-GDC EXACT METHODS (15 Qs: 10 short + 5 written)
    // -----------------------------------------------------------------------
    {
      id: "4-stats-probability-p1",
      title: "Paper 1 — Non-GDC Exact Methods (SL & HL)",
      level: "SL",
      questions: [
        {
          id: "4-stats-probability-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "descriptive-stats-sampling",
          question:
            "Calculate the exact population **variance** {{σ^2}} of the five numbers `4, 6, 8, 10, 12`.",
          answer: { type: "number", value: 8 },
          hints: [
            "The mean of this symmetric dataset is {{μ = 8}}.",
            "Find the deviations `−4, −2, 0, +2, +4`, square them, sum, and divide by `5`.",
          ],
          solution: [
            "Mean {{μ = (4 + 6 + 8 + 10 + 12)/5 = 8}}.",
            "Squared deviations: {{(-4)^2 + (-2)^2 + 0^2 + 2^2 + 4^2 = 16 + 4 + 0 + 4 + 16 = 40}}.",
            "{{σ^2 = 40 / 5 = 8}}.",
          ],
        },
        {
          id: "4-stats-probability-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "descriptive-stats-sampling",
          question:
            "Six observations have mean `15` and sum of squares {{sum x_i^2 = 1410}}. Find the exact population variance {{σ^2}}.",
          answer: { type: "number", value: 10 },
          hints: [
            "Apply {{σ^2 = (sum x_i^2) / n - μ^2}} with {{n = 6}} and {{μ = 15}}.",
            "Evaluate {{1410 / 6}} and subtract {{15^2 = 225}}.",
          ],
          solution: [
            "{{1410 / 6 = 235}} and {{μ^2 = 15^2 = 225}}.",
            "{{σ^2 = 235 - 225 = 10}}.",
          ],
        },
        {
          id: "4-stats-probability-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "descriptive-stats-sampling",
          question:
            "Every datum {{x_i}} in a sample is transformed by {{y_i = 4 x_i - 9}}. The coded dataset {{Y}} has mean `31` and variance `80`. Find the exact mean {{x̄}} of the original dataset {{X}}.",
          answer: { type: "number", value: 10 },
          hints: [
            "The coded mean obeys the same linear relation: {{ȳ = 4 x̄ - 9}}.",
            "Solve {{4 x̄ - 9 = 31}} for {{x̄}}.",
          ],
          solution: [
            "Set {{4 x̄ - 9 = 31}} ⇒ {{4 x̄ = 40}} ⇒ {{x̄ = 10}}.",
          ],
        },
        {
          id: "4-stats-probability-p1-q04",
          kind: "written",
          marks: 4,
          difficulty: "core",
          level: "SL",
          commandTerm: "Justify",
          guideRef: "descriptive-stats-sampling",
          question:
            "A set of `60` exam scores has {{Q_1 = 34}}, median `41`, {{Q_3 = 50}}, and highest score `78`.\n(a) Determine, with mathematical justification, whether `78` is an outlier. **[2]**\n(b) Every student is awarded `6` bonus marks (`Y = X + 6`). State the new interquartile range and the new upper outlier fence. **[2]**",
          hints: [
            "For (a), compute {{IQR = Q_3 - Q_1}} and then the upper fence {{Q_3 + 1.5 * IQR}}.",
            "For (b), recall that adding a constant `+6` shifts all quartiles and fences by `+6` while leaving the IQR unchanged.",
          ],
          modelAnswer:
            "(a) First, the interquartile range is `50 − 34 = 16`. The upper fence is `50 + 1.5 × 16 = 50 + 24 = 74`. Since `78 > 74`, the observation exceeds the boundary and is therefore an outlier.\n(b) Adding six shifts every quartile upward equally, so the interquartile range remains unchanged at `16`, while the new upper boundary shifts up by six to `74 + 6 = 80` marks.",
          markScheme: [
            {
              point: "M1: Correct IQR = 50 − 34 = 16 and upper fence calculation 50 + 1.5(16) = 74.",
              keywords: ["16", "74"],
            },
            {
              point: "R1: Explicit comparison 78 > 74 leading to the conclusion that it is an outlier.",
              keywords: ["78 > 74", "exceeds", "greater than 74"],
            },
            {
              point: "A1: New IQR remains unchanged at 16.",
              keywords: ["remains", "unchanged", "still 16"],
            },
            {
              point: "A1: New upper fence equals 80.",
              keywords: ["= 80", "80"],
            },
          ],
        },
        {
          id: "4-stats-probability-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "probability-conditional-bayes",
          question:
            "Events {{A}} and {{B}} satisfy {{P(A) = 0.4}}, {{P(B) = 0.5}}, and {{P(A | B) = 0.3}}. Find {{P(A ∪ B)}} as an exact decimal.",
          answer: { type: "number", value: 0.75 },
          hints: [
            "First find {{P(A ∩ B) = P(B) * P(A | B)}}.",
            "Substitute into {{P(A ∪ B) = P(A) + P(B) - P(A ∩ B)}}.",
          ],
          traps: [
            {
              spec: { type: "number", value: 0.78 },
              feedback: "You used {{P(A) * P(A | B)}} instead of {{P(B) * P(A | B)}} to find {{P(A ∩ B)}}.",
            },
          ],
          solution: [
            "{{P(A ∩ B) = P(B) * P(A | B) = 0.5 * 0.3 = 0.15}}.",
            "{{P(A ∪ B) = 0.4 + 0.5 - 0.15 = 0.75}}.",
          ],
        },
        {
          id: "4-stats-probability-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "probability-conditional-bayes",
          question:
            "A jar contains `5` red and `3` white marbles. Two marbles are drawn sequentially without replacement. Find the exact probability that **at least one** marble is red (as a simplified fraction).",
          answer: { type: "fraction", n: 25, d: 28, simplest: true },
          hints: [
            "Use the complement: `P(at least one red) = 1 − P(both white)`.",
            "Compute {{P(W_1 W_2) = (3/8) * (2/7)}} and subtract from `1`.",
          ],
          traps: [
            {
              spec: { type: "fraction", n: 3, d: 28, simplest: true },
              feedback: "`3/28` is the probability that **both are white** — subtract from `1` for at least one red!",
            },
          ],
          solution: [
            "{{P(" + "\"both white\"" + ") = (3/8)(2/7) = 6/56 = 3/28}}.",
            "{{P(" + "\"at least one red\"" + ") = 1 - 3/28 = 25/28}}.",
          ],
        },
        {
          id: "4-stats-probability-p1-q07",
          kind: "written",
          marks: 5,
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "probability-conditional-bayes",
          question:
            "Two events {{E}} and {{F}} satisfy {{P(E) = 0.4}}, {{P(F) = 0.5}}, and {{P(E' ∩ F') = 0.3}}.\n(a) Find {{P(E ∪ F)}} and {{P(E ∩ F)}}. **[2]**\n(b) Determine, showing clear working, whether {{E}} and {{F}} are independent. **[2]**\n(c) Find {{P(E | F')}}. **[1]**",
          hints: [
            "For (a), notice {{E' ∩ F'}} is the region outside both circles on a Venn diagram, so {{P(E ∪ F) = 1 - 0.3}}.",
            "For (b), compare {{P(E ∩ F)}} with {{P(E) * P(F)}}.",
            "For (c), compute {{P(E ∩ F') / P(F')}} (or use independence!).",
          ],
          modelAnswer:
            "(a) The complement of neither event occurring gives the union: `1 − 0.3 = 0.7`. Rearranging the addition formula gives the intersection `0.4 + 0.5 − 0.7 = 0.2`.\n(b) Multiplying the individual probabilities yields `0.4 × 0.5 = 0.2`. Because this product matches the intersection `0.2`, the two events are independent.\n(c) The crescent `E` without `F` has probability `0.4 − 0.2 = 0.2`, and `P(F') = 1 − 0.5 = 0.5`, so dividing gives `0.2 / 0.5 = 0.4`.",
          markScheme: [
            {
              point: "A1: Union P(E ∪ F) = 1 − 0.3 = 0.7.",
              keywords: ["0.7"],
            },
            {
              point: "A1: Intersection P(E ∩ F) = 0.4 + 0.5 − 0.7 = 0.2.",
              keywords: ["0.2"],
            },
            {
              point: "M1: Computes product P(E) × P(F) = 0.4 × 0.5 = 0.2.",
              keywords: ["0.4 × 0.5", "0.4 * 0.5", "product"],
            },
            {
              point: "R1: Concludes events are independent because P(E ∩ F) = P(E)P(F).",
              keywords: ["matches", "independent"],
            },
            {
              point: "A1: Conditional probability P(E | F') = 0.2 / 0.5 = 0.4.",
              keywords: ["0.2 / 0.5", "0.4"],
            },
          ],
        },
        {
          id: "4-stats-probability-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "discrete-binomial-normal",
          question:
            "A discrete random variable {{X}} takes values `0, 2, 5` with probabilities {{p}}, `0.5`, and {{0.5 - p}} respectively. Given {{E(X) = 2.5}}, find the exact value of {{p}}.",
          answer: { type: "number", value: 0.2 },
          hints: [
            "Write {{E(X) = 0(p) + 2(0.5) + 5(0.5 - p) = 2.5}}.",
            "Expand carefully to {{1 + 2.5 - 5p = 2.5}} and solve for {{p}}.",
          ],
          solution: [
            "{{E(X) = 0(p) + 2(0.5) + 5(0.5 - p) = 1 + 2.5 - 5p = 3.5 - 5p}}.",
            "Set {{3.5 - 5p = 2.5}} ⇒ {{5p = 1}} ⇒ {{p = 0.2}}.",
          ],
        },
        {
          id: "4-stats-probability-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "discrete-binomial-normal",
          question:
            "A Binomial variable satisfies {{X ~ B(3, p)}} and {{P(X = 0) = 8/27}}. Find the exact value of {{P(X = 2)}} as a simplified fraction.",
          answer: { type: "fraction", n: 2, d: 9, simplest: true },
          hints: [
            "Use {{P(X = 0) = (1 - p)^3 = 8/27}} to find {{1 - p = 2/3}}, hence {{p = 1/3}}.",
            "Now evaluate {{P(X = 2) = 3C2 * (1/3)^2 * (2/3)^1}}.",
          ],
          traps: [
            {
              spec: { type: "fraction", n: 2, d: 27, simplest: true },
              feedback: "You forgot to multiply by the binomial coefficient {{3C2 = 3}}!",
            },
          ],
          solution: [
            "{{(1 - p)^3 = 8/27}} ⇒ {{1 - p = 2/3}} ⇒ {{p = 1/3}}.",
            "{{P(X = 2) = 3 * (1/3)^2 * (2/3) = 6/27 = 2/9}}.",
          ],
        },
        {
          id: "4-stats-probability-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "discrete-binomial-normal",
          question:
            "A Normal variable satisfies {{X ~ N(40, σ^2)}} and {{P(X < 32) = 0.15}}. Without a calculator, deduce the exact value of {{P(32 < X < 48)}}.",
          answer: { type: "number", value: 0.7 },
          hints: [
            "Note that `32 = 40 − 8` and `48 = 40 + 8` are symmetric around the mean `40`.",
            "Both outer tails have area `0.15`, so subtract `2 × 0.15` from `1`.",
          ],
          solution: [
            "By symmetry about {{μ = 40}}, {{P(X > 48) = P(X < 32) = 0.15}}.",
            "{{P(32 < X < 48) = 1 - 0.15 - 0.15 = 0.70}}.",
          ],
        },
        {
          id: "4-stats-probability-p1-q11",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "probability-conditional-bayes",
          question:
            "[HL] Three urns {{U_1, U_2, U_3}} are selected with probabilities {{1/2}}, {{1/3}}, and {{1/6}} respectively. Urn {{U_1}} holds `1` gold and `3` silver coins; {{U_2}} holds `2` gold and `2` silver coins; {{U_3}} holds `3` gold and `1` silver coin. One urn is chosen and a single coin is drawn.\n(a) Calculate the exact probability that the coin is gold ({{G}}). **[2]**\n(b) Given that the coin is gold, find the exact probability it came from {{U_2}}. **[2]**\n(c) Given that the coin is silver ({{G'}}), find the exact probability it came from {{U_3}}. **[2]**",
          hints: [
            "For (a), sum the three gold branches: {{(1/2)(1/4) + (1/3)(1/2) + (1/6)(3/4)}}.",
            "For (b), apply Bayes' theorem: {{P(U_2 ∩ G) / P(G)}}.",
            "For (c), use {{P(G') = 1 - P(G)}} and {{P(U_3 ∩ G') = (1/6)(1/4)}}.",
          ],
          modelAnswer:
            "(a) Summing all three gold branches gives `(1/2)(1/4) + (1/3)(1/2) + (1/6)(3/4) = 1/8 + 1/6 + 1/8 = 1/4 + 1/6 = 5/12`.\n(b) Using Bayes' theorem, the conditional probability from the second urn is `(1/6) / (5/12) = 2/5` (`0.4`).\n(c) The probability of drawing silver is the complement `1 − 5/12 = 7/12`. The branch for the third urn and silver is `(1/6)(1/4) = 1/24`. Dividing yields `(1/24) / (7/12) = 1/14`.",
          markScheme: [
            {
              point: "M1: Applies Law of Total Probability: (1/2)(1/4) + (1/3)(1/2) + (1/6)(3/4).",
              keywords: ["1/8", "1/6"],
            },
            {
              point: "A1: Exact total probability P(G) = 5/12.",
              keywords: ["5/12"],
            },
            {
              point: "M1: Sets up Bayes fraction (1/6) / (5/12).",
              keywords: ["(1/6) / (5/12)", "bayes"],
            },
            {
              point: "A1: Simplifies P(U₂ | G) = 2/5.",
              keywords: ["= 2/5", "2/5", "0.4"],
            },
            {
              point: "M1: Finds P(G') = 7/12 and P(U₃ ∩ G') = 1/24.",
              keywords: ["7/12", "1/24"],
            },
            {
              point: "A1: Exact simplified fraction P(U₃ | G') = 1/14.",
              keywords: ["1/14"],
            },
          ],
          markbands: [
            {
              band: "0–2 marks",
              marks: [0, 2],
              descriptor: "Sets up partial tree branches or finds P(G) = 5/12 with arithmetic errors in posterior ratios.",
            },
            {
              band: "3–4 marks",
              marks: [3, 4],
              descriptor: "Correctly obtains P(G) = 5/12 and applies Bayes' theorem accurately to one posterior probability.",
            },
            {
              band: "5–6 marks",
              marks: [5, 6],
              descriptor: "Full, exact fractional derivations of P(G) = 5/12, P(U₂ | G) = 2/5, and P(U₃ | G') = 1/14.",
            },
          ],
        },
        {
          id: "4-stats-probability-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "continuous-rvs-pdf-cdf-hl",
          question:
            "[HL] A continuous RV {{X}} has PDF {{f(x) = k(4 - x^2)}} for {{0 <= x <= 2}}, and `0` otherwise. Find the exact constant {{k}} as a simplified fraction.",
          answer: { type: "fraction", n: 3, d: 16, simplest: true },
          hints: [
            "Set {{∫_0^2 k(4 - x^2) dx = 1}}.",
            "Integrate term-by-term: {{[4x - x^3 / 3]_0^2 = 8 - 8/3 = 16/3}}.",
          ],
          solution: [
            "{{∫_0^2 k(4 - x^2) dx = k[4x - x^3 / 3]_0^2 = k(8 - 8/3) = (16/3)k = 1}}.",
            "Hence {{k = 3/16}}.",
          ],
        },
        {
          id: "4-stats-probability-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "continuous-rvs-pdf-cdf-hl",
          question:
            "[HL] Continuing with the same continuous PDF {{f(x) = k(4 - x^2)}} for {{0 <= x <= 2}} (`0` otherwise, using your normalised value of {{k}}), calculate the exact expected value {{E(X)}} as a simplified fraction.",
          answer: { type: "fraction", n: 3, d: 4, simplest: true },
          hints: [
            "Write {{E(X) = (3/16) ∫_0^2 x(4 - x^2) dx = (3/16) ∫_0^2 (4x - x^3) dx}}.",
            "Evaluate {{[2 x^2 - x^4 / 4]_0^2 = 8 - 4 = 4}}, then multiply by `3/16`.",
          ],
          solution: [
            "{{E(X) = (3/16) ∫_0^2 (4x - x^3) dx = (3/16) [2 x^2 - x^4 / 4]_0^2}}.",
            "{{= (3/16)(8 - 4) = 12/16 = 3/4}}.",
          ],
        },
        {
          id: "4-stats-probability-p1-q14",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "HL",
          commandTerm: "Show that",
          guideRef: "continuous-rvs-pdf-cdf-hl",
          question:
            "[HL] A continuous random variable {{X}} has PDF {{f(x) = k x(3 - x)}} for {{0 <= x <= 3}}, and `0` otherwise.\n(a) Show that {{k = 2/9}}. **[2]**\n(b) By symmetry, state the exact mode and expected value {{E(X)}}. **[1]**\n(c) Calculate exact values of {{E(X^2)}} and {{Var(X)}}. **[3]**",
          hints: [
            "For (a), expand {{3x - x^2}}, integrate from `0` to `3`, and equate to `1` — do NOT substitute `k = 2/9` first!",
            "For (b), the parabola {{x(3 - x)}} has roots at `0` and `3`, so its axis of symmetry sits at the midpoint.",
            "For (c), compute {{E(X^2) = (2/9) ∫_0^3 (3 x^3 - x^4) dx}}, then subtract {{[E(X)]^2}}.",
          ],
          modelAnswer:
            "(a) Setting the total area to unity: `k ∫₀³ (3x − x²) dx = k [3x²/2 − x³/3]₀³ = k (27/2 − 9) = (9/2)k = 1`, which gives `k = 2/9`.\n(b) The parabolic arch is symmetric about its midpoint, so both the mode and mean equal `3/2` (`1.5`).\n(c) For the second moment, `(2/9) ∫₀³ (3x³ − x⁴) dx = (2/9) [3x⁴/4 − x⁵/5]₀³ = (2/9)(243/4 − 243/5) = (2/9)(243/20) = 27/10`. Subtracting the mean squared gives `27/10 − (3/2)² = 27/10 − 9/4 = 9/20` (`0.45`).",
          markScheme: [
            {
              point: "M1: Sets up ∫₀³ k(3x − x²) dx = 1 and integrates to k[3x²/2 − x³/3]₀³.",
              keywords: ["3x²/2", "x³/3", "27/2"],
            },
            {
              point: "A1: Obtains (9/2)k = 1 leading cleanly to k = 2/9.",
              keywords: ["9/2", "2/9"],
            },
            {
              point: "A1: Correctly states mode = E(X) = 3/2 (1.5).",
              keywords: ["3/2", "1.5"],
            },
            {
              point: "M1: Integrates (2/9) ∫₀³ (3x³ − x⁴) dx to (2/9)[3x⁴/4 − x⁵/5]₀³.",
              keywords: ["3x⁴/4", "243/4", "243/20"],
            },
            {
              point: "A1: Evaluates E(X²) = 27/10 (2.7).",
              keywords: ["27/10", "2.7"],
            },
            {
              point: "A1: Computes Var(X) = 27/10 − 9/4 = 9/20 (0.45).",
              keywords: ["9/20", "0.45"],
            },
          ],
          markbands: [
            {
              band: "0–2 marks",
              marks: [0, 2],
              descriptor: "Shows k = 2/9 or states the symmetric mean 3/2 without completing E(X²).",
            },
            {
              band: "3–4 marks",
              marks: [3, 4],
              descriptor: "Completes (a) and (b) cleanly and sets up E(X²) with minor integration/arithmetic slips.",
            },
            {
              band: "5–6 marks",
              marks: [5, 6],
              descriptor: "Complete, rigorous exact derivation of k = 2/9, symmetric mean 3/2, E(X²) = 27/10, and Var(X) = 9/20.",
            },
          ],
        },
        {
          id: "4-stats-probability-p1-q15",
          kind: "written",
          marks: 7,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Find",
          guideRef: "continuous-rvs-pdf-cdf-hl",
          question:
            "[HL] A continuous random variable {{X}} has piecewise PDF {{f(x) = (1/2)x}} for {{0 <= x <= 1}}, {{f(x) = (1/6)(4 - x)}} for {{1 < x <= 4}}, and `0` otherwise.\n(a) State the mode of {{X}} and find the cumulative distribution function {{F(x)}} on {{0 <= x <= 4}}. **[3]**\n(b) Find the exact median {{m}} of {{X}}. **[2]**\n(c) Calculate exact values of {{E(X)}} and {{E(6X - 4)}}. **[2]**",
          hints: [
            "Check continuity at `x = 1`: both pieces equal `1/2`, forming a triangle peaking at `x = 1`.",
            "On `[0, 1]`, {{F(x) = x^2 / 4}}, so {{F(1) = 1/4 < 0.5}} — hence the median lies in `(1, 4]`!",
            "For `(1, 4]`, integrating from the right tail (`1 − ∫_x^4 f(t) dt`) gives {{F(x) = 1 - (4 - x)^2 / 12}} instantly!",
          ],
          modelAnswer:
            "(a) The triangular density peaks at the join `x = 1` (height `1/2`), so the mode is `1`. On `[0, 1]`, integrating gives `F(x) = x²/4`. On `(1, 4]`, accumulating from `F(1) = 1/4` gives `F(x) = 1/4 + ∫₁ˣ (1/6)(4 − t) dt = 1 − (4 − x)²/12` (equivalently `(2/3)x − x²/12 − 1/3`), with `0` below `0` and `1` above `4`.\n(b) Since `F(1) = 1/4 < 1/2`, the median sits in `(1, 4]`. Setting `1 − (4 − m)²/12 = 1/2` gives `(4 − m)² = 6`, so `4 − m = √6` (taking the root inside `(1, 4]`) and `m = 4 − √6`.\n(c) Splitting the expectation integral: `∫₀¹ (1/2)x² dx = 1/6`, and `(1/6) ∫₁⁴ (4x − x²) dx = (1/6)[2x² − x³/3]₁⁴ = (1/6)(30 − 21) = 3/2`. Summing gives `E(X) = 1/6 + 3/2 = 5/3`. Finally, by linearity `6(5/3) − 4 = 10 − 4 = 6`.",
          markScheme: [
            {
              point: "A1: Identifies mode = 1.",
              keywords: ["mode is 1", "peaks at"],
            },
            {
              point: "A1: Correct CDF piece F(x) = x²/4 on [0, 1].",
              keywords: ["x²/4", "x^2/4"],
            },
            {
              point: "A1: Correct CDF piece F(x) = 1 − (4 − x)²/12 (or 2x/3 − x²/12 − 1/3) on (1, 4].",
              keywords: ["(4 - x)²/12", "(4 - x)^2/12", "x²/12"],
            },
            {
              point: "M1: Recognises F(1) = 1/4 < 1/2 and solves (4 − m)² = 6.",
              keywords: ["1/4", "= 6"],
            },
            {
              point: "A1: Selects root inside (1, 4]: exact median m = 4 − √6.",
              keywords: ["4 - √6", "4 - sqrt(6)"],
            },
            {
              point: "A1: Computes E(X) = 1/6 + 3/2 = 5/3.",
              keywords: ["5/3"],
            },
            {
              point: "A1: Evaluates linear expectation 6(5/3) − 4 = 6.",
              keywords: ["= 6", "10 - 4"],
            },
          ],
          markbands: [
            {
              band: "0–2 marks",
              marks: [0, 2],
              descriptor: "Finds the mode and integrates the first piece correctly without connecting the second interval.",
            },
            {
              band: "3–5 marks",
              marks: [3, 5],
              descriptor: "Constructs the piecewise CDF accurately and completes either the exact median or exact expectation.",
            },
            {
              band: "6–7 marks",
              marks: [6, 7],
              descriptor: "Flawless exact piecewise CDF, median 4 − √6 with domain selection, E(X) = 5/3, and linear expectation 6.",
            },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER 2: GDC APPLICATIONS & HL SYNTHESIS (15 Qs: 10 short + 5 written)
    // -----------------------------------------------------------------------
    {
      id: "4-stats-probability-p2",
      title: "Paper 2 — GDC Applications & HL Synthesis (SL & HL)",
      level: "SL",
      questions: [
        {
          id: "4-stats-probability-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Estimate",
          guideRef: "descriptive-stats-sampling",
          question:
            "Delivery times (minutes) for `40` orders are grouped as: `10 ≤ t < 20` (`4`), `20 ≤ t < 30` (`10`), `30 ≤ t < 40` (`16`), `40 ≤ t < 50` (`10`). Using mid-interval values, estimate the exact **mean** delivery time (in minutes).",
          answer: { type: "number", value: 33 },
          hints: [
            "The four mid-interval values are `15, 25, 35, 45`.",
            "Evaluate {{(4*15 + 10*25 + 16*35 + 10*45) / 40}} (or use TI-Nspire CX One-Variable Statistics with frequency list).",
          ],
          solution: [
            "Midpoints: `15, 25, 35, 45`; total frequency `N = 40`.",
            "{{sum f_i x_i = 60 + 250 + 560 + 450 = 1320}}.",
            "Estimated mean {{= 1320 / 40 = 33}} minutes.",
          ],
        },
        {
          id: "4-stats-probability-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Estimate",
          guideRef: "descriptive-stats-sampling",
          question:
            "For the same grouped delivery-time distribution (midpoints `15, 25, 35, 45` with frequencies `4, 10, 16, 10`), estimate the population **standard deviation** `σ` correct to `3` significant figures.",
          answer: { type: "number", value: 9.27, tolerance: 0.02 },
          hints: [
            "Enter midpoints and frequencies into TI-Nspire CX One-Variable Statistics and read **`σx`** (NOT `sx`!).",
            "Alternatively compute {{σ^2 = (4*225 + 10*625 + 16*1225 + 10*2025)/40 - 33^2 = 86}}, then take {{sqrt(86)}}.",
          ],
          traps: [
            {
              spec: { type: "number", value: 9.39, tolerance: 0.02 },
              feedback: "`9.39` is the sample SD `sx` (`n − 1` denominator) — IB Maths AA always uses population **`σx`**!",
            },
            {
              spec: { type: "number", value: 86 },
              feedback: "`86` is the estimated **variance** `σ²` — take the square root for standard deviation!",
            },
          ],
          solution: [
            "{{sum f_i x_i^2 = 4(225) + 10(625) + 16(1225) + 10(2025) = 900 + 6250 + 19600 + 20250 = 47000}}.",
            "{{σ^2 = 47000 / 40 - 33^2 = 1175 - 1089 = 86}}.",
            "{{σ = sqrt(86) ≈ 9.2736... ≈ 9.27}} (to `3` s.f.).",
          ],
        },
        {
          id: "4-stats-probability-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "probability-conditional-bayes",
          question:
            "In Singapore, the probability of rain on Monday is `0.3`. If it rains on any day, the probability of rain the next day is `0.6`; if it is dry, the probability of rain the next day is `0.2`. Find the exact probability that it rains on Tuesday.",
          answer: { type: "number", value: 0.32 },
          hints: [
            "Draw a 2-day tree diagram: Monday can be Rain (`0.3`) or Dry (`0.7`).",
            "Sum the two paths ending in Rain on Tuesday: {{0.3(0.6) + 0.7(0.2)}}.",
          ],
          solution: [
            "{{P(" + "\"Rain Tue\"" + ") = P(R_1 ∩ R_2) + P(D_1 ∩ R_2) = 0.3(0.6) + 0.7(0.2)}}.",
            "{{= 0.18 + 0.14 = 0.32}}.",
          ],
        },
        {
          id: "4-stats-probability-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "discrete-binomial-normal",
          question:
            "Let {{X ~ B(18, 0.25)}}. Calculate {{P(X >= 6)}} correct to `3` significant figures.",
          answer: { type: "number", value: 0.283, tolerance: 0.002 },
          hints: [
            "Remember `X ≥ 6` includes `6`: use TI-Nspire CX `binomCdf(18, 0.25, 6, 18)`.",
            "Equivalently, compute `1 − binomCdf(18, 0.25, 0, 5)`.",
          ],
          traps: [
            {
              spec: { type: "number", value: 0.140, tolerance: 0.002 },
              feedback: "That is {{P(X > 6) = P(X >= 7)}} — include `6` for {{P(X >= 6)}}!",
            },
          ],
          solution: [
            "Using TI-Nspire CX: `binomCdf(18, 0.25, 6, 18) = 0.282549...`.",
            "Rounding to `3` s.f. gives `0.283`.",
          ],
        },
        {
          id: "4-stats-probability-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "discrete-binomial-normal",
          question:
            "Let {{X ~ B(14, 0.4)}}. Calculate the conditional probability {{P(X = 7 | X >= 5)}} correct to `3` significant figures.",
          answer: { type: "number", value: 0.218, tolerance: 0.002 },
          hints: [
            "Since `X = 7` is a subset of `X ≥ 5`, {{P(X = 7 | X >= 5) = P(X = 7) / P(X >= 5)}}.",
            "Evaluate `binomPdf(14, 0.4, 7) / binomCdf(14, 0.4, 5, 14)` on your GDC.",
          ],
          solution: [
            "{{P(X = 7) = " + "\"binomPdf\"" + "(14, 0.4, 7) ≈ 0.157432}}.",
            "{{P(X >= 5) = " + "\"binomCdf\"" + "(14, 0.4, 5, 14) ≈ 0.720856}}.",
            "{{P(X = 7 | X >= 5) = 0.157432 / 0.720856 ≈ 0.218396 ≈ 0.218}} (to `3` s.f.).",
          ],
        },
        {
          id: "4-stats-probability-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "discrete-binomial-normal",
          question:
            "Adult heights in a cohort follow {{X ~ N(172, 64)}} (cm). Calculate {{P(165 < X < 182)}} correct to `3` significant figures.",
          answer: { type: "number", value: 0.704, tolerance: 0.002 },
          hints: [
            "Identify {{σ = sqrt(64) = 8}} (NOT `64`!).",
            "Compute `normCdf(165, 182, 172, 8)` on your TI-Nspire CX.",
          ],
          solution: [
            "Here {{μ = 172}} and {{σ = sqrt(64) = 8}}.",
            "`normCdf(165, 182, 172, 8) = 0.703563... ≈ 0.704` (to `3` s.f.).",
          ],
        },
        {
          id: "4-stats-probability-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "discrete-binomial-normal",
          question:
            "Bottle volumes follow {{X ~ N(250, 36)}} (mL). Find the value of {{k}}, correct to `3` significant figures, such that {{P(X < k) = 0.85}}.",
          answer: { type: "number", value: 256, tolerance: 0.5 },
          hints: [
            "Note {{σ = sqrt(36) = 6}} and `0.85` is already a left-tail area.",
            "Evaluate `invNorm(0.85, 250, 6)`.",
          ],
          solution: [
            "With {{μ = 250}} and {{σ = 6}}, `invNorm(0.85, 250, 6) = 256.2186...`.",
            "Rounding to `3` s.f. gives `256` mL.",
          ],
        },
        {
          id: "4-stats-probability-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "discrete-binomial-normal",
          question:
            "Apples have mass {{M ~ N(160, 100)}} (g) and are graded 'large' if {{M > 175}} g. A random pack contains `12` independent apples. Calculate the probability that **at least `3`** apples in the pack are large, correct to `3` significant figures.",
          answer: { type: "number", value: 0.0416, tolerance: 0.0005 },
          hints: [
            "Step 1: Find {{p = P(M > 175) = " + "\"normCdf\"" + "(175, 9E99, 160, 10) ≈ 0.066807}} — store full GDC precision!",
            "Step 2: Model the count of large apples by {{Y ~ B(12, p)}} and compute `binomCdf(12, p, 3, 12)`.",
          ],
          solution: [
            "With {{μ = 160}} and {{σ = 10}}, {{p = P(M > 175) = 0.0668072...}}.",
            "Let {{Y ~ B(12, 0.0668072...)}}.",
            "{{P(Y >= 3) = " + "\"binomCdf\"" + "(12, p, 3, 12) = 0.041586... ≈ 0.0416}} (to `3` s.f.).",
          ],
        },
        {
          id: "4-stats-probability-p2-q09",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "discrete-binomial-normal",
          question:
            "Parcel masses follow {{W ~ N(μ, σ^2)}} (g), where {{P(W < 420) = 0.12}} and {{P(W > 510) = 0.05}}.\n(a) Determine the values of {{μ}} and {{σ}}, each correct to `3` significant figures. **[4]**\n(b) Hence estimate the **interquartile range** (IQR) of parcel masses, correct to `3` significant figures. **[2]**",
          hints: [
            "Find standard normal quantiles: {{z_1 = " + "\"invNorm\"" + "(0.12, 0, 1) ≈ -1.1750}} and {{z_2 = " + "\"invNorm\"" + "(0.95, 0, 1) ≈ +1.6449}}.",
            "Set up simultaneous equations {{420 - μ = -1.1750 σ}} and {{510 - μ = 1.6449 σ}} and subtract to eliminate {{μ}}.",
            "For IQR, use {{Q_3 - Q_1 = 2 * " + "\"invNorm\"" + "(0.75, 0, 1) * σ ≈ 1.3490 σ}}.",
          ],
          modelAnswer:
            "(a) Standardising both tails via the standard Normal inverse gives `z₁ = invNorm(0.12, 0, 1) = −1.17499` and `z₂ = invNorm(0.95, 0, 1) = +1.64485`. Therefore `420 − μ = −1.17499 σ` and `510 − μ = 1.64485 σ`. Subtracting the first equation from the second yields `90 = 2.81984 σ`, so `σ = 31.917 ≈ 31.9` g. Substituting back gives `μ = 420 + 1.17499(31.917) = 457.50 ≈ 458` g.\n(b) Since the quartiles sit at `z = ±0.67449`, the interquartile spread is `2 × 0.67449 × 31.917 = 43.055 ≈ 43.1` g.",
          markScheme: [
            {
              point: "A1: Correct z-scores z₁ ≈ −1.175 and z₂ ≈ +1.645 (using left-tail area 0.95).",
              keywords: ["-1.17", "1.64"],
            },
            {
              point: "M1: Forms simultaneous equations (420 − μ)/σ = z₁ and (510 − μ)/σ = z₂.",
              keywords: ["90 =", "2.819", "2.82"],
            },
            {
              point: "A1: Correct σ ≈ 31.9 g (3 s.f.).",
              keywords: ["31.9"],
            },
            {
              point: "A1: Correct μ ≈ 458 g (3 s.f.).",
              keywords: ["458", "457.5"],
            },
            {
              point: "M1: Uses quartile z = ±0.6745 (or invNorm(0.75, μ, σ) − invNorm(0.25, μ, σ)).",
              keywords: ["0.674", "quartiles"],
            },
            {
              point: "A1: Correct IQR ≈ 43.1 g (3 s.f.).",
              keywords: ["43.1", "43.05"],
            },
          ],
          markbands: [
            {
              band: "0–2 marks",
              marks: [0, 2],
              descriptor: "Finds at least one correct z-score or writes the standardisation equations with sign errors.",
            },
            {
              band: "3–4 marks",
              marks: [3, 4],
              descriptor: "Solves simultaneously for σ ≈ 31.9 and μ ≈ 458 using full intermediate precision.",
            },
            {
              band: "5–6 marks",
              marks: [5, 6],
              descriptor: "Accurate values of σ ≈ 31.9, μ ≈ 458, and IQR ≈ 43.1 g with clear standardisation working.",
            },
          ],
        },
        {
          id: "4-stats-probability-p2-q10",
          kind: "written",
          marks: 5,
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare",
          guideRef: "descriptive-stats-sampling",
          question:
            "(a) A student council wishes to survey attitudes toward a new school canteen menu across `5` year groups. Briefly explain **one** advantage of stratified sampling over convenience sampling in this context. **[2]**\n(b) On a physics lab test, Group `1` (`20` students) had mean `64` and population SD `5`, while Group `2` (`30` students) had mean `74` and population SD `7`. Calculate the combined mean and the combined population standard deviation (to `3` s.f.) of all `50` students. **[3]**",
          hints: [
            "For (a), link **bias** and **proportional subgroup representation** directly to the `5` year groups.",
            "For (b), recover {{sum x^2 = n(σ^2 + μ^2)}} for each group before combining and dividing by `50`!",
          ],
          modelAnswer:
            "(a) Stratified selection guarantees proportional representation from every year cohort and chooses individuals randomly, preventing the strong selection bias inherent when only polling friends or whoever happens to walk past.\n(b) Combined mean is `(20 × 64 + 30 × 74) / 50 = (1280 + 2220) / 50 = 3500 / 50 = 70`. Recovering each sum of squares via `n(σ² + μ²)` gives `20(25 + 4096) = 82420` and `30(49 + 5476) = 165750`, totalling `248170`. Combined variance is `248170 / 50 − 70² = 4963.4 − 4900 = 63.4`, so the combined standard deviation is `√63.4 = 7.9624 ≈ 7.96`.",
          markScheme: [
            {
              point: "R1: Notes proportional representation of every year group.",
              keywords: ["proportional", "representation"],
            },
            {
              point: "R1: Contrasts random selection with selection bias of convenience sampling.",
              keywords: ["bias", "random"],
            },
            {
              point: "A1: Correct combined mean = 3500 / 50 = 70.",
              keywords: ["3500", "70"],
            },
            {
              point: "M1: Recovers ∑x² for both groups (82420 and 165750, total 248170) to find variance 63.4.",
              keywords: ["248170", "63.4"],
            },
            {
              point: "A1: Combined population SD = √63.4 ≈ 7.96 (3 s.f.).",
              keywords: ["7.96"],
            },
          ],
        },
        {
          id: "4-stats-probability-p2-q11",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "probability-conditional-bayes",
          question:
            "[HL] A logistics company dispatches `45%` of parcels through Hub {{H_1}}, `35%` through {{H_2}}, and `20%` through {{H_3}}. Delayed delivery rates are `4%`, `6%`, and `11%` respectively.\n(a) Find the exact probability that a randomly selected parcel is delayed ({{D}}). **[2]**\n(b) Given that a parcel is delayed, calculate {{P(H_3 | D)}} both as an exact fraction and to `3` s.f. **[2]**\n(c) Two parcels are chosen independently from a very large pool of delayed parcels. Find the probability (to `3` s.f.) that **at least one** came from {{H_3}}. **[2]**",
          hints: [
            "For (a), compute {{0.45(0.04) + 0.35(0.06) + 0.20(0.11)}}.",
            "For (b), apply 3-branch Bayes' theorem: {{P(H_3 ∩ D) / P(D)}}.",
            "For (c), use the complement `1 − [1 − P(H₃ | D)]²` with exact unrounded fraction `39/61`!",
          ],
          modelAnswer:
            "(a) Summing the three delayed paths gives `0.45(0.04) + 0.35(0.06) + 0.20(0.11) = 0.018 + 0.021 + 0.022 = 0.061`.\n(b) By Bayes' theorem, `0.022 / 0.061 = 22/61`, which equals `0.361` to three significant figures.\n(c) Using the complement with unrounded probability `1 − 22/61 = 39/61`, the chance that neither came from the third hub is `(39/61)²`, so at least one came from it with probability `1 − (39/61)² = 1 − 1521/3721 = 2200/3721 ≈ 0.591`.",
          markScheme: [
            {
              point: "M1: Sets up 0.45(0.04) + 0.35(0.06) + 0.20(0.11) = 0.018 + 0.021 + 0.022.",
              keywords: ["0.018", "0.021", "0.022"],
            },
            {
              point: "A1: Exact total delay probability P(D) = 0.061.",
              keywords: ["0.061"],
            },
            {
              point: "M1: Applies Bayes' ratio 0.022 / 0.061.",
              keywords: ["0.022 / 0.061", "bayes"],
            },
            {
              point: "A1: Obtains exact 22/61 and 3 s.f. value 0.361.",
              keywords: ["22/61", "0.361"],
            },
            {
              point: "M1: Uses complement 1 − (39/61)² (or 1 − (1 − 0.360656)²).",
              keywords: ["39/61", "complement"],
            },
            {
              point: "A1: Final probability 0.591 (to 3 s.f.).",
              keywords: ["0.591"],
            },
          ],
          markbands: [
            {
              band: "0–2 marks",
              marks: [0, 2],
              descriptor: "Finds P(D) = 0.061 correctly but stalls or reverses the Bayes ratio.",
            },
            {
              band: "3–4 marks",
              marks: [3, 4],
              descriptor: "Completes P(D) = 0.061 and P(H₃ | D) = 22/61 ≈ 0.361 cleanly.",
            },
            {
              band: "5–6 marks",
              marks: [5, 6],
              descriptor: "Full exact and 3 s.f. solutions across all three parts without premature rounding.",
            },
          ],
        },
        {
          id: "4-stats-probability-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "continuous-rvs-pdf-cdf-hl",
          question:
            "[HL] A continuous RV {{X}} has PDF {{f(x) = k x e^(-x)}} for {{0 <= x <= 3}}, and `0` otherwise. Find the value of {{k}} correct to `3` significant figures.",
          answer: { type: "number", value: 1.25, tolerance: 0.01 },
          hints: [
            "Use TI-Nspire CX numerical integration to evaluate {{I = ∫_0^3 x e^(-x) dx}} (exact value {{1 - 4 e^(-3)}}).",
            "Then {{k = 1 / I}}.",
          ],
          solution: [
            "{{∫_0^3 x e^(-x) dx = 1 - 4 e^(-3) ≈ 0.800852}}.",
            "{{k = 1 / 0.800852 ≈ 1.24867 ≈ 1.25}} (to `3` s.f.).",
          ],
        },
        {
          id: "4-stats-probability-p2-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "continuous-rvs-pdf-cdf-hl",
          question:
            "[HL] A component lifetime {{X}} (years) has PDF {{f(x) = 0.5 e^(-0.5 x)}} for {{x >= 0}} (`0` otherwise). Calculate {{P(1 < X < 4)}} correct to `3` significant figures.",
          answer: { type: "number", value: 0.471, tolerance: 0.002 },
          hints: [
            "Integrate the PDF from `1` to `4`: {{P(1 < X < 4) = ∫_1^4 0.5 e^(-0.5 x) dx}}.",
            "The antiderivative is {{-e^(-0.5 x)}}, giving {{e^(-0.5) - e^(-2)}}.",
          ],
          solution: [
            "{{P(1 < X < 4) = [-e^(-0.5 x)]_1^4 = e^(-0.5) - e^(-2) ≈ 0.606531 - 0.135335 = 0.471195}}.",
            "Rounding to `3` s.f. gives `0.471`.",
          ],
        },
        {
          id: "4-stats-probability-p2-q14",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "continuous-rvs-pdf-cdf-hl",
          question:
            "[HL] A continuous random variable {{X}} has PDF {{f(x) = k(1 - e^(-x))}} for {{0 <= x <= 2}}, and `0` otherwise.\n(a) Find {{k}} correct to `3` significant figures, and state the exact **mode** of {{X}}. **[2]**\n(b) Using your GDC, calculate {{E(X)}} and the standard deviation {{SD(X)}}, each correct to `3` significant figures. **[2]**\n(c) Determine the median {{m}} of {{X}} correct to `3` significant figures. **[2]**",
          hints: [
            "For (a), {{∫_0^2 (1 - e^(-x)) dx = 1 + e^(-2) ≈ 1.13534}} → {{k ≈ 0.8808}}. Notice {{f'(x) = k e^(-x) > 0}} everywhere on `[0, 2]`, so where is the peak?",
            "For (b), store `k` in full precision and evaluate {{∫_0^2 x f(x) dx}} and {{∫_0^2 x^2 f(x) dx}} on TI-Nspire CX.",
            "For (c), solve {{k(m + e^(-m) - 1) = 0.5}} graphically or via `nSolve` on `[0, 2]`.",
          ],
          modelAnswer:
            "(a) Integrating over `[0, 2]` gives `k [x + e⁻ˣ]₀² = k(1 + e⁻²) = 1`, so `k = 1/(1 + e⁻²) = 0.88080 ≈ 0.881`. Since `f'(x) = k e⁻ˣ > 0`, the density increases strictly across the domain and peaks at the right endpoint, giving mode `2`.\n(b) Evaluating numerically with full precision: `E(X) = ∫₀² x f(x) dx = 1.2384 ≈ 1.24`, and `E(X²) = ∫₀² x² f(x) dx = 1.7792`. Hence `Var(X) = 1.7792 − 1.2384² = 0.2456` and `SD(X) = √0.2456 = 0.4956 ≈ 0.496`.\n(c) Setting `∫₀ᵐ f(x) dx = k(m + e⁻ᵐ − 1) = 0.5` and solving on `[0, 2]` with GDC `nSolve` gives `m = 1.2933 ≈ 1.29`.",
          markScheme: [
            {
              point: "A1: Correct normalising constant k = 1/(1 + e⁻²) ≈ 0.881.",
              keywords: ["0.881", "0.8808"],
            },
            {
              point: "A1: States mode = 2 (right endpoint, strictly increasing PDF).",
              keywords: ["mode 2", "endpoint"],
            },
            {
              point: "A1: Correct expected value E(X) ≈ 1.24 (3 s.f.).",
              keywords: ["1.24", "1.238"],
            },
            {
              point: "A1: Computes Var(X) = E(X²) − [E(X)]² ≈ 0.2456 and SD(X) ≈ 0.496 (3 s.f.).",
              keywords: ["0.496", "0.4956"],
            },
            {
              point: "M1: Sets up CDF median equation k(m + e⁻ᵐ − 1) = 0.5.",
              keywords: ["= 0.5", "nsolve"],
            },
            {
              point: "A1: Solves for median m ≈ 1.29 (3 s.f.).",
              keywords: ["1.29"],
            },
          ],
          markbands: [
            {
              band: "0–2 marks",
              marks: [0, 2],
              descriptor: "Finds k ≈ 0.881 or identifies the endpoint mode without completing moments or median.",
            },
            {
              band: "3–4 marks",
              marks: [3, 4],
              descriptor: "Correctly evaluates k, mode, and E(X) ≈ 1.24 with minor slips in SD or median equation.",
            },
            {
              band: "5–6 marks",
              marks: [5, 6],
              descriptor: "Accurate 3 s.f. GDC solutions for k ≈ 0.881, mode 2, E(X) ≈ 1.24, SD ≈ 0.496, and median m ≈ 1.29.",
            },
          ],
        },
        {
          id: "4-stats-probability-p2-q15",
          kind: "written",
          marks: 7,
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "discrete-binomial-normal",
          question:
            "Precision steel bolts have lengths {{L ~ N(50.0, 0.25^2)}} (mm). A bolt is **accepted** if {{49.5 <= L <= 50.6}}.\n(a) Calculate the probability that a randomly selected bolt is accepted (to `3` s.f.). **[1]**\n(b) Given that a bolt is accepted, calculate {{P(L > 50.2 | " + "\"accepted\"" + ")}} to `3` s.f. **[2]**\n(c) In a random box of `20` bolts, calculate the probability that **at least `18`** bolts are accepted (to `3` s.f.). **[2]**\n(d) The machine is recalibrated to a new standard deviation {{σ'}} (still with {{μ = 50.0}}) so that `99%` of bolts lie within `50.0 ± 0.5` mm. Find {{σ'}} to `3` s.f. **[2]**",
          hints: [
            "For (a), compute `p = normCdf(49.5, 50.6, 50.0, 0.25)` and store full precision!",
            "For (b), remember the numerator is {{P(50.2 < L <= 50.6)}}, NOT {{P(L > 50.2)}}!",
            "For (c), use {{Y ~ B(20, p)}} with `binomCdf(20, p, 18, 20)`.",
            "For (d), a central `99%` leaves `0.5%` in each tail, so upper left-tail area is `0.995` (`z ≈ 2.5758`).",
          ],
          modelAnswer:
            "(a) Using `normCdf(49.5, 50.6, 50.0, 0.25)` gives acceptance probability `p = 0.969052 ≈ 0.969`.\n(b) Conditioning restricts lengths to `[49.5, 50.6]`, so the numerator is `P(50.2 < L ≤ 50.6) = normCdf(50.2, 50.6, 50.0, 0.25) = 0.203658`. Dividing by `0.969052` gives `0.21016 ≈ 0.210`.\n(c) Modelling accepted bolts by `Y ~ B(20, 0.969052)`, `binomCdf(20, p, 18, 20) = 0.97721 ≈ 0.977`.\n(d) Leaving `0.005` in each tail puts `50.5` at left-tail quantile `invNorm(0.995, 0, 1) = 2.57583`. Solving `0.5 / σ' = 2.57583` gives `σ' = 0.19411 ≈ 0.194` mm.",
          markScheme: [
            {
              point: "A1: Acceptance probability p ≈ 0.969 (0.96905).",
              keywords: ["0.969"],
            },
            {
              point: "M1: Recognises conditional numerator P(50.2 < L ≤ 50.6) ≈ 0.20366.",
              keywords: ["0.203", "50.2 < l"],
            },
            {
              point: "A1: Conditional probability 0.20366 / 0.96905 ≈ 0.210.",
              keywords: ["0.210"],
            },
            {
              point: "M1: Sets up Y ~ B(20, p) and evaluates P(Y ≥ 18).",
              keywords: ["binomcdf", "b(20"],
            },
            {
              point: "A1: Batch probability ≈ 0.977 (3 s.f.).",
              keywords: ["0.977"],
            },
            {
              point: "M1: Uses central 99% quantile z = invNorm(0.995, 0, 1) ≈ 2.5758.",
              keywords: ["0.995", "2.575", "2.576"],
            },
            {
              point: "A1: Recalibrated SD σ' ≈ 0.194 mm (3 s.f.).",
              keywords: ["0.194"],
            },
          ],
          markbands: [
            {
              band: "0–2 marks",
              marks: [0, 2],
              descriptor: "Finds acceptance probability 0.969 and attempts either conditional or Binomial follow-up with errors.",
            },
            {
              band: "3–5 marks",
              marks: [3, 5],
              descriptor: "Accurately completes two of parts (b), (c), (d) with full GDC precision carried forward.",
            },
            {
              band: "6–7 marks",
              marks: [6, 7],
              descriptor: "Complete, accurate 3 s.f. solutions across all four parts including 0.995 two-tailed standardisation.",
            },
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 IB Paper 1/2/3 stretch questions: 4 short + 4 written)
  // =========================================================================
  challenge: [
    {
      id: "4-stats-probability-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "descriptive-stats-sampling",
      question:
        "Group `A` consists of `10` values with mean `12` and population variance `4`. Group `B` consists of `15` values with mean `22` and population variance `9`. Calculate the exact **population variance** of the combined `25` values.",
      answer: { type: "number", value: 31 },
      hints: [
        "First find the combined mean: {{(10*12 + 15*22) / 25 = 18}}.",
        "Recover {{sum x^2 = n(σ^2 + μ^2)}} separately for Group `A` and Group `B`.",
        "Add both sums of squares, divide by `25`, and subtract {{18^2 = 324}}.",
      ],
      traps: [
        {
          spec: { type: "number", value: 7 },
          feedback: "You took the weighted average of the two variances (`(10×4 + 15×9)/25 = 7`), ignoring the extra spread caused by the two group means sitting `10` units apart!",
        },
      ],
      solution: [
        "Combined mean: {{μ = (10*12 + 15*22)/25 = (120 + 330)/25 = 450/25 = 18}}.",
        "Group `A`: {{sum x_A^2 = 10(4 + 12^2) = 10(148) = 1480}}.",
        "Group `B`: {{sum x_B^2 = 15(9 + 22^2) = 15(493) = 7395}}.",
        "Combined {{sum x^2 = 1480 + 7395 = 8875}}.",
        "Combined variance {{= 8875 / 25 - 18^2 = 355 - 324 = 31}}.",
      ],
    },
    {
      id: "4-stats-probability-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Find",
      guideRef: "probability-conditional-bayes",
      question:
        "[HL] A box holds `3` fair coins and `1` double-headed coin (`P(H) = 1`). One coin is selected at random and tossed `4` times; all `4` tosses land heads (`HHHH`). Find the exact probability that the **double-headed** coin was selected (as a simplified fraction).",
      answer: { type: "fraction", n: 16, d: 19, simplest: true },
      hints: [
        "Priors: {{P(" + "\"Fair\"" + ") = 3/4}} and {{P(" + "\"Double\"" + ") = 1/4}}.",
        "Likelihoods: {{P(HHHH | " + "\"Fair\"" + ") = (1/2)^4 = 1/16}} and {{P(HHHH | " + "\"Double\"" + ") = 1}}.",
        "Apply Bayes' theorem and clear the denominator `64`.",
      ],
      solution: [
        "{{P(F ∩ HHHH) = (3/4)(1/16) = 3/64}} and {{P(D ∩ HHHH) = (1/4)(1) = 16/64}}.",
        "{{P(HHHH) = 3/64 + 16/64 = 19/64}}.",
        "{{P(D | HHHH) = (16/64) / (19/64) = 16/19}}.",
      ],
    },
    {
      id: "4-stats-probability-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Find",
      guideRef: "discrete-binomial-normal",
      question:
        "A Binomial random variable {{X ~ B(10, p)}} (with {{0 < p < 1}}) satisfies {{P(X = 4) = P(X = 5)}}. Find the exact value of {{p}} as a simplified fraction.",
      answer: { type: "fraction", n: 5, d: 11, simplest: true },
      hints: [
        "Write out both probabilities: {{10C4 * p^4 (1 - p)^6 = 10C5 * p^5 (1 - p)^5}}.",
        "Cancel common factors {{p^4 (1 - p)^5}} (valid since `0 < p < 1`) to get a linear equation in {{p}}!",
      ],
      solution: [
        "{{210 p^4 (1 - p)^6 = 252 p^5 (1 - p)^5}}.",
        "Divide both sides by {{42 p^4 (1 - p)^5}}: {{5(1 - p) = 6p}}.",
        "{{5 = 11p}} ⇒ {{p = 5/11}}.",
      ],
    },
    {
      id: "4-stats-probability-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "continuous-rvs-pdf-cdf-hl",
      question:
        "[HL] A continuous random variable {{X}} has linear PDF {{f(x) = a x + b}} for {{0 <= x <= 2}} (`0` otherwise) and expected value {{E(X) = 7/6}}. Determine the exact value of {{a}} as a simplified fraction.",
      answer: { type: "fraction", n: 1, d: 4, simplest: true },
      hints: [
        "Condition 1 ({{∫_0^2 (ax + b) dx = 1}}) gives {{2a + 2b = 1}}.",
        "Condition 2 ({{∫_0^2 (a x^2 + b x) dx = 7/6}}) gives {{(8/3)a + 2b = 7/6}}.",
        "Subtract the first equation from the second to eliminate {{2b}} immediately!",
      ],
      solution: [
        "{{∫_0^2 (ax + b) dx = [a x^2 / 2 + bx]_0^2 = 2a + 2b = 1}}.",
        "{{E(X) = ∫_0^2 (a x^2 + bx) dx = [a x^3 / 3 + b x^2 / 2]_0^2 = (8/3)a + 2b = 7/6}}.",
        "Subtracting gives {{(2/3)a = 1/6}} ⇒ {{a = 1/4}} (and {{b = 1/4}}, confirming {{f(x) >= 0}} on `[0, 2]`).",
      ],
    },
    {
      id: "4-stats-probability-ch-q05",
      kind: "written",
      marks: 6,
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Solve",
      guideRef: "probability-conditional-bayes",
      question:
        "A bag contains {{n}} red counters and `4` blue counters (where {{n >= 2}} is an integer). Two counters are drawn sequentially without replacement, and the probability that they are **different colours** is {{16/33}}.\n(a) Show that {{2 n^2 - 19n + 24 = 0}} and hence find the value of {{n}}. **[4]**\n(b) Using your value of {{n}}, find the exact conditional probability that both counters are red, **given** that both counters are the same colour. **[2]**",
      hints: [
        "For (a), remember BOTH orders give different colours: {{P(RB) + P(BR) = 2 * (n/(n+4)) * (4/(n+3)) = 16/33}}.",
        "Cross-multiply, factorise {{2 n^2 - 19n + 24 = (2n - 3)(n - 8) = 0}}, and reject the non-integer root!",
        "For (b), compute {{P(RR) / [P(RR) + P(BB)]}} with `8` red and `4` blue counters.",
      ],
      modelAnswer:
        "(a) Both orders `RB` and `BR` yield opposite colours, giving `2 · [n/(n + 4)] · [4/(n + 3)] = 8n / [(n + 4)(n + 3)] = 16/33`. Dividing by `8` leaves `n / (n² + 7n + 12) = 2/33`, so `33n = 2n² + 14n + 24`, rearranging to `2n² − 19n + 24 = 0`. Factorising gives `(2n − 3)(n − 8) = 0`, yielding `n = 3/2` or `n = 8`. Since `n` must be an integer, reject `3/2`, leaving `n = 8`.\n(b) With `8` red and `4` blue (`12` total), `P(RR) = (8/12)(7/11) = 56/132` and `P(BB) = (4/12)(3/11) = 12/132`. Conditioning on matching colours gives `56 / (56 + 12) = 56/68 = 14/17`.",
      markScheme: [
        {
          point: "M1: Sets up 2 · [n/(n+4)] · [4/(n+3)] = 16/33 (including factor of 2 for both orders).",
          keywords: ["8n", "n + 3"],
        },
        {
          point: "A1: Cross-multiplies cleanly to 33n = 2n² + 14n + 24, obtaining 2n² − 19n + 24 = 0.",
          keywords: ["33n", "14n + 24"],
        },
        {
          point: "M1: Factorises as (2n − 3)(n − 8) = 0 (or uses quadratic formula).",
          keywords: ["2n - 3", "n - 8", "3/2"],
        },
        {
          point: "A1: Rejects non-integer 3/2 and concludes n = 8.",
          keywords: ["reject", "n = 8"],
        },
        {
          point: "M1: Computes P(RR) = 56/132 and P(BB) = 12/132.",
          keywords: ["56/132", "12/132", "56/68"],
        },
        {
          point: "A1: Simplifies conditional probability to 14/17.",
          keywords: ["14/17"],
        },
      ],
      markbands: [
        {
          band: "0–2 marks",
          marks: [0, 2],
          descriptor: "Forms the without-replacement probability expression (possibly omitting the factor of 2).",
        },
        {
          band: "3–4 marks",
          marks: [3, 4],
          descriptor: "Derives 2n² − 19n + 24 = 0 cleanly and identifies n = 8 by rejecting 3/2.",
        },
        {
          band: "5–6 marks",
          marks: [5, 6],
          descriptor: "Complete algebraic derivation of n = 8 and exact conditional fraction 14/17.",
        },
      ],
    },
    {
      id: "4-stats-probability-ch-q06",
      kind: "written",
      marks: 7,
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Determine",
      guideRef: "discrete-binomial-normal",
      question:
        "An automatic espresso dispenser pours volumes {{V ~ N(250, σ^2)}} (mL). Exactly `5%` of cups overflow a `260` mL rim.\n(a) Find {{σ}} correct to `3` significant figures. **[2]**\n(b) A customer complains if their cup receives less than `242` mL. Calculate the probability of a complaint on a single cup (to `3` s.f.). **[2]**\n(c) Determine the **smallest** integer number of cups {{n}} poured independently so that the probability of receiving **at least one** complaint exceeds `0.95`. **[3]**",
      hints: [
        "For (a), `5%` upper tail means left-tail area `0.95` → `z = invNorm(0.95, 0, 1) ≈ 1.64485`, so {{10 / σ = 1.64485}}.",
        "For (b), keep full unrounded `σ ≈ 6.07957` and evaluate `normCdf(-9E99, 242, 250, σ)`.",
        "For (c), solve {{1 - (1 - p)^n > 0.95}} ⇒ {{(1 - p)^n < 0.05}} using logarithms (mind the sign of `ln(1 − p)`!).",
      ],
      modelAnswer:
        "(a) Left-tail quantile for the top five percent is `z = invNorm(0.95, 0, 1) = 1.64485`. Setting `(260 − 250)/σ = 1.64485` yields `σ = 10 / 1.64485 = 6.0796 ≈ 6.08` mL.\n(b) Carrying full precision for `σ`, `normCdf(−9E99, 242, 250, 6.0796) = 0.094107 ≈ 0.0941`.\n(c) Let `p = 0.094107`. Requiring `1 − (1 − p)ⁿ > 0.95` rearranges to `0.905893ⁿ < 0.05`. Taking natural logarithms (and flipping the inequality because `ln(0.905893) < 0`) yields `n > ln(0.05) / ln(0.905893) = 30.31`. Rounding up to the next integer gives `n = 31`.",
      markScheme: [
        {
          point: "M1: Finds z = invNorm(0.95, 0, 1) ≈ 1.64485 and writes 10 / σ = z.",
          keywords: ["1.644", "1.645"],
        },
        {
          point: "A1: Correct σ ≈ 6.08 mL (3 s.f.).",
          keywords: ["6.08", "6.079"],
        },
        {
          point: "M1: Evaluates normCdf(−∞, 242, 250, 6.0796).",
          keywords: ["normcdf", "242"],
        },
        {
          point: "A1: Complaint probability p ≈ 0.0941 (3 s.f.).",
          keywords: ["0.0941"],
        },
        {
          point: "M1: Sets up complement inequality 1 − (1 − p)ⁿ > 0.95, i.e. 0.90589ⁿ < 0.05.",
          keywords: ["0.905", "0.05"],
        },
        {
          point: "M1: Applies logarithms cleanly to obtain n > 30.31.",
          keywords: ["30.3", "ln(0.05)"],
        },
        {
          point: "A1: Concludes smallest integer n = 31.",
          keywords: ["n = 31", "31"],
        },
      ],
      markbands: [
        {
          band: "0–2 marks",
          marks: [0, 2],
          descriptor: "Finds σ ≈ 6.08 via inverse normal with limited progress on parts (b)–(c).",
        },
        {
          band: "3–5 marks",
          marks: [3, 5],
          descriptor: "Accurate σ ≈ 6.08 and p ≈ 0.0941, setting up the exponential inequality for n.",
        },
        {
          band: "6–7 marks",
          marks: [6, 7],
          descriptor: "Full unrounded multi-stage accuracy yielding σ ≈ 6.08, p ≈ 0.0941, n > 30.31, and integer n = 31.",
        },
      ],
    },
    {
      id: "4-stats-probability-ch-q07",
      kind: "written",
      marks: 7,
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Show that",
      guideRef: "continuous-rvs-pdf-cdf-hl",
      question:
        "[HL] (Non-GDC) A continuous random variable {{X}} has PDF {{f(x) = k cos^2(x)}} for {{0 <= x <= pi}}, and `0` otherwise.\n(a) Using a double-angle identity, show that {{k = 2 / pi}}. **[2]**\n(b) Verify that {{f(pi - x) = f(x)}} and deduce exact values of {{E(X)}} and the median {{m}}. **[2]**\n(c) State all **modes** of {{X}} on `[0, π]`. **[1]**\n(d) Calculate the exact value of {{P(pi/4 <= X <= 3 pi / 4)}}. **[2]**",
      hints: [
        "For (a), rewrite {{cos^2(x) = (1 + cos(2x)) / 2}} before integrating from `0` to `π`.",
        "For (b), recall {{cos(pi - x) = -cos(x)}}, so squaring leaves it unchanged — symmetry about {{x = pi/2}}!",
        "For (c), where does {{cos^2(x)}} hit its maximum value `1` on `[0, π]`? (Check endpoints!)",
        "For (d), integrate {{(1/pi)(1 + cos 2x)}} from `π/4` to `3π/4` — note `sin(3π/2) = −1` and `sin(π/2) = +1`!",
      ],
      modelAnswer:
        "(a) Replacing `cos²x` by `(1 + cos 2x)/2` gives `k ∫₀^π (1/2)(1 + cos 2x) dx = (k/2) [x + (sin 2x)/2]₀^π = (k/2)(π − 0) = kπ/2 = 1`, hence `k = 2/π`.\n(b) Since `cos(π − x) = −cos x`, squaring gives `k(−cos x)² = k cos²x = f(x)`. Thus the density is symmetric about `π/2`, so both the mean and median equal `π/2`.\n(c) The maximum height `2/π` occurs wherever `cos²x = 1`, making the distribution bimodal with modes at both endpoints `0` and `π`.\n(d) Integrating `(1/π)(1 + cos 2x)` from `π/4` to `3π/4` gives `(1/π)[x + (sin 2x)/2]` evaluated at the limits: `(1/π)[(3π/4 − 1/2) − (π/4 + 1/2)] = (1/π)(π/2 − 1) = 1/2 − 1/π`.",
      markScheme: [
        {
          point: "M1: Applies double-angle identity cos²x = (1 + cos 2x)/2 and integrates to (k/2)[x + (sin 2x)/2]₀^π.",
          keywords: ["cos 2x", "sin 2x"],
        },
        {
          point: "A1: Obtains kπ/2 = 1 and concludes k = 2/π.",
          keywords: ["kπ/2", "2/π"],
        },
        {
          point: "R1: Verifies cos(π − x) = −cos x so squaring proves symmetry about π/2.",
          keywords: ["-cos x", "symmetric"],
        },
        {
          point: "A1: Deduces E(X) = m = π/2.",
          keywords: ["π/2"],
        },
        {
          point: "A1: Identifies BOTH modes at the endpoints 0 and π (bimodal).",
          keywords: ["0 and π", "bimodal", "endpoints"],
        },
        {
          point: "M1: Substitutes limits π/4 and 3π/4 into (1/π)[x + (sin 2x)/2].",
          keywords: ["3π/4", "π/2 - 1"],
        },
        {
          point: "A1: Simplifies to exact answer 1/2 − 1/π.",
          keywords: ["1/2 - 1/π", "(π - 2)/(2π)"],
        },
      ],
      markbands: [
        {
          band: "0–2 marks",
          marks: [0, 2],
          descriptor: "Applies the double-angle identity to show k = 2/π with minimal further progress.",
        },
        {
          band: "3–5 marks",
          marks: [3, 5],
          descriptor: "Completes (a), (b), and (c) accurately, or evaluates (d) with a sign error on sin(3π/2).",
        },
        {
          band: "6–7 marks",
          marks: [6, 7],
          descriptor: "Complete non-GDC exact mastery: k = 2/π, symmetry proof for π/2, bimodal endpoints 0 and π, and exact integral 1/2 − 1/π.",
        },
      ],
    },
    {
      id: "4-stats-probability-ch-q08",
      kind: "written",
      marks: 8,
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Derive",
      guideRef: "continuous-rvs-pdf-cdf-hl",
      question:
        "[HL · Paper 3 Inquiry] Consider the family of continuous random variables {{X_n}} (`n ∈ ℤ⁺`) with PDF {{f_n(x) = k_n x^n (1 - x)}} for {{0 <= x <= 1}}, and `0` otherwise.\n(a) Derive an exact expression for {{k_n}} in terms of {{n}}. **[2]**\n(b) Derive the exact **mode** of {{X_n}} in terms of {{n}}, verifying it is a maximum. **[2]**\n(c) Derive simplified expressions for {{E(X_n)}} and {{Var(X_n)}} in terms of {{n}}. **[3]**\n(d) Deduce the limiting behaviour of the mode, mean, and variance as {{n → ∞}} and interpret what happens to the distribution geometrically. **[1]**",
      hints: [
        "For (a), expand {{x^n - x^(n+1)}} and integrate on `[0, 1]`: {{1/(n+1) - 1/(n+2) = 1/[(n+1)(n+2)]}}!",
        "For (b), differentiate {{x^n - x^(n+1)}}: {{n x^(n-1) - (n+1) x^n = x^(n-1)[n - (n+1)x] = 0}}.",
        "For (c), use the exact same pattern: {{∫_0^1 x^m(1 - x) dx = 1/[(m+1)(m+2)]}} for {{m = n+1}} (giving `E(X)`) and {{m = n+2}} (giving `E(X²)`).",
      ],
      modelAnswer:
        "(a) Integrating `xⁿ − xⁿ⁺¹` over `[0, 1]` yields `1/(n + 1) − 1/(n + 2) = 1 / [(n + 1)(n + 2)]`. Setting total area to `1` gives `k_n = (n + 1)(n + 2)`.\n(b) Differentiating gives `f_n'(x) = k_n xⁿ⁻¹ [n − (n + 1)x] = 0`. Inside `(0, 1)`, the unique critical point is `x = n / (n + 1)`. Since `f_n'` changes from positive to negative across `n/(n + 1)` (and `f_n(0) = f_n(1) = 0`), this is the global maximum, so the mode is `n / (n + 1)`.\n(c) Using `∫₀¹ xᵐ(1 − x) dx = 1/[(m + 1)(m + 2)]`: `E(X_n) = (n + 1)(n + 2) / [(n + 2)(n + 3)] = (n + 1) / (n + 3)`, and `E(X_n²) = (n + 1)(n + 2) / [(n + 3)(n + 4)]`. Subtracting gives `Var(X_n) = [(n + 1)(n + 2)(n + 3) − (n + 1)²(n + 4)] / [(n + 3)²(n + 4)] = (n + 1)[(n² + 5n + 6) − (n² + 5n + 4)] / [(n + 3)²(n + 4)] = 2(n + 1) / [(n + 3)²(n + 4)]`.\n(d) As `n → ∞`, both mode `n/(n + 1) → 1` and mean `(n + 1)/(n + 3) → 1`, while `Var(X_n) → 0`: the density spikes arbitrarily sharply and concentrates almost all probability mass immediately beside `x = 1`.",
      markScheme: [
        {
          point: "M1: Evaluates ∫₀¹ (xⁿ − xⁿ⁺¹) dx = 1/(n + 1) − 1/(n + 2).",
          keywords: ["1/(n + 1)", "1/(n + 2)"],
        },
        {
          point: "A1: Derives k_n = (n + 1)(n + 2).",
          keywords: ["(n + 1)(n + 2)"],
        },
        {
          point: "A1: Solves f_n'(x) = 0 to get mode x = n / (n + 1).",
          keywords: ["n / (n + 1)", "n/(n + 1)"],
        },
        {
          point: "R1: Justifies maximum via sign change of f_n' (or f_n'' < 0 and zero endpoints).",
          keywords: ["positive to negative", "global maximum"],
        },
        {
          point: "A1: Derives E(X_n) = (n + 1) / (n + 3).",
          keywords: ["(n + 1) / (n + 3)", "(n + 1)/(n + 3)"],
        },
        {
          point: "M1: Finds E(X_n²) = (n + 1)(n + 2) / [(n + 3)(n + 4)] and combines fractions for Var(X_n).",
          keywords: ["(n + 3)(n + 4)", "n² + 5n + 6"],
        },
        {
          point: "A1: Simplifies Var(X_n) = 2(n + 1) / [(n + 3)²(n + 4)].",
          keywords: ["2(n + 1)"],
        },
        {
          point: "R1: States limits mode → 1, mean → 1, Var → 0 and interprets concentration sharply near x = 1.",
          keywords: ["concentrates", "spikes", "→ 1"],
        },
      ],
      markbands: [
        {
          band: "0–2 marks",
          marks: [0, 2],
          descriptor: "Derives k_n = (n + 1)(n + 2) or attempts differentiation for the mode.",
        },
        {
          band: "3–5 marks",
          marks: [3, 5],
          descriptor: "Completes k_n, mode n/(n + 1), and E(X_n) = (n + 1)/(n + 3) accurately.",
        },
        {
          band: "6–8 marks",
          marks: [6, 8],
          descriptor: "Full Paper 3 inquiry mastery: exact derivations of k_n, justified mode, simplified Var(X_n) = 2(n + 1)/[(n + 3)²(n + 4)], and geometric concentration limit at x = 1.",
        },
      ],
    },
  ],
};
