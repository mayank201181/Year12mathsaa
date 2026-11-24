import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p1-hl",
  title: "Mock Paper 1 (HL · Non-GDC)",
  level: "HL",
  calculator: false,
  minutes: 120,
  paperType: "Paper 1 (HL · Non-GDC · 2h · 100m)",
  questions: [
    // ======================= SECTION A (Short & Exact HL) ====================
    {
      id: "exam-p1-hl-q01",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "1a-number-algebra-core",
      guideRef: "partial-fractions-hl",
      commandTerm: "Find",
      question:
        "[Section A · HL Non-GDC] Express {{(5x + 1)/((x - 1)(x + 2))}} in the partial-fraction form {{A/(x - 1) + B/(x + 2)}}. Find the values of {{A}} and {{B}}, giving your answer as the ordered pair {{A, B}} separated by a comma.",
      answer: { type: "list", values: [2, 3], ordered: true, display: "2, 3" },
      traps: [
        {
          spec: { type: "list", values: [3, 2], ordered: true },
          feedback: "Check the order: A = 2 sits over (x − 1) and B = 3 sits over (x + 2).",
        },
        {
          spec: { type: "list", values: [2, -3], ordered: true },
          feedback: "Check the sign at x = −2: 5(−2) + 1 = −9 and (−2 − 1)B = −3B, so B = (−9)/(−3) = +3.",
        },
      ],
      hints: [
        "Multiply both sides by {{(x - 1)(x + 2)}} to form the polynomial identity {{5x + 1 ≡ A(x + 2) + B(x - 1)}}.",
        "Substitute {{x = 1}} to isolate {{A}}, and substitute {{x = -2}} to isolate {{B}}.",
      ],
      strategy: "Use the cover-up (strategic substitution) values x = 1 and x = −2 to find A and B in two lines.",
      solution: [
        "Clear denominators: {{5x + 1 = A(x + 2) + B(x - 1)}}.",
        "Set {{x = 1}}: {{5(1) + 1 = 3A}}, so {{6 = 3A}} and {{A = 2}}.",
        "Set {{x = -2}}: {{5(-2) + 1 = -3B}}, so {{-9 = -3B}} and {{B = 3}}. Ordered pair: {{2, 3}}.",
      ],
      commonError: "Sign slip when substituting x = −2 into 5x + 1 or into (x − 1).",
    },
    {
      id: "exam-p1-hl-q02",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "1b-complex-proofs-systems",
      guideRef: "polar-euler-demoivre",
      commandTerm: "Evaluate",
      question:
        "[Section A · HL Non-GDC] Let {{z = 1 - i sqrt(3)}}. Using De Moivre's theorem, evaluate the exact value of {{z^6}}.",
      options: ["64", "−64", "64i", "−64i"],
      answerIndex: 0,
      hints: [
        "Convert {{z = 1 - i sqrt(3)}} to polar form {{r e^(iθ)}}: find {{r = sqrt(1^2 + (-sqrt(3))^2)}} and note that {{z}} lies in Quadrant IV.",
        "With {{r = 2}} and {{θ = -pi/3}}, apply De Moivre's theorem: {{z^6 = 2^6 e^(6(-i pi/3)) = 64 e^(-2i pi)}}.",
      ],
      strategy: "Always sketch z on an Argand diagram first so you pick the exact quadrant for arg(z).",
      explanation:
        "We have {{|z| = sqrt(1 + 3) = 2}} and, since {{z}} lies in Quadrant IV, {{arg(z) = -pi/3}}. By De Moivre's theorem, {{z^6 = 2^6 (cos(-2pi) + i sin(-2pi)) = 64(1 + 0i) = 64}}.",
    },
    {
      id: "exam-p1-hl-q03",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "2-functions",
      guideRef: "polynomials-vieta-rationals-hl",
      commandTerm: "Find",
      question:
        "[Section A · HL Non-GDC] The cubic equation {{2x^3 - 6x^2 + 5x - 4 = 0}} has roots {{α, β, γ}}. Using Vieta's formulas, find the exact value of {{α^2 + β^2 + γ^2}}.",
      answer: { type: "number", value: 4 },
      traps: [
        {
          spec: { type: "number", value: 9 },
          feedback: "9 is (α + β + γ)² — remember to subtract 2(αβ + βγ + γα).",
        },
        {
          spec: { type: "number", value: 14 },
          feedback: "Subtract 2(αβ + βγ + γα) rather than adding it: 3² − 2(5/2) = 9 − 5 = 4.",
        },
      ],
      hints: [
        "By Vieta's formulas for {{ax^3 + bx^2 + cx + d = 0}}, {{α + β + γ = -b/a}} and {{αβ + βγ + γα = c/a}}.",
        "Use the symmetric identity {{α^2 + β^2 + γ^2 = (α + β + γ)^2 - 2(αβ + βγ + γα)}}.",
      ],
      strategy: "Never try to factorise a cubic when a symmetric sum of roots is requested — jump straight to Vieta's formulas!",
      solution: [
        "Read off Vieta's sums from {{2x^3 - 6x^2 + 5x - 4 = 0}}: {{α + β + γ = -(-6)/2 = 3}} and {{αβ + βγ + γα = 5/2}}.",
        "Apply {{α^2 + β^2 + γ^2 = (α + β + γ)^2 - 2(αβ + βγ + γα)}}.",
        "Compute: {{3^2 - 2(5/2) = 9 - 5 = 4}}.",
      ],
      commonError: "Forgetting to divide by the leading coefficient a = 2 when extracting Vieta's formulas.",
    },
    {
      id: "exam-p1-hl-q04",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "2-functions",
      guideRef: "polynomials-vieta-rationals-hl",
      commandTerm: "Find",
      question:
        "[Section A · HL Non-GDC] Find the equation of the oblique (slant) asymptote of the rational function {{f(x) = (2x^2 - 3x + 7)/(x - 2)}}.",
      options: ["y = 2x − 1", "y = 2x + 1", "y = 2x − 3", "y = 2x + 7"],
      answerIndex: 1,
      hints: [
        "Perform polynomial long division (or synthetic division at {{x = 2}}) to rewrite {{f(x)}} as {{mx + k + R/(x - 2)}}.",
        "As {{x -> ±∞}}, the remainder fraction {{R/(x - 2) -> 0}}, leaving the linear quotient {{y = mx + k}}.",
      ],
      strategy: "Check your division by multiplying (quotient)(divisor) + remainder and verifying it matches the numerator.",
      explanation:
        "Dividing {{2x^2 - 3x + 7}} by {{x - 2}} gives {{2x(x - 2) = 2x^2 - 4x}}, remainder {{x + 7}}; then {{1(x - 2) = x - 2}}, remainder {{9}}. Thus {{f(x) = 2x + 1 + 9/(x - 2)}}. As {{x -> ±∞}}, {{9/(x - 2) -> 0}}, so the oblique asymptote is {{y = 2x + 1}}.",
    },
    {
      id: "exam-p1-hl-q05",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "3a-geometry-trig",
      guideRef: "reciprocal-inverse-compound-hl",
      commandTerm: "Determine",
      question:
        "[Section A · HL Non-GDC] Given that {{tan α = 1/3}} and {{tan β = 1/2}}, where {{α}} and {{β}} are acute angles, determine the exact value of {{α + β}} in radians.",
      options: ["{{pi/6}}", "{{pi/3}}", "{{pi/4}}", "{{5pi/12}}"],
      answerIndex: 2,
      hints: [
        "Apply the compound-angle identity {{tan(α + β) = (tan α + tan β)/(1 - tan α tan β)}}.",
        "Verify the range of {{α + β}}: since both {{tan α < 1}} and {{tan β < 1}}, both angles lie in {{(0, pi/4)}}, so {{0 < α + β < pi/2}}.",
      ],
      strategy: "Always check the quadrant/range of α + β before applying arctan — acute angles can sum to an obtuse angle if tan α · tan β > 1!",
      explanation:
        "Using the compound-angle formula, {{tan(α + β) = (1/3 + 1/2)/(1 - (1/3)(1/2)) = (5/6)/(5/6) = 1}}. Since {{0 < tan α < 1}} and {{0 < tan β < 1}} for acute {{α, β}}, we have {{0 < α < pi/4}} and {{0 < β < pi/4}}, hence {{0 < α + β < pi/2}}. Therefore {{α + β = arctan(1) = pi/4}}.",
    },
    {
      id: "exam-p1-hl-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "3b-vectors-planes",
      guideRef: "intersections-angles-distances",
      commandTerm: "Find",
      question:
        "[Section A · HL Non-GDC] Find the exact shortest (perpendicular) distance from the point {{P(3, -1, 4)}} to the plane {{2x - 2y + z = 6}}.",
      answer: { type: "number", value: 2 },
      traps: [
        {
          spec: { type: "number", value: 6 },
          feedback: "6 is |ax₀ + by₀ + cz₀ − d| — remember to divide by |n| = √(2² + (−2)² + 1²) = 3.",
        },
        {
          spec: { type: "fraction", n: 10, d: 3 },
          feedback: "Check the sign of −2(−1) = +2 and remember to subtract d = 6: |6 + 2 + 4 − 6| = 6.",
        },
      ],
      hints: [
        "The shortest distance from {{(x_0, y_0, z_0)}} to {{ax + by + cz = d}} is {{|ax_0 + by_0 + cz_0 - d| / sqrt(a^2 + b^2 + c^2)}}.",
        "Compute the numerator {{|2(3) - 2(-1) + 1(4) - 6|}} and divide by {{|n| = sqrt(4 + 4 + 1) = 3}}.",
      ],
      strategy: "Rewrite the plane as ax + by + cz − d = 0 first so the sign on −d is impossible to miss.",
      solution: [
        "Identify the normal vector {{n = (2, -2, 1)}}, with magnitude {{|n| = sqrt(2^2 + (-2)^2 + 1^2) = sqrt(9) = 3}}.",
        "Evaluate the numerator at {{P(3, -1, 4)}}: {{|2(3) - 2(-1) + 1(4) - 6| = |6 + 2 + 4 - 6| = 6}}.",
        "Divide by {{|n|}}: shortest distance {{d = 6/3 = 2}}.",
      ],
      commonError: "Forgetting to divide by the magnitude of the normal vector, or adding +6 instead of subtracting 6.",
    },
    {
      id: "exam-p1-hl-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "4-stats-probability",
      guideRef: "continuous-rvs-pdf-cdf-hl",
      commandTerm: "Find",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 185" role="img" aria-label="Symmetric parabolic probability density curve f(x) = k x (2 minus x) on interval 0 to 2 with shaded unit area"><rect width="280" height="185" fill="#f8fafc" rx="10"/><line x1="30" y1="150" x2="255" y2="150" stroke="#64748b" stroke-width="1.5"/><line x1="50" y1="165" x2="50" y2="20" stroke="#64748b" stroke-width="1.5"/><path d="M 50 150 Q 140 -30 230 150 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2.2"/><line x1="140" y1="60" x2="140" y2="150" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3"/><text x="46" y="166" font-family="sans-serif" font-size="12" fill="#1e293b">0</text><text x="136" y="166" font-family="sans-serif" font-size="12" fill="#1e293b">1</text><text x="226" y="166" font-family="sans-serif" font-size="12" fill="#1e293b">2</text><text x="115" y="122" font-family="sans-serif" font-size="12" fill="#1d4ed8">Area = 1</text><text x="158" y="45" font-family="sans-serif" font-size="12" fill="#2563eb">f(x) = kx(2 − x)</text><text x="248" y="144" font-family="sans-serif" font-size="12" fill="#64748b">x</text></svg>',
      question:
        "[Section A · HL Non-GDC] A continuous random variable {{X}} has probability density function {{f(x) = kx(2 - x)}} for {{0 ≤ x ≤ 2}}, and {{f(x) = 0}} otherwise. Find the exact value of the constant {{k}} as a simplified fraction.",
      answer: { type: "fraction", n: 3, d: 4, simplest: true },
      traps: [
        {
          spec: { type: "fraction", n: 4, d: 3 },
          feedback: "4/3 is the integral ∫₀² x(2 − x) dx — since k(4/3) = 1, take the reciprocal to get k = 3/4.",
        },
        {
          spec: { type: "fraction", n: 3, d: 8 },
          feedback: "Check your definite integral: [x² − x³/3]₀² = 4 − 8/3 = 4/3, so k = 3/4.",
        },
      ],
      hints: [
        "Every valid PDF satisfies {{∫_(-∞)^∞ f(x) dx = 1}}, so set {{k ∫_0^2 (2x - x^2) dx = 1}}.",
        "Integrate {{2x - x^2}} to get {{x^2 - x^3/3}}, evaluate from {{0}} to {{2}}, and solve for {{k}}.",
      ],
      strategy: "Expand x(2 − x) to 2x − x² before integrating, and double-check that your k makes f(x) ≥ 0 on [0, 2].",
      solution: [
        "Total probability equals 1: {{k ∫_0^2 (2x - x^2) dx = 1}}.",
        "Evaluate the integral: {{[x^2 - x^3/3]_0^2 = (4 - 8/3) - 0 = 4/3}}.",
        "Solve {{(4/3)k = 1}} to obtain {{k = 3/4}}.",
      ],
      commonError: "Reporting the value of the integral 4/3 instead of solving k(4/3) = 1 for k = 3/4.",
    },
    {
      id: "exam-p1-hl-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "5a-differentiation",
      guideRef: "first-principles-lhopital-hl",
      commandTerm: "Evaluate",
      question:
        "[Section A · HL Non-GDC] Using L'Hôpital's rule, evaluate the exact limit {{lim_(x -> 0) (e^(2x) - 1 - 2x)/x^2}}.",
      answer: { type: "number", value: 2 },
      traps: [
        {
          spec: { type: "number", value: 1 },
          feedback: "Remember the chain rule on e^(2x): differentiating twice gives 4e^(2x) over 2, which evaluates to 2.",
        },
        {
          spec: { type: "number", value: 4 },
          feedback: "Remember to differentiate the denominator x² twice as well: d²/dx²(x²) = 2, so 4/2 = 2.",
        },
      ],
      hints: [
        "Verify the indeterminate form {{0/0}} at {{x = 0}} before applying L'Hôpital's rule the first time.",
        "After differentiating numerator and denominator once, check again at {{x = 0}}: it is still {{0/0}}, so apply L'Hôpital's rule a second time!",
      ],
      strategy: "Always check for 0/0 or ∞/∞ before EVERY application of L'Hôpital's rule — never differentiate once the denominator is non-zero.",
      solution: [
        "At {{x = 0}}, numerator {{e^0 - 1 - 0 = 0}} and denominator {{0^2 = 0}} (indeterminate {{0/0}}).",
        "First L'Hôpital application: {{lim_(x -> 0) (2e^(2x) - 2)/(2x)}}, which is still {{0/0}} at {{x = 0}}.",
        "Second L'Hôpital application: {{lim_(x -> 0) (4e^(2x))/2 = 4(1)/2 = 2}}.",
      ],
      commonError: "Applying the quotient rule instead of differentiating numerator and denominator separately, or dropping a factor of 2 from e^(2x).",
    },
    {
      id: "exam-p1-hl-q09",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "5b-integration-des-maclaurin",
      guideRef: "advanced-integration-volumes-hl",
      commandTerm: "Evaluate",
      question:
        "[Section A · HL Non-GDC] Evaluate the exact definite integral {{∫_1^e x ln x dx}}.",
      options: ["{{(e^2 - 1)/4}}", "{{(e^2 + 1)/2}}", "{{e^2/4}}", "{{(e^2 + 1)/4}}"],
      answerIndex: 3,
      hints: [
        "Use integration by parts with LIATE priority: choose {{u = ln x}} (logarithmic) and {{dv/dx = x}} (algebraic).",
        "You obtain {{(x^2/2)ln x - ∫ (x/2) dx = (x^2/2)ln x - x^2/4}}. Watch the double negative when evaluating at the lower limit {{x = 1}}!",
      ],
      strategy: "For ∫ xⁿ ln x dx, always pick u = ln x so du = (1/x) dx turns the remaining integral into a simple power.",
      explanation:
        "Let {{u = ln x}} ({{du = (1/x)dx}}) and {{dv = x dx}} ({{v = x^2/2}}). Then {{∫ x ln x dx = (x^2/2)ln x - (1/2)∫ x dx = (x^2/2)ln x - x^2/4}}. Evaluating from {{1}} to {{e}} gives {{[(e^2/2)(1) - e^2/4] - [0 - 1/4] = e^2/4 + 1/4 = (e^2 + 1)/4}}.",
    },
    {
      id: "exam-p1-hl-q10",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      topicId: "5b-integration-des-maclaurin",
      guideRef: "maclaurin-series-hl",
      commandTerm: "Find",
      question:
        "[Section A · HL Non-GDC] Find the exact coefficient of {{x^3}} in the Maclaurin series expansion of {{f(x) = e^x sin x}}, giving your answer as a simplified fraction.",
      answer: { type: "fraction", n: 1, d: 3, simplest: true },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "2 is f'''(0) — remember to divide by 3! = 6 in the Maclaurin coefficient formula f'''(0)/3!.",
        },
        {
          spec: { type: "fraction", n: 2, d: 3 },
          feedback: "Watch the sign on −x³/6 in sin x: (−1/6) + 1/2 = 1/3, not 1/6 + 1/2 = 2/3.",
        },
      ],
      hints: [
        "Write the standard Maclaurin expansions up to {{x^3}}: {{e^x = 1 + x + x^2/2 + x^3/6 + ...}} and {{sin x = x - x^3/6 + ...}}.",
        "Collect only the products whose powers sum to {{x^3}}: {{1 * (-x^3/6)}} and {{(x^2/2) * x}}.",
      ],
      strategy: "Multiplying standard series up to x³ is much faster (and less prone to product-rule slips) than finding f'''(0).",
      solution: [
        "Substitute standard expansions: {{e^x sin x = (1 + x + x^2/2 + x^3/6 + ...)(x - x^3/6 + ...)}}.",
        "Extract the {{x^3}} term: {{1(-x^3/6) + (x^2/2)(x) = (-1/6 + 1/2)x^3 = (1/3)x^3}}.",
        "Hence the exact coefficient of {{x^3}} is {{1/3}}.",
      ],
      commonError: "Forgetting the minus sign in sin x = x − x³/3! + … or failing to divide f'''(0) by 3!.",
    },

    // ======================= SECTION B (Extended HL Proofs & Derivations) ====
    {
      id: "exam-p1-hl-q11",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "1b-complex-proofs-systems",
      guideRef: "induction-contradiction",
      commandTerm: "Prove",
      marks: 8,
      question:
        "[Section B · HL Non-GDC · 8 marks] Prove by mathematical induction that for every positive integer {{n ≥ 1}},\n{{∑_(r=1)^n r * 2^(r-1) = (n - 1)2^n + 1}}.",
      hints: [
        "Step 1 (Base case): Check LHS and RHS separately for {{n = 1}}.",
        "Step 2 (Inductive hypothesis): Explicitly state 'Assume true for {{n = k}} for some {{k ∈ ℤ^+}}'.",
        "Step 3 (Inductive step): Split the sum to {{k + 1}} into the sum to {{k}} plus the {{(k + 1)}}th term, factor out {{2^k}}, and simplify {{2k * 2^k}} to {{k * 2^(k+1)}}.",
        "Step 4: Include the mandatory IB concluding sentence linking base case and inductive step.",
      ],
      strategy: "Never skip the explicit wording of the assumption ('Assume true for n = k') or the final IB induction conclusion — examiners reserve dedicated R1/A1 marks for them!",
      modelAnswer:
        "Let P(n) be the proposition that ∑_{r=1}^n r·2^(r-1) = (n - 1)2^n + 1.\nBase case (n = 1): LHS = 1 × 2^0 = 1, and RHS = (1 - 1)2^1 + 1 = 0 + 1 = 1. Since LHS = RHS, P(1) is true.\nInductive hypothesis: Assume P(k) is true for some positive integer k, i.e. ∑_{r=1}^k r·2^(r-1) = (k - 1)2^k + 1.\nInductive step (n = k + 1): Consider LHS for k + 1:\n∑_{r=1}^{k+1} r·2^(r-1) = (∑_{r=1}^k r·2^(r-1)) + (k + 1)2^k\n= [(k - 1)2^k + 1] + (k + 1)2^k   (by the inductive hypothesis)\n= (k - 1 + k + 1)2^k + 1\n= 2k · 2^k + 1\n= k · 2^(k+1) + 1 = ((k + 1) - 1)2^(k+1) + 1 = RHS for n = k + 1.\nConclusion: Since P(1) is true and truth of P(k) implies truth of P(k + 1), by the principle of mathematical induction the statement holds for all integers n ≥ 1.",
      markScheme: [
        {
          point: "B1: Evaluates LHS = 1 and RHS = 1 explicitly for base case n = 1",
          keywords: ["n = 1", "lhs = rhs"],
        },
        {
          point: "M1: States inductive hypothesis clearly ('assume true for n = k')",
          keywords: ["assume", "n = k"],
        },
        {
          point: "M1: Splits sum to k + 1 as (sum to k) + (k + 1)2^k",
          keywords: ["(k + 1)2^k", "(k+1)2^k"],
        },
        {
          point: "M1: Substitutes inductive hypothesis [(k − 1)2^k + 1] into the sum",
          keywords: ["(k - 1)2^k + 1", "inductive hypothesis"],
        },
        {
          point: "A1: Factors out 2^k to obtain (k − 1 + k + 1)2^k + 1 = 2k · 2^k + 1",
          keywords: ["2k"],
        },
        {
          point: "A1: Combines powers of 2 cleanly to obtain k · 2^(k+1) + 1",
          keywords: ["2^(k+1)", "2^(k + 1)"],
        },
        {
          point: "A1: Expresses final form explicitly as ((k + 1) − 1)2^(k+1) + 1 matching target RHS",
          keywords: ["((k + 1) - 1)", "rhs for n = k + 1"],
        },
        {
          point: "R1: Complete formal IB induction conclusion referencing both base case and inductive step",
          keywords: ["principle of mathematical induction", "implies"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Verifies the base case n = 1 and states an inductive assumption without progressing through the algebra.",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Correctly adds the (k + 1)th term and substitutes the hypothesis, with minor algebraic or concluding omissions.",
        },
        {
          band: "High (6–8 marks)",
          marks: [6, 8],
          descriptor: "Flawless base case, hypothesis, algebraic reduction to ((k + 1) − 1)2^(k+1) + 1, and formal concluding statement.",
        },
      ],
      commonError: "Writing 'let n = k be true' instead of 'assume', or omitting the final concluding sentence (losing the R1 mark).",
    },
    {
      id: "exam-p1-hl-q12",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "3b-vectors-planes",
      guideRef: "cross-product-planes",
      commandTerm: "Find",
      marks: 9,
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 205" role="img" aria-label="3D plane Pi containing triangle ABC with normal vector n and intersecting line L piercing plane at point Q"><rect width="300" height="205" fill="#f8fafc" rx="10"/><polygon points="35,145 100,82 275,92 210,162" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.8"/><polygon points="88,132 145,105 162,140" fill="#c7d2fe" stroke="#312e81" stroke-width="1.8"/><line x1="125" y1="122" x2="125" y2="38" stroke="#0f766e" stroke-width="2.2"/><polygon points="125,32 120,44 130,44" fill="#0f766e"/><line x1="230" y1="30" x2="195" y2="128" stroke="#dc2626" stroke-width="2.2"/><line x1="195" y1="128" x2="177" y2="178" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/><circle cx="195" cy="128" r="4" fill="#dc2626"/><text x="74" y="138" font-family="sans-serif" font-size="12" fill="#1e293b">A</text><text x="148" y="102" font-family="sans-serif" font-size="12" fill="#1e293b">B</text><text x="165" y="148" font-family="sans-serif" font-size="12" fill="#1e293b">C</text><text x="132" y="48" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f766e">n = AB × AC</text><text x="234" y="42" font-family="sans-serif" font-size="12" fill="#dc2626">Line L</text><text x="204" y="132" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Q</text><text x="48" y="158" font-family="sans-serif" font-size="12" fill="#4338ca">Π</text></svg>',
      question:
        "[Section B · HL Non-GDC · 9 marks] The points {{A(1, 0, 2)}}, {{B(2, 2, 1)}}, and {{C(3, 1, 4)}} lie in a plane {{Π}}.\n(a) Find {{AB × AC}} and hence find the exact area of triangle {{ABC}}. [4 marks]\n(b) Find the Cartesian equation of the plane {{Π}}. [2 marks]\n(c) A line {{L}} passes through {{D(6, 1, 5)}} with direction vector {{d = (1, -1, 1)}}. Find the coordinates of the point {{Q}} where {{L}} intersects {{Π}}. [3 marks]",
      hints: [
        "Compute displacement vectors {{AB = B - A = (1, 2, -1)}} and {{AC = C - A = (2, 1, 2)}}, then take their cross product.",
        "Always check your cross product by verifying its dot product with BOTH {{AB}} and {{AC}} equals zero!",
        "Use {{r · n = a · n}} with {{A(1, 0, 2)}} for the Cartesian plane, then substitute parametric coordinates {{(6 + t, 1 - t, 5 + t)}} of {{L}} to solve for {{t}}.",
      ],
      strategy: "A 5-second dot-product sanity check (n · AB = 0 and n · AC = 0) guarantees zero carry-forward error into parts (b) and (c).",
      modelAnswer:
        "(a) AB = (2 - 1, 2 - 0, 1 - 2) = (1, 2, -1) and AC = (3 - 1, 1 - 0, 4 - 2) = (2, 1, 2). Taking the cross product:\nAB × AC = (2(2) - (-1)(1), -((1)(2) - (-1)(2)), (1)(1) - (2)(2)) = (5, -4, -3).\nIts magnitude is |AB × AC| = sqrt(25 + 16 + 9) = sqrt(50) = 5sqrt(2). Hence the exact area of triangle ABC is (1/2)|AB × AC| = (5sqrt(2))/2.\n(b) Using normal n = (5, -4, -3) and point A(1, 0, 2): 5x - 4y - 3z = 5(1) - 4(0) - 3(2) = -1, so Π has Cartesian equation 5x - 4y - 3z = -1.\n(c) Parametric equations of L are x = 6 + t, y = 1 - t, z = 5 + t. Substituting into Π gives 5(6 + t) - 4(1 - t) - 3(5 + t) = -1, so 30 + 5t - 4 + 4t - 15 - 3t = -1, giving 11 + 6t = -1, hence 6t = -12 and t = -2. Substituting t = -2 back into L gives Q = (4, 3, 3).",
      markScheme: [
        {
          point: "A1: Computes both displacement vectors AB = (1, 2, −1) and AC = (2, 1, 2)",
          keywords: ["(1, 2, -1)", "(2, 1, 2)"],
        },
        {
          point: "A1: Evaluates cross product AB × AC = (5, −4, −3)",
          keywords: ["(5, -4, -3)", "(5,-4,-3)"],
        },
        {
          point: "M1: Computes magnitude |AB × AC| = √50 = 5√2",
          keywords: ["sqrt(50)", "5sqrt(2)"],
        },
        {
          point: "A1: Divides by 2 to obtain exact triangle area (5√2)/2",
          keywords: ["(5sqrt(2))/2", "5sqrt(2)/2"],
        },
        {
          point: "M1: Applies r · n = a · n using normal (5, −4, −3) and a point on Π",
          keywords: ["5x - 4y - 3z", "5(1)"],
        },
        {
          point: "A1: Obtains Cartesian equation 5x − 4y − 3z = −1",
          keywords: ["= -1", "=-1"],
        },
        {
          point: "M1: Substitutes parametric form (6 + t, 1 − t, 5 + t) into plane equation",
          keywords: ["6 + t", "1 - t", "5 + t"],
        },
        {
          point: "A1: Solves linear equation 11 + 6t = −1 to get t = −2",
          keywords: ["t = -2", "t=-2"],
        },
        {
          point: "A1: Substitutes t = −2 to find intersection coordinates Q(4, 3, 3)",
          keywords: ["(4, 3, 3)", "(4,3,3)"],
        },
      ],
      markbands: [
        {
          band: "Low (0–3 marks)",
          marks: [0, 3],
          descriptor: "Finds AB and AC and attempts the cross product or sets up the parametric line.",
        },
        {
          band: "Mid (4–6 marks)",
          marks: [4, 6],
          descriptor: "Correct cross product, triangle area, and Cartesian equation of Π (or solid follow-through in part (c)).",
        },
        {
          band: "High (7–9 marks)",
          marks: [7, 9],
          descriptor: "Exact normal (5, −4, −3), area (5√2)/2, plane 5x − 4y − 3z = −1, and verified intersection Q(4, 3, 3).",
        },
      ],
      commonError: "Forgetting the factor of 1/2 in triangle area (giving parallelogram area 5√2), or dropping the minus sign on the j-component of the cross product.",
    },
    {
      id: "exam-p1-hl-q13",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "5b-integration-des-maclaurin",
      guideRef: "differential-equations-hl",
      commandTerm: "Solve",
      marks: 9,
      question:
        "[Section B · HL Non-GDC · 9 marks] Solve the first-order linear differential equation\n{{x (dy/dx) + 2y = 2e^(x^2)}}, for {{x > 0}},\ngiven the boundary condition {{y(1) = 3e}}. Express {{y}} explicitly as a function of {{x}}.",
      hints: [
        "First divide every term by {{x}} to put the ODE into standard linear form {{dy/dx + P(x)y = Q(x)}}.",
        "Compute the integrating factor {{μ(x) = e^(∫ (2/x) dx) = e^(2 ln x) = x^2}} (valid since {{x > 0}}).",
        "Multiply the standard form by {{x^2}} so the LHS collapses to {{d/dx(x^2 y)}} and the RHS becomes {{2x e^(x^2)}}.",
        "Integrate using {{u = x^2}}, remember {{+ C}}, find {{C}} from {{y(1) = 3e}}, and divide by {{x^2}} at the very end.",
      ],
      strategy: "Never compute the integrating factor before dividing by the coefficient of dy/dx — skipping that step produces the wrong P(x)!",
      modelAnswer:
        "Dividing by x (since x > 0) puts the ODE into standard linear form: dy/dx + (2/x)y = (2/x)e^(x^2). Here P(x) = 2/x, so the integrating factor is μ(x) = e^(∫ (2/x) dx) = e^(2 ln x) = x^2 (as x > 0).\nMultiplying the standard form by x^2 gives x^2 (dy/dx) + 2xy = 2x e^(x^2), which collapses by the product rule to d/dx(x^2 y) = 2x e^(x^2).\nIntegrating both sides with respect to x (using the substitution u = x^2, du = 2x dx) yields x^2 y = ∫ 2x e^(x^2) dx = e^(x^2) + C.\nApplying the initial condition y(1) = 3e gives 1^2(3e) = e^1 + C, so 3e = e + C and C = 2e.\nFinally, dividing by x^2 gives the explicit solution y = (e^(x^2) + 2e)/x^2.",
      markScheme: [
        {
          point: "M1: Divides by x to obtain standard form dy/dx + (2/x)y = (2/x)e^(x²)",
          keywords: ["(2/x)y", "standard linear form"],
        },
        {
          point: "M1: Computes ∫ (2/x) dx = 2 ln x for integrating factor",
          keywords: ["2 ln x", "2ln x"],
        },
        {
          point: "A1: Simplifies integrating factor to μ(x) = x² (valid for x > 0)",
          keywords: ["μ(x)", "x^2"],
        },
        {
          point: "M1: Rewrites LHS as exact product-rule derivative d/dx(x²y)",
          keywords: ["d/dx(x^2 y)", "d/dx(x^2y)"],
        },
        {
          point: "A1: Simplifies RHS correctly to 2x e^(x²)",
          keywords: ["2x e^(x^2)", "2xe^(x^2)"],
        },
        {
          point: "M1: Uses substitution u = x² (du = 2x dx) to integrate RHS",
          keywords: ["u = x^2", "du = 2x"],
        },
        {
          point: "A1: Obtains general implicit solution x²y = e^(x²) + C (including + C)",
          keywords: ["e^(x^2) + c", "+ c"],
        },
        {
          point: "M1: Applies y(1) = 3e to determine C = 2e",
          keywords: ["c = 2e", "c=2e"],
        },
        {
          point: "A1: States final explicit solution y = (e^(x²) + 2e)/x²",
          keywords: ["(e^(x^2) + 2e)/x^2", "e^(x^2)/x^2 + 2e/x^2"],
        },
      ],
      markbands: [
        {
          band: "Low (0–3 marks)",
          marks: [0, 3],
          descriptor: "Rewrites the ODE in standard form and finds the integrating factor μ(x) = x².",
        },
        {
          band: "Mid (4–6 marks)",
          marks: [4, 6],
          descriptor: "Recognises d/dx(x²y) = 2x e^(x²) and integrates to obtain e^(x²) + C.",
        },
        {
          band: "High (7–9 marks)",
          marks: [7, 9],
          descriptor: "Complete, rigorous integrating-factor solution with C = 2e and explicit final expression y = (e^(x²) + 2e)/x².",
        },
      ],
      commonError: "Forgetting to add + C BEFORE dividing by x² (wrongly writing y = e^(x²)/x² + C instead of (e^(x²) + C)/x²).",
    },
    {
      id: "exam-p1-hl-q14",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "1b-complex-proofs-systems",
      guideRef: "polar-euler-demoivre",
      commandTerm: "Solve",
      marks: 8,
      question:
        "[Section B · HL Non-GDC · 8 marks]\n(a) Express {{w = -4 + 4i sqrt(3)}} in modulus-argument form {{r(cos θ + i sin θ)}}, where {{r > 0}} and {{-pi < θ ≤ pi}}. [3 marks]\n(b) Hence solve the equation {{z^3 = -4 + 4i sqrt(3)}}, giving all three roots in Euler form {{r e^(iθ)}} with {{-pi < θ ≤ pi}}. [4 marks]\n(c) Name the regular polygon formed by the three roots on an Argand diagram and state the sum of the three roots. [1 mark]",
      hints: [
        "Plot {{-4 + 4i sqrt(3)}} in Quadrant II: its modulus is {{sqrt(16 + 48) = 8}} and its reference angle is {{pi/3}}, so {{θ = pi - pi/3}}.",
        "Write {{z^3 = 8 e^(i(2pi/3 + 2pi k))}} for {{k = 0, 1, -1}}, then take cube roots of modulus and divide the argument by {{3}}.",
        "Check that every argument lies strictly inside {{(-pi, pi]}} and remember Vieta's theorem for the sum of roots of {{z^3 - w = 0}}.",
      ],
      strategy: "Always add +2πk BEFORE dividing the argument by n, then adjust k so every root lies in the principal interval (−π, π].",
      modelAnswer:
        "(a) The modulus is r = sqrt((-4)^2 + (4sqrt(3))^2) = sqrt(16 + 48) = sqrt(64) = 8. Since w lies in Quadrant II with reference angle arctan(sqrt(3)) = π/3, the principal argument is θ = π - π/3 = 2π/3. Thus w = 8(cos(2π/3) + i sin(2π/3)).\n(b) Writing z^3 = 8e^(i(2π/3 + 2πk)) gives z = 8^(1/3) e^(i(2π/9 + 2πk/3)) = 2e^(i(2π/9 + 2πk/3)). Taking k = -1, 0, 1 keeps all arguments in (-π, π]:\n- k = -1: z_1 = 2e^(-4iπ/9)\n- k = 0: z_2 = 2e^(2iπ/9)\n- k = 1: z_3 = 2e^(8iπ/9).\n(c) The three roots form the vertices of an equilateral triangle centred at the origin, and their sum is 0.",
      markScheme: [
        {
          point: "A1: Computes modulus r = √(16 + 48) = 8",
          keywords: ["r = 8", "sqrt(64) = 8"],
        },
        {
          point: "A1: Finds principal argument θ = 2π/3 in Quadrant II",
          keywords: ["2π/3", "2pi/3"],
        },
        {
          point: "A1: Writes full modulus-argument form 8(cos(2π/3) + i sin(2π/3))",
          keywords: ["8(cos(2π/3)", "8(cos(2pi/3)"],
        },
        {
          point: "M1: Takes cube root of modulus (8^(1/3) = 2) and adds 2πk before dividing by 3",
          keywords: ["2πk/3", "2pik/3"],
        },
        {
          point: "A1: Obtains principal root 2e^(2iπ/9)",
          keywords: ["2iπ/9", "2ipi/9"],
        },
        {
          point: "A1: Obtains second root 2e^(8iπ/9)",
          keywords: ["8iπ/9", "8ipi/9"],
        },
        {
          point: "A1: Obtains third root in (−π, π] as 2e^(−4iπ/9)",
          keywords: ["-4iπ/9", "-4ipi/9"],
        },
        {
          point: "A1: Identifies equilateral triangle AND states sum of roots equals 0",
          keywords: ["equilateral triangle", "sum is 0"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Finds the modulus r = 8 or attempts the argument of w in Quadrant II.",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Correct modulus-argument form of w and applies De Moivre's root spacing 2π/3 to find at least two roots.",
        },
        {
          band: "High (6–8 marks)",
          marks: [6, 8],
          descriptor: "All three exact roots in Euler form within (−π, π], plus geometric identification (equilateral triangle) and zero sum.",
        },
      ],
      commonError: "Giving arg(w) = −π/3 (Quadrant IV instead of II), or leaving the third root as 14π/9 outside (−π, π].",
    },
    {
      id: "exam-p1-hl-q15",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "5b-integration-des-maclaurin",
      guideRef: "maclaurin-series-hl",
      commandTerm: "Find",
      marks: 8,
      question:
        "[Section B · HL Non-GDC · 8 marks]\n(a) Using the standard Maclaurin series for {{ln(1 + u)}} and {{cos x}}, find the Maclaurin series of {{g(x) = ln(1 + cos x)}} up to and including the term in {{x^4}}. [6 marks]\n(b) Hence evaluate the exact limit {{lim_(x -> 0) (ln(1 + cos x) - ln 2)/x^2}}. [2 marks]",
      hints: [
        "Factor out 2 first: {{1 + cos x = 2(1 + (cos x - 1)/2)}}, so {{ln(1 + cos x) = ln 2 + ln(1 + u)}} where {{u = (cos x - 1)/2}} vanishes at {{x = 0}}!",
        "Substitute {{cos x - 1 = -x^2/2 + x^4/24 - ...}} to get {{u = -x^2/4 + x^4/48 - ...}}, then expand {{ln(1 + u) = u - u^2/2 + ...}} up to {{x^4}}.",
        "For (b), substitute your series directly into the numerator, cancel {{ln 2}} and {{x^2}}, and take {{x -> 0}}.",
      ],
      strategy: "You can only apply ln(1 + u) = u − u²/2 + … when u → 0 as x → 0; factoring out 2 transforms cos x (which approaches 1) into (cos x − 1)/2 (which approaches 0)!",
      modelAnswer:
        "(a) Rewrite 1 + cos x = 2 + (cos x - 1) = 2(1 + (cos x - 1)/2), so ln(1 + cos x) = ln 2 + ln(1 + u), where u = (cos x - 1)/2.\nUsing cos x = 1 - x^2/2 + x^4/24 - ..., we obtain u = -x^2/4 + x^4/48 + O(x^6).\nSince u -> 0 as x -> 0, substitute into ln(1 + u) = u - u^2/2 + ... keeping terms up to x^4:\n- u = -x^2/4 + x^4/48 + O(x^6)\n- -u^2/2 = -(1/2)(-x^2/4)^2 + O(x^6) = -x^4/32 + O(x^6).\nCombining the x^4 coefficients: 1/48 - 1/32 = (2 - 3)/96 = -1/96.\nTherefore g(x) = ln 2 - x^2/4 - x^4/96 + ...\n(b) Substituting the Maclaurin expansion into the limit gives lim_(x -> 0) [(-x^2/4 - x^4/96 + ...) / x^2] = lim_(x -> 0) (-1/4 - x^2/96 + ...) = -1/4.",
      markScheme: [
        {
          point: "M1: Factors out 2 to write ln(1 + cos x) = ln 2 + ln(1 + (cos x − 1)/2)",
          keywords: ["ln 2 + ln", "(cos x - 1)/2"],
        },
        {
          point: "A1: Obtains u = −x²/4 + x⁴/48 + … from the cos x Maclaurin series",
          keywords: ["-x^2/4", "x^4/48"],
        },
        {
          point: "M1: Substitutes u into ln(1 + u) = u − u²/2 + …",
          keywords: ["u - u^2/2", "-u^2/2"],
        },
        {
          point: "A1: Computes −u²/2 = −x⁴/32 up to degree 4",
          keywords: ["-x^4/32", "1/32"],
        },
        {
          point: "M1: Combines x⁴ terms: 1/48 − 1/32 = −1/96",
          keywords: ["1/48 - 1/32", "-1/96"],
        },
        {
          point: "A1: States complete series ln 2 − x²/4 − x⁴/96",
          keywords: ["ln 2 - x^2/4 - x^4/96", "- x^4/96"],
        },
        {
          point: "M1: Substitutes series into limit and divides through by x²",
          keywords: ["-1/4 - x^2/96", "divid"],
        },
        {
          point: "A1: Evaluates exact limit as −1/4",
          keywords: ["-1/4", "-0.25"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Recalls cos x expansion or extracts the constant term ln 2 without forming a valid u → 0 substitution.",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Correctly obtains u = −x²/4 + x⁴/48 and finds the x² term −x²/4 (with arithmetic slip in combining x⁴ terms).",
        },
        {
          band: "High (6–8 marks)",
          marks: [6, 8],
          descriptor: "Exact expansion ln 2 − x²/4 − x⁴/96 and clean 'Hence' limit evaluation yielding −1/4.",
        },
      ],
      commonError: "Substituting u = cos x directly into ln(1 + u) — invalid because cos 0 = 1, not 0!",
    },
  ],
};
