import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1 (SL CORE): Antiderivatives, Substitution, Areas & Kinematics
  // answerIndex spread: [4, 4, 4, 3]
  // ===========================================================================
  {
    id: "5b-integration-des-maclaurin-m1",
    title: "MCQ Paper 1: SL Integration, Areas & Kinematics",
    level: "SL",
    questions: [
      {
        id: "5b-integration-des-maclaurin-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question: "Find the indefinite integral of {{6x^2 - 4x + 5}} with respect to {{x}}.",
        options: [
          "{{2x^3 - 2x^2 + 5x + C}}",
          "{{3x^3 - 2x^2 + 5x + C}}",
          "{{2x^3 - 4x^2 + 5x + C}}",
          "{{12x - 4 + C}}",
        ],
        answerIndex: 0,
        hints: ["Add {{1}} to each power of {{x}} and divide by the new power."],
        explanation:
          "Integrating term by term gives {{6(x^3/3) - 4(x^2/2) + 5x + C = 2x^3 - 2x^2 + 5x + C}}. Differentiating confirms {{6x^2 - 4x + 5}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question: "A curve satisfies {{f'(x) = 3e^(3x) - 2}} and passes through {{(0, 4)}}. What is {{f(x)}}?",
        options: [
          "{{e^(3x) - 2x + 4}}",
          "{{3e^(3x) - 2x + 1}}",
          "{{e^(3x) - 2x + 3}}",
          "{{9e^(3x) - 2x - 5}}",
        ],
        answerIndex: 2,
        hints: ["Remember {{e^0 = 1}}, not {{0}}, when finding the constant {{C}}."],
        explanation:
          "Integrating gives {{f(x) = e^(3x) - 2x + C}}. Substituting {{x = 0}} gives {{e^0 - 0 + C = 4}}, so {{1 + C = 4}} and {{C = 3}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question: "Evaluate the definite integral of {{2x + 1}} from {{x = 1}} to {{x = 3}}.",
        options: ["{{8}}", "{{10}}", "{{12}}", "{{14}}"],
        answerIndex: 1,
        hints: ["Find an antiderivative {{F(x) = x^2 + x}} and compute {{F(3) - F(1)}}."],
        explanation:
          "An antiderivative is {{F(x) = x^2 + x}}. Evaluating {{F(3) - F(1) = (9 + 3) - (1 + 1) = 12 - 2 = 10}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question: "Find the indefinite integral of {{1/(3x - 2)}} with respect to {{x}} (for {{x != 2/3}}).",
        options: [
          "{{ln|3x - 2| + C}}",
          "{{3 ln|3x - 2| + C}}",
          "{{-3/(3x - 2)^2 + C}}",
          "{{(1/3) ln|3x - 2| + C}}",
        ],
        answerIndex: 3,
        hints: [
          "The integrand has the form {{1/(ax + b)}}.",
          "Divide by the inner derivative {{a = 3}} to reverse the chain rule.",
        ],
        explanation:
          "By the reverse chain rule, integrating {{1/(3x - 2)}} yields {{(1/3) ln|3x - 2| + C}}. Differentiating gives {{(1/3) * 3/(3x - 2) = 1/(3x - 2)}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question: "Find the indefinite integral of {{8x(2x^2 + 1)^3}} with respect to {{x}}.",
        options: [
          "{{2(2x^2 + 1)^4 + C}}",
          "{{(1/4)(2x^2 + 1)^4 + C}}",
          "{{(1/2)(2x^2 + 1)^4 + C}}",
          "{{4(2x^2 + 1)^4 + C}}",
        ],
        answerIndex: 2,
        hints: [
          "Set {{u = 2x^2 + 1}}, so {{du/dx = 4x}}.",
          "Express {{8x dx}} in terms of {{du}} before integrating {{u^3}}.",
        ],
        explanation:
          "With {{u = 2x^2 + 1}}, {{du = 4x dx}}, so {{8x dx = 2 du}}. The integral becomes {{2 * u^4/4 + C = (1/2)(2x^2 + 1)^4 + C}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question: "Evaluate the definite integral of {{cos(2x)}} from {{x = 0}} to {{x = pi/4}}.",
        options: ["{{1/2}}", "{{1}}", "{{-1/2}}", "{{2}}"],
        answerIndex: 0,
        hints: [
          "The antiderivative of {{cos(2x)}} is {{(1/2) sin(2x)}}.",
          "Evaluate {{(1/2)[sin(pi/2) - sin(0)]}} in radians.",
        ],
        explanation:
          "Integrating gives {{[(1/2) sin(2x)]_0^(pi/4) = (1/2)(sin(pi/2) - sin(0)) = (1/2)(1 - 0) = 1/2}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question: "Evaluate the exact definite integral of {{2x/(x^2 + 1)}} from {{x = 0}} to {{x = 2}}.",
        options: ["{{ln 4}}", "{{ln 5}}", "{{(1/2) ln 5}}", "{{4/5}}"],
        answerIndex: 1,
        hints: [
          "Notice that the numerator {{2x}} is the exact derivative of the denominator {{x^2 + 1}}.",
          "Use {{f'(x)/f(x) -> ln|f(x)|}} and remember {{ln 1 = 0}}.",
        ],
        explanation:
          "Since {{d/dx(x^2 + 1) = 2x}}, the antiderivative is {{ln(x^2 + 1)}}. Evaluating from {{0}} to {{2}} gives {{ln 5 - ln 1 = ln 5}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question:
          "Using the substitution {{u = x^2 + 3}}, which definite integral in {{u}} is equivalent to integrating {{x sqrt(x^2 + 3)}} from {{x = 1}} to {{x = 2}}?",
        options: [
          "{{(1/2)}} times the integral of {{sqrt(u) du}} from {{u = 4}} to {{u = 7}}",
          "{{2}} times the integral of {{sqrt(u) du}} from {{u = 4}} to {{u = 7}}",
          "{{(1/2)}} times the integral of {{sqrt(u) du}} from {{u = 1}} to {{u = 2}}",
          "{{(1/2)}} times the integral of {{u sqrt(u) du}} from {{u = 4}} to {{u = 7}}",
        ],
        answerIndex: 0,
        hints: [
          "Differentiate {{u = x^2 + 3}} to express {{x dx}} in terms of {{du}}.",
          "Convert BOTH limits {{x = 1}} and {{x = 2}} into {{u}}-values.",
        ],
        explanation:
          "Since {{du = 2x dx}}, {{x dx = (1/2) du}}. At {{x = 1}}, {{u = 4}}; at {{x = 2}}, {{u = 7}}. Thus the transformed integral is {{(1/2)}} times the integral of {{sqrt(u) du}} from {{4}} to {{7}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question:
          "What is the total geometric area enclosed between {{y = x^2 - 1}} and the {{x}}-axis from {{x = 0}} to {{x = 2}}?",
        options: ["{{2/3}}", "{{4/3}}", "{{8/3}}", "{{2}}"],
        answerIndex: 3,
        hints: [
          "Check where {{x^2 - 1 = 0}} inside {{[0, 2]}}.",
          "Split the integral at {{x = 1}} and add the absolute values of both sub-integrals.",
        ],
        explanation:
          "The curve crosses the {{x}}-axis at {{x = 1}}. With {{F(x) = x^3/3 - x}}, {{F(0) = 0}}, {{F(1) = -2/3}}, and {{F(2) = 2/3}}. Total geometric area {{= |-2/3 - 0| + |2/3 - (-2/3)| = 2/3 + 4/3 = 2}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question: "Find the exact area enclosed between the parabola {{y = 4x - x^2}} and the line {{y = x}}.",
        options: ["{{3/2}}", "{{9/2}}", "{{9}}", "{{27/2}}"],
        answerIndex: 1,
        hints: [
          "Solve {{4x - x^2 = x}} to find the two intersection points.",
          "Integrate (parabola − line) = {{3x - x^2}} between those intersections.",
        ],
        explanation:
          "Intersections occur at {{x^2 - 3x = 0}}, so {{x = 0}} and {{x = 3}}. Integrating {{3x - x^2}} from {{0}} to {{3}} gives {{[(3/2)x^2 - x^3/3]_0^3 = 27/2 - 9 = 9/2}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question:
          "Given that the definite integral of {{f(x)}} from {{1}} to {{4}} is {{10}} and from {{4}} to {{7}} is {{-3}}, find the definite integral of {{2f(x) + 1}} from {{1}} to {{7}}.",
        options: ["{{14}}", "{{15}}", "{{20}}", "{{26}}"],
        answerIndex: 2,
        hints: [
          "Combine the two intervals first: integral from {{1}} to {{7}} equals {{10 + (-3)}}.",
          "Do not forget to integrate the constant {{1}} over the interval of length {{7 - 1 = 6}}.",
        ],
        explanation:
          "The integral of {{f(x)}} from {{1}} to {{7}} is {{10 + (-3) = 7}}, and the integral of {{1}} from {{1}} to {{7}} is {{6}}. Hence {{2(7) + 6 = 20}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question:
          "A particle has acceleration {{a(t) = 6t - 2}} m s⁻² and initial velocity {{v(0) = 3}} m s⁻¹. What is its velocity at {{t = 2}} s?",
        options: ["{{8}} m s⁻¹", "{{9}} m s⁻¹", "{{10}} m s⁻¹", "{{11}} m s⁻¹"],
        answerIndex: 3,
        hints: [
          "Integrate {{a(t)}} to find {{v(t) = 3t^2 - 2t + C}}.",
          "Use {{v(0) = 3}} to fix {{C}}, then evaluate {{v(2)}}.",
        ],
        explanation:
          "Integrating gives {{v(t) = 3t^2 - 2t + C}}. Since {{v(0) = 3}}, {{C = 3}}. Therefore {{v(2) = 3(4) - 2(2) + 3 = 11}} m s⁻¹.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question:
          "A particle moves along a straight line with velocity {{v(t) = 3t^2 - 6t}} m s⁻¹ for {{0 <= t <= 3}}. What is the **total distance** travelled during these {{3}} seconds?",
        options: ["{{8}} m", "{{0}} m", "{{4}} m", "{{12}} m"],
        answerIndex: 0,
        hints: [
          "Find where {{v(t) = 0}} inside {{(0, 3)}} to locate the direction reversal.",
          "Sum the magnitudes of displacement on {{[0, 2]}} and {{[2, 3]}}.",
        ],
        explanation:
          "{{v(t) = 3t(t - 2) = 0}} at {{t = 2}}. With {{F(t) = t^3 - 3t^2}}, {{F(0) = 0}}, {{F(2) = -4}}, and {{F(3) = 0}}. Total distance {{= |-4 - 0| + |0 - (-4)| = 4 + 4 = 8}} m.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question:
          "The definite integral of {{e^(2x)}} from {{x = 0}} to {{x = k}} (where {{k > 0}}) equals {{7/2}}. Find the exact value of {{k}}.",
        options: ["{{ln 4}}", "{{(3/2) ln 2}}", "{{(1/2) ln 7}}", "{{3 ln 2}}"],
        answerIndex: 1,
        hints: [
          "Evaluate {{[(1/2) e^(2x)]_0^k = (1/2)(e^(2k) - 1)}}.",
          "Solve {{e^(2k) = 8}} using {{ln 8 = 3 ln 2}}.",
        ],
        explanation:
          "Integrating gives {{(1/2)(e^(2k) - 1) = 7/2}}, so {{e^(2k) = 8}}. Taking natural logs gives {{2k = ln 8 = 3 ln 2}}, hence {{k = (3/2) ln 2}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "integration-areas-kinematics",
        question: "Find the exact value of the definite integral of {{e^x / (1 + e^x)}} from {{x = 0}} to {{x = 1}}.",
        options: [
          "{{ln(1 + e)}}",
          "{{ln(e/2)}}",
          "{{ln((1 + e)/2)}}",
          "{{(e - 1)/(e + 1)}}",
        ],
        answerIndex: 2,
        hints: [
          "Notice that the numerator {{e^x}} is the derivative of {{1 + e^x}}.",
          "Apply {{[ln(1 + e^x)]_0^1}} and combine logs using {{ln A - ln B = ln(A/B)}}.",
        ],
        explanation:
          "Because {{d/dx(1 + e^x) = e^x}}, the antiderivative is {{ln(1 + e^x)}}. Evaluating from {{0}} to {{1}} gives {{ln(1 + e) - ln(2) = ln((1 + e)/2)}}.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2 (HL): Advanced Integration & Volumes of Revolution
  // answerIndex spread: [4, 3, 4, 4]
  // ===========================================================================
  {
    id: "5b-integration-des-maclaurin-m2",
    title: "MCQ Paper 2: [HL] Advanced Integration & Volumes",
    level: "HL",
    questions: [
      {
        id: "5b-integration-des-maclaurin-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question: "Use integration by parts to find the indefinite integral of {{x e^x}} with respect to {{x}}.",
        options: [
          "{{(x + 1)e^x + C}}",
          "{{(1/2)x^2 e^x + C}}",
          "{{(x - 1)e^x + C}}",
          "{{x e^x - (1/2)e^(2x) + C}}",
        ],
        answerIndex: 2,
        hints: ["Choose {{u = x}} and {{dv/dx = e^x}} using LIATE."],
        explanation:
          "With {{u = x}} and {{dv/dx = e^x}}, {{uv -}} ∫{{v du = x e^x - e^x + C = (x - 1)e^x + C}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question: "Evaluate the exact definite integral of {{1/(9 + x^2)}} from {{x = 0}} to {{x = 3}}.",
        options: ["{{pi/12}}", "{{pi/4}}", "{{pi/6}}", "{{pi/3}}"],
        answerIndex: 0,
        hints: ["Use the standard inverse-tangent integral with {{a = 3}}."],
        explanation:
          "Since {{a = 3}}, the antiderivative is {{(1/3) arctan(x/3)}}. Evaluating from {{0}} to {{3}} yields {{(1/3)(arctan 1 - arctan 0) = (1/3)(pi/4) = pi/12}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question: "Evaluate the exact definite integral of {{1/sqrt(4 - x^2)}} from {{x = 0}} to {{x = 1}}.",
        options: ["{{pi/12}}", "{{pi/3}}", "{{pi/4}}", "{{pi/6}}"],
        answerIndex: 3,
        hints: [
          "Match {{1/sqrt(a^2 - x^2)}} with {{a = 2}}.",
          "Remember that {{arcsin(x/a)}} has NO {{1/a}} factor in front!",
        ],
        explanation:
          "The antiderivative of {{1/sqrt(2^2 - x^2)}} is {{arcsin(x/2)}}. Evaluating from {{0}} to {{1}} gives {{arcsin(1/2) - arcsin(0) = pi/6}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question: "Find the indefinite integral of {{x cos x}} with respect to {{x}}.",
        options: [
          "{{x sin x - cos x + C}}",
          "{{x sin x + cos x + C}}",
          "{{-x sin x + cos x + C}}",
          "{{(1/2)x^2 sin x + C}}",
        ],
        answerIndex: 1,
        hints: [
          "Set {{u = x}} and {{dv/dx = cos x}} so {{v = sin x}}.",
          "Watch the double negative when subtracting the integral of {{sin x}}.",
        ],
        explanation:
          "IBP gives {{x sin x -}} ∫{{sin x dx = x sin x - (-cos x) + C = x sin x + cos x + C}}. Differentiating confirms {{sin x + x cos x - sin x = x cos x}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question: "Use partial fractions to evaluate the exact definite integral of {{2/(x^2 - 1)}} from {{x = 2}} to {{x = 3}}.",
        options: ["{{ln(3/2)}}", "{{ln(2/3)}}", "{{ln 3}}", "{{2 ln(3/2)}}"],
        answerIndex: 0,
        hints: [
          "Decompose {{2/((x - 1)(x + 1)) = 1/(x - 1) - 1/(x + 1)}}.",
          "Combine the logarithms into {{ln|(x - 1)/(x + 1)|}} before applying limits.",
        ],
        explanation:
          "Since {{2/(x^2 - 1) = 1/(x - 1) - 1/(x + 1)}}, the antiderivative is {{ln|(x - 1)/(x + 1)|}}. Between {{2}} and {{3}}: {{ln(2/4) - ln(1/3) = ln((1/2)/(1/3)) = ln(3/2)}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question:
          "The region bounded by {{y = 2x}}, the {{x}}-axis, and {{x = 3}} is rotated {{2pi}} radians about the {{x}}-axis. What is the exact volume generated?",
        options: ["{{18pi}}", "{{24pi}}", "{{36pi}}", "{{72pi}}"],
        answerIndex: 2,
        hints: [
          "Use {{V = pi}} times the integral of {{y^2 dx}} from {{0}} to {{3}}.",
          "Square BOTH the {{2}} and the {{x}}: {{y^2 = 4x^2}}.",
        ],
        explanation:
          "{{V = pi}} times the integral of {{4x^2 dx}} from {{0}} to {{3}} gives {{pi [4x^3/3]_0^3 = 36pi}} (matching a cone of radius {{6}} and height {{3}}).",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question:
          "The region in the first quadrant bounded by {{y = x^2}}, the {{y}}-axis, and the line {{y = 4}} is rotated {{2pi}} radians about the **{{y}}-axis**. What is the exact volume?",
        options: ["{{32pi/5}}", "{{16pi}}", "{{4pi}}", "{{8pi}}"],
        answerIndex: 3,
        hints: [
          "For rotation about the {{y}}-axis, integrate {{pi x^2 dy}} with {{y}}-limits from {{0}} to {{4}}.",
          "Here {{x^2 = y}} directly!",
        ],
        explanation:
          "Since {{x^2 = y}}, {{V = pi}} times the integral of {{y dy}} from {{y = 0}} to {{y = 4}}, which is {{pi [y^2/2]_0^4 = 8pi}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question: "Find the indefinite integral of {{1/(x^2 + 6x + 13)}} with respect to {{x}}.",
        options: [
          "{{(1/2) arctan((x + 3)/2) + C}}",
          "{{arctan((x + 3)/2) + C}}",
          "{{(1/4) arctan((x + 3)/4) + C}}",
          "{{(1/2) arcsin((x + 3)/2) + C}}",
        ],
        answerIndex: 0,
        hints: [
          "Complete the square on the denominator: {{x^2 + 6x + 13 = (x + 3)^2 + 4}}.",
          "Apply the inverse-tangent integral {{1/(u^2 + k^2) -> (1/k) arctan(u/k)}} with {{u = x + 3}} and {{k = 2}}.",
        ],
        explanation:
          "Completing the square gives {{1/((x + 3)^2 + 2^2)}}, which integrates directly to {{(1/2) arctan((x + 3)/2) + C}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question: "Use the substitution {{u = 1 - x}} to evaluate the definite integral of {{x sqrt(1 - x)}} from {{x = 0}} to {{x = 1}}.",
        options: ["{{2/15}}", "{{4/15}}", "{{8/15}}", "{{2/5}}"],
        answerIndex: 1,
        hints: [
          "Express {{x = 1 - u}} and {{dx = -du}}, transforming limits {{0 -> 1}} to {{1 -> 0}}.",
          "Swap limits using the minus sign to integrate {{u^(1/2) - u^(3/2)}} from {{0}} to {{1}}.",
        ],
        explanation:
          "With {{u = 1 - x}}, the integral becomes ∫{{_0^1 (1 - u) u^(1/2) du = [(2/3)u^(3/2) - (2/5)u^(5/2)]_0^1 = 2/3 - 2/5 = 4/15}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question:
          "The region enclosed between {{y = sqrt(x)}} and {{y = x}} on {{[0, 1]}} is rotated {{2pi}} radians about the {{x}}-axis. Find the exact volume generated.",
        options: ["{{pi/30}}", "{{pi/3}}", "{{pi/2}}", "{{pi/6}}"],
        answerIndex: 3,
        hints: [
          "On {{[0, 1]}}, {{sqrt(x) >= x}}, so the outer radius is {{R = sqrt(x)}} and inner radius is {{r = x}}.",
          "Use the washer formula {{pi}} times the integral of {{(R^2 - r^2) dx}}.",
        ],
        explanation:
          "{{V = pi}}∫{{_0^1 (x - x^2) dx = pi [x^2/2 - x^3/3]_0^1 = pi(1/2 - 1/3) = pi/6}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question: "Find the indefinite integral of {{x^2 ln x}} with respect to {{x}} (for {{x > 0}}).",
        options: [
          "{{(x^3/3) ln x - x^3/3 + C}}",
          "{{(x^3/3) ln x + x^3/9 + C}}",
          "{{(x^3/3) ln x - x^3/9 + C}}",
          "{{x^2 ln x - (1/2)x^2 + C}}",
        ],
        answerIndex: 2,
        hints: [
          "By LIATE, choose {{u = ln x}} (Logarithmic) and {{dv/dx = x^2}}.",
          "Then {{v (du/dx) = (x^3/3)(1/x) = x^2/3}}.",
        ],
        explanation:
          "With {{u = ln x, dv = x^2 dx}}, we obtain {{(x^3/3) ln x -}} ∫{{(x^2/3) dx = (x^3/3) ln x - x^3/9 + C}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question: "Using the substitution {{x = sin theta}}, evaluate the exact definite integral of {{sqrt(1 - x^2)}} from {{x = 0}} to {{x = 1}}.",
        options: ["{{pi/4}}", "{{pi/2}}", "{{pi/3}}", "{{1/2}}"],
        answerIndex: 0,
        hints: [
          "Substitute {{x = sin theta}}, {{dx = cos theta d theta}}, and limits {{theta = 0}} to {{pi/2}}.",
          "Use the double-angle identity {{cos^2 theta = (1 + cos(2 theta))/2}}.",
        ],
        explanation:
          "The integral becomes ∫{{_0^(pi/2) cos^2 theta d theta = [theta/2 + sin(2 theta)/4]_0^(pi/2) = pi/4}} (also the area of a quarter unit circle).",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question: "Use integration by parts twice to find the exact definite integral of {{e^x sin x}} from {{x = 0}} to {{x = pi/2}}.",
        options: [
          "{{(e^(pi/2) - 1)/2}}",
          "{{(e^(pi/2) + 1)/2}}",
          "{{e^(pi/2) + 1}}",
          "{{(e^(pi/2) + 1)/4}}",
        ],
        answerIndex: 1,
        hints: [
          "Apply IBP twice with {{u = sin x}} (then {{cos x}}) and {{dv = e^x dx}} to recover {{-I}}.",
          "Solve {{2I = [e^x(sin x - cos x)]_0^(pi/2)}} carefully at {{x = 0}}.",
        ],
        explanation:
          "Cyclic IBP yields the antiderivative {{(1/2)e^x(sin x - cos x)}}. Evaluating from {{0}} to {{pi/2}} gives {{(1/2)e^(pi/2)(1 - 0) - (1/2)(1)(0 - 1) = (e^(pi/2) + 1)/2}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question: "Find the indefinite integral of {{(x^2 + 1)/(x - 1)}} with respect to {{x}} (for {{x != 1}}).",
        options: [
          "{{x^2/2 - x + 2 ln|x - 1| + C}}",
          "{{x^2/2 + x + ln|x - 1| + C}}",
          "{{x^2/2 + x - 2 ln|x - 1| + C}}",
          "{{x^2/2 + x + 2 ln|x - 1| + C}}",
        ],
        answerIndex: 3,
        hints: [
          "The rational function is improper (degree {{2 >= 1}}), so divide first.",
          "Verify {{(x + 1)(x - 1) + 2 = x^2 + 1}}.",
        ],
        explanation:
          "Dividing gives {{(x^2 + 1)/(x - 1) = x + 1 + 2/(x - 1)}}. Integrating term by term yields {{x^2/2 + x + 2 ln|x - 1| + C}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        guideRef: "advanced-integration-volumes-hl",
        question:
          "One arch of {{y = sin x}} for {{0 <= x <= pi}} is rotated {{2pi}} radians about the {{x}}-axis. What is the exact volume generated?",
        options: ["{{2pi}}", "{{pi^2}}", "{{pi^2/2}}", "{{pi^2/4}}"],
        answerIndex: 2,
        hints: [
          "Write {{V = pi}}∫{{_0^pi sin^2 x dx}}.",
          "Rewrite {{sin^2 x = (1 - cos(2x))/2}} before integrating.",
        ],
        explanation:
          "{{V = pi}}∫{{_0^pi (1 - cos(2x))/2 dx = pi [x/2 - sin(2x)/4]_0^pi = pi(pi/2 - 0) = pi^2/2}}.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3 (HL): First-Order ODEs (Analytical FA2029) & Maclaurin Series
  // answerIndex spread: [3, 4, 4, 4]
  // ===========================================================================
  {
    id: "5b-integration-des-maclaurin-m3",
    title: "MCQ Paper 3: [HL] First-Order ODEs & Maclaurin Series",
    level: "HL",
    questions: [
      {
        id: "5b-integration-des-maclaurin-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        guideRef: "differential-equations-hl",
        question: "Solve the separable differential equation {{dy/dx = 2xy}} given that {{y(0) = 3}}.",
        options: [
          "{{y = e^(x^2) + 2}}",
          "{{y = 3e^(x^2)}}",
          "{{y = 3e^(2x)}}",
          "{{y = 3e^(2x^2)}}",
        ],
        answerIndex: 1,
        hints: ["Separate into {{(1/y) dy = 2x dx}} and integrate both sides."],
        explanation:
          "Integrating gives {{ln|y| = x^2 + C}}, so {{y = A e^(x^2)}}. Using {{y(0) = 3}} gives {{A = 3}}, hence {{y = 3e^(x^2)}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        guideRef: "differential-equations-hl",
        question: "What is the integrating factor {{mu(x)}} for the linear differential equation {{dy/dx + 3y = e^(2x)}}?",
        options: ["{{e^(2x)}}", "{{3e^x}}", "{{e^(-3x)}}", "{{e^(3x)}}"],
        answerIndex: 3,
        hints: ["Identify {{P(x) = 3}} and compute {{mu(x) = e^(int P(x) dx)}}."],
        explanation:
          "The equation is already in standard form with {{P(x) = 3}}. Its integrating factor is {{mu(x) = e^(int 3 dx) = e^(3x)}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "differential-equations-hl",
        question: "Find the integrating factor {{mu(x)}} for {{x (dy/dx) - 2y = x^4}} (for {{x > 0}}).",
        options: ["{{e^(-2x)}}", "{{x^2}}", "{{1/x^2}}", "{{-2/x}}"],
        answerIndex: 2,
        hints: [
          "Divide by {{x}} FIRST so the coefficient of {{dy/dx}} is {{1}}.",
          "Simplify {{e^(-2 ln x) = e^(ln(x^(-2)))}}.",
        ],
        explanation:
          "Standard form is {{dy/dx - (2/x)y = x^3}}, so {{P(x) = -2/x}}. Hence {{mu(x) = e^(-2 ln x) = x^(-2) = 1/x^2}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "differential-equations-hl",
        question: "Solve the homogeneous ODE {{dy/dx = (x + y)/x}} for {{x > 0}}, given that {{y(1) = 4}}.",
        options: [
          "{{y = x ln x + 4x}}",
          "{{y = x ln x + 4}}",
          "{{y = 4x e^(x - 1)}}",
          "{{y = x^2 + 3x}}",
        ],
        answerIndex: 0,
        hints: [
          "Substitute {{y = vx}} and {{dy/dx = v + x (dv/dx)}}.",
          "Cancel {{v}} from both sides to obtain {{x (dv/dx) = 1}}.",
        ],
        explanation:
          "Setting {{y = vx}} gives {{v + x(dv/dx) = 1 + v}}, so {{dv/dx = 1/x}} and {{v = ln x + C}}. Thus {{y = x ln x + Cx}}; applying {{y(1) = 4}} gives {{C = 4}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "differential-equations-hl",
        question: "Find the particular solution to {{dy/dx + y = 2e^x}} subject to {{y(0) = 3}}.",
        options: [
          "{{y = 2e^x + e^(-x)}}",
          "{{y = e^x + 2}}",
          "{{y = 3e^x - e^(-x)}}",
          "{{y = e^x + 2e^(-x)}}",
        ],
        answerIndex: 3,
        hints: [
          "Multiply through by {{mu(x) = e^x}} to get {{d/dx(e^x y) = 2e^(2x)}}.",
          "Integrate to {{e^x y = e^(2x) + C}} BEFORE dividing by {{e^x}}.",
        ],
        explanation:
          "Multiplying by {{e^x}} gives {{d/dx(e^x y) = 2e^(2x)}}, so {{e^x y = e^(2x) + C}}. At {{x = 0, y = 3}}, {{3 = 1 + C}} so {{C = 2}}, giving {{y = e^x + 2e^(-x)}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "differential-equations-hl",
        question: "Solve {{dy/dx = y^2}} with initial condition {{y(0) = 1/2}}.",
        options: [
          "{{y = 1/(2 + x)}}",
          "{{y = 1/(2 - x)}}",
          "{{y = (1/2)e^(2x)}}",
          "{{y = 1/(1 - 2x)}}",
        ],
        answerIndex: 1,
        hints: [
          "Separate variables to get {{y^(-2) dy = dx}}.",
          "Remember that the integral of {{y^(-2)}} is {{-1/y}}, not {{ln y}}.",
        ],
        explanation:
          "Integrating {{y^(-2) dy = dx}} gives {{-1/y = x + C}}. At {{x = 0, y = 1/2}}, {{-2 = C}}, so {{-1/y = x - 2}} and {{y = 1/(2 - x)}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "differential-equations-hl",
        question:
          "A slope field has horizontal segments along the entire line {{y = 2x}}, positive slopes above {{y = 2x}}, and negative slopes below {{y = 2x}}. Which ODE generates this slope field?",
        options: [
          "{{dy/dx = 2x - y}}",
          "{{dy/dx = y + 2x}}",
          "{{dy/dx = y - 2x}}",
          "{{dy/dx = y/(2x)}}",
        ],
        answerIndex: 2,
        hints: [
          "Test where {{dy/dx = 0}} to find the zero-slope isocline.",
          "Check the sign of {{dy/dx}} at a point above {{y = 2x}}, such as {{(0, 1)}}.",
        ],
        explanation:
          "For {{dy/dx = y - 2x}}, the slope is {{0}} whenever {{y = 2x}}, positive when {{y > 2x}}, and negative when {{y < 2x}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        guideRef: "maclaurin-series-hl",
        question: "What is the coefficient of {{x^3}} in the Maclaurin series of {{sin(2x)}}?",
        options: ["{{-1/3}}", "{{4/3}}", "{{-8/3}}", "{{-4/3}}"],
        answerIndex: 3,
        hints: ["Substitute {{2x}} into {{sin u = u - u^3/6 + ...}}."],
        explanation:
          "Replacing {{u}} by {{2x}} in {{-u^3/3!}} gives {{-(2x)^3/6 = -(8/6)x^3 = -(4/3)x^3}}, so the coefficient is {{-4/3}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "maclaurin-series-hl",
        question: "Find the Maclaurin expansion of {{ln(1 - 2x)}} up to and including the term in {{x^3}}.",
        options: [
          "{{-2x - 2x^2 - (8/3)x^3}}",
          "{{-2x + 2x^2 - (8/3)x^3}}",
          "{{-2x - 2x^2 - (4/3)x^3}}",
          "{{-2x - 4x^2 - (8/3)x^3}}",
        ],
        answerIndex: 0,
        hints: [
          "Substitute {{u = -2x}} into {{ln(1 + u) = u - u^2/2 + u^3/3 - ...}}.",
          "Notice that every term becomes negative when {{u < 0}}.",
        ],
        explanation:
          "With {{u = -2x}}, {{u - u^2/2 + u^3/3 = -2x - (4x^2)/2 + (-8x^3)/3 = -2x - 2x^2 - (8/3)x^3}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "maclaurin-series-hl",
        question: "Find the coefficient of {{x^2}} in the Maclaurin expansion of {{e^x / (1 - x)}} (for {{|x| < 1}}).",
        options: ["{{3/2}}", "{{5/2}}", "{{2}}", "{{7/2}}"],
        answerIndex: 1,
        hints: [
          "Write {{e^x = 1 + x + x^2/2 + ...}} and {{(1 - x)^(-1) = 1 + x + x^2 + ...}}.",
          "Collect all products whose powers of {{x}} sum to {{2}}.",
        ],
        explanation:
          "Multiplying {{(1 + x + x^2/2 + ...)(1 + x + x^2 + ...)}} gives {{x^2}} coefficient {{1(1) + 1(1) + (1/2)(1) = 5/2}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "maclaurin-series-hl",
        question: "Find the Maclaurin polynomial of degree {{2}} for {{f(x) = ln(2 + x)}}.",
        options: [
          "{{ln 2 + x - x^2/2}}",
          "{{ln 2 + x/2 - x^2/4}}",
          "{{ln 2 + x/2 - x^2/8}}",
          "{{x/2 - x^2/8}}",
        ],
        answerIndex: 2,
        hints: [
          "Factor out {{2}} first: {{ln(2 + x) = ln 2 + ln(1 + x/2)}}.",
          "Substitute {{u = x/2}} into {{u - u^2/2}}.",
        ],
        explanation:
          "{{ln(2 + x) = ln 2 + ln(1 + x/2) = ln 2 + (x/2) - (x/2)^2/2 + ... = ln 2 + x/2 - x^2/8}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "maclaurin-series-hl",
        question: "Use Maclaurin series to evaluate the limit of {{(cos(2x) - 1 + 2x^2)/x^4}} as {{x -> 0}}.",
        options: ["{{1/3}}", "{{4/3}}", "{{1/6}}", "{{2/3}}"],
        answerIndex: 3,
        hints: [
          "Expand {{cos(2x) = 1 - (2x)^2/2! + (2x)^4/4! - ...}}.",
          "Cancel {{1 - 2x^2}} and divide the leading remaining term by {{x^4}}.",
        ],
        explanation:
          "{{cos(2x) = 1 - 2x^2 + 16x^4/24 - ... = 1 - 2x^2 + (2/3)x^4 - ...}}. Subtracting {{1 - 2x^2}} and dividing by {{x^4}} gives limit {{2/3}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "maclaurin-series-hl",
        question: "What are the first three non-zero terms of the Maclaurin series of {{arctan(x^2)}}?",
        options: [
          "{{x^2 - x^6/3 + x^10/5}}",
          "{{x^2 - x^6/6 + x^10/120}}",
          "{{x^2 - x^4/3 + x^6/5}}",
          "{{x^2 + x^6/3 + x^10/5}}",
        ],
        answerIndex: 0,
        hints: [
          "Recall {{arctan u = u - u^3/3 + u^5/5 - ...}} (plain odd denominators, no factorials!).",
          "Substitute {{u = x^2}} and apply power-of-a-power rules.",
        ],
        explanation:
          "Replacing {{u}} by {{x^2}} in {{u - u^3/3 + u^5/5}} yields {{x^2 - x^6/3 + x^10/5}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        guideRef: "maclaurin-series-hl",
        question:
          "The function {{y(x)}} satisfies {{dy/dx = y + x^2}} with {{y(0) = 2}}. Find the coefficient of {{x^3}} in the Maclaurin series of {{y(x)}}.",
        options: ["{{4/3}}", "{{2/3}}", "{{1/3}}", "{{4}}"],
        answerIndex: 1,
        hints: [
          "Differentiate repeatedly: {{y'' = y' + 2x}} and {{y''' = y'' + 2}}.",
          "Compute {{y'(0), y''(0), y'''(0)}} and remember to divide {{y'''(0)}} by {{3! = 6}}.",
        ],
        explanation:
          "We have {{y(0) = 2}}, {{y'(0) = 2 + 0 = 2}}, {{y''(0) = 2 + 0 = 2}}, and {{y'''(0) = 2 + 2 = 4}}. The coefficient of {{x^3}} is {{y'''(0)/3! = 4/6 = 2/3}}.",
      },
      {
        id: "5b-integration-des-maclaurin-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        guideRef: "differential-equations-hl",
        question:
          "Solve the logistic differential equation {{dy/dx = y(2 - y)}} given that {{y(0) = 1}}.",
        options: [
          "{{y = 2e^x/(1 + e^x)}}",
          "{{y = e^(2x)/(1 + e^(2x))}}",
          "{{y = 2e^(2x)/(1 + e^(2x))}}",
          "{{y = 2/(1 + e^(2x))}}",
        ],
        answerIndex: 2,
        hints: [
          "Separate and use partial fractions: {{1/(y(2 - y)) = (1/2)(1/y + 1/(2 - y))}}.",
          "Integrate to {{(1/2) ln|y/(2 - y)| = x + C}}, fix {{C = 0}} from {{y(0) = 1}}, and solve for {{y}}.",
        ],
        explanation:
          "Integrating gives {{ln(y/(2 - y)) = 2x + K}}. Since {{y(0) = 1}}, {{K = ln 1 = 0}}, so {{y/(2 - y) = e^(2x)}} and {{y = 2e^(2x)/(1 + e^(2x))}}.",
      },
    ],
  },
];
