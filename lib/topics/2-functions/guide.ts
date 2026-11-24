import type { TopicGuide } from "../../types.ts";

const SVG_INVERSE_REFLECTION = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph showing a one-to-one function f(x) and its inverse f inverse of x reflected across the line y = x">
  <rect x="0" y="0" width="460" height="280" rx="12" fill="#ffffff" />
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="60" y1="30" x2="60" y2="250" /><line x1="100" y1="30" x2="100" y2="250" />
    <line x1="140" y1="30" x2="140" y2="250" /><line x1="180" y1="30" x2="180" y2="250" />
    <line x1="220" y1="30" x2="220" y2="250" /><line x1="260" y1="30" x2="260" y2="250" />
    <line x1="300" y1="30" x2="300" y2="250" /><line x1="340" y1="30" x2="340" y2="250" />
    <line x1="380" y1="30" x2="380" y2="250" />
    <line x1="40" y1="50" x2="400" y2="50" /><line x1="40" y1="90" x2="400" y2="90" />
    <line x1="40" y1="130" x2="400" y2="130" /><line x1="40" y1="170" x2="400" y2="170" />
    <line x1="40" y1="210" x2="400" y2="210" />
  </g>
  <!-- Axes: origin at (140, 210), 1 unit = 40px -->
  <line x1="40" y1="210" x2="410" y2="210" stroke="#334155" stroke-width="1.8" />
  <line x1="140" y1="255" x2="140" y2="22" stroke="#334155" stroke-width="1.8" />
  <polygon points="410,210 402,206 402,214" fill="#334155" />
  <polygon points="140,22 136,30 144,30" fill="#334155" />
  <text x="414" y="214" font-size="12" font-weight="700" fill="#334155">x</text>
  <text x="147" y="28" font-size="12" font-weight="700" fill="#334155">y</text>
  <text x="128" y="224" font-size="10" fill="#64748b">0</text>
  <text x="177" y="224" font-size="10" fill="#64748b">1</text>
  <text x="217" y="224" font-size="10" fill="#64748b">2</text>
  <text x="257" y="224" font-size="10" fill="#64748b">3</text>
  <text x="297" y="224" font-size="10" fill="#64748b">4</text>
  <text x="128" y="174" font-size="10" fill="#64748b">1</text>
  <text x="128" y="134" font-size="10" fill="#64748b">2</text>
  <text x="128" y="94" font-size="10" fill="#64748b">3</text>
  <text x="128" y="54" font-size="10" fill="#64748b">4</text>
  <!-- Mirror line y = x: (140-40, 210+40) to (140+180, 210-180) = (100,250) to (320,30) -->
  <line x1="95" y1="255" x2="325" y2="25" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="6,5" />
  <text x="328" y="34" font-size="12" font-weight="700" fill="#64748b">y = x</text>
  <!-- f(x) = 0.45*x^2 + 0.4 (x >= 0): (0,0.4)->(140,194), (1,0.85)->(180,176), (2,2.2)->(220,122), (3,4.45)->(260,32) -->
  <path d="M 140 194 Q 192 184 220 122 T 258 36" fill="none" stroke="#4338ca" stroke-width="2.8" />
  <!-- f^-1(x): swap coords -> (0.4,0)->(156,210), (0.85,1)->(174,170), (2.2,2)->(228,130), (4.45,3)->(318,90) -->
  <path d="M 156 210 Q 166 158 228 130 T 314 92" fill="none" stroke="#0d9488" stroke-width="2.8" />
  <!-- Mirror connector between (a, b) = (2, 2.2) -> (220,122) and (2.2, 2) -> (228,130); use (1.6, 1.55) too small, use (2.5, 3.21)->(240,81.5) and (3.21, 2.5)->(268.5,110) -->
  <line x1="240" y1="81.5" x2="268.5" y2="110" stroke="#c2410c" stroke-width="1.4" stroke-dasharray="3,3" />
  <circle cx="240" cy="81.5" r="4.5" fill="#4338ca" />
  <circle cx="268.5" cy="110" r="4.5" fill="#0d9488" />
  <text x="190" y="75" font-size="11" font-weight="700" fill="#4338ca">(a, b)</text>
  <text x="275" y="114" font-size="11" font-weight="700" fill="#0d9488">(b, a)</text>
  <!-- Labels -->
  <text x="262" y="54" font-size="12" font-weight="800" fill="#4338ca">y = f(x)</text>
  <text x="318" y="96" font-size="12" font-weight="800" fill="#0d9488">y = f⁻¹(x)</text>
  <!-- Legend box -->
  <rect x="292" y="150" width="152" height="50" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="302" y="168" font-size="10.5" font-weight="700" fill="#1e293b">Domain of f⁻¹ = Range of f</text>
  <text x="302" y="186" font-size="10.5" font-weight="700" fill="#1e293b">Range of f⁻¹ = Domain of f</text>
</svg>`;

const SVG_QUADRATIC_RATIONAL = `<svg viewBox="0 0 500 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two panels: quadratic discriminant cases on the left, and linear rational hyperbola with vertical and horizontal asymptotes on the right">
  <rect x="0" y="0" width="500" height="245" rx="12" fill="#ffffff" />
  <!-- Left Panel: Discriminant cases -->
  <text x="120" y="22" font-size="12.5" font-weight="800" text-anchor="middle" fill="#1e293b">Discriminant Δ = b² − 4ac (a &gt; 0)</text>
  <line x1="20" y1="150" x2="225" y2="150" stroke="#334155" stroke-width="1.6" />
  <text x="229" y="154" font-size="11" font-weight="700" fill="#334155">x</text>
  <!-- Axis of symmetry -->
  <line x1="120" y1="36" x2="120" y2="215" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,4" />
  <text x="120" y="230" font-size="10.5" font-weight="700" text-anchor="middle" fill="#64748b">x = −b/(2a)</text>
  <!-- Delta < 0 (no real roots, floating above x-axis) -->
  <path d="M 55 48 Q 120 175 185 48" fill="none" stroke="#c2410c" stroke-width="2.2" />
  <text x="190" y="64" font-size="10.5" font-weight="700" fill="#c2410c">Δ &lt; 0</text>
  <!-- Delta = 0 (tangent to x-axis) -->
  <path d="M 48 64 Q 120 236 192 64" fill="none" stroke="#0d9488" stroke-width="2.2" />
  <circle cx="120" cy="150" r="3.8" fill="#0d9488" />
  <text x="192" y="95" font-size="10.5" font-weight="700" fill="#0d9488">Δ = 0</text>
  <!-- Delta > 0 (two distinct real roots) -->
  <path d="M 42 82 Q 120 295 198 82" fill="none" stroke="#4338ca" stroke-width="2.4" />
  <circle cx="80" cy="150" r="3.8" fill="#4338ca" />
  <circle cx="160" cy="150" r="3.8" fill="#4338ca" />
  <text x="194" y="128" font-size="10.5" font-weight="700" fill="#4338ca">Δ &gt; 0</text>

  <!-- Divider -->
  <line x1="250" y1="16" x2="250" y2="230" stroke="#e2e8f0" stroke-width="1.5" />

  <!-- Right Panel: Linear rational y = (ax+b)/(cx+d) -->
  <text x="375" y="22" font-size="12.5" font-weight="800" text-anchor="middle" fill="#1e293b">Linear Rational (ax + b)/(cx + d)</text>
  <!-- Axes: origin (355, 145) -->
  <line x1="268" y1="145" x2="482" y2="145" stroke="#334155" stroke-width="1.5" />
  <line x1="355" y1="220" x2="355" y2="38" stroke="#334155" stroke-width="1.5" />
  <text x="486" y="149" font-size="11" font-weight="700" fill="#334155">x</text>
  <text x="361" y="44" font-size="11" font-weight="700" fill="#334155">y</text>
  <!-- VA x = 385, HA y = 110 -->
  <line x1="385" y1="38" x2="385" y2="220" stroke="#c2410c" stroke-width="1.6" stroke-dasharray="5,4" />
  <line x1="268" y1="110" x2="482" y2="110" stroke="#0d9488" stroke-width="1.6" stroke-dasharray="5,4" />
  <text x="390" y="54" font-size="10.5" font-weight="700" fill="#c2410c">x = −d/c</text>
  <text x="272" y="103" font-size="10.5" font-weight="700" fill="#0d9488">y = a/c</text>
  <!-- Upper-right branch: y = 110 - 900/(x-385) -->
  <path d="M 398 42 Q 406 100 478 105" fill="none" stroke="#4338ca" stroke-width="2.6" />
  <!-- Lower-left branch -->
  <path d="M 272 116 Q 364 120 373 216" fill="none" stroke="#4338ca" stroke-width="2.6" />
  <text x="375" y="234" font-size="10.5" font-weight="700" text-anchor="middle" fill="#64748b">Asymptotes meet at (−d/c, a/c)</text>
</svg>`;

const SVG_OBLIQUE_ASYMPTOTE = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of a quadratic-over-linear rational function displaying a vertical asymptote, an oblique asymptote, two local extrema, and the excluded range interval">
  <rect x="0" y="0" width="460" height="280" rx="12" fill="#ffffff" />
  <!-- Origin at (200, 145), scale 32px per unit -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="72" y1="20" x2="72" y2="260" /><line x1="104" y1="20" x2="104" y2="260" />
    <line x1="136" y1="20" x2="136" y2="260" /><line x1="168" y1="20" x2="168" y2="260" />
    <line x1="200" y1="20" x2="200" y2="260" /><line x1="232" y1="20" x2="232" y2="260" />
    <line x1="264" y1="20" x2="264" y2="260" /><line x1="296" y1="20" x2="296" y2="260" />
    <line x1="328" y1="20" x2="328" y2="260" /><line x1="360" y1="20" x2="360" y2="260" />
    <line x1="60" y1="49" x2="395" y2="49" /><line x1="60" y1="81" x2="395" y2="81" />
    <line x1="60" y1="113" x2="395" y2="113" /><line x1="60" y1="145" x2="395" y2="145" />
    <line x1="60" y1="177" x2="395" y2="177" /><line x1="60" y1="209" x2="395" y2="209" />
    <line x1="60" y1="241" x2="395" y2="241" />
  </g>
  <!-- Excluded range band -2 < y < 2: y=2 -> 81, y=-2 -> 209 -->
  <rect x="60" y="81" width="335" height="128" fill="#fef3c7" fill-opacity="0.35" />
  <!-- Axes -->
  <line x1="56" y1="145" x2="404" y2="145" stroke="#334155" stroke-width="1.6" />
  <line x1="200" y1="264" x2="200" y2="16" stroke="#334155" stroke-width="1.6" />
  <text x="408" y="149" font-size="11" font-weight="700" fill="#334155">x</text>
  <text x="206" y="24" font-size="11" font-weight="700" fill="#334155">y</text>
  <!-- Vertical asymptote x = 1 -> x_px = 232 -->
  <line x1="232" y1="18" x2="232" y2="262" stroke="#c2410c" stroke-width="1.8" stroke-dasharray="6,4" />
  <text x="237" y="34" font-size="11" font-weight="700" fill="#c2410c">VA: x = 1</text>
  <!-- Oblique asymptote y = x - 1: (-2.5, -3.5) -> (120, 257) to (4.8, 3.8) -> (353.6, 23.4) -->
  <line x1="120" y1="257" x2="354" y2="23" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="6,4" />
  <text x="348" y="42" font-size="11" font-weight="700" fill="#0d9488">Oblique: y = x − 1</text>
  <!-- Right branch y = x - 1 + 1/(x - 1): x=1.35->(243.2,42.3), x=1.5->(248,65), x=2->(264,81), x=3->(296,65), x=4->(328,38.3), x=4.6->(347.2,20.9) -->
  <path d="M 242 26 C 244 60, 252 81, 264 81 C 280 81, 305 60, 344 24" fill="none" stroke="#4338ca" stroke-width="2.7" />
  <!-- Left branch: x=0.65->(188.8,247.7), x=0.5->(184,225), x=0->(200,209), x=-1->(168,225), x=-2->(136,251.7) -->
  <!-- Wait: x=0 is at x_px=200, y=-2 is at y_px=209! x=0.5 is at x_px=216, y=-2.5 -> 225! x=0.65 -> x_px=220.8, y=-3.21 -> 247.7! -->
  <path d="M 122 258 C 158 228, 184 209, 200 209 C 212 209, 220 226, 222 260" fill="none" stroke="#4338ca" stroke-width="2.7" />
  <!-- Extrema dots -->
  <circle cx="264" cy="81" r="4.5" fill="#4338ca" />
  <text x="271" y="96" font-size="10.5" font-weight="700" fill="#4338ca">local min (2, 2)</text>
  <circle cx="200" cy="209" r="4.5" fill="#4338ca" />
  <text x="112" y="203" font-size="10.5" font-weight="700" fill="#4338ca">local max (0, −2)</text>
  <!-- Range gap label -->
  <text x="315" y="135" font-size="10.5" font-weight="700" fill="#a16207">No curve here:</text>
  <text x="315" y="160" font-size="10.5" font-weight="700" fill="#a16207">y ≤ −2 or y ≥ 2</text>
</svg>`;

const SVG_MODULUS_RECIPROCAL = `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-panel comparison of |f(x)|, f(|x|), and 1/f(x) derived from a parent parabola f(x) with roots at -1 and 3">
  <rect x="0" y="0" width="520" height="230" rx="12" fill="#ffffff" />
  <!-- Panel 1: y = |f(x)| (center x=75, y=130, 1 unit = 18px; roots at -1->57, 3->129; vertex (1,-2)->(93,166) flips to (93,94)) -->
  <text x="86" y="20" font-size="12" font-weight="800" text-anchor="middle" fill="#1e293b">y = |f(x)|</text>
  <line x1="16" y1="130" x2="158" y2="130" stroke="#334155" stroke-width="1.3" />
  <line x1="75" y1="205" x2="75" y2="34" stroke="#334155" stroke-width="1.3" />
  <!-- Original dashed f(x) below axis -->
  <path d="M 57 130 Q 93 202 129 130" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="4,3" />
  <!-- |f(x)| solid -->
  <path d="M 38 48 Q 48 96 57 130 Q 93 58 129 130 Q 138 96 148 48" fill="none" stroke="#4338ca" stroke-width="2.5" />
  <circle cx="57" cy="130" r="3" fill="#c2410c" />
  <circle cx="129" cy="130" r="3" fill="#c2410c" />
  <text x="86" y="218" font-size="10" font-weight="700" text-anchor="middle" fill="#64748b">Reflect y &lt; 0 above x-axis</text>

  <line x1="173" y1="16" x2="173" y2="220" stroke="#e2e8f0" stroke-width="1.2" />

  <!-- Panel 2: y = f(|x|) (center x=260, y=130, 1 unit = 18px; right side x>=0 kept: (0,-1.5)->(260,157), (1,-2)->(278,166), (3,0)->(314,130), (4,2.5)->(332,85); mirror to x<=0) -->
  <text x="260" y="20" font-size="12" font-weight="800" text-anchor="middle" fill="#1e293b">y = f(|x|)</text>
  <line x1="186" y1="130" x2="334" y2="130" stroke="#334155" stroke-width="1.3" />
  <line x1="260" y1="205" x2="260" y2="34" stroke="#334155" stroke-width="1.3" />
  <!-- Discarded original x < 0 dashed -->
  <path d="M 224 48 Q 242 122 260 157" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" />
  <!-- Right branch kept + mirrored left -->
  <path d="M 260 157 Q 280 176 314 130 Q 324 112 332 82" fill="none" stroke="#0d9488" stroke-width="2.5" />
  <path d="M 260 157 Q 240 176 206 130 Q 196 112 188 82" fill="none" stroke="#0d9488" stroke-width="2.5" />
  <circle cx="260" cy="157" r="3" fill="#c2410c" />
  <text x="260" y="218" font-size="10" font-weight="700" text-anchor="middle" fill="#64748b">Keep x ≥ 0, mirror in y-axis</text>

  <line x1="347" y1="16" x2="347" y2="220" stroke="#e2e8f0" stroke-width="1.2" />

  <!-- Panel 3: y = 1/f(x) (center x=420, y=130, 1 unit = 18px; VAs at x=-1->402, x=3->474; vertex (1,-2)->local max (1,-0.5)->(438,139)) -->
  <text x="434" y="20" font-size="12" font-weight="800" text-anchor="middle" fill="#1e293b">y = 1 / f(x)</text>
  <line x1="360" y1="130" x2="508" y2="130" stroke="#334155" stroke-width="1.3" />
  <line x1="420" y1="205" x2="420" y2="34" stroke="#334155" stroke-width="1.3" />
  <!-- VAs at x = -1 and x = 3 -->
  <line x1="402" y1="36" x2="402" y2="202" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="4,3" />
  <line x1="474" y1="36" x2="474" y2="202" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="4,3" />
  <!-- Left positive branch -->
  <path d="M 362 125 Q 393 122 397 42" fill="none" stroke="#7c3aed" stroke-width="2.5" />
  <!-- Middle negative arch peaking at (438, 139) -->
  <path d="M 407 200 C 412 152, 424 139, 438 139 C 452 139, 464 152, 469 200" fill="none" stroke="#7c3aed" stroke-width="2.5" />
  <!-- Right positive branch -->
  <path d="M 479 42 Q 483 122 508 126" fill="none" stroke="#7c3aed" stroke-width="2.5" />
  <circle cx="438" cy="139" r="3" fill="#7c3aed" />
  <text x="434" y="218" font-size="10" font-weight="700" text-anchor="middle" fill="#64748b">Zeros → VAs; min ↔ max</text>
</svg>`;

export const guide: TopicGuide = {
  id: "2-functions",
  title: "Topic 2: Functions, Quadratics, Rationals & Polynomials",
  strand: "Topic 2: Functions",
  icon: "ƒ",
  level: "SL",
  summary:
    "Master straight lines, composites, inverses, graph transformations, quadratics, exponentials/logs, and rational asymptotes — plus HL polynomials, Vieta's root theorems, oblique asymptotes, parity, and modulus/reciprocal transformations.",
  intro:
    "Functions are the backbone of IB Diploma Mathematics: Analysis & Approaches (aligned to the provisional FA2029 subject brief). Every graph is an algebraic story told geometrically — a root is an x-intercept, a repeated root is a tangent, an excluded denominator value is a vertical asymptote, and an inverse is a mirror reflection in {{y = x}}. Build fluency both analytically (Paper 1) and on your TI-Nspire CX GDC (Paper 2), then push into HL polynomial structure, oblique asymptotes, and non-linear graph transformations.",
  guide: [
    // =========================================================================
    // SECTION 1: SL — Functions, Domain/Range, Composites, Inverses & Transforms
    // =========================================================================
    {
      id: "functions-inverse-transforms",
      heading: "Functions, Domain/Range, Composites, Inverses & Graph Transformations",
      level: "SL",
      discovery: {
        problem:
          "Suppose a machine doubles your input and adds {{3}}, giving {{f(x) = 2x + 3}}. Now suppose we transform the graph {{y = f(x)}} into {{y = f(2x - 6)}}. A student claims the graph moves right by {{6}} units and then squashes horizontally by a factor of {{1/2}}. Another student claims it squashes by {{1/2}} first and then moves right by {{3}} units. Who is right — or are both right?",
        idea:
          "Test a single point! On {{y = f(x)}}, the input {{0}} gives {{f(0)}}. On {{y = f(2x - 6)}}, to feed {{0}} into {{f}} we need {{2x - 6 = 0}}, so {{x = 3}}. Under Student 1: {{0 -> 0 + 6 = 6 -> 6 * (1/2) = 3}}. Under Student 2: {{0 -> 0 * (1/2) = 0 -> 0 + 3 = 3}}. **Both are right!** Factoring {{2x - 6 = 2(x - 3)}} reveals why: horizontal order reverses the visible arithmetic because every operation acts backwards on {{x}}.",
      },
      body: `### Straight Lines & Function Foundations
A straight line has gradient {{m = (y_2 - y_1)/(x_2 - x_1)}} and can be written in **gradient-intercept form** {{y = mx + c}}, **point-gradient form** {{y - y_1 = m(x - x_1)}}, or **general form** {{ax + by + d = 0}}. Two lines are **parallel** when {{m_1 = m_2}} and **perpendicular** when {{m_1 m_2 = -1}} (provided neither is vertical).

A relation is a **function** if every input {{x}} in its **domain** maps to **exactly one** output {{y = f(x)}} in its **range** (passes the **vertical line test**). Always check **natural domain restrictions**:
- Denominators cannot be zero: for {{1/(x - 3)}}, {{x != 3}}.
- Even roots require non-negative radicands: for {{sqrt(5 - x)}}, {{x <= 5}}.
- Logarithms require strictly positive arguments: for {{ln(2x + 1)}}, {{x > -1/2}}.

### Composite & Inverse Functions
The **composite function** {{(f ∘ g)(x) = f(g(x))}} applies {{g}} *first*, then {{f}}. It only exists when the **range of {{g}}** is a subset of the **domain of {{f}}**. Order matters: generally {{f(g(x)) != g(f(x))}}.

A function {{f}} has an **inverse function** {{f^(-1)}} if and only if {{f}} is **one-to-one (injective)** — passing the **horizontal line test** (every horizontal line cuts the graph at most once). Geometrically, {{y = f^(-1)(x)}} is the reflection of {{y = f(x)}} in the line {{y = x}}, which swaps every coordinate {{(a, b) <-> (b, a)}} as well as domain and range:
    {{f(f^(-1)(x)) = f^(-1)(f(x)) = x}}
    Domain of {{f^(-1)}} = Range of {{f}}, and Range of {{f^(-1)}} = Domain of {{f}}.

> **IB TI-Nspire CX Tip:** To verify key graph features on Paper 2, open a **Graphs** page, enter {{f_1(x)}}, and use **Menu → 6: Analyze Graph** (Zero, Minimum, Maximum, Intersection) and **Menu → 4: Window/Zoom** to frame all turning points and asymptotes before transferring a labelled sketch onto paper.

### Transformations {{y = a f(bx + c) + d}}
Vertical transformations act *outside* {{f}} in the **natural algebraic order** (stretch/reflect first, translate second). Horizontal transformations act *inside* {{f}} in the **opposite direction** to what the arithmetic looks like:

| Algebraic Change | Geometric Effect on {{y = f(x)}} | Coordinate Map |
| --- | --- | --- |
| {{f(x) + d}} | Vertical translation by vector {{(0, d)}} | {{(x, y) -> (x, y + d)}} |
| {{f(x - h)}} | Horizontal translation right by {{h}} | {{(x, y) -> (x + h, y)}} |
| {{a f(x)}} | Vertical stretch scale factor {{|a|}} (reflect in x-axis if {{a < 0}}) | {{(x, y) -> (x, ay)}} |
| {{f(bx)}} | Horizontal stretch scale factor {{1/|b|}} (reflect in y-axis if {{b < 0}}) | {{(x, y) -> (x/b, y)}} |

When combining horizontal stretch and shift in {{f(bx + c)}}, rewrite as {{f(b(x + c/b))}}: **stretch by {{1/b}} first, then translate by {{-c/b}}** — or equivalently **translate by {{-c}} first, then stretch by {{1/b}}**.`,
      diagram: SVG_INVERSE_REFLECTION,
      diagramCaption:
        "Reflecting y = f(x) in y = x swaps every (a, b) with (b, a), exchanging domain and range.",
      workedExamples: [
        {
          title: "Finding an Inverse & Composite Function",
          problem:
            "Let {{f(x) = (2x + 3)/(x - 1)}} for {{x != 1}}, and {{g(x) = 3x - 2}}. Find an expression for {{f^(-1)(x)}} (stating its domain) and evaluate {{(f ∘ g)(2)}}.",
          steps: [
            "Write {{y = (2x + 3)/(x - 1)}} and swap {{x}} and {{y}}: {{x = (2y + 3)/(y - 1)}}.",
            "Multiply through by {{(y - 1)}}: {{x(y - 1) = 2y + 3 => xy - x = 2y + 3}}.",
            "Group {{y}}-terms on one side: {{xy - 2y = x + 3 => y(x - 2) = x + 3}}.",
            "Divide by {{(x - 2)}}: {{f^(-1)(x) = (x + 3)/(x - 2)}}, with domain {{x != 2}} (matching the range of {{f}}).",
            "For {{(f ∘ g)(2)}}, apply the inner function first: {{g(2) = 3(2) - 2 = 4}}, then {{f(4) = (2(4) + 3)/(4 - 1) = 11/3}}.",
          ],
          answer: "{{f^(-1)(x) = (x + 3)/(x - 2)}} ({{x != 2}}); {{(f ∘ g)(2) = 11/3}}",
          yourTurn: {
            question: "Given {{h(x) = 4x - 5}}, find the exact value of {{h^(-1)(11)}}.",
            answer: { type: "number", value: 4 },
            solution: "Set {{4x - 5 = 11 => 4x = 16 => x = 4}}, so {{h^(-1)(11) = 4}}.",
          },
        },
        {
          title: "Combined Transformations & Point Tracking",
          problem:
            "Describe a full sequence of transformations mapping {{y = f(x)}} to {{y = 3f(2x - 6) + 1}}, and find the image of the point {{(4, -2)}}.",
          steps: [
            "Factor the inside of {{f}}: {{2x - 6 = 2(x - 3)}}, so {{y = 3f(2(x - 3)) + 1}}.",
            "Horizontal order (factored form): horizontal stretch of scale factor {{1/2}} parallel to the x-axis, followed by translation {{3}} units right.",
            "Vertical order: vertical stretch of scale factor {{3}} parallel to the y-axis, followed by translation {{1}} unit up.",
            "Track {{(4, -2)}} directly using the mapping {{2x' - 6 = 4 => x' = 5}}, and {{y' = 3(-2) + 1 = -5}}.",
          ],
          answer: "Stretch horizontally by {{1/2}}, shift right {{3}}, stretch vertically by {{3}}, shift up {{1}}; image is {{(5, -5)}}.",
          yourTurn: {
            question:
              "The point {{(6, 4)}} lies on {{y = f(x)}}. Find the coordinates of the corresponding point on {{y = 2f(3x - 3) - 5}} as an ordered pair (e.g. `1, 2`).",
            answer: { type: "list", values: [3, 3], ordered: true, display: "(3, 3)" },
            solution: "Set {{3x' - 3 = 6 => 3x' = 9 => x' = 3}}, and {{y' = 2(4) - 5 = 3}}, giving {{(3, 3)}}.",
          },
        },
      ],
      keyPoints: [
        "Every inverse function satisfies {{f(f^(-1)(x)) = x}} and requires {{f}} to be one-to-one (horizontal line test).",
        "Never assume {{f(x) = f^(-1)(x)}} can only intersect on {{y = x}} for decreasing functions — though any point on {{y = x}} is always a shared intersection.",
        "Horizontal operations inside {{f(bx + c)}} act in reverse: solve {{bx' + c = x}} to find {{x' = (x - c)/b}} reliably every time.",
        "To evaluate {{f^(-1)(k)}} numerically, you do NOT need the formula for {{f^(-1)}} — simply solve {{f(x) = k}}!",
      ],
      whyItWorks:
        "Why do horizontal transformations feel backwards? Because {{y = f(bx + c)}} asks: *which new coordinate {{x'}} feeds the same old input {{x}} into the rule {{f}}?* Setting {{bx' + c = x}} immediately yields {{x' = (x - c)/b}}, showing that subtracting {{c}} and dividing by {{b}} — the exact inverse operations — convert old x-values into new x-values.",
      strategies: [
        "Always check domain/range swaps explicitly when finding {{f^(-1)}}: state the domain of {{f^(-1)}} even if it is not obvious from the formula.",
        "For combined transformation sequences, factor {{bx + c = b(x + c/b)}} before writing words like 'stretch' and 'translate' — and double-check with a single test point.",
        "In IB exams, use precise phrasing: 'stretch parallel to the x-axis with scale factor {{1/b}}' (never just 'squish' or 'shift by b').",
      ],
      thinkDeeper:
        "Can a strictly decreasing function {{f}} intersect its inverse {{f^(-1)}} at points OFF the line {{y = x}}? Try {{f(x) = -x^3}}: verify that {{(1, -1)}} and {{(-1, 1)}} both lie on {{y = f(x)}} and {{y = f^(-1)(x)}} even though neither lies on {{y = x}}!",
    },

    // =========================================================================
    // SECTION 2: SL — Quadratics, Discriminant, Exponentials, Logs & Rationals
    // =========================================================================
    {
      id: "quadratics-exponentials-rationals",
      heading: "Quadratics, Discriminant, Exponentials, Logs & Linear Rationals",
      level: "SL",
      discovery: {
        problem:
          "Look at {{f(x) = (4x - 5)/(2x + 6)}}. Plug in {{x = 1000}} and {{x = -1000}}. Both outputs hover right next to {{2}}, yet {{f(x)}} can *never* equal {{2}}. Why can the curve get arbitrarily close to {{y = 2}} without ever touching it?",
        idea:
          "Divide numerator and denominator by {{x}}: {{f(x) = (4 - 5/x)/(2 + 6/x)}}. As {{|x| -> ∞}}, the {{5/x}} and {{6/x}} terms vanish, leaving {{4/2 = 2}}. Setting {{(4x - 5)/(2x + 6) = 2}} gives {{4x - 5 = 4x + 12 => -5 = 12}}, an impossibility! That unreachable limit line {{y = 2}} is the **horizontal asymptote**.",
      },
      body: `### Three Forms of a Quadratic & the Discriminant
Every quadratic {{f(x) = ax^2 + bx + c}} ({{a != 0}}) has three complementary algebraic faces:
- **Standard form** {{ax^2 + bx + c}}: immediately reveals the **y-intercept** {{(0, c)}} and axis of symmetry {{x = -b/(2a)}}.
- **Vertex (completed-square) form** {{a(x - h)^2 + k}}: immediately reveals the **vertex** {{(h, k)}} and exact **range** ({{y >= k}} if {{a > 0}}, {{y <= k}} if {{a < 0}}).
- **Factorised form** {{a(x - p)(x - q)}}: immediately reveals the **x-intercepts** {{p, q}} and axis of symmetry {{x = (p + q)/2}}.

The **discriminant** {{Δ = b^2 - 4ac}} inside the quadratic formula {{x = (-b +- sqrt(b^2 - 4ac))/(2a)}} classifies the roots:
- {{Δ > 0}}: **two distinct real roots** (graph crosses the x-axis twice).
- {{Δ = 0}}: **one repeated real root** (graph is **tangent** to the x-axis at its vertex).
- {{Δ < 0}}: **no real roots** (graph lies strictly above the x-axis if {{a > 0}}, or strictly below if {{a < 0}}).

To solve a **quadratic inequality** such as {{ax^2 + bx + c > 0}}, find the critical roots first and sketch the parabola (or sign diagram) — never guess the inequality direction from the factors!

### Linear Rational Functions {{f(x) = (ax + b)/(cx + d)}}
Provided {{ad - bc != 0}} and {{c != 0}}, the graph is a rectangular hyperbola with two perpendicular asymptotes:
- **Vertical asymptote (VA):** set denominator to zero, {{cx + d = 0 => x = -d/c}} (excluded from domain).
- **Horizontal asymptote (HA):** ratio of leading coefficients, {{y = a/c}} (excluded from range).
- **Intercepts:** x-intercept at {{(-b/a, 0)}} (when {{a != 0}}); y-intercept at {{(0, b/d)}} (when {{d != 0}}).

Notice that rewriting {{(ax + b)/(cx + d) = a/c + k/(cx + d)}} proves every linear rational function is just a translated, stretched copy of the reciprocal function {{y = 1/x}}!

### Exponential & Logarithmic Curves and Modelling
For {{a > 0, a != 1}}, {{f(x) = a^x}} and {{g(x) = log_a x}} are **inverses of each other** (reflections in {{y = x}}):
- **Exponential** {{y = A e^(kx) + c}}: domain {{x ∈ ℝ}}, horizontal asymptote {{y = c}}, range {{y > c}} (if {{A > 0}}), y-intercept {{(0, A + c)}}. Growth when {{k > 0}}; decay toward {{c}} when {{k < 0}}.
- **Logarithmic** {{y = ln(x - h) + k}}: vertical asymptote {{x = h}}, domain {{x > h}}, range {{y ∈ ℝ}}, x-intercept when {{ln(x - h) = -k}}.

> **Paper 1 vs Paper 2 Modelling:** Equations like {{2e^(2x) - 5e^x + 2 = 0}} are disguised quadratics (set {{u = e^x > 0}} and reject negative roots). Transcendental equations like {{e^x = 4 - x^2}} have no elementary closed form — solve them to **3 significant figures** on your TI-Nspire CX via intersection of {{y = e^x}} and {{y = 4 - x^2}}.`,
      diagram: SVG_QUADRATIC_RATIONAL,
      diagramCaption:
        "Left: the discriminant Δ controls how a parabola meets the x-axis. Right: a linear rational curve approaches its asymptotes x = −d/c and y = a/c.",
      workedExamples: [
        {
          title: "Parameter Range via Discriminant Inequality",
          problem:
            "Find the set of values of {{k}} for which the quadratic equation {{x^2 + (k - 1)x + (k + 2) = 0}} has no real roots.",
          steps: [
            "Identify coefficients: {{a = 1}}, {{b = k - 1}}, {{c = k + 2}}.",
            "For no real roots, require {{Δ < 0}}: {{(k - 1)^2 - 4(1)(k + 2) < 0}}.",
            "Expand and simplify: {{k^2 - 2k + 1 - 4k - 8 < 0 => k^2 - 6k - 7 < 0}}.",
            "Factorise the quadratic in {{k}}: {{(k - 7)(k + 1) < 0}}.",
            "Since the parabola in {{k}} opens upward, it is negative strictly between its roots: {{-1 < k < 7}}.",
          ],
          answer: "{{-1 < k < 7}}",
          yourTurn: {
            question: "Find the value of {{k}} for which {{2x^2 - 12x + k = 0}} has exactly one repeated real root.",
            answer: { type: "number", value: 18 },
            solution: "Set {{Δ = (-12)^2 - 4(2)(k) = 0 => 144 - 8k = 0 => k = 18}}.",
          },
        },
        {
          title: "Linear Rational Features & Hidden-Quadratic Exponential Equation",
          problem:
            "(a) State the asymptotes and range of {{f(x) = (4x - 5)/(2x + 6)}}. (b) Solve analytically {{5e^(2x) - 13e^x - 6 = 0}}.",
          steps: [
            "(a) Vertical asymptote from denominator: {{2x + 6 = 0 => x = -3}}.",
            "(a) Horizontal asymptote from leading coefficients: {{y = 4/2 = 2}}; hence range is {{y ∈ ℝ, y != 2}}.",
            "(b) Substitute {{u = e^x}} (noting {{u > 0}}): {{5u^2 - 13u - 6 = 0}}.",
            "(b) Factorise: {{(5u + 2)(u - 3) = 0 => u = -2/5}} or {{u = 3}}.",
            "(b) Since {{e^x > 0}} for all real {{x}}, reject {{u = -2/5}}. Thus {{e^x = 3 => x = ln 3}}.",
          ],
          answer: "(a) VA {{x = -3}}, HA {{y = 2}}, range {{y != 2}}; (b) {{x = ln 3}}",
          yourTurn: {
            question: "Find the value {{k}} of the horizontal asymptote {{y = k}} of {{f(x) = (6x - 1)/(3 - 2x)}}.",
            answer: { type: "number", value: -3 },
            solution: "Write the denominator in descending powers of {{x}}: {{(6x - 1)/(-2x + 3)}}. Leading-coefficient ratio is {{6/(-2) = -3}}.",
          },
        },
      ],
      keyPoints: [
        "A quadratic {{ax^2 + bx + c}} is strictly positive for all {{x ∈ ℝ}} if and only if **both** {{a > 0}} AND {{Δ < 0}} (do not forget the {{a > 0}} condition when {{a}} depends on a parameter!).",
        "Watch the term order in rational functions: in {{(6x - 1)/(3 - 2x)}}, the {{x}}-coefficient in the denominator is {{-2}}, not {{3}}.",
        "Always check domain/positivity constraints after solving disguised quadratics: {{e^x > 0}} always, and {{log_a(x)}} requires {{x > 0}}.",
        "Remember: {{e^x}} has a **horizontal** asymptote {{y = 0}}, while its inverse {{ln x}} has a **vertical** asymptote {{x = 0}}.",
      ],
      whyItWorks:
        "Completing the square turns {{ax^2 + bx + c}} into {{a(x + b/(2a))^2 - (b^2 - 4ac)/(4a)}}. Because a square is always non-negative, the minimum (or maximum) occurs at {{x = -b/(2a)}} and has height {{-Δ/(4a)}} — which simultaneously explains the axis of symmetry, the quadratic formula, and why the sign of {{Δ}} determines whether the vertex crosses the x-axis!",
      strategies: [
        "When a parameter {{k}} appears as the leading coefficient of {{kx^2 + bx + c = 0}}, ALWAYS test the degenerate linear case {{k = 0}} separately!",
        "Sketch a quick parabola or sign line before writing the final interval of any quadratic inequality.",
        "For exponential decay models {{T(t) = T_0 + A e^(-kt)}}, read off the long-term equilibrium immediately as the horizontal asymptote {{T = T_0}}.",
      ],
      thinkDeeper:
        "Can a rational function {{y = (ax + b)/(cx + d)}} ever cross its own horizontal asymptote? Prove algebraically that it cannot (provided {{ad != bc}}), then ask: what about higher-degree HL rational functions like {{(x + 2)/(x^2 + 1)}}?",
    },

    // =========================================================================
    // SECTION 3: HL — Polynomials, Factor/Remainder, Vieta & Oblique Asymptotes
    // =========================================================================
    {
      id: "polynomials-vieta-rationals-hl",
      heading: "[HL] Polynomials, Factor/Remainder Theorems, Vieta & Oblique Asymptotes",
      level: "HL",
      discovery: {
        problem:
          "Suppose {{P(x) = 2x^3 - 7x^2 + 5x + 6}} has three roots {{α, β, γ}}. Can you find {{α + β + γ}} and {{αβγ}} *without* finding a single root? What about {{1/α + 1/β + 1/γ}}?",
        idea:
          "Compare {{2x^3 - 7x^2 + 5x + 6 = 2(x - α)(x - β)(x - γ) = 2[x^3 - (α + β + γ)x^2 + (αβ + βγ + γα)x - αβγ]}}. Matching coefficients gives {{α + β + γ = 7/2}}, {{αβ + βγ + γα = 5/2}}, and {{αβγ = -3}} instantly! Even better, {{1/α + 1/β + 1/γ = (αβ + βγ + γα)/(αβγ) = (5/2)/(-3) = -5/6}}.",
      },
      body: `### Polynomial Division, Remainder & Factor Theorems
Dividing a polynomial {{P(x)}} by a divisor {{D(x)}} yields a unique quotient {{Q(x)}} and remainder {{R(x)}} with {{deg(R) < deg(D)}}:
    {{P(x) = D(x) Q(x) + R(x)}}
- **Remainder Theorem:** When {{P(x)}} is divided by {{(ax - b)}}, the remainder is {{P(b/a)}}.
- **Factor Theorem:** {{(ax - b)}} is a factor of {{P(x)}} if and only if {{P(b/a) = 0}}.
- **Complex Conjugate Root Theorem:** If {{P(x)}} has **real coefficients** and {{z = p + qi}} ({{q != 0}}) is a root, then its conjugate {{z* = p - qi}} is also a root, giving the real quadratic factor {{(x - z)(x - z*) = x^2 - 2px + (p^2 + q^2)}}.

### Vieta's Formulas (Sum & Product of Roots)
For any degree-{{n}} polynomial {{a_n x^n + a_(n-1) x^(n-1) + ... + a_1 x + a_0 = 0}} ({{a_n != 0}}) with roots {{r_1, r_2, ..., r_n}}:
- **Sum of roots:** {{r_1 + r_2 + ... + r_n = -a_(n-1)/a_n}}
- **Product of roots:** {{r_1 r_2 ... r_n = (-1)^n a_0/a_n}}
- For a cubic {{ax^3 + bx^2 + cx + d = 0}}: {{Σα = -b/a}}, {{Σαβ = c/a}}, and {{αβγ = -d/a}}.
- Classic symmetric identities: {{α^2 + β^2 = (α + β)^2 - 2αβ}} and {{α^2 + β^2 + γ^2 = (Σα)^2 - 2Σαβ}}.

### Higher Rational Functions & Oblique Asymptotes
IB Maths AA HL investigates two families beyond linear rationals:

1. **Linear over Quadratic** {{f(x) = (ax + b)/(cx^2 + dx + e)}}:
   - Degree of numerator < degree of denominator ⇒ **horizontal asymptote** is always {{y = 0}} (note: the curve *can* cross {{y = 0}} at {{x = -b/a}}!).
   - Vertical asymptotes occur at real zeros of {{cx^2 + dx + e = 0}} (0, 1, or 2 vertical asymptotes depending on the denominator's discriminant!).

2. **Quadratic over Linear** {{f(x) = (ax^2 + bx + c)/(dx + e)}} (where {{dx + e}} is not a factor of the numerator):
   - Perform polynomial division to write:
     {{f(x) = mx + k + R/(dx + e)}} ({{R != 0}})
   - As {{|x| -> ∞}}, {{R/(dx + e) -> 0}}, so the graph approaches the slanted **oblique asymptote** {{y = mx + k}} (alongside the vertical asymptote {{x = -e/d}}).
   - **Range without calculus (Discriminant Method):** Rearrange {{y = (ax^2 + bx + c)/(dx + e)}} into a quadratic in {{x}} whose coefficients depend on {{y}}, then enforce {{Δ_x(y) >= 0}} so real {{x}}-values exist!`,
      diagram: SVG_OBLIQUE_ASYMPTOTE,
      diagramCaption:
        "y = (x² − 2x + 2)/(x − 1) = x − 1 + 1/(x − 1) approaches vertical asymptote x = 1 and oblique asymptote y = x − 1, leaving a forbidden gap −2 < y < 2 in the range.",
      workedExamples: [
        {
          title: "Factor/Remainder Theorems & Vieta's Root Formulas",
          problem:
            "The cubic {{P(x) = 2x^3 + ax^2 - 5x + b}} has {{(x - 2)}} as a factor and leaves remainder {{-12}} when divided by {{(x + 1)}}. Find {{a}} and {{b}}, and hence state the sum and product of all three roots of {{P(x) = 0}}.",
          steps: [
            "By the Factor Theorem, {{P(2) = 0}}: {{2(8) + 4a - 10 + b = 0 => 4a + b = -6}}.",
            "By the Remainder Theorem, {{P(-1) = -12}}: {{2(-1) + a - 5(-1) + b = -12 => a + b = -15}}.",
            "Subtract the second equation from the first: {{3a = 9 => a = 3}}, and hence {{b = -15 - 3 = -18}}.",
            "So {{P(x) = 2x^3 + 3x^2 - 5x - 18}}.",
            "By Vieta's formulas: sum of roots {{= -a_2/a_3 = -3/2}}, and product of roots {{= (-1)^3 a_0/a_3 = -(-18)/2 = 9}}.",
          ],
          answer: "{{a = 3, b = -18}}; sum of roots {{= -3/2}}, product of roots {{= 9}}",
          yourTurn: {
            question:
              "The cubic equation {{3x^3 - 12x^2 + 7x + 15 = 0}} has roots {{α, β, γ}}. Find the exact value of {{(α + β + γ) + αβγ}}.",
            answer: { type: "number", value: -1 },
            solution: "By Vieta: {{α + β + γ = -(-12)/3 = 4}} and {{αβγ = -15/3 = -5}}, so the total is {{4 + (-5) = -1}}.",
          },
        },
        {
          title: "Oblique Asymptote & Discriminant Method for Range",
          problem:
            "Consider {{f(x) = (x^2 - 3x + 6)/(x - 1)}} ({{x != 1}}). Find the equations of all asymptotes and determine the exact range of {{f}} analytically.",
          steps: [
            "Vertical asymptote: {{x - 1 = 0 => x = 1}}.",
            "Divide {{x^2 - 3x + 6}} by {{(x - 1)}}: {{x^2 - 3x + 6 = (x - 2)(x - 1) + 4}}, so {{f(x) = x - 2 + 4/(x - 1)}}.",
            "As {{|x| -> ∞}}, {{4/(x - 1) -> 0}}, giving the oblique asymptote {{y = x - 2}}.",
            "For the range, set {{y = (x^2 - 3x + 6)/(x - 1)}} and multiply by {{(x - 1)}}: {{x^2 - (3 + y)x + (6 + y) = 0}}.",
            "Real {{x}} exists iff {{Δ >= 0}}: {{(3 + y)^2 - 4(6 + y) >= 0 => y^2 + 2y - 15 >= 0 => (y + 5)(y - 3) >= 0}}.",
            "Therefore the range is {{y <= -5}} or {{y >= 3}}.",
          ],
          answer: "VA {{x = 1}}, oblique asymptote {{y = x - 2}}; range {{y <= -5}} or {{y >= 3}}",
          yourTurn: {
            question:
              "Find the oblique asymptote {{y = mx + c}} of {{g(x) = (3x^2 + 2x - 7)/(x + 2)}}. Enter the expression {{mx + c}} (e.g. `2x + 1`).",
            answer: { type: "expression", expr: "3x - 4", form: "simplified", display: "{{y = 3x - 4}}" },
            solution: "Long division gives {{3x^2 + 2x - 7 = (3x - 4)(x + 2) + 1}}, so the oblique asymptote is {{y = 3x - 4}}.",
          },
        },
      ],
      keyPoints: [
        "Always check the alternating sign {{(-1)^n}} in Vieta's product of roots: positive {{+c/a}} for quadratics (even {{n = 2}}), negative {{-d/a}} for cubics (odd {{n = 3}}), positive {{+e/a}} for quartics (even {{n = 4}}).",
        "In the Remainder Theorem, remember that a missing power of {{x}} (e.g. no {{x^2}} term) has coefficient {{0}} — critical in Vieta's sum of roots too!",
        "If polynomial division of {{(ax^2 + bx + c)/(dx + e)}} leaves remainder {{R = 0}}, there is NO vertical or oblique asymptote — the graph is a straight line with a **removable hole** at {{x = -e/d}}.",
        "When dividing a polynomial by a quadratic {{(x - r_1)(x - r_2)}}, write the remainder as a linear expression {{Ax + B}}, not a constant!",
      ],
      whyItWorks:
        "Why does the Remainder Theorem work so effortlessly? Write {{P(x) = (ax - b)Q(x) + R}}, where {{R}} is a constant because its degree is strictly less than {{deg(ax - b) = 1}}. Substituting {{x = b/a}} kills the unknown quotient {{Q(x)}} completely, leaving {{P(b/a) = 0 · Q(b/a) + R = R}}.",
      strategies: [
        "When given one complex root {{p + qi}} of a real polynomial, immediately form the real quadratic factor {{x^2 - 2px + (p^2 + q^2)}} and divide it out rather than expanding with {{i}}.",
        "For oblique asymptotes, verify your quotient {{(mx + k)}} in two seconds by multiplying {{(mx + k)(dx + e) + R}} back out.",
        "The discriminant range method works on BOTH {{(ax^2 + bx + c)/(dx + e)}} and {{(ax + b)/(cx^2 + dx + e)}} — watch for the special case {{y = 0}} in linear-over-quadratic curves!",
      ],
      thinkDeeper:
        "For {{f(x) = (x^2 - 3x + 6)/(x - 1)}}, notice that the two turning points occur at {{(3, 3)}} and {{(-1, -5)}}. Find the midpoint of those two turning points and compare it with the intersection of the vertical and oblique asymptotes! Every quadratic-over-linear curve has point symmetry about the intersection of its asymptotes.",
    },

    // =========================================================================
    // SECTION 4: HL — Odd/Even, Restricted Inverses, Modulus & Reciprocal Graphs
    // =========================================================================
    {
      id: "modulus-reciprocal-even-odd-hl",
      heading: "[HL] Odd/Even Functions, Restricted Inverses, Modulus & Reciprocal Graphs",
      level: "HL",
      discovery: {
        problem:
          "Take {{f(x) = x^2 - 2x - 3}}. Compare the two graphs {{y = |f(x)|}} and {{y = f(|x|)}}. How many x-intercepts does each have, and where are the sharp corners (cusps) located?",
        idea:
          "{{f(x) = (x - 3)(x + 1)}} has roots at {{x = -1}} and {{x = 3}}. In {{y = |f(x)|}}, the negative loop between {{-1}} and {{3}} flips above the x-axis, keeping **both roots** ({{-1, 3}}) as sharp corners. In {{y = f(|x|)}}, the negative-x side is erased and replaced by a mirror of {{x >= 0}}, so the root at {{-1}} disappears and {{x = 3}} mirrors to {{-3}} — giving symmetric roots at {{x = +-3}} and a sharp corner on the y-axis at {{(0, -3)}}!",
      },
      body: `### Odd, Even & Self-Inverse Functions
A function on a symmetric domain (whenever {{x}} is in the domain, so is {{-x}}) is classified by testing {{f(-x)}}:
- **Even function:** {{f(-x) = f(x)}} for all {{x}} ⇒ **reflective symmetry in the y-axis** (e.g. {{x^2, cos x, |x|}}).
- **Odd function:** {{f(-x) = -f(x)}} for all {{x}} ⇒ **{{180°}} rotational symmetry about the origin** (e.g. {{x^3, sin x, 1/x}}). If {{0}} is in the domain of an odd function, then {{f(0) = 0}}.
- **Neither:** most functions (e.g. {{e^x}}, {{x^2 + x}}) satisfy neither identity.

A function is **self-inverse** if {{f(x) = f^(-1)(x)}} (equivalently {{f(f(x)) = x}} on its domain), meaning its graph is symmetric across {{y = x}}. For a linear rational {{f(x) = (ax + b)/(cx + d)}} ({{ad != bc}}), it is self-inverse if and only if {{a + d = 0}} (so the vertical and horizontal asymptotes satisfy {{x = -d/c = a/c = y}}!).

### Restricted-Domain Inverses
Many-to-one functions like quadratics or trig functions fail the horizontal line test on {{ℝ}}, so we restrict their domain to a **monotonic (strictly increasing or strictly decreasing)** interval — usually stopping at a turning point. When solving {{y = a(x - h)^2 + k}} for {{x}}, the restricted domain dictates the sign of the square root:
- If domain is {{x >= h}}, choose {{+sqrt(...)}}; if domain is {{x <= h}}, choose {{-sqrt(...)}}.

### Non-Linear Graph Transformations (AHL 2.16)
Given the graph of {{y = f(x)}}, master these four HL sketching recipes:

| Transformation | Geometric Action | Key Invariant / Critical Features |
| --- | --- | --- |
| {{y = |f(x)|}} | Keep {{f(x) >= 0}}; reflect {{f(x) < 0}} in x-axis | Zeros become sharp corners; negative minima become positive maxima |
| {{y = f(|x|)}} | Erase {{x < 0}}; reflect {{x >= 0}} in y-axis | Always **even**; y-intercept fixed; cusp on y-axis unless {{f'(0) = 0}} |
| {{y = 1/f(x)}} | Take reciprocal of every y-value | Zeros ↔ VAs; HA {{y = c != 0}} → {{y = 1/c}}; {{f(x) = +-1}} invariant; local max {{(a, b)}} ↔ local min {{(a, 1/b)}} (same sign!) |
| {{y = [f(x)]^2}} | Square every y-value (always {{>= 0}}) | {{f(x) = 0, 1}} invariant; zeros become tangent minima; values in {{(0, 1)}} shrink, values {{> 1}} grow |

### Solving Rational, Polynomial & Modulus Inequalities
- **Rational inequalities** {{P(x)/Q(x) >= R(x)}}: **NEVER multiply both sides by a variable denominator** (its sign can flip!). Instead move everything to one side, combine into a single fraction {{N(x)/D(x) >= 0}}, find all zeros of {{N}} and {{D}}, and build a **sign chart** (always excluding zeros of {{D}}!).
- **Modulus equations & inequalities**: use {{|A| < B <=> -B < A < B}} (requiring {{B > 0}}), {{|A| > B <=> A < -B}} or {{A > B}}, or square both sides when **both sides are guaranteed non-negative** ({{|A| < |B| <=> A^2 < B^2}}). Always test candidate solutions in the original equation!`,
      diagram: SVG_MODULUS_RECIPROCAL,
      diagramCaption:
        "How |f(x)|, f(|x|), and 1/f(x) transform the same parent curve f(x) = ½(x − 1)² − 2 (roots at x = −1 and x = 3).",
      workedExamples: [
        {
          title: "Parity Proof & Restricted-Domain Inverse",
          problem:
            "(a) Determine algebraically whether {{f(x) = x^3/(x^2 + 4)}} is even, odd, or neither. (b) Find the largest domain of the form {{x >= k}} on which {{g(x) = x^2 - 6x + 5}} has an inverse, and find {{g^(-1)(x)}} with its domain.",
          steps: [
            "(a) Replace {{x}} with {{-x}}: {{f(-x) = (-x)^3/((-x)^2 + 4) = -x^3/(x^2 + 4) = -f(x)}}. Thus {{f}} is **odd**.",
            "(b) Complete the square: {{g(x) = (x - 3)^2 - 4}}, which has its vertex at {{(3, -4)}}.",
            "(b) {{g}} is strictly increasing for {{x >= 3}}, so the largest domain of the form {{x >= k}} is {{x >= 3}} (giving range {{y >= -4}}).",
            "(b) Swap {{x}} and {{y}}: {{x = (y - 3)^2 - 4 => (y - 3)^2 = x + 4 => y - 3 = +-sqrt(x + 4)}}.",
            "(b) Because the range of {{g^(-1)}} must match the restricted domain {{y >= 3}}, select the **positive** root: {{g^(-1)(x) = 3 + sqrt(x + 4)}} for {{x >= -4}}.",
          ],
          answer: "(a) Odd; (b) {{k = 3}}, {{g^(-1)(x) = 3 + sqrt(x + 4)}} for {{x >= -4}}",
          yourTurn: {
            question:
              "The function {{f(x) = (x + 2)^2 - 7}} is restricted to {{x <= k}} so that {{f^(-1)}} exists on the largest possible left-hand domain. State the value of {{k}}.",
            answer: { type: "number", value: -2 },
            solution: "The vertex is at {{x = -2}}, so {{f}} is strictly decreasing on {{x <= -2}}; thus {{k = -2}}.",
          },
        },
        {
          title: "Rational & Modulus Inequalities Analytically",
          problem:
            "Solve analytically: (a) {{(2x - 1)/(x + 3) > 1}}, and (b) {{|2x - 5| < x + 1}}.",
          steps: [
            "(a) Subtract {{1}} from both sides (do NOT multiply by {{x + 3}}): {{(2x - 1)/(x + 3) - (x + 3)/(x + 3) > 0 => (x - 4)/(x + 3) > 0}}.",
            "(a) Critical values are {{x = -3}} (excluded) and {{x = 4}}. Testing the three intervals gives positive quotient for {{x < -3}} or {{x > 4}}.",
            "(b) For {{|2x - 5| < x + 1}}, we require {{x + 1 > 0}} (i.e. {{x > -1}}) and {{-(x + 1) < 2x - 5 < x + 1}}.",
            "(b) Left inequality: {{-x - 1 < 2x - 5 => 4 < 3x => x > 4/3}}.",
            "(b) Right inequality: {{2x - 5 < x + 1 => x < 6}}. Combining with {{x > -1}} yields {{4/3 < x < 6}}.",
          ],
          answer: "(a) {{x < -3}} or {{x > 4}}; (b) {{4/3 < x < 6}}",
          yourTurn: {
            question: "Solve {{|3x - 6| = x + 2}} and enter both solutions as a comma-separated list.",
            answer: { type: "list", values: [1, 4], ordered: false, display: "1, 4" },
            solution:
              "Case 1: {{3x - 6 = x + 2 => x = 4}} (check: {{|6| = 6}}). Case 2: {{3x - 6 = -(x + 2) => 4x = 4 => x = 1}} (check: {{|-3| = 3}}). Both satisfy {{x + 2 >= 0}}.",
          },
        },
      ],
      keyPoints: [
        "To prove a function is even or odd, substitute {{-x}} algebraically for ALL {{x}} — checking one number like {{x = 2}} can only *disprove* parity, never prove it!",
        "When sketching {{y = 1/f(x)}}, remember: sign never changes! A negative minimum at {{(a, -2)}} becomes a negative **maximum** at {{(a, -1/2)}}.",
        "When sketching {{y = [f(x)]^2}}, any simple x-intercept {{(r, 0)}} of {{f}} becomes a smooth **tangent minimum** at {{(r, 0)}} (not a sharp corner like {{|f(x)|}}!).",
        "In {{|A| = B}} (where {{B}} depends on {{x}}), always verify {{B >= 0}} — squaring can introduce extraneous roots where {{B < 0}}.",
      ],
      whyItWorks:
        "Why does a local minimum of {{f}} (say {{f(a) = 2}}) turn into a local maximum of {{1/f}} at {{1/2}}? Because the reciprocal map {{t -> 1/t}} is strictly decreasing on {{(0, ∞)}} and also strictly decreasing on {{(-∞, 0)}}. Reversing order flips valleys into peaks and peaks into valleys, while leaving the sign untouched.",
      strategies: [
        "When asked to sketch {{y = 1/f(x)}}, plot features in a strict checklist: (1) VAs at zeros of {{f}}, (2) zeros at VAs of {{f}}, (3) invariant points where {{y = +-1}}, (4) reciprocated extrema, (5) horizontal asymptotes.",
        "For modulus inequalities with two absolute values like {{|2x - 1| <= |x + 4|}}, squaring both sides is completely valid because both sides are non-negative: {{(2x - 1)^2 - (x + 4)^2 <= 0}}, then factor via difference of squares!",
        "Check every rational inequality answer by substituting one quick test number inside each interval.",
      ],
      thinkDeeper:
        "Show that *every* function {{f(x)}} defined on {{ℝ}} can be decomposed uniquely as the sum of an even function and an odd function: {{f(x) = (f(x) + f(-x))/2 + (f(x) - f(-x))/2}}. Try it on {{f(x) = e^x}} — you just invented the hyperbolic functions {{cosh x}} and {{sinh x}}!",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "What test checks whether a relation is a function, and what test checks whether a function has an inverse?",
        back: "Vertical line test ⇒ function (one output per input). Horizontal line test ⇒ one-to-one (injective), so an inverse function {{f^(-1)}} exists.",
        level: "SL",
      },
      {
        front: "How are the domain, range, and graph of {{f^(-1)}} related to {{f}}?",
        back: "Domain({{f^(-1)}}) = Range({{f}}), Range({{f^(-1)}}) = Domain({{f}}), and the graph of {{y = f^(-1)(x)}} is the reflection of {{y = f(x)}} in the line {{y = x}}.",
        level: "SL",
      },
      {
        front: "What is the geometric effect of replacing {{f(x)}} by {{f(bx)}} vs {{a f(x)}}?",
        back: "{{a f(x)}} stretches vertically by scale factor {{|a|}} (reflecting in x-axis if {{a < 0}}). {{f(bx)}} stretches horizontally by scale factor {{1/|b|}} (reflecting in y-axis if {{b < 0}}).",
        level: "SL",
      },
      {
        front: "In {{y = f(bx + c)}}, what horizontal sequence maps {{y = f(x)}} to it?",
        back: "Factor as {{f(b(x + c/b))}}: stretch horizontally by {{1/b}}, then translate horizontally by {{-c/b}} (or translate by {{-c}} first, then stretch by {{1/b}}).",
        level: "SL",
      },
      {
        front: "What do the three signs of the quadratic discriminant {{Δ = b^2 - 4ac}} tell you?",
        back: "{{Δ > 0}}: 2 distinct real roots; {{Δ = 0}}: 1 repeated root (tangent to x-axis); {{Δ < 0}}: 0 real roots (no x-intercepts).",
        level: "SL",
      },
      {
        front: "What are the vertical and horizontal asymptotes of {{f(x) = (ax + b)/(cx + d)}} ({{ad != bc, c != 0}})?",
        back: "Vertical asymptote: {{x = -d/c}} (denominator = 0). Horizontal asymptote: {{y = a/c}} (ratio of leading coefficients).",
        level: "SL",
      },
      {
        front: "State the domain, range, and asymptote of {{y = e^x}} and of its inverse {{y = ln x}}.",
        back: "{{y = e^x}}: domain {{ℝ}}, range {{y > 0}}, HA {{y = 0}}. {{y = ln x}}: domain {{x > 0}}, range {{ℝ}}, VA {{x = 0}}.",
        level: "SL",
      },
      {
        front: "When is a quadratic {{ax^2 + bx + c}} strictly positive for ALL real {{x}}?",
        back: "If and only if BOTH {{a > 0}} (opens upward) AND {{Δ = b^2 - 4ac < 0}} (never touches or crosses the x-axis).",
        level: "SL",
      },
      {
        front: "[HL] State the Remainder Theorem and Factor Theorem for a polynomial {{P(x)}}.",
        back: "Dividing {{P(x)}} by {{(ax - b)}} leaves remainder {{P(b/a)}}. Thus {{(ax - b)}} is a factor of {{P(x)}} iff {{P(b/a) = 0}}.",
        level: "HL",
      },
      {
        front: "[HL] State Vieta's formulas for the sum and product of roots of {{a_n x^n + a_(n-1) x^(n-1) + ... + a_0 = 0}}.",
        back: "Sum of roots {{= -a_(n-1)/a_n}}; product of roots {{= (-1)^n a_0/a_n}}.",
        level: "HL",
      },
      {
        front: "[HL] How do you find the oblique asymptote of {{f(x) = (ax^2 + bx + c)/(dx + e)}}?",
        back: "Divide the numerator by the denominator to get {{f(x) = mx + k + R/(dx + e)}}. Provided {{R != 0}}, the oblique asymptote is {{y = mx + k}}.",
        level: "HL",
      },
      {
        front: "[HL] How do you find the exact range of a quadratic-over-linear rational function without calculus?",
        back: "Set {{y = f(x)}}, rearrange into a quadratic in {{x}} with coefficients in {{y}}, and solve the inequality {{Δ_x(y) >= 0}}.",
        level: "HL",
      },
      {
        front: "[HL] State the algebraic definitions and symmetries of even, odd, and self-inverse functions.",
        back: "Even: {{f(-x) = f(x)}} (y-axis symmetry). Odd: {{f(-x) = -f(x)}} ({{180°}} origin rotation). Self-inverse: {{f(f(x)) = x}} (reflection in {{y = x}}).",
        level: "HL",
      },
      {
        front: "[HL] Contrast the graphical effects of {{y = |f(x)|}} and {{y = f(|x|)}}.",
        back: "{{|f(x)|}} keeps {{y >= 0}} and reflects the part below the x-axis upward. {{f(|x|)}} discards {{x < 0}} and mirrors the {{x >= 0}} branch across the y-axis.",
        level: "HL",
      },
      {
        front: "[HL] What happens to zeros, turning points, and points where {{y = +-1}} under {{y = 1/f(x)}}?",
        back: "Zeros become vertical asymptotes; a local max/min at {{(a, b)}} ({{b != 0}}) becomes a local min/max at {{(a, 1/b)}}; points with {{y = +-1}} are invariant.",
        level: "HL",
      },
      {
        front: "[HL] How does {{y = [f(x)]^2}} transform zeros and values between {{0}} and {{1}}?",
        back: "Every simple zero of {{f}} becomes a smooth tangent minimum on the x-axis; values with {{0 < |f(x)| < 1}} shrink closer to {{0}}, while {{|f(x)| > 1}} grow larger.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Perpendicular lines satisfy {{m_1 m_2 = -1}}; parallel lines satisfy {{m_1 = m_2}}.",
      "Composite order reads right-to-left: {{(f ∘ g)(x) = f(g(x))}} applies {{g}} first, then {{f}}.",
      "To evaluate {{f^(-1)(c)}}, solve {{f(x) = c}} — and always restrict domain before inverting a many-to-one function.",
      "Horizontal transformations in {{f(bx + c) = f(b(x + c/b))}} reverse both direction and order relative to vertical transformations.",
      "Quadratic vertex is at {{x = -b/(2a)}}; discriminant {{Δ = b^2 - 4ac}} classifies real roots ({{>0, =0, <0}}).",
      "Linear rational {{(ax + b)/(cx + d)}} has VA {{x = -d/c}} and HA {{y = a/c}} (provided {{ad != bc}}).",
      "[HL] Remainder Theorem {{P(b/a)}} and Vieta's formulas: sum {{= -a_(n-1)/a_n}}, product {{= (-1)^n a_0/a_n}}.",
      "[HL] Complex roots of polynomials with real coefficients always occur in conjugate pairs {{p +- qi}}.",
      "[HL] Oblique asymptotes arise when {{deg(numerator) = deg(denominator) + 1}} and come directly from the polynomial quotient {{y = mx + k}}.",
      "[HL] Never multiply an inequality by an algebraic denominator of unknown sign — move everything to one side and use a sign chart.",
    ],
    misconceptions: [
      {
        wrong: "{{y = f(2x - 6)}} stretches horizontally by {{2}} and shifts right by {{6}}.",
        right: "Factor inside first: {{f(2(x - 3))}}. It stretches horizontally by scale factor {{1/2}} and shifts right by {{3}} (or shifts right by {{6}} first, then stretches by {{1/2}}).",
        level: "SL",
      },
      {
        wrong: "{{f^(-1)(x)}} means the reciprocal {{1/f(x)}}.",
        right: "{{f^(-1)(x)}} is the inverse function (undoing {{f}}), whereas the reciprocal is written {{[f(x)]^(-1) = 1/f(x)}}.",
        level: "SL",
      },
      {
        wrong: "For {{kx^2 + 4x + k > 0}} for all {{x}}, we only need {{Δ < 0}}.",
        right: "If {{k < 0}} and {{Δ < 0}}, the parabola is strictly NEGATIVE everywhere! You must impose BOTH {{k > 0}} AND {{Δ < 0}}.",
        level: "SL",
      },
      {
        wrong: "The horizontal asymptote of {{(3x + 1)/(5 - x)}} is {{y = 3/5}}.",
        right: "Match the {{x}}-coefficients! Rewriting as {{(3x + 1)/(-x + 5)}} gives horizontal asymptote {{y = 3/(-1) = -3}}.",
        level: "SL",
      },
      {
        wrong: "A function can never cross its horizontal or oblique asymptote.",
        right: "Asymptotes describe behaviour as {{|x| -> ∞}}. While a linear rational never crosses its HA, HL rationals like {{(x - 2)/(x^2 + 1)}} cross {{y = 0}} at {{x = 2}}!",
        level: "HL",
      },
      {
        wrong: "For a cubic {{ax^3 + bx^2 + cx + d = 0}}, the product of roots is {{+d/a}}.",
        right: "The sign is {{(-1)^n a_0/a_n}}. For odd degree {{n = 3}}, the product of roots is {{-d/a}}!",
        level: "HL",
      },
      {
        wrong: "To solve {{(2x - 1)/(x + 3) > 1}}, multiply both sides by {{(x + 3)}} to get {{2x - 1 > x + 3}}.",
        right: "When {{x < -3}}, {{(x + 3)}} is negative and reverses the inequality! Subtract {{1}} first to solve {{(x - 4)/(x + 3) > 0}}, which gives {{x < -3}} OR {{x > 4}}.",
        level: "HL",
      },
      {
        wrong: "If {{f(2) = -f(-2)}}, then {{f}} is an odd function.",
        right: "Testing one point never proves parity (e.g. {{f(x) = x^3 + x^2 - 4}} fails elsewhere). You must simplify {{f(-x)}} symbolically for general {{x}}.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing 'shift' or 'squish' instead of IB command terminology: always say 'translation by vector {{(h, k)}}' and 'stretch parallel to the x-/y-axis with scale factor ...'.",
      "Forgetting to state the domain of {{f^(-1)}} or choosing the wrong {{+-}} sign when inverting a restricted quadratic.",
      "Writing {{x = -d/c}} as just a number {{-d/c}} when asked for the *equation* of an asymptote — IB mark schemes require the full equation {{x = ...}} or {{y = ...}}!",
      "Sketching a TI-Nspire CX graph onto paper without labelling intercepts, vertex/extrema, and dashed asymptotes with their equations.",
      "Leaving negative roots of {{u = e^x}} or invalid domain values of {{ln(x - a)}} in final answers after solving a disguised quadratic.",
      "[HL] Assuming the remainder when dividing by a quadratic {{(x - 1)(x + 2)}} is a constant {{R}} instead of linear {{Ax + B}}.",
      "[HL] Drawing sharp corners instead of smooth tangent minima at the x-intercepts of {{y = [f(x)]^2}}.",
      "[HL] Missing the endpoint check {{B >= 0}} after squaring {{|A| = B}} or failing to exclude vertical-asymptote zeros of the denominator in a non-strict rational inequality {{>= 0}}.",
    ],
    mnemonics: [
      {
        topic: "Horizontal vs Vertical Transformations",
        device: "HO-VD (Horizontal Opposite, Vertical Direct)",
        explanation:
          "Inside {{f(...)}} acts **Horizontally & Oppositely** ({{x - 3}} shifts right, {{2x}} halves width). Outside {{f(...)}} acts **Vertically & Directly** ({{+3}} shifts up, {{2f}} doubles height).",
        level: "SL",
      },
      {
        topic: "Inverse Functions",
        device: "SWAP & SOLVE — Domain ↔ Range",
        explanation:
          "Swap {{x}} and {{y}}, solve for {{y}}, and swap the domain and range — matching the reflection in {{y = x}}.",
        level: "SL",
      },
      {
        topic: "Vieta's Signs",
        device: "Minus, Plus, Minus, Plus (from second term down)",
        explanation:
          "After dividing by the leading coefficient {{a_n}}, the symmetric sums alternate signs starting with **minus** for the sum of roots ({{-a_(n-1)/a_n}}) down to {{(-1)^n a_0/a_n}} for the product.",
        level: "HL",
      },
      {
        topic: "Sketching y = 1/f(x)",
        device: "Z-A-I-E (Zeros → Asymptotes, Invariants ±1, Extrema flip)",
        explanation:
          "Run the four-step checklist: **Z**eros become VAs, **A**symptotes become zeros (and HA {{c -> 1/c}}), **I**nvariant points sit at {{y = +-1}}, and **E**xtrema flip max ↔ min at {{(a, 1/b)}}.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Newton's Law of Cooling & Espresso Chemistry",
        emoji: "☕",
        detail:
          "A cup of coffee cools according to {{T(t) = T_room + (T_0 - T_room)e^(-kt)}} — a shifted decaying exponential whose horizontal asymptote {{T = T_room}} is the room temperature it approaches without ever dropping below.",
      },
      {
        title: "Lens Maker & Optics Hyperbola",
        emoji: "🔭",
        detail:
          "The thin-lens equation {{1/u + 1/v = 1/f}} rearranges to the linear rational function {{v(u) = (fu)/(u - f)}}, whose vertical asymptote at {{u = f}} explains why an object placed right at the focal point sends rays to infinity.",
      },
      {
        title: "Cryptography & One-Way Functions",
        emoji: "🔐",
        detail:
          "Modern encryption relies on functions that are strictly one-to-one (invertible with a private key) yet computationally infeasible to invert without the key — directly extending the concept of domain, range, and {{f^(-1)}}.",
      },
      {
        title: "Audio Signal Rectification & Compression",
        emoji: "🎛️",
        detail:
          "Full-wave rectifiers in electronics apply the exact HL transformation {{y = |f(t)|}} to convert alternating sine waves into non-negative pulsating DC voltage.",
      },
      {
        title: "Aerodynamic Drag & Fuel-Cost Oblique Asymptotes",
        emoji: "✈️",
        detail:
          "Total fuel cost per kilometre often combines a fixed overhead {{k/v}} with aerodynamic drag proportional to {{v}}, producing {{C(v) = av + b + k/v}} — a quadratic-over-linear curve with an oblique asymptote and a unique optimal cruising speed!",
      },
    ],
    videos: [
      {
        title: "IB Maths AA: Composite, Inverse Functions & Graph Transformations",
        channel: "Revision Village / OSC IB",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+composite+inverse+functions+transformations",
      },
      {
        title: "IB Maths AA: Quadratic Discriminant, Inequalities & Rational Asymptotes",
        channel: "Sirius Revision / Revision Village",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+discriminant+rational+functions+asymptotes",
      },
      {
        title: "IB Maths AA HL: Factor & Remainder Theorems, Vieta's Formulas & Oblique Asymptotes",
        channel: "OSC / Eddie Woo",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+polynomial+factor+remainder+vieta+oblique+asymptotes",
      },
      {
        title: "IB Maths AA HL: Sketching |f(x)|, f(|x|), 1/f(x) and [f(x)]²",
        channel: "Revision Village / Maths Genie IB",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+modulus+reciprocal+graphs+transformations",
      },
    ],
    formulas: [
      {
        name: "Straight line equations",
        formula: "{{y = mx + c}}, {{y - y_1 = m(x - x_1)}}, {{m = (y_2 - y_1)/(x_2 - x_1)}}",
        note: "Parallel: {{m_1 = m_2}}; perpendicular: {{m_1 m_2 = -1}}.",
        level: "SL",
      },
      {
        name: "Composite & inverse identity",
        formula: "{{(f ∘ g)(x) = f(g(x))}}, {{f(f^(-1)(x)) = f^(-1)(f(x)) = x}}",
        note: "Graph of {{f^(-1)}} reflects {{f}} in {{y = x}}; domain and range swap.",
        level: "SL",
      },
      {
        name: "General graph transformation",
        formula: "{{y = a f(b(x - h)) + k}}",
        note: "Horizontal stretch {{1/b}}, translate right {{h}}; vertical stretch {{a}}, translate up {{k}}.",
        level: "SL",
      },
      {
        name: "Quadratic axis of symmetry & vertex form",
        formula: "{{x = -b/(2a)}}, {{f(x) = a(x - h)^2 + k}}",
        note: "Vertex at {{(h, k)}}; maximum if {{a < 0}}, minimum if {{a > 0}}.",
        level: "SL",
      },
      {
        name: "Quadratic formula & discriminant",
        formula: "{{x = (-b +- sqrt(b^2 - 4ac))/(2a)}}, {{Δ = b^2 - 4ac}}",
        note: "{{Δ > 0}}: 2 real roots; {{Δ = 0}}: 1 repeated root; {{Δ < 0}}: 0 real roots.",
        level: "SL",
      },
      {
        name: "Linear rational asymptotes",
        formula: "{{f(x) = (ax + b)/(cx + d)}} ⇒ VA {{x = -d/c}}, HA {{y = a/c}}",
        note: "Valid for {{c != 0}} and {{ad != bc}}. Self-inverse iff {{a + d = 0}}.",
        level: "SL",
      },
      {
        name: "Exponential–logarithm inverse pair",
        formula: "{{y = a^x <=> x = log_a y}}, {{e^(ln x) = x}}, {{ln(e^x) = x}}",
        note: "{{a > 0, a != 1}}; {{e^x > 0}} for all {{x ∈ ℝ}}.",
        level: "SL",
      },
      {
        name: "Polynomial division, Remainder & Factor Theorems",
        formula: "{{P(x) = (ax - b)Q(x) + P(b/a)}}",
        note: "{{(ax - b)}} is a factor iff {{P(b/a) = 0}}.",
        level: "HL",
      },
      {
        name: "Vieta's formulas (degree n)",
        formula: "Sum of roots {{= -a_(n-1)/a_n}}, Product of roots {{= (-1)^n a_0/a_n}}",
        note: "For cubic {{ax^3 + bx^2 + cx + d = 0}}: {{Σα = -b/a}}, {{Σαβ = c/a}}, {{αβγ = -d/a}}.",
        level: "HL",
      },
      {
        name: "Oblique asymptote of quadratic over linear",
        formula: "{{(ax^2 + bx + c)/(dx + e) = mx + k + R/(dx + e)}} ⇒ OA {{y = mx + k}}",
        note: "Requires {{R != 0}}; vertical asymptote at {{x = -e/d}}.",
        level: "HL",
      },
      {
        name: "Even, odd & self-inverse conditions",
        formula: "Even: {{f(-x) = f(x)}}; Odd: {{f(-x) = -f(x)}}; Self-inverse: {{f(f(x)) = x}}",
        note: "Requires symmetric domain for parity; odd functions satisfy {{f(0) = 0}} when defined at {{0}}.",
        level: "HL",
      },
      {
        name: "Modulus equivalence rules",
        formula: "{{|A| < B <=> -B < A < B}} ({{B > 0}}); {{|A| < |B| <=> A^2 < B^2}}",
        note: "Never multiply rational inequalities by an unknown-sign denominator.",
        level: "HL",
      },
    ],
  },
};
