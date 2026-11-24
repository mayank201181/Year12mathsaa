import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Complex numbers were NOT invented to solve {{x^2 + 1 = 0}} — mathematicians simply shrugged and called that equation impossible! They were forced into existence in 1572 when Rafael Bombelli solved {{x^3 = 15x + 4}}, a cubic with three completely **real** solutions, yet Cardano's cubic formula demanded computing {{sqrt(-121)}} in the middle before all imaginary parts magically cancelled out to give {{x = 4}}!",
  didYouKnow: [
    "Leonhard Euler's identity {{e^(i pi) + 1 = 0}} (a special case of {{e^(i theta) = cos theta + i sin theta}} at {{theta = pi}}) links the five most famous constants in mathematics — {{e}}, {{i}}, {{pi}}, {{1}}, and {{0}} — in one equation.",
    "Abraham de Moivre never actually wrote the formula {{(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)}} in its modern form — Leonhard Euler derived the clean exponential version in 1748 and credited de Moivre's earlier trigonometric work.",
    "Carl Friedrich Gauss proved the **Fundamental Theorem of Algebra** in his 1799 doctoral thesis (at age 22!) — showing that every non-constant complex polynomial has at least one root in ℂ, so no further number system beyond ℂ is needed to solve polynomial equations.",
    "Euclid's proof by contradiction that there are infinitely many primes (c. 300 BCE, *Elements* Book IX, Proposition 20) is over 2,300 years old and remains the gold standard for mathematical elegance.",
    "Careful with Euclid's number {{N = p_1 p_2 … p_k + 1}}! While {{2 · 3 · 5 + 1 = 31}} and {{2 · 3 · 5 · 7 · 11 + 1 = 2311}} are prime, {{2 · 3 · 5 · 7 · 11 · 13 + 1 = 30031 = 59 × 509}} is composite — which is why a watertight IB proof must state that {{N}} *has a prime factor*, NOT that {{N}} itself is prime.",
    "Gaussian elimination was already known in China nearly 1,600 years before Gauss! Chapter 8 (*Fangcheng*) of the Han-dynasty treatise *The Nine Chapters on the Mathematical Art* (c. 179 CE) solves 3×3 and 5×5 linear systems using counting-rod column reduction — including negative numbers.",
  ],
  activities: [
    {
      title: "Argand Rotation & nth-Root Polygon Art",
      emoji: "🧭",
      materials: ["Squared graph paper or whiteboard", "Compass & protractor", "Coloured pens"],
      steps: [
        "Draw real and imaginary axes and plot {{z = 1 + i}}.",
        "Compute {{z^2}}, {{z^3}}, {{z^4}}, {{z^5}}, {{z^6}}, {{z^7}}, {{z^8}} and connect consecutive points to reveal a logarithmic spiral turning by {{45°}} each step.",
        "Now draw a circle of radius 2 and plot the 6th roots of {{w = 64i}} by starting at angle {{(pi/2)/6 = 15°}} and stepping by {{60°}} six times to build a tilted regular hexagon.",
        "Add all six root vectors tip-to-tail visually to confirm they close right back at the origin ({{sum w_k = 0}}).",
      ],
      maths:
        "Seeing multiplication as **scale + rotate** makes De Moivre's theorem and the regular {{n}}-gon symmetry of {{n}}th roots intuitive instead of memorised.",
    },
    {
      title: "Domino Audit — Debug Broken Induction Proofs",
      emoji: "🁣",
      materials: ["Index cards or notebook", "Highlighter"],
      steps: [
        "Write the classic false induction 'proof' that *all horses have the same colour* (base case {{n = 1}} holds; overlap sets of size {{k}}).",
        "Identify the exact value of {{k}} where the inductive step {{P(k) => P(k + 1)}} breaks down ({{k = 1 -> 2}}, where two 1-horse subsets fail to overlap!).",
        "Now test a second broken proof where {{P(k) => P(k + 1)}} genuinely works (e.g., {{2^n = 2^n + 1}}) yet the base case {{P(1)}} fails.",
        "Check off how both the base domino AND the universal {{k -> k + 1}} link are indispensable in every IB HL induction proof.",
      ],
      maths:
        "Debugging flawed proofs builds razor-sharp intuition for why IB marks Base Case, Hypothesis (for *some* {{k}}), Step, and Conclusion independently.",
    },
    {
      title: "3-Card 3D Plane Configurations Lab",
      emoji: "📐",
      materials: ["Three stiff index cards (representing planes Π₁, Π₂, Π₃)", "Scissors (optional slits)"],
      steps: [
        "Hold the three cards to meet at one corner (like two walls and the floor of a room): **Unique solution** ({{det ≠ 0}}, bottom row {{[0, 0, p | q]}} with {{p ≠ 0}}).",
        "Open the three cards like pages of a book around one vertical spine: **Infinitely many solutions (sheaf)** along a parametric line (bottom row {{[0, 0, 0 | 0]}}).",
        "Stand the three cards up as the three side walls of a Toblerone triangular prism: no two planes are parallel, yet no point belongs to all three (**Inconsistent**, bottom row {{[0, 0, 0 | q]}} with {{q ≠ 0}}).",
        "Hold two cards parallel with the third slicing through both: another inconsistent configuration where two normal vectors are scalar multiples.",
      ],
      maths:
        "Physically building the triangular prism and sheaf locks in the 3D meaning behind every possible row-echelon outcome in Topic 1B and Topic 3B.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Multiplication by i (90° Rotation) & 6th Roots of Unity Hexagon",
      svg: `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left panel shows multiplying by i rotates a complex number 90 degrees anticlockwise; right panel shows the six sixth roots of unity forming a regular hexagon on the unit circle">
  <rect x="0" y="0" width="420" height="220" rx="12" fill="var(--surface-2)"/>
  <!-- Left panel: Multiplication by i -->
  <rect x="12" y="12" width="190" height="196" rx="10" fill="var(--surface)" stroke="var(--line)"/>
  <text x="107" y="30" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">Multiplying by i = 90° Rotation</text>
  <line x1="28" y1="120" x2="186" y2="120" stroke="var(--ink-2)" stroke-width="1.2"/>
  <line x1="107" y1="42" x2="107" y2="196" stroke="var(--ink-2)" stroke-width="1.2"/>
  <circle cx="107" cy="120" r="54" fill="none" stroke="var(--line)" stroke-dasharray="4 3"/>
  <!-- z = (45, -30) => SVG (152, 90); iz = (-30, -45) => SVG (77, 75) -->
  <line x1="107" y1="120" x2="152" y2="90" stroke="var(--brand)" stroke-width="2.4"/>
  <circle cx="152" cy="90" r="4.5" fill="var(--brand)"/>
  <line x1="107" y1="120" x2="77" y2="75" stroke="var(--accent)" stroke-width="2.4"/>
  <circle cx="77" cy="75" r="4.5" fill="var(--accent)"/>
  <!-- Right angle symbol -->
  <path d="M 119 112 L 111 100 L 99 108" fill="none" stroke="var(--bad)" stroke-width="1.6"/>
  <text x="157" y="88" font-size="10.5" font-weight="700" fill="var(--brand)">z</text>
  <text x="61" y="70" font-size="10.5" font-weight="700" fill="var(--accent)">iz</text>
  <text x="107" y="190" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">i = e^(iπ/2) rotates by +π/2</text>
  <!-- Right panel: 6th roots of unity -->
  <rect x="218" y="12" width="190" height="196" rx="10" fill="var(--surface)" stroke="var(--line)"/>
  <text x="313" y="30" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)">6th Roots of Unity (z⁶ = 1)</text>
  <line x1="234" y1="118" x2="392" y2="118" stroke="var(--ink-2)" stroke-width="1.2"/>
  <line x1="313" y1="42" x2="313" y2="194" stroke="var(--ink-2)" stroke-width="1.2"/>
  <circle cx="313" cy="118" r="56" fill="none" stroke="var(--brand)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <!-- Hexagon vertices at radius 56: (369,118), (341,69.5), (285,69.5), (257,118), (285,166.5), (341,166.5) -->
  <polygon points="369,118 341,69.5 285,69.5 257,118 285,166.5 341,166.5" fill="var(--brand-soft)" fill-opacity="0.45" stroke="var(--brand)" stroke-width="2"/>
  <circle cx="369" cy="118" r="4" fill="var(--brand)"/>
  <circle cx="341" cy="69.5" r="4" fill="var(--brand)"/>
  <circle cx="285" cy="69.5" r="4" fill="var(--brand)"/>
  <circle cx="257" cy="118" r="4" fill="var(--brand)"/>
  <circle cx="285" cy="166.5" r="4" fill="var(--brand)"/>
  <circle cx="341" cy="166.5" r="4" fill="var(--brand)"/>
  <text x="375" y="121" font-size="9.5" font-weight="700" fill="var(--brand)">1</text>
  <text x="345" y="65" font-size="9.5" font-weight="700" fill="var(--brand)">ω</text>
  <text x="270" y="65" font-size="9.5" font-weight="700" fill="var(--brand)">ω²</text>
  <text x="242" y="121" font-size="9.5" font-weight="700" fill="var(--brand)">−1</text>
  <text x="268" y="177" font-size="9.5" font-weight="700" fill="var(--brand)">ω⁴</text>
  <text x="345" y="177" font-size="9.5" font-weight="700" fill="var(--brand)">ω⁵</text>
  <text x="313" y="192" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">Spacing π/3 • Sum Σ ωᵏ = 0</text>
</svg>`,
      caption:
        "Left: multiplying by i = e^(iπ/2) preserves modulus and turns 90° anticlockwise. Right: the 6th roots of unity trace a regular hexagon of side length 1 on the unit circle.",
    },
    {
      title: "Gaussian Elimination Pivot Staircase",
      svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-step Gaussian elimination flow showing original 3x3 augmented matrix reducing to upper-triangular row-echelon staircase with highlighted decision pivot p and right-hand side q">
  <rect x="0" y="0" width="420" height="180" rx="12" fill="var(--surface-2)"/>
  <!-- Step 1 -->
  <rect x="14" y="26" width="112" height="114" rx="8" fill="var(--surface)" stroke="var(--line)"/>
  <text x="70" y="44" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink)">1. Original [A | d]</text>
  <text x="70" y="70" font-size="11" font-family="monospace" text-anchor="middle" fill="var(--ink)">a₁ b₁ c₁ | d₁</text>
  <text x="70" y="96" font-size="11" font-family="monospace" text-anchor="middle" fill="var(--ink)">a₂ b₂ c₂ | d₂</text>
  <text x="70" y="122" font-size="11" font-family="monospace" text-anchor="middle" fill="var(--ink)">a₃ b₃ c₃ | d₃</text>
  <!-- Arrow 1 -->
  <line x1="129" y1="84" x2="150" y2="84" stroke="var(--brand)" stroke-width="2"/>
  <polygon points="153,84 146,80 146,88" fill="var(--brand)"/>
  <text x="141" y="74" font-size="8.5" text-anchor="middle" fill="var(--brand)">elim x</text>
  <!-- Step 2 -->
  <rect x="155" y="26" width="112" height="114" rx="8" fill="var(--surface)" stroke="var(--line)"/>
  <text x="211" y="44" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--ink)">2. Clear Col 1</text>
  <text x="211" y="70" font-size="11" font-family="monospace" text-anchor="middle" fill="var(--ink)">■  •  • | •</text>
  <text x="211" y="96" font-size="11" font-family="monospace" text-anchor="middle" fill="var(--accent)">0  ■  • | •</text>
  <text x="211" y="122" font-size="11" font-family="monospace" text-anchor="middle" fill="var(--accent)">0  •  • | •</text>
  <!-- Arrow 2 -->
  <line x1="270" y1="84" x2="291" y2="84" stroke="var(--brand)" stroke-width="2"/>
  <polygon points="294,84 287,80 287,88" fill="var(--brand)"/>
  <text x="282" y="74" font-size="8.5" text-anchor="middle" fill="var(--brand)">elim y</text>
  <!-- Step 3 -->
  <rect x="296" y="26" width="112" height="114" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="352" y="44" font-size="10.5" font-weight="700" text-anchor="middle" fill="var(--brand)">3. Echelon Form</text>
  <text x="352" y="70" font-size="11" font-family="monospace" text-anchor="middle" fill="var(--ink)">■  •  • | •</text>
  <text x="352" y="96" font-size="11" font-family="monospace" text-anchor="middle" fill="var(--ink)">0  ■  • | •</text>
  <rect x="304" y="108" width="96" height="22" rx="5" fill="var(--brand-soft)"/>
  <text x="352" y="123" font-size="11" font-family="monospace" font-weight="700" text-anchor="middle" fill="var(--brand)">0  0  p | q</text>
  <text x="210" y="162" font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink-2)">Inspect [0 0 p | q]: p ≠ 0 (Unique) • p = q = 0 (Line) • p = 0, q ≠ 0 (Inconsistent)</text>
</svg>`,
      caption:
        "Column-by-column elimination creates a clean triangular staircase of zeros without ever dividing by a parameter expression.",
    },
  ],
  history: {
    title: "From Bombelli's 'Wild Thought' to Euler's Plane",
    story:
      "In 1545, Girolamo Cardano published a formula for solving depressed cubics {{x^3 = px + q}}, but stumbled when {{(q/2)^2 - (p/3)^3 < 0}} — the famous *casus irreducibilis* where a cubic has three genuine real roots yet Cardano's formula spits out square roots of negative numbers! Twenty-seven years later, Bologna engineer **Rafael Bombelli** had what he called a 'wild thought': what if {{2 + sqrt(-1)}} and {{2 - sqrt(-1)}} obeyed ordinary algebraic rules? Cubing them showed {{(2 + sqrt(-1))^3 = 2 + sqrt(-121)}} and {{(2 - sqrt(-1))^3 = 2 - sqrt(-121)}}, so their sum collapsed cleanly to the real root {{x = (2 + sqrt(-1)) + (2 - sqrt(-1)) = 4}}! Over the next two centuries, **Leonhard Euler** unified imaginary numbers with trigonometry via {{e^(i theta) = cos theta + i sin theta}}, and **Caspar Wessel**, **Jean-Robert Argand**, and **Carl Friedrich Gauss** revealed that complex numbers are not 'imaginary' at all — they are the natural arithmetic of 2D rotations and scalings!",
  },
};
