import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // DIAGNOSTIC QUIZ (10 Qs: 4 SL, 6 HL; 4 MCQ [ans 0,1,2,3], 4 Short, 2 Written)
  // ===========================================================================
  quiz: [
    {
      id: "5b-integration-des-maclaurin-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      guideRef: "integration-areas-kinematics",
      question: "Evaluate the definite integral of {{3x^2 + 2}} from {{x = 0}} to {{x = 2}}.",
      options: ["{{12}}", "{{10}}", "{{8}}", "{{14}}"],
      answerIndex: 0,
      hints: ["Find the antiderivative {{x^3 + 2x}} and substitute {{x = 2}} minus {{x = 0}}."],
      explanation: "Integrating gives {{[x^3 + 2x]_0^2 = (8 + 4) - 0 = 12}}.",
    },
    {
      id: "5b-integration-des-maclaurin-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Find",
      guideRef: "integration-areas-kinematics",
      question: "A function satisfies {{f'(x) = 4x - 3}} and {{f(2) = 5}}. Find the exact value of {{f(0)}}.",
      answer: { type: "number", value: 3 },
      traps: [
        { spec: { type: "number", value: 5 }, feedback: "Don't assume C equals f(2) — substitute x = 2 into f(x) = 2x² − 3x + C first." },
      ],
      hints: ["Integrate {{f'(x)}} to obtain {{f(x) = 2x^2 - 3x + C}}, then use {{f(2) = 5}}."],
      solution: [
        "Integrate: {{f(x) = 2x^2 - 3x + C}}.",
        "Apply {{f(2) = 5}}: {{2(4) - 3(2) + C = 5}}, so {{2 + C = 5}} and {{C = 3}}.",
        "Since {{f(0) = C}}, we get {{f(0) = 3}}.",
      ],
    },
    {
      id: "5b-integration-des-maclaurin-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "integration-areas-kinematics",
      question: "Find the exact area enclosed between the parabola {{y = 6x - x^2}} and the {{x}}-axis.",
      answer: { type: "number", value: 36 },
      hints: [
        "Set {{6x - x^2 = 0}} to find the {{x}}-intercepts {{x = 0}} and {{x = 6}}.",
        "Integrate {{6x - x^2}} from {{0}} to {{6}}.",
      ],
      solution: [
        "Intercepts: {{x(6 - x) = 0}} gives {{x = 0}} and {{x = 6}}, with {{y >= 0}} on {{[0, 6]}}.",
        "Area {{= [3x^2 - x^3/3]_0^6 = 3(36) - 216/3 = 108 - 72 = 36}}.",
      ],
    },
    {
      id: "5b-integration-des-maclaurin-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      guideRef: "integration-areas-kinematics",
      question:
        "A particle moves along a straight line with velocity {{v(t) = 4 - 2t}} m s⁻¹ for {{0 <= t <= 3}}. What is the total distance travelled?",
      options: ["{{3}} m", "{{5}} m", "{{4}} m", "{{6}} m"],
      answerIndex: 1,
      hints: [
        "Find where {{v(t) = 0}} to split the motion into forward and backward parts.",
        "Sum the absolute displacements over {{[0, 2]}} and {{[2, 3]}}.",
      ],
      explanation:
        "{{v(t) = 0}} at {{t = 2}}. With {{F(t) = 4t - t^2}}, {{F(0) = 0}}, {{F(2) = 4}}, {{F(3) = 3}}. Total distance {{= |4 - 0| + |3 - 4| = 4 + 1 = 5}} m.",
    },
    {
      id: "5b-integration-des-maclaurin-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      guideRef: "advanced-integration-volumes-hl",
      question: "Evaluate the exact definite integral of {{1/(4 + x^2)}} from {{x = 0}} to {{x = 2}}.",
      options: ["{{pi/4}}", "{{pi/2}}", "{{pi/8}}", "{{pi/16}}"],
      answerIndex: 2,
      hints: [
        "Use the standard inverse-tangent integral {{1/(k^2 + x^2) -> (1/k) arctan(x/k)}} with {{k = 2}}.",
        "Remember {{arctan(1) = pi/4}}.",
      ],
      explanation:
        "The antiderivative is {{(1/2) arctan(x/2)}}. Evaluating from {{0}} to {{2}} gives {{(1/2)(pi/4 - 0) = pi/8}}.",
    },
    {
      id: "5b-integration-des-maclaurin-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "advanced-integration-volumes-hl",
      question:
        "The region bounded by {{y = x^2}}, the {{x}}-axis, and {{x = 2}} is rotated {{2pi}} radians about the {{x}}-axis. Find the exact value of {{V/pi}} as an improper fraction.",
      answer: { type: "fraction", n: 32, d: 5, simplest: true },
      traps: [
        { spec: { type: "fraction", n: 8, d: 3 }, feedback: "You integrated y instead of y²! Volume uses π∫y² dx = π∫x⁴ dx." },
      ],
      hints: [
        "Use {{V/pi =}} integral of {{y^2 dx}} from {{0}} to {{2}}.",
        "Since {{y = x^2}}, {{y^2 = x^4}}.",
      ],
      solution: [
        "{{V/pi}} is the definite integral of {{(x^2)^2 = x^4}} from {{0}} to {{2}}.",
        "Evaluating {{[x^5/5]_0^2 = 32/5}}.",
      ],
    },
    {
      id: "5b-integration-des-maclaurin-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      guideRef: "differential-equations-hl",
      question: "What is the integrating factor {{mu(x)}} for {{dy/dx + (3/x) y = x^2}} ({{x > 0}})?",
      options: ["{{3 ln x}}", "{{e^(3x)}}", "{{1/x^3}}", "{{x^3}}"],
      answerIndex: 3,
      hints: [
        "Read {{P(x) = 3/x}} and integrate it to get {{3 ln x}}.",
        "Simplify {{e^(3 ln x) = e^(ln(x^3))}}.",
      ],
      explanation:
        "Since ∫{{(3/x) dx = 3 ln x = ln(x^3)}}, the integrating factor is {{mu(x) = e^(ln(x^3)) = x^3}}.",
    },
    {
      id: "5b-integration-des-maclaurin-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "maclaurin-series-hl",
      question: "Find the exact coefficient of {{x^4}} in the Maclaurin series of {{cos(2x)}} as a simplified fraction.",
      answer: { type: "fraction", n: 2, d: 3, simplest: true },
      traps: [
        { spec: { type: "fraction", n: 1, d: 24 }, feedback: "Don't forget to raise the inner factor 2 to the 4th power: (2x)⁴/24 = 16x⁴/24." },
        { spec: { type: "fraction", n: -2, d: 3 }, feedback: "Check the alternating sign in cos u = 1 − u²/2! + u⁴/4! — the u⁴ term is positive." },
      ],
      hints: [
        "Recall {{cos u = 1 - u^2/2! + u^4/4! - ...}}.",
        "Substitute {{u = 2x}} and simplify {{2^4 / 24}}.",
      ],
      solution: [
        "The {{u^4}} term of {{cos u}} is {{+u^4/24}}.",
        "Substituting {{u = 2x}} gives {{(2x)^4/24 = 16x^4/24 = (2/3)x^4}}, so the coefficient is {{2/3}}.",
      ],
    },
    {
      id: "5b-integration-des-maclaurin-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "HL",
      commandTerm: "Solve",
      guideRef: "differential-equations-hl",
      marks: 4,
      question: "Solve the differential equation {{dy/dx = y/x + 2}} for {{x > 0}}, given that {{y(1) = 3}}.",
      hints: [
        "Either rewrite in linear standard form {{dy/dx - (1/x)y = 2}} with integrating factor {{1/x}}, or substitute {{y = vx}}.",
        "Don't forget the constant {{C}} before multiplying through by {{x}}.",
      ],
      modelAnswer:
        "Rewrite in linear standard form: {{dy/dx - (1/x)y = 2}}. Here {{P(x) = -1/x}}, so the integrating factor is {{mu(x) = e^(-ln x) = 1/x}}. Multiplying through gives {{d/dx(y/x) = 2/x}}. Integrating both sides yields {{y/x = 2 ln x + C}}. Applying the initial condition at {{x = 1, y = 3}} gives {{3/1 = 2 ln 1 + C}}, so {{C = 3}}. Therefore {{y = 2x ln x + 3x}}.",
      markScheme: [
        { point: "Rewrites in standard form with P(x) = −1/x (or applies homogeneous y = vx correctly)", keywords: ["1/x", "vx"] },
        { point: "Finds integrating factor μ(x) = 1/x (or reduces to dv/dx = 2/x)", keywords: ["e^(-ln x)", "dv/dx"] },
        { point: "Integrates correctly to y/x = 2 ln x + C", keywords: ["2 ln x"] },
        { point: "Finds C = 3 and writes final solution y = 2x ln x + 3x", keywords: ["2x ln x + 3x"] },
      ],
    },
    {
      id: "5b-integration-des-maclaurin-quiz-q10",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Hence",
      guideRef: "maclaurin-series-hl",
      marks: 5,
      question:
        "Find the Maclaurin polynomial of degree {{3}} for {{f(x) = e^x sin x}}, and hence evaluate the limit of {{(e^x sin x - x - x^2)/x^3}} as {{x -> 0}}.",
      hints: [
        "Multiply {{e^x = 1 + x + x^2/2 + ...}} by {{sin x = x - x^3/6 + ...}}, keeping terms up to {{x^3}}.",
        "Substitute your polynomial into the limit numerator and cancel {{x + x^2}}.",
      ],
      modelAnswer:
        "Using standard series, {{e^x = 1 + x + x^2/2 + x^3/6 + ...}} and {{sin x = x - x^3/6 + ...}}. Multiplying and retaining terms up to degree 3: {{(1)(x - x^3/6) + (x)(x) + (x^2/2)(x) = x + x^2 + (1/2 - 1/6)x^3 = x + x^2 + (1/3)x^3}}. Substituting into the quotient yields {{((1/3)x^3 + O(x^4))/x^3 = 1/3 + O(x)}}, so as {{x -> 0}} the limit equals {{1/3}}.",
      markScheme: [
        { point: "Writes standard expansions for e^x and sin x up to relevant powers", keywords: ["x^2/2"] },
        { point: "Multiplies series cleanly up to x³", keywords: ["1/2 - 1/6"] },
        { point: "Obtains correct Maclaurin polynomial x + x² + (1/3)x³", keywords: ["x + x^2 + (1/3)x^3"] },
        { point: "Substitutes polynomial into quotient and divides by x³", keywords: ["quotient", "o(x)"] },
        { point: "Deduces exact limit 1/3", keywords: ["1/3"] },
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 PAPERS × 15 Qs = 30 Qs)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1 (SL CORE): Integration, Areas & Kinematics (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "5b-integration-des-maclaurin-p1",
      title: "Practice Paper 1: SL Core Integration, Areas & Kinematics",
      level: "SL",
      questions: [
        {
          id: "5b-integration-des-maclaurin-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "integration-areas-kinematics",
          question: "Evaluate the exact definite integral of {{4x^3 - 6x^2 + 2}} from {{x = 0}} to {{x = 3}}.",
          answer: { type: "number", value: 33 },
          hints: ["Find the antiderivative {{x^4 - 2x^3 + 2x}} and substitute {{x = 3}}."],
          solution: [
            "Antiderivative: {{F(x) = x^4 - 2x^3 + 2x}}.",
            "{{F(3) - F(0) = (81 - 54 + 6) - 0 = 33}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Find",
          guideRef: "integration-areas-kinematics",
          question: "Given {{f'(x) = 9x^2 - 4x + 5}} and {{f(1) = 10}}, find the exact value of {{f(-1)}}.",
          answer: { type: "number", value: -6 },
          traps: [
            { spec: { type: "number", value: -10 }, feedback: "You forgot to include the constant of integration C = 4." },
          ],
          hints: ["Integrate term by term to find {{f(x) = 3x^3 - 2x^2 + 5x + C}} and solve for {{C}}."],
          solution: [
            "{{f(x) = 3x^3 - 2x^2 + 5x + C}}.",
            "Using {{f(1) = 10}}: {{3 - 2 + 5 + C = 10}} gives {{C = 4}}.",
            "{{f(-1) = 3(-1) - 2(1) + 5(-1) + 4 = -3 - 2 - 5 + 4 = -6}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "integration-areas-kinematics",
          question: "Evaluate the exact definite integral of {{3/sqrt(x)}} from {{x = 1}} to {{x = 4}}.",
          answer: { type: "number", value: 6 },
          hints: ["Rewrite {{3/sqrt(x) = 3x^(-1/2)}} before applying the power rule."],
          solution: [
            "Antiderivative of {{3x^(-1/2)}} is {{3 * (x^(1/2))/(1/2) = 6 sqrt(x)}}.",
            "Evaluate from {{1}} to {{4}}: {{6(2) - 6(1) = 6}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "integration-areas-kinematics",
          question: "Evaluate the exact definite integral of {{6 sin(3x)}} from {{x = 0}} to {{x = pi/6}}.",
          answer: { type: "number", value: 2 },
          traps: [
            { spec: { type: "number", value: -2 }, feedback: "Watch the sign: the integral of sin(3x) is −(1/3)cos(3x), and −(−2 cos 0) = +2." },
            { spec: { type: "number", value: 6 }, feedback: "Remember to divide by the inner derivative 3 when integrating sin(3x)." },
          ],
          hints: [
            "The antiderivative of {{6 sin(3x)}} is {{-2 cos(3x)}}.",
            "Remember {{cos(0) = 1}}, not {{0}}!",
          ],
          solution: [
            "Antiderivative: {{-2 cos(3x)}}.",
            "Evaluate: {{-2 cos(pi/2) - (-2 cos 0) = 0 + 2 = 2}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "integration-areas-kinematics",
          question: "Evaluate the exact definite integral of {{6x(x^2 + 1)^2}} from {{x = 0}} to {{x = 2}}.",
          answer: { type: "number", value: 124 },
          traps: [
            { spec: { type: "number", value: 125 }, feedback: "Check the lower limit: when x = 0, u = 0² + 1 = 1, so subtract 1³ = 1." },
          ],
          hints: [
            "Let {{u = x^2 + 1}}, so {{du = 2x dx}} and {{6x dx = 3 du}}.",
            "Change the limits from {{x = 0, 2}} to {{u = 1, 5}}.",
          ],
          solution: [
            "With {{u = x^2 + 1}}, {{6x dx = 3 du}}, and limits become {{u = 1}} to {{u = 5}}.",
            "Integrate {{3u^2 du}} from {{1}} to {{5}}: {{[u^3]_1^5 = 125 - 1 = 124}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "integration-areas-kinematics",
          question:
            "Given that the definite integral of {{f(x)}} from {{1}} to {{5}} equals {{14}}, find the definite integral of {{3f(x) - 4}} from {{1}} to {{5}}.",
          answer: { type: "number", value: 26 },
          traps: [
            { spec: { type: "number", value: 38 }, feedback: "You subtracted 4 once instead of integrating 4 over the width (5 − 1) = 4." },
          ],
          hints: [
            "Use linearity: split into {{3}} times the integral of {{f(x)}} minus the integral of {{4}}.",
            "The integral of constant {{4}} from {{1}} to {{5}} is {{4(5 - 1) = 16}}.",
          ],
          solution: [
            "By linearity, the integral equals {{3(14) - [4x]_1^5 = 42 - 16 = 26}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "integration-areas-kinematics",
          question:
            "The definite integral of {{6x - 2}} from {{x = 0}} to {{x = k}} (where {{k > 0}}) is equal to {{21}}. Find the exact value of {{k}}.",
          answer: { type: "number", value: 3 },
          hints: [
            "Evaluate the definite integral in terms of {{k}} to obtain {{3k^2 - 2k = 21}}.",
            "Factorise {{(3k + 7)(k - 3) = 0}} and select the positive root.",
          ],
          solution: [
            "{{[3x^2 - 2x]_0^k = 3k^2 - 2k = 21}}, so {{3k^2 - 2k - 21 = 0}}.",
            "Factorising gives {{(3k + 7)(k - 3) = 0}}; since {{k > 0}}, {{k = 3}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "integration-areas-kinematics",
          question: "Find the exact area enclosed by {{y = 3x^2}}, the {{x}}-axis, {{x = 1}}, and {{x = 3}}.",
          answer: { type: "number", value: 26 },
          hints: [
            "Since {{3x^2 >= 0}} on {{[1, 3]}}, the geometric area equals the definite integral.",
            "Compute {{[x^3]_1^3}}.",
          ],
          solution: [
            "Area {{= [x^3]_1^3 = 27 - 1 = 26}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "integration-areas-kinematics",
          question:
            "Find the exact total geometric area enclosed between {{y = x^2 - 9}} and the {{x}}-axis from {{x = 0}} to {{x = 4}}. Give your answer as an improper fraction.",
          answer: { type: "fraction", n: 64, d: 3, simplest: true },
          traps: [
            { spec: { type: "fraction", n: -44, d: 3 }, feedback: "That is the raw signed integral! Split at the root x = 3 and add both positive areas." },
            { spec: { type: "fraction", n: 44, d: 3 }, feedback: "Taking the absolute value of the whole integral still cancels the region on [3, 4] against [0, 3]. Split at x = 3." },
          ],
          hints: [
            "The curve crosses the {{x}}-axis at {{x = 3}} inside {{[0, 4]}}.",
            "Add the magnitude of the integral on {{[0, 3]}} and the integral on {{[3, 4]}}.",
          ],
          solution: [
            "Let {{F(x) = x^3/3 - 9x}}. Then {{F(0) = 0}}, {{F(3) = 9 - 27 = -18}}, and {{F(4) = 64/3 - 36 = -44/3}}.",
            "Area on {{[0, 3]}} is {{|-18 - 0| = 18}}.",
            "Area on {{[3, 4]}} is {{|-44/3 - (-18)| = 10/3}}.",
            "Total geometric area {{= 18 + 10/3 = 64/3}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "integration-areas-kinematics",
          question:
            "Find the exact area enclosed between the two parabolas {{y = 2x^2}} and {{y = 8x - 2x^2}}. Give your answer as an improper fraction.",
          answer: { type: "fraction", n: 16, d: 3, simplest: true },
          hints: [
            "Set {{2x^2 = 8x - 2x^2}} to find the intersections {{x = 0}} and {{x = 2}}.",
            "Integrate upper minus lower: {{(8x - 2x^2) - 2x^2 = 8x - 4x^2}} from {{0}} to {{2}}.",
          ],
          solution: [
            "Intersections: {{4x^2 - 8x = 0}} gives {{x = 0}} and {{x = 2}}.",
            "Area {{=}} integral of {{8x - 4x^2}} from {{0}} to {{2}} {{= [4x^2 - (4/3)x^3]_0^2 = 16 - 32/3 = 16/3}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "integration-areas-kinematics",
          question:
            "A particle moves in a straight line with velocity {{v(t) = 6t - 12}} m s⁻¹ for {{0 <= t <= 5}}. Find the total distance travelled in metres.",
          answer: { type: "number", value: 39 },
          traps: [
            { spec: { type: "number", value: 15 }, feedback: "15 m is the net displacement! Split at v(t) = 0 (t = 2) to find total distance." },
          ],
          hints: [
            "Find where {{v(t) = 0}}: {{t = 2}} s.",
            "Sum the magnitudes of displacement over {{[0, 2]}} and {{[2, 5]}}.",
          ],
          solution: [
            "With {{F(t) = 3t^2 - 12t}}, {{F(0) = 0}}, {{F(2) = -12}}, and {{F(5) = 15}}.",
            "Total distance {{= |-12 - 0| + |15 - (-12)| = 12 + 27 = 39}} m.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "integration-areas-kinematics",
          marks: 5,
          question:
            "Use an appropriate substitution to evaluate the exact definite integral of {{4x / (x^2 + 1)^2}} from {{x = 0}} to {{x = 1}}.",
          hints: [
            "Set {{u = x^2 + 1}} and compute {{du = 2x dx}}.",
            "Convert the limits {{x = 0}} and {{x = 1}} into {{u}}-limits before integrating {{2u^(-2)}}.",
          ],
          modelAnswer:
            "Let {{u = x^2 + 1}}, so {{du/dx = 2x}} and {{4x dx = 2 du}}. Convert the limits: when {{x = 0}}, {{u = 1}}; when {{x = 1}}, {{u = 2}}. The integral transforms to the integral from {{u = 1}} to {{u = 2}} of {{2u^(-2) du}}. Integrating gives {{[-2/u]_1^2 = (-2/2) - (-2/1) = -1 + 2 = 1}}.",
          markScheme: [
            { point: "Chooses substitution u = x² + 1", keywords: ["u = x^2 + 1"] },
            { point: "Relates differentials: 4x dx = 2 du", keywords: ["2 du"] },
            { point: "Converts limits correctly to u = 1 and u = 2", keywords: ["u = 2"] },
            { point: "Integrates 2u⁻² to −2/u", keywords: ["-2/u"] },
            { point: "Substitutes limits and obtains exact value 1", keywords: ["-1 + 2 = 1"] },
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "integration-areas-kinematics",
          marks: 6,
          question:
            "Consider the curve {{y = e^(2x) - 1}} for {{x >= 0}}. (a) Find the exact area bounded by the curve, the {{x}}-axis, and the line {{x = ln 3}}. (b) Find the exact value of {{a > 0}} such that the area enclosed between the curve, the {{x}}-axis, and {{x = a}} equals {{15/2 - a}}.",
          hints: [
            "Find the antiderivative {{(1/2)e^(2x) - x}} and note {{e^(2 ln 3) = 3^2 = 9}}.",
            "In part (b), set {{(1/2)e^(2a) - a - 1/2 = 15/2 - a}} and notice {{-a}} cancels cleanly!",
          ],
          modelAnswer:
            "(a) On {{[0, ln 3]}}, {{e^(2x) - 1 >= 0}}. Integrating gives {{[(1/2)e^(2x) - x]_0^(ln 3) = ((1/2)e^(2 ln 3) - ln 3) - (1/2 - 0)}}. Since {{e^(2 ln 3) = 9}}, the area equals {{9/2 - ln 3 - 1/2 = 4 - ln 3}}. (b) For upper limit {{a > 0}}, the area is {{(1/2)e^(2a) - a - 1/2}}. Equating to {{15/2 - a}} cancels {{-a}}, giving {{(1/2)e^(2a) = 8}}, so {{e^(2a) = 16}}. Taking logs gives {{2a = ln 16 = 4 ln 2}}, hence {{a = 2 ln 2}}.",
          markScheme: [
            { point: "Finds correct antiderivative (1/2)e^(2x) − x", keywords: ["(1/2)e^(2x) - x"] },
            { point: "Simplifies e^(2 ln 3) = 9 and subtracts lower limit 1/2", keywords: ["9/2"] },
            { point: "Obtains exact area 4 − ln 3 in part (a)", keywords: ["4 - ln 3"] },
            { point: "Sets up equation (1/2)e^(2a) − a − 1/2 = 15/2 − a", keywords: ["(1/2)e^(2a) = 8"] },
            { point: "Solves e^(2a) = 16", keywords: ["16"] },
            { point: "Concludes exact answer a = 2 ln 2", keywords: ["2 ln 2"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Attempts antiderivative of e^(2x) − 1 with minor chain-rule or lower-limit omissions." },
            { band: "3–4", marks: [3, 4], descriptor: "Completes part (a) accurately and sets up the exponential equation in part (b)." },
            { band: "5–6", marks: [5, 6], descriptor: "Full, exact analytic solutions for both (a) 4 − ln 3 and (b) 2 ln 2 with clear log manipulation." },
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "integration-areas-kinematics",
          marks: 6,
          question:
            "A particle starts from the origin with velocity {{v(t) = 3t^2 - 12t + 9}} m s⁻¹ for {{0 <= t <= 5}}. (a) Find the instants when the particle is instantaneously at rest. (b) Find its displacement at {{t = 5}} s. (c) Calculate the total distance travelled during the {{5}} seconds.",
          hints: [
            "Factorise {{3(t^2 - 4t + 3) = 0}} to locate both turning instants.",
            "Integrate {{v(t)}} to get {{s(t) = t^3 - 6t^2 + 9t}} (since {{s(0) = 0}}), and evaluate {{s}} at {{t = 0, 1, 3, 5}}.",
          ],
          modelAnswer:
            "(a) Setting {{v(t) = 0}}: {{3(t^2 - 4t + 3) = 3(t - 1)(t - 3) = 0}}, so the particle is at rest at {{t = 1}} s and {{t = 3}} s. (b) Integrating with {{s(0) = 0}} gives {{s(t) = t^3 - 6t^2 + 9t}}. At {{t = 5}}, displacement is {{s(5) = 125 - 150 + 45 = 20}} m. (c) Evaluating position at turning points: {{s(0) = 0}}, {{s(1) = 4}}, {{s(3) = 0}}, {{s(5) = 20}}. Summing interval magnitudes: {{|4 - 0| + |0 - 4| + |20 - 0| = 4 + 4 + 20 = 28}} m.",
          markScheme: [
            { point: "Factorises v(t) = 3(t − 1)(t − 3)", keywords: ["(t - 1)(t - 3)"] },
            { point: "Identifies both rest times t = 1 and t = 3", keywords: ["t = 1", "t = 3"] },
            { point: "Integrates v(t) with s(0) = 0 to get s(t) = t³ − 6t² + 9t", keywords: ["t^3 - 6t^2 + 9t"] },
            { point: "Computes net displacement s(5) = 20 m", keywords: ["= 20"] },
            { point: "Evaluates s(1) = 4 and s(3) = 0 to split intervals", keywords: ["s(1) = 4"] },
            { point: "Sums magnitudes 4 + 4 + 20 to obtain total distance 28 m", keywords: ["28"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Finds rest times or antiderivative s(t) with incomplete distance splitting." },
            { band: "3–4", marks: [3, 4], descriptor: "Finds rest times and net displacement accurately, with partial attempt at total distance." },
            { band: "5–6", marks: [5, 6], descriptor: "Complete, rigorous solution distinguishing net displacement (20 m) from total distance (28 m)." },
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Show that",
          guideRef: "integration-areas-kinematics",
          marks: 6,
          question:
            "Consider the curves {{y = x^2 - 2x}} and {{y = 4x - x^2}}. (a) Find the {{x}}-coordinates of their points of intersection. (b) Find the exact area enclosed between the two curves. (c) Show that the vertical line {{x = 3/2}} bisects this enclosed area into two equal parts.",
          hints: [
            "Solve {{x^2 - 2x = 4x - x^2}} and integrate **(upper − lower)** {{= 6x - 2x^2}}.",
            "Evaluate the integral from {{0}} to {{3/2}} and compare it with half of your part (b) answer.",
          ],
          modelAnswer:
            "(a) Equating the curves: {{x^2 - 2x = 4x - x^2}} gives {{2x^2 - 6x = 2x(x - 3) = 0}}, so the intersections are at {{x = 0}} and {{x = 3}}. (b) On {{[0, 3]}}, {{4x - x^2 >= x^2 - 2x}}, so upper minus lower is {{6x - 2x^2}}. The enclosed area is {{[3x^2 - (2/3)x^3]_0^3 = 27 - 18 = 9}}. (c) The area to the left of {{x = 3/2}} is {{[3x^2 - (2/3)x^3]_0^(3/2) = 3(9/4) - (2/3)(27/8) = 27/4 - 9/4 = 18/4 = 9/2}}, which is exactly half of {{9}}, showing the line bisects the region.",
          markScheme: [
            { point: "Sets curves equal and obtains 2x(x − 3) = 0", keywords: ["2x(x - 3)"] },
            { point: "States both intersection x-coordinates x = 0 and x = 3", keywords: ["x = 0", "x = 3"] },
            { point: "Forms correct upper-minus-lower integrand 6x − 2x²", keywords: ["6x - 2x^2"] },
            { point: "Integrates and obtains total enclosed area 9", keywords: ["27 - 18 = 9"] },
            { point: "Evaluates left-hand area from 0 to 3/2", keywords: ["27/4 - 9/4"] },
            { point: "Concludes left area equals 9/2 = half of 9", keywords: ["9/2"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Finds intersection points or sets up difference of curves." },
            { band: "3–4", marks: [3, 4], descriptor: "Determines enclosed area 9 accurately with minor arithmetic slips in part (c)." },
            { band: "5–6", marks: [5, 6], descriptor: "Complete proof showing intersections, total area 9, and exact bisection into 9/2 and 9/2." },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2 (HL): Advanced Integration, Volumes, ODEs & Maclaurin (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "5b-integration-des-maclaurin-p2",
      title: "Practice Paper 2: [HL] Advanced Integration, Volumes, ODEs & Maclaurin",
      level: "HL",
      questions: [
        {
          id: "5b-integration-des-maclaurin-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "advanced-integration-volumes-hl",
          question: "Use integration by parts to evaluate the exact definite integral of {{x e^x}} from {{x = 0}} to {{x = 1}}.",
          answer: { type: "number", value: 1 },
          hints: ["Take {{u = x}} and {{dv/dx = e^x}} to get {{[(x - 1)e^x]_0^1}}."],
          solution: [
            "Using IBP with {{u = x, dv/dx = e^x}}, the antiderivative is {{x e^x - e^x = (x - 1)e^x}}.",
            "Evaluate from {{0}} to {{1}}: {{(0)e^1 - (-1)e^0 = 0 + 1 = 1}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "advanced-integration-volumes-hl",
          question:
            "Evaluate the exact definite integral of {{x cos x}} from {{x = 0}} to {{x = pi/2}}. Leave your answer in exact form in terms of {{pi}}.",
          answer: { type: "expression", expr: "pi/2 - 1", display: "{{pi/2 - 1}}" },
          hints: [
            "Integrate by parts with {{u = x}} and {{dv/dx = cos x}}.",
            "Watch the lower limit: {{cos(0) = 1}}, not {{0}}!",
          ],
          solution: [
            "IBP gives antiderivative {{x sin x + cos x}}.",
            "Evaluate from {{0}} to {{pi/2}}: {{((pi/2)(1) + 0) - (0 + 1) = pi/2 - 1}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "advanced-integration-volumes-hl",
          question:
            "Given that the definite integral of {{1/(1 + x^2)}} from {{x = 0}} to {{x = sqrt(3)}} equals {{pi/k}}, find the integer {{k}}.",
          answer: { type: "number", value: 3 },
          hints: [
            "The antiderivative of {{1/(1 + x^2)}} is {{arctan x}}.",
            "Recall the exact radian value of {{arctan(sqrt(3))}}.",
          ],
          solution: [
            "{{[arctan x]_0^(sqrt(3)) = arctan(sqrt(3)) - arctan(0) = pi/3}}, so {{k = 3}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "advanced-integration-volumes-hl",
          question:
            "The region bounded by {{y = sqrt(9 - x^2)}}, the {{x}}-axis, {{x = 0}}, and {{x = 3}} is rotated {{2pi}} radians about the {{x}}-axis. Find the exact volume in terms of {{pi}}.",
          answer: { type: "expression", expr: "18pi", display: "{{18pi}}" },
          hints: [
            "Use {{V = pi}} times the integral of {{y^2 dx = (9 - x^2) dx}} from {{0}} to {{3}}.",
            "Verify against the formula for a hemisphere of radius {{3}}.",
          ],
          solution: [
            "{{V = pi}}∫{{_0^3 (9 - x^2) dx = pi [9x - x^3/3]_0^3 = pi(27 - 9) = 18pi}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "advanced-integration-volumes-hl",
          question:
            "The region in the first quadrant bounded by {{y = 2 sqrt(x)}}, the {{y}}-axis, and the horizontal line {{y = 4}} is rotated {{2pi}} radians about the **{{y}}-axis**. Find the exact value of {{V/pi}} as a simplified improper fraction.",
          answer: { type: "fraction", n: 64, d: 5, simplest: true },
          traps: [
            { spec: { type: "fraction", n: 32, d: 1 }, feedback: "You rotated around the x-axis (∫4x dx = 32)! For the y-axis, express x² in terms of y." },
          ],
          hints: [
            "Rearrange {{y = 2 sqrt(x)}} to get {{x = y^2/4}}, hence {{x^2 = y^4/16}}.",
            "Integrate {{y^4/16}} with respect to {{y}} from {{y = 0}} to {{y = 4}}.",
          ],
          solution: [
            "Since {{x = y^2/4}}, {{x^2 = y^4/16}}.",
            "{{V/pi =}} integral from {{0}} to {{4}} of {{(y^4/16) dy = [y^5/80]_0^4 = 1024/80 = 64/5}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Solve",
          guideRef: "differential-equations-hl",
          question:
            "Solve the linear ODE {{dy/dx + (2/x)y = 6x}} ({{x > 0}}) given {{y(1) = 4}}, and find the exact value of {{y(2)}} as an improper fraction.",
          answer: { type: "fraction", n: 53, d: 8, simplest: true },
          hints: [
            "Compute the integrating factor {{mu(x) = e^(2 ln x) = x^2}}.",
            "Integrate {{d/dx(x^2 y) = 6x^3}} with {{+ C}}, solve for {{C}} at {{x = 1}}, then evaluate {{y(2)}}.",
          ],
          solution: [
            "Integrating factor {{mu(x) = x^2}} gives {{d/dx(x^2 y) = 6x^3}}, so {{x^2 y = (3/2)x^4 + C}}.",
            "Using {{y(1) = 4}}: {{4 = 3/2 + C}}, giving {{C = 5/2}}.",
            "Thus {{y = (3/2)x^2 + 5/(2x^2)}}, and {{y(2) = 6 + 5/8 = 53/8}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "differential-equations-hl",
          question:
            "Solve the separable ODE {{2y (dy/dx) = 3x^2 + 2}} given {{y(0) = 2}} (with {{y > 0}}), and find the exact value of {{y(2)}}.",
          answer: { type: "number", value: 4 },
          hints: [
            "Integrate {{2y dy = (3x^2 + 2) dx}} directly to get {{y^2 = x^3 + 2x + C}}.",
            "Use {{y(0) = 2}} to find {{C = 4}}, then substitute {{x = 2}}.",
          ],
          solution: [
            "Separating and integrating gives {{y^2 = x^3 + 2x + C}}.",
            "At {{x = 0, y = 2}}: {{4 = C}}, so {{y^2 = x^3 + 2x + 4}}.",
            "At {{x = 2}}: {{y^2 = 8 + 4 + 4 = 16}}, hence {{y(2) = 4}} (since {{y > 0}}).",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "maclaurin-series-hl",
          question: "Find the Maclaurin polynomial of degree {{3}} for {{f(x) = sqrt(1 + 2x)}}.",
          answer: { type: "expression", expr: "1 + x - x^2/2 + x^3/2", form: "expanded", display: "{{1 + x - x^2/2 + x^3/2}}" },
          hints: [
            "Expand {{(1 + u)^(1/2) = 1 + u/2 - u^2/8 + u^3/16 + ...}}.",
            "Substitute {{u = 2x}} and simplify each fraction.",
          ],
          solution: [
            "With {{p = 1/2}} and {{u = 2x}}: {{1 + (1/2)(2x) + ((1/2)(-1/2)/2)(4x^2) + ((1/2)(-1/2)(-3/2)/6)(8x^3)}}.",
            "Simplifying yields {{1 + x - x^2/2 + x^3/2}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "maclaurin-series-hl",
          question:
            "Find the exact coefficient of {{x^3}} in the Maclaurin expansion of {{e^(2x) ln(1 + x)}} as a simplified fraction.",
          answer: { type: "fraction", n: 4, d: 3, simplest: true },
          hints: [
            "Write {{e^(2x) = 1 + 2x + 2x^2 + ...}} and {{ln(1 + x) = x - x^2/2 + x^3/3 - ...}}.",
            "Multiply only the pairs whose exponents add to {{3}}.",
          ],
          solution: [
            "From {{(1 + 2x + 2x^2 + ...)(x - x^2/2 + x^3/3 - ...)}}, the {{x^3}} coefficient is {{1(1/3) + 2(-1/2) + 2(1) = 1/3 - 1 + 2 = 4/3}}.",
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "advanced-integration-volumes-hl",
          marks: 6,
          question:
            "Decompose {{3x / ((x - 1)(x + 2))}} into partial fractions, and hence evaluate its exact definite integral from {{x = 2}} to {{x = 4}} in the form {{ln(a/b)}}.",
          hints: [
            "Set {{3x/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2)}} and test {{x = 1}} and {{x = -2}}.",
            "Combine the resulting logarithms using log laws {{k ln m = ln(m^k)}} and {{ln p - ln q = ln(p/q)}}.",
          ],
          modelAnswer:
            "Write {{3x = A(x + 2) + B(x - 1)}}. Setting {{x = 1}} gives {{3 = 3A}}, so {{A = 1}}. Setting {{x = -2}} gives {{-6 = -3B}}, so {{B = 2}}. Hence the integrand splits into {{1/(x - 1) + 2/(x + 2)}}. Integrating gives {{[ln|x - 1| + 2 ln|x + 2|]_2^4}}. At {{x = 4}}: {{ln 3 + 2 ln 6 = ln(3 * 36) = ln 108}}. At {{x = 2}}: {{ln 1 + 2 ln 4 = ln 16}}. Subtracting gives {{ln(108/16) = ln(27/4)}}.",
          markScheme: [
            { point: "Sets up identity 3x = A(x + 2) + B(x − 1)", keywords: ["a(x + 2) + b(x - 1)"] },
            { point: "Determines A = 1 and B = 2 accurately", keywords: ["a = 1", "b = 2"] },
            { point: "Integrates each fraction to ln|x − 1| + 2 ln|x + 2|", keywords: ["2 ln|x + 2|"] },
            { point: "Substitutes upper limit x = 4 to obtain ln 108", keywords: ["108"] },
            { point: "Substitutes lower limit x = 2 to obtain ln 16", keywords: ["16"] },
            { point: "Simplifies to exact single logarithm ln(27/4)", keywords: ["ln(27/4)"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Sets up partial fraction identity and finds at least one constant." },
            { band: "3–4", marks: [3, 4], descriptor: "Correctly integrates both partial fractions and substitutes limits." },
            { band: "5–6", marks: [5, 6], descriptor: "Full exact evaluation simplified cleanly to ln(27/4)." },
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "advanced-integration-volumes-hl",
          marks: 6,
          question:
            "Use integration by parts twice to evaluate the exact definite integral of {{e^x cos x}} from {{x = 0}} to {{x = pi}}.",
          hints: [
            "Label the indefinite integral {{I}} and apply IBP twice, differentiating the trig factor both times.",
            "Solve the resulting equation {{2I = e^x(cos x + sin x)}} before substituting {{x = pi}} and {{x = 0}}.",
          ],
          modelAnswer:
            "Let {{I}} be the target indefinite integral. First pass with {{u = cos x, dv/dx = e^x}}: {{I = (cos x) e^x +}} integral of {{e^x sin x dx}}. Second pass with {{u = sin x, dv/dx = e^x}}: integral of {{e^x sin x dx = e^x sin x - I}}. Substituting back gives {{I = (cos x) e^x + e^x sin x - I}}, so {{2I = e^x(sin x + cos x)}} and {{I = (1/2)e^x(sin x + cos x)}}. Evaluating from {{0}} to {{pi}}: {{(1/2)e^pi(0 - 1) - (1/2)(1)(0 + 1) = -(e^pi + 1)/2}}.",
          markScheme: [
            { point: "First IBP pass gives (cos x)e^x + ∫ e^x sin x dx", keywords: ["(cos x) e^x"] },
            { point: "Second IBP pass gives e^x sin x − I", keywords: ["e^x sin x - i"] },
            { point: "Collects cyclic term to obtain 2I = e^x(sin x + cos x)", keywords: ["2i = e^x(sin x + cos x)"] },
            { point: "Divides by 2 for antiderivative (1/2)e^x(sin x + cos x)", keywords: ["(1/2)e^x(sin x + cos x)"] },
            { point: "Evaluates trig values accurately at x = π and x = 0", keywords: ["0 - 1"] },
            { point: "Obtains exact final answer −(e^π + 1)/2", keywords: ["-(e^pi + 1)/2"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Attempts first integration by parts pass correctly." },
            { band: "3–4", marks: [3, 4], descriptor: "Completes cyclic IBP to find the antiderivative with minor sign slips." },
            { band: "5–6", marks: [5, 6], descriptor: "Rigorous cyclic IBP and exact evaluation giving −(e^π + 1)/2." },
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "advanced-integration-volumes-hl",
          marks: 6,
          question:
            "The region {{R}} in the first quadrant is enclosed by {{y = 1/sqrt(1 + x^2)}}, the horizontal line {{y = 1/sqrt(2)}}, and the {{y}}-axis. (a) Find the exact volume generated when {{R}} is rotated {{2pi}} radians about the {{x}}-axis. (b) Find the exact volume generated when {{R}} is rotated {{2pi}} radians about the {{y}}-axis.",
          hints: [
            "First find where {{1/sqrt(1 + x^2) = 1/sqrt(2)}}: {{x = 1}}. For the {{x}}-axis, use the washer formula {{pi}}∫{{(R^2 - r^2) dx}}.",
            "For the {{y}}-axis, rearrange to {{x^2 = 1/y^2 - 1}} and integrate from {{y = 1/sqrt(2)}} to {{y = 1}}.",
          ],
          modelAnswer:
            "Intersection occurs where {{1 + x^2 = 2}}, so {{x = 1}} (for {{x >= 0}}). (a) Rotating about the {{x}}-axis uses washers with outer radius {{1/sqrt(1 + x^2)}} and inner radius {{1/sqrt(2)}}: {{V_x = pi}}∫{{_0^1 (1/(1 + x^2) - 1/2) dx = pi [arctan x - x/2]_0^1 = pi(pi/4 - 1/2) = pi^2/4 - pi/2}}. (b) For rotation about the {{y}}-axis, {{y^2 = 1/(1 + x^2)}} implies {{x^2 = y^(-2) - 1}}, with {{y}} from {{1/sqrt(2)}} to {{1}}. Thus {{V_y = pi}}∫{{(y^(-2) - 1) dy = pi [-1/y - y]}} evaluated from {{1/sqrt(2)}} to {{1}}, giving {{pi((-1 - 1) - (-sqrt(2) - 1/sqrt(2))) = pi(3 sqrt(2)/2 - 2)}}.",
          markScheme: [
            { point: "Finds intersection x = 1", keywords: ["x = 1"] },
            { point: "Sets up washer integral π∫(1/(1+x²) − 1/2) dx for x-axis rotation", keywords: ["1/(1 + x^2) - 1/2"] },
            { point: "Evaluates V_x = π²/4 − π/2 accurately", keywords: ["pi^2/4 - pi/2"] },
            { point: "Rearranges to x² = y⁻² − 1 for y-axis rotation", keywords: ["y^(-2) - 1"] },
            { point: "Integrates to −1/y − y with correct y-limits 1/√2 to 1", keywords: ["-1/y - y"] },
            { point: "Simplifies exact volume V_y = π(3√2/2 − 2)", keywords: ["3 sqrt(2)/2 - 2"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Finds intersection and sets up one valid volume integral." },
            { band: "3–4", marks: [3, 4], descriptor: "Evaluates one volume fully and sets up the second axis rotation." },
            { band: "5–6", marks: [5, 6], descriptor: "Exact, fully simplified volumes about both axes using washer and y-axis disk methods." },
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Solve",
          guideRef: "differential-equations-hl",
          marks: 6,
          question:
            "Use the substitution {{y = vx}} to solve the homogeneous differential equation {{dy/dx = (y^2 + 2xy)/x^2}} (for {{x > 0}}), given that {{y(1) = 1}}. Express {{y}} explicitly in terms of {{x}}.",
          hints: [
            "Substitute {{y = vx}} and {{dy/dx = v + x (dv/dx)}} to simplify to {{x (dv/dx) = v^2 + v}}.",
            "Separate variables and use partial fractions {{1/(v(v + 1)) = 1/v - 1/(v + 1)}}.",
          ],
          modelAnswer:
            "With {{y = vx}}, {{dy/dx = v + x (dv/dx)}}. Substituting into the ODE gives {{v + x (dv/dx) = v^2 + 2v}}, so {{x (dv/dx) = v^2 + v = v(v + 1)}}. Separating variables: {{(1/(v(v + 1))) dv = (1/x) dx}}. By partial fractions, {{(1/v - 1/(v + 1)) dv = (1/x) dx}}. Integrating gives {{ln|v/(v + 1)| = ln x + C}}, hence {{v/(v + 1) = A x}}. Replacing {{v = y/x}} gives {{y/(y + x) = A x}}. At {{x = 1, y = 1}}, {{1/2 = A}}, so {{y/(y + x) = x/2}}, yielding {{2y = xy + x^2}} and {{y = x^2/(2 - x)}} (for {{0 < x < 2}}).",
          markScheme: [
            { point: "Applies product rule dy/dx = v + x dv/dx", keywords: ["v + x (dv/dx)"] },
            { point: "Reduces ODE to separable form x dv/dx = v(v + 1)", keywords: ["v(v + 1)"] },
            { point: "Uses partial fractions 1/v − 1/(v + 1)", keywords: ["1/v - 1/(v + 1)"] },
            { point: "Integrates to ln|v/(v + 1)| = ln x + C", keywords: ["v/(v + 1)"] },
            { point: "Substitutes back v = y/x and finds constant A = 1/2", keywords: ["1/2 = a"] },
            { point: "Isolates explicit solution y = x²/(2 − x)", keywords: ["x^2/(2 - x)"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Correctly substitutes y = vx and dy/dx = v + x dv/dx." },
            { band: "3–4", marks: [3, 4], descriptor: "Separates variables and integrates using partial fractions." },
            { band: "5–6", marks: [5, 6], descriptor: "Complete analytical solution reaching explicit particular solution y = x²/(2 − x)." },
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Solve",
          guideRef: "differential-equations-hl",
          marks: 6,
          question:
            "Solve the linear differential equation {{cos x (dy/dx) + y sin x = cos^2 x}} for {{-pi/2 < x < pi/2}}, given that {{y(0) = 2}}.",
          hints: [
            "Divide by {{cos x}} first to get standard form {{dy/dx + (tan x) y = cos x}}.",
            "Integrate {{tan x = sin x / cos x}} to get {{-ln(cos x) = ln(sec x)}}, so {{mu(x) = sec x}}.",
          ],
          modelAnswer:
            "Divide through by {{cos x}} (nonzero on {{(-pi/2, pi/2)}}) to get standard form {{dy/dx + (tan x)y = cos x}}. Here {{P(x) = tan x}}, whose integral is {{-ln(cos x) = ln(sec x)}} since {{cos x > 0}}. The integrating factor is {{mu(x) = sec x}}. Multiplying through collapses the LHS to {{d/dx(y sec x) = cos x * sec x = 1}}. Integrating gives {{y sec x = x + C}}. Applying {{y(0) = 2}} yields {{2(1) = 0 + C}}, so {{C = 2}}. Multiplying by {{cos x}} gives {{y = (x + 2) cos x}}.",
          markScheme: [
            { point: "Divides by cos x to reach standard form dy/dx + (tan x)y = cos x", keywords: ["(tan x)y"] },
            { point: "Integrates tan x to ln(sec x) or −ln(cos x)", keywords: ["ln(sec x)", "-ln(cos x)"] },
            { point: "Identifies integrating factor μ(x) = sec x", keywords: ["mu(x) = sec x"] },
            { point: "Forms exact derivative d/dx(y sec x) = 1", keywords: ["y sec x"] },
            { point: "Integrates to y sec x = x + C and finds C = 2", keywords: ["c = 2"] },
            { point: "Writes explicit final solution y = (x + 2) cos x", keywords: ["(x + 2) cos x"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Rewrites in standard form and attempts integrating factor." },
            { band: "3–4", marks: [3, 4], descriptor: "Finds μ(x) = sec x and integrates RHS = 1." },
            { band: "5–6", marks: [5, 6], descriptor: "Clean complete derivation yielding y = (x + 2) cos x." },
          ],
        },
        {
          id: "5b-integration-des-maclaurin-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Estimate",
          guideRef: "maclaurin-series-hl",
          marks: 7,
          question:
            "The function {{y(x)}} satisfies the differential equation {{dy/dx = x + y^2}} with initial condition {{y(0) = 1}}. (a) Find the Maclaurin polynomial of degree {{4}} for {{y(x)}}. (b) Use your degree-{{4}} polynomial to estimate {{y(0.1)}} to {{4}} decimal places.",
          hints: [
            "Differentiate implicitly step by step: {{y'' = 1 + 2y y'}}, {{y''' = 2(y')^2 + 2y y''}}, and {{y^(4) = 6 y' y'' + 2y y'''}}.",
            "Remember to divide each {{y^(n)(0)}} by {{n!}} ({{2, 6, 24}}) before substituting {{x = 0.1}}.",
          ],
          modelAnswer:
            "(a) We have {{y(0) = 1}} and {{y'(0) = 0 + 1^2 = 1}}. Differentiating implicitly: {{y'' = 1 + 2y y'}}, so {{y''(0) = 1 + 2(1)(1) = 3}}. Differentiating again: {{y''' = 2(y')^2 + 2y y''}}, so {{y'''(0) = 2(1) + 2(1)(3) = 8}}. Differentiating a third time: {{y^(4) = 6y' y'' + 2y y'''}}, giving {{y^(4)(0) = 6(1)(3) + 2(1)(8) = 34}}. Dividing by {{n!}} yields {{P_4(x) = 1 + x + (3/2)x^2 + (4/3)x^3 + (17/12)x^4}}. (b) At {{x = 0.1}}: {{P_4(0.1) = 1 + 0.1 + 0.015 + 0.001333 + 0.000142 = 1.116475}}, which rounds to {{1.1165}} (4 d.p.).",
          markScheme: [
            { point: "Finds y'(0) = 1 from ODE", keywords: ["y'(0) = 0 + 1^2 = 1"] },
            { point: "Differentiates implicitly to y'' = 1 + 2yy' and gets y''(0) = 3", keywords: ["y''(0) = 1 + 2(1)(1) = 3"] },
            { point: "Differentiates to y''' = 2(y')² + 2yy'' and gets y'''(0) = 8", keywords: ["y'''(0) = 2(1) + 2(1)(3) = 8"] },
            { point: "Differentiates to y^(4) = 6y'y'' + 2yy''' and gets y^(4)(0) = 34", keywords: ["= 34"] },
            { point: "Divides by factorials to write 1 + x + (3/2)x² + (4/3)x³ + (17/12)x⁴", keywords: ["17/12"] },
            { point: "Substitutes x = 0.1 into P₄(x)", keywords: ["0.015"] },
            { point: "Rounds accurately to 1.1165 (4 d.p.)", keywords: ["1.1165"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Computes y'(0) and y''(0) with errors in higher implicit derivatives." },
            { band: "3–5", marks: [3, 5], descriptor: "Derives derivatives up to y^(4)(0) = 34 and forms Maclaurin polynomial with minor slips." },
            { band: "6–7", marks: [6, 7], descriptor: "Flawless implicit differentiation, exact degree-4 polynomial, and accurate 4 d.p. estimate 1.1165." },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 Qs — ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "5b-integration-des-maclaurin-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Determine",
      guideRef: "integration-areas-kinematics",
      question:
        "The parabola {{y = kx - x^2}} (where {{k > 0}}) encloses a region of exact area {{36}} square units with the {{x}}-axis. Determine the exact value of {{k}}.",
      answer: { type: "number", value: 6 },
      hints: [
        "Find the {{x}}-intercepts {{x = 0}} and {{x = k}}.",
        "Evaluate the integral from {{0}} to {{k}} in terms of {{k}} to obtain {{k^3/6 = 36}}.",
      ],
      solution: [
        "Roots are {{x = 0}} and {{x = k}}, with {{y >= 0}} between them.",
        "Area {{= [kx^2/2 - x^3/3]_0^k = k^3/2 - k^3/3 = k^3/6}}.",
        "Setting {{k^3/6 = 36}} gives {{k^3 = 216}}, so {{k = 6}}.",
      ],
    },
    {
      id: "5b-integration-des-maclaurin-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "advanced-integration-volumes-hl",
      question:
        "Evaluate the exact definite integral of {{sin^3 x cos^2 x}} from {{x = 0}} to {{x = pi/2}}. Give your answer as a simplified fraction.",
      answer: { type: "fraction", n: 2, d: 15, simplest: true },
      hints: [
        "Split off one {{sin x}} and rewrite {{sin^2 x = 1 - cos^2 x}}.",
        "Use the substitution {{u = cos x}}, {{du = -sin x dx}} with limits {{u = 1}} down to {{u = 0}}.",
      ],
      solution: [
        "Write {{sin^3 x cos^2 x = (1 - cos^2 x) cos^2 x sin x}}.",
        "Let {{u = cos x}}, {{du = -sin x dx}}; limits change from {{[0, pi/2]}} to {{[1, 0]}}.",
        "Swapping limits cancels the minus sign: ∫{{_0^1 (u^2 - u^4) du = [u^3/3 - u^5/5]_0^1 = 1/3 - 1/5 = 2/15}}.",
      ],
    },
    {
      id: "5b-integration-des-maclaurin-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Find",
      guideRef: "maclaurin-series-hl",
      question:
        "Find the exact coefficient of {{x^4}} in the Maclaurin expansion of {{ln(cos x)}} as a simplified fraction.",
      answer: { type: "fraction", n: -1, d: 12, simplest: true },
      traps: [
        { spec: { type: "fraction", n: 1, d: 24 }, feedback: "Don't forget the −u²/2 term from ln(1 + u), which contributes −(1/2)(−x²/2)² = −x⁴/8." },
      ],
      hints: [
        "Write {{cos x = 1 + u}} where {{u = -x^2/2 + x^4/24 - ...}}.",
        "Substitute into {{ln(1 + u) = u - u^2/2 + ...}} and collect both {{x^4}} contributions.",
      ],
      solution: [
        "Let {{u = -x^2/2 + x^4/24 + ...}}.",
        "{{ln(1 + u) = u - u^2/2 + ... = (-x^2/2 + x^4/24) - (1/2)(-x^2/2)^2 + ...}}.",
        "The coefficient of {{x^4}} is {{1/24 - 1/8 = -2/24 = -1/12}}.",
      ],
    },
    {
      id: "5b-integration-des-maclaurin-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Show that",
      guideRef: "advanced-integration-volumes-hl",
      marks: 6,
      question:
        "Use integration by parts to show that the exact definite integral of {{arctan x}} from {{x = 0}} to {{x = 1}} equals {{pi/4 - (1/2) ln 2}}.",
      hints: [
        "Rewrite the integrand as {{1 * arctan x}} and set {{u = arctan x}}, {{dv/dx = 1}}.",
        "For the remaining integral of {{x/(1 + x^2)}}, recognise the {{f'(x)/f(x)}} logarithm pattern.",
      ],
      modelAnswer:
        "Set {{u = arctan x}} and {{dv/dx = 1}}, giving {{du/dx = 1/(1 + x^2)}} and {{v = x}}. Applying IBP from {{0}} to {{1}}: {{[x arctan x]_0^1 -}} integral from {{0}} to {{1}} of {{x/(1 + x^2) dx}}. The boundary term equals {{1 * arctan(1) - 0 = pi/4}}. For the second integral, since {{d/dx(1 + x^2) = 2x}}, its antiderivative is {{(1/2) ln(1 + x^2)}}. Since {{ln(1) = 0}}, evaluating the limits leaves {{(1/2) ln(2) - 0}}, so combining both pieces yields {{pi/4 - (1/2) ln 2}}.",
      markScheme: [
        { point: "Chooses u = arctan x and dv/dx = 1", keywords: ["u = arctan x"] },
        { point: "Computes du/dx = 1/(1 + x²) and v = x", keywords: ["1/(1 + x^2)"] },
        { point: "Applies IBP formula cleanly with limits", keywords: ["x arctan x"] },
        { point: "Evaluates boundary term to π/4", keywords: ["pi/4"] },
        { point: "Integrates x/(1 + x²) to (1/2) ln(1 + x²)", keywords: ["(1/2) ln(1 + x^2)"] },
        { point: "Uses ln(1) = 0 to evaluate second term and reach target result", keywords: ["ln(1) = 0"] },
      ],
      markbands: [
        { band: "0–2", marks: [0, 2], descriptor: "Identifies correct IBP choices u = arctan x, dv/dx = 1." },
        { band: "3–4", marks: [3, 4], descriptor: "Reaches x arctan x − ∫ x/(1+x²) dx and attempts log integral." },
        { band: "5–6", marks: [5, 6], descriptor: "Complete, rigorous 'show that' proof with every intermediate evaluation shown." },
      ],
    },
    {
      id: "5b-integration-des-maclaurin-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "advanced-integration-volumes-hl",
      marks: 7,
      question:
        "Use the trigonometric substitution {{x = 2 sin theta}} to evaluate the exact definite integral of {{x^2 / sqrt(4 - x^2)}} from {{x = 0}} to {{x = 1}}.",
      hints: [
        "Transform {{dx = 2 cos theta d theta}}, {{sqrt(4 - x^2) = 2 cos theta}}, and limits {{x = 0, 1}} to {{theta = 0, pi/6}}.",
        "Simplify the integrand to {{4 sin^2 theta}} and apply the double-angle identity {{2 sin^2 theta = 1 - cos(2 theta)}}.",
      ],
      modelAnswer:
        "Let {{x = 2 sin theta}}, so {{dx = 2 cos theta d theta}} and {{sqrt(4 - x^2) = 2 cos theta}} on {{[0, pi/6]}}. Convert limits: {{x = 0}} gives {{theta = 0}}; {{x = 1}} gives {{sin theta = 1/2}}, so {{theta = pi/6}}. Substituting transforms the integral to ∫{{_0^(pi/6) (4 sin^2 theta / (2 cos theta)) * (2 cos theta d theta) =}} ∫{{_0^(pi/6) 4 sin^2 theta d theta}}. Using {{4 sin^2 theta = 2(1 - cos(2 theta))}}, integrate to {{[2 theta - sin(2 theta)]_0^(pi/6)}}. Substituting limits gives {{(2(pi/6) - sin(pi/3)) - 0 = pi/3 - sqrt(3)/2}}.",
      markScheme: [
        { point: "Differentiates substitution to dx = 2 cos θ dθ", keywords: ["2 cos theta"] },
        { point: "Converts limits to θ = 0 and θ = π/6", keywords: ["theta = pi/6"] },
        { point: "Simplifies √(4 − x²) = 2 cos θ and cancels factor", keywords: ["4 sin^2 theta"] },
        { point: "Applies double-angle identity 2(1 − cos 2θ)", keywords: ["1 - cos(2 theta)"] },
        { point: "Integrates accurately to 2θ − sin(2θ)", keywords: ["2 theta - sin(2 theta)"] },
        { point: "Evaluates sin(π/3) = √3/2", keywords: ["sin(pi/3)"] },
        { point: "States exact final value π/3 − √3/2", keywords: ["pi/3 - sqrt(3)/2"] },
      ],
      markbands: [
        { band: "0–2", marks: [0, 2], descriptor: "Computes dx and transforms integrand or limits partially." },
        { band: "3–5", marks: [3, 5], descriptor: "Reaches ∫ 4 sin²θ dθ with correct limits and applies double-angle identity." },
        { band: "6–7", marks: [6, 7], descriptor: "Exact, well-justified evaluation yielding π/3 − √3/2." },
      ],
    },
    {
      id: "5b-integration-des-maclaurin-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Solve",
      guideRef: "differential-equations-hl",
      marks: 7,
      question:
        "A mixing tank initially holds {{100}} L of pure water. Brine containing {{2}} g L⁻¹ of salt flows in at {{5}} L min⁻¹, and the well-stirred mixture drains out at {{5}} L min⁻¹. Let {{S(t)}} be the mass of salt in grams at time {{t}} minutes. (a) Formulate a first-order linear ODE for {{dS/dt}}. (b) Solve it using an integrating factor to find {{S(t)}}. (c) State the steady-state mass of salt as {{t -> ∞}} and find the exact time when {{S(t) = 100}} g.",
      hints: [
        "Rate of change equals (rate in) − (rate out): incoming salt is {{2 * 5 = 10}} g min⁻¹ and outgoing concentration is {{S/100}} g L⁻¹.",
        "Multiply {{dS/dt + (1/20)S = 10}} by {{mu(t) = e^(t/20)}} and apply {{S(0) = 0}}.",
      ],
      modelAnswer:
        "(a) Salt enters at {{2 * 5 = 10}} g min⁻¹ and leaves at {{(S/100) * 5 = S/20}} g min⁻¹, giving {{dS/dt + (1/20)S = 10}} with {{S(0) = 0}}. (b) Integrating factor is {{mu(t) = e^(t/20)}}. Multiplying through yields {{d/dt(S e^(t/20)) = 10 e^(t/20)}}. Integrating gives {{S e^(t/20) = 200 e^(t/20) + C}}. Using {{S(0) = 0}} gives {{C = -200}}, so {{S(t) = 200(1 - e^(-t/20))}}. (c) As {{t -> ∞}}, {{e^(-t/20) -> 0}}, so the steady-state mass is {{200}} g. Setting {{200(1 - e^(-t/20)) = 100}} gives {{e^(-t/20) = 1/2}}, hence {{t = 20 ln 2}} minutes.",
      markScheme: [
        { point: "Computes salt inflow 10 g/min and outflow S/20 g/min", keywords: ["s/20"] },
        { point: "States linear ODE dS/dt + (1/20)S = 10 with S(0) = 0", keywords: ["(1/20)s = 10"] },
        { point: "Finds integrating factor μ(t) = e^(t/20)", keywords: ["e^(t/20)"] },
        { point: "Integrates to S e^(t/20) = 200 e^(t/20) + C", keywords: ["200 e^(t/20)"] },
        { point: "Uses S(0) = 0 to find C = −200 and S(t) = 200(1 − e^(−t/20))", keywords: ["200(1 - e^(-t/20))"] },
        { point: "Identifies steady-state limit 200 g", keywords: ["200"] },
        { point: "Solves for exact half-saturation time t = 20 ln 2 min", keywords: ["20 ln 2"] },
      ],
      markbands: [
        { band: "0–2", marks: [0, 2], descriptor: "Formulates inflow/outflow ODE or finds integrating factor." },
        { band: "3–5", marks: [3, 5], descriptor: "Solves the linear ODE cleanly with initial condition S(0) = 0." },
        { band: "6–7", marks: [6, 7], descriptor: "Complete modelling, analytical ODE solution, steady-state limit 200 g, and exact time 20 ln 2." },
      ],
    },
    {
      id: "5b-integration-des-maclaurin-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Solve",
      guideRef: "differential-equations-hl",
      marks: 7,
      question:
        "Solve the homogeneous differential equation {{x (dy/dx) = y + sqrt(x^2 + y^2)}} for {{x > 0}}, subject to {{y(1) = 0}}, giving {{y}} explicitly in terms of {{x}}. (You may use the result that the integral of {{1/sqrt(1 + v^2) dv}} is {{ln(v + sqrt(1 + v^2)) + C}}.)",
      hints: [
        "Divide by {{x > 0}} to write {{dy/dx = y/x + sqrt(1 + (y/x)^2)}}, then substitute {{y = vx}}.",
        "After integrating to {{v + sqrt(1 + v^2) = x}}, isolate the square root as {{sqrt(1 + v^2) = x - v}} and square both sides!",
      ],
      modelAnswer:
        "Dividing by {{x > 0}} gives {{dy/dx = y/x + sqrt(1 + (y/x)^2)}}. Substitute {{y = vx}} and {{dy/dx = v + x (dv/dx)}}: {{v + x (dv/dx) = v + sqrt(1 + v^2)}}, so {{x (dv/dx) = sqrt(1 + v^2)}}. Separating variables gives {{dv/sqrt(1 + v^2) = dx/x}}. Integrating both sides yields {{ln(v + sqrt(1 + v^2)) = ln x + C}}, so {{v + sqrt(1 + v^2) = A x}}. At {{x = 1, y = 0}} we have {{v = 0}}, giving {{0 + 1 = A}}, so {{A = 1}}. Rearranging {{sqrt(1 + v^2) = x - v}} and squaring gives {{1 + v^2 = x^2 - 2xv + v^2}}, hence {{2xv = x^2 - 1}} and {{v = (x^2 - 1)/(2x)}}. Multiplying by {{x}} gives the explicit parabola {{y = (x^2 - 1)/2}}.",
      markScheme: [
        { point: "Divides by x > 0 to write RHS in terms of y/x", keywords: ["sqrt(1 + (y/x)^2)"] },
        { point: "Substitutes y = vx and simplifies to x dv/dx = √(1 + v²)", keywords: ["x (dv/dx)"] },
        { point: "Separates variables and applies the given logarithm integral", keywords: ["ln x + c"] },
        { point: "Exponentiates to v + √(1 + v²) = Ax", keywords: ["= a x"] },
        { point: "Uses y(1) = 0 (v = 0) to find A = 1", keywords: ["a = 1"] },
        { point: "Isolates √(1 + v²) = x − v and squares to cancel v²", keywords: ["x^2 - 2xv + v^2"] },
        { point: "Concludes explicit solution y = (x² − 1)/2", keywords: ["(x^2 - 1)/2"] },
      ],
      markbands: [
        { band: "0–2", marks: [0, 2], descriptor: "Recognises homogeneity and applies y = vx substitution." },
        { band: "3–5", marks: [3, 5], descriptor: "Integrates separated equation and determines constant A = 1." },
        { band: "6–7", marks: [6, 7], descriptor: "Full analytical derivation isolating the elegant parabola y = (x² − 1)/2." },
      ],
    },
    {
      id: "5b-integration-des-maclaurin-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "maclaurin-series-hl",
      marks: 8,
      question:
        "A function {{y(x)}} satisfies the second-order differential equation {{y'' - x y' - y = 0}} with {{y(0) = 1}} and {{y'(0) = 0}}. (a) By repeated implicit differentiation, find the Maclaurin polynomial of {{y(x)}} up to and including the term in {{x^6}}. (b) Deduce the exact closed-form function for {{y(x)}} and verify that it satisfies the ODE.",
      hints: [
        "Isolate {{y'' = x y' + y}}, then differentiate repeatedly using the Product Rule to see the pattern {{y^(n+2) = x y^(n+1) + (n + 1) y^(n)}}.",
        "Rewrite {{1 + x^2/2 + x^4/8 + x^6/48}} in powers of {{u = x^2/2}} and compare with {{e^u}}!",
      ],
      modelAnswer:
        "(a) From {{y'' = x y' + y}}, we get {{y''(0) = 0 + 1 = 1}}. Differentiating repeatedly: {{y''' = x y'' + 2y'}}, so {{y'''(0) = 0}}; {{y^(4) = x y''' + 3y''}}, so {{y^(4)(0) = 3}}; {{y^(5) = x y^(4) + 4y'''}}, so {{y^(5)(0) = 0}}; {{y^(6) = x y^(5) + 5y^(4)}}, so {{y^(6)(0) = 15}}. Dividing by {{n!}} gives {{P_6(x) = 1 + x^2/2! + (3/4!)x^4 + (15/6!)x^6 = 1 + x^2/2 + x^4/8 + x^6/48}}. (b) Writing {{u = x^2/2}}, this is {{1 + u + u^2/2! + u^3/3!}}, which is the Maclaurin series of {{y(x) = e^(x^2/2)}}. Verification: {{y' = x e^(x^2/2)}} and {{y'' = e^(x^2/2) + x^2 e^(x^2/2) = y + x y'}}, confirming {{y'' - x y' - y = 0}} with {{y(0) = 1}} and {{y'(0) = 0}}.",
      markScheme: [
        { point: "Finds y''(0) = 1 directly from the ODE", keywords: ["y''(0) = 0 + 1 = 1"] },
        { point: "Differentiates to y''' = x y'' + 2y' and obtains y'''(0) = 0", keywords: ["y'''(0) = 0"] },
        { point: "Finds y^(4)(0) = 3 and y^(5)(0) = 0", keywords: ["y^(4)(0) = 3"] },
        { point: "Finds y^(6)(0) = 15", keywords: ["y^(6)(0) = 15"] },
        { point: "Assembles simplified polynomial 1 + x²/2 + x⁴/8 + x⁶/48", keywords: ["x^6/48"] },
        { point: "Recognises powers of x²/2 matching exponential series", keywords: ["u = x^2/2"] },
        { point: "Deduces closed-form function y(x) = e^(x²/2)", keywords: ["e^(x^2/2)"] },
        { point: "Verifies y'' = y + x y' by direct differentiation", keywords: ["x^2 e^(x^2/2)"] },
      ],
      markbands: [
        { band: "0–3", marks: [0, 3], descriptor: "Computes derivatives up to order 3–4 with partial assembly of the Maclaurin polynomial." },
        { band: "4–6", marks: [4, 6], descriptor: "Derives exact degree-6 Maclaurin polynomial and attempts closed-form identification." },
        { band: "7–8", marks: [7, 8], descriptor: "Complete derivation of 1 + x²/2 + x⁴/8 + x⁶/48, identification of e^(x²/2), and full verification." },
      ],
    },
  ],
};
