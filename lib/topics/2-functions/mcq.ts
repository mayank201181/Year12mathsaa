import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1 (SL CORE) — answerIndex spread: [4, 4, 4, 3]
  // ===========================================================================
  {
    id: "2-functions-m1",
    title: "MCQ Paper 1 — SL Core: Functions, Transforms, Quadratics & Rationals",
    level: "SL",
    questions: [
      {
        id: "2-functions-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Find",
        guideRef: "functions-inverse-transforms",
        question:
          "Line {{L_1}} has equation {{3x - 2y + 8 = 0}}. Which equation represents the line perpendicular to {{L_1}} that passes through {{(6, 1)}}?",
        options: [
          "{{2x + 3y - 15 = 0}}",
          "{{3x - 2y - 16 = 0}}",
          "{{2x - 3y - 9 = 0}}",
          "{{3x + 2y - 20 = 0}}",
        ],
        answerIndex: 0,
        hints: [
          "Rewrite {{L_1}} in the form {{y = mx + c}} to read off its gradient {{m_1}}.",
          "Perpendicular gradients satisfy {{m_1 m_2 = -1}}, then substitute {{(6, 1)}}.",
        ],
        explanation:
          "Rearranging {{3x - 2y + 8 = 0}} gives {{y = (3/2)x + 4}}, so {{m_1 = 3/2}}. A perpendicular line has gradient {{m_2 = -2/3}}. Using {{y - 1 = -(2/3)(x - 6)}} gives {{3y - 3 = -2x + 12}}, or {{2x + 3y - 15 = 0}}.",
      },
      {
        id: "2-functions-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "functions-inverse-transforms",
        question: "What is the largest possible real domain of the function {{f(x) = sqrt(8 - 2x)/(x - 1)}}?",
        options: [
          "{{x < 4, x != 1}}",
          "{{x <= 4, x != 1}}",
          "{{x >= 4, x != 1}}",
          "{{x <= 4, x != 0}}",
        ],
        answerIndex: 1,
        hints: [
          "The expression inside the square root must be greater than or equal to zero, and the denominator cannot be zero.",
        ],
        explanation:
          "For real outputs we require {{8 - 2x >= 0}} (giving {{x <= 4}}) and {{x - 1 != 0}} (giving {{x != 1}}). Note that {{x = 4}} is allowed because {{sqrt(0) = 0}} in the numerator.",
      },
      {
        id: "2-functions-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "functions-inverse-transforms",
        question: "Given {{f(x) = x^2 + 1}} and {{g(x) = 3x - 2}}, what is the exact value of {{(f ∘ g)(-1)}}?",
        options: ["{{4}}", "{{10}}", "{{26}}", "{{-24}}"],
        answerIndex: 2,
        hints: [
          "{{(f ∘ g)(-1)}} means {{f(g(-1))}} — evaluate the inner function {{g}} first.",
          "Compute {{g(-1) = 3(-1) - 2}}, then substitute that result into {{f(x) = x^2 + 1}}.",
        ],
        explanation:
          "Evaluating right-to-left: {{g(-1) = 3(-1) - 2 = -5}}, and then {{f(-5) = (-5)^2 + 1 = 25 + 1 = 26}}.",
      },
      {
        id: "2-functions-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "functions-inverse-transforms",
        question: "Let {{f(x) = (3x - 4)/(x + 2)}} for {{x != -2}}. Which expression is {{f^(-1)(x)}}?",
        options: [
          "{{(x + 2)/(3x - 4)}} for {{x != 4/3}}",
          "{{(2x - 4)/(3 - x)}} for {{x != 3}}",
          "{{(2x + 4)/(x - 3)}} for {{x != 3}}",
          "{{(2x + 4)/(3 - x)}} for {{x != 3}}",
        ],
        answerIndex: 3,
        hints: [
          "Set {{x = (3y - 4)/(y + 2)}}, multiply by {{(y + 2)}}, and collect all {{y}}-terms on one side.",
          "Test your formula with a quick point: {{f(2) = 1/2}}, so {{f^(-1)(1/2)}} must equal {{2}}.",
        ],
        explanation:
          "Swapping variables gives {{x(y + 2) = 3y - 4 => xy + 2x = 3y - 4 => 2x + 4 = y(3 - x)}}, hence {{f^(-1)(x) = (2x + 4)/(3 - x)}} with domain {{x != 3}}.",
      },
      {
        id: "2-functions-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "functions-inverse-transforms",
        question: "A one-to-one function is defined by {{g(x) = 2e^(x - 1) + 3}}. What is the exact value of {{g^(-1)(5)}}?",
        options: ["{{0}}", "{{1}}", "{{ln 2}}", "{{1 + ln 5}}"],
        answerIndex: 1,
        hints: [
          "You do not need the full formula for {{g^(-1)(x)}}: {{g^(-1)(5) = k}} simply means {{g(k) = 5}}.",
          "Solve {{2e^(k - 1) + 3 = 5}} for {{k}}.",
        ],
        explanation:
          "Setting {{2e^(k - 1) + 3 = 5}} gives {{2e^(k - 1) = 2 => e^(k - 1) = 1 => k - 1 = 0 => k = 1}}. Thus {{g^(-1)(5) = 1}}.",
      },
      {
        id: "2-functions-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "functions-inverse-transforms",
        question:
          "The point {{(-4, 6)}} lies on the graph of {{y = f(x)}}. What are the coordinates of the corresponding point on {{y = -2f((1/2)x + 1) + 3}}?",
        options: ["{{(-6, -9)}}", "{{(-10, -15)}}", "{{(-10, -9)}}", "{{(-1, -9)}}"],
        answerIndex: 2,
        hints: [
          "To feed the same input {{-4}} into {{f}}, solve {{(1/2)x' + 1 = -4}} for the new x-coordinate {{x'}}.",
          "Apply the outer vertical operations directly to {{y = 6}}: {{y' = -2(6) + 3}}.",
        ],
        explanation:
          "Solving {{(1/2)x' + 1 = -4}} gives {{(1/2)x' = -5 => x' = -10}}. Vertically, {{y' = -2(6) + 3 = -9}}. The image point is {{(-10, -9)}}.",
      },
      {
        id: "2-functions-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "functions-inverse-transforms",
        question: "Which sequence of transformations maps the graph of {{y = f(x)}} onto {{y = f(3x - 12)}}?",
        options: [
          "Horizontal stretch scale factor {{1/3}}, then translate {{4}} units right",
          "Horizontal stretch scale factor {{1/3}}, then translate {{12}} units right",
          "Horizontal stretch scale factor {{3}}, then translate {{4}} units right",
          "Translate {{4}} units right, then horizontal stretch scale factor {{1/3}}",
        ],
        answerIndex: 0,
        hints: [
          "Factor the inside expression as {{3(x - 4)}}.",
          "Check where the point {{(0, f(0))}} moves: on {{y = f(3x - 12)}} we need {{3x - 12 = 0}}, so {{x = 4}}.",
        ],
        explanation:
          "Writing {{f(3x - 12) = f(3(x - 4))}} shows a horizontal stretch of scale factor {{1/3}} parallel to the x-axis followed by a translation of {{4}} units to the right (testing {{x = 0 -> 0 -> 4}} confirms {{3(4) - 12 = 0}}).",
      },
      {
        id: "2-functions-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Find",
        guideRef: "quadratics-exponentials-rationals",
        question: "What are the coordinates of the vertex of the quadratic {{f(x) = -2x^2 + 12x - 11}}?",
        options: ["{{(-3, -65)}}", "{{(3, 25)}}", "{{(6, -11)}}", "{{(3, 7)}}"],
        answerIndex: 3,
        hints: [
          "The axis of symmetry is {{x = -b/(2a)}}; substitute that x-value back into {{f(x)}}.",
        ],
        explanation:
          "The vertex lies on {{x = -12/(2(-2)) = 3}}. Evaluating {{f(3) = -2(9) + 12(3) - 11 = -18 + 36 - 11 = 7}}, so the vertex is {{(3, 7)}}.",
      },
      {
        id: "2-functions-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "quadratics-exponentials-rationals",
        question:
          "For which set of non-zero real values of {{m}} does the equation {{mx^2 - 6x + 3 = 0}} have two distinct real roots?",
        options: ["{{m > 3}}", "{{0 < m < 3}}", "{{m < 3, m != 0}}", "{{m <= 3, m != 0}}"],
        answerIndex: 2,
        hints: [
          "Two distinct real roots require the discriminant {{Δ = b^2 - 4ac}} to be strictly positive.",
          "Remember that {{m}} can be negative — negative {{m}} still gives a valid quadratic!",
        ],
        explanation:
          "We need {{Δ = (-6)^2 - 4(m)(3) = 36 - 12m > 0}}, which gives {{m < 3}}. Combined with the quadratic condition {{m != 0}}, the solution is {{m < 3, m != 0}}.",
      },
      {
        id: "2-functions-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Solve",
        guideRef: "quadratics-exponentials-rationals",
        question: "What is the solution set of the quadratic inequality {{2x^2 - 7x - 15 <= 0}}?",
        options: [
          "{{-3/2 <= x <= 5}}",
          "{{-5 <= x <= 3/2}}",
          "{{x <= -3/2}} or {{x >= 5}}",
          "{{-3/2 < x < 5}}",
        ],
        answerIndex: 0,
        hints: [
          "Factorise {{2x^2 - 7x - 15}} to locate the two x-intercepts.",
          "Since the coefficient of {{x^2}} is positive, the parabola lies on or below the x-axis between its roots.",
        ],
        explanation:
          "Factorising gives {{(2x + 3)(x - 5) <= 0}} with roots {{x = -3/2}} and {{x = 5}}. Because the parabola opens upward, it is non-positive on the closed interval {{-3/2 <= x <= 5}}.",
      },
      {
        id: "2-functions-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "State",
        guideRef: "quadratics-exponentials-rationals",
        question: "What are the equations of the vertical and horizontal asymptotes of {{f(x) = (5 - 4x)/(2x + 3)}}?",
        options: [
          "{{x = -3/2}} and {{y = 5/2}}",
          "{{x = -3/2}} and {{y = -2}}",
          "{{x = 5/4}} and {{y = -2}}",
          "{{x = 3/2}} and {{y = -2}}",
        ],
        answerIndex: 1,
        hints: [
          "Set the denominator {{2x + 3 = 0}} for the vertical asymptote.",
          "Rewrite the numerator in descending powers of {{x}} as {{-4x + 5}} before taking the leading-coefficient ratio.",
        ],
        explanation:
          "The denominator vanishes at {{x = -3/2}} (vertical asymptote). Rewriting as {{(-4x + 5)/(2x + 3)}}, the leading-coefficient ratio gives horizontal asymptote {{y = -4/2 = -2}}.",
      },
      {
        id: "2-functions-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "quadratics-exponentials-rationals",
        question: "What are the range and horizontal asymptote of {{f(x) = 7 - 3e^(-0.4x)}} for {{x ∈ ℝ}}?",
        options: [
          "Range {{y > 7}} and horizontal asymptote {{y = 7}}",
          "Range {{y < 4}} and horizontal asymptote {{y = 4}}",
          "Range {{y > -3}} and horizontal asymptote {{y = -3}}",
          "Range {{y < 7}} and horizontal asymptote {{y = 7}}",
        ],
        answerIndex: 3,
        hints: [
          "Remember that {{e^(-0.4x) > 0}} for every real {{x}}.",
          "Multiplying a positive quantity by {{-3}} makes it strictly negative, so subtract it from {{7}}.",
        ],
        explanation:
          "Since {{e^(-0.4x) > 0}}, we have {{-3e^(-0.4x) < 0}}, so {{f(x) = 7 - 3e^(-0.4x) < 7}}. As {{x -> ∞}}, {{e^(-0.4x) -> 0}}, yielding horizontal asymptote {{y = 7}}.",
      },
      {
        id: "2-functions-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "quadratics-exponentials-rationals",
        question: "What are the maximal domain and vertical asymptote of {{g(x) = 2 ln(6 - 3x) + 1}}?",
        options: [
          "Domain {{x < 2}} and vertical asymptote {{x = 2}}",
          "Domain {{x > 2}} and vertical asymptote {{x = 2}}",
          "Domain {{x < 6}} and vertical asymptote {{x = 6}}",
          "Domain {{x <= 2}} and vertical asymptote {{x = 2}}",
        ],
        answerIndex: 0,
        hints: [
          "The argument inside {{ln(...)}} must be strictly greater than zero.",
          "Solve {{6 - 3x > 0}} carefully — dividing by {{-3}} reverses the inequality sign.",
        ],
        explanation:
          "A logarithm requires a strictly positive argument: {{6 - 3x > 0 => 6 > 3x => x < 2}}. The boundary where the argument approaches {{0^+}} is the vertical asymptote {{x = 2}}.",
      },
      {
        id: "2-functions-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Find",
        guideRef: "quadratics-exponentials-rationals",
        question: "For which values of {{k}} is {{kx^2 + 4x + k > 0}} for ALL real numbers {{x}}?",
        options: [
          "{{k < -2}} or {{k > 2}}",
          "{{k > 2}}",
          "{{-2 < k < 2}}",
          "{{k >= 2}}",
        ],
        answerIndex: 1,
        hints: [
          "A parabola lies strictly above the x-axis everywhere iff BOTH {{a > 0}} and {{Δ < 0}}.",
          "Solve {{16 - 4k^2 < 0}} and intersect with {{k > 0}}.",
        ],
        explanation:
          "Strict positivity for all {{x}} requires {{k > 0}} (opens upward) and {{Δ = 4^2 - 4k^2 < 0 => k^2 > 4 => k < -2}} or {{k > 2}}. Combining with {{k > 0}} leaves {{k > 2}}.",
      },
      {
        id: "2-functions-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "quadratics-exponentials-rationals",
        question:
          "The curve {{y = (ax + b)/(x + c)}} has vertical asymptote {{x = 3}}, horizontal asymptote {{y = -2}}, and x-intercept {{(1, 0)}}. What is the value of {{a + b + c}}?",
        options: ["{{-7}}", "{{1}}", "{{-3}}", "{{3}}"],
        answerIndex: 2,
        hints: [
          "Find {{c}} from the vertical asymptote {{x + c = 0}} and {{a}} from the horizontal asymptote {{y = a/1}}.",
          "Substitute {{(1, 0)}} into the numerator {{ax + b = 0}} to find {{b}}.",
        ],
        explanation:
          "VA {{x = 3}} gives {{c = -3}}; HA {{y = -2}} gives {{a = -2}}; x-intercept {{(1, 0)}} gives {{-2(1) + b = 0 => b = 2}}. Therefore {{a + b + c = -2 + 2 - 3 = -3}}.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2 (SL & HL BRIDGE) — answerIndex spread: [4, 4, 3, 4]
  // ===========================================================================
  {
    id: "2-functions-m2",
    title: "MCQ Paper 2 — SL & HL Bridge: Models, Polynomials & Vieta",
    level: "SL",
    questions: [
      {
        id: "2-functions-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "functions-inverse-transforms",
        question: "Given {{f(x) = 2x + 5}} and {{(f ∘ g)(x) = 6x - 1}}, what is {{g(x)}}?",
        options: ["{{3x + 2}}", "{{3x - 3}}", "{{12x + 3}}", "{{3x - 6}}"],
        answerIndex: 1,
        hints: [
          "Write out {{f(g(x)) = 2g(x) + 5}} and equate it to {{6x - 1}}.",
          "Solve algebraically for {{g(x)}}.",
        ],
        explanation:
          "From {{2g(x) + 5 = 6x - 1}}, subtract {{5}} to get {{2g(x) = 6x - 6}}, then divide by {{2}} to obtain {{g(x) = 3x - 3}}.",
      },
      {
        id: "2-functions-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "functions-inverse-transforms",
        question: "Let {{f(x) = ln(x - 2) + 4}} for {{x > 2}}. What is {{f^(-1)(x)}} and its domain?",
        options: [
          "{{e^(x + 4) + 2}} for {{x ∈ ℝ}}",
          "{{e^(x - 4) - 2}} for {{x > 2}}",
          "{{e^(x - 4) + 2}} for {{x > 4}}",
          "{{e^(x - 4) + 2}} for {{x ∈ ℝ}}",
        ],
        answerIndex: 3,
        hints: [
          "Swap {{x}} and {{y}}, isolate {{ln(y - 2)}}, and exponentiate both sides.",
          "Remember that the domain of {{f^(-1)}} equals the range of {{f}}.",
        ],
        explanation:
          "Setting {{x = ln(y - 2) + 4}} gives {{ln(y - 2) = x - 4 => y - 2 = e^(x - 4) => f^(-1)(x) = e^(x - 4) + 2}}. Since the range of {{f}} is all real numbers, the domain of {{f^(-1)}} is {{x ∈ ℝ}}.",
      },
      {
        id: "2-functions-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "functions-inverse-transforms",
        question:
          "To solve {{e^x - 3x = 2}} graphically on a TI-Nspire CX, a student plots {{y = e^x}} and {{y = 3x + 2}}. How many real solutions does the equation have?",
        options: [
          "Exactly {{2}} real solutions",
          "Exactly {{1}} real solution",
          "Exactly {{3}} real solutions",
          "No real solutions",
        ],
        answerIndex: 0,
        hints: [
          "Compare values of {{h(x) = e^x - 3x - 2}} at {{x = -2}}, {{x = 0}}, and {{x = 3}}.",
          "Since {{y = e^x}} is strictly convex (curves upward), a straight line can cut it at most twice.",
        ],
        explanation:
          "At {{x = 0}}, {{e^0 = 1 < 2}}, so the line {{y = 3x + 2}} lies above {{y = e^x}} at {{x = 0}}. As {{x -> -∞}} and as {{x -> +∞}}, {{e^x > 3x + 2}}. Because {{e^x}} is strictly convex, the line intersects it at exactly {{2}} real points.",
      },
      {
        id: "2-functions-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "quadratics-exponentials-rationals",
        question:
          "A quadratic function has x-intercepts at {{(-2, 0)}} and {{(6, 0)}} and passes through {{(4, -18)}}. What is the y-coordinate of its vertex?",
        options: ["{{-16}}", "{{-18}}", "{{-24}}", "{{-32}}"],
        answerIndex: 2,
        hints: [
          "Start with factorised form {{f(x) = a(x + 2)(x - 6)}} and substitute {{(4, -18)}} to find {{a}}.",
          "The vertex lies halfway between the two x-intercepts at {{x = 2}}.",
        ],
        explanation:
          "Using {{f(x) = a(x + 2)(x - 6)}}, substituting {{(4, -18)}} gives {{a(6)(-2) = -18 => a = 3/2}}. The axis of symmetry is {{x = (-2 + 6)/2 = 2}}, so {{f(2) = (3/2)(4)(-4) = -24}}.",
      },
      {
        id: "2-functions-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Solve",
        guideRef: "quadratics-exponentials-rationals",
        question: "What are all real solutions to {{3^(2x) - 10(3^x) + 9 = 0}}?",
        options: [
          "{{x = 1}} and {{x = 9}}",
          "{{x = 0}} and {{x = 3}}",
          "{{x = 1}} and {{x = 2}}",
          "{{x = 0}} and {{x = 2}}",
        ],
        answerIndex: 3,
        hints: [
          "Let {{u = 3^x}}, so {{3^(2x) = u^2}}, and solve the quadratic in {{u}}.",
          "Remember to solve {{3^x = u}} at the end — do not stop at the values of {{u}}!",
        ],
        explanation:
          "Substituting {{u = 3^x}} gives {{u^2 - 10u + 9 = 0 => (u - 1)(u - 9) = 0}}, so {{3^x = 1 => x = 0}} or {{3^x = 9 => x = 2}}.",
      },
      {
        id: "2-functions-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "quadratics-exponentials-rationals",
        question:
          "The temperature of a cooling drink after {{t}} minutes is modelled by {{T(t) = 22 + 68e^(-0.05t)}} °C ({{t >= 0}}). What are the initial temperature and the long-term equilibrium temperature?",
        options: [
          "Initial {{90}} °C, equilibrium {{22}} °C",
          "Initial {{68}} °C, equilibrium {{22}} °C",
          "Initial {{90}} °C, equilibrium {{68}} °C",
          "Initial {{22}} °C, equilibrium {{90}} °C",
        ],
        answerIndex: 0,
        hints: [
          "Substitute {{t = 0}} for the initial temperature, and let {{t -> ∞}} for the horizontal asymptote.",
        ],
        explanation:
          "At {{t = 0}}, {{T(0) = 22 + 68e^0 = 90}} °C. As {{t -> ∞}}, {{e^(-0.05t) -> 0}}, so {{T(t)}} approaches the horizontal asymptote {{22}} °C.",
      },
      {
        id: "2-functions-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "quadratics-exponentials-rationals",
        question: "The straight line {{y = 2x + k}} is tangent to the parabola {{y = x^2 - 4x + 11}}. What is the value of {{k}}?",
        options: ["{{-2}}", "{{2}}", "{{7}}", "{{11}}"],
        answerIndex: 1,
        hints: [
          "Set {{x^2 - 4x + 11 = 2x + k}} and rearrange into a single quadratic equal to zero.",
          "Tangency means exactly one repeated intersection, so set the discriminant {{Δ = 0}}.",
        ],
        explanation:
          "Equating gives {{x^2 - 6x + (11 - k) = 0}}. Tangency requires {{Δ = (-6)^2 - 4(1)(11 - k) = 0 => 36 - 44 + 4k = 0 => 4k = 8 => k = 2}}.",
      },
      {
        id: "2-functions-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "functions-inverse-transforms",
        question: "Which single geometric transformation maps the graph of {{y = 2^x}} directly onto the graph of {{y = 8 · 2^x}}?",
        options: [
          "Vertical stretch of scale factor {{3}}",
          "Translation of {{3}} units to the right",
          "Translation of {{8}} units upward",
          "Translation of {{3}} units to the left",
        ],
        answerIndex: 3,
        hints: [
          "Rewrite {{8}} as a power of {{2}} and combine exponents.",
          "Compare {{2^(x + 3)}} with {{f(x + c)}} for {{f(x) = 2^x}}.",
        ],
        explanation:
          "Since {{8 · 2^x = 2^3 · 2^x = 2^(x + 3) = f(x + 3)}}, multiplying {{2^x}} by {{8}} is identical to translating the graph {{3}} units to the left.",
      },
      {
        id: "2-functions-m2-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Find",
        guideRef: "polynomials-vieta-rationals-hl",
        question: "What is the remainder when {{P(x) = 3x^3 - 4x^2 + 2x - 7}} is divided by {{(x - 2)}}?",
        options: ["{{5}}", "{{-5}}", "{{19}}", "{{-35}}"],
        answerIndex: 0,
        hints: [
          "By the Remainder Theorem, dividing {{P(x)}} by {{(x - a)}} leaves remainder {{P(a)}}.",
        ],
        explanation:
          "Evaluating at {{x = 2}}: {{P(2) = 3(8) - 4(4) + 2(2) - 7 = 24 - 16 + 4 - 7 = 5}}.",
      },
      {
        id: "2-functions-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "polynomials-vieta-rationals-hl",
        question: "Given that {{(2x - 1)}} is a factor of {{P(x) = 4x^3 + kx^2 - 7x + 2}}, what is the value of {{k}}?",
        options: ["{{-4}}", "{{2}}", "{{4}}", "{{8}}"],
        answerIndex: 2,
        hints: [
          "By the Factor Theorem, {{(2x - 1)}} is a factor iff {{P(1/2) = 0}}.",
          "Substitute {{x = 1/2}} carefully into every term of {{P(x)}}.",
        ],
        explanation:
          "Setting {{P(1/2) = 0}} gives {{4(1/8) + k(1/4) - 7(1/2) + 2 = 0 => 1/2 + k/4 - 7/2 + 2 = 0 => k/4 - 1 = 0 => k = 4}}.",
      },
      {
        id: "2-functions-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "polynomials-vieta-rationals-hl",
        question:
          "The quartic equation {{2x^4 - 10x^3 + 7x^2 + 5x - 12 = 0}} has roots {{r_1, r_2, r_3, r_4}}. What is the value of {{(r_1 + r_2 + r_3 + r_4) + (r_1 r_2 r_3 r_4)}}?",
        options: ["{{11}}", "{{-1}}", "{{-11}}", "{{1}}"],
        answerIndex: 1,
        hints: [
          "Use Vieta's formulas: sum of roots {{= -a_3/a_4}} and product of roots {{= (-1)^4 a_0/a_4}}.",
          "Check the sign of {{(-1)^4}} — degree {{4}} is even!",
        ],
        explanation:
          "By Vieta's formulas, {{Σr_i = -(-10)/2 = 5}} and {{∏r_i = (-1)^4(-12)/2 = -6}}. Adding gives {{5 + (-6) = -1}}.",
      },
      {
        id: "2-functions-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "polynomials-vieta-rationals-hl",
        question:
          "A cubic polynomial {{P(x)}} with real coefficients and leading coefficient {{1}} has roots {{-2}} and {{3 - 2i}}. Which expression is {{P(x)}}?",
        options: [
          "{{x^3 - 4x^2 + x - 26}}",
          "{{x^3 - 4x^2 - 7x + 26}}",
          "{{x^3 - 4x^2 + x + 26}}",
          "{{x^3 + 4x^2 + x + 26}}",
        ],
        answerIndex: 2,
        hints: [
          "Because coefficients are real, the complex conjugate {{3 + 2i}} must also be a root.",
          "Form the real quadratic factor {{(x - (3 - 2i))(x - (3 + 2i)) = (x - 3)^2 + 4}}, then multiply by {{(x + 2)}}.",
        ],
        explanation:
          "The conjugate root {{3 + 2i}} yields the quadratic factor {{(x - 3)^2 + 2^2 = x^2 - 6x + 13}}. Multiplying by {{(x + 2)}} gives {{(x + 2)(x^2 - 6x + 13) = x^3 - 4x^2 + x + 26}}.",
      },
      {
        id: "2-functions-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "polynomials-vieta-rationals-hl",
        question: "What is the equation of the oblique asymptote of {{f(x) = (2x^2 + 5x - 1)/(x + 4)}}?",
        options: ["{{y = 2x + 13}}", "{{y = 2x - 11}}", "{{y = 2x + 3}}", "{{y = 2x - 3}}"],
        answerIndex: 3,
        hints: [
          "Perform polynomial division of {{2x^2 + 5x - 1}} by {{(x + 4)}}.",
          "Check your quotient {{(mx + k)}} by expanding {{(mx + k)(x + 4)}} and matching the {{x^2}} and {{x}} terms.",
        ],
        explanation:
          "Dividing gives {{2x^2 + 5x - 1 = (2x - 3)(x + 4) + 11}}, so {{f(x) = 2x - 3 + 11/(x + 4)}}. As {{|x| -> ∞}}, the remainder vanishes, leaving oblique asymptote {{y = 2x - 3}}.",
      },
      {
        id: "2-functions-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "polynomials-vieta-rationals-hl",
        question:
          "How many vertical asymptotes does {{f(x) = (3x - 1)/(x^2 - 4x + 5)}} have, and what is its horizontal asymptote?",
        options: [
          "{{0}} vertical asymptotes and horizontal asymptote {{y = 0}}",
          "{{2}} vertical asymptotes and horizontal asymptote {{y = 0}}",
          "{{0}} vertical asymptotes and horizontal asymptote {{y = 3}}",
          "{{1}} vertical asymptote and horizontal asymptote {{y = 0}}",
        ],
        answerIndex: 0,
        hints: [
          "Check the discriminant of the denominator {{x^2 - 4x + 5}} to see if it has any real zeros.",
          "Compare the degrees of the numerator and denominator to find the horizontal asymptote.",
        ],
        explanation:
          "For {{x^2 - 4x + 5}}, {{Δ = (-4)^2 - 4(1)(5) = -4 < 0}}, so the denominator is never zero ({{0}} vertical asymptotes). Since {{deg(num) = 1 < 2 = deg(den)}}, the horizontal asymptote is {{y = 0}}.",
      },
      {
        id: "2-functions-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "polynomials-vieta-rationals-hl",
        question: "The quadratic equation {{3x^2 - 9x + 5 = 0}} has roots {{α}} and {{β}}. What is the exact value of {{α^2 + β^2}}?",
        options: ["{{4}}", "{{17/3}}", "{{37/3}}", "{{27/5}}"],
        answerIndex: 1,
        hints: [
          "Express {{α^2 + β^2}} using the symmetric identity {{(α + β)^2 - 2αβ}}.",
          "Read off {{α + β = -b/a}} and {{αβ = c/a}} directly from {{3x^2 - 9x + 5 = 0}}.",
        ],
        explanation:
          "By Vieta's formulas, {{α + β = 9/3 = 3}} and {{αβ = 5/3}}. Therefore {{α^2 + β^2 = (α + β)^2 - 2αβ = 3^2 - 2(5/3) = 9 - 10/3 = 17/3}}.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3 (HL MASTERY) — answerIndex spread: [3, 4, 4, 4]
  // ===========================================================================
  {
    id: "2-functions-m3",
    title: "MCQ Paper 3 — [HL] Polynomials, Parity, Modulus & Reciprocal Graphs",
    level: "HL",
    questions: [
      {
        id: "2-functions-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "polynomials-vieta-rationals-hl",
        question:
          "When a polynomial {{P(x)}} is divided by {{(x - 1)}} the remainder is {{4}}, and when divided by {{(x + 2)}} the remainder is {{-5}}. What is the remainder when {{P(x)}} is divided by {{(x - 1)(x + 2)}}?",
        options: ["{{3x - 1}}", "{{-3x + 7}}", "{{3x + 1}}", "{{x + 3}}"],
        answerIndex: 2,
        hints: [
          "Since the divisor {{(x - 1)(x + 2)}} has degree {{2}}, write {{P(x) = (x - 1)(x + 2)Q(x) + Ax + B}}.",
          "Substitute {{x = 1}} and {{x = -2}} to get two linear equations in {{A}} and {{B}}.",
        ],
        explanation:
          "Let the remainder be {{Ax + B}}. Then {{P(1) = A + B = 4}} and {{P(-2) = -2A + B = -5}}. Subtracting gives {{3A = 9 => A = 3}}, so {{B = 1}}, giving remainder {{3x + 1}}.",
      },
      {
        id: "2-functions-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "polynomials-vieta-rationals-hl",
        question:
          "The three roots of the cubic {{x^3 - 7x^2 + kx - 8 = 0}} form a geometric sequence. What is the value of {{k}}?",
        options: ["{{14}}", "{{12}}", "{{7}}", "{{16}}"],
        answerIndex: 0,
        hints: [
          "Write the three roots in geometric progression as {{a/r, a, ar}}.",
          "Use Vieta's product of roots {{(a/r)(a)(ar) = a^3}} to find the middle root {{a}}, then substitute {{x = a}} into the cubic!",
        ],
        explanation:
          "Let the roots be {{a/r, a, ar}}. Their product is {{a^3 = -(-8)/1 = 8 => a = 2}}. Since {{x = 2}} is a root, {{2^3 - 7(2^2) + 2k - 8 = 0 => 8 - 28 + 2k - 8 = 0 => 2k = 28 => k = 14}}.",
      },
      {
        id: "2-functions-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "polynomials-vieta-rationals-hl",
        question: "What is the exact range of the rational function {{f(x) = (x^2 + 4)/x}} for {{x != 0}}?",
        options: [
          "{{y <= -2}} or {{y >= 2}}",
          "{{-4 <= y <= 4}}",
          "{{y ∈ ℝ, y != 0}}",
          "{{y <= -4}} or {{y >= 4}}",
        ],
        answerIndex: 3,
        hints: [
          "Rearrange {{y = (x^2 + 4)/x}} into a quadratic equation in {{x}}: {{x^2 - yx + 4 = 0}}.",
          "Real values of {{x}} exist if and only if the discriminant {{Δ_x = y^2 - 16 >= 0}}.",
        ],
        explanation:
          "Rewriting {{y = (x^2 + 4)/x}} gives {{x^2 - yx + 4 = 0}}. Real {{x}} exists iff {{Δ = (-y)^2 - 4(1)(4) = y^2 - 16 >= 0}}, which gives {{y <= -4}} or {{y >= 4}}.",
      },
      {
        id: "2-functions-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "polynomials-vieta-rationals-hl",
        question:
          "For what value of {{k}} does the rational function {{f(x) = (2x^2 + kx - 3)/(x - 3)}} have NO vertical asymptote?",
        options: ["{{5}}", "{{-5}}", "{{-7}}", "{{7}}"],
        answerIndex: 1,
        hints: [
          "The vertical asymptote disappears only if {{(x - 3)}} cancels with a factor of the numerator (leaving a removable hole).",
          "Apply the Factor Theorem: set the numerator equal to {{0}} at {{x = 3}}.",
        ],
        explanation:
          "No vertical asymptote occurs iff {{(x - 3)}} divides {{2x^2 + kx - 3}}, so {{2(3^2) + 3k - 3 = 0 => 15 + 3k = 0 => k = -5}} (giving {{(2x + 1)(x - 3)/(x - 3) = 2x + 1}} for {{x != 3}}).",
      },
      {
        id: "2-functions-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "polynomials-vieta-rationals-hl",
        question:
          "The cubic equation {{2x^3 + 3x^2 - 5x + 6 = 0}} has roots {{α, β, γ}}. What is the exact value of {{1/α + 1/β + 1/γ}}?",
        options: ["{{-5/6}}", "{{1/2}}", "{{5/6}}", "{{-3/2}}"],
        answerIndex: 2,
        hints: [
          "Combine {{1/α + 1/β + 1/γ}} over the common denominator {{αβγ}}.",
          "Read {{αβ + βγ + γα = c/a}} and {{αβγ = -d/a}} from the cubic coefficients.",
        ],
        explanation:
          "Over a common denominator, {{1/α + 1/β + 1/γ = (αβ + βγ + γα)/(αβγ)}}. By Vieta, {{Σαβ = -5/2}} and {{αβγ = -6/2 = -3}}, so the value is {{(-5/2)/(-3) = 5/6}}.",
      },
      {
        id: "2-functions-m3-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "modulus-reciprocal-even-odd-hl",
        question: "Which of the following functions defined on {{ℝ}} is an **odd** function?",
        options: [
          "{{f(x) = x^4 - 3x^2 + 1}}",
          "{{f(x) = x^3 + x^2}}",
          "{{f(x) = |x|/(x^2 + 1)}}",
          "{{f(x) = x(x^2 + 5)}}",
        ],
        answerIndex: 3,
        hints: [
          "Test {{f(-x)}} for each function: an odd function satisfies {{f(-x) = -f(x)}} for all {{x}}.",
        ],
        explanation:
          "For {{f(x) = x(x^2 + 5)}}, {{f(-x) = (-x)((-x)^2 + 5) = -x(x^2 + 5) = -f(x)}}, so it is odd. The others are even or neither.",
      },
      {
        id: "2-functions-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "modulus-reciprocal-even-odd-hl",
        question:
          "Suppose {{f}} is a non-zero odd function and {{g}} is a non-zero even function, both defined on {{ℝ}}. Classify {{h(x) = f(x) g(x)}} and {{p(x) = g(f(x))}}.",
        options: [
          "{{h}} is even and {{p}} is odd",
          "{{h}} is odd and {{p}} is even",
          "{{h}} is odd and {{p}} is odd",
          "{{h}} is even and {{p}} is even",
        ],
        answerIndex: 1,
        hints: [
          "Compute {{h(-x) = f(-x)g(-x)}} using {{f(-x) = -f(x)}} and {{g(-x) = g(x)}}.",
          "Compute {{p(-x) = g(f(-x)) = g(-f(x))}} and apply the evenness of {{g}}.",
        ],
        explanation:
          "{{h(-x) = (-f(x))g(x) = -h(x)}} so {{h}} is odd; {{p(-x) = g(f(-x)) = g(-f(x)) = g(f(x)) = p(x)}} so {{p}} is even.",
      },
      {
        id: "2-functions-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "modulus-reciprocal-even-odd-hl",
        question: "For what value of {{k}} is the rational function {{f(x) = (kx + 5)/(2x - 7)}} ({{x != 7/2}}) self-inverse?",
        options: ["{{7}}", "{{-7}}", "{{7/2}}", "{{-5}}"],
        answerIndex: 0,
        hints: [
          "A linear rational function {{(ax + b)/(cx + d)}} is self-inverse iff its graph is symmetric in {{y = x}}, meaning its vertical and horizontal asymptotes have equal coordinates.",
          "Equivalently, compute {{f^(-1)(x)}} and match coefficients with {{f(x)}}.",
        ],
        explanation:
          "For {{(ax + b)/(cx + d)}} to be self-inverse, we need {{a + d = 0}} (so VA {{x = -d/c}} matches HA {{y = a/c}}). Thus {{k + (-7) = 0 => k = 7}}.",
      },
      {
        id: "2-functions-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "modulus-reciprocal-even-odd-hl",
        question: "The function {{f(x) = (x - 4)^2 + 3}} is restricted to the domain {{x <= 4}}. What is {{f^(-1)(x)}} and its domain?",
        options: [
          "{{4 + sqrt(x - 3)}} for {{x >= 3}}",
          "{{4 - sqrt(x + 3)}} for {{x >= -3}}",
          "{{4 - sqrt(x - 3)}} for {{x <= 4}}",
          "{{4 - sqrt(x - 3)}} for {{x >= 3}}",
        ],
        answerIndex: 3,
        hints: [
          "Swap {{x}} and {{y}}: {{(y - 4)^2 = x - 3}}, then choose the sign of the square root that keeps {{y <= 4}}.",
          "The domain of {{f^(-1)}} equals the range of {{f}} (which starts at the vertex y-value {{3}}).",
        ],
        explanation:
          "Solving {{x = (y - 4)^2 + 3}} gives {{y = 4 +- sqrt(x - 3)}}. Because the range of {{f^(-1)}} must be {{y <= 4}}, choose the minus sign: {{f^(-1)(x) = 4 - sqrt(x - 3)}} for {{x >= 3}}.",
      },
      {
        id: "2-functions-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "modulus-reciprocal-even-odd-hl",
        question:
          "A smooth curve {{y = f(x)}} has x-intercepts at {{x = -1}} and {{x = 5}}, a local minimum at {{(2, -4)}}, and horizontal asymptote {{y = 2}}. What are the vertical asymptotes and local maximum of {{y = 1/f(x)}}?",
        options: [
          "VAs {{x = -1, 5}}; local maximum at {{(2, 1/4)}}",
          "VAs {{x = -1, 5}}; local maximum at {{(2, -1/4)}}",
          "VAs {{x = 1, -5}}; local maximum at {{(2, -1/4)}}",
          "VA {{x = 2}}; local maximum at {{(2, -1/4)}}",
        ],
        answerIndex: 1,
        hints: [
          "Zeros of {{f(x)}} become vertical asymptotes of {{1/f(x)}}.",
          "Taking reciprocals flips a local minimum into a local maximum WITHOUT changing the sign of the y-coordinate!",
        ],
        explanation:
          "The zeros {{x = -1}} and {{x = 5}} become vertical asymptotes of {{1/f(x)}}. Reciprocating the negative local minimum {{(2, -4)}} produces a negative local maximum at {{(2, -1/4)}}.",
      },
      {
        id: "2-functions-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "modulus-reciprocal-even-odd-hl",
        question:
          "The graph of {{y = f(x)}} has exactly three x-intercepts at {{x = -3}}, {{x = 2}}, and {{x = 5}}, and y-intercept {{(0, -4)}}. What are all the x-intercepts of {{y = f(|x|)}}?",
        options: [
          "{{x = -3, 2, 5}} (unchanged)",
          "{{x = -5, -3, -2, 2, 3, 5}}",
          "{{x = -5, -2, 2, 5}}",
          "{{x = 2, 5}} only",
        ],
        answerIndex: 2,
        hints: [
          "To form {{y = f(|x|)}}, erase the entire {{x < 0}} portion of {{y = f(x)}} first.",
          "Then mirror the remaining {{x >= 0}} portion across the y-axis.",
        ],
        explanation:
          "The x-intercept {{x = -3}} lies in {{x < 0}} and is discarded. The positive x-intercepts {{x = 2}} and {{x = 5}} remain and reflect across the y-axis to {{x = -2}} and {{x = -5}}, giving {{x = -5, -2, 2, 5}}.",
      },
      {
        id: "2-functions-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "modulus-reciprocal-even-odd-hl",
        question:
          "The curve {{y = f(x)}} crosses the x-axis at {{x = 1}}, has a local maximum at {{(3, 2)}}, and approaches horizontal asymptote {{y = -3}} as {{x -> ∞}}. Which statement accurately describes {{y = [f(x)]^2}}?",
        options: [
          "Tangent minimum at {{(1, 0)}}, local maximum at {{(3, 4)}}, and HA {{y = 9}}",
          "Sharp cusp at {{(1, 0)}}, local maximum at {{(3, 4)}}, and HA {{y = 9}}",
          "Tangent minimum at {{(1, 0)}}, local maximum at {{(3, 4)}}, and HA {{y = -9}}",
          "Vertical asymptote at {{x = 1}}, local maximum at {{(3, 2)}}, and HA {{y = 9}}",
        ],
        answerIndex: 0,
        hints: [
          "Squaring every y-value turns {{-3}} into {{(-3)^2 = 9}} and {{2}} into {{2^2 = 4}}.",
          "Because the derivative of {{[f(x)]^2}} is {{2f(x)f'(x)}}, every simple zero of {{f}} becomes a smooth stationary point (tangent minimum), not a sharp cusp!",
        ],
        explanation:
          "Squaring gives a smooth tangent minimum at {{(1, 0)}}, maps the positive local maximum {{(3, 2)}} to {{(3, 4)}}, and maps the horizontal asymptote {{y = -3}} to {{y = (-3)^2 = 9}}.",
      },
      {
        id: "2-functions-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Solve",
        guideRef: "modulus-reciprocal-even-odd-hl",
        question: "What is the solution set of the rational inequality {{(3x - 2)/(x - 4) <= 2}}?",
        options: [
          "{{-6 <= x <= 4}}",
          "{{-6 <= x < 4}}",
          "{{x <= -6}} or {{x > 4}}",
          "{{x <= -6}} only",
        ],
        answerIndex: 1,
        hints: [
          "Do NOT multiply by {{(x - 4)}}! Subtract {{2}} from both sides and combine into a single fraction.",
          "Test the sign of {{(x + 6)/(x - 4)}} on each interval, and remember {{x = 4}} makes the denominator zero.",
        ],
        explanation:
          "Subtracting {{2}} gives {{(3x - 2 - 2(x - 4))/(x - 4) <= 0 => (x + 6)/(x - 4) <= 0}}. The fraction is non-positive between {{-6}} and {{4}}, excluding the vertical asymptote {{x = 4}}: {{-6 <= x < 4}}.",
      },
      {
        id: "2-functions-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Solve",
        guideRef: "modulus-reciprocal-even-odd-hl",
        question: "What is the solution set of the modulus inequality {{|2x - 3| > |x + 6|}}?",
        options: [
          "{{-1 < x < 9}}",
          "{{x < -9}} or {{x > 1}}",
          "{{x > 9}} only",
          "{{x < -1}} or {{x > 9}}",
        ],
        answerIndex: 3,
        hints: [
          "Both sides are guaranteed non-negative, so squaring preserves the inequality: {{(2x - 3)^2 - (x + 6)^2 > 0}}.",
          "Use difference of squares {{A^2 - B^2 = (A - B)(A + B)}} to factor rapidly.",
        ],
        explanation:
          "Squaring and applying difference of squares gives {{[(2x - 3) - (x + 6)][(2x - 3) + (x + 6)] > 0 => (x - 9)(3x + 3) > 0 => 3(x - 9)(x + 1) > 0}}, giving {{x < -1}} or {{x > 9}}.",
      },
      {
        id: "2-functions-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Solve",
        guideRef: "modulus-reciprocal-even-odd-hl",
        question: "What is the exact set of real solutions to the equation {{|x^2 - 5x + 4| = 4 - x}}?",
        options: [
          "{{x = 0, 4}} only",
          "{{x = 0, 2}} only",
          "{{x = 0, 2, 4}}",
          "{{x = 2, 4}} only",
        ],
        answerIndex: 2,
        hints: [
          "First note the non-negativity constraint {{4 - x >= 0 => x <= 4}}.",
          "Solve BOTH {{x^2 - 5x + 4 = 4 - x}} and {{x^2 - 5x + 4 = -(4 - x)}}, keeping only roots satisfying {{x <= 4}}.",
        ],
        explanation:
          "Case 1: {{x^2 - 5x + 4 = 4 - x => x^2 - 4x = 0 => x = 0, 4}}. Case 2: {{x^2 - 5x + 4 = x - 4 => x^2 - 6x + 8 = 0 => x = 2, 4}}. All three distinct roots {{0, 2, 4}} satisfy {{4 - x >= 0}}.",
      },
    ],
  },
];
