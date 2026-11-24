import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // DIAGNOSTIC QUIZ (10 Qs: 6 SL + 4 HL; 6 short + 4 mcq [0,1,2,3])
  // ===========================================================================
  quiz: [
    {
      id: "2-functions-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "functions-inverse-transforms",
      question: "Given {{f(x) = 5x - 7}} and {{g(x) = x^2 + 2}}, find the exact value of {{(f ∘ g)(-3)}}.",
      answer: { type: "number", value: 48 },
      traps: [
        {
          spec: { type: "number", value: 486 },
          feedback: "You evaluated {{(g ∘ f)(-3)}} instead of {{(f ∘ g)(-3)}} — apply the inner function {{g}} first.",
        },
        {
          spec: { type: "number", value: -42 },
          feedback: "Remember {{(-3)^2 = +9}}, not {{-9}}.",
        },
      ],
      hints: ["Evaluate {{g(-3)}} first, then substitute that output into {{f}}."],
      solution: [
        "Evaluate the inner function: {{g(-3) = (-3)^2 + 2 = 9 + 2 = 11}}.",
        "Substitute into {{f}}: {{f(11) = 5(11) - 7 = 55 - 7 = 48}}.",
      ],
    },
    {
      id: "2-functions-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Find",
      guideRef: "functions-inverse-transforms",
      question: "What is the equation of the perpendicular bisector of the segment joining {{A(1, 3)}} and {{B(5, 11)}}?",
      options: [
        "{{x + 2y = 17}}",
        "{{2x - y = -1}}",
        "{{x - 2y = -11}}",
        "{{2x + y = 13}}",
      ],
      answerIndex: 0,
      hints: ["Find the midpoint of {{AB}} and the negative reciprocal of the gradient of {{AB}}."],
      explanation:
        "Midpoint is {{((1+5)/2, (3+11)/2) = (3, 7)}}. Gradient of {{AB}} is {{(11-3)/(5-1) = 2}}, so perpendicular gradient is {{-1/2}}. Thus {{y - 7 = -(1/2)(x - 3) => x + 2y = 17}}.",
    },
    {
      id: "2-functions-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Find",
      guideRef: "functions-inverse-transforms",
      question:
        "The point {{(2, -5)}} lies on {{y = f(x)}}. Find the coordinates of the corresponding point on {{y = 3f(2x + 4) - 1}} (enter as `x, y`).",
      answer: { type: "list", values: [-1, -16], ordered: true, display: "(-1, -16)" },
      hints: [
        "Set the inner expression {{2x' + 4}} equal to the original x-coordinate {{2}}.",
        "Apply the outer vertical operations directly to {{-5}}: {{y' = 3(-5) - 1}}.",
      ],
      solution: [
        "Horizontal mapping: {{2x' + 4 = 2 => 2x' = -2 => x' = -1}}.",
        "Vertical mapping: {{y' = 3(-5) - 1 = -16}}.",
        "The transformed point is {{(-1, -16)}}.",
      ],
    },
    {
      id: "2-functions-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "quadratics-exponentials-rationals",
      question: "Calculate the value of the discriminant {{Δ}} of the quadratic equation {{3x^2 - 4x + 5 = 0}}.",
      answer: { type: "number", value: -44 },
      traps: [
        { spec: { type: "number", value: -76 }, feedback: "Remember {{(-4)^2 = +16}}, not {{-16}}." },
        { spec: { type: "number", value: 76 }, feedback: "The formula is {{b^2 - 4ac}}, with subtraction." },
      ],
      hints: ["Use {{Δ = b^2 - 4ac}} with {{a = 3, b = -4, c = 5}}."],
      solution: ["{{Δ = (-4)^2 - 4(3)(5) = 16 - 60 = -44}}."],
    },
    {
      id: "2-functions-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "quadratics-exponentials-rationals",
      question: "What are the horizontal asymptote and y-intercept of {{f(x) = (9x - 6)/(3x + 2)}}?",
      options: [
        "Horizontal asymptote {{y = -3}}, y-intercept {{(0, 3)}}",
        "Horizontal asymptote {{y = 3}}, y-intercept {{(0, -3)}}",
        "Horizontal asymptote {{y = 3}}, y-intercept {{(0, 2/3)}}",
        "Horizontal asymptote {{y = -2/3}}, y-intercept {{(0, -3)}}",
      ],
      answerIndex: 1,
      hints: [
        "The horizontal asymptote is the ratio of the {{x}}-coefficients {{a/c}}.",
        "Substitute {{x = 0}} into {{f(x)}} to find the y-intercept.",
      ],
      explanation:
        "Leading-coefficient ratio gives horizontal asymptote {{y = 9/3 = 3}}. Setting {{x = 0}} gives {{f(0) = -6/2 = -3}}, so the y-intercept is {{(0, -3)}}.",
    },
    {
      id: "2-functions-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Solve",
      guideRef: "quadratics-exponentials-rationals",
      question: "Solve {{2^(2x) - 6(2^x) + 8 = 0}} and enter both solutions as a comma-separated list.",
      answer: { type: "list", values: [1, 2], ordered: false, display: "1, 2" },
      traps: [
        { spec: { type: "list", values: [2, 4], ordered: false }, feedback: "Those are the values of {{u = 2^x}} — now solve {{2^x = 2}} and {{2^x = 4}} for {{x}}." },
      ],
      hints: [
        "Substitute {{u = 2^x}} so {{2^(2x) = u^2}}, giving {{u^2 - 6u + 8 = 0}}.",
        "Solve for {{u}} first, then solve {{2^x = u}} for {{x}}.",
      ],
      solution: [
        "Let {{u = 2^x}}: {{u^2 - 6u + 8 = 0 => (u - 2)(u - 4) = 0}}.",
        "Thus {{2^x = 2 => x = 1}} or {{2^x = 4 => x = 2}}.",
      ],
    },
    {
      id: "2-functions-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "polynomials-vieta-rationals-hl",
      question: "Use the Remainder Theorem to find the remainder when {{P(x) = 2x^3 - 5x^2 + 3x - 4}} is divided by {{(x + 2)}}.",
      answer: { type: "number", value: -46 },
      traps: [
        { spec: { type: "number", value: -2 }, feedback: "Dividing by {{(x + 2)}} means evaluating {{P(-2)}}, not {{P(2)}}." },
      ],
      hints: [
        "Dividing by {{(x + 2) = (x - (-2))}} leaves remainder {{P(-2)}}.",
        "Watch the signs on {{(-2)^3 = -8}} and {{(-2)^2 = +4}}.",
      ],
      solution: [
        "By the Remainder Theorem, remainder {{= P(-2)}}.",
        "{{P(-2) = 2(-8) - 5(4) + 3(-2) - 4 = -16 - 20 - 6 - 4 = -46}}.",
      ],
    },
    {
      id: "2-functions-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "polynomials-vieta-rationals-hl",
      question: "The cubic {{2x^3 - 8x^2 + 5x + 14 = 0}} has roots {{α, β, γ}}. What are {{α + β + γ}} and {{αβγ}}?",
      options: [
        "{{α + β + γ = -4}} and {{αβγ = 7}}",
        "{{α + β + γ = 4}} and {{αβγ = 7}}",
        "{{α + β + γ = 4}} and {{αβγ = -7}}",
        "{{α + β + γ = -4}} and {{αβγ = -7}}",
      ],
      answerIndex: 2,
      hints: [
        "For {{ax^3 + bx^2 + cx + d = 0}}, {{α + β + γ = -b/a}} and {{αβγ = -d/a}}.",
        "Check the negative signs carefully for an odd-degree polynomial.",
      ],
      explanation:
        "By Vieta's formulas, {{α + β + γ = -(-8)/2 = 4}} and {{αβγ = (-1)^3(14)/2 = -7}}.",
    },
    {
      id: "2-functions-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "modulus-reciprocal-even-odd-hl",
      question: "Find the value of {{k}} for which the rational function {{f(x) = (kx + 9)/(4x + 5)}} ({{x != -5/4}}) is self-inverse.",
      answer: { type: "number", value: -5 },
      traps: [
        { spec: { type: "number", value: 5 }, feedback: "Check the sign: VA is {{x = -5/4}}, so HA {{y = k/4}} must equal {{-5/4}}." },
      ],
      hints: [
        "A linear rational function {{(ax + b)/(cx + d)}} is self-inverse iff {{a + d = 0}}.",
        "Equivalently, its vertical asymptote {{x = -5/4}} and horizontal asymptote {{y = k/4}} must intersect on {{y = x}}.",
      ],
      solution: [
        "For {{f(x) = f^(-1)(x)}}, set {{a + d = 0 => k + 5 = 0 => k = -5}}.",
        "Verification: swapping {{x}} and {{y}} in {{y = (-5x + 9)/(4x + 5)}} gives {{4xy + 5x = -5y + 9 => y = (-5x + 9)/(4x + 5)}}.",
      ],
    },
    {
      id: "2-functions-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "State",
      guideRef: "modulus-reciprocal-even-odd-hl",
      question: "The smooth curve {{y = f(x)}} has a local maximum at {{(-1, 5)}}. What corresponding stationary point lies on {{y = 1/f(x)}}?",
      options: [
        "A local maximum at {{(-1, 1/5)}}",
        "A local minimum at {{(1, 1/5)}}",
        "A local minimum at {{(-1, -1/5)}}",
        "A local minimum at {{(-1, 1/5)}}",
      ],
      answerIndex: 3,
      hints: [
        "Taking the reciprocal leaves the x-coordinate and the sign of the y-coordinate unchanged.",
        "Because {{1/t}} is decreasing on {{(0, ∞)}}, a positive peak becomes a positive valley.",
      ],
      explanation:
        "Reciprocating {{y = 5}} gives {{1/5}} at the same {{x = -1}}, and reverses max to min, yielding a local minimum at {{(-1, 1/5)}}.",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 PAPERS × 15 Qs = 30 Qs)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: NON-CALCULATOR (ANALYTICAL SL & HL)
    // -------------------------------------------------------------------------
    {
      id: "2-functions-p1",
      title: "Practice Paper 1 — Non-Calculator (Analytical SL & HL)",
      level: "SL",
      questions: [
        {
          id: "2-functions-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Find",
          guideRef: "functions-inverse-transforms",
          question: "A straight line passes through {{(-2, 7)}} and {{(4, -5)}}. Find its y-intercept.",
          answer: { type: "number", value: 3 },
          hints: ["First compute the gradient {{m = (-5 - 7)/(4 - (-2))}}, then substitute a point into {{y = mx + c}}."],
          solution: [
            "Gradient {{m = (-5 - 7)/(4 - (-2)) = -12/6 = -2}}.",
            "Using {{(-2, 7)}}: {{7 = -2(-2) + c => 7 = 4 + c => c = 3}}.",
          ],
        },
        {
          id: "2-functions-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "functions-inverse-transforms",
          question: "Given {{f(x) = 4x - 3}} and {{g(x) = (x + 5)/2}}, find a simplified expression for {{(f ∘ g)(x)}}.",
          answer: { type: "expression", expr: "2x + 7", form: "simplified" },
          hints: [
            "Substitute {{g(x) = (x + 5)/2}} in place of {{x}} inside {{f(x) = 4x - 3}}.",
            "Simplify {{4 * (x + 5)/2}} before subtracting {{3}}.",
          ],
          solution: [
            "{{(f ∘ g)(x) = 4((x + 5)/2) - 3 = 2(x + 5) - 3}}.",
            "Expand and simplify: {{2x + 10 - 3 = 2x + 7}}.",
          ],
        },
        {
          id: "2-functions-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "functions-inverse-transforms",
          question: "Let {{f(x) = (5x - 2)/(x + 3)}} for {{x != -3}}. Find the exact value of {{f^(-1)(3)}} as a simplified fraction.",
          answer: { type: "fraction", n: 11, d: 2, simplest: true, allowDecimal: true },
          hints: [
            "Set {{(5x - 2)/(x + 3) = 3}} directly — you do not need to derive {{f^(-1)(x)}} first.",
            "Multiply both sides by {{(x + 3)}} and solve the linear equation.",
          ],
          solution: [
            "Solve {{(5x - 2)/(x + 3) = 3 => 5x - 2 = 3x + 9}}.",
            "Thus {{2x = 11 => x = 11/2}}, so {{f^(-1)(3) = 11/2}}.",
          ],
        },
        {
          id: "2-functions-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "quadratics-exponentials-rationals",
          question: "By completing the square on {{f(x) = 2x^2 - 12x + 23}}, find the minimum value of {{f(x)}}.",
          answer: { type: "number", value: 5 },
          traps: [
            { spec: { type: "number", value: 14 }, feedback: "When factoring {{2}} out of {{2(x - 3)^2 - 9}}, remember to multiply {{-9}} by {{2}} to get {{-18}}!" },
          ],
          hints: [
            "Factor {{2}} from the first two terms: {{2(x^2 - 6x) + 23}}.",
            "Write {{x^2 - 6x = (x - 3)^2 - 9}} and carefully distribute the {{2}}.",
          ],
          solution: [
            "{{f(x) = 2(x^2 - 6x) + 23 = 2[(x - 3)^2 - 9] + 23 = 2(x - 3)^2 - 18 + 23 = 2(x - 3)^2 + 5}}.",
            "Since {{2(x - 3)^2 >= 0}}, the minimum value is {{5}} (attained at {{x = 3}}).",
          ],
        },
        {
          id: "2-functions-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "quadratics-exponentials-rationals",
          question: "The line {{y = 4x + k}} is tangent to the curve {{y = x^2 - 2x + 7}}. Find the exact value of {{k}}.",
          answer: { type: "number", value: -2 },
          hints: [
            "Equate {{x^2 - 2x + 7 = 4x + k}} to form a quadratic in {{x}}.",
            "Set the discriminant {{Δ = b^2 - 4ac}} equal to zero for tangency.",
          ],
          solution: [
            "Rearranging gives {{x^2 - 6x + (7 - k) = 0}}.",
            "Tangency requires {{Δ = (-6)^2 - 4(1)(7 - k) = 0 => 36 - 28 + 4k = 0 => 4k = -8 => k = -2}}.",
          ],
        },
        {
          id: "2-functions-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "quadratics-exponentials-rationals",
          question:
            "The rational function {{f(x) = (6x - 9)/(3x + 12)}} has vertical asymptote {{x = p}} and horizontal asymptote {{y = q}}. Find the value of {{p + q}}.",
          answer: { type: "number", value: -2 },
          hints: [
            "Solve {{3x + 12 = 0}} to find {{p}}.",
            "Take the leading-coefficient ratio {{6/3}} to find {{q}}.",
          ],
          solution: [
            "Vertical asymptote: {{3x + 12 = 0 => p = -4}}.",
            "Horizontal asymptote: {{q = 6/3 = 2}}.",
            "Hence {{p + q = -4 + 2 = -2}}.",
          ],
        },
        {
          id: "2-functions-p1-q07",
          kind: "written",
          marks: 4,
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "functions-inverse-transforms",
          question:
            "Consider {{f(x) = 2 ln(x - 3) + 5}} for {{x > 3}}. (a) State the range of {{f}}. (b) Find an expression for {{f^(-1)(x)}} and state its domain. (c) Describe a full sequence of geometric transformations mapping {{y = e^x}} onto {{y = f^(-1)(x)}}.",
          hints: [
            "The logarithm takes all real outputs, so what does that tell you about the domain of {{f^(-1)}}?",
            "Isolate {{ln(y - 3)}} before exponentiating both sides.",
            "In {{e^((x - 5)/2) + 3}}, check the order of the horizontal stretch (scale factor {{2}}) and the translation {{5}} units right.",
          ],
          modelAnswer:
            "(a) Range of f is all real numbers (y ∈ ℝ).\n(b) Swap x and y: x = 2 ln(y − 3) + 5, so ln(y − 3) = (x − 5)/2, giving f⁻¹(x) = e^((x − 5)/2) + 3 with domain x ∈ ℝ.\n(c) Starting from y = e^x: apply a horizontal stretch parallel to the x-axis with scale factor 2 to obtain y = e^(x/2), followed by a translation by vector (5, 3) (5 units right and 3 units up).",
          markScheme: [
            { point: "A1: Correctly states range of f is all real numbers (y ∈ ℝ).", keywords: ["all real", "y ∈ ℝ", "real numbers"] },
            { point: "M1: Swaps x and y and isolates ln(y − 3) = (x − 5)/2.", keywords: ["(x - 5)/2", "ln(y - 3)"] },
            { point: "A1: Obtains f⁻¹(x) = e^((x − 5)/2) + 3 and states domain x ∈ ℝ.", keywords: ["e^((x - 5)/2) + 3", "domain x ∈ ℝ", "x ∈ ℝ"] },
            { point: "A1: Gives valid ordered transformation sequence: horizontal stretch scale factor 2, then translation (5, 3).", keywords: ["scale factor 2", "5 units right", "vector (5, 3)"] },
          ],
          commonError: "Stating the horizontal stretch scale factor as 1/2 instead of 2, or applying the right shift of 5 before the stretch of 2.",
        },
        {
          id: "2-functions-p1-q08",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "SL",
          commandTerm: "Show that",
          guideRef: "quadratics-exponentials-rationals",
          question:
            "Consider {{f(x) = kx^2 + (2k + 4)x + (k + 3)}}, where {{k ∈ ℝ}}. (a) Show that the discriminant of {{f(x) = 0}} simplifies to {{4k + 16}}. (b) Find the exact set of values of {{k}} for which {{f(x) = 0}} has two distinct real roots. (c) Explain why there is NO real value of {{k}} for which {{f(x) > 0}} for all {{x ∈ ℝ}}.",
          hints: [
            "Substitute {{a = k}}, {{b = 2k + 4}}, {{c = k + 3}} into {{Δ = b^2 - 4ac}} and expand carefully.",
            "In part (b), do not forget to check what happens when {{k = 0}}!",
            "In part (c), compare the two simultaneous requirements {{k > 0}} and {{Δ < 0}}.",
          ],
          modelAnswer:
            "(a) Δ = (2k + 4)² − 4k(k + 3) = (4k² + 16k + 16) − (4k² + 12k) = 4k + 16.\n(b) For two distinct real roots, we need Δ > 0 and k ≠ 0 (since k = 0 reduces f to a linear function with only one root). Solving 4k + 16 > 0 gives k > −4, so the required set is k > −4, k ≠ 0.\n(c) For f(x) > 0 for all real x, the parabola must open upward (k > 0) AND have no real roots (Δ < 0). However, Δ < 0 requires 4k + 16 < 0, i.e. k < −4, which contradicts k > 0 (and at k = 0, 4x + 3 is not always positive). Hence no such value of k exists.",
          markScheme: [
            { point: "M1: Substitutes a = k, b = 2k + 4, c = k + 3 into b² − 4ac.", keywords: ["(2k + 4)", "4k(k + 3)"] },
            { point: "A1: Expands cleanly to 4k² + 16k + 16 − 4k² − 12k leading to 4k + 16.", keywords: ["4k² + 16k + 16", "4k² + 12k"] },
            { point: "M1: Sets 4k + 16 > 0 to find k > −4.", keywords: ["k > -4"] },
            { point: "A1: Excludes the degenerate linear case k ≠ 0 to give k > −4, k ≠ 0.", keywords: ["k ≠ 0", "linear function"] },
            { point: "M1: States both conditions required for f(x) > 0 everywhere: k > 0 and Δ < 0.", keywords: ["k > 0", "open upward"] },
            { point: "R1: Shows Δ < 0 gives k < −4 which contradicts k > 0 (and checks k = 0), concluding impossible.", keywords: ["k < -4", "contradicts"] },
          ],
          markbands: [
            { band: "Low", marks: [0, 2], descriptor: "Attempts discriminant substitution with algebraic slips or incomplete root conditions." },
            { band: "Mid", marks: [3, 4], descriptor: "Proves Δ = 4k + 16 accurately and solves k > −4, missing either k ≠ 0 or the contradiction proof." },
            { band: "High", marks: [5, 6], descriptor: "Complete, rigorous proof including k ≠ 0 exclusion and clear contradiction between k > 0 and k < −4." },
          ],
          commonError: "Forgetting to exclude k = 0 in part (b), where f(x) = 4x + 3 is linear and has only one root.",
        },
        {
          id: "2-functions-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "polynomials-vieta-rationals-hl",
          question:
            "The polynomial {{P(x) = x^3 - 2x^2 + ax + b}} is divisible by {{(x - 3)}} and leaves remainder {{-10}} when divided by {{(x + 2)}}. Find the value of {{a + b}}.",
          answer: { type: "number", value: -3 },
          hints: [
            "Use {{P(3) = 0}} and {{P(-2) = -10}} to obtain two linear equations in {{a}} and {{b}}.",
            "Subtract the two equations to eliminate {{b}}.",
          ],
          solution: [
            "{{P(3) = 27 - 18 + 3a + b = 0 => 3a + b = -9}}.",
            "{{P(-2) = -8 - 8 - 2a + b = -10 => -2a + b = 6}}.",
            "Subtracting gives {{5a = -15 => a = -3}}, so {{b = 0}} and {{a + b = -3}}.",
          ],
        },
        {
          id: "2-functions-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "polynomials-vieta-rationals-hl",
          question:
            "Find the oblique asymptote {{y = mx + c}} of {{f(x) = (4x^2 - 8x + 5)/(2x - 1)}}. Enter the expression {{mx + c}}.",
          answer: { type: "expression", expr: "2x - 3", form: "simplified", display: "{{y = 2x - 3}}" },
          hints: [
            "Divide {{4x^2 - 8x + 5}} by {{(2x - 1)}} using polynomial long division.",
            "Check your quotient by verifying {{(mx + c)(2x - 1) + R = 4x^2 - 8x + 5}}.",
          ],
          solution: [
            "Long division: {{4x^2 - 8x + 5 = (2x - 3)(2x - 1) + 2}}.",
            "Hence {{f(x) = 2x - 3 + 2/(2x - 1)}}, so the oblique asymptote is {{y = 2x - 3}}.",
          ],
        },
        {
          id: "2-functions-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "polynomials-vieta-rationals-hl",
          question: "The cubic equation {{2x^3 - 6x^2 - 5x + 8 = 0}} has roots {{α, β, γ}}. Find the exact value of {{α^2 + β^2 + γ^2}}.",
          answer: { type: "number", value: 14 },
          traps: [
            { spec: { type: "number", value: 4 }, feedback: "Watch the sign of {{Σαβ = c/a = -5/2}}: subtracting {{2(-5/2)}} ADDS {{5}}!" },
          ],
          hints: [
            "Use the identity {{α^2 + β^2 + γ^2 = (α + β + γ)^2 - 2(αβ + βγ + γα)}}.",
            "Apply Vieta's formulas: {{Σα = -b/a}} and {{Σαβ = c/a}}.",
          ],
          solution: [
            "By Vieta: {{α + β + γ = -(-6)/2 = 3}} and {{αβ + βγ + γα = -5/2}}.",
            "{{α^2 + β^2 + γ^2 = 3^2 - 2(-5/2) = 9 + 5 = 14}}.",
          ],
        },
        {
          id: "2-functions-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Solve",
          guideRef: "modulus-reciprocal-even-odd-hl",
          question: "Solve the modulus equation {{|4x - 5| = 2x + 11}} and enter both exact solutions as a comma-separated list.",
          answer: { type: "list", values: [-1, 8], ordered: false, display: "-1, 8" },
          hints: [
            "Split into two cases: {{4x - 5 = 2x + 11}} and {{4x - 5 = -(2x + 11)}}.",
            "Verify that both solutions make the right-hand side {{2x + 11 >= 0}}.",
          ],
          solution: [
            "Case 1: {{4x - 5 = 2x + 11 => 2x = 16 => x = 8}} (RHS {{= 27 >= 0}} ✓).",
            "Case 2: {{4x - 5 = -2x - 11 => 6x = -6 => x = -1}} (RHS {{= 9 >= 0}} ✓).",
            "The solutions are {{-1}} and {{8}}.",
          ],
        },
        {
          id: "2-functions-p1-q13",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "HL",
          commandTerm: "Solve",
          guideRef: "polynomials-vieta-rationals-hl",
          question:
            "Given that {{1 + 2i}} is a root of the real quartic equation {{P(x) = 2x^4 - 7x^3 + 17x^2 - 17x + 5 = 0}}: (a) state a second complex root and form a real quadratic factor of {{P(x)}}; (b) divide {{P(x)}} by this quadratic factor to find all four roots of {{P(x) = 0}}; (c) verify that your four roots satisfy Vieta's sum and product of roots.",
          hints: [
            "Complex roots of real polynomials always occur in conjugate pairs {{p +- qi}}.",
            "Expand {{(x - (1 + 2i))(x - (1 - 2i)) = (x - 1)^2 + 4}}.",
            "Divide {{P(x)}} by {{x^2 - 2x + 5}} to obtain a quadratic factor {{2x^2 - 3x + 1}}.",
          ],
          modelAnswer:
            "(a) Because all coefficients are real, the conjugate 1 − 2i is also a root. The corresponding real quadratic factor is (x − (1 + 2i))(x − (1 − 2i)) = (x − 1)² + 4 = x² − 2x + 5.\n(b) Dividing P(x) by x² − 2x + 5 yields the quotient 2x² − 3x + 1 = (2x − 1)(x − 1). Hence the four roots are x = 1/2, x = 1, x = 1 + 2i, and x = 1 − 2i.\n(c) Sum of roots = 1/2 + 1 + (1 + 2i) + (1 − 2i) = 7/2, matching −(−7)/2 = 7/2. Product of roots = (1/2)(1)((1 + 2i)(1 − 2i)) = (1/2)(5) = 5/2, matching (−1)⁴(5)/2 = 5/2.",
          markScheme: [
            { point: "A1: States conjugate root 1 − 2i using real coefficients.", keywords: ["1 - 2i", "conjugate"] },
            { point: "A1: Forms real quadratic factor x² − 2x + 5.", keywords: ["x² - 2x + 5", "x^2 - 2x + 5"] },
            { point: "M1: Divides P(x) by x² − 2x + 5 to find quotient 2x² − 3x + 1.", keywords: ["2x² - 3x + 1", "2x^2 - 3x + 1"] },
            { point: "A1: Factorises (2x − 1)(x − 1) and lists all four roots 1/2, 1, 1 ± 2i.", keywords: ["(2x - 1)(x - 1)", "1/2"] },
            { point: "A1: Verifies sum of roots equals 7/2 = −a₃/a₄.", keywords: ["7/2"] },
            { point: "A1: Verifies product of roots equals 5/2 = (+a₀)/a₄.", keywords: ["5/2"] },
          ],
          markbands: [
            { band: "Low", marks: [0, 2], descriptor: "Identifies conjugate root and attempts quadratic factor with arithmetic slips." },
            { band: "Mid", marks: [3, 4], descriptor: "Obtains x² − 2x + 5 and quotient 2x² − 3x + 1 cleanly, missing complete root list or Vieta check." },
            { band: "High", marks: [5, 6], descriptor: "Finds all four roots accurately and verifies both Vieta sum (7/2) and product (5/2)." },
          ],
          commonError: "Writing (x − 1)² − 4 instead of (x − 1)² + 4 because of forgetting that i² = −1.",
        },
        {
          id: "2-functions-p1-q14",
          kind: "written",
          marks: 7,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Show that",
          guideRef: "polynomials-vieta-rationals-hl",
          question:
            "Consider {{f(x) = (x^2 + 2x + 5)/(x + 1)}} for {{x != -1}}. (a) Find the equations of the vertical and oblique asymptotes. (b) Show analytically, without using calculus, that the range of {{f}} is {{y <= -4}} or {{y >= 4}}. (c) Hence determine the exact coordinates of the local maximum and local minimum of {{y = f(x)}}.",
          hints: [
            "Notice {{x^2 + 2x + 5 = (x + 1)^2 + 4}}, making polynomial division immediate!",
            "For part (b), rearrange {{y = (x^2 + 2x + 5)/(x + 1)}} into a quadratic in {{x}} and impose {{Δ >= 0}}.",
            "At the boundary values {{y = +-4}}, the quadratic in {{x}} has a repeated root {{x = -b/(2a)}} — giving the exact x-coordinates of the extrema!",
          ],
          modelAnswer:
            "(a) Vertical asymptote is x = −1. Rewriting f(x) = ((x + 1)² + 4)/(x + 1) = x + 1 + 4/(x + 1) shows the oblique asymptote is y = x + 1.\n(b) Setting y = (x² + 2x + 5)/(x + 1) gives yx + y = x² + 2x + 5, or x² + (2 − y)x + (5 − y) = 0. For real x to exist, the discriminant must satisfy Δ = (2 − y)² − 4(5 − y) ≥ 0, which simplifies to y² − 4y + 4 − 20 + 4y = y² − 16 ≥ 0. Hence (y − 4)(y + 4) ≥ 0, giving range y ≤ −4 or y ≥ 4.\n(c) The extrema occur where Δ = 0, giving the repeated root x = (y − 2)/2. When y = 4, x = 1, giving local minimum (1, 4). When y = −4, x = −3, giving local maximum (−3, −4).",
          markScheme: [
            { point: "A1: States vertical asymptote x = −1.", keywords: ["x = -1"] },
            { point: "A1: Divides to obtain x + 1 + 4/(x + 1) and states oblique asymptote y = x + 1.", keywords: ["y = x + 1"] },
            { point: "M1: Rearranges into quadratic in x: x² + (2 − y)x + (5 − y) = 0.", keywords: ["(2 - y)x", "(5 - y)"] },
            { point: "M1: Forms discriminant condition (2 − y)² − 4(5 − y) ≥ 0.", keywords: ["(2 - y)²", "4(5 - y)"] },
            { point: "A1: Simplifies to y² − 16 ≥ 0 and deduces y ≤ −4 or y ≥ 4.", keywords: ["y² - 16", "y ≤ -4", "y >= 4"] },
            { point: "A1: Finds local minimum at (1, 4).", keywords: ["(1, 4)"] },
            { point: "A1: Finds local maximum at (−3, −4).", keywords: ["(-3, -4)"] },
          ],
          markbands: [
            { band: "Low", marks: [0, 2], descriptor: "Identifies asymptotes correctly but stalls when forming the quadratic in x." },
            { band: "Mid", marks: [3, 5], descriptor: "Completes the discriminant range proof cleanly to y² − 16 ≥ 0, with minor slips on turning points." },
            { band: "High", marks: [6, 7], descriptor: "Fully rigorous non-calculus range proof and accurate identification of both (1, 4) and (−3, −4)." },
          ],
          commonError: "Swapping which turning point is the local maximum vs local minimum — remember (−3, −4) sits at the top of the lower branch (local max) while (1, 4) sits at the bottom of the upper branch (local min)!",
        },
        {
          id: "2-functions-p1-q15",
          kind: "written",
          marks: 8,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "modulus-reciprocal-even-odd-hl",
          question:
            "Let {{f(x) = x^2 - 4x - 5}}. (a) Restrict {{f}} to the largest domain of the form {{x >= k}} on which {{f^(-1)}} exists; state {{k}}, find {{f^(-1)(x)}}, and state the domain of {{f^(-1)}}. (b) State the vertical asymptotes, horizontal asymptote, y-intercept, and coordinates of the local maximum of {{y = 1/f(x)}}. (c) Solve analytically {{(x^2 - 4x - 5)/(x - 2) >= 0}}.",
          hints: [
            "Complete the square on {{f(x) = (x - 2)^2 - 9}} to find the vertex and pick the positive square root when inverting.",
            "Factor {{f(x) = (x - 5)(x + 1)}} to locate the zeros (vertical asymptotes of {{1/f(x)}}) and reciprocate the vertex {{(2, -9)}}.",
            "For part (c), build a sign chart across the critical points {{-1, 2, 5}}, remembering to EXCLUDE {{x = 2}}!",
          ],
          modelAnswer:
            "(a) Completing the square gives f(x) = (x − 2)² − 9 with vertex (2, −9). Thus the largest right-hand one-to-one domain has k = 2 (x ≥ 2), with range y ≥ −9. Swapping x and y gives (y − 2)² = x + 9; choosing the positive root because y ≥ 2 yields f⁻¹(x) = 2 + √(x + 9) with domain x ≥ −9.\n(b) Since f(x) = (x − 5)(x + 1), the graph of y = 1/f(x) has vertical asymptotes x = −1 and x = 5, horizontal asymptote y = 0, y-intercept (0, −1/5), and a local maximum at (2, −1/9) (reciprocating the local minimum (2, −9)).\n(c) Rewriting as (x − 5)(x + 1)/(x − 2) ≥ 0 gives critical values x = −1, 2, 5 (with x ≠ 2). Testing signs on (−∞, −1), (−1, 2), (2, 5), (5, ∞) gives (−), (+), (−), (+). Including numerator zeros and excluding the pole x = 2 yields −1 ≤ x < 2 or x ≥ 5.",
          markScheme: [
            { point: "A1: Completes square (x − 2)² − 9 and states k = 2.", keywords: ["(x - 2)² - 9", "k = 2"] },
            { point: "A1: Derives f⁻¹(x) = 2 + √(x + 9) selecting the positive root.", keywords: ["2 + √(x + 9)", "2 + sqrt(x + 9)"] },
            { point: "A1: States domain of f⁻¹ is x ≥ −9.", keywords: ["x ≥ -9", "x >= -9"] },
            { point: "A1: States VAs x = −1 and x = 5 and HA y = 0 for y = 1/f(x).", keywords: ["x = -1", "x = 5", "y = 0"] },
            { point: "A1: States y-intercept (0, −1/5).", keywords: ["(0, -1/5)", "-1/5"] },
            { point: "A1: Identifies local maximum at (2, −1/9).", keywords: ["(2, -1/9)", "-1/9"] },
            { point: "M1: Identifies critical values −1, 2, 5 with sign analysis of (x − 5)(x + 1)/(x − 2).", keywords: ["sign", "x ≠ 2"] },
            { point: "A1: Gives exact solution −1 ≤ x < 2 or x ≥ 5 (strict inequality at 2!).", keywords: ["-1 ≤ x < 2", "x ≥ 5"] },
          ],
          markbands: [
            { band: "Low", marks: [0, 2], descriptor: "Finds vertex and partial inverse or asymptotes with sign/domain errors." },
            { band: "Mid", marks: [3, 5], descriptor: "Completes restricted inverse accurately and identifies most features of 1/f(x), with slips in sign chart." },
            { band: "High", marks: [6, 8], descriptor: "Full precision across restricted inverse, reciprocal transformation features, and strict pole exclusion at x = 2." },
          ],
          commonError: "Writing −1 ≤ x ≤ 2 in part (c), forgetting that x = 2 makes the denominator zero.",
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2: GDC / TI-NSPIRE CX & HL EXTENDED
    // -------------------------------------------------------------------------
    {
      id: "2-functions-p2",
      title: "Practice Paper 2 — GDC / TI-Nspire CX & HL Extended",
      level: "SL",
      questions: [
        {
          id: "2-functions-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "quadratics-exponentials-rationals",
          question:
            "A bacteria culture grows according to {{N(t) = 400 e^(0.18t)}}, where {{t}} is time in hours. Calculate the time {{t}} (in hours, to 3 significant figures) when the population reaches {{2000}}.",
          answer: { type: "number", value: 8.94, tolerance: 0.02, display: "8.94" },
          hints: [
            "Divide both sides of {{400 e^(0.18t) = 2000}} by {{400}} first.",
            "Take natural logarithms of both sides to isolate {{0.18t}}.",
          ],
          solution: [
            "{{e^(0.18t) = 2000/400 = 5}}.",
            "{{0.18t = ln 5 => t = (ln 5)/0.18 ≈ 8.9413... ≈ 8.94}} hours (3 s.f.).",
          ],
        },
        {
          id: "2-functions-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Solve",
          guideRef: "functions-inverse-transforms",
          question:
            "Using your TI-Nspire CX GDC (intersection of {{y = e^x}} and {{y = 5 - x}}), find the unique real solution of {{e^x + x = 5}} correct to 3 significant figures.",
          answer: { type: "number", value: 1.31, tolerance: 0.015, display: "1.31" },
          hints: [
            "Plot {{f_1(x) = e^x}} and {{f_2(x) = 5 - x}} on a Graphs page and select Menu → Analyze Graph → Intersection.",
            "Check numerically near {{x = 1.3}}: {{e^1.3 + 1.3 ≈ 4.97}}.",
          ],
          solution: [
            "Graphing {{y = e^x}} and {{y = 5 - x}} on the TI-Nspire CX gives a unique intersection at {{(1.30656..., 3.69344...)}}.",
            "Rounding to 3 significant figures gives {{x = 1.31}}.",
          ],
        },
        {
          id: "2-functions-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "quadratics-exponentials-rationals",
          question:
            "A ball is thrown upward so its height (in metres) after {{t}} seconds is {{h(t) = -4.9t^2 + 19.6t + 1.5}}. Find the exact maximum height reached (in metres).",
          answer: { type: "number", value: 21.1, tolerance: 0.05 },
          hints: [
            "The maximum occurs at the vertex {{t = -b/(2a) = -19.6/(2(-4.9))}}.",
            "Substitute that value of {{t}} back into {{h(t)}}.",
          ],
          solution: [
            "Time of maximum height: {{t = -19.6/(-9.8) = 2}} s.",
            "Maximum height: {{h(2) = -4.9(4) + 19.6(2) + 1.5 = -19.6 + 39.2 + 1.5 = 21.1}} m.",
          ],
        },
        {
          id: "2-functions-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "functions-inverse-transforms",
          question: "Let {{f(x) = 2x - 1}} and {{g(x) = x^2 + 8}}. Find the positive value of {{x}} for which {{(f ∘ g)(x) = (g ∘ f)(x)}}.",
          answer: { type: "number", value: 3 },
          hints: [
            "Compute both composites explicitly: {{f(g(x)) = 2(x^2 + 8) - 1}} and {{g(f(x)) = (2x - 1)^2 + 8}}.",
            "Equate them, simplify to a quadratic equal to zero, and pick the positive root.",
          ],
          solution: [
            "{{f(g(x)) = 2x^2 + 15}} and {{g(f(x)) = 4x^2 - 4x + 9}}.",
            "Equating: {{4x^2 - 4x + 9 = 2x^2 + 15 => 2x^2 - 4x - 6 = 0 => (x - 3)(x + 1) = 0}}.",
            "The positive solution is {{x = 3}}.",
          ],
        },
        {
          id: "2-functions-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Solve",
          guideRef: "quadratics-exponentials-rationals",
          question: "Solve the logarithmic equation {{ln(x + 4) + ln(x - 2) = ln 7}} for real {{x}}.",
          answer: { type: "number", value: 3 },
          traps: [
            { spec: { type: "list", values: [-5, 3], ordered: false }, feedback: "Check the domain! {{x = -5}} lies outside the domain {{x > 2}} of {{ln(x - 2)}} — reject extraneous roots." },
          ],
          hints: [
            "Combine the left-hand side using {{ln A + ln B = ln(AB)}} and require {{x > 2}}.",
            "Solve {{(x + 4)(x - 2) = 7}} and discard any root outside the domain.",
          ],
          solution: [
            "Domain requires {{x + 4 > 0}} and {{x - 2 > 0}}, so {{x > 2}}.",
            "Combining logs: {{ln((x + 4)(x - 2)) = ln 7 => x^2 + 2x - 8 = 7 => x^2 + 2x - 15 = 0 => (x + 5)(x - 3) = 0}}.",
            "Rejecting {{x = -5}} (outside {{x > 2}}) leaves the unique solution {{x = 3}}.",
          ],
        },
        {
          id: "2-functions-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "polynomials-vieta-rationals-hl",
          question:
            "The rational function {{f(x) = (2x - 6)/(x^2 + bx + c)}} has vertical asymptotes {{x = -2}} and {{x = 5}}. Find the value of {{b + c}}.",
          answer: { type: "number", value: -13 },
          hints: [
            "The vertical asymptotes are the zeros of the denominator {{x^2 + bx + c}}.",
            "Expand {{(x + 2)(x - 5)}} to read off {{b}} and {{c}}.",
          ],
          solution: [
            "Denominator {{= (x + 2)(x - 5) = x^2 - 3x - 10}} (sharing no root with {{2x - 6}}).",
            "Thus {{b = -3}} and {{c = -10}}, giving {{b + c = -13}}.",
          ],
        },
        {
          id: "2-functions-p2-q07",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "quadratics-exponentials-rationals",
          question:
            "A heated metal rod cools in a workshop according to {{T(t) = 20 + A e^(-kt)}}, where {{T}} is temperature in °C and {{t >= 0}} is time in minutes. Initially {{T(0) = 140}} °C, and after {{10}} minutes the temperature is {{80}} °C. (a) Find the exact values of {{A}} and {{k}}. (b) Determine the exact time {{t}} when the rod cools to {{35}} °C. (c) Interpret the horizontal asymptote {{T = 20}} in context.",
          hints: [
            "Substitute {{t = 0}} first to obtain {{A}} immediately.",
            "Substitute {{t = 10, T = 80}} to get {{e^(-10k) = 1/2}}.",
            "Notice {{(35 - 20)/120 = 1/8 = (1/2)^3}} — giving a clean exact time!",
          ],
          modelAnswer:
            "(a) At t = 0: 20 + A = 140, so A = 120. At t = 10: 20 + 120 e^(−10k) = 80, giving 120 e^(−10k) = 60, so e^(−10k) = 1/2 and k = (ln 2)/10 (≈ 0.0693 min⁻¹).\n(b) Set 20 + 120 e^(−kt) = 35, so 120 e^(−kt) = 15 and e^(−kt) = 1/8 = (1/2)³. Thus kt = 3 ln 2, so t = (3 ln 2) / ((ln 2)/10) = 30 minutes.\n(c) The horizontal asymptote T = 20 represents the constant ambient room temperature (20 °C) of the workshop that the rod approaches as t → ∞.",
          markScheme: [
            { point: "A1: Finds A = 120 from initial condition T(0) = 140.", keywords: ["a = 120", "120"] },
            { point: "M1: Substitutes t = 10, T = 80 to obtain e^(−10k) = 1/2.", keywords: ["1/2", "e^(-10k)"] },
            { point: "A1: Finds exact k = (ln 2)/10.", keywords: ["(ln 2)/10", "ln 2)/10", "0.0693"] },
            { point: "M1: Sets 20 + 120 e^(−kt) = 35 to obtain e^(−kt) = 1/8.", keywords: ["1/8", "15"] },
            { point: "A1: Solves to obtain exact time t = 30 minutes.", keywords: ["30"] },
            { point: "A1: Interprets T = 20 as the ambient room temperature approached as t → ∞.", keywords: ["room temperature", "ambient"] },
          ],
          markbands: [
            { band: "Low", marks: [0, 2], descriptor: "Finds A = 120 and sets up exponential equation with algebraic slips." },
            { band: "Mid", marks: [3, 4], descriptor: "Determines A and k accurately and attempts part (b) with rounding or sign slip." },
            { band: "High", marks: [5, 6], descriptor: "Exact values of A, k, and t = 30 minutes plus clear physical interpretation of the asymptote." },
          ],
          commonError: "Setting A = 140 instead of subtracting the equilibrium offset 20 (A = 140 − 20 = 120).",
        },
        {
          id: "2-functions-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "polynomials-vieta-rationals-hl",
          question:
            "A real cubic polynomial {{P(x) = x^3 + px^2 + qx + r}} has roots {{4}} and {{-1 + 3i}}. Find the exact value of {{p + q + r}}.",
          answer: { type: "number", value: -40 },
          hints: [
            "The third root is the complex conjugate {{-1 - 3i}}, giving the quadratic factor {{(x + 1)^2 + 9 = x^2 + 2x + 10}}.",
            "Expand {{(x - 4)(x^2 + 2x + 10)}} or evaluate {{P(1) - 1}} directly!",
          ],
          solution: [
            "Conjugate root {{-1 - 3i}} gives factor {{(x + 1)^2 + 9 = x^2 + 2x + 10}}.",
            "{{P(x) = (x - 4)(x^2 + 2x + 10) = x^3 - 2x^2 + 2x - 40}}.",
            "Therefore {{p + q + r = -2 + 2 - 40 = -40}}.",
          ],
        },
        {
          id: "2-functions-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "modulus-reciprocal-even-odd-hl",
          question:
            "The polynomial {{P(x) = x^4 + ax^3 + bx^2 + cx + 4}} is an **even** function and satisfies {{P(1) = 2}}. Find the value of {{a + b + c}}.",
          answer: { type: "number", value: -3 },
          hints: [
            "For a polynomial to be even ({{P(-x) = P(x)}}), every odd-power coefficient must equal zero.",
            "Once {{a = c = 0}}, substitute {{x = 1}} to find {{b}}.",
          ],
          solution: [
            "Even symmetry requires all odd-power terms to vanish: {{a = 0}} and {{c = 0}}.",
            "From {{P(1) = 1 + b + 4 = 2}}, we get {{b = -3}}, hence {{a + b + c = -3}}.",
          ],
        },
        {
          id: "2-functions-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "modulus-reciprocal-even-odd-hl",
          question:
            "A smooth function {{f}} has a local minimum at {{(3, -2)}}. Let {{y_1}} be the y-coordinate of the corresponding local maximum on {{y = |f(x)|}} and {{y_2}} be the y-coordinate of the corresponding local maximum on {{y = 1/f(x)}}. Find {{y_1 + y_2}}.",
          answer: { type: "number", value: 1.5, allowFraction: true },
          traps: [
            { spec: { type: "number", value: 2.5 }, feedback: "Reciprocating {{-2}} keeps its negative sign: {{y_2 = -1/2}}, not {{+1/2}}!" },
          ],
          hints: [
            "Reflecting {{(3, -2)}} above the x-axis gives {{y_1 = |-2| = 2}}.",
            "Taking the reciprocal gives {{y_2 = 1/(-2) = -0.5}}.",
          ],
          solution: [
            "On {{y = |f(x)|}}, the negative minimum {{(3, -2)}} reflects to a local maximum at {{(3, 2)}}, so {{y_1 = 2}}.",
            "On {{y = 1/f(x)}}, {{(3, -2)}} reciprocates to a local maximum at {{(3, -1/2)}}, so {{y_2 = -0.5}}.",
            "Therefore {{y_1 + y_2 = 2 + (-0.5) = 1.5}}.",
          ],
        },
        {
          id: "2-functions-p2-q11",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Solve",
          guideRef: "modulus-reciprocal-even-odd-hl",
          question: "Solve {{|3x - 2| = |x + 6|}} and enter both solutions as a comma-separated list.",
          answer: { type: "list", values: [-1, 4], ordered: false, display: "-1, 4" },
          hints: [
            "{{|A| = |B|}} holds iff {{A = B}} or {{A = -B}}.",
            "Solve both linear equations: {{3x - 2 = x + 6}} and {{3x - 2 = -(x + 6)}}.",
          ],
          solution: [
            "Case 1: {{3x - 2 = x + 6 => 2x = 8 => x = 4}}.",
            "Case 2: {{3x - 2 = -x - 6 => 4x = -4 => x = -1}}.",
            "The solutions are {{-1}} and {{4}}.",
          ],
        },
        {
          id: "2-functions-p2-q12",
          kind: "written",
          marks: 5,
          difficulty: "core",
          level: "SL",
          commandTerm: "Solve",
          guideRef: "functions-inverse-transforms",
          question:
            "Let {{f(x) = (2x + 1)/(x - 3)}} ({{x != 3}}) and {{g(x) = 3x - 4}}. (a) Find {{f^(-1)(x)}} and state its domain and range. (b) Solve {{(f ∘ g)(x) = 5}} analytically, giving your answer as an exact fraction.",
          hints: [
            "Swap {{x}} and {{y}} in {{y = (2x + 1)/(x - 3)}} and solve for {{y}}.",
            "For part (b), apply {{f^(-1)}} to both sides: {{(f ∘ g)(x) = 5 <=> g(x) = f^(-1)(5)}}!",
          ],
          modelAnswer:
            "(a) Swap x and y: x = (2y + 1)/(y − 3), so xy − 3x = 2y + 1, giving y(x − 2) = 3x + 1 and f⁻¹(x) = (3x + 1)/(x − 2). Domain of f⁻¹ is x ∈ ℝ, x ≠ 2 (horizontal asymptote of f); range of f⁻¹ is y ∈ ℝ, y ≠ 3 (domain exclusion of f).\n(b) Applying f⁻¹ to both sides of f(g(x)) = 5 gives g(x) = f⁻¹(5) = (3(5) + 1)/(5 − 2) = 16/3. Solving 3x − 4 = 16/3 yields 3x = 28/3, so x = 28/9.",
          markScheme: [
            { point: "M1: Swaps x and y and collects y-terms: y(x − 2) = 3x + 1.", keywords: ["y(x - 2)", "3x + 1"] },
            { point: "A1: Obtains f⁻¹(x) = (3x + 1)/(x − 2).", keywords: ["(3x + 1)/(x - 2)"] },
            { point: "A1: States both domain x ≠ 2 and range y ≠ 3.", keywords: ["x ≠ 2", "y ≠ 3"] },
            { point: "M1: Evaluates f⁻¹(5) = 16/3 (or expands f(3x − 4) = 5) and sets up linear equation.", keywords: ["16/3", "28/3"] },
            { point: "A1: Obtains exact fraction x = 28/9.", keywords: ["28/9"] },
          ],
          commonError: "Swapping the domain and range exclusions of f⁻¹ (writing x ≠ 3 instead of x ≠ 2).",
        },
        {
          id: "2-functions-p2-q13",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "HL",
          commandTerm: "Solve",
          guideRef: "polynomials-vieta-rationals-hl",
          question:
            "The cubic {{P(x) = 2x^3 + ax^2 + bx - 6}} leaves remainder {{12}} when divided by {{(x - 2)}} and has {{(x + 1)}} as a factor. (a) Find the values of {{a}} and {{b}}. (b) Fully factorise {{P(x)}} and hence state all roots of {{P(x) = 0}}.",
          hints: [
            "Form two linear equations from {{P(2) = 12}} and {{P(-1) = 0}}.",
            "Once you have {{P(x)}}, divide out the known factor {{(x + 1)}} to get a quadratic, then factorise it.",
          ],
          modelAnswer:
            "(a) By the Remainder Theorem, P(2) = 16 + 4a + 2b − 6 = 12, giving 4a + 2b = 2, so 2a + b = 1. By the Factor Theorem, P(−1) = −2 + a − b − 6 = 0, giving a − b = 8. Adding the two equations gives 3a = 9, so a = 3, and b = a − 8 = −5.\n(b) Thus P(x) = 2x³ + 3x² − 5x − 6. Dividing by (x + 1) yields 2x² + x − 6 = (2x − 3)(x + 2). Therefore P(x) = (x + 1)(x + 2)(2x − 3), and the roots are x = −2, x = −1, and x = 3/2.",
          markScheme: [
            { point: "M1: Forms 2a + b = 1 from P(2) = 12.", keywords: ["2a + b = 1", "4a + 2b = 2"] },
            { point: "M1: Forms a − b = 8 from P(−1) = 0.", keywords: ["a - b = 8"] },
            { point: "A1: Solves simultaneously to find a = 3 and b = −5.", keywords: ["a = 3", "b = -5"] },
            { point: "M1: Divides 2x³ + 3x² − 5x − 6 by (x + 1) to obtain quotient 2x² + x − 6.", keywords: ["2x² + x - 6", "2x^2 + x - 6"] },
            { point: "A1: Fully factorises as (x + 1)(x + 2)(2x − 3).", keywords: ["(2x - 3)(x + 2)", "(x + 1)(x + 2)(2x - 3)"] },
            { point: "A1: Lists all three roots x = −2, −1, 3/2.", keywords: ["3/2", "-2"] },
          ],
          markbands: [
            { band: "Low", marks: [0, 2], descriptor: "Sets up Remainder/Factor Theorem equations with sign errors." },
            { band: "Mid", marks: [3, 4], descriptor: "Finds a = 3, b = −5 and divides out (x + 1) cleanly." },
            { band: "High", marks: [5, 6], descriptor: "Complete factorisation and accurate root list with clear working." },
          ],
          commonError: "Evaluating P(1) instead of P(−1) for the factor (x + 1).",
        },
        {
          id: "2-functions-p2-q14",
          kind: "written",
          marks: 7,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Show that",
          guideRef: "polynomials-vieta-rationals-hl",
          question:
            "Consider {{f(x) = (x - 1)/(x^2 - 2x - 3)}}. (a) State the equations of all asymptotes and the coordinates of the x- and y-intercepts. (b) Using the discriminant method, prove that the range of {{f}} is all real numbers {{ℝ}}. (c) State whether the graph crosses its horizontal asymptote and justify your answer.",
          hints: [
            "Factorise the denominator {{x^2 - 2x - 3 = (x - 3)(x + 1)}} for the vertical asymptotes.",
            "In part (b), handle {{y = 0}} separately first, then check the sign of {{Δ}} of {{yx^2 - (2y + 1)x + (1 - 3y) = 0}} for {{y != 0}}.",
            "Show that {{Δ = 16y^2 + 1 > 0}} for every non-zero real {{y}}.",
          ],
          modelAnswer:
            "(a) Denominator factors as (x − 3)(x + 1), giving vertical asymptotes x = −1 and x = 3. Since degree(numerator) < degree(denominator), the horizontal asymptote is y = 0. Setting x − 1 = 0 gives x-intercept (1, 0); setting x = 0 gives y-intercept (0, 1/3).\n(b) Set y = (x − 1)/(x² − 2x − 3), so yx² − (2y + 1)x + (1 − 3y) = 0. When y = 0, −x + 1 = 0 yields x = 1 (valid since 1 ≠ −1, 3), so 0 is in the range. For y ≠ 0, the discriminant is Δ = (2y + 1)² − 4y(1 − 3y) = 4y² + 4y + 1 − 4y + 12y² = 16y² + 1 > 0 for all y ∈ ℝ. Moreover, neither x = −1 nor x = 3 solves the rearranged equation (since 0 ≠ −2 and 0 ≠ 2), so every real y has real pre-images; hence the range is ℝ.\n(c) Yes — the curve crosses its horizontal asymptote y = 0 at the x-intercept (1, 0), because asymptotes govern behaviour as |x| → ∞ and do not forbid finite crossings.",
          markScheme: [
            { point: "A1: Identifies vertical asymptotes x = −1 and x = 3 and horizontal asymptote y = 0.", keywords: ["x = -1", "x = 3", "y = 0"] },
            { point: "A1: Finds x-intercept (1, 0) and y-intercept (0, 1/3).", keywords: ["(1, 0)", "(0, 1/3)"] },
            { point: "M1: Rearranges into quadratic yx² − (2y + 1)x + (1 − 3y) = 0.", keywords: ["(2y + 1)x", "(1 - 3y)"] },
            { point: "A1: Explicitly verifies y = 0 lies in the range via x = 1.", keywords: ["y = 0", "x = 1"] },
            { point: "M1: Computes discriminant Δ = (2y + 1)² − 4y(1 − 3y).", keywords: ["(2y + 1)²", "4y(1 - 3y)"] },
            { point: "A1: Simplifies to Δ = 16y² + 1 > 0 for all y, concluding range is ℝ.", keywords: ["16y² + 1", "16y^2 + 1"] },
            { point: "R1: Concludes curve crosses HA y = 0 at (1, 0) since asymptotes describe |x| → ∞.", keywords: ["crosses", "(1, 0)"] },
          ],
          markbands: [
            { band: "Low", marks: [0, 2], descriptor: "States asymptotes/intercepts accurately but struggles to form quadratic in x." },
            { band: "Mid", marks: [3, 5], descriptor: "Derives Δ = 16y² + 1 > 0 cleanly, missing separate y = 0 case or crossing justification." },
            { band: "High", marks: [6, 7], descriptor: "Complete, rigorous range proof including y = 0 check and full justification of HA crossing." },
          ],
          commonError: "Forgetting to treat y = 0 separately when y is the leading coefficient of yx² − (2y + 1)x + (1 − 3y) = 0.",
        },
        {
          id: "2-functions-p2-q15",
          kind: "written",
          marks: 8,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "modulus-reciprocal-even-odd-hl",
          question:
            "Consider the function {{f(x) = |2x - 4| - x + 1}}. (a) Express {{f(x)}} in piecewise linear form and find the coordinates of its corner point and both x-intercepts. (b) Solve the inequality {{f(x) <= 3}} analytically. (c) Determine the set of real values of {{k}} for which the equation {{f(x) = k}} has exactly two distinct real solutions.",
          hints: [
            "Split at the point where {{2x - 4 = 0}}, namely {{x = 2}}.",
            "Solve {{f(x) <= 3}} separately on {{x >= 2}} and {{x < 2}}, then merge the two intervals.",
            "Sketch the V-shaped graph with slopes {{-3}} and {{+1}} meeting at {{(2, -1)}} to read off part (c).",
          ],
          modelAnswer:
            "(a) At x = 2, 2x − 4 changes sign. For x ≥ 2: f(x) = (2x − 4) − x + 1 = x − 3. For x < 2: f(x) = −(2x − 4) − x + 1 = −3x + 5. The corner (minimum) point is (2, −1). Setting x − 3 = 0 gives x = 3 (valid since 3 ≥ 2), and setting −3x + 5 = 0 gives x = 5/3 (valid since 5/3 < 2); hence the x-intercepts are (5/3, 0) and (3, 0).\n(b) For x ≥ 2: x − 3 ≤ 3 gives 2 ≤ x ≤ 6. For x < 2: −3x + 5 ≤ 3 gives −3x ≤ −2, so x ≥ 2/3, giving 2/3 ≤ x < 2. Combining both pieces yields 2/3 ≤ x ≤ 6.\n(c) Because f decreases linearly from +∞ to its global minimum (2, −1) and then increases linearly to +∞, the horizontal line y = k cuts the graph twice if and only if k > −1.",
          markScheme: [
            { point: "A1: Correctly derives branch f(x) = x − 3 for x ≥ 2.", keywords: ["x - 3"] },
            { point: "A1: Correctly derives branch f(x) = −3x + 5 for x < 2.", keywords: ["-3x + 5"] },
            { point: "A1: Identifies corner point (2, −1).", keywords: ["(2, -1)"] },
            { point: "A1: Finds both x-intercepts (5/3, 0) and (3, 0).", keywords: ["5/3", "(3, 0)"] },
            { point: "M1: Solves f(x) ≤ 3 on x ≥ 2 to obtain 2 ≤ x ≤ 6.", keywords: ["x ≤ 6", "x <= 6"] },
            { point: "M1: Solves f(x) ≤ 3 on x < 2 to obtain 2/3 ≤ x < 2.", keywords: ["2/3"] },
            { point: "A1: Merges intervals cleanly to 2/3 ≤ x ≤ 6.", keywords: ["2/3 ≤ x ≤ 6", "2/3 <= x <= 6"] },
            { point: "A1: Deduces k > −1 from global minimum at y = −1.", keywords: ["k > -1"] },
          ],
          markbands: [
            { band: "Low", marks: [0, 2], descriptor: "Splits modulus at x = 2 with sign errors in one piecewise branch." },
            { band: "Mid", marks: [3, 5], descriptor: "Finds accurate piecewise form, corner point, and intercepts, with partial inequality solution." },
            { band: "High", marks: [6, 8], descriptor: "Complete piecewise analysis, exact interval 2/3 ≤ x ≤ 6, and justified condition k > −1." },
          ],
          commonError: "Forgetting to check that each candidate root lies inside the domain of its respective branch, or writing k ≥ −1 (when k = −1 gives only ONE solution at x = 2!).",
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 Qs — ALL difficulty: "challenge"; 4 short + 4 written)
  // ===========================================================================
  challenge: [
    {
      id: "2-functions-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "functions-inverse-transforms",
      question: "Let {{f(x) = (x + 1)/(x - 1)}} ({{x != 1}}) and {{g(x) = 2x - 3}}. Find the exact value of {{(f ∘ f ∘ g)(5)}}.",
      answer: { type: "number", value: 7 },
      hints: [
        "Before expanding fractions, check what {{f(f(u))}} simplifies to!",
        "Notice {{f(x) = (1x + 1)/(1x - 1)}} has {{a + d = 1 + (-1) = 0}}, so {{f}} is self-inverse.",
      ],
      solution: [
        "Verify {{f}} is self-inverse: {{f(f(u)) = ((u+1)/(u-1) + 1)/((u+1)/(u-1) - 1) = (2u)/2 = u}} for {{u != 1}}.",
        "Hence {{(f ∘ f ∘ g)(5) = g(5) = 2(5) - 3 = 7}}.",
      ],
    },
    {
      id: "2-functions-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Find",
      guideRef: "polynomials-vieta-rationals-hl",
      question: "The three roots of the cubic equation {{x^3 - 9x^2 + kx - 24 = 0}} form an arithmetic sequence. Find the exact value of {{k}}.",
      answer: { type: "number", value: 26 },
      hints: [
        "Write the three roots symmetrically as {{a - d}}, {{a}}, and {{a + d}}.",
        "Use Vieta's sum of roots to find the middle root {{a}} immediately, then substitute {{x = a}} into the cubic!",
      ],
      solution: [
        "Let the roots be {{a - d, a, a + d}}. By Vieta, {{(a - d) + a + (a + d) = 3a = 9 => a = 3}}.",
        "Since {{x = 3}} is a root, {{3^3 - 9(3^2) + 3k - 24 = 0 => 27 - 81 + 3k - 24 = 0 => 3k = 78 => k = 26}}.",
      ],
    },
    {
      id: "2-functions-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Find",
      guideRef: "polynomials-vieta-rationals-hl",
      question:
        "A polynomial {{P(x)}} leaves remainder {{5}} when divided by {{(x - 2)}} and remainder {{-7}} when divided by {{(x + 1)}}. Find the simplified linear remainder when {{P(x)}} is divided by {{(x - 2)(x + 1)}}.",
      answer: { type: "expression", expr: "4x - 3", form: "simplified" },
      hints: [
        "Write {{P(x) = (x - 2)(x + 1)Q(x) + Ax + B}}, because dividing by a quadratic leaves a remainder of degree at most {{1}}.",
        "Evaluate at {{x = 2}} and {{x = -1}} to solve for {{A}} and {{B}}.",
      ],
      solution: [
        "Set {{R(x) = Ax + B}}. Then {{P(2) = 2A + B = 5}} and {{P(-1) = -A + B = -7}}.",
        "Subtracting gives {{3A = 12 => A = 4}}, and {{B = -7 + 4 = -3}}.",
        "The remainder is {{4x - 3}}.",
      ],
    },
    {
      id: "2-functions-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "modulus-reciprocal-even-odd-hl",
      question: "Find the sum of all distinct real solutions to the equation {{|x^2 - 6x + 5| = 3}}.",
      answer: { type: "number", value: 12 },
      hints: [
        "Split into two quadratic equations: {{x^2 - 6x + 5 = 3}} and {{x^2 - 6x + 5 = -3}}.",
        "Check that BOTH quadratics have positive discriminants, then sum their roots via Vieta's formula {{-b/a}}!",
      ],
      solution: [
        "Equation 1: {{x^2 - 6x + 2 = 0}} has {{Δ = 36 - 8 = 28 > 0}} (two real roots summing to {{6}}).",
        "Equation 2: {{x^2 - 6x + 8 = 0 => (x - 2)(x - 4) = 0}} (two real roots summing to {{6}}).",
        "All four roots are distinct, so the total sum is {{6 + 6 = 12}}.",
      ],
    },
    {
      id: "2-functions-ch-q05",
      kind: "written",
      marks: 6,
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Find",
      guideRef: "quadratics-exponentials-rationals",
      question:
        "Find the exact set of real values of {{m}} for which the graph of {{y = mx^2 + (m + 2)x + m}} lies strictly below the line {{y = 2x - 1}} for ALL {{x ∈ ℝ}}.",
      hints: [
        "Rewrite the condition as a single inequality {{mx^2 + mx + (m + 1) < 0}} for all {{x ∈ ℝ}}.",
        "Test {{m = 0}} separately, then impose BOTH {{m < 0}} (opens downward) AND {{Δ < 0}}!",
        "Factor {{-3m^2 - 4m < 0}} carefully and intersect with {{m < 0}}.",
      ],
      modelAnswer:
        "The curve lies strictly below the line iff mx² + (m + 2)x + m < 2x − 1 for all x ∈ ℝ, which simplifies to mx² + mx + (m + 1) < 0 for all x ∈ ℝ.\nCheck the degenerate case m = 0: the inequality becomes 1 < 0, which is false, so m ≠ 0.\nFor a quadratic to be strictly negative for all real x, it must open downward (m < 0) AND have no real roots (Δ < 0).\nCompute Δ = m² − 4m(m + 1) = −3m² − 4m < 0. Multiplying by −1 reverses the inequality: 3m² + 4m = m(3m + 4) > 0, giving m < −4/3 or m > 0.\nIntersecting with m < 0 yields the final solution set m < −4/3.",
      markScheme: [
        { point: "M1: Simplifies mx² + (m + 2)x + m < 2x − 1 to mx² + mx + (m + 1) < 0.", keywords: ["mx² + mx + (m + 1)", "mx^2 + mx"] },
        { point: "A1: Explicitly tests and rejects degenerate case m = 0 (gives 1 < 0).", keywords: ["1 < 0", "m = 0"] },
        { point: "M1: States both conditions for strict negativity: m < 0 and Δ < 0.", keywords: ["m < 0", "open downward"] },
        { point: "M1: Forms discriminant Δ = m² − 4m(m + 1) = −3m² − 4m.", keywords: ["-3m² - 4m", "3m² + 4m"] },
        { point: "A1: Solves m(3m + 4) > 0 to get m < −4/3 or m > 0.", keywords: ["m(3m + 4)", "-4/3"] },
        { point: "A1: Intersects with m < 0 to conclude m < −4/3.", keywords: ["m < -4/3"] },
      ],
      markbands: [
        { band: "Low", marks: [0, 2], descriptor: "Rearranges inequality cleanly but misses m < 0 or makes discriminant sign errors." },
        { band: "Mid", marks: [3, 4], descriptor: "Solves Δ < 0 accurately, omitting either m = 0 check or intersection with m < 0." },
        { band: "High", marks: [5, 6], descriptor: "Complete analysis including m = 0 check, downward-opening condition, and final interval m < −4/3." },
      ],
      commonError: "Including m > 0 in the final answer — when m > 0 and Δ < 0, the curve lies strictly ABOVE the line, not below!",
    },
    {
      id: "2-functions-ch-q06",
      kind: "written",
      marks: 7,
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "polynomials-vieta-rationals-hl",
      question:
        "The cubic equation {{x^3 - 4x^2 + 5x - 3 = 0}} has roots {{α, β, γ}}. (a) State the values of {{α + β + γ}}, {{αβ + βγ + γα}}, and {{αβγ}}. (b) Find exact values of {{α^2 + β^2 + γ^2}} and {{1/α + 1/β + 1/γ}}. (c) Hence determine a monic cubic equation in {{w}} with integer coefficients whose roots are {{α + 1}}, {{β + 1}}, and {{γ + 1}}.",
      hints: [
        "Apply Vieta's formulas to read off the three elementary symmetric sums directly.",
        "For part (c), either substitute {{x = w - 1}} into the original cubic OR compute the three new symmetric sums directly!",
        "Check your final cubic by comparing both methods.",
      ],
      modelAnswer:
        "(a) By Vieta's formulas: α + β + γ = 4, αβ + βγ + γα = 5, and αβγ = 3.\n(b) α² + β² + γ² = (α + β + γ)² − 2(αβ + βγ + γα) = 4² − 2(5) = 16 − 10 = 6. Also 1/α + 1/β + 1/γ = (αβ + βγ + γα)/(αβγ) = 5/3 (exact fraction).\n(c) Let w = x + 1, so x = w − 1. Substituting into x³ − 4x² + 5x − 3 = 0 gives (w − 1)³ − 4(w − 1)² + 5(w − 1) − 3 = 0. Expanding: (w³ − 3w² + 3w − 1) − (4w² − 8w + 4) + (5w − 5) − 3 = 0, which simplifies to w³ − 7w² + 16w − 13 = 0. (Check via Vieta: new sum = 4 + 3 = 7, new pairwise sum = 5 + 8 + 3 = 16, new product = 3 + 5 + 4 + 1 = 13.)",
      markScheme: [
        { point: "A1: Correctly states Σα = 4, Σαβ = 5, and αβγ = 3.", keywords: ["= 4", "= 5", "= 3"] },
        { point: "A1: Computes α² + β² + γ² = 16 − 10 = 6.", keywords: ["16 - 10 = 6", "16 - 10"] },
        { point: "A1: Computes 1/α + 1/β + 1/γ = 5/3.", keywords: ["= 5/3", "5/3"] },
        { point: "M1: Sets x = w − 1 (or sets up new symmetric sums of α + 1, β + 1, γ + 1).", keywords: ["w - 1", "new sum"] },
        { point: "A1: Finds coefficient −7 of w².", keywords: ["-7w²", "-7w^2", "- 7w²", "- 7w^2"] },
        { point: "A1: Finds coefficient +16 of w.", keywords: ["16w", "= 16"] },
        { point: "A1: Finds constant term −13 to state w³ − 7w² + 16w − 13 = 0.", keywords: ["- 13 = 0", "-13"] },
      ],
      markbands: [
        { band: "Low", marks: [0, 2], descriptor: "States basic Vieta sums with slips in signs or derived symmetric identities." },
        { band: "Mid", marks: [3, 5], descriptor: "Completes parts (a) and (b) cleanly and initiates the root-shift substitution." },
        { band: "High", marks: [6, 7], descriptor: "Exact values throughout and fully simplified monic cubic w³ − 7w² + 16w − 13 = 0." },
      ],
      commonError: "Substituting x = w + 1 instead of x = w − 1 when shifting roots upward by +1!",
    },
    {
      id: "2-functions-ch-q07",
      kind: "written",
      marks: 7,
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Solve",
      guideRef: "modulus-reciprocal-even-odd-hl",
      question:
        "Consider {{f(x) = (2x^2 - 7x + 3)/(x - 1)}} for {{x != 1}}. (a) Write {{f(x)}} in the form {{ax + b + c/(x - 1)}} and state all asymptotes. (b) Prove using the discriminant method that the range of {{f}} is all real numbers {{ℝ}}. (c) Solve the inequality {{f(x) >= x - 3}} analytically.",
      hints: [
        "Divide {{2x^2 - 7x + 3}} by {{(x - 1)}} to obtain {{2x - 5 - 2/(x - 1)}}.",
        "In part (b), complete the square on the discriminant in {{y}} to show {{Δ = (y + 3)^2 + 16 > 0}} always!",
        "In part (c), move {{(x - 3)}} to the left-hand side and combine over {{(x - 1)}} — NEVER multiply by {{(x - 1)}}!",
      ],
      modelAnswer:
        "(a) Polynomial division gives 2x² − 7x + 3 = (2x − 5)(x − 1) − 2, so f(x) = 2x − 5 − 2/(x − 1). Vertical asymptote is x = 1; oblique asymptote is y = 2x − 5.\n(b) Set y = (2x² − 7x + 3)/(x − 1), giving 2x² − (7 + y)x + (3 + y) = 0. Its discriminant is Δ = (7 + y)² − 8(3 + y) = y² + 14y + 49 − 24 − 8y = y² + 6y + 25 = (y + 3)² + 16 ≥ 16 > 0 for every y ∈ ℝ. Also x = 1 never satisfies the equation (0 ≠ −2), so every real y is attained and the range is ℝ.\n(c) Subtract (x − 3) from both sides: [(2x² − 7x + 3) − (x − 3)(x − 1)]/(x − 1) ≥ 0, which simplifies to [(2x² − 7x + 3) − (x² − 4x + 3)]/(x − 1) = x(x − 3)/(x − 1) ≥ 0. Critical values are x = 0, 1, 3 (excluding x = 1). A sign chart gives (−) on (−∞, 0), (+) on [0, 1), (−) on (1, 3), and (+) on [3, ∞). Hence 0 ≤ x < 1 or x ≥ 3.",
      markScheme: [
        { point: "A1: Divides accurately to get f(x) = 2x − 5 − 2/(x − 1).", keywords: ["2x - 5 - 2/(x - 1)", "2x - 5"] },
        { point: "A1: States VA x = 1 and oblique asymptote y = 2x − 5.", keywords: ["x = 1", "y = 2x - 5"] },
        { point: "M1: Rearranges into 2x² − (7 + y)x + (3 + y) = 0 and forms discriminant.", keywords: ["(7 + y)", "8(3 + y)"] },
        { point: "A1: Completes square to Δ = (y + 3)² + 16 > 0 for all y, concluding range ℝ.", keywords: ["y² + 6y + 25", "(y + 3)² + 16"] },
        { point: "M1: Combines f(x) − (x − 3) ≥ 0 over common denominator (x − 1).", keywords: ["(x - 3)(x - 1)", "x² - 4x + 3"] },
        { point: "A1: Simplifies inequality to x(x − 3)/(x − 1) ≥ 0.", keywords: ["x(x - 3)/(x - 1)"] },
        { point: "A1: Uses sign chart with x ≠ 1 to conclude 0 ≤ x < 1 or x ≥ 3.", keywords: ["0 ≤ x < 1", "x ≥ 3"] },
      ],
      markbands: [
        { band: "Low", marks: [0, 2], descriptor: "Completes division and asymptotes, struggling with discriminant proof or sign chart." },
        { band: "Mid", marks: [3, 5], descriptor: "Proves Δ > 0 cleanly and simplifies the rational inequality, with endpoint/sign slips." },
        { band: "High", marks: [6, 7], descriptor: "Complete, rigorous proof of range ℝ and exact inequality solution 0 ≤ x < 1 or x ≥ 3." },
      ],
      commonError: "Multiplying f(x) ≥ x − 3 by (x − 1), which discards the interval 0 ≤ x < 1 where x − 1 < 0!",
    },
    {
      id: "2-functions-ch-q08",
      kind: "written",
      marks: 8,
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Prove",
      guideRef: "modulus-reciprocal-even-odd-hl",
      question:
        "Let {{f}} be any real-valued function defined on {{ℝ}}, and define {{E(x) = (f(x) + f(-x))/2}} and {{O(x) = (f(x) - f(-x))/2}}. (a) Prove that {{E}} is even, {{O}} is odd, and {{f(x) = E(x) + O(x)}} for all {{x ∈ ℝ}}. (b) Prove that this decomposition of {{f}} into the sum of an even function and an odd function is UNIQUE. (c) Apply this decomposition to {{f(x) = e^x}}, and prove that {{[E(x)]^2 - [O(x)]^2 = 1}} for all {{x ∈ ℝ}}.",
      hints: [
        "For part (a), compute {{E(-x)}} and {{O(-x)}} directly from the definitions.",
        "For part (b), suppose {{f(x) = G(x) + H(x)}} where {{G}} is even and {{H}} is odd; evaluate {{f(-x)}}, then add and subtract the two equations!",
        "For part (c), expand {{[(e^x + e^(-x))/2]^2 - [(e^x - e^(-x))/2]^2}} or factor via difference of squares!",
      ],
      modelAnswer:
        "(a) Replacing x with −x in E gives E(−x) = (f(−x) + f(x))/2, which equals E(x), proving E is even. Replacing x with −x in O gives O(−x) = (f(−x) − f(x))/2 = −(f(x) − f(−x))/2, which equals −O(x), proving O is odd. Summing them cancels f(−x) and yields (2f(x))/2 = f(x) identically.\n(b) Suppose another decomposition f(x) = G(x) + H(x) exists with G even and H odd. Substituting −x gives f(−x) = G(−x) + H(−x) = G(x) − H(x). Adding the equations gives 2G(x) = f(x) + f(−x), forcing G(x) = E(x). Subtracting gives 2H(x) = f(x) − f(−x), forcing H(x) = O(x). Hence the decomposition is unique.\n(c) For f(x) = e^x, E(x) = (e^x + e^(−x))/2 and O(x) = (e^x − e^(−x))/2. Factoring by difference of squares: [E(x)]² − [O(x)]² = [E(x) + O(x)][E(x) − O(x)] = (e^x)(e^(−x)) = e^0 = 1.",
      markScheme: [
        { point: "A1: Proves E(−x) = E(x) directly from definition.", keywords: ["equals e(x)", "proving e is even"] },
        { point: "A1: Proves O(−x) = −O(x) directly from definition.", keywords: ["equals -o(x)", "proving o is odd"] },
        { point: "A1: Verifies E(x) + O(x) = (2f(x))/2 = f(x).", keywords: ["2f(x)", "cancels"] },
        { point: "M1: Assumes second decomposition G + H and deduces f(−x) = G(x) − H(x).", keywords: ["g(x) - h(x)", "another decomposition"] },
        { point: "A1: Adds equations to show 2G(x) = f(x) + f(−x), forcing G = E.", keywords: ["2g(x)", "forcing g(x)"] },
        { point: "A1: Subtracts equations to show 2H(x) = f(x) − f(−x), proving uniqueness.", keywords: ["2h(x)", "forcing h(x)"] },
        { point: "A1: Writes E(x) = (e^x + e^(−x))/2 and O(x) = (e^x − e^(−x))/2.", keywords: ["(e^x + e^(-x))/2", "(e^x - e^(-x))/2"] },
        { point: "A1: Proves [E(x)]² − [O(x)]² = e^x · e^(−x) = 1 cleanly.", keywords: ["e^0 = 1", "difference of squares"] },
      ],
      markbands: [
        { band: "Low", marks: [0, 2], descriptor: "Verifies parity of E and O in part (a) but cannot structure the uniqueness proof." },
        { band: "Mid", marks: [3, 5], descriptor: "Completes part (a) and part (c) cleanly, with partial progress on uniqueness." },
        { band: "High", marks: [6, 8], descriptor: "Rigorous, airtight proofs for existence, uniqueness, and the hyperbolic identity for e^x." },
      ],
      commonError: "Testing uniqueness only on a specific example like f(x) = x² + x instead of assuming an arbitrary second decomposition E₁ + O₁.",
    },
  ],
};
