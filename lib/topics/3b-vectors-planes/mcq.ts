import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1: 3D Vectors, Dot Product & 3D Lines (15 HL MCQs)
  // answerIndex spread: [0:4, 1:4, 2:4, 3:3]
  // ===========================================================================
  {
    id: "3b-vectors-planes-m1",
    title: "HL MCQ Paper 1: Vectors, Dot Product & 3D Lines",
    level: "HL",
    questions: [
      {
        id: "3b-vectors-planes-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Find",
        guideRef: "vectors-dot-product",
        question:
          "Points A(2, −1, 5) and B(4, 1, 4) lie in 3D space. What is the unit vector in the direction of **AB**?",
        options: [
          "{{(2/3, 2/3, -1/3)}}",
          "{{(-2/3, -2/3, 1/3)}}",
          "{{(2/9, 2/9, -1/9)}}",
          "{{(4/3, 1/3, 4/3)}}",
        ],
        answerIndex: 0,
        hints: [
          "Compute the displacement vector **AB** = **b** − **a** ('head minus tail').",
          "Divide **AB** by its magnitude {{|AB| = sqrt(x^2 + y^2 + z^2)}}, NOT by {{|AB|^2}}.",
        ],
        explanation:
          "First find **AB** = (4 − 2, 1 − (−1), 4 − 5) = (2, 2, −1). Its magnitude is {{|AB| = sqrt(2^2 + 2^2 + (-1)^2) = sqrt(9) = 3}}. Dividing each component by 3 gives the unit vector {{(2/3, 2/3, -1/3)}}.",
      },
      {
        id: "3b-vectors-planes-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Find",
        guideRef: "vectors-dot-product",
        question:
          "The 3D vectors **u** = (4, −3, 2) and **v** = (k, 2, −1) are perpendicular. What is the value of k?",
        options: ["k = −2", "k = 1", "k = 2", "k = 4"],
        answerIndex: 2,
        hints: [
          "Two non-zero vectors are perpendicular if and only if their dot product is 0.",
          "Expand 4k + (−3)(2) + 2(−1) = 0 and solve for k.",
        ],
        explanation:
          "Perpendicularity requires **u** · **v** = 0: 4k + (−3)(2) + 2(−1) = 4k − 6 − 2 = 4k − 8 = 0, so k = 2.",
      },
      {
        id: "3b-vectors-planes-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "vectors-dot-product",
        question:
          "What is the exact value of cos θ, where θ is the angle between **p** = (1, 2, −2) and **q** = (2, 3, 6)?",
        options: ["{{4/21}}", "{{-4/21}}", "{{-2/5}}", "{{20/21}}"],
        answerIndex: 1,
        hints: [
          "Use {{cos θ = (p · q) / (|p| |q|)}}.",
          "Notice (1, 2, −2) has length 3 and (2, 3, 6) has length 7; keep the sign of **p** · **q**!",
        ],
        explanation:
          "**p** · **q** = 1(2) + 2(3) + (−2)(6) = 2 + 6 − 12 = −4. Since {{|p| = sqrt(1 + 4 + 4) = 3}} and {{|q| = sqrt(4 + 9 + 36) = 7}}, {{cos θ = -4 / (3 * 7) = -4/21}} (the angle is obtuse).",
      },
      {
        id: "3b-vectors-planes-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "vectors-dot-product",
        question:
          "The three points P(1, −2, 3), Q(3, 2, 1), and R(7, a, b) are collinear. What is the value of a + b?",
        options: ["5", "−7", "13", "7"],
        answerIndex: 3,
        hints: [
          "Collinear points satisfy **PR** = k**PQ** for some scalar k.",
          "Compare the x-components of **PQ** = (2, 4, −2) and **PR** = (6, a + 2, b − 3) to find k = 3.",
        ],
        explanation:
          "**PQ** = (2, 4, −2) and **PR** = (6, a + 2, b − 3). Matching x-components gives k = 6/2 = 3, so **PR** = 3**PQ** = (6, 12, −6). Hence a + 2 = 12 ⇒ a = 10 and b − 3 = −6 ⇒ b = −3, giving a + b = 7.",
      },
      {
        id: "3b-vectors-planes-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "vectors-dot-product",
        question:
          "Vectors **u** and **v** satisfy |**u**| = 4, |**v**| = 5, and the angle between them is 60°. What is the exact value of {{|u - 2v|^2}}?",
        options: ["36", "96", "76", "156"],
        answerIndex: 2,
        hints: [
          "Expand {{|u - 2v|^2 = (u - 2v) · (u - 2v) = |u|^2 - 4(u · v) + 4|v|^2}}.",
          "Compute **u** · **v** = |**u**||**v**| cos 60° = 4 × 5 × ½ = 10.",
        ],
        explanation:
          "First **u** · **v** = 4 × 5 × cos 60° = 10. Expanding using self-dot products gives {{|u - 2v|^2 = |u|^2 - 4(u · v) + 4|v|^2 = 16 - 4(10) + 4(25) = 16 - 40 + 100 = 76}}.",
      },
      {
        id: "3b-vectors-planes-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "vectors-dot-product",
        question:
          "Vector **w** has magnitude 14 and points in the exact opposite direction to (2, −3, 6). What is **w**?",
        options: [
          "(−4, 6, −12)",
          "(4, −6, 12)",
          "(−28, 42, −84)",
          "{{(-4/7, 6/7, -12/7)}}",
        ],
        answerIndex: 0,
        hints: [
          "Find the magnitude of (2, −3, 6) first to create a unit vector.",
          "Multiply the unit vector by −14 (negative because **w** points in the opposite direction).",
        ],
        explanation:
          "The length of (2, −3, 6) is {{sqrt(4 + 9 + 36) = 7}}. To get length 14 in the opposite direction, multiply by −14/7 = −2: **w** = −2(2, −3, 6) = (−4, 6, −12).",
      },
      {
        id: "3b-vectors-planes-m1-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "vectors-dot-product",
        question:
          "Two non-zero 3D vectors **a** and **b** satisfy |**a** + **b**| = |**a** − **b**|. Which geometric statement MUST be true?",
        options: [
          "a and b have the same exact magnitude",
          "a and b are perpendicular to each other",
          "a and b are parallel in opposite senses",
          "a and b meet at an angle of sixty degrees",
        ],
        answerIndex: 1,
        hints: [
          "Square both sides and rewrite each squared norm as a dot product with itself.",
          "Cancel {{|a|^2 + |b|^2}} from both sides of {{|a + b|^2 = |a - b|^2}}.",
        ],
        explanation:
          "Squaring gives {{|a|^2 + 2 a · b + |b|^2 = |a|^2 - 2 a · b + |b|^2}}, which simplifies to 4(**a** · **b**) = 0 ⇒ **a** · **b** = 0. Since **a** and **b** are non-zero, they must be perpendicular (the parallelogram they span is a rectangle with equal diagonals).",
      },
      {
        id: "3b-vectors-planes-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "vectors-dot-product",
        question:
          "Triangle ABC has vertices A(1, 0, 2), B(3, 2, 1), and C(4, 0, 3). What is the exact value of cos(∠ABC)?",
        options: ["{{-4/9}}", "{{2/9}}", "{{4/3}}", "{{4/9}}"],
        answerIndex: 3,
        hints: [
          "To find the interior angle at vertex B, BOTH vectors must start at B: use **BA** and **BC** (tail-to-tail!).",
          "Compute **BA** = (−2, −2, 1) and **BC** = (1, −2, 2), both of length 3.",
        ],
        explanation:
          "Place both vectors tail-to-tail at B: **BA** = A − B = (−2, −2, 1) and **BC** = C − B = (1, −2, 2). Then **BA** · **BC** = (−2)(1) + (−2)(−2) + (1)(2) = −2 + 4 + 2 = 4, and |**BA**| = |**BC**| = 3, so {{cos(∠ABC) = 4 / (3 * 3) = 4/9}}.",
      },
      {
        id: "3b-vectors-planes-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "vector-lines-skew",
        question:
          "A 3D line has Cartesian equation {{(x - 3)/2 = (4 - y)/5 = (z + 1)/(-3)}}. Which vector is a valid direction vector for this line?",
        options: [
          "(2, −5, −3)",
          "(2, 5, −3)",
          "(3, 4, −1)",
          "(−3, 4, 1)",
        ],
        answerIndex: 0,
        hints: [
          "Every numerator in symmetric Cartesian form must have coefficient +1 on x, y, and z.",
          "Rewrite {{(4 - y)/5}} as {{(y - 4)/(-5)}} before reading off the denominators.",
        ],
        explanation:
          "Rewrite the middle term as {{(y - 4)/(-5)}} so the standard form is {{(x - 3)/2 = (y - 4)/(-5) = (z - (-1))/(-3)}}. The denominators give the direction vector (2, −5, −3).",
      },
      {
        id: "3b-vectors-planes-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "vector-lines-skew",
        question:
          "A 3D line is given by {{(2x - 6)/4 = (y + 3)/(-1)}}, z = 5. Which vector equation represents this line?",
        options: [
          "**r** = (6, −3, 5) + λ(4, −1, 0)",
          "**r** = (3, −3, 0) + λ(2, −1, 5)",
          "**r** = (3, −3, 5) + λ(2, −1, 0)",
          "**r** = (3, 3, 5) + λ(2, −1, 0)",
        ],
        answerIndex: 2,
        hints: [
          "Simplify {{(2x - 6)/4 = (x - 3)/2 = λ}} and solve for x, y, and z in terms of λ.",
          "Because z = 5 is constant for all λ, its constant term is 5 and its direction component is 0.",
        ],
        explanation:
          "Setting {{(2x - 6)/4 = (x - 3)/2 = λ}} and {{(y + 3)/(-1) = λ}} gives x = 3 + 2λ, y = −3 − λ, and z = 5 + 0λ, which in vector form is **r** = (3, −3, 5) + λ(2, −1, 0).",
      },
      {
        id: "3b-vectors-planes-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "vector-lines-skew",
        question:
          "Find the exact acute angle between the 3D lines L₁: **r** = (1, 0, 2) + λ(1, 1, 0) and L₂: **r** = (3, −2, 5) + μ(0, 1, −1).",
        options: [
          "{{π/6}} (30°)",
          "{{π/3}} (60°)",
          "{{π/4}} (45°)",
          "{{2π/3}} (120°)",
        ],
        answerIndex: 1,
        hints: [
          "The angle between two lines depends only on their direction vectors **b**₁ = (1, 1, 0) and **b**₂ = (0, 1, −1).",
          "Use {{cos θ = |b_1 · b_2| / (|b_1| |b_2|)}}.",
        ],
        explanation:
          "**b**₁ · **b**₂ = 1(0) + 1(1) + 0(−1) = 1, and {{|b_1| = |b_2| = sqrt(2)}}. Hence {{cos θ = 1 / (sqrt(2) * sqrt(2)) = 1/2}}, so the acute angle is {{θ = π/3}} (60°).",
      },
      {
        id: "3b-vectors-planes-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "vector-lines-skew",
        question:
          "Which statement best describes the pair of 3D lines L₁: **r** = (1, 2, 3) + λ(2, −1, 4) and L₂: **r** = (5, 0, 11) + μ(−4, 2, −8)?",
        options: [
          "Coincident (the exact same line)",
          "Parallel and distinct 3D lines",
          "Intersecting at one unique point",
          "Skew (non-parallel and disjoint)",
        ],
        answerIndex: 0,
        hints: [
          "Compare direction vectors first: (−4, 2, −8) = −2(2, −1, 4), so they have parallel directions.",
          "Test whether the anchor point (5, 0, 11) of L₂ lies on L₁ by finding λ.",
        ],
        explanation:
          "The directions are parallel since (−4, 2, −8) = −2(2, −1, 4). Checking whether (5, 0, 11) lies on L₁: (5, 0, 11) − (1, 2, 3) = (4, −2, 8) = 2(2, −1, 4). Because it lies on L₁ (at λ = 2), the two lines are coincident.",
      },
      {
        id: "3b-vectors-planes-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "vector-lines-skew",
        question:
          "Classify the pair of 3D lines L₁: **r** = (1, 0, 2) + λ(1, 2, −1) and L₂: **r** = (2, 1, 5) + μ(2, −1, 1).",
        options: [
          "Intersecting at one unique point",
          "Parallel and distinct 3D lines",
          "Coincident identical 3D lines",
          "Skew lines with no intersection",
        ],
        answerIndex: 3,
        hints: [
          "Check if (1, 2, −1) and (2, −1, 1) are scalar multiples — they are not, so the lines are not parallel.",
          "Solve the x- and y-equations for (λ, μ), then test both values in the z-equation.",
        ],
        explanation:
          "Directions (1, 2, −1) and (2, −1, 1) are not parallel. Equating x and y gives 1 + λ = 2 + 2μ and 2λ = 1 − μ, yielding μ = −1/5 and λ = 3/5. In z: L₁ gives 2 − 3/5 = 7/5 while L₂ gives 5 − 1/5 = 24/5 ≠ 7/5. Since they are non-parallel and do not meet, they are skew.",
      },
      {
        id: "3b-vectors-planes-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "vector-lines-skew",
        question:
          "The lines L₁: **r** = (2, −1, 3) + λ(1, 2, −1) and L₂: **r** = (5, 2, k) + μ(1, −1, 2) intersect at a single point. What is the value of k?",
        options: ["k = −1", "k = 1", "k = 3", "k = 5"],
        answerIndex: 2,
        hints: [
          "Equate the x- and y-components first to find the exact values of λ and μ.",
          "Substitute your (λ, μ) into the z-equation 3 − λ = k + 2μ.",
        ],
        explanation:
          "Equating x and y: 2 + λ = 5 + μ (so λ − μ = 3) and −1 + 2λ = 2 − μ (so 2λ + μ = 3). Adding gives 3λ = 6 ⇒ λ = 2 and μ = −1. Equating z: 3 − 2 = k + 2(−1) ⇒ 1 = k − 2 ⇒ k = 3.",
      },
      {
        id: "3b-vectors-planes-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "vector-lines-skew",
        question:
          "Two autonomous craft follow constant-velocity paths **r**_A(t) = (0, 6, 0) + t(2, −1, 1) and **r**_B(t) = (6, 0, 0) + t(1, 1, 0) (in km, t ≥ 0 hours). At what time t are the two craft closest together?",
        options: ["t = 2 hours", "t = 3 hours", "t = 4 hours", "t = 6 hours"],
        answerIndex: 1,
        hints: [
          "Form the relative displacement **d**(t) = **r**_B(t) − **r**_A(t) = (6 − t, 2t − 6, −t).",
          "Minimise {{|d(t)|^2 = 6t^2 - 36t + 72}}, or solve **d**(t) · **v**_rel = 0.",
        ],
        explanation:
          "Relative displacement is **d**(t) = (6 − t, 2t − 6, −t), so squared distance is {{D(t)^2 = (6 - t)^2 + (2t - 6)^2 + (-t)^2 = 6t^2 - 36t + 72 = 6(t - 3)^2 + 18}}. This attains its minimum at t = 3 hours.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2: Cross Product, Areas & Equations of Planes (15 HL MCQs)
  // answerIndex spread: [0:4, 1:4, 2:3, 3:4]
  // ===========================================================================
  {
    id: "3b-vectors-planes-m2",
    title: "HL MCQ Paper 2: Cross Product, Areas & Planes",
    level: "HL",
    questions: [
      {
        id: "3b-vectors-planes-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "cross-product-planes",
        question: "Find the cross product (1, 2, −1) × (3, 0, 2).",
        options: [
          "(4, 5, −6)",
          "(4, −5, −6)",
          "(−4, 5, 6)",
          "(3, 0, −2)",
        ],
        answerIndex: 1,
        hints: [
          "Apply **v** × **w** = (v₂w₃ − v₃w₂, v₃w₁ − v₁w₃, v₁w₂ − v₂w₁).",
          "Verify your result by checking that its dot product with both (1, 2, −1) and (3, 0, 2) equals 0.",
        ],
        explanation:
          "x-component: 2(2) − (−1)(0) = 4; y-component: (−1)(3) − 1(2) = −5; z-component: 1(0) − 2(3) = −6. Checking: (1, 2, −1) · (4, −5, −6) = 4 − 10 + 6 = 0 and (3, 0, 2) · (4, −5, −6) = 12 − 12 = 0.",
      },
      {
        id: "3b-vectors-planes-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "cross-product-planes",
        question:
          "Vectors **u** and **v** satisfy |**u**| = 5, |**v**| = 6, and the angle between them is 30°. What is the exact value of |**u** × **v**|?",
        options: ["7.5", "{{15 sqrt(3)}}", "30", "15"],
        answerIndex: 3,
        hints: [
          "Recall the magnitude formula {{|u × v| = |u| |v| sin θ}}.",
          "Evaluate 5 × 6 × sin 30°.",
        ],
        explanation:
          "Using {{|u × v| = |u| |v| sin θ = 5 * 6 * sin 30° = 30 * (1/2) = 15}}.",
      },
      {
        id: "3b-vectors-planes-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "cross-product-planes",
        question:
          "What is the exact area of triangle ABC with vertices A(1, 0, 2), B(3, −1, 2), and C(1, 1, 1)?",
        options: ["{{3/2}}", "3", "{{9/2}}", "{{sqrt(5)/2}}"],
        answerIndex: 0,
        hints: [
          "Form two side vectors from the same vertex: **AB** = (2, −1, 0) and **AC** = (0, 1, −1).",
          "Area of a triangle is HALF the magnitude of the cross product: {{(1/2) |AB × AC|}}.",
        ],
        explanation:
          "**AB** = (2, −1, 0) and **AC** = (0, 1, −1), so **AB** × **AC** = (1, 2, 2) with magnitude {{sqrt(1 + 4 + 4) = 3}}. Triangle area = {{(1/2) * 3 = 3/2}}.",
      },
      {
        id: "3b-vectors-planes-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "cross-product-planes",
        question:
          "Given that **u** × **v** = (2, −3, 6), what is the vector (3**v**) × (2**u**)?",
        options: [
          "(12, −18, 36)",
          "(−6, 9, −18)",
          "(−12, 18, −36)",
          "(−10, 15, −30)",
        ],
        answerIndex: 2,
        hints: [
          "Pull out scalar factors: (3**v**) × (2**u**) = 6(**v** × **u**).",
          "Remember anti-commutativity: **v** × **u** = −(**u** × **v**).",
        ],
        explanation:
          "(3**v**) × (2**u**) = 6(**v** × **u**) = −6(**u** × **v**) = −6(2, −3, 6) = (−12, 18, −36).",
      },
      {
        id: "3b-vectors-planes-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "cross-product-planes",
        question:
          "Simplify (2**a** + **b**) × (**a** − 3**b**) in terms of **a** × **b**.",
        options: [
          "−5(**a** × **b**)",
          "−7(**a** × **b**)",
          "7(**a** × **b**)",
          "5(**a** × **b**)",
        ],
        answerIndex: 1,
        hints: [
          "Expand distributively keeping left-to-right order strictly, and recall **a** × **a** = **b** × **b** = **0**.",
          "Replace **b** × **a** with −(**a** × **b**) before collecting like terms.",
        ],
        explanation:
          "Expanding gives 2(**a** × **a**) − 6(**a** × **b**) + (**b** × **a**) − 3(**b** × **b**) = **0** − 6(**a** × **b**) − (**a** × **b**) − **0** = −7(**a** × **b**).",
      },
      {
        id: "3b-vectors-planes-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "cross-product-planes",
        question:
          "Vectors **u** = (2, p, −1) and **v** = (q, −6, 3) satisfy **u** × **v** = (0, 0, 0). What is the value of p + q?",
        options: ["4", "−8", "8", "−4"],
        answerIndex: 3,
        hints: [
          "Two non-zero vectors have zero cross product if and only if they are parallel (**v** = k**u**).",
          "Use the z-components to find k = −3, then determine p and q.",
        ],
        explanation:
          "**u** × **v** = **0** implies **v** = k**u**. Comparing z-components: 3 = k(−1) ⇒ k = −3. Thus q = −3(2) = −6 and −6 = −3p ⇒ p = 2, giving p + q = 2 + (−6) = −4.",
      },
      {
        id: "3b-vectors-planes-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Find",
        guideRef: "cross-product-planes",
        question:
          "A plane Π has normal vector **n** = (3, −1, 4) and passes through A(2, 5, −1). What is the Cartesian equation of Π?",
        options: [
          "3x − y + 4z = −3",
          "3x − y + 4z = 3",
          "2x + 5y − z = −3",
          "3x − y + 4z = 7",
        ],
        answerIndex: 0,
        hints: [
          "Use the normal form **r** · **n** = **a** · **n**, which becomes ax + by + cz = d.",
          "Compute d = 3(2) + (−1)(5) + 4(−1).",
        ],
        explanation:
          "With normal (3, −1, 4), the plane is 3x − y + 4z = d. Substituting A(2, 5, −1) gives d = 3(2) − 5 + 4(−1) = 6 − 5 − 4 = −3, so 3x − y + 4z = −3.",
      },
      {
        id: "3b-vectors-planes-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "cross-product-planes",
        question:
          "A plane Π has vector equation **r** = (1, 0, −2) + λ(2, 1, 0) + μ(0, 1, −1). Which Cartesian equation represents Π?",
        options: [
          "x − 2y − 2z = −3",
          "x + 2y − 2z = 5",
          "x − 2y − 2z = 5",
          "x − 2y + 2z = −3",
        ],
        answerIndex: 2,
        hints: [
          "Find a normal vector via **n** = (2, 1, 0) × (0, 1, −1).",
          "Substitute the anchor point (1, 0, −2) into ax + by + cz = d to find d.",
        ],
        explanation:
          "**n** = (2, 1, 0) × (0, 1, −1) = (−1, 2, 2); multiplying by −1 gives **n**' = (1, −2, −2). Substituting (1, 0, −2): d = 1(1) − 2(0) − 2(−2) = 5, so x − 2y − 2z = 5.",
      },
      {
        id: "3b-vectors-planes-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "cross-product-planes",
        question:
          "What is the Cartesian equation of the plane passing through P(2, −1, 3) that is parallel to 4x − 2y + 5z = 9?",
        options: [
          "4x − 2y + 5z = 21",
          "2x − y + 3z = 25",
          "4x − 2y + 5z = 9",
          "4x − 2y + 5z = 25",
        ],
        answerIndex: 3,
        hints: [
          "Parallel planes share the exact same normal vector (4, −2, 5).",
          "Substitute P(2, −1, 3) into 4x − 2y + 5z = d.",
        ],
        explanation:
          "A parallel plane has the form 4x − 2y + 5z = d. Substituting P(2, −1, 3) gives d = 4(2) − 2(−1) + 5(3) = 8 + 2 + 15 = 25.",
      },
      {
        id: "3b-vectors-planes-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "cross-product-planes",
        question:
          "Plane Π contains the line **r** = (1, 2, 0) + λ(1, −1, 2) and the external point P(2, 0, 1). Which vector is normal to Π?",
        options: [
          "(3, 1, −1)",
          "(3, −1, −1)",
          "(−3, 1, −1)",
          "(1, 3, −1)",
        ],
        answerIndex: 0,
        hints: [
          "Form a second vector in the plane by joining A(1, 2, 0) on the line to P(2, 0, 1): **AP** = (1, −2, 1).",
          "Take the cross product (1, −1, 2) × (1, −2, 1) and verify orthogonality with both vectors.",
        ],
        explanation:
          "Two non-parallel vectors in Π are **b** = (1, −1, 2) and **AP** = (1, −2, 1). Their cross product is **b** × **AP** = ((−1)(1) − 2(−2), 2(1) − 1(1), 1(−2) − (−1)(1)) = (3, 1, −1).",
      },
      {
        id: "3b-vectors-planes-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "cross-product-planes",
        question:
          "Parallelogram ABCD has adjacent sides **AB** and **AD**, with vertices A(0, 1, 2), B(3, 1, 2), and D(0, 5, 5). What is its exact area?",
        options: ["7.5", "15", "12", "25"],
        answerIndex: 1,
        hints: [
          "Compute **AB** = (3, 0, 0) and **AD** = (0, 4, 3).",
          "Parallelogram area equals |**AB** × **AD**| (do NOT divide by 2!).",
        ],
        explanation:
          "**AB** = (3, 0, 0) and **AD** = (0, 4, 3), so **AB** × **AD** = (0, −9, 12). Its magnitude is {{sqrt(0 + 81 + 144) = sqrt(225) = 15}}.",
      },
      {
        id: "3b-vectors-planes-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "cross-product-planes",
        question:
          "Two non-zero vectors **u** and **v** satisfy {{|u × v| = sqrt(3) (u · v)}} with **u** · **v** > 0. What is the exact angle θ between **u** and **v**?",
        options: [
          "{{π/6}} (30°)",
          "{{π/4}} (45°)",
          "{{π/3}} (60°)",
          "{{2π/3}} (120°)",
        ],
        answerIndex: 2,
        hints: [
          "Substitute |**u** × **v**| = |**u**||**v**| sin θ and **u** · **v** = |**u**||**v**| cos θ.",
          "Divide both sides by |**u**||**v**| cos θ to obtain tan θ.",
        ],
        explanation:
          "Rewriting gives |**u**||**v**| sin θ = √3 |**u**||**v**| cos θ. Since **u** · **v** > 0, θ is acute and cos θ > 0, so {{tan θ = sqrt(3)}}, giving {{θ = π/3}} (60°).",
      },
      {
        id: "3b-vectors-planes-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "cross-product-planes",
        question:
          "Plane Π has Cartesian equation 2x + y − z = 6. Which of the following is a valid vector equation for Π?",
        options: [
          "**r** = (0, 0, 6) + λ(1, 0, 2) + μ(0, 1, 1)",
          "**r** = (0, 0, −6) + λ(2, 1, −1) + μ(0, 1, 1)",
          "**r** = (3, 0, 0) + λ(1, 0, −2) + μ(0, 1, 1)",
          "**r** = (0, 0, −6) + λ(1, 0, 2) + μ(0, 1, 1)",
        ],
        answerIndex: 3,
        hints: [
          "Set x = λ and y = μ in 2x + y − z = 6, then solve for z in terms of λ and μ.",
          "Verify that the anchor point satisfies 2x + y − z = 6 AND both direction vectors are perpendicular to **n** = (2, 1, −1).",
        ],
        explanation:
          "Setting x = λ and y = μ gives z = −6 + 2λ + μ, so **r** = (0, 0, −6) + λ(1, 0, 2) + μ(0, 1, 1). Indeed (0, 0, −6) satisfies 0 + 0 − (−6) = 6, and both (1, 0, 2) and (0, 1, 1) have dot product 0 with **n** = (2, 1, −1).",
      },
      {
        id: "3b-vectors-planes-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "cross-product-planes",
        question:
          "Two 3D vectors **p** and **q** satisfy |**p**| = 5, |**q**| = 3, and **p** · **q** = 9. What is the exact value of |**p** × **q**|?",
        options: ["12", "6", "16", "9"],
        answerIndex: 0,
        hints: [
          "Find {{cos θ = (p · q) / (|p| |q|) = 9/15 = 3/5}}, or apply Lagrange's identity {{|p × q|^2 + (p · q)^2 = |p|^2 |q|^2}}.",
          "Compute {{sin θ = sqrt(1 - (3/5)^2) = 4/5}}, then evaluate |**p**||**q**| sin θ.",
        ],
        explanation:
          "From cos θ = 9/(5 × 3) = 3/5 and θ ∈ [0, π], we get sin θ = 4/5. Hence |**p** × **q**| = 5 × 3 × (4/5) = 12 (equivalently {{sqrt(15^2 - 9^2) = sqrt(144) = 12}}).",
      },
      {
        id: "3b-vectors-planes-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "cross-product-planes",
        question:
          "Plane Π cuts the coordinate axes at A(1, 0, 0), B(0, 2, 0), and C(0, 0, 3). What is the Cartesian equation of Π?",
        options: [
          "x + 2y + 3z = 6",
          "6x + 3y + 2z = 6",
          "6x + 3y + 2z = 1",
          "3x + 2y + z = 6",
        ],
        answerIndex: 1,
        hints: [
          "Compute **AB** = (−1, 2, 0) and **AC** = (−1, 0, 3), then find **n** = **AB** × **AC** (or use intercept form {{x/1 + y/2 + z/3 = 1}}).",
          "Test all three axis intercepts A(1, 0, 0), B(0, 2, 0), and C(0, 0, 3) in the equation.",
        ],
        explanation:
          "Using **AB** × **AC** = (−1, 2, 0) × (−1, 0, 3) = (6, 3, 2) and substituting A(1, 0, 0) gives 6x + 3y + 2z = 6 (equivalently multiplying {{x/1 + y/2 + z/3 = 1}} by 6).",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3: Intersections, Angles, Distances & Mixed HL (15 HL MCQs)
  // answerIndex spread: [0:3, 1:4, 2:4, 3:4]
  // ===========================================================================
  {
    id: "3b-vectors-planes-m3",
    title: "HL MCQ Paper 3: Intersections, Angles, Distances & Mixed HL",
    level: "HL",
    questions: [
      {
        id: "3b-vectors-planes-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Find",
        guideRef: "intersections-angles-distances",
        question:
          "At which point does the line **r** = (1, 2, −1) + λ(2, −1, 3) intersect the plane x + 2y + z = 10?",
        options: [
          "(3, 1, 2)",
          "(−3, 4, −7)",
          "(5, 0, 5)",
          "(5, 4, 5)",
        ],
        answerIndex: 2,
        hints: [
          "Substitute x = 1 + 2λ, y = 2 − λ, z = −1 + 3λ into x + 2y + z = 10.",
          "Solve 3λ + 4 = 10 for λ, then substitute λ back into the line equation.",
        ],
        explanation:
          "Substituting into the plane gives (1 + 2λ) + 2(2 − λ) + (−1 + 3λ) = 10 ⇒ 3λ + 4 = 10 ⇒ λ = 2. Putting λ = 2 into **r** gives (1 + 4, 2 − 2, −1 + 6) = (5, 0, 5).",
      },
      {
        id: "3b-vectors-planes-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "intersections-angles-distances",
        question:
          "What is the exact acute angle α between the line **r** = (2, 0, 1) + λ(1, 1, 0) and the plane x + z = 4?",
        options: [
          "30° ({{π/6}})",
          "60° ({{π/3}})",
          "45° ({{π/4}})",
          "15° ({{π/12}})",
        ],
        answerIndex: 0,
        hints: [
          "Read off line direction **b** = (1, 1, 0) and plane normal **n** = (1, 0, 1).",
          "For a line–plane angle, use **sin** α = |**b** · **n**| / (|**b**||**n**|), NOT cos!",
        ],
        explanation:
          "**b** = (1, 1, 0) and **n** = (1, 0, 1), so **b** · **n** = 1 and {{|b| = |n| = sqrt(2)}}. Using {{sin α = |b · n| / (|b| |n|) = 1/2}}, the acute line–plane angle is α = 30° ({{π/6}}).",
      },
      {
        id: "3b-vectors-planes-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "intersections-angles-distances",
        question:
          "The line **r** = (1, −2, 3) + λ(2, k, −1) is parallel to the plane 3x − 2y + 4z = 7. What is the value of k?",
        options: ["k = −1", "k = 5", "k = −4", "k = 1"],
        answerIndex: 3,
        hints: [
          "A line is parallel to a plane if and only if its direction vector **b** is perpendicular to the plane's normal **n**.",
          "Solve **b** · **n** = 2(3) + k(−2) + (−1)(4) = 0.",
        ],
        explanation:
          "Line direction **b** = (2, k, −1) must be perpendicular to normal **n** = (3, −2, 4): 2(3) − 2k − 4 = 0 ⇒ 2 − 2k = 0 ⇒ k = 1.",
      },
      {
        id: "3b-vectors-planes-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "intersections-angles-distances",
        question:
          "What is the exact acute dihedral angle between the planes x + y = 5 and y + z = 2?",
        options: [
          "30° ({{π/6}})",
          "60° ({{π/3}})",
          "45° ({{π/4}})",
          "90° ({{π/2}})",
        ],
        answerIndex: 1,
        hints: [
          "Read off the plane normals **n**₁ = (1, 1, 0) and **n**₂ = (0, 1, 1).",
          "For the acute angle between two planes, use {{cos φ = |n_1 · n_2| / (|n_1| |n_2|)}}.",
        ],
        explanation:
          "**n**₁ = (1, 1, 0) and **n**₂ = (0, 1, 1) give **n**₁ · **n**₂ = 1 and {{|n_1| = |n_2| = sqrt(2)}}. Thus {{cos φ = 1/2}}, so φ = 60° ({{π/3}}).",
      },
      {
        id: "3b-vectors-planes-m3-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "intersections-angles-distances",
        question:
          "Find the exact shortest perpendicular distance from the point P(3, −2, 5) to the plane 2x − 2y + z = 6.",
        options: ["9", "5", "1", "3"],
        answerIndex: 3,
        hints: [
          "Apply {{D = |a x_0 + b y_0 + c z_0 - d| / sqrt(a^2 + b^2 + c^2)}}.",
          "Remember to divide by |**n**| = {{sqrt(2^2 + (-2)^2 + 1^2) = 3}}.",
        ],
        explanation:
          "{{D = |2(3) - 2(-2) + 1(5) - 6| / sqrt(4 + 4 + 1) = |6 + 4 + 5 - 6| / 3 = 9/3 = 3}}.",
      },
      {
        id: "3b-vectors-planes-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "intersections-angles-distances",
        question:
          "Find the exact shortest distance between the parallel planes 2x + y − 2z = 4 and 4x + 2y − 4z = 26.",
        options: ["{{22/3}}", "{{11/3}}", "3", "9"],
        answerIndex: 2,
        hints: [
          "First divide the second plane equation by 2 so both planes have the IDENTICAL normal vector (2, 1, −2).",
          "Then compute {{D = |d_1 - d_2| / |n|}} with |**n**| = 3.",
        ],
        explanation:
          "Dividing the second equation by 2 gives 2x + y − 2z = 13. With shared normal **n** = (2, 1, −2) of length 3, the distance is {{D = |13 - 4| / 3 = 9/3 = 3}}.",
      },
      {
        id: "3b-vectors-planes-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "intersections-angles-distances",
        question:
          "The planes Π₁: x − 2y + z = 3 and Π₂: 2x + y − z = 4 intersect in a straight line L. Which vector is a direction vector of L?",
        options: [
          "(1, −3, 5)",
          "(1, 3, 5)",
          "(3, −1, 0)",
          "(−1, 3, −5)",
        ],
        answerIndex: 1,
        hints: [
          "The line of intersection lies inside both planes, so its direction is perpendicular to both normals.",
          "Compute **b** = **n**₁ × **n**₂ = (1, −2, 1) × (2, 1, −1).",
        ],
        explanation:
          "**b** = (1, −2, 1) × (2, 1, −1) = ((−2)(−1) − 1(1), 1(2) − 1(−1), 1(1) − (−2)(2)) = (1, 3, 5). Verification: (1, −2, 1) · (1, 3, 5) = 0 and (2, 1, −1) · (1, 3, 5) = 0.",
      },
      {
        id: "3b-vectors-planes-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "intersections-angles-distances",
        question:
          "Row reduction of a system of three planes yields x + 2y − z = 4, y + 3z = 2, and 0 = 5, and no two plane normals are parallel. What is the geometric configuration of the three planes?",
        options: [
          "A triangular prism with three parallel pairwise lines",
          "A sheaf of planes sharing one common straight line",
          "Three distinct planes intersecting at one unique point",
          "Two parallel planes cut by a third oblique plane",
        ],
        answerIndex: 0,
        hints: [
          "The row 0 = 5 means the 3×3 system is inconsistent (no point lies on all three planes).",
          "Because no two normals are parallel, every pair of planes still meets in a line.",
        ],
        explanation:
          "0 = 5 indicates no common point to all three planes, while non-parallel normals rule out parallel planes. Therefore each pair intersects in a line, and those three lines are parallel and distinct — forming a triangular prism.",
      },
      {
        id: "3b-vectors-planes-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "intersections-angles-distances",
        question:
          "A 3×3 system representing three planes with pairwise non-parallel normals reduces to row-echelon form with final row [0 0 0 | 0] and two pivot rows. How do the three planes intersect?",
        options: [
          "A triangular prism with no common point at all",
          "Three identical coincident planes in 3D space",
          "Three distinct planes meeting at a single point",
          "A sheaf of planes meeting along one common line",
        ],
        answerIndex: 3,
        hints: [
          "Two pivot rows and one zero row [0 0 0 | 0] mean there is 1 free parameter (infinitely many solutions forming a line).",
          "Pairwise non-parallel normals confirm no two planes are coincident.",
        ],
        explanation:
          "A consistent system with rank 2 in 3 unknowns has a 1-parameter family of solutions — a single straight line. Since no two planes are parallel, the three planes form a sheaf (like pages of an open book).",
      },
      {
        id: "3b-vectors-planes-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Find",
        guideRef: "intersections-angles-distances",
        question:
          "What are the coordinates of the reflection P' of the point P(1, 3, −2) in the plane x + 2y − 2z = 2?",
        options: [
          "(0, 1, 0)",
          "(−1, −1, 2)",
          "(2, 5, −4)",
          "(−2, −3, 4)",
        ],
        answerIndex: 1,
        hints: [
          "Drop the normal line **r** = (1, 3, −2) + t(1, 2, −2) into the plane to find the foot F (at t = −1).",
          "Step TWICE as far along the normal (t = −2), or use **OP'** = 2**OF** − **OP**.",
        ],
        explanation:
          "Substituting (1 + t, 3 + 2t, −2 − 2t) into x + 2y − 2z = 2 gives 9t + 11 = 2 ⇒ t = −1, so the foot is F(0, 1, 0). The reflection is at t = −2: P' = 2F − P = (−1, −1, 2).",
      },
      {
        id: "3b-vectors-planes-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "intersections-angles-distances",
        question:
          "Find the exact shortest perpendicular distance from the point P(4, 3, 2) to the line L: **r** = (1, 0, 2) + λ(2, 1, −2).",
        options: ["9", "{{sqrt(5)}}", "3", "6"],
        answerIndex: 2,
        hints: [
          "Either use {{D = |AP × b| / |b|}} with A(1, 0, 2) and **b** = (2, 1, −2), OR find foot F via **PF** · **b** = 0.",
          "With **AP** = (3, 3, 0), compute **AP** × **b** = (−6, 6, −3), whose length is 9.",
        ],
        explanation:
          "Taking A(1, 0, 2) on L gives **AP** = (3, 3, 0). Then **AP** × **b** = (3, 3, 0) × (2, 1, −2) = (−6, 6, −3) with magnitude {{sqrt(36 + 36 + 9) = 9}}. Since |**b**| = 3, the shortest distance is 9/3 = 3.",
      },
      {
        id: "3b-vectors-planes-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "intersections-angles-distances",
        question:
          "Find the exact shortest distance between the skew lines L₁: **r** = (1, 0, 2) + λ(2, −1, 0) and L₂: **r** = (3, 2, 5) + μ(0, 1, −1).",
        options: ["4", "12", "{{4/3}}", "{{sqrt(17)}}"],
        answerIndex: 0,
        hints: [
          "Compute a common normal vector **n** = **b**₁ × **b**₂ = (2, −1, 0) × (0, 1, −1) = (1, 2, 2).",
          "Project **a**₂ − **a**₁ = (2, 2, 3) onto the unit common normal: {{D = |(a_2 - a_1) · n| / |n|}}.",
        ],
        explanation:
          "**n** = (2, −1, 0) × (0, 1, −1) = (1, 2, 2) has length |**n**| = 3. With **a**₂ − **a**₁ = (2, 2, 3), the shortest distance is {{D = |(2, 2, 3) · (1, 2, 2)| / 3 = |2 + 4 + 6| / 3 = 12/3 = 4}}.",
      },
      {
        id: "3b-vectors-planes-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "intersections-angles-distances",
        question:
          "The line L: **r** = (2, −1, p) + λ(1, 2, −1) lies entirely inside the plane Π: 2x + qy + 4z = 11. What is the value of p + q?",
        options: ["1", "3", "5", "−1"],
        answerIndex: 1,
        hints: [
          "A line lies entirely in a plane iff **b** · **n** = 0 AND its anchor point (2, −1, p) lies on the plane.",
          "Solve 1(2) + 2q + (−1)(4) = 0 for q, then substitute (2, −1, p) into Π to find p.",
        ],
        explanation:
          "First, **b** · **n** = 0 gives 2 + 2q − 4 = 0 ⇒ q = 1. Next, substituting (2, −1, p) into 2x + y + 4z = 11 gives 4 − 1 + 4p = 11 ⇒ 4p = 8 ⇒ p = 2. Hence p + q = 3.",
      },
      {
        id: "3b-vectors-planes-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "intersections-angles-distances",
        question:
          "The three planes x + y + z = 3, 2x − y + 3z = 5, and 3x + ky + 4z = 8 intersect in a common line (sheaf). What is the value of k?",
        options: ["k = 1", "k = −2", "k = 3", "k = 0"],
        answerIndex: 3,
        hints: [
          "For a sheaf, the third equation must be a linear combination of the first two (so det = 0 AND the RHS matches).",
          "Notice adding the first two equations gives (1 + 2)x + (1 − 1)y + (1 + 3)z = 3 + 5.",
        ],
        explanation:
          "Adding the first two equations yields 3x + 0y + 4z = 8. Matching this with 3x + ky + 4z = 8 gives k = 0 (for any k ≠ 0, det = −k ≠ 0 and the three planes meet at a single unique point).",
      },
      {
        id: "3b-vectors-planes-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Find",
        guideRef: "intersections-angles-distances",
        question:
          "Plane Π passes through A(1, 2, 3) and is perpendicular to BOTH Π₁: x + y − z = 2 and Π₂: 2x − y + z = 5. What is the Cartesian equation of Π?",
        options: [
          "y − z = −1",
          "x + y + z = 6",
          "y + z = 5",
          "x + z = 4",
        ],
        answerIndex: 2,
        hints: [
          "Two planes are perpendicular iff their normal vectors are perpendicular, so **n** ⊥ **n**₁ and **n** ⊥ **n**₂.",
          "Compute **n** = (1, 1, −1) × (2, −1, 1), simplify it, and pass through A(1, 2, 3).",
        ],
        explanation:
          "A normal to Π is **n** = (1, 1, −1) × (2, −1, 1) = (0, −3, −3), which simplifies to (0, 1, 1). Passing through A(1, 2, 3) gives 0(1) + 1(2) + 1(3) = 5, so the equation is y + z = 5.",
      },
    ],
  },
];
