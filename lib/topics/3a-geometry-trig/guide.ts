import type { TopicGuide } from "../../types.ts";

const AMBIGUOUS_SINE_SVG = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ambiguous case of the sine rule showing a fixed angle A, side b, altitude h = b sin A, and an arc of radius a intersecting the base ray at two points B1 and B2">
  <rect x="0" y="0" width="460" height="250" fill="#ffffff"/>
  <!-- Base ray -->
  <line x1="40" y1="200" x2="430" y2="200" stroke="#64748b" stroke-width="2" stroke-dasharray="6,4"/>
  <!-- Highlighted segment AB1 -->
  <line x1="55" y1="200" x2="365" y2="200" stroke="#1e293b" stroke-width="2.5"/>
  <!-- Fixed side b = AC -->
  <line x1="55" y1="200" x2="265" y2="70" stroke="#4338ca" stroke-width="3"/>
  <!-- Altitude h = b sin A -->
  <line x1="265" y1="70" x2="265" y2="200" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4,4"/>
  <rect x="265" y="188" width="12" height="12" fill="none" stroke="#0d9488" stroke-width="1.5"/>
  <!-- Swing arc of radius a = 165 centered at C(265,70): intersects y=200 at x = 265 +- sqrt(165^2 - 130^2) = 265 +- 101.6 -> 163.4 and 366.6 -->
  <path d="M 145 182 A 165 165 0 0 0 385 182" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/>
  <!-- Two valid sides of length a -->
  <line x1="265" y1="70" x2="163" y2="200" stroke="#ea580c" stroke-width="2.8"/>
  <line x1="265" y1="70" x2="367" y2="200" stroke="#ea580c" stroke-width="2.8"/>
  <!-- Angle arcs -->
  <path d="M 92 200 A 37 37 0 0 0 86 181" fill="none" stroke="#4338ca" stroke-width="2"/>
  <path d="M 340 200 A 27 27 0 0 1 350 179" fill="none" stroke="#ea580c" stroke-width="2"/>
  <path d="M 136 200 A 27 27 0 0 1 180 179" fill="none" stroke="#b45309" stroke-width="2"/>
  <!-- Vertices -->
  <circle cx="55" cy="200" r="4.5" fill="#1e293b"/>
  <circle cx="265" cy="70" r="4.5" fill="#4338ca"/>
  <circle cx="163" cy="200" r="4.5" fill="#b45309"/>
  <circle cx="367" cy="200" r="4.5" fill="#ea580c"/>
  <!-- Labels -->
  <text x="44" y="220" font-size="14" font-weight="700" fill="#1e293b">A</text>
  <text x="98" y="191" font-size="13" font-weight="700" fill="#4338ca">A</text>
  <text x="260" y="56" font-size="14" font-weight="700" fill="#4338ca">C</text>
  <text x="152" y="222" font-size="13" font-weight="700" fill="#b45309">B₂ (obtuse)</text>
  <text x="348" y="222" font-size="13" font-weight="700" fill="#ea580c">B₁ (acute)</text>
  <text x="142" y="122" font-size="13" font-weight="700" fill="#4338ca">b</text>
  <text x="272" y="146" font-size="12" font-weight="700" fill="#0d9488">h = b sin A</text>
  <text x="196" y="136" font-size="13" font-weight="700" fill="#ea580c">a</text>
  <text x="326" y="136" font-size="13" font-weight="700" fill="#ea580c">a</text>
  <!-- Condition badge -->
  <rect x="16" y="14" width="212" height="44" rx="8" fill="#eef2ff" stroke="#c7d2fe"/>
  <text x="26" y="33" font-size="12" font-weight="700" fill="#312e81">Two triangles when h &lt; a &lt; b</text>
  <text x="26" y="49" font-size="11.5" fill="#4338ca">∠B₂ = 180° − ∠B₁ (isosceles △CB₂B₁)</text>
</svg>`;

const UNIT_CIRCLE_SVG = `<svg viewBox="0 0 460 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Unit circle showing exact radian angles, ASTC quadrant signs, and exact cosine and sine coordinates in all four quadrants">
  <rect x="0" y="0" width="460" height="360" fill="#ffffff"/>
  <!-- Axes -->
  <line x1="60" y1="180" x2="400" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="230" y1="22" x2="230" y2="338" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="405" y="184" font-size="13" font-weight="700" fill="#475569">x = cos θ</text>
  <text x="236" y="28" font-size="13" font-weight="700" fill="#475569">y = sin θ</text>
  <!-- Unit circle r = 115, center (230,180) -->
  <circle cx="230" cy="180" r="115" fill="#f8fafc" stroke="#4338ca" stroke-width="2.5"/>
  <!-- ASTC quadrant badges -->
  <text x="295" y="155" font-size="12" font-weight="800" fill="#15803d">Q1: A (All +)</text>
  <text x="118" y="155" font-size="12" font-weight="800" fill="#0369a1">Q2: S (sin +)</text>
  <text x="118" y="216" font-size="12" font-weight="800" fill="#b45309">Q3: T (tan +)</text>
  <text x="295" y="216" font-size="12" font-weight="800" fill="#7c3aed">Q4: C (cos +)</text>
  <!-- Special rays in Q1 -->
  <line x1="230" y1="180" x2="329.6" y2="122.5" stroke="#c7d2fe" stroke-width="1.4"/>
  <line x1="230" y1="180" x2="311.3" y2="98.7" stroke="#c7d2fe" stroke-width="1.4"/>
  <line x1="230" y1="180" x2="287.5" y2="80.4" stroke="#c7d2fe" stroke-width="1.4"/>
  <!-- Special rays in Q2, Q3, Q4 (45 deg & 30/60 key points) -->
  <line x1="230" y1="180" x2="148.7" y2="98.7" stroke="#e2e8f0" stroke-width="1.2"/>
  <line x1="230" y1="180" x2="148.7" y2="261.3" stroke="#e2e8f0" stroke-width="1.2"/>
  <line x1="230" y1="180" x2="311.3" y2="261.3" stroke="#e2e8f0" stroke-width="1.2"/>
  <!-- Points -->
  <circle cx="345" cy="180" r="4" fill="#4338ca"/>
  <circle cx="329.6" cy="122.5" r="4" fill="#0d9488"/>
  <circle cx="311.3" cy="98.7" r="4" fill="#0d9488"/>
  <circle cx="287.5" cy="80.4" r="4" fill="#0d9488"/>
  <circle cx="230" cy="65" r="4" fill="#4338ca"/>
  <circle cx="148.7" cy="98.7" r="4" fill="#0369a1"/>
  <circle cx="115" cy="180" r="4" fill="#4338ca"/>
  <circle cx="148.7" cy="261.3" r="4" fill="#b45309"/>
  <circle cx="230" cy="295" r="4" fill="#4338ca"/>
  <circle cx="311.3" cy="261.3" r="4" fill="#7c3aed"/>
  <!-- Coordinate labels -->
  <text x="351" y="173" font-size="11" font-weight="700" fill="#1e293b">0: (1, 0)</text>
  <text x="336" y="124" font-size="11" font-weight="700" fill="#0f766e">π/6: (√3/2, 1/2)</text>
  <text x="318" y="96" font-size="11" font-weight="700" fill="#0f766e">π/4: (√2/2, √2/2)</text>
  <text x="292" y="72" font-size="11" font-weight="700" fill="#0f766e">π/3: (1/2, √3/2)</text>
  <text x="196" y="54" font-size="11" font-weight="700" fill="#1e293b">π/2: (0, 1)</text>
  <text x="24" y="96" font-size="11" font-weight="700" fill="#0369a1">3π/4: (−√2/2, √2/2)</text>
  <text x="28" y="173" font-size="11" font-weight="700" fill="#1e293b">π: (−1, 0)</text>
  <text x="18" y="274" font-size="11" font-weight="700" fill="#b45309">5π/4: (−√2/2, −√2/2)</text>
  <text x="186" y="316" font-size="11" font-weight="700" fill="#1e293b">3π/2: (0, −1)</text>
  <text x="318" y="274" font-size="11" font-weight="700" fill="#7c3aed">7π/4: (√2/2, −√2/2)</text>
</svg>`;

const SINUSOIDAL_SVG = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sinusoidal wave y = a sin(b(x - c)) + d showing principal axis y = d, amplitude a, period T = 2pi/b, and horizontal phase shift c">
  <rect x="0" y="0" width="460" height="240" fill="#ffffff"/>
  <!-- Axes -->
  <line x1="42" y1="205" x2="442" y2="205" stroke="#64748b" stroke-width="1.5"/>
  <line x1="56" y1="20" x2="56" y2="215" stroke="#64748b" stroke-width="1.5"/>
  <text x="446" y="209" font-size="12" font-weight="700" fill="#475569">x</text>
  <text x="49" y="16" font-size="12" font-weight="700" fill="#475569">y</text>
  <!-- Principal axis y = d at y = 115 -->
  <line x1="56" y1="115" x2="436" y2="115" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="6,4"/>
  <text x="366" y="108" font-size="11.5" font-weight="700" fill="#0f766e">y = d (axis)</text>
  <!-- Max and min dashed lines -->
  <line x1="56" y1="55" x2="436" y2="55" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="56" y1="175" x2="436" y2="175" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="12" y="59" font-size="11" font-weight="700" fill="#475569">d + a</text>
  <text x="26" y="119" font-size="11" font-weight="700" fill="#0f766e">d</text>
  <text x="12" y="179" font-size="11" font-weight="700" fill="#475569">d − a</text>
  <!-- Sinusoid: shifted right to c = 96, period T = 240, amp = 60 -->
  <path d="M 56 167 C 72 150, 82 135, 96 115 C 122 76, 138 55, 156 55 C 174 55, 190 76, 216 115 C 242 154, 258 175, 276 175 C 294 175, 310 154, 336 115 C 362 76, 378 55, 396 55 C 410 55, 422 68, 434 90" fill="none" stroke="#4338ca" stroke-width="3"/>
  <!-- Amplitude arrow at crest x=156 -->
  <line x1="156" y1="115" x2="156" y2="57" stroke="#ea580c" stroke-width="2.2"/>
  <polygon points="156,55 151,64 161,64" fill="#ea580c"/>
  <text x="162" y="90" font-size="12" font-weight="800" fill="#ea580c">a = |amp|</text>
  <!-- Phase shift c marker from x=56 to x=96 -->
  <line x1="56" y1="133" x2="96" y2="133" stroke="#7c3aed" stroke-width="2"/>
  <line x1="96" y1="115" x2="96" y2="140" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="68" y="148" font-size="11.5" font-weight="700" fill="#7c3aed">c</text>
  <!-- Period T bracket between two crests x=156 and x=396 -->
  <line x1="156" y1="36" x2="396" y2="36" stroke="#1e293b" stroke-width="1.8"/>
  <line x1="156" y1="30" x2="156" y2="48" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="396" y1="30" x2="396" y2="48" stroke="#1e293b" stroke-width="1.5"/>
  <text x="234" y="29" font-size="12" font-weight="800" fill="#1e293b">Period T = 2π / b</text>
  <!-- Key points -->
  <circle cx="96" cy="115" r="4" fill="#7c3aed"/>
  <circle cx="156" cy="55" r="4" fill="#ea580c"/>
  <circle cx="276" cy="175" r="4" fill="#4338ca"/>
  <circle cx="396" cy="55" r="4" fill="#ea580c"/>
</svg>`;

const INVERSE_RANGES_SVG = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Principal ranges of arcsin, arctan, and arccos shown on unit semicircles">
  <rect x="0" y="0" width="460" height="220" fill="#ffffff"/>
  <!-- Left panel: arcsin & arctan right semicircle [-pi/2, pi/2] -->
  <text x="115" y="24" font-size="13" font-weight="800" text-anchor="middle" fill="#312e81">arcsin x &amp; arctan x</text>
  <line x1="40" y1="115" x2="190" y2="115" stroke="#94a3b8" stroke-width="1.3"/>
  <line x1="115" y1="40" x2="115" y2="190" stroke="#94a3b8" stroke-width="1.3"/>
  <circle cx="115" cy="115" r="58" fill="none" stroke="#e2e8f0" stroke-width="2"/>
  <path d="M 115 57 A 58 58 0 0 1 115 173" fill="none" stroke="#4338ca" stroke-width="4.5"/>
  <circle cx="115" cy="57" r="4.5" fill="#4338ca"/>
  <circle cx="115" cy="173" r="4.5" fill="#4338ca"/>
  <text x="124" y="54" font-size="11.5" font-weight="700" fill="#4338ca">+π/2</text>
  <text x="124" y="184" font-size="11.5" font-weight="700" fill="#4338ca">−π/2</text>
  <text x="142" y="92" font-size="11" font-weight="700" fill="#15803d">Q1 (+)</text>
  <text x="142" y="144" font-size="11" font-weight="700" fill="#c2410c">Q4 (−)</text>
  <text x="115" y="206" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">arcsin: [−π/2, π/2] · arctan: (−π/2, π/2)</text>
  <!-- Divider -->
  <line x1="230" y1="22" x2="230" y2="206" stroke="#e2e8f0" stroke-width="1.5"/>
  <!-- Right panel: arccos top semicircle [0, pi] -->
  <text x="345" y="24" font-size="13" font-weight="800" text-anchor="middle" fill="#0f766e">arccos x</text>
  <line x1="270" y1="115" x2="420" y2="115" stroke="#94a3b8" stroke-width="1.3"/>
  <line x1="345" y1="40" x2="345" y2="190" stroke="#94a3b8" stroke-width="1.3"/>
  <circle cx="345" cy="115" r="58" fill="none" stroke="#e2e8f0" stroke-width="2"/>
  <path d="M 403 115 A 58 58 0 0 0 287 115" fill="none" stroke="#0d9488" stroke-width="4.5"/>
  <circle cx="403" cy="115" r="4.5" fill="#0d9488"/>
  <circle cx="287" cy="115" r="4.5" fill="#0d9488"/>
  <text x="409" y="119" font-size="11.5" font-weight="700" fill="#0f766e">0</text>
  <text x="272" y="119" font-size="11.5" font-weight="700" fill="#0f766e">π</text>
  <text x="364" y="88" font-size="11" font-weight="700" fill="#15803d">Q1 (+)</text>
  <text x="296" y="88" font-size="11" font-weight="700" fill="#c2410c">Q2 (−)</text>
  <text x="345" y="206" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">arccos: [0, π] (domain [−1, 1])</text>
</svg>`;

export const guide: TopicGuide = {
  id: "3a-geometry-trig",
  title: "Topic 3A: 3D Geometry, Circular Measure & Trigonometry",
  strand: "Topic 3: Geometry & Trigonometry",
  icon: "△",
  level: "SL",
  summary:
    "3D solids and line–plane angles, sine/cosine rules (including the ambiguous case), radian measure, exact unit-circle trigonometry, sinusoidal modelling, identities, and [HL] reciprocal, inverse & compound-angle proofs.",
  intro:
    "Geometry and trigonometry bridge spatial reasoning with periodic functions and calculus. In IB Mathematics: Analysis & Approaches (FA2029 subject brief), Paper 1 demands instant, non-GDC fluency with exact radian ratios, double-angle identities, and algebraic proofs, while Paper 2 rewards clean 3D modelling, ambiguous-case vigilance, and TI-Nspire CX wave analysis. Notice every angle in calculus and circular measure is measured in radians — check your GDC mode before every single trig step!",
  guide: [
    {
      id: "3d-geometry-sine-cosine",
      heading: "3D Geometry, Sine & Cosine Rules, Ambiguous Case & Bearings",
      level: "SL",
      discovery: {
        problem:
          "Suppose you fix angle A = 30° and adjacent side b = 10 cm from A to C, then attach a swinging arm of length a = 6 cm at C. How many distinct triangles ABC can touch the base ray from A?",
        idea:
          "Drop the perpendicular altitude h = b sin A = 10 sin 30° = 5 cm from C to the base ray. Because a = 6 cm is strictly longer than the shortest distance (5 cm) yet shorter than b (10 cm), the swinging arm hits the base ray TWICE — forming one acute angle B₁ and one obtuse angle B₂ = 180° − B₁!",
      },
      body:
        "### 1. Coordinates, Solids & Angles in 3D\n" +
        "Between points {{P(x_1, y_1, z_1)}} and {{Q(x_2, y_2, z_2)}} in 3D space:\n" +
        "- **3D Distance:** {{d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)}}\n" +
        "- **3D Midpoint:** {{M = ((x_1 + x_2)/2, (y_1 + y_2)/2, (z_1 + z_2)/2)}}\n" +
        "- **Right Solids (Formula Booklet):**\n" +
        "  - Right pyramid: {{V = (1/3) A h}} (where {{A}} is the base area and {{h}} is perpendicular height).\n" +
        "  - Right cone (radius {{r}}, height {{h}}, slant height {{l = sqrt(r^2 + h^2)}}): {{V = (1/3) pi r^2 h}}, curved surface area {{A = pi r l}}.\n" +
        "  - Sphere (radius {{r}}): {{V = (4/3) pi r^3}}, surface area {{A = 4 pi r^2}}.\n" +
        "- **Angle between a line and a plane:** Drop a perpendicular from a point on the line to the plane to find its orthogonal projection (shadow). The required angle is the acute angle inside that right-angled triangle between the line and its shadow.\n\n" +
        "### 2. Non-Right Triangles, Area & the Ambiguous Case\n" +
        "In any triangle {{ABC}} with sides {{a, b, c}} opposite angles {{A, B, C}}:\n" +
        "- **Sine Rule:** {{a / sin A = b / sin B = c / sin C}}\n" +
        "- **Cosine Rule:** {{c^2 = a^2 + b^2 - 2ab cos C}} and {{cos C = (a^2 + b^2 - c^2) / (2ab)}}\n" +
        "- **Area of a Triangle:** {{A = (1/2) ab sin C}}\n\n" +
        "> **The Ambiguous Case (SSA):** When you know two sides ({{a, b}}) and a non-included acute angle ({{A}}), check {{h = b sin A}}:\n" +
        "> - If {{a < b sin A}}: **0 triangles** (the opposite side cannot reach the base).\n" +
        "> - If {{a = b sin A}} or {{a >= b}}: **1 unique triangle**.\n" +
        "> - If {{b sin A < a < b}}: **2 triangles** — {{B_1 = arcsin((b sin A)/a)}} (acute) and {{B_2 = 180° - B_1}} (obtuse).\n\n" +
        "### 3. Elevation, Depression & True Bearings\n" +
        "- **Angle of elevation** looks *up* from the horizontal; **angle of depression** looks *down* from the horizontal (by alternate interior angles, elevation from B to A equals depression from A to B).\n" +
        "- **Three-figure true bearings** are always measured **clockwise from North** (`000°` to `360°`). Draw a North arrow at **every** turning vertex; the back-bearing from B to A differs from the forward bearing by `180°`.",
      diagram: AMBIGUOUS_SINE_SVG,
      diagramCaption:
        "Ambiguous case of the sine rule: when b sin A < a < b, the arc of radius a centered at C cuts the base ray at two points B₁ and B₂, with ∠B₂ = 180° − ∠B₁.",
      workedExamples: [
        {
          title: "Right Square-Based Pyramid in 3D",
          problem:
            "A right square-based pyramid VABCD has base edges AB = BC = 6 cm and vertical height VO = 4 cm (where O is the centre of the square base). Find (a) the exact slant edge VA, (b) the angle between VA and the base ABCD (3 s.f.), and (c) the volume of the pyramid.",
          steps: [
            "Find the base diagonal AC using Pythagoras in square ABCD: {{AC = sqrt(6^2 + 6^2) = 6 sqrt(2)}} cm, so half-diagonal {{AO = 3 sqrt(2)}} cm.",
            "In right-angled triangle VOA, {{VA = sqrt(VO^2 + AO^2) = sqrt(4^2 + (3 sqrt(2))^2) = sqrt(16 + 18) = sqrt(34)}} cm.",
            "The orthogonal projection of VA onto the base is OA, so the angle between VA and the base is ∠VAO: {{tan(∠VAO) = VO / AO = 4 / (3 sqrt(2))}}.",
            "Using a GDC in degree mode, {{∠VAO = arctan(4 / (3 sqrt(2))) ≈ 43.3°}} (3 s.f.).",
            "Volume {{V = (1/3) * (6 * 6) * 4 = 48}} cm³.",
          ],
          answer: "{{VA = sqrt(34)}} cm, angle {{43.3°}}, volume {{48}} cm³",
          yourTurn: {
            question:
              "A right solid cone has base radius r = 5 cm and perpendicular height h = 12 cm. Find its exact total surface area (curved surface plus circular base) in cm², in terms of π.",
            answer: { type: "expression", expr: "90pi", display: "{{90pi}}" },
            solution:
              "Slant height {{l = sqrt(5^2 + 12^2) = 13}} cm. Curved area {{= pi r l = 65 pi}} cm² and base area {{= pi r^2 = 25 pi}} cm², so total surface area {{= 65 pi + 25 pi = 90 pi}} cm².",
          },
        },
        {
          title: "Ambiguous Case of the Sine Rule",
          problem:
            "In triangle ABC, ∠A = 30°, b = 10 cm, and a = 6 cm. Find both possible values of ∠B to 1 decimal place.",
          steps: [
            "Check the altitude: {{h = b sin A = 10 sin 30° = 5}} cm. Since {{5 < 6 < 10}}, two triangles exist.",
            "Apply the sine rule: {{sin B / 10 = sin 30° / 6 => sin B = 5/6 ≈ 0.8333}}.",
            "Principal acute angle: {{B_1 = arcsin(5/6) ≈ 56.44° -> 56.4°}}.",
            "Obtuse supplement: {{B_2 = 180° - 56.44° = 123.56° -> 123.6°}}.",
            "Verify both angle sums with ∠A = 30°: {{30° + 56.4° = 86.4° < 180°}} and {{30° + 123.6° = 153.6° < 180°}}. Both are valid!",
          ],
          answer: "{{56.4°}} or {{123.6°}}",
          yourTurn: {
            question:
              "In triangle PQR, ∠P = 30°, q = 12 cm, and p = 8 cm. Find the obtuse possible value of ∠Q in degrees, correct to 1 decimal place.",
            answer: { type: "number", value: 131.4, tolerance: 0.1, display: "131.4°" },
            solution:
              "{{sin Q = (12 sin 30°)/8 = 6/8 = 0.75}}. Acute {{Q_1 = arcsin(0.75) ≈ 48.59°}}, so obtuse {{Q_2 = 180° - 48.59° = 131.41° ≈ 131.4°}}.",
          },
        },
        {
          title: "True Bearings & the Cosine Rule",
          problem:
            "A ferry leaves pier O and sails 8 km on a true bearing of 050° to checkpoint A, then turns and sails 10 km on a bearing of 170° to island B. Find the exact distance OB and the exact area of triangle OAB.",
          steps: [
            "Draw North lines at O and A. Since the bearing from O to A is 050°, the back-bearing from A to O is {{050° + 180° = 230°}}.",
            "At A, the ray to B is on bearing 170° and the ray to O is on bearing 230°, so the interior angle {{∠OAB = 230° - 170° = 60°}}.",
            "Apply the cosine rule: {{OB^2 = 8^2 + 10^2 - 2(8)(10) cos 60° = 64 + 100 - 160(1/2) = 84}}.",
            "Take the positive root: {{OB = sqrt(84) = 2 sqrt(21)}} km (≈ 9.17 km).",
            "Area {{= (1/2)(8)(10) sin 60° = 40 * (sqrt(3)/2) = 20 sqrt(3)}} km² (≈ 34.6 km²).",
          ],
          answer: "{{OB = 2 sqrt(21)}} km; Area {{= 20 sqrt(3)}} km²",
          yourTurn: {
            question:
              "A vessel sails 7 km on a bearing of 040° from P to Q, then 9 km on a bearing of 100° from Q to R. Find the exact integer value of PR².",
            answer: { type: "number", value: 193 },
            solution:
              "Back-bearing from Q to P is {{040° + 180° = 220°}}, so {{∠PQR = 220° - 100° = 120°}}. Then {{PR^2 = 7^2 + 9^2 - 2(7)(9) cos 120° = 49 + 81 - 126(-1/2) = 193}}.",
          },
        },
      ],
      keyPoints: [
        "Always isolate a flat 2D right-angled triangle inside any 3D solid by dropping a perpendicular to the plane.",
        "Use the cosine rule when given SAS (two sides and the included angle) or SSS (all three sides); use the sine rule for AAS, ASA, or SSA.",
        "Whenever you use inverse sine (`arcsin`) to find a triangle angle, ALWAYS test `180° − θ` to check for the ambiguous case.",
        "Bearings are 3-digit angles measured clockwise from North; use co-interior/alternate angles on parallel North lines at every vertex.",
      ],
      whyItWorks:
        "The cosine rule {{c^2 = a^2 + b^2 - 2ab cos C}} is Pythagoras' theorem with a correction term: when C = 90°, cos C = 0 and it collapses to {{c^2 = a^2 + b^2}}. When C is obtuse, cos C < 0 so {{c^2 > a^2 + b^2}}. Similarly, dropping altitude {{h = b sin C}} proves both the area formula {{(1/2) a h = (1/2) ab sin C}} and the sine rule (since the same height equals {{a sin B}} and {{b sin A}}).",
      strategies: [
        "Sketch a clean 2D cross-section next to your 3D diagram and mark the right angle explicitly.",
        "Store unrounded intermediate values in your TI-Nspire CX variable memory (`STO→`) and only round the final answer to 3 s.f.",
        "When solving a triangle with SSS, find the largest angle FIRST using the cosine rule — it unambiguously detects whether that angle is obtuse (negative cosine).",
      ],
      thinkDeeper:
        "Can the cosine rule also reveal the ambiguous case? Write {{a^2 = b^2 + c^2 - 2bc cos A}} as a quadratic in the unknown third side {{c}}: {{c^2 - (2b cos A) c + (b^2 - a^2) = 0}}. Its discriminant is {{4(a^2 - b^2 sin^2 A)}} — positive whenever {{a > b sin A}} — and both roots are positive precisely when {{b^2 - a^2 > 0}}, i.e., {{b sin A < a < b}}!",
    },
    {
      id: "radians-unit-circle-exact",
      heading: "Radians, Arcs, Sectors, Unit Circle & Exact Special Angles",
      level: "SL",
      discovery: {
        problem:
          "Why does calculus break down with messy factors of π/180 if we differentiate sin(x°), whereas d/dx(sin x) = cos x cleanly in radians?",
        idea:
          "A radian measures angle purely by length: wrap one radius r along the circumference, and the subtended central angle is 1 radian. Because a full circumference is 2πr, a full turn is 2π radians — making arc length l = rθ linear with slope 1!",
      },
      body:
        "### 1. Radians, Arcs, Sectors & Segments\n" +
        "One radian is the central angle subtending an arc equal in length to the radius {{r}}. Since {{2 pi rad = 360°}} and {{pi rad = 180°}}:\n" +
        "- **Degrees → Radians:** multiply by {{pi / 180}}.\n" +
        "- **Radians → Degrees:** multiply by {{180 / pi}}.\n" +
        "- **Arc length:** {{l = r theta}} (where {{theta}} MUST be in radians!).\n" +
        "- **Sector area:** {{A = (1/2) r^2 theta}}.\n" +
        "- **Minor segment area (sector minus triangle):** {{A = (1/2) r^2 (theta - sin theta)}}.\n\n" +
        "### 2. The Unit Circle & Exact Non-GDC Values\n" +
        "For any angle {{theta}} measured anticlockwise from the positive x-axis, the point {{P}} on the unit circle {{x^2 + y^2 = 1}} has coordinates **{{P = (cos theta, sin theta)}}**, and the gradient of radius {{OP}} is **{{tan theta = sin theta / cos theta}}**.\n\n" +
        "| {{theta}} (rad) | {{theta}} (deg) | {{sin theta}} | {{cos theta}} | {{tan theta}} |\n" +
        "|---|---|---|---|---|\n" +
        "| {{0}} | 0° | {{0}} | {{1}} | {{0}} |\n" +
        "| {{pi/6}} | 30° | {{1/2}} | {{sqrt(3)/2}} | {{1/sqrt(3) = sqrt(3)/3}} |\n" +
        "| {{pi/4}} | 45° | {{sqrt(2)/2}} | {{sqrt(2)/2}} | {{1}} |\n" +
        "| {{pi/3}} | 60° | {{sqrt(3)/2}} | {{1/2}} | {{sqrt(3)}} |\n" +
        "| {{pi/2}} | 90° | {{1}} | {{0}} | not defined (asymptote) |\n\n" +
        "### 3. All Four Quadrants (ASTC & Reference Angles)\n" +
        "To evaluate any special angle without a calculator:\n" +
        "1. **Find the quadrant** (Q1: {{(0, pi/2)}}, Q2: {{(pi/2, pi)}}, Q3: {{(pi, 3pi/2)}}, Q4: {{(3pi/2, 2pi)}}; add/subtract {{2 pi}} for negative or reflex angles).\n" +
        "2. **Find the acute reference angle** {{alpha}} to the horizontal x-axis ({{pi - theta}} in Q2, {{theta - pi}} in Q3, {{2 pi - theta}} in Q4).\n" +
        "3. **Attach the quadrant sign (ASTC):** **A**ll positive in Q1, **S**ine positive in Q2, **T**angent positive in Q3, **C**osine positive in Q4.",
      diagram: UNIT_CIRCLE_SVG,
      diagramCaption:
        "The unit circle links every radian angle θ directly to (cos θ, sin θ). Reflect any Q1 special angle across the axes to read off exact values in Q2, Q3, and Q4 instantly.",
      workedExamples: [
        {
          title: "Exact Segment Area & Perimeter",
          problem:
            "A chord AB subtends a central angle of θ = 2π/3 radians at the centre O of a circle of radius r = 6 cm. Find (a) the exact arc length AB, and (b) the exact area of the minor segment shaded between chord AB and arc AB.",
          steps: [
            "Arc length: {{l = r theta = 6 * (2pi/3) = 4pi}} cm.",
            "Sector area: {{A_sector = (1/2) r^2 theta = (1/2)(36)(2pi/3) = 12pi}} cm².",
            "Triangle OAB area: {{A_tri = (1/2) r^2 sin theta = (1/2)(36) sin(2pi/3) = 18 * (sqrt(3)/2) = 9 sqrt(3)}} cm².",
            "Minor segment area = sector − triangle {{= 12pi - 9 sqrt(3)}} cm² (≈ 22.1 cm²).",
          ],
          answer: "Arc {{4pi}} cm; minor segment {{12pi - 9 sqrt(3)}} cm²",
          yourTurn: {
            question:
              "A sector of a circle has radius r = 8 cm and central angle θ = 3π/4 radians. Find the exact area of the sector in cm², in terms of π.",
            answer: { type: "expression", expr: "24pi", display: "{{24pi}}" },
            solution:
              "{{A = (1/2) r^2 theta = (1/2)(64)(3pi/4) = 32 * 3pi/4 = 24pi}} cm².",
          },
        },
        {
          title: "Non-GDC Exact Ratios Across All Quadrants",
          problem:
            "Without a calculator, find the exact value of (a) sin(5π/6), (b) cos(4π/3), and (c) tan(−π/4).",
          steps: [
            "(a) {{5pi/6 = pi - pi/6}} lies in Q2 where sine is positive. Reference angle {{pi/6}}, so {{sin(5pi/6) = +sin(pi/6) = 1/2}}.",
            "(b) {{4pi/3 = pi + pi/3}} lies in Q3 where cosine is negative. Reference angle {{pi/3}}, so {{cos(4pi/3) = -cos(pi/3) = -1/2}}.",
            "(c) {{-pi/4}} rotates clockwise into Q4 where tangent is negative. Reference angle {{pi/4}}, so {{tan(-pi/4) = -tan(pi/4) = -1}}.",
          ],
          answer: "{{sin(5pi/6) = 1/2}}, {{cos(4pi/3) = -1/2}}, {{tan(-pi/4) = -1}}",
          yourTurn: {
            question:
              "Without a calculator, find the exact value of cos(5π/6). (Type sqrt(3) for √3.)",
            answer: { type: "expression", expr: "-sqrt(3)/2", display: "{{-sqrt(3)/2}}" },
            solution:
              "{{5pi/6}} is in Q2 (where cosine is negative) with reference angle {{pi/6}}, so {{cos(5pi/6) = -cos(pi/6) = -sqrt(3)/2}}.",
          },
        },
      ],
      keyPoints: [
        "Never substitute degrees into l = rθ or A = ½r²θ — convert to radians first!",
        "Perimeter of a sector is ALWAYS `2r + rθ` (do not forget the two straight radii!).",
        "Exact special-angle denominators immediately tell you the reference angle: `/6 → 30°`, `/4 → 45°`, `/3 → 60°`.",
        "Symmetry rules to remember: cos(−θ) = cos θ (even), sin(−θ) = −sin θ (odd), tan(−θ) = −tan θ (odd).",
      ],
      whyItWorks:
        "Why is sector area {{(1/2) r^2 theta}}? A sector of angle {{theta}} is the fraction {{theta / (2pi)}} of a full circle of area {{pi r^2}}. Multiplying gives {{(theta / (2pi)) * pi r^2 = (1/2) r^2 theta}} — the {{pi}} cancels out completely! And the exact values come directly from splitting an equilateral triangle of side 2 into a {{1 : sqrt(3) : 2}} right triangle and cutting a unit square along its diagonal into a {{1 : 1 : sqrt(2)}} right triangle.",
      strategies: [
        "Sketch a 3-second mini unit circle on every Paper 1 question — visualising x = cos θ and y = sin θ prevents almost all sign errors.",
        "Memorise the progression for sine at 0, π/6, π/4, π/3, π/2: {{sqrt(0)/2, sqrt(1)/2, sqrt(2)/2, sqrt(3)/2, sqrt(4)/2}} — cosine simply runs backwards!",
        "For negative or large angles (like `11π/3` or `−7π/6`), add or subtract multiples of `2π` first to land in `[0, 2π)`.",
      ],
      thinkDeeper:
        "For very small angles θ in radians, the arc length rθ and the chord 2r sin(θ/2) are almost indistinguishable, giving the famous small-angle approximations sin θ ≈ θ and cos θ ≈ 1 − θ²/2 — the exact foundation of Topic 5 calculus limits and Maclaurin series!",
    },
    {
      id: "trig-identities-graphs-equations",
      heading: "Pythagorean & Double-Angle Identities, Sinusoidal Graphs & Equations",
      level: "SL",
      discovery: {
        problem:
          "How can you predict the exact value of cos(2θ) knowing ONLY that sin θ = 3/5 — without ever finding θ or even knowing which quadrant θ lies in?",
        idea:
          "Because cos(2θ) = 1 − 2 sin²θ depends purely on sin²θ, the quadrant sign disappears! Substituting sin θ = 3/5 gives cos(2θ) = 1 − 2(9/25) = 7/25 directly.",
      },
      body:
        "### 1. Core SL Identities (Formula Booklet)\n" +
        "- **Quotient identity:** {{tan theta = sin theta / cos theta}} ({{cos theta != 0}})\n" +
        "- **Pythagorean identity:** {{sin^2 theta + cos^2 theta = 1}} (rearrange to {{sin^2 theta = 1 - cos^2 theta}} or {{cos^2 theta = 1 - sin^2 theta}})\n" +
        "- **Double-angle sine:** {{sin 2theta = 2 sin theta cos theta}}\n" +
        "- **Double-angle cosine (3 forms):**\n" +
        "  - {{cos 2theta = cos^2 theta - sin^2 theta}}\n" +
        "  - {{cos 2theta = 2 cos^2 theta - 1}}\n" +
        "  - {{cos 2theta = 1 - 2 sin^2 theta}}\n\n" +
        "### 2. Sinusoidal Curves & Real-World Modelling\n" +
        "For {{f(x) = a sin(b(x - c)) + d}} or {{a cos(b(x - c)) + d}} (with {{b > 0}}):\n" +
        "- **Amplitude:** {{|a| = (max - min) / 2}} (vertical stretch from the principal axis).\n" +
        "- **Principal axis (midline):** {{y = d = (max + min) / 2}}.\n" +
        "- **Period:** {{T = 2pi / b}} (so {{b = 2pi / T}}).\n" +
        "- **Horizontal translation (phase shift):** {{c}} units to the right (ALWAYS factor out {{b}} from {{bx - bc}} first!).\n" +
        "- For {{y = tan x}}: period is **{{pi}}** (not {{2pi}}!), range is {{ℝ}}, and vertical asymptotes lie at {{x = pi/2 + k pi}}.\n\n" +
        "### 3. Solving Trigonometric Equations on a Bounded Interval\n" +
        "1. **Reduce to a single trig function** using {{sin^2 x + cos^2 x = 1}}, {{cos 2x}}, or dividing by {{cos x}} to form {{tan x}} (only after confirming {{cos x = 0}} is not a root!).\n" +
        "2. **Factorise — NEVER divide by a trig factor that could equal zero** (e.g. from {{sin x (2 cos x - 1) = 0}}, keep BOTH {{sin x = 0}} and {{cos x = 1/2}}).\n" +
        "3. **Scale the domain** for compound arguments: if {{0 <= x <= 2pi}} and the equation involves {{u = 2x - pi/3}}, find ALL values of {{u}} inside {{-pi/3 <= u <= 11pi/3}} BEFORE solving back for {{x}}.",
      diagram: SINUSOIDAL_SVG,
      diagramCaption:
        "Anatomy of y = a sin(b(x − c)) + d: amplitude a is half the peak-to-trough height, principal axis y = d is the midline average, period is T = 2π/b, and c shifts the rising midline crossing right.",
      workedExamples: [
        {
          title: "Exact Double-Angle Values from Quadrant Info",
          problem:
            "Given that sin θ = −3/5 and π < θ < 3π/2, find the exact values of (a) cos θ, (b) sin 2θ, and (c) cos 2θ.",
          steps: [
            "Using {{sin^2 theta + cos^2 theta = 1}}: {{cos^2 theta = 1 - (-3/5)^2 = 1 - 9/25 = 16/25}}.",
            "Since {{pi < theta < 3pi/2}} (Quadrant III), cosine is negative, so {{cos theta = -4/5}}.",
            "{{sin 2theta = 2 sin theta cos theta = 2(-3/5)(-4/5) = 24/25}}.",
            "{{cos 2theta = 1 - 2 sin^2 theta = 1 - 2(9/25) = 7/25}}.",
          ],
          answer: "{{cos theta = -4/5}}, {{sin 2theta = 24/25}}, {{cos 2theta = 7/25}}",
          yourTurn: {
            question:
              "Given that cos θ = 5/13 and 3π/2 < θ < 2π, find the exact value of sin 2θ as a simplified fraction.",
            answer: { type: "fraction", n: -120, d: 169, simplest: true },
            solution:
              "In Q4, {{sin theta = -sqrt(1 - 25/169) = -12/13}}. Therefore {{sin 2theta = 2(-12/13)(5/13) = -120/169}}.",
          },
        },
        {
          title: "Sinusoidal Ferris Wheel Model",
          problem:
            "A passenger capsule on an observation wheel starts at its minimum height of 15 m at t = 0 min, reaches its maximum height of 165 m at t = 15 min, and returns to 15 m at t = 30 min. Find a cosine model h(t) = a cos(bt) + d with b > 0.",
          steps: [
            "Principal axis: {{d = (165 + 15) / 2 = 90}} m.",
            "Amplitude: {{|a| = (165 - 15) / 2 = 75}} m. Since h(0) = 15 is a minimum while cos(0) = +1, choose {{a = -75}}.",
            "Period T = 30 min, so {{b = 2pi / 30 = pi / 15}}.",
            "Check at t = 0: {{h(0) = -75 cos(0) + 90 = 15}} m; at t = 15: {{h(15) = -75 cos(pi) + 90 = 165}} m.",
          ],
          answer: "{{h(t) = -75 cos((pi/15) t) + 90}}",
        },
        {
          title: "Solving a Quadratic Trigonometric Equation",
          problem: "Solve cos 2x + sin x = 0 for 0 ≤ x ≤ 2π.",
          steps: [
            "Choose the form {{cos 2x = 1 - 2 sin^2 x}} to get an equation purely in sin x: {{1 - 2 sin^2 x + sin x = 0}}.",
            "Multiply by −1: {{2 sin^2 x - sin x - 1 = 0}}.",
            "Factorise: {{(2 sin x + 1)(sin x - 1) = 0}}, giving {{sin x = -1/2}} or {{sin x = 1}}.",
            "On {{[0, 2pi]}}: {{sin x = 1 => x = pi/2}}; {{sin x = -1/2}} (Q3 & Q4, reference {{pi/6}}) {{=> x = 7pi/6, 11pi/6}}.",
          ],
          answer: "{{x = pi/2, 7pi/6, 11pi/6}}",
          yourTurn: {
            question:
              "How many distinct solutions does the equation sin(2x) = 1/2 have in the interval 0 ≤ x ≤ 2π?",
            answer: { type: "number", value: 4 },
            solution:
              "Let u = 2x, so {{0 <= u <= 4pi}} (two full periods). Solutions for u are {{pi/6, 5pi/6, 13pi/6, 17pi/6}}, giving 4 solutions for x: {{pi/12, 5pi/12, 13pi/12, 17pi/12}}.",
          },
        },
      ],
      keyPoints: [
        "Pick the version of cos 2θ that matches the OTHER term in your equation (`1 − 2 sin²θ` if sin θ appears; `2 cos²θ − 1` if cos θ appears).",
        "In `a sin(bx − k) + d`, the horizontal shift is `k/b`, NOT `k` — always rewrite as `a sin(b(x − k/b)) + d`.",
        "For `sin(kx) = c` on `[0, 2π]`, expand the search domain to `[0, 2kπ]` first, list every root, and divide by `k` at the very end.",
        "Never cancel a trig factor like `sin x` or `cos x` from both sides — move all terms to one side and factorise.",
      ],
      whyItWorks:
        "Because every point on the unit circle satisfies {{x^2 + y^2 = 1}} with {{x = cos theta}} and {{y = sin theta}}, Pythagoras immediately forces {{cos^2 theta + sin^2 theta = 1}}. Notice also that multiplying {{2 sin x cos x}} compresses two waves into a single wave of double frequency: its maximum occurs at {{x = pi/4}} where {{2(sqrt(2)/2)(sqrt(2)/2) = 1}}.",
      strategies: [
        "To fit a sinusoidal curve from a graph quickly: read `max` and `min` first (`d = average`, `|a| = half-difference`), then measure crest-to-crest (or 2 × crest-to-trough) for the period `T = 2π/b`.",
        "On Paper 2, verify your algebraic roots by graphing LHS − RHS on your TI-Nspire CX over the exact stated window and counting zero crossings.",
        "When choosing between a sine or cosine model, pick cosine if the graph starts at a maximum (`+a`) or minimum (`−a`) at `x = 0` — then the phase shift `c = 0`!",
      ],
      thinkDeeper:
        "Every linear combination {{A cos x + B sin x}} can be rewritten as a single shifted cosine {{R cos(x - alpha)}} with amplitude {{R = sqrt(A^2 + B^2)}} — which explains why adding two pure musical tones of the SAME frequency produces another pure sinusoid of the same frequency, only louder and phase-shifted!",
    },
    {
      id: "reciprocal-inverse-compound-hl",
      heading: "[HL] Reciprocal & Inverse Trig, Compound-Angle & Tangent Identities",
      level: "HL",
      discovery: {
        problem:
          "Does sin(A + B) equal sin A + sin B? Test A = B = π/6: sin(π/3) = √3/2 ≈ 0.866, whereas sin(π/6) + sin(π/6) = 1/2 + 1/2 = 1! Why is sin nonlinear, and what is the true formula for sin(A + B)?",
        idea:
          "Rotating a unit vector first by A and then by B multiplies their coordinates together: the new x-coordinate is cos A cos B − sin A sin B and the new y-coordinate is sin A cos B + cos A sin B. Every double-angle and tangent identity flows straight out of these two rotation formulas!",
      },
      body:
        "### 1. Reciprocal Trigonometric Functions [HL]\n" +
        "- **Secant:** {{sec theta = 1 / cos theta}} (range {{(-∞, -1] ∪ [1, ∞)}}, asymptotes where {{cos theta = 0}}).\n" +
        "- **Cosecant:** {{\"csc\" theta = 1 / sin theta}} (range {{(-∞, -1] ∪ [1, ∞)}}, asymptotes where {{sin theta = 0}}).\n" +
        "- **Cotangent:** {{\"cot\" theta = 1 / tan theta = cos theta / sin theta}} (period {{pi}}, range {{ℝ}}, asymptotes where {{sin theta = 0}}).\n" +
        "- **Pythagorean Variants** (divide {{sin^2 theta + cos^2 theta = 1}} by {{cos^2 theta}} or {{sin^2 theta}}):\n" +
        "  - {{1 + tan^2 theta = sec^2 theta}}\n" +
        "  - {{1 + \"cot\"^2 theta = \"csc\"^2 theta}}\n\n" +
        "### 2. Inverse Trigonometric Functions [HL]\n" +
        "Because sine, cosine, and tangent are periodic (many-to-one), we restrict each domain to a maximal one-to-one interval covering its full range:\n" +
        "- **{{arcsin x}}**: domain {{[-1, 1]}}, principal range **{{[-pi/2, pi/2]}}** (Q4 & Q1).\n" +
        "- **{{arccos x}}**: domain {{[-1, 1]}}, principal range **{{[0, pi]}}** (Q1 & Q2).\n" +
        "- **{{arctan x}}**: domain {{ℝ}}, principal range **{{(-pi/2, pi/2)}}** with horizontal asymptotes {{y = +- pi/2}}.\n\n" +
        "> **Caution:** {{arcsin(sin x) = x}} ONLY when {{x ∈ [-pi/2, pi/2]}}! For example, {{arcsin(sin(5pi/6)) = arcsin(1/2) = pi/6}}, NOT {{5pi/6}}.\n\n" +
        "### 3. Compound-Angle & Double-Angle Tangent Identities [HL]\n" +
        "- {{sin(A +- B) = sin A cos B +- cos A sin B}}\n" +
        "- {{cos(A +- B) = cos A cos B -+ sin A sin B}} *(notice the sign flips!)*\n" +
        "- {{tan(A +- B) = (tan A +- tan B) / (1 -+ tan A tan B)}}\n" +
        "- Setting {{A = B = theta}} gives **{{tan 2theta = (2 tan theta) / (1 - tan^2 theta)}}**.\n\n" +
        "These allow exact Paper 1 values for multiples of {{pi/12}} (15°), such as {{pi/12 = pi/4 - pi/6}} and {{5pi/12 = pi/4 + pi/6}}, as well as rigorous **LHS → RHS** identity proofs.",
      diagram: INVERSE_RANGES_SVG,
      diagramCaption:
        "Principal output intervals of inverse trig functions: arcsin and arctan live in the right semicircle (Q4/Q1), while arccos lives in the top semicircle (Q1/Q2).",
      workedExamples: [
        {
          title: "[HL] Exact Values via Compound-Angle Formulas",
          problem:
            "Without a calculator, find the exact values of (a) cos(5π/12) and (b) tan(π/12) in simplified surd form.",
          steps: [
            "(a) Split {{5pi/12 = pi/4 + pi/6}} and expand {{cos(A + B) = cos A cos B - sin A sin B}}:",
            "{{cos(5pi/12) = cos(pi/4) cos(pi/6) - sin(pi/4) sin(pi/6) = (sqrt(2)/2)(sqrt(3)/2) - (sqrt(2)/2)(1/2) = (sqrt(6) - sqrt(2)) / 4}}.",
            "(b) Split {{pi/12 = pi/4 - pi/6}} and expand {{tan(A - B) = (tan A - tan B) / (1 + tan A tan B)}}:",
            "{{tan(pi/12) = (1 - 1/sqrt(3)) / (1 + 1/sqrt(3)) = (sqrt(3) - 1) / (sqrt(3) + 1)}}.",
            "Rationalise the denominator by multiplying top and bottom by {{(sqrt(3) - 1)}}: {{(sqrt(3) - 1)^2 / (3 - 1) = (4 - 2 sqrt(3)) / 2 = 2 - sqrt(3)}}.",
          ],
          answer: "{{cos(5pi/12) = (sqrt(6) - sqrt(2))/4}}; {{tan(pi/12) = 2 - sqrt(3)}}",
          yourTurn: {
            question:
              "Without a calculator, find the exact value of sin(5π/12). (Type e.g. (sqrt(6)+sqrt(2))/4.)",
            answer: {
              type: "expression",
              expr: "(sqrt(6) + sqrt(2))/4",
              display: "{{(sqrt(6) + sqrt(2))/4}}",
            },
            solution:
              "{{sin(pi/4 + pi/6) = sin(pi/4) cos(pi/6) + cos(pi/4) sin(pi/6) = (sqrt(2)/2)(sqrt(3)/2) + (sqrt(2)/2)(1/2) = (sqrt(6) + sqrt(2))/4}}.",
          },
        },
        {
          title: "[HL] Evaluating Trig–Inverse-Trig Composites",
          problem:
            "Find the exact values of (a) tan(arccos(−5/13)) and (b) arcsin(sin(4π/3)).",
          steps: [
            "(a) Let {{alpha = arccos(-5/13)}}. Because the range of arccos is {{[0, pi]}} and {{cos alpha < 0}}, angle {{alpha}} lies in Quadrant II.",
            "In Q2, sine is positive: {{sin alpha = +sqrt(1 - (-5/13)^2) = 12/13}}.",
            "Therefore {{tan alpha = sin alpha / cos alpha = (12/13) / (-5/13) = -12/5}}.",
            "(b) First evaluate the inside: {{sin(4pi/3) = -sqrt(3)/2}}.",
            "Now find the unique angle in {{[-pi/2, pi/2]}} whose sine is {{-sqrt(3)/2}}: {{arcsin(-sqrt(3)/2) = -pi/3}}.",
          ],
          answer: "{{tan(arccos(-5/13)) = -12/5}}; {{arcsin(sin(4pi/3)) = -pi/3}}",
          yourTurn: {
            question:
              "Find the exact value of sec(arctan(3/4)) as a simplified fraction.",
            answer: { type: "fraction", n: 5, d: 4, simplest: true },
            solution:
              "Let {{beta = arctan(3/4) ∈ (0, pi/2)}} (Q1). Using {{sec^2 beta = 1 + tan^2 beta = 1 + 9/16 = 25/16}} and {{sec beta > 0}} in Q1 gives {{sec beta = 5/4}}.",
          },
        },
        {
          title: "[HL] Deductive Identity Proof (LHS → RHS)",
          problem:
            "Prove that (sin 3θ)/(sin θ) − (cos 3θ)/(cos θ) = 2 for all θ where sin 2θ ≠ 0.",
          steps: [
            "Start strictly with the left-hand side and combine over the common denominator {{sin theta cos theta}}:",
            "{{LHS = (sin 3theta cos theta - cos 3theta sin theta) / (sin theta cos theta)}}.",
            "Recognise the numerator as {{sin(A - B)}} with {{A = 3theta}} and {{B = theta}}: numerator {{= sin(3theta - theta) = sin 2theta}}.",
            "Rewrite the denominator using {{sin 2theta = 2 sin theta cos theta}}: denominator {{= (1/2) sin 2theta}}.",
            "Simplify: {{LHS = sin 2theta / ((1/2) sin 2theta) = 2 = RHS}} (valid since {{sin 2theta != 0}}). QED.",
          ],
          answer: "Proven: LHS = sin(2θ) / (½ sin 2θ) = 2 = RHS.",
        },
      ],
      keyPoints: [
        "Reciprocal functions are 1/cos, 1/sin, 1/tan — NEVER confuse sec θ = (cos θ)⁻¹ with arccos θ = cos⁻¹(θ)!",
        "Remember the principal ranges: arcsin → [−π/2, π/2], arccos → [0, π], arctan → (−π/2, π/2).",
        "In a 'Show that' or 'Prove that' identity question, work strictly from one side (usually the more complex LHS) to the other — never manipulate across the '=' sign as if it were already true.",
        "To prove tan(A + B), divide numerator and denominator of sin(A + B)/cos(A + B) by cos A cos B.",
      ],
      whyItWorks:
        "Why does {{1 + tan^2 theta = sec^2 theta}} hold automatically? Take {{sin^2 theta + cos^2 theta = 1}} and divide every term by {{cos^2 theta}}: {{(sin theta / cos theta)^2 + 1 = (1 / cos theta)^2}}, i.e., {{tan^2 theta + 1 = sec^2 theta}}. Dividing instead by {{sin^2 theta}} yields {{1 + \"cot\"^2 theta = \"csc\"^2 theta}}.",
      strategies: [
        "When stuck on an HL identity proof, convert sec, csc, cot, and tan into sin and cos, combine fractions over a common denominator, and scan for sin(A ± B), cos(A ± B), or sin 2θ patterns.",
        "For composites like `sin(arccos x)`, ALWAYS let `θ = arccos x`, determine the exact quadrant from the principal range and sign of `x`, and draw a right triangle.",
        "Notice `arccos(−x) = π − arccos(x)`, whereas `arcsin(−x) = −arcsin(x)` and `arctan(−x) = −arctan(x)` (odd functions!).",
      ],
      thinkDeeper:
        "Using `tan(A + B)`, prove that `arctan(1/2) + arctan(1/3) = π/4`! Compute `tan(α + β) = (1/2 + 1/3)/(1 − 1/6) = (5/6)/(5/6) = 1`, and verify that `0 < α + β < π/2` so `α + β` MUST equal `π/4` (not `5π/4`). Machin-like formulas of this exact kind were used to compute π to hundreds of digits by hand!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "State the 3D distance formula between P(x₁, y₁, z₁) and Q(x₂, y₂, z₂).",
        back: "{{d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)}}.",
      },
      {
        front: "When does the ambiguous case of the sine rule (given acute angle A and sides a, b) produce TWO distinct triangles?",
        back: "When {{b sin A < a < b}}. The two angles opposite side b are acute {{B_1 = arcsin((b sin A)/a)}} and obtuse {{B_2 = 180° - B_1}}.",
      },
      {
        front: "How do you find the angle between a 3D line segment VA and a plane ABCD?",
        back: "Drop the perpendicular VO from V to the plane so OA is the projection of VA on the plane; the required acute angle is ∠VAO inside right-angled triangle VOA.",
      },
      {
        front: "What are the volume and curved surface area of a right cone of radius r, height h, and slant height l?",
        back: "{{V = (1/3) pi r^2 h}} and curved surface area {{A = pi r l}} (where {{l = sqrt(r^2 + h^2)}}). Add {{pi r^2}} for total surface area.",
      },
      {
        front: "State the radian formulas for arc length l, sector area A, and minor segment area.",
        back: "{{l = r theta}}, {{A_sector = (1/2) r^2 theta}}, and {{A_segment = (1/2) r^2 (theta - sin theta)}} — with {{theta}} strictly in radians.",
      },
      {
        front: "Exact values of sin, cos, and tan at π/6, π/4, and π/3?",
        back: "π/6: sin {{1/2}}, cos {{sqrt(3)/2}}, tan {{sqrt(3)/3}}. π/4: sin {{sqrt(2)/2}}, cos {{sqrt(2)/2}}, tan 1. π/3: sin {{sqrt(3)/2}}, cos {{1/2}}, tan {{sqrt(3)}}.",
      },
      {
        front: "What are the signs of sin θ, cos θ, and tan θ in Q1, Q2, Q3, and Q4?",
        back: "ASTC: Q1 All (+), Q2 Sin (+), Q3 Tan (+), Q4 Cos (+). Coordinates on the unit circle are (cos θ, sin θ).",
      },
      {
        front: "State all three equivalent forms of the double-angle identity for cos 2θ.",
        back: "{{cos 2theta = cos^2 theta - sin^2 theta = 2 cos^2 theta - 1 = 1 - 2 sin^2 theta}}.",
      },
      {
        front: "For y = a sin(b(x − c)) + d (b > 0), what are the amplitude, period, principal axis, and range?",
        back: "Amplitude {{|a|}}, period {{T = 2pi / b}}, principal axis {{y = d}}, range {{[d - |a|, d + |a|]}}.",
      },
      {
        front: "What are the period and vertical asymptotes of y = tan x?",
        back: "Period is {{pi}}; vertical asymptotes occur at {{x = pi/2 + k pi}} ({{k ∈ ℤ}}), where {{cos x = 0}}.",
      },
      {
        front: "[HL] State the two reciprocal Pythagorean identities derived from sin²θ + cos²θ = 1.",
        back: "{{1 + tan^2 theta = sec^2 theta}} and {{1 + \"cot\"^2 theta = \"csc\"^2 theta}}.",
        level: "HL",
      },
      {
        front: "[HL] State the domains and principal ranges of arcsin x, arccos x, and arctan x.",
        back: "arcsin: domain [−1, 1], range [−π/2, π/2]. arccos: domain [−1, 1], range [0, π]. arctan: domain ℝ, range (−π/2, π/2).",
        level: "HL",
      },
      {
        front: "[HL] State the compound-angle identities for sin(A ± B) and cos(A ± B).",
        back: "{{sin(A +- B) = sin A cos B +- cos A sin B}}; {{cos(A +- B) = cos A cos B -+ sin A sin B}} (sign flips for cos!).",
        level: "HL",
      },
      {
        front: "[HL] State the compound-angle formula for tan(A ± B) and the double-angle formula for tan 2θ.",
        back: "{{tan(A +- B) = (tan A +- tan B) / (1 -+ tan A tan B)}} and {{tan 2theta = (2 tan theta) / (1 - tan^2 theta)}}.",
        level: "HL",
      },
      {
        front: "[HL] Why is arcsin(sin(3π/4)) NOT equal to 3π/4?",
        back: "3π/4 lies outside the principal range [−π/2, π/2] of arcsin. Since sin(3π/4) = √2/2, arcsin(√2/2) = π/4.",
        level: "HL",
      },
      {
        front: "How is a back-bearing from B to A related to the forward bearing from A to B?",
        back: "Add 180° if the forward bearing is < 180°, or subtract 180° if the forward bearing is ≥ 180° (always written as 3 digits).",
      },
    ],
    mustKnow: [
      "3D geometry always reduces to 2D Pythagoras and right-angled triangles once you drop a perpendicular to the plane.",
      "Cosine rule solves SAS and SSS triangles cleanly without any ambiguity; use it to find the largest angle first in SSS.",
      "Whenever using the sine rule to find an angle from SSA, check `180° − θ` — if `A + (180° − θ) < 180°`, two triangles exist.",
      "Radian formulas `l = rθ` and `A = ½r²θ` ONLY work when `θ` is in radians; perimeter of a sector is `2r + rθ`.",
      "Master the exact unit-circle values for multiples of `π/6, π/4, π/3, π/2` in all 4 quadrants — they are tested heavily on Paper 1 (non-GDC).",
      "For `f(x) = a sin(b(x − c)) + d`, always factor `b` out of `(bx − k)` before reading the horizontal phase shift `c = k/b`.",
      "Never divide a trig equation by `sin x` or `cos x` — move all terms to one side and factorise so no roots are lost.",
      "When solving `sin(2x − α) = k` on `[0, 2π]`, transform the interval for `2x − α` FIRST so you capture every cycle's roots.",
      "[HL] Memorise the exact principal ranges: `arcsin ∈ [−π/2, π/2]`, `arccos ∈ [0, π]`, `arctan ∈ (−π/2, π/2)`.",
      "[HL] Identity proofs must proceed strictly one-sided (LHS → RHS or RHS → LHS) using explicit identities, never by cross-multiplying the equality to be proved.",
    ],
    misconceptions: [
      {
        wrong: "sin(A + B) = sin A + sin B and cos(2θ) = 2 cos θ.",
        right: "Trig functions are non-linear! Use sin(A + B) = sin A cos B + cos A sin B and cos 2θ = 2 cos²θ − 1.",
      },
      {
        wrong: "In y = 3 sin(2x − π/3), the graph is shifted π/3 units to the right.",
        right: "Factor out b = 2 first: y = 3 sin(2(x − π/6)), so the horizontal shift is π/6 units to the right!",
      },
      {
        wrong: "To solve sin x cos x = sin x, divide both sides by sin x to get cos x = 1.",
        right: "Dividing by sin x throws away all solutions where sin x = 0! Rewrite as sin x (cos x − 1) = 0 to keep both branches.",
      },
      {
        wrong: "The area of a sector with radius 6 cm and angle 60° is ½(6²)(60) = 1080 cm².",
        right: "Convert 60° to π/3 radians first! A = ½(6²)(π/3) = 6π ≈ 18.8 cm².",
      },
      {
        wrong: "sec θ means the inverse cosine function cos⁻¹(θ).",
        right: "sec θ = 1 / cos θ is the RECIPROCAL function, whereas arccos θ = cos⁻¹(θ) is the INVERSE function.",
        level: "HL",
      },
      {
        wrong: "arccos(cos(−π/3)) = −π/3 because arccos and cos always cancel.",
        right: "arccos outputs values ONLY in [0, π]. Since cos(−π/3) = 1/2, arccos(1/2) = +π/3.",
        level: "HL",
      },
      {
        wrong: "The angle between a slant edge VA of a pyramid and its base is the angle between VA and a base edge AB.",
        right: "It is the angle between VA and its orthogonal projection OA onto the base (using the vertical height VO), NOT the face edge AB.",
      },
    ],
    examMistakes: [
      "Leaving your TI-Nspire CX in Degree mode during a radian question (or Radian mode during a bearings/triangle question) — check the top-right status bar on EVERY question.",
      "Giving only the acute angle in an ambiguous-case sine-rule problem when the prompt says 'find the obtuse angle' or 'find the two possible values'.",
      "Forgetting the two straight radii when asked for the PERIMETER of a sector (`P = 2r + rθ`, not just `rθ`).",
      "Stopping after finding only two roots for `sin(2x) = k` on `[0, 2π]` instead of adjusting the interval to `0 ≤ 2x ≤ 4π` to find all four roots.",
      "Dropping a negative sign when taking a square root from `cos²θ = 1 − sin²θ` without checking which quadrant `θ` lies in.",
      "Rounding intermediate values (like a side length or angle) to 2 s.f. halfway through a 3D or bearings problem, causing the final 3 s.f. answer to drift off by 1 unit.",
      "[HL] Writing `sec²θ − 1 = cot²θ` instead of `tan²θ`, or mixing up the sign flip in `cos(A + B) = cos A cos B − sin A sin B`.",
      "[HL] Manipulating both sides of an identity in a 'Show that' proof instead of transforming LHS cleanly into RHS.",
    ],
    mnemonics: [
      {
        topic: "Quadrant Signs (Q1 → Q2 → Q3 → Q4)",
        device: "All Stations To Changi (ASTC)",
        explanation:
          "Starting from Quadrant I and going anticlockwise: Q1 All positive, Q2 Sine positive, Q3 Tangent positive, Q4 Cosine positive.",
      },
      {
        topic: "Exact Sine Values (0, π/6, π/4, π/3, π/2)",
        device: "√0/2, √1/2, √2/2, √3/2, √4/2",
        explanation:
          "Sine climbs smoothly from √0/2 = 0 up to √4/2 = 1; cosine simply counts backwards from √4/2 down to √0/2!",
      },
      {
        topic: "[HL] Reciprocal Trig Pairing",
        device: "Look at the 3rd letter: seC, csC/coSec, coT",
        explanation:
          "se(c) → 1/cos, co(s)ec → 1/sin, co(t) → 1/tan — each pair has exactly ONE 'co-'!",
        level: "HL",
      },
      {
        topic: "[HL] Compound Cosine Formula",
        device: "Cos-Cos, Sign-Swap, Sin-Sin",
        explanation:
          "cos(A ± B) groups cos A cos B together, FLIPS the ± sign to ∓, and then puts sin A sin B together.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Singapore Flyer Sinusoidal Height",
        emoji: "🎡",
        detail:
          "Each capsule rotates with period T = 30 minutes between 15 m and 165 m, tracing the exact cosine curve h(t) = 90 − 75 cos(πt/15).",
      },
      {
        title: "Maritime Bearings in the Singapore Strait",
        emoji: "🚢",
        detail:
          "Vessel traffic controllers use 3-figure true bearings, cosine-rule range triangulation, and closest-approach triangles to guide hundreds of ships safely daily.",
      },
      {
        title: "Tidal Harmonics & Coastal Engineering",
        emoji: "🌊",
        detail:
          "Semi-diurnal harbour tides are modelled as sums of sinusoidal waves a cos(bt − c) + d to schedule deep-draught container arrivals and floodgates.",
      },
      {
        title: "3D Roof Trusses & Architectural Geometry",
        emoji: "🏛️",
        detail:
          "Calculating strut lengths, dome volumes, and beam-to-floor inclinations in structures like the Esplanade or Jewel Changi relies directly on 3D trigonometry.",
      },
      {
        title: "Signal Modulation & Optics (HL Compound Angles)",
        emoji: "📡",
        detail:
          "Radio receivers multiply carrier and message waves using compound-angle identities to split frequencies cleanly into sidebands without distortion.",
      },
    ],
    videos: [
      {
        title: "IB Maths AA — Sine Rule, Cosine Rule & Ambiguous Case",
        channel: "Revision Village (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+sine+rule+cosine+rule+ambiguous+case",
      },
      {
        title: "IB Maths AA — Radians, Arcs, Sectors & Unit Circle Exact Values",
        channel: "IB Maths AA Tutorials (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+radians+unit+circle+exact+values",
      },
      {
        title: "IB Maths AA — Double-Angle Identities & Solving Trig Equations",
        channel: "IB Maths AA Tutorials (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+double+angle+identities+trigonometric+equations",
      },
      {
        title: "IB Maths AA HL — Reciprocal, Inverse & Compound-Angle Trig",
        channel: "IB Maths AA HL Tutorials (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+compound+angle+inverse+reciprocal+trigonometry",
      },
    ],
    formulas: [
      {
        name: "3D Distance & Midpoint",
        formula: "{{d = sqrt((x_1 - x_2)^2 + (y_1 - y_2)^2 + (z_1 - z_2)^2)}}",
        note: "Formula Booklet SL 3.1; midpoint averages each coordinate.",
      },
      {
        name: "Right Pyramid, Cone & Sphere Volumes",
        formula: "{{V_pyr = (1/3) A h}}, {{V_cone = (1/3) pi r^2 h}}, {{V_sphere = (4/3) pi r^3}}",
        note: "Formula Booklet SL 3.1; cone curved SA = πrl, sphere SA = 4πr².",
      },
      {
        name: "Sine Rule",
        formula: "{{a / sin A = b / sin B = c / sin C}}",
        note: "Formula Booklet SL 3.2; check ambiguous case (180° − B) for SSA.",
      },
      {
        name: "Cosine Rule",
        formula: "{{c^2 = a^2 + b^2 - 2ab cos C}} and {{cos C = (a^2 + b^2 - c^2) / (2ab)}}",
        note: "Formula Booklet SL 3.2; unambiguous for SAS and SSS.",
      },
      {
        name: "Area of a Triangle",
        formula: "{{A = (1/2) ab sin C}}",
        note: "Formula Booklet SL 3.2; C must be the included angle between a and b.",
      },
      {
        name: "Arc Length & Sector Area",
        formula: "{{l = r theta}}, {{A = (1/2) r^2 theta}}",
        note: "Formula Booklet SL 3.4; θ MUST be in radians.",
      },
      {
        name: "Pythagorean & Quotient Identities",
        formula: "{{sin^2 theta + cos^2 theta = 1}}, {{tan theta = sin theta / cos theta}}",
        note: "Formula Booklet SL 3.5 & SL 3.6.",
      },
      {
        name: "Double-Angle Identities",
        formula: "{{sin 2theta = 2 sin theta cos theta}}, {{cos 2theta = cos^2 theta - sin^2 theta = 2 cos^2 theta - 1 = 1 - 2 sin^2 theta}}",
        note: "Formula Booklet SL 3.6.",
      },
      {
        name: "Sinusoidal Model",
        formula: "{{y = a sin(b(x - c)) + d}} with period {{T = 2pi / b}}",
        note: "Amplitude |a| = (max − min)/2, principal axis d = (max + min)/2.",
      },
      {
        name: "[HL] Reciprocal Pythagorean Identities",
        formula: "{{1 + tan^2 theta = sec^2 theta}}, {{1 + \"cot\"^2 theta = \"csc\"^2 theta}}",
        note: "Formula Booklet AHL 3.10.",
        level: "HL",
      },
      {
        name: "[HL] Compound-Angle Sine & Cosine",
        formula: "{{sin(A +- B) = sin A cos B +- cos A sin B}}, {{cos(A +- B) = cos A cos B -+ sin A sin B}}",
        note: "Formula Booklet AHL 3.10.",
        level: "HL",
      },
      {
        name: "[HL] Compound & Double-Angle Tangent",
        formula: "{{tan(A +- B) = (tan A +- tan B) / (1 -+ tan A tan B)}}, {{tan 2theta = (2 tan theta) / (1 - tan^2 theta)}}",
        note: "Formula Booklet AHL 3.10.",
        level: "HL",
      },
      {
        name: "[HL] Principal Ranges of Inverse Trig",
        formula: "{{arcsin x ∈ [-pi/2, pi/2]}}, {{arccos x ∈ [0, pi]}}, {{arctan x ∈ (-pi/2, pi/2)}}",
        note: "Memorise! Not printed in the IB Formula Booklet.",
        level: "HL",
      },
    ],
  },
};
