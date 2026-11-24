import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "4-stats-probability",
  title: "Topic 4: Descriptive Statistics, Probability & Distributions",
  strand: "Topic 4: Statistics & Probability",
  icon: "📊",
  level: "SL",
  summary:
    "Master univariate descriptive statistics, outlier fences, linear data coding, conditional probability, Binomial and Normal modelling, plus [HL] Bayes' theorem and continuous probability density functions (FA2029 scope — bivariate correlation/regression excluded).",
  intro:
    "Statistics and Probability turn raw uncertainty into quantitative precision. Under the **FA2029 IB Maths AA Subject Brief** (provisional; full guide due Feb 2027), Topic 4 sharpens its focus on univariate descriptive statistics, sampling, conditional probability, Binomial and Normal distributions — and at **HL**, Bayes' theorem up to 3 events plus calculus-driven continuous random variables (PDFs, CDFs, expectation, and variance). Notice that former SL bivariate correlation (`r`) and linear regression were removed in FA2029, giving you more time to master distribution modelling, exact Paper 1 algebra, and TI-Nspire CX workflows.",

  guide: [
    // =========================================================================
    // SECTION 1: DESCRIPTIVE STATS & SAMPLING (SL)
    // =========================================================================
    {
      id: "descriptive-stats-sampling",
      heading: "Sampling, Histograms, Box Plots, Outliers, Variance & Standard Deviation",
      level: "SL",
      discovery: {
        problem:
          "Two Year 12 classes sit the same quiz. Class A scores `70, 72, 74, 76, 78` while Class B scores `30, 72, 74, 76, 118`. Both classes have the **exact same mean** (`74`), **exact same median** (`74`), and **exact same IQR** (`4`)! What single measure exposes how wildly different the two classes are — and what happens to the mean and standard deviation if the teacher adds `5` bonus marks to every script, or doubles every score?",
        idea:
          "Mean, median, and IQR alone can stay completely blind to extreme tails. Measuring every datum's squared distance from the mean produces **variance** `σ²` and **standard deviation** `σ` (Class A: `σ ≈ 2.83`; Class B: `σ ≈ 27.9`!). Adding `+5` shifts every score together without changing gaps, so `σ` stays fixed; doubling scores doubles every gap, multiplying `σ` by `2` and variance `σ²` by `2² = 4`.",
      },
      body: `### Populations, Samples & Sampling Methods

A **population** is the entire group of interest; a **sample** is a subset selected to represent it. Exam questions love asking you to identify a sampling technique and explain its **bias** or **reliability**:

| Sampling Method | How It Works | Key Advantage / Risk |
| --- | --- | --- |
| **Simple Random** | Every member has an equal chance (e.g. random number generator). | Unbiased, but requires a full population list (sampling frame). |
| **Systematic** | Pick a random start, then select every {{k}}th member. | Fast and even spread, but risky if the list has a hidden periodic pattern. |
| **Stratified** | Split into subgroups (strata) and take random samples proportional to stratum size. | Guarantees fair subgroup representation; needs known stratum sizes. |
| **Quota** | Fill fixed subgroup counts using non-random choice (e.g. first 20 students passing a gate). | Cheap and quick, but **non-random** — vulnerable to interviewer selection bias. |
| **Convenience** | Survey whoever is easiest to reach. | Minimal effort, high **selection bias** — cannot safely generalise to the population. |

### Histograms, Cumulative Frequency & Box-and-Whisker Plots

- **Discrete vs Continuous data:** Discrete data take isolated values (number of siblings); continuous data are measured on an interval (height, time) and grouped into continuous classes without gaps on a **histogram**.
- **Grouped-data estimates:** When data are grouped into intervals, we estimate the mean and variance using **mid-interval values** — always state that the result is an *estimate* because raw individual values are lost.
- **Cumulative frequency curves (ogives):** Plot cumulative frequencies against the **upper class boundary** of each interval (never the midpoint!), starting at \`(lower boundary of first class, 0)\`. Read the **median** at \`50%\` of total frequency {{N}}, lower quartile {{Q_1}} at \`25%\`, upper quartile {{Q_3}} at \`75%\`, and **interquartile range** {{IQR = Q_3 - Q_1}}.

> **1.5 × IQR Outlier Test (IB Standard Rule):**
> A data value {{x}} is classified as an **outlier** if:
> {{x < Q_1 - 1.5 * IQR}} (below the lower fence) **or** {{x > Q_3 + 1.5 * IQR}} (above the upper fence).
> On a box-and-whisker diagram, mark outliers with a cross/asterisk and stop the whisker at the most extreme **non-outlier** value.

### Population Variance {{σ^2}} & Standard Deviation {{σ}}

IB Maths AA evaluates the **population** variance and standard deviation of a dataset of {{n}} values:

    {{σ^2 = (sum (x_i - μ)^2) / n = (sum x_i^2) / n - μ^2}}
    {{σ = sqrt(σ^2)}}

For frequency tables (with total frequency {{N = sum f_i}}):

    {{μ = (sum f_i x_i) / N}},    {{σ^2 = (sum f_i x_i^2) / N - μ^2}}

On the **TI-Nspire CX**, enter data in *Lists & Spreadsheets* → \`Menu → 4 Statistics → 1 Stat Calculations → 1 One-Variable Statistics\`. Always read **\`σx\`** (population SD), **never** \`sx\`!

### Linear Data Coding ({{Y = aX + b}})

When every data value {{x_i}} is transformed linearly into {{y_i = a x_i + b}} (for constants {{a ≠ 0}} and {{b}}):

| Statistic | Effect of {{Y = aX + b}} | Why? |
| --- | --- | --- |
| **Mean, Median, {{Q_1}}, {{Q_3}}** | Multiply by {{a}}, then add {{b}} | Location shifts and scales with every data point. |
| **Range, IQR, Standard Deviation {{σ}}** | Multiply by {{|a|}} (ignore {{+ b}}) | Shifting all points by {{+ b}} leaves every distance unchanged; spread cannot be negative. |
| **Variance {{σ^2}}** | Multiply by {{a^2}} (ignore {{+ b}}) | Variance uses *squared* distances from the mean. |`,
      diagram: `<svg viewBox="0 0 520 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Box-and-whisker diagram illustrating Q1, median, Q3, IQR, upper and lower 1.5 times IQR outlier fences, and an outlier point"><rect x="0" y="0" width="520" height="190" rx="12" fill="#ffffff"/><line x1="36" y1="145" x2="492" y2="145" stroke="#52517a" stroke-width="1.5"/><line x1="70" y1="36" x2="70" y2="145" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="418" y1="36" x2="418" y2="145" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="5,4"/><text x="70" y="26" font-size="11" font-weight="700" text-anchor="middle" fill="#c2410c">Lower fence</text><text x="70" y="164" font-size="10.5" text-anchor="middle" fill="#c2410c">Q₁ − 1.5×IQR</text><text x="418" y="26" font-size="11" font-weight="700" text-anchor="middle" fill="#c2410c">Upper fence</text><text x="418" y="164" font-size="10.5" text-anchor="middle" fill="#c2410c">Q₃ + 1.5×IQR</text><line x1="120" y1="90" x2="186" y2="90" stroke="#161534" stroke-width="2.5"/><line x1="120" y1="74" x2="120" y2="106" stroke="#161534" stroke-width="2.5"/><rect x="186" y="64" width="116" height="52" rx="4" fill="#e0e7ff" stroke="#4338ca" stroke-width="2.5"/><line x1="238" y1="64" x2="238" y2="116" stroke="#312e81" stroke-width="3"/><line x1="302" y1="90" x2="380" y2="90" stroke="#161534" stroke-width="2.5"/><line x1="380" y1="74" x2="380" y2="106" stroke="#161534" stroke-width="2.5"/><circle cx="462" cy="90" r="5" fill="#c2410c"/><text x="462" y="76" font-size="11" font-weight="700" text-anchor="middle" fill="#c2410c">Outlier</text><line x1="186" y1="48" x2="302" y2="48" stroke="#0d9488" stroke-width="2"/><line x1="186" y1="43" x2="186" y2="53" stroke="#0d9488" stroke-width="2"/><line x1="302" y1="43" x2="302" y2="53" stroke="#0d9488" stroke-width="2"/><text x="244" y="42" font-size="11.5" font-weight="700" text-anchor="middle" fill="#0d9488">IQR = Q₃ − Q₁</text><text x="120" y="132" font-size="11" text-anchor="middle" fill="#161534">Min</text><text x="186" y="132" font-size="11" font-weight="700" text-anchor="middle" fill="#4338ca">Q₁</text><text x="238" y="132" font-size="11" font-weight="700" text-anchor="middle" fill="#312e81">Median</text><text x="302" y="132" font-size="11" font-weight="700" text-anchor="middle" fill="#4338ca">Q₃</text><text x="380" y="132" font-size="10.5" text-anchor="middle" fill="#161534">Max (non-outlier)</text></svg>`,
      diagramCaption:
        "Box-and-whisker diagram showing quartiles, IQR, 1.5 × IQR fences, and an outlier plotted beyond the upper whisker.",
      workedExamples: [
        {
          title: "Outlier Fences & Box-Plot Verification",
          problem:
            "A dataset of 40 reaction times (ms) has lower quartile {{Q_1 = 210}}, median {{232}}, and upper quartile {{Q_3 = 258}}. Determine whether a reaction time of `335` ms is an outlier.",
          steps: [
            "Compute the interquartile range: {{IQR = Q_3 - Q_1 = 258 - 210 = 48}} ms.",
            "Calculate the upper outlier fence: {{Q_3 + 1.5 * IQR = 258 + 1.5 * 48 = 258 + 72 = 330}} ms.",
            "Compare the observation: since `335 > 330`, the value `335` ms lies strictly beyond the upper fence.",
          ],
          answer: "Yes, `335` ms is an outlier because `335 > 330`.",
          yourTurn: {
            question:
              "A sample has {{Q_1 = 24}} and {{Q_3 = 36}}. Calculate the **upper outlier fence** {{Q_3 + 1.5 * IQR}}.",
            answer: { type: "number", value: 54 },
            solution:
              "{{IQR = 36 - 24 = 12}}, so the upper fence is {{36 + 1.5 * 12 = 36 + 18 = 54}}.",
          },
        },
        {
          title: "Variance & Standard Deviation from Summary Totals (Non-GDC)",
          problem:
            "Ten students have heights {{x_1, x_2, ..., x_10}} (cm) with {{sum x_i = 1700}} and {{sum x_i^2 = 289360}}. Find the exact variance {{σ^2}} and standard deviation {{σ}}.",
          steps: [
            "Find the mean: {{μ = 1700/10 = 170}} cm.",
            "Apply the computational variance formula: {{σ^2 = (sum x_i^2)/n - μ^2 = 289360/10 - 170^2}}.",
            "Evaluate: {{σ^2 = 28936 - 28900 = 36}}.",
            "Take the positive square root: {{σ = sqrt(36) = 6}} cm.",
          ],
          answer: "{{σ^2 = 36}}, {{σ = 6}} cm.",
          yourTurn: {
            question:
              "Five measurements satisfy {{sum x = 30}} and {{sum x^2 = 200}}. Calculate the exact population variance {{σ^2}}.",
            answer: { type: "number", value: 4 },
            solution:
              "{{μ = 30/5 = 6}}, so {{σ^2 = 200/5 - 6^2 = 40 - 36 = 4}}.",
          },
        },
        {
          title: "Linear Coding of Mean, SD & Variance",
          problem:
            "A dataset {{X}} has mean `14` and variance `9`. Each value is transformed using {{Y = -2X + 15}}. Find the mean, standard deviation, and variance of {{Y}}.",
          steps: [
            "Mean transforms linearly: {{ȳ = -2(14) + 15 = -28 + 15 = -13}}.",
            "Original standard deviation is {{σ_X = sqrt(9) = 3}}.",
            "Standard deviation scales by {{|a| = |-2| = 2}} (ignoring `+15`): {{σ_Y = 2 * 3 = 6}}.",
            "Variance scales by {{a^2 = (-2)^2 = 4}}: {{σ_Y^2 = 4 * 9 = 36}}.",
          ],
          answer: "Mean `−13`, standard deviation `6`, variance `36`.",
          yourTurn: {
            question:
              "Dataset {{X}} has variance `5`. Every value is transformed by {{Y = 3X - 11}}. Find the exact variance of {{Y}}.",
            answer: { type: "number", value: 45 },
            solution:
              "Subtracting `11` does not change spread; multiplying by `3` scales variance by {{3^2 = 9}}, giving {{9 * 5 = 45}}.",
          },
        },
      ],
      keyPoints: [
        "Cumulative frequency graphs are plotted at **upper class boundaries**, whereas grouped mean/variance estimates use **mid-interval values**.",
        "Outlier test: strictly below {{Q_1 - 1.5 * IQR}} or strictly above {{Q_3 + 1.5 * IQR}}.",
        "IB Maths AA uses population SD **`σx`** on the TI-Nspire CX (`σ² = (∑ x²)/n − μ²`), never sample `sx`.",
        "For linear coding {{Y = aX + b}}: mean shifts and scales (`aμ + b`), SD multiplies by {{|a|}}, and variance multiplies by {{a^2}}.",
      ],
      whyItWorks:
        "Why does {{σ^2 = (sum x_i^2)/n - μ^2}} hold? Expand the definition: {{(1/n) sum (x_i - μ)^2 = (1/n) sum (x_i^2 - 2μ x_i + μ^2) = (1/n) sum x_i^2 - 2μ((1/n) sum x_i) + μ^2}}. Since {{(1/n) sum x_i = μ}}, the last two terms simplify to {{-2μ^2 + μ^2 = -μ^2}}! Similarly, for {{y_i = ax_i + b}}, we get {{y_i - ȳ = (ax_i + b) - (aμ + b) = a(x_i - μ)}} — the constant {{b}} cancels identically before squaring, leaving {{a^2}} as a factor.",
      strategies: [
        "When comparing two box plots on an exam, always comment on BOTH **location** (median) and **spread** (IQR/range) in context with units.",
        "In coding questions, double-check whether the question gives you **standard deviation** `σ` or **variance** `σ²` before applying `|a|` vs `a²`.",
        "When merging two groups of sizes {{n_1, n_2}} with means {{μ_1, μ_2}}, NEVER average the means unless {{n_1 = n_2}} — compute the combined sum {{n_1 μ_1 + n_2 μ_2}} and divide by {{n_1 + n_2}}.",
      ],
      thinkDeeper:
        "Suppose two separate datasets of sizes {{n_1}} and {{n_2}} have known means {{μ_1, μ_2}} and variances {{σ_1^2, σ_2^2}}. Can you recover the exact variance of the combined dataset without knowing any individual values? Yes! Rearrange {{σ^2 = (sum x^2)/n - μ^2}} to recover {{sum x^2 = n(σ^2 + μ^2)}} for each group, add both sums of squares, and divide by {{n_1 + n_2}} before subtracting the combined mean squared!",
    },

    // =========================================================================
    // SECTION 2: PROBABILITY, CONDITIONAL & BAYES (SL + HL BAYES)
    // =========================================================================
    {
      id: "probability-conditional-bayes",
      heading: "Combined & Conditional Probability, Independence & [HL] Bayes' Theorem",
      level: "SL",
      discovery: {
        problem:
          "A rapid diagnostic test for a rare condition affecting `1%` of a population correctly detects `95%` of infected people (sensitivity) and falsely flags `5%` of healthy people (false-positive rate). A random person tests positive. Why is the chance they actually have the condition **only about 16%**, not 95%?",
        idea:
          "Imagine `10,000` people: `100` have the condition (`95` test positive) while `9,900` are healthy (`495` test positive!). Out of `95 + 495 = 590` positive tests in total, only `95` are genuine — so {{P(D | +) = 95/590 = 19/118 ≈ 16.1%}}. Conditioning reverses the direction of probability, and ignoring the low prior base rate is the classic **base-rate fallacy**.",
      },
      body: `### Combined Events, Mutually Exclusive vs Independent

For any two events {{A}} and {{B}} in sample space {{U}}:

- **Complement:** {{P(A') = 1 - P(A)}}
- **Combined events (Addition Law):** {{P(A ∪ B) = P(A) + P(B) - P(A ∩ B)}}
- **Mutually exclusive (disjoint):** {{A}} and {{B}} cannot happen together, so {{P(A ∩ B) = 0}} and {{P(A ∪ B) = P(A) + P(B)}}.
- **Independent events:** Knowing {{B}} occurred gives zero information about {{A}}, so:

    {{P(A ∩ B) = P(A) * P(B)}}    equivalently    {{P(A | B) = P(A) = P(A | B')}}

> **Crucial Warning:** If {{P(A) > 0}} and {{P(B) > 0}}, mutually exclusive events are **NEVER independent**! If {{A}} happens, {{B}} becomes impossible (\`P(B | A) = 0 ≠ P(B)\`), so they are maximally *dependent*.

### Conditional Probability & Visual Tools

The probability of {{A}} **given that** {{B}} has occurred (\`P(B) > 0\`) restricts the universe to {{B}}:

    {{P(A | B) = P(A ∩ B) / P(B)}}    ⇒    {{P(A ∩ B) = P(B) * P(A | B)}}

- **Venn diagrams:** Best for simultaneous properties (\`A\`, \`B\`, \`A ∩ B\`). Always fill the **intersection** \`P(A ∩ B)\` first, then subtract to get the crescents \`P(A ∩ B')\` and \`P(A' ∩ B)\`, and check everything sums to \`1\`.
- **Tree diagrams:** Best for sequential experiments (especially **without replacement**, where second-stage probabilities change!). Multiply along branches for intersections; add across disjoint branches for unions.

### [HL] Law of Total Probability & Bayes' Theorem (Up to 3 Events)

Suppose {{B_1, B_2, B_3}} partition the entire sample space (mutually exclusive and exhaustive, so {{P(B_1) + P(B_2) + P(B_3) = 1}}). Any event {{A}} can happen via branch {{B_1}}, {{B_2}}, or {{B_3}}:

    {{P(A) = P(B_1)P(A | B_1) + P(B_2)P(A | B_2) + P(B_3)P(A | B_3)}}

**[HL] Bayes' Theorem** flips the conditioning from {{P(A | B_i)}} to the posterior probability {{P(B_i | A)}}:

    {{P(B_i | A) = (P(B_i) P(A | B_i)) / (P(B_1)P(A | B_1) + P(B_2)P(A | B_2) + P(B_3)P(A | B_3))}}

Think of it directly on a tree diagram: **numerator = the single path through {{B_i}} to {{A}}; denominator = the sum of ALL paths ending in {{A}}.**`,
      diagram: `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-branch probability tree diagram illustrating the Law of Total Probability and Bayes theorem for mutually exclusive events B1, B2, B3 and outcome A"><rect x="0" y="0" width="520" height="230" rx="12" fill="#ffffff"/><circle cx="42" cy="115" r="5" fill="#161534"/><line x1="47" y1="115" x2="170" y2="42" stroke="#4338ca" stroke-width="2.5"/><line x1="47" y1="115" x2="170" y2="115" stroke="#0d9488" stroke-width="2.2"/><line x1="47" y1="115" x2="170" y2="188" stroke="#7c3aed" stroke-width="2.2"/><text x="95" y="66" font-size="11.5" font-weight="700" fill="#4338ca">P(B₁)</text><text x="108" y="108" font-size="11.5" font-weight="700" fill="#0d9488">P(B₂)</text><text x="95" y="172" font-size="11.5" font-weight="700" fill="#7c3aed">P(B₃)</text><circle cx="174" cy="42" r="14" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="174" y="46" font-size="11.5" font-weight="800" text-anchor="middle" fill="#312e81">B₁</text><circle cx="174" cy="115" r="14" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/><text x="174" y="119" font-size="11.5" font-weight="800" text-anchor="middle" fill="#0f766e">B₂</text><circle cx="174" cy="188" r="14" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/><text x="174" y="192" font-size="11.5" font-weight="800" text-anchor="middle" fill="#6b21a8">B₃</text><line x1="188" y1="38" x2="320" y2="22" stroke="#4338ca" stroke-width="2.6"/><line x1="188" y1="46" x2="320" y2="62" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="188" y1="111" x2="320" y2="95" stroke="#0d9488" stroke-width="2.4"/><line x1="188" y1="119" x2="320" y2="135" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="188" y1="184" x2="320" y2="168" stroke="#7c3aed" stroke-width="2.4"/><line x1="188" y1="192" x2="320" y2="208" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><text x="252" y="23" font-size="10.5" font-weight="700" fill="#4338ca">P(A | B₁)</text><text x="252" y="96" font-size="10.5" font-weight="700" fill="#0d9488">P(A | B₂)</text><text x="252" y="169" font-size="10.5" font-weight="700" fill="#7c3aed">P(A | B₃)</text><text x="256" y="64" font-size="10" fill="#6b7280">P(A′ | B₁)</text><text x="256" y="137" font-size="10" fill="#6b7280">P(A′ | B₂)</text><text x="256" y="210" font-size="10" fill="#6b7280">P(A′ | B₃)</text><rect x="326" y="11" width="180" height="22" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.4"/><text x="416" y="26" font-size="10.5" font-weight="700" text-anchor="middle" fill="#312e81">A : P(B₁)P(A | B₁)</text><text x="336" y="66" font-size="10.5" fill="#6b7280">A′</text><rect x="326" y="84" width="180" height="22" rx="6" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.4"/><text x="416" y="99" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0f766e">A : P(B₂)P(A | B₂)</text><text x="336" y="139" font-size="10.5" fill="#6b7280">A′</text><rect x="326" y="157" width="180" height="22" rx="6" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.4"/><text x="416" y="172" font-size="10.5" font-weight="700" text-anchor="middle" fill="#6b21a8">A : P(B₃)P(A | B₃)</text><text x="336" y="212" font-size="10.5" fill="#6b7280">A′</text></svg>`,
      diagramCaption:
        "[HL] 3-branch Bayes tree: P(B₁ | A) divides the top highlighted branch by the sum of all three highlighted A-branches.",
      workedExamples: [
        {
          title: "Addition Law, Independence Test & Conditional Probability",
          problem:
            "Events {{A}} and {{B}} satisfy {{P(A) = 0.5}}, {{P(B) = 0.4}}, and {{P(A ∪ B) = 0.7}}. Determine whether {{A}} and {{B}} are independent, and find {{P(A | B')}}.",
          steps: [
            "Use the addition law: {{P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.5 + 0.4 - 0.7 = 0.2}}.",
            "Test independence: {{P(A) * P(B) = 0.5 * 0.4 = 0.2 = P(A ∩ B)}}. Therefore {{A}} and {{B}} are independent.",
            "Find {{P(A ∩ B') = P(A) - P(A ∩ B) = 0.5 - 0.2 = 0.3}} and {{P(B') = 1 - 0.4 = 0.6}}.",
            "Divide: {{P(A | B') = 0.3 / 0.6 = 0.5}} (which equals {{P(A)}}, confirming independence!).",
          ],
          answer: "{{A}} and {{B}} are independent; {{P(A | B') = 0.5}}.",
          yourTurn: {
            question:
              "Given {{P(A) = 0.6}}, {{P(B) = 0.5}}, and {{P(A ∪ B) = 0.85}}, calculate {{P(A | B)}} as a decimal.",
            answer: { type: "number", value: 0.5 },
            solution:
              "{{P(A ∩ B) = 0.6 + 0.5 - 0.85 = 0.25}}, so {{P(A | B) = 0.25 / 0.5 = 0.5}}.",
          },
        },
        {
          title: "Sampling Without Replacement & Reverse Conditioning",
          problem:
            "A bag contains `4` red and `6` blue counters. Two counters are drawn sequentially without replacement. Find the probability that (a) both are the same colour, and (b) the first counter was red given that the second counter is red.",
          steps: [
            "Part (a): {{P(R_1 R_2) = (4/10)(3/9) = 12/90}} and {{P(B_1 B_2) = (6/10)(5/9) = 30/90}}.",
            "Add disjoint paths: {{P(" + "\"same\"" + ") = 12/90 + 30/90 = 42/90 = 7/15}}.",
            "Part (b): Total {{P(R_2) = P(R_1 R_2) + P(B_1 R_2) = (4/10)(3/9) + (6/10)(4/9) = 12/90 + 24/90 = 36/90 = 4/10}}.",
            "Condition: {{P(R_1 | R_2) = P(R_1 ∩ R_2) / P(R_2) = (12/90) / (36/90) = 1/3}}.",
          ],
          answer: "(a) {{7/15}}; (b) {{1/3}}.",
          yourTurn: {
            question:
              "A drawer holds `3` white and `5` black socks. Two are pulled at random without replacement. Find the exact probability that both socks are black (as a simplified fraction).",
            answer: { type: "fraction", n: 5, d: 14, simplest: true },
            solution:
              "{{P(B_1 B_2) = (5/8) * (4/7) = 20/56 = 5/14}}.",
          },
        },
        {
          title: "[HL] Three-Branch Bayes' Theorem",
          problem:
            "A microchip firm sources `50%` of chips from Factory {{B_1}}, `30%` from {{B_2}}, and `20%` from {{B_3}}. Their respective defect rates are `2%`, `3%`, and `5%`. A randomly selected chip is found to be defective ({{D}}). Find the exact probability that it came from Factory {{B_3}}.",
          steps: [
            "Compute each defective branch probability: {{P(B_1 ∩ D) = 0.50 * 0.02 = 0.010}}, {{P(B_2 ∩ D) = 0.30 * 0.03 = 0.009}}, {{P(B_3 ∩ D) = 0.20 * 0.05 = 0.010}}.",
            "Sum by the Law of Total Probability: {{P(D) = 0.010 + 0.009 + 0.010 = 0.029}}.",
            "Apply Bayes' theorem: {{P(B_3 | D) = 0.010 / 0.029 = 10/29}} (≈ `0.345`).",
          ],
          answer: "{{P(B_3 | D) = 10/29}} (or `0.345` to 3 s.f.).",
          yourTurn: {
            question:
              "Using the same factory probabilities (`50%` at `2%` defect, `30%` at `3%` defect, `20%` at `5%` defect), find the exact probability {{P(B_2 | D)}} as a simplified fraction.",
            answer: { type: "fraction", n: 9, d: 29, simplest: true },
            solution:
              "{{P(B_2 ∩ D) = 0.30 * 0.03 = 0.009}} and {{P(D) = 0.029}}, so {{P(B_2 | D) = 0.009 / 0.029 = 9/29}}.",
          },
        },
      ],
      keyPoints: [
        "Always check **both** sides of {{P(A ∩ B) = P(A)P(B)}} to prove or disprove independence.",
        "Never confuse **mutually exclusive** (`P(A ∩ B) = 0`) with **independent** (`P(A ∩ B) = P(A)P(B)`).",
        "In conditional probability {{P(A | B)}}, the event **after the vertical bar** (`B`) is ALWAYS the denominator.",
        "[HL] For Bayes' theorem, sketch a quick tree diagram: list every branch ending in the observed event, add them for the denominator, and pick the target branch for the numerator.",
      ],
      whyItWorks:
        "Conditional probability simply rescales the region {{B}} so that its total probability becomes `1`. Because {{P(A ∩ B)}} can be factored symmetrically as {{P(B)P(A | B)}} OR {{P(A)P(B | A)}}, equating the two immediately yields Bayes' theorem: {{P(B | A) = P(B)P(A | B) / P(A)}}. Expanding {{P(A)}} across a complete partition {{B_1, B_2, B_3}} turns an unknown total probability into a weighted average of known conditional rates.",
      strategies: [
        "Translate English cues immediately: 'given that', 'knowing that', 'of those who...' all signal conditional probability `P(target | given)`.",
        "For 'at least one' problems, use the complement `1 − P(none)` — it usually collapses 5 cases into 1 calculation!",
        "On Paper 1 (Non-GDC), clear decimals in Bayes fractions (e.g. `0.010 / 0.029 → 10/29`) so your exact answer is spotless.",
      ],
      thinkDeeper:
        "In Example 2 above, notice that {{P(R_2) = 4/10 = P(R_1)}} even without replacement! Why does the marginal probability of the second draw equal the first draw? By symmetry, before looking at any card or marble, every position in a random shuffle is equally likely to hold a red marble — conditioning on the first draw breaks that symmetry (`3/9` vs `4/9`), whereas averaging over all first draws restores it!",
    },

    // =========================================================================
    // SECTION 3: DISCRETE RVs, BINOMIAL & NORMAL (SL)
    // =========================================================================
    {
      id: "discrete-binomial-normal",
      heading: "Discrete RVs, Binomial B(n, p), Normal Distribution & Inverse Normal",
      level: "SL",
      discovery: {
        problem:
          "Maya scores `74` on a Physics test (`μ = 62, σ = 8`) and `82` on a Chemistry test (`μ = 70, σ = 12`). Both scores sit `12` marks above the class average. Why is her Physics performance actually much stronger relative to her peers?",
        idea:
          "Raw mark gaps ignore spread. Dividing the gap by the standard deviation converts both scores into universal **{{z}}-scores**: Physics is {{z = (74 - 62)/8 = +1.5}} standard deviations above the mean (top `6.7%`), while Chemistry is {{z = (82 - 70)/12 = +1.0}} standard deviation above the mean (top `15.9%`). Standardisation maps every Normal distribution onto a single benchmark: {{Z ~ N(0, 1)}}.",
      },
      body: `### Discrete Random Variables & Expected Value

A **discrete random variable** {{X}} takes countable values {{x_1, x_2, ...}} with probabilities satisfying {{0 <= P(X = x_i) <= 1}} and {{sum P(X = x_i) = 1}}.

- **Expected value (long-run mean):** {{E(X) = μ = sum x_i * P(X = x_i)}}
- **Fair game:** A game is fair if **{{E("net gain") = 0}}**, equivalently **{{E("payout") = "cost to play"}}**.

### The Binomial Distribution {{X ~ B(n, p)}}

Model a count of successes with {{X ~ B(n, p)}} when all four **BINS** conditions hold: **B**inary outcome (success/failure), **I**ndependent trials, fixed **N**umber of trials {{n}}, and **S**ame success probability {{p}} on every trial.

    {{P(X = r) = nCr * p^r * (1 - p)^(n - r)}},    {{r = 0, 1, ..., n}}
    {{E(X) = np}},    {{Var(X) = np(1 - p)}},    {{σ = sqrt(np(1 - p))}}

> **Careful with Discrete Inequalities!**
> Because {{X}} only takes integer values:
> - {{P(X < k) = P(X <= k - 1)}}
> - {{P(X >= k) = 1 - P(X <= k - 1)}}
> - {{P(X > k) = 1 - P(X <= k)}}
> - **TI-Nspire CX:** \`binomPdf(n, p, r)\` for {{P(X = r)}}; \`binomCdf(n, p, lower, upper)\` for {{P("lower" <= X <= "upper")}} (both endpoints inclusive!).

### The Normal Distribution {{X ~ N(μ, σ^2)}} & Standardisation

A continuous bell-shaped Normal model is written {{X ~ N(μ, σ^2)}} — note the **second parameter is variance {{σ^2}}**, whereas calculators ask for **standard deviation {{σ}}**!

- Symmetric about {{x = μ}} (mean = median = mode), total area = \`1\`, inflection points at {{μ ± σ}}.
- **Empirical Rule:** ≈ \`68.3%\` within {{μ ± 1σ}}, ≈ \`95.4%\` within {{μ ± 2σ}}, ≈ \`99.7%\` within {{μ ± 3σ}}.
- **Standardisation:** {{Z = (X - μ) / σ ~ N(0, 1)}}.
- **TI-Nspire CX:**
  - Probability: \`normCdf(lower, upper, μ, σ)\` (use \`-9E99\` or \`-∞\` for left tails, \`9E99\` or \`∞\` for right tails).
  - Reverse lookup (given **left-tail area** {{p}}): \`invNorm(p, μ, σ)\`! If you are given a *right-tail* probability {{P(X > a) = q}}, enter **\`1 − q\`** as the area.
  - **Finding unknown {{μ}} or {{σ}}:** Always standardise first using {{z = "invNorm"("left area", 0, 1)}} and solve {{(x - μ) / σ = z}}!`,
      diagram: `<svg viewBox="0 0 520 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal distribution bell curve showing symmetric 68 percent, 95 percent, and 99.7 percent standard deviation bands around the mean mu"><rect x="0" y="0" width="520" height="225" rx="12" fill="#ffffff"/><path d="M 195 170 L 195 97 C 215 62, 238 34, 260 34 C 282 34, 305 62, 325 97 L 325 170 Z" fill="#c7d2fe"/><path d="M 130 170 L 130 152 C 155 142, 175 124, 195 97 L 195 170 Z" fill="#e0e7ff"/><path d="M 325 170 L 325 97 C 345 124, 365 142, 390 152 L 390 170 Z" fill="#e0e7ff"/><path d="M 55 169 C 90 168, 112 162, 130 152 C 155 142, 175 124, 195 97 C 215 62, 238 34, 260 34 C 282 34, 305 62, 325 97 C 345 124, 365 142, 390 152 C 408 162, 430 168, 465 169" fill="none" stroke="#312e81" stroke-width="2.6"/><line x1="36" y1="170" x2="484" y2="170" stroke="#52517a" stroke-width="1.6"/><line x1="260" y1="34" x2="260" y2="170" stroke="#312e81" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="195" y1="97" x2="195" y2="170" stroke="#4338ca" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="325" y1="97" x2="325" y2="170" stroke="#4338ca" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="130" y1="152" x2="130" y2="170" stroke="#4338ca" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="390" y1="152" x2="390" y2="170" stroke="#4338ca" stroke-width="1.2" stroke-dasharray="3,3"/><text x="260" y="188" font-size="11.5" font-weight="800" text-anchor="middle" fill="#161534">μ</text><text x="195" y="188" font-size="10.5" text-anchor="middle" fill="#4338ca">μ − σ</text><text x="325" y="188" font-size="10.5" text-anchor="middle" fill="#4338ca">μ + σ</text><text x="130" y="188" font-size="10.5" text-anchor="middle" fill="#52517a">μ − 2σ</text><text x="390" y="188" font-size="10.5" text-anchor="middle" fill="#52517a">μ + 2σ</text><text x="65" y="188" font-size="10" text-anchor="middle" fill="#6b7280">μ − 3σ</text><text x="455" y="188" font-size="10" text-anchor="middle" fill="#6b7280">μ + 3σ</text><text x="228" y="138" font-size="11" font-weight="700" text-anchor="middle" fill="#312e81">34.1%</text><text x="292" y="138" font-size="11" font-weight="700" text-anchor="middle" fill="#312e81">34.1%</text><text x="163" y="160" font-size="10" font-weight="700" text-anchor="middle" fill="#4338ca">13.6%</text><text x="357" y="160" font-size="10" font-weight="700" text-anchor="middle" fill="#4338ca">13.6%</text><text x="260" y="212" font-size="11" font-weight="700" text-anchor="middle" fill="#0d9488">68.3% within ±1σ  ·  95.4% within ±2σ  ·  99.7% within ±3σ</text></svg>`,
      diagramCaption:
        "Normal distribution N(μ, σ²) illustrating symmetry about μ and the 68–95–99.7% empirical rule across z-score bands.",
      workedExamples: [
        {
          title: "Discrete Random Variable & Fair Game",
          problem:
            "A game pays `£0`, `£4`, or `£10` with probabilities {{0.5}}, {{k}}, and {{2k}} respectively. Find {{k}} and the entry fee that makes the game fair.",
          steps: [
            "Probabilities sum to `1`: {{0.5 + k + 2k = 1}} ⇒ {{3k = 0.5}} ⇒ {{k = 1/6}}.",
            "Compute expected payout: {{E(X) = 0(1/2) + 4(1/6) + 10(2/6) = 0 + 4/6 + 20/6 = 24/6 = 4}}.",
            "For a fair game, entry fee = expected payout = `£4`.",
          ],
          answer: "{{k = 1/6}}; fair entry fee is `£4`.",
          yourTurn: {
            question:
              "A discrete RV {{X}} takes values `1, 3, 5` with probabilities `0.2, 0.5, 0.3`. Calculate {{E(X)}}.",
            answer: { type: "number", value: 3.2 },
            solution:
              "{{E(X) = 1(0.2) + 3(0.5) + 5(0.3) = 0.2 + 1.5 + 1.5 = 3.2}}.",
          },
        },
        {
          title: "Binomial Distribution: Exact Formula & Complement",
          problem:
            "A biased coin lands heads with probability `0.4` and is tossed `5` times. Let {{X ~ B(5, 0.4)}} be the number of heads. Find (a) {{E(X)}} and {{Var(X)}}, and (b) exact {{P(X >= 1)}}.",
          steps: [
            "Part (a): {{E(X) = np = 5 * 0.4 = 2}} and {{Var(X) = np(1 - p) = 5 * 0.4 * 0.6 = 1.2}}.",
            "Part (b): Use the complement: {{P(X >= 1) = 1 - P(X = 0)}}.",
            "Since {{P(X = 0) = 0.6^5 = 0.07776}}, we get {{P(X >= 1) = 1 - 0.07776 = 0.92224}} (≈ `0.922`).",
          ],
          answer: "(a) {{E(X) = 2}}, {{Var(X) = 1.2}}; (b) `0.92224` (`0.922` to 3 s.f.).",
          yourTurn: {
            question:
              "For {{X ~ B(20, 0.3)}}, calculate the exact variance {{Var(X)}}.",
            answer: { type: "number", value: 4.2 },
            solution:
              "{{Var(X) = np(1 - p) = 20 * 0.3 * 0.7 = 4.2}}.",
          },
        },
        {
          title: "Inverse Normal: Solving Simultaneously for μ and σ",
          problem:
            "Battery lifespans follow {{X ~ N(μ, σ^2)}}. Given {{P(X < 40) = 0.15866}} (`z = −1.000`) and {{P(X > 76) = 0.02275}} (`z = +2.000`), find {{μ}} and {{σ}}.",
          steps: [
            "Standardise the lower tail: {{(40 - μ) / σ = -1}} ⇒ {{40 - μ = -σ}} (Equation 1).",
            "For the upper tail, left area is {{1 - 0.02275 = 0.97725}}, giving {{z = +2}}: {{(76 - μ) / σ = 2}} ⇒ {{76 - μ = 2σ}} (Equation 2).",
            "Subtract (1) from (2): {{(76 - μ) - (40 - μ) = 2σ - (-σ)}} ⇒ {{36 = 3σ}} ⇒ {{σ = 12}}.",
            "Substitute back into (1): {{μ = 40 + 12 = 52}}.",
          ],
          answer: "{{μ = 52}} and {{σ = 12}}.",
          yourTurn: {
            question:
              "A Normal RV satisfies {{X ~ N(60, σ^2)}} and {{P(X > 72) = 0.02275}}, where {{P(Z > 2) = 0.02275}}. Find {{σ}}.",
            answer: { type: "number", value: 6 },
            solution:
              "Standardising gives {{(72 - 60) / σ = 2}} ⇒ {{12 / σ = 2}} ⇒ {{σ = 6}}.",
          },
        },
      ],
      keyPoints: [
        "Always check whether the second parameter in {{N(μ, σ^2)}} is written as {{σ^2}} (e.g. `N(50, 16)` means `σ = 4`, NOT `16`!).",
        "In Binomial problems, write the distribution explicitly (`Let X ~ B(n, p)`) and adjust strict inequalities (`X > 3` becomes `X ≥ 4` = `1 − P(X ≤ 3)`).",
        "TI-Nspire CX `invNorm` always expects the **cumulative left-tail area** `P(X < a)` — sketch the shaded bell curve first to avoid sign errors on `z`!",
        "Whenever `μ` or `σ` is unknown, you MUST standardise to {{Z ~ N(0, 1)}} — you cannot enter an unknown parameter into `invNorm`.",
      ],
      whyItWorks:
        "Why is {{E(X) = np}} for {{X ~ B(n, p)}} without expanding a messy binomial sum? Write {{X = Y_1 + Y_2 + ... + Y_n}}, where each indicator {{Y_i}} equals `1` if trial {{i}} succeeds (prob {{p}}) and `0` otherwise. Each {{E(Y_i) = p}} and {{Var(Y_i) = p - p^2 = p(1 - p)}}; adding across {{n}} independent trials immediately gives {{E(X) = np}} and {{Var(X) = np(1 - p)}}!",
      strategies: [
        "Always sketch a quick bell curve and shade the target region before touching `normCdf` or `invNorm` — a 3-second sketch eliminates 90% of left-vs-right tail errors.",
        "On Binomial-plus-Conditional questions ('given at least 2 succeeded, find the probability exactly 4 succeeded'), apply {{P(X = 4 | X >= 2) = P(X = 4) / P(X >= 2)}} carefully.",
        "Look out for nested distributions: find a single-item Normal probability `p = P(X > c)`, then plug that exact unrounded `p` into a Binomial model `Y ~ B(n, p)`!",
      ],
      thinkDeeper:
        "If `X ~ N(μ, σ²)` and `P(|X − μ| < k) = 0.90`, how can you find `k` in one step? Since the central `90%` leaves `5%` in EACH tail, the upper boundary sits at left-tail cumulative area `0.95`! Thus `k = z_{0.95} · σ ≈ 1.645 σ`, independent of `μ`.",
    },

    // =========================================================================
    // SECTION 4: CONTINUOUS RVs — PDFs, CDFs, MEAN, MEDIAN, MODE & VARIANCE (HL)
    // =========================================================================
    {
      id: "continuous-rvs-pdf-cdf-hl",
      heading: "[HL] Continuous Random Variables (PDFs, CDFs, Mean, Median, Mode & Variance)",
      level: "HL",
      discovery: {
        problem:
          "Suppose a spinner lands uniformly on `[0, 0.5]`. Its probability density is {{f(x) = 2}} for {{0 <= x <= 0.5}}. How can a probability density function equal `2` — larger than `1` — without breaking the laws of probability?",
        idea:
          "Because {{f(x)}} is a **density** (probability *per unit width*), not a probability! Only the **area** under the curve is a probability: {{∫_0^{0.5} 2 dx = 2 * 0.5 = 1}}. Just as gold has density `19.3 g/cm³` yet a tiny speck weighs `0.1 g`, a tall, narrow PDF can exceed `1` provided {{f(x) >= 0}} and total area equals `1`.",
      },
      body: `### Probability Density Functions (PDFs) & CDFs

A continuous random variable {{X}} has a **probability density function** {{f(x)}} if and only if:
1. {{f(x) >= 0}} for all real {{x}}, and
2. Total area equals \`1\`: {{∫_{-∞}^{∞} f(x) dx = 1}}.

Probability over an interval is the definite integral (endpoints do not matter since {{P(X = c) = 0}}):

    {{P(a <= X <= b) = P(a < X < b) = ∫_a^b f(x) dx}}

The **cumulative distribution function (CDF)** accumulates area from {{-∞}} up to {{x}}:

    {{F(x) = P(X <= x) = ∫_{-∞}^x f(t) dt}}    ⟺    {{f(x) = F'(x)}}

Always write {{F(x)}} as a **piecewise** function across the entire real line: \`0\` below the support, the antiderivative inside the support, and \`1\` above the support!

### Mode, Median & Quartiles

- **Mode:** The value of {{x}} where {{f(x)}} achieves its **global maximum** on the support. Check both stationary points (\`f'(x) = 0\`) **and boundary endpoints** — monotonic PDFs (like \`f(x) = 2x\` on \`[0, 1]\`) peak at an endpoint!
- **Median {{m}}:** The equal-area split solving:

    {{∫_{-∞}^m f(x) dx = 0.5}}    equivalently    {{F(m) = 0.5}}

- **Quartiles:** Solve {{F(Q_1) = 0.25}} and {{F(Q_3) = 0.75}} (reject any root outside the support!).

### Expectation, Variance & Linear Transformations

For a continuous random variable (and analogously with sums for discrete RVs):

    {{E(X) = μ = ∫_{-∞}^{∞} x f(x) dx}}
    {{E(g(X)) = ∫_{-∞}^{∞} g(x) f(x) dx}}
    {{Var(X) = E((X - μ)^2) = E(X^2) - (E(X))^2 = ∫_{-∞}^{∞} x^2 f(x) dx - μ^2}}

**Linear Transformations** (valid for ALL discrete and continuous random variables):

    {{E(aX + b) = a E(X) + b}}
    {{Var(aX + b) = a^2 Var(X)}}    ⇒    {{SD(aX + b) = |a| SD(X)}}`,
      diagram: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-skewed continuous probability density function f(x) showing shaded area 0.5 up to the median and distinct positions of mode, median, and mean"><rect x="0" y="0" width="520" height="220" rx="12" fill="#ffffff"/><path d="M 60 175 C 85 110, 118 42, 160 42 C 190 42, 212 64, 224 78 L 224 175 Z" fill="#e0e7ff"/><path d="M 60 175 C 85 110, 118 42, 160 42 C 202 42, 232 94, 285 130 C 335 162, 395 172, 460 175" fill="none" stroke="#312e81" stroke-width="2.6"/><line x1="50" y1="175" x2="480" y2="175" stroke="#52517a" stroke-width="1.6"/><line x1="60" y1="22" x2="60" y2="182" stroke="#52517a" stroke-width="1.6"/><text x="46" y="34" font-size="11.5" font-weight="700" fill="#52517a">f(x)</text><text x="482" y="179" font-size="11.5" font-weight="700" fill="#52517a">x</text><line x1="160" y1="42" x2="160" y2="175" stroke="#c2410c" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="224" y1="78" x2="224" y2="175" stroke="#4338ca" stroke-width="2"/><line x1="258" y1="112" x2="258" y2="175" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4,3"/><circle cx="160" cy="42" r="4" fill="#c2410c"/><text x="160" y="32" font-size="11" font-weight="700" text-anchor="middle" fill="#c2410c">Mode (max f)</text><text x="155" y="135" font-size="11.5" font-weight="800" text-anchor="middle" fill="#312e81">Area = 0.5</text><text x="325" y="160" font-size="11" font-weight="700" text-anchor="middle" fill="#52517a">Area = 0.5</text><text x="160" y="194" font-size="11" font-weight="700" text-anchor="middle" fill="#c2410c">Mode</text><text x="224" y="194" font-size="11" font-weight="700" text-anchor="middle" fill="#4338ca">Median m</text><text x="268" y="194" font-size="11" font-weight="700" text-anchor="middle" fill="#0d9488">Mean E(X)</text><text x="260" y="213" font-size="10.5" text-anchor="middle" fill="#52517a">In a right-skewed PDF, Mode &lt; Median &lt; Mean (total area under curve = 1)</text></svg>`,
      diagramCaption:
        "[HL] Continuous PDF f(x): mode sits at the peak, median m bisects total area into 0.5 + 0.5, and mean E(X) is the centre of mass.",
      workedExamples: [
        {
          title: "[HL] Normalising Constant, CDF & Median",
          problem:
            "A continuous random variable {{X}} has PDF {{f(x) = kx}} for {{0 <= x <= 4}} and `0` otherwise. Find (a) the exact value of {{k}}, (b) the CDF {{F(x)}}, and (c) the exact median {{m}}.",
          steps: [
            "Part (a): Set total area to `1`: {{∫_0^4 kx dx = [k x^2 / 2]_0^4 = 8k = 1}} ⇒ {{k = 1/8}}.",
            "Part (b): For {{0 <= x <= 4}}, {{F(x) = ∫_0^x (t/8) dt = x^2 / 16}}. Complete piecewise: `0` for `x < 0`, {{x^2/16}} for `0 ≤ x ≤ 4`, and `1` for `x > 4`.",
            "Part (c): Solve {{F(m) = 0.5}}: {{m^2 / 16 = 1/2}} ⇒ {{m^2 = 8}} ⇒ {{m = 2 sqrt(2)}} (taking the positive root inside `[0, 4]`).",
          ],
          answer: "(a) {{k = 1/8}}; (b) {{F(x) = x^2/16}} on `[0, 4]`; (c) {{m = 2 sqrt(2)}}.",
          yourTurn: {
            question:
              "A continuous RV {{X}} has PDF {{f(x) = k x^2}} for {{0 <= x <= 3}} and `0` otherwise. Find the exact constant {{k}} as a simplified fraction.",
            answer: { type: "fraction", n: 1, d: 9, simplest: true },
            solution:
              "{{∫_0^3 k x^2 dx = [k x^3 / 3]_0^3 = 9k = 1}} ⇒ {{k = 1/9}}.",
          },
        },
        {
          title: "[HL] Expectation, Variance & Linear Transformation",
          problem:
            "Let {{X}} have PDF {{f(x) = (3/8) x^2}} for {{0 <= x <= 2}}, and `0` otherwise. Find exact values of {{E(X)}}, {{Var(X)}}, and {{Var(4X - 7)}}.",
          steps: [
            "Find {{E(X) = ∫_0^2 x * (3/8) x^2 dx = (3/8) [x^4 / 4]_0^2 = (3/8)(16/4) = 3/2}}.",
            "Find {{E(X^2) = ∫_0^2 x^2 * (3/8) x^2 dx = (3/8) [x^5 / 5]_0^2 = (3/8)(32/5) = 12/5}}.",
            "Compute {{Var(X) = E(X^2) - (E(X))^2 = 12/5 - (3/2)^2 = 12/5 - 9/4 = (48 - 45)/20 = 3/20}}.",
            "Apply linear scaling: {{Var(4X - 7) = 4^2 * Var(X) = 16 * (3/20) = 12/5}}.",
          ],
          answer: "{{E(X) = 3/2}}, {{Var(X) = 3/20}}, {{Var(4X - 7) = 12/5}}.",
          yourTurn: {
            question:
              "A continuous RV {{X}} has PDF {{f(x) = 2x}} for {{0 <= x <= 1}} and `0` otherwise. Find the exact value of {{E(X)}} as a simplified fraction.",
            answer: { type: "fraction", n: 2, d: 3, simplest: true },
            solution:
              "{{E(X) = ∫_0^1 2 x^2 dx = [2 x^3 / 3]_0^1 = 2/3}}.",
          },
        },
        {
          title: "[HL] Piecewise PDF: Mode & Locating the Median",
          problem:
            "A continuous RV {{X}} has PDF {{f(x) = x/3}} on {{0 <= x <= 2}}, and {{f(x) = (2/3)(3 - x)}} on {{2 < x <= 3}} (`0` elsewhere). State the mode and find the exact median {{m}}.",
          steps: [
            "Verify continuity & peak: on `[0, 2]`, `f` increases linearly from `0` to `2/3`; on `[2, 3]`, `f` decreases linearly from `2/3` to `0`. So the global maximum (mode) is {{x = 2}}.",
            "Check cumulative area at the join {{x = 2}}: {{∫_0^2 (x/3) dx = [x^2 / 6]_0^2 = 4/6 = 2/3}}.",
            "Since {{2/3 > 1/2}}, the median {{m}} lies inside the FIRST piece `[0, 2]`!",
            "Solve {{∫_0^m (x/3) dx = 1/2}} ⇒ {{m^2 / 6 = 1/2}} ⇒ {{m^2 = 3}} ⇒ {{m = sqrt(3)}}.",
          ],
          answer: "Mode = `2`; exact median {{m = sqrt(3)}}.",
        },
      ],
      keyPoints: [
        "Every valid PDF satisfies {{f(x) >= 0}} and {{∫ f(x) dx = 1}} — always check non-negativity if an exam asks you to verify a PDF.",
        "Always check **endpoints** as well as stationary points (`f'(x) = 0`) when finding the **mode** of a PDF.",
        "For piecewise PDFs, compute the area of the first interval BEFORE setting up the median integral so you know which piece contains `0.5`!",
        "Remember {{Var(X) = E(X^2) - [E(X)]^2}} and {{Var(aX + b) = a^2 Var(X)}} — never forget to square {{a}} or subtract {{[E(X)]^2}}.",
      ],
      whyItWorks:
        "Integrating {{x f(x)}} treats {{f(x) dx}} as an infinitesimal probability mass sitting at position {{x}}, so {{E(X)}} is literally the horizontal **centre of mass** where a cardboard cutout of the PDF balances on a knife-edge! Meanwhile, {{F(m) = 0.5}} cuts the cardboard into two equal-area halves, which only coincides with the balance point when the PDF is symmetric.",
      strategies: [
        "On Paper 2 (GDC), you can evaluate {{E(X)}} and {{E(X^2)}} directly with TI-Nspire CX numerical integration — still write out the exact integral limits clearly for Method (M1) marks!",
        "When solving {{F(m) = 0.5}} yields a quadratic or cubic equation, ALWAYS check which root lies inside the support interval and explicitly reject any extraneous roots.",
        "Remember {{E(X^2) >= [E(X)]^2}} always — if your computed variance ever comes out negative, you made an arithmetic or integration slip!",
      ],
      thinkDeeper:
        "Can a continuous PDF have a well-defined median yet an **infinite** mean? Yes! Consider the Pareto density {{f(x) = 1/x^2}} on {{[1, ∞)}}. Its total area is {{∫_1^{∞} x^{-2} dx = 1}} and its median is {{m = 2}}, yet {{E(X) = ∫_1^{∞} (1/x) dx = [ln x]_1^{∞} = ∞}} — a famous cautionary tale in heavy-tailed finance and insurance modelling!",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "State the two IB Maths AA outlier fence formulas.",
        back: "Lower fence: {{Q_1 - 1.5 * IQR}}; Upper fence: {{Q_3 + 1.5 * IQR}}. Any datum strictly outside these bounds is an outlier.",
        level: "SL",
      },
      {
        front: "How does linear coding {{Y = aX + b}} affect mean, standard deviation, and variance?",
        back: "Mean: {{aμ + b}}. Standard deviation & IQR: multiply by {{|a|}} (ignore {{b}}). Variance: multiply by {{a^2}} (ignore {{b}}).",
        level: "SL",
      },
      {
        front: "Which value on a TI-Nspire CX One-Variable Statistics output is used in IB Maths AA for standard deviation?",
        back: "**`σx`** (the population standard deviation dividing by {{n}}), NOT `sx`.",
        level: "SL",
      },
      {
        front: "On a cumulative frequency graph, do you plot points at mid-intervals or upper class boundaries?",
        back: "**Upper class boundaries** (starting at zero on the first lower boundary). Mid-interval values are used for estimating the grouped mean and variance.",
        level: "SL",
      },
      {
        front: "Distinguish between **stratified** sampling and **quota** sampling.",
        back: "Both mirror population subgroup proportions, but **stratified** chooses randomly within each stratum (unbiased), whereas **quota** uses non-random choice (risk of selection bias).",
        level: "SL",
      },
      {
        front: "Write the Addition Law for combined events {{A}} and {{B}}.",
        back: "{{P(A ∪ B) = P(A) + P(B) - P(A ∩ B)}}. When mutually exclusive, {{P(A ∩ B) = 0}}.",
        level: "SL",
      },
      {
        front: "What algebraic test proves two events {{A}} and {{B}} are **independent**?",
        back: "{{P(A ∩ B) = P(A) * P(B)}}, or equivalently {{P(A | B) = P(A)}} (when {{P(B) > 0}}).",
        level: "SL",
      },
      {
        front: "Can two events with non-zero probabilities be BOTH mutually exclusive and independent?",
        back: "**No!** Mutually exclusive means {{P(A ∩ B) = 0}}, whereas independence requires {{P(A ∩ B) = P(A)P(B) > 0}} — a contradiction.",
        level: "SL",
      },
      {
        front: "State the mean and variance of a Binomial random variable {{X ~ B(n, p)}}.",
        back: "{{E(X) = np}} and {{Var(X) = np(1 - p)}} (so {{σ = sqrt(np(1 - p))}}).",
        level: "SL",
      },
      {
        front: "How do you rewrite {{P(X >= k)}} and {{P(X > k)}} for a discrete Binomial variable {{X}}?",
        back: "{{P(X >= k) = 1 - P(X <= k - 1)}} and {{P(X > k) = 1 - P(X <= k)}}. On TI-Nspire CX, you can also use `binomCdf(n, p, k, n)` directly.",
        level: "SL",
      },
      {
        front: "How do you find an unknown {{μ}} or {{σ}} for {{X ~ N(μ, σ^2)}} given a probability?",
        back: "Convert to {{Z ~ N(0, 1)}}, find {{z = " + "\"invNorm\"" + "(" + "\"left area\"" + ", 0, 1)}}, and solve {{(x - μ) / σ = z}}.",
        level: "SL",
      },
      {
        front: "[HL] State Bayes' Theorem for a partition of 3 mutually exclusive, exhaustive events {{B_1, B_2, B_3}}.",
        back: "{{P(B_i | A) = (P(B_i)P(A | B_i)) / (P(B_1)P(A | B_1) + P(B_2)P(A | B_2) + P(B_3)P(A | B_3))}}.",
        level: "HL",
      },
      {
        front: "[HL] What two properties define a valid continuous probability density function {{f(x)}}?",
        back: "(1) {{f(x) >= 0}} for all {{x}}, and (2) {{∫_{-∞}^{∞} f(x) dx = 1}}.",
        level: "HL",
      },
      {
        front: "[HL] How are the PDF {{f(x)}} and CDF {{F(x)}} related via calculus?",
        back: "{{F(x) = ∫_{-∞}^x f(t) dt}} and {{f(x) = F'(x)}}. Also {{P(a <= X <= b) = F(b) - F(a)}}.",
        level: "HL",
      },
      {
        front: "[HL] How do you find the **median** {{m}} and **mode** of a continuous RV with PDF {{f(x)}}?",
        back: "**Median:** solve {{∫_{-∞}^m f(x) dx = 0.5}} (`F(m) = 0.5`). **Mode:** find the {{x}} maximising {{f(x)}} on its support (check stationary points AND endpoints!).",
        level: "HL",
      },
      {
        front: "[HL] State the computational variance formula and linear transformation rule for {{Var(aX + b)}}.",
        back: "{{Var(X) = E(X^2) - [E(X)]^2}} and {{Var(aX + b) = a^2 Var(X)}}.",
        level: "HL",
      },
    ],

    mustKnow: [
      "Under FA2029, Topic 4 excludes bivariate correlation (`r`) and linear regression — focus 100% on univariate stats, probability, Binomial/Normal, and [HL] Bayes & continuous RVs.",
      "Always use **population** standard deviation `σx` (not `sx`) on the TI-Nspire CX for IB Maths AA.",
      "Outlier boundaries are strictly {{Q_1 - 1.5 * IQR}} and {{Q_3 + 1.5 * IQR}}; the box-plot whisker ends at the last non-outlier datum.",
      "In {{Y = aX + b}}, `+b` NEVER affects IQR, range, SD, or variance; variance scales by {{a^2}} and SD scales by {{|a|}}.",
      "For conditional probability {{P(A | B) = P(A ∩ B) / P(B)}}, the condition after `|` is ALWAYS the denominator.",
      "Write {{X ~ N(μ, σ^2)}} carefully: the second entry is **variance** {{σ^2}}, so take its square root before entering {{σ}} into `normCdf` or `invNorm`.",
      "For discrete Binomial inequalities, draw a quick integer number line (`... k−1, k, k+1 ...`) before entering bounds into `binomCdf`.",
      "[HL] Bayes' Theorem numerator = single branch `P(Bᵢ)P(A | Bᵢ)`; denominator = sum of ALL branches ending in `A`.",
      "[HL] A continuous PDF can exceed `1` at a point, because probability is **area** (`∫ f(x) dx`), never height (`P(X = c) = 0`).",
      "[HL] Variance is ALWAYS non-negative: {{Var(X) = E(X^2) - [E(X)]^2 >= 0}}.",
    ],

    misconceptions: [
      {
        wrong: "Mutually exclusive events are independent because they don't overlap.",
        right: "Mutually exclusive events (with non-zero probabilities) are **dependent**: if {{A}} happens, {{B}} cannot happen (`P(B | A) = 0 ≠ P(B)`).",
        level: "SL",
      },
      {
        wrong: "Adding `10` to every score increases the standard deviation by `10`, and multiplying by `-2` multiplies SD by `-2`.",
        right: "Adding `10` leaves standard deviation **unchanged** (`0` change in gaps); multiplying by `-2` multiplies SD by {{|-2| = 2}} and variance by {{(-2)^2 = 4}}.",
        level: "SL",
      },
      {
        wrong: "If {{X ~ N(50, 16)}}, enter `σ = 16` into TI-Nspire CX `normCdf`.",
        right: "The notation {{N(μ, σ^2)}} specifies **variance** `σ² = 16`, so the standard deviation is {{σ = sqrt(16) = 4}}!",
        level: "SL",
      },
      {
        wrong: "For a Binomial variable, {{P(X > 4) = 1 - P(X < 4)}}.",
        right: "Because `4` is an integer outcome, {{P(X > 4) = 1 - P(X <= 4)}} (which excludes `4` as well as `0, 1, 2, 3`).",
        level: "SL",
      },
      {
        wrong: "On a cumulative frequency graph, plot each point at the class midpoint.",
        right: "Cumulative frequency counts everyone **up to the top** of a class, so always plot at the **upper class boundary**.",
        level: "SL",
      },
      {
        wrong: "[HL] The mode of a continuous PDF is always found by solving {{f'(x) = 0}}.",
        right: "The mode is the **global maximum** of {{f(x)}} on its support — monotonic or triangular PDFs achieve their maximum at a boundary endpoint or a sharp corner!",
        level: "HL",
      },
      {
        wrong: "[HL] {{P(A | B)}} and {{P(B | A)}} are roughly equal when a test is 95% accurate.",
        right: "They can differ dramatically when the prior base rate {{P(B)}} is small — always apply Bayes' theorem (or a 10,000-person tree) to reverse conditioning!",
        level: "HL",
      },
    ],

    examMistakes: [
      "Reading `sx` instead of `σx` from TI-Nspire CX One-Variable Statistics (automatic A0 accuracy loss!).",
      "Forgetting to subtract `1` from the right-tail probability before calling `invNorm(area, μ, σ)` on a GDC.",
      "Writing `binomCdf(n, p, 3)` (old TI-84 syntax) instead of checking lower & upper bounds on TI-Nspire CX (`binomCdf(n, p, 0, 3)`).",
      "Prematurely rounding `p` (from a Normal part (a)) to 3 s.f. before plugging it into a Binomial part (b) — store the full GDC value in a variable like `p:=`!",
      "Swapping `P(A | B)` and `P(B | A)` on conditional probability and Bayes' theorem word problems.",
      "Forgetting to reject roots outside the support `[a, b]` when solving a quadratic/cubic CDF equation `F(m) = 0.5` for the median [HL].",
      "Computing `E(X²)` and forgetting to subtract `[E(X)]²` when asked for `Var(X)` [HL].",
      "Writing a CDF `F(x)` for only the middle interval and omitting `0` for `x < a` and `1` for `x > b` [HL].",
    ],

    mnemonics: [
      {
        topic: "Binomial Conditions",
        device: "B-I-N-S",
        explanation:
          "**B**inary (success/failure), **I**ndependent trials, fixed **N**umber `n`, **S**ame probability `p` every trial.",
        level: "SL",
      },
      {
        topic: "Linear Coding Spread",
        device: "Shift Leaves Spread, Scale Squares Variance",
        explanation:
          "In {{Y = aX + b}}, shifting (`+ b`) leaves SD, IQR, and variance untouched; scaling (`× a`) multiplies SD by `|a|` and **squares** to `a²` for variance.",
        level: "SL",
      },
      {
        topic: "Conditional Denominator",
        device: "Given Goes Under",
        explanation:
          "In {{P(A | B) = P(A ∩ B) / P(B)}}, whatever sits **after** the bar ('given') always goes underneath in the denominator.",
        level: "SL",
      },
      {
        topic: "[HL] Variance Formula",
        device: "Mean of the Squares minus Square of the Mean",
        explanation:
          "{{Var(X) = E(X^2) - [E(X)]^2}} — say it aloud so you never swap the order or forget the square!",
        level: "HL",
      },
    ],

    realWorld: [
      {
        title: "Medical Screening & Base-Rate Fallacy",
        detail:
          "Bayes' theorem explains why mass screening for rare diseases produces many false positives — and why doctors run a second independent confirmatory test before diagnosing.",
        emoji: "🩺",
      },
      {
        title: "Semiconductor Quality Control",
        detail:
          "Wafer fabrication plants in Singapore model defect counts per batch with Binomial distributions and trace defective chips back to specific lithography lines using 3-branch Bayes' theorem.",
        emoji: "🔬",
      },
      {
        title: "IB Grading & Standardised Benchmarking",
        detail:
          "Exam boards use Normal `z`-scores and percentiles to compare performances across different subjects and keep grade boundaries fair year over year.",
        emoji: "🎓",
      },
      {
        title: "Queueing & Component Lifetimes",
        detail:
          "Actuaries and reliability engineers use continuous PDFs and CDFs to calculate median product lifespans, warranty failure rates, and expected repair costs.",
        emoji: "⏱️",
      },
      {
        title: "Financial Risk & Tail Outliers",
        detail:
          "Risk analysts combine `1.5 × IQR` screening with variance scaling (`Var(aX) = a² Var(X)`) to quantify how leverage amplifies portfolio volatility.",
        emoji: "📈",
      },
    ],

    videos: [
      {
        title: "IB Maths AA — Descriptive Statistics, Box Plots, Outliers & Coding",
        channel: "Revision Village / IB Maths AA",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+descriptive+statistics+outliers+variance+coding",
      },
      {
        title: "IB Maths AA — Conditional Probability, Independence & Bayes' Theorem (HL)",
        channel: "IB Maths AA Revision",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+Bayes+theorem+conditional+probability",
      },
      {
        title: "IB Maths AA — Binomial & Normal Distributions + Inverse Normal (TI-Nspire CX)",
        channel: "OSC / IB Maths AA",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+Binomial+Normal+Inverse+Normal+TI+Nspire",
      },
      {
        title: "IB Maths AA HL — Continuous Random Variables: PDF, CDF, Mean, Median & Variance",
        channel: "IB Maths AA HL",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+continuous+random+variables+PDF+CDF+variance",
      },
    ],

    formulas: [
      {
        name: "Interquartile Range & Outlier Fences",
        formula: "{{IQR = Q_3 - Q_1}},  {{x < Q_1 - 1.5 * IQR}}  or  {{x > Q_3 + 1.5 * IQR}}",
        note: "Not in booklet — memorise!",
        level: "SL",
      },
      {
        name: "Population Mean & Variance",
        formula: "{{μ = (sum f_i x_i) / N}},  {{σ^2 = (sum f_i (x_i - μ)^2) / N = (sum f_i x_i^2) / N - μ^2}}",
        note: "In Formula Booklet (use σx on TI-Nspire CX)",
        level: "SL",
      },
      {
        name: "Linear Data Coding (Y = aX + b)",
        formula: "{{E(aX + b) = a E(X) + b}},  {{σ_Y = |a| σ_X}},  {{Var(aX + b) = a^2 Var(X)}}",
        note: "In Formula Booklet (HL) — essential at SL too!",
        level: "SL",
      },
      {
        name: "Combined Events (Addition Law)",
        formula: "{{P(A ∪ B) = P(A) + P(B) - P(A ∩ B)}}",
        note: "In Formula Booklet (SL 4.6)",
        level: "SL",
      },
      {
        name: "Conditional Probability",
        formula: "{{P(A | B) = P(A ∩ B) / P(B)}}",
        note: "In Formula Booklet (SL 4.6)",
        level: "SL",
      },
      {
        name: "Independent Events Test",
        formula: "{{P(A ∩ B) = P(A) * P(B)}}  ⟺  {{P(A | B) = P(A)}}",
        note: "In Formula Booklet (SL 4.6)",
        level: "SL",
      },
      {
        name: "Expected Value of a Discrete RV",
        formula: "{{E(X) = sum x * P(X = x)}}",
        note: "In Formula Booklet (SL 4.7)",
        level: "SL",
      },
      {
        name: "Binomial Distribution B(n, p)",
        formula: "{{P(X = r) = nCr * p^r * (1 - p)^(n - r)}},  {{E(X) = np}},  {{Var(X) = np(1 - p)}}",
        note: "In Formula Booklet (SL 4.8)",
        level: "SL",
      },
      {
        name: "Normal Standardisation (z-score)",
        formula: "{{Z = (X - μ) / σ ~ N(0, 1)}}",
        note: "In Formula Booklet (SL 4.12)",
        level: "SL",
      },
      {
        name: "[HL] Bayes' Theorem (3 Mutually Exclusive Events)",
        formula: "{{P(B_i | A) = (P(B_i) P(A | B_i)) / (P(B_1)P(A | B_1) + P(B_2)P(A | B_2) + P(B_3)P(A | B_3))}}",
        note: "In Formula Booklet (AHL 4.13)",
        level: "HL",
      },
      {
        name: "[HL] Continuous PDF Normalisation & Probability",
        formula: "{{∫_{-∞}^{∞} f(x) dx = 1}},  {{P(a <= X <= b) = ∫_a^b f(x) dx}}",
        note: "In Formula Booklet (AHL 4.14)",
        level: "HL",
      },
      {
        name: "[HL] Continuous Expectation E(X) & E(g(X))",
        formula: "{{E(X) = ∫_{-∞}^{∞} x f(x) dx}},  {{E(g(X)) = ∫_{-∞}^{∞} g(x) f(x) dx}}",
        note: "In Formula Booklet (AHL 4.14)",
        level: "HL",
      },
      {
        name: "[HL] Computational Variance",
        formula: "{{Var(X) = E(X^2) - [E(X)]^2 = ∫_{-∞}^{∞} x^2 f(x) dx - μ^2}}",
        note: "In Formula Booklet (AHL 4.14)",
        level: "HL",
      },
      {
        name: "[HL] Median & CDF of a Continuous RV",
        formula: "{{F(x) = ∫_{-∞}^x f(t) dt}},  {{F(m) = ∫_{-∞}^m f(x) dx = 0.5}}",
        note: "Not explicitly in booklet — memorise!",
        level: "HL",
      },
    ],
  },
};
