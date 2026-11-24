import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p3-hl",
  title: "Mock Paper 3 (HL Only · 1h · 50m Inquiry)",
  level: "HL",
  calculator: true,
  minutes: 60,
  paperType: "Paper 3 (HL Only · 1h · 50m Inquiry)",
  questions: [
    // =========================================================================
    // INVESTIGATION 1 (Q01–Q08): Curve Family f_n(x) = x^n e^(-x), Gamma-Type
    // Integrals, Continuous Density Family & Forced ODE Characterisation
    // =========================================================================
    {
      id: "exam-p3-hl-q01",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      topicId: "5a-differentiation",
      guideRef: "curve-sketching-optimization-kinematics",
      commandTerm: "Find",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 185" role="img" aria-label="Family of curves f_n(x) = x^n e^(-x) for n = 1, 2, 3 showing peaks shifting rightward as n increases"><rect width="300" height="185" fill="#f8fafc" rx="10"/><line x1="30" y1="155" x2="280" y2="155" stroke="#64748b" stroke-width="1.5"/><line x1="45" y1="170" x2="45" y2="18" stroke="#64748b" stroke-width="1.5"/><path d="M 45 155 C 62 98, 78 96, 110 128 C 145 148, 210 154, 270 155" fill="none" stroke="#0f766e" stroke-width="2"/><path d="M 45 155 C 72 152, 92 78, 120 76 C 155 78, 195 142, 270 154" fill="none" stroke="#4338ca" stroke-width="2.3"/><path d="M 45 155 C 82 155, 118 118, 158 34 C 192 50, 226 130, 275 151" fill="none" stroke="#dc2626" stroke-width="2"/><text x="72" y="92" font-family="sans-serif" font-size="11" fill="#0f766e">n = 1</text><text x="115" y="68" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#4338ca">n = 2</text><text x="166" y="34" font-family="sans-serif" font-size="11" fill="#dc2626">n = 3</text><text x="272" y="149" font-family="sans-serif" font-size="12" fill="#64748b">x</text><text x="52" y="28" font-family="sans-serif" font-size="12" fill="#64748b">y</text></svg>',
      question:
        "[Investigation 1 · Stage 1: Explore] Consider the curve family {{f_n(x) = x^n e^(-x)}} for {{x ≥ 0}} and integers {{n ≥ 1}}. For the case {{n = 2}}, find the exact {{x}}-coordinate of the local maximum of {{y = f_2(x)}} for {{x > 0}}.",
      answer: { type: "number", value: 2 },
      traps: [
        {
          spec: { type: "number", value: 0 },
          feedback: "x = 0 is a local minimum on x ≥ 0 (where f₂(0) = 0); the question asks for the local maximum for x > 0.",
        },
        {
          spec: { type: "number", value: 0.541, tolerance: 0.01 },
          feedback: "0.541 ≈ 4e⁻² is the maximum y-value f₂(2) — the question asks for the x-coordinate!",
        },
      ],
      hints: [
        "Differentiate {{f_2(x) = x^2 e^(-x)}} using the product rule and factor out {{x e^(-x)}}.",
        "Since {{e^(-x) > 0}} and {{x > 0}}, solve the remaining linear factor equal to zero.",
      ],
      strategy: "In a Paper 3 investigation, always keep expressions in exact factored form so the general pattern in n jumps off the page.",
      solution: [
        "Differentiate {{f_2(x) = x^2 e^(-x)}}: {{f_2'(x) = (2x - x^2)e^(-x) = x(2 - x)e^(-x)}}.",
        "For {{x > 0}}, {{f_2'(x) = 0}} gives {{x = 2}}.",
        "Since {{f_2'(x) > 0}} on {{(0, 2)}} and {{f_2'(x) < 0}} on {{(2, ∞)}}, {{x = 2}} is the unique local maximum.",
      ],
      commonError: "Reporting the y-coordinate 4e⁻² instead of the x-coordinate 2.",
    },
    {
      id: "exam-p3-hl-q02",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "5a-differentiation",
      guideRef: "curve-sketching-optimization-kinematics",
      commandTerm: "Calculate",
      question:
        "[Investigation 1 · Stage 1: Explore] For the member {{f_3(x) = x^3 e^(-x)}} ({{x > 0}}), find the two positive {{x}}-coordinates of the points of inflection of {{y = f_3(x)}}, giving your answers to **3 significant figures** separated by a comma.",
      answer: { type: "list", values: [1.27, 4.73], ordered: false, tolerance: 0.02, display: "1.27, 4.73" },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback: "x = 3 is the local maximum of f₃(x) (where f₃'(x) = 0), not a point of inflection (where f₃''(x) = 0).",
        },
      ],
      hints: [
        "Differentiate twice: {{f_3'(x) = (3x^2 - x^3)e^(-x)}} and {{f_3''(x) = x(x^2 - 6x + 6)e^(-x)}}.",
        "Solve {{x^2 - 6x + 6 = 0}} (or inspect `Analyze Graph → Inflection` on your TI-Nspire CX) and round both positive roots to 3 s.f.",
      ],
      strategy: "Notice how both inflection points lie symmetrically on either side of the peak: 3 ± √3!",
      solution: [
        "First derivative: {{f_3'(x) = (3x^2 - x^3)e^(-x)}}.",
        "Second derivative: {{f_3''(x) = (6x - 3x^2 - 3x^2 + x^3)e^(-x) = x(x^2 - 6x + 6)e^(-x)}}.",
        "For {{x > 0}}, {{f_3''(x) = 0}} gives {{x = (6 ± sqrt(36 - 24))/2 = 3 ± sqrt(3)}} (sign changes at both simple roots).",
        "TI-Nspire CX decimal values: {{3 - sqrt(3) ≈ 1.2680 ≈ 1.27}} and {{3 + sqrt(3) ≈ 4.7321 ≈ 4.73}} (3 s.f.).",
      ],
      commonError: "Dropping the product-rule cross term when differentiating (3x² − x³)e^(−x) a second time.",
    },
    {
      id: "exam-p3-hl-q03",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "5b-integration-des-maclaurin",
      guideRef: "advanced-integration-volumes-hl",
      commandTerm: "Calculate",
      question:
        "[Investigation 1 · Stage 1: Explore] To explore the area under {{y = f_n(x) = x^n e^(-x)}}, consider the finite integral {{J_n(b) = ∫_0^b x^n e^(-x) dx}}. Using your TI-Nspire CX GDC (or repeated integration by parts), calculate {{J_2(4) = ∫_0^4 x^2 e^(-x) dx}} to **3 significant figures**.",
      answer: { type: "number", value: 1.52, tolerance: 0.02 },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "2 is the limiting improper integral as b → ∞; here the upper limit is finite (b = 4), leaving a tail of 26e⁻⁴ ≈ 0.476.",
        },
        {
          spec: { type: "number", value: 0.476, tolerance: 0.01 },
          feedback: "0.476 ≈ 26e⁻⁴ is the tail area from 4 to ∞ — subtract it from 2 to get J₂(4) ≈ 1.52!",
        },
      ],
      hints: [
        "On TI-Nspire CX Calculator: `Menu → 4 Calculus → 2 Numerical Integral` and enter `nInt(x^2 * e^(-x), x, 0, 4)`.",
        "Analytic cross-check: repeated integration by parts gives {{[-(x^2 + 2x + 2)e^(-x)]_0^4 = 2 - 26e^(-4)}}.",
      ],
      strategy: "Use Paper 3's GDC access to verify analytic integration-by-parts expressions in seconds!",
      solution: [
        "TI-Nspire CX: `nInt(x^2 * e^(-x), x, 0, 4)` evaluates to {{1.523793...}}.",
        "Exact analytic check: {{[-(x^2 + 2x + 2)e^(-x)]_0^4 = (-26e^(-4)) - (-2) = 2 - 26e^(-4) ≈ 1.5238}}.",
        "Rounded to 3 s.f.: {{1.52}}.",
      ],
      commonError: "Forgetting the minus sign from integrating e^(−x) or assuming the lower limit x = 0 gives zero (e⁰ = 1 contributes +2!).",
    },
    {
      id: "exam-p3-hl-q04",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "5b-integration-des-maclaurin",
      guideRef: "maclaurin-series-hl",
      commandTerm: "Deduce",
      question:
        "[Investigation 1 · Stage 2: Conjecture] Consider the Maclaurin series expansion of {{f_n(x) = x^n e^(-x)}} about {{x = 0}} for any integer {{n ≥ 1}}. Deduce the exact coefficient of {{x^(n+3)}} in the Maclaurin series of {{f_n(x)}}.",
      options: [
        "{{−1/6}} (independent of n)",
        "{{1/6}} (independent of n)",
        "{{−n/6}} (linear in n)",
        "{{−1/(n+3)!}} (decaying in n)",
      ],
      answerIndex: 0,
      hints: [
        "Write the standard Maclaurin series for {{e^(-x)}} by substituting {{-x}} into {{e^u = 1 + u + u^2/2! + u^3/3! + ...}}.",
        "Multiply the entire series by {{x^n}} and read off the coefficient multiplying {{x^(n+3)}}.",
      ],
      strategy: "Always multiply standard Maclaurin expansions by xⁿ rather than computing (n + 3) derivatives directly!",
      explanation:
        "Since {{e^(-x) = 1 - x + x^2/2! - x^3/3! + ...}}, multiplying by {{x^n}} gives {{f_n(x) = x^n - x^(n+1) + (1/2)x^(n+2) - (1/6)x^(n+3) + ...}}. The coefficient of {{x^(n+3)}} is therefore {{-1/3! = -1/6}}, completely independent of {{n}}.",
    },
    {
      id: "exam-p3-hl-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "1b-complex-proofs-systems",
      guideRef: "induction-contradiction",
      commandTerm: "Prove",
      marks: 7,
      question:
        "[Investigation 1 · Stage 3: Prove · 7 marks] Define the improper integral {{I_n = ∫_0^∞ x^n e^(-x) dx = lim_(b -> ∞) ∫_0^b x^n e^(-x) dx}} for every integer {{n ≥ 0}}. You may assume that {{lim_(b -> ∞) b^k e^(-b) = 0}} for every integer {{k ≥ 0}}.\n(a) Use integration by parts to show that {{I_n = n I_(n-1)}} for all integers {{n ≥ 1}}. [3 marks]\n(b) Hence prove by mathematical induction that {{I_n = n!}} for all integers {{n ≥ 0}}. [4 marks]",
      hints: [
        "For (a), choose {{u = x^n}} ({{du = n x^(n-1) dx}}) and {{dv = e^(-x) dx}} ({{v = -e^(-x)}}), evaluate the boundary term on {{[0, b]}}, and take {{b -> ∞}}.",
        "For (b), start the base case at {{n = 0}} (compute {{I_0 = ∫_0^∞ e^(-x) dx = 1 = 0!}}), assume {{I_k = k!}}, and apply part (a) with {{n = k + 1}}.",
        "Don't forget the formal IB concluding sentence for mathematical induction!",
      ],
      strategy: "In a Paper 3 'Hence prove by induction', part (a)'s recurrence I_n = n I_{n−1} does ALL the heavy lifting in the inductive step!",
      modelAnswer:
        "(a) Apply integration by parts to ∫_0^b x^n e^(-x) dx with u = x^n (du = n x^(n-1) dx) and dv = e^(-x) dx (v = -e^(-x)):\n∫_0^b x^n e^(-x) dx = [-x^n e^(-x)]_0^b + n ∫_0^b x^(n-1) e^(-x) dx = (-b^n e^(-b) + 0) + n ∫_0^b x^(n-1) e^(-x) dx (since n ≥ 1 gives 0^n = 0).\nTaking the limit as b -> ∞ and using lim_(b -> ∞) b^n e^(-b) = 0 yields I_n = 0 + n I_(n-1) = n I_(n-1).\n(b) Let P(n) be the statement I_n = n! for integers n ≥ 0.\nBase case (n = 0): I_0 = lim_(b -> ∞) ∫_0^b e^(-x) dx = lim_(b -> ∞) [-e^(-x)]_0^b = lim_(b -> ∞) (1 - e^(-b)) = 1 = 0!. Thus P(0) is true.\nInductive hypothesis: Assume P(k) is true for some integer k ≥ 0, i.e. I_k = k!.\nInductive step (n = k + 1): Using part (a) with n = k + 1 ≥ 1 gives I_(k+1) = (k + 1) I_k = (k + 1) k! = (k + 1)! (by the inductive hypothesis).\nConclusion: Since P(0) is true and truth of P(k) implies truth of P(k + 1), by the principle of mathematical induction I_n = n! for all integers n ≥ 0.",
      markScheme: [
        {
          point: "M1: Chooses u = xⁿ and dv = e^(−x) dx correctly for integration by parts",
          keywords: ["u = x^n", "v = -e^(-x)"],
        },
        {
          point: "A1: Obtains [−xⁿ e^(−x)]₀ᵇ + n ∫₀ᵇ x^(n−1) e^(−x) dx cleanly",
          keywords: ["[-x^n e^(-x)]", "+ n ∫"],
        },
        {
          point: "A1: Takes limit b → ∞ using bⁿ e^(−b) → 0 and 0ⁿ = 0 to conclude I_n = n I_(n−1)",
          keywords: ["-b^n e^(-b)", "0 + n"],
        },
        {
          point: "A1: Proves base case n = 0 explicitly: I₀ = lim (1 − e^(−b)) = 1 = 0!",
          keywords: ["0!", "1 - e^(-b)"],
        },
        {
          point: "M1: States inductive hypothesis clearly ('assume I_k = k! for some integer k ≥ 0')",
          keywords: ["assume", "i_k = k!"],
        },
        {
          point: "A1: Applies recurrence in inductive step: I_(k+1) = (k + 1)I_k = (k + 1)k! = (k + 1)!",
          keywords: ["(k + 1) k!", "(k + 1)!"],
        },
        {
          point: "R1: Formal IB induction concluding statement linking base case and inductive step",
          keywords: ["principle of mathematical induction", "implies"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Sets up integration by parts for I_n or evaluates the base case I₀ = 1.",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Completes the recurrence derivation in (a) and performs the inductive step with minor formal omissions.",
        },
        {
          band: "High (6–7 marks)",
          marks: [6, 7],
          descriptor: "Rigorous limit-based integration by parts in (a) and complete base-0 induction proof with formal conclusion in (b).",
        },
      ],
      commonError: "Starting the induction at n = 1 instead of n = 0 (missing I₀ = 0! = 1), or dropping the limit notation on the improper integral.",
    },
    {
      id: "exam-p3-hl-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "4-stats-probability",
      guideRef: "continuous-rvs-pdf-cdf-hl",
      commandTerm: "Show that",
      marks: 8,
      question:
        "[Investigation 1 · Stage 4: Extend · 8 marks] Using the integral identity established in the previous part for {{I_n = ∫_0^∞ x^n e^(-x) dx}}, define for each integer {{n ≥ 0}} a continuous random variable {{X_n}} on {{[0, ∞)}} with probability density function\n{{p_n(x) = (x^n e^(-x)) / n!}}, for {{x ≥ 0}} (and {{0}} for {{x < 0}}).\n(a) Verify briefly that {{p_n(x)}} is a valid probability density function on {{[0, ∞)}}. [1 mark]\n(b) Show that {{E(X_n) = n + 1}} and {{Var(X_n) = n + 1}}. [5 marks]\n(c) For the case {{n = 1}}, find the exact probability {{P(X_1 > 2)}} in terms of {{e}}. [2 marks]",
      hints: [
        "For (a), check BOTH requirements of a valid PDF: {{p_n(x) ≥ 0}} on {{[0, ∞)}} AND {{∫_0^∞ p_n(x) dx = I_n / n! = 1}}.",
        "For (b), rewrite {{E(X_n) = I_(n+1) / n!}} and {{E(X_n^2) = I_(n+2) / n!}}, simplify the factorial ratios, and compute {{Var(X_n) = E(X_n^2) - [E(X_n)]^2}}.",
        "For (c), {{p_1(x) = x e^(-x)}}; integrate by parts from {{2}} to {{∞}}.",
      ],
      strategy: "Converting moments into ratios of I_{n+k}/n! collapses messy integrals into 1-line factorial cancellations!",
      modelAnswer:
        "(a) For all x ≥ 0, x^n ≥ 0, e^(-x) > 0, and n! > 0, so p_n(x) ≥ 0. Moreover, ∫_0^∞ p_n(x) dx = (1/n!) ∫_0^∞ x^n e^(-x) dx = I_n / n! = n! / n! = 1. Hence p_n is a valid PDF.\n(b) Compute the first moment: E(X_n) = ∫_0^∞ x (x^n e^(-x)/n!) dx = I_(n+1) / n! = (n + 1)! / n! = n + 1.\nCompute the second moment: E(X_n^2) = ∫_0^∞ x^2 (x^n e^(-x)/n!) dx = I_(n+2) / n! = (n + 2)! / n! = (n + 2)(n + 1).\nTherefore Var(X_n) = E(X_n^2) - [E(X_n)]^2 = (n + 2)(n + 1) - (n + 1)^2 = (n + 1)[(n + 2) - (n + 1)] = n + 1.\n(c) For n = 1, p_1(x) = x e^(-x). Integrating by parts gives P(X_1 > 2) = ∫_2^∞ x e^(-x) dx = [-(x + 1)e^(-x)]_2^∞ = 0 - (-(2 + 1)e^(-2)) = 3e^(-2).",
      markScheme: [
        {
          point: "R1: Confirms both non-negativity p_n(x) ≥ 0 on [0, ∞) and unit total area I_n/n! = 1",
          keywords: ["p_n(x) ≥ 0", "n! / n! = 1"],
        },
        {
          point: "M1: Expresses E(X_n) = ∫₀^∞ x p_n(x) dx = I_(n+1) / n!",
          keywords: ["i_(n+1) / n!", "(n + 1)! / n!"],
        },
        {
          point: "A1: Simplifies factorial ratio to show E(X_n) = n + 1",
          keywords: ["(n + 1)! / n! = n + 1", "e(x_n) = n + 1"],
        },
        {
          point: "M1: Expresses E(X_n²) = I_(n+2) / n! = (n + 2)! / n!",
          keywords: ["i_(n+2)", "(n + 2)!"],
        },
        {
          point: "A1: Simplifies E(X_n²) = (n + 2)(n + 1)",
          keywords: ["(n + 2)(n + 1)"],
        },
        {
          point: "A1: Factors Var(X_n) = (n + 2)(n + 1) − (n + 1)² = (n + 1)(1) = n + 1 cleanly",
          keywords: ["(n + 1)[(n + 2) - (n + 1)]", "- (n + 1)^2"],
        },
        {
          point: "M1: Sets up P(X₁ > 2) = ∫₂^∞ x e^(−x) dx and finds antiderivative −(x + 1)e^(−x)",
          keywords: ["-(x + 1)e^(-x)", "p_1(x) = x e^(-x)"],
        },
        {
          point: "A1: Evaluates limits accurately to obtain exact probability 3e⁻²",
          keywords: ["3e^(-2)", "3/e^2"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Verifies the PDF condition or sets up the expectation integral E(X_n).",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Derives E(X_n) = n + 1 and E(X_n²) = (n + 2)(n + 1) cleanly via factorial simplification.",
        },
        {
          band: "High (6–8 marks)",
          marks: [6, 8],
          descriptor: "Complete PDF verification, rigorous variance derivation Var(X_n) = n + 1, and exact tail probability 3e⁻².",
        },
      ],
      commonError: "Forgetting to verify p_n(x) ≥ 0 alongside ∫ p_n = 1 in (a), or evaluating P(X₁ < 2) = 1 − 3e⁻² instead of P(X₁ > 2) in (c).",
    },
    {
      id: "exam-p3-hl-q07",
      kind: "mcq",
      difficulty: "challenge",
      level: "HL",
      topicId: "5a-differentiation",
      guideRef: "first-principles-lhopital-hl",
      commandTerm: "Evaluate",
      question:
        "[Investigation 1 · Stage 4: Extend] To compare the local behaviour of {{f_2(x) = x^2 e^(-x)}} near the origin with a trigonometric reference curve, evaluate the exact limit {{L = lim_(x -> 0^+) (x^2 e^(-x)) / (1 - cos x)}}.",
      options: ["{{1/2}}", "2", "0", "1"],
      answerIndex: 1,
      hints: [
        "Verify the {{0/0}} indeterminate form at {{x = 0}} and apply L'Hôpital's rule twice — OR use Maclaurin expansions!",
        "Maclaurin shortcut: {{x^2 e^(-x) = x^2 - x^3 + ...}} and {{1 - cos x = x^2/2 - x^4/24 + ...}}. Divide both by {{x^2}}!",
      ],
      strategy: "For 0/0 limits near x = 0, replacing functions with their leading Maclaurin terms is faster and less error-prone than repeated L'Hôpital!",
      explanation:
        "Using Maclaurin expansions near {{x = 0}}: {{x^2 e^(-x) = x^2(1 - x + ...) = x^2 - x^3 + ...}} and {{1 - cos x = x^2/2 - x^4/24 + ...}}. Dividing numerator and denominator by {{x^2}} gives {{lim_(x -> 0^+) (1 - x + ...)/(1/2 - x^2/24 + ...) = 1 / (1/2) = 2}} (confirmed by two applications of L'Hôpital's rule).",
    },
    {
      id: "exam-p3-hl-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "5b-integration-des-maclaurin",
      guideRef: "differential-equations-hl",
      commandTerm: "Solve",
      marks: 7,
      question:
        "[Investigation 1 · Stage 4: Synthesise · 7 marks] Every curve {{y = f_n(x) = x^n e^(-x)}} ({{x > 0}}) satisfies the homogeneous ODE {{x (dy/dx) + (x - n)y = 0}}. Now consider the forced perturbation for {{n = 1}}:\n{{x (dy/dx) + (x - 1)y = x^2 e^(-x)}}, for {{x > 0}}, with {{y(1) = 4e^(-1)}}.\n(a) Rewrite the ODE in standard linear form and find an integrating factor {{μ(x)}} for {{x > 0}}. [3 marks]\n(b) Hence solve the differential equation to express {{y}} explicitly as a linear combination of members of the family {{f_n(x)}}. [4 marks]",
      hints: [
        "Divide through by {{x}} first: {{dy/dx + (1 - 1/x)y = x e^(-x)}}.",
        "Integrate {{P(x) = 1 - 1/x}} to get {{x - ln x}}, so {{μ(x) = e^(x - ln x) = e^x / x}} (for {{x > 0}}).",
        "Watch the magical cancellation on the RHS when you multiply by {{e^x / x}}: {{(e^x / x) * (x e^(-x)) = 1}}!",
      ],
      strategy: "Always simplify e^(x − ln x) using exponent laws into e^x · e^(−ln x) = e^x / x BEFORE multiplying through the ODE.",
      modelAnswer:
        "(a) Dividing through by x (since x > 0) gives the standard linear form dy/dx + (1 - 1/x)y = x e^(-x). Here P(x) = 1 - 1/x, so ∫ P(x) dx = x - ln x (for x > 0). The integrating factor is μ(x) = e^(x - ln x) = e^x · e^(-ln x) = e^x / x.\n(b) Multiplying the standard form by μ(x) = e^x / x gives d/dx((e^x / x) y) = (e^x / x)(x e^(-x)) = 1.\nIntegrating both sides with respect to x gives (e^x / x) y = x + C, so y = x(x + C)e^(-x) = (x^2 + Cx)e^(-x).\nApplying the boundary condition y(1) = 4e^(-1) gives (1 + C)e^(-1) = 4e^(-1), so 1 + C = 4 and C = 3.\nHence the explicit solution is y = (x^2 + 3x)e^(-x) = f_2(x) + 3 f_1(x).",
      markScheme: [
        {
          point: "M1: Divides by x to obtain dy/dx + (1 − 1/x)y = x e^(−x)",
          keywords: ["(1 - 1/x)y", "x e^(-x)"],
        },
        {
          point: "M1: Evaluates ∫ (1 − 1/x) dx = x − ln x",
          keywords: ["x - ln x"],
        },
        {
          point: "A1: Simplifies integrating factor cleanly to μ(x) = e^x / x",
          keywords: ["e^x / x", "e^x/x"],
        },
        {
          point: "M1: Recognises d/dx((e^x/x) y) and simplifies RHS to 1",
          keywords: ["d/dx((e^x / x) y)", "= 1"],
        },
        {
          point: "A1: Integrates to obtain (e^x/x) y = x + C (including + C)",
          keywords: ["x + c", "+ c"],
        },
        {
          point: "M1: Applies y(1) = 4e⁻¹ to determine C = 3",
          keywords: ["c = 3", "c=3"],
        },
        {
          point: "A1: Expresses explicit solution as y = (x² + 3x)e^(−x) (= f₂(x) + 3f₁(x))",
          keywords: ["(x^2 + 3x)e^(-x)", "f_2(x) + 3 f_1(x)"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Rewrites the ODE in standard form and attempts the integrating factor.",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Simplifies μ(x) = e^x/x, obtains d/dx((e^x/x)y) = 1, and finds the general solution with + C.",
        },
        {
          band: "High (6–7 marks)",
          marks: [6, 7],
          descriptor: "Flawless integrating-factor solution with C = 3 yielding y = (x² + 3x)e^(−x) = f₂(x) + 3f₁(x).",
        },
      ],
      commonError: "Writing e^(x − ln x) as e^x − x instead of e^x / x, or omitting + C before multiplying through by x e^(−x).",
    },

    // =========================================================================
    // INVESTIGATION 2 (Q09–Q15): A One-Parameter Sheaf of 3D Planes Π_k,
    // 3×3 Linear Systems & Calculus–Geometry Duality of Distance to a Line
    // =========================================================================
    {
      id: "exam-p3-hl-q09",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      topicId: "3b-vectors-planes",
      guideRef: "intersections-angles-distances",
      commandTerm: "Find",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 185" role="img" aria-label="Sheaf of planes Pi_0, Pi_1, and Pi_k rotating around a shared 3D line of intersection L"><rect width="300" height="185" fill="#f8fafc" rx="10"/><polygon points="55,130 148,95 245,42 152,77" fill="#dbeafe" fill-opacity="0.72" stroke="#2563eb" stroke-width="1.6"/><polygon points="55,130 148,95 258,125 165,160" fill="#e0e7ff" fill-opacity="0.72" stroke="#4338ca" stroke-width="1.6"/><polygon points="55,130 148,95 190,22 97,57" fill="#ccfbf1" fill-opacity="0.65" stroke="#0f766e" stroke-width="1.6"/><line x1="32" y1="139" x2="176" y2="84" stroke="#dc2626" stroke-width="3"/><circle cx="102" cy="112" r="3.5" fill="#dc2626"/><text x="22" y="154" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Common line L</text><text x="230" y="54" font-family="sans-serif" font-size="11.5" fill="#2563eb">Π₀</text><text x="234" y="138" font-family="sans-serif" font-size="11.5" fill="#4338ca">Π₁</text><text x="150" y="34" font-family="sans-serif" font-size="11.5" fill="#0f766e">Π_k</text></svg>',
      question:
        "[Investigation 2 · Stage 1: Explore] Consider the one-parameter family of 3D planes\n{{Π_k : (1 + k)x + (2 - k)y + (1 + 2k)z = 5 + 2k}}, where {{k ∈ ℝ}}.\nFind the exact value of {{k}} for which the plane {{Π_k}} passes through the origin {{O(0, 0, 0)}}, giving your answer as a simplified fraction.",
      answer: { type: "fraction", n: -5, d: 2, simplest: true, allowDecimal: true },
      traps: [
        {
          spec: { type: "fraction", n: 5, d: 2 },
          feedback: "Check the sign: setting 5 + 2k = 0 gives 2k = −5, so k = −5/2.",
        },
      ],
      hints: [
        "Substitute {{(x, y, z) = (0, 0, 0)}} directly into the Cartesian equation of {{Π_k}}.",
        "Solve the resulting linear equation {{0 = 5 + 2k}} for {{k}}.",
      ],
      strategy: "A plane ax + by + cz = d passes through the origin if and only if its constant term d = 0.",
      solution: [
        "Substitute {{(x, y, z) = (0, 0, 0)}} into {{(1 + k)x + (2 - k)y + (1 + 2k)z = 5 + 2k}}.",
        "This yields {{0 = 5 + 2k}}, so {{k = -5/2}}.",
      ],
      commonError: "Forgetting to negate 5 when rearranging 5 + 2k = 0.",
    },
    {
      id: "exam-p3-hl-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "3b-vectors-planes",
      guideRef: "intersections-angles-distances",
      commandTerm: "Calculate",
      question:
        "[Investigation 2 · Stage 1: Explore] Let {{Π_0}} and {{Π_1}} be the planes in the family {{Π_k : (1 + k)x + (2 - k)y + (1 + 2k)z = 5 + 2k}} corresponding to {{k = 0}} and {{k = 1}}. Calculate the acute dihedral angle between {{Π_0}} and {{Π_1}} in **degrees**, giving your answer to **3 significant figures**.",
      answer: { type: "number", value: 40.2, tolerance: 0.1 },
      traps: [
        {
          spec: { type: "number", value: 0.702, tolerance: 0.01 },
          feedback: "0.702 is the angle in RADIANS — convert to degrees (or switch your TI-Nspire CX to DEG mode)!",
        },
        {
          spec: { type: "number", value: 49.8, tolerance: 0.1 },
          feedback: "49.8° is 90° − 40.2°: the angle between two PLANES uses arccos(|n₀ · n₁|/(|n₀||n₁|)), NOT arcsin!",
        },
      ],
      hints: [
        "Read the two normal vectors: {{n_0 = (1, 2, 1)}} for {{k = 0}} and {{n_1 = (2, 1, 3)}} for {{k = 1}}.",
        "Apply {{cos θ = |n_0 · n_1| / (|n_0||n_1|)}} in **DEG** mode on your TI-Nspire CX.",
      ],
      strategy: "Plane–plane dihedral angle = angle between their normals (uses arccos); line–plane angle uses arcsin!",
      solution: [
        "Identify the normal vectors: {{n_0 = (1, 2, 1)}} and {{n_1 = (2, 1, 3)}}.",
        "Compute dot product and magnitudes: {{n_0 · n_1 = 1(2) + 2(1) + 1(3) = 7}}, {{|n_0| = sqrt(6)}}, {{|n_1| = sqrt(14)}}.",
        "TI-Nspire CX (DEG mode): {{θ = arccos(7 / sqrt(84)) = 40.20297° ≈ 40.2°}} (3 s.f.).",
      ],
      commonError: "Leaving the GDC in RAD mode (getting 0.702), or using arcsin instead of arccos.",
    },
    {
      id: "exam-p3-hl-q11",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "3b-vectors-planes",
      guideRef: "vectors-dot-product",
      commandTerm: "Determine",
      question:
        "[Investigation 2 · Stage 1: Explore] Determine the exact integer value of {{k}} for which the plane {{Π_k : (1 + k)x + (2 - k)y + (1 + 2k)z = 5 + 2k}} is perpendicular to {{Π_0}}.",
      answer: { type: "number", value: -6 },
      traps: [
        {
          spec: { type: "number", value: 6 },
          feedback: "Check the sign: n₀ · n_k = 6 + k = 0 gives k = −6 (not +6).",
        },
      ],
      hints: [
        "Two planes are perpendicular if and only if their normal vectors are orthogonal: {{n_0 · n_k = 0}}.",
        "Expand {{(1, 2, 1) · (1 + k, 2 - k, 1 + 2k) = 0}} carefully and solve for {{k}}.",
      ],
      strategy: "Test your final value of k by plugging it into n_k and verifying n₀ · n_k = 0 directly.",
      solution: [
        "Set {{n_0 · n_k = 0}}: {{1(1 + k) + 2(2 - k) + 1(1 + 2k) = 0}}.",
        "Simplify: {{(1 + 4 + 1) + (1 - 2 + 2)k = 6 + k = 0}}, giving {{k = -6}}.",
        "Check: {{n_(-6) = (-5, 8, -11)}}, and {{(1, 2, 1) · (-5, 8, -11) = -5 + 16 - 11 = 0}}.",
      ],
      commonError: "Sign slip when expanding 2(2 − k) = 4 − 2k.",
    },
    {
      id: "exam-p3-hl-q12",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "1b-complex-proofs-systems",
      guideRef: "linear-systems-3x3",
      commandTerm: "Identify",
      question:
        "[Investigation 2 · Stage 2: Conjecture] A third plane {{P : 3x + 3y + az = b}} is examined alongside {{Π_0 : x + 2y + z = 5}} and {{Π_1 : 2x + y + 3z = 7}}. By row-reducing the {{3 × 3}} system (or comparing {{Π_0 + Π_1}} with {{P}}), identify the exact condition on {{a}} and {{b}} for the three planes to form an inconsistent **triangular prism**.",
      options: [
        "a = 4 and b = 12",
        "a ≠ 4 and b = 12",
        "a = 4 and b ≠ 12",
        "a ≠ 4 and b ≠ 12",
      ],
      answerIndex: 2,
      hints: [
        "Add the equations of {{Π_0}} and {{Π_1}} directly: {{(x + 2y + z) + (2x + y + 3z) = 5 + 7}} gives {{3x + 3y + 4z = 12}}.",
        "Subtracting {{Π_0 + Π_1}} from {{P}} gives {{(a - 4)z = b - 12}}. For an inconsistent triangular prism (no two planes parallel!), we need {{0z = nonzero}}!",
      ],
      strategy: "Row-reducing R₃ → R₃ − R₁ − R₂ immediately isolates the degenerate row [0, 0, a − 4 | b − 12]!",
      explanation:
        "Adding {{Π_0}} and {{Π_1}} gives {{3x + 3y + 4z = 12}}. Subtracting this from {{P}} gives {{(a - 4)z = b - 12}}. Because no two of the three normal vectors {{(1, 2, 1)}}, {{(2, 1, 3)}}, and {{(3, 3, a)}} are parallel, setting {{a = 4}} and {{b ≠ 12}} produces the contradiction {{0 = b - 12 ≠ 0}}, meaning the three planes intersect pairwise in three parallel lines forming a triangular prism.",
    },
    {
      id: "exam-p3-hl-q13",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "3b-vectors-planes",
      guideRef: "cross-product-planes",
      commandTerm: "Show that",
      marks: 7,
      question:
        "[Investigation 2 · Stage 3: Prove · 7 marks] Continuing with the plane family {{Π_k : (1 + k)x + (2 - k)y + (1 + 2k)z = 5 + 2k}}:\n(a) Find a vector equation {{r = a + t b}} for the line of intersection {{L}} of {{Π_0}} and {{Π_1}}. [4 marks]\n(b) Prove algebraically that **every** plane {{Π_k}} ({{k ∈ ℝ}}) contains the entire line {{L}} (so the family forms a sheaf of planes hinged along {{L}}). [3 marks]",
      hints: [
        "For (a), find the direction vector {{b = n_0 × n_1 = (1, 2, 1) × (2, 1, 3)}}, and find one point on {{L}} by setting {{z = 0}} and solving {{x + 2y = 5}}, {{2x + y = 7}}.",
        "For (b), substitute the parametric coordinates {{(x, y, z)}} of {{L}} directly into the LHS of {{Π_k}} and show that ALL {{t}}-terms cancel identically, leaving {{5 + 2k}}!",
      ],
      strategy: "Always check your cross product b = n₀ × n₁ by confirming n₀ · b = 0 and n₁ · b = 0 before starting part (b).",
      modelAnswer:
        "(a) The direction vector of L is parallel to the cross product of normals:\nb = n_0 × n_1 = (1, 2, 1) × (2, 1, 3) = (2(3) - 1(1), -(1(3) - 1(2)), 1(1) - 2(2)) = (5, -1, -3).\nTo find a point on L, set z = 0 in Π_0 and Π_1: x + 2y = 5 and 2x + y = 7. Solving simultaneously (2(2x + y) - (x + 2y) = 14 - 5 => 3x = 9) gives x = 3 and y = 1, so A(3, 1, 0) lies on L.\nHence a vector equation of L is r = (3, 1, 0) + t(5, -1, -3), t ∈ ℝ.\n(b) Substitute the general point (3 + 5t, 1 - t, -3t) of L into the LHS of Π_k:\n(1 + k)(3 + 5t) + (2 - k)(1 - t) + (1 + 2k)(-3t)\n= (3 + 3k + 2 - k) + t(5 + 5k - 2 + k - 3 - 6k)\n= (5 + 2k) + 0·t = 5 + 2k = RHS.\nSince this holds identically for every t ∈ ℝ and every k ∈ ℝ, every plane Π_k contains the entire line L.",
      markScheme: [
        {
          point: "M1: Computes cross product n₀ × n₁ = (1, 2, 1) × (2, 1, 3) for line direction",
          keywords: ["n_0 × n_1", "(1, 2, 1) × (2, 1, 3)"],
        },
        {
          point: "A1: Obtains direction vector b = (5, −1, −3) (or any non-zero scalar multiple)",
          keywords: ["(5, -1, -3)", "(5,-1,-3)"],
        },
        {
          point: "M1: Solves simultaneous equations (e.g. z = 0) to locate a point on both planes",
          keywords: ["z = 0", "x = 3"],
        },
        {
          point: "A1: States complete vector equation r = (3, 1, 0) + t(5, −1, −3)",
          keywords: ["(3, 1, 0)", "t(5, -1, -3)"],
        },
        {
          point: "M1: Substitutes parametric point (3 + 5t, 1 − t, −3t) into LHS of Π_k (or factors Π_k = Π₀ + k(x − y + 2z − 2))",
          keywords: ["3 + 5t", "1 - t", "-3t"],
        },
        {
          point: "A1: Expands and shows the coefficient of t vanishes identically (5 + 5k − 2 + k − 3 − 6k = 0)",
          keywords: ["0·t", "5 + 5k - 2 + k - 3 - 6k"],
        },
        {
          point: "R1: Concludes LHS = 5 + 2k = RHS for all t, k ∈ ℝ so every Π_k contains L",
          keywords: ["identically", "every t"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Finds the direction vector via cross product or solves for one point on the intersection line.",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Correct vector equation of line L and attempts substitution into Π_k.",
        },
        {
          band: "High (6–7 marks)",
          marks: [6, 7],
          descriptor: "Exact line r = (3, 1, 0) + t(5, −1, −3) and rigorous algebraic proof that every Π_k contains L for all t and k.",
        },
      ],
      commonError: "Verifying only one point A(3, 1, 0) lies in Π_k instead of verifying the ENTIRE line for arbitrary parameter t.",
    },
    {
      id: "exam-p3-hl-q14",
      kind: "mcq",
      difficulty: "challenge",
      level: "HL",
      topicId: "2-functions",
      guideRef: "quadratics-exponentials-rationals",
      commandTerm: "Determine",
      question:
        "[Investigation 2 · Stage 4: Extend] For every {{k ∈ ℝ}}, the perpendicular distance from the origin {{O(0, 0, 0)}} to {{Π_k}} is given by\n{{d(k) = |5 + 2k| / sqrt(6k^2 + 2k + 6)}}.\nDetermine the exact horizontal asymptote {{lim_(k -> ±∞) d(k)}}.",
      options: ["{{5/sqrt(6)}}", "{{2/3}}", "{{sqrt(6)/2}}", "{{sqrt(6)/3}}"],
      answerIndex: 3,
      hints: [
        "Divide both numerator and denominator by {{|k| = sqrt(k^2)}}: {{d(k) = |2 + 5/k| / sqrt(6 + 2/k + 6/k^2)}}.",
        "Take the limit as {{k -> ±∞}} and rationalise the denominator of {{2 / sqrt(6)}}.",
      ],
      strategy: "Geometrically, dividing Π_k by k and taking k → ±∞ yields the limiting sheaf plane x − y + 2z = 2, whose distance from O is 2/√6 = √6/3!",
      explanation:
        "Dividing numerator and denominator by {{|k| = sqrt(k^2)}} gives {{d(k) = |2 + 5/k| / sqrt(6 + 2/k + 6/k^2)}}. As {{k -> ±∞}}, all {{1/k}} and {{1/k^2}} terms vanish, leaving {{2 / sqrt(6) = (2 sqrt(6))/6 = sqrt(6)/3}}.",
    },
    {
      id: "exam-p3-hl-q15",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "5a-differentiation",
      guideRef: "curve-sketching-optimization-kinematics",
      commandTerm: "Find",
      marks: 9,
      question:
        "[Investigation 2 · Stage 4: Synthesise · 9 marks] Continuing with the origin-to-plane distance function {{d(k) = |5 + 2k| / sqrt(6k^2 + 2k + 6)}}:\n(a) By differentiating {{g(k) = [d(k)]^2 = (5 + 2k)^2 / (6k^2 + 2k + 6)}}, find the exact value of {{k}} that maximises {{d(k)}} and calculate the exact maximum distance {{d_max}} (and its 3 s.f. value). [6 marks]\n(b) Using your vector equation for the common line {{L}} from the earlier part, verify geometrically that {{d_max}} equals the shortest perpendicular distance from the origin {{O}} to {{L}}, and explain briefly why no plane {{Π_k}} containing {{L}} can lie further from {{O}} than {{L}} itself. [3 marks]",
      hints: [
        "Differentiating {{g(k) = [d(k)]^2}} avoids messy square roots and absolute values — apply the quotient rule and factor out {{2(5 + 2k)}} from the numerator!",
        "Notice the {{12k^2}} terms cancel completely in the numerator of {{g'(k)}}, leaving a linear factor {{(1 - 4k)}}!",
        "For (b), recall that the shortest distance from {{O}} to line {{r = a + t b}} is {{|a × b| / |b|}} — compare it with {{d_max}} and think about right triangles!",
      ],
      strategy: "Whenever optimising a positive distance d(k), maximise [d(k)]² instead — the square root is strictly increasing so both peak at the exact same k!",
      modelAnswer:
        "(a) Apply the quotient rule to g(k) = (5 + 2k)^2 / (6k^2 + 2k + 6):\ng'(k) = [4(5 + 2k)(6k^2 + 2k + 6) - (5 + 2k)^2 (12k + 2)] / (6k^2 + 2k + 6)^2\n= [2(5 + 2k)(12k^2 + 4k + 12 - (12k^2 + 32k + 5))] / (6k^2 + 2k + 6)^2\n= [2(5 + 2k)(7 - 28k)] / (6k^2 + 2k + 6)^2 = [14(5 + 2k)(1 - 4k)] / (6k^2 + 2k + 6)^2.\nSetting g'(k) = 0 gives k = -5/2 (minimum where d = 0) and k = 1/4. Since g'(k) > 0 for -5/2 < k < 1/4 and g'(k) < 0 for k > 1/4, k = 1/4 gives the global maximum.\nSubstituting k = 1/4: 5 + 2(1/4) = 11/2 and 6(1/16) + 2(1/4) + 6 = 55/8, so g(1/4) = (121/4)/(55/8) = 22/5 = 4.4.\nHence d_max = sqrt(22/5) = sqrt(110)/5 ≈ 2.10 (3 s.f.).\n(b) For L: r = (3, 1, 0) + t(5, -1, -3), take OA = (3, 1, 0) and b = (5, -1, -3). Then OA × b = (-3, 9, -8), so |OA × b| = sqrt(9 + 81 + 64) = sqrt(154) and |b| = sqrt(25 + 1 + 9) = sqrt(35). Thus dist(O, L) = sqrt(154)/sqrt(35) = sqrt(22/5) = d_max.\nGeometrically, the foot F of the perpendicular from O to L lies on EVERY plane Π_k; in the right triangle formed by O, F, and the perpendicular foot P_k on Π_k, the perpendicular distance |OP_k| is a leg and cannot exceed the hypotenuse |OF| = dist(O, L), with equality precisely when OF is normal to Π_k (at k = 1/4).",
      markScheme: [
        {
          point: "M1: Applies quotient rule accurately to g(k) = (5 + 2k)²/(6k² + 2k + 6)",
          keywords: ["4(5 + 2k)", "12k + 2"],
        },
        {
          point: "A1: Factors numerator cleanly to 14(5 + 2k)(1 − 4k) (showing 12k² terms cancel)",
          keywords: ["7 - 28k", "1 - 4k"],
        },
        {
          point: "A1: Solves g'(k) = 0 to identify k = 1/4",
          keywords: ["k = 1/4", "k = 0.25"],
        },
        {
          point: "R1: Justifies global maximum at k = 1/4 via sign change of g'(k) (from + to −)",
          keywords: ["g'(k) > 0", "global maximum"],
        },
        {
          point: "M1: Evaluates g(1/4) = (121/4)/(55/8) = 22/5",
          keywords: ["22/5", "4.4"],
        },
        {
          point: "A1: Obtains exact maximum distance d_max = √(22/5) (or √110 / 5 ≈ 2.10)",
          keywords: ["sqrt(22/5)", "2.10"],
        },
        {
          point: "M1: Computes OA × b = (−3, 9, −8) (or foot F = (1, 7/5, 6/5)) to find dist(O, L)",
          keywords: ["(-3, 9, -8)", "sqrt(154)"],
        },
        {
          point: "A1: Verifies dist(O, L) = √(154/35) = √(22/5) = d_max exactly",
          keywords: ["sqrt(35)", "dist(o, l)"],
        },
        {
          point: "R1: Geometric right-triangle explanation: |OP_k| ≤ |OF| because F ∈ L ⊂ Π_k (leg ≤ hypotenuse)",
          keywords: ["hypotenuse", "right triangle"],
        },
      ],
      markbands: [
        {
          band: "Low (0–3 marks)",
          marks: [0, 3],
          descriptor: "Applies the quotient rule to g(k) or computes the cross product OA × b for the distance to L.",
        },
        {
          band: "Mid (4–6 marks)",
          marks: [4, 6],
          descriptor: "Finds k = 1/4 and d_max = √(22/5) ≈ 2.10 with clear derivative justification.",
        },
        {
          band: "High (7–9 marks)",
          marks: [7, 9],
          descriptor: "Complete calculus optimisation yielding k = 1/4 and d_max = √(22/5), exact vector verification dist(O, L) = √(22/5), and crisp geometric right-triangle synthesis.",
        },
      ],
      commonError: "Attempting to differentiate |5 + 2k| / √(6k² + 2k + 6) directly instead of squaring first, or failing to justify why k = 1/4 is a maximum rather than a minimum.",
    },
  ],
};
