import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Why does a `95%`-accurate screening test for a `1%`-prevalence disease turn out to be **wrong more than four out of five times** when it flashes positive? And how can tossing a simple coin thousands of times sculpt the exact bell curve that governs starlight, exam grades, and quantum noise? Topic 4 arms you with the algebra and calculus to outthink probabilistic intuition every single time.",

  didYouKnow: [
    "Statistician **John Tukey** deliberately chose the multiplier `1.5` in the `1.5 × IQR` outlier rule: for a Normal distribution, {{Q_1 = μ - 0.674 σ}} and {{Q_3 = μ + 0.674 σ}}, so the fences sit at {{μ ± 2.70 σ}} — flagging just `0.7%` of genuine Normal data as outliers!",
    "The famous **Monty Hall problem** is pure conditional probability: once the host opens a losing door using knowledge of where the prize sits, switching doubles your winning chance from {{1/3}} to {{2/3}}.",
    "For **any** Binomial distribution {{B(n, p)}}, as {{n}} grows large the discrete bars trace the Normal bell curve {{N(np, np(1 - p))}} — a special case of the **Central Limit Theorem** first glimpsed by Abraham de Moivre in `1733`!",
    "In an **exponential** continuous PDF {{f(x) = λ e^(-λx)}} (`x ≥ 0`), the median is {{(ln 2)/λ ≈ 0.693 / λ}} — always strictly *smaller* than the mean {{1/λ}} because the long right tail pulls the centre of mass rightward.",
    "You only need `23` people in a room for the probability of a shared birthday to pass `50%` — proved cleanly with the complement rule {{1 - (365/365)(364/365)⋯(343/365) ≈ 0.507}}!",
    "A continuous probability density function {{f(x)}} has **no upper bound** of `1`: the uniform PDF on `[0, 0.01]` has constant density `100`, yet total area is still `0.01 × 100 = 1`.",
  ],

  activities: [
    {
      title: "Natural-Frequency Bayes Grid (Beat the Base-Rate Fallacy)",
      emoji: "🩺",
      materials: ["Squared paper (10 × 10 grid)", "Two highlighters (green & red)", "Calculator"],
      steps: [
        "Draw a `10 × 10` grid representing `1,000` people (`10` people per square).",
        "Suppose prevalence is `2%` (`2` squares = `20` people with condition `D`, `98` squares = `980` healthy).",
        "Highlight `90%` of the `20` infected people (`18` true positives) in green and `5%` of the `980` healthy people (`49` false positives) in red.",
        "Count green divided by `(green + red)`: `18 / (18 + 49) = 18/67 ≈ 26.9%`, then repeat after changing prevalence to `20%` and watch the posterior leap above `80%`!",
      ],
      maths:
        "Illustrates [HL] Bayes' theorem {{P(D | +) = P(D)P(+ | D) / P(+)}} where {{P(+) = P(D)P(+ | D) + P(D')P(+ | D')}} visually so you immediately feel why prior prevalence dominates rare-event screening.",
    },
    {
      title: "Coin-Toss Binomial Histogram vs Normal Bell Curve",
      emoji: "🪙",
      materials: ["6 coins (or TI-Nspire CX `randBin(6, 0.5, 50)`)", "Graph paper"],
      steps: [
        "Simulate `50` trials of tossing `6` fair coins and record the count of heads (`0` through `6`) in a frequency table.",
        "Compute your empirical mean and population SD `σx` on your TI-Nspire CX and compare them with the theoretical {{E(X) = 3}} and {{σ = sqrt(1.5) ≈ 1.225}}.",
        "Plot relative frequencies as bars alongside the theoretical Binomial probabilities {{6Cr / 64}}.",
        "Repeat with `500` trials on your GDC and watch the sample bars lock onto the theoretical Binomial curve!",
      ],
      maths:
        "Connects experimental relative frequency, {{X ~ B(n, p)}} mean/variance formulas, and the Law of Large Numbers.",
    },
    {
      title: "[HL] Paper-Cutout Centre of Mass vs Equal-Area Median",
      emoji: "✂️",
      materials: ["Stiff card", "Ruler & pencil", "Scissors", "Sharp pencil as a balance pivot"],
      steps: [
        "Draw a right-angled triangle of base `12 cm` (representing `[0, 4]` at `3 cm/unit`) and height `6 cm` for the triangular PDF {{f(x) = x/8}} on `[0, 4]`.",
        "Cut the triangle out cleanly and balance it horizontally across the edge of a ruler — measure the balance point from the sharp tip (`8 cm`, corresponding to {{E(X) = 8/3 ≈ 2.67}}!).",
        "Now mark the theoretical median {{m = 2 sqrt(2) ≈ 2.83}} (`8.49 cm` from the tip) and verify that cutting vertically there produces two pieces of equal mass (area `0.5` each) even though it does NOT balance at the cut!",
      ],
      maths:
        "Makes the physical distinction between **expectation** {{E(X) = ∫ x f(x) dx}} (torque balance / centre of mass) and **median** {{∫_0^m f(x) dx = 0.5}} (equal-area split) unforgettable.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Binomial B(12, 0.5) Bars Overlaid with Normal Envelope N(6, 3)",
      svg: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of Binomial B(12, 0.5) probabilities overlaid with the smooth Normal curve N(6, 3) peaking at mean 6"><rect x="0" y="0" width="520" height="220" rx="12" fill="#ffffff"/><line x1="44" y1="176" x2="486" y2="176" stroke="#52517a" stroke-width="1.5"/><line x1="44" y1="24" x2="44" y2="176" stroke="#52517a" stroke-width="1.5"/><rect x="58" y="175" width="24" height="1" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/><rect x="91" y="174" width="24" height="2" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/><rect x="124" y="166" width="24" height="10" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/><rect x="157" y="143" width="24" height="33" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/><rect x="190" y="104" width="24" height="72" fill="#a5b4fc" stroke="#4338ca" stroke-width="1.2"/><rect x="223" y="60" width="24" height="116" fill="#818cf8" stroke="#312e81" stroke-width="1.2"/><rect x="256" y="40" width="24" height="136" fill="#6366f1" stroke="#312e81" stroke-width="1.4"/><rect x="289" y="60" width="24" height="116" fill="#818cf8" stroke="#312e81" stroke-width="1.2"/><rect x="322" y="104" width="24" height="72" fill="#a5b4fc" stroke="#4338ca" stroke-width="1.2"/><rect x="355" y="143" width="24" height="33" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/><rect x="388" y="166" width="24" height="10" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/><rect x="421" y="174" width="24" height="2" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/><rect x="454" y="175" width="24" height="1" fill="#c7d2fe" stroke="#4338ca" stroke-width="1"/><path d="M 58 175 C 110 174, 145 162, 169 141 C 195 117, 215 80, 235 58 C 248 44, 258 39, 268 39 C 278 39, 288 44, 301 58 C 321 80, 341 117, 367 141 C 391 162, 426 174, 478 175" fill="none" stroke="#c2410c" stroke-width="2.6"/><text x="70" y="192" font-size="10" text-anchor="middle" fill="#52517a">0</text><text x="136" y="192" font-size="10" text-anchor="middle" fill="#52517a">2</text><text x="202" y="192" font-size="10" text-anchor="middle" fill="#52517a">4</text><text x="268" y="192" font-size="11" font-weight="800" text-anchor="middle" fill="#312e81">6</text><text x="334" y="192" font-size="10" text-anchor="middle" fill="#52517a">8</text><text x="400" y="192" font-size="10" text-anchor="middle" fill="#52517a">10</text><text x="466" y="192" font-size="10" text-anchor="middle" fill="#52517a">12</text><text x="268" y="212" font-size="11" font-weight="700" text-anchor="middle" fill="#312e81">Discrete B(12, 0.5) bars vs smooth N(μ = 6, σ² = 3) curve</text><text x="392" y="42" font-size="10.5" font-weight="700" fill="#c2410c">Normal envelope</text><text x="115" y="42" font-size="10.5" font-weight="700" fill="#4338ca">Binomial PMF bars</text></svg>`,
      caption:
        "Even at n = 12, the discrete Binomial bars B(12, 0.5) already mirror the smooth Normal bell curve N(6, 3) with remarkable precision.",
    },
    {
      title: "Why John Tukey Picked 1.5 × IQR: Box Plot Aligned Under N(μ, σ²)",
      svg: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal bell curve aligned vertically above a box-and-whisker diagram showing quartiles at plus or minus 0.674 sigma and outlier fences at plus or minus 2.70 sigma"><rect x="0" y="0" width="520" height="220" rx="12" fill="#ffffff"/><path d="M 218 118 L 218 52 C 232 34, 246 24, 260 24 C 274 24, 288 34, 302 52 L 302 118 Z" fill="#e0e7ff"/><path d="M 46 117 C 84 116, 114 114, 140 107 C 176 96, 198 76, 218 52 C 232 34, 246 24, 260 24 C 274 24, 288 34, 302 52 C 322 76, 344 96, 380 107 C 406 114, 436 116, 474 117" fill="none" stroke="#312e81" stroke-width="2.4"/><line x1="34" y1="118" x2="486" y2="118" stroke="#52517a" stroke-width="1.4"/><line x1="92" y1="26" x2="92" y2="188" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="428" y1="26" x2="428" y2="188" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="218" y1="52" x2="218" y2="144" stroke="#4338ca" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="302" y1="52" x2="302" y2="144" stroke="#4338ca" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="92" y1="164" x2="218" y2="164" stroke="#161534" stroke-width="2.2"/><line x1="92" y1="152" x2="92" y2="176" stroke="#161534" stroke-width="2.2"/><rect x="218" y="144" width="84" height="40" rx="4" fill="#c7d2fe" stroke="#4338ca" stroke-width="2.2"/><line x1="260" y1="144" x2="260" y2="184" stroke="#312e81" stroke-width="2.8"/><line x1="302" y1="164" x2="428" y2="164" stroke="#161534" stroke-width="2.2"/><line x1="428" y1="152" x2="428" y2="176" stroke="#161534" stroke-width="2.2"/><text x="260" y="92" font-size="11" font-weight="800" text-anchor="middle" fill="#312e81">Middle 50%</text><text x="92" y="205" font-size="10.5" font-weight="700" text-anchor="middle" fill="#c2410c">−2.70σ (0.35%)</text><text x="218" y="205" font-size="10.5" font-weight="700" text-anchor="middle" fill="#4338ca">Q₁ (−0.67σ)</text><text x="302" y="205" font-size="10.5" font-weight="700" text-anchor="middle" fill="#4338ca">Q₃ (+0.67σ)</text><text x="428" y="205" font-size="10.5" font-weight="700" text-anchor="middle" fill="#c2410c">+2.70σ (0.35%)</text></svg>`,
      caption:
        "Under a Normal distribution, Q₁ and Q₃ sit at μ ± 0.674σ (IQR = 1.35σ), placing Tukey's 1.5 × IQR fences at μ ± 2.70σ so only 0.7% of data fall outside.",
    },
  ],

  history: {
    title: "A Posthumous Sermon, a French Gambler's Guide, and the Bell Curve",
    story:
      "Two pillars of Topic 4 were born in remarkably unlikely places. In `1733`, Huguenot mathematician **Abraham de Moivre** — earning a living tutoring gamblers in London coffeehouses — derived the Normal bell curve as the limiting shape of high-`n` Binomial coin tosses, decades before **Carl Friedrich Gauss** (`1809`) used it to track the lost dwarf planet Ceres from noisy telescope observations. Meanwhile, Presbyterian minister **Thomas Bayes** never published his eponymous theorem during his lifetime: after his death in `1761`, his friend **Richard Price** discovered the manuscript in Bayes' study, edited it, and presented *An Essay towards solving a Problem in the Doctrine of Chances* to the Royal Society in `1763`. Two and a half centuries later, Bayes' theorem powers modern medical diagnostics, spam filters, GPS navigation, and artificial intelligence.",
  },
};
