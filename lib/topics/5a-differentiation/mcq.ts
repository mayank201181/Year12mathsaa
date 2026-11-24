import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1: Limits, Differentiation Rules, Tangents & Normals (SL)
  // ===========================================================================
  {
    id: "5a-differentiation-m1",
    title: "MCQ Paper 1: Limits, Differentiation Rules, Tangents & Normals (SL)",
    level: "SL",
    questions: [
      {
        id: "5a-differentiation-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "limits-rules-tangents",
        question: "Evaluate {{lim_(x -> 3) (x^2 - 9)/(x - 3)}}.",
        options: ["{{6}}", "{{0}}", "{{3}}", "{{9}}"],
        answerIndex: 0,
        hints: [
          "Direct substitution gives {{0/0}}, so factorise the numerator first.",
          "Write {{x^2 - 9 = (x - 3)(x + 3)}} and cancel the common factor for {{x != 3}}.",
        ],
        explanation:
          "For {{x != 3}}, {{(x^2 - 9)/(x - 3) = ((x - 3)(x + 3))/(x - 3) = x + 3}}. Letting {{x -> 3}} gives {{3 + 3 = 6}}.",
      },
      {
        id: "5a-differentiation-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question: "Find {{f'(x)}} given {{f(x) = 4x^3 - 6/x + 5}}.",
        options: [
          "{{12x^2 - 6/x^2}}",
          "{{12x^2 + 6/x^2}}",
          "{{12x^2 - 6 ln x}}",
          "{{12x^2 + 6/x^2 + 5}}",
        ],
        answerIndex: 1,
        hints: [
          "Rewrite {{-6/x}} as {{-6 x^(-1)}} before using the power rule.",
          "Watch the sign when multiplying {{-6}} by the exponent {{-1}}, and remember constants differentiate to {{0}}.",
        ],
        explanation:
          "Writing {{f(x) = 4x^3 - 6x^(-1) + 5}} gives {{f'(x) = 12x^2 - 6(-1)x^(-2) + 0 = 12x^2 + 6/x^2}}.",
      },
      {
        id: "5a-differentiation-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question: "Differentiate {{y = 3 sqrt(x) - 2 e^x}} with respect to {{x}}.",
        options: [
          "{{3/(2 sqrt(x)) - 2x e^(x - 1)}}",
          "{{3/sqrt(x) - 2 e^x}}",
          "{{3/(2 sqrt(x)) - 2 e^x}}",
          "{{(3/2) sqrt(x) - 2 e^x}}",
        ],
        answerIndex: 2,
        hints: [
          "Express {{sqrt(x)}} as {{x^(1/2)}} before applying the power rule.",
          "Remember that {{e^x}} is its own derivative — do NOT apply the power rule to {{e^x}}.",
        ],
        explanation:
          "{{d/dx(3 x^(1/2) - 2 e^x) = (3/2) x^(-1/2) - 2 e^x = 3/(2 sqrt(x)) - 2 e^x}}.",
      },
      {
        id: "5a-differentiation-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question: "Find {{f'(x)}} for {{f(x) = ln(5x - 2)}}, where {{x > 2/5}}.",
        options: [
          "{{1/(5x - 2)}}",
          "{{5 ln(5x - 2)}}",
          "{{(5x - 2)/5}}",
          "{{5/(5x - 2)}}",
        ],
        answerIndex: 3,
        hints: [
          "Use the chain rule: {{d/dx [ln(u)] = (1/u) * (du/dx)}}.",
          "Here {{u = 5x - 2}}, so multiply {{1/(5x - 2)}} by {{u' = 5}}.",
        ],
        explanation:
          "By the chain rule, {{f'(x) = (1/(5x - 2)) * 5 = 5/(5x - 2)}}.",
      },
      {
        id: "5a-differentiation-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "limits-rules-tangents",
        question: "Given {{f(x) = sin(2x) + 3 cos x}} (with {{x}} in radians), find the exact value of {{f'(pi/6)}}.",
        options: ["{{-1/2}}", "{{1/2}}", "{{-1}}", "{{5/2}}"],
        answerIndex: 0,
        hints: [
          "Differentiate term by term using the chain rule on {{sin(2x)}}: {{f'(x) = 2 cos(2x) - 3 sin x}}.",
          "Evaluate {{cos(pi/3) = 1/2}} and {{sin(pi/6) = 1/2}}.",
        ],
        explanation:
          "{{f'(x) = 2 cos(2x) - 3 sin x}}. At {{x = pi/6}}, {{f'(pi/6) = 2 cos(pi/3) - 3 sin(pi/6) = 2(1/2) - 3(1/2) = 1 - 3/2 = -1/2}}.",
      },
      {
        id: "5a-differentiation-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question: "Find {{dy/dx}} for {{y = x^2 cos(3x)}}.",
        options: [
          "{{2x cos(3x) + 3x^2 sin(3x)}}",
          "{{2x cos(3x) - 3x^2 sin(3x)}}",
          "{{-6x sin(3x)}}",
          "{{2x cos(3x) - x^2 sin(3x)}}",
        ],
        answerIndex: 1,
        hints: [
          "This is a product of {{u = x^2}} and {{v = cos(3x)}} — apply the product rule {{u'v + uv'}}.",
          "Remember {{d/dx(cos(3x)) = -3 sin(3x)}} by the chain rule.",
        ],
        explanation:
          "With {{u = x^2, u' = 2x}} and {{v = cos(3x), v' = -3 sin(3x)}}, the product rule gives {{dy/dx = 2x cos(3x) - 3x^2 sin(3x)}}.",
      },
      {
        id: "5a-differentiation-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question: "Find {{f'(1)}} given {{f(x) = (2x + 1)/(x + 2)}}.",
        options: ["{{-1/3}}", "{{1/9}}", "{{1/3}}", "{{5/9}}"],
        answerIndex: 2,
        hints: [
          "Apply the quotient rule {{(u'v - uv')/v^2}} with {{u = 2x + 1}} and {{v = x + 2}}.",
          "Simplify the numerator {{2(x + 2) - (2x + 1)(1)}} before substituting {{x = 1}}.",
        ],
        explanation:
          "{{f'(x) = (2(x + 2) - (2x + 1)(1))/(x + 2)^2 = 3/(x + 2)^2}}. Substituting {{x = 1}} gives {{3/3^2 = 1/3}}.",
      },
      {
        id: "5a-differentiation-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question: "Find the equation of the tangent line to {{y = e^(2x - 4)}} at {{x = 2}}.",
        options: [
          "{{y = x - 1}}",
          "{{y = 2x - 4}}",
          "{{y = 2x + 1}}",
          "{{y = 2x - 3}}",
        ],
        answerIndex: 3,
        hints: [
          "Find both the point {{(2, y(2))}} and the tangent slope {{y'(2)}}.",
          "Since {{y(2) = e^0 = 1}} and {{y'(x) = 2 e^(2x - 4)}}, substitute into {{y - y_0 = m(x - x_0)}}.",
        ],
        explanation:
          "At {{x = 2}}, {{y = e^0 = 1}} and {{dy/dx = 2 e^(2x - 4) = 2}}. Hence the tangent is {{y - 1 = 2(x - 2)}}, which simplifies to {{y = 2x - 3}}.",
      },
      {
        id: "5a-differentiation-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question: "Find the equation of the normal to {{y = x^3 - 3x + 4}} at the point {{(2, 6)}}.",
        options: [
          "{{x + 9y = 56}}",
          "{{x + 9y = 52}}",
          "{{9x - y = 12}}",
          "{{x - 9y = -52}}",
        ],
        answerIndex: 0,
        hints: [
          "Compute {{dy/dx = 3x^2 - 3}} and evaluate at {{x = 2}} to get the tangent slope {{m_T}}.",
          "Use the perpendicular normal slope {{m_N = -1/m_T}} with point {{(2, 6)}}.",
        ],
        explanation:
          "At {{x = 2}}, {{m_T = 3(4) - 3 = 9}}, so {{m_N = -1/9}}. Thus {{y - 6 = (-1/9)(x - 2)}} ⇒ {{9y - 54 = -x + 2}} ⇒ {{x + 9y = 56}}.",
      },
      {
        id: "5a-differentiation-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question: "Differentiate {{y = (3x^2 - 1)^4}} with respect to {{x}}.",
        options: [
          "{{4(3x^2 - 1)^3}}",
          "{{24x(3x^2 - 1)^3}}",
          "{{12x(3x^2 - 1)^3}}",
          "{{24x^2(3x^2 - 1)^3}}",
        ],
        answerIndex: 1,
        hints: [
          "Apply the chain rule with outer function {{u^4}} and inner function {{u = 3x^2 - 1}}.",
          "Multiply {{4 u^3}} by {{du/dx = 6x}}.",
        ],
        explanation:
          "By the chain rule, {{dy/dx = 4(3x^2 - 1)^3 * (6x) = 24x(3x^2 - 1)^3}}.",
      },
      {
        id: "5a-differentiation-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question:
          "Differentiable functions {{f}} and {{g}} satisfy {{f(2) = 5}}, {{f'(2) = -3}}, {{g(2) = 4}}, and {{g'(2) = 2}}. Find {{h'(2)}} where {{h(x) = f(x)/g(x)}}.",
        options: ["{{-3/2}}", "{{-1/8}}", "{{-11/8}}", "{{11/8}}"],
        answerIndex: 2,
        hints: [
          "Apply the quotient rule at {{x = 2}}: {{h'(2) = (f'(2)g(2) - f(2)g'(2))/[g(2)]^2}}.",
          "Substitute carefully: {{((-3)(4) - (5)(2))/4^2}}.",
        ],
        explanation:
          "{{h'(2) = ((-3)(4) - (5)(2))/4^2 = (-12 - 10)/16 = -22/16 = -11/8}}.",
      },
      {
        id: "5a-differentiation-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question:
          "Let {{h(x) = f(g(x))}}. Given {{g(1) = 3}}, {{g'(1) = -2}}, {{f'(1) = 4}}, and {{f'(3) = 5}}, find {{h'(1)}}.",
        options: ["{{-8}}", "{{10}}", "{{15}}", "{{-10}}"],
        answerIndex: 3,
        hints: [
          "By the chain rule, {{h'(1) = f'(g(1)) * g'(1)}}.",
          "Evaluate {{f'}} at {{g(1) = 3}}, NOT at {{1}}!",
        ],
        explanation:
          "{{h'(1) = f'(g(1)) * g'(1) = f'(3) * g'(1) = 5 * (-2) = -10}}.",
      },
      {
        id: "5a-differentiation-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question: "Find the exact value of {{x}} at which the tangent to {{y = e^(3x) - 6x}} is horizontal.",
        options: [
          "{{(1/3) ln 2}}",
          "{{ln 2}}",
          "{{3 ln 2}}",
          "{{(1/3) ln 6}}",
        ],
        answerIndex: 0,
        hints: [
          "A horizontal tangent has gradient {{dy/dx = 0}}.",
          "Solve {{3 e^(3x) - 6 = 0}} by isolating {{e^(3x)}} and taking natural logarithms.",
        ],
        explanation:
          "Setting {{dy/dx = 3 e^(3x) - 6 = 0}} gives {{e^(3x) = 2}}, so {{3x = ln 2}} and {{x = (1/3) ln 2}}.",
      },
      {
        id: "5a-differentiation-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "limits-rules-tangents",
        question: "The tangent to {{y = a x^2 + b x + 1}} at {{x = 1}} has equation {{y = 5x - 2}}. Find the value of {{a - b}}.",
        options: ["{{2}}", "{{4}}", "{{-4}}", "{{6}}"],
        answerIndex: 1,
        hints: [
          "At {{x = 1}}, the curve and tangent share BOTH the same y-value and the same gradient.",
          "From {{y = 5(1) - 2 = 3}}, get {{a + b + 1 = 3}}; from {{y'(1) = 5}}, get {{2a + b = 5}}.",
          "Solve the simultaneous system for {{a}} and {{b}}, then compute {{a - b}}.",
        ],
        explanation:
          "At {{x = 1}}, {{y = 5(1) - 2 = 3}} gives {{a + b = 2}}, and {{y'(1) = 2a + b = 5}}. Subtracting yields {{a = 3}} and {{b = -1}}, so {{a - b = 3 - (-1) = 4}}.",
      },
      {
        id: "5a-differentiation-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Find",
        guideRef: "limits-rules-tangents",
        question:
          "Find the x-coordinate of the point on {{y = sqrt(2x + 1)}} ({{x > -1/2}}) where the normal is parallel to the line {{2x + y = 7}}.",
        options: ["{{1/2}}", "{{-3/8}}", "{{3/2}}", "{{7/2}}"],
        answerIndex: 2,
        hints: [
          "Rewrite {{2x + y = 7}} as {{y = -2x + 7}} to read the normal gradient {{m_N = -2}}.",
          "Convert {{m_N = -2}} into the required tangent gradient {{m_T = -1/m_N = 1/2}}.",
          "Differentiate {{y = (2x + 1)^(1/2)}} using the chain rule and solve {{dy/dx = 1/2}}.",
        ],
        explanation:
          "The normal has slope {{-2}}, so the tangent has slope {{1/2}}. Since {{dy/dx = (1/2)(2x + 1)^(-1/2) * 2 = 1/sqrt(2x + 1)}}, solving {{1/sqrt(2x + 1) = 1/2}} gives {{2x + 1 = 4}} ⇒ {{x = 3/2}}.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2: Curve Sketching, Optimization & Kinematics (SL)
  // ===========================================================================
  {
    id: "5a-differentiation-m2",
    title: "MCQ Paper 2: Curve Sketching, Concavity, Optimization & Kinematics (SL)",
    level: "SL",
    questions: [
      {
        id: "5a-differentiation-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Find",
        guideRef: "curve-sketching-optimization-kinematics",
        question: "Find the set of values of {{x}} for which {{f(x) = x^2 - 6x + 11}} is strictly decreasing.",
        options: ["{{x < 3}}", "{{x > 3}}", "{{x < 6}}", "{{x < 2}}"],
        answerIndex: 0,
        hints: [
          "A differentiable function is strictly decreasing where {{f'(x) < 0}}.",
          "Solve {{2x - 6 < 0}}.",
        ],
        explanation:
          "{{f'(x) = 2x - 6 < 0}} whenever {{x < 3}}.",
      },
      {
        id: "5a-differentiation-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Find",
        guideRef: "curve-sketching-optimization-kinematics",
        question: "Find the x-coordinates of all stationary points of {{f(x) = 2x^3 - 9x^2 + 12x - 1}}.",
        options: [
          "{{x = -1}} and {{x = -2}}",
          "{{x = 1}} and {{x = 2}}",
          "{{x = 1}} and {{x = 3}}",
          "{{x = 2}} and {{x = 3}}",
        ],
        answerIndex: 1,
        hints: [
          "Differentiate to find {{f'(x)}} and set {{f'(x) = 0}}.",
          "Factor out {{6}} from {{6x^2 - 18x + 12}}.",
        ],
        explanation:
          "{{f'(x) = 6x^2 - 18x + 12 = 6(x - 1)(x - 2) = 0}}, giving stationary points at {{x = 1}} and {{x = 2}}.",
      },
      {
        id: "5a-differentiation-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "curve-sketching-optimization-kinematics",
        question: "A twice-differentiable curve satisfies {{f'(4) = 0}} and {{f''(4) = -5}}. What feature occurs at {{x = 4}}?",
        options: [
          "Local minimum point",
          "Point of inflection",
          "Local maximum point",
          "Vertical asymptote",
        ],
        answerIndex: 2,
        hints: [
          "Recall the second derivative test at a stationary point where {{f'(4) = 0}}.",
          "{{f''(4) < 0}} means the curve is concave down (shaped like ∩).",
        ],
        explanation:
          "Since {{f'(4) = 0}} and {{f''(4) = -5 < 0}}, the curve is concave down at the horizontal tangent, so {{x = 4}} is a local maximum point.",
      },
      {
        id: "5a-differentiation-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "curve-sketching-optimization-kinematics",
        question: "Find the interval on which the graph of {{f(x) = x^4 - 4x^3}} is concave down.",
        options: [
          "{{x < 0}} or {{x > 2}}",
          "{{x < 2}}",
          "{{0 < x < 3}}",
          "{{0 < x < 2}}",
        ],
        answerIndex: 3,
        hints: [
          "A curve is concave down wherever {{f''(x) < 0}}.",
          "Compute {{f'(x) = 4x^3 - 12x^2}} and {{f''(x) = 12x^2 - 24x = 12x(x - 2)}}.",
        ],
        explanation:
          "{{f''(x) = 12x(x - 2)}} is an upward-opening parabola with roots {{0}} and {{2}}, so {{f''(x) < 0}} on {{0 < x < 2}}.",
      },
      {
        id: "5a-differentiation-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "State",
        guideRef: "curve-sketching-optimization-kinematics",
        question: "How many points of inflection does the curve {{y = x^4}} have?",
        options: ["{{0}}", "{{1}}", "{{2}}", "{{4}}"],
        answerIndex: 0,
        hints: [
          "Compute {{f''(x) = 12x^2}} and find where it equals zero.",
          "Does {{12x^2}} actually change sign as {{x}} crosses {{0}}?",
        ],
        explanation:
          "Although {{f''(0) = 0}}, {{f''(x) = 12x^2 >= 0}} on both sides of {{x = 0}}. Because concavity never changes sign, {{y = x^4}} has {{0}} points of inflection.",
      },
      {
        id: "5a-differentiation-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "curve-sketching-optimization-kinematics",
        question: "Find the coordinates of the point of inflection of {{f(x) = x^3 - 3x^2 + 4}}.",
        options: ["{{(1, 0)}}", "{{(1, 2)}}", "{{(2, 0)}}", "{{(0, 4)}}"],
        answerIndex: 1,
        hints: [
          "Solve {{f''(x) = 0}} and confirm {{f''(x)}} changes sign there.",
          "Substitute your x-value back into the ORIGINAL function {{f(x)}} to get the y-coordinate.",
        ],
        explanation:
          "{{f'(x) = 3x^2 - 6x}} and {{f''(x) = 6x - 6 = 6(x - 1)}}, which changes sign across {{x = 1}}. Evaluating {{f(1) = 1 - 3 + 4 = 2}} gives {{(1, 2)}}.",
      },
      {
        id: "5a-differentiation-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "curve-sketching-optimization-kinematics",
        question: "A function {{f}} has derivative {{f'(x) = (x - 1)^2 (x - 4)}}. Which classification of its stationary points is correct?",
        options: [
          "Local max at {{x = 1}} and local min at {{x = 4}}",
          "Local min at {{x = 1}} and local max at {{x = 4}}",
          "Stationary inflection at {{x = 1}}, local min at {{x = 4}}",
          "Stationary inflection at {{x = 4}}, local min at {{x = 1}}",
        ],
        answerIndex: 2,
        hints: [
          "Build a sign table for {{f'(x)}} around {{x = 1}} and {{x = 4}}.",
          "Notice {{(x - 1)^2 >= 0}} never changes sign across {{x = 1}}, whereas {{(x - 4)}} changes sign from negative to positive across {{x = 4}}.",
        ],
        explanation:
          "For {{x < 4}} (with {{x != 1}}), {{f'(x) < 0}}, and for {{x > 4}}, {{f'(x) > 0}}. Thus {{f'}} stays negative across {{x = 1}} (stationary inflection) and switches negative to positive at {{x = 4}} (local minimum).",
      },
      {
        id: "5a-differentiation-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "curve-sketching-optimization-kinematics",
        question:
          "A particle moves along a straight line with displacement {{s(t) = t^3 - 3t^2 - 9t + 5}} metres for {{t >= 0}}. At what time {{t}} does the particle change direction?",
        options: ["{{t = 1}} s", "{{t = 2}} s", "{{t = 9}} s", "{{t = 3}} s"],
        answerIndex: 3,
        hints: [
          "A particle reverses direction when its velocity {{v(t) = s'(t)}} equals zero AND changes sign.",
          "Factorise {{3t^2 - 6t - 9 = 0}} and apply the domain {{t >= 0}}.",
        ],
        explanation:
          "{{v(t) = 3t^2 - 6t - 9 = 3(t - 3)(t + 1) = 0}}. Rejecting {{t = -1}} since {{t >= 0}}, {{v(t)}} changes from negative to positive at {{t = 3}} s.",
      },
      {
        id: "5a-differentiation-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "curve-sketching-optimization-kinematics",
        question:
          "At {{t = 2}} s, a particle moving along a line has velocity {{v(2) = -4}} m s⁻¹ and acceleration {{a(2) = -3}} m s⁻². Which statement accurately describes its motion at {{t = 2}} s?",
        options: [
          "Moving in the negative direction and speeding up",
          "Moving in the negative direction and slowing down",
          "Moving in the positive direction and slowing down",
          "Instantaneously at rest and reversing direction",
        ],
        answerIndex: 0,
        hints: [
          "The sign of {{v}} gives the direction of motion.",
          "Compare the signs of {{v}} and {{a}}: same sign means speed {{|v|}} is increasing!",
        ],
        explanation:
          "Because {{v(2) < 0}}, the particle moves in the negative direction. Because {{v(2)}} and {{a(2)}} share the same negative sign ({{v * a > 0}}), its speed is increasing.",
      },
      {
        id: "5a-differentiation-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "curve-sketching-optimization-kinematics",
        question: "Find the x-coordinate of the local minimum of {{f(x) = x^2 e^(-x)}}.",
        options: ["{{x = 2}}", "{{x = 0}}", "{{x = 1}}", "{{x = -2}}"],
        answerIndex: 1,
        hints: [
          "Differentiate using the product rule and factor out {{x e^(-x)}}.",
          "Check the sign of {{f'(x) = x(2 - x) e^(-x)}} around both roots {{x = 0}} and {{x = 2}}.",
        ],
        explanation:
          "{{f'(x) = 2x e^(-x) - x^2 e^(-x) = x(2 - x)e^(-x)}}. Since {{e^(-x) > 0}}, {{f'}} switches from negative to positive at {{x = 0}} (local minimum) and positive to negative at {{x = 2}} (local maximum).",
      },
      {
        id: "5a-differentiation-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "curve-sketching-optimization-kinematics",
        question:
          "A rectangular enclosure is built using {{120}} m of fencing along three sides, with a straight stone wall forming the fourth side. What is the maximum possible area of the enclosure?",
        options: ["{{900}} m²", "{{1200}} m²", "{{1800}} m²", "{{3600}} m²"],
        answerIndex: 2,
        hints: [
          "Let the two sides perpendicular to the wall have length {{x}}, so the side parallel to the wall has length {{120 - 2x}}.",
          "Maximise {{A(x) = x(120 - 2x)}} by setting {{A'(x) = 0}}.",
        ],
        explanation:
          "{{A(x) = 120x - 2x^2}}, so {{A'(x) = 120 - 4x = 0}} ⇒ {{x = 30}} m (and {{A'' = -4 < 0}} confirms a maximum). The parallel side is {{60}} m, giving maximum area {{30 * 60 = 1800}} m².",
      },
      {
        id: "5a-differentiation-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Find",
        guideRef: "curve-sketching-optimization-kinematics",
        question: "Find the exact x-coordinate of the point of inflection of {{f(x) = x e^x}}.",
        options: ["{{x = -1}}", "{{x = 0}}", "{{x = 2}}", "{{x = -2}}"],
        answerIndex: 3,
        hints: [
          "Apply the product rule twice to compute {{f'(x)}} and {{f''(x)}}.",
          "Set {{f''(x) = 0}} and remember {{e^x > 0}} for all real {{x}}.",
        ],
        explanation:
          "{{f'(x) = (x + 1)e^x}} and {{f''(x) = (x + 2)e^x}}. Since {{e^x > 0}}, {{f''(x)}} changes sign from negative to positive across {{x = -2}}.",
      },
      {
        id: "5a-differentiation-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "curve-sketching-optimization-kinematics",
        question:
          "Equal squares of side {{x}} cm are cut from all four corners of a {{12}} cm by {{12}} cm square sheet, and the flaps are folded up to make an open box. Which value of {{x}} maximises the volume?",
        options: ["{{x = 2}} cm", "{{x = 3}} cm", "{{x = 4}} cm", "{{x = 6}} cm"],
        answerIndex: 0,
        hints: [
          "Write the volume as {{V(x) = x(12 - 2x)^2}} on the physical domain {{0 < x < 6}}.",
          "Differentiate {{V(x) = 144x - 48x^2 + 4x^3}} and solve {{V'(x) = 0}} inside {{(0, 6)}}.",
        ],
        explanation:
          "{{V(x) = 4x^3 - 48x^2 + 144x}}, so {{V'(x) = 12x^2 - 96x + 144 = 12(x - 2)(x - 6) = 0}}. Inside {{0 < x < 6}}, {{x = 2}} cm gives the maximum (verified by {{V''(2) = -48 < 0}}).",
      },
      {
        id: "5a-differentiation-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "curve-sketching-optimization-kinematics",
        question:
          "The graph of the derivative {{y = f'(x)}} has a local maximum at {{x = 5}} and crosses the x-axis from positive to negative at {{x = 7}}. Which features must the original curve {{y = f(x)}} have?",
        options: [
          "Local maximum at {{x = 5}}, point of inflection at {{x = 7}}",
          "Point of inflection at {{x = 5}}, local maximum at {{x = 7}}",
          "Point of inflection at {{x = 5}}, local minimum at {{x = 7}}",
          "Local minimum at {{x = 5}}, local maximum at {{x = 7}}",
        ],
        answerIndex: 1,
        hints: [
          "A local extremum of {{f'}} means its slope {{f''}} changes sign — what does a sign change in {{f''}} give for {{f}}?",
          "Where {{f'}} crosses the x-axis from positive to negative, {{f}} changes from increasing to decreasing.",
        ],
        explanation:
          "At {{x = 5}}, {{f'}} has a local maximum so {{f''}} changes from positive to negative, giving a point of inflection of {{f}}. At {{x = 7}}, {{f'}} changes from positive to negative, giving a local maximum of {{f}}.",
      },
      {
        id: "5a-differentiation-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Find",
        guideRef: "curve-sketching-optimization-kinematics",
        question:
          "Find the set of values of {{k}} for which {{f(x) = x^3 + k x^2 + 3x - 7}} satisfies {{f'(x) >= 0}} for all {{x ∈ ℝ}}.",
        options: [
          "{{k >= 3}}",
          "{{k <= -3}} or {{k >= 3}}",
          "{{-9 <= k <= 9}}",
          "{{-3 <= k <= 3}}",
        ],
        answerIndex: 3,
        hints: [
          "Differentiate to get the upward-opening quadratic {{f'(x) = 3x^2 + 2kx + 3}}.",
          "An upward-opening quadratic stays non-negative for all real {{x}} if and only if its discriminant satisfies {{Δ <= 0}}.",
        ],
        explanation:
          "{{f'(x) = 3x^2 + 2kx + 3 >= 0}} for all {{x ∈ ℝ}} requires discriminant {{(2k)^2 - 4(3)(3) <= 0}} ⇒ {{4k^2 <= 36}} ⇒ {{k^2 <= 9}} ⇒ {{-3 <= k <= 3}}.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3: First Principles, L'Hôpital, Implicit & Related Rates (HL)
  // ===========================================================================
  {
    id: "5a-differentiation-m3",
    title: "MCQ Paper 3: [HL] First Principles, L'Hôpital, Implicit & Related Rates",
    level: "HL",
    questions: [
      {
        id: "5a-differentiation-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "first-principles-lhopital-hl",
        question: "Which limit expression defines the derivative of {{f(x) = 1/x}} from first principles?",
        options: [
          "{{lim_(h -> 0) (1/(x + h) + 1/x)/h}}",
          "{{lim_(h -> 0) (1/(x + h) - 1/x)/h}}",
          "{{lim_(h -> 0) (1/x - 1/(x + h))/h}}",
          "{{lim_(h -> 0) (1/(x + h) - 1/x)/(x + h)}}",
        ],
        answerIndex: 1,
        hints: [
          "Recall the first-principles definition {{f'(x) = lim_(h -> 0) (f(x + h) - f(x))/h}}.",
          "Substitute {{f(x + h) = 1/(x + h)}} and {{f(x) = 1/x}}, keeping the order {{f(x + h) - f(x)}}.",
        ],
        explanation:
          "Substituting {{f(x) = 1/x}} directly into {{lim_(h -> 0) (f(x + h) - f(x))/h}} yields {{lim_(h -> 0) (1/(x + h) - 1/x)/h}}.",
      },
      {
        id: "5a-differentiation-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "first-principles-lhopital-hl",
        question: "Evaluate {{lim_(x -> 0) (e^(3x) - 1)/(2x)}}.",
        options: ["{{1/2}}", "{{3}}", "{{3/2}}", "{{2/3}}"],
        answerIndex: 2,
        hints: [
          "Verify that direct substitution gives the {{0/0}} indeterminate form.",
          "Apply L'Hôpital's rule by differentiating numerator and denominator separately.",
        ],
        explanation:
          "Since substituting {{x = 0}} gives {{0/0}}, L'Hôpital's rule yields {{lim_(x -> 0) (3 e^(3x))/2 = 3/2}}.",
      },
      {
        id: "5a-differentiation-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "first-principles-lhopital-hl",
        question: "Use L'Hôpital's rule to evaluate {{lim_(x -> 0) (sin(5x) - 5x)/x^3}}.",
        options: ["{{-25/6}}", "{{125/6}}", "{{-125/3}}", "{{-125/6}}"],
        answerIndex: 3,
        hints: [
          "Check {{0/0}} and apply L'Hôpital once: {{(5 cos(5x) - 5)/(3x^2)}} — notice it is STILL {{0/0}}!",
          "Apply L'Hôpital a second and third time, tracking every chain-rule factor of {{5}} and minus sign carefully.",
        ],
        explanation:
          "Three successive {{0/0}} applications give {{(5 cos(5x) - 5)/(3x^2) -> (-25 sin(5x))/(6x) -> (-125 cos(5x))/6 -> -125/6}}.",
      },
      {
        id: "5a-differentiation-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "first-principles-lhopital-hl",
        question: "Evaluate {{lim_(x -> ∞) (ln x)/x^2}}.",
        options: ["{{0}}", "{{1/2}}", "{{1}}", "{{∞}}"],
        answerIndex: 0,
        hints: [
          "As {{x -> ∞}}, both numerator and denominator grow without bound ({{∞/∞}} form).",
          "Differentiate top and bottom separately to get {{(1/x)/(2x)}}.",
        ],
        explanation:
          "Because the limit has form {{∞/∞}}, L'Hôpital's rule gives {{lim_(x -> ∞) (1/x)/(2x) = lim_(x -> ∞) 1/(2x^2) = 0}}.",
      },
      {
        id: "5a-differentiation-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "first-principles-lhopital-hl",
        question: "Evaluate {{lim_(x -> 2) (x^2 + 4)/(x + 2)}}.",
        options: ["{{4}}", "{{2}}", "{{1}}", "{{0}}"],
        answerIndex: 1,
        hints: [
          "ALWAYS check direct substitution BEFORE trying L'Hôpital's rule!",
          "Is the fraction actually {{0/0}} at {{x = 2}}?",
        ],
        explanation:
          "Direct substitution gives {{(2^2 + 4)/(2 + 2) = 8/4 = 2}}. Because the form is NOT indeterminate, L'Hôpital's rule does NOT apply (and would falsely give {{4}}).",
      },
      {
        id: "5a-differentiation-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "first-principles-lhopital-hl",
        question: "Which statement accurately describes {{f(x) = |x - 3|}} at {{x = 3}}?",
        options: [
          "Both continuous and differentiable at {{x = 3}}",
          "Differentiable but not continuous at {{x = 3}}",
          "Continuous but not differentiable at {{x = 3}}",
          "Neither continuous nor differentiable at {{x = 3}}",
        ],
        answerIndex: 2,
        hints: [
          "Check whether the left and right limits of {{|x - 3|}} match {{f(3) = 0}}.",
          "Compare the left derivative ({{-1}}) and right derivative ({{+1}}) at the sharp corner.",
        ],
        explanation:
          "{{lim_(x -> 3) |x - 3| = 0 = f(3)}} so {{f}} is continuous, but {{f'_-(3) = -1 != 1 = f'_+(3)}}, so it is not differentiable at the corner {{x = 3}}.",
      },
      {
        id: "5a-differentiation-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "first-principles-lhopital-hl",
        question:
          "The piecewise function {{f(x) = a x^2 + 2x}} for {{x <= 2}} and {{f(x) = 10x + b}} for {{x > 2}} is differentiable at {{x = 2}}. Find the value of {{a + b}}.",
        options: ["{{6}}", "{{-10}}", "{{-2}}", "{{-6}}"],
        answerIndex: 3,
        hints: [
          "Differentiability at {{x = 2}} requires BOTH matching derivatives AND matching function values.",
          "Equate derivatives at {{x = 2}}: {{4a + 2 = 10}} to find {{a}}.",
          "Then equate branch values at {{x = 2}}: {{4a + 4 = 20 + b}} to find {{b}}.",
        ],
        explanation:
          "Matching slopes gives {{2a(2) + 2 = 10}} ⇒ {{a = 2}}. Continuity at {{x = 2}} gives {{2(4) + 4 = 20 + b}} ⇒ {{b = -8}}. Hence {{a + b = 2 + (-8) = -6}}.",
      },
      {
        id: "5a-differentiation-m3-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Find",
        guideRef: "implicit-related-rates-trig-hl",
        question: "Differentiate {{y = sec(3x)}} with respect to {{x}}.",
        options: [
          "{{3 sec(3x) tan(3x)}}",
          "{{sec(3x) tan(3x)}}",
          "{{-3 sec(3x) tan(3x)}}",
          "{{3 sec^2(3x)}}",
        ],
        answerIndex: 0,
        hints: [
          "Recall {{d/dx(sec u) = sec u tan u * (du/dx)}}.",
          "Here {{u = 3x}}, so multiply by the chain factor {{3}}.",
        ],
        explanation:
          "By the chain rule, {{d/dx(sec(3x)) = sec(3x) tan(3x) * 3 = 3 sec(3x) tan(3x)}}.",
      },
      {
        id: "5a-differentiation-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "implicit-related-rates-trig-hl",
        question: "Find {{f'(x)}} given {{f(x) = arctan(3x)}}.",
        options: [
          "{{1/(1 + 9x^2)}}",
          "{{3/(1 + 9x^2)}}",
          "{{3/(1 + 3x^2)}}",
          "{{3/sqrt(1 - 9x^2)}}",
        ],
        answerIndex: 1,
        hints: [
          "Use {{d/dx(arctan u) = (du/dx)/(1 + u^2)}} with {{u = 3x}}.",
          "Be sure to square the ENTIRE inner argument: {{(3x)^2 = 9x^2}}.",
        ],
        explanation:
          "With {{u = 3x}}, {{u' = 3}} and {{u^2 = 9x^2}}, giving {{f'(x) = 3/(1 + 9x^2)}}.",
      },
      {
        id: "5a-differentiation-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "implicit-related-rates-trig-hl",
        question: "Differentiate {{y = 5^(2x)}} with respect to {{x}}.",
        options: [
          "{{5^(2x) ln 5}}",
          "{{2x * 5^(2x - 1)}}",
          "{{2 * 5^(2x) ln 5}}",
          "{{(5^(2x))/(ln 5)}}",
        ],
        answerIndex: 2,
        hints: [
          "Use {{d/dx(5^u) = 5^u (ln 5) * (du/dx)}} (or rewrite as {{e^(2x ln 5)}}).",
          "Don't forget both {{ln 5}} AND the inner derivative {{2}}.",
        ],
        explanation:
          "Writing {{y = e^(2x ln 5)}} gives {{dy/dx = (2 ln 5) e^(2x ln 5) = 2 * 5^(2x) ln 5}}.",
      },
      {
        id: "5a-differentiation-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "implicit-related-rates-trig-hl",
        question: "Find {{dy/dx}} for {{y = arcsin(x/2)}}, where {{-2 < x < 2}}.",
        options: [
          "{{2/sqrt(4 - x^2)}}",
          "{{-1/sqrt(4 - x^2)}}",
          "{{1/(4 + x^2)}}",
          "{{1/sqrt(4 - x^2)}}",
        ],
        answerIndex: 3,
        hints: [
          "Apply the chain rule to {{d/dx(arcsin u) = u'/sqrt(1 - u^2)}} with {{u = x/2}}.",
          "Simplify {{(1/2)/sqrt(1 - x^2/4)}} by factoring {{1/4}} out of the square root.",
        ],
        explanation:
          "{{dy/dx = (1/2)/sqrt(1 - x^2/4) = (1/2)/((1/2) sqrt(4 - x^2)) = 1/sqrt(4 - x^2)}}.",
      },
      {
        id: "5a-differentiation-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "implicit-related-rates-trig-hl",
        question: "Find the gradient {{dy/dx}} of the curve {{x^3 + y^3 = 9xy - 9}} at the point {{(2, 1)}}.",
        options: ["{{1/5}}", "{{-1/5}}", "{{5}}", "{{-7/5}}"],
        answerIndex: 0,
        hints: [
          "Differentiate implicitly, remembering the product rule on {{9xy}} and that {{d/dx(-9) = 0}}.",
          "Substitute {{x = 2, y = 1}} into {{3x^2 + 3y^2 (dy/dx) = 9y + 9x (dy/dx)}}.",
        ],
        explanation:
          "Differentiating gives {{3x^2 + 3y^2 (dy/dx) = 9y + 9x (dy/dx)}}. At {{(2, 1)}}, {{12 + 3(dy/dx) = 9 + 18(dy/dx)}} ⇒ {{3 = 15(dy/dx)}} ⇒ {{dy/dx = 1/5}}.",
      },
      {
        id: "5a-differentiation-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "implicit-related-rates-trig-hl",
        question:
          "A spherical balloon expands so its radius increases at {{0.5}} cm s⁻¹. Find the exact rate of increase of its volume {{dV/dt}} (in cm³ s⁻¹) when {{r = 4}} cm.",
        options: ["{{16 pi}}", "{{32 pi}}", "{{64 pi}}", "{{(128 pi)/3}}"],
        answerIndex: 1,
        hints: [
          "Differentiate the sphere volume {{V = (4/3) pi r^3}} with respect to time {{t}}.",
          "Substitute {{r = 4}} and {{dr/dt = 0.5}} into {{dV/dt = 4 pi r^2 (dr/dt)}}.",
        ],
        explanation:
          "From {{V = (4/3) pi r^3}}, {{dV/dt = 4 pi r^2 (dr/dt)}}. At {{r = 4}} with {{dr/dt = 0.5}}, {{dV/dt = 4 pi (16)(0.5) = 32 pi}} cm³ s⁻¹.",
      },
      {
        id: "5a-differentiation-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "implicit-related-rates-trig-hl",
        question:
          "A {{10}} m ladder leans against a vertical wall. Its base slides away from the wall at {{0.6}} m s⁻¹. Find {{dy/dt}} (the rate of change of the height of the top) when the base is {{6}} m from the wall.",
        options: [
          "{{-0.80}} m s⁻¹",
          "{{0.45}} m s⁻¹",
          "{{-0.45}} m s⁻¹",
          "{{-0.60}} m s⁻¹",
        ],
        answerIndex: 2,
        hints: [
          "Link base distance {{x}} and height {{y}} by {{x^2 + y^2 = 100}}, and find {{y}} when {{x = 6}}.",
          "Differentiate implicitly with respect to {{t}}: {{2x(dx/dt) + 2y(dy/dt) = 0}}.",
          "Remember that as the top slides DOWN, {{dy/dt}} must be negative.",
        ],
        explanation:
          "When {{x = 6}}, {{y = sqrt(100 - 36) = 8}} m. From {{x(dx/dt) + y(dy/dt) = 0}}, {{dy/dt = -(6/8)(0.6) = -0.45}} m s⁻¹.",
      },
      {
        id: "5a-differentiation-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "implicit-related-rates-trig-hl",
        question: "Find the exact value of {{d^2 y/dx^2}} at the point {{(3, 4)}} on the circle {{x^2 + y^2 = 25}}.",
        options: ["{{-3/16}}", "{{-7/64}}", "{{25/64}}", "{{-25/64}}"],
        answerIndex: 3,
        hints: [
          "Differentiate once to get {{x + y(dy/dx) = 0}}, so at {{(3, 4)}}, {{dy/dx = -3/4}}.",
          "Differentiate {{x + y(dy/dx) = 0}} a second time using the product rule: {{1 + (dy/dx)^2 + y(d^2 y/dx^2) = 0}}.",
          "Substitute {{y = 4}} and {{dy/dx = -3/4}} to solve for {{d^2 y/dx^2}}.",
        ],
        explanation:
          "Differentiating {{x + y y' = 0}} gives {{1 + (y')^2 + y y'' = 0}}. At {{(3, 4)}}, {{y' = -3/4}}, so {{1 + 9/16 + 4 y'' = 0}} ⇒ {{4 y'' = -25/16}} ⇒ {{d^2 y/dx^2 = -25/64}}.",
      },
    ],
  },
];
