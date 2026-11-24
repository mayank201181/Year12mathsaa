import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1: SL CORE · PAPER 1 NON-GDC FOUNDATIONS (15 MCQs)
  // answerIndex spread: [4, 4, 4, 3]
  // =========================================================================
  {
    id: "4-stats-probability-m1",
    title: "MCQ Paper 1 — SL Core & Non-GDC Foundations",
    level: "SL",
    questions: [
      {
        id: "4-stats-probability-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "descriptive-stats-sampling",
        question:
          "A school divides its `600` students by year group and uses a random number generator to select exactly `10%` of students from each year group. Which sampling method is being used?",
        options: [
          "Systematic sampling",
          "Quota sampling",
          "Stratified sampling",
          "Convenience sampling",
        ],
        answerIndex: 2,
        hints: [
          "Notice two features: the population is divided into subgroups AND selection inside each subgroup is random.",
        ],
        explanation:
          "Splitting a population into homogeneous subgroups (strata) and taking random samples proportional to each stratum's size defines **stratified sampling**. Quota sampling also mirrors subgroup sizes, but chooses individuals non-randomly.",
      },
      {
        id: "4-stats-probability-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "descriptive-stats-sampling",
        question:
          "A dataset has lower quartile {{Q_1 = 18}} and upper quartile {{Q_3 = 30}}. Under the standard IB outlier rule, what is the **upper outlier fence**?",
        options: ["48", "42", "54", "36"],
        answerIndex: 0,
        hints: [
          "First find the interquartile range {{IQR = Q_3 - Q_1}}, then compute {{Q_3 + 1.5 * IQR}}.",
        ],
        explanation:
          "{{IQR = 30 - 18 = 12}}, so the upper outlier fence is {{Q_3 + 1.5 * IQR = 30 + 1.5 * 12 = 30 + 18 = 48}}.",
      },
      {
        id: "4-stats-probability-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "State",
        guideRef: "descriptive-stats-sampling",
        question:
          "When plotting a cumulative frequency curve for grouped continuous data (`10 ≤ x < 20`, `20 ≤ x < 30`, ...), each cumulative frequency value must be plotted against:",
        options: [
          "the midpoint of each class interval",
          "the lower boundary of each class interval",
          "the modal value of each class interval",
          "the upper boundary of each class interval",
        ],
        answerIndex: 3,
        hints: [
          "What does the cumulative frequency up to the `20 ≤ x < 30` row actually count?",
          "It counts every observation that is **less than 30**, so the total is reached at the top edge of the class.",
        ],
        explanation:
          "Cumulative frequency counts all values up to the top of each class interval, so points are always plotted at the **upper class boundary** (midpoints are used for estimating the grouped mean and variance, not cumulative curves).",
      },
      {
        id: "4-stats-probability-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "descriptive-stats-sampling",
        question:
          "A set of `8` observations satisfies {{sum x_i = 40}} and {{sum x_i^2 = 272}}. What is the exact population **standard deviation** {{σ}}?",
        options: ["9", "3", "4.5", "6"],
        answerIndex: 1,
        hints: [
          "First find the mean {{μ = (sum x_i) / n}}.",
          "Compute variance {{σ^2 = (sum x_i^2)/n - μ^2}}, and remember to take the square root at the end!",
        ],
        explanation:
          "{{μ = 40/8 = 5}}, so {{σ^2 = 272/8 - 5^2 = 34 - 25 = 9}}. Taking the positive square root gives {{σ = sqrt(9) = 3}}.",
      },
      {
        id: "4-stats-probability-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "descriptive-stats-sampling",
        question:
          "A dataset {{X}} has mean `20` and standard deviation `4`. Each datum is transformed via {{Y = 3X - 10}}. What are the mean and **variance** of {{Y}}?",
        options: [
          "Mean 50 and variance 48",
          "Mean 60 and variance 144",
          "Mean 50 and variance 144",
          "Mean 50 and variance 134",
        ],
        answerIndex: 2,
        hints: [
          "Mean shifts and scales: {{ȳ = 3(20) - 10}}.",
          "First find the original variance {{σ_X^2 = 4^2 = 16}}, then recall {{Var(kX + m) = k^2 Var(X)}}.",
        ],
        explanation:
          "Mean becomes {{3(20) - 10 = 50}}. Standard deviation multiplies by `3` to `12`, so variance is {{12^2 = 144}} (equivalently {{3^2 * 4^2 = 9 * 16 = 144}}; subtracting `10` does not affect spread).",
      },
      {
        id: "4-stats-probability-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Find",
        guideRef: "probability-conditional-bayes",
        question:
          "Events {{E}} and {{F}} satisfy {{P(E) = 0.65}}, {{P(F) = 0.45}}, and {{P(E ∩ F) = 0.25}}. Find {{P(E ∪ F)}}.",
        options: ["0.85", "0.95", "0.75", "0.90"],
        answerIndex: 0,
        hints: [
          "Apply the combined-events formula {{P(E ∪ F) = P(E) + P(F) - P(E ∩ F)}}.",
        ],
        explanation:
          "{{P(E ∪ F) = 0.65 + 0.45 - 0.25 = 1.10 - 0.25 = 0.85}}.",
      },
      {
        id: "4-stats-probability-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "probability-conditional-bayes",
        question:
          "Two events {{E}} and {{F}} are **mutually exclusive**, with {{P(E) = 0.4}} and {{P(F) = 0.3}}. Which statement is correct?",
        options: [
          "{{P(E ∪ F) = 0.7}} and they are independent",
          "{{P(E ∪ F) = 0.7}} and they are not independent",
          "{{P(E ∪ F) = 0.58}} and they are independent",
          "{{P(E ∪ F) = 0.58}} and they are not independent",
        ],
        answerIndex: 1,
        hints: [
          "Mutually exclusive means {{P(E ∩ F) = 0}}.",
          "Now compare {{P(E ∩ F) = 0}} against {{P(E) * P(F) = 0.4 * 0.3 = 0.12}}.",
        ],
        explanation:
          "Because {{E}} and {{F}} are mutually exclusive, {{P(E ∩ F) = 0}} and {{P(E ∪ F) = 0.4 + 0.3 = 0.7}}. Since {{P(E ∩ F) = 0 ≠ 0.12 = P(E)P(F)}}, they are **not independent**.",
      },
      {
        id: "4-stats-probability-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "probability-conditional-bayes",
        question:
          "Given {{P(E) = 0.5}}, {{P(F) = 0.4}}, and {{P(E ∪ F) = 0.75}}, find {{P(F | E)}}.",
        options: ["0.375", "0.150", "0.200", "0.300"],
        answerIndex: 3,
        hints: [
          "First recover the intersection {{P(E ∩ F) = P(E) + P(F) - P(E ∪ F)}}.",
          "In {{P(F | E) = P(E ∩ F) / P(E)}}, divide by {{P(E)}}, not {{P(F)}}.",
        ],
        explanation:
          "{{P(E ∩ F) = 0.5 + 0.4 - 0.75 = 0.15}}. Then {{P(F | E) = P(E ∩ F) / P(E) = 0.15 / 0.5 = 0.300}}.",
      },
      {
        id: "4-stats-probability-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "probability-conditional-bayes",
        question:
          "Events {{E}} and {{F}} are **independent** with {{P(E) = 0.3}} and {{P(F) = 0.6}}. Calculate {{P(E ∪ F)}}.",
        options: ["0.72", "0.90", "0.18", "0.82"],
        answerIndex: 0,
        hints: [
          "Independence gives {{P(E ∩ F) = P(E) * P(F)}}.",
          "Substitute that intersection into {{P(E ∪ F) = P(E) + P(F) - P(E ∩ F)}}.",
        ],
        explanation:
          "Since {{E}} and {{F}} are independent, {{P(E ∩ F) = 0.3 * 0.6 = 0.18}}. Therefore {{P(E ∪ F) = 0.3 + 0.6 - 0.18 = 0.72}}.",
      },
      {
        id: "4-stats-probability-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "probability-conditional-bayes",
        question:
          "A bag holds `3` green and `5` yellow balls. Two balls are drawn one after another **without replacement**. What is the exact probability that the two balls have **different colours**?",
        options: ["{{15/56}}", "{{15/32}}", "{{15/28}}", "{{13/28}}"],
        answerIndex: 2,
        hints: [
          "Two disjoint orders give different colours: Green then Yellow (`GY`), OR Yellow then Green (`YG`).",
          "Compute {{(3/8)(5/7) + (5/8)(3/7)}} and simplify.",
        ],
        explanation:
          "{{P(GY) = (3/8)(5/7) = 15/56}} and {{P(YG) = (5/8)(3/7) = 15/56}}. Summing both orders yields {{30/56 = 15/28}}.",
      },
      {
        id: "4-stats-probability-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "discrete-binomial-normal",
        question:
          "A discrete random variable {{X}} takes values `1, 2, 3, 4` with probabilities `0.1, k, 2k, 0.3` respectively. Find {{E(X)}}.",
        options: ["2.5", "2.9", "2.7", "3.1"],
        answerIndex: 1,
        hints: [
          "Use {{sum P(X = x) = 1}} to solve for {{k}} first: {{0.1 + k + 2k + 0.3 = 1}}.",
        ],
        explanation:
          "From {{0.4 + 3k = 1}}, we get {{k = 0.2}} and {{2k = 0.4}}. Then {{E(X) = 1(0.1) + 2(0.2) + 3(0.4) + 4(0.3) = 0.1 + 0.4 + 1.2 + 1.2 = 2.9}}.",
      },
      {
        id: "4-stats-probability-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "discrete-binomial-normal",
        question:
          "A charity spinner pays `£2` with probability `0.5`, `£6` with probability `0.3`, and `£12` with probability `0.2`. What ticket price makes the game **fair**?",
        options: ["£4.80", "£6.00", "£6.67", "£5.20"],
        answerIndex: 3,
        hints: [
          "A game is fair when {{E(" + "\"net gain\"" + ") = 0}}, meaning entry price equals expected payout {{E(X)}}.",
          "Compute {{2(0.5) + 6(0.3) + 12(0.2)}}.",
        ],
        explanation:
          "{{E(" + "\"payout\"" + ") = 2(0.5) + 6(0.3) + 12(0.2) = 1.0 + 1.8 + 2.4 = 5.20}}, so a fair ticket price is `£5.20`.",
      },
      {
        id: "4-stats-probability-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "discrete-binomial-normal",
        question:
          "Let {{X ~ B(4, 1/3)}}. What is the exact value of {{P(X = 1)}}?",
        options: ["{{32/81}}", "{{8/81}}", "{{16/81}}", "{{24/81}}"],
        answerIndex: 0,
        hints: [
          "Use the Binomial formula {{P(X = r) = nCr * p^r * (1 - p)^(n - r)}} with {{n = 4, r = 1, p = 1/3}}.",
          "Don't forget the binomial coefficient {{4C1 = 4}}!",
        ],
        explanation:
          "{{P(X = 1) = 4C1 * (1/3)^1 * (2/3)^3 = 4 * (1/3) * (8/27) = 32/81}}.",
      },
      {
        id: "4-stats-probability-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "discrete-binomial-normal",
        question:
          "A Normal variable satisfies {{X ~ N(60, 25)}} and {{P(X > 68) = p}}. Which expression equals {{P(52 < X < 68)}}?",
        options: ["{{1 - p}}", "{{1 - 2p}}", "{{0.5 - p}}", "{{2p - 1}}"],
        answerIndex: 1,
        hints: [
          "Check how far `52` and `68` lie on either side of the mean {{μ = 60}}.",
          "Use symmetry about `60`: both outer tails have identical area {{p}}.",
        ],
        explanation:
          "Since `52 = 60 − 8` and `68 = 60 + 8` are symmetric around {{μ = 60}}, {{P(X < 52) = P(X > 68) = p}}. Total area is `1`, so the central interval has probability {{1 - 2p}}.",
      },
      {
        id: "4-stats-probability-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "discrete-binomial-normal",
        question:
          "A Normal random variable {{X ~ N(μ, σ^2)}} satisfies {{P(X < 46) = 0.2}} and {{P(X < 62) = 0.8}}. Without a calculator, find the exact value of {{μ}}.",
        options: ["50", "52", "54", "56"],
        answerIndex: 2,
        hints: [
          "Rewrite {{P(X < 62) = 0.8}} as a right-tail probability: {{P(X > 62) = 0.2}}.",
          "Now compare the left tail below `46` and the right tail above `62` — they have equal area `0.2`!",
        ],
        explanation:
          "Since {{P(X < 46) = 0.2}} and {{P(X > 62) = 1 - 0.8 = 0.2}}, symmetry of the Normal curve places `46` and `62` equidistant from the mean. Hence {{μ = (46 + 62) / 2 = 54}}.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2: SL CORE · PAPER 2 GDC & APPLIED DISTRIBUTIONS (15 MCQs)
  // answerIndex spread: [3, 4, 4, 4]
  // =========================================================================
  {
    id: "4-stats-probability-m2",
    title: "MCQ Paper 2 — SL GDC Workflows & Applied Distributions",
    level: "SL",
    questions: [
      {
        id: "4-stats-probability-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "descriptive-stats-sampling",
        question:
          "Class A has `12` students with a mean score of `65`, and Class B has `18` students with a mean score of `75`. What is the exact combined mean of all `30` students?",
        options: ["70", "71", "72", "69"],
        answerIndex: 1,
        hints: [
          "Do NOT average `65` and `75` directly — the two classes have different sizes!",
          "Find the total sum of all `30` scores: {{12(65) + 18(75)}}, then divide by `30`.",
        ],
        explanation:
          "Total marks = {{12(65) + 18(75) = 780 + 1350 = 2130}}. Dividing by `30` students gives combined mean {{2130 / 30 = 71}}.",
      },
      {
        id: "4-stats-probability-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "descriptive-stats-sampling",
        question:
          "Dataset {{X}} has interquartile range `8` and **variance** `16`. Each value is coded via {{Y = 100 - 0.5X}}. What are the IQR and **standard deviation** of {{Y}}?",
        options: [
          "IQR = 4 and SD = 8",
          "IQR = −4 and SD = −2",
          "IQR = 96 and SD = 2",
          "IQR = 4 and SD = 2",
        ],
        answerIndex: 3,
        hints: [
          "First take the square root of variance `16` to get {{σ_X = 4}}.",
          "Both IQR and SD scale by {{|a| = |-0.5| = 0.5}} (spread is always non-negative and ignores `+100`).",
        ],
        explanation:
          "Original {{σ_X = sqrt(16) = 4}}. Under {{Y = -0.5X + 100}}, both linear spread measures scale by {{|-0.5| = 0.5}}: {{IQR_Y = 0.5 * 8 = 4}} and {{σ_Y = 0.5 * 4 = 2}}.",
      },
      {
        id: "4-stats-probability-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Justify",
        guideRef: "descriptive-stats-sampling",
        question:
          "A box plot shows {{Q_1 = 42}}, median `50`, {{Q_3 = 56}}, and minimum observation `19`. Which conclusion about `19` is correct?",
        options: [
          "Outlier, because 19 is below the lower fence 21",
          "Not an outlier, because 19 exceeds the lower fence 14",
          "Outlier, because 19 is below the lower fence 28",
          "Not an outlier, because 19 lies inside the lower fence 21",
        ],
        answerIndex: 0,
        hints: [
          "Find {{IQR = Q_3 - Q_1 = 56 - 42}}.",
          "Compute the lower fence {{Q_1 - 1.5 * IQR}} and compare `19` with it.",
        ],
        explanation:
          "{{IQR = 56 - 42 = 14}}, so the lower fence is {{42 - 1.5(14) = 42 - 21 = 21}}. Because `19 < 21`, `19` is strictly below the lower fence and is therefore an outlier.",
      },
      {
        id: "4-stats-probability-m2-q04",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "descriptive-stats-sampling",
        question:
          "Six measurements have mean `10` and population standard deviation `2`. A seventh measurement equal to `10` is added to the dataset. What are the new mean and new **population variance**?",
        options: [
          "Mean 10 and variance 4",
          "Mean 10 and variance {{12/7}}",
          "Mean 10 and variance {{24/7}}",
          "Mean {{70/6}} and variance {{24/7}}",
        ],
        answerIndex: 2,
        hints: [
          "Adding a datum equal to the existing mean leaves the mean unchanged at `10`.",
          "Originally {{sum (x_i - 10)^2 = 6 * 2^2 = 24}}. How much does the new value `10` add to {{sum (x_i - 10)^2}}?",
        ],
        explanation:
          "Adding `10` keeps the mean at `10` and contributes {{(10 - 10)^2 = 0}} to the sum of squared deviations, which stays `24`. Dividing by the new count `7` gives variance {{24/7}}.",
      },
      {
        id: "4-stats-probability-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "probability-conditional-bayes",
        question:
          "Among `100` IB students, `60` study Physics, `45` study Chemistry, and `25` study both. A student is chosen at random and does **not** study Physics. What is the probability they study Chemistry?",
        options: ["0.20", "0.45", "0.25", "0.50"],
        answerIndex: 3,
        hints: [
          "How many students do NOT study Physics? That count is your denominator.",
          "Among the `45` Chemistry students, subtract the `25` who also take Physics to find Chemistry-only.",
        ],
        explanation:
          "There are `100 − 60 = 40` students not taking Physics. Of those, `45 − 25 = 20` take Chemistry. Thus {{P(C | P') = 20 / 40 = 0.50}}.",
      },
      {
        id: "4-stats-probability-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "probability-conditional-bayes",
        question:
          "Events {{E}} and {{F}} are **independent**, with {{P(E) = 0.4}} and {{P(F) = 0.7}}. Find {{P(E' ∩ F')}}.",
        options: ["0.28", "0.18", "0.10", "0.30"],
        answerIndex: 1,
        hints: [
          "If {{E}} and {{F}} are independent, then their complements {{E'}} and {{F'}} are also independent!",
          "Multiply {{P(E') = 1 - 0.4}} by {{P(F') = 1 - 0.7}}.",
        ],
        explanation:
          "Independent events have independent complements, so {{P(E' ∩ F') = P(E')P(F') = 0.6 * 0.3 = 0.18}} (equivalently {{1 - P(E ∪ F) = 1 - (0.4 + 0.7 - 0.28) = 0.18}}).",
      },
      {
        id: "4-stats-probability-m2-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Solve",
        guideRef: "probability-conditional-bayes",
        question:
          "Events {{E}} and {{F}} are independent, with {{P(E) = 0.5}} and {{P(E ∪ F) = 0.8}}. Find {{P(F)}}.",
        options: ["0.3", "0.4", "0.6", "0.5"],
        answerIndex: 2,
        hints: [
          "Let {{p = P(F)}}. Since {{E}} and {{F}} are independent, {{P(E ∩ F) = 0.5p}}.",
          "Substitute into {{P(E ∪ F) = P(E) + P(F) - P(E ∩ F)}} and solve for {{p}}.",
        ],
        explanation:
          "Setting {{p = P(F)}} gives {{0.8 = 0.5 + p - 0.5p = 0.5 + 0.5p}}, so {{0.5p = 0.3}} and {{P(F) = 0.6}}.",
      },
      {
        id: "4-stats-probability-m2-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Find",
        guideRef: "discrete-binomial-normal",
        question:
          "A Binomial random variable {{X ~ B(n, p)}} has mean `12` and variance `7.2`. Find the values of {{n}} and {{p}}.",
        options: [
          "n = 30 and p = 0.4",
          "n = 20 and p = 0.6",
          "n = 30 and p = 0.6",
          "n = 25 and p = 0.48",
        ],
        answerIndex: 0,
        hints: [
          "Divide {{Var(X) = np(1 - p)}} by {{E(X) = np}} to isolate {{1 - p}} immediately!",
        ],
        explanation:
          "{{1 - p = Var(X) / E(X) = 7.2 / 12 = 0.6}}, so {{p = 0.4}}. Then {{n = E(X) / p = 12 / 0.4 = 30}}.",
      },
      {
        id: "4-stats-probability-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "discrete-binomial-normal",
        question:
          "Let {{X ~ B(15, 0.3)}}. Which TI-Nspire CX expression accurately evaluates the strict inequality {{P(X > 5)}}?",
        options: [
          "`1 − binomCdf(15, 0.3, 0, 4)`",
          "`binomCdf(15, 0.3, 5, 15)`",
          "`1 − binomPdf(15, 0.3, 5)`",
          "`1 − binomCdf(15, 0.3, 0, 5)`",
        ],
        answerIndex: 3,
        hints: [
          "Since {{X}} takes integer values, {{X > 5}} means `X ∈ {6, 7, ..., 15}`.",
          "The complement of `X ≥ 6` is `X ≤ 5` (which includes `5`!).",
        ],
        explanation:
          "For a discrete Binomial variable, {{P(X > 5) = P(X >= 6) = 1 - P(X <= 5)}}, which on a TI-Nspire CX is `1 − binomCdf(15, 0.3, 0, 5)` (or `binomCdf(15, 0.3, 6, 15)`).",
      },
      {
        id: "4-stats-probability-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "discrete-binomial-normal",
        question:
          "Given {{X ~ B(10, 0.35)}}, find {{P(X <= 4)}} correct to `3` significant figures.",
        options: ["0.514", "0.751", "0.249", "0.617"],
        answerIndex: 1,
        hints: [
          "Use TI-Nspire CX `binomCdf(10, 0.35, 0, 4)`.",
          "Since {{E(X) = 3.5}}, expect {{P(X <= 4)}} to be comfortably above `0.5`.",
        ],
        explanation:
          "Evaluating `binomCdf(10, 0.35, 0, 4)` gives `0.751496...`, which rounds to `0.751` (to `3` s.f.).",
      },
      {
        id: "4-stats-probability-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "discrete-binomial-normal",
        question:
          "IQ scores in a model follow {{X ~ N(100, 225)}}. Find {{P(85 < X < 130)}} correct to `3` significant figures.",
        options: ["0.683", "0.954", "0.819", "0.181"],
        answerIndex: 2,
        hints: [
          "Remember `225` is the **variance** {{σ^2}}, so {{σ = sqrt(225) = 15}}!",
          "Convert to {{z}}-scores: `85` is {{z = -1}} and `130` is {{z = +2}}, or run `normCdf(85, 130, 100, 15)`.",
        ],
        explanation:
          "Here {{μ = 100}} and {{σ = sqrt(225) = 15}}. Thus {{P(85 < X < 130) = P(-1 < Z < 2) = 0.97725 - 0.15866 = 0.81859... ≈ 0.819}}.",
      },
      {
        id: "4-stats-probability-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "discrete-binomial-normal",
        question:
          "Let {{X ~ N(50, 64)}}. Find the value of {{a}}, correct to `3` significant figures, such that {{P(X > a) = 0.10}}.",
        options: ["60.3", "39.7", "132", "58.2"],
        answerIndex: 0,
        hints: [
          "Identify {{σ = sqrt(64) = 8}}, and convert the right-tail probability `0.10` to left-tail area `1 − 0.10 = 0.90`.",
          "Compute `invNorm(0.90, 50, 8)` (or {{50 + 8 * 1.2816}}).",
        ],
        explanation:
          "With {{μ = 50}}, {{σ = 8}}, and left-tail area `0.90`, `invNorm(0.90, 50, 8) = 60.2524... ≈ 60.3`.",
      },
      {
        id: "4-stats-probability-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "discrete-binomial-normal",
        question:
          "A Normal variable satisfies {{X ~ N(80, σ^2)}} and {{P(X < 71) = 0.0668}} (for which {{z = -1.50}}). Find the value of {{σ}}.",
        options: ["4.50", "9.00", "13.5", "6.00"],
        answerIndex: 3,
        hints: [
          "Standardise `71`: {{(71 - 80) / σ = -1.50}}.",
          "Solve {{-9 / σ = -1.50}} carefully for positive {{σ}}.",
        ],
        explanation:
          "Using {{Z = (X - μ) / σ}}, we obtain {{(71 - 80) / σ = -1.50}} ⇒ {{-9 = -1.50 σ}} ⇒ {{σ = 6.00}}.",
      },
      {
        id: "4-stats-probability-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "discrete-binomial-normal",
        question:
          "Let {{X ~ B(6, 0.5)}}. Find the exact conditional probability {{P(X = 4 | X >= 4)}}.",
        options: ["{{15/64}}", "{{15/22}}", "{{7/22}}", "{{15/32}}"],
        answerIndex: 1,
        hints: [
          "Apply conditional probability: {{P(X = 4 | X >= 4) = P(X = 4) / P(X >= 4)}}.",
          "Since {{p = 0.5}}, the numerators of `P(X = 4), P(X = 5), P(X = 6)` are just the binomial coefficients `6C4, 6C5, 6C6`!",
        ],
        explanation:
          "{{P(X = 4) = 15/64}}, {{P(X = 5) = 6/64}}, and {{P(X = 6) = 1/64}}, so {{P(X >= 4) = (15 + 6 + 1)/64 = 22/64}}. Dividing yields {{(15/64) / (22/64) = 15/22}}.",
      },
      {
        id: "4-stats-probability-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "discrete-binomial-normal",
        question:
          "An archer hits the bullseye independently with probability `0.2` on each shot. What is the **smallest** number of shots {{n}} needed so that the probability of hitting the bullseye **at least once** exceeds `0.90`?",
        options: ["9", "10", "11", "12"],
        answerIndex: 2,
        hints: [
          "Rewrite 'at least one hit' using the complement: {{1 - 0.8^n > 0.90}}.",
          "Rearrange to {{0.8^n < 0.10}} and take logarithms (remember `ln(0.8) < 0` reverses the inequality!).",
        ],
        explanation:
          "We need {{1 - 0.8^n > 0.90}} ⇒ {{0.8^n < 0.10}} ⇒ {{n > ln(0.10) / ln(0.8) ≈ 10.32}}. Since {{n}} must be an integer, the smallest value is `11`.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3: HL EXTENSION & SYNTHESIS (15 MCQs)
  // answerIndex spread: [4, 3, 4, 4]
  // =========================================================================
  {
    id: "4-stats-probability-m3",
    title: "MCQ Paper 3 — [HL] Bayes' Theorem & Continuous Random Variables",
    level: "HL",
    questions: [
      {
        id: "4-stats-probability-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "probability-conditional-bayes",
        question:
          "A medical condition has prevalence {{P(D) = 0.02}}. A screening test has sensitivity {{P(+ | D) = 0.90}} and false-positive rate {{P(+ | D') = 0.05}}. Given a positive test, what is the exact probability {{P(D | +)}}?",
        options: ["{{18/67}}", "{{18/49}}", "{{9/50}}", "{{49/67}}"],
        answerIndex: 0,
        hints: [
          "Compute both positive paths: true positives {{0.02 * 0.90}} and false positives {{0.98 * 0.05}}.",
          "Divide true positives by total positives using Bayes' theorem.",
        ],
        explanation:
          "{{P(D ∩ +) = 0.02 * 0.90 = 0.018}} and {{P(D' ∩ +) = 0.98 * 0.05 = 0.049}}, giving {{P(+) = 0.067}}. Therefore {{P(D | +) = 0.018 / 0.067 = 18/67}}.",
      },
      {
        id: "4-stats-probability-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "probability-conditional-bayes",
        question:
          "Three machines {{M_1, M_2, M_3}} produce `40%`, `35%`, and `25%` of a factory's sensors, with fault rates `1%`, `2%`, and `4%` respectively. A randomly chosen sensor is faulty ({{F}}). Find the exact value of {{P(M_3 | F)}}.",
        options: ["{{4/21}}", "{{7/21}}", "{{10/21}}", "{{11/21}}"],
        answerIndex: 2,
        hints: [
          "Multiply each machine's share by its fault rate to get the three faulty branches.",
          "Apply 3-event Bayes' theorem: {{P(M_3 ∩ F) / [P(M_1 ∩ F) + P(M_2 ∩ F) + P(M_3 ∩ F)]}}.",
        ],
        explanation:
          "Faulty branches are {{0.40(0.01) = 0.004}}, {{0.35(0.02) = 0.007}}, and {{0.25(0.04) = 0.010}}, totalling {{P(F) = 0.021}}. Hence {{P(M_3 | F) = 0.010 / 0.021 = 10/21}}.",
      },
      {
        id: "4-stats-probability-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "probability-conditional-bayes",
        question:
          "It rains on `30%` of mornings ({{R}}). A commuter is late (`L`) with probability `0.4` if it rains and `0.1` if it does not rain. Given that the commuter arrived **on time** ({{L'}}), find the exact probability it rained ({{P(R | L')}}).",
        options: ["{{7/9}}", "{{12/19}}", "{{3/10}}", "{{2/9}}"],
        answerIndex: 3,
        hints: [
          "Careful: we are conditioning on arriving **on time** ({{L'}}), so use {{P(L' | R) = 0.6}} and {{P(L' | R') = 0.9}}!",
          "Find {{P(R ∩ L') / [P(R ∩ L') + P(R' ∩ L')]}}.",
        ],
        explanation:
          "{{P(R ∩ L') = 0.3(0.6) = 0.18}} and {{P(R' ∩ L') = 0.7(0.9) = 0.63}}, so {{P(L') = 0.81}}. By Bayes' theorem, {{P(R | L') = 0.18 / 0.81 = 18/81 = 2/9}}.",
      },
      {
        id: "4-stats-probability-m3-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Find",
        guideRef: "continuous-rvs-pdf-cdf-hl",
        question:
          "A continuous random variable {{X}} has PDF {{f(x) = k(3 - x)}} for {{0 <= x <= 3}}, and `0` otherwise. What is the exact value of {{k}}?",
        options: ["{{1/9}}", "{{2/9}}", "{{4/9}}", "{{1/3}}"],
        answerIndex: 1,
        hints: [
          "Integrate {{k(3 - x)}} from `0` to `3` and set equal to `1` (or use the area of a triangle of base `3` and height `3k`!).",
        ],
        explanation:
          "{{∫_0^3 k(3 - x) dx = k[3x - x^2/2]_0^3 = k(9 - 9/2) = (9/2)k = 1}}, giving {{k = 2/9}}.",
      },
      {
        id: "4-stats-probability-m3-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "continuous-rvs-pdf-cdf-hl",
        question:
          "A continuous RV {{X}} has PDF {{f(x) = 3 x^2}} for {{0 <= x <= 1}}, and `0` otherwise. Find the exact value of {{P(0.5 < X < 1)}}.",
        options: ["{{7/8}}", "{{3/4}}", "{{1/8}}", "{{5/8}}"],
        answerIndex: 0,
        hints: [
          "Evaluate the definite integral {{∫_{0.5}^1 3 x^2 dx = [x^3]_{0.5}^1}}.",
        ],
        explanation:
          "{{P(0.5 < X < 1) = ∫_{1/2}^1 3 x^2 dx = [x^3]_{1/2}^1 = 1 - (1/2)^3 = 1 - 1/8 = 7/8}}.",
      },
      {
        id: "4-stats-probability-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "continuous-rvs-pdf-cdf-hl",
        question:
          "A continuous random variable {{X}} has CDF {{F(x) = 1 - e^(-2x)}} for {{x >= 0}} (and `0` for `x < 0`). What is its probability density function {{f(x)}} for {{x >= 0}}?",
        options: [
          "{{e^(-2x)}}",
          "{{-2 e^(-2x)}}",
          "{{(1/2) e^(-2x)}}",
          "{{2 e^(-2x)}}",
        ],
        answerIndex: 3,
        hints: [
          "The PDF is the derivative of the CDF: {{f(x) = F'(x)}}.",
          "Apply the chain rule carefully to {{-e^(-2x)}} — watch the double negative!",
        ],
        explanation:
          "Differentiating {{F(x) = 1 - e^(-2x)}} gives {{f(x) = F'(x) = -(-2) e^(-2x) = 2 e^(-2x)}} for {{x >= 0}}.",
      },
      {
        id: "4-stats-probability-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "continuous-rvs-pdf-cdf-hl",
        question:
          "A continuous RV {{X}} has PDF {{f(x) = (1/4) x^3}} for {{0 <= x <= 2}}, and `0` otherwise. What is the **mode** of {{X}}?",
        options: ["0", "1", "2", "{{2^(3/4)}}"],
        answerIndex: 2,
        hints: [
          "The mode is the value of {{x}} that maximises {{f(x)}} on `[0, 2]` — not necessarily where {{f'(x) = 0}}!",
          "Is {{(1/4) x^3}} increasing or decreasing across `[0, 2]`?",
        ],
        explanation:
          "Since {{f'(x) = (3/4) x^2 > 0}} on `(0, 2]`, {{f(x)}} is strictly increasing on `[0, 2]` and achieves its global maximum at the right endpoint {{x = 2}}.",
      },
      {
        id: "4-stats-probability-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "continuous-rvs-pdf-cdf-hl",
        question:
          "A continuous RV {{X}} has PDF {{f(x) = 3 x^2}} for {{0 <= x <= 1}}, and `0` otherwise. What is the exact **median** {{m}} of {{X}}?",
        options: ["{{cbrt(1/2)}}", "{{sqrt(1/2)}}", "{{1/2}}", "{{3/4}}"],
        answerIndex: 0,
        hints: [
          "Set {{∫_0^m 3 x^2 dx = 1/2}}.",
          "Simplify to {{m^3 = 1/2}} and take the cube root.",
        ],
        explanation:
          "{{∫_0^m 3 x^2 dx = m^3 = 1/2}}, so the exact median is {{m = cbrt(1/2)}}.",
      },
      {
        id: "4-stats-probability-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "continuous-rvs-pdf-cdf-hl",
        question:
          "A continuous RV {{X}} has PDF {{f(x) = (1/2) sin(x)}} for {{0 <= x <= pi}}, and `0` otherwise. What is the exact value of {{E(X)}}?",
        options: ["{{pi/4}}", "{{pi/2}}", "{{pi}}", "{{2/pi}}"],
        answerIndex: 1,
        hints: [
          "Look at the graph of {{y = (1/2) sin(x)}} on `[0, π]` — is it symmetric?",
          "You can also confirm via integration by parts: {{∫_0^{pi} (1/2) x sin(x) dx}}.",
        ],
        explanation:
          "The density {{f(x) = (1/2) sin(x)}} is perfectly symmetric about {{x = pi/2}} on `[0, π]`, so its mean equals the axis of symmetry: {{E(X) = pi/2}}.",
      },
      {
        id: "4-stats-probability-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "continuous-rvs-pdf-cdf-hl",
        question:
          "A continuous RV {{X}} has PDF {{f(x) = 2x}} for {{0 <= x <= 1}}, and `0` otherwise. Find the exact **variance** {{Var(X)}}.",
        options: ["{{1/9}}", "{{1/6}}", "{{2/9}}", "{{1/18}}"],
        answerIndex: 3,
        hints: [
          "Compute {{E(X) = ∫_0^1 2 x^2 dx = 2/3}} and {{E(X^2) = ∫_0^1 2 x^3 dx = 1/2}}.",
          "Subtract: {{Var(X) = E(X^2) - [E(X)]^2}}.",
        ],
        explanation:
          "{{E(X) = [2 x^3 / 3]_0^1 = 2/3}} and {{E(X^2) = [x^4 / 2]_0^1 = 1/2}}. Hence {{Var(X) = 1/2 - (2/3)^2 = 1/2 - 4/9 = 1/18}}.",
      },
      {
        id: "4-stats-probability-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "continuous-rvs-pdf-cdf-hl",
        question:
          "A random variable {{X}} satisfies {{E(X) = 4}} and {{E(X^2) = 21}}. Find the exact value of {{Var(2X - 5)}}.",
        options: ["10", "15", "20", "84"],
        answerIndex: 2,
        hints: [
          "First find {{Var(X) = E(X^2) - [E(X)]^2 = 21 - 4^2}}.",
          "Apply {{Var(kX + m) = k^2 Var(X)}} with {{k = 2}} and {{m = -5}}.",
        ],
        explanation:
          "{{Var(X) = 21 - 16 = 5}}. Subtracting `5` does not change variance, while multiplying by `2` multiplies variance by {{2^2 = 4}}, so {{Var(2X - 5) = 4 * 5 = 20}}.",
      },
      {
        id: "4-stats-probability-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "continuous-rvs-pdf-cdf-hl",
        question:
          "A continuous RV {{X}} has PDF {{f(x) = 2x}} for {{0 < x <= 1}}, and `0` otherwise. Find the exact value of {{E(1/X)}}.",
        options: ["2", "{{3/2}}", "{{2/3}}", "1"],
        answerIndex: 0,
        hints: [
          "Caution: {{E(1/X)}} is NOT equal to {{1 / E(X)}}!",
          "Use {{E(g(X)) = ∫_0^1 (1/x) * f(x) dx = ∫_0^1 (1/x)(2x) dx}}.",
        ],
        explanation:
          "By the Law of the Unconscious Statistician, {{E(1/X) = ∫_0^1 (1/x)(2x) dx = ∫_0^1 2 dx = 2}} (note this differs from {{1/E(X) = 3/2}}).",
      },
      {
        id: "4-stats-probability-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "continuous-rvs-pdf-cdf-hl",
        question:
          "A continuous RV {{X}} has piecewise PDF {{f(x) = 1/6}} for {{0 <= x <= 2}}, {{f(x) = 1/3}} for {{2 < x <= 4}}, and `0` otherwise. What is the exact **median** of {{X}}?",
        options: ["2.0", "2.25", "3.0", "2.5"],
        answerIndex: 3,
        hints: [
          "First find the area of the first piece `[0, 2]`: {{2 * (1/6) = 1/3 < 0.5}}, so the median lies in `(2, 4]`.",
          "Solve {{1/3 + (1/3)(m - 2) = 1/2}} for {{m}}.",
        ],
        explanation:
          "The interval `[0, 2]` carries area {{2 * (1/6) = 1/3}}, leaving {{1/2 - 1/3 = 1/6}} more area needed inside `(2, 4]`. Since height is `1/3`, we need width {{(1/6) / (1/3) = 0.5}}, so {{m = 2 + 0.5 = 2.5}}.",
      },
      {
        id: "4-stats-probability-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "continuous-rvs-pdf-cdf-hl",
        question:
          "An exponential waiting time {{X}} has PDF {{f(x) = λ e^(-λx)}} for {{x >= 0}} (where {{λ > 0}}). What is the exact **median** {{m}} of {{X}} in terms of {{λ}}?",
        options: ["{{1/λ}}", "{{(ln 2)/λ}}", "{{λ ln 2}}", "{{e^(-λ/2)}}"],
        answerIndex: 1,
        hints: [
          "Integrate to find the CDF: {{F(m) = ∫_0^m λ e^(-λx) dx = 1 - e^(-λm)}}.",
          "Set {{1 - e^(-λm) = 1/2}} and solve using natural logarithms.",
        ],
        explanation:
          "From {{1 - e^(-λm) = 1/2}}, we get {{e^(-λm) = 1/2}}, so {{-λm = -ln 2}} and {{m = (ln 2)/λ}}.",
      },
      {
        id: "4-stats-probability-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "probability-conditional-bayes",
        question:
          "A box contains `2` fair coins (`P(H) = 0.5`) and `1` biased coin (`P(H) = 0.8`). One coin is selected at random and tossed twice; both tosses land heads (`HH`). What is the exact probability that the **biased** coin was chosen?",
        options: ["{{16/25}}", "{{25/57}}", "{{32/57}}", "{{8/19}}"],
        answerIndex: 2,
        hints: [
          "Prior probabilities are {{P(" + "\"Fair\"" + ") = 2/3}} and {{P(" + "\"Biased\"" + ") = 1/3}}.",
          "Find {{P(HH | " + "\"Fair\"" + ") = 1/4}} and {{P(HH | " + "\"Biased\"" + ") = 16/25}}, then apply Bayes' theorem.",
        ],
        explanation:
          "{{P(F ∩ HH) = (2/3)(1/4) = 1/6 = 25/150}} and {{P(B ∩ HH) = (1/3)(16/25) = 16/75 = 32/150}}. By Bayes' theorem, {{P(B | HH) = 32 / (25 + 32) = 32/57}}.",
      },
    ],
  },
];
