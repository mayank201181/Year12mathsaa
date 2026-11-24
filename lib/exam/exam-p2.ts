import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p2",
  title: "Mock Paper 2 (SL & HL · TI-Nspire CX GDC)",
  level: "SL",
  calculator: true,
  minutes: 90,
  paperType: "Paper 2 (SL & HL · TI-Nspire CX GDC)",
  questions: [
    // ======================= SECTION A (SL Core · TI-Nspire CX GDC) ==========
    {
      id: "exam-p2-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      topicId: "1a-number-algebra-core",
      guideRef: "sequences-series-sigma",
      commandTerm: "Find",
      question:
        "[Section A · SL · GDC] A damped pendulum swings through an arc of {{42 cm}} on its first swing, and each subsequent swing has arc length {{88%}} of the previous swing. Find the smallest integer number of swings {{n}} for which the total cumulative arc length {{S_n}} exceeds {{300 cm}}.",
      answer: { type: "number", value: 16 },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "Check S_15 = 350(1 − 0.88¹⁵) ≈ 298.6 cm, which has not yet exceeded 300 cm — round UP to n = 16!",
        },
        {
          spec: { type: "number", value: 15.2 },
          feedback: "n must be a positive integer: since n > 15.22, the smallest integer is n = 16.",
        },
      ],
      hints: [
        "Model the swing arcs as a geometric series with {{u_1 = 42}} and common ratio {{r = 0.88}}: {{S_n = 42(1 - 0.88^n)/(1 - 0.88)}}.",
        "On your TI-Nspire CX, use `nSolve(42*(1 - 0.88^n)/0.12 = 300, n)` (or graph {{y = S_n}} against {{y = 300}}) and round UP to the next integer.",
      ],
      strategy: "For 'exceeds' threshold inequalities on Paper 2, solve the equality with TI-Nspire CX nSolve and verify BOTH n = ⌊x⌋ and n = ⌈x⌉!",
      solution: [
        "Set up the geometric series sum: {{S_n = 42(1 - 0.88^n)/(1 - 0.88) = 350(1 - 0.88^n)}}.",
        "Solve {{350(1 - 0.88^n) > 300}}, giving {{0.88^n < 50/350 = 1/7}}.",
        "TI-Nspire CX: `nSolve(350*(1 - 0.88^n) = 300, n)` gives {{n ≈ 15.222}} (equivalently {{ln(1/7)/ln(0.88) ≈ 15.222}}).",
        "Verify: {{S_15 ≈ 298.6 cm < 300}} and {{S_16 ≈ 304.7 cm > 300}}, so the smallest integer is {{n = 16}}.",
      ],
      commonError: "Rounding 15.22 down to 15 instead of up to 16, or reversing the inequality sign when dividing by ln(0.88) < 0.",
    },
    {
      id: "exam-p2-q02",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "2-functions",
      guideRef: "functions-inverse-transforms",
      commandTerm: "Solve",
      question:
        "[Section A · SL · GDC] Using your TI-Nspire CX GDC, solve the equation {{3 ln(x + 2) = x^2 - 4}} for {{x > 0}}, giving your answer to **3 significant figures**.",
      answer: { type: "number", value: 2.97, tolerance: 0.02 },
      traps: [
        {
          spec: { type: "number", value: -1.78, tolerance: 0.05 },
          feedback: "You found the negative root — check the domain condition x > 0 in the question stem!",
        },
        {
          spec: { type: "number", value: 3, tolerance: 0.01 },
          feedback: "Check precision: at x = 3, 3 ln(5) ≈ 4.828 while 3² − 4 = 5. Round 2.9680… to 3 s.f. (2.97).",
        },
      ],
      hints: [
        "On TI-Nspire CX Graphs, plot {{f_1(x) = 3 ln(x + 2)}} and {{f_2(x) = x^2 - 4}}, then press `Menu → 6 Analyze Graph → 4 Intersection` for {{x > 0}}.",
        "Alternatively, on Calculator run `nSolve(3*ln(x + 2) = x^2 - 4, x) | x > 0` and round to 3 s.f.",
      ],
      strategy: "Always add a domain constraint (`| x > 0`) to TI-Nspire CX `nSolve`, because unconstrained `nSolve` returns only one arbitrary root.",
      solution: [
        "TI-Nspire CX Graphs: enter {{f_1(x) = 3 ln(x + 2)}} and {{f_2(x) = x^2 - 4}} on window {{[0, 5] × [-5, 10]}}.",
        "Use `Menu → 6 Analyze Graph → 4 Intersection` (or `nSolve(3*ln(x + 2) = x^2 - 4, x) | x > 0`).",
        "The intersection for {{x > 0}} occurs at {{x = 2.968005... ≈ 2.97}} (3 s.f.).",
      ],
      commonError: "Running nSolve without a constraint and reporting the negative root x ≈ −1.78, or rounding to 2 s.f. instead of 3 s.f.",
    },
    {
      id: "exam-p2-q03",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "3a-geometry-trig",
      guideRef: "3d-geometry-sine-cosine",
      commandTerm: "Determine",
      question:
        "[Section A · SL · GDC] In triangle {{ABC}}, {{a = 8 cm}}, {{b = 11 cm}}, and {{∠A = 40°}}. Using the sine rule in **DEG** mode on your TI-Nspire CX, determine all possible values of {{∠B}} (to 3 s.f.).",
      options: [
        "62.1° or 118° (two valid triangles exist)",
        "62.1° only (the obtuse supplement exceeds 180°)",
        "46.2° or 134° (two valid triangles exist)",
        "No triangle exists because sin B exceeds 1",
      ],
      answerIndex: 0,
      hints: [
        "Ensure your TI-Nspire CX is in **DEG** mode, then compute {{sin B = (11 sin 40°)/8}}.",
        "After finding the acute angle {{B_1 = arcsin(sin B)}}, ALWAYS test the supplement {{B_2 = 180° - B_1}}: is {{∠A + B_2 < 180°}}?",
      ],
      strategy: "Whenever SSA is given with the opposite side shorter than the adjacent side (a < b), ALWAYS check the ambiguous obtuse angle 180° − B₁!",
      explanation:
        "By the sine rule, {{sin B = (11 sin 40°)/8 ≈ 0.88383 < 1}}. In DEG mode, {{B_1 = arcsin(0.88383) ≈ 62.108° ≈ 62.1°}}. Checking the supplement gives {{B_2 = 180° - 62.108° = 117.892° ≈ 118°}}. Since {{40° + 117.9° = 157.9° < 180°}}, BOTH triangles are valid.",
    },
    {
      id: "exam-p2-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "3a-geometry-trig",
      guideRef: "3d-geometry-sine-cosine",
      commandTerm: "Calculate",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" role="img" aria-label="Triangle ABC with AB = 14.2 km, AC = 11.6 km, and included angle A = 58 degrees"><rect width="280" height="180" fill="#f8fafc" rx="10"/><polygon points="48,145 240,145 145,35" fill="#e0e7ff" stroke="#4338ca" stroke-width="2.2"/><path d="M 74 145 A 26 26 0 0 0 65 125" fill="none" stroke="#dc2626" stroke-width="2"/><text x="34" y="152" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">A</text><text x="246" y="152" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">B</text><text x="142" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">C</text><text x="128" y="164" font-family="sans-serif" font-size="12" fill="#1e293b">14.2 km</text><text x="58" y="84" font-family="sans-serif" font-size="12" fill="#1e293b">11.6 km</text><text x="78" y="135" font-family="sans-serif" font-size="12" fill="#dc2626">58°</text><text x="200" y="84" font-family="sans-serif" font-size="12" fill="#4338ca">BC = ?</text></svg>',
      question:
        "[Section A · SL · GDC] Two hiking trails leave a base camp {{A}} at an angle of {{58°}} to each other. Checkpoint {{B}} is {{14.2 km}} from {{A}} and checkpoint {{C}} is {{11.6 km}} from {{A}}. Calculate the straight-line distance {{BC}} in km, giving your answer to **3 significant figures**.",
      answer: { type: "number", value: 12.7, tolerance: 0.05 },
      traps: [
        {
          spec: { type: "number", value: 162, tolerance: 1 },
          feedback: "161.6 is BC² — don't forget to take the square root!",
        },
        {
          spec: { type: "number", value: 17.2, tolerance: 0.2 },
          feedback: "Check your calculator angle mode (DEG, not RAD) and the minus sign in the cosine rule: b² + c² − 2bc cos A.",
        },
      ],
      hints: [
        "Two sides and the included angle (SAS) immediately call for the cosine rule: {{BC^2 = AB^2 + AC^2 - 2(AB)(AC) cos A}}.",
        "Switch your TI-Nspire CX to **DEG** mode, evaluate {{sqrt(14.2^2 + 11.6^2 - 2*14.2*11.6*cos(58°))}}, and round to 3 s.f.",
      ],
      strategy: "Always check the status bar of your TI-Nspire CX (DEG vs RAD) before pressing Enter on any trigonometry calculation.",
      solution: [
        "Apply the cosine rule: {{BC^2 = 14.2^2 + 11.6^2 - 2(14.2)(11.6) cos(58°)}}.",
        "TI-Nspire CX (DEG mode): {{BC^2 = 201.64 + 134.56 - 329.44(0.529919...) = 161.6234...}}.",
        "Take the square root: {{BC = sqrt(161.6234...) = 12.7131... ≈ 12.7 km}} (3 s.f.).",
      ],
      commonError: "Leaving the TI-Nspire CX in RAD mode when evaluating cos(58°), or forgetting to take the square root at the end.",
    },
    {
      id: "exam-p2-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "4-stats-probability",
      guideRef: "discrete-binomial-normal",
      commandTerm: "Calculate",
      question:
        "[Section A · SL · GDC] A quality-control sensor independently flags a circuit board for inspection with probability {{0.35}}. Out of a batch of {{20}} circuit boards, let {{X}} be the number flagged. Calculate {{P(X ≥ 9)}} to **3 significant figures**.",
      answer: { type: "number", value: 0.238, tolerance: 0.003 },
      traps: [
        {
          spec: { type: "number", value: 0.122, tolerance: 0.005 },
          feedback: "0.122 is P(X ≥ 10) = 1 − P(X ≤ 9). Because X is discrete, P(X ≥ 9) INCLUDES 9, so use binomCdf(20, 0.35, 9, 20)!",
        },
        {
          spec: { type: "number", value: 0.762, tolerance: 0.005 },
          feedback: "0.762 is P(X ≤ 8), the complement of P(X ≥ 9) — subtract from 1!",
        },
      ],
      hints: [
        "Model {{X ~ B(20, 0.35)}}. Since {{X}} is discrete, {{P(X ≥ 9)}} includes {{X = 9}}, {{10}}, …, {{20}}.",
        "On TI-Nspire CX: `Menu → 5 Probability → 5 Distributions → B Binomial Cdf` with `n = 20`, `p = 0.35`, `lower = 9`, `upper = 20`.",
      ],
      strategy: "Use the TI-Nspire CX's direct lower/upper bounds in `binomCdf(n, p, 9, 20)` to eliminate off-by-one complement mistakes!",
      solution: [
        "State the distribution: {{X ~ B(20, 0.35)}}.",
        "TI-Nspire CX: `binomCdf(20, 0.35, 9, 20)` (equivalently {{1 - P(X ≤ 8)}}).",
        "Result: {{P(X ≥ 9) = 0.237622... ≈ 0.238}} (3 s.f.).",
      ],
      commonError: "Computing 1 − P(X ≤ 9) instead of 1 − P(X ≤ 8), accidentally excluding X = 9.",
    },
    {
      id: "exam-p2-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "4-stats-probability",
      guideRef: "discrete-binomial-normal",
      commandTerm: "Find",
      question:
        "[Section A · SL · GDC] The masses of ceramic tiles follow a normal distribution {{X ~ N(50, σ^2)}} (in grams). Given that {{P(X > 62) = 0.12}}, find the standard deviation {{σ}} to **3 significant figures**.",
      answer: { type: "number", value: 10.2, tolerance: 0.05 },
      traps: [
        {
          spec: { type: "number", value: -10.2, tolerance: 0.1 },
          feedback: "You entered 0.12 (upper tail) into invNorm instead of the left-tail area 1 − 0.12 = 0.88; standard deviation σ must be positive!",
        },
        {
          spec: { type: "number", value: 1.17, tolerance: 0.02 },
          feedback: "1.175 is the z-score invNorm(0.88) — now solve (62 − 50)/σ = 1.175 for σ!",
        },
      ],
      hints: [
        "Standardise using {{Z = (X - μ)/σ ~ N(0, 1)}}. Convert the right-tail probability {{P(X > 62) = 0.12}} into the left-tail area {{P(Z < z) = 1 - 0.12 = 0.88}}.",
        "On TI-Nspire CX: `invNorm(0.88, 0, 1)` gives {{z ≈ 1.17499}}. Then solve {{(62 - 50)/σ = 1.17499}}.",
      ],
      strategy: "Whenever μ or σ is unknown, ALWAYS standardise to Z ~ N(0, 1) and keep full GDC digits for z until the final 3 s.f. rounding.",
      solution: [
        "Convert to a left-tail probability: {{P(X ≤ 62) = 1 - 0.12 = 0.88}}.",
        "TI-Nspire CX: `invNorm(0.88, 0, 1)` gives {{z = 1.1749868...}}.",
        "Standardise: {{(62 - 50)/σ = 1.1749868...}}, so {{σ = 12 / 1.1749868... = 10.21288... ≈ 10.2}} (3 s.f.).",
      ],
      commonError: "Entering area = 0.12 directly into invNorm (giving z = −1.175 and a negative σ), or rounding z prematurely to 1.17.",
    },
    {
      id: "exam-p2-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      topicId: "5a-differentiation",
      guideRef: "curve-sketching-optimization-kinematics",
      commandTerm: "Find",
      question:
        "[Section A · SL · GDC] Consider the function {{f(x) = x^2 e^(-0.5x)}} for {{x ≥ 0}}. Using your TI-Nspire CX GDC (`Analyze Graph → Maximum`), find the coordinates of the local maximum of {{y = f(x)}} (to 3 s.f.).",
      options: [
        "(2, 1.47)",
        "(4, 2.17)",
        "(4, 16.0)",
        "(6.83, 1.54)",
      ],
      answerIndex: 1,
      hints: [
        "Graph {{f_1(x) = x^2 * e^(-0.5x)}} on TI-Nspire CX with window {{[0, 12] × [0, 3]}} and run `Menu → 6 Analyze Graph → 3 Maximum`.",
        "You can cross-check analytically: {{f'(x) = (2x - 0.5x^2)e^(-0.5x) = 0.5x(4 - x)e^(-0.5x) = 0}} at {{x = 4}}.",
      ],
      strategy: "Pair a quick mental derivative check (x = 4) with the TI-Nspire CX maximum readout to catch any graphing-window errors.",
      explanation:
        "Setting {{f'(x) = (2x - 0.5x^2)e^(-0.5x) = 0}} gives {{x = 4}} for {{x > 0}} (confirmed by TI-Nspire CX `Analyze Graph → Maximum`). Evaluating {{f(4) = 16 e^(-2) = 2.16536... ≈ 2.17}}, so the local maximum is at {{(4, 2.17)}}.",
    },
    {
      id: "exam-p2-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      topicId: "5b-integration-des-maclaurin",
      guideRef: "integration-areas-kinematics",
      commandTerm: "Calculate",
      question:
        "[Section A · SL · GDC] A particle moves in a straight line with velocity {{v(t) = 3 sin(0.8t) - 1.2}} {{m/s}} for {{0 ≤ t ≤ 5}} seconds (with {{0.8t}} in **radians**). Calculate the **total distance** travelled by the particle during the first 5 seconds, giving your answer in metres to **3 significant figures**.",
      answer: { type: "number", value: 6.59, tolerance: 0.03 },
      traps: [
        {
          spec: { type: "number", value: 0.201, tolerance: 0.01 },
          feedback: "0.201 m is the net DISPLACEMENT ∫₀⁵ v(t) dt — total distance requires absolute value: ∫₀⁵ |v(t)| dt!",
        },
        {
          spec: { type: "number", value: 5.79, tolerance: 0.05 },
          feedback: "Ensure your TI-Nspire CX is in RAD mode and integrate |3 sin(0.8t) − 1.2| from 0 to 5.",
        },
      ],
      hints: [
        "Total distance is {{∫_0^5 |v(t)| dt}} (NOT {{∫_0^5 v(t) dt}}, which cancels forward and backward motion!).",
        "Ensure TI-Nspire CX is in **RAD** mode, press `Menu → 4 Calculus → 2 Numerical Integral`, and enter `nInt(abs(3*sin(0.8*t) - 1.2), t, 0, 5)`.",
      ],
      strategy: "On Paper 2 kinematics, write `∫₀⁵ |v(t)| dt` explicitly on paper to earn the M1 method mark before pressing Enter on your TI-Nspire CX!",
      solution: [
        "State the total-distance integral: {{d = ∫_0^5 |3 sin(0.8t) - 1.2| dt}}.",
        "Ensure TI-Nspire CX is in **RAD** mode (the particle reverses direction at {{t ≈ 0.514 s}} and {{t ≈ 3.413 s}}).",
        "TI-Nspire CX: `nInt(abs(3*sin(0.8*t) - 1.2), t, 0, 5)` gives {{6.59089... ≈ 6.59 m}} (3 s.f.).",
      ],
      commonError: "Omitting the absolute value bars (computing net displacement 0.201 m instead of total distance 6.59 m), or using DEG mode.",
    },

    // ======================= SECTION A (HL Extensions · TI-Nspire CX GDC) ====
    {
      id: "exam-p2-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      topicId: "1b-complex-proofs-systems",
      guideRef: "linear-systems-3x3",
      commandTerm: "Solve",
      question:
        "[Section A · HL · GDC] Use the TI-Nspire CX `rref(` command (or `linSolve`) to solve the {{3 × 3}} linear system:\n{{2x + y - z = -1}}, {{x - 3y + 2z = 19}}, {{3x + 2y + z = 10}}.\nGive the unique solution as the ordered triple {{x, y, z}} separated by commas.",
      answer: { type: "list", values: [3, -2, 5], ordered: true, display: "3, −2, 5" },
      traps: [
        {
          spec: { type: "list", values: [3, 2, 5], ordered: true },
          feedback: "Check the sign of y: 2(3) + (−2) − 5 = −1, whereas y = +2 gives 2(3) + 2 − 5 = 3 ≠ −1.",
        },
      ],
      hints: [
        "Form the {{3 × 4}} augmented matrix `[[2, 1, -1, -1], [1, -3, 2, 19], [3, 2, 1, 10]]`.",
        "On TI-Nspire CX Calculator, press `Menu → 7 Matrix & Vector → 5 Reduced Row-Echelon Form` (`rref(`) and read the right-hand column.",
      ],
      strategy: "Always plug your GDC solution (x, y, z) mentally into one of the original equations to guard against a matrix typo.",
      solution: [
        "Enter the augmented matrix into TI-Nspire CX: `rref([[2, 1, -1, -1], [1, -3, 2, 19], [3, 2, 1, 10]])`.",
        "The reduced row-echelon form is `[[1, 0, 0, 3], [0, 1, 0, -2], [0, 0, 1, 5]]`.",
        "Therefore {{x = 3}}, {{y = -2}}, {{z = 5}} (check: {{3(3) + 2(-2) + 5 = 10}}).",
      ],
      commonError: "Entering −1 instead of +1 in the augmented matrix or scrambling the variable column order.",
    },
    {
      id: "exam-p2-q10",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "3b-vectors-planes",
      guideRef: "intersections-angles-distances",
      commandTerm: "Calculate",
      question:
        "[Section A · HL · GDC] A line {{L}} has direction vector {{d = (2, -1, 3)}} and a plane {{Π}} has Cartesian equation {{3x + 2y - 4z = 7}}. Calculate the acute angle between {{L}} and {{Π}} in **degrees** (to 3 s.f.).",
      options: ["66.6°", "0.408°", "23.4°", "35.1°"],
      answerIndex: 2,
      hints: [
        "Read the plane's normal vector {{n = (3, 2, -4)}}. Remember the angle {{α}} between a LINE and a PLANE uses **sine**, NOT cosine: {{sin α = |d · n| / (|d||n|)}}!",
        "On TI-Nspire CX (DEG mode): compute `abs(dotP([2,-1,3],[3,2,-4])) / (norm([2,-1,3])*norm([3,2,-4]))` and apply `arcsin`.",
      ],
      strategy: "Line–plane angle = arcsin(|d · n| / (|d||n|)) = 90° − arccos(…). Using arcsin directly avoids forgetting to subtract from 90°!",
      explanation:
        "The plane normal is {{n = (3, 2, -4)}}. Compute {{|d · n| = |2(3) + (-1)(2) + 3(-4)| = |6 - 2 - 12| = 8}}, {{|d| = sqrt(14)}}, and {{|n| = sqrt(29)}}. Therefore {{sin α = 8 / sqrt(406) ≈ 0.39703}}, giving {{α = arcsin(0.39703) ≈ 23.393° ≈ 23.4°}} (in DEG mode).",
    },
    {
      id: "exam-p2-q11",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      topicId: "4-stats-probability",
      guideRef: "probability-conditional-bayes",
      commandTerm: "Calculate",
      question:
        "[Section A · HL · GDC] Microchips are produced by three lines: Line X makes {{50%}} with a {{2%}} fault rate, Line Y makes {{30%}} with a {{4%}} fault rate, and Line Z makes {{20%}} with a {{5%}} fault rate. A randomly chosen microchip is found to be faulty (event {{F}}). Using Bayes' theorem, calculate the probability {{P(Y | F)}} that it came from Line Y.",
      options: ["0.300", "0.012", "0.313", "0.375"],
      answerIndex: 3,
      hints: [
        "First find the total probability of a fault via the law of total probability: {{P(F) = P(X)P(F|X) + P(Y)P(F|Y) + P(Z)P(F|Z)}}.",
        "Then apply Bayes' theorem: {{P(Y | F) = [P(Y)P(F|Y)] / P(F)}}.",
      ],
      strategy: "Draw a 3-branch tree diagram — the numerator is the single path Y → F, and the denominator is the sum of ALL three faulty paths.",
      explanation:
        "By the law of total probability, {{P(F) = 0.50(0.02) + 0.30(0.04) + 0.20(0.05) = 0.010 + 0.012 + 0.010 = 0.032}}. Applying Bayes' theorem gives {{P(Y | F) = (0.30 * 0.04)/0.032 = 0.012/0.032 = 3/8 = 0.375}}.",
    },

    // ======================= SECTION B (Extended Modelling · GDC) ============
    {
      id: "exam-p2-q12",
      kind: "written",
      difficulty: "core",
      level: "SL",
      topicId: "3a-geometry-trig",
      guideRef: "trig-identities-graphs-equations",
      commandTerm: "Calculate",
      marks: 8,
      question:
        "[Section B · SL · GDC · 8 marks] The depth of water {{h(t)}} (in metres) at a harbour entrance {{t}} hours after midnight is modelled by\n{{h(t) = 4.5 + 2.8 cos((pi/6)(t - 4))}}, for {{0 ≤ t ≤ 12}}.\n(a) Write down the maximum depth, minimum depth, and period of the tide. [3 marks]\n(b) A cargo vessel requires a depth of at least {{6.0 m}} to enter the harbour safely. Using your TI-Nspire CX GDC (in **RAD** mode), find the two values of {{t ∈ [0, 12]}} when {{h(t) = 6.0}}, giving each to 3 s.f. [3 marks]\n(c) Hence calculate the total duration (in hours, to 3 s.f.) during this 12-hour period when the vessel can enter safely. [2 marks]",
      hints: [
        "For {{a cos(b(t - c)) + d}}: maximum = {{d + |a|}}, minimum = {{d - |a|}}, period = {{2pi / b}}.",
        "On TI-Nspire CX Graphs (RAD mode), plot {{f_1(x) = 4.5 + 2.8 cos((pi/6)(x - 4))}} and {{f_2(x) = 6}} on {{[0, 12] × [0, 8]}} and find both intersections.",
        "Keep full GDC precision ({{t_1 = 2.07975...}}, {{t_2 = 5.92025...}}) before subtracting {{t_2 - t_1}} and rounding to 3 s.f.!",
      ],
      strategy: "Never subtract already-rounded 3 s.f. numbers if you still have full GDC digits stored — carry 5+ digits internally!",
      modelAnswer:
        "(a) Maximum depth = 4.5 + 2.8 = 7.3 m; minimum depth = 4.5 - 2.8 = 1.7 m; period = 2π / (π/6) = 12 hours.\n(b) Setting 4.5 + 2.8 cos((π/6)(t - 4)) = 6.0 gives cos((π/6)(t - 4)) = 1.5 / 2.8 = 15/28. Using TI-Nspire CX in RAD mode (graphing f1(x) = 4.5 + 2.8 cos((π/6)(x - 4)) and f2(x) = 6.0 and selecting Analyze Graph → Intersection, or solving (π/6)(t - 4) = ±arccos(15/28) = ±1.00544 rad), we obtain t_1 = 4 - 1.92025 = 2.07975 ≈ 2.08 hours and t_2 = 4 + 1.92025 = 5.92025 ≈ 5.92 hours.\n(c) Since high tide occurs at t = 4 (inside [t_1, t_2]), the depth satisfies h(t) ≥ 6.0 throughout [2.07975, 5.92025]. The total safe duration is 5.92025 - 2.07975 = 3.8405 ≈ 3.84 hours (3 s.f.).",
      markScheme: [
        {
          point: "A1: States maximum depth = 7.3 m",
          keywords: ["7.3"],
        },
        {
          point: "A1: States minimum depth = 1.7 m",
          keywords: ["1.7"],
        },
        {
          point: "A1: States period = 12 hours",
          keywords: ["12 hours", "period = 12"],
        },
        {
          point: "M1: Sets up equation 4.5 + 2.8 cos((π/6)(t − 4)) = 6.0 (or sketches GDC intersection)",
          keywords: ["15/28", "intersection"],
        },
        {
          point: "A1: Finds first crossing time t₁ ≈ 2.08 hours (3 s.f.)",
          keywords: ["2.08", "2.079"],
        },
        {
          point: "A1: Finds second crossing time t₂ ≈ 5.92 hours (3 s.f.)",
          keywords: ["5.92", "5.920"],
        },
        {
          point: "M1: Subtracts t₂ − t₁ using full precision across the high-tide peak at t = 4",
          keywords: ["5.92025 - 2.07975", "t = 4"],
        },
        {
          point: "A1: Obtains total duration 3.84 hours (3 s.f.)",
          keywords: ["3.84"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Extracts basic sinusoidal parameters (max, min, or period) from the formula.",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Correct sinusoidal features and finds at least one crossing time accurately via GDC in RAD mode.",
        },
        {
          band: "High (6–8 marks)",
          marks: [6, 8],
          descriptor: "All parameters exact, both intersections 2.08 and 5.92 accurate to 3 s.f., and safe window duration 3.84 h cleanly computed.",
        },
      ],
      commonError: "Leaving the TI-Nspire CX in DEG mode when graphing cos((π/6)(t − 4)), producing a flat horizontal line.",
    },
    {
      id: "exam-p2-q13",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      topicId: "5a-differentiation",
      guideRef: "curve-sketching-optimization-kinematics",
      commandTerm: "Find",
      marks: 9,
      question:
        "[Section B · SL · GDC · 9 marks] The concentration of a medical tracer (in mg/L) {{x}} hours after injection is modelled by\n{{C(x) = (x^2 + 3)e^(-0.4x)}}, for {{x ≥ 0}}.\n(a) Show that {{C'(x) = -0.4(x^2 - 5x + 3)e^(-0.4x)}}. [3 marks]\n(b) Using your TI-Nspire CX GDC (or the quadratic formula), find the coordinates of both stationary points for {{x > 0}} to 3 s.f., and identify which is the local minimum and which is the local maximum. [4 marks]\n(c) Using your GDC to inspect {{C''(x)}} (or `Analyze Graph → Inflection`), find the {{x}}-coordinate (to 3 s.f.) at which the tracer concentration is increasing most rapidly. [2 marks]",
      hints: [
        "Apply the product rule to {{(x^2 + 3)e^(-0.4x)}} and factor out {{-0.4 e^(-0.4x)}} from {{2x - 0.4x^2 - 1.2}}.",
        "Since {{e^(-0.4x) > 0}} for all {{x}}, solve {{x^2 - 5x + 3 = 0}} (or use TI-Nspire CX `Analyze Graph → Minimum / Maximum`).",
        "The concentration increases most rapidly at the point of inflection BETWEEN the local minimum and local maximum where {{C'(x)}} reaches its peak!",
      ],
      strategy: "On TI-Nspire CX, graphing f₂(x) = d/dx(f₁(x)) lets you find the exact x-coordinate of fastest increase via `Analyze Graph → Maximum` of f₂!",
      modelAnswer:
        "(a) Using the product and chain rules: C'(x) = 2x e^(-0.4x) + (x^2 + 3)(-0.4 e^(-0.4x)) = (-0.4x^2 + 2x - 1.2)e^(-0.4x). Factoring out -0.4 gives C'(x) = -0.4(x^2 - 5x + 3)e^(-0.4x), as required.\n(b) Since e^(-0.4x) > 0, C'(x) = 0 when x^2 - 5x + 3 = 0, giving x = (5 ± sqrt(13))/2. On TI-Nspire CX (or directly):\n- x_1 = (5 - sqrt(13))/2 ≈ 0.69722, C(x_1) ≈ 2.6377 → local minimum at (0.697, 2.64).\n- x_2 = (5 + sqrt(13))/2 ≈ 4.30278, C(x_2) ≈ 3.8481 → local maximum at (4.30, 3.85).\n(c) The rate of increase C'(x) is maximised at the point of inflection between 0.697 and 4.30 where C''(x) = 0. Using TI-Nspire CX (`Analyze Graph → Inflection` on C(x), or `Maximum` on C'(x), or solving x^2 - 10x + 15.5 = 0), we obtain x = 5 - sqrt(9.5) ≈ 1.9178 ≈ 1.92 hours (3 s.f.).",
      markScheme: [
        {
          point: "M1: Applies product rule with d/dx(e^(−0.4x)) = −0.4e^(−0.4x)",
          keywords: ["2x e^(-0.4x)", "-0.4 e^(-0.4x)", "-0.4e^(-0.4x)"],
        },
        {
          point: "A1: Collects polynomial terms to (−0.4x² + 2x − 1.2)e^(−0.4x)",
          keywords: ["-0.4x^2 + 2x - 1.2", "2x - 1.2"],
        },
        {
          point: "A1: Factors out −0.4 cleanly to show C'(x) = −0.4(x² − 5x + 3)e^(−0.4x)",
          keywords: ["as required", "factoring out -0.4"],
        },
        {
          point: "M1: Solves x² − 5x + 3 = 0 (since e^(−0.4x) > 0) to get (5 ± √13)/2",
          keywords: ["sqrt(13)", "x^2 - 5x + 3 = 0"],
        },
        {
          point: "A1: Finds local minimum coordinates (0.697, 2.64)",
          keywords: ["0.697", "2.64"],
        },
        {
          point: "A1: Finds local maximum coordinates (4.30, 3.85)",
          keywords: ["4.30", "3.85"],
        },
        {
          point: "A1: Correctly classifies (0.697, 2.64) as local minimum and (4.30, 3.85) as local maximum",
          keywords: ["local minimum", "local maximum"],
        },
        {
          point: "M1: Identifies point of inflection between minimum and maximum (C''(x) = 0 or maximum of C'(x))",
          keywords: ["point of inflection", "c''(x) = 0"],
        },
        {
          point: "A1: Obtains x ≈ 1.92 hours (3 s.f.)",
          keywords: ["1.92", "1.917"],
        },
      ],
      markbands: [
        {
          band: "Low (0–3 marks)",
          marks: [0, 3],
          descriptor: "Completes the 'Show that' product-rule derivative cleanly or locates stationary x-values on the GDC.",
        },
        {
          band: "Mid (4–6 marks)",
          marks: [4, 6],
          descriptor: "Finds and classifies both stationary points accurately to 3 s.f. with full (x, y) coordinates.",
        },
        {
          band: "High (7–9 marks)",
          marks: [7, 9],
          descriptor: "Rigorous forward proof in (a), both stationary coordinates classified accurately, and fastest-increase inflection x ≈ 1.92 identified.",
        },
      ],
      commonError: "Reporting the second inflection point x ≈ 8.08 (where concentration is DECREASING most rapidly!) instead of x ≈ 1.92.",
    },
    {
      id: "exam-p2-q14",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "5b-integration-des-maclaurin",
      guideRef: "advanced-integration-volumes-hl",
      commandTerm: "Calculate",
      marks: 9,
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 205" role="img" aria-label="Curves y = 2 sin x + 1 and y = e^(0.5x) intersecting at x = 0 and x = b with enclosed region R shaded"><rect width="300" height="205" fill="#f8fafc" rx="10"/><line x1="35" y1="175" x2="275" y2="175" stroke="#64748b" stroke-width="1.5"/><line x1="55" y1="190" x2="55" y2="18" stroke="#64748b" stroke-width="1.5"/><path d="M 55 130 C 105 45, 165 25, 224 50 C 175 88, 115 114, 55 130 Z" fill="#c7d2fe" fill-opacity="0.7"/><path d="M 55 130 C 110 40, 175 20, 258 80" fill="none" stroke="#4338ca" stroke-width="2.2"/><path d="M 55 130 C 120 112, 180 86, 255 24" fill="none" stroke="#dc2626" stroke-width="2.2"/><circle cx="55" cy="130" r="3.5" fill="#1e293b"/><circle cx="224" cy="50" r="4" fill="#0f766e"/><text x="122" y="88" font-family="sans-serif" font-size="13" font-weight="bold" fill="#312e81">R</text><text x="120" y="34" font-family="sans-serif" font-size="11.5" fill="#4338ca">y = 2 sin x + 1</text><text x="180" y="108" font-family="sans-serif" font-size="11.5" fill="#dc2626">y = e^(0.5x)</text><text x="230" y="54" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f766e">(b, y_b)</text><text x="41" y="134" font-family="sans-serif" font-size="11" fill="#1e293b">(0,1)</text><text x="268" y="169" font-family="sans-serif" font-size="12" fill="#64748b">x</text></svg>',
      question:
        "[Section B · HL · GDC · 9 marks] The region {{R}} is enclosed between the curves {{y_1 = 2 sin x + 1}} and {{y_2 = e^(0.5x)}} for {{0 ≤ x ≤ b}}, where {{b > 0}} is the positive {{x}}-coordinate of their intersection (with {{x}} in **radians**).\n(a) Verify that the curves intersect at {{(0, 1)}}, and use your TI-Nspire CX GDC to find {{b}} to 4 decimal places (and 3 s.f.). [3 marks]\n(b) Calculate the area of region {{R}} to 3 s.f. [2 marks]\n(c) Region {{R}} is rotated through {{2pi}} radians about the {{x}}-axis to form a solid of revolution. Write down the exact integral for its volume {{V}} and calculate {{V}} to 3 s.f. [4 marks]",
      hints: [
        "In **RAD** mode on TI-Nspire CX, find {{b}} via `Analyze Graph → Intersection` (or `nSolve(2*sin(x) + 1 = e^(0.5*x), x) | x > 1`) and STORE it in variable `b`!",
        "For volume about the {{x}}-axis between two curves, use the washer formula {{V = pi ∫_0^b (y_1^2 - y_2^2) dx}} — NEVER {{pi ∫_0^b (y_1 - y_2)^2 dx}}!",
      ],
      strategy: "Store high-precision intersection limits in a named TI-Nspire CX variable (`b := 2.04464255`) so every subsequent numerical integral has zero truncation error!",
      modelAnswer:
        "(a) At x = 0: y_1(0) = 2 sin(0) + 1 = 1 and y_2(0) = e^0 = 1, so both curves pass through (0, 1). Using TI-Nspire CX in RAD mode (`nSolve(2*sin(x) + 1 = e^(0.5*x), x) | x > 1`), the positive intersection occurs at b = 2.04464... ≈ 2.0446 (4 d.p.) or 2.04 (3 s.f.).\n(b) On [0, b], y_1 ≥ y_2, so the area of R is A = ∫_0^b (2 sin x + 1 - e^(0.5x)) dx. Using TI-Nspire CX `nInt` with stored b = 2.04464255 gives A = 1.39799... ≈ 1.40 square units (3 s.f.).\n(c) Using the washer formula about the x-axis, V = π ∫_0^b ((2 sin x + 1)^2 - (e^(0.5x))^2) dx = π ∫_0^b ((2 sin x + 1)^2 - e^x) dx. Evaluating via TI-Nspire CX numerical integration gives V = 18.9905... ≈ 19.0 cubic units (3 s.f.).",
      markScheme: [
        {
          point: "B1: Verifies y₁(0) = 1 and y₂(0) = 1 explicitly",
          keywords: ["y_1(0) = 1", "e^0 = 1"],
        },
        {
          point: "M1: Sets 2 sin x + 1 = e^(0.5x) in RAD mode using GDC intersection / nSolve",
          keywords: ["nsolve", "rad mode"],
        },
        {
          point: "A1: Finds upper intersection b = 2.0446 (4 d.p.) / 2.04 (3 s.f.)",
          keywords: ["2.0446", "2.04"],
        },
        {
          point: "M1: Sets up area integral ∫₀ᵇ (2 sin x + 1 − e^(0.5x)) dx",
          keywords: ["2 sin x + 1 - e^(0.5x)", "y_1 ≥ y_2"],
        },
        {
          point: "A1: Computes area A ≈ 1.40 (3 s.f.)",
          keywords: ["1.40", "1.397"],
        },
        {
          point: "M1: Uses washer formula π ∫₀ᵇ (y₁² − y₂²) dx (with factor π)",
          keywords: ["washer", "π ∫"],
        },
        {
          point: "A1: Writes integrand accurately as (2 sin x + 1)² − e^x",
          keywords: ["(2 sin x + 1)^2", "- e^x"],
        },
        {
          point: "M1: Evaluates definite integral with unrounded limit b via GDC",
          keywords: ["18.99", "numerical integration"],
        },
        {
          point: "A1: Rounds final volume accurately to 19.0 (3 s.f.)",
          keywords: ["19.0"],
        },
      ],
      markbands: [
        {
          band: "Low (0–3 marks)",
          marks: [0, 3],
          descriptor: "Verifies (0, 1) and locates b ≈ 2.04 on the GDC in RAD mode.",
        },
        {
          band: "Mid (4–6 marks)",
          marks: [4, 6],
          descriptor: "Computes area A ≈ 1.40 and writes the correct washer volume integral with π.",
        },
        {
          band: "High (7–9 marks)",
          marks: [7, 9],
          descriptor: "Full GDC precision carried throughout yielding b ≈ 2.0446, A ≈ 1.40, exact washer integral, and V ≈ 19.0.",
        },
      ],
      commonError: "Computing π ∫ (y₁ − y₂)² dx instead of π ∫ (y₁² − y₂²) dx, or omitting π from the volume integral.",
    },
    {
      id: "exam-p2-q15",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      topicId: "4-stats-probability",
      guideRef: "continuous-rvs-pdf-cdf-hl",
      commandTerm: "Calculate",
      marks: 8,
      question:
        "[Section B · HL · GDC · 8 marks] A continuous random variable {{X}} has probability density function\n{{f(x) = k x e^(-x^2 / 8)}} for {{0 ≤ x ≤ 4}}, and {{f(x) = 0}} otherwise.\n(a) Show analytically that {{k = 1 / (4(1 - e^(-2)))}}, and write down its value to 4 significant figures. [3 marks]\n(b) Using your TI-Nspire CX GDC, calculate {{E(X)}} and {{Var(X)}} to 3 s.f. [3 marks]\n(c) Find the median {{m}} of {{X}} to 3 s.f. [2 marks]",
      hints: [
        "For (a), integrate {{∫_0^4 x e^(-x^2/8) dx}} via substitution {{u = -x^2/8}} ({{du = -(x/4) dx}}), giving {{[-4 e^(-x^2/8)]_0^4}}.",
        "For (b), store `k := 1/(4*(1 - e^(-2)))` on TI-Nspire CX, then evaluate `E(X) = ∫₀⁴ x·f(x) dx`, `E(X²) = ∫₀⁴ x²·f(x) dx`, and `Var(X) = E(X²) − [E(X)]²`!",
        "For (c), solve {{∫_0^m f(x) dx = 0.5}}, which simplifies to {{(1 - e^(-m^2/8))/(1 - e^(-2)) = 0.5}} (or use TI-Nspire CX `nSolve`).",
      ],
      strategy: "Never compute Var(X) as ∫ (x − μ)² f(x) dx with a rounded μ — store full-precision μ or use E(X²) − [E(X)]² with unrounded GDC values!",
      modelAnswer:
        "(a) Setting ∫_0^4 k x e^(-x^2/8) dx = 1 and integrating using u = -x^2/8 (du = -(x/4) dx) gives k [-4 e^(-x^2/8)]_0^4 = 1, so k(-4e^(-2) - (-4)) = 4k(1 - e^(-2)) = 1. Hence k = 1 / (4(1 - e^(-2))) ≈ 0.2891 (4 s.f.).\n(b) Storing k = 0.2891294... on TI-Nspire CX:\n- E(X) = ∫_0^4 k x^2 e^(-x^2/8) dx = 2.14099... ≈ 2.14 (3 s.f.).\n- E(X^2) = ∫_0^4 k x^3 e^(-x^2/8) dx = 5.49572...\n- Var(X) = E(X^2) - [E(X)]^2 = 5.49572 - (2.14099)^2 = 0.91190... ≈ 0.912 (3 s.f.).\n(c) The median m satisfies ∫_0^m k x e^(-x^2/8) dx = 0.5, i.e. (1 - e^(-m^2/8))/(1 - e^(-2)) = 0.5. Solving gives e^(-m^2/8) = 0.5(1 + e^(-2)), so m = sqrt(-8 ln(0.5(1 + e^(-2)))) = 2.12832... ≈ 2.13 (3 s.f.).",
      markScheme: [
        {
          point: "M1: Sets ∫₀⁴ k x e^(−x²/8) dx = 1 and integrates via u = −x²/8 to obtain antiderivative −4k e^(−x²/8)",
          keywords: ["u = -x^2/8", "du = -(x/4)", "[-4"],
        },
        {
          point: "A1: Evaluates limits cleanly to 4k(1 − e^(−2)) = 1, showing k = 1/(4(1 − e^(−2)))",
          keywords: ["4k(1 - e^(-2))", "1 / (4(1 - e^(-2)))"],
        },
        {
          point: "A1: Gives numerical value k ≈ 0.2891 (4 s.f.)",
          keywords: ["0.2891"],
        },
        {
          point: "A1: Computes E(X) = ∫₀⁴ x f(x) dx ≈ 2.14 (3 s.f.)",
          keywords: ["2.14", "2.140"],
        },
        {
          point: "M1: Computes E(X²) ≈ 5.4957 and applies Var(X) = E(X²) − [E(X)]²",
          keywords: ["5.495", "e(x^2) - [e(x)]^2"],
        },
        {
          point: "A1: Obtains Var(X) ≈ 0.912 (3 s.f.)",
          keywords: ["0.912", "0.9119"],
        },
        {
          point: "M1: Sets CDF F(m) = ∫₀ᵐ f(x) dx = 0.5",
          keywords: ["0.5", "(1 - e^(-m^2/8))"],
        },
        {
          point: "A1: Solves accurately to find median m ≈ 2.13 (3 s.f.)",
          keywords: ["2.13", "2.128"],
        },
      ],
      markbands: [
        {
          band: "Low (0–2 marks)",
          marks: [0, 2],
          descriptor: "Sets the total integral equal to 1 and attempts substitution u = −x²/8.",
        },
        {
          band: "Mid (3–5 marks)",
          marks: [3, 5],
          descriptor: "Proves k analytically and uses TI-Nspire CX numerical integration to obtain E(X) ≈ 2.14.",
        },
        {
          band: "High (6–8 marks)",
          marks: [6, 8],
          descriptor: "Exact derivation of k, full-precision E(X) ≈ 2.14 and Var(X) ≈ 0.912, and verified median m ≈ 2.13.",
        },
      ],
      commonError: "Integrating ∫₀⁴ f(x) dx instead of ∫₀⁴ x f(x) dx for E(X), or forgetting to subtract [E(X)]² when computing Var(X).",
    },
  ],
};
