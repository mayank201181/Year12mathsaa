import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "1b-complex-proofs-systems",
  title: "Topic 1B: Complex Numbers, Formal Proof & Linear Systems (HL)",
  strand: "Topic 1: Number & Algebra",
  icon: "ℂ",
  level: "HL",
  summary:
    "Master the complex plane, polar & Euler forms, De Moivre's theorem and nth roots, formal proof by induction and contradiction, and 3×3 parametric linear systems (IB AA HL, FA2029 brief).",
  intro:
    "In IB Mathematics: Analysis & Approaches HL, Topic 1B lifts algebra beyond the real number line into the two-dimensional **complex plane** ℂ, equips you with the formal machinery of **mathematical induction** and **proof by contradiction** (note: proof by counterexample was removed in the FA2029 subject brief), and unifies 3D geometry with **Gaussian elimination** for 3×3 parametric linear systems.",
  guide: [
    // =========================================================================
    // SECTION 1: Complex Numbers, Argand Diagrams & Conjugates
    // =========================================================================
    {
      id: "complex-cartesian-argand",
      heading: "[HL] Complex Numbers, Argand Diagrams & Conjugates",
      level: "HL",
      discovery: {
        problem:
          "Try solving {{x^2 + 2x + 5 = 0}} by completing the square. You reach {{(x + 1)^2 = -4}}. No real number has a negative square — yet if we invent a single number {{i}} with {{i^2 = -1}}, the solutions become {{x = -1 + 2i}} and {{x = -1 - 2i}}. Where on Earth do these numbers live if they cannot sit on the 1D real line?",
        idea: "Instead of squeezing {{i}} onto the horizontal real axis, give imaginary multiples their own perpendicular vertical axis. Every complex number {{z = a + bi}} becomes a point (or position vector) {{(a, b)}} on the 2D **Argand plane** — and suddenly conjugation is reflection across the real axis, modulus is distance from the origin, and multiplication by {{i}} is an exact 90° anticlockwise rotation!",
      },
      body: `### Cartesian Form, Powers of {{i}} & Equality

Define the **imaginary unit** {{i}} by {{i^2 = -1}}. A **complex number** in Cartesian form is written:

    z = a + bi,    where a = Re(z) ∈ ℝ and b = Im(z) ∈ ℝ.

Notice that **Im(z) is the real coefficient b**, never {{bi}}. Two complex numbers are equal if and only if both their real parts and their imaginary parts match:

    a + bi = c + di   ⇔   a = c  and  b = d.

Powers of {{i}} cycle every 4 steps: {{i^1 = i}}, {{i^2 = -1}}, {{i^3 = -i}}, {{i^4 = 1}}. To evaluate {{i^n}} for any integer {{n}}, divide {{n}} by 4 and inspect the remainder.

### Arithmetic & the Complex Conjugate

Addition and subtraction combine real and imaginary parts separately. Multiplication expands just like binomials and replaces {{i^2}} with {{−1}}:

    (a + bi)(c + di) = (ac − bd) + (ad + bc)i.

The **complex conjugate** of {{z = a + bi}} is {{z^∗ = a - bi}} (flip the sign of the imaginary part only). Its magic property is that multiplying any complex number by its conjugate produces a **non-negative real number**:

    z · {{z^∗}} = (a + bi)(a − bi) = {{a^2 + b^2}} = {{|z|^2}} ∈ ℝ.

To **divide** complex numbers, multiply numerator and denominator by the conjugate of the denominator — this is called **realising the denominator**:

    {{(a + bi)/(c + di)}} = {{(a + bi)(c - di)/(c^2 + d^2)}}.

### Useful Conjugate Identities

| Identity | Algebraic Form | Geometric Meaning on Argand Plane |
|---|---|---|
| Sum / difference | {{(z +- w)^∗ = z^∗ +- w^∗}} | Reflection preserves vector addition |
| Product / quotient | {{(zw)^∗ = z^∗ w^∗}}, {{(z/w)^∗ = z^∗ / w^∗}} | Reflection reverses angles cleanly |
| Extracting parts | Re(z) = {{(z + z^∗)/2}}, Im(z) = {{(z - z^∗)/(2i)}} | Midpoint & half-gap across real axis |
| Pure real / pure imaginary | {{z = z^∗}} ⇔ z ∈ ℝ; {{z = -z^∗}} ⇔ Re(z) = 0 | Lies on real axis / imaginary axis |

### Modulus, Principal Argument & Argand Loci

Plotting {{z = a + bi}} as the point {{(a, b)}} on the Argand plane gives two geometric invariants:

- **Modulus** (distance from origin): {{|z| = sqrt(a^2 + b^2) >= 0}}. Also {{|zw| = |z||w|}}, {{|z/w| = |z|/|w|}}, and {{|z^n| = |z|^n}}.
- **Principal argument** arg(z): the anticlockwise angle {{theta}} from the positive real axis to the vector {{z}}, restricted strictly to the interval **{{(-pi, pi]}}** (i.e. {{−π < arg(z) ≤ π}}).

> **Quadrant Rule for arg(z):** Always sketch {{z = a + bi}} first! Compute the acute reference angle {{alpha = arctan(|b|/|a|)}} (for {{a ≠ 0}}), then place it in the right quadrant:
> - **Q1** ({{a > 0, b > 0}}): {{theta = alpha}}
> - **Q2** ({{a < 0, b > 0}}): {{theta = pi - alpha}}
> - **Q3** ({{a < 0, b < 0}}): {{theta = -(pi - alpha) = alpha - pi}}
> - **Q4** ({{a > 0, b < 0}}): {{theta = -alpha}}

On the Argand plane, {{|z - w|}} is the **Euclidean distance** between points {{z}} and {{w}}. Therefore:
- {{|z - z_0| = R}} is a **circle** of centre {{z_0}} and radius {{R}}.
- {{|z - z_1| = |z - z_2|}} is the **perpendicular bisector** of the line segment joining {{z_1}} and {{z_2}}.
- {{arg(z - z_0) = alpha}} is an **open half-line (ray)** starting at (and excluding) {{z_0}} at angle {{alpha}} to the positive real direction.`,
      diagram: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Argand plane showing z = a + bi, its conjugate reflection across the real axis, modulus r, and principal argument theta in the interval minus pi to pi">
  <rect x="0" y="0" width="420" height="260" rx="12" fill="var(--surface-2)"/>
  <g stroke="var(--line)" stroke-width="1">
    <line x1="40" y1="30" x2="40" y2="230"/><line x1="90" y1="30" x2="90" y2="230"/>
    <line x1="140" y1="30" x2="140" y2="230"/><line x1="240" y1="30" x2="240" y2="230"/>
    <line x1="290" y1="30" x2="290" y2="230"/><line x1="340" y1="30" x2="340" y2="230"/>
    <line x1="40" y1="50" x2="380" y2="50"/><line x1="40" y1="90" x2="380" y2="90"/>
    <line x1="40" y1="170" x2="380" y2="170"/><line x1="40" y1="210" x2="380" y2="210"/>
  </g>
  <line x1="30" y1="130" x2="390" y2="130" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="190" y1="20" x2="190" y2="242" stroke="var(--ink)" stroke-width="1.8"/>
  <polygon points="390,130 382,126 382,134" fill="var(--ink)"/>
  <polygon points="190,20 186,28 194,28" fill="var(--ink)"/>
  <text x="372" y="122" font-size="12" font-weight="700" fill="var(--ink)">Re(z)</text>
  <text x="198" y="30" font-size="12" font-weight="700" fill="var(--ink)">Im(z)</text>
  <text x="176" y="144" font-size="11" fill="var(--ink-2)">O</text>
  <!-- Dashed projections -->
  <line x1="310" y1="60" x2="310" y2="200" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="4 4"/>
  <line x1="190" y1="60" x2="310" y2="60" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="4 4"/>
  <line x1="190" y1="200" x2="310" y2="200" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="4 4"/>
  <!-- Angle arcs -->
  <path d="M 226 130 A 36 36 0 0 0 221 112" fill="none" stroke="var(--brand)" stroke-width="2"/>
  <path d="M 226 130 A 36 36 0 0 1 221 148" fill="none" stroke="var(--accent)" stroke-width="2"/>
  <!-- Vectors -->
  <line x1="190" y1="130" x2="310" y2="60" stroke="var(--brand)" stroke-width="2.6"/>
  <circle cx="310" cy="60" r="5" fill="var(--brand)"/>
  <line x1="190" y1="130" x2="310" y2="200" stroke="var(--accent)" stroke-width="2.4" stroke-dasharray="6 3"/>
  <circle cx="310" cy="200" r="5" fill="var(--accent)"/>
  <!-- Labels -->
  <text x="318" y="57" font-size="12" font-weight="700" fill="var(--brand)">z = a + bi</text>
  <text x="318" y="205" font-size="12" font-weight="700" fill="var(--accent)">z∗ = a − bi</text>
  <text x="234" y="88" font-size="12" font-weight="700" fill="var(--brand)">r = |z|</text>
  <text x="233" y="124" font-size="12" font-weight="700" fill="var(--brand)">+θ</text>
  <text x="233" y="146" font-size="12" font-weight="700" fill="var(--accent)">−θ</text>
  <text x="306" y="144" font-size="11" fill="var(--ink-2)">a</text>
  <text x="176" y="64" font-size="11" fill="var(--ink-2)">b</text>
  <text x="169" y="204" font-size="11" fill="var(--ink-2)">−b</text>
  <!-- Quadrant sign reminder box -->
  <rect x="20" y="34" width="136" height="68" rx="8" fill="var(--surface)" stroke="var(--line)"/>
  <text x="28" y="51" font-size="10.5" font-weight="700" fill="var(--ink)">Principal arg(z) ∈ (−π, π]</text>
  <text x="28" y="67" font-size="10" fill="var(--ink-2)">Upper half: 0 ≤ θ ≤ π</text>
  <text x="28" y="82" font-size="10" fill="var(--ink-2)">Lower half: −π &lt; θ &lt; 0</text>
  <text x="28" y="96" font-size="10" fill="var(--brand)">Q3 uses −(π − α), not +</text>
</svg>`,
      diagramCaption:
        "On the Argand plane, z and its conjugate z∗ are reflections across the real axis: same modulus |z| = |z∗|, opposite principal arguments arg(z∗) = −arg(z) (except on the negative real axis where arg = π).",
      workedExamples: [
        {
          title: "Dividing complex numbers & finding modulus",
          problem: "Express {{z = (7 + i)/(1 - 2i)}} in Cartesian form {{a + bi}} and calculate {{|z|}}.",
          steps: [
            "Multiply numerator and denominator by the conjugate of {{1 - 2i}}, which is {{1 + 2i}}.",
            "Numerator: {{(7 + i)(1 + 2i) = 7 + 14i + i + 2i^2 = 7 + 15i - 2 = 5 + 15i}}.",
            "Denominator: {{(1 - 2i)(1 + 2i) = 1^2 + 2^2 = 5}}.",
            "Divide each term by 5: {{z = (5 + 15i)/5 = 1 + 3i}}.",
            "Modulus: {{|z| = sqrt(1^2 + 3^2) = sqrt(10)}}. (Quick check via quotient property: {{|7 + i| / |1 - 2i| = sqrt(50)/sqrt(5) = sqrt(10)}}.)",
          ],
          answer: "{{z = 1 + 3i}}, {{|z| = sqrt(10)}}",
          yourTurn: {
            question: "Express {{(11 + 2i)/(2 - i)}} in simplified Cartesian form {{a + bi}}.",
            answer: { type: "expression", expr: "4 + 3i", form: "simplified" },
            solution:
              "Multiply top and bottom by {{2 + i}}: {{(11 + 2i)(2 + i)/(2^2 + 1^2) = (22 + 11i + 4i - 2)/5 = (20 + 15i)/5 = 4 + 3i}}.",
          },
        },
        {
          title: "Principal argument in Quadrant III",
          problem: "Find the exact modulus and principal argument arg(z) ∈ (−π, π] of {{z = -sqrt(3) - i}}.",
          steps: [
            "Identify real and imaginary parts: {{a = -sqrt(3) < 0}} and {{b = -1 < 0}}, so {{z}} lies in **Quadrant III**.",
            "Modulus: {{|z| = sqrt((-sqrt(3))^2 + (-1)^2) = sqrt(3 + 1) = 2}}.",
            "Acute reference angle: {{alpha = arctan(|-1|/|-sqrt(3)|) = arctan(1/sqrt(3)) = pi/6}}.",
            "Because {{z}} is in Quadrant III and principal arguments satisfy {{−π < arg(z) ≤ π}}, measure clockwise from the positive real axis: {{arg(z) = -(pi - pi/6) = -5pi/6}}.",
          ],
          answer: "{{|z| = 2}}, arg(z) = {{-5pi/6}}",
          yourTurn: {
            question: "Find the exact principal argument arg(w) ∈ (−π, π] of {{w = -2 + 2i}} in terms of {{pi}}.",
            answer: { type: "expression", expr: "3pi/4" },
            solution:
              "{{w = -2 + 2i}} lies in Quadrant II with acute reference angle {{arctan(2/2) = pi/4}}, so arg(w) = {{pi - pi/4 = 3pi/4}}.",
          },
        },
        {
          title: "Identifying an Argand locus",
          problem: "Find the Cartesian equation of the locus of points {{z = x + yi}} satisfying {{|z - (2 + i)| = |z + 4 - 3i|}}.",
          steps: [
            "Rewrite the RHS to expose the reference point: {{|z - (2 + i)| = |z - (-4 + 3i)|}}.",
            "Geometrically, this is the perpendicular bisector of {{A(2, 1)}} and {{B(-4, 3)}}.",
            "Algebraic confirmation: square both sides with {{z = x + yi}}: {{(x - 2)^2 + (y - 1)^2 = (x + 4)^2 + (y - 3)^2}}.",
            "Expand and cancel {{x^2 + y^2}}: {{-4x + 4 - 2y + 1 = 8x + 16 - 6y + 9}}.",
            "Collect terms: {{4y = 12x + 20}}, so {{y = 3x + 5}}.",
          ],
          answer: "{{y = 3x + 5}} (perpendicular bisector of (2, 1) and (−4, 3))",
        },
      ],
      keyPoints: [
        "In {{z = a + bi}}, both {{a = Re(z)}} and {{b = Im(z)}} are **real numbers** — never include {{i}} inside Im(z).",
        "Always multiply numerator and denominator by the **conjugate of the denominator** to divide complex numbers; use {{z · z^∗ = |z|^2 = a^2 + b^2}}.",
        "Principal argument **must** lie in {{(-pi, pi]}}: never just press {{arctan(b/a)}} on a calculator without checking the quadrant!",
        "{{|z - w|}} measures distance on the Argand plane, turning modulus equations into circles and perpendicular bisectors.",
      ],
      whyItWorks:
        "Why does {{z · z^∗}} always equal {{a^2 + b^2}} with zero imaginary part? Geometrically, {{z^∗}} has angle {{−θ}}, so multiplying {{z}} (angle {{+θ}}) by {{z^∗}} (angle {{−θ}}) adds their angles to {{θ + (−θ) = 0}}, landing straight onto the positive real axis with length {{r · r = r^2 = a^2 + b^2}}!",
      strategies: [
        "Sketch a 5-second quadrant diagram before computing ANY argument — it prevents 100% of Q2/Q3 sign errors.",
        "When asked for {{|z|}} of a complicated product or quotient like {{|(3 + 4i)^5 / (1 - i)^4|}}, apply modulus laws **before** expanding: {{5^5 / (sqrt(2))^4 = 3125/4}}.",
        "When an equation contains both {{z}} and {{z^∗}} (e.g. {{2z + 3z^∗ = 10 - 2i}}), substitute {{z = x + yi}} and {{z^∗ = x - yi}} and equate real and imaginary parts separately.",
      ],
      thinkDeeper:
        "The triangle inequality states {{|z + w| <= |z| + |w|}}. Using the Argand plane, explain geometrically when equality holds (hint: what must be true about arg(z) and arg(w)?).",
    },

    // =========================================================================
    // SECTION 2: Polar & Euler Form, De Moivre's Theorem & nth Roots
    // =========================================================================
    {
      id: "polar-euler-demoivre",
      heading: "[HL] Polar & Euler Form, De Moivre's Theorem & nth Roots",
      level: "HL",
      discovery: {
        problem:
          "Compute {{(1 + i)^1}}, {{(1 + i)^2 = 2i}}, {{(1 + i)^3 = -2 + 2i}}, and {{(1 + i)^4 = -4}}. Plot those four points on an Argand plane. Notice that each multiplication by {{1 + i}} scales the radius by {{sqrt(2)}} and turns anticlockwise by {{pi/4}}. Can you predict {{(1 + i)^8}} in three seconds without expanding a single binomial?",
        idea: "Cartesian form is built for **addition**, but **polar / Euler form** {{z = r e^(i theta)}} is built for **multiplication, powers, and roots**! Multiplying complex numbers simply multiplies moduli and adds arguments — so raising to the {{n}}th power just raises {{r}} to the {{n}}th power and multiplies {{theta}} by {{n}}.",
      },
      body: `### Polar (Modulus–Argument) & Euler Forms

For any non-zero complex number {{z = a + bi}} with modulus {{r = |z| > 0}} and argument {{theta = arg(z)}}, right-triangle trigonometry gives {{a = r cos theta}} and {{b = r sin theta}}, leading to three equivalent forms:

| Form | Expression | Best Used For |
|---|---|---|
| Cartesian | {{z = a + bi}} | Addition, subtraction, equating Re & Im parts |
| Modulus–argument (polar) | {{z = r(cos theta + i sin theta)}} = r cis θ | Converting to Cartesian, trig identities |
| Euler (exponential) | {{z = r e^(i theta)}} | Multiplication, division, powers, nth roots |

Watch the strict sign conventions: **{{r}} must be positive** and the sign between {{cos theta}} and {{i sin theta}} **must be +**. For example, {{2(cos theta - i sin theta) = 2(cos(-theta) + i sin(-theta)) = 2 e^(-i theta)}}, and {{-3 e^(i pi/4) = 3 e^(i(pi/4 - pi)) = 3 e^(-3i pi/4)}}.

### Multiplication & Division in Polar/Euler Form

Because Euler form obeys standard index laws:

    {{(r_1 e^(i theta_1))(r_2 e^(i theta_2)) = r_1 r_2 e^(i(theta_1 + theta_2))}}
    {{(r_1 e^(i theta_1))/(r_2 e^(i theta_2)) = (r_1/r_2) e^(i(theta_1 - theta_2))}}

Therefore, **multiplying by {{w = r e^(i alpha)}} scales by factor {{r}} and rotates anticlockwise by {{alpha}}** about the origin! Always adjust the final angle by adding or subtracting multiples of {{2pi}} if the question asks for the principal argument in {{(-pi, pi]}}.

### De Moivre's Theorem & Trigonometric Identities

For every integer {{n ∈ ℤ}} (and extendable to rational powers via roots):

    {{[r(cos theta + i sin theta)]^n = r^n (cos(n theta) + i sin(n theta))}},    or equivalently    {{(r e^(i theta))^n = r^n e^(i n theta)}}.

Two classic HL applications use De Moivre's theorem in opposite directions:
1. **Multiple-angle identities ({{cos n theta}}, {{sin n theta}} in terms of powers):** Expand {{(cos theta + i sin theta)^n}} by the Binomial Theorem and equate real parts to {{cos(n theta)}} and imaginary parts to {{sin(n theta)}}.
2. **Power-reduction identities ({{cos^n theta}}, {{sin^n theta}} in terms of multiple angles):** Let {{z = e^(i theta)}}, so {{z^(-1) = e^(-i theta)}}. Then:

    {{z + z^(-1) = 2 cos theta}},    {{z - z^(-1) = 2i sin theta}},    {{z^n + z^(-n) = 2 cos(n theta)}},    {{z^n - z^(-n) = 2i sin(n theta)}}.

### Conjugate Root Theorem & Fundamental Theorem of Algebra

By the **Fundamental Theorem of Algebra**, every degree-{{n}} polynomial has exactly {{n}} complex roots (counting multiplicity). If a polynomial {{P(z)}} has **real coefficients**, then taking conjugates of {{P(z) = 0}} gives {{P(z^∗) = 0}}:
- Non-real roots of real polynomials **always occur in conjugate pairs** {{a + bi}} and {{a - bi}}.
- Each conjugate pair produces a **real quadratic factor**: {{(z - (a + bi))(z - (a - bi)) = z^2 - 2az + (a^2 + b^2)}}.
- Every odd-degree polynomial with real coefficients must have **at least one real root**.

### Geometric {{n}}th Roots of a Complex Number

To solve {{z^n = w}} where {{w = r e^(i theta)}} ({{r > 0}}):
1. Write **all coterminal angles** of {{w}}: {{z^n = r e^(i(theta + 2k pi))}} for {{k ∈ ℤ}}.
2. Apply De Moivre's theorem to extract {{n}} distinct roots for {{k = 0, 1, 2, …, n − 1}}:

    {{z_k = r^(1/n) e^(i(theta + 2k pi)/n)}}.

3. Adjust any angle outside {{(-pi, pi]}} by subtracting {{2pi}} to express principal arguments.

Geometrically, the {{n}} roots lie equally spaced on the circle of radius {{r^(1/n)}} centred at the origin, separated by angle {{2pi/n}}, forming the vertices of a **regular {{n}}-gon** (for {{n ≥ 3}}). Because the coefficient of {{z^(n-1)}} in {{z^n - w = 0}} is {{0}}, the **sum of all {{n}} roots is always 0** (their centroid sits at the origin)!`,
      diagram: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Argand diagram showing the four fourth roots of a complex number equally spaced by pi over 2 on a circle of radius r to the one fourth, forming a square">
  <rect x="0" y="0" width="420" height="260" rx="12" fill="var(--surface-2)"/>
  <!-- Axes centred at (150, 130) -->
  <line x1="30" y1="130" x2="270" y2="130" stroke="var(--ink)" stroke-width="1.6"/>
  <line x1="150" y1="20" x2="150" y2="240" stroke="var(--ink)" stroke-width="1.6"/>
  <polygon points="270,130 262,126 262,134" fill="var(--ink)"/>
  <polygon points="150,20 146,28 154,28" fill="var(--ink)"/>
  <text x="255" y="122" font-size="11" font-weight="700" fill="var(--ink)">Re</text>
  <text x="157" y="30" font-size="11" font-weight="700" fill="var(--ink)">Im</text>
  <!-- Circle of radius 76 -->
  <circle cx="150" cy="130" r="76" fill="none" stroke="var(--brand)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- Regular 4-gon (rotated by 25 deg: cos25=0.906, sin25=0.423; 76*0.906=68.9, 76*0.423=32.1) -->
  <polygon points="218.9,97.9 117.9,61.1 81.1,162.1 182.1,198.9" fill="var(--brand-soft)" fill-opacity="0.45" stroke="var(--brand)" stroke-width="2"/>
  <!-- Radii -->
  <g stroke="var(--accent)" stroke-width="1.4" stroke-dasharray="3 3">
    <line x1="150" y1="130" x2="218.9" y2="97.9"/>
    <line x1="150" y1="130" x2="117.9" y2="61.1"/>
    <line x1="150" y1="130" x2="81.1" y2="162.1"/>
    <line x1="150" y1="130" x2="182.1" y2="198.9"/>
  </g>
  <!-- Angle step arc between w0 and w1 -->
  <path d="M 181.7 115.2 A 35 35 0 0 0 135.2 98.3" fill="none" stroke="var(--bad)" stroke-width="2"/>
  <text x="156" y="92" font-size="10.5" font-weight="700" fill="var(--bad)">2π/n</text>
  <!-- Root dots -->
  <circle cx="218.9" cy="97.9" r="5" fill="var(--brand)"/>
  <circle cx="117.9" cy="61.1" r="5" fill="var(--brand)"/>
  <circle cx="81.1" cy="162.1" r="5" fill="var(--brand)"/>
  <circle cx="182.1" cy="198.9" r="5" fill="var(--brand)"/>
  <text x="226" y="96" font-size="11" font-weight="700" fill="var(--brand)">w₀ (θ/n)</text>
  <text x="88" y="54" font-size="11" font-weight="700" fill="var(--brand)">w₁</text>
  <text x="58" y="176" font-size="11" font-weight="700" fill="var(--brand)">w₂</text>
  <text x="188" y="212" font-size="11" font-weight="700" fill="var(--brand)">w₃</text>
  <!-- Summary panel on right -->
  <rect x="282" y="36" width="124" height="184" rx="10" fill="var(--surface)" stroke="var(--line)"/>
  <text x="292" y="57" font-size="11.5" font-weight="700" fill="var(--ink)">nth Roots of w</text>
  <text x="292" y="79" font-size="10.5" fill="var(--ink-2)">• Modulus: r^(1/n)</text>
  <text x="292" y="100" font-size="10.5" fill="var(--ink-2)">• First angle: θ/n</text>
  <text x="292" y="121" font-size="10.5" fill="var(--ink-2)">• Spacing: 2π/n</text>
  <text x="292" y="142" font-size="10.5" fill="var(--ink-2)">• Shape: regular</text>
  <text x="300" y="156" font-size="10.5" fill="var(--ink-2)">n-gon centred at O</text>
  <text x="292" y="180" font-size="10.5" font-weight="700" fill="var(--brand)">• Sum: Σ wₖ = 0</text>
  <text x="292" y="202" font-size="10" fill="var(--accent)">k = 0, 1, …, n−1</text>
</svg>`,
      diagramCaption:
        "The n distinct solutions of zⁿ = r e^(iθ) sit on a circle of radius r^(1/n) with equal angular spacing 2π/n, forming a regular n-gon whose centroid is the origin (so Σ wₖ = 0).",
      workedExamples: [
        {
          title: "Evaluating high powers using Euler form & De Moivre",
          problem: "Evaluate {{(1 - sqrt(3)i)^6}} in exact Cartesian form.",
          steps: [
            "Write {{z = 1 - sqrt(3)i}} in Euler form. It lies in Q4: {{r = sqrt(1^2 + (-sqrt(3))^2) = 2}} and {{theta = -arctan(sqrt(3)/1) = -pi/3}}.",
            "So {{z = 2 e^(-i pi/3)}}.",
            "Apply De Moivre's theorem: {{z^6 = 2^6 e^(6(-i pi/3)) = 64 e^(-2i pi)}}.",
            "Convert back to Cartesian: {{64(cos(-2pi) + i sin(-2pi)) = 64(1 + 0i) = 64}}.",
          ],
          answer: "{{64}}",
          yourTurn: {
            question: "Evaluate {{(sqrt(3) + i)^4}} in exact Cartesian form {{a + bi}} (use `sqrt(3)`).",
            answer: { type: "expression", expr: "-8 + 8sqrt(3)i" },
            solution:
              "{{sqrt(3) + i = 2 e^(i pi/6)}}, so {{(sqrt(3) + i)^4 = 16 e^(i 2pi/3) = 16(-1/2 + i sqrt(3)/2) = -8 + 8sqrt(3)i}}.",
          },
        },
        {
          title: "Deriving a triple-angle identity with De Moivre",
          problem: "Use De Moivre's theorem to prove that {{cos(3theta) = 4cos^3(theta) - 3cos(theta)}}.",
          steps: [
            "By De Moivre's theorem: {{cos(3theta) + i sin(3theta) = (cos theta + i sin theta)^3}}.",
            "Expand the RHS binomially: {{cos^3(theta) + 3i cos^2(theta) sin(theta) + 3i^2 cos(theta) sin^2(theta) + i^3 sin^3(theta)}}.",
            "Use {{i^2 = -1}} and {{i^3 = -i}} to separate real and imaginary parts: {{(cos^3(theta) - 3cos(theta) sin^2(theta)) + i(3cos^2(theta) sin(theta) - sin^3(theta))}}.",
            "Equate real parts: {{cos(3theta) = cos^3(theta) - 3cos(theta) sin^2(theta)}}.",
            "Substitute {{sin^2(theta) = 1 - cos^2(theta)}}: {{cos(3theta) = cos^3(theta) - 3cos(theta)(1 - cos^2(theta)) = 4cos^3(theta) - 3cos(theta)}}.",
          ],
          answer: "{{cos(3theta) = 4cos^3(theta) - 3cos(theta)}}",
        },
        {
          title: "Solving zⁿ = w for all distinct nth roots",
          problem: "Solve {{z^3 = -8i}}, expressing all three roots in Euler form {{r e^(i theta)}} with {{theta ∈ (-pi, pi]}} and in Cartesian form.",
          steps: [
            "Write {{-8i}} in Euler form with general angle: {{|-8i| = 8}} and arg(−8i) = {{-pi/2}}, so {{z^3 = 8 e^(i(-pi/2 + 2k pi))}} for {{k ∈ ℤ}}.",
            "Take cube roots via De Moivre: {{z_k = 8^(1/3) e^(i(-pi/6 + 2k pi/3)) = 2 e^(i(-pi/6 + 2k pi/3))}} for {{k = 0, 1, 2}}.",
            "{{k = 0}}: {{z_0 = 2 e^(-i pi/6) = 2(sqrt(3)/2 - i/2) = sqrt(3) - i}}.",
            "{{k = 1}}: {{z_1 = 2 e^(i pi/2) = 2i}}.",
            "{{k = 2}}: {{z_2 = 2 e^(i 7pi/6) = 2 e^(-i 5pi/6) = -sqrt(3) - i}} (subtracted {{2pi}} to bring {{7pi/6}} into {{(-pi, pi]}}).",
          ],
          answer: "{{2 e^(-i pi/6) = sqrt(3) - i}}, {{2 e^(i pi/2) = 2i}}, {{2 e^(-i 5pi/6) = -sqrt(3) - i}}",
          yourTurn: {
            question: "What is the modulus of each of the four roots of {{z^4 = -16}}?",
            answer: { type: "number", value: 2 },
            solution: "Since {{|-16| = 16}}, every 4th root has modulus {{16^(1/4) = 2}}.",
          },
        },
      ],
      keyPoints: [
        "Euler's formula {{e^(i theta) = cos theta + i sin theta}} turns multiplication into angle addition and powers into angle multiplication.",
        "Always check polar form is strictly {{r(cos theta + i sin theta)}} with **{{r > 0}}** and a **+** sign before {{i sin theta}} before applying De Moivre.",
        "Never forget the **{{+ 2k pi}}** term before dividing the argument by {{n}} — omitting it loses {{n - 1}} of the {{n}} roots!",
        "Real polynomials have complex roots in **conjugate pairs**; verify coefficients are real before assuming {{z^∗}} is also a root.",
      ],
      whyItWorks:
        "Why does {{(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)}} work? Because multiplying by {{cos theta + i sin theta}} is geometrically a pure rotation by angle {{theta}} (its matrix matches the 2D rotation matrix!). Repeating a rotation by {{theta}} exactly {{n}} times simply rotates by {{n theta}}, and Euler's series for {{e^(i theta)}} confirms the exact same identity analytically.",
      strategies: [
        "For products/powers like {{(1 + i)^7 / (sqrt(3) - i)^3}}, convert both numerator and denominator to Euler form first — never expand binomially!",
        "When you already know one {{n}}th root {{w_0}} of {{z^n = c}}, obtain the remaining {{n - 1}} roots instantly by multiplying successively by {{e^(i 2pi/n)}} (rotating by {{2pi/n}}).",
        "When solving a real quartic or cubic given one non-real root {{a + bi}}, immediately form the real quadratic factor {{z^2 - 2az + (a^2 + b^2)}} and divide the polynomial by it.",
      ],
      thinkDeeper:
        "Let {{omega = e^(i 2pi/5)}} be a primitive 5th root of unity. Since {{1 + omega + omega^2 + omega^3 + omega^4 = 0}}, pair up {{omega + omega^4 = 2 cos(2pi/5)}} and {{omega^2 + omega^3 = 2 cos(4pi/5)}} to derive the exact radical value of {{cos(2pi/5)}}!",
    },

    // =========================================================================
    // SECTION 3: Proof by Mathematical Induction & Proof by Contradiction
    // =========================================================================
    {
      id: "induction-contradiction",
      heading: "[HL] Proof by Mathematical Induction & Proof by Contradiction",
      level: "HL",
      discovery: {
        problem:
          "Notice that {{1 = 1^2}}, {{1 + 3 = 2^2}}, {{1 + 3 + 5 = 3^2}}, and {{1 + 3 + 5 + 7 = 4^2}}. Checking 100 cases still leaves infinitely many unchecked — so how can a finite proof guarantee a formula holds for **every** positive integer? Conversely, how can you prove {{sqrt(2)}} can **never** be written as a fraction {{a/b}} when there are infinitely many pairs of integers to test?",
        idea: "Two supreme deductive weapons solve both problems: **Mathematical Induction** sets up a chain reaction (knock over domino 1, and prove any falling domino knocks over the next), while **Proof by Contradiction** assumes the opposite of what you want to prove and drives straight into an unavoidable logical absurdity!",
      },
      body: `*(FA2029 IB AA HL note: **Proof by Mathematical Induction** and **Proof by Contradiction** are the two formal HL proof techniques assessed under AHL 1.15; proof by counterexample has been removed in the FA2029 subject brief.)*

### 1. Proof by Mathematical Induction

To prove a statement {{P(n)}} holds for all integers {{n >= n_0}} (usually {{n_0 = 1}}, though inequalities may start at {{n_0 = 4}} or {{n_0 = 5}}), IB examiners mark four strictly structured stages:

1. **Base Case:** Verify explicitly that {{P(n_0)}} is true (for equations, evaluate LHS and RHS separately and show they match).
2. **Inductive Hypothesis:** State clearly: *"Assume {{P(k)}} is true for some integer {{k >= n_0}}"* — **never** write *"Assume {{P(k)}} is true for all {{k}}"* (that assumes the very statement you are trying to prove!).
3. **Inductive Step:** Prove {{P(k + 1)}} is true **using the inductive hypothesis explicitly**, showing clear algebraic linkage from {{k}} to {{k + 1}}.
4. **Formal Conclusion:** Conclude with the full IB statement: *"Since {{P(n_0)}} is true, and {{P(k)}} being true implies {{P(k + 1)}} is true for all integers {{k >= n_0}}, by the principle of mathematical induction {{P(n)}} is true for all integers {{n >= n_0}}."*

### Five Core HL Induction Families

| Family | Typical {{k -> k+1}} Move | Example Target |
|---|---|---|
| **Summations** | Split {{sum_(r=1)^(k+1) u_r = (sum_(r=1)^k u_r) + u_(k+1)}}, substitute hypothesis, factorise | {{sum_(r=1)^n r(r+1) = n(n+1)(n+2)/3}} |
| **Divisibility** | Write {{f(k) = d A}} ({{A ∈ ℤ}}), isolate one exponential term (e.g. {{7^k = 3A + 4^k}}), substitute into {{f(k+1)}} (or evaluate {{f(k+1) - c · f(k)}}) | {{7^n - 4^n}} divisible by 3 |
| **Inequalities** | Apply hypothesis to one side, then prove the bridging inequality valid for {{k >= n_0}} | {{2^n > n^2}} for {{n >= 5}} |
| **Higher Derivatives** | Differentiate the {{k}}th derivative {{y^((k))}} once more (often with product/chain rule) to obtain {{y^((k+1))}} | {{d^n/dx^n (x e^x) = (x + n) e^x}} |
| **De Moivre's Theorem** | Multiply {{(cos theta + i sin theta)^k}} by {{(cos theta + i sin theta)}} and apply compound-angle formulas | {{(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)}} |

### 2. Proof by Contradiction

To prove a statement {{P}} by contradiction:

1. **Negate carefully:** Begin with *"Assume for the sake of contradiction that {{P}} is false"* (write the exact mathematical negation {{¬P}}).
2. **Deduce rigorously:** Use valid algebra, parity, divisibility, or uniqueness of prime factorisation until you reach a statement that contradicts either a known mathematical truth or your own initial assumption.
3. **Conclude:** State clearly why this is a contradiction, so the assumption is false and therefore {{P}} must be true.

> **Classic HL Contradiction Templates:**
> - **Irrationality of {{sqrt(p)}} (for prime {{p}}):** Assume {{sqrt(p) = a/b}} with {{a, b ∈ ℤ}}, {{b ≠ 0}}, and **{{gcd(a, b) = 1}}** (lowest terms). Deduce {{p}} divides {{a}}, then substitute {{a = p m}} to deduce {{p}} also divides {{b}}, contradicting {{gcd(a, b) = 1}}.
> - **Irrationality of {{log_2(3)}}:** Assume {{log_2(3) = a/b}} with {{a, b ∈ ℤ^+}}. Then {{2^a = 3^b}}, contradicting that {{2^a}} is even while {{3^b}} is odd (or the Fundamental Theorem of Arithmetic).
> - **Infinitude of primes (Euclid):** Assume there are only finitely many primes {{p_1, p_2, …, p_k}}. Form {{N = p_1 p_2 … p_k + 1 > 1}}. Every prime {{p_i}} leaves remainder 1 when dividing {{N}}, so none of the listed primes divide {{N}} — contradicting that every integer {{> 1}} has a prime factor.`,
      diagram: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dual proof architecture diagram comparing Mathematical Induction domino chain on the left with Proof by Contradiction loop on the right">
  <rect x="0" y="0" width="420" height="260" rx="12" fill="var(--surface-2)"/>
  <!-- Left Panel: Mathematical Induction -->
  <rect x="14" y="14" width="190" height="232" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="109" y="34" font-size="11.5" font-weight="700" text-anchor="middle" fill="var(--brand)">Mathematical Induction</text>
  <rect x="28" y="46" width="162" height="34" rx="7" fill="var(--brand-soft)"/>
  <text x="109" y="61" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--brand)">1. Base Case: P(n₀)</text>
  <text x="109" y="74" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">Verify LHS = RHS at start n₀</text>
  <line x1="109" y1="80" x2="109" y2="94" stroke="var(--brand)" stroke-width="1.8"/>
  <polygon points="109,97 105,90 113,90" fill="var(--brand)"/>
  <rect x="28" y="98" width="162" height="36" rx="7" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="109" y="113" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink)">2. Hypothesis: Assume P(k)</text>
  <text x="109" y="127" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">for SOME integer k ≥ n₀</text>
  <line x1="109" y1="134" x2="109" y2="148" stroke="var(--brand)" stroke-width="1.8"/>
  <polygon points="109,151 105,144 113,144" fill="var(--brand)"/>
  <rect x="28" y="152" width="162" height="36" rx="7" fill="var(--accent-soft)"/>
  <text x="109" y="167" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--accent)">3. Inductive Step: P(k+1)</text>
  <text x="109" y="181" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">Use P(k) explicitly to prove P(k+1)</text>
  <line x1="109" y1="188" x2="109" y2="202" stroke="var(--brand)" stroke-width="1.8"/>
  <polygon points="109,205 105,198 113,198" fill="var(--brand)"/>
  <rect x="28" y="206" width="162" height="28" rx="7" fill="var(--good-soft)"/>
  <text x="109" y="224" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">4. ∴ P(n) true ∀ n ≥ n₀</text>
  <!-- Right Panel: Proof by Contradiction -->
  <rect x="216" y="14" width="190" height="232" rx="10" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="311" y="34" font-size="11.5" font-weight="700" text-anchor="middle" fill="var(--accent)">Proof by Contradiction</text>
  <rect x="230" y="46" width="162" height="34" rx="7" fill="var(--warn-soft)"/>
  <text x="311" y="61" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--warn)">1. Assume ¬P (Opposite)</text>
  <text x="311" y="74" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">e.g. √2 = a/b with gcd(a,b)=1</text>
  <line x1="311" y1="80" x2="311" y2="94" stroke="var(--accent)" stroke-width="1.8"/>
  <polygon points="311,97 307,90 315,90" fill="var(--accent)"/>
  <rect x="230" y="98" width="162" height="36" rx="7" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="311" y="113" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink)">2. Valid Logical Steps</text>
  <text x="311" y="127" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">Deduce a and b are both even</text>
  <line x1="311" y1="134" x2="311" y2="148" stroke="var(--accent)" stroke-width="1.8"/>
  <polygon points="311,151 307,144 315,144" fill="var(--accent)"/>
  <rect x="230" y="152" width="162" height="36" rx="7" fill="var(--bad-soft)"/>
  <text x="311" y="167" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--bad)">3. Contradiction! (⊥)</text>
  <text x="311" y="181" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">2 divides both ⇒ gcd(a,b) ≥ 2</text>
  <line x1="311" y1="188" x2="311" y2="202" stroke="var(--accent)" stroke-width="1.8"/>
  <polygon points="311,205 307,198 315,198" fill="var(--accent)"/>
  <rect x="230" y="206" width="162" height="28" rx="7" fill="var(--good-soft)"/>
  <text x="311" y="224" font-size="10" font-weight="700" text-anchor="middle" fill="var(--good)">4. ∴ ¬P false ⇒ P is true</text>
</svg>`,
      diagramCaption:
        "Both formal HL proof structures follow strict IB marking gates: base + assumption + step + conclusion for induction; negation + deduction + contradiction + conclusion for contradiction.",
      workedExamples: [
        {
          title: "Mathematical Induction — Divisibility",
          problem: "Prove by mathematical induction that {{7^n - 4^n}} is divisible by 3 for all {{n ∈ ℤ^+}}.",
          steps: [
            "**Base case ({{n = 1}}):** {{7^1 - 4^1 = 3 = 3(1)}}, which is divisible by 3. Hence {{P(1)}} is true.",
            "**Inductive hypothesis:** Assume {{P(k)}} is true for some {{k ∈ ℤ^+}}, so {{7^k - 4^k = 3A}} for some integer {{A}}, which gives {{7^k = 3A + 4^k}}.",
            "**Inductive step ({{n = k + 1}}):** {{7^(k+1) - 4^(k+1) = 7 · 7^k - 4 · 4^k = 7(3A + 4^k) - 4 · 4^k = 21A + 3 · 4^k = 3(7A + 4^k)}}.",
            "Since {{A ∈ ℤ}} and {{k ∈ ℤ^+}}, {{7A + 4^k ∈ ℤ}}, so {{7^(k+1) - 4^(k+1)}} is divisible by 3. Thus {{P(k+1)}} is true whenever {{P(k)}} is true.",
            "**Conclusion:** Since {{P(1)}} is true and {{P(k) => P(k+1)}} for all {{k ∈ ℤ^+}}, by the principle of mathematical induction {{7^n - 4^n}} is divisible by 3 for all {{n ∈ ℤ^+}}.",
          ],
          answer: "Proven by mathematical induction for all {{n ∈ ℤ^+}}.",
          yourTurn: {
            question:
              "To prove {{sum_(r=1)^n (3r - 1) = n(3n + 1)/2}} by induction, what exact simplified expression in {{k}} must be added to {{k(3k + 1)/2}} in the {{n = k + 1}} step?",
            answer: { type: "expression", expr: "3k + 2", form: "simplified" },
            solution: "The {{(k + 1)}}th term of the sum is {{3(k + 1) - 1 = 3k + 2}}.",
          },
        },
        {
          title: "Mathematical Induction — Inequality with n₀ = 5",
          problem: "Prove by mathematical induction that {{2^n > n^2}} for all integers {{n >= 5}}.",
          steps: [
            "**Base case ({{n = 5}}):** LHS = {{2^5 = 32}}, RHS = {{5^2 = 25}}. Since {{32 > 25}}, {{P(5)}} is true.",
            "**Inductive hypothesis:** Assume {{2^k > k^2}} for some integer {{k >= 5}}.",
            "**Inductive step ({{n = k + 1}}):** {{2^(k+1) = 2 · 2^k > 2k^2}} (by the inductive hypothesis).",
            "Compare {{2k^2}} with {{(k + 1)^2}}: {{2k^2 - (k + 1)^2 = k^2 - 2k - 1 = (k - 1)^2 - 2}}.",
            "Since {{k >= 5}}, {{(k - 1)^2 - 2 >= 4^2 - 2 = 14 > 0}}, so {{2k^2 > (k + 1)^2}} and hence {{2^(k+1) > (k + 1)^2}}.",
            "**Conclusion:** Since {{P(5)}} is true and {{P(k) => P(k+1)}} for all integers {{k >= 5}}, by mathematical induction {{2^n > n^2}} for all integers {{n >= 5}}.",
          ],
          answer: "Proven by mathematical induction for all integers {{n >= 5}}.",
        },
        {
          title: "Proof by Contradiction — Irrationality of √2",
          problem: "Prove by contradiction that {{sqrt(2)}} is irrational.",
          steps: [
            "**Negation assumption:** Assume for contradiction that {{sqrt(2)}} is rational. Then {{sqrt(2) = a/b}} for some integers {{a, b}} ({{b ≠ 0}}) with **{{gcd(a, b) = 1}}** (no common factor greater than 1).",
            "**Deduce parity of {{a}}:** Squaring gives {{2 = a^2/b^2}}, so {{a^2 = 2b^2}}. Hence {{a^2}} is even. Since the square of an odd integer {{(2m + 1)^2 = 4m^2 + 4m + 1}} is odd, {{a}} must be even: write {{a = 2m}} for some {{m ∈ ℤ}}.",
            "**Deduce parity of {{b}}:** Substitute {{a = 2m}} into {{a^2 = 2b^2}}: {{4m^2 = 2b^2}}, so {{b^2 = 2m^2}}. Thus {{b^2}} is even, which likewise forces {{b}} to be even.",
            "**Contradiction:** Both {{a}} and {{b}} are divisible by 2, contradicting our assumption that {{gcd(a, b) = 1}}.",
            "**Conclusion:** Therefore our assumption is false, and {{sqrt(2)}} is irrational.",
          ],
          answer: "Proven by contradiction.",
          yourTurn: {
            question:
              "In a proof by contradiction that {{sqrt(5)}} is irrational, assuming {{sqrt(5) = a/b}} in lowest terms gives {{a = 5m}}. Substituting {{a = 5m}} into {{a^2 = 5b^2}} gives {{b^2 = c m^2}}. Find the integer value of {{c}}.",
            answer: { type: "number", value: 5 },
            solution: "{{(5m)^2 = 5b^2 => 25m^2 = 5b^2 => b^2 = 5m^2}}, so {{c = 5}} (showing 5 divides {{b^2}}, hence 5 divides {{b}}).",
          },
        },
      ],
      keyPoints: [
        "In the inductive hypothesis, ALWAYS write **for some {{k >= n_0}}** — writing *for all {{k}}* loses the hypothesis mark (M1) in IB grading!",
        "The final IB conclusion mark (R1) is ONLY awarded if both the base case and inductive step were validly demonstrated AND you explicitly tie them together.",
        "In a divisibility proof by contradiction like {{sqrt(p)}}, you MUST justify why *{{p}} divides {{a^2}} implies {{p}} divides {{a}}* (parity for {{p = 2}}, or prime factorisation for general prime {{p}}).",
        "Never prove a statement by assuming {{P(k+1)}} and manipulating both sides simultaneously into {{0 = 0}} — start strictly from one side of {{P(k+1)}} and arrive at the other.",
      ],
      whyItWorks:
        "Why is mathematical induction logically watertight? It rests on the **Well-Ordering Principle** of the positive integers: if there were any counter-case where {{P(n)}} failed, there would be a *smallest* integer {{m > n_0}} where {{P(m)}} fails. Then {{P(m - 1)}} would be true, and the inductive step {{P(m - 1) => P(m)}} would force {{P(m)}} to be true — a contradiction! So induction and contradiction are secretly dual twins.",
      strategies: [
        "Write down your **target expression** for {{P(k+1)}} in rough margin notes first — knowing what you are aiming to factor towards makes algebraic manipulation effortless.",
        "For divisibility induction of the form {{a^n + b^n}} or {{a^n - b^n}}, expressing {{f(k+1) - b · f(k)}} often collapses one exponential term in a single line!",
        "When starting a contradiction proof of an *'if A then B'* statement, remember its logical negation is **'A is true AND B is false'** (never 'if not A then not B').",
      ],
      thinkDeeper:
        "Why does the {{sqrt(2)}} contradiction proof fail if you try to imitate it for {{sqrt(4)}}? Pinpoint the exact sentence in the proof that breaks down when 2 is replaced by 4!",
    },

    // =========================================================================
    // SECTION 4: 3×3 Systems of Linear Equations & Row Reduction
    // =========================================================================
    {
      id: "linear-systems-3x3",
      heading: "[HL] 3×3 Systems of Linear Equations & Row Reduction",
      level: "HL",
      discovery: {
        problem:
          "Two lines in 2D fail to intersect uniquely only if they are parallel (or identical). Now picture three planes in 3D: can three planes have **no common point at all** even when **no two of the planes are parallel**?",
        idea: "Yes — picture the three rectangular sides of a Toblerone box (a triangular prism)! Each pair of planes intersects along a line, yet the three lines stay parallel and never meet. **Gaussian elimination** reveals every 3D plane configuration automatically just by inspecting the bottom row of the row-echelon augmented matrix!",
      },
      body: `### Augmented Matrices & Elementary Row Operations

A 3×3 system of linear equations:

    {{a_1 x + b_1 y + c_1 z = d_1}}
    {{a_2 x + b_2 y + c_2 z = d_2}}
    {{a_3 x + b_3 y + c_3 z = d_3}}

is encoded compactly as an **augmented matrix** {{[A | d]}}. Three **elementary row operations** simplify the matrix without changing its solution set:

1. **Swap** two rows: {{R_i <-> R_j}}
2. **Scale** a row by a non-zero constant: {{R_i -> c R_i}} ({{c ≠ 0}})
3. **Add a multiple** of one row to another: {{R_i -> R_i + c R_j}}

### Gaussian Elimination to Row-Echelon Form

Eliminate entries **column by column** below the diagonal pivots:
- **Phase 1:** Use Row 1's leading entry to create zeros in Column 1 of Row 2 and Row 3.
- **Phase 2:** Use the new Row 2's leading entry (in Column 2) to create a zero in Column 2 of Row 3.
- **Phase 3:** Inspect the decisive bottom row {{[0, 0, p | q]}} (representing {{p z = q}}) and back-substitute upward.

### The Three Consistency Regimes & Their 3D Geometry

| Reduced Row 3 {{[0, 0, p | q]}} | Algebraic Condition | Solution Set | 3D Plane Geometry |
|---|---|---|---|---|
| {{p ≠ 0}} | Non-zero pivot in every column | **Unique solution** {{(x, y, z)}} | Three planes intersect at a **single point** |
| {{p = 0}} and {{q = 0}} | Row of zeros {{[0, 0, 0 | 0]}} (one free parameter {{t ∈ ℝ}}) | **Infinitely many solutions** (1-parameter line) | Three planes meet in a **common line** (sheaf, or two coincident + one intersecting) |
| {{p = 0}} and {{q ≠ 0}} | Impossible row {{0 = q ≠ 0}} | **Inconsistent (no solution)** | Triangular prism, parallel planes, or two parallel planes cut by a third |

*(If BOTH Row 2 and Row 3 reduce to {{[0, 0, 0 | 0]}}, there are two free parameters and all three equations represent the exact same plane!)*

### Writing a Parametric Line Solution

When Row 3 collapses to {{[0, 0, 0 | 0]}} (and Row 2 has a non-zero pivot):
1. Set the free variable {{z = t}} ({{t ∈ ℝ}}).
2. Solve Row 2 for {{y}} in terms of {{t}}.
3. Substitute {{y}} and {{z}} into Row 1 to solve for {{x}} in terms of {{t}}.
4. Express the solution cleanly as {{(x, y, z) = (x_0 + d_1 t, y_0 + d_2 t, t)}} (or in vector form **r** = **a** + {{t}}**b**), which connects directly to Topic 3B 3D vector lines!

> **Parameter Trap Watch:** Never divide a row by an expression containing an unknown parameter like {{k - 3}}! If {{k = 3}}, you just divided by zero and destroyed the critical case. Always factor and keep {{k - 3}} intact until the final row-echelon analysis.`,
      diagram: `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-panel diagram showing geometric configurations of 3x3 linear systems: unique point intersection, sheaf of planes meeting in a line, and inconsistent triangular prism">
  <rect x="0" y="0" width="420" height="240" rx="12" fill="var(--surface-2)"/>
  <!-- Panel 1: Unique Point -->
  <rect x="12" y="14" width="126" height="212" rx="10" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="75" y="34" font-size="11" font-weight="700" text-anchor="middle" fill="var(--good)">Unique Point</text>
  <!-- 3 mutually intersecting planes schematic -->
  <polygon points="34,116 75,92 116,116 75,140" fill="var(--good-soft)" fill-opacity="0.7" stroke="var(--good)" stroke-width="1.3"/>
  <polygon points="48,66 102,66 102,130 48,130" fill="var(--brand-soft)" fill-opacity="0.45" stroke="var(--brand)" stroke-width="1.3"/>
  <polygon points="75,54 114,76 114,142 75,120" fill="var(--accent-soft)" fill-opacity="0.45" stroke="var(--accent)" stroke-width="1.3"/>
  <circle cx="75" cy="112" r="4.5" fill="var(--bad)"/>
  <text x="75" y="166" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">[0 0 p | q]</text>
  <text x="75" y="182" font-size="10" text-anchor="middle" fill="var(--good)">p ≠ 0</text>
  <text x="75" y="200" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">1 solution (x,y,z)</text>
  <!-- Panel 2: Infinite Line (Sheaf) -->
  <rect x="147" y="14" width="126" height="212" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="210" y="34" font-size="11" font-weight="700" text-anchor="middle" fill="var(--brand)">Infinite (Line)</text>
  <!-- Open-book sheaf sharing central spine -->
  <polygon points="210,60 164,74 164,132 210,118" fill="var(--brand-soft)" fill-opacity="0.65" stroke="var(--brand)" stroke-width="1.3"/>
  <polygon points="210,60 256,74 256,132 210,118" fill="var(--accent-soft)" fill-opacity="0.65" stroke="var(--accent)" stroke-width="1.3"/>
  <polygon points="210,60 242,46 242,104 210,118" fill="var(--good-soft)" fill-opacity="0.55" stroke="var(--good)" stroke-width="1.3"/>
  <line x1="210" y1="50" x2="210" y2="136" stroke="var(--bad)" stroke-width="2.8"/>
  <text x="210" y="166" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">[0 0 0 | 0]</text>
  <text x="210" y="182" font-size="10" text-anchor="middle" fill="var(--brand)">p = 0 and q = 0</text>
  <text x="210" y="200" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">Parametric line (t ∈ ℝ)</text>
  <!-- Panel 3: Inconsistent (Triangular Prism) -->
  <rect x="282" y="14" width="126" height="212" rx="10" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="345" y="34" font-size="11" font-weight="700" text-anchor="middle" fill="var(--bad)">Inconsistent</text>
  <!-- Triangular prism cross-section -->
  <polygon points="315,72 365,56 384,96 334,112" fill="var(--brand-soft)" fill-opacity="0.5" stroke="var(--brand)" stroke-width="1.3"/>
  <polygon points="315,72 334,112 322,138 303,98" fill="var(--accent-soft)" fill-opacity="0.5" stroke="var(--accent)" stroke-width="1.3"/>
  <polygon points="334,112 384,96 372,122 322,138" fill="var(--bad-soft)" fill-opacity="0.6" stroke="var(--bad)" stroke-width="1.3"/>
  <text x="345" y="166" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)">[0 0 0 | q]</text>
  <text x="345" y="182" font-size="10" text-anchor="middle" fill="var(--bad)">p = 0 and q ≠ 0</text>
  <text x="345" y="200" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">No solution (0 = q)</text>
</svg>`,
      diagramCaption:
        "Row-echelon form classifies every 3×3 system instantly: a non-zero pivot yields one point, a full zero row yields a parametric line (sheaf), and [0 0 0 | q] (q ≠ 0) signals inconsistency (e.g. a triangular prism).",
      workedExamples: [
        {
          title: "Parametric 3×3 system — complete consistency classification",
          problem:
            "Consider the system {{x + y + 2z = 4}}, {{2x + 3y + 5z = 9}}, and {{x + 2y + kz = m}}. Determine the values of {{k}} and {{m}} for a unique solution, infinitely many solutions, and no solution. When infinitely many solutions exist, find the general solution in terms of a parameter {{t}}.",
          steps: [
            "Write the augmented matrix rows: {{R_1 = [1, 1, 2 | 4]}}, {{R_2 = [2, 3, 5 | 9]}}, {{R_3 = [1, 2, k | m]}}.",
            "Eliminate Column 1 using {{R_1}}: {{R_2 <- R_2 - 2R_1}} gives {{[0, 1, 1 | 1]}}; {{R_3 <- R_3 - R_1}} gives {{[0, 1, k - 2 | m - 4]}}.",
            "Eliminate Column 2 using the new {{R_2}}: {{R_3 <- R_3 - R_2}} gives {{[0, 0, k - 3 | m - 5]}}.",
            "Inspect Row 3, i.e. {{(k - 3)z = m - 5}}:\n- **Unique solution:** {{k ≠ 3}} (for any {{m ∈ ℝ}}).\n- **Infinitely many solutions:** {{k = 3}} and {{m = 5}} (Row 3 becomes {{0 = 0}}).\n- **No solution (inconsistent):** {{k = 3}} and {{m ≠ 5}} (Row 3 becomes {{0 = m - 5 ≠ 0}}).",
            "For {{k = 3, m = 5}}, let {{z = t}} ({{t ∈ ℝ}}). From Row 2: {{y + t = 1 => y = 1 - t}}. From Row 1: {{x + (1 - t) + 2t = 4 => x = 3 - t}}.",
          ],
          answer:
            "Unique: {{k ≠ 3}}; Infinite: {{k = 3, m = 5}} with {{(x, y, z) = (3 - t, 1 - t, t)}}; Inconsistent: {{k = 3, m ≠ 5}}.",
          yourTurn: {
            question:
              "A 3×3 linear system reduces in row-echelon form to final row {{[0, 0, a - 5 | b + 2]}}. For what value of {{a}} does the system fail to have a unique solution?",
            answer: { type: "number", value: 5 },
            solution: "A unique solution fails when the final pivot vanishes: {{a - 5 = 0 => a = 5}}.",
          },
        },
        {
          title: "Solving a unique 3×3 system via Gaussian elimination",
          problem: "Solve the system {{x - y + z = 2}}, {{2x + y - z = 7}}, {{x + 2y + z = 8}}.",
          steps: [
            "Eliminate {{x}} from Row 2 and Row 3 using Row 1 ({{x - y + z = 2}}):",
            "{{R_2 <- R_2 - 2R_1}}: {{(2 - 2)x + (1 + 2)y + (-1 - 2)z = 7 - 4 => 3y - 3z = 3}}, which simplifies to {{y - z = 1}}.",
            "{{R_3 <- R_3 - R_1}}: {{(1 - 1)x + (2 + 1)y + (1 - 1)z = 8 - 2 => 3y = 6}}, giving {{y = 2}} immediately!",
            "Back-substitute {{y = 2}} into {{y - z = 1}}: {{z = 1}}.",
            "Back-substitute {{y = 2, z = 1}} into Row 1: {{x - 2 + 1 = 2 => x = 3}}. Verify in Row 2: {{2(3) + 2 - 1 = 7}} and Row 3: {{3 + 4 + 1 = 8}}.",
          ],
          answer: "{{x = 3, y = 2, z = 1}}",
        },
      ],
      keyPoints: [
        "Always annotate every row operation (e.g. {{R_3 <- R_3 - 2R_1}}) — IB method marks (M1) depend on clear, traceable elimination steps.",
        "Never divide by an expression containing a parameter (such as {{k - 3}}) because doing so hides the singular case where that expression equals zero.",
        "Zero pivot + zero RHS ({{0z = 0}}) ⇒ **infinitely many solutions** (consistent); zero pivot + non-zero RHS ({{0z = c ≠ 0}}) ⇒ **no solution** (inconsistent).",
        "Always check your final numerical or parametric solution by substituting back into **all three** original equations.",
      ],
      whyItWorks:
        "Why do elementary row operations never change the solution set? Every row operation is **reversible**: swapping two rows swaps back, scaling by {{c ≠ 0}} undoes by {{1/c}}, and replacing {{R_i}} with {{R_i + c R_j}} undoes via {{R_i - c R_j}}. Because any solution of the old equations satisfies the new ones and vice versa, the intersection of the three planes stays identical while the equations become triangular and trivial to solve!",
      strategies: [
        "Swap a row with leading coefficient {{1}} or {{-1}} into Row 1 before eliminating — it avoids fractions throughout the entire calculation.",
        "If an IB question gives a parameter inside Row 1 or Row 2 (e.g. {{k x + y + z = 1}}), swap rows or reorder variables so the parameter sits in Row 3 if possible, keeping pivots clean!",
        "When verifying a parametric line {{(x_0 + d_1 t, y_0 + d_2 t, t)}}, test two quick values ({{t = 0}} and {{t = 1}}) in all three original equations to catch arithmetic slips in 10 seconds.",
      ],
      thinkDeeper:
        "If a 3×3 homogeneous system ({{d_1 = d_2 = d_3 = 0}}) reduces to Row 3 = {{[0, 0, k - 4 | 0]}}, can it EVER be inconsistent? Explain algebraically and geometrically!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Define the complex conjugate {{z^∗}} of {{z = a + bi}} and state {{z · z^∗}}.",
        back: "{{z^∗ = a - bi}}; {{z · z^∗ = a^2 + b^2 = |z|^2}} (always a non-negative real number).",
        level: "HL",
      },
      {
        front: "What is the cycle of powers of {{i}}?",
        back: "{{i^1 = i}}, {{i^2 = -1}}, {{i^3 = -i}}, {{i^4 = 1}} — repeats every 4 powers (use remainder mod 4).",
        level: "HL",
      },
      {
        front: "State the strict interval for the principal argument arg(z) in IB Maths AA HL.",
        back: "{{-pi < arg(z) <= pi}}, i.e. {{arg(z) ∈ (-pi, pi]}}. (Negative real axis has arg = {{+pi}}, never {{-pi}}.)",
        level: "HL",
      },
      {
        front: "How do you express Re(z) and Im(z) purely in terms of {{z}} and {{z^∗}}?",
        back: "Re(z) = {{(z + z^∗)/2}} and Im(z) = {{(z - z^∗)/(2i)}}.",
        level: "HL",
      },
      {
        front: "What geometric loci are described by {{|z - z_0| = R}} and {{|z - z_1| = |z - z_2|}}?",
        back: "{{|z - z_0| = R}} is a circle of centre {{z_0}}, radius {{R}}; {{|z - z_1| = |z - z_2|}} is the perpendicular bisector of {{z_1}} and {{z_2}}.",
        level: "HL",
      },
      {
        front: "State Euler's formula and the three forms of a non-zero complex number.",
        back: "{{e^(i theta) = cos theta + i sin theta}}. Forms: Cartesian {{a + bi}}, Polar {{r(cos theta + i sin theta)}}, Euler {{r e^(i theta)}}.",
        level: "HL",
      },
      {
        front: "What is the geometric effect of multiplying any complex number {{z}} by {{r e^(i alpha)}}?",
        back: "Enlargement (scale) from the origin by factor {{r}} followed by an anticlockwise rotation through angle {{alpha}}.",
        level: "HL",
      },
      {
        front: "State De Moivre's theorem for integer {{n}}.",
        back: "{{[r(cos theta + i sin theta)]^n = r^n (cos(n theta) + i sin(n theta))}}, or {{(r e^(i theta))^n = r^n e^(i n theta)}}.",
        level: "HL",
      },
      {
        front: "If {{z = e^(i theta)}}, what do {{z^n + z^(-n)}} and {{z^n - z^(-n)}} equal?",
        back: "{{z^n + z^(-n) = 2 cos(n theta)}} and {{z^n - z^(-n) = 2i sin(n theta)}}.",
        level: "HL",
      },
      {
        front: "State the Conjugate Root Theorem and its essential condition.",
        back: "If a polynomial {{P(z)}} has **real coefficients** and {{w}} is a non-real root, then {{w^∗}} is also a root (forming real quadratic factor {{z^2 - 2 Re(w) z + |w|^2}}).",
        level: "HL",
      },
      {
        front: "Describe the geometry of all {{n}} solutions of {{z^n = r e^(i theta)}} ({{n >= 3}}).",
        back: "Vertices of a regular {{n}}-gon on the circle of radius {{r^(1/n)}} centred at O, starting at angle {{theta/n}}, spaced by {{2pi/n}}, with sum {{0}}.",
        level: "HL",
      },
      {
        front: "What are the four mandatory parts of an IB Proof by Mathematical Induction?",
        back: "(1) Base case {{P(n_0)}}, (2) Inductive hypothesis (*assume {{P(k)}} for some {{k >= n_0}}*), (3) Inductive step proving {{P(k+1)}} using {{P(k)}}, (4) Formal concluding sentence.",
        level: "HL",
      },
      {
        front: "What are the four stages of a Proof by Contradiction?",
        back: "(1) Assume the logical negation {{¬P}}, (2) Deduce valid logical consequences, (3) Reach a contradiction with a known truth or assumption, (4) Conclude {{P}} must be true.",
        level: "HL",
      },
      {
        front: "Why do we assume {{gcd(a, b) = 1}} at the start of the contradiction proof that {{sqrt(2)}} is irrational?",
        back: "Any rational fraction can be reduced to lowest terms; proving 2 divides both {{a}} and {{b}} then directly contradicts {{gcd(a, b) = 1}}.",
        level: "HL",
      },
      {
        front: "In row-echelon form of a 3×3 system, what distinguishes unique, infinite, and inconsistent systems?",
        back: "Final row {{[0, 0, p | q]}}: {{p ≠ 0}} ⇒ unique point; {{p = 0, q = 0}} ⇒ infinitely many (line); {{p = 0, q ≠ 0}} ⇒ inconsistent (no solution).",
        level: "HL",
      },
      {
        front: "Can three planes in 3D have NO common solution when no two planes are parallel?",
        back: "Yes — they can intersect pairwise in three parallel lines forming a **triangular prism** (row reduction ends with {{[0, 0, 0 | q]}}, {{q ≠ 0}}).",
        level: "HL",
      },
    ],
    mustKnow: [
      "Always sketch the quadrant before finding arg(z): principal arguments satisfy {{−π < arg(z) ≤ π}}, so Quadrant III uses {{−(π − α)}} and Quadrant II uses {{π − α}}.",
      "Modulus obeys {{|zw| = |z||w|}}, {{|z/w| = |z|/|w|}}, {{|z^n| = |z|^n}}, and {{z · z^∗ = |z|^2}}.",
      "Polar form requires positive {{r > 0}} and {{cos theta + i sin theta}} (with a plus sign) before applying De Moivre's theorem.",
      "When solving {{z^n = r e^(i theta)}}, always write {{theta + 2k pi}} first ({{k = 0, 1, …, n − 1}}) to capture all {{n}} roots spaced by {{2pi/n}} on the circle of radius {{r^(1/n)}}.",
      "The sum of all {{n}} roots of {{z^n = w}} ({{n >= 2}}) is always **0**.",
      "Real-coefficient polynomials always have non-real roots in conjugate pairs {{a ± bi}}.",
      "In Mathematical Induction, NEVER assume {{P(k)}} is true *for all {{k}}* — assume it for **some** {{k >= n_0}}, explicitly use it in the {{k + 1}} step, and write the complete concluding statement.",
      "In Proof by Contradiction, state the exact logical negation first (including *lowest terms* for irrationality proofs, or *finitely many primes* for Euclid's proof).",
      "In 3×3 Gaussian elimination, NEVER divide a row by a parameter expression like {{(k - 2)}} — keep it factored until the final consistency test.",
      "A 3×3 system has infinitely many solutions (parametric line) when the last row becomes {{[0, 0, 0 | 0]}}, and is inconsistent when it becomes {{[0, 0, 0 | c]}} with {{c ≠ 0}}.",
    ],
    misconceptions: [
      {
        wrong: "The imaginary part of {{z = 3 - 5i}} is {{-5i}}.",
        right: "Im(z) is the real coefficient **{{−5}}** (without {{i}}). Both Re(z) and Im(z) are always real numbers.",
        level: "HL",
      },
      {
        wrong: "The principal argument of {{-1 - i}} is {{arctan((-1)/(-1)) = arctan(1) = pi/4}}.",
        right: "{{-1 - i}} lies in **Quadrant III**, so its principal argument in {{(-pi, pi]}} is **{{-3pi/4}}** (not {{pi/4}} and not {{5pi/4}}).",
        level: "HL",
      },
      {
        wrong: "{{2(cos theta - i sin theta)^n = 2^n (cos(n theta) - i sin(n theta))}} because you can just ignore the minus sign.",
        right: "First rewrite as {{2(cos(-theta) + i sin(-theta)) = 2 e^(-i theta)}}; then De Moivre gives {{2^n e^(-i n theta) = 2^n(cos(n theta) - i sin(n theta))}}. (Whereas for {{sin theta + i cos theta}}, you MUST convert to {{cos(pi/2 - theta) + i sin(pi/2 - theta)}} first!)",
        level: "HL",
      },
      {
        wrong: "Every polynomial with complex root {{2 + i}} must also have {{2 - i}} as a root.",
        right: "The Conjugate Root Theorem applies ONLY when all coefficients of the polynomial are **real**. For example, {{P(z) = z - (2 + i)}} has root {{2 + i}} and NO root {{2 - i}}.",
        level: "HL",
      },
      {
        wrong: "In an induction hypothesis, write 'Assume {{P(k)}} is true for all {{k ∈ ℤ^+}}'.",
        right: "Write 'Assume {{P(k)}} is true for **some** {{k ∈ ℤ^+}}'. Assuming it for *all* {{k}} is circular logic and loses the IB hypothesis mark.",
        level: "HL",
      },
      {
        wrong: "To solve {{z^3 = 8}}, taking cube roots gives only {{z = 2}}.",
        right: "In ℂ, {{z^3 = 8 = 8 e^(i · 2k pi)}} has **three** distinct cube roots: {{2}}, {{2 e^(i 2pi/3) = -1 + sqrt(3)i}}, and {{2 e^(-i 2pi/3) = -1 - sqrt(3)i}}.",
        level: "HL",
      },
      {
        wrong: "If a 3×3 system has {{det(A) = 0}}, then it must have no solution.",
        right: "{{det(A) = 0}} (zero bottom pivot) only tells you there is **no unique solution** — it could be EITHER **infinitely many solutions** ({{0 = 0}}) OR **inconsistent** ({{0 = c ≠ 0}}) depending on the RHS!",
        level: "HL",
      },
    ],
    examMistakes: [
      "Leaving an argument as {{7pi/6}} or {{5pi/3}} when the question explicitly asks for the **principal argument** in {{(-pi, pi]}} — always subtract {{2pi}} to get {{-5pi/6}} or {{-pi/3}}.",
      "Applying De Moivre directly to {{(sin theta + i cos theta)^n}} without rewriting as {{(cos(pi/2 - theta) + i sin(pi/2 - theta))^n}} first.",
      "Omitting the base case check (or checking both sides together instead of LHS and RHS separately) in an induction proof — IB requires explicit LHS = RHS verification.",
      "Forgetting the final concluding sentence in Mathematical Induction — even a flawless base case and inductive step drops the final R1 reasoning mark without it!",
      "In an induction proof, starting with the equation {{P(k+1)}} and manipulating both sides simultaneously until reaching {{0 = 0}} (backward logic) — always start from LHS of {{P(k+1)}} and transform it step-by-step into RHS.",
      "In a Proof by Contradiction for {{sqrt(3)}} irrational, jumping straight from '{{3}} divides {{a^2}}' to '{{3}} divides {{a}}' without noting that 3 is prime (or checking {{a = 3m + 1}} and {{a = 3m + 2}}).",
      "Dividing a row by {{k - 2}} during Gaussian elimination and missing the singular case {{k = 2}} completely.",
      "Writing 'no solution' when row reduction actually yielded {{[0, 0, 0 | 0]}} (which is infinitely many solutions along a line, not inconsistent!).",
    ],
    mnemonics: [
      {
        topic: "Four-Stage Mathematical Induction",
        device: "B-H-S-C: Base, Hypothesis (some k), Step (use H!), Conclude",
        explanation:
          "Check off all four IB marking gates on every induction proof: Base case {{P(n_0)}}, Hypothesis for some {{k}}, Step proving {{P(k+1)}} explicitly invoking the hypothesis, and Complete conclusion tying them together.",
        level: "HL",
      },
      {
        topic: "Polar Multiplication & Division",
        device: "Moduli Multiply, Arguments Add (MM-AA); Moduli Divide, Arguments Subtract",
        explanation:
          "Just like indices in {{r e^(i theta)}}, multiplying complex numbers multiplies lengths and adds angles; dividing divides lengths and subtracts angles.",
        level: "HL",
      },
      {
        topic: "3×3 Row-Echelon Final Row [0 0 p | q]",
        device: "Pivot = Point; Zero-Zero = Line; Zero-NonZero = No Go",
        explanation:
          "Non-zero pivot {{p ≠ 0}} locks a unique Point; {{0z = 0}} frees a parameter into a Line; {{0z = q ≠ 0}} is a contradiction (No Go / Inconsistent).",
        level: "HL",
      },
      {
        topic: "Proof by Contradiction Structure",
        device: "N-D-C-C: Negate, Deduce, Clash, Conclude",
        explanation:
          "Start by Negating the claim precisely, Deduce valid algebra/number theory consequences, exhibit the explicit logical Clash (contradiction), and Conclude the original claim holds.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "AC Electrical Circuits & Phasor Impedance",
        detail:
          "Electrical engineers represent alternating currents and voltages as rotating complex phasors {{V = V_0 e^(i omega t)}}; capacitors and inductors carry purely imaginary impedances so Ohm's Law {{V = IZ}} stays linear.",
        emoji: "⚡",
      },
      {
        title: "Fast Fourier Transform (Audio, Wi-Fi & MRI)",
        detail:
          "Every MP3 audio track, 5G OFDM wireless frame, and MRI scan decomposes signals using the **{{n}}th roots of unity** {{e^(i 2pi k/n)}} arranged symmetrically around the unit circle.",
        emoji: "📡",
      },
      {
        title: "Quantum Amplitudes & Wave Interference",
        detail:
          "In quantum mechanics, particle states carry complex probability amplitudes {{psi = r e^(i phi)}} whose squared modulus {{|psi|^2 = psi · psi^∗}} gives observable measurement probabilities.",
        emoji: "⚛️",
      },
      {
        title: "Formal Software Verification & Cryptography",
        detail:
          "Loop invariants and recursive algorithms are proven bug-free by **mathematical induction**, while Euclid's contradiction proof of infinitely many primes underpins public-key RSA encryption.",
        emoji: "🔐",
      },
      {
        title: "Structural Trusses & Network Traffic Flow",
        detail:
          "Equilibrium forces in 3D bridge joints and conservation of flow in city traffic intersections generate coupled **3×3 and {{n × n}} linear systems** solved computationally by Gaussian elimination.",
        emoji: "🌉",
      },
    ],
    videos: [
      {
        title: "IB Maths AA HL — Complex Numbers, Argand Diagrams & Euler Form",
        channel: "YouTube Search — IB Maths AA HL",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+complex+numbers+Euler+form+Argand",
      },
      {
        title: "IB Maths AA HL — De Moivre's Theorem & nth Roots of Complex Numbers",
        channel: "YouTube Search — IB Maths AA HL",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+De+Moivre+theorem+nth+roots",
      },
      {
        title: "IB Maths AA HL — Proof by Mathematical Induction & Proof by Contradiction",
        channel: "YouTube Search — IB Maths AA HL",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+mathematical+induction+proof+by+contradiction",
      },
      {
        title: "IB Maths AA HL — 3x3 Systems of Linear Equations & Row Reduction",
        channel: "YouTube Search — IB Maths AA HL",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+3x3+systems+linear+equations+Gaussian+elimination",
      },
    ],
    formulas: [
      {
        name: "Modulus & Conjugate Product",
        formula: "{{|z| = sqrt(a^2 + b^2)}},  {{z · z^∗ = |z|^2 = a^2 + b^2}}",
        note: "For {{z = a + bi}} with {{a, b ∈ ℝ}}",
        level: "HL",
      },
      {
        name: "Modulus Laws",
        formula: "{{|zw| = |z||w|}},  {{|z/w| = |z|/|w|}},  {{|z^n| = |z|^n}}",
        note: "Apply before expanding complicated products/powers",
        level: "HL",
      },
      {
        name: "Argument Laws (modulo 2π)",
        formula: "arg(zw) = arg(z) + arg(w),  arg(z/w) = arg(z) − arg(w)",
        note: "Adjust by {{+- 2pi}} to stay in principal interval {{(-pi, pi]}}",
        level: "HL",
      },
      {
        name: "Polar & Euler Forms",
        formula: "{{z = r(cos theta + i sin theta) = r e^(i theta)}}",
        note: "{{r = |z| > 0}}, {{theta = arg(z) ∈ (-pi, pi]}}",
        level: "HL",
      },
      {
        name: "De Moivre's Theorem",
        formula: "{{[r(cos theta + i sin theta)]^n = r^n (cos(n theta) + i sin(n theta))}}",
        note: "Equivalently {{(r e^(i theta))^n = r^n e^(i n theta)}} for {{n ∈ ℤ}}",
        level: "HL",
      },
      {
        name: "Euler Power-Reduction Identities",
        formula: "{{z^n + z^(-n) = 2 cos(n theta)}},  {{z^n - z^(-n) = 2i sin(n theta)}}",
        note: "Where {{z = e^(i theta)}} (unit modulus)",
        level: "HL",
      },
      {
        name: "nth Roots of a Complex Number",
        formula: "{{z_k = r^(1/n) e^(i(theta + 2k pi)/n)}},  {{k = 0, 1, …, n - 1}}",
        note: "Solutions of {{z^n = r e^(i theta)}}; sum of all {{n}} roots is {{0}}",
        level: "HL",
      },
      {
        name: "Real & Imaginary Parts via Conjugate",
        formula: "Re(z) = {{(z + z^∗)/2}},  Im(z) = {{(z - z^∗)/(2i)}}",
        note: "Useful in algebraic loci and identity proofs",
        level: "HL",
      },
      {
        name: "Real Quadratic Factor from Conjugate Pair",
        formula: "{{(z - w)(z - w^∗) = z^2 - 2 Re(w) z + |w|^2}}",
        note: "For any non-real root {{w = a + bi}} of a real polynomial",
        level: "HL",
      },
      {
        name: "Argand Circle & Bisector Loci",
        formula: "{{|z - z_0| = R}} (circle),  {{|z - z_1| = |z - z_2|}} (perp. bisector)",
        note: "{{|z - w|}} is the Euclidean distance between {{z}} and {{w}}",
        level: "HL",
      },
      {
        name: "Weak Induction Principle",
        formula: "{{P(n_0)}} true  ∧  {{(P(k) => P(k+1))}}  ⇒  {{P(n)}} true ∀ {{n >= n_0}}",
        note: "All 4 IB stages required (Base, Hypothesis, Step, Conclusion)",
        level: "HL",
      },
      {
        name: "3×3 Row-Echelon Final Row Criterion",
        formula: "{{[0, 0, p | q]}}:  {{p ≠ 0}} unique; {{p = 0, q = 0}} infinite; {{p = 0, q ≠ 0}} none",
        note: "Never divide by a parameter expression before testing {{p = 0}}",
        level: "HL",
      },
    ],
  },
};
