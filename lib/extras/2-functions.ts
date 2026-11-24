import type { TopicExtras } from "../types.ts";

const SVG_SELF_INVERSE = `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Self-inverse rational function y = (2x + 3)/(x - 2) showing vertical asymptote x = 2 and horizontal asymptote y = 2 intersecting on the mirror line y = x">
  <rect x="0" y="0" width="440" height="260" rx="12" fill="#ffffff" />
  <!-- Origin (175, 165), scale 26px per unit -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="71" y1="20" x2="71" y2="240" /><line x1="97" y1="20" x2="97" y2="240" />
    <line x1="123" y1="20" x2="123" y2="240" /><line x1="149" y1="20" x2="149" y2="240" />
    <line x1="175" y1="20" x2="175" y2="240" /><line x1="201" y1="20" x2="201" y2="240" />
    <line x1="227" y1="20" x2="227" y2="240" /><line x1="253" y1="20" x2="253" y2="240" />
    <line x1="279" y1="20" x2="279" y2="240" /><line x1="305" y1="20" x2="305" y2="240" />
    <line x1="331" y1="20" x2="331" y2="240" /><line x1="357" y1="20" x2="357" y2="240" />
    <line x1="50" y1="35" x2="390" y2="35" /><line x1="50" y1="61" x2="390" y2="61" />
    <line x1="50" y1="87" x2="390" y2="87" /><line x1="50" y1="113" x2="390" y2="113" />
    <line x1="50" y1="139" x2="390" y2="139" /><line x1="50" y1="165" x2="390" y2="165" />
    <line x1="50" y1="191" x2="390" y2="191" /><line x1="50" y1="217" x2="390" y2="217" />
  </g>
  <!-- Axes -->
  <line x1="45" y1="165" x2="395" y2="165" stroke="#334155" stroke-width="1.5" />
  <line x1="175" y1="244" x2="175" y2="18" stroke="#334155" stroke-width="1.5" />
  <text x="399" y="169" font-size="11" font-weight="700" fill="#334155">x</text>
  <text x="181" y="25" font-size="11" font-weight="700" fill="#334155">y</text>
  <!-- Mirror y = x through (175, 165) and (227, 113) -->
  <line x1="100" y1="240" x2="320" y2="20" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="6,4" />
  <text x="323" y="30" font-size="11.5" font-weight="700" fill="#64748b">y = x</text>
  <!-- VA x = 2 -> 227, HA y = 2 -> 113 -->
  <line x1="227" y1="20" x2="227" y2="242" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="5,4" />
  <line x1="45" y1="113" x2="395" y2="113" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="5,4" />
  <text x="232" y="34" font-size="10.5" font-weight="700" fill="#c2410c">VA: x = 2</text>
  <text x="52" y="106" font-size="10.5" font-weight="700" fill="#0d9488">HA: y = 2</text>
  <!-- Centre (2, 2) on y = x -->
  <circle cx="227" cy="113" r="4.5" fill="#7c3aed" />
  <text x="234" y="128" font-size="10.5" font-weight="700" fill="#7c3aed">(2, 2) lies on y = x</text>
  <!-- y = 2 + 7/(x - 2): upper right (3.3, 7.38)->off, (4, 5.5)->(279, 22), (4.65, 4.65)->(296, 44), (6, 3.75)->(331, 67.5), (8, 3.17)->(383, 82.6) -->
  <path d="M 271 20 C 282 48, 306 72, 388 84" fill="none" stroke="#4338ca" stroke-width="2.6" />
  <!-- lower left: (-4, 0.83)->(71, 143.3), (-1.5, 0)->(136, 165), (0, -1.5)->(175, 204), (0.65, -3.19)->(192, 248) -->
  <path d="M 55 139 C 122 152, 162 178, 190 242" fill="none" stroke="#4338ca" stroke-width="2.6" />
  <!-- Symmetric intercepts (-1.5, 0) and (0, -1.5) -->
  <circle cx="136" cy="165" r="3.8" fill="#4338ca" />
  <circle cx="175" cy="204" r="3.8" fill="#4338ca" />
  <text x="86" y="180" font-size="10" font-weight="700" fill="#4338ca">(−1.5, 0)</text>
  <text x="182" y="210" font-size="10" font-weight="700" fill="#4338ca">(0, −1.5)</text>
</svg>`;

const SVG_SQUARE_VS_MODULUS = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of y = |f(x)| with sharp corners at zeros versus y = [f(x)]^2 with smooth tangent minima at zeros and compression between 0 and 1">
  <rect x="0" y="0" width="460" height="230" rx="12" fill="#ffffff" />
  <!-- Origin (230, 175), scale x: 55px/unit, y: 45px/unit; parent f(x) = x - 1? Better f(x) = 0.8(x^2 - 1), roots at +-1, vertex (0, -0.8) -->
  <line x1="35" y1="175" x2="425" y2="175" stroke="#334155" stroke-width="1.5" />
  <line x1="230" y1="215" x2="230" y2="22" stroke="#334155" stroke-width="1.5" />
  <text x="429" y="179" font-size="11" font-weight="700" fill="#334155">x</text>
  <text x="236" y="29" font-size="11" font-weight="700" fill="#334155">y</text>
  <!-- y = 1 reference dashed line: 175 - 45 = 130 -->
  <line x1="40" y1="130" x2="420" y2="130" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4,4" />
  <text x="46" y="124" font-size="10" font-weight="700" fill="#64748b">y = 1 (invariant line)</text>
  <!-- Parent f(x) = 0.8(x^2 - 1) dashed below axis: (-1,0)->(175,175), (0,-0.8)->(230,211), (1,0)->(285,175) -->
  <path d="M 175 175 Q 230 247 285 175" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="4,3" />
  <!-- |f(x)|: (-1.8, 1.79)->(131,94), (-1,0)->(175,175), (0,0.8)->(230,139), (1,0)->(285,175), (1.8,1.79)->(329,94) -->
  <path d="M 131 94 Q 154 142 175 175 Q 230 103 285 175 Q 306 142 329 94" fill="none" stroke="#0d9488" stroke-width="2.5" />
  <!-- [f(x)]^2 = 0.64(x^2 - 1)^2: (-1.8, 3.21)->(131,30), (-1.5,1.0)->(147.5,130), (-1,0)->(175,175) flat tangent!, (0,0.64)->(230,146), (1,0)->(285,175) flat tangent!, (1.5,1.0)->(312.5,130), (1.8,3.21)->(329,30) -->
  <path d="M 134 38 C 145 102, 158 175, 175 175 C 194 175, 208 146, 230 146 C 252 146, 266 175, 285 175 C 302 175, 315 102, 326 38" fill="none" stroke="#4338ca" stroke-width="2.6" />
  <!-- Invariant dots where |f(x)| = 1 -> x = +-1.5 -> (147.5, 130), (312.5, 130), and zeros (175,175), (285,175) -->
  <circle cx="147.5" cy="130" r="3.8" fill="#c2410c" />
  <circle cx="312.5" cy="130" r="3.8" fill="#c2410c" />
  <circle cx="175" cy="175" r="3.8" fill="#c2410c" />
  <circle cx="285" cy="175" r="3.8" fill="#c2410c" />
  <!-- Legend -->
  <text x="336" y="48" font-size="11.5" font-weight="800" fill="#4338ca">y = [f(x)]² (smooth zeros)</text>
  <text x="336" y="102" font-size="11.5" font-weight="800" fill="#0d9488">y = |f(x)| (sharp cusps)</text>
  <text x="230" y="222" font-size="10" font-weight="700" text-anchor="middle" fill="#64748b">Inside 0 &lt; |f(x)| &lt; 1, squaring shrinks values below |f(x)|; above 1 it shoots higher!</text>
</svg>`;

export const extras: TopicExtras = {
  hook:
    "Can a curve be its own mirror image in {{y = x}}, or hide a straight line inside a hyperbola? Functions turn algebraic rules into living geometric symmetries — and once you learn to read asymptotes, discriminants, and root-coefficient laws, you can predict the exact shape of a graph before touching a calculator.",
  didYouKnow: [
    "Every linear rational function {{f(x) = (ax + b)/(cx + d)}} with {{a + d = 0}} is its own inverse — meaning EVERY point on the curve satisfies {{f(f(x)) = x}}, not just the two points sitting on {{y = x}}!",
    "For ANY quadratic-over-linear curve {{f(x) = (ax^2 + bx + c)/(dx + e)}} that has a local maximum and a local minimum, the midpoint of those two turning points is ALWAYS the exact intersection of its vertical and oblique asymptotes.",
    "Strictly decreasing functions can intersect their inverses OFF the line {{y = x}}: for instance {{f(x) = -x^3}} meets {{f^(-1)(x)}} at {{(1, -1)}} and {{(-1, 1)}} in addition to {{(0, 0)}}.",
    "Every single function on {{ℝ}} splits uniquely into an even part plus an odd part: {{e^x = cosh x + sinh x}}, where {{cosh x = (e^x + e^(-x))/2}} is even and {{sinh x = (e^x - e^(-x))/2}} is odd.",
    "Vieta's formulas work for polynomials of ANY degree — even when the roots are complex numbers that cannot be written with radicals (as Niels Henrik Abel proved for degree {{5}} and higher!).",
  ],
  activities: [
    {
      title: "TI-Nspire CX Mystery Transformation Lab",
      emoji: "🎛️",
      materials: ["TI-Nspire CX GDC (or the Live Graph Transformation Sandbox widget)", "Notebook"],
      steps: [
        "Enter {{f_1(x) = x^2 - 2x}} and {{f_2(x) = f_1(b·x + c)}} with interactive sliders for {{b}} and {{c}}.",
        "Set {{b = 2}} and {{c = -6}}. Use Menu → Analyze Graph → Minimum on both curves to record the vertex of {{f_1}} ({{(1, -1)}}) and of {{f_2}}.",
        "Check why the vertex moved from {{x = 1}} to {{x = 3.5}} (not {{x = 7}} and not {{x = 3.5}} via naive order): verify {{2(3.5) - 6 = 1}}!",
        "Repeat with {{f_3(x) = |f_1(x)|}}, {{f_4(x) = f_1(|x|)}}, and {{f_5(x) = 1/f_1(x)}} and sketch all three on one page.",
      ],
      maths: "Connects algebraic substitutions {{bx' + c = x}} directly to observed coordinate shifts and HL non-linear graph deformations.",
    },
    {
      title: "The Self-Inverse Hyperbola Hunt",
      emoji: "🪞",
      materials: ["Squared paper", "Ruler", "Pencil"],
      steps: [
        "Draw the diagonal mirror line {{y = x}} across a coordinate grid.",
        "Pick any point {{(k, k)}} on {{y = x}} (for example {{(2, 2)}}) and draw dashed vertical and horizontal asymptotes {{x = k}} and {{y = k}}.",
        "Write down {{f(x) = k + r/(x - k)}} for your favourite non-zero {{r}} (e.g. {{r = 7}}), combine into a single fraction {{(ax + b)/(cx + d)}}, and compute {{a + d}}.",
        "Swap {{x}} and {{y}} to verify algebraically that {{f^(-1)(x) = f(x)}} — then explain why moving the asymptote centre off {{y = x}} immediately breaks self-inversion!",
      ],
      maths: "Proves geometrically and algebraically why {{a + d = 0}} is the exact necessary and sufficient condition for a linear rational function to be self-inverse.",
    },
    {
      title: "[HL] Depressing a Cubic via Root Shifting",
      emoji: "🧩",
      materials: ["Paper and pen", "Optional GDC for checking"],
      steps: [
        "Take the cubic {{x^3 - 6x^2 + 11x - 6 = 0}} (whose roots are {{1, 2, 3}} and sum to {{6}}).",
        "Compute the mean of its roots {{μ = 6/3 = 2}} and substitute {{x = w + 2}} into the cubic.",
        "Expand and simplify: watch the {{w^2}} term vanish completely, leaving {{w^3 - w = 0}} with symmetric roots {{-1, 0, 1}}!",
        "Generalise: explain via Vieta's sum of roots why substituting {{x = w - b/(3a)}} ALWAYS eliminates the quadratic term from ANY cubic {{ax^3 + bx^2 + cx + d = 0}}.",
      ],
      maths: "Links horizontal graph translation {{f(w + μ)}} with Vieta's sum of roots — the exact historic first step in Cardano's cubic formula.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Self-Inverse Rational Function & Mirror Symmetry",
      svg: SVG_SELF_INVERSE,
      caption:
        "For f(x) = (2x + 3)/(x − 2), a + d = 2 + (−2) = 0, so the asymptotes x = 2 and y = 2 meet on y = x and the entire graph reflects onto itself.",
    },
    {
      title: "[HL] Squaring y = [f(x)]² vs Modulus y = |f(x)|",
      svg: SVG_SQUARE_VS_MODULUS,
      caption:
        "At every simple root of f, |f(x)| forms a sharp V-cusp whereas [f(x)]² forms a smooth tangent minimum; both agree at y = 0 and y = 1.",
    },
  ],
  history: {
    title: "From François Viète's Root Laws to Leonhard Euler's f(x)",
    story:
      "In 1591, French lawyer and codebreaker **François Viète** made a radical leap: he began using letters not just for unknowns, but for *general coefficients* as well. That single breakthrough revealed the hidden symmetric link between a polynomial's roots and its coefficients — the **Vieta formulas** still tested on IB Maths AA HL papers over four centuries later. Yet Viète still thought primarily about isolated equations. It was Swiss mathematician **Leonhard Euler** in **1734** who first wrote the compact notation {{f(x)}}, transforming algebra from a toolbox for finding mystery numbers into the modern language of **functions**: dynamic rules whose domains, inverses, asymptotes, and symmetries unify geometry, calculus, and physics.",
  },
};
