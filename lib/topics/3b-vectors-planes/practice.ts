import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 HL Questions: 4 MCQs balanced [1,1,1,1] + 6 ShortQs)
  // ===========================================================================
  quiz: [
    {
      id: "3b-vectors-planes-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "vectors-dot-product",
      question: "Compute the dot product **a** · **b** for **a** = (2, −1, 2) and **b** = (1, 4, −2).",
      options: ["−6", "6", "−2", "10"],
      answerIndex: 0,
      hints: [
        "Multiply corresponding components and add them together.",
        "Evaluate 2(1) + (−1)(4) + 2(−2).",
      ],
      explanation: "**a** · **b** = 2(1) + (−1)(4) + 2(−2) = 2 − 4 − 4 = −6.",
    },
    {
      id: "3b-vectors-planes-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "Find",
      guideRef: "vectors-dot-product",
      question:
        "Find the exact integer value of k such that the vectors (3, k, −2) and (4, −3, 3) are perpendicular.",
      answer: { type: "number", value: 2 },
      traps: [
        {
          spec: { type: "number", value: -2 },
          feedback: "Check the sign: 12 − 3k − 6 = 0 gives 6 = 3k, so k is positive.",
        },
      ],
      hints: [
        "Set the dot product equal to 0.",
        "Solve 3(4) + k(−3) + (−2)(3) = 0.",
      ],
      solution: [
        "Perpendicular vectors satisfy **u** · **v** = 0.",
        "3(4) + k(−3) + (−2)(3) = 0 ⇒ 12 − 3k − 6 = 0.",
        "6 − 3k = 0 ⇒ k = 2.",
      ],
    },
    {
      id: "3b-vectors-planes-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "vector-lines-skew",
      question:
        "A 3D line has parametric equations x = 3 − 2λ, y = 1 + 4λ, z = −5 + λ. Which of the following points lies on this line?",
      options: [
        "(1, 5, −3)",
        "(−1, 9, −3)",
        "(5, −3, −4)",
        "(−3, 1, −5)",
      ],
      answerIndex: 1,
      hints: [
        "For a point to lie on the line, all three coordinates must produce the EXACT same value of λ.",
        "Find λ from z = −5 + λ first, then check x and y.",
      ],
      explanation:
        "For (−1, 9, −3), z = −5 + λ = −3 gives λ = 2. Checking x = 3 − 2(2) = −1 and y = 1 + 4(2) = 9 confirms all three coordinates match λ = 2.",
    },
    {
      id: "3b-vectors-planes-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "vector-lines-skew",
      question:
        "Line L has vector equation **r** = (2, 1, −3) + λ(3, −2, 4). Find the exact y-coordinate of the point on L where z = 9.",
      answer: { type: "number", value: -5 },
      traps: [
        {
          spec: { type: "number", value: 7 },
          feedback: "Watch the negative sign in y = 1 − 2λ when λ = 3.",
        },
      ],
      hints: [
        "Set the z-component −3 + 4λ equal to 9 to find λ.",
        "Substitute λ = 3 into y = 1 − 2λ.",
      ],
      solution: [
        "From z = −3 + 4λ = 9, we get 4λ = 12 ⇒ λ = 3.",
        "Substitute λ = 3 into y = 1 − 2λ: y = 1 − 2(3) = −5.",
      ],
    },
    {
      id: "3b-vectors-planes-quiz-q05",
      kind: "mcq",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "cross-product-planes",
      question: "Compute the cross product (0, 1, 2) × (1, 0, −1).",
      options: [
        "(−1, −2, −1)",
        "(1, −2, 1)",
        "(−1, 2, −1)",
        "(0, 0, −2)",
      ],
      answerIndex: 2,
      hints: [
        "Use (v₂w₃ − v₃w₂, v₃w₁ − v₁w₃, v₁w₂ − v₂w₁).",
        "Check that the dot product of your answer with both (0, 1, 2) and (1, 0, −1) equals 0.",
      ],
      explanation:
        "(1(−1) − 2(0), 2(1) − 0(−1), 0(0) − 1(1)) = (−1, 2, −1). Checking: (0, 1, 2) · (−1, 2, −1) = 0 and (1, 0, −1) · (−1, 2, −1) = 0.",
    },
    {
      id: "3b-vectors-planes-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "cross-product-planes",
      question:
        "Find the exact area of the triangle spanned by two adjacent edge vectors **u** = (3, −2, 0) and **v** = (0, 2, −1). Give your answer as an exact decimal or fraction.",
      answer: { type: "number", value: 3.5 },
      traps: [
        {
          spec: { type: "number", value: 7 },
          feedback: "7 is the parallelogram area |u × v| — remember to multiply by ½ for a triangle!",
        },
      ],
      hints: [
        "First compute **u** × **v** = (2, 3, 6).",
        "Triangle area is {{(1/2) |u × v|}}.",
      ],
      solution: [
        "**u** × **v** = ((−2)(−1) − 0, 0 − 3(−1), 3(2) − 0) = (2, 3, 6).",
        "{{|u × v| = sqrt(2^2 + 3^2 + 6^2) = sqrt(49) = 7}}.",
        "Triangle area = {{(1/2) * 7 = 3.5}} square units.",
      ],
    },
    {
      id: "3b-vectors-planes-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "cross-product-planes",
      question:
        "A plane has normal vector **n** = (2, −3, 4) and passes through A(1, −2, 3). Find the exact integer constant d in its Cartesian equation 2x − 3y + 4z = d.",
      answer: { type: "number", value: 20 },
      traps: [
        {
          spec: { type: "number", value: 8 },
          feedback: "Watch the double negative: −3(−2) = +6, not −6.",
        },
      ],
      hints: [
        "Compute d = **a** · **n** by substituting A(1, −2, 3) into 2x − 3y + 4z.",
        "Evaluate 2(1) − 3(−2) + 4(3).",
      ],
      solution: [
        "d = **a** · **n** = 2(1) + (−3)(−2) + 4(3).",
        "d = 2 + 6 + 12 = 20.",
      ],
    },
    {
      id: "3b-vectors-planes-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "intersections-angles-distances",
      question:
        "A line with direction **b** and a plane with normal **n** satisfy {{|b · n| / (|b| |n|) = sqrt(3)/2}}. What is the exact acute angle between the line and the plane?",
      options: [
        "30° ({{π/6}})",
        "45° ({{π/4}})",
        "120° ({{2π/3}})",
        "60° ({{π/3}})",
      ],
      answerIndex: 3,
      hints: [
        "The line–plane acute angle α satisfies {{sin α = |b · n| / (|b| |n|)}}.",
        "Solve {{sin α = sqrt(3)/2}} for acute α.",
      ],
      explanation:
        "Since {{sin α = |b · n| / (|b| |n|) = sqrt(3)/2}}, the acute angle between the line and the plane is α = 60° ({{π/3}}).",
    },
    {
      id: "3b-vectors-planes-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "intersections-angles-distances",
      question:
        "Find the exact shortest perpendicular distance from P(2, −1, 4) to the plane 2x + 3y − 6z = 5.",
      answer: { type: "number", value: 4 },
      traps: [
        {
          spec: { type: "number", value: 28 },
          feedback: "You must divide |ax₀ + by₀ + cz₀ − d| by |n| = √(4 + 9 + 36) = 7.",
        },
      ],
      hints: [
        "Use {{D = |a x_0 + b y_0 + c z_0 - d| / sqrt(a^2 + b^2 + c^2)}}.",
        "Compute |2(2) + 3(−1) − 6(4) − 5| / 7.",
      ],
      solution: [
        "{{|n| = sqrt(2^2 + 3^2 + (-6)^2) = sqrt(49) = 7}}.",
        "Numerator = |2(2) + 3(−1) − 6(4) − 5| = |4 − 3 − 24 − 5| = |−28| = 28.",
        "D = 28 / 7 = 4.",
      ],
    },
    {
      id: "3b-vectors-planes-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "intersections-angles-distances",
      question:
        "Find the exact value of cos φ, as a simplified fraction a/b, where φ is the acute dihedral angle between the planes x + 2y − 2z = 5 and 3x − 4y = 7.",
      answer: { type: "fraction", n: 1, d: 3, simplest: true },
      traps: [
        {
          spec: { type: "fraction", n: -1, d: 3 },
          feedback: "An acute dihedral angle has positive cosine — take the absolute value |n₁ · n₂|.",
        },
      ],
      hints: [
        "Read off normals **n**₁ = (1, 2, −2) (length 3) and **n**₂ = (3, −4, 0) (length 5).",
        "Compute {{cos φ = |n_1 · n_2| / (|n_1| |n_2|)}} and simplify the fraction.",
      ],
      solution: [
        "**n**₁ = (1, 2, −2) has |**n**₁| = 3; **n**₂ = (3, −4, 0) has |**n**₂| = 5.",
        "**n**₁ · **n**₂ = 1(3) + 2(−4) + (−2)(0) = −5.",
        "{{cos φ = |-5| / (3 * 5) = 5/15 = 1/3}}.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 HL PAPERS × 15 Qs = 30 Qs)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: Non-Calculator HL (9 ShortQs + 6 WrittenQs)
    // -------------------------------------------------------------------------
    {
      id: "3b-vectors-planes-p1",
      title: "HL Practice Paper 1: Non-Calculator Vectors, Lines & Planes",
      level: "HL",
      questions: [
        {
          id: "3b-vectors-planes-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "vectors-dot-product",
          question:
            "Given **u** = (2, −1, 3) and **v** = (−1, 4, 2), find the exact integer value of {{|2u - v|^2}}.",
          answer: { type: "number", value: 77 },
          hints: [
            "First compute the components of 2**u** − **v** = (4 − (−1), −2 − 4, 6 − 2).",
            "Sum the squares of the three components (do NOT take the square root since squared magnitude is requested).",
          ],
          solution: [
            "2**u** − **v** = (4, −2, 6) − (−1, 4, 2) = (5, −6, 4).",
            "{{|2u - v|^2 = 5^2 + (-6)^2 + 4^2 = 25 + 36 + 16 = 77}}.",
          ],
        },
        {
          id: "3b-vectors-planes-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Find",
          guideRef: "vectors-dot-product",
          question:
            "Point M divides the line segment joining A(−1, 3, 2) and B(5, −3, 8) internally in the ratio AM : MB = 1 : 2. Find the exact sum of the coordinates (x + y + z) of M.",
          answer: { type: "number", value: 6 },
          hints: [
            "Use the section formula {{m_vec = (2a + 1b)/3}} (notice A gets the larger weight 2 because M is closer to A!).",
            "Find M = (1, 1, 4), then sum its three coordinates.",
          ],
          solution: [
            "**OM** = {{(2/3) OA + (1/3) OB = (1/3)((-2 + 5), (6 - 3), (4 + 8)) = (1, 1, 4)}}.",
            "Sum of coordinates = 1 + 1 + 4 = 6.",
          ],
        },
        {
          id: "3b-vectors-planes-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "vectors-dot-product",
          question:
            "Find BOTH exact values of k for which the vectors (k, 2, −3) and (k + 1, −3, 2) are perpendicular. Separate the two values with a comma.",
          answer: { type: "list", values: [-4, 3] },
          hints: [
            "Set the dot product equal to 0: k(k + 1) + 2(−3) + (−3)(2) = 0.",
            "Factorise the resulting quadratic {{k^2 + k - 12 = 0}}.",
          ],
          solution: [
            "k(k + 1) − 6 − 6 = 0 ⇒ {{k^2 + k - 12 = 0}}.",
            "(k + 4)(k − 3) = 0 ⇒ k = −4, 3.",
          ],
        },
        {
          id: "3b-vectors-planes-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "vector-lines-skew",
          question:
            "Line L has Cartesian equation {{(x + 1)/2 = (5 - y)/3 = (z - 4)/(-1)}}. Find the exact x-coordinate of the point where L intersects the xy-plane (z = 0).",
          answer: { type: "number", value: 7 },
          traps: [
            {
              spec: { type: "number", value: -9 },
              feedback: "Check the sign when substituting z = 0: (0 − 4)/(−1) = +4, not −4.",
            },
          ],
          hints: [
            "At the xy-plane, z = 0. Substitute z = 0 into {{(z - 4)/(-1)}} to find the common ratio λ.",
            "Set {{(x + 1)/2 = 4}} and solve for x.",
          ],
          solution: [
            "When z = 0, {{λ = (0 - 4)/(-1) = 4}}.",
            "Then {{(x + 1)/2 = 4}} ⇒ x + 1 = 8 ⇒ x = 7.",
          ],
        },
        {
          id: "3b-vectors-planes-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "vector-lines-skew",
          question:
            "The lines L₁: **r** = (1, 3, −2) + λ(2, −1, 3) and L₂: **r** = (5, 6, −1) + μ(1, 2, −1) intersect at point P(x, y, z). Find the exact integer value of x + y + z.",
          answer: { type: "number", value: 6 },
          hints: [
            "Equate x and y: 1 + 2λ = 5 + μ and 3 − λ = 6 + 2μ.",
            "Solve for λ = 1 and μ = −2, verify z, find P(3, 2, 1), and add its coordinates.",
          ],
          solution: [
            "From x: μ = 2λ − 4. Substitute into y: 3 − λ = 6 + 2(2λ − 4) ⇒ 3 − λ = 4λ − 2 ⇒ 5λ = 5 ⇒ λ = 1, μ = −2.",
            "Verify z: −2 + 3(1) = 1 and −1 − (−2) = 1 ✓.",
            "Intersection point P = (3, 2, 1), so x + y + z = 3 + 2 + 1 = 6.",
          ],
        },
        {
          id: "3b-vectors-planes-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "cross-product-planes",
          question:
            "Find the exact area of parallelogram PQRS with adjacent edge vectors **PQ** = (4, −1, 0) and **PS** = (0, 2, −1).",
          answer: { type: "number", value: 9 },
          traps: [
            {
              spec: { type: "number", value: 4.5 },
              feedback: "Parallelogram area is |PQ × PS| without the factor of ½ (only triangles use ½).",
            },
          ],
          hints: [
            "Compute **PQ** × **PS** = ((−1)(−1) − 0, 0 − 4(−1), 4(2) − 0).",
            "Take the exact magnitude of (1, 4, 8).",
          ],
          solution: [
            "**PQ** × **PS** = (1, 4, 8).",
            "Area = {{|PQ × PS| = sqrt(1^2 + 4^2 + 8^2) = sqrt(81) = 9}}.",
          ],
        },
        {
          id: "3b-vectors-planes-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "cross-product-planes",
          question:
            "Find the exact integer value of k for which the plane 3x − 2y + kz = 14 is perpendicular to the plane 4x + 5y − z = 9.",
          answer: { type: "number", value: 2 },
          hints: [
            "Two planes are perpendicular if and only if their normal vectors are perpendicular (**n**₁ · **n**₂ = 0).",
            "Solve (3, −2, k) · (4, 5, −1) = 0.",
          ],
          solution: [
            "Normals are **n**₁ = (3, −2, k) and **n**₂ = (4, 5, −1).",
            "**n**₁ · **n**₂ = 3(4) + (−2)(5) + k(−1) = 12 − 10 − k = 0 ⇒ k = 2.",
          ],
        },
        {
          id: "3b-vectors-planes-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "intersections-angles-distances",
          question:
            "Find the exact value of sin α, as a simplified fraction a/b, where α is the acute angle between the line **r** = (1, 0, −2) + λ(2, −2, 1) and the plane 3x + 4y = 11.",
          answer: { type: "fraction", n: 2, d: 15, simplest: true },
          traps: [
            {
              spec: { type: "fraction", n: -2, d: 15 },
              feedback: "For an acute angle α ∈ [0, 90°], sin α must be non-negative — use |b · n|.",
            },
          ],
          hints: [
            "Identify **b** = (2, −2, 1) (|**b**| = 3) and **n** = (3, 4, 0) (|**n**| = 5).",
            "Evaluate {{sin α = |b · n| / (|b| |n|)}}.",
          ],
          solution: [
            "**b** · **n** = 2(3) + (−2)(4) + 1(0) = −2.",
            "|**b**| = 3 and |**n**| = 5, so {{sin α = |-2| / (3 * 5) = 2/15}}.",
          ],
        },
        {
          id: "3b-vectors-planes-p1-q09",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "intersections-angles-distances",
          question:
            "Find the exact shortest perpendicular distance from the point P(4, 0, 4) to the line L: **r** = (1, 0, 1) + λ(1, 2, 2).",
          answer: { type: "number", value: 3 },
          traps: [
            {
              spec: { type: "number", value: 9 },
              feedback: "Remember to divide |AP × b| by |b| = 3.",
            },
          ],
          hints: [
            "Either apply {{D = |AP × b| / |b|}} using A(1, 0, 1) on L, OR solve **PF** · **b** = 0 for the foot F.",
            "Compute **AP** = (3, 0, 3) and **AP** × (1, 2, 2) = (−6, −3, 6), which has magnitude 9.",
          ],
          solution: [
            "With A(1, 0, 1) on L, **AP** = (3, 0, 3) and **b** = (1, 2, 2) (|**b**| = 3).",
            "**AP** × **b** = (0 − 6, 3 − 6, 6 − 0) = (−6, −3, 6), so {{|AP × b| = sqrt(36 + 9 + 36) = 9}}.",
            "Shortest distance D = 9 / 3 = 3.",
          ],
        },
        {
          id: "3b-vectors-planes-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 4,
          commandTerm: "Prove",
          guideRef: "vectors-dot-product",
          question:
            "In triangle OAB, **OA** = **a** and **OB** = **b**. Point M is the midpoint of OA and point N is the midpoint of OB. Prove using vectors that MN is parallel to AB and has half the length of AB.",
          hints: [
            "Write position vectors **OM** and **ON** in terms of **a** and **b**.",
            "Compute **MN** = **ON** − **OM** and compare it with **AB** = **b** − **a**.",
          ],
          modelAnswer:
            "Since M and N are midpoints, OM = (1/2)a and ON = (1/2)b. Therefore MN = ON − OM = (1/2)b − (1/2)a = (1/2)(b − a). Also AB = OB − OA = b − a. Hence MN = (1/2)AB. Because MN is a positive scalar multiple of AB, MN is parallel to AB, and taking magnitudes gives |MN| = (1/2)|AB|.",
          markScheme: [
            { point: "Expresses midpoint position vectors OM = (1/2)a and ON = (1/2)b", keywords: ["(1/2)a", "0.5a", "½a", "(1/2)b"] },
            { point: "Computes MN = ON − OM = (1/2)(b − a)", keywords: ["on - om", "on − om", "(1/2)(b - a)", "(1/2)(b − a)", "0.5(b - a)"] },
            { point: "Identifies AB = b − a and deduces MN = (1/2)AB", keywords: ["mn = (1/2)ab", "mn = 0.5ab", "mn = ½ab", "b - a"] },
            { point: "Concludes both parallelism (scalar multiple) and half length |MN| = (1/2)|AB|", keywords: ["scalar multiple", "|mn| = (1/2)|ab|", "|mn| = 0.5|ab|", "magnitudes"] },
          ],
        },
        {
          id: "3b-vectors-planes-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 5,
          commandTerm: "Show that",
          guideRef: "vector-lines-skew",
          question:
            "Show that the lines L₁: **r** = (1, −1, 2) + λ(2, 1, −1) and L₂: **r** = (2, 3, 0) + μ(1, −1, 2) are skew, and find the exact value of cos θ where θ is the acute angle between them.",
          hints: [
            "First demonstrate that direction vectors (2, 1, −1) and (1, −1, 2) are NOT scalar multiples.",
            "Solve the x- and y-equations for λ and μ, then substitute into the z-equation to show a contradiction.",
            "Compute {{cos θ = |b_1 · b_2| / (|b_1| |b_2|)}}.",
          ],
          modelAnswer:
            "Direction vectors b1 = (2, 1, −1) and b2 = (1, −1, 2) are not scalar multiples (since 2/1 ≠ 1/(−1)), so the lines are not parallel. Equating x and y gives 1 + 2λ = 2 + μ (so μ = 2λ − 1) and −1 + λ = 3 − μ. Substituting yields −1 + λ = 4 − 2λ, so 3λ = 5, hence λ = 5/3 and μ = 7/3. Testing the z-equation: L1 gives 2 − 5/3 = 1/3 whereas L2 gives 0 + 2(7/3) = 14/3. Since 1/3 ≠ 14/3, the lines do not intersect and are therefore skew. For the acute angle, b1 · b2 = 2 − 1 − 2 = −1 and |b1| = |b2| = sqrt(6), giving exact cos θ = |−1| / 6 = 1/6 as a simplified fraction.",
          markScheme: [
            { point: "Shows directions (2, 1, −1) and (1, −1, 2) are not parallel (not scalar multiples)", keywords: ["not scalar multiples", "not parallel", "2/1"] },
            { point: "Sets up and solves x- and y-equations to get λ = 5/3 and μ = 7/3", keywords: ["5/3", "7/3"] },
            { point: "Tests z-component giving contradiction 1/3 ≠ 14/3 and concludes skew", keywords: ["14/3", "1/3", "do not intersect"] },
            { point: "Computes b₁ · b₂ = −1 and |b₁| = |b₂| = √6", keywords: ["sqrt(6)", "√6", "-1"] },
            { point: "Finds exact acute cos θ = 1/6", keywords: ["1/6", "= 1/6"] },
          ],
        },
        {
          id: "3b-vectors-planes-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 6,
          commandTerm: "Find",
          guideRef: "cross-product-planes",
          question:
            "Points A(1, 0, 2), B(3, 1, 1), and C(2, −2, 3) form triangle ABC. (a) Compute **AB** × **AC**. (b) Find the exact area of △ABC. (c) Find the Cartesian equation of the plane containing A, B, and C.",
          hints: [
            "Form **AB** = (2, 1, −1) and **AC** = (1, −2, 1) starting from vertex A.",
            "Keep the unscaled cross product for area: {{(1/2)|AB × AC|}}, then simplify its sign if desired for the plane normal.",
          ],
          modelAnswer:
            "(a) AB = (2, 1, −1) and AC = (1, −2, 1). Their cross product is AB × AC = (1(1) − (−1)(−2), (−1)(1) − 2(1), 2(−2) − 1(1)) = (−1, −3, −5). (b) The magnitude is |AB × AC| = sqrt(1 + 9 + 25) = sqrt(35), so the exact area of triangle ABC is (1/2)sqrt(35). (c) Using normal n = (1, 3, 5) and point A(1, 0, 2), d = 1(1) + 3(0) + 5(2) = 11. Thus the Cartesian equation is x + 3y + 5z = 11.",
          markScheme: [
            { point: "Finds displacement vectors AB = (2, 1, −1) and AC = (1, −2, 1)", keywords: ["(2, 1, -1)", "(1, -2, 1)"] },
            { point: "Computes cross product AB × AC = (−1, −3, −5)", keywords: ["(-1, -3, -5)"] },
            { point: "Computes magnitude |AB × AC| = √35", keywords: ["sqrt(35)", "√35"] },
            { point: "Applies half factor to obtain area = (1/2)√35", keywords: ["(1/2)sqrt(35)", "sqrt(35)/2", "½√35"] },
            { point: "Uses normal (1, 3, 5) (or (−1, −3, −5)) and substitutes A to find d = 11 (or −11)", keywords: ["= 11", "d = 11", "-11"] },
            { point: "Writes Cartesian equation x + 3y + 5z = 11 (or equivalent)", keywords: ["x + 3y + 5z = 11", "-x - 3y - 5z = -11"] },
          ],
          markbands: [
            { band: "Developing", marks: [0, 2], descriptor: "Attempts displacement vectors or cross product with arithmetic or sign errors." },
            { band: "Proficient", marks: [3, 4], descriptor: "Correctly computes AB × AC and completes either the exact triangle area or the Cartesian plane equation." },
            { band: "Mastery", marks: [5, 6], descriptor: "Accurately finds AB × AC, exact area (1/2)√35, and verified Cartesian plane equation x + 3y + 5z = 11." },
          ],
        },
        {
          id: "3b-vectors-planes-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 6,
          commandTerm: "Find",
          guideRef: "intersections-angles-distances",
          question:
            "Plane Π has equation 2x − y + 2z = 12, and point P has coordinates (4, 1, −2). (a) Find the coordinates of the foot of the perpendicular F from P to Π. (b) Hence find the shortest distance from P to Π. (c) State the coordinates of the reflection P' of P in Π.",
          hints: [
            "Write the normal line through P: **r** = (4, 1, −2) + t(2, −1, 2).",
            "Substitute into 2x − y + 2z = 12 to find t = 1 for F, then use t = 2 (or 2F − P) for P'.",
          ],
          modelAnswer:
            "(a) The line through P perpendicular to Π has direction n = (2, −1, 2), so r = (4 + 2t, 1 − t, −2 + 2t). Substituting into 2x − y + 2z = 12 gives 2(4 + 2t) − (1 − t) + 2(−2 + 2t) = 12, which simplifies to 9t + 3 = 12, so t = 1. Thus F = (6, 0, 0). (b) PF = (2, −1, 2), so the shortest distance is |PF| = sqrt(4 + 1 + 4) = sqrt(9) = 3 units. (c) Using OP' = 2OF − OP (or setting t = 2), the reflection is P' = (8, −1, 2).",
          markScheme: [
            { point: "Sets up normal line through P: r = (4, 1, −2) + t(2, −1, 2)", keywords: ["4 + 2t", "1 - t", "-2 + 2t"] },
            { point: "Substitutes into plane equation and simplifies to 9t + 3 = 12", keywords: ["9t + 3", "9t = 9"] },
            { point: "Solves t = 1 and finds foot F(6, 0, 0)", keywords: ["(6, 0, 0)", "t = 1"] },
            { point: "Computes PF = (2, −1, 2)", keywords: ["pf = (2, -1, 2)", "(2, -1, 2)"] },
            { point: "Finds shortest distance |PF| = 3", keywords: ["= 3", "sqrt(9)"] },
            { point: "Finds reflection P'(8, −1, 2)", keywords: ["(8, -1, 2)"] },
          ],
          markbands: [
            { band: "Developing", marks: [0, 2], descriptor: "Sets up the perpendicular line using the plane normal but makes algebraic errors finding t." },
            { band: "Proficient", marks: [3, 4], descriptor: "Correctly determines foot F(6, 0, 0) and either the distance or the reflection." },
            { band: "Mastery", marks: [5, 6], descriptor: "Accurately finds F(6, 0, 0), exact shortest distance 3, and reflection P'(8, −1, 2)." },
          ],
        },
        {
          id: "3b-vectors-planes-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          marks: 7,
          commandTerm: "Find",
          guideRef: "intersections-angles-distances",
          question:
            "Find a vector equation of the line of intersection L of the planes Π₁: x + y − 2z = 5 and Π₂: 2x − y + z = 4. Hence find the point where L intersects the plane Π₃: x + 2y + z = 21, and describe the geometric configuration of the three planes.",
          hints: [
            "Find the direction vector of L using **b** = **n**₁ × **n**₂ = (1, 1, −2) × (2, −1, 1).",
            "Set z = 0 in Π₁ and Π₂ to obtain one common point (3, 2, 0).",
            "Substitute the parametric form of L into Π₃ to solve for λ.",
          ],
          modelAnswer:
            "The normals are n1 = (1, 1, −2) and n2 = (2, −1, 1). A direction vector for L is n1 × n2 = (1 − 2, −4 − 1, −1 − 2) = (−1, −5, −3), or equivalently b = (1, 5, 3). Setting z = 0 gives x + y = 5 and 2x − y = 4; adding gives 3x = 9, so x = 3 and y = 2, giving anchor point (3, 2, 0). Hence L has vector equation r = (3, 2, 0) + λ(1, 5, 3). Substituting (3 + λ, 2 + 5λ, 3λ) into Π3: (3 + λ) + 2(2 + 5λ) + 3λ = 21 gives 14λ + 7 = 21, so λ = 1. The intersection point is (4, 7, 3). Geometrically, the three planes meet at a single unique point.",
          markScheme: [
            { point: "Computes direction b = n₁ × n₂ = (−1, −5, −3) or (1, 5, 3)", keywords: ["(1, 5, 3)", "(-1, -5, -3)"] },
            { point: "Sets one coordinate (e.g. z = 0) and solves 2×2 system for a common point (3, 2, 0)", keywords: ["(3, 2, 0)", "3x = 9"] },
            { point: "States valid vector equation r = (3, 2, 0) + λ(1, 5, 3)", keywords: ["r = (3, 2, 0)", "+ λ(1, 5, 3)"] },
            { point: "Substitutes parametric line into Π₃", keywords: ["(3 + λ)", "2(2 + 5λ)", "14λ + 7"] },
            { point: "Solves for λ = 1", keywords: ["λ = 1", "14λ = 14"] },
            { point: "Obtains unique intersection point (4, 7, 3)", keywords: ["(4, 7, 3)"] },
            { point: "Describes geometric configuration as intersecting at a single unique point", keywords: ["unique point", "single point"] },
          ],
          markbands: [
            { band: "Developing", marks: [0, 2], descriptor: "Attempts cross product or elimination to find L with significant arithmetic slips." },
            { band: "Proficient", marks: [3, 5], descriptor: "Correctly determines line L and attempts substitution into Π₃ with minor errors." },
            { band: "Mastery", marks: [6, 7], descriptor: "Correctly derives L, finds intersection (4, 7, 3), and states the unique-point 3-plane configuration." },
          ],
        },
        {
          id: "3b-vectors-planes-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          marks: 8,
          commandTerm: "Determine",
          guideRef: "intersections-angles-distances",
          question:
            "Consider the system of three planes: Π₁: x + 2y − z = 3, Π₂: 2x + y + z = 6, Π₃: 3x + 3y + kz = m, where k, m ∈ ℝ. (a) By row reduction, find the value of k for which the system does not have a unique solution. (b) Find the value of m for which the three planes form a sheaf, and find a vector equation of their common line. (c) Describe the geometric configuration when k takes the value from (a) and m ≠ 9.",
          hints: [
            "Eliminate x using R₂ ← R₂ − 2R₁ and R₃ ← R₃ − 3R₁, then eliminate y using R₃ ← R₃ − R₂.",
            "Examine the final row [0, 0, k | m − 9] to separate unique, sheaf (0 = 0), and inconsistent (0 = m − 9 ≠ 0) cases.",
            "Check pairwise proportionality of normals (1, 2, −1), (2, 1, 1), and (3, 3, 0) in part (c).",
          ],
          modelAnswer:
            "(a) Row reducing the augmented matrix: R2 ← R2 − 2R1 gives [0, −3, 3 | 0] (i.e. y = z); R3 ← R3 − 3R1 gives [0, −3, k + 3 | m − 9]. Then R3 ← R3 − R2 yields final row [0, 0, k | m − 9]. There is no unique solution when k = 0. (b) For a sheaf (infinitely many solutions along a line), the final row must be 0 = 0, so m − 9 = 0 ⇒ m = 9. Setting z = λ gives y = λ and x = 3 − 2λ + λ = 3 − λ, so the common line has vector equation r = (3, 0, 0) + λ(−1, 1, 1). (c) When k = 0 and m ≠ 9, the system is inconsistent (0 = m − 9 ≠ 0). Since no two normal vectors (1, 2, −1), (2, 1, 1), (3, 3, 0) are parallel, the three planes form a triangular prism (meeting pairwise in three distinct parallel lines).",
          markScheme: [
            { point: "Eliminates x correctly to get R₂: [0, −3, 3 | 0] and R₃: [0, −3, k + 3 | m − 9]", keywords: ["-3, 3", "k + 3", "m - 9"] },
            { point: "Eliminates y to obtain final row [0, 0, k | m − 9]", keywords: ["0, 0, k", "k = 0"] },
            { point: "Concludes no unique solution when k = 0", keywords: ["k = 0"] },
            { point: "Identifies m = 9 for consistency (0 = 0, sheaf)", keywords: ["m = 9", "0 = 0"] },
            { point: "Parameterises z = λ ⇒ y = λ and x = 3 − λ", keywords: ["3 - λ", "y = λ"] },
            { point: "Writes vector equation of common line r = (3, 0, 0) + λ(−1, 1, 1)", keywords: ["(3, 0, 0)", "(-1, 1, 1)"] },
            { point: "Notes inconsistency when m ≠ 9 AND checks no two normals are parallel", keywords: ["inconsistent", "no two normal", "not parallel"] },
            { point: "Identifies exact configuration as a triangular prism", keywords: ["triangular prism"] },
          ],
          markbands: [
            { band: "Developing", marks: [0, 2], descriptor: "Attempts row reduction or determinant calculation with partial progress toward k." },
            { band: "Proficient", marks: [3, 5], descriptor: "Finds k = 0 and m = 9 accurately, with partial work on the common line or prism justification." },
            { band: "Mastery", marks: [6, 8], descriptor: "Completes full row reduction, derives the common line r = (3, 0, 0) + λ(−1, 1, 1), and rigorously justifies the triangular prism configuration." },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2: Technology-Enabled HL (9 ShortQs + 6 WrittenQs)
    // -------------------------------------------------------------------------
    {
      id: "3b-vectors-planes-p2",
      title: "HL Practice Paper 2: Technology-Enabled 3D Geometry & Planes",
      level: "HL",
      questions: [
        {
          id: "3b-vectors-planes-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "vectors-dot-product",
          question:
            "Calculate the angle θ (in degrees, to 3 significant figures) between the vectors **u** = (1, 2, 2) and **v** = (2, 3, 6).",
          answer: { type: "number", value: 17.8, tolerance: 0.1 },
          hints: [
            "Compute **u** · **v** = 20, |**u**| = 3, and |**v**| = 7.",
            "Evaluate arccos(20/21) in degree mode and round to 3 s.f.",
          ],
          solution: [
            "**u** · **v** = 1(2) + 2(3) + 2(6) = 20, |**u**| = 3, |**v**| = 7.",
            "{{cos θ = 20/21}} ⇒ θ = arccos(20/21) = 17.7528...° ≈ 17.8°.",
          ],
        },
        {
          id: "3b-vectors-planes-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "vectors-dot-product",
          question:
            "An autonomous drone flies with constant 3D velocity **v** = (4, −12, 3) m/s. Find its exact speed in m/s.",
          answer: { type: "number", value: 13 },
          hints: [
            "Speed is the magnitude |**v**| of the velocity vector.",
            "Evaluate {{sqrt(4^2 + (-12)^2 + 3^2)}}.",
          ],
          solution: [
            "Speed = |**v**| = {{sqrt(16 + 144 + 9) = sqrt(169) = 13}} m/s.",
          ],
        },
        {
          id: "3b-vectors-planes-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "vector-lines-skew",
          question:
            "Two aircraft follow constant-velocity paths **r**_A(t) = (2, 0, 5) + t(1, 2, −1) and **r**_B(t) = (8, −2, 1) + t(−1, 3, 0) (distances in km, t ≥ 0 in minutes). Find the minimum distance between the two aircraft in km, giving your answer to 3 significant figures.",
          answer: { type: "number", value: 1.41, tolerance: 0.015 },
          hints: [
            "Form relative displacement **d**(t) = **r**_B(t) − **r**_A(t) = (6 − 2t, −2 + t, −4 + t).",
            "Solve **d**(t) · (−2, 1, 1) = 0 to find t = 3 minutes, then compute |**d**(3)|.",
          ],
          solution: [
            "**d**(t) = (6 − 2t, −2 + t, −4 + t), with relative velocity **v**_rel = (−2, 1, 1).",
            "Closest approach: **d**(t) · **v**_rel = −2(6 − 2t) + (−2 + t) + (−4 + t) = 6t − 18 = 0 ⇒ t = 3 min.",
            "**d**(3) = (0, 1, −1), so minimum distance = {{sqrt(0 + 1 + 1) = sqrt(2) ≈ 1.41}} km.",
          ],
        },
        {
          id: "3b-vectors-planes-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "cross-product-planes",
          question:
            "Find the exact area of triangle ABC with vertices A(1, 2, −1), B(5, −1, −1), and C(1, 5, −2). Give your answer as an exact decimal or fraction.",
          answer: { type: "number", value: 6.5 },
          traps: [
            {
              spec: { type: "number", value: 13 },
              feedback: "13 is the parallelogram area |AB × AC| — remember the factor of ½ for a triangle!",
            },
          ],
          hints: [
            "Form **AB** = (4, −3, 0) and **AC** = (0, 3, −1).",
            "Compute **AB** × **AC** = (3, 4, 12), take its magnitude (13), and halve it.",
          ],
          solution: [
            "**AB** = (4, −3, 0), **AC** = (0, 3, −1).",
            "**AB** × **AC** = (3, 4, 12), with |**AB** × **AC**| = {{sqrt(9 + 16 + 144) = 13}}.",
            "Area of △ABC = {{(1/2) * 13 = 6.5}}.",
          ],
        },
        {
          id: "3b-vectors-planes-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "cross-product-planes",
          question:
            "A plane contains point A(1, −2, 3) and is perpendicular to the vector joining P(2, 1, −1) to Q(5, −1, 3). Written in the form 3x − 2y + 4z = d, find the exact integer value of d.",
          answer: { type: "number", value: 19 },
          hints: [
            "Verify **PQ** = (3, −2, 4) matches the normal coefficients in 3x − 2y + 4z = d.",
            "Substitute A(1, −2, 3) to compute d = **a** · **n**.",
          ],
          solution: [
            "**n** = **PQ** = (5 − 2, −1 − 1, 3 − (−1)) = (3, −2, 4).",
            "d = 3(1) − 2(−2) + 4(3) = 3 + 4 + 12 = 19.",
          ],
        },
        {
          id: "3b-vectors-planes-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "intersections-angles-distances",
          question:
            "Calculate the acute angle (in degrees, to 3 significant figures) between the line **r** = (1, 2, 0) + λ(2, −3, 6) and the plane x − 2y + 2z = 7.",
          answer: { type: "number", value: 72.2, tolerance: 0.15 },
          traps: [
            {
              spec: { type: "number", value: 17.8, tolerance: 0.15 },
              feedback: "17.8° is the angle between the line and the plane NORMAL! Line–plane angle uses arcsin (90° − 17.8° = 72.2°).",
            },
          ],
          hints: [
            "Use {{sin α = |b · n| / (|b| |n|)}} with **b** = (2, −3, 6) and **n** = (1, −2, 2).",
            "Evaluate arcsin(20/21) in degrees to 3 s.f.",
          ],
          solution: [
            "**b** · **n** = 2(1) + (−3)(−2) + 6(2) = 20, |**b**| = 7, |**n**| = 3.",
            "{{sin α = 20/21}} ⇒ α = arcsin(20/21) = 72.247...° ≈ 72.2°.",
          ],
        },
        {
          id: "3b-vectors-planes-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "intersections-angles-distances",
          question:
            "Calculate the acute dihedral angle (in degrees, to 3 significant figures) between the planes 2x + y − 2z = 4 and 3x − 4y + 12z = 5.",
          answer: { type: "number", value: 55.7, tolerance: 0.15 },
          traps: [
            {
              spec: { type: "number", value: 124, tolerance: 0.5 },
              feedback: "Take the absolute value |n₁ · n₂| so you obtain the ACUTE angle (55.7°, not 124.3°).",
            },
          ],
          hints: [
            "Normals are **n**₁ = (2, 1, −2) (length 3) and **n**₂ = (3, −4, 12) (length 13).",
            "Compute {{cos φ = |-22| / (3 * 13) = 22/39}} and evaluate arccos(22/39) in degrees.",
          ],
          solution: [
            "**n**₁ · **n**₂ = 6 − 4 − 24 = −22, |**n**₁| = 3, |**n**₂| = 13.",
            "{{cos φ = 22/39}} ⇒ φ = arccos(22/39) = 55.660...° ≈ 55.7°.",
          ],
        },
        {
          id: "3b-vectors-planes-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "intersections-angles-distances",
          question:
            "Find the exact shortest distance between the parallel planes 3x − 4y + 12z = 10 and 6x − 8y + 24z = −32.",
          answer: { type: "number", value: 2 },
          hints: [
            "Divide the second plane equation by 2 so both share normal (3, −4, 12).",
            "Apply {{D = |d_1 - d_2| / |n|}} with |**n**| = 13.",
          ],
          solution: [
            "Dividing the second equation by 2 gives 3x − 4y + 12z = −16.",
            "|**n**| = {{sqrt(9 + 16 + 144) = 13}}, so D = |10 − (−16)| / 13 = 26 / 13 = 2.",
          ],
        },
        {
          id: "3b-vectors-planes-p2-q09",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "intersections-angles-distances",
          question:
            "Find the exact shortest distance between the skew lines L₁: **r** = (2, 1, −1) + λ(3, −2, 0) and L₂: **r** = (4, 3, 2) + μ(0, 2, −1).",
          answer: { type: "number", value: 4 },
          hints: [
            "Compute common normal **n** = (3, −2, 0) × (0, 2, −1) = (2, 3, 6) (length 7).",
            "Use {{D = |(a_2 - a_1) · n| / |n|}} with **a**₂ − **a**₁ = (2, 2, 3).",
          ],
          solution: [
            "**n** = **b**₁ × **b**₂ = (2, 3, 6), with |**n**| = 7.",
            "**a**₂ − **a**₁ = (2, 2, 3), so (**a**₂ − **a**₁) · **n** = 4 + 6 + 18 = 28.",
            "Shortest distance D = 28 / 7 = 4.",
          ],
        },
        {
          id: "3b-vectors-planes-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 4,
          commandTerm: "Show that",
          guideRef: "vectors-dot-product",
          question:
            "Triangle ABC has vertices A(2, 1, −1), B(4, 3, 0), and C(−2, 3, 3). (a) Show that ∠BAC = 90°. (b) Hence find the exact area of △ABC.",
          hints: [
            "Compute **AB** and **AC** starting from A, then take their dot product.",
            "Since △ABC is right-angled at A, its area is ½ |**AB**| |**AC**|.",
          ],
          modelAnswer:
            "(a) AB = (2, 2, 1) and AC = (−4, 2, 4). Their dot product is AB · AC = 2(−4) + 2(2) + 1(4) = −8 + 4 + 4 = 0. Since both vectors are non-zero, AB is perpendicular to AC, so ∠BAC = 90°. (b) |AB| = sqrt(4 + 4 + 1) = 3 and |AC| = sqrt(16 + 4 + 16) = 6, so the exact area of triangle ABC is (1/2)(3)(6) = 9 square units.",
          markScheme: [
            { point: "Finds AB = (2, 2, 1) and AC = (−4, 2, 4)", keywords: ["(2, 2, 1)", "(-4, 2, 4)"] },
            { point: "Shows AB · AC = −8 + 4 + 4 = 0 and concludes ∠BAC = 90°", keywords: ["-8 + 4 + 4", "perpendicular"] },
            { point: "Computes lengths |AB| = 3 and |AC| = 6", keywords: ["= 3", "= 6"] },
            { point: "Calculates exact area = (1/2)(3)(6) = 9", keywords: ["= 9", "(1/2)(3)(6)"] },
          ],
        },
        {
          id: "3b-vectors-planes-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 5,
          commandTerm: "Determine",
          guideRef: "vector-lines-skew",
          question:
            "Two survey drones move with constant velocities (coordinates in metres, t ≥ 0 in seconds): **r**_A(t) = (5, 10, 14) + t(1, 0, −1) and **r**_B(t) = (2, 1, 2) + t(2, 2, 1). (a) Determine whether the two drones collide. (b) Find the exact time t when they are closest together and their exact minimum separation.",
          hints: [
            "Form relative displacement **d**(t) = **r**_B(t) − **r**_A(t) = (−3 + t, −9 + 2t, −12 + 2t).",
            "For collision, all three components of **d**(t) must vanish at the SAME t.",
            "For closest approach, solve **d**(t) · **v**_rel = 0 (or minimise |**d**(t)|²).",
          ],
          modelAnswer:
            "(a) Relative displacement is d(t) = r_B(t) − r_A(t) = (−3 + t, −9 + 2t, −12 + 2t). For x-components to match, −3 + t = 0 gives t = 3 s. At t = 3, the y-separation is −9 + 6 = −3 ≠ 0, so the drones do not collide. (b) Relative velocity is v_rel = (1, 2, 2). Closest approach occurs when d(t) · v_rel = 0: (−3 + t)(1) + (−9 + 2t)(2) + (−12 + 2t)(2) = 9t − 45 = 0, giving t = 5 s. At t = 5, d(5) = (2, 1, −2), so the minimum separation is |d(5)| = sqrt(4 + 1 + 4) = 3 metres.",
          markScheme: [
            { point: "Forms relative displacement d(t) = (−3 + t, −9 + 2t, −12 + 2t)", keywords: ["-3 + t", "-9 + 2t", "-12 + 2t"] },
            { point: "Proves no collision by testing t = 3 in another component (e.g. y = −3 ≠ 0)", keywords: ["t = 3", "do not collide", "not collide"] },
            { point: "Sets up d(t) · v_rel = 0 (or d/dt(D²) = 0) giving 9t − 45 = 0", keywords: ["9t - 45", "9t = 45", "(1, 2, 2)"] },
            { point: "Finds closest approach time t = 5 s", keywords: ["t = 5"] },
            { point: "Computes d(5) = (2, 1, −2) and exact minimum separation = 3 m", keywords: ["(2, 1, -2)", "3 metres", "= 3"] },
          ],
        },
        {
          id: "3b-vectors-planes-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 6,
          commandTerm: "Find",
          guideRef: "cross-product-planes",
          question:
            "Plane Π contains the two parallel lines L₁: **r** = (1, 0, 2) + λ(2, −1, 1) and L₂: **r** = (3, 2, 1) + μ(2, −1, 1). (a) Explain why **b**₁ × **b**₂ cannot be used to find a normal to Π. (b) Find a Cartesian equation for Π. (c) Find the exact shortest distance between L₁ and L₂ (and give its value to 3 s.f.).",
          hints: [
            "What is the cross product of two parallel (identical) vectors?",
            "Form the connecting vector **A**₁**A**₂ = (2, 2, −1) between the two lines, then take **b** × **A**₁**A**₂.",
            "The distance between parallel lines is {{|A_1 A_2 × b| / |b|}}.",
          ],
          modelAnswer:
            "(a) Because the two direction vectors are equal (parallel), their cross product is the zero vector (0, 0, 0), which defines no normal direction. (b) Form a second in-plane vector joining A1(1, 0, 2) to A2(3, 2, 1): A1A2 = (2, 2, −1). A normal to Π is n = (2, −1, 1) × (2, 2, −1) = (−1, 4, 6), or equivalently (1, −4, −6). Substituting A1(1, 0, 2) gives d = 1 − 0 − 12 = −11, so Π has Cartesian equation x − 4y − 6z = −11. (c) Shortest distance between parallel lines is |A1A2 × b| / |b| = |(−1, 4, 6)| / |(2, −1, 1)| = sqrt(53) / sqrt(6) = sqrt(53/6) ≈ 2.97.",
          markScheme: [
            { point: "Explains b₁ × b₂ = (0, 0, 0) (zero vector) because directions are parallel", keywords: ["zero vector", "(0, 0, 0)"] },
            { point: "Forms connecting vector A₁A₂ = (2, 2, −1)", keywords: ["(2, 2, -1)"] },
            { point: "Computes cross product n = (−1, 4, 6) (or (1, −4, −6))", keywords: ["(-1, 4, 6)", "(1, -4, -6)"] },
            { point: "Finds Cartesian equation x − 4y − 6z = −11 (or −x + 4y + 6z = 11)", keywords: ["x - 4y - 6z = -11", "-x + 4y + 6z = 11"] },
            { point: "Computes |A₁A₂ × b| = √53 and |b| = √6", keywords: ["sqrt(53)", "√53", "sqrt(6)"] },
            { point: "Finds exact distance √(53/6) ≈ 2.97", keywords: ["2.97", "sqrt(53/6)"] },
          ],
          markbands: [
            { band: "Developing", marks: [0, 2], descriptor: "Identifies why b₁ × b₂ fails or finds A₁A₂, but struggles with the cross product or plane equation." },
            { band: "Proficient", marks: [3, 4], descriptor: "Derives the Cartesian equation of Π accurately, with partial progress on the inter-line distance." },
            { band: "Mastery", marks: [5, 6], descriptor: "Clearly explains the zero cross product, finds x − 4y − 6z = −11, and computes exact distance √(53/6) ≈ 2.97." },
          ],
        },
        {
          id: "3b-vectors-planes-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 7,
          commandTerm: "Find",
          guideRef: "intersections-angles-distances",
          question:
            "A laser beam starts at source A(1, −2, 4) and travels along line L: **r** = (1, −2, 4) + λ(2, 1, −2) until it hits a flat glass panel lying in plane Π: 2x + 3y + 6z = 10. (a) Find the coordinates of the impact point I. (b) Calculate the acute angle α (in degrees, to 3 s.f.) between the laser beam and the glass panel. (c) Find the exact shortest perpendicular distance from source A to Π and verify it equals |**AI**| sin α.",
          hints: [
            "Substitute (1 + 2λ, −2 + λ, 4 − 2λ) into 2x + 3y + 6z = 10 to find λ = 2.",
            "Remember the line–plane angle uses sin α = |**b** · **n**| / (|**b**||**n**|).",
            "Compare the point-to-plane distance formula against |**AI**| sin α.",
          ],
          modelAnswer:
            "(a) Substituting x = 1 + 2λ, y = −2 + λ, z = 4 − 2λ into 2x + 3y + 6z = 10 gives 2 + 4λ − 6 + 3λ + 24 − 12λ = 10 ⇒ 20 − 5λ = 10 ⇒ λ = 2. Hence the impact point is I(5, 0, 0). (b) With b = (2, 1, −2) (|b| = 3) and n = (2, 3, 6) (|n| = 7), b · n = 4 + 3 − 12 = −5. Thus sin α = |−5| / (3 × 7) = 5/21, giving α = arcsin(5/21) ≈ 13.8°. (c) By the point-to-plane formula, D = |2(1) + 3(−2) + 6(4) − 10| / 7 = |2 − 6 + 24 − 10| / 7 = 10/7. Verification: AI = (4, 2, −4) has length |AI| = 6, so |AI| sin α = 6 × (5/21) = 30/21 = 10/7, matching D exactly.",
          markScheme: [
            { point: "Substitutes parametric line into Π and simplifies to 20 − 5λ = 10", keywords: ["20 - 5λ", "λ = 2"] },
            { point: "Finds impact point I(5, 0, 0)", keywords: ["(5, 0, 0)"] },
            { point: "Computes b · n = −5, |b| = 3, |n| = 7", keywords: ["-5", "|b| = 3", "|n| = 7"] },
            { point: "Applies sin α = 5/21 (not cos)", keywords: ["5/21", "arcsin"] },
            { point: "Calculates α ≈ 13.8°", keywords: ["13.8"] },
            { point: "Computes exact point-to-plane distance D = 10/7", keywords: ["10/7"] },
            { point: "Verifies |AI| = 6 and |AI| sin α = 6 × (5/21) = 10/7", keywords: ["|ai| = 6", "30/21"] },
          ],
          markbands: [
            { band: "Developing", marks: [0, 2], descriptor: "Finds λ or impact point I, with errors in angle formula (e.g. using arccos) or distance." },
            { band: "Proficient", marks: [3, 5], descriptor: "Correctly finds I(5, 0, 0) and acute angle 13.8°, with partial work on the distance verification." },
            { band: "Mastery", marks: [6, 7], descriptor: "Accurately finds I(5, 0, 0), α = 13.8°, D = 10/7, and cleanly verifies D = |AI| sin α." },
          ],
        },
        {
          id: "3b-vectors-planes-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          marks: 7,
          commandTerm: "Find",
          guideRef: "intersections-angles-distances",
          question:
            "Planes Π₁: x + 2y + 2z = 9 and Π₂: 2x − y + 2z = 6 intersect in a straight line L. (a) Calculate the acute dihedral angle between Π₁ and Π₂ in degrees to 3 s.f. (b) Find a vector equation for L. (c) Find the exact Cartesian equation of the plane Π₃ that contains L and passes through the origin O(0, 0, 0).",
          hints: [
            "For (a), compute {{cos φ = |n_1 · n_2| / (|n_1| |n_2|)}} with **n**₁ = (1, 2, 2) and **n**₂ = (2, −1, 2).",
            "For (b), **b** = **n**₁ × **n**₂ = (6, 2, −5), and check that (3, 2, 1) lies on both planes.",
            "For (c), either take **OA** × **b** OR eliminate the constant term using 2Π₁ − 3Π₂ = 0!",
          ],
          modelAnswer:
            "(a) Normals are n1 = (1, 2, 2) and n2 = (2, −1, 2), each of length 3. Their dot product is n1 · n2 = 2 − 2 + 4 = 4, so cos φ = 4/9 and φ = arccos(4/9) ≈ 63.6°. (b) Direction vector of L is b = n1 × n2 = (4 − (−2), 4 − 2, −1 − 4) = (6, 2, −5). Setting y = 2 gives x + 2z = 5 and 2x + 2z = 8, yielding x = 3 and z = 1, so point A(3, 2, 1) lies on both planes. Thus L: r = (3, 2, 1) + λ(6, 2, −5). (c) Forming the linear combination 2Π1 − 3Π2 cancels the constant terms: 2(x + 2y + 2z) − 3(2x − y + 2z) = 18 − 18 = 0, giving −4x + 7y − 2z = 0, or 4x − 7y + 2z = 0 (equivalently n3 = (3, 2, 1) × (6, 2, −5) = (−12, 21, −6), simplifying to (4, −7, 2)).",
          markScheme: [
            { point: "Computes n₁ · n₂ = 4 and |n₁| = |n₂| = 3", keywords: ["4/9", "length 3"] },
            { point: "Calculates acute dihedral angle φ ≈ 63.6°", keywords: ["63.6"] },
            { point: "Finds direction b = n₁ × n₂ = (6, 2, −5)", keywords: ["(6, 2, -5)"] },
            { point: "Finds a verified point on both planes (e.g. (3, 2, 1))", keywords: ["(3, 2, 1)"] },
            { point: "Writes vector equation L: r = (3, 2, 1) + λ(6, 2, −5)", keywords: ["r = (3, 2, 1)", "+ λ(6, 2, -5)"] },
            { point: "Finds normal (4, −7, 2) via OA × b or 2Π₁ − 3Π₂", keywords: ["(4, -7, 2)", "(-12, 21, -6)", "2π1 - 3π2"] },
            { point: "Writes Cartesian equation 4x − 7y + 2z = 0 (or −4x + 7y − 2z = 0)", keywords: ["4x - 7y + 2z = 0", "-4x + 7y - 2z = 0"] },
          ],
          markbands: [
            { band: "Developing", marks: [0, 2], descriptor: "Computes the dihedral angle accurately or begins finding L." },
            { band: "Proficient", marks: [3, 5], descriptor: "Correctly finds dihedral angle 63.6° and line L, with partial work on Π₃." },
            { band: "Mastery", marks: [6, 7], descriptor: "Accurately completes all three parts, deriving 4x − 7y + 2z = 0 with clear justification." },
          ],
        },
        {
          id: "3b-vectors-planes-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          marks: 8,
          commandTerm: "Determine",
          guideRef: "intersections-angles-distances",
          question:
            "Two industrial pipelines lie along L₁: **r** = (1, 2, 0) + λ(1, 0, −1) and L₂: **r** = (4, −1, 0) + μ(0, 1, 1). (a) Verify that L₁ and L₂ are skew. (b) Find the coordinates of points P ∈ L₁ and Q ∈ L₂ such that **PQ** is perpendicular to both L₁ and L₂. (c) Hence find the exact shortest distance between the pipelines and confirm it via the skew-line cross-product formula.",
          hints: [
            "For (a), check directions are not parallel, solve x and y to get λ = 3, μ = 3, and show z gives a contradiction (−3 ≠ 3).",
            "For (b), write **PQ** = (3 − λ, −3 + μ, λ + μ), then solve **PQ** · (1, 0, −1) = 0 and **PQ** · (0, 1, 1) = 0 simultaneously.",
            "For (c), compute |**PQ**| and verify against {{|(a_2 - a_1) · (b_1 × b_2)| / |b_1 × b_2|}}.",
          ],
          modelAnswer:
            "(a) Directions b1 = (1, 0, −1) and b2 = (0, 1, 1) are not scalar multiples. Equating x and y gives 1 + λ = 4 ⇒ λ = 3 and 2 = −1 + μ ⇒ μ = 3. In z, L1 gives −3 whereas L2 gives +3; since −3 ≠ 3, the lines are skew. (b) Let P(1 + λ, 2, −λ) and Q(4, −1 + μ, μ), so PQ = (3 − λ, −3 + μ, λ + μ). Setting PQ · b1 = 0 gives (3 − λ) − (λ + μ) = 0 ⇒ 2λ + μ = 3. Setting PQ · b2 = 0 gives (−3 + μ) + (λ + μ) = 0 ⇒ λ + 2μ = 3. Solving simultaneously yields λ = 1 and μ = 1, giving P(2, 2, −1) and Q(4, 0, 1). (c) PQ = (2, −2, 2), so shortest distance is |PQ| = sqrt(4 + 4 + 4) = 2sqrt(3). Check via cross product: b1 × b2 = (1, −1, 1) (length sqrt(3)) and a2 − a1 = (3, −3, 0), giving D = |(3, −3, 0) · (1, −1, 1)| / sqrt(3) = 6 / sqrt(3) = 2sqrt(3).",
          markScheme: [
            { point: "Shows directions are not parallel and solves x, y to get λ = 3, μ = 3", keywords: ["λ = 3", "μ = 3", "not scalar multiples"] },
            { point: "Demonstrates z-contradiction (−3 ≠ 3) to confirm skew", keywords: ["-3 ≠ 3", "z gives -3", "-3"] },
            { point: "Forms general connecting vector PQ = (3 − λ, −3 + μ, λ + μ)", keywords: ["3 - λ", "-3 + μ", "λ + μ"] },
            { point: "Derives simultaneous equations 2λ + μ = 3 and λ + 2μ = 3", keywords: ["2λ + μ = 3", "λ + 2μ = 3"] },
            { point: "Solves λ = 1, μ = 1 and states endpoints P(2, 2, −1) and Q(4, 0, 1)", keywords: ["(2, 2, -1)", "(4, 0, 1)"] },
            { point: "Computes exact shortest distance |PQ| = 2√3 (or √12)", keywords: ["2sqrt(3)", "2√3", "sqrt(12)", "√12"] },
            { point: "Computes b₁ × b₂ = (1, −1, 1) with magnitude √3", keywords: ["(1, -1, 1)", "sqrt(3)"] },
            { point: "Confirms D = 6/√3 = 2√3 via projection formula", keywords: ["6 / sqrt(3)", "6/sqrt(3)", "6/√3"] },
          ],
          markbands: [
            { band: "Developing", marks: [0, 2], descriptor: "Verifies skew lines or forms PQ, with incomplete orthogonal equations." },
            { band: "Proficient", marks: [3, 5], descriptor: "Verifies skew lines and solves for endpoints P and Q, with minor errors in the distance or verification." },
            { band: "Mastery", marks: [6, 8], descriptor: "Rigorously verifies skew, determines P(2, 2, −1) and Q(4, 0, 1), and confirms exact distance 2√3 by both methods." },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 HL Challenge Qs: 3 ShortQs + 5 WrittenQs with markbands)
  // ===========================================================================
  challenge: [
    {
      id: "3b-vectors-planes-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Find",
      guideRef: "vectors-dot-product",
      question:
        "Two non-zero vectors **a** and **b** satisfy |**a**| = 3, |**b**| = 4, and {{|a + b| = sqrt(37)}}. Find the exact angle θ between **a** and **b** in degrees.",
      answer: { type: "number", value: 60 },
      hints: [
        "Square both sides: {{|a + b|^2 = |a|^2 + 2(a · b) + |b|^2 = 37}}.",
        "Solve for **a** · **b** = 6, then compute {{cos θ = (a · b) / (|a| |b|)}}.",
      ],
      solution: [
        "{{|a + b|^2 = 3^2 + 2(a · b) + 4^2 = 37}} ⇒ 25 + 2(**a** · **b**) = 37 ⇒ **a** · **b** = 6.",
        "{{cos θ = 6 / (3 * 4) = 1/2}} ⇒ θ = 60°.",
      ],
    },
    {
      id: "3b-vectors-planes-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "cross-product-planes",
      question:
        "Tetrahedron OABC has edges **OA** = (2, 1, 0), **OB** = (1, 3, −1), and **OC** = (0, 2, 4). Using the scalar triple product volume formula {{V = (1/6) |OA · (OB × OC)|}}, find the exact volume of tetrahedron OABC.",
      answer: { type: "number", value: 4 },
      traps: [
        {
          spec: { type: "number", value: 24 },
          feedback: "24 is the volume of the full parallelepiped — divide by 6 for a tetrahedron!",
        },
      ],
      hints: [
        "First compute **OB** × **OC** = (1, 3, −1) × (0, 2, 4) = (14, −4, 2).",
        "Take the dot product with **OA** = (2, 1, 0), then divide the absolute value by 6.",
      ],
      solution: [
        "**OB** × **OC** = (3(4) − (−1)(2), (−1)(0) − 1(4), 1(2) − 3(0)) = (14, −4, 2).",
        "**OA** · (**OB** × **OC**) = 2(14) + 1(−4) + 0(2) = 24.",
        "Volume V = |24| / 6 = 4 cubic units.",
      ],
    },
    {
      id: "3b-vectors-planes-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Find",
      guideRef: "intersections-angles-distances",
      question:
        "Two parallel planes 2x + y − 2z = 5 and 2x + y − 2z = k (with k > 5) are separated by a perpendicular distance of exactly 4 units. Find the exact value of k.",
      answer: { type: "number", value: 17 },
      traps: [
        {
          spec: { type: "number", value: -7 },
          feedback: "k = −7 also gives distance 4, but the question specifies k > 5.",
        },
      ],
      hints: [
        "Both planes already share the normal **n** = (2, 1, −2) of length 3.",
        "Solve {{|k - 5| / 3 = 4}} with k > 5.",
      ],
      solution: [
        "|**n**| = {{sqrt(4 + 1 + 4) = 3}}.",
        "{{|k - 5| / 3 = 4}} ⇒ |k − 5| = 12. Since k > 5, k − 5 = 12 ⇒ k = 17.",
      ],
    },
    {
      id: "3b-vectors-planes-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 6,
      commandTerm: "Prove",
      guideRef: "vectors-dot-product",
      question:
        "In triangle ABC, let the origin O be placed at the intersection of the altitudes from A and B, so that **OA** ⊥ **BC** and **OB** ⊥ **CA**. Letting **OA** = **a**, **OB** = **b**, and **OC** = **c**, prove using the scalar product that the third altitude also passes through O (i.e. **OC** ⊥ **AB**).",
      hints: [
        "Translate **OA** ⊥ **BC** into **a** · (**c** − **b**) = 0, and **OB** ⊥ **CA** into **b** · (**a** − **c**) = 0.",
        "Expand both equations using distributivity and commutativity (**a** · **b** = **b** · **a**).",
        "Add or equate the expressions to deduce **c** · (**b** − **a**) = 0.",
      ],
      modelAnswer:
        "Express the opposite sides as BC = c − b, CA = a − c, and AB = b − a. Since OA ⊥ BC, a · (c − b) = 0, so a · c − a · b = 0, meaning a · c = a · b. Since OB ⊥ CA, b · (a − c) = 0, so b · a − b · c = 0, meaning b · c = b · a. By commutativity of the dot product, a · b = b · a, hence a · c = b · c. Rearranging gives c · b − c · a = 0, so c · (b − a) = 0, which is OC · AB = 0. Therefore OC ⊥ AB, proving all three altitudes are concurrent at the orthocentre O.",
      markScheme: [
        { point: "Writes side vectors BC = c − b, CA = a − c, AB = b − a", keywords: ["c - b", "a - c", "b - a"] },
        { point: "Translates OA ⊥ BC to a · (c − b) = 0 ⇒ a · c = a · b", keywords: ["a · c = a · b", "a · (c - b) = 0"] },
        { point: "Translates OB ⊥ CA to b · (a − c) = 0 ⇒ b · c = b · a", keywords: ["b · c = b · a", "b · (a - c) = 0"] },
        { point: "Uses commutativity (a · b = b · a) to deduce a · c = b · c", keywords: ["commutativity", "a · c = b · c"] },
        { point: "Factors to obtain c · (b − a) = 0 (i.e. OC · AB = 0)", keywords: ["c · (b - a) = 0", "oc · ab = 0"] },
        { point: "Concludes OC ⊥ AB and concurrency of all three altitudes at orthocentre O", keywords: ["orthocentre", "concurrent"] },
      ],
      markbands: [
        { band: "Developing", marks: [0, 2], descriptor: "Expresses sides in vector form and writes at least one perpendicularity dot product." },
        { band: "Proficient", marks: [3, 4], descriptor: "Expands both dot-product conditions and progresses toward equating a · c and b · c." },
        { band: "Mastery", marks: [5, 6], descriptor: "Delivers a complete, rigorous algebraic vector proof invoking commutativity and concluding OC ⊥ AB." },
      ],
    },
    {
      id: "3b-vectors-planes-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 7,
      commandTerm: "Find",
      guideRef: "vector-lines-skew",
      question:
        "Line L₁ passes through A(1, 2, −1) with direction **b** = (2, −1, 2), and point P has coordinates (7, 2, 2). (a) Find the coordinates of the foot of the perpendicular F from P to L₁. (b) Find the exact shortest distance PF. (c) Verify that ∠AFP = 90° and find the exact area of triangle AFP.",
      hints: [
        "Write general point F(1 + 2λ, 2 − λ, −1 + 2λ) and form **PF** = (2λ − 6, −λ, 2λ − 3).",
        "Solve **PF** · (2, −1, 2) = 0 to get λ = 2.",
        "Compute **AF** and **PF**, confirm **AF** · **PF** = 0, then find ½|**AF**||**PF**|.",
      ],
      modelAnswer:
        "(a) A general point on L1 is F(1 + 2λ, 2 − λ, −1 + 2λ), so PF = (2λ − 6, −λ, 2λ − 3). Perpendicularity requires PF · b = 0: 2(2λ − 6) + (−1)(−λ) + 2(2λ − 3) = 9λ − 18 = 0, giving λ = 2. Thus F = (5, 0, 3). (b) PF = (−2, −2, 1), so the shortest distance is |PF| = sqrt(4 + 4 + 1) = 3. (c) AF = (4, −2, 4) with length |AF| = sqrt(16 + 4 + 16) = 6. Checking AF · PF = 4(−2) + (−2)(−2) + 4(1) = −8 + 4 + 4 = 0 confirms ∠AFP = 90°. Therefore the exact area of triangle AFP is (1/2)(6)(3) = 9 square units.",
      markScheme: [
        { point: "Writes PF = (2λ − 6, −λ, 2λ − 3)", keywords: ["2λ - 6", "2λ - 3"] },
        { point: "Sets PF · (2, −1, 2) = 0 yielding 9λ − 18 = 0 ⇒ λ = 2", keywords: ["9λ - 18", "λ = 2"] },
        { point: "Finds foot F(5, 0, 3)", keywords: ["(5, 0, 3)"] },
        { point: "Computes PF = (−2, −2, 1) and shortest distance |PF| = 3", keywords: ["(-2, -2, 1)", "= 3"] },
        { point: "Computes AF = (4, −2, 4) and |AF| = 6", keywords: ["(4, -2, 4)", "= 6"] },
        { point: "Verifies AF · PF = −8 + 4 + 4 = 0", keywords: ["-8 + 4 + 4"] },
        { point: "Calculates exact area of △AFP = 9", keywords: ["(1/2)(6)(3)", "= 9"] },
      ],
      markbands: [
        { band: "Developing", marks: [0, 2], descriptor: "Sets up general point F and attempts PF · b = 0." },
        { band: "Proficient", marks: [3, 5], descriptor: "Correctly finds F(5, 0, 3) and shortest distance 3, with partial work on part (c)." },
        { band: "Mastery", marks: [6, 7], descriptor: "Accurately completes all three parts, confirming orthogonality and exact area 9." },
      ],
    },
    {
      id: "3b-vectors-planes-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 8,
      commandTerm: "Show that",
      guideRef: "cross-product-planes",
      question:
        "Let **u** and **v** be two non-parallel 3D vectors with angle θ between them. (a) Show that {{|u × v|^2 + (u · v)^2 = |u|^2 |v|^2}}. (b) Given |**u**| = 5, |**v**| = 4, and **u** · **v** = 12, find the exact area of the triangle spanned by **u** and **v**. (c) Letting **a** = 2**u** − **v** and **b** = **u** + 3**v**, show that **a** × **b** = 7(**u** × **v**) and hence find the exact area of the parallelogram spanned by **a** and **b**.",
      hints: [
        "For (a), substitute |**u** × **v**| = |**u**||**v**| sin θ and **u** · **v** = |**u**||**v**| cos θ, then factor out {{|u|^2 |v|^2}}.",
        "For (b), find |**u** × **v**| = 16 from (a), then halve it for the triangle.",
        "For (c), expand (2**u** − **v**) × (**u** + 3**v**) using **u** × **u** = **v** × **v** = **0** and **v** × **u** = −(**u** × **v**).",
      ],
          modelAnswer:
        "(a) LHS = (|u||v| sin θ)² + (|u||v| cos θ)² = |u|²|v|²(sin²θ + cos²θ) = |u|²|v|²(1) = RHS by the Pythagorean identity. (b) Substituting |u| = 5, |v| = 4, and u · v = 12 gives |u × v|² = (25)(16) − 144 = 400 − 144 = 256, so |u × v| = 16 units. The triangle area is (1/2)(16) = 8 square units. (c) Expanding distributively: a × b = (2u − v) × (u + 3v) = 2(u × u) + 6(u × v) − (v × u) − 3(v × v). Since u × u = v × v = 0 and −(v × u) = +(u × v), this simplifies to 6(u × v) + (u × v) = 7(u × v). Therefore the parallelogram area spanned by a and b is |a × b| = 7|u × v| = 7 × 16 = 112 square units.",
      markScheme: [
        { point: "Substitutes |u × v| = |u||v| sin θ and u · v = |u||v| cos θ into LHS", keywords: ["sin θ", "cos θ"] },
        { point: "Factors |u|²|v|²(sin²θ + cos²θ) and uses Pythagorean identity = 1", keywords: ["sin²θ + cos²θ", "sin^2 θ + cos^2 θ", "pythagorean"] },
        { point: "Solves |u × v|² = 400 − 144 = 256 ⇒ |u × v| = 16", keywords: ["256", "= 16"] },
        { point: "Halves to find exact triangle area = 8", keywords: ["= 8", "(1/2)(16)"] },
        { point: "Expands (2u − v) × (u + 3v) keeping left-to-right order", keywords: ["6(u × v)", "2(u × u)"] },
        { point: "Uses u × u = v × v = 0 and anti-commutativity −(v × u) = +(u × v)", keywords: ["-(v × u)", "u × u ="] },
        { point: "Concludes a × b = 7(u × v)", keywords: ["7(u × v)"] },
        { point: "Computes exact parallelogram area = 7 × 16 = 112", keywords: ["112"] },
      ],
      markbands: [
        { band: "Developing", marks: [0, 2], descriptor: "Proves Lagrange's identity OR calculates |u × v| with partial algebraic success." },
        { band: "Proficient", marks: [3, 5], descriptor: "Completes parts (a) and (b) cleanly and attempts the cross-product expansion in (c)." },
        { band: "Mastery", marks: [6, 8], descriptor: "Rigorously proves both identities and finds exact areas 8 and 112 with full justification." },
      ],
    },
    {
      id: "3b-vectors-planes-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 8,
      commandTerm: "Find",
      guideRef: "intersections-angles-distances",
      question:
        "Line L: **r** = (1, 0, 2) + λ(2, 1, −1) intersects the plane Π: x + y + z = 9 at point I. (a) Find the coordinates of I. (b) Find the coordinates of the reflection A' of the point A(1, 0, 2) in the plane Π. (c) Hence find a vector equation of the reflected line L' obtained by reflecting L in Π.",
      hints: [
        "Substitute (1 + 2λ, λ, 2 − λ) into x + y + z = 9 to solve for λ = 3.",
        "Drop the normal line (1 + t, t, 2 + t) from A to Π to find foot F (t = 2), then double t to t = 4 for A'.",
        "The reflected line L' passes through BOTH the fixed intersection point I and the reflected point A'!",
      ],
      modelAnswer:
        "(a) Substituting (1 + 2λ, λ, 2 − λ) into x + y + z = 9 gives 2λ + 3 = 9 ⇒ λ = 3, so I = (7, 3, −1). (b) The normal line through A(1, 0, 2) is r = (1 + t, t, 2 + t). Substituting into Π gives 3t + 3 = 9 ⇒ t = 2, so the foot is F(3, 2, 4). Stepping to t = 4 (or using 2F − A) gives the reflection A' = (5, 4, 6). (c) Since I lies on Π, I is invariant under reflection, so L' passes through both I(7, 3, −1) and A'(5, 4, 6). Its direction vector is A'I = (2, −1, −7) (or IA' = (−2, 1, 7)). Therefore L' has vector equation r = (7, 3, −1) + μ(2, −1, −7).",
      markScheme: [
        { point: "Substitutes parametric L into Π yielding 2λ + 3 = 9 ⇒ λ = 3", keywords: ["2λ + 3 = 9", "λ = 3"] },
        { point: "Finds intersection point I(7, 3, −1)", keywords: ["(7, 3, -1)"] },
        { point: "Sets up normal line (1 + t, t, 2 + t) and solves 3t + 3 = 9 ⇒ t = 2", keywords: ["3t + 3 = 9", "t = 2"] },
        { point: "Finds foot F(3, 2, 4)", keywords: ["(3, 2, 4)"] },
        { point: "Determines reflection A'(5, 4, 6)", keywords: ["(5, 4, 6)"] },
        { point: "Recognises L' passes through fixed point I and reflected point A'", keywords: ["invariant", "passes through both"] },
        { point: "Computes direction A'I = (2, −1, −7) or IA' = (−2, 1, 7)", keywords: ["(2, -1, -7)", "(-2, 1, 7)"] },
        { point: "Writes valid vector equation r = (7, 3, −1) + μ(2, −1, −7) (or anchored at A')", keywords: ["r = (7, 3, -1)", "r = (5, 4, 6)"] },
      ],
      markbands: [
        { band: "Developing", marks: [0, 2], descriptor: "Finds intersection point I or begins setting up the normal line from A." },
        { band: "Proficient", marks: [3, 5], descriptor: "Correctly determines I(7, 3, −1) and foot F(3, 2, 4), with errors finding A' or L'." },
        { band: "Mastery", marks: [6, 8], descriptor: "Accurately finds I, A'(5, 4, 6), and the complete vector equation of the reflected line L'." },
      ],
    },
    {
      id: "3b-vectors-planes-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 9,
      commandTerm: "Determine",
      guideRef: "intersections-angles-distances",
      question:
        "Consider the parameterised system of three planes: Π₁: x − y + 2z = 4, Π₂: 2x + y − z = 5, Π₃: x + 2y + az = b, where a, b ∈ ℝ. (a) Reduce the augmented matrix to row-echelon form in terms of a and b. (b) State the condition on a for a unique point of intersection. (c) Find the values of a and b for which the three planes intersect in a common line (sheaf), and find a vector equation for that line. (d) When a takes the value from (c) and b = 7, justify the exact geometric configuration of the three planes.",
      hints: [
        "Eliminate x with R₂ ← R₂ − 2R₁ and R₃ ← R₃ − R₁, then eliminate y with R₃ ← R₃ − R₂.",
        "Final row becomes [0, 0, a + 3 | b − 1].",
        "To avoid fractions in the line equation, set z = 3λ!",
      ],
      modelAnswer:
        "(a) Start with [[1, −1, 2 | 4], [2, 1, −1 | 5], [1, 2, a | b]]. Apply R2 ← R2 − 2R1 giving [0, 3, −5 | −3], and R3 ← R3 − R1 giving [0, 3, a − 2 | b − 4]. Next R3 ← R3 − R2 gives final row [0, 0, a + 3 | b − 1]. (b) A unique solution exists if and only if a + 3 ≠ 0, i.e. a ≠ −3. (c) For a sheaf (infinitely many solutions along a line), we require a + 3 = 0 and b − 1 = 0, so a = −3 and b = 1. Setting z = 3λ in 3y − 5z = −3 gives 3y = 15λ − 3 ⇒ y = −1 + 5λ. From x − y + 2z = 4, x = 4 + (−1 + 5λ) − 6λ = 3 − λ. Thus the common line is r = (3, −1, 0) + λ(−1, 5, 3). (d) When a = −3 and b = 7, the final row becomes 0 = 6 (inconsistent, no common point). Checking normals (1, −1, 2), (2, 1, −1), and (1, 2, −3), no two are scalar multiples, so no two planes are parallel; therefore the three planes form a triangular prism.",
      markScheme: [
        { point: "Computes R₂ ← R₂ − 2R₁ = [0, 3, −5 | −3]", keywords: ["0, 3, -5", "-3"] },
        { point: "Computes R₃ ← R₃ − R₁ = [0, 3, a − 2 | b − 4]", keywords: ["a - 2", "b - 4"] },
        { point: "Obtains final row-echelon row [0, 0, a + 3 | b − 1]", keywords: ["a + 3", "b - 1"] },
        { point: "States unique intersection condition a ≠ −3", keywords: ["a ≠ -3", "a != -3"] },
        { point: "Identifies sheaf values a = −3 and b = 1", keywords: ["a = -3", "b = 1"] },
        { point: "Parameterises y and x cleanly from row-echelon equations", keywords: ["-1 + 5λ", "3 - λ", "15λ"] },
        { point: "Writes valid vector equation r = (3, −1, 0) + λ(−1, 5, 3) (or equivalent)", keywords: ["(3, -1, 0)", "(-1, 5, 3)", "(-1/3, 5/3, 1)"] },
        { point: "Shows inconsistency (0 = 6) and checks pairwise normals are not scalar multiples", keywords: ["0 = 6", "inconsistent", "not scalar multiples"] },
        { point: "Concludes geometric configuration is a triangular prism", keywords: ["triangular prism"] },
      ],
      markbands: [
        { band: "Developing", marks: [0, 3], descriptor: "Attempts Gaussian elimination with partial progress on the row-echelon form." },
        { band: "Proficient", marks: [4, 6], descriptor: "Correctly finds row-echelon form, a = −3, and b = 1, with partial progress on the line or prism justification." },
        { band: "Mastery", marks: [7, 9], descriptor: "Executes clean elimination, derives r = (3, −1, 0) + λ(−1, 5, 3), and rigorously justifies the triangular prism when b = 7." },
      ],
    },
  ],
};
