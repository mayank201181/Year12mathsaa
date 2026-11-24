import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 questions: 4 MCQs balanced 0,1,2,3 + 6 ShortQs)
  // ===========================================================================
  quiz: [
    {
      id: "5a-differentiation-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "limits-rules-tangents",
      question: "Evaluate {{lim_(x -> -2) (x^2 - 4)/(x + 2)}}.",
      options: ["{{-4}}", "{{0}}", "{{4}}", "{{-2}}"],
      answerIndex: 0,
      hints: [
        "Direct substitution yields {{0/0}}; factorise {{x^2 - 4}} as a difference of squares.",
        "Cancel {{(x + 2)}} for {{x != -2}}, then substitute {{x = -2}}.",
      ],
      explanation:
        "For {{x != -2}}, {{(x^2 - 4)/(x + 2) = ((x - 2)(x + 2))/(x + 2) = x - 2}}, which approaches {{-2 - 2 = -4}} as {{x -> -2}}.",
    },
    {
      id: "5a-differentiation-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Find",
      guideRef: "limits-rules-tangents",
      question: "Find {{f'(3)}} given {{f(x) = x^3 - 5x + 2}}.",
      answer: { type: "number", value: 22 },
      hints: [
        "Differentiate term by term using the power rule to find {{f'(x)}}.",
        "Substitute {{x = 3}} into {{f'(x) = 3x^2 - 5}}.",
      ],
      traps: [
        {
          spec: { type: "number", value: 14 },
          feedback: "That is {{f(3)}} (the height), not {{f'(3)}} (the gradient)! Differentiate first.",
        },
      ],
      solution: [
        "Differentiate term by term: {{f'(x) = 3x^2 - 5}}.",
        "Evaluate at {{x = 3}}: {{f'(3) = 3(3)^2 - 5 = 27 - 5 = 22}}.",
      ],
      commonError: "Evaluating {{f(3)}} instead of {{f'(3)}}, or forgetting that the constant {{2}} differentiates to {{0}}.",
    },
    {
      id: "5a-differentiation-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Find",
      guideRef: "limits-rules-tangents",
      question: "Find the exact y-intercept of the tangent line to {{y = 2x^2 - 3x + 5}} at {{x = 2}}.",
      answer: { type: "number", value: -3 },
      hints: [
        "Find both the point {{(2, y(2))}} and the tangent slope {{y'(2)}}.",
        "Write {{y - y_0 = m(x - 2)}} and rearrange into {{y = mx + c}} to read off {{c}}.",
      ],
      traps: [
        {
          spec: { type: "number", value: 5 },
          feedback: "That is the gradient {{m}} (and also the y-intercept of the parabola), not the y-intercept of the tangent line!",
        },
      ],
      solution: [
        "At {{x = 2}}, {{y(2) = 2(4) - 6 + 5 = 7}}, so the point of tangency is {{(2, 7)}}.",
        "{{dy/dx = 4x - 3}}, so the tangent gradient is {{m = 4(2) - 3 = 5}}.",
        "Tangent equation: {{y - 7 = 5(x - 2)}} ⇒ {{y = 5x - 3}}, so the y-intercept is {{-3}}.",
      ],
      commonError: "Reading the parabola's y-intercept ({{5}}) instead of finding the tangent line's y-intercept.",
    },
    {
      id: "5a-differentiation-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Find",
      guideRef: "curve-sketching-optimization-kinematics",
      question: "Find the local minimum value of {{f(x) = x^2 - 8x + 21}}.",
      options: ["{{4}}", "{{5}}", "{{13}}", "{{21}}"],
      answerIndex: 1,
      hints: [
        "Solve {{f'(x) = 0}} to find the x-coordinate of the stationary point.",
        "'Minimum value' means the y-value {{f(x)}} at that point, not the x-coordinate!",
      ],
      explanation:
        "{{f'(x) = 2x - 8 = 0}} ⇒ {{x = 4}} (and {{f''(4) = 2 > 0}} confirms a minimum). The minimum value is {{f(4) = 16 - 32 + 21 = 5}}.",
    },
    {
      id: "5a-differentiation-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Find",
      guideRef: "curve-sketching-optimization-kinematics",
      question: "Find the x-coordinate of the point of inflection of {{f(x) = x^3 - 9x^2 + 15x - 4}}.",
      answer: { type: "number", value: 3 },
      hints: [
        "Differentiate twice to obtain {{f''(x)}}.",
        "Solve {{f''(x) = 0}} and verify that {{f''(x)}} changes sign across that x-value.",
      ],
      solution: [
        "{{f'(x) = 3x^2 - 18x + 15}} and {{f''(x) = 6x - 18 = 6(x - 3)}}.",
        "Setting {{f''(x) = 0}} gives {{x = 3}}. Since {{f''(x) < 0}} for {{x < 3}} and {{f''(x) > 0}} for {{x > 3}}, concavity changes sign at {{x = 3}}.",
      ],
    },
    {
      id: "5a-differentiation-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Find",
      guideRef: "curve-sketching-optimization-kinematics",
      question:
        "A particle moves along a line with displacement {{s(t) = t^3 - 4.5 t^2 + 6t}} metres for {{t >= 0}}. Find the two times {{t}} (in seconds) when the particle is instantaneously at rest. Give both values separated by a comma.",
      answer: { type: "list", values: [1, 2], ordered: false },
      hints: [
        "Instantaneous rest occurs when velocity {{v(t) = s'(t) = 0}}.",
        "Differentiate {{s(t)}} to get {{3t^2 - 9t + 6 = 0}}, divide by {{3}}, and factorise.",
      ],
      solution: [
        "Velocity: {{v(t) = s'(t) = 3t^2 - 9t + 6 = 3(t^2 - 3t + 2) = 3(t - 1)(t - 2)}}.",
        "Setting {{v(t) = 0}} gives {{t = 1}} s and {{t = 2}} s.",
      ],
    },
    {
      id: "5a-differentiation-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "first-principles-lhopital-hl",
      question: "Evaluate {{lim_(x -> 0) (tan(4x))/(2x)}}.",
      options: ["{{1/2}}", "{{4}}", "{{2}}", "{{0}}"],
      answerIndex: 2,
      hints: [
        "Check that substituting {{x = 0}} produces the indeterminate form {{0/0}}.",
        "Apply L'Hôpital's rule using {{d/dx(tan(4x)) = 4 sec^2(4x)}}.",
      ],
      explanation:
        "Since the limit has form {{0/0}}, L'Hôpital's rule gives {{lim_(x -> 0) (4 sec^2(4x))/2 = (4 * 1)/2 = 2}}.",
    },
    {
      id: "5a-differentiation-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "first-principles-lhopital-hl",
      question: "Use L'Hôpital's rule to evaluate {{lim_(x -> 0) (e^(4x) - 1 - 4x)/x^2}}.",
      answer: { type: "number", value: 8 },
      hints: [
        "Verify {{0/0}} and apply L'Hôpital once to get {{lim_(x -> 0) (4 e^(4x) - 4)/(2x)}}.",
        "Check {{0/0}} again and apply L'Hôpital a second time!",
      ],
      traps: [
        {
          spec: { type: "number", value: 16 },
          feedback: "Remember the denominator {{x^2}} differentiates twice to {{2}}, so divide {{16}} by {{2}}!",
        },
      ],
      solution: [
        "Form {{0/0}} at {{x = 0}}. First L'Hôpital step: {{lim_(x -> 0) (4 e^(4x) - 4)/(2x)}}.",
        "Still {{0/0}} at {{x = 0}}. Second L'Hôpital step: {{lim_(x -> 0) (16 e^(4x))/2 = 16/2 = 8}}.",
      ],
    },
    {
      id: "5a-differentiation-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "implicit-related-rates-trig-hl",
      question: "Differentiate {{y = log_2 x}} ({{x > 0}}) with respect to {{x}}.",
      options: [
        "{{(ln 2)/x}}",
        "{{2^x ln 2}}",
        "{{1/(2x)}}",
        "{{1/(x ln 2)}}",
      ],
      answerIndex: 3,
      hints: [
        "Rewrite {{log_2 x}} using the change-of-base formula {{(ln x)/(ln 2)}}.",
        "Differentiate {{(1/(ln 2)) ln x}} using {{d/dx(ln x) = 1/x}}.",
      ],
      explanation:
        "Writing {{y = (ln x)/(ln 2)}} immediately gives {{dy/dx = 1/(x ln 2)}}.",
    },
    {
      id: "5a-differentiation-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "implicit-related-rates-trig-hl",
      question:
        "Find the exact gradient {{dy/dx}} of the ellipse {{x^2 + 3y^2 = 7}} at the point {{(2, 1)}}. Give your answer as a simplified fraction.",
      answer: { type: "fraction", n: -2, d: 3, simplest: true },
      hints: [
        "Differentiate implicitly with respect to {{x}}: {{2x + 6y (dy/dx) = 0}}.",
        "Substitute {{x = 2}} and {{y = 1}}, then solve for {{dy/dx}}.",
      ],
      traps: [
        {
          spec: { type: "fraction", n: 2, d: 3, simplest: true },
          feedback: "Check the sign when moving {{2x}} to the right-hand side of {{2x + 6y (dy/dx) = 0}}.",
        },
      ],
      solution: [
        "Differentiate both sides with respect to {{x}}: {{2x + 6y (dy/dx) = 0}}.",
        "Substitute {{x = 2, y = 1}}: {{4 + 6(dy/dx) = 0}} ⇒ {{dy/dx = -4/6 = -2/3}}.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 PAPERS × 15 QUESTIONS = 30 QUESTIONS)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: Non-GDC · Exact Values (SL & HL)
    // -------------------------------------------------------------------------
    {
      id: "5a-differentiation-p1",
      title: "Practice Paper 1: Non-GDC Exact Calculus (SL & HL)",
      level: "SL",
      questions: [
        {
          id: "5a-differentiation-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Find",
          guideRef: "limits-rules-tangents",
          question: "Differentiate {{f(x) = 3x^4 - 2x^2 + 7x - 9}}. Give {{f'(x)}} as a simplified polynomial expression in {{x}}.",
          answer: { type: "expression", expr: "12x^3 - 4x + 7", form: "simplified" },
          hints: [
            "Apply the power rule {{d/dx(x^n) = n x^(n-1)}} to each term separately.",
            "Remember the constant term {{-9}} differentiates to {{0}}.",
          ],
          solution: [
            "{{f'(x) = 3(4x^3) - 2(2x) + 7(1) - 0 = 12x^3 - 4x + 7}}.",
          ],
        },
        {
          id: "5a-differentiation-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "limits-rules-tangents",
          question: "Find the exact value of {{f'(1)}} given {{f(x) = (x^2 + 1)^4}}.",
          answer: { type: "number", value: 64 },
          hints: [
            "Apply the chain rule with outer power {{4}} and inner expression {{x^2 + 1}}.",
            "Do not forget to multiply by the inner derivative {{2x}} before substituting {{x = 1}}.",
          ],
          traps: [
            {
              spec: { type: "number", value: 32 },
              feedback: "You forgot to multiply by the chain-rule factor {{d/dx(x^2 + 1) = 2x}}!",
            },
          ],
          solution: [
            "By the chain rule, {{f'(x) = 4(x^2 + 1)^3 * (2x) = 8x(x^2 + 1)^3}}.",
            "At {{x = 1}}, {{f'(1) = 8(1)(1 + 1)^3 = 8 * 8 = 64}}.",
          ],
        },
        {
          id: "5a-differentiation-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "limits-rules-tangents",
          question: "Given {{f(x) = (4x - 1)/(x + 1)}}, find the exact value of {{f'(2)}} as a simplified fraction.",
          answer: { type: "fraction", n: 5, d: 9, simplest: true },
          hints: [
            "Use the quotient rule {{(u'v - uv')/v^2}} with {{u = 4x - 1}} and {{v = x + 1}}.",
            "Simplify the numerator {{4(x + 1) - (4x - 1)(1)}} carefully — watch the double negative!",
          ],
          traps: [
            {
              spec: { type: "fraction", n: 1, d: 3, simplest: true },
              feedback: "Watch the brackets when subtracting: {{4(x + 1) - (4x - 1) = 4x + 4 - 4x + 1 = 5}}, not {{3}}!",
            },
          ],
          solution: [
            "{{f'(x) = (4(x + 1) - (4x - 1)(1))/(x + 1)^2 = (4x + 4 - 4x + 1)/(x + 1)^2 = 5/(x + 1)^2}}.",
            "At {{x = 2}}, {{f'(2) = 5/(2 + 1)^2 = 5/9}}.",
          ],
        },
        {
          id: "5a-differentiation-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "limits-rules-tangents",
          question:
            "The tangent line to {{y = x^3 - 2x^2 + 3}} at {{x = 2}} has equation {{y = mx + c}}. Give the simplified expression {{mx + c}}.",
          answer: { type: "expression", expr: "4x - 5", form: "simplified" },
          hints: [
            "Evaluate both {{y(2)}} and {{y'(2)}} using {{y' = 3x^2 - 4x}}.",
            "Substitute into {{y - y(2) = y'(2)(x - 2)}} and simplify.",
          ],
          solution: [
            "At {{x = 2}}: {{y(2) = 8 - 8 + 3 = 3}}, so the point is {{(2, 3)}}.",
            "{{dy/dx = 3x^2 - 4x}}, giving gradient {{m = 3(4) - 4(2) = 4}}.",
            "Tangent: {{y - 3 = 4(x - 2)}} ⇒ {{y = 4x - 5}}.",
          ],
        },
        {
          id: "5a-differentiation-p1-q05",
          kind: "written",
          marks: 5,
          difficulty: "core",
          level: "SL",
          commandTerm: "Hence",
          guideRef: "limits-rules-tangents",
          question:
            "Consider {{f(x) = (2x - 1) e^(2 - x)}}. (a) Find {{f'(x)}} in factorised form. (b) Hence determine the exact equation of the normal to {{y = f(x)}} at {{x = 2}}, giving your answer in the form {{y = mx + c}}.",
          hints: [
            "Apply the product rule with {{u = 2x - 1}} and {{v = e^(2 - x)}}, remembering {{v' = -e^(2 - x)}}.",
            "Factor out {{e^(2 - x)}} to simplify {{f'(x)}} cleanly.",
            "Evaluate both {{f(2)}} and {{m_T = f'(2)}}, then use {{m_N = -1/m_T}} for the normal.",
          ],
          modelAnswer:
            "(a) Using the product rule with {{u = 2x - 1}} ({{u' = 2}}) and {{v = e^(2 - x)}} ({{v' = -e^(2 - x)}}):\n" +
            "{{f'(x) = 2 e^(2 - x) - (2x - 1) e^(2 - x) = (3 - 2x) e^(2 - x)}}.\n" +
            "(b) At {{x = 2}}, the y-coordinate is {{f(2) = (4 - 1) e^0 = 3}}, giving point {{(2, 3)}}.\n" +
            "The tangent gradient is {{m_T = (3 - 4) e^0 = -1}}.\n" +
            "Hence the normal gradient is {{m_N = -1/(-1) = 1}}.\n" +
            "Normal equation: {{y - 3 = 1(x - 2)}}, which simplifies to {{y = x + 1}}.",
          markScheme: [
            { point: "Applies product rule and chain rule correctly to obtain {{2 e^(2 - x) - (2x - 1) e^(2 - x)}}", keywords: ["product rule", "-e^(2 - x)", "2 e^(2 - x)"] },
            { point: "Factorises accurately to {{(3 - 2x) e^(2 - x)}}", keywords: ["3 - 2x", "(3 - 2x)"] },
            { point: "Evaluates {{f(2) = 3}} and tangent gradient {{m_T = -1}}", keywords: ["(2, 3)", "f(2) = 3", "m_t = -1"] },
            { point: "Uses negative reciprocal to obtain normal gradient {{m_N = 1}}", keywords: ["m_n = 1", "normal gradient"] },
            { point: "States final normal equation {{y = x + 1}}", keywords: ["y = x + 1"] },
          ],
          commonError: "Forgetting the minus sign in {{d/dx(e^(2 - x)) = -e^(2 - x)}} or writing the tangent equation instead of the normal.",
        },
        {
          id: "5a-differentiation-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "curve-sketching-optimization-kinematics",
          question: "Find the exact x-coordinate of the local maximum of {{f(x) = x^3 - 3x^2 - 24x + 5}}.",
          answer: { type: "number", value: -2 },
          hints: [
            "Solve {{f'(x) = 3x^2 - 6x - 24 = 0}} to find both stationary x-values.",
            "Test each stationary point with {{f''(x) = 6x - 6}}: local maximum requires {{f''(x) < 0}}.",
          ],
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "At {{x = 4}}, {{f''(4) = 18 > 0}}, so {{x = 4}} is the local MINIMUM — check the other stationary point!",
            },
          ],
          solution: [
            "{{f'(x) = 3x^2 - 6x - 24 = 3(x - 4)(x + 2) = 0}} ⇒ {{x = -2}} or {{x = 4}}.",
            "{{f''(x) = 6x - 6}}. At {{x = -2}}, {{f''(-2) = -18 < 0}} (local maximum); at {{x = 4}}, {{f''(4) = 18 > 0}} (local minimum).",
            "Hence the local maximum is at {{x = -2}}.",
          ],
        },
        {
          id: "5a-differentiation-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "curve-sketching-optimization-kinematics",
          question: "Find the POSITIVE x-coordinate of the point of inflection of {{f(x) = ln(x^2 + 1)}}.",
          answer: { type: "number", value: 1 },
          hints: [
            "Use the chain rule to find {{f'(x) = 2x/(x^2 + 1)}}.",
            "Differentiate again using the quotient rule to find {{f''(x)}} and solve {{f''(x) = 0}}.",
          ],
          solution: [
            "{{f'(x) = (2x)/(x^2 + 1)}}.",
            "Quotient rule: {{f''(x) = (2(x^2 + 1) - 2x(2x))/(x^2 + 1)^2 = (2 - 2x^2)/(x^2 + 1)^2 = (2(1 - x^2))/(x^2 + 1)^2}}.",
            "Setting {{f''(x) = 0}} gives {{x = ±1}}, and {{f''}} changes from positive to negative across {{x = 1}}. The positive x-coordinate is {{1}}.",
          ],
        },
        {
          id: "5a-differentiation-p1-q08",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "curve-sketching-optimization-kinematics",
          question:
            "Let {{f(x) = x^3 - 6x^2 + 9x - 4}}. (a) Find the coordinates of all stationary points and classify each one. (b) Find the coordinates of the point of inflection, justifying that concavity changes there. (c) State the open interval where {{f}} is simultaneously decreasing and concave up.",
          hints: [
            "Factorise {{f'(x) = 3(x - 1)(x - 3)}} and remember to compute y-coordinates in {{f(x)}}.",
            "Use {{f''(x) = 6x - 12}} both to classify stationary points and to test the sign change across {{x = 2}}.",
            "Intersect the decreasing interval ({{f'(x) < 0}}) with the concave-up interval ({{f''(x) > 0}}).",
          ],
          modelAnswer:
            "(a) {{f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3) = 0}} ⇒ {{x = 1}} or {{x = 3}}.\n" +
            "{{f''(x) = 6x - 12}}.\n" +
            "At {{x = 1}}: {{f(1) = 1 - 6 + 9 - 4 = 0}} and {{f''(1) = -6 < 0}}, so {{(1, 0)}} is a local maximum.\n" +
            "At {{x = 3}}: {{f(3) = 27 - 54 + 27 - 4 = -4}} and {{f''(3) = 6 > 0}}, so {{(3, -4)}} is a local minimum.\n" +
            "(b) Setting {{f''(x) = 0}} gives {{x = 2}}, with {{f(2) = 8 - 24 + 18 - 4 = -2}}. For {{x < 2}}, {{f''(x) < 0}} (concave down); for {{x > 2}}, {{f''(x) > 0}} (concave up). Because {{f''(x)}} switches sign across {{x = 2}}, {{(2, -2)}} is a point of inflection.\n" +
            "(c) Decreasing on {{1 < x < 3}} and concave up on {{x > 2}}; their overlap is {{2 < x < 3}}.",
          markScheme: [
            { point: "Differentiates and solves {{f'(x) = 3(x - 1)(x - 3) = 0}} to obtain {{x = 1, 3}}", keywords: ["3(x - 1)(x - 3)", "3x^2 - 12x + 9"] },
            { point: "Finds and classifies local maximum {{(1, 0)}} via {{f''(1) = -6 < 0}}", keywords: ["(1, 0)", "local maximum"] },
            { point: "Finds and classifies local minimum {{(3, -4)}} via {{f''(3) = 6 > 0}}", keywords: ["(3, -4)", "local minimum"] },
            { point: "Solves {{f''(x) = 6x - 12 = 0}} to find inflection coordinates {{(2, -2)}}", keywords: ["(2, -2)", "6x - 12"] },
            { point: "Explicitly verifies sign change in {{f''(x)}} from negative to positive across {{x = 2}}", keywords: ["switches sign", "concave down", "f''(x) < 0"] },
            { point: "Identifies the intersection interval {{2 < x < 3}}", keywords: ["2 < x < 3"] },
          ],
          markbands: [
            { band: "5–6", marks: [5, 6], descriptor: "Complete, exact stationary and inflection coordinates with rigorous second-derivative sign-change justification and correct intersection interval." },
            { band: "3–4", marks: [3, 4], descriptor: "Correct derivatives and most coordinates found, but omits explicit sign-change justification for inflection or errs on final interval." },
            { band: "1–2", marks: [1, 2], descriptor: "Differentiates accurately to find {{f'(x)}} or {{f''(x)}} with partial progress toward stationary points." },
            { band: "0", marks: [0, 0], descriptor: "No valid calculus method shown." },
          ],
        },
        {
          id: "5a-differentiation-p1-q09",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "SL",
          commandTerm: "Show that",
          guideRef: "curve-sketching-optimization-kinematics",
          question:
            "An open-top rectangular tank with a square base of side {{x}} m and height {{h}} m has fixed volume {{32}} m³. (a) Show that its external surface area (base plus four vertical walls) is {{S(x) = x^2 + 128/x}}. (b) Find the exact dimensions {{x}} and {{h}} that minimise {{S}}, justifying that you have found a minimum, and state the minimum surface area.",
          hints: [
            "Write volume {{x^2 h = 32}} to isolate {{h = 32/x^2}}, then substitute into {{S = x^2 + 4xh}}.",
            "Rewrite {{128/x}} as {{128 x^(-1)}} before differentiating with respect to {{x}}.",
            "Compute {{S''(x)}} at your critical value to prove it is a minimum, then calculate {{h}} and {{S}}.",
          ],
          modelAnswer:
            "(a) Volume constraint: {{x^2 h = 32}} ⇒ {{h = 32/x^2}} (for {{x > 0}}).\n" +
            "Total area of base plus four walls: {{S = x^2 + 4xh = x^2 + 4x(32/x^2) = x^2 + 128/x}}.\n" +
            "(b) Differentiating {{S(x) = x^2 + 128 x^(-1)}} gives {{S'(x) = 2x - 128/x^2}}.\n" +
            "Setting {{S'(x) = 0}}: {{2x = 128/x^2}} ⇒ {{x^3 = 64}} ⇒ {{x = 4}} m.\n" +
            "Second derivative test: {{S''(x) = 2 + 256/x^3}}, so {{S''(4) = 2 + 4 = 6 > 0}} (in fact {{S''(x) > 0}} for all {{x > 0}}), confirming a global minimum.\n" +
            "Corresponding height: {{h = 32/4^2 = 2}} m. Minimum surface area: {{S(4) = 16 + 32 = 48}} m².",
          markScheme: [
            { point: "Expresses {{h = 32/x^2}} from the volume constraint", keywords: ["32/x^2", "x^2 h = 32"] },
            { point: "Substitutes into {{x^2 + 4xh}} forward cleanly to reach {{x^2 + 128/x}}", keywords: ["4xh", "4x(32/x^2)"] },
            { point: "Differentiates accurately to {{S'(x) = 2x - 128/x^2}}", keywords: ["2x - 128/x^2", "128 x^(-1)"] },
            { point: "Solves {{S'(x) = 0}} to obtain {{x^3 = 64}} ⇒ {{x = 4}} m", keywords: ["x^3 = 64", "x = 4"] },
            { point: "Justifies minimum using {{S''(4) = 6 > 0}} (or sign change of {{S'}})", keywords: ["2 + 256/x^3", "s''(4) = 6"] },
            { point: "Computes optimal height {{h = 2}} m and minimum area {{48}} m²", keywords: ["h = 2", "48"] },
          ],
          markbands: [
            { band: "5–6", marks: [5, 6], descriptor: "Forward proof of {{S(x)}}, exact dimensions {{x = 4, h = 2}}, rigorous minimum justification via {{S''}}, and exact minimum area {{48}} m²." },
            { band: "3–4", marks: [3, 4], descriptor: "Correct area derivation and {{x = 4}} found, but lacks minimum verification or omits {{h}} / minimum area." },
            { band: "1–2", marks: [1, 2], descriptor: "Sets up constraint {{h = 32/x^2}} or attempts differentiation of {{S(x)}}." },
            { band: "0", marks: [0, 0], descriptor: "No relevant progress." },
          ],
        },
        {
          id: "5a-differentiation-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "first-principles-lhopital-hl",
          question: "Use L'Hôpital's rule to evaluate {{lim_(x -> 0) (ln(1 + 3x))/(sin(2x))}}. Give your answer as a simplified exact fraction.",
          answer: { type: "fraction", n: 3, d: 2, simplest: true },
          hints: [
            "Verify that plugging in {{x = 0}} gives {{ln(1)/sin(0) = 0/0}}.",
            "Differentiate numerator and denominator separately using the chain rule.",
          ],
          solution: [
            "At {{x = 0}}, numerator {{ln 1 = 0}} and denominator {{sin 0 = 0}} ({{0/0}} form).",
            "By L'Hôpital's rule: {{lim_(x -> 0) (3/(1 + 3x))/(2 cos(2x)) = 3/(2 * 1) = 3/2}}.",
          ],
        },
        {
          id: "5a-differentiation-p1-q11",
          kind: "written",
          marks: 5,
          difficulty: "core",
          level: "HL",
          commandTerm: "Derive",
          guideRef: "first-principles-lhopital-hl",
          question: "Differentiate {{f(x) = 1/(2x + 1)}} (where {{x != -1/2}}) from first principles.",
          hints: [
            "Start strictly from {{f'(x) = lim_(h -> 0) [1/(2(x + h) + 1) - 1/(2x + 1)] / h}}.",
            "Combine the two fractions in the numerator over the common denominator {{(2x + 2h + 1)(2x + 1)}}.",
            "Cancel {{h}} cleanly BEFORE taking the limit {{h -> 0}}.",
          ],
          modelAnswer:
            "By the first-principles definition:\n" +
            "{{f'(x) = lim_(h -> 0) (1/(2(x + h) + 1) - 1/(2x + 1))/h}}\n" +
            "Combining over a common denominator:\n" +
            "{{f'(x) = lim_(h -> 0) ((2x + 1) - (2x + 2h + 1))/(h(2x + 2h + 1)(2x + 1))}}\n" +
            "Simplifying the numerator gives {{-2h}}:\n" +
            "{{f'(x) = lim_(h -> 0) (-2h)/(h(2x + 2h + 1)(2x + 1)) = lim_(h -> 0) (-2)/((2x + 2h + 1)(2x + 1))}}\n" +
            "Evaluating the limit as {{h -> 0}} yields {{f'(x) = -2/(2x + 1)^2}}.",
          markScheme: [
            { point: "Sets up the exact difference quotient {{lim_(h -> 0) (1/(2(x + h) + 1) - 1/(2x + 1))/h}}", keywords: ["2(x + h) + 1", "lim_(h -> 0)"] },
            { point: "Combines fractions over common denominator {{(2x + 2h + 1)(2x + 1)}}", keywords: ["common denominator", "2x + 2h + 1"] },
            { point: "Simplifies numerator correctly to {{-2h}}", keywords: ["-2h"] },
            { point: "Cancels {{h}} to obtain {{lim_(h -> 0) (-2)/((2x + 2h + 1)(2x + 1))}}", keywords: ["(-2)/((2x + 2h + 1)(2x + 1))"] },
            { point: "Takes limit as {{h -> 0}} cleanly to arrive at {{-2/(2x + 1)^2}}", keywords: ["-2/(2x + 1)^2"] },
          ],
          commonError: "Writing {{2x + h + 1}} instead of {{2(x + h) + 1 = 2x + 2h + 1}}, or dropping {{lim_(h -> 0)}} prematurely.",
        },
        {
          id: "5a-differentiation-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "implicit-related-rates-trig-hl",
          question: "Given {{f(x) = tan x - 2 ln(cos x)}} for {{0 <= x < pi/2}}, find the exact value of {{f'(pi/4)}}.",
          answer: { type: "number", value: 4 },
          hints: [
            "Recall {{d/dx(tan x) = sec^2 x}} and apply the chain rule to {{ln(cos x)}}.",
            "Simplify {{f'(x) = sec^2 x + 2 tan x}}, then evaluate at {{x = pi/4}} where {{cos(pi/4) = 1/sqrt(2)}} and {{tan(pi/4) = 1}}.",
          ],
          traps: [
            {
              spec: { type: "number", value: 0 },
              feedback: "Watch the sign: {{d/dx(ln(cos x)) = (-sin x)/(cos x) = -tan x}}, so {{-2(-tan x) = +2 tan x}}!",
            },
          ],
          solution: [
            "{{f'(x) = sec^2 x - 2((-sin x)/(cos x)) = sec^2 x + 2 tan x}}.",
            "At {{x = pi/4}}, {{sec^2(pi/4) = 1/(1/2) = 2}} and {{tan(pi/4) = 1}}, giving {{f'(pi/4) = 2 + 2(1) = 4}}.",
          ],
        },
        {
          id: "5a-differentiation-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "implicit-related-rates-trig-hl",
          question: "Find the exact value of {{f'(1)}} given {{f(x) = arcsin((3x)/5)}}. Express your answer as a simplified fraction.",
          answer: { type: "fraction", n: 3, d: 4, simplest: true },
          hints: [
            "Use {{d/dx(arcsin u) = u'/sqrt(1 - u^2)}} with {{u = 3x/5}} and {{u' = 3/5}}.",
            "Substitute {{x = 1}} into {{(3/5)/sqrt(1 - 9/25)}} and simplify {{sqrt(16/25)}}.",
          ],
          solution: [
            "By the chain rule, {{f'(x) = (3/5)/sqrt(1 - 9x^2/25) = 3/sqrt(25 - 9x^2)}}.",
            "At {{x = 1}}, {{f'(1) = 3/sqrt(25 - 9) = 3/4}}.",
          ],
        },
        {
          id: "5a-differentiation-p1-q14",
          kind: "written",
          marks: 7,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "first-principles-lhopital-hl",
          question:
            "(a) Use L'Hôpital's rule to evaluate {{lim_(x -> 0) (e^x - e^(-x) - 2x)/(x - sin x)}}, verifying the indeterminate form before each application. (4 marks)\n" +
            "(b) Evaluate {{lim_(x -> 0^+) x^2 ln x}}, clearly showing how the indeterminate product is rewritten as a quotient. (3 marks)",
          hints: [
            "In (a), three successive {{0/0}} applications are needed — track the sign of {{d/dx(e^(-x)) = -e^(-x)}} on every step!",
            "In (b), {{0 * (-∞)}} must be rewritten as {{(ln x)/x^(-2)}} (keeping {{ln x}} in the numerator!).",
            "After differentiating {{(ln x)/x^(-2)}}, simplify {{(1/x)/(-2 x^(-3))}} algebraically before taking {{x -> 0^+}}.",
          ],
          modelAnswer:
            "(a) At {{x = 0}}, numerator {{1 - 1 - 0 = 0}} and denominator {{0 - 0 = 0}} ⇒ {{0/0}} indeterminate form.\n" +
            "First application: {{lim_(x -> 0) (e^x + e^(-x) - 2)/(1 - cos x)}}. At {{x = 0}}, {{(1 + 1 - 2)/(1 - 1) = 0/0}}.\n" +
            "Second application: {{lim_(x -> 0) (e^x - e^(-x))/(sin x)}}. At {{x = 0}}, {{(1 - 1)/0 = 0/0}}.\n" +
            "Third application: {{lim_(x -> 0) (e^x + e^(-x))/(cos x) = (1 + 1)/1 = 2}}.\n" +
            "(b) As {{x -> 0^+}}, {{x^2 ln x}} has form {{0 * (-∞)}}. Rewrite as {{lim_(x -> 0^+) (ln x)/(x^(-2))}}, which has form {{-∞/∞}}.\n" +
            "Applying L'Hôpital: {{lim_(x -> 0^+) (1/x)/(-2 x^(-3)) = lim_(x -> 0^+) (-x^2)/2 = 0}}.",
          markScheme: [
            { point: "Verifies initial {{0/0}} form and applies L'Hôpital once to get {{(e^x + e^(-x) - 2)/(1 - cos x)}}", keywords: ["e^x + e^(-x) - 2", "1 - cos x"] },
            { point: "Checks {{0/0}} again and differentiates a second time to {{(e^x - e^(-x))/(sin x)}}", keywords: ["(e^x - e^(-x))/(sin x)", "sin x"] },
            { point: "Checks {{0/0}} a third time and differentiates to {{(e^x + e^(-x))/(cos x)}}", keywords: ["(e^x + e^(-x))/(cos x)", "cos x"] },
            { point: "Evaluates the third limit cleanly to {{2}}", keywords: ["= 2", "(1 + 1)/1"] },
            { point: "Rewrites {{0 * (-∞)}} as {{(ln x)/(x^(-2))}} and states {{-∞/∞}} form", keywords: ["(ln x)/(x^(-2))", "x^(-2)"] },
            { point: "Applies L'Hôpital accurately to obtain {{(1/x)/(-2 x^(-3))}}", keywords: ["-2 x^(-3)", "1/x"] },
            { point: "Simplifies to {{(-x^2)/2}} and concludes limit equals {{0}}", keywords: ["(-x^2)/2", "= 0"] },
          ],
          markbands: [
            { band: "6–7", marks: [6, 7], descriptor: "Rigorous verification of indeterminate forms before every L'Hôpital step, exact limit {{2}} in (a), clean quotient rewrite and limit {{0}} in (b)." },
            { band: "4–5", marks: [4, 5], descriptor: "Mostly accurate L'Hôpital steps across both parts with one minor sign slip or omitted indeterminate-form statement." },
            { band: "2–3", marks: [2, 3], descriptor: "Successfully starts part (a) or rewrites part (b) as a quotient, but stalls before completion." },
            { band: "0–1", marks: [0, 1], descriptor: "Minimal valid calculus progress." },
          ],
        },
        {
          id: "5a-differentiation-p1-q15",
          kind: "written",
          marks: 7,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Show that",
          guideRef: "implicit-related-rates-trig-hl",
          question:
            "Consider the implicit curve {{x^2 - xy + y^2 = 12}}. (a) Show that {{dy/dx = (y - 2x)/(2y - x)}}. (b) Find the exact coordinates of all points on the curve where the tangent is horizontal. (c) At the point with {{y > 0}} found in (b), calculate the exact value of {{d^2 y/dx^2}} and state whether the curve is concave up or concave down there.",
          hints: [
            "Use the product rule on {{-xy}}: {{d/dx(-xy) = -y - x(dy/dx)}}.",
            "Set the numerator {{y - 2x = 0}} ⇒ {{y = 2x}} and substitute into the ORIGINAL curve {{x^2 - xy + y^2 = 12}}.",
            "For (c), differentiate {{2x - y - x(dy/dx) + 2y(dy/dx) = 0}} implicitly again and plug in {{(2, 4)}} with {{dy/dx = 0}}!",
          ],
          modelAnswer:
            "(a) Differentiating implicitly with respect to {{x}} gives {{2x - (y + x y') + 2y y' = 0}}.\n" +
            "Grouping {{y'}} terms yields {{(2y - x) y' = y - 2x}}, hence {{y' = (y - 2x)/(2y - x)}}.\n" +
            "(b) Horizontal tangents require {{y' = 0}}, so {{y = 2x}} (with {{2y - x != 0}}).\n" +
            "Substituting {{y = 2x}} into the curve equation: {{x^2 - x(2x) + (2x)^2 = 12}} ⇒ {{3x^2 = 12}} ⇒ {{x^2 = 4}} ⇒ {{x = ±2}}.\n" +
            "Thus the horizontal tangent points are {{(2, 4)}} and {{(-2, -4)}} (both satisfy {{2y - x != 0}}).\n" +
            "(c) Differentiating {{2x - y - x y' + 2y y' = 0}} with respect to {{x}} again:\n" +
            "{{2 - y' - (y' + x y'') + 2(y')^2 + 2y y'' = 0}} ⇒ {{2 - 2y' + 2(y')^2 + (2y - x)y'' = 0}}.\n" +
            "At {{(2, 4)}} with {{y' = 0}}: {{2 + (8 - 2)y'' = 0}} ⇒ {{6 y'' = -2}} ⇒ {{d^2 y/dx^2 = -1/3}}.\n" +
            "Because the second derivative is negative ({{-1/3 < 0}}), concavity is downward (local maximum) at {{(2, 4)}}.",
          markScheme: [
            { point: "Differentiates implicitly with product rule on {{-xy}} to get {{2x - (y + x y') + 2y y' = 0}}", keywords: ["2x - (y + x", "2y y'"] },
            { point: "Collects {{y'}} terms into {{(2y - x) y' = y - 2x}} and divides cleanly", keywords: ["(2y - x) y'", "grouping"] },
            { point: "Sets {{y = 2x}} and substitutes into original equation to get {{3x^2 = 12}}", keywords: ["y = 2x", "3x^2 = 12"] },
            { point: "Finds both exact coordinate pairs {{(2, 4)}} and {{(-2, -4)}}", keywords: ["(2, 4)", "(-2, -4)"] },
            { point: "Differentiates a second time accurately (implicitly or via quotient rule)", keywords: ["2(y')^2", "(2y - x)y''"] },
            { point: "Substitutes {{(2, 4)}} and {{y' = 0}} to obtain {{d^2 y/dx^2 = -1/3}}", keywords: ["-1/3", "6 y'' = -2"] },
            { point: "Concludes concavity is downward because the second derivative is negative", keywords: ["concavity is downward", "local maximum"] },
          ],
          markbands: [
            { band: "6–7", marks: [6, 7], descriptor: "Flawless implicit first and second derivatives, both horizontal tangent points verified, exact {{-1/3}} and concavity conclusion." },
            { band: "4–5", marks: [4, 5], descriptor: "Correct parts (a) and (b) with valid attempt at {{d^2 y/dx^2}}, or one minor algebraic error in (c)." },
            { band: "2–3", marks: [2, 3], descriptor: "Completes part (a) and identifies {{y = 2x}}, with partial progress on coordinates." },
            { band: "0–1", marks: [0, 1], descriptor: "Minimal valid implicit differentiation." },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2: GDC (TI-Nspire CX) & HL Synthesis
    // -------------------------------------------------------------------------
    {
      id: "5a-differentiation-p2",
      title: "Practice Paper 2: GDC (TI-Nspire CX) Modelling & HL Synthesis",
      level: "SL",
      questions: [
        {
          id: "5a-differentiation-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "limits-rules-tangents",
          question:
            "Let {{f(x) = e^(0.5x) sin(x)}} with {{x}} in radians. Calculate {{f'(1.2)}}, giving your answer to 3 significant figures.",
          answer: { type: "number", value: 1.51, tolerance: 0.015 },
          hints: [
            "Ensure your TI-Nspire CX is in RAD mode, then use `Menu → 4 Calculus → 1 Numerical Derivative at a Point` (or differentiate via product rule).",
            "Analytically, {{f'(x) = e^(0.5x)(0.5 sin x + cos x)}}.",
          ],
          solution: [
            "Product rule: {{f'(x) = 0.5 e^(0.5x) sin x + e^(0.5x) cos x = e^(0.5x)(0.5 sin x + cos x)}}.",
            "Evaluating at {{x = 1.2}} rad: {{e^(0.6)(0.5 sin 1.2 + cos 1.2) ≈ 1.82212 * 0.82838 ≈ 1.5094}}.",
            "Rounding to 3 significant figures gives {{1.51}}.",
          ],
          commonError: "Leaving the GDC in DEGREE mode instead of RAD mode.",
        },
        {
          id: "5a-differentiation-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "limits-rules-tangents",
          question: "Find the exact gradient of the normal to {{y = x ln(x)}} at {{x = e^2}}. Give your answer as a simplified fraction.",
          answer: { type: "fraction", n: -1, d: 3, simplest: true },
          hints: [
            "Use the product rule to find {{dy/dx = ln x + 1}}.",
            "Evaluate {{m_T}} at {{x = e^2}} (recalling {{ln(e^2) = 2}}), then take {{-1/m_T}}.",
          ],
          traps: [
            {
              spec: { type: "number", value: 3 },
              feedback: "That is the TANGENT gradient {{m_T = 3}}; take the negative reciprocal for the normal!",
            },
          ],
          solution: [
            "Product rule: {{dy/dx = (1)(ln x) + x(1/x) = ln x + 1}}.",
            "At {{x = e^2}}, {{m_T = ln(e^2) + 1 = 2 + 1 = 3}}, so the normal gradient is {{m_N = -1/3}}.",
          ],
        },
        {
          id: "5a-differentiation-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "curve-sketching-optimization-kinematics",
          question:
            "Find the x-coordinate of the local minimum of {{f(x) = x^3 - 4x^2 + 2x + 5}}, giving your answer to 3 significant figures.",
          answer: { type: "number", value: 2.39, tolerance: 0.015 },
          hints: [
            "Solve {{f'(x) = 3x^2 - 8x + 2 = 0}} using the quadratic formula or TI-Nspire CX `Analyze Graph → Minimum`.",
            "Distinguish the local minimum from the local maximum using {{f''(x) = 6x - 8 > 0}}.",
          ],
          traps: [
            {
              spec: { type: "number", value: 0.279, tolerance: 0.01 },
              feedback: "At {{x ≈ 0.279}}, {{f''(x) < 0}}, so that is the local MAXIMUM — choose the larger root!",
            },
          ],
          solution: [
            "{{f'(x) = 3x^2 - 8x + 2 = 0}} ⇒ {{x = (8 ± sqrt(64 - 24))/6 = (4 ± sqrt(10))/3}}.",
            "Since {{f''(x) = 6x - 8 > 0}} at the larger root, the local minimum is at {{x = (4 + sqrt(10))/3 ≈ 2.3874 ≈ 2.39}} (3 s.f.).",
          ],
        },
        {
          id: "5a-differentiation-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "curve-sketching-optimization-kinematics",
          question:
            "A particle's velocity is modelled by {{v(t) = 4t e^(-0.5t)}} m s⁻¹ for {{t >= 0}}. Find the exact time {{t}} (in seconds) when the particle reaches its maximum velocity.",
          answer: { type: "number", value: 2 },
          hints: [
            "Maximum velocity occurs when acceleration {{a(t) = v'(t) = 0}} (with {{v'}} switching from positive to negative).",
            "Differentiate using the product rule and factor out {{2 e^(-0.5t)}}.",
          ],
          solution: [
            "{{v'(t) = 4 e^(-0.5t) + 4t(-0.5 e^(-0.5t)) = 2(2 - t) e^(-0.5t)}}.",
            "Since {{e^(-0.5t) > 0}}, {{v'(t) = 0}} at {{t = 2}} s, switching from positive to negative — confirming maximum velocity at {{t = 2}} s.",
          ],
        },
        {
          id: "5a-differentiation-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "curve-sketching-optimization-kinematics",
          question:
            "Find the POSITIVE x-coordinate of the point of inflection of the bell curve {{f(x) = e^(-x^2)}}. Give your answer to 3 significant figures.",
          answer: { type: "number", value: 0.707, tolerance: 0.01 },
          hints: [
            "Compute {{f'(x) = -2x e^(-x^2)}} and apply the product rule again to find {{f''(x)}}.",
            "Solve {{(4x^2 - 2) e^(-x^2) = 0}} for {{x > 0}}.",
          ],
          solution: [
            "{{f'(x) = -2x e^(-x^2)}} and {{f''(x) = -2 e^(-x^2) + (-2x)(-2x e^(-x^2)) = (4x^2 - 2) e^(-x^2)}}.",
            "Setting {{4x^2 - 2 = 0}} gives {{x = 1/sqrt(2) ≈ 0.7071 ≈ 0.707}} (3 s.f.), where {{f''}} switches from negative to positive.",
          ],
        },
        {
          id: "5a-differentiation-p2-q06",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "SL",
          commandTerm: "Show that",
          guideRef: "curve-sketching-optimization-kinematics",
          question:
            "A closed right-circular cylindrical soup can must hold {{500}} cm³. (a) Express the height {{h}} in terms of the radius {{r}}, and hence show that total surface area is {{A(r) = 2 pi r^2 + 1000/r}}. (b) Find the radius {{r}} and height {{h}} (both to 3 significant figures) that minimise the surface area, justifying that your answer gives a minimum. (c) Show analytically that for ANY fixed volume {{V}}, the optimal closed cylinder satisfies {{h = 2r}}.",
          hints: [
            "From {{pi r^2 h = 500}}, substitute {{h = 500/(pi r^2)}} into {{A = 2 pi r^2 + 2 pi r h}}.",
            "Set {{A'(r) = 4 pi r - 1000/r^2 = 0}}, verify {{A''(r) > 0}}, and compute {{r}} and {{h}} to 3 s.f.",
            "For (c), repeat with general volume {{V}}: {{A'(r) = 4 pi r - 2V/r^2 = 0}} ⇒ {{2 pi r^3 = V}}.",
          ],
          modelAnswer:
            "(a) From {{pi r^2 h = 500}}, {{h = 500/(pi r^2)}} ({{r > 0}}).\n" +
            "Total surface area (two circular ends plus curved wall): {{A(r) = 2 pi r^2 + 2 pi r(500/(pi r^2)) = 2 pi r^2 + 1000/r}}.\n" +
            "(b) {{A'(r) = 4 pi r - 1000/r^2 = 0}} ⇒ {{4 pi r^3 = 1000}} ⇒ {{r^3 = 250/pi ≈ 79.5775}} ⇒ {{r ≈ 4.3013 ≈ 4.30}} cm (3 s.f.).\n" +
            "Since {{A''(r) = 4 pi + 2000/r^3 > 0}} for all {{r > 0}}, this gives a global minimum.\n" +
            "Optimal height: {{h = 500/(pi * 4.3013^2) ≈ 8.6025 ≈ 8.60}} cm (3 s.f.).\n" +
            "(c) For general volume {{V = pi r^2 h}}, {{A(r) = 2 pi r^2 + 2V/r}}, so {{A'(r) = 4 pi r - 2V/r^2 = 0}} ⇒ {{2 pi r^3 = V}}.\n" +
            "Substituting {{V = pi r^2 h}} gives {{2 pi r^3 = pi r^2 h}}, and dividing by {{pi r^2 > 0}} proves {{h = 2r}}.",
          markScheme: [
            { point: "Writes {{h = 500/(pi r^2)}} and substitutes into {{2 pi r^2 + 2 pi r h}} cleanly", keywords: ["500/(pi r^2)", "2 pi r h"] },
            { point: "Differentiates to {{A'(r) = 4 pi r - 1000/r^2}} and sets equal to {{0}}", keywords: ["4 pi r - 1000/r^2", "250/pi"] },
            { point: "Calculates {{r = 4.30}} cm (3 s.f.) using full internal precision", keywords: ["4.30"] },
            { point: "Justifies global minimum via {{A''(r) = 4 pi + 2000/r^3 > 0}}", keywords: ["2000/r^3", "global minimum"] },
            { point: "Calculates optimal height {{h = 8.60}} cm (3 s.f.)", keywords: ["8.60"] },
            { point: "Proves generally {{2 pi r^3 = V = pi r^2 h}} ⇒ {{h = 2r}}", keywords: ["2 pi r^3", "2v/r"] },
          ],
          markbands: [
            { band: "5–6", marks: [5, 6], descriptor: "Clean forward area proof, accurate 3 s.f. radius and height with {{A'' > 0}} justification, and complete general proof of {{h = 2r}}." },
            { band: "3–4", marks: [3, 4], descriptor: "Solves numerical part accurately to 3 s.f. with minor rounding/justification omission, or omits general proof in (c)." },
            { band: "1–2", marks: [1, 2], descriptor: "Sets up constraint {{h = 500/(pi r^2)}} or differentiates {{A(r)}} correctly." },
            { band: "0", marks: [0, 0], descriptor: "No relevant optimization work." },
          ],
        },
        {
          id: "5a-differentiation-p2-q07",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "curve-sketching-optimization-kinematics",
          question:
            "A drone moves along a straight rail for {{0 <= t <= 6}} seconds with displacement {{s(t) = t^3 - 9t^2 + 15t + 4}} metres. (a) Find expressions for velocity {{v(t)}} and acceleration {{a(t)}}. (b) Find the times when the drone is at instantaneous rest. (c) Determine the open intervals on {{[0, 6]}} during which the drone is slowing down. (d) Calculate the maximum speed of the drone on {{[0, 6]}}.",
          hints: [
            "Factorise {{v(t) = 3(t - 1)(t - 5)}} and {{a(t) = 6(t - 3)}}.",
            "Slowing down occurs wherever {{v(t)}} and {{a(t)}} have OPPOSITE signs ({{v * a < 0}}).",
            "For maximum speed {{|v(t)|}} on closed interval {{[0, 6]}}, compare the turning point of {{v}} at {{t = 3}} against BOTH endpoints {{t = 0}} and {{t = 6}}!",
          ],
          modelAnswer:
            "(a) {{v(t) = s'(t) = 3t^2 - 18t + 15 = 3(t - 1)(t - 5)}} m s⁻¹; {{a(t) = v'(t) = 6t - 18 = 6(t - 3)}} m s⁻².\n" +
            "(b) Instantaneous rest when {{v(t) = 0}}: {{t = 1}} s and {{t = 5}} s.\n" +
            "(c) Sign analysis: {{v > 0}} on {{[0, 1)}} and {{(5, 6]}}, {{v < 0}} on {{(1, 5)}}; {{a < 0}} on {{[0, 3)}}, {{a > 0}} on {{(3, 6]}}.\n" +
            "Opposite signs ({{v * a < 0}}) occur on {{0 < t < 1}} and {{3 < t < 5}}.\n" +
            "(d) Speed is {{|v(t)|}}. At the critical point {{a(t) = 0}} ({{t = 3}}), {{|v(3)| = |27 - 54 + 15| = |-12| = 12}} m s⁻¹.\n" +
            "Checking endpoints: {{|v(0)| = 15}} m s⁻¹ and {{|v(6)| = |108 - 108 + 15| = 15}} m s⁻¹.\n" +
            "Hence the maximum speed on {{[0, 6]}} is {{15}} m s⁻¹ (attained at {{t = 0}} and {{t = 6}}).",
          markScheme: [
            { point: "Finds {{v(t) = 3t^2 - 18t + 15}} and {{a(t) = 6t - 18}}", keywords: ["3t^2 - 18t + 15", "6t - 18"] },
            { point: "Solves {{v(t) = 0}} to get {{t = 1}} s and {{t = 5}} s", keywords: ["t = 1", "t = 5"] },
            { point: "Identifies opposite-sign condition {{v * a < 0}} for slowing down", keywords: ["opposite signs", "v * a < 0"] },
            { point: "States both slowing-down intervals {{0 < t < 1}} and {{3 < t < 5}}", keywords: ["0 < t < 1", "3 < t < 5"] },
            { point: "Evaluates speed at interior extremum {{|v(3)| = 12}} AND endpoints {{|v(0)| = |v(6)| = 15}}", keywords: ["|-12| = 12", "|v(0)| = 15"] },
            { point: "Concludes maximum speed is {{15}} m s⁻¹", keywords: ["15"] },
          ],
          markbands: [
            { band: "5–6", marks: [5, 6], descriptor: "Exact velocity/acceleration, both rest times, both slowing-down intervals, and endpoint comparison proving max speed {{15}} m s⁻¹." },
            { band: "3–4", marks: [3, 4], descriptor: "Correct parts (a)–(b) and partial slowing-down or max-speed analysis (e.g. forgetting endpoints and stating {{12}})." },
            { band: "1–2", marks: [1, 2], descriptor: "Finds {{v(t)}} and {{a(t)}} with limited follow-through." },
            { band: "0", marks: [0, 0], descriptor: "No valid kinematics differentiation." },
          ],
        },
        {
          id: "5a-differentiation-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "limits-rules-tangents",
          question:
            "The tangent to {{y = ln(x)}} at the point {{(a, ln a)}} passes through the origin {{(0, 0)}}. Calculate the value of {{a}}, giving your answer to 3 significant figures.",
          answer: { type: "number", value: 2.72, tolerance: 0.015 },
          hints: [
            "Write the tangent equation at {{x = a}}: {{y - ln a = (1/a)(x - a)}}.",
            "Substitute {{x = 0, y = 0}} to solve for {{ln a}}, then exponentiate.",
          ],
          solution: [
            "At {{x = a}}, gradient is {{1/a}}, so the tangent is {{y - ln a = (1/a)(x - a)}}.",
            "Substituting {{(0, 0)}}: {{-ln a = (1/a)(-a) = -1}} ⇒ {{ln a = 1}} ⇒ {{a = e ≈ 2.7183 ≈ 2.72}} (3 s.f.).",
          ],
        },
        {
          id: "5a-differentiation-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "first-principles-lhopital-hl",
          question:
            "Find the exact value of {{k}} so that the piecewise function {{f(x) = k sin(x)}} for {{x <= pi/2}} and {{f(x) = x^2 - pi x + (pi^2)/4 + 3}} for {{x > pi/2}} is differentiable at {{x = pi/2}}.",
          answer: { type: "number", value: 3 },
          hints: [
            "Differentiability at {{x = pi/2}} requires BOTH continuity and equal left/right derivatives.",
            "Notice {{x^2 - pi x + (pi^2)/4 + 3 = (x - pi/2)^2 + 3}} — evaluate both its value and its derivative at {{x = pi/2}}!",
          ],
          solution: [
            "Rewrite the right branch as {{(x - pi/2)^2 + 3}}. At {{x = pi/2}}, its value is {{3}} and its derivative is {{2(x - pi/2) = 0}}.",
            "For the left branch {{k sin(x)}}, at {{x = pi/2}} the value is {{k sin(pi/2) = k}} and the derivative is {{k cos(pi/2) = 0}}.",
            "Equating heights gives {{k = 3}}, and both derivatives already equal {{0}}.",
          ],
        },
        {
          id: "5a-differentiation-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "first-principles-lhopital-hl",
          question: "Use L'Hôpital's rule to evaluate {{lim_(x -> 0) (x - arctan x)/x^3}}. Give your answer as a simplified fraction.",
          answer: { type: "fraction", n: 1, d: 3, simplest: true },
          hints: [
            "Confirm {{0/0}} and apply L'Hôpital once using {{d/dx(arctan x) = 1/(1 + x^2)}}.",
            "Simplify {{1 - 1/(1 + x^2)}} to {{x^2/(1 + x^2)}} before dividing by {{3x^2}}!",
          ],
          solution: [
            "Form {{0/0}} at {{x = 0}}. Applying L'Hôpital's rule: {{lim_(x -> 0) (1 - 1/(1 + x^2))/(3x^2)}}.",
            "Simplify algebraically: {{(x^2/(1 + x^2))/(3x^2) = 1/(3(1 + x^2))}}.",
            "Taking {{x -> 0}} gives {{1/(3(1)) = 1/3}}.",
          ],
        },
        {
          id: "5a-differentiation-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "implicit-related-rates-trig-hl",
          question:
            "Water drains out of an inverted conical funnel of top radius {{4}} cm and height {{12}} cm at a constant rate of {{3}} cm³ s⁻¹ (so {{dV/dt = -3}}). Calculate {{dh/dt}} (in cm s⁻¹, to 3 significant figures, including sign) when the water depth is {{h = 6}} cm.",
          answer: { type: "number", value: -0.239, tolerance: 0.005 },
          hints: [
            "By similar triangles, {{r/h = 4/12 = 1/3}} ⇒ {{r = h/3}}.",
            "Substitute {{r = h/3}} into {{V = (1/3) pi r^2 h}}, differentiate with respect to {{t}}, then substitute {{dV/dt = -3}} and {{h = 6}}.",
          ],
          traps: [
            {
              spec: { type: "number", value: 0.239, tolerance: 0.005 },
              feedback: "Because water is DRAINING, {{dh/dt}} must be NEGATIVE ({{-0.239}} cm s⁻¹)!",
            },
          ],
          solution: [
            "Similar triangles give {{r = h/3}}, so {{V = (1/3) pi (h/3)^2 h = (pi/27) h^3}}.",
            "Differentiate with respect to {{t}}: {{dV/dt = (pi/9) h^2 (dh/dt)}}.",
            "At {{h = 6}} with {{dV/dt = -3}}: {{-3 = (pi/9)(36)(dh/dt) = 4 pi (dh/dt)}} ⇒ {{dh/dt = -3/(4 pi) ≈ -0.2387 ≈ -0.239}} cm s⁻¹.",
          ],
        },
        {
          id: "5a-differentiation-p2-q12",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "implicit-related-rates-trig-hl",
          question:
            "A tracking camera sits {{40}} m horizontally from a vertical launch pad as a weather balloon ascends straight up at a constant {{6}} m s⁻¹. Let {{θ}} radians be the camera's angle of elevation when the balloon is at height {{h}} m. (a) Relate {{θ}} and {{h}} via {{tan θ}} and differentiate implicitly with respect to {{t}} to express {{dθ/dt}} in terms of {{θ}} and {{dh/dt}}. (b) Find the exact value of {{dθ/dt}} (in rad s⁻¹) when {{h = 30}} m. (c) Determine the height {{h >= 0}} at which {{dθ/dt}} is greatest, justifying briefly.",
          hints: [
            "In the right triangle, {{tan θ = h/40}} and {{d/dt(tan θ) = sec^2 θ (dθ/dt)}}.",
            "When {{h = 30}}, Pythagoras gives hypotenuse {{50}} m, so {{cos θ = 40/50 = 4/5}}.",
            "Write {{dθ/dt = (3/20) cos^2 θ}} (or {{240/(1600 + h^2)}}) to see immediately where it peaks for {{h >= 0}}.",
          ],
          modelAnswer:
            "(a) From the right triangle, {{tan θ = h/40}}.\n" +
            "Differentiating implicitly with respect to {{t}}: {{sec^2 θ (dθ/dt) = (1/40)(dh/dt)}} ⇒ {{dθ/dt = ((cos^2 θ)/40)(dh/dt)}}.\n" +
            "(b) When {{h = 30}} m, the distance from camera to balloon is {{sqrt(40^2 + 30^2) = 50}} m, so {{cos θ = 40/50 = 4/5}}.\n" +
            "With {{dh/dt = 6}} m s⁻¹: {{dθ/dt = ((16/25)/40) * 6 = 96/1000 = 12/125 = 0.096}} rad s⁻¹.\n" +
            "(c) Substituting {{dh/dt = 6}} gives {{dθ/dt = (3/20) cos^2 θ = 240/(1600 + h^2)}}.\n" +
            "Since {{1600 + h^2}} is smallest (equivalently {{cos^2 θ}} is largest, equal to {{1}}) when {{h = 0}} m, the angular rate is maximised at launch {{h = 0}} m (with {{dθ/dt = 0.15}} rad s⁻¹).",
          markScheme: [
            { point: "Writes the trig relation {{tan θ = h/40}}", keywords: ["tan θ = h/40", "h/40"] },
            { point: "Differentiates implicitly to {{sec^2 θ (dθ/dt) = (1/40)(dh/dt)}} and isolates {{dθ/dt}}", keywords: ["sec^2", "cos^2"] },
            { point: "Finds hypotenuse {{50}} m and {{cos θ = 4/5}} when {{h = 30}} m", keywords: ["50", "4/5"] },
            { point: "Calculates exact rate {{12/125}} (or {{0.096}}) rad s⁻¹", keywords: ["12/125", "0.096"] },
            { point: "Expresses {{dθ/dt}} as {{(3/20) cos^2 θ}} or {{240/(1600 + h^2)}}", keywords: ["1600 + h^2", "3/20"] },
            { point: "Justifies that maximum angular rate occurs at {{h = 0}} m", keywords: ["h = 0", "0.15"] },
          ],
          markbands: [
            { band: "5–6", marks: [5, 6], descriptor: "Complete implicit trig derivation, exact rate {{0.096}} rad s⁻¹, and concise analytical justification that {{dθ/dt}} peaks at {{h = 0}}." },
            { band: "3–4", marks: [3, 4], descriptor: "Correctly derives {{dθ/dt}} and evaluates at {{h = 30}}, with incomplete reasoning for part (c)." },
            { band: "1–2", marks: [1, 2], descriptor: "Sets up {{tan θ = h/40}} and attempts time differentiation." },
            { band: "0", marks: [0, 0], descriptor: "No relevant related-rates work." },
          ],
        },
        {
          id: "5a-differentiation-p2-q13",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "HL",
          commandTerm: "Verify",
          guideRef: "implicit-related-rates-trig-hl",
          question:
            "A curve is defined implicitly by {{e^y + xy = e^2 + 2}}. (a) Verify that the point {{P(1, 2)}} lies on the curve. (b) Find {{dy/dx}} in terms of {{x}} and {{y}}. (c) Hence find the exact equation of the tangent line at {{P(1, 2)}}, and calculate its x-intercept to 3 significant figures.",
          hints: [
            "Substitute {{x = 1, y = 2}} into the left-hand side to verify {{P}} lies on the curve.",
            "Remember the chain rule on {{e^y}}, the product rule on {{xy}}, and that {{e^2 + 2}} is a CONSTANT whose derivative is {{0}}!",
            "Set {{y = 0}} in the exact tangent equation to solve cleanly for the x-intercept.",
          ],
          modelAnswer:
            "(a) Substituting {{x = 1, y = 2}} into the LHS: {{e^2 + (1)(2) = e^2 + 2 = }} RHS, so {{P(1, 2)}} lies on the curve.\n" +
            "(b) Differentiating implicitly with respect to {{x}} (noting {{e^2 + 2}} is constant):\n" +
            "{{e^y (dy/dx) + y + x(dy/dx) = 0}} ⇒ {{(e^y + x)(dy/dx) = -y}} ⇒ {{dy/dx = (-y)/(e^y + x)}}.\n" +
            "(c) At {{P(1, 2)}}, the tangent gradient is {{m_T = -2/(e^2 + 1)}}.\n" +
            "Exact tangent equation: {{y - 2 = (-2/(e^2 + 1))(x - 1)}}.\n" +
            "For the x-intercept, set {{y = 0}}: {{-2 = (-2/(e^2 + 1))(x - 1)}} ⇒ {{x - 1 = e^2 + 1}} ⇒ {{x = e^2 + 2 ≈ 9.3891 ≈ 9.39}} (3 s.f.).",
          markScheme: [
            { point: "Verifies {{e^2 + (1)(2) = e^2 + 2}} explicitly", keywords: ["e^2 + (1)(2)", "rhs"] },
            { point: "Differentiates implicitly to {{e^y (dy/dx) + y + x(dy/dx) = 0}} (RHS = 0)", keywords: ["e^y (dy/dx)", "= 0"] },
            { point: "Isolates {{dy/dx = (-y)/(e^y + x)}}", keywords: ["(-y)/(e^y + x)", "e^y + x"] },
            { point: "Evaluates exact gradient {{m_T = -2/(e^2 + 1)}} at {{(1, 2)}}", keywords: ["-2/(e^2 + 1)"] },
            { point: "Writes exact tangent equation {{y - 2 = (-2/(e^2 + 1))(x - 1)}}", keywords: ["y - 2 ="] },
            { point: "Sets {{y = 0}} to obtain exact {{e^2 + 2}} and 3 s.f. value {{9.39}}", keywords: ["9.39", "x = e^2 + 2"] },
          ],
          markbands: [
            { band: "5–6", marks: [5, 6], descriptor: "Complete verification, accurate implicit derivative, exact tangent equation, and exact/3 s.f. x-intercept {{9.39}}." },
            { band: "3–4", marks: [3, 4], descriptor: "Correct implicit derivative and gradient, with minor slip in tangent rearrangement or rounding." },
            { band: "1–2", marks: [1, 2], descriptor: "Verifies point and begins implicit differentiation." },
            { band: "0", marks: [0, 0], descriptor: "No relevant progress." },
          ],
        },
        {
          id: "5a-differentiation-p2-q14",
          kind: "written",
          marks: 7,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Show that",
          guideRef: "curve-sketching-optimization-kinematics",
          question:
            "Let {{f(x) = x/(x^2 + 4)}}. (a) Show that {{f'(x) = (4 - x^2)/(x^2 + 4)^2}} and find the exact coordinates of the local maximum and local minimum. (b) Show that {{f''(x) = (2x(x^2 - 12))/(x^2 + 4)^3}}. (c) Hence find the exact x-coordinates of all three points of inflection, justifying each one.",
          hints: [
            "Apply the quotient rule to {{x/(x^2 + 4)}} for (a), and test the sign of {{4 - x^2}} around {{x = ±2}}.",
            "In (b), factor out {{2x(x^2 + 4)}} from the quotient-rule numerator BEFORE expanding so {{(x^2 + 4)}} cancels cleanly down to power {{3}}!",
            "In (c), solve {{2x(x^2 - 12) = 0}} and inspect the sign of {{f''(x)}} on all four intervals.",
          ],
          modelAnswer:
            "(a) Quotient rule: {{f'(x) = (1(x^2 + 4) - x(2x))/(x^2 + 4)^2 = (4 - x^2)/(x^2 + 4)^2}}.\n" +
            "Stationary points: {{4 - x^2 = 0}} ⇒ {{x = -2, 2}}. Since {{(x^2 + 4)^2 > 0}}, {{f'(x)}} is negative for {{x < -2}}, positive on {{-2 < x < 2}}, and negative for {{x > 2}}.\n" +
            "Hence local minimum at {{(-2, -1/4)}} and local maximum at {{(2, 1/4)}}.\n" +
            "(b) Differentiating {{f'(x)}} via quotient rule:\n" +
            "{{f''(x) = (-2x(x^2 + 4)^2 - (4 - x^2) * 2(x^2 + 4)(2x))/(x^2 + 4)^4}}.\n" +
            "Factoring out {{2x(x^2 + 4)}} and cancelling one factor from the denominator leaves numerator {{2x(-x^2 - 4 - 8 + 2x^2) = 2x(x^2 - 12)}} over {{(x^2 + 4)^3}}.\n" +
            "(c) Setting {{f''(x) = 0}} gives {{x = 0}}, {{x = -2 sqrt(3)}}, and {{x = 2 sqrt(3)}}.\n" +
            "Because {{(x^2 + 4)^3 > 0}} everywhere and the numerator {{2x(x + 2 sqrt(3))(x - 2 sqrt(3))}} has three distinct simple roots, {{f''(x)}} alternates sign {{-, +, -, +}} across {{-2 sqrt(3), 0, 2 sqrt(3)}} — proving all three are points of inflection.",
          markScheme: [
            { point: "Applies quotient rule cleanly to show {{f'(x) = (4 - x^2)/(x^2 + 4)^2}}", keywords: ["1(x^2 + 4) - x(2x)", "4 - x^2"] },
            { point: "Finds and classifies local min {{(-2, -1/4)}} and local max {{(2, 1/4)}}", keywords: ["(-2, -1/4)", "(2, 1/4)"] },
            { point: "Applies quotient and chain rule to {{f'(x)}} with {{2(x^2 + 4)(2x)}}", keywords: ["2(x^2 + 4)(2x)", "(x^2 + 4)^4"] },
            { point: "Factors {{2x(x^2 + 4)}} and simplifies numerator cleanly to {{-x^2 - 4 - 8 + 2x^2 = x^2 - 12}}", keywords: ["-x^2 - 4 - 8 + 2x^2", "cancelling one factor"] },
            { point: "Solves {{f''(x) = 0}} for exact roots {{0}} and {{±2 sqrt(3)}}", keywords: ["2 sqrt(3)", "-2 sqrt(3)"] },
            { point: "Notes denominator {{(x^2 + 4)^3 > 0}} always", keywords: ["(x^2 + 4)^3 > 0", "distinct simple roots"] },
            { point: "Verifies concavity sign changes across all three roots", keywords: ["alternates sign", "-, +, -, +"] },
          ],
          markbands: [
            { band: "6–7", marks: [6, 7], descriptor: "Rigorous forward derivations of {{f'}} and {{f''}}, classified exact extrema, all three exact inflection x-values with complete sign-change proof." },
            { band: "4–5", marks: [4, 5], descriptor: "Correct parts (a)–(b) with exact inflection roots found, but incomplete sign-change justification." },
            { band: "2–3", marks: [2, 3], descriptor: "Completes part (a) accurately and begins quotient-rule differentiation for {{f''}}." },
            { band: "0–1", marks: [0, 1], descriptor: "Minimal valid calculus work." },
          ],
        },
        {
          id: "5a-differentiation-p2-q15",
          kind: "written",
          marks: 8,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "first-principles-lhopital-hl",
          question:
            "For any real constant {{k}}, define {{f_k(x) = (e^(kx) - 1 - kx)/x^2}} for {{x != 0}}. (a) Using L'Hôpital's rule, find {{L(k) = lim_(x -> 0) f_k(x)}} in terms of {{k}}, stating the indeterminate form before each application. (4 marks)\n" +
            "(b) Define {{f_k(0) = L(k)}} so that {{f_k}} is continuous at {{x = 0}}. Using the first-principles definition {{f_k'(0) = lim_(h -> 0) (f_k(h) - f_k(0))/h}} together with L'Hôpital's rule, determine {{f_k'(0)}} in terms of {{k}}. (4 marks)",
          hints: [
            "In (a), apply L'Hôpital twice (checking {{0/0}} each time) to find {{L(k) = (k^2)/2}}.",
            "In (b), combine {{(e^(kh) - 1 - kh)/h^2 - (k^2)/2}} over common denominator {{h^2}}, then divide by {{h}} to obtain denominator {{h^3}}.",
            "Apply L'Hôpital three times with respect to {{h}}!",
          ],
          modelAnswer:
            "(a) At {{x = 0}}, {{(e^0 - 1 - 0)/0 = 0/0}} indeterminate form.\n" +
            "First L'Hôpital step: {{lim_(x -> 0) (k e^(kx) - k)/(2x)}}, which is still {{0/0}} at {{x = 0}}.\n" +
            "Second L'Hôpital step: {{lim_(x -> 0) (k^2 e^(kx))/2 = (k^2)/2}}. Hence {{L(k) = (k^2)/2}}.\n" +
            "(b) Substituting {{f_k(0) = (k^2)/2}} into the first-principles definition:\n" +
            "{{f_k'(0) = lim_(h -> 0) ((e^(kh) - 1 - kh)/h^2 - (k^2)/2)/h = lim_(h -> 0) (e^(kh) - 1 - kh - (1/2) k^2 h^2)/h^3}}.\n" +
            "At {{h = 0}}, this is {{0/0}}. Applying L'Hôpital with respect to {{h}}:\n" +
            "1st ({{0/0}}): {{lim_(h -> 0) (k e^(kh) - k - k^2 h)/(3h^2)}}.\n" +
            "2nd ({{0/0}}): {{lim_(h -> 0) (k^2 e^(kh) - k^2)/(6h)}}.\n" +
            "3rd ({{0/0}}): {{lim_(h -> 0) (k^3 e^(kh))/6 = (k^3)/6}}.",
          markScheme: [
            { point: "Checks {{0/0}} and applies L'Hôpital once to get {{(k e^(kx) - k)/(2x)}}", keywords: ["k e^(kx) - k", "2x"] },
            { point: "Checks {{0/0}} again and applies L'Hôpital a second time to get {{(k^2 e^(kx))/2}}", keywords: ["k^2 e^(kx)"] },
            { point: "Concludes {{L(k) = (k^2)/2}}", keywords: ["(k^2)/2"] },
            { point: "Forms single quotient {{(e^(kh) - 1 - kh - (1/2) k^2 h^2)/h^3}}", keywords: ["(1/2) k^2 h^2", "h^3"] },
            { point: "Applies 1st L'Hôpital step w.r.t. {{h}} to get {{(k e^(kh) - k - k^2 h)/(3h^2)}}", keywords: ["3h^2", "k^2 h"] },
            { point: "Applies 2nd L'Hôpital step to get {{(k^2 e^(kh) - k^2)/(6h)}}", keywords: ["6h", "k^2 e^(kh) - k^2"] },
            { point: "Applies 3rd L'Hôpital step to get {{(k^3 e^(kh))/6}}", keywords: ["k^3 e^(kh)"] },
            { point: "Evaluates final limit to obtain {{f_k'(0) = (k^3)/6}}", keywords: ["(k^3)/6"] },
          ],
          markbands: [
            { band: "7–8", marks: [7, 8], descriptor: "Complete, rigorous L'Hôpital proofs for both {{L(k) = (k^2)/2}} and {{f_k'(0) = (k^3)/6}} with clean algebra and form checks throughout." },
            { band: "5–6", marks: [5, 6], descriptor: "Part (a) fully correct and part (b) set up cleanly as an {{h^3}} quotient, with one minor algebraic or differentiation slip." },
            { band: "3–4", marks: [3, 4], descriptor: "Correctly evaluates {{L(k) = (k^2)/2}} in (a) with limited progress in (b)." },
            { band: "0–2", marks: [0, 2], descriptor: "Initial L'Hôpital attempt only." },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 questions, ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "5a-differentiation-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Find",
      guideRef: "limits-rules-tangents",
      question:
        "A straight line passing through the external point {{(0, -4)}} is tangent to the parabola {{y = x^2}} at {{(a, a^2)}} where {{a > 0}}. Find the exact value of {{a}}.",
      answer: { type: "number", value: 2 },
      hints: [
        "Note that {{(0, -4)}} does NOT lie on the parabola! Write the general tangent at {{(a, a^2)}} first.",
        "The tangent gradient at {{x = a}} is {{2a}}, giving {{y - a^2 = 2a(x - a)}}.",
        "Now substitute the external point {{(0, -4)}} into that tangent equation to solve for {{a > 0}}.",
      ],
      traps: [
        {
          spec: { type: "number", value: -2 },
          feedback: "Re-read the domain condition carefully: the question specifies {{a > 0}}!",
        },
      ],
      solution: [
        "At {{(a, a^2)}}, the tangent gradient is {{2a}}, so the tangent line is {{y - a^2 = 2a(x - a)}} ⇒ {{y = 2ax - a^2}}.",
        "Imposing that it passes through {{(0, -4)}} gives {{-4 = -a^2}} ⇒ {{a^2 = 4}}.",
        "Since {{a > 0}}, {{a = 2}}.",
      ],
      commonError: "Substituting {{x = 0}} into {{y' = 2x}} as if {{(0, -4)}} were the point of tangency.",
    },
    {
      id: "5a-differentiation-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "curve-sketching-optimization-kinematics",
      question:
        "A rectangle has its base on the x-axis and its upper two vertices on the parabola {{y = 27 - x^2}} (with {{y > 0}}). Calculate the maximum possible area of the rectangle.",
      answer: { type: "number", value: 108 },
      hints: [
        "By symmetry, let the upper-right vertex be {{(x, 27 - x^2)}} with {{0 < x < 3 sqrt(3)}}.",
        "Then the full width of the rectangle is {{2x}} (not {{x}}!), so {{A(x) = 2x(27 - x^2)}}.",
        "Solve {{A'(x) = 0}}, verify {{A''(x) < 0}}, and compute the maximum area.",
      ],
      traps: [
        {
          spec: { type: "number", value: 54 },
          feedback: "Careful! The rectangle spans from {{-x}} to {{+x}}, so its width is {{2x}}, doubling the area to {{108}}!",
        },
      ],
      solution: [
        "With upper vertices {{(±x, 27 - x^2)}}, width is {{2x}} and height is {{27 - x^2}}, so {{A(x) = 54x - 2x^3}} on {{0 < x < 3 sqrt(3)}}.",
        "{{A'(x) = 54 - 6x^2 = 0}} ⇒ {{x^2 = 9}} ⇒ {{x = 3}} (verified maximum since {{A''(3) = -12(3) = -36 < 0}}).",
        "Maximum area: {{A(3) = 2(3)(27 - 9) = 6 * 18 = 108}}.",
      ],
    },
    {
      id: "5a-differentiation-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "first-principles-lhopital-hl",
      question:
        "The limit {{lim_(x -> ∞) (1 + 3/x)^(2x)}} equals {{e^k}} for an exact constant {{k}}. Find the value of {{k}}.",
      answer: { type: "number", value: 6 },
      hints: [
        "Let {{y = (1 + 3/x)^(2x)}} and take natural logarithms: {{ln y = 2x ln(1 + 3/x)}}.",
        "Rewrite as a {{0/0}} quotient {{(2 ln(1 + 3/x))/(1/x)}} (or set {{u = 1/x -> 0^+}}).",
        "Apply L'Hôpital's rule to find {{lim (ln y) = k}}.",
      ],
      solution: [
        "Let {{y = (1 + 3/x)^(2x)}}, so {{ln y = 2x ln(1 + 3/x)}}. Setting {{u = 1/x}}, as {{x -> ∞}}, {{u -> 0^+}}.",
        "{{lim_(u -> 0^+) (2 ln(1 + 3u))/u}} has form {{0/0}}.",
        "By L'Hôpital's rule: {{lim_(u -> 0^+) (6/(1 + 3u))/1 = 6}}. Hence {{ln y -> 6}}, so {{y -> e^6}} and {{k = 6}}.",
      ],
    },
    {
      id: "5a-differentiation-ch-q04",
      kind: "written",
      marks: 6,
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "curve-sketching-optimization-kinematics",
      question:
        "Consider the quartic {{f(x) = x^4 - 4a x^3}} where {{a > 0}} is a positive constant. (a) Find all stationary points in terms of {{a}}. (b) Evaluate {{f''(0)}} and explain why the second derivative test fails at {{x = 0}}. (c) Classify BOTH stationary points rigorously and find the coordinates of ALL points of inflection in terms of {{a}}.",
      hints: [
        "Factorise {{f'(x) = 4x^2 (x - 3a)}} and {{f''(x) = 12x(x - 2a)}}.",
        "Around {{x = 0}}, inspect the sign of {{4x^2 (x - 3a)}} just left and just right of {{0}} (remember {{a > 0}}!).",
        "Check BOTH roots of {{f''(x) = 0}} for sign changes and substitute each back into {{f(x)}}.",
      ],
      modelAnswer:
        "(a) {{f'(x) = 4x^3 - 12a x^2 = 4x^2 (x - 3a) = 0}} ⇒ {{x = 0}} and {{x = 3a}}.\n" +
        "Coordinates: {{(0, 0)}} and {{(3a, 81 a^4 - 108 a^4) = (3a, -27 a^4)}}.\n" +
        "(b) {{f''(x) = 12x^2 - 24ax = 12x(x - 2a)}}, so {{f''(0) = 0}}. Whenever {{f''(c) = 0}}, the second derivative test is inconclusive and cannot distinguish a turning point from a stationary inflection.\n" +
        "(c) Sign chart of {{f'(x) = 4x^2(x - 3a)}} near {{x = 0}}: since {{4x^2 > 0}} and {{x - 3a < 0}} on both sides of {{0}}, {{f'(x)}} remains negative ({{- -> -}}), proving {{(0, 0)}} is a stationary point of inflection.\n" +
        "At {{x = 3a}}, {{f''(3a) = 12(3a)(a) = 36 a^2 > 0}}, confirming {{(3a, -27 a^4)}} is a local minimum.\n" +
        "Inflection candidates from {{f''(x) = 12x(x - 2a) = 0}}: {{x = 0}} (where {{f''}} switches {{+ -> -}}) and {{x = 2a}} (where {{f''}} switches {{- -> +}}). Since {{f(2a) = 16 a^4 - 32 a^4 = -16 a^4}}, the points of inflection are {{(0, 0)}} and {{(2a, -16 a^4)}}.",
      markScheme: [
        { point: "Differentiates and factorises {{f'(x) = 4x^2(x - 3a)}} to find stationary coordinates {{(0, 0)}} and {{(3a, -27 a^4)}}", keywords: ["4x^2(x - 3a)", "-27 a^4"] },
        { point: "Computes {{f''(x) = 12x(x - 2a)}} and notes {{f''(0) = 0}} makes second derivative test inconclusive", keywords: ["12x(x - 2a)", "inconclusive"] },
        { point: "Uses first-derivative sign chart ({{- -> -}}) around {{x = 0}} to prove stationary inflection at {{(0, 0)}}", keywords: ["stationary point of inflection", "remains negative"] },
        { point: "Proves local minimum at {{(3a, -27 a^4)}} via {{f''(3a) = 36 a^2 > 0}}", keywords: ["36 a^2", "local minimum"] },
        { point: "Identifies second inflection candidate {{x = 2a}} with coordinate {{(2a, -16 a^4)}}", keywords: ["-16 a^4", "(2a, -16 a^4)"] },
        { point: "Verifies concavity sign changes across BOTH {{x = 0}} and {{x = 2a}}", keywords: ["+ -> -", "- -> +"] },
      ],
      markbands: [
        { band: "5–6", marks: [5, 6], descriptor: "Exact parametric coordinates for both stationary points and both inflection points, clear explanation of why {{f''(0) = 0}} is inconclusive, and complete sign analyses." },
        { band: "3–4", marks: [3, 4], descriptor: "Correct derivatives and stationary points, but misses one inflection coordinate or omits sign-change proof." },
        { band: "1–2", marks: [1, 2], descriptor: "Computes {{f'}} and {{f''}} accurately in terms of {{a}}." },
        { band: "0", marks: [0, 0], descriptor: "No relevant calculus progress." },
      ],
    },
    {
      id: "5a-differentiation-ch-q05",
      kind: "written",
      marks: 7,
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Prove",
      guideRef: "first-principles-lhopital-hl",
      question:
        "(a) Prove from first principles that {{d/dx(cos x) = -sin x}}, clearly stating the two standard trigonometric limits as {{h -> 0}} that you apply. (5 marks)\n" +
        "(b) Hence, without using L'Hôpital's rule, deduce the exact value of {{lim_(h -> 0) (cos(pi/6 + h) - sqrt(3)/2)/h}}. (2 marks)",
      hints: [
        "Expand {{cos(x + h) = cos x cos h - sin x sin h}} inside the difference quotient.",
        "Group the {{cos x}} terms together so you isolate {{(cos h - 1)/h}} and {{(sin h)/h}}.",
        "In (b), notice that {{sqrt(3)/2 = cos(pi/6)}} — recognise the exact definition of a derivative at {{x = pi/6}}!",
      ],
      modelAnswer:
        "(a) By definition, form the difference quotient {{(cos(x + h) - cos x)/h}} and take the limit as {{h -> 0}}.\n" +
        "Applying the compound-angle identity {{cos(x + h) = cos x cos h - sin x sin h}}:\n" +
        "{{f'(x) = lim_(h -> 0) (cos x cos h - sin x sin h - cos x)/h = lim_(h -> 0) [cos x * (cos h - 1)/h - sin x * (sin h)/h]}}.\n" +
        "Since {{cos x}} and {{sin x}} are independent of {{h}}:\n" +
        "{{f'(x) = cos x * lim_(h -> 0) (cos h - 1)/h - sin x * lim_(h -> 0) (sin h)/h}}.\n" +
        "Using the standard radian limits {{lim_(h -> 0) (cos h - 1)/h = 0}} and {{lim_(h -> 0) (sin h)/h = 1}}:\n" +
        "{{f'(x) = cos x * (0) - sin x * (1) = -sin x}}.\n" +
        "(b) Recognising {{sqrt(3)/2 = cos(pi/6)}}, the limit is precisely the first-principles derivative of {{cos x}} evaluated at {{x = pi/6}}:\n" +
        "{{f'(pi/6) = -sin(pi/6) = -1/2}}.",
      markScheme: [
        { point: "Writes first-principles limit {{lim_(h -> 0) (cos(x + h) - cos x)/h}}", keywords: ["cos(x + h) - cos x"] },
        { point: "Expands using compound-angle identity {{cos x cos h - sin x sin h}}", keywords: ["cos x cos h - sin x sin h"] },
        { point: "Regroups cleanly into {{cos x * (cos h - 1)/h - sin x * (sin h)/h}}", keywords: ["(cos h - 1)/h", "(sin h)/h"] },
        { point: "Explicitly states both standard limits {{(cos h - 1)/h -> 0}} and {{(sin h)/h -> 1}}", keywords: ["= 0", "= 1"] },
        { point: "Concludes {{f'(x) = -sin x}} cleanly", keywords: ["cos x * (0) - sin x * (1)"] },
        { point: "Recognises {{sqrt(3)/2 = cos(pi/6)}} so the limit equals {{f'(pi/6)}}", keywords: ["cos(pi/6)", "f'(pi/6)"] },
        { point: "Evaluates {{-sin(pi/6) = -1/2}}", keywords: ["-1/2", "-sin(pi/6)"] },
      ],
      markbands: [
        { band: "6–7", marks: [6, 7], descriptor: "Rigorous first-principles proof preserving limit notation throughout, both standard limits stated, and instant deduction of {{-1/2}} in (b)." },
        { band: "4–5", marks: [4, 5], descriptor: "Valid proof of (a) with minor notation omission, or correct (a) without linking (b) to {{f'(pi/6)}}." },
        { band: "2–3", marks: [2, 3], descriptor: "Applies compound-angle identity inside the difference quotient with partial grouping." },
        { band: "0–1", marks: [0, 1], descriptor: "Minimal valid first-principles work." },
      ],
    },
    {
      id: "5a-differentiation-ch-q06",
      kind: "written",
      marks: 7,
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Hence",
      guideRef: "implicit-related-rates-trig-hl",
      question:
        "(a) Using implicit differentiation, prove that {{d/dx(arctan x) = 1/(1 + x^2)}} for all {{x ∈ ℝ}}. (3 marks)\n" +
        "(b) Hence find the exact coordinates of the stationary point of {{g(x) = arctan(x) - (1/2) ln(1 + x^2)}} and justify its nature. (4 marks)",
      hints: [
        "Let {{y = arctan x}} (so {{tan y = x}}) and differentiate both sides implicitly using {{d/dx(tan y) = sec^2 y (dy/dx)}}.",
        "Convert {{sec^2 y}} back into {{x}} using the Pythagorean identity {{sec^2 y = 1 + tan^2 y}}.",
        "In (b), simplify {{g'(x)}} over the common denominator {{1 + x^2}} — it factors beautifully!",
      ],
      modelAnswer:
        "(a) Let {{y = arctan x}} with {{-pi/2 < y < pi/2}}, so {{tan y = x}}.\n" +
        "Differentiating implicitly with respect to {{x}}: {{sec^2 y (dy/dx) = 1}} ⇒ {{dy/dx = 1/(sec^2 y)}}.\n" +
        "Using {{sec^2 y = 1 + tan^2 y = 1 + x^2}}, we obtain {{d/dx(arctan x) = 1/(1 + x^2)}}.\n" +
        "(b) Differentiating {{g(x)}} using (a) and the chain rule on {{ln(1 + x^2)}}:\n" +
        "{{g'(x) = 1/(1 + x^2) - (1/2) * (2x)/(1 + x^2) = (1 - x)/(1 + x^2)}}.\n" +
        "Setting {{g'(x) = 0}} yields {{x = 1}}. Evaluating {{g(1) = arctan(1) - (1/2) ln 2 = pi/4 - (1/2) ln 2}}.\n" +
        "Since {{1 + x^2 > 0}} for all real {{x}}, {{g'(x) > 0}} for {{x < 1}} and {{g'(x) < 0}} for {{x > 1}}.\n" +
        "Therefore {{(1, pi/4 - (1/2) ln 2)}} is a local (and global) maximum.",
      markScheme: [
        { point: "Sets {{y = arctan x}} ⇒ {{tan y = x}} and differentiates implicitly to {{sec^2 y (dy/dx) = 1}}", keywords: ["tan y = x", "sec^2 y (dy/dx) = 1"] },
        { point: "Applies identity {{sec^2 y = 1 + tan^2 y}} to express {{dy/dx}} cleanly in {{x}}", keywords: ["1 + tan^2 y"] },
        { point: "Concludes {{d/dx(arctan x) = 1/(1 + x^2)}}", keywords: ["1/(sec^2 y)"] },
        { point: "Differentiates {{g(x)}} accurately and combines into {{(1 - x)/(1 + x^2)}}", keywords: ["(1 - x)/(1 + x^2)", "(2x)/(1 + x^2)"] },
        { point: "Solves {{g'(x) = 0}} to obtain {{x = 1}}", keywords: ["x = 1"] },
        { point: "Computes exact y-coordinate {{pi/4 - (1/2) ln 2}}", keywords: ["pi/4 - (1/2) ln 2", "arctan(1)"] },
        { point: "Justifies local/global maximum via sign change of {{g'(x)}} from positive to negative", keywords: ["g'(x) > 0", "global) maximum"] },
      ],
      markbands: [
        { band: "6–7", marks: [6, 7], descriptor: "Complete implicit proof of {{d/dx(arctan x)}}, clean simplification of {{g'(x)}}, exact coordinates {{(1, pi/4 - (1/2) ln 2)}}, and rigorous maximum justification." },
        { band: "4–5", marks: [4, 5], descriptor: "Correct proof in (a) and {{x = 1}} found in (b), with minor slip in exact y-value or sign justification." },
        { band: "2–3", marks: [2, 3], descriptor: "Completes (a) or differentiates {{g(x)}} accurately without finishing classification." },
        { band: "0–1", marks: [0, 1], descriptor: "Minimal valid progress." },
      ],
    },
    {
      id: "5a-differentiation-ch-q07",
      kind: "written",
      marks: 7,
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Show that",
      guideRef: "implicit-related-rates-trig-hl",
      question:
        "A streetlight stands {{5}} m high above flat level ground. A student of height {{1.8}} m walks directly away from the base of the post at a constant speed of {{1.6}} m s⁻¹. Let {{x}} be the student's distance from the post and {{s}} be the length of their shadow. (a) Using similar triangles, show that {{s = (9/16) x}}. (b) Calculate the exact rate {{ds/dt}} at which the shadow length grows. (c) Calculate the speed at which the tip of the shadow moves along the ground, and explain why this speed does not depend on {{x}}.",
      hints: [
        "Sketch the two nested right triangles: the small shadow triangle (height {{1.8}}, base {{s}}) and the large lamp triangle (height {{5}}, base {{x + s}}).",
        "Cross-multiply {{s/1.8 = (x + s)/5}} and isolate {{s}} in terms of {{x}}.",
        "The tip of the shadow sits at distance {{L = x + s}} from the lamppost!",
      ],
      modelAnswer:
        "(a) By similar right triangles formed by the light ray over the student's head:\n" +
        "{{s/1.8 = (x + s)/5}} ⇒ {{5s = 1.8x + 1.8s}} ⇒ {{3.2s = 1.8x}} ⇒ {{s = (18/32)x = (9/16)x}}.\n" +
        "(b) Differentiating {{s = (9/16)x}} with respect to time {{t}}:\n" +
        "{{ds/dt = (9/16)(dx/dt)}}. Substituting {{dx/dt = 1.6}} m s⁻¹ gives {{ds/dt = (9/16)(1.6) = 0.9}} m s⁻¹.\n" +
        "(c) The shadow tip's position from the post is {{L = x + s = x + (9/16)x = (25/16)x}}.\n" +
        "Differentiating with respect to {{t}}: {{dL/dt = dx/dt + ds/dt = 1.6 + 0.9 = 2.5}} m s⁻¹.\n" +
        "Because {{L = (25/16)x}} is strictly proportional (linear) in {{x}}, its derivative {{dL/dt = (25/16)(dx/dt)}} is a constant multiple of the student's constant walking speed, completely independent of position {{x}}.",
      markScheme: [
        { point: "Sets up similar-triangle ratio {{s/1.8 = (x + s)/5}}", keywords: ["s/1.8 = (x + s)/5", "(x + s)/5"] },
        { point: "Rearranges forward to {{3.2s = 1.8x}} and simplifies to {{(9/16)x}}", keywords: ["3.2s = 1.8x", "18/32"] },
        { point: "Differentiates with respect to {{t}}: {{ds/dt = (9/16)(dx/dt)}}", keywords: ["(9/16)(dx/dt)"] },
        { point: "Substitutes {{dx/dt = 1.6}} to obtain {{ds/dt = 0.9}} m s⁻¹", keywords: ["0.9"] },
        { point: "Identifies tip distance from base as {{L = x + s = (25/16)x}}", keywords: ["25/16", "l = x + s"] },
        { point: "Computes exact tip speed {{dL/dt = 2.5}} m s⁻¹", keywords: ["2.5"] },
        { point: "Explains independence from {{x}} via linearity / constant multiple of constant {{dx/dt}}", keywords: ["linear", "constant multiple"] },
      ],
      markbands: [
        { band: "6–7", marks: [6, 7], descriptor: "Rigorous similar-triangle derivation, exact shadow-growth rate {{0.9}} m s⁻¹, exact tip speed {{2.5}} m s⁻¹, and lucid mathematical explanation of constancy." },
        { band: "4–5", marks: [4, 5], descriptor: "Correct parts (a) and (b), with minor slip on tip speed (e.g. confusing {{ds/dt}} with {{dL/dt}}) or brief explanation." },
        { band: "2–3", marks: [2, 3], descriptor: "Derives {{s = (9/16)x}} cleanly with partial related-rates follow-through." },
        { band: "0–1", marks: [0, 1], descriptor: "Minimal geometric or calculus setup." },
      ],
    },
    {
      id: "5a-differentiation-ch-q08",
      kind: "written",
      marks: 8,
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Show that",
      guideRef: "curve-sketching-optimization-kinematics",
      question:
        "**[HL Paper 3 Inquiry]** For any positive integer {{n >= 1}}, consider {{f_n(x) = x^n e^(-x)}} on {{x >= 0}}. (a) Find {{f_n'(x)}} and show that {{f_n}} has a unique positive local maximum at {{x = n}}, with value {{M_n = n^n e^(-n)}}. (3 marks)\n" +
        "(b) Compute {{f_n''(x)}} and show that for every {{n >= 2}}, {{f_n}} has two positive points of inflection at {{x = n ± sqrt(n)}}. (3 marks)\n" +
        "(c) Verify directly that for {{n = 1}}, {{f_1(x) = x e^(-x)}} has only ONE point of inflection on {{x > 0}} (at {{x = 2}}), explaining why the general formula {{n - sqrt(n)}} does not yield a second interior inflection point. (2 marks)",
      hints: [
        "Factor {{x^(n - 1) e^(-x)}} out of {{f_n'(x)}} so the sign depends solely on {{(n - x)}} for {{x > 0}}.",
        "When differentiating {{f_n'(x) = (n x^(n - 1) - x^n) e^(-x)}}, factor out {{x^(n - 2) e^(-x)}} to expose a clean quadratic in {{x}}!",
        "Complete the square on {{x^2 - 2nx + n(n - 1) = (x - n)^2 - n}} to solve instantly for {{x = n ± sqrt(n)}}.",
      ],
      modelAnswer:
        "(a) By the product rule: {{f_n'(x) = n x^(n - 1) e^(-x) - x^n e^(-x) = x^(n - 1)(n - x) e^(-x)}}.\n" +
        "On {{x > 0}}, {{x^(n - 1) e^(-x) > 0}}, so {{f_n'(x) = 0}} solely at {{x = n}}, switching from positive ({{0 < x < n}}) to negative ({{x > n}}).\n" +
        "Hence {{x = n}} is the unique positive local maximum, attaining peak height {{f_n(n) = (n/e)^n = n^n e^(-n)}}.\n" +
        "(b) Differentiating {{(n x^(n - 1) - x^n) e^(-x)}} via the product rule:\n" +
        "{{f_n''(x) = [n(n - 1)x^(n - 2) - n x^(n - 1) - n x^(n - 1) + x^n] e^(-x) = x^(n - 2)[x^2 - 2nx + n(n - 1)] e^(-x)}}.\n" +
        "Setting the quadratic factor to zero: {{(x - n)^2 - n = 0}} ⇒ {{x = n ± sqrt(n)}}.\n" +
        "For {{n >= 2}}, {{n > sqrt(n)}}, so both {{n - sqrt(n) > 0}} and {{n + sqrt(n) > 0}} lie strictly in {{x > 0}}; since both are distinct simple roots and {{x^(n - 2) e^(-x) > 0}} on {{x > 0}}, {{f_n''}} changes sign at both, giving two positive points of inflection.\n" +
        "(c) For {{n = 1}}, {{f_1'(x) = (1 - x)e^(-x)}} and {{f_1''(x) = (x - 2)e^(-x)}}, which changes sign ONLY at {{x = 2}} on {{x > 0}}. Here {{n - sqrt(n) = 1 - 1 = 0}}, which sits on the domain boundary {{x = 0}} (and cancels out of {{x^(n - 2) * x}}) rather than being an interior point of {{x > 0}}.",
      markScheme: [
        { point: "Differentiates and factors to {{f_n'(x) = x^(n - 1)(n - x) e^(-x)}}", keywords: ["x^(n - 1)(n - x)"] },
        { point: "Justifies unique maximum on {{x > 0}} via sign change of {{(n - x)}} across {{x = n}}", keywords: ["0 < x < n", "x > n"] },
        { point: "Evaluates peak height {{f_n(n) = (n/e)^n = n^n e^(-n)}}", keywords: ["(n/e)^n", "attaining peak height"] },
        { point: "Differentiates again and factors to {{x^(n - 2)[x^2 - 2nx + n(n - 1)] e^(-x)}}", keywords: ["x^2 - 2nx + n(n - 1)", "x^(n - 2)"] },
        { point: "Solves quadratic to obtain {{x = n ± sqrt(n)}}", keywords: ["(x - n)^2 - n = 0"] },
        { point: "Verifies {{n - sqrt(n) > 0}} for {{n >= 2}} AND notes sign changes at both simple roots", keywords: ["n > sqrt(n)", "distinct simple roots"] },
        { point: "Computes {{f_1''(x) = (x - 2)e^(-x)}} showing sole positive inflection at {{x = 2}}", keywords: ["(x - 2)e^(-x)"] },
        { point: "Explains that for {{n = 1}}, {{1 - 1 = 0}} lies on the boundary rather than inside {{x > 0}}", keywords: ["1 - 1 = 0", "domain boundary"] },
      ],
      markbands: [
        { band: "7–8", marks: [7, 8], descriptor: "Masterful Paper 3 general analysis: exact factored {{f_n'}} and {{f_n''}}, verified sign changes for general {{n >= 2}}, and crystal-clear boundary explanation for {{n = 1}}." },
        { band: "5–6", marks: [5, 6], descriptor: "Completes parts (a) and (b) accurately with slight gap in sign-change justification or {{n = 1}} boundary explanation." },
        { band: "3–4", marks: [3, 4], descriptor: "Completes part (a) cleanly and finds {{f_n''(x)}} before factoring/solving stalls." },
        { band: "0–2", marks: [0, 2], descriptor: "Initial product-rule differentiation for {{f_n'(x)}} only." },
      ],
    },
  ],
};
