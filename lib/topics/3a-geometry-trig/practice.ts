import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "3a-geometry-trig-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "3d-geometry-sine-cosine",
      question: "Find the exact distance between the 3D points A(2, −1, 5) and B(−4, 1, 8).",
      answer: { type: "number", value: 7 },
      traps: [
        {
          spec: { type: "number", value: 49 },
          feedback: "49 is the squared distance d² — take the positive square root to get d.",
        },
      ],
      hints: [
        "Compute the coordinate differences Δx, Δy, and Δz, then square each.",
        "Evaluate {{d = sqrt((-6)^2 + 2^2 + 3^2)}}.",
      ],
      solution: [
        "{{Delta x = -4 - 2 = -6}}, {{Delta y = 1 - (-1) = 2}}, {{Delta z = 8 - 5 = 3}}.",
        "{{d = sqrt((-6)^2 + 2^2 + 3^2) = sqrt(36 + 4 + 9) = sqrt(49) = 7}}.",
      ],
    },
    {
      id: "3a-geometry-trig-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Find",
      guideRef: "3d-geometry-sine-cosine",
      question: "A right square-based pyramid has base side length 9 cm and perpendicular height 8 cm. Find its volume in cm³.",
      answer: { type: "number", value: 216 },
      traps: [
        {
          spec: { type: "number", value: 648 },
          feedback: "Remember the 1/3 factor for a pyramid: V = (1/3) × base area × height.",
        },
      ],
      hints: [
        "Find the area of the square base first: {{A = 9^2}}.",
        "Use {{V = (1/3) A h}}.",
      ],
      solution: [
        "Base area {{A = 9 * 9 = 81}} cm².",
        "Volume {{V = (1/3) * 81 * 8 = 27 * 8 = 216}} cm³.",
      ],
    },
    {
      id: "3a-geometry-trig-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Find",
      guideRef: "radians-unit-circle-exact",
      question: "Convert 150° into exact radians, giving your answer in terms of π (type e.g. 2pi/3).",
      answer: { type: "expression", expr: "5pi/6", display: "{{5pi/6}}" },
      hints: [
        "Multiply 150° by {{pi / 180°}}.",
        "Simplify the fraction {{150/180}} by dividing numerator and denominator by 30.",
      ],
      solution: [
        "{{150° * (pi / 180°) = (150/180) pi = 5pi/6}} radians.",
      ],
    },
    {
      id: "3a-geometry-trig-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "radians-unit-circle-exact",
      question: "A circular sector has radius r = 10 cm and central angle θ = 0.8 radians. Find the area of the sector in cm².",
      answer: { type: "number", value: 40 },
      traps: [
        {
          spec: { type: "number", value: 8 },
          feedback: "8 cm is the arc length rθ — sector area uses A = ½r²θ.",
        },
      ],
      hints: [
        "Since θ is already in radians, apply the sector area formula directly.",
        "Substitute r = 10 and θ = 0.8 into {{A = (1/2) r^2 theta}}.",
      ],
      solution: [
        "{{A = (1/2) r^2 theta = (1/2)(10^2)(0.8) = 50 * 0.8 = 40}} cm².",
      ],
    },
    {
      id: "3a-geometry-trig-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "radians-unit-circle-exact",
      question: "Without a calculator, find the exact value of {{sin(7pi/6)}} as a simplified fraction.",
      answer: { type: "fraction", n: -1, d: 2, simplest: true },
      traps: [
        {
          spec: { type: "fraction", n: 1, d: 2 },
          feedback: "7π/6 lies in Quadrant III, where sine is negative.",
        },
      ],
      hints: [
        "Rewrite {{7pi/6 = pi + pi/6}} to identify its quadrant and reference angle.",
        "In Quadrant III, sine is negative; attach a minus sign to {{sin(pi/6) = 1/2}}.",
      ],
      solution: [
        "{{7pi/6}} lies in Quadrant III with reference angle {{pi/6}}.",
        "Since sine is negative in Q3, {{sin(7pi/6) = -sin(pi/6) = -1/2}}.",
      ],
    },
    {
      id: "3a-geometry-trig-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Find",
      guideRef: "3d-geometry-sine-cosine",
      question: "In triangle ABC, a = 6 cm, b = 10 cm, and ∠C = 120°. Find the exact length of side c in cm.",
      answer: { type: "number", value: 14 },
      traps: [
        {
          spec: { type: "number", value: 196 },
          feedback: "196 is c² — take the positive square root to get c.",
        },
      ],
      hints: [
        "Use the cosine rule {{c^2 = a^2 + b^2 - 2ab cos C}}.",
        "Recall that {{cos 120° = -1/2}}, so subtracting {{2ab cos 120°}} adds 60.",
      ],
      solution: [
        "{{c^2 = 6^2 + 10^2 - 2(6)(10) cos 120° = 36 + 100 - 120(-1/2) = 136 + 60 = 196}}.",
        "Taking the positive square root gives {{c = sqrt(196) = 14}} cm.",
      ],
    },
    {
      id: "3a-geometry-trig-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Find",
      guideRef: "trig-identities-graphs-equations",
      question: "Given that {{cos theta = 3/5}}, find the exact value of {{cos 2theta}} as a simplified fraction.",
      answer: { type: "fraction", n: -7, d: 25, simplest: true },
      hints: [
        "Choose the double-angle cosine identity written purely in terms of cos θ.",
        "Evaluate {{cos 2theta = 2 cos^2 theta - 1}} with {{cos theta = 3/5}}.",
      ],
      solution: [
        "{{cos 2theta = 2 cos^2 theta - 1 = 2(3/5)^2 - 1 = 18/25 - 1 = -7/25}}.",
      ],
    },
    {
      id: "3a-geometry-trig-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Find",
      guideRef: "trig-identities-graphs-equations",
      question: "Find the exact period of {{f(x) = 5 sin(4x - pi/2) + 3}} in terms of π.",
      answer: { type: "expression", expr: "pi/2", display: "{{pi/2}}" },
      hints: [
        "Only the coefficient b multiplying x affects the period of a sine wave.",
        "Apply {{T = 2pi / b}} with {{b = 4}}.",
      ],
      solution: [
        "Here {{b = 4}}, so the period is {{T = 2pi / 4 = pi/2}}.",
      ],
    },
    {
      id: "3a-geometry-trig-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "reciprocal-inverse-compound-hl",
      question: "[HL] Without a calculator, evaluate {{\"cot\"(2pi/3)}} exactly (type sqrt(3) for √3).",
      answer: { type: "expression", expr: "-sqrt(3)/3", display: "{{-sqrt(3)/3}}" },
      hints: [
        "Recall {{\"cot\" theta = cos theta / sin theta = 1 / tan theta}}.",
        "At {{2pi/3}} (Quadrant II), {{cos(2pi/3) = -1/2}} and {{sin(2pi/3) = sqrt(3)/2}}.",
      ],
      solution: [
        "{{\"cot\"(2pi/3) = cos(2pi/3) / sin(2pi/3) = (-1/2) / (sqrt(3)/2) = -1/sqrt(3) = -sqrt(3)/3}}.",
      ],
    },
    {
      id: "3a-geometry-trig-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "reciprocal-inverse-compound-hl",
      question: "[HL] Find the exact value of {{arccos(-1/2)}} in radians, in terms of π.",
      answer: { type: "expression", expr: "2pi/3", display: "{{2pi/3}}" },
      hints: [
        "The output of arccos must lie in its principal range {{[0, pi]}}.",
        "Cosine is negative in Quadrant II with reference angle {{pi/3}}, giving {{pi - pi/3}}.",
      ],
      solution: [
        "Inside {{[0, pi]}}, {{cos(2pi/3) = -1/2}}, so {{arccos(-1/2) = 2pi/3}}.",
      ],
    },
  ],

  papers: [
    {
      id: "3a-geometry-trig-p1",
      title: "Practice Paper 1 — Non-GDC Exact Geometry, Circular Measure & Trig Proofs (SL & HL)",
      level: "SL",
      questions: [
        {
          id: "3a-geometry-trig-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Find",
          guideRef: "3d-geometry-sine-cosine",
          question: "Points A(−2, 3, 4) and B(6, −1, −4) are the endpoints of a diameter of a sphere. Find the exact radius of the sphere.",
          answer: { type: "number", value: 6 },
          traps: [
            {
              spec: { type: "number", value: 12 },
              feedback: "12 is the full diameter AB — divide by 2 to obtain the radius.",
            },
          ],
          hints: [
            "Compute the diameter length AB using the 3D distance formula.",
            "Halve AB to get the radius of the sphere.",
          ],
          solution: [
            "{{AB = sqrt((6 - (-2))^2 + (-1 - 3)^2 + (-4 - 4)^2) = sqrt(8^2 + (-4)^2 + (-8)^2) = sqrt(64 + 16 + 64) = sqrt(144) = 12}}.",
            "Therefore the radius is {{r = 12 / 2 = 6}}.",
          ],
        },
        {
          id: "3a-geometry-trig-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "3d-geometry-sine-cosine",
          question: "In triangle ABC, AB = 12 cm, AC = 7 cm, and ∠BAC = 150°. Find the exact area of triangle ABC in cm².",
          answer: { type: "number", value: 21 },
          hints: [
            "Apply the triangle area formula {{A = (1/2) ab sin C}} with the included angle 150°.",
            "Recall {{sin 150° = sin(180° - 30°) = 1/2}}.",
          ],
          solution: [
            "{{A = (1/2)(12)(7) sin 150° = 42 * (1/2) = 21}} cm².",
          ],
        },
        {
          id: "3a-geometry-trig-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "radians-unit-circle-exact",
          question: "A circle has radius r = 6 cm. Find the exact perimeter (in cm) of a minor sector of central angle {{2pi/3}} radians, leaving your answer in terms of π.",
          answer: { type: "expression", expr: "12 + 4pi", display: "{{12 + 4pi}}" },
          traps: [
            {
              spec: { type: "expression", expr: "4pi" },
              feedback: "4π is only the curved arc length — add the two straight radii (2r = 12) for the perimeter!",
            },
          ],
          hints: [
            "Perimeter of a sector equals two straight radii plus the arc length: {{P = 2r + r theta}}.",
            "Evaluate {{2(6) + 6(2pi/3)}}.",
          ],
          solution: [
            "Arc length {{l = r theta = 6 * (2pi/3) = 4pi}} cm.",
            "Total perimeter {{P = 2(6) + 4pi = 12 + 4pi}} cm.",
          ],
        },
        {
          id: "3a-geometry-trig-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "radians-unit-circle-exact",
          question: "Without a calculator, evaluate {{cos(5pi/4) * sin(4pi/3)}} exactly (type sqrt(...) for square roots).",
          answer: { type: "expression", expr: "sqrt(6)/4", display: "{{sqrt(6)/4}}" },
          traps: [
            {
              spec: { type: "expression", expr: "-sqrt(6)/4" },
              feedback: "Both 5π/4 and 4π/3 lie in Quadrant III, so both ratios are negative and their product is positive.",
            },
          ],
          hints: [
            "Find the quadrant and exact value of {{cos(5pi/4)}} and {{sin(4pi/3)}} separately.",
            "Both angles lie in Quadrant III, so both cosine and sine are negative.",
          ],
          solution: [
            "{{cos(5pi/4) = -sqrt(2)/2}} and {{sin(4pi/3) = -sqrt(3)/2}}.",
            "Multiplying gives {{(-sqrt(2)/2)(-sqrt(3)/2) = sqrt(6)/4}}.",
          ],
        },
        {
          id: "3a-geometry-trig-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "radians-unit-circle-exact",
          question: "A chord AB of length 10 cm is drawn inside a circle of centre O and radius 10 cm. Find the exact area of the minor segment cut off by chord AB (in cm², using pi and sqrt(3)).",
          answer: { type: "expression", expr: "50pi/3 - 25*sqrt(3)", display: "{{50pi/3 - 25 sqrt(3)}}" },
          hints: [
            "Since OA = OB = AB = 10 cm, triangle OAB is equilateral — so what is the central angle θ in radians?",
            "Subtract the triangle area {{(1/2) r^2 sin(pi/3)}} from the sector area {{(1/2) r^2 (pi/3)}}.",
          ],
          solution: [
            "Triangle OAB is equilateral, so {{theta = pi/3}} radians.",
            "Sector area {{= (1/2)(10^2)(pi/3) = 50pi/3}} cm².",
            "Triangle area {{= (1/2)(10^2) sin(pi/3) = 50(sqrt(3)/2) = 25 sqrt(3)}} cm².",
            "Minor segment area {{= 50pi/3 - 25 sqrt(3)}} cm².",
          ],
        },
        {
          id: "3a-geometry-trig-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "trig-identities-graphs-equations",
          question: "Given that {{sin theta = 4/5}} and {{pi/2 < theta < pi}}, find the exact value of {{sin 2theta}} as a simplified fraction.",
          answer: { type: "fraction", n: -24, d: 25, simplest: true },
          traps: [
            {
              spec: { type: "fraction", n: 24, d: 25 },
              feedback: "In Quadrant II, cos θ is negative (−3/5), so sin 2θ = 2 sin θ cos θ must be negative.",
            },
          ],
          hints: [
            "Find cos θ using {{sin^2 theta + cos^2 theta = 1}}, taking care with the Quadrant II sign.",
            "Substitute into {{sin 2theta = 2 sin theta cos theta}}.",
          ],
          solution: [
            "In Quadrant II, {{cos theta = -sqrt(1 - (4/5)^2) = -3/5}}.",
            "{{sin 2theta = 2(4/5)(-3/5) = -24/25}}.",
          ],
        },
        {
          id: "3a-geometry-trig-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "trig-identities-graphs-equations",
          question: "For the sinusoidal function {{y = -3 cos(2x + pi/2) + 7}}, find its maximum value and its minimum value (enter two numbers separated by a comma, maximum first).",
          answer: { type: "list", values: [10, 4], ordered: true, display: "10, 4" },
          hints: [
            "The principal axis is {{y = 7}} and the amplitude is {{|-3| = 3}}.",
            "Add and subtract the amplitude from the midline: {{7 + 3}} and {{7 - 3}}.",
          ],
          solution: [
            "Since {{-1 <= cos(2x + pi/2) <= 1}}, {{-3 <= -3 cos(2x + pi/2) <= 3}}.",
            "Adding 7 gives maximum {{7 + 3 = 10}} and minimum {{7 - 3 = 4}}.",
          ],
        },
        {
          id: "3a-geometry-trig-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "reciprocal-inverse-compound-hl",
          question: "[HL] Without a calculator, use a compound-angle identity to find the exact value of {{cos(7pi/12)}} (use sqrt(...)).",
          answer: { type: "expression", expr: "(sqrt(2) - sqrt(6))/4", display: "{{(sqrt(2) - sqrt(6))/4}}" },
          traps: [
            {
              spec: { type: "expression", expr: "(sqrt(6) - sqrt(2))/4" },
              feedback: "7π/12 (105°) lies in Quadrant II, so cos(7π/12) must be negative!",
            },
          ],
          hints: [
            "Decompose {{7pi/12 = pi/3 + pi/4}}.",
            "Apply {{cos(A + B) = cos A cos B - sin A sin B}} and verify the sign is negative (Quadrant II).",
          ],
          solution: [
            "{{cos(7pi/12) = cos(pi/3 + pi/4) = cos(pi/3) cos(pi/4) - sin(pi/3) sin(pi/4)}}.",
            "{{= (1/2)(sqrt(2)/2) - (sqrt(3)/2)(sqrt(2)/2) = (sqrt(2) - sqrt(6))/4}}.",
          ],
        },
        {
          id: "3a-geometry-trig-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "reciprocal-inverse-compound-hl",
          question: "[HL] Find the exact value of {{cos(arcsin(-8/17))}} as a simplified fraction.",
          answer: { type: "fraction", n: 15, d: 17, simplest: true },
          traps: [
            {
              spec: { type: "fraction", n: -15, d: 17 },
              feedback: "The principal range of arcsin is [−π/2, π/2] (Q4 and Q1), where cosine is always non-negative!",
            },
          ],
          hints: [
            "Let {{alpha = arcsin(-8/17)}}. Because arcsin outputs angles in {{[-pi/2, pi/2]}}, {{alpha}} is in Quadrant IV.",
            "In Q4 cosine is positive; use the 8–15–17 Pythagorean triple.",
          ],
          solution: [
            "Let {{alpha = arcsin(-8/17) ∈ [-pi/2, 0)}} (Q4), where {{cos alpha > 0}}.",
            "{{cos alpha = +sqrt(1 - (-8/17)^2) = sqrt(225/289) = 15/17}}.",
          ],
        },
        {
          id: "3a-geometry-trig-p1-q10",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Find",
          guideRef: "reciprocal-inverse-compound-hl",
          question: "[HL] Given that {{tan A = 4/3}} and {{tan B = 1/7}}, find the exact simplified value of {{tan(A - B)}}.",
          answer: { type: "number", value: 1 },
          hints: [
            "Apply {{tan(A - B) = (tan A - tan B) / (1 + tan A tan B)}}.",
            "Put both numerator and denominator over common denominator 21.",
          ],
          solution: [
            "Numerator: {{4/3 - 1/7 = (28 - 3)/21 = 25/21}}.",
            "Denominator: {{1 + (4/3)(1/7) = 1 + 4/21 = 25/21}}.",
            "Therefore {{tan(A - B) = (25/21) / (25/21) = 1}}.",
          ],
        },
        {
          id: "3a-geometry-trig-p1-q11",
          kind: "written",
          marks: 4,
          difficulty: "core",
          level: "SL",
          commandTerm: "Show that",
          guideRef: "3d-geometry-sine-cosine",
          question:
            "In triangle ABC, AB = 6, AC = 5, and ∠BAC = 60°. (a) Show that BC = √31. (b) Find the exact value of sin(∠ABC) in simplified radical form.",
          hints: [
            "For (a), apply the cosine rule to sides 6 and 5 with included angle 60°.",
            "For (b), apply the sine rule pairing opposite side AC = 5 with ∠ABC and side BC = √31 with 60°.",
          ],
          modelAnswer:
            "(a) By the cosine rule, BC² = 6² + 5² − 2(6)(5) cos 60° = 36 + 25 − 60(1/2) = 61 − 30 = 31. Taking the positive root gives BC = √31.\n" +
            "(b) By the sine rule, sin(∠ABC) / 5 = sin 60° / √31. Substituting sin 60° = √3/2 gives sin(∠ABC) = 5√3 / (2√31) = 5√93 / 62.",
          markScheme: [
            { point: "Sets up cosine rule correctly: BC² = 6² + 5² − 2(6)(5) cos 60° (M1)", keywords: ["cosine rule", "36 + 25", "cos 60"] },
            { point: "Evaluates 61 − 30 = 31 and concludes BC = √31 clearly (A1)", keywords: ["61 - 30", "= 31", "bc^2 = 31"] },
            { point: "Applies sine rule with sin 60° = √3/2 (M1)", keywords: ["sine rule", "sin 60", "√3/2", "sqrt(3)/2"] },
            { point: "States exact value 5√3 / (2√31) or rationalised 5√93 / 62 (A1)", keywords: ["5√3 / (2√31)", "5√93 / 62", "5sqrt(3)/(2sqrt(31))", "5sqrt(93)/62"] },
          ],
        },
        {
          id: "3a-geometry-trig-p1-q12",
          kind: "written",
          marks: 5,
          difficulty: "core",
          level: "SL",
          commandTerm: "Solve",
          guideRef: "trig-identities-graphs-equations",
          question: "Solve the trigonometric equation {{2 cos^2 x + 3 sin x - 3 = 0}} for {{0 <= x <= 2pi}}, giving all exact solutions in radians.",
          hints: [
            "Replace {{cos^2 x}} with {{1 - sin^2 x}} so the equation contains only sin x.",
            "Rearrange into a quadratic {{2 sin^2 x - 3 sin x + 1 = 0}} and factorise.",
            "Find ALL roots in {{[0, 2pi]}} for both branches of sin x.",
          ],
          modelAnswer:
            "Substitute cos²x = 1 − sin²x and let u = sin x: 2(1 − u²) + 3u − 3 = 0, which simplifies to 2u² − 3u + 1 = 0 (i.e. 2 sin²x − 3 sin x + 1 = 0).\n" +
            "Factorising gives (2u − 1)(u − 1) = 0, so sin x = 1/2 or sin x = 1.\n" +
            "For 0 ≤ x ≤ 2π: sin x = 1 gives x = π/2, and sin x = 1/2 gives x = π/6 and x = 5π/6. All three exact solutions are π/6, π/2, and 5π/6.",
          markScheme: [
            { point: "Substitutes cos²x = 1 − sin²x (M1)", keywords: ["1 - sin²x", "1 - sin^2", "1 - u²"] },
            { point: "Obtains quadratic 2 sin²x − 3 sin x + 1 = 0 (A1)", keywords: ["2u² - 3u + 1", "2u^2 - 3u + 1", "+ 1 = 0"] },
            { point: "Factorises to (2 sin x − 1)(sin x − 1) = 0 and finds sin x = 1/2 or 1 (M1)", keywords: ["(2u - 1)(u - 1)", "(2 sin x - 1)(sin x - 1)", "sin x = 1/2"] },
            { point: "Finds x = π/2 from sin x = 1 (A1)", keywords: ["π/2", "pi/2"] },
            { point: "Finds both Q1 and Q2 solutions x = π/6 and x = 5π/6 (A1)", keywords: ["5π/6", "5pi/6"] },
          ],
        },
        {
          id: "3a-geometry-trig-p1-q13",
          kind: "written",
          marks: 5,
          difficulty: "core",
          level: "SL",
          commandTerm: "Solve",
          guideRef: "trig-identities-graphs-equations",
          question: "Solve {{sin(2x - pi/3) = -sqrt(3)/2}} for {{0 <= x <= 2pi}}, listing all exact solutions in radians.",
          hints: [
            "Let {{u = 2x - pi/3}} and transform the domain to {{-pi/3 <= u <= 11pi/3}}.",
            "Remember to check BOTH boundary endpoints {{u = -pi/3}} and {{u = 11pi/3}}!",
            "Add {{pi/3}} and divide by 2 to recover all five exact values of x.",
          ],
          modelAnswer:
            "Let u = 2x − π/3. Since 0 ≤ x ≤ 2π, the adjusted interval is −π/3 ≤ u ≤ 11π/3.\n" +
            "Since sin u = −√3/2 has reference angle π/3 in Quadrants III and IV, all valid values of u in [−π/3, 11π/3] are u = −π/3, 4π/3, 5π/3, 10π/3, 11π/3.\n" +
            "Adding π/3 gives 2x = 0, 5π/3, 2π, 11π/3, 4π.\n" +
            "Dividing by 2 yields the five exact solutions: x = 0, 5π/6, π, 11π/6, 2π.",
          markScheme: [
            { point: "Adjusts domain correctly to −π/3 ≤ u ≤ 11π/3 (M1)", keywords: ["11π/3", "11pi/3"] },
            { point: "Identifies reference angle π/3 in Q3 and Q4 (4π/3 and 5π/3) (M1)", keywords: ["4π/3", "4pi/3", "5π/3", "5pi/3"] },
            { point: "Captures second cycle and boundary endpoints −π/3, 10π/3, 11π/3 (A1)", keywords: ["10π/3", "10pi/3"] },
            { point: "Recovers intermediate values 5π/6 and π correctly (A1)", keywords: ["5π/6", "5pi/6"] },
            { point: "Lists all five exact solutions including 0, 11π/6, and 2π (A1)", keywords: ["11π/6", "11pi/6"] },
          ],
        },
        {
          id: "3a-geometry-trig-p1-q14",
          kind: "written",
          marks: 6,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Prove",
          guideRef: "reciprocal-inverse-compound-hl",
          question:
            "[HL] (a) Prove the identity {{(sin 2theta) / (1 + cos 2theta) = tan theta}} (where {{cos theta != 0}}). (b) Hence deduce the exact value of {{tan(pi/8)}} in simplified surd form.",
          hints: [
            "In (a), substitute {{sin 2theta = 2 sin theta cos theta}} and choose the form of {{cos 2theta}} that cancels the '+1' in the denominator.",
            "In (b), set {{theta = pi/8}} so {{2theta = pi/4}}, then rationalise the denominator.",
          ],
          modelAnswer:
            "(a) Starting from the left-hand side, apply sin 2θ = 2 sin θ cos θ and cos 2θ = 2 cos²θ − 1:\n" +
            "LHS = (2 sin θ cos θ) / (1 + 2 cos²θ − 1) = (2 sin θ cos θ) / (2 cos²θ) = sin θ / cos θ = tan θ = RHS (for cos θ ≠ 0).\n" +
            "(b) Substituting θ = π/8 (so 2θ = π/4) into the identity:\n" +
            "tan(π/8) = sin(π/4) / (1 + cos(π/4)) = (√2/2) / (1 + √2/2) = √2 / (2 + √2).\n" +
            "Multiply numerator and denominator by the conjugate (2 − √2): √2(2 − √2) / (4 − 2) = (2√2 − 2) / 2 = √2 − 1.",
          markScheme: [
            { point: "Substitutes sin 2θ = 2 sin θ cos θ in numerator (M1)", keywords: ["2 sin θ cos θ", "2 sin theta cos theta"] },
            { point: "Chooses cos 2θ = 2 cos²θ − 1 so denominator simplifies to 2 cos²θ (M1)", keywords: ["2 cos²θ - 1", "2 cos^2"] },
            { point: "Cancels 2 cos θ cleanly to reach sin θ / cos θ = tan θ = RHS (A1)", keywords: ["2 cos²θ", "sin θ / cos θ", "sin theta / cos theta"] },
            { point: "Sets θ = π/8 so 2θ = π/4 and substitutes √2/2 (M1)", keywords: ["π/4", "pi/4", "√2/2", "sqrt(2)/2"] },
            { point: "Simplifies complex fraction to √2 / (2 + √2) and rationalises by (2 − √2) (M1)", keywords: ["2 - √2", "2 - sqrt(2)", "conjugate"] },
            { point: "Obtains final simplified exact value √2 − 1 (A1)", keywords: ["√2 - 1", "sqrt(2) - 1"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Attempts double-angle substitution with incomplete cancellation or algebraic errors." },
            { band: "3–4", marks: [3, 4], descriptor: "Completes one-sided proof rigorously and sets up tan(π/8) without full rationalisation." },
            { band: "5–6", marks: [5, 6], descriptor: "Rigorous LHS → RHS proof and clean rationalisation yielding exact value √2 − 1." },
          ],
        },
        {
          id: "3a-geometry-trig-p1-q15",
          kind: "written",
          marks: 6,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Solve",
          guideRef: "reciprocal-inverse-compound-hl",
          question: "[HL] Solve the equation {{sqrt(3) sec^2 x - 2 tan x - 2 sqrt(3) = 0}} for {{0 <= x <= 2pi}}, giving all exact solutions in radians.",
          hints: [
            "Replace {{sec^2 x}} with {{1 + tan^2 x}} to build a quadratic in tan x.",
            "Simplify to {{sqrt(3) tan^2 x - 2 tan x - sqrt(3) = 0}} and factorise as {{(sqrt(3) tan x + 1)(tan x - sqrt(3)) = 0}}.",
            "Remember that tangent has period {{pi}}, so each branch produces TWO roots in {{[0, 2pi]}}.",
          ],
          modelAnswer:
            "Use the reciprocal Pythagorean identity sec²x = 1 + tan²x and let t = tan x:\n" +
            "√3(1 + t²) − 2t − 2√3 = 0, which simplifies to √3 t² − 2t − √3 = 0.\n" +
            "Factorising gives (√3 t + 1)(t − √3) = 0, so tan x = −1/√3 or tan x = √3.\n" +
            "On [0, 2π]: tan x = √3 (Q1 & Q3, reference π/3) yields x = π/3 and x = 4π/3.\n" +
            "tan x = −1/√3 (Q2 & Q4, reference π/6) yields x = 5π/6 and x = 11π/6.\n" +
            "Hence the four exact solutions are π/3, 5π/6, 4π/3, and 11π/6.",
          markScheme: [
            { point: "Substitutes sec²x = 1 + tan²x (M1)", keywords: ["1 + tan²x", "1 + tan^2", "1 + t²"] },
            { point: "Simplifies to √3 tan²x − 2 tan x − √3 = 0 (A1)", keywords: ["√3 t² - 2t - √3", "sqrt(3) t^2", "√3 tan²x"] },
            { point: "Factorises or uses quadratic formula to find tan x = √3 and tan x = −1/√3 (M1)", keywords: ["(√3 t + 1)(t - √3)", "tan x = √3", "-1/√3", "-1/sqrt(3)"] },
            { point: "Solves tan x = √3 to get x = π/3 and 4π/3 (A1)", keywords: ["4π/3", "4pi/3"] },
            { point: "Solves tan x = −1/√3 to get x = 5π/6 (A1)", keywords: ["5π/6", "5pi/6"] },
            { point: "Captures Q4 root x = 11π/6 for all four exact solutions (A1)", keywords: ["11π/6", "11pi/6"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Applies sec²x = 1 + tan²x but makes algebraic errors forming or solving the quadratic." },
            { band: "3–4", marks: [3, 4], descriptor: "Obtains tan x = √3 and −1/√3 and finds primary solutions while missing Q3/Q4 roots." },
            { band: "5–6", marks: [5, 6], descriptor: "Clean exact factorisation and complete set of four radian roots in [0, 2π]." },
          ],
        },
      ],
    },
    {
      id: "3a-geometry-trig-p2",
      title: "Practice Paper 2 — GDC Applications, 3D Solids, Wave Modelling & [HL] Extensions",
      level: "SL",
      questions: [
        {
          id: "3a-geometry-trig-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "3d-geometry-sine-cosine",
          question: "A closed rectangular cuboid measures 12 cm by 9 cm by 8 cm. Find the exact length of its internal space diagonal in cm.",
          answer: { type: "number", value: 17 },
          hints: [
            "Apply 3D Pythagoras: {{d = sqrt(l^2 + w^2 + h^2)}}.",
            "Compute {{144 + 81 + 64 = 289}} and take the square root.",
          ],
          solution: [
            "{{d = sqrt(12^2 + 9^2 + 8^2) = sqrt(144 + 81 + 64) = sqrt(289) = 17}} cm.",
          ],
        },
        {
          id: "3a-geometry-trig-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "3d-geometry-sine-cosine",
          question: "In triangle ABC, a = 9.4 cm, b = 11.2 cm, and ∠C = 47°. Calculate the length of side c in cm, correct to 3 significant figures.",
          answer: { type: "number", value: 8.38, tolerance: 0.02, display: "8.38 cm" },
          hints: [
            "Check your GDC is in DEGREE mode, then apply the cosine rule {{c^2 = a^2 + b^2 - 2ab cos C}}.",
            "Remember to take the square root of {{c^2 ≈ 70.20}}.",
          ],
          solution: [
            "{{c^2 = 9.4^2 + 11.2^2 - 2(9.4)(11.2) cos 47° = 88.36 + 125.44 - 210.56(0.6820) ≈ 70.1984}}.",
            "{{c = sqrt(70.1984) ≈ 8.3785 -> 8.38}} cm (3 s.f.).",
          ],
        },
        {
          id: "3a-geometry-trig-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "3d-geometry-sine-cosine",
          question: "A solid right cylinder of radius 4 cm and height 9 cm is melted down and recast without loss into a single solid sphere of radius R. Find R in cm, correct to 3 significant figures.",
          answer: { type: "number", value: 4.76, tolerance: 0.02, display: "4.76 cm" },
          hints: [
            "Equate the cylinder volume {{pi r^2 h}} to the sphere volume {{(4/3) pi R^3}}.",
            "Cancel π to get {{R^3 = 108}}, then take the cube root.",
          ],
          solution: [
            "{{V_cyl = pi(4^2)(9) = 144pi}} cm³.",
            "Setting {{(4/3) pi R^3 = 144pi}} gives {{R^3 = 108}}, so {{R = cbrt(108) ≈ 4.7622 -> 4.76}} cm (3 s.f.).",
          ],
        },
        {
          id: "3a-geometry-trig-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "3d-geometry-sine-cosine",
          question: "In triangle XYZ, ∠X = 38°, y = 15 cm, and x = 11 cm. Find the obtuse possible value of ∠Y in degrees, correct to 1 decimal place.",
          answer: { type: "number", value: 122.9, tolerance: 0.1, display: "122.9°" },
          traps: [
            {
              spec: { type: "number", value: 57.1, tolerance: 0.1 },
              feedback: "57.1° is the acute angle — subtract from 180° for the obtuse ambiguous-case solution!",
            },
          ],
          hints: [
            "Use the sine rule: {{sin Y = (15 sin 38°) / 11}}.",
            "Find the acute principal angle with arcsin, then subtract from 180° for the obtuse angle.",
          ],
          solution: [
            "Check altitude {{h = 15 sin 38° ≈ 9.23 < 11 < 15}}, so two triangles exist.",
            "{{sin Y = (15 sin 38°) / 11 ≈ 0.83954 => Y_1 ≈ 57.09°}}.",
            "Obtuse angle {{Y_2 = 180° - 57.09° = 122.91° -> 122.9°}}.",
          ],
        },
        {
          id: "3a-geometry-trig-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "radians-unit-circle-exact",
          question: "A circular sector has area 45 cm² and central angle θ = 1.6 radians. Find the exact radius r of the circle in cm.",
          answer: { type: "number", value: 7.5, display: "7.5 cm" },
          hints: [
            "Substitute A = 45 and θ = 1.6 into {{A = (1/2) r^2 theta}}.",
            "Solve {{0.8 r^2 = 45}} for {{r > 0}}.",
          ],
          solution: [
            "{{45 = (1/2) r^2 (1.6) = 0.8 r^2 => r^2 = 56.25}}.",
            "{{r = sqrt(56.25) = 7.5}} cm.",
          ],
        },
        {
          id: "3a-geometry-trig-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "trig-identities-graphs-equations",
          question: "The depth of water D (in metres) at a pier t hours after midnight is modelled by {{D(t) = 2.4 cos((pi/6) t) + 5.1}}. Find the first time {{t > 0}} (in hours, correct to 2 decimal places) when the depth equals 4.0 m.",
          answer: { type: "number", value: 3.91, tolerance: 0.02 },
          hints: [
            "Set {{2.4 cos((pi/6) t) + 5.1 = 4.0}} and isolate {{cos((pi/6) t) = -11/24}}.",
            "Make sure your GDC is in RADIAN mode when computing {{arccos(-11/24)}}, then multiply by {{6/pi}}.",
          ],
          solution: [
            "{{cos((pi/6) t) = (4.0 - 5.1) / 2.4 = -11/24 ≈ -0.45833}}.",
            "{{(pi/6) t = arccos(-11/24) ≈ 2.04692}} radians.",
            "{{t = (6/pi) * 2.04692 ≈ 3.9093 -> 3.91}} hours.",
          ],
        },
        {
          id: "3a-geometry-trig-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "reciprocal-inverse-compound-hl",
          question: "[HL] Solve {{sec x = -2.5}} for {{0 <= x <= pi}}, giving your answer in radians correct to 3 significant figures.",
          answer: { type: "number", value: 1.98, tolerance: 0.01 },
          hints: [
            "Take the reciprocal of both sides: {{cos x = -1 / 2.5 = -0.4}}.",
            "Use your GDC in RADIAN mode to evaluate {{arccos(-0.4)}}.",
          ],
          solution: [
            "{{sec x = -2.5 => cos x = -1/2.5 = -0.4}}.",
            "Since {{0 <= x <= pi}}, {{x = arccos(-0.4) ≈ 1.9823 -> 1.98}} radians (3 s.f.).",
          ],
        },
        {
          id: "3a-geometry-trig-p2-q08",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Find",
          guideRef: "reciprocal-inverse-compound-hl",
          question: "[HL] Angles α and β are both acute with {{sin alpha = 5/13}} and {{cos beta = 4/5}}. Find the exact value of {{sin(alpha + beta)}} as a simplified fraction.",
          answer: { type: "fraction", n: 56, d: 65, simplest: true },
          hints: [
            "Since both α and β are acute, find {{cos alpha = 12/13}} and {{sin beta = 3/5}} using Pythagorean triples.",
            "Substitute into {{sin(alpha + beta) = sin alpha cos beta + cos alpha sin beta}}.",
          ],
          solution: [
            "{{cos alpha = sqrt(1 - 25/169) = 12/13}} and {{sin beta = sqrt(1 - 16/25) = 3/5}}.",
            "{{sin(alpha + beta) = (5/13)(4/5) + (12/13)(3/5) = 20/65 + 36/65 = 56/65}}.",
          ],
        },
        {
          id: "3a-geometry-trig-p2-q09",
          kind: "written",
          marks: 5,
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "3d-geometry-sine-cosine",
          question:
            "A right square-based pyramid VABCD has base edge AB = 10 cm and slant edge VA = 13 cm, with apex V directly above base centre O. (a) Find the exact vertical height VO. (b) Find the angle between VA and base ABCD (to 3 s.f.). (c) Find the angle between triangular face VAB and base ABCD (to 3 s.f.).",
          hints: [
            "Find half the base diagonal {{AO = 5 sqrt(2)}} cm first, then apply Pythagoras in △VOA.",
            "For (b), use right triangle VOA; for (c), let M be the midpoint of AB so {{OM = 5}} cm and use right triangle VOM.",
          ],
          modelAnswer:
            "(a) The square base has diagonal AC = 10√2 cm, so half-diagonal AO = 5√2 cm. In right triangle VOA, VO = √(13² − (5√2)²) = √(169 − 50) = √119 cm (≈ 10.9 cm).\n" +
            "(b) The angle between VA and the base is ∠VAO: sin(∠VAO) = √119 / 13, giving ∠VAO = arcsin(√119 / 13) ≈ 57.05° → 57.0° (3 s.f.).\n" +
            "(c) Let M be the midpoint of AB, so OM = 5 cm and OM ⊥ AB. The angle between face VAB and the base is ∠VMO: tan(∠VMO) = √119 / 5, giving ∠VMO = arctan(√119 / 5) ≈ 65.38° → 65.4° (3 s.f.).",
          markScheme: [
            { point: "Finds half-diagonal AO = 5√2 cm (M1)", keywords: ["5√2", "5sqrt(2)", "10√2"] },
            { point: "Applies Pythagoras to obtain exact vertical height VO = √119 cm (A1)", keywords: ["√119", "sqrt(119)", "169 - 50"] },
            { point: "Sets up right triangle VOA and calculates ∠VAO = 57.0° (A1)", keywords: ["57.0", "57.05"] },
            { point: "Identifies midpoint M of AB with OM = 5 cm and uses tan(∠VMO) = √119 / 5 (M1)", keywords: ["om = 5", "√119 / 5", "sqrt(119)/5"] },
            { point: "Calculates face-to-base angle ∠VMO = 65.4° (3 s.f.) (A1)", keywords: ["65.4", "65.38"] },
          ],
        },
        {
          id: "3a-geometry-trig-p2-q10",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "3d-geometry-sine-cosine",
          question:
            "A ship leaves port A and sails 18 km on a true bearing of 065° to buoy B, then turns and sails 25 km on a true bearing of 140° to lighthouse C. (a) Show that ∠ABC = 105°. (b) Calculate distance AC to 3 s.f. (c) Determine the true bearing of C from A to the nearest degree.",
          hints: [
            "For (a), compute the back-bearing from B to A by adding 180° to 065°, then subtract 140°.",
            "For (b), apply the cosine rule to sides 18 km and 25 km with included angle 105°.",
            "For (c), find acute angle ∠BAC via the sine rule and add it to the initial bearing 065°.",
          ],
          modelAnswer:
            "(a) The back-bearing from B to A is 065° + 180° = 245°. Since the ray from B to C is on bearing 140°, interior angle ∠ABC = 245° − 140° = 105°.\n" +
            "(b) By the cosine rule: AC² = 18² + 25² − 2(18)(25) cos 105° = 324 + 625 − 900(−0.25882) = 1181.94, so AC = √1181.94 ≈ 34.38 → 34.4 km (3 s.f.).\n" +
            "(c) By the sine rule: sin(∠BAC) / 25 = sin 105° / 34.379, so sin(∠BAC) ≈ 0.70240 and ∠BAC ≈ 44.62° (acute since ∠ABC is obtuse). The bearing of C from A is 065° + 44.62° = 109.62° → 110°.",
          markScheme: [
            { point: "Finds back-bearing from B to A as 245° and shows 245° − 140° = 105° (A1)", keywords: ["245", "245° - 140°"] },
            { point: "Sets up cosine rule correctly with 18, 25, and cos 105° (M1)", keywords: ["cosine rule", "324 + 625", "cos 105"] },
            { point: "Evaluates AC = 34.4 km (3 s.f.) using unrounded intermediate value 1181.94 (A1)", keywords: ["34.4", "34.38", "1181.9"] },
            { point: "Applies sine rule to find sin(∠BAC) ≈ 0.7024 (M1)", keywords: ["sine rule", "0.702", "sin 105"] },
            { point: "Finds ∠BAC ≈ 44.6° (A1)", keywords: ["44.6", "44.62"] },
            { point: "Adds 065° + 44.62° to obtain true bearing 110° (A1)", keywords: ["110", "109.6"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Finds interior angle 105° or attempts cosine rule with sign/mode errors." },
            { band: "3–4", marks: [3, 4], descriptor: "Correctly finds AC = 34.4 km and sets up sine rule for ∠BAC." },
            { band: "5–6", marks: [5, 6], descriptor: "Full accurate solution retaining unrounded values to reach bearing 110°." },
          ],
        },
        {
          id: "3a-geometry-trig-p2-q11",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "radians-unit-circle-exact",
          question:
            "Two circles of equal radius 8 cm have centres O₁ and O₂ separated by 8 cm so that each circle passes through the other's centre. The circles intersect at A and B. (a) Justify why ∠AO₁B = 2π/3 radians. (b) Find the area of the overlapping region shared by both circles, giving both the exact value and the value to 3 s.f.",
          hints: [
            "Look at triangle O₁O₂A: all three of its sides are radii of length 8 cm!",
            "The lens-shaped overlap consists of TWO congruent minor segments of radius 8 cm and central angle 2π/3.",
          ],
          modelAnswer:
            "(a) Because both circles have radius 8 cm and O₁O₂ = 8 cm, we have O₁O₂ = O₁A = O₂A = 8 cm, making △O₁O₂A equilateral with ∠O₂O₁A = π/3. By symmetry ∠O₂O₁B = π/3, so ∠AO₁B = 2π/3 radians.\n" +
            "(b) Chord AB splits the overlap into two identical minor segments of radius 8 and central angle 2π/3.\n" +
            "One segment area = ½(8²)(2π/3 − sin(2π/3)) = 32(2π/3 − √3/2) = 64π/3 − 16√3 cm².\n" +
            "Doubling gives the exact overlap area: 128π/3 − 32√3 cm² ≈ 78.6 cm² (3 s.f.).",
          markScheme: [
            { point: "Identifies △O₁O₂A as equilateral (three sides of 8 cm) so ∠O₂O₁A = π/3 (R1)", keywords: ["equilateral", "π/3", "pi/3"] },
            { point: "Doubles by symmetry to justify ∠AO₁B = 2π/3 (A1)", keywords: ["symmetry", "identical", "congruent"] },
            { point: "Recognises overlap equals two congruent minor segments (M1)", keywords: ["two", "minor segment"] },
            { point: "Computes one segment area as 32(2π/3 − √3/2) = 64π/3 − 16√3 (M1)", keywords: ["64π/3", "64pi/3", "16√3", "16sqrt(3)"] },
            { point: "States exact total overlap area 128π/3 − 32√3 cm² (A1)", keywords: ["128π/3", "128pi/3", "32√3", "32sqrt(3)"] },
            { point: "Evaluates decimal answer 78.6 cm² (3 s.f.) (A1)", keywords: ["78.6", "78.62"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Recognises equilateral geometry or sets up sector area without subtracting triangle." },
            { band: "3–4", marks: [3, 4], descriptor: "Computes one minor segment accurately but forgets to double or loses exact form." },
            { band: "5–6", marks: [5, 6], descriptor: "Clear geometric justification and exact plus 3 s.f. overlap area 78.6 cm²." },
          ],
        },
        {
          id: "3a-geometry-trig-p2-q12",
          kind: "written",
          marks: 6,
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "trig-identities-graphs-equations",
          question:
            "A Ferris wheel of diameter 120 m has its lowest point 10 m above level ground and completes one revolution every 24 minutes. A rider boards at the lowest point at t = 0, and height h(t) metres is modelled by {{h(t) = a cos(bt) + d}} with {{b > 0}}. (a) Determine the exact values of a, b, and d. (b) Find the exact duration in minutes during one revolution for which the rider is at least 100 m above the ground.",
          hints: [
            "Minimum height is 10 m and maximum height is 10 + 120 = 130 m.",
            "Since the rider starts at the minimum (t = 0), choose negative a = −60.",
            "Solve {{-60 cos((pi/12)t) + 70 = 100}} for both crossing times in {{[0, 24]}}.",
          ],
          modelAnswer:
            "(a) Minimum height is 10 m and maximum height is 10 + 120 = 130 m. Midline d = (130 + 10)/2 = 70, and amplitude is (130 − 10)/2 = 60. Since h(0) = 10 is a minimum, a = −60. Period T = 24 gives b = 2π/24 = π/12. Thus h(t) = −60 cos((π/12)t) + 70.\n" +
            "(b) Set −60 cos((π/12)t) + 70 = 100 ⇒ cos((π/12)t) = −30/60 = −1/2.\n" +
            "For 0 ≤ (π/12)t ≤ 2π, the crossing angles are (π/12)t = 2π/3 and 4π/3, giving t₁ = 8 min and t₂ = 16 min.\n" +
            "Between t = 8 and t = 16 (passing the peak at t = 12), the rider is ≥ 100 m high for 16 − 8 = 8 minutes.",
          markScheme: [
            { point: "Finds principal axis d = 70 from max 130 m and min 10 m (A1)", keywords: ["d = 70", "130"] },
            { point: "Determines a = −60 (with negative sign for minimum at t = 0) (A1)", keywords: ["a = -60", "-60 cos"] },
            { point: "Calculates exact frequency parameter b = 2π/24 = π/12 (A1)", keywords: ["π/12", "pi/12"] },
            { point: "Sets h(t) = 100 and isolates cos((π/12)t) = −1/2 (M1)", keywords: ["-1/2", "-30/60"] },
            { point: "Finds both exact crossing times t = 8 min and t = 16 min (A1)", keywords: ["t₁ = 8", "t1 = 8", "16 min", "t = 8"] },
            { point: "Subtracts 16 − 8 to conclude duration is 8 minutes (A1)", keywords: ["16 - 8 = 8", "8 minutes"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Identifies amplitude or midline with sign/period error in cosine model." },
            { band: "3–4", marks: [3, 4], descriptor: "Correctly finds a, b, d and sets up h(t) = 100." },
            { band: "5–6", marks: [5, 6], descriptor: "Exact model parameters and exact crossing times giving duration 8 minutes." },
          ],
        },
        {
          id: "3a-geometry-trig-p2-q13",
          kind: "written",
          marks: 6,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Prove",
          guideRef: "reciprocal-inverse-compound-hl",
          question:
            "[HL] (a) Prove that {{sin 3theta = 3 sin theta - 4 sin^3 theta}}. (b) Hence solve {{4 sin^3 theta - 3 sin theta + 1/2 = 0}} for {{0 <= theta <= pi}}, giving all exact solutions in radians.",
          hints: [
            "Write {{sin 3theta = sin(2theta + theta)}} and expand with the compound sine formula.",
            "Replace {{sin 2theta = 2 sin theta cos theta}}, {{cos 2theta = 1 - 2 sin^2 theta}}, and {{cos^2 theta = 1 - sin^2 theta}}.",
            "In (b), rearrange to {{sin 3theta = 1/2}} and solve on {{0 <= 3theta <= 3pi}}.",
          ],
          modelAnswer:
            "(a) LHS = sin(2θ + θ) = sin 2θ cos θ + cos 2θ sin θ\n" +
            "= (2 sin θ cos θ) cos θ + (1 − 2 sin²θ) sin θ = 2 sin θ cos²θ + sin θ − 2 sin³θ\n" +
            "= 2 sin θ (1 − sin²θ) + sin θ − 2 sin³θ = 2 sin θ − 2 sin³θ + sin θ − 2 sin³θ = 3 sin θ − 4 sin³θ = RHS.\n" +
            "(b) Rearranging 4 sin³θ − 3 sin θ + 1/2 = 0 gives 3 sin θ − 4 sin³θ = 1/2, hence sin 3θ = 1/2.\n" +
            "For 0 ≤ θ ≤ π, we have 0 ≤ 3θ ≤ 3π, giving 3θ = π/6, 5π/6, 13π/6, 17π/6.\n" +
            "Dividing by 3 yields the four exact roots: θ = π/18, 5π/18, 13π/18, 17π/18.",
          markScheme: [
            { point: "Expands sin(2θ + θ) = sin 2θ cos θ + cos 2θ sin θ (M1)", keywords: ["sin(2θ + θ)", "sin 2θ cos θ", "sin(2theta + theta)"] },
            { point: "Substitutes double-angle formulas for sin 2θ and cos 2θ (M1)", keywords: ["1 - 2 sin²θ", "1 - 2 sin^2", "2 sin θ cos²θ"] },
            { point: "Replaces cos²θ = 1 − sin²θ to complete proof of 3 sin θ − 4 sin³θ (A1)", keywords: ["1 - sin²θ", "1 - sin^2", "2 sin θ - 2 sin³θ"] },
            { point: "Recognises equation rearranges to sin 3θ = 1/2 (M1)", keywords: ["sin 3θ = 1/2", "sin 3theta = 1/2"] },
            { point: "Lists all four angles for 3θ in [0, 3π]: π/6, 5π/6, 13π/6, 17π/6 (A1)", keywords: ["13π/6", "17π/6", "13pi/6", "17pi/6"] },
            { point: "Divides by 3 to obtain θ = π/18, 5π/18, 13π/18, 17π/18 (A1)", keywords: ["π/18", "17π/18", "17pi/18"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Begins compound-angle expansion but stalls before eliminating cos θ." },
            { band: "3–4", marks: [3, 4], descriptor: "Completes proof cleanly and rewrites equation as sin 3θ = 1/2 with partial roots." },
            { band: "5–6", marks: [5, 6], descriptor: "Full proof and complete list of all four exact solutions over [0, π]." },
          ],
        },
        {
          id: "3a-geometry-trig-p2-q14",
          kind: "written",
          marks: 6,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Solve",
          guideRef: "reciprocal-inverse-compound-hl",
          question:
            "[HL] (a) State the exact domain and range of {{f(x) = 2 arccos(x - 1)}}. (b) Solve {{arctan(x) + arctan(2x) = pi/4}} for {{x > 0}}, giving the exact value of x.",
          hints: [
            "For (a), require {{-1 <= x - 1 <= 1}} and scale the principal range {{[0, pi]}} of arccos by 2.",
            "For (b), take tan of both sides and apply the compound-angle formula for {{tan(A + B)}}.",
            "Solve the resulting quadratic and reject the negative root since {{x > 0}}.",
          ],
          modelAnswer:
            "(a) arccos(x − 1) requires −1 ≤ x − 1 ≤ 1, so the domain is 0 ≤ x ≤ 2, i.e., [0, 2]. Since arccos has principal range [0, π], multiplying by 2 gives range [0, 2π].\n" +
            "(b) Taking tan of both sides: tan(arctan x + arctan 2x) = tan(π/4) = 1.\n" +
            "By the compound tangent identity: (x + 2x) / (1 − 2x²) = 1 ⇒ 3x = 1 − 2x² ⇒ 2x² + 3x − 1 = 0.\n" +
            "Using the quadratic formula: x = (−3 ± √(9 + 8)) / 4 = (−3 ± √17) / 4.\n" +
            "Since x > 0, reject (−3 − √17)/4 and keep x = (√17 − 3) / 4 (which satisfies 2x² < 1, confirming both angles sum to π/4).",
          markScheme: [
            { point: "Finds domain [0, 2] from −1 ≤ x − 1 ≤ 1 (A1)", keywords: ["[0, 2]", "0 <= x <= 2", "0 ≤ x ≤ 2"] },
            { point: "States range [0, 2π] from 2 × [0, π] (A1)", keywords: ["[0, 2π]", "[0, 2pi]", "0 ≤ y ≤ 2π"] },
            { point: "Applies tan(A + B) to obtain (x + 2x)/(1 − 2x²) = 1 (M1)", keywords: ["1 - 2x²", "1 - 2x^2", "x + 2x"] },
            { point: "Rearranges to quadratic 2x² + 3x − 1 = 0 (A1)", keywords: ["2x² + 3x - 1", "2x^2 + 3x - 1"] },
            { point: "Applies quadratic formula giving (−3 ± √17)/4 (M1)", keywords: ["√17", "sqrt(17)"] },
            { point: "Rejects negative root and states exact solution (√17 − 3)/4 (A1)", keywords: ["(√17 - 3) / 4", "(√17 - 3)/4", "(sqrt(17) - 3)/4", "reject"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Determines domain/range of f or sets up tan of both sides without forming the quadratic." },
            { band: "3–4", marks: [3, 4], descriptor: "Forms 2x² + 3x − 1 = 0 and attempts quadratic formula with minor sign/filtering slip." },
            { band: "5–6", marks: [5, 6], descriptor: "Accurate domain/range plus exact verified positive root (√17 − 3)/4." },
          ],
        },
        {
          id: "3a-geometry-trig-p2-q15",
          kind: "written",
          marks: 7,
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "reciprocal-inverse-compound-hl",
          question:
            "[HL] Consider {{f(x) = 3 cos x + 4 sin x}}. (a) Express f(x) in the form {{R cos(x - alpha)}} where {{R > 0}} and {{0 < alpha < pi/2}}, giving R exactly and α to 4 s.f. (b) State the maximum value of f(x) and the smallest positive x (to 3 s.f.) where it occurs. (c) Solve {{3 cos x + 4 sin x = 2.5}} for {{0 <= x <= 2pi}}, giving answers to 3 s.f.",
          hints: [
            "Expand {{R cos(x - alpha) = R cos alpha cos x + R sin alpha sin x}} and equate coefficients of cos x and sin x.",
            "Find {{R = sqrt(3^2 + 4^2)}} and {{alpha = arctan(4/3)}} in radians.",
            "In (c), solve {{cos(x - alpha) = 1/2}}, remembering to add {{2pi}} to any negative root so it lands in {{[0, 2pi]}}.",
          ],
          modelAnswer:
            "(a) Expanding R cos(x − α) = R cos α cos x + R sin α sin x gives R cos α = 3 and R sin α = 4.\n" +
            "Hence R = √(3² + 4²) = 5 and tan α = 4/3 ⇒ α = arctan(4/3) ≈ 0.9273 rad (4 s.f.). Thus f(x) = 5 cos(x − 0.9273).\n" +
            "(b) The maximum value is 5, achieved when cos(x − α) = 1, so the smallest positive value is x = 0.927 rad (3 s.f.).\n" +
            "(c) Setting 5 cos(x − 0.9273) = 2.5 gives cos(x − 0.9273) = 1/2, so x − 0.927295 = ±π/3 + 2kπ.\n" +
            "Branch 1: x₁ = 0.927295 + 1.047198 = 1.9745 → 1.97 rad.\n" +
            "Branch 2: 0.927295 − 1.047198 = −0.1199 rad (outside [0, 2π]); adding 2π gives x₂ = 6.1633 → 6.16 rad (3 s.f.).",
          markScheme: [
            { point: "Equates coefficients R cos α = 3 and R sin α = 4 (M1)", keywords: ["r cos α = 3", "r sin α = 4", "r cos alpha = 3"] },
            { point: "Finds exact R = 5 (A1)", keywords: ["r = 5", "√(3² + 4²)"] },
            { point: "Calculates α = arctan(4/3) ≈ 0.9273 rad (A1)", keywords: ["0.9273", "arctan(4/3)"] },
            { point: "States maximum value 5 at x = 0.927 rad (A1)", keywords: ["0.927", "maximum value is 5"] },
            { point: "Reduces equation to cos(x − α) = 1/2 so x − α = ±π/3 (M1)", keywords: ["1/2", "π/3", "1.047"] },
            { point: "Finds first root x = 1.97 rad (A1)", keywords: ["1.97", "1.974"] },
            { point: "Adds 2π to −0.1199 to obtain second root x = 6.16 rad (A1)", keywords: ["6.16", "6.163"] },
          ],
          markbands: [
            { band: "0–2", marks: [0, 2], descriptor: "Finds R = 5 or α with limited progress into solving the equation." },
            { band: "3–5", marks: [3, 5], descriptor: "Correct harmonic form and maximum, plus one root of f(x) = 2.5." },
            { band: "6–7", marks: [6, 7], descriptor: "Complete accurate derivation, maximum, and both radian solutions 1.97 and 6.16." },
          ],
        },
      ],
    },
  ],

  challenge: [
    {
      id: "3a-geometry-trig-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Find",
      guideRef: "3d-geometry-sine-cosine",
      question:
        "In triangle ABC, ∠A = 45°, {{b = 6 sqrt(2)}} cm, and {{a = 2 sqrt(10)}} cm. Two distinct triangles satisfy these conditions. Find the exact sum of the two possible lengths of side c (in cm).",
      answer: { type: "number", value: 12 },
      hints: [
        "Write the cosine rule {{a^2 = b^2 + c^2 - 2bc cos A}} as a quadratic equation in c.",
        "Simplify {{40 = 72 + c^2 - 12c}} into {{c^2 - 12c + 32 = 0}}.",
        "Use Vieta's sum of roots (or factorise directly into {{(c - 4)(c - 8) = 0}}).",
      ],
      solution: [
        "Check ambiguity: altitude {{h = 6 sqrt(2) sin 45° = 6 < 2 sqrt(10) < 6 sqrt(2)}}, so two triangles exist.",
        "Cosine rule: {{(2 sqrt(10))^2 = (6 sqrt(2))^2 + c^2 - 2(6 sqrt(2)) c (sqrt(2)/2) => 40 = 72 + c^2 - 12c}}.",
        "Thus {{c^2 - 12c + 32 = 0 => (c - 4)(c - 8) = 0}}, giving {{c = 4}} cm or {{c = 8}} cm, whose sum is {{4 + 8 = 12}} cm.",
      ],
    },
    {
      id: "3a-geometry-trig-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Find",
      guideRef: "trig-identities-graphs-equations",
      question: "Without a calculator, find the exact value of {{sin^4(pi/8) + cos^4(pi/8)}} as a simplified fraction.",
      answer: { type: "fraction", n: 3, d: 4, simplest: true },
      hints: [
        "Square the Pythagorean identity: {{(sin^2 theta + cos^2 theta)^2 = 1}}.",
        "Rearrange to {{sin^4 theta + cos^4 theta = 1 - 2 sin^2 theta cos^2 theta = 1 - (1/2) sin^2(2theta)}}.",
        "Substitute {{theta = pi/8}} so {{2theta = pi/4}}.",
      ],
      solution: [
        "{{sin^4 theta + cos^4 theta = (sin^2 theta + cos^2 theta)^2 - 2 sin^2 theta cos^2 theta = 1 - (1/2)(2 sin theta cos theta)^2 = 1 - (1/2) sin^2(2theta)}}.",
        "At {{theta = pi/8}}, {{sin(2theta) = sin(pi/4) = sqrt(2)/2}}, so {{sin^2(pi/4) = 1/2}}.",
        "Therefore {{sin^4(pi/8) + cos^4(pi/8) = 1 - (1/2)(1/2) = 3/4}}.",
      ],
    },
    {
      id: "3a-geometry-trig-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "reciprocal-inverse-compound-hl",
      question: "[HL] Find the exact value of {{tan(2 arctan(1/2) + arctan(1/7))}} as a simplified improper fraction.",
      answer: { type: "fraction", n: 31, d: 17, simplest: true },
      hints: [
        "Let {{alpha = arctan(1/2)}} and {{beta = arctan(1/7)}} so {{tan alpha = 1/2}} and {{tan beta = 1/7}}.",
        "First compute {{tan(2alpha) = (2 tan alpha) / (1 - tan^2 alpha) = 4/3}}.",
        "Then apply {{tan(2alpha + beta) = (tan 2alpha + tan beta) / (1 - tan 2alpha tan beta)}}.",
      ],
      solution: [
        "Let {{alpha = arctan(1/2)}} and {{beta = arctan(1/7)}}.",
        "{{tan(2alpha) = (2 * 1/2) / (1 - 1/4) = 1 / (3/4) = 4/3}}.",
        "{{tan(2alpha + beta) = (4/3 + 1/7) / (1 - (4/3)(1/7)) = (31/21) / (17/21) = 31/17}}.",
      ],
    },
    {
      id: "3a-geometry-trig-ch-q04",
      kind: "written",
      marks: 6,
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "3d-geometry-sine-cosine",
      question:
        "A vertical mast TP of height h stands on level ground. From point A due South of P, the angle of elevation of T is 30°. From point B due East of P, the angle of elevation of T is 45°. Given that AB = 40 m: (a) Express PA and PB in terms of h. (b) Find the exact height h of the mast. (c) Find the exact angle of elevation of T from the midpoint M of AB.",
      hints: [
        "Use right triangles TPA and TPB to write {{PA = h / tan 30°}} and {{PB = h / tan 45°}}.",
        "Because A is due South and B is due East of P, {{∠APB = 90°}} — apply Pythagoras to △APB.",
        "In a right-angled triangle, the midpoint M of the hypotenuse is equidistant from all three vertices (so {{PM = (1/2) AB}})!",
      ],
      modelAnswer:
        "(a) In right triangle TPA, PA = h / tan 30° = h√3. In right triangle TPB, PB = h / tan 45° = h.\n" +
        "(b) Because South and East are perpendicular, ∠APB = 90°. By Pythagoras in △APB: PA² + PB² = AB² ⇒ (h√3)² + h² = 40² ⇒ 4h² = 1600 ⇒ h² = 400 ⇒ h = 20 m.\n" +
        "(c) In right triangle APB, the midpoint M of hypotenuse AB satisfies PM = ½ AB = 20 m (or via coordinates PM = √(10² + (10√3)²) = 20 m). In right triangle TPM, tan(∠TMP) = TP / PM = 20 / 20 = 1, so ∠TMP = 45°.",
      markScheme: [
        { point: "Expresses PA = h√3 and PB = h correctly (A1)", keywords: ["h√3", "h sqrt(3)", "pb = h"] },
        { point: "Recognises ∠APB = 90° and applies Pythagoras (h√3)² + h² = 40² (M1)", keywords: ["90°", "4h² = 1600", "4h^2 = 1600"] },
        { point: "Solves to obtain exact height h = 20 m (A1)", keywords: ["h = 20", "400"] },
        { point: "Finds distance PM = 20 m using right-triangle circumcentre or coordinates (M1)", keywords: ["pm = 20", "1/2 ab", "½ ab"] },
        { point: "Sets up tan(∠TMP) = 20/20 = 1 (M1)", keywords: ["20 / 20", "20/20", "= 1"] },
        { point: "Concludes exact angle of elevation is 45° (A1)", keywords: ["45°", "45 deg"] },
      ],
      markbands: [
        { band: "0–2", marks: [0, 2], descriptor: "Finds PA and PB in terms of h with incomplete 3D-to-2D setup." },
        { band: "3–4", marks: [3, 4], descriptor: "Correctly deduces h = 20 m and attempts distance PM." },
        { band: "5–6", marks: [5, 6], descriptor: "Complete exact derivation of h = 20 m and ∠TMP = 45°." },
      ],
    },
    {
      id: "3a-geometry-trig-ch-q05",
      kind: "written",
      marks: 6,
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Show that",
      guideRef: "radians-unit-circle-exact",
      question:
        "A goat is tethered to a fence post P on the boundary of a circular field of centre O and radius R, using a rope of length equal to R. (a) Show that the rope's arc inside the field meets the boundary at two points A and B with ∠AOB = ∠APB = 2π/3. (b) Hence prove that the exact fraction of the field's area that the goat can graze is {{2/3 - sqrt(3)/(2pi)}}.",
      hints: [
        "Compare the lengths OP, OA, and PA: all three equal R!",
        "Split the grazing lens along chord AB into two identical minor segments of radius R and angle 2π/3.",
        "Divide the total grazing area by the field's area {{pi R^2}} so {{R^2}} cancels out.",
      ],
      modelAnswer:
        "(a) Both the field circle (centre O) and the rope circle (centre P) have radius R, and distance OP = R. Thus OP = OA = PA = R, so △OPA is equilateral and ∠AOP = ∠APO = π/3. By symmetry across OP, △OPB is also equilateral, giving ∠AOB = ∠APB = 2π/3.\n" +
        "(b) Chord AB divides the grazing lens into two congruent minor segments of radius R and central angle 2π/3.\n" +
        "Area of one minor segment = ½ R² (2π/3 − sin(2π/3)) = ½ R² (2π/3 − √3/2).\n" +
        "Total grazing area = 2 × ½ R² (2π/3 − √3/2) = R² (2π/3 − √3/2).\n" +
        "Dividing by total field area πR² cancels R²: (2π/3 − √3/2) / π = 2/3 − √3 / (2π).",
      markScheme: [
        { point: "Shows OP = OA = PA = R so △OPA is equilateral with angle π/3 (R1)", keywords: ["equilateral", "π/3", "pi/3"] },
        { point: "Uses symmetry of △OPB to conclude ∠AOB = ∠APB = 2π/3 (A1)", keywords: ["symmetry", "opb"] },
        { point: "Splits grazing region into two congruent minor segments along chord AB (M1)", keywords: ["congruent", "minor segment"] },
        { point: "Writes single segment area ½ R² (2π/3 − √3/2) using sin(2π/3) = √3/2 (M1)", keywords: ["√3/2", "sqrt(3)/2"] },
        { point: "Doubles to find total grazing area R² (2π/3 − √3/2) (A1)", keywords: ["r² (2π/3 - √3/2)", "r^2(2pi/3", "total grazing"] },
        { point: "Divides by πR² cleanly to reach 2/3 − √3 / (2π) (A1)", keywords: ["πr²", "pir^2", "2/3 - √3 / (2π)", "2/3 - sqrt(3)/(2pi)"] },
      ],
      markbands: [
        { band: "0–2", marks: [0, 2], descriptor: "Identifies equilateral triangle geometry without assembling the lens area." },
        { band: "3–4", marks: [3, 4], descriptor: "Derives minor segment area correctly with incomplete doubling or ratio step." },
        { band: "5–6", marks: [5, 6], descriptor: "Rigorous geometric proof and exact algebraic cancellation to 2/3 − √3/(2π)." },
      ],
    },
    {
      id: "3a-geometry-trig-ch-q06",
      kind: "written",
      marks: 6,
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Solve",
      guideRef: "trig-identities-graphs-equations",
      question: "Find all exact values of x in {{0 <= x <= 2pi}} satisfying {{cos 2x + 3 cos x + 2 = 0}}, and hence find the exact sum of all solutions in terms of π.",
      hints: [
        "Substitute {{cos 2x = 2 cos^2 x - 1}} to build a quadratic equation in cos x.",
        "Factorise {{2 cos^2 x + 3 cos x + 1 = 0}} into {{(2 cos x + 1)(cos x + 1) = 0}}.",
        "Collect all roots in {{[0, 2pi]}} and add them together.",
      ],
      modelAnswer:
        "Replace cos 2x with 2 cos²x − 1: (2 cos²x − 1) + 3 cos x + 2 = 0 ⇒ 2 cos²x + 3 cos x + 1 = 0.\n" +
        "Factorising yields (2 cos x + 1)(cos x + 1) = 0, so cos x = −1/2 or cos x = −1.\n" +
        "On [0, 2π]: cos x = −1 gives x = π, and cos x = −1/2 (Quadrants II and III, reference π/3) gives x = 2π/3 and x = 4π/3.\n" +
        "The sum of all three solutions is 2π/3 + π + 4π/3 = 3π.",
      markScheme: [
        { point: "Substitutes cos 2x = 2 cos²x − 1 (M1)", keywords: ["2 cos²x - 1", "2 cos^2"] },
        { point: "Obtains quadratic 2 cos²x + 3 cos x + 1 = 0 (A1)", keywords: ["2 cos²x + 3 cos x + 1", "2 cos^2 x + 3 cos x + 1"] },
        { point: "Factorises to (2 cos x + 1)(cos x + 1) = 0 giving cos x = −1/2 or −1 (M1)", keywords: ["(2 cos x + 1)(cos x + 1)", "-1/2"] },
        { point: "Finds x = π from cos x = −1 (A1)", keywords: ["x = π", "x = pi"] },
        { point: "Finds both Q2 and Q3 solutions 2π/3 and 4π/3 (A1)", keywords: ["2π/3", "4π/3", "2pi/3", "4pi/3"] },
        { point: "Adds all three solutions to get exact sum 3π (A1)", keywords: ["3π", "3pi"] },
      ],
      markbands: [
        { band: "0–2", marks: [0, 2], descriptor: "Applies double-angle identity but errors in factorising or solving cosine branches." },
        { band: "3–4", marks: [3, 4], descriptor: "Finds two of the three roots cleanly." },
        { band: "5–6", marks: [5, 6], descriptor: "All three exact roots verified and summed to 3π." },
      ],
    },
    {
      id: "3a-geometry-trig-ch-q07",
      kind: "written",
      marks: 7,
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Prove",
      guideRef: "reciprocal-inverse-compound-hl",
      question:
        "[HL] (a) Prove that {{(1 - cos 2theta + sin 2theta) / (1 + cos 2theta + sin 2theta) = tan theta}} wherever the denominator is non-zero. (b) Hence solve {{(1 - cos 2theta + sin 2theta) / (1 + cos 2theta + sin 2theta) = sqrt(3)}} for {{-pi < theta < pi}}, verifying that your solutions do not make the denominator zero.",
      hints: [
        "Use TWO DIFFERENT forms of {{cos 2theta}}: {{1 - 2 sin^2 theta}} in the numerator and {{2 cos^2 theta - 1}} in the denominator so both '1's cancel!",
        "Factor {{2 sin theta}} from the numerator and {{2 cos theta}} from the denominator to reveal a common factor {{(sin theta + cos theta)}}.",
        "In (b), solve {{tan theta = sqrt(3)}} on {{(-pi, pi)}} and check {{cos theta != 0}} and {{sin theta + cos theta != 0}}.",
      ],
      modelAnswer:
        "(a) Start with the LHS and choose cos 2θ = 1 − 2 sin²θ in the numerator and cos 2θ = 2 cos²θ − 1 in the denominator, along with sin 2θ = 2 sin θ cos θ:\n" +
        "Numerator = 1 − (1 − 2 sin²θ) + 2 sin θ cos θ = 2 sin²θ + 2 sin θ cos θ = 2 sin θ (sin θ + cos θ).\n" +
        "Denominator = 1 + (2 cos²θ − 1) + 2 sin θ cos θ = 2 cos²θ + 2 sin θ cos θ = 2 cos θ (cos θ + sin θ).\n" +
        "Cancelling the non-zero common factor 2(sin θ + cos θ) gives LHS = sin θ / cos θ = tan θ = RHS (valid when cos θ ≠ 0 and tan θ ≠ −1).\n" +
        "(b) By part (a), the equation reduces to tan θ = √3. In (−π, π), the solutions are θ = π/3 (Q1) and θ = −2π/3 (Q3).\n" +
        "At both roots, cos θ = ±1/2 ≠ 0 and tan θ = √3 ≠ −1, so the denominator is non-zero and both roots are valid.",
      markScheme: [
        { point: "Substitutes cos 2θ = 1 − 2 sin²θ in numerator to eliminate 1 (M1)", keywords: ["1 - 2 sin²θ", "1 - 2 sin^2", "2 sin²θ"] },
        { point: "Substitutes cos 2θ = 2 cos²θ − 1 in denominator to eliminate 1 (M1)", keywords: ["2 cos²θ - 1", "2 cos^2", "2 cos²θ"] },
        { point: "Factors numerator and denominator as 2 sin θ(sin θ + cos θ) and 2 cos θ(cos θ + sin θ) (M1)", keywords: ["2 sin θ (sin θ + cos θ)", "sin θ + cos θ", "sin theta + cos theta"] },
        { point: "Cancels common factor cleanly to reach sin θ / cos θ = tan θ = RHS (A1)", keywords: ["sin θ / cos θ", "sin theta / cos theta", "common factor"] },
        { point: "Uses part (a) to solve tan θ = √3 and finds Q1 root θ = π/3 (A1)", keywords: ["π/3", "pi/3"] },
        { point: "Finds Q3 negative root θ = −2π/3 inside (−π, π) (A1)", keywords: ["-2π/3", "-2pi/3"] },
        { point: "Explicitly verifies denominator ≠ 0 (cos θ ≠ 0 and tan θ ≠ −1) at both roots (R1)", keywords: ["tan θ ≠ -1", "±1/2", "non-zero", "both roots are valid"] },
      ],
      markbands: [
        { band: "0–2", marks: [0, 2], descriptor: "Attempts double-angle substitution without cancelling the constant 1 terms cleanly." },
        { band: "3–5", marks: [3, 5], descriptor: "Completes identity proof and finds π/3 while omitting −2π/3 or domain check." },
        { band: "6–7", marks: [6, 7], descriptor: "Elegant two-form double-angle proof, both roots in (−π, π), and explicit non-zero denominator verification." },
      ],
    },
    {
      id: "3a-geometry-trig-ch-q08",
      kind: "written",
      marks: 8,
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Derive",
      guideRef: "reciprocal-inverse-compound-hl",
      question:
        "[HL] Consider {{f(x) = cos(2x) + 2 sin x}} for {{0 <= x < 2pi}}. (a) Express f(x) as a completed-square quadratic in {{u = sin x}}. (b) Deduce the exact global maximum and minimum values of f(x) and all values of x in {{[0, 2pi)}} at which they occur. (c) Determine the unique real value of k for which {{cos(2x) + 2 sin x = k}} has exactly THREE distinct solutions in {{0 <= x < 2pi}}, justifying why no other k works.",
      hints: [
        "Replace {{cos(2x) = 1 - 2 sin^2 x}} to obtain {{g(u) = -2u^2 + 2u + 1}} on {{-1 <= u <= 1}}.",
        "Complete the square: {{g(u) = -2(u - 1/2)^2 + 3/2}}.",
        "Track how many x-values in {{[0, 2pi)}} correspond to each u-value in {{[-1, 1]}}: u = ±1 gives 1 solution, while every u ∈ (−1, 1) gives 2 solutions (since x = 2π is excluded, u = 0 gives x = 0 and x = π — two solutions!).",
      ],
      modelAnswer:
        "(a) Using cos(2x) = 1 − 2 sin²x and letting u = sin x ∈ [−1, 1]:\n" +
        "g(u) = 1 − 2u² + 2u = −2(u² − u) + 1 = −2(u − 1/2)² + 1 + 1/2 = −2(u − 1/2)² + 3/2.\n" +
        "(b) Since −2(u − 1/2)² ≤ 0 and u = 1/2 lies in [−1, 1], the global maximum is 3/2, occurring when sin x = 1/2 ⇒ x = π/6 and x = 5π/6.\n" +
        "The endpoint furthest from u = 1/2 is u = −1, giving the global minimum g(−1) = −2(−3/2)² + 3/2 = −3, occurring when sin x = −1 ⇒ x = 3π/2.\n" +
        "(c) On [0, 2π), sin x = u yields 1 root when u = ±1 and 2 roots for every u ∈ (−1, 1) (noting u = 0 gives x = 0, π since 2π is excluded).\n" +
        "For g(u) = k: k = −3 gives u = −1 (1 root); −3 < k < 1 gives one u ∈ (−1, 0) (2 roots); 1 < k < 3/2 gives two u values in (0, 1) (4 roots); k = 3/2 gives u = 1/2 (2 roots).\n" +
        "At k = 1, g(u) = 1 yields u = 0 (2 roots: x = 0, π) AND u = 1 (1 root: x = π/2), giving 2 + 1 = 3 distinct solutions. Hence k = 1 is the unique value.",
      markScheme: [
        { point: "Substitutes cos 2x = 1 − 2 sin²x to get −2u² + 2u + 1 (M1)", keywords: ["-2u² + 2u + 1", "-2u^2 + 2u + 1", "1 - 2u²"] },
        { point: "Completes square accurately to −2(u − 1/2)² + 3/2 (A1)", keywords: ["-2(u - 1/2)² + 3/2", "-2(u - 1/2)^2 + 3/2"] },
        { point: "States global maximum 3/2 at x = π/6 and 5π/6 (A1)", keywords: ["π/6", "5π/6", "5pi/6"] },
        { point: "Evaluates global minimum −3 at u = −1, i.e., x = 3π/2 (A1)", keywords: ["-3", "3π/2", "3pi/2"] },
        { point: "Analyses root multiplicity on [0, 2π): u = ±1 gives 1 root, u ∈ (−1, 1) gives 2 roots (M1)", keywords: ["u = ±1", "2 roots", "1 root"] },
        { point: "Identifies k = 1 yields u = 0 and u = 1 (M1)", keywords: ["u = 0", "u = 1"] },
        { point: "Lists the 3 solutions x = 0, π/2, π at k = 1 (A1)", keywords: ["x = 0, π", "π/2", "pi/2"] },
        { point: "Justifies uniqueness by showing all other k give 0, 1, 2, or 4 solutions (R1)", keywords: ["k = 1 is the unique", "4 roots", "1 < k < 3/2"] },
      ],
      markbands: [
        { band: "0–2", marks: [0, 2], descriptor: "Rewrites f(x) in terms of sin x with errors completing the square or finding extrema." },
        { band: "3–5", marks: [3, 5], descriptor: "Correct completed square and global max/min with partial root-counting in part (c)." },
        { band: "6–8", marks: [6, 8], descriptor: "Rigorous completed square, exact extrema and angles, and complete uniqueness proof for k = 1." },
      ],
    },
  ],
};
