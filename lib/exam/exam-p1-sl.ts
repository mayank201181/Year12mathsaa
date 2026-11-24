import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p1-sl",
  title: "Mock Paper 1 (SL · Non-GDC)",
  level: "SL",
  calculator: false,
  minutes: 90,
  paperType: "Paper 1 (SL · Non-GDC · 1h 30m · 75m)",
  questions: [
    // ======================= SECTION A (Short & Exact) =======================
    {
      id: "exam-p1-sl-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      topicId: "1a-number-algebra-core",
      guideRef: "sequences-series-sigma",
      commandTerm: "Find",
      question:
        "[Section A · Non-GDC] In an arithmetic sequence, the 4th term is {{u_4 = 17}} and the 10th term is {{u_10 = 41}}. Find the sum of the first 15 terms, {{S_15}}.",
      answer: { type: "number", value: 495 },
      traps: [
        {
          spec: { type: "number", value: 61 },
          feedback: "61 is the 15th term u_15 — the question asks for the sum S_15 of the first 15 terms.",
        },
        {
          spec: { type: "number", value: 435 },
          feedback: "Check the first term u_1: since u_4 = u_1 + 3d = 17 and d = 4, u_1 = 5 (not 1).",
        },
      ],
      hints: [
        "Write {{u_4 = u_1 + 3d}} and {{u_10 = u_1 + 9d}}, then subtract to eliminate {{u_1}}.",
        "Once you have {{d = 4}} and {{u_1 = 5}}, substitute into {{S_n = (n/2)(2u_1 + (n - 1)d)}} with {{n = 15}}.",
      ],
      strategy: "Use the gap between terms (u_10 − u_4 = 6d) to find d immediately before solving for u_1.",
      solution: [
        "Use {{u_n = u_1 + (n - 1)d}}: {{u_10 - u_4 = 6d = 41 - 17 = 24}}, so {{d = 4}}.",
        "Find the first term: {{u_1 = u_4 - 3d = 17 - 3(4) = 5}}.",
        "Compute the sum of the first 15 terms: {{S_15 = (15/2)(2(5) + 14(4)) = (15/2)(10 + 56) = 15 * 33 = 495}}.",
      ],
      commonError: "Stopping after finding u_15 = 61 instead of computing the series sum S_15.",
    },
    {
      id: "exam-p1-sl-q02",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "1a-number-algebra-core",
      guideRef: "exponents-logarithms-proof",
      commandTerm: "Solve",
      question:
        "[Section A · Non-GDC] Solve the logarithmic equation {{log_2(x - 1) + log_2(x + 5) = 4}} for {{x ∈ ℝ}}.",
      options: [
        "x = 3 only",
        "x = 3 and x = −7",
        "x = 6 only",
        "x = 7 only",
      ],
      answerIndex: 0,
      hints: [
        "First state the domain restriction: every argument inside a logarithm must be strictly positive, so {{x > 1}}.",
        "Apply the product law {{log_a(M) + log_a(N) = log_a(MN)}}, then rewrite in exponential form using {{2^4 = 16}}.",
        "Factorise the resulting quadratic and discard any root that violates {{x > 1}}.",
      ],
      strategy: "Always write down the logarithm domain BEFORE combining logs so extraneous roots are caught automatically.",
      explanation:
        "Domain requires {{x - 1 > 0}} and {{x + 5 > 0}}, giving {{x > 1}}. Combining the logarithms yields {{log_2((x - 1)(x + 5)) = 4}}, so {{(x - 1)(x + 5) = 2^4 = 16}}. Expanding gives {{x^2 + 4x - 21 = 0}}, which factorises as {{(x + 7)(x - 3) = 0}}, giving {{x = 3}} or {{x = -7}}. Because {{x = -7}} makes both logarithm arguments negative, only {{x = 3}} is valid (check: {{log_2(2) + log_2(8) = 1 + 3 = 4}}).",
    },
    {
      id: "exam-p1-sl-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "2-functions",
      guideRef: "functions-inverse-transforms",
      commandTerm: "Find",
      question:
        "[Section A · Non-GDC] The functions {{f}} and {{g}} are defined by {{f(x) = (2x + 3)/(x - 1)}} for {{x ≠ 1}}, and {{g(x) = 3x - 2}} for {{x ∈ ℝ}}. Find the exact value of {{(f^(-1) ∘ g)(2)}} as an improper fraction.",
      answer: { type: "fraction", n: 7, d: 2, simplest: true, allowDecimal: true },
      traps: [
        {
          spec: { type: "fraction", n: 11, d: 3 },
          feedback: "11/3 is (f ∘ g)(2) = f(4), not (f⁻¹ ∘ g)(2) = f⁻¹(4).",
        },
        {
          spec: { type: "number", value: 19 },
          feedback: "19 is (g ∘ f)(2) = g(7) — apply g first, then f⁻¹.",
        },
      ],
      hints: [
        "Remember the order of composition: {{(f^(-1) ∘ g)(2) = f^(-1)(g(2))}}.",
        "First evaluate {{g(2) = 4}}. Instead of finding a general formula for {{f^(-1)}}, you can simply solve {{f(x) = 4}} directly!",
      ],
      strategy: "To evaluate f⁻¹(k) at a single number k, solve f(x) = k directly — it is faster and less error-prone than inverting algebraically.",
      solution: [
        "First evaluate the inner function: {{g(2) = 3(2) - 2 = 4}}.",
        "We require {{f^(-1)(4)}}, which is the unique value of {{x}} satisfying {{f(x) = 4}}.",
        "Solve {{(2x + 3)/(x - 1) = 4}}: {{2x + 3 = 4x - 4}}, so {{2x = 7}} and {{x = 7/2}}.",
      ],
      commonError: "Evaluating (f ∘ g)(2) or applying f⁻¹ before g.",
    },
    {
      id: "exam-p1-sl-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "2-functions",
      guideRef: "quadratics-exponentials-rationals",
      commandTerm: "Find",
      question:
        "[Section A · Non-GDC] The quadratic equation {{kx^2 - 12x + (k + 5) = 0}}, where {{k ≠ 0}}, has two equal real roots. Find the positive value of {{k}}.",
      answer: { type: "number", value: 4 },
      traps: [
        {
          spec: { type: "number", value: -9 },
          feedback: "−9 is the negative root of k² + 5k − 36 = 0; the question asks for the positive value of k.",
        },
        {
          spec: { type: "number", value: 9 },
          feedback: "Check the factorisation of k² + 5k − 36 = 0: (k + 9)(k − 4) = 0 gives k = 4 or k = −9.",
        },
      ],
      hints: [
        "Two equal real roots occur precisely when the discriminant {{Δ = b^2 - 4ac = 0}}.",
        "Substitute {{a = k}}, {{b = -12}}, and {{c = k + 5}} into {{b^2 - 4ac = 0}} and divide through by {{4}}.",
        "Factorise {{k^2 + 5k - 36 = 0}} and select the positive root.",
      ],
      strategy: "Identify a, b, and c carefully (keeping signs and parentheses around c = k + 5) before setting Δ = 0.",
      solution: [
        "For equal real roots, set the discriminant to zero: {{Δ = (-12)^2 - 4k(k + 5) = 0}}.",
        "Expand and simplify: {{144 - 4k^2 - 20k = 0}}, so dividing by {{-4}} gives {{k^2 + 5k - 36 = 0}}.",
        "Factorise: {{(k + 9)(k - 4) = 0}}, giving {{k = -9}} or {{k = 4}}. Since {{k > 0}}, {{k = 4}}.",
      ],
      commonError: "Forgetting parentheses in −4k(k + 5) and writing −4k² + 5 instead of −4k² − 20k.",
    },
    {
      id: "exam-p1-sl-q05",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      topicId: "3a-geometry-trig",
      guideRef: "radians-unit-circle-exact",
      commandTerm: "Find",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 220" role="img" aria-label="Unit circle showing angle theta in Quadrant II with horizontal leg minus three-fifths"><rect width="260" height="220" fill="#f8fafc" rx="10"/><line x1="20" y1="120" x2="240" y2="120" stroke="#94a3b8" stroke-width="1.5"/><line x1="130" y1="20" x2="130" y2="205" stroke="#94a3b8" stroke-width="1.5"/><circle cx="130" cy="120" r="75" fill="none" stroke="#475569" stroke-width="1.5"/><polygon points="130,120 85,120 85,60" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><line x1="130" y1="120" x2="85" y2="60" stroke="#4338ca" stroke-width="2.5"/><path d="M 152 120 A 22 22 0 0 0 117 102" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="85" cy="60" r="4" fill="#4338ca"/><text x="150" y="96" font-family="sans-serif" font-size="13" fill="#dc2626">θ</text><text x="95" y="137" font-family="sans-serif" font-size="12" fill="#1e293b">−3/5</text><text x="56" y="93" font-family="sans-serif" font-size="12" fill="#1e293b">sin θ</text><text x="112" y="83" font-family="sans-serif" font-size="12" fill="#4338ca">1</text><text x="232" y="115" font-family="sans-serif" font-size="12" fill="#64748b">x</text><text x="136" y="30" font-family="sans-serif" font-size="12" fill="#64748b">y</text></svg>',
      question:
        "[Section A · Non-GDC] Given that {{cos θ = -3/5}} and {{pi/2 < θ < pi}}, find the exact value of {{sin 2θ}}.",
      options: ["{{24/25}}", "{{-24/25}}", "{{-7/25}}", "{{-8/5}}"],
      answerIndex: 1,
      hints: [
        "Use {{sin^2 θ + cos^2 θ = 1}} to find {{|sin θ|}}, and check the ASTC sign in Quadrant II ({{pi/2 < θ < pi}}).",
        "In Quadrant II, {{sin θ > 0}}, so {{sin θ = 4/5}}. Then apply {{sin 2θ = 2 sin θ cos θ}}.",
      ],
      strategy: "Draw the right triangle in the specified quadrant first to lock down the sign of every trig ratio.",
      explanation:
        "Since {{pi/2 < θ < pi}}, θ lies in Quadrant II where {{sin θ > 0}}. From {{sin^2 θ = 1 - (-3/5)^2 = 16/25}}, we get {{sin θ = 4/5}}. Applying the double-angle identity gives {{sin 2θ = 2 sin θ cos θ = 2(4/5)(-3/5) = -24/25}}.",
    },
    {
      id: "exam-p1-sl-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "3a-geometry-trig",
      guideRef: "radians-unit-circle-exact",
      commandTerm: "Find",
      question:
        "[Section A · Non-GDC] A sector of a circle has radius {{r = 6 cm}} and arc length {{l = 4pi cm}}. Find the exact area of the sector in {{cm^2}}, leaving your answer in terms of {{pi}}.",
      answer: { type: "expression", expr: "12pi", form: "simplified", display: "{{12pi}}" },
      traps: [
        {
          spec: { type: "expression", expr: "24pi" },
          feedback: "You missed the factor of 1/2 in A = ½r²θ (or A = ½rl).",
        },
        {
          spec: { type: "expression", expr: "8pi" },
          feedback: "Check the central angle θ = l/r = 4π/6 = 2π/3, then A = ½(6²)(2π/3) = 12π.",
        },
      ],
      hints: [
        "Use the radian arc-length formula {{l = rθ}} to find the central angle {{θ}} in radians.",
        "Substitute {{r = 6}} and {{θ = 2pi/3}} into the sector area formula {{A = (1/2)r^2 θ}} (or directly use {{A = (1/2)rl}}).",
      ],
      strategy: "Notice that A = ½r²θ = ½r(rθ) = ½rl gives the sector area in a single step when r and l are known.",
      solution: [
        "Find the angle in radians: {{θ = l/r = (4pi)/6 = 2pi/3}}.",
        "Compute the sector area: {{A = (1/2)r^2 θ = (1/2)(36)(2pi/3) = 12pi}} {{cm^2}}.",
      ],
      commonError: "Converting radians into degrees unnecessarily or dropping the factor of 1/2 in the area formula.",
    },
    {
      id: "exam-p1-sl-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "4-stats-probability",
      guideRef: "probability-conditional-bayes",
      commandTerm: "Find",
      question:
        "[Section A · Non-GDC] Events {{A}} and {{B}} satisfy {{P(A) = 1/2}}, {{P(B) = 2/5}}, and {{P(A ∪ B) = 3/4}}. Find the exact value of {{P(A | B)}} as a simplified fraction.",
      answer: { type: "fraction", n: 3, d: 8, simplest: true },
      traps: [
        {
          spec: { type: "fraction", n: 3, d: 20 },
          feedback: "3/20 is P(A ∩ B); divide by P(B) = 2/5 to obtain the conditional probability P(A | B).",
        },
        {
          spec: { type: "fraction", n: 3, d: 10 },
          feedback: "You divided by P(A) = 1/2 instead of P(B) = 2/5 — that gives P(B | A), not P(A | B).",
        },
      ],
      hints: [
        "First use the addition law {{P(A ∪ B) = P(A) + P(B) - P(A ∩ B)}} to find {{P(A ∩ B)}}.",
        "Then substitute into {{P(A | B) = P(A ∩ B) / P(B)}}, making sure the denominator is {{P(B)}}.",
      ],
      strategy: "Always check which event is after the vertical bar: P(A | B) divides by P(B).",
      solution: [
        "Find the intersection: {{P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 1/2 + 2/5 - 3/4 = (10 + 8 - 15)/20 = 3/20}}.",
        "Apply the conditional probability formula: {{P(A | B) = P(A ∩ B)/P(B) = (3/20)/(2/5) = (3/20) * (5/2) = 3/8}}.",
      ],
      commonError: "Assuming A and B are independent and answering P(A) = 1/2, or swapping P(A) and P(B) in the denominator.",
    },
    {
      id: "exam-p1-sl-q08",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "4-stats-probability",
      guideRef: "descriptive-stats-sampling",
      commandTerm: "Determine",
      question:
        "[Section A · Non-GDC] A data set of 12 test scores has mean {{μ = 64}} and standard deviation {{σ = 5}}. Each score {{x}} is linearly transformed to {{y = 2x - 10}}. Determine the mean and variance of the transformed scores {{y}}.",
      options: [
        "Mean = 118 and variance = 50",
        "Mean = 128 and variance = 100",
        "Mean = 118 and variance = 100",
        "Mean = 118 and variance = 90",
      ],
      answerIndex: 2,
      hints: [
        "For linear coding {{y = ax + b}}, the mean shifts and scales: {{μ_y = aμ_x + b}}.",
        "Adding or subtracting a constant {{b}} does NOT change spread, while multiplying by {{a}} scales standard deviation by {{|a|}} and variance by {{a^2}}.",
      ],
      strategy: "Distinguish standard deviation (scales by |a|) from variance (scales by a²), and ignore the additive shift b for both.",
      explanation:
        "Under {{y = 2x - 10}}, the new mean is {{μ_y = 2(64) - 10 = 118}}. The original variance is {{σ^2 = 5^2 = 25}}. Subtracting 10 leaves spread unchanged, while multiplying by 2 scales the standard deviation to {{2 * 5 = 10}} and the variance to {{2^2 * 25 = 100}}.",
    },
    {
      id: "exam-p1-sl-q09",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "5a-differentiation",
      guideRef: "limits-rules-tangents",
      commandTerm: "Find",
      question:
        "[Section A · Non-GDC] Find the exact gradient of the normal to the curve {{y = (3x + 2)e^(2x)}} at the point where {{x = 0}}, giving your answer as a simplified fraction.",
      answer: { type: "fraction", n: -1, d: 7, simplest: true },
      traps: [
        {
          spec: { type: "number", value: 7 },
          feedback: "7 is the gradient of the tangent at x = 0; take the negative reciprocal −1/m for the normal.",
        },
        {
          spec: { type: "fraction", n: -1, d: 5 },
          feedback: "Remember the chain rule on e^(2x): d/dx(e^(2x)) = 2e^(2x), giving 3 + 4 = 7 rather than 3 + 2 = 5.",
        },
      ],
      hints: [
        "Apply the product rule with {{u = 3x + 2}} and {{v = e^(2x)}}, remembering the chain rule gives {{v' = 2e^(2x)}}.",
        "Evaluate the tangent gradient {{m_T = y'(0)}}, then use {{m_N = -1/m_T}} for the perpendicular normal.",
      ],
      strategy: "Find the tangent gradient m_T first, then immediately invert and negate it for the normal gradient.",
      solution: [
        "Differentiate using the product and chain rules: {{y' = 3e^(2x) + (3x + 2)(2e^(2x)) = (6x + 7)e^(2x)}}.",
        "Evaluate at {{x = 0}}: {{m_T = (0 + 7)e^0 = 7}}.",
        "The normal is perpendicular to the tangent, so its gradient is {{m_N = -1/7}}.",
      ],
      commonError: "Giving the tangent gradient 7 instead of the normal gradient −1/7, or forgetting the factor of 2 from differentiating e^(2x).",
    },
    {
      id: "exam-p1-sl-q10",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "5a-differentiation",
      guideRef: "curve-sketching-optimization-kinematics",
      commandTerm: "Determine",
      question:
        "[Section A · Non-GDC] A particle moves along a straight line with velocity {{v(t) = 3t^2 - 12t + 9}} (in {{m/s}}) for {{t ≥ 0}}. Determine the interval of {{t}} during which the particle is moving in the negative direction and its speed is increasing.",
      options: [
        "{{2 < t < 3}}",
        "{{1 < t < 3}}",
        "{{0 <= t < 1}}",
        "{{1 < t < 2}}",
      ],
      answerIndex: 3,
      hints: [
        "Factorise {{v(t) = 3(t - 1)(t - 3)}} to find when the particle moves in the negative direction ({{v(t) < 0}}).",
        "Differentiate to get acceleration {{a(t) = 6t - 12}}. Speed increases precisely when {{v(t)}} and {{a(t)}} have the SAME sign!",
      ],
      strategy: "Never equate 'speed increasing' with a(t) > 0: check whether v(t) and a(t) share the same sign.",
      explanation:
        "Factorising gives {{v(t) = 3(t - 1)(t - 3)}}, so {{v(t) < 0}} on {{1 < t < 3}}. Differentiating gives {{a(t) = 6t - 12 = 6(t - 2)}}, so {{a(t) < 0}} for {{t < 2}}. Speed increases when velocity and acceleration have the same sign; since {{v < 0}}, we require {{a < 0}} as well, giving {{1 < t < 2}}.",
    },
    {
      id: "exam-p1-sl-q11",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "5b-integration-des-maclaurin",
      guideRef: "integration-areas-kinematics",
      commandTerm: "Evaluate",
      question:
        "[Section A · Non-GDC] Evaluate the exact definite integral {{∫_0^(pi/6) sin(3x) dx}}, giving your answer as a simplified fraction.",
      answer: { type: "fraction", n: 1, d: 3, simplest: true },
      traps: [
        {
          spec: { type: "fraction", n: -1, d: 3 },
          feedback: "Check your signs: sin(3x) ≥ 0 on [0, π/6], so the definite integral must be positive.",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "When reversing the chain rule on sin(3x), divide by 3 rather than multiplying by 3.",
        },
      ],
      hints: [
        "Recall that {{∫ sin(kx) dx = -(1/k)cos(kx) + C}}.",
        "Evaluate {{[-(1/3)cos(3x)]}} at {{x = pi/6}} (where {{3x = pi/2}}) and subtract its value at {{x = 0}} (where {{cos 0 = 1}}).",
      ],
      strategy: "Never assume the lower limit x = 0 gives zero — cos(0) = 1 contributes the entire answer here!",
      solution: [
        "Find an antiderivative: {{∫ sin(3x) dx = -(1/3)cos(3x) + C}}.",
        "Apply the limits from {{0}} to {{pi/6}}: {{[-(1/3)cos(3x)]_0^(pi/6) = -(1/3)cos(pi/2) - (-(1/3)cos 0)}}.",
        "Since {{cos(pi/2) = 0}} and {{cos 0 = 1}}, the integral equals {{0 + 1/3 = 1/3}}.",
      ],
      commonError: "Assuming the lower limit x = 0 evaluates to 0 because sin(0) = 0, forgetting that cos(0) = 1.",
    },

    // ======================= SECTION B (Extended Written) ====================
    {
      id: "exam-p1-sl-q12",
      kind: "written",
      difficulty: "core",
      level: "SL",
      topicId: "1a-number-algebra-core",
      guideRef: "binomial-counting-hl",
      commandTerm: "Find",
      marks: 7,
      question:
        "[Section B · Non-GDC · 7 marks] Consider the binomial expansion of {{(2x - a/x^2)^6}}, where {{a ∈ ℝ}} and {{a > 0}}.\n(a) Write down the general term {{T_(r+1)}} in simplified index form in terms of {{r}}, {{a}}, and {{x}}. [2 marks]\n(b) Find the term independent of {{x}} in terms of {{a}}. [3 marks]\n(c) Given that the term independent of {{x}} is {{2160}}, find the exact value of {{a}}. [2 marks]",
      hints: [
        "In {{(A + B)^6}}, the general term is {{6Cr * A^(6-r) * B^r}} with {{A = 2x}} and {{B = -a * x^(-2)}}.",
        "Collect all powers of {{x}} into {{x^(6 - 3r)}} and set the exponent {{6 - 3r = 0}} to locate the constant term.",
        "Evaluate {{6C2 = 15}} and {{2^4 = 16}}, then solve the resulting quadratic in {{a}} keeping only {{a > 0}}.",
      ],
      strategy: "Write 1/x² as x⁻² immediately so exponent laws give 6 − r − 2r = 6 − 3r with zero sign slips.",
      modelAnswer:
        "(a) Using the binomial expansion formula with n = 6, the general term is T_{r+1} = 6Cr (2x)^(6 - r) (-a x^(-2))^r = 6Cr 2^(6 - r) (-a)^r x^(6 - 3r).\n(b) For the term independent of x, set the power of x equal to zero: 6 - 3r = 0, giving r = 2. Substituting r = 2 gives 6C2 = 15, 2^4 = 16, and (-a)^2 = a^2. Hence the constant term is 15 × 16 × a^2 = 240a^2.\n(c) Setting 240a^2 = 2160 gives a^2 = 9, so a = ±3. Since a > 0, we reject -3 and conclude a = 3.",
      markScheme: [
        {
          point: "M1: Writes correct binomial general term 6Cr (2x)^(6−r) (−a/x²)^r",
          keywords: ["6cr", "6 - r", "(-a"],
        },
        {
          point: "A1: Combines powers of x correctly to obtain x^(6−3r)",
          keywords: ["6 - 3r", "6-3r"],
        },
        {
          point: "M1: Sets 6 − 3r = 0 and solves to obtain r = 2",
          keywords: ["r = 2", "r=2"],
        },
        {
          point: "A1: Evaluates 6C2 = 15 and 2⁴ = 16 accurately",
          keywords: ["15", "16"],
        },
        {
          point: "A1: Simplifies the constant term to 240a²",
          keywords: ["240a^2", "240 a^2", "240"],
        },
        {
          point: "M1: Equates 240a² = 2160 and solves to get a² = 9",
          keywords: ["a^2 = 9", "a^2=9"],
        },
        {
          point: "A1: Rejects −3 using a > 0 to give the unique answer a = 3",
          keywords: ["a = 3", "a=3"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Attempts binomial expansion terms or identifies powers of x with algebraic or sign errors.",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Correctly finds r = 2 and computes the constant term 240a² (or follows through accurately to part (c)).",
        },
        {
          band: "High (6–7 marks)",
          marks: [6, 7],
          descriptor: "Fully rigorous general term, exact constant term 240a², and clean rejection of a = −3 to conclude a = 3.",
        },
      ],
      commonError: "Dropping the negative sign on (−a)^r, or failing to state why a = −3 is rejected.",
    },
    {
      id: "exam-p1-sl-q13",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      topicId: "3a-geometry-trig",
      guideRef: "trig-identities-graphs-equations",
      commandTerm: "Solve",
      marks: 8,
      question:
        "[Section B · Non-GDC · 8 marks]\n(a) Show that {{cos 2x + 3 sin x - 2 = -2 sin^2 x + 3 sin x - 1}}. [2 marks]\n(b) Hence solve the equation {{cos 2x + 3 sin x = 2}} for {{0 ≤ x ≤ 2pi}}, giving all solutions in exact radians. [6 marks]",
      hints: [
        "For (a), start strictly from the LHS and choose the double-angle identity for {{cos 2x}} expressed purely in terms of {{sin x}}.",
        "For (b), rearrange the quadratic in {{sin x}} to {{2 sin^2 x - 3 sin x + 1 = 0}} and factorise.",
        "Solve BOTH linear equations ({{sin x = 1/2}} and {{sin x = 1}}) across the entire interval {{0 ≤ x ≤ 2pi}}.",
      ],
      strategy: "When an equation mixes cos 2x and sin x, always replace cos 2x with 1 − 2 sin²x so the equation becomes a quadratic in sin x.",
      modelAnswer:
        "(a) Starting from the left-hand side and substituting the double-angle identity cos 2x = 1 - 2sin^2 x gives LHS = (1 - 2sin^2 x) + 3sin x - 2 = -2sin^2 x + 3sin x - 1 = RHS.\n(b) Using part (a), the equation cos 2x + 3sin x - 2 = 0 becomes -2sin^2 x + 3sin x - 1 = 0, or equivalently 2sin^2 x - 3sin x + 1 = 0. Factorising gives (2sin x - 1)(sin x - 1) = 0. Therefore sin x = 1/2 or sin x = 1. On the domain 0 ≤ x ≤ 2π, sin x = 1/2 yields x = π/6 and x = 5π/6 (Quadrants I and II), while sin x = 1 yields x = π/2. Thus the complete set of exact solutions is x = π/6, π/2, 5π/6.",
      markScheme: [
        {
          point: "M1: Substitutes cos 2x = 1 − 2 sin²x into the LHS (working forward only)",
          keywords: ["1 - 2sin^2", "1 - 2 sin^2"],
        },
        {
          point: "A1: Simplifies cleanly to −2 sin²x + 3 sin x − 1 matching RHS",
          keywords: ["rhs", "left-hand side"],
        },
        {
          point: "M1: Sets quadratic in sin x equal to zero: 2 sin²x − 3 sin x + 1 = 0",
          keywords: ["2sin^2 x - 3sin x + 1", "2 sin^2 x - 3 sin x + 1"],
        },
        {
          point: "M1: Factorises correctly as (2 sin x − 1)(sin x − 1) = 0",
          keywords: ["(2sin x - 1)(sin x - 1)", "(2 sin x - 1)(sin x - 1)"],
        },
        {
          point: "A1: Obtains both sin x = 1/2 and sin x = 1",
          keywords: ["sin x = 1/2", "sin x = 1"],
        },
        {
          point: "A1: Finds exact Quadrant I root x = π/6",
          keywords: ["π/6", "pi/6"],
        },
        {
          point: "A1: Finds exact Quadrant II root x = 5π/6",
          keywords: ["5π/6", "5pi/6"],
        },
        {
          point: "A1: Finds exact root x = π/2 with no extraneous values in [0, 2π]",
          keywords: ["π/2", "pi/2"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Applies the correct cos 2x identity in part (a) or sets up the quadratic equation in sin x.",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Completes the 'Show that' proof, factorises the quadratic correctly, and identifies at least one exact radian root.",
        },
        {
          band: "High (6–8 marks)",
          marks: [6, 8],
          descriptor: "Rigorous forward proof in (a) followed by all three exact radian solutions π/6, π/2, 5π/6 with zero extra roots.",
        },
      ],
      commonError: "Missing the Quadrant II solution 5π/6 for sin x = 1/2, or giving answers in degrees instead of radians.",
    },
    {
      id: "exam-p1-sl-q14",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      topicId: "5a-differentiation",
      guideRef: "curve-sketching-optimization-kinematics",
      commandTerm: "Find",
      marks: 9,
      question:
        "[Section B · Non-GDC · 9 marks] Let {{f(x) = x^3 - 3x^2 - 9x + 5}} for {{x ∈ ℝ}}.\n(a) Find {{f'(x)}} and determine the coordinates of both stationary points. [4 marks]\n(b) Find {{f''(x)}} and use the second-derivative test to classify each stationary point as a local maximum or local minimum. [3 marks]\n(c) Find the coordinates of the point of inflection and state the interval on which the graph of {{f}} is concave up. [2 marks]",
      hints: [
        "Differentiate term by term to obtain {{f'(x) = 3x^2 - 6x - 9}}, factor out {{3}}, and solve {{f'(x) = 0}}.",
        "Substitute each stationary {{x}}-value back into the ORIGINAL {{f(x)}} to get the full {{(x, y)}} coordinates.",
        "For the point of inflection, solve {{f''(x) = 0}} AND confirm that {{f''(x)}} changes sign across that point.",
      ],
      strategy: "Remember: f' locates stationary points, f'' classifies them (f'' < 0 max, f'' > 0 min) and locates inflections where f'' changes sign.",
      modelAnswer:
        "(a) Differentiating gives f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1). Setting f'(x) = 0 gives x = -1 and x = 3. Evaluating f at each point: f(-1) = -1 - 3 + 9 + 5 = 10 and f(3) = 27 - 27 - 27 + 5 = -22. Thus the stationary points are (-1, 10) and (3, -22).\n(b) Differentiating again gives f''(x) = 6x - 6. At x = -1, f''(-1) = -12 < 0, so (-1, 10) is a local maximum. At x = 3, f''(3) = 12 > 0, so (3, -22) is a local minimum.\n(c) Setting f''(x) = 6x - 6 = 0 gives x = 1. Since f''(x) changes sign from negative (x < 1) to positive (x > 1), there is a point of inflection at x = 1 with f(1) = 1 - 3 - 9 + 5 = -6, i.e. (1, -6). The graph is concave up where f''(x) > 0, which is x > 1.",
      markScheme: [
        {
          point: "A1: Differentiates accurately to obtain f'(x) = 3x² − 6x − 9",
          keywords: ["3x^2 - 6x - 9", "3x^2-6x-9"],
        },
        {
          point: "M1: Sets f'(x) = 0 and factorises to get x = −1 and x = 3",
          keywords: ["x = -1", "x = 3"],
        },
        {
          point: "A1: Finds coordinates of first stationary point (−1, 10)",
          keywords: ["(-1, 10)", "(-1,10)"],
        },
        {
          point: "A1: Finds coordinates of second stationary point (3, −22)",
          keywords: ["(3, -22)", "(3,-22)"],
        },
        {
          point: "A1: Finds second derivative f''(x) = 6x − 6",
          keywords: ["6x - 6", "6x-6"],
        },
        {
          point: "A1: Evaluates f''(−1) = −12 < 0 to classify (−1, 10) as a local maximum",
          keywords: ["-12", "local maximum"],
        },
        {
          point: "A1: Evaluates f''(3) = 12 > 0 to classify (3, −22) as a local minimum",
          keywords: ["12", "local minimum"],
        },
        {
          point: "A1: Finds point of inflection (1, −6) with justification that f'' changes sign",
          keywords: ["(1, -6)", "changes sign"],
        },
        {
          point: "A1: States concave-up interval x > 1",
          keywords: ["x > 1", "x>1"],
        },
      ],
      markbands: [
        {
          band: "Low (0–3 marks)",
          marks: [0, 3],
          descriptor: "Finds f'(x) and attempts to solve f'(x) = 0 for stationary x-coordinates.",
        },
        {
          band: "Mid (4–6 marks)",
          marks: [4, 6],
          descriptor: "Finds both stationary coordinates and f''(x), classifying at least one extremum accurately.",
        },
        {
          band: "High (7–9 marks)",
          marks: [7, 9],
          descriptor: "Complete, accurate coordinates and classification of both extrema, justified inflection point (1, −6), and concave-up interval x > 1.",
        },
      ],
      commonError: "Forgetting to find the y-coordinates when 'coordinates' are asked, or omitting the sign-change justification for the inflection point.",
    },
    {
      id: "exam-p1-sl-q15",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      topicId: "5b-integration-des-maclaurin",
      guideRef: "integration-areas-kinematics",
      commandTerm: "Find",
      marks: 8,
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" role="img" aria-label="Parabola y = 4x minus x squared and line y = x intersecting at the origin O and point P with shaded enclosed region"><rect width="300" height="220" fill="#f8fafc" rx="10"/><line x1="35" y1="185" x2="280" y2="185" stroke="#64748b" stroke-width="1.5"/><line x1="55" y1="200" x2="55" y2="18" stroke="#64748b" stroke-width="1.5"/><path d="M 55 185 Q 155 -75 255 185" fill="none" stroke="#4338ca" stroke-width="2.2"/><path d="M 55 185 Q 130 22.5 205 65 L 55 185 Z" fill="#c7d2fe" fill-opacity="0.65"/><line x1="40" y1="197" x2="250" y2="29" stroke="#0f766e" stroke-width="2"/><circle cx="55" cy="185" r="3.5" fill="#1e293b"/><circle cx="205" cy="65" r="4" fill="#dc2626"/><text x="41" y="198" font-family="sans-serif" font-size="12" fill="#1e293b">O</text><text x="212" y="64" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">P</text><text x="120" y="34" font-family="sans-serif" font-size="12" fill="#4338ca">y = 4x − x²</text><text x="218" y="32" font-family="sans-serif" font-size="12" fill="#0f766e">y = x</text><text x="272" y="179" font-family="sans-serif" font-size="12" fill="#64748b">x</text><text x="62" y="28" font-family="sans-serif" font-size="12" fill="#64748b">y</text></svg>',
      question:
        "[Section B · Non-GDC · 8 marks] The diagram shows the parabola {{y = 4x - x^2}} and the line {{y = x}} intersecting at the origin {{O}} and at point {{P}}.\n(a) Find the coordinates of the intersection point {{P}}. [2 marks]\n(b) Find the exact area of the shaded region enclosed between the parabola and the line. [4 marks]\n(c) A vertical line {{x = k}} ({{0 < k < 3}}) divides the shaded region into two equal areas. Using the symmetry of the vertical height function {{h(x) = 3x - x^2}} (or direct integration), determine the exact value of {{k}}. [2 marks]",
      hints: [
        "Set {{4x - x^2 = x}} and factorise to find the non-zero intersection {{x}}-coordinate, then find {{y}}.",
        "On {{[0, 3]}}, the parabola lies above the line, so integrate {{(4x - x^2) - x = 3x - x^2}} from {{0}} to {{3}}.",
        "Notice {{h(x) = 3x - x^2 = x(3 - x)}} is symmetric about its vertex {{x = 3/2}} — verify that {{∫_0^(3/2) (3x - x^2) dx}} equals half the total area!",
      ],
      strategy: "Always check which curve is 'upper' and which is 'lower' on the interval before integrating (upper − lower).",
      modelAnswer:
        "(a) Equating the two curves gives 4x - x^2 = x, so 3x - x^2 = 0, i.e. x(3 - x) = 0. Thus x = 0 (at O) or x = 3. Substituting x = 3 into y = x gives P = (3, 3).\n(b) On [0, 3], the parabola lies above the line, so the enclosed area is A = ∫_0^3 ((4x - x^2) - x) dx = ∫_0^3 (3x - x^2) dx = [(3/2)x^2 - (1/3)x^3]_0^3 = (27/2 - 9) - 0 = 9/2 square units.\n(c) The vertical slice height h(x) = 3x - x^2 = x(3 - x) is symmetric about the midpoint x = 3/2 of [0, 3]. Therefore the vertical line x = 3/2 bisects the area (check: ∫_0^(3/2) (3x - x^2) dx = 27/8 - 9/8 = 18/8 = 9/4, which is exactly half of 9/2). Hence k = 3/2.",
      markScheme: [
        {
          point: "M1: Equates 4x − x² = x and solves x(3 − x) = 0 to get x = 3",
          keywords: ["x(3 - x)", "x = 3"],
        },
        {
          point: "A1: Gives full coordinates of P as (3, 3)",
          keywords: ["(3, 3)", "(3,3)"],
        },
        {
          point: "M1: Sets up definite integral ∫₀³ ((4x − x²) − x) dx = ∫₀³ (3x − x²) dx",
          keywords: ["3x - x^2", "3x-x^2"],
        },
        {
          point: "A1: Finds accurate antiderivative (3/2)x² − (1/3)x³",
          keywords: ["(3/2)x^2", "(1/3)x^3"],
        },
        {
          point: "M1: Substitutes limits x = 3 and x = 0 cleanly (27/2 − 9)",
          keywords: ["27/2", "27/2 - 9"],
        },
        {
          point: "A1: Obtains exact enclosed area 9/2 (or 4.5)",
          keywords: ["9/2", "4.5"],
        },
        {
          point: "M1: Identifies symmetry about the midpoint x = 3/2 (or sets integral from 0 to k equal to 9/4)",
          keywords: ["midpoint", "9/4"],
        },
        {
          point: "A1: Concludes exact value k = 3/2",
          keywords: ["k = 3/2", "k=3/2", "1.5"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Finds the intersection P(3, 3) or sets up an area integral with minor sign or limit errors.",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Sets up and integrates ∫₀³ (3x − x²) dx accurately to obtain the exact area 9/2.",
        },
        {
          band: "High (6–8 marks)",
          marks: [6, 8],
          descriptor: "Exact coordinates P(3, 3), exact area 9/2, and clean symmetry/integral justification yielding k = 3/2.",
        },
      ],
      commonError: "Integrating (4x − x²) alone without subtracting the line y = x, or forgetting the y-coordinate of P.",
    },
  ],
};
