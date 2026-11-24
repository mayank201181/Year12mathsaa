import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "3b-vectors-planes",
  title: "Topic 3B: 3D Vectors, Lines & Planes (HL)",
  strand: "Topic 3: Geometry & Trigonometry",
  icon: "↗",
  level: "HL",
  summary:
    "Master IB Maths AA HL 3D vectors, dot and cross products, 3D lines (including skew lines), plane equations, line–plane & dihedral angles, 3-plane configurations, and shortest distances.",
  intro:
    "Vectors turn messy three-dimensional geometry into clean, exact algebra. Instead of wrestling with awkward spatial trigonometry, you can encode any point, ray, flat surface, angle, or shortest distance using 3-component column vectors and two powerhouse operations: the scalar (dot) product and the vector (cross) product. This HL-only topic (aligned to the provisional FA2029 IB Mathematics: Analysis & Approaches subject brief, AHL 3.12–3.18) appears relentlessly across Paper 1 (non-GDC exact algebra), Paper 2 (GDC vector & rref fluency), and Paper 3 investigations.",
  guide: [
    // =========================================================================
    // SECTION 1: 3D Vectors, Unit Vectors, Geometric Proofs & Dot Product
    // =========================================================================
    {
      id: "vectors-dot-product",
      heading: "[HL] 3D Vectors, Unit Vectors, Geometric Proofs & Dot Product",
      level: "HL",
      discovery: {
        problem:
          "Two drones leave a control tower at O(0, 0, 0). Drone A flies to A(2, 2, −1) and Drone B flies to B(−2, 3, 2). Without using a protractor or drawing a 3D model, how could you instantly tell whether their paths meet at a right angle at O?",
        idea:
          "Apply Pythagoras' theorem in 3D to △OAB! We have {{|OA|^2 = 4 + 4 + 1 = 9}}, {{|OB|^2 = 4 + 9 + 4 = 17}}, and displacement {{AB = (-4, 1, 3)}} so {{|AB|^2 = 16 + 1 + 9 = 26}}. Notice {{9 + 17 = 26}}! Expanding {{|b - a|^2 = |a|^2 + |b|^2 - 2(a_1 b_1 + a_2 b_2 + a_3 b_3)}} reveals that the right-angle test collapses to a single number: {{a_1 b_1 + a_2 b_2 + a_3 b_3 = 0}} — the dot product!",
      },
      body: `A **3D vector** carries both magnitude and direction and can be written in component form as **v** = (v₁, v₂, v₃) (a 3×1 column vector) or in standard unit-basis form as **v** = v₁**i** + v₂**j** + v₃**k**, where **i** = (1, 0, 0), **j** = (0, 1, 0), and **k** = (0, 0, 1) are mutually perpendicular unit vectors along the x-, y-, and z-axes.

### Position, Displacement & Unit Vectors
- The **position vector** of point A(a₁, a₂, a₃) relative to the origin O(0, 0, 0) is **a** = OA = (a₁, a₂, a₃).
- The **displacement vector** from A to B is **AB** = **b** − **a** = (b₁ − a₁, b₂ − a₂, b₃ − a₃) ("head minus tail").
- The **magnitude** (length) is {{|v| = sqrt(v_1^2 + v_2^2 + v_3^2)}}.
- The **unit vector** in the same direction as a non-zero vector **v** is {{v_hat = v / |v|}}, which has magnitude 1. Scaling a unit vector by k produces a vector of length |k| parallel to **v**.

### Collinearity & Vector Geometry Proofs
Two non-zero vectors **u** and **v** are **parallel** if and only if **u** = k**v** for some scalar k ≠ 0 (same direction if k > 0, opposite if k < 0). Three points A, B, C are **collinear** if **AB** = k**AC** (parallel vectors sharing a common point A).

In HL geometric proofs (midpoints, centroids, diagonals of parallelograms, ratio division), express every segment in terms of two or three non-coplanar base vectors:
- If M divides segment AB in the ratio m : n (so AM : MB = m : n), its position vector is {{m_vec = (n a + m b)/(m + n)}}.
- Setting m = n = 1 gives the midpoint {{(a + b)/2}}; in triangle ABC, the centroid G has position vector {{(a + b + c)/3}}.

### The Scalar (Dot) Product
For **v** = (v₁, v₂, v₃) and **w** = (w₁, w₂, w₃), the **dot product** produces a **scalar** (a real number, never a vector):
{{v · w = v_1 w_1 + v_2 w_2 + v_3 w_3 = |v| |w| cos θ}}
where θ ∈ [0, π] is the angle between **v** and **w** placed tail-to-tail.

Key algebraic properties of the dot product:
- **Commutative & Distributive**: **v** · **w** = **w** · **v**, and **u** · (**v** + **w**) = **u** · **v** + **u** · **w**.
- **Self-dot = squared length**: {{v · v = |v|^2}}. This is the secret weapon in HL algebraic vector proofs (e.g. expanding {{|v + w|^2 = |v|^2 + 2 v · w + |w|^2}}).
- **Perpendicularity**: Non-zero vectors **v** and **w** are perpendicular (**v** ⊥ **w**) if and only if **v** · **w** = 0.
- **Acute vs obtuse angle**: **v** · **w** > 0 means θ is acute; **v** · **w** < 0 means θ is obtuse. To find the **acute angle** between two lines (which have no single arrowhead orientation), take the absolute value: {{cos θ = |v · w| / (|v| |w|)}}.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 250" role="img" aria-label="3D coordinate axes showing position vectors a and b, displacement vector AB = b - a, and the geometric projection |v| cos theta of the dot product">
  <rect x="0" y="0" width="460" height="250" rx="12" fill="#f8fafc"/>
  <!-- Left panel: 3D Position & Displacement -->
  <text x="115" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#0f172a">3D Position &amp; Displacement</text>
  <!-- Axes origin (110, 170) -->
  <line x1="110" y1="170" x2="110" y2="42" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="110,38 106,46 114,46" fill="#94a3b8"/>
  <text x="118" y="48" font-size="11" font-weight="700" fill="#475569">z</text>
  <line x1="110" y1="170" x2="215" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="219,170 211,166 211,174" fill="#94a3b8"/>
  <text x="210" y="186" font-size="11" font-weight="700" fill="#475569">y</text>
  <line x1="110" y1="170" x2="45" y2="218" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="41,221 50,219 46,213" fill="#94a3b8"/>
  <text x="36" y="216" font-size="11" font-weight="700" fill="#475569">x</text>
  <circle cx="110" cy="170" r="3" fill="#0f172a"/>
  <text x="97" y="166" font-size="11" font-weight="700" fill="#0f172a">O</text>
  <!-- Vector OA (a) to (68, 128) -->
  <line x1="110" y1="170" x2="72" y2="132" stroke="#2563eb" stroke-width="2.4"/>
  <polygon points="68,128 77,131 71,137" fill="#2563eb"/>
  <circle cx="68" cy="128" r="3.5" fill="#2563eb"/>
  <text x="52" y="124" font-size="11" font-weight="700" fill="#1d4ed8">A</text>
  <text x="74" y="158" font-size="11" font-weight="700" fill="#1d4ed8">a</text>
  <!-- Vector OB (b) to (188, 92) -->
  <line x1="110" y1="170" x2="183" y2="97" stroke="#059669" stroke-width="2.4"/>
  <polygon points="188,92 179,95 185,101" fill="#059669"/>
  <circle cx="188" cy="92" r="3.5" fill="#059669"/>
  <text x="195" y="92" font-size="11" font-weight="700" fill="#047857">B</text>
  <text x="155" y="142" font-size="11" font-weight="700" fill="#047857">b</text>
  <!-- Displacement AB = b - a -->
  <line x1="68" y1="128" x2="181" y2="94" stroke="#dc2626" stroke-width="2.4" stroke-dasharray="5,3"/>
  <polygon points="186,93 177,91 179,99" fill="#dc2626"/>
  <text x="122" y="99" font-size="11" font-weight="700" text-anchor="middle" fill="#b91c1c">AB = b − a</text>
  <!-- Divider -->
  <line x1="235" y1="20" x2="235" y2="235" stroke="#e2e8f0" stroke-width="1.5"/>
  <!-- Right panel: Dot Product & Scalar Projection -->
  <text x="348" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#0f172a">Dot Product as Projection</text>
  <!-- Base vector w from (262, 178) to (432, 178) -->
  <line x1="262" y1="178" x2="426" y2="178" stroke="#059669" stroke-width="2.6"/>
  <polygon points="432,178 423,174 423,182" fill="#059669"/>
  <text x="415" y="196" font-size="12" font-weight="700" fill="#047857">w</text>
  <!-- Vector v from (262, 178) to (352, 82) -->
  <line x1="262" y1="178" x2="348" y2="86" stroke="#2563eb" stroke-width="2.6"/>
  <polygon points="352,82 343,86 349,91" fill="#2563eb"/>
  <text x="295" y="118" font-size="12" font-weight="700" fill="#1d4ed8">v</text>
  <!-- Perpendicular drop from (352, 82) to (352, 178) -->
  <line x1="352" y1="82" x2="352" y2="178" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="342" y="168" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1.4"/>
  <!-- Angle arc -->
  <path d="M 294,178 A 32,32 0 0,0 284,154" fill="none" stroke="#d97706" stroke-width="2"/>
  <text x="299" y="166" font-size="12" font-weight="700" fill="#b45309">θ</text>
  <!-- Projection bracket -->
  <line x1="262" y1="194" x2="352" y2="194" stroke="#7c3aed" stroke-width="2.2"/>
  <line x1="262" y1="189" x2="262" y2="199" stroke="#7c3aed" stroke-width="1.8"/>
  <line x1="352" y1="189" x2="352" y2="199" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="307" y="212" font-size="11" font-weight="700" text-anchor="middle" fill="#6d28d9">|v| cos θ</text>
  <text x="348" y="234" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">v · w = |w| (|v| cos θ)</text>
</svg>`,
      diagramCaption:
        "Left: Head-minus-tail displacement AB = b − a in right-handed 3D axes. Right: Geometrically, v · w multiplies the length of w by the signed projection |v| cos θ of v onto w.",
      whyItWorks:
        "Place **v** and **w** tail-to-tail at the origin so their tips form a triangle with third side **v** − **w**. By the Cosine Rule, {{|v - w|^2 = |v|^2 + |w|^2 - 2|v||w| cos θ}}. Expanding the left side in components gives {{(v_1 - w_1)^2 + (v_2 - w_2)^2 + (v_3 - w_3)^2 = |v|^2 + |w|^2 - 2(v_1 w_1 + v_2 w_2 + v_3 w_3)}}. Cancelling {{|v|^2 + |w|^2}} and dividing by −2 proves {{v_1 w_1 + v_2 w_2 + v_3 w_3 = |v||w| cos θ}} identically in every dimension!",
      workedExamples: [
        {
          title: "Displacement, Unit Vector & Perpendicularity Parameter",
          problem:
            "Points A(1, −1, 2), B(3, 1, 1), and C(k, 2, 4) lie in 3D space. (a) Find the unit vector in the direction of **AB**. (b) Find the exact value of k such that **AB** is perpendicular to **AC**.",
          steps: [
            "Compute the displacement vector **AB** = **b** − **a** = (3 − 1, 1 − (−1), 1 − 2) = (2, 2, −1).",
            "Find its magnitude: {{|AB| = sqrt(2^2 + 2^2 + (-1)^2) = sqrt(9) = 3}}.",
            "Divide by the magnitude to obtain the unit vector: {{u = (1/3)(2, 2, -1) = (2/3, 2/3, -1/3)}}.",
            "Compute **AC** = **c** − **a** = (k − 1, 2 − (−1), 4 − 2) = (k − 1, 3, 2).",
            "For **AB** ⊥ **AC**, set **AB** · **AC** = 0: {{2(k - 1) + 2(3) + (-1)(2) = 0}} ⇒ {{2k - 2 + 6 - 2 = 0}} ⇒ {{2k + 2 = 0}} ⇒ k = −1.",
          ],
          answer: "(a) {{(2/3, 2/3, -1/3)}}; (b) k = −1",
          yourTurn: {
            question:
              "Find the exact integer value of k such that the vectors **u** = (3, −2, 4) and **v** = (2, k, 1) are perpendicular.",
            answer: { type: "number", value: 5 },
            solution:
              "Set **u** · **v** = 0: 3(2) + (−2)(k) + 4(1) = 0 ⇒ 6 − 2k + 4 = 0 ⇒ 2k = 10 ⇒ k = 5.",
          },
        },
        {
          title: "Angle Between 3D Vectors & Vector Proof",
          problem:
            "(a) Find the angle θ between **p** = (1, 2, 2) and **q** = (2, −1, 2), giving your answer in degrees to 3 significant figures. (b) Prove using vectors that the diagonals of a rhombus are perpendicular.",
          steps: [
            "For (a), compute {{p · q = 1(2) + 2(-1) + 2(2) = 2 - 2 + 4 = 4}}.",
            "Compute magnitudes: {{|p| = sqrt(1 + 4 + 4) = 3}} and {{|q| = sqrt(4 + 1 + 4) = 3}}.",
            "Use {{cos θ = (p · q)/(|p||q|) = 4/9}}, giving {{θ = arccos(4/9) ≈ 63.6°}} (1.11 rad).",
            "For (b), let adjacent sides of rhombus OABC be **OA** = **a** and **OC** = **c**, with |**a**| = |**c**| since all sides are equal.",
            "The diagonals are **OB** = **a** + **c** and **CA** = **a** − **c**. Take their dot product: {{(a + c) · (a - c) = a · a - a · c + c · a - c · c = |a|^2 - |c|^2 = 0}}. Since both diagonals are non-zero, **OB** ⊥ **CA**.",
          ],
          answer: "(a) 63.6°; (b) {{(a + c) · (a - c) = |a|^2 - |c|^2 = 0}}, hence diagonals are perpendicular.",
          yourTurn: {
            question: "Find the exact magnitude |**v**| of the 3D vector **v** = (2, −3, 6).",
            answer: { type: "number", value: 7 },
            solution: "{{|v| = sqrt(2^2 + (-3)^2 + 6^2) = sqrt(4 + 9 + 36) = sqrt(49) = 7}}.",
          },
        },
      ],
      keyPoints: [
        "Always check whether vectors are placed tail-to-tail before interpreting θ in **v** · **w** = |**v**||**w**| cos θ; reversing one vector replaces θ with 180° − θ and flips the sign of **v** · **w**.",
        "To prove A, B, C are collinear, show **AB** = k**BC** (or **AB** = k**AC**) AND explicitly state that they share a common point (B or A).",
        "In algebraic vector proofs, turn length statements into dot products using {{|u|^2 = u · u}}.",
        "On the TI-Nspire CX GDC, enter vectors as row/column lists `[a, b, c]` and use `dotP(u, v)`, `norm(u)`, and `unitV(u)`.",
      ],
      strategies: [
        "Always check Paper 1 calculations for Pythagorean quadruples: (1, 2, 2) → length 3; (2, 3, 6) → length 7; (1, 4, 8) → length 9; (3, 4, 12) → length 13.",
        "When asked for the angle at vertex B of triangle ABC, form **BA** and **BC** (both pointing OUT of B), not **AB** and **BC**!",
        "If an IB HL question says 'Show that ... is perpendicular to ...', you must show both the dot-product arithmetic equalling 0 AND note that neither vector is the zero vector.",
      ],
      thinkDeeper:
        "Notice the Cauchy–Schwarz inequality falls straight out of the dot product: since |cos θ| ≤ 1, {{|v · w| <= |v||w|}}, with equality if and only if **v** and **w** are parallel! In 3D this yields {{(v_1 w_1 + v_2 w_2 + v_3 w_3)^2 <= (v_1^2 + v_2^2 + v_3^2)(w_1^2 + w_2^2 + w_3^2)}}, a classic HL Paper 3 inequality technique.",
    },

    // =========================================================================
    // SECTION 2: Vector, Parametric & Cartesian Equations of 3D Lines
    // =========================================================================
    {
      id: "vector-lines-skew",
      heading: "[HL] Vector, Parametric & Cartesian Equations of 3D Lines",
      level: "HL",
      discovery: {
        problem:
          "In 2D, any two straight lines that are not parallel MUST intersect at a single point. Does that still hold in 3D? Look at the front-bottom edge of your classroom and a back-vertical edge of the room: are they parallel? Do they ever meet?",
        idea:
          "Neither! In 3D space there is enough room for two non-parallel lines to miss each other completely at different heights. That fourth relationship — **skew lines** — is uniquely three-dimensional, and testing for it requires comparing 3 equations in only 2 parameters (λ and μ)!",
      },
      body: `A straight line in 3D cannot be written as a single linear equation ax + by + cz = d (that defines a plane!). Instead, it is uniquely determined by one **position vector** **a** = (a₁, a₂, a₃) of a known point on the line and one non-zero **direction vector** **b** = (b₁, b₂, b₃).

### Three Equivalent Forms of a 3D Line
1. **Vector form**: {{r = a + λ b}} (λ ∈ ℝ). Every real value of the parameter λ generates a unique point on the line. Note that **a** can be replaced by ANY point on the line, and **b** can be scaled by any non-zero constant k.
2. **Parametric form**:
   {{x = a_1 + λ b_1}}, {{y = a_2 + λ b_2}}, {{z = a_3 + λ b_3}} (λ ∈ ℝ).
3. **Cartesian (symmetric) form** (eliminating λ when b₁, b₂, b₃ ≠ 0):
   {{(x - a_1)/b_1 = (y - a_2)/b_2 = (z - a_3)/b_3}} (= λ).
   - **Zero-component caution**: If one direction component is zero — say **b** = (0, 3, −2) through (5, 1, 4) — do NOT divide by zero! Write {{x = 5}}, {{(y - 1)/3 = (z - 4)/(-2)}}.
   - **Coefficient-of-variable caution**: Rewrite {{(2x - 6)/5}} as {{(x - 3)/(5/2)}} before reading off a₁ = 3 and b₁ = 5/2!

### Constant-Velocity 3D Kinematics
When a particle/aircraft starts at **r**₀ at t = 0 and moves with constant velocity vector **v** (so speed is |**v**|), its position at time t ≥ 0 is:
{{r(t) = r_0 + t v}}
- **Collision vs crossing paths**: Two particles **r**₁(t) and **r**₂(t) have **intersecting paths** if **r**₁(t₁) = **r**₂(t₂) for some t₁, t₂ ≥ 0; they **collide** only if t₁ = t₂!
- **Closest approach**: Minimise {{D(t)^2 = |r_2(t) - r_1(t)|^2}} (a quadratic in t) via completing the square, calculus {{d/dt(D^2) = 0}}, or orthogonality {{(r_2(t) - r_1(t)) · (v_2 - v_1) = 0}}.

### Classifying Any Pair of 3D Lines
Given L₁: **r** = **a**₁ + λ**b**₁ and L₂: **r** = **a**₂ + μ**b**₂ (always use **two distinct parameter letters** λ and μ!):

1. **Test directions first**: Is **b**₂ = k**b**₁ for some scalar k ≠ 0?
   - **Yes (parallel directions)**: Check if **a**₂ lies on L₁ (i.e. **a**₂ − **a**₁ is parallel to **b**₁).
     - If yes → **Coincident** (identical lines, infinitely many points in common).
     - If no → **Parallel and distinct** (zero points in common, coplanar).
   - **No (non-parallel directions)**: Equate x- and y-components to solve the 2×2 system for (λ, μ), then **substitute both into the third (z-) equation**:
     - If the z-equation is satisfied → **Intersecting** (unique common point, coplanar).
     - If the z-equation gives a contradiction (e.g. 3 = 5) → **Skew** (non-parallel, non-intersecting, non-coplanar).`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 250" role="img" aria-label="Cuboid showing two skew lines L1 on the top face and L2 on the bottom face connected by a unique vertical common perpendicular">
  <rect x="0" y="0" width="460" height="250" rx="12" fill="#f8fafc"/>
  <text x="230" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#0f172a">Skew Lines in 3D: Non-Parallel &amp; Non-Intersecting</text>
  <!-- Bottom parallel plane (cuboid base) -->
  <polygon points="85,192 295,192 375,148 165,148" fill="#dbeafe" fill-opacity="0.55" stroke="#60a5fa" stroke-width="1.4"/>
  <!-- Top parallel plane (cuboid lid) -->
  <polygon points="85,96 295,96 375,52 165,52" fill="#dcfce7" fill-opacity="0.55" stroke="#34d399" stroke-width="1.4"/>
  <!-- Vertical cuboid edges (dashed for back) -->
  <line x1="85" y1="96" x2="85" y2="192" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="295" y1="96" x2="295" y2="192" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="375" y1="52" x2="375" y2="148" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="165" y1="52" x2="165" y2="148" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4,3"/>
  <!-- Line L2 on bottom plane -->
  <line x1="65" y1="184" x2="395" y2="156" stroke="#2563eb" stroke-width="2.8"/>
  <polygon points="399,156 390,152 391,160" fill="#2563eb"/>
  <text x="392" y="176" font-size="11" font-weight="700" fill="#1d4ed8">L₂: r = a₂ + μb₂</text>
  <!-- Line L1 on top plane (different direction) -->
  <line x1="130" y1="56" x2="335" y2="92" stroke="#059669" stroke-width="2.8"/>
  <polygon points="339,93 331,87 329,95" fill="#059669"/>
  <text x="342" y="84" font-size="11" font-weight="700" fill="#047857">L₁: r = a₁ + λb₁</text>
  <!-- Common perpendicular at x=230 -->
  <line x1="230" y1="74" x2="230" y2="170" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="230" cy="74" r="3.8" fill="#dc2626"/>
  <circle cx="230" cy="170" r="3.8" fill="#dc2626"/>
  <!-- Right angle marks -->
  <polyline points="230,84 240,86 240,76" fill="none" stroke="#dc2626" stroke-width="1.4"/>
  <polyline points="230,160 240,159 240,169" fill="none" stroke="#dc2626" stroke-width="1.4"/>
  <text x="242" y="126" font-size="11" font-weight="700" fill="#b91c1c">Common ⊥</text>
  <text x="242" y="140" font-size="10" fill="#b91c1c">(shortest dist d)</text>
  <text x="230" y="226" font-size="11" text-anchor="middle" fill="#334155">b₁ × b₂ ≠ 0 (not parallel), yet L₁ and L₂ sit in distinct parallel planes (never meet)</text>
</svg>`,
      diagramCaption:
        "Two skew lines L₁ and L₂ always lie in a unique pair of parallel planes separated by the length of their common perpendicular segment.",
      whyItWorks:
        "Why does setting **a**₁ + λ**b**₁ = **a**₂ + μ**b**₂ create an overdetermined system? In 3D, a vector equality gives 3 scalar equations (for x, y, z) but only 2 unknowns (λ, μ). Geometrically, any two non-parallel directions **b**₁ and **b**₂ span a 2D plane family; solving the first two equations finds the unique (λ, μ) where the lines' shadows cross in the xy-plane, and the third equation checks whether the two lines are at the same height z at that crossing!",
      workedExamples: [
        {
          title: "Cartesian to Vector Form & Point Membership",
          problem:
            "Line L has Cartesian equation {{(x - 2)/3 = (y + 1)/(-2) = (z - 5)/6}}. (a) Write L in vector and parametric form. (b) Determine whether P(8, −5, 17) lies on L.",
          steps: [
            "Set each ratio equal to the parameter λ: {{(x - 2)/3 = λ}}, {{(y + 1)/(-2) = λ}}, {{(z - 5)/6 = λ}}.",
            "Solve for x, y, z to get parametric form: x = 2 + 3λ, y = −1 − 2λ, z = 5 + 6λ.",
            "Collect constants and λ-coefficients for vector form: **r** = (2, −1, 5) + λ(3, −2, 6).",
            "Substitute P(8, −5, 17) into each Cartesian ratio: {{(8 - 2)/3 = 2}}, {{(-5 + 1)/(-2) = 2}}, {{(17 - 5)/6 = 2}}.",
            "All three ratios yield the exact same parameter λ = 2, so P lies on L.",
          ],
          answer: "(a) **r** = (2, −1, 5) + λ(3, −2, 6); (b) Yes, P lies on L (at λ = 2).",
          yourTurn: {
            question:
              "A 3D line has vector equation **r** = (1, −3, 4) + λ(2, 5, −3). Find the z-coordinate of the point on the line where x = 7.",
            answer: { type: "number", value: -5 },
            solution: "From x = 1 + 2λ = 7, we get λ = 3. Substituting into z = 4 − 3λ gives z = 4 − 9 = −5.",
          },
        },
        {
          title: "Classifying a Pair of 3D Lines (Intersecting vs Skew)",
          problem:
            "Determine whether L₁: **r** = (1, 2, 0) + λ(2, −1, 3) and L₂: **r** = (4, 0, 5) + μ(1, −1, 2) are parallel, intersecting, or skew. If they intersect, find their point of intersection.",
          steps: [
            "Compare direction vectors **b**₁ = (2, −1, 3) and **b**₂ = (1, −1, 2). Since {{2/1 != (-1)/(-1)}}, the lines are NOT parallel (and not coincident).",
            "Set **r**₁ = **r**₂ componentwise: (1) 1 + 2λ = 4 + μ, (2) 2 − λ = −μ, (3) 3λ = 5 + 2μ.",
            "From (2), μ = λ − 2. Substitute into (1): 1 + 2λ = 4 + (λ − 2) ⇒ 1 + 2λ = λ + 2 ⇒ λ = 1, hence μ = 1 − 2 = −1.",
            "Test (λ, μ) = (1, −1) in equation (3): LHS = 3(1) = 3; RHS = 5 + 2(−1) = 3.",
            "Since LHS = RHS, the system is consistent: the lines intersect! Substituting λ = 1 into L₁ gives (1 + 2, 2 − 1, 0 + 3) = (3, 1, 3).",
          ],
          answer: "The lines intersect at the point (3, 1, 3).",
          yourTurn: {
            question:
              "Two drones move with constant velocity paths **r**_A(t) = (0, 1, 2) + t(3, 2, 1) and **r**_B(t) = (3, 10, −1) + t(2, −1, 2) for t ≥ 0 seconds. Find the exact time t (in seconds) when they collide.",
            answer: { type: "number", value: 3 },
            solution:
              "Equate x: 3t = 3 + 2t ⇒ t = 3. Check y: 1 + 2(3) = 7 and 10 − 3 = 7. Check z: 2 + 3 = 5 and −1 + 2(3) = 5. They collide at t = 3 s (at point (9, 7, 5)).",
          },
        },
      ],
      keyPoints: [
        "Always assign DIFFERENT parameter symbols (e.g. λ and μ, or s and t) to two lines before solving for an intersection — using the same letter λ tests only for simultaneous collision!",
        "The acute angle θ between two lines L₁ and L₂ depends ONLY on their direction vectors **b**₁, **b**₂: {{cos θ = |b_1 · b_2| / (|b_1| |b_2|)}} (even when the lines are skew!).",
        "In Cartesian form {{(x - a_1)/b_1}}, watch for flipped signs like {{(4 - y)/3 = (y - 4)/(-3)}} — the direction component is −3, not +3.",
        "Four exhaustive cases for any pair of 3D lines: coincident, parallel & distinct, intersecting, or skew.",
      ],
      strategies: [
        "Before solving 3 equations in 2 unknowns, always inspect the direction vectors first — it takes 3 seconds and immediately separates {coincident, parallel} from {intersecting, skew}.",
        "When testing a point on a line, compute λ from ONE coordinate and verify the other two; never stop after checking only two coordinates!",
        "For closest approach between two moving objects, form the relative displacement **d**(t) = **r**_B(t) − **r**_A(t) and solve **d**(t) · **v**_rel = 0 — much faster than differentiating a square root!",
      ],
      thinkDeeper:
        "Can two skew lines be perpendicular? YES! 'Perpendicular' for 3D lines means their direction vectors satisfy **b**₁ · **b**₂ = 0 — they do not need to touch! Imagine the x-axis (y = 0, z = 0) and the line parallel to the y-axis at height z = 1 (x = 0, z = 1): they are both skew AND perpendicular.",
    },

    // =========================================================================
    // SECTION 3: Vector (Cross) Product, Areas & Equations of Planes
    // =========================================================================
    {
      id: "cross-product-planes",
      heading: "[HL] Vector (Cross) Product, Areas & Equations of Planes",
      level: "HL",
      discovery: {
        problem:
          "How many pieces of information fix a flat sheet of glass (a plane) in 3D space? You could pin down three non-collinear points A, B, C — OR you could pin down just ONE point A and a single rigid rod sticking straight out at 90° to the glass! How can you manufacture that perpendicular rod from two vectors **b** and **c** lying inside the glass?",
        idea:
          "We need an operation that takes two 3D vectors **b** and **c** and outputs a brand-new 3D vector **n** perpendicular to BOTH (**n** · **b** = 0 and **n** · **c** = 0). That operation is the **vector (cross) product** **n** = **b** × **c**, and miraculously its magnitude |**b** × **c**| equals the exact area of the parallelogram formed by **b** and **c**!",
      },
      body: `Unlike the dot product (which produces a scalar), the **vector (cross) product** **v** × **w** of two 3D vectors produces a **3D vector** perpendicular to both **v** and **w** (following the right-hand rule).

### Algebraic Formula & Properties of the Cross Product
For **v** = (v₁, v₂, v₃) and **w** = (w₁, w₂, w₃):
{{v × w = (v_2 w_3 - v_3 w_2, v_3 w_1 - v_1 w_3, v_1 w_2 - v_2 w_1)}}
Mnemonic using the 3×3 symbolic determinant along row 1 (**i**, **j**, **k**): remember the alternating signs **+ − +** on the middle (**j**) cofactor!

Essential properties:
- **Magnitude**: {{|v × w| = |v| |w| sin θ}} where θ ∈ [0, π] is the angle between **v** and **w**.
- **Anti-commutativity**: **w** × **v** = −(**v** × **w**). Swapping order reverses direction!
- **Parallel test**: Non-zero vectors **v** and **w** are parallel if and only if **v** × **w** = **0**. In particular, **v** × **v** = **0**.
- **Distributive**: **u** × (**v** + **w**) = **u** × **v** + **u** × **w** (keep left-to-right order strictly!).

### Areas of Parallelograms & Triangles in 3D
Because |**v** × **w**| = |**v**||**w**| sin θ = base × perpendicular height:
- **Area of parallelogram** with adjacent sides **v** and **w**: {{A = |v × w|}}.
- **Area of triangle ABC**: form two edge vectors from the SAME vertex (e.g. **AB** and **AC**), then
  {{A_(triangle) = (1/2) |AB × AC|}}.

### Three Equations of a Plane Π in 3D
1. **Vector (parametric) form**: Given a point A(**a**) on Π and two non-parallel direction vectors **b**, **c** lying in Π:
   {{r = a + λ b + μ c}} (λ, μ ∈ ℝ).
2. **Normal (scalar-product) form**: Let **n** = **b** × **c** be any non-zero normal vector perpendicular to Π. For every point P(**r**) on Π, the displacement **AP** = **r** − **a** lies in Π, so (**r** − **a**) · **n** = 0, giving:
   {{r · n = a · n}}.
3. **Cartesian form**: Writing **r** = (x, y, z), **n** = (a, b, c), and d = **a** · **n** expands the normal equation directly into:
   {{a x + b y + c z = d}}.
   Read the normal vector **n** = (a, b, c) straight off the coefficients of x, y, and z!`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 255" role="img" aria-label="Plane Pi containing point A, spanning vectors b and c forming a shaded parallelogram of area |b x c|, and perpendicular normal vector n = b x c">
  <rect x="0" y="0" width="460" height="255" rx="12" fill="#f8fafc"/>
  <text x="230" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#0f172a">Cross Product Normal n = b × c &amp; Plane Equation</text>
  <!-- Outer Plane Pi -->
  <polygon points="48,205 322,205 418,125 144,125" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.6"/>
  <text x="386" y="142" font-size="12" font-weight="700" fill="#1d4ed8">Π</text>
  <!-- Shaded parallelogram spanned by b and c from A(160, 178) -->
  <polygon points="160,178 278,178 332,142 214,142" fill="#bbf7d0" fill-opacity="0.72" stroke="#10b981" stroke-width="1.4" stroke-dasharray="4,2"/>
  <text x="247" y="164" font-size="10.5" font-weight="700" text-anchor="middle" fill="#065f46">Area = |b × c|</text>
  <!-- Vector b from A(160,178) to (278,178) -->
  <line x1="160" y1="178" x2="272" y2="178" stroke="#059669" stroke-width="2.6"/>
  <polygon points="278,178 269,174 269,182" fill="#059669"/>
  <text x="225" y="194" font-size="12" font-weight="700" fill="#047857">b</text>
  <!-- Vector c from A(160,178) to (214,142) -->
  <line x1="160" y1="178" x2="209" y2="145" stroke="#0d9488" stroke-width="2.6"/>
  <polygon points="214,142 204,143 209,150" fill="#0d9488"/>
  <text x="176" y="153" font-size="12" font-weight="700" fill="#0f766e">c</text>
  <!-- Normal vector n = b x c straight up from A(160,178) to (160,56) -->
  <line x1="160" y1="178" x2="160" y2="62" stroke="#dc2626" stroke-width="2.8"/>
  <polygon points="160,56 155,66 165,66" fill="#dc2626"/>
  <text x="172" y="74" font-size="12" font-weight="700" fill="#b91c1c">n = b × c</text>
  <text x="172" y="90" font-size="10.5" fill="#b91c1c">(n ⊥ b and n ⊥ c)</text>
  <!-- Right angle boxes with b and c -->
  <polyline points="160,164 174,164 174,178" fill="none" stroke="#dc2626" stroke-width="1.4"/>
  <polyline points="160,167 171,160 171,171" fill="none" stroke="#dc2626" stroke-width="1.3"/>
  <!-- Point A and general point P(r) -->
  <circle cx="160" cy="178" r="4" fill="#0f172a"/>
  <text x="142" y="191" font-size="11.5" font-weight="700" fill="#0f172a">A(a)</text>
  <circle cx="96" cy="186" r="3.5" fill="#7c3aed"/>
  <line x1="160" y1="178" x2="101" y2="185" stroke="#7c3aed" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="72" y="182" font-size="11" font-weight="700" fill="#6d28d9">P(r)</text>
  <text x="230" y="232" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">Every point P(r) on Π satisfies (r − a) · n = 0  ⇔  r · n = a · n  ⇔  ax + by + cz = d</text>
</svg>`,
      diagramCaption:
        "The cross product n = b × c is simultaneously perpendicular to both spanning vectors b and c, giving both the plane's normal and the exact parallelogram area |b × c|.",
      whyItWorks:
        "Check **v** · (**v** × **w**) directly: {{v_1(v_2 w_3 - v_3 w_2) + v_2(v_3 w_1 - v_1 w_3) + v_3(v_1 w_2 - v_2 w_1) = 0}} because every term cancels in pairs! And Lagrange's identity proves {{|v × w|^2 + (v · w)^2 = |v|^2 |w|^2}}, so {{|v × w|^2 = |v|^2 |w|^2 (1 - cos^2 θ) = |v|^2 |w|^2 sin^2 θ}}, confirming |**v** × **w**| = |**v**||**w**| sin θ.",
      workedExamples: [
        {
          title: "Cross Product & Exact Area of a 3D Triangle",
          problem:
            "Given **u** = (2, −1, 3) and **v** = (1, 4, −2), compute **u** × **v** and find the exact area of triangle OAB where **OA** = **u** and **OB** = **v**.",
          steps: [
            "Apply the component formula for **u** × **v**:",
            "x-component: (−1)(−2) − (3)(4) = 2 − 12 = −10.",
            "y-component: (3)(1) − (2)(−2) = 3 + 4 = 7 (equivalently −[(2)(−2) − (3)(1)] = 7).",
            "z-component: (2)(4) − (−1)(1) = 8 + 1 = 9. Thus **u** × **v** = (−10, 7, 9).",
            "Sanity check via dot products: **u** · (−10, 7, 9) = −20 − 7 + 27 = 0 ✓ and **v** · (−10, 7, 9) = −10 + 28 − 18 = 0 ✓.",
            "Triangle area = {{(1/2) |u × v| = (1/2) sqrt((-10)^2 + 7^2 + 9^2) = (1/2) sqrt(230)}} (≈ 7.58 square units).",
          ],
          answer: "**u** × **v** = (−10, 7, 9); Area of △OAB = {{sqrt(230)/2}}.",
          yourTurn: {
            question:
              "Given **u** = (2, −1, 0) and **v** = (0, 1, −1), find the exact area of the parallelogram spanned by **u** and **v**.",
            answer: { type: "number", value: 3 },
            solution:
              "**u** × **v** = ((−1)(−1) − 0, 0 − 2(−1), 2(1) − 0) = (1, 2, 2). Parallelogram area = |**u** × **v**| = {{sqrt(1 + 4 + 4) = 3}}.",
          },
        },
        {
          title: "Cartesian Equation of a Plane Through Three Points",
          problem:
            "Find the Cartesian equation of the plane Π passing through A(1, 2, −1), B(3, 1, 0), and C(2, 4, 1).",
          steps: [
            "Form two non-parallel vectors lying in the plane from A: **AB** = (2, −1, 1) and **AC** = (1, 2, 2).",
            "Compute a normal vector **n** = **AB** × **AC** = ((−1)(2) − 1(2), 1(1) − 2(2), 2(2) − (−1)(1)) = (−4, −3, 5).",
            "Multiply by −1 for a tidier leading coefficient: **n**' = (4, 3, −5).",
            "Compute d = **a** · **n**' using A(1, 2, −1): d = 4(1) + 3(2) − 5(−1) = 4 + 6 + 5 = 15.",
            "Verify with B(3, 1, 0): 4(3) + 3(1) − 5(0) = 15 ✓, and C(2, 4, 1): 4(2) + 3(4) − 5(1) = 15 ✓.",
          ],
          answer: "4x + 3y − 5z = 15",
          yourTurn: {
            question:
              "A plane has normal vector **n** = (3, −2, 5) and passes through A(2, −1, 4). Find the integer constant d in its Cartesian equation 3x − 2y + 5z = d.",
            answer: { type: "number", value: 28 },
            solution: "d = **a** · **n** = 3(2) + (−2)(−1) + 5(4) = 6 + 2 + 20 = 28.",
          },
        },
      ],
      keyPoints: [
        "ALWAYS verify every hand-computed cross product **n** = **u** × **v** by mentally checking **u** · **n** = 0 and **v** · **n** = 0 — this 5-second habit catches 100% of middle-sign slips!",
        "You may divide or multiply a plane's normal vector **n** by any non-zero scalar (e.g. (−4, −3, 5) → (4, 3, −5)) when finding a plane equation, but NEVER rescale **u** × **v** when computing an area!",
        "To convert Cartesian ax + by + cz = d back to vector form **r** = **a** + λ**b** + μ**c**, simply express one variable in terms of the other two (e.g. set y = λ, z = μ and solve for x).",
        "On the TI-Nspire CX GDC, use `crossP(u, v)` directly in Calculator mode.",
      ],
      strategies: [
        "To find a plane containing a line **r** = **a** + λ**b** and an external point P, use the two spanning vectors **b** and **AP** = **p** − **a**, then **n** = **b** × **AP**.",
        "To find a plane containing TWO parallel lines **r** = **a**₁ + λ**b** and **r** = **a**₂ + μ**b**, do NOT cross **b** with **b** (you get **0**!). Cross **b** with **a**₂ − **a**₁!",
        "Check ALL given points (A, B, and C) in your final Cartesian equation ax + by + cz = d before moving on.",
      ],
      thinkDeeper:
        "The scalar triple product |**u** · (**v** × **w**)| equals the exact volume of the 3D parallelepiped spanned by **u**, **v**, and **w** (and one-sixth of that is the volume of tetrahedron OABC)! Consequently, three vectors are **coplanar** if and only if **u** · (**v** × **w**) = 0.",
    },

    // =========================================================================
    // SECTION 4: Line–Plane & 3-Plane Intersections, Angles & Shortest Distances
    // =========================================================================
    {
      id: "intersections-angles-distances",
      heading: "[HL] Line–Plane & 3-Plane Intersections, Angles & Shortest Distances",
      level: "HL",
      discovery: {
        problem:
          "A laser beam with direction **b** hits a flat mirror whose normal vector is **n**. You compute {{cos θ = |b · n| / (|b| |n|)}} and get θ = 70°. Is 70° the angle the laser makes with the mirror surface?",
        idea:
          "NO! θ = 70° is the angle between the laser and the **normal rod** sticking perpendicular to the mirror! Since the normal and mirror meet at 90°, the angle α between the laser and the mirror is the **complement**: α = 90° − 70° = 20°. Because sin(90° − θ) = cos θ, the line–plane angle uses **arcsin**, NOT arccos!",
      },
      body: `This final HL section brings lines, planes, dot products, cross products, and 3×3 systems together into the highest-value IB AA HL examination problems.

### Line–Plane Intersection & Acute Angle
Substitute the parametric line x = a₁ + λb₁, y = a₂ + λb₂, z = a₃ + λb₃ directly into the Cartesian plane ax + by + cz = d:
- **Unique solution for λ** (when **b** · **n** ≠ 0): The line pierces the plane at one point; substitute λ back into **r**(λ).
- **0λ = k (k ≠ 0)** (when **b** · **n** = 0 and A ∉ Π): The line is **parallel and distinct** from the plane (no intersection).
- **0λ = 0** (when **b** · **n** = 0 and A ∈ Π): The line **lies entirely inside** the plane (infinitely many points).

For the **acute angle α** between a line (direction **b**) and a plane (normal **n**):
{{sin α = |b · n| / (|b| |n|)}}   (equivalently α = 90° − θ, where cos θ = |**b** · **n**| / (|**b**||**n**|)).

### Plane–Plane Dihedral Angle & Line of Intersection
- **Acute dihedral angle φ** between Π₁ (normal **n**₁) and Π₂ (normal **n**₂):
  {{cos φ = |n_1 · n_2| / (|n_1| |n_2|)}}.
  Why cosine here? Because rotating a plane by φ rotates its perpendicular normal by the exact same angle φ!
- **Line of intersection** of two non-parallel planes:
  - *Method 1 (Cross product)*: Direction is **b** = **n**₁ × **n**₂ (since the intersection line lies in BOTH planes, it is perpendicular to both normals!). Find one common point by setting z = 0 (or x = 0 / y = 0) and solving the 2×2 system.
  - *Method 2 (Row reduction / elimination)*: Eliminate one variable and set a free variable (say z = λ) to express x and y directly in terms of λ.

### Geometric Configurations of Three Planes (3×3 Systems)
Solving a 3×3 linear system corresponds to intersecting three planes Π₁, Π₂, Π₃:
1. **Unique solution (1 point)**: The three planes meet at a single vertex (like the corner of a room; determinant ≠ 0).
2. **Infinitely many solutions**:
   - **Sheaf of planes** (like pages of an open book): all three planes intersect along one common line (1 free parameter λ; e.g. row-echelon ends in [0 0 0 | 0]).
   - **Coincident planes**: all three equations are scalar multiples of each other (2 free parameters).
3. **No solution (inconsistent; row-echelon ends in [0 0 0 | k], k ≠ 0)**:
   - **Triangular prism**: no two normals are parallel, so each pair intersects in a line, and those three lines are parallel and distinct.
   - **Parallel planes**: two (or all three) planes are parallel and distinct (check pairwise proportionality of normals!).

### Shortest Perpendicular Distances in 3D
1. **Point P to Plane Π** (ax + by + cz = d): Drop a perpendicular line **r** = **p** + t**n** to find the foot F (and reflection P' = 2F − P), or use the closed-form formula:
   {{D = |a x_0 + b y_0 + c z_0 - d| / sqrt(a^2 + b^2 + c^2) = |(p - a) · n| / |n|}}.
   For two parallel planes ax + by + cz = d₁ and ax + by + cz = d₂ (normalised to the SAME (a, b, c)!): {{D = |d_1 - d_2| / |n|}}.
2. **Point P to Line L** (**r** = **a** + λ**b**):
   - *Method 1 (Foot of perpendicular F)*: Let F have position **a** + λ**b**. Solve **PF** · **b** = 0 for λ, then D = |**PF**|. (Best when the question also asks for F or reflection P'!)
   - *Method 2 (Cross product area)*: {{D = |AP × b| / |b|}} (parallelogram area divided by base |**b**|!).
3. **Shortest distance between two skew lines** L₁ (**a**₁, **b**₁) and L₂ (**a**₂, **b**₂):
   Project any connecting vector **a**₂ − **a**₁ onto the unit common normal **n** = **b**₁ × **b**₂:
   {{D = |(a_2 - a_1) · (b_1 × b_2)| / |b_1 × b_2|}}.
   (Alternatively, find endpoints P(λ) ∈ L₁ and Q(μ) ∈ L₂ by solving **PQ** · **b**₁ = 0 and **PQ** · **b**₂ = 0 simultaneously.)`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 260" role="img" aria-label="3D projection showing a line L piercing plane Pi at I, plane normal n, angle theta between direction b and n, complementary line-plane angle alpha = 90 degrees minus theta, and perpendicular foot F from P to Pi">
  <rect x="0" y="0" width="460" height="260" rx="12" fill="#f8fafc"/>
  <text x="230" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#0f172a">Line–Plane Angle (α = 90° − θ) &amp; Shortest Distance D</text>
  <!-- Plane Pi perspective parallelogram -->
  <polygon points="44,208 340,208 424,136 128,136" fill="#eff6ff" stroke="#60a5fa" stroke-width="1.6"/>
  <text x="388" y="156" font-size="12" font-weight="700" fill="#1d4ed8">Π</text>
  <!-- Intersection point I(145, 178) and Foot F(305, 178) on plane -->
  <!-- Line projection IF inside plane -->
  <line x1="145" y1="178" x2="305" y2="178" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5,3"/>
  <!-- Normal n erected at I(145, 178) upward to (145, 58) -->
  <line x1="145" y1="178" x2="145" y2="62" stroke="#dc2626" stroke-width="2.4"/>
  <polygon points="145,56 140,66 150,66" fill="#dc2626"/>
  <text x="128" y="74" font-size="12" font-weight="700" fill="#b91c1c">n</text>
  <rect x="145" y="166" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.4"/>
  <!-- Line L from below plane through I(145,178) to P(305, 86) -->
  <line x1="100" y1="204" x2="145" y2="178" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="145" y1="178" x2="318" y2="79" stroke="#2563eb" stroke-width="2.8"/>
  <polygon points="323,76 313,77 318,84" fill="#2563eb"/>
  <text x="234" y="108" font-size="11.5" font-weight="700" fill="#1d4ed8">Line L (dir b)</text>
  <!-- Point P(305, 86) and perpendicular drop PF to F(305, 178) -->
  <line x1="305" y1="86" x2="305" y2="178" stroke="#059669" stroke-width="2.4"/>
  <rect x="293" y="166" width="12" height="12" fill="none" stroke="#059669" stroke-width="1.4"/>
  <circle cx="305" cy="86" r="4" fill="#0f172a"/>
  <text x="315" y="92" font-size="11.5" font-weight="700" fill="#0f172a">P</text>
  <circle cx="305" cy="178" r="3.8" fill="#059669"/>
  <text x="314" y="191" font-size="11.5" font-weight="700" fill="#047857">F (foot)</text>
  <text x="316" y="136" font-size="11" font-weight="700" fill="#047857">D = |PF|</text>
  <circle cx="145" cy="178" r="3.8" fill="#1d4ed8"/>
  <text x="132" y="194" font-size="11.5" font-weight="700" fill="#1d4ed8">I</text>
  <!-- Angle theta between n and L at I -->
  <path d="M 145,134 A 44,44 0 0,1 183,156" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="163" y="131" font-size="11.5" font-weight="700" fill="#b91c1c">θ</text>
  <!-- Angle alpha between L and projection IF at I -->
  <path d="M 192,151 A 54,54 0 0,1 199,178" fill="none" stroke="#d97706" stroke-width="2.2"/>
  <text x="206" y="168" font-size="11.5" font-weight="700" fill="#b45309">α</text>
  <!-- Formula caption inside SVG -->
  <text x="230" y="236" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">α + θ = 90°  ⇒  sin α = cos θ = |b · n| / (|b| |n|)</text>
  <text x="230" y="251" font-size="10.5" text-anchor="middle" fill="#475569">And D = |PI| sin α = |ax₀ + by₀ + cz₀ − d| / |n|</text>
</svg>`,
      diagramCaption:
        "In right triangle PFI, the plane normal n is perpendicular to the projection IF, so α + θ = 90° and sin α = cos θ = |b · n| / (|b||n|). The shortest distance D = |PF| is the scalar projection of IP onto the unit normal.",
      whyItWorks:
        "Why does {{D = |a x_0 + b y_0 + c z_0 - d| / |n|}} work for ANY point P(x₀, y₀, z₀) and plane **r** · **n** = d? Pick any anchor point A(**a**) on the plane (so **a** · **n** = d). The vector **AP** = **p** − **a** forms the hypotenuse of a right triangle whose perpendicular height to the plane is the length of **AP** projected onto the unit normal **n** / |**n**|: {{D = |(p - a) · n| / |n| = |p · n - a · n| / |n| = |a x_0 + b y_0 + c z_0 - d| / sqrt(a^2 + b^2 + c^2)}}! The exact same scalar projection onto the unit common normal **b**₁ × **b**₂ / |**b**₁ × **b**₂| derives the skew-line distance formula!",
      workedExamples: [
        {
          title: "Line–Plane Intersection & Acute Angle",
          problem:
            "Find (a) the point of intersection and (b) the acute angle (in degrees, to 3 s.f.) between line L: **r** = (1, 0, 2) + λ(2, −1, 2) and plane Π: 2x + 3y + 6z = 27.",
          steps: [
            "Write L parametrically: x = 1 + 2λ, y = −λ, z = 2 + 2λ.",
            "Substitute into Π: 2(1 + 2λ) + 3(−λ) + 6(2 + 2λ) = 27 ⇒ 2 + 4λ − 3λ + 12 + 12λ = 27 ⇒ 13λ = 13 ⇒ λ = 1.",
            "Substitute λ = 1 into L to find the intersection point: I(3, −1, 4). Check in Π: 2(3) + 3(−1) + 6(4) = 27 ✓.",
            "For the acute angle α, identify **b** = (2, −1, 2) with |**b**| = 3, and **n** = (2, 3, 6) with |**n**| = 7.",
            "Compute **b** · **n** = 2(2) + (−1)(3) + 2(6) = 4 − 3 + 12 = 13.",
            "Apply {{sin α = |b · n| / (|b| |n|) = 13 / (3 * 7) = 13/21}}, so α = arcsin(13/21) ≈ 38.2° (0.667 rad).",
          ],
          answer: "(a) (3, −1, 4); (b) 38.2°",
          yourTurn: {
            question:
              "Find the exact shortest perpendicular distance from the point P(5, 2, −1) to the plane 2x + y − 2z = 5.",
            answer: { type: "number", value: 3 },
            solution:
              "Use {{D = |2(5) + 1(2) - 2(-1) - 5| / sqrt(2^2 + 1^2 + (-2)^2) = |10 + 2 + 2 - 5| / 3 = 9/3 = 3}}.",
          },
        },
        {
          title: "Line of Intersection & Dihedral Angle of Two Planes",
          problem:
            "Planes Π₁: x + 2y − z = 4 and Π₂: 2x − y + z = 3 intersect in a line L. Find (a) a vector equation for L and (b) the acute dihedral angle φ between Π₁ and Π₂ to 3 s.f.",
          steps: [
            "Read off normals **n**₁ = (1, 2, −1) and **n**₂ = (2, −1, 1).",
            "The direction vector of L is **b** = **n**₁ × **n**₂ = (2(1) − (−1)(−1), (−1)(2) − 1(1), 1(−1) − 2(2)) = (1, −3, −5). Check: **n**₁ · **b** = 1 − 6 + 5 = 0 ✓ and **n**₂ · **b** = 2 + 3 − 5 = 0 ✓.",
            "Find one point on L by setting z = 0: x + 2y = 4 and 2x − y = 3. Doubling the second equation gives 4x − 2y = 6; adding gives 5x = 10 ⇒ x = 2, hence y = 1. Point: (2, 1, 0).",
            "Thus L has vector equation **r** = (2, 1, 0) + λ(1, −3, −5).",
            "For the dihedral angle φ: **n**₁ · **n**₂ = 1(2) + 2(−1) + (−1)(1) = −1, and {{|n_1| = |n_2| = sqrt(1 + 4 + 1) = sqrt(6)}}.",
            "Use {{cos φ = |-1| / (sqrt(6) * sqrt(6)) = 1/6}}, giving φ = arccos(1/6) ≈ 80.4° (1.40 rad).",
          ],
          answer: "(a) **r** = (2, 1, 0) + λ(1, −3, −5); (b) 80.4°",
          yourTurn: {
            question:
              "Find the exact value of cos φ (as a simplified fraction) where φ is the acute dihedral angle between the planes 2x + y − 2z = 5 and 2x + 3y + 6z = 1.",
            answer: { type: "fraction", n: 5, d: 21, simplest: true },
            solution:
              "Normals are **n**₁ = (2, 1, −2) (|**n**₁| = 3) and **n**₂ = (2, 3, 6) (|**n**₂| = 7). **n**₁ · **n**₂ = 4 + 3 − 12 = −5, so {{cos φ = |-5| / (3 * 7) = 5/21}}.",
          },
        },
      ],
      keyPoints: [
        "Line–line and plane–plane acute angles use **arccos**; line–plane acute angle uses **arcsin** (because you compare a line direction against a plane NORMAL).",
        "When computing the distance between parallel planes ax + by + cz = d₁ and kax + kby + kcz = d₂, divide the second equation by k FIRST so both share the exact same normal (a, b, c).",
        "To reflect a point P across a plane Π (or line L), find the foot of the perpendicular F first, then use **OF** = ½(**OP** + **OP'**) ⇒ **OP'** = 2**OF** − **OP**.",
        "For 3-plane geometry questions with a parameter k, row-reduce the augmented matrix [A | d] (or compute det A = 0 first), then distinguish 'sheaf' (consistent, 0 = 0) from 'prism / parallel planes' (inconsistent, 0 = c ≠ 0) by checking if any two normals are parallel.",
      ],
      strategies: [
        "Always check whether a question asks for the angle in **degrees** or **radians**, and whether it specifies the **acute** angle!",
        "On Paper 2 (GDC), you can find the line of intersection of two planes instantly by entering the 2×4 augmented matrix into `rref(...)` on the TI-Nspire CX — the resulting rows directly give x and y in terms of the free parameter z = λ!",
        "For 'shortest distance from point P to line L', if part (a) asks for the foot of the perpendicular F, solve **PF** · **b** = 0; if it ONLY asks for the distance, {{|AP × b| / |b|}} is a clean one-liner.",
      ],
      thinkDeeper:
        "What is the shortest distance between two parallel lines **r** = **a**₁ + λ**b** and **r** = **a**₂ + μ**b**? You CANNOT use the skew-line formula because **b** × **b** = **0** (0/0!). Instead, treat **a**₂ as a single point and compute its distance to the first line: {{D = |(a_2 - a_1) × b| / |b|}}.",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Displacement vector **AB** in terms of position vectors **a** and **b**",
        back: "**AB** = **b** − **a** ('head minus tail').",
        level: "HL",
      },
      {
        front: "Unit vector in the direction of a non-zero vector **v**",
        back: "{{v_hat = v / |v|}}, where {{|v| = sqrt(v_1^2 + v_2^2 + v_3^2)}}.",
        level: "HL",
      },
      {
        front: "Two formulas for the scalar (dot) product **v** · **w**",
        back: "{{v · w = v_1 w_1 + v_2 w_2 + v_3 w_3 = |v| |w| cos θ}}, where θ ∈ [0, π] is the angle between tail-to-tail vectors.",
        level: "HL",
      },
      {
        front: "Necessary and sufficient condition for non-zero vectors **v** and **w** to be perpendicular",
        back: "**v** · **w** = 0.",
        level: "HL",
      },
      {
        front: "Self-dot product identity used in HL geometric proofs",
        back: "{{v · v = |v|^2}}, giving {{|u ± v|^2 = |u|^2 ± 2 u · v + |v|^2}}.",
        level: "HL",
      },
      {
        front: "Vector, parametric, and Cartesian forms of a 3D line through **a** with direction **b**",
        back: "Vector: **r** = **a** + λ**b**; Parametric: x = a₁ + λb₁, y = a₂ + λb₂, z = a₃ + λb₃; Cartesian: {{(x - a_1)/b_1 = (y - a_2)/b_2 = (z - a_3)/b_3}} (for b₁, b₂, b₃ ≠ 0).",
        level: "HL",
      },
      {
        front: "What are the 4 possible geometric relationships between two 3D lines?",
        back: "1. Coincident (same line); 2. Parallel & distinct; 3. Intersecting at a unique point; 4. Skew (non-parallel and non-intersecting).",
        level: "HL",
      },
      {
        front: "Component formula & magnitude of the cross product **v** × **w**",
        back: "**v** × **w** = (v₂w₃ − v₃w₂, v₃w₁ − v₁w₃, v₁w₂ − v₂w₁), with {{|v × w| = |v| |w| sin θ}} and **v** × **w** perpendicular to both **v** and **w**.",
        level: "HL",
      },
      {
        front: "How does reversing order affect **v** × **w**?",
        back: "Anti-commutative: **w** × **v** = −(**v** × **w**). Also **v** × **w** = **0** iff **v** and **w** are parallel (or one is **0**).",
        level: "HL",
      },
      {
        front: "3D area of a parallelogram (sides **u**, **v**) and triangle ABC",
        back: "Parallelogram area = |**u** × **v**|; Triangle ABC area = {{(1/2) |AB × AC|}}.",
        level: "HL",
      },
      {
        front: "Vector, normal, and Cartesian forms of a plane Π",
        back: "Vector: **r** = **a** + λ**b** + μ**c**; Normal: **r** · **n** = **a** · **n** (where **n** = **b** × **c**); Cartesian: ax + by + cz = d (with **n** = (a, b, c), d = **a** · **n**).",
        level: "HL",
      },
      {
        front: "Acute angle α between a line (direction **b**) and a plane (normal **n**)",
        back: "{{sin α = |b · n| / (|b| |n|)}}, so α = arcsin(|**b** · **n**| / (|**b**||**n**|)) = 90° − θ.",
        level: "HL",
      },
      {
        front: "Acute dihedral angle φ between two planes with normals **n**₁ and **n**₂",
        back: "{{cos φ = |n_1 · n_2| / (|n_1| |n_2|)}}.",
        level: "HL",
      },
      {
        front: "Direction vector of the line of intersection of two non-parallel planes Π₁ and Π₂",
        back: "**b** = **n**₁ × **n**₂ (perpendicular to both plane normals).",
        level: "HL",
      },
      {
        front: "Shortest perpendicular distance from point P(x₀, y₀, z₀) to plane ax + by + cz = d",
        back: "{{D = |a x_0 + b y_0 + c z_0 - d| / sqrt(a^2 + b^2 + c^2)}}.",
        level: "HL",
      },
      {
        front: "Shortest distances: (a) point P to line **r** = **a** + λ**b**, (b) skew lines (**a**₁, **b**₁) & (**a**₂, **b**₂)",
        back: "(a) {{D = |AP × b| / |b|}} (or solve **PF** · **b** = 0); (b) {{D = |(a_2 - a_1) · (b_1 × b_2)| / |b_1 × b_2|}}.",
        level: "HL",
      },
    ],
    mustKnow: [
      "A 3D line is NEVER written as a single equation ax + by + cz = d — that is a plane! A line needs either **r** = **a** + λ**b** or TWO equal Cartesian ratios.",
      "Always place vectors tail-to-tail when computing an interior angle of a polygon (e.g. angle at B uses **BA** and **BC**, not **AB** and **BC**).",
      "Always use TWO distinct parameters (λ and μ) when testing whether two 3D lines intersect, and ALWAYS check all three coordinates (x, y, and z).",
      "Cross product is ONLY defined in 3D here, outputs a VECTOR perpendicular to both inputs, and reverses sign when inputs are swapped (**v** × **w** = −**w** × **v**).",
      "Rescaling a plane normal **n** keeps the plane unchanged, whereas rescaling **u** × **v** changes parallelogram/triangle area — never simplify **u** × **v** before taking its norm for an area!",
      "Line–plane acute angle uses **arcsin**(|**b** · **n**|/(|**b**||**n**|)); line–line and plane–plane acute angles use **arccos**.",
      "For a 3×3 system representing three planes, zero determinant means either infinitely many solutions (sheaf / coincident) OR no solution (triangular prism / parallel planes) — inspect the final row-echelon equation AND pairwise normal proportionality to classify.",
      "The reflection P' of a point P across a plane or line satisfies **OP'** = 2**OF** − **OP**, where F is the foot of the perpendicular.",
      "Parallel planes must be scaled to have IDENTICAL coefficients (a, b, c) before using {{D = |d_1 - d_2| / sqrt(a^2 + b^2 + c^2)}}.",
      "For constant-velocity kinematics **r**(t) = **r**₀ + t**v**, closest approach occurs when relative displacement is perpendicular to relative velocity: (**r**₂(t) − **r**₁(t)) · (**v**₂ − **v**₁) = 0.",
    ],
    misconceptions: [
      {
        wrong: "Using cos α = |**b** · **n**| / (|**b**||**n**|) to find the angle between a line and a plane.",
        right: "That formula gives θ, the angle between the line and the plane's NORMAL. The line–plane angle is its complement α = 90° − θ, so use sin α = |**b** · **n**| / (|**b**||**n**|).",
        level: "HL",
      },
      {
        wrong: "Using the same parameter λ in both lines **a**₁ + λ**b**₁ = **a**₂ + λ**b**₂ to test whether two 3D lines intersect.",
        right: "Using the same parameter only checks if two objects arrive at the same point at the exact same parameter value (collision). Use distinct parameters λ and μ to test geometric intersection.",
        level: "HL",
      },
      {
        wrong: "Assuming two non-parallel lines in 3D must intersect (or assuming solving x and y proves intersection).",
        right: "In 3D, non-parallel lines are usually SKEW! You must substitute your (λ, μ) solution from the first two coordinates into the third coordinate to verify consistency.",
        level: "HL",
      },
      {
        wrong: "Reading the direction vector of {{(2x - 4)/3 = (5 - y)/2 = z}} as (3, 2, 1).",
        right: "Every numerator must have coefficient +1 on x, y, z first: {{(x - 2)/(3/2) = (y - 5)/(-2) = (z - 0)/1}}, so the direction vector is (3/2, −2, 1) — or scaled, (3, −4, 2)!",
        level: "HL",
      },
      {
        wrong: "Simplifying **AB** × **AC** = (2, 4, 4) to (1, 2, 2) before computing the area of triangle ABC.",
        right: "You may simplify a cross product ONLY when you only need a normal direction (e.g. for a plane equation). For area, keep the unscaled cross product: Area = ½|(2, 4, 4)| = 3, NOT ½|(1, 2, 2)| = 1.5!",
        level: "HL",
      },
      {
        wrong: "Thinking **u** × **v** = **v** × **u** (or cancelling **u** from **u** · **v** = **u** · **w** to claim **v** = **w**).",
        right: "Cross product is anti-commutative (**v** × **u** = −**u** × **v**), and dot product has NO cancellation law: **u** · **v** = **u** · **w** only proves **u** ⊥ (**v** − **w**).",
        level: "HL",
      },
      {
        wrong: "Computing the distance between 2x − y + 2z = 5 and 4x − 2y + 4z = 16 as |16 − 5| / 3.",
        right: "Scale both planes to share the SAME normal first: 2x − y + 2z = 5 and 2x − y + 2z = 8, giving D = |8 − 5| / √(4 + 1 + 4) = 3/3 = 1.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Forgetting the negative sign on the j-component when expanding the 3×3 determinant for **u** × **v** — always dot your answer with both **u** and **v** to catch this instantly!",
      "Leaving the answer to 'Find the acute angle' as an obtuse angle (e.g. 124° instead of 56°) because the absolute value bars were omitted around **v** · **w**.",
      "Writing a point's coordinates (3, 1, −2) when asked for a position vector (or omitting '**r** =' in a vector equation of a line/plane — IB markschemes penalise missing '**r** =').",
      "Forgetting to divide by |**n**| in the point-to-plane distance formula (giving |ax₀ + by₀ + cz₀ − d| instead of |ax₀ + by₀ + cz₀ − d| / |**n**|).",
      "In a 3-plane parameter question, finding k from det(A) = 0 and stopping without checking whether the resulting system has infinitely many solutions (sheaf) or no solutions (prism).",
      "Confusing speed |**v**| with velocity vector **v**, or computing shortest distance between two moving ships at a fixed line-intersection point instead of minimising |**r**₂(t) − **r**₁(t)| over time t.",
      "Giving final decimal angles to 2 s.f. or rounding intermediate values too early instead of keeping full GDC precision and rounding only at the end to 3 s.f.",
      "When reflecting point P in a plane, finding the foot F and stopping there instead of stepping the same displacement again (**OP'** = 2**OF** − **OP**).",
    ],
    mnemonics: [
      {
        topic: "Angles in 3D (Lines & Planes)",
        device: "Same-Kind = COSINE; Line-to-Plane = SINE",
        explanation:
          "Line–line (both directions) and plane–plane (both normals) are 'same-kind' pairs → use arccos. Line–plane mixes a direction with a normal → use arcsin!",
        level: "HL",
      },
      {
        topic: "Intersecting Two 3D Lines",
        device: "Two Lines, Two Letters, Three Checks",
        explanation:
          "Give L₁ and L₂ two distinct letters (λ and μ), solve two coordinate equations, and ALWAYS run the third coordinate check to distinguish intersecting from skew.",
        level: "HL",
      },
      {
        topic: "Cartesian Plane Equation",
        device: "Cross to Normal, Dot to d",
        explanation:
          "Cross two in-plane direction vectors (**n** = **b** × **c**) to get the normal (a, b, c), then dot **n** with any point **a** on the plane to get d = **a** · **n**.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "3D Graphics, Ray Tracing & Lighting Shaders",
        emoji: "🎮",
        detail:
          "Every pixel in a 3D video game computes the cross product of triangle edges to find each polygon's surface normal **n**, then dots **n** with the light-ray direction to shade brightness — and solves billions of line–plane intersections per second!",
      },
      {
        title: "Aviation & Drone Airspace Separation (TCAS)",
        emoji: "✈️",
        detail:
          "Air traffic control models flight corridors as 3D vector lines **r**(t) = **r**₀ + t**v**. Safe flight paths are skew lines whose shortest distance and closest-approach time keep aircraft separated by required vertical and horizontal minima.",
      },
      {
        title: "Architectural Space Frames & Singapore Skylines",
        emoji: "🏙️",
        detail:
          "Structural engineers designing diagrid steel roofs and cantilevered decks (such as Marina Bay Sands and Jewel Changi's glass-and-steel torus) calculate 3D member lengths, node angles, and dihedral panel joins with dot and cross products.",
      },
      {
        title: "Crystallography & X-Ray Diffraction",
        emoji: "💎",
        detail:
          "Mineralogists describe crystal lattice planes using Miller indices (h, k, l) — literally the normal vector **n** of parallel atomic planes — and compute interplanar spacing via the exact parallel-plane distance formula!",
      },
      {
        title: "Robotic Arm Torque & Kinematics",
        emoji: "🤖",
        detail:
          "In 3D mechanics, torque **τ** = **r** × **F** is a cross product whose direction gives the axis of rotation (right-hand rule) and whose magnitude |**r**||**F**| sin θ gives the turning effect on a robotic joint.",
      },
    ],
    videos: [
      {
        title: "3Blue1Brown — Dot Products, Cross Products & 3D Linear Transformations",
        channel: "3Blue1Brown",
        url: "https://www.youtube.com/results?search_query=3blue1brown+cross+products+dot+products+essence+of+linear+algebra",
      },
      {
        title: "IB Maths AA HL — Vector Equations of Lines, Skew Lines & Kinematics",
        channel: "Revision Village",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+vector+equations+lines+skew+lines",
      },
      {
        title: "IB Maths AA HL — Vector & Cartesian Equations of Planes and Intersections",
        channel: "OSC / Revision Village",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+equations+of+planes+intersection+angles+distances",
      },
      {
        title: "Three Planes Intersecting in 3D Space — Geometric Interpretations",
        channel: "Eddie Woo / IB HL",
        url: "https://www.youtube.com/results?search_query=intersection+of+three+planes+sheaf+triangular+prism+IB+HL",
      },
    ],
    formulas: [
      {
        name: "3D Magnitude & Unit Vector",
        formula: "{{|v| = sqrt(v_1^2 + v_2^2 + v_3^2)}},  {{v_hat = v / |v|}}",
        note: "HL Formula Booklet (AHL 3.12)",
        level: "HL",
      },
      {
        name: "Scalar (Dot) Product",
        formula: "{{v · w = v_1 w_1 + v_2 w_2 + v_3 w_3 = |v| |w| cos θ}}",
        note: "Perpendicular iff v · w = 0 (non-zero vectors)",
        level: "HL",
      },
      {
        name: "Angle Between Two Vectors / Lines",
        formula: "{{cos θ = (v · w) / (|v| |w|)}}  (acute for lines: use {{|v · w|}})",
        note: "AHL 3.13",
        level: "HL",
      },
      {
        name: "Vector, Parametric & Cartesian Line",
        formula: "{{r = a + λ b}},  {{(x - a_1)/b_1 = (y - a_2)/b_2 = (z - a_3)/b_3}}",
        note: "AHL 3.14; for kinematics r(t) = r₀ + t v",
        level: "HL",
      },
      {
        name: "Vector (Cross) Product",
        formula: "{{v × w = (v_2 w_3 - v_3 w_2, v_3 w_1 - v_1 w_3, v_1 w_2 - v_2 w_1)}}",
        note: "AHL 3.16; anti-commutative: w × v = −(v × w)",
        level: "HL",
      },
      {
        name: "Cross Product Magnitude & Areas",
        formula: "{{|v × w| = |v| |w| sin θ}},  {{A_(parallelogram) = |v × w|}},  {{A_(triangle) = (1/2) |AB × AC|}}",
        note: "Do NOT rescale v × w before taking its norm for area!",
        level: "HL",
      },
      {
        name: "Plane Equations (Vector, Normal, Cartesian)",
        formula: "{{r = a + λ b + μ c}},  {{r · n = a · n}},  {{a x + b y + c z = d}}",
        note: "AHL 3.17; normal vector n = b × c = (a, b, c)",
        level: "HL",
      },
      {
        name: "Acute Angle Between Line and Plane",
        formula: "{{sin α = |b · n| / (|b| |n|)}}",
        note: "Complementary to angle θ with normal (α = 90° − θ)",
        level: "HL",
      },
      {
        name: "Acute Dihedral Angle Between Two Planes",
        formula: "{{cos φ = |n_1 · n_2| / (|n_1| |n_2|)}}",
        note: "Angle between the two normal vectors",
        level: "HL",
      },
      {
        name: "Shortest Distance: Point to Plane",
        formula: "{{D = |a x_0 + b y_0 + c z_0 - d| / sqrt(a^2 + b^2 + c^2)}}",
        note: "Parallel planes (same normal): D = |d₁ − d₂| / |n|",
        level: "HL",
      },
      {
        name: "Shortest Distance: Point to Line",
        formula: "{{D = |AP × b| / |b|}}  (or find foot F via {{PF · b = 0}})",
        note: "A is any point on line r = a + λb",
        level: "HL",
      },
      {
        name: "Shortest Distance Between Two Skew Lines",
        formula: "{{D = |(a_2 - a_1) · (b_1 × b_2)| / |b_1 × b_2|}}",
        note: "Scalar projection of a₂ − a₁ onto unit common normal",
        level: "HL",
      },
    ],
  },
};
