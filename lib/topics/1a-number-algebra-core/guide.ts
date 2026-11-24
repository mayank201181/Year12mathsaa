import type { TopicGuide } from "../../types.ts";

const SVG_SEQ = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 220" role="img" aria-label="Comparison of arithmetic linear growth and geometric convergent decay">
  <rect width="560" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="140" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#1e293b">Arithmetic: uₙ = u₁ + (n − 1)d</text>
  <line x1="36" y1="184" x2="252" y2="184" stroke="#64748b" stroke-width="1.5"/>
  <line x1="36" y1="42" x2="36" y2="184" stroke="#64748b" stroke-width="1.5"/>
  <line x1="58" y1="158" x2="230" y2="62" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/>
  <circle cx="58" cy="158" r="5" fill="#2563eb"/>
  <circle cx="101" cy="134" r="5" fill="#2563eb"/>
  <circle cx="144" cy="110" r="5" fill="#2563eb"/>
  <circle cx="187" cy="86" r="5" fill="#2563eb"/>
  <circle cx="230" cy="62" r="5" fill="#2563eb"/>
  <line x1="101" y1="134" x2="144" y2="134" stroke="#0f766e" stroke-width="1.5"/>
  <line x1="144" y1="134" x2="144" y2="110" stroke="#0f766e" stroke-width="1.5"/>
  <text x="152" y="126" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f766e">+d</text>
  <text x="58" y="200" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">n=1</text>
  <text x="101" y="200" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">2</text>
  <text x="144" y="200" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">3</text>
  <text x="187" y="200" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">4</text>
  <text x="230" y="200" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">5</text>
  <line x1="280" y1="18" x2="280" y2="204" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="420" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#1e293b">Geometric Convergence (|r| &lt; 1)</text>
  <line x1="308" y1="184" x2="532" y2="184" stroke="#64748b" stroke-width="1.5"/>
  <line x1="308" y1="42" x2="308" y2="184" stroke="#64748b" stroke-width="1.5"/>
  <line x1="308" y1="54" x2="532" y2="54" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="528" y="48" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="end" fill="#dc2626">S∞ = u₁ / (1 − r)</text>
  <rect x="322" y="119" width="26" height="65" rx="3" fill="#bfdbfe" stroke="#2563eb"/>
  <rect x="364" y="151" width="26" height="33" rx="3" fill="#bfdbfe" stroke="#2563eb"/>
  <rect x="406" y="168" width="26" height="16" rx="3" fill="#bfdbfe" stroke="#2563eb"/>
  <rect x="448" y="176" width="26" height="8" rx="3" fill="#bfdbfe" stroke="#2563eb"/>
  <rect x="490" y="180" width="26" height="4" rx="3" fill="#bfdbfe" stroke="#2563eb"/>
  <polyline points="335,119 377,86 419,70 461,62 503,58" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  <circle cx="335" cy="119" r="4" fill="#7c3aed"/>
  <circle cx="377" cy="86" r="4" fill="#7c3aed"/>
  <circle cx="419" cy="70" r="4" fill="#7c3aed"/>
  <circle cx="461" cy="62" r="4" fill="#7c3aed"/>
  <circle cx="503" cy="58" r="4" fill="#7c3aed"/>
  <text x="419" y="106" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#7c3aed">Partial sums Sₙ</text>
  <text x="390" y="142" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#2563eb">Terms uₙ (× r)</text>
  <text x="335" y="200" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">n=1</text>
  <text x="377" y="200" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">2</text>
  <text x="419" y="200" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">3</text>
  <text x="461" y="200" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">4</text>
  <text x="503" y="200" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">5</text>
</svg>`;

const SVG_LOGS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 240" role="img" aria-label="Exponential and logarithmic functions as inverse reflections across y equals x">
  <rect width="560" height="240" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <line x1="60" y1="158" x2="292" y2="158" stroke="#64748b" stroke-width="1.5"/>
  <line x1="142" y1="22" x2="142" y2="216" stroke="#64748b" stroke-width="1.5"/>
  <line x1="78" y1="222" x2="278" y2="22" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="5 4"/>
  <text x="274" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">y = x</text>
  <path d="M 68 153 C 102 150, 126 144, 142 132 C 158 120, 174 96, 194 34" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <path d="M 148 214 C 152 184, 158 168, 168 158 C 182 144, 212 126, 282 104" fill="none" stroke="#0f766e" stroke-width="2.5"/>
  <circle cx="142" cy="132" r="4.5" fill="#2563eb"/>
  <circle cx="168" cy="158" r="4.5" fill="#0f766e"/>
  <text x="106" y="128" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#2563eb">(0, 1)</text>
  <text x="174" y="174" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f766e">(1, 0)</text>
  <text x="198" y="48" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb">y = aˣ (a &gt; 1)</text>
  <text x="206" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f766e">y = logₐ(x)</text>
  <text x="148" y="206" font-family="system-ui, sans-serif" font-size="10" fill="#dc2626">Asymptote x = 0</text>
  <rect x="316" y="26" width="222" height="188" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="427" y="50" font-family="system-ui, sans-serif" font-size="12.5" font-weight="700" text-anchor="middle" fill="#1e293b">Core Inverse Equivalence</text>
  <rect x="334" y="64" width="186" height="36" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="427" y="87" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#1d4ed8">aˣ = b  ⇔  x = logₐ(b)</text>
  <text x="334" y="122" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#334155">Domain guards (always check!):</text>
  <text x="334" y="142" font-family="system-ui, sans-serif" font-size="11.5" fill="#0f766e">• Base a &gt; 0 and a ≠ 1</text>
  <text x="334" y="162" font-family="system-ui, sans-serif" font-size="11.5" fill="#0f766e">• Argument b &gt; 0 strictly</text>
  <text x="334" y="182" font-family="system-ui, sans-serif" font-size="11.5" fill="#7c3aed">• Change of base: logₐ(b) = ln b / ln a</text>
  <text x="334" y="202" font-family="system-ui, sans-serif" font-size="11.5" fill="#dc2626">• Reject extraneous roots ≤ 0</text>
</svg>`;

const SVG_BINOMIAL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 225" role="img" aria-label="Pascal's triangle showing Pascal's identity and symmetry of binomial coefficients">
  <rect width="560" height="225" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="165" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#1e293b">Pascal's Triangle &amp; Additive Rule</text>
  <text x="26" y="54" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#64748b">n = 0</text>
  <text x="26" y="88" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#64748b">n = 1</text>
  <text x="26" y="122" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#64748b">n = 2</text>
  <text x="26" y="156" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#64748b">n = 3</text>
  <text x="26" y="190" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#64748b">n = 4</text>
  <circle cx="165" cy="50" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <text x="165" y="54" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">1</text>
  <circle cx="143" cy="84" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <circle cx="187" cy="84" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <text x="143" y="88" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">1</text>
  <text x="187" y="88" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">1</text>
  <circle cx="121" cy="118" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <circle cx="165" cy="118" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <circle cx="209" cy="118" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <text x="121" y="122" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">1</text>
  <text x="165" y="122" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">2</text>
  <text x="209" y="122" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">1</text>
  <circle cx="99" cy="152" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <circle cx="143" cy="152" r="13" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <circle cx="187" cy="152" r="13" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <circle cx="231" cy="152" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <text x="99" y="156" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">1</text>
  <text x="143" y="156" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1d4ed8">3</text>
  <text x="187" y="156" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1d4ed8">3</text>
  <text x="231" y="156" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">1</text>
  <line x1="149" y1="164" x2="160" y2="174" stroke="#2563eb" stroke-width="1.8"/>
  <line x1="181" y1="164" x2="170" y2="174" stroke="#2563eb" stroke-width="1.8"/>
  <circle cx="77" cy="186" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <circle cx="121" cy="186" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <circle cx="165" cy="186" r="13" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="209" cy="186" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <circle cx="253" cy="186" r="13" fill="#ffffff" stroke="#94a3b8"/>
  <text x="77" y="190" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">1</text>
  <text x="121" y="190" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">4</text>
  <text x="165" y="190" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#6d28d9">6</text>
  <text x="209" y="190" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">4</text>
  <text x="253" y="190" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">1</text>
  <rect x="292" y="28" width="248" height="176" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="416" y="50" font-family="system-ui, sans-serif" font-size="12.5" font-weight="700" text-anchor="middle" fill="#1e293b">SL Finite vs [HL] Infinite</text>
  <text x="308" y="76" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#1d4ed8">SL: n ∈ ℕ (terminates at n + 1 terms)</text>
  <text x="308" y="96" font-family="system-ui, sans-serif" font-size="11.5" fill="#334155">Tᵣ₊₁ = C(n, r) · aⁿ⁻ʳ · bʳ</text>
  <line x1="308" y1="112" x2="524" y2="112" stroke="#e2e8f0" stroke-width="1"/>
  <text x="308" y="132" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#7c3aed">[HL]: q ∈ ℚ \ ℕ (infinite series)</text>
  <text x="308" y="152" font-family="system-ui, sans-serif" font-size="11.5" fill="#334155">(1 + x)ᑫ = 1 + qx + q(q−1)x²/2! + …</text>
  <text x="308" y="172" font-family="system-ui, sans-serif" font-size="11.5" fill="#dc2626">Converges strictly for |x| &lt; 1</text>
  <text x="308" y="192" font-family="system-ui, sans-serif" font-size="11" fill="#0f766e">Factor out aᑫ first for (a + bx)ᑫ!</text>
</svg>`;

const SVG_PARTIAL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 220" role="img" aria-label="Decision flowchart for HL partial fractions decomposition templates">
  <rect width="560" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="280" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#1e293b">[HL] Partial Fractions Template Decision Map</text>
  <rect x="148" y="36" width="264" height="34" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="280" y="57" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#92400e">Step 0: Check deg(num) &lt; deg(den) — divide first if not!</text>
  <line x1="280" y1="70" x2="280" y2="86" stroke="#64748b" stroke-width="1.5"/>
  <line x1="94" y1="86" x2="466" y2="86" stroke="#64748b" stroke-width="1.5"/>
  <line x1="94" y1="86" x2="94" y2="100" stroke="#64748b" stroke-width="1.5"/>
  <line x1="280" y1="86" x2="280" y2="100" stroke="#64748b" stroke-width="1.5"/>
  <line x1="466" y1="86" x2="466" y2="100" stroke="#64748b" stroke-width="1.5"/>
  <rect x="18" y="100" width="152" height="102" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <text x="94" y="120" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">Distinct Linear</text>
  <text x="94" y="140" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#334155">(x − a)(x − b)</text>
  <text x="94" y="164" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#0f766e">A/(x−a) + B/(x−b)</text>
  <text x="94" y="188" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">Sub x = a, x = b directly</text>
  <rect x="196" y="100" width="168" height="102" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="280" y="120" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#6d28d9">Repeated Linear</text>
  <text x="280" y="140" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#334155">(x − a)(x − b)²</text>
  <text x="280" y="164" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#0f766e">A/(x−a)+B/(x−b)+C/(x−b)²</text>
  <text x="280" y="188" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">Sub roots + compare x²</text>
  <rect x="386" y="100" width="156" height="102" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
  <text x="464" y="120" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#047857">Irreducible Quadratic</text>
  <text x="464" y="140" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="#334155">(x − a)(x² + c), c &gt; 0</text>
  <text x="464" y="164" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#0f766e">A/(x−a) + (Bx+C)/(x²+c)</text>
  <text x="464" y="188" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" fill="#475569">Linear numerator Bx + C!</text>
</svg>`;

export const guide: TopicGuide = {
  id: "1a-number-algebra-core",
  title: "Topic 1A: Sequences, Series, Exponents, Logs & Binomial",
  strand: "Topic 1: Number & Algebra",
  icon: "∑",
  level: "SL",
  summary:
    "Master arithmetic and geometric sequences, sigma notation, infinite geometric convergence, rational exponents, logarithm laws, algebraic deductive proof, binomial expansions, [HL] counting principles, [HL] generalised rational binomials, and [HL] partial fractions.",
  intro:
    "Topic 1A forms the algebraic backbone of IB Diploma Mathematics: Analysis & Approaches. Everything you do later in calculus, differential equations, and Maclaurin series relies on fluent manipulation of sums, powers, logarithms, binomial coefficients, and partial fractions.\n\n> **FA2029 Alignment Note:** Financial compound-interest, depreciation, and TVM solver applications were removed from the IB Maths AA FA2029 subject brief. Focus your revision cleanly on pure algebraic sequences, convergent series, scientific contexts, exact non-GDC Paper 1 skills, and TI-Nspire CX Paper 2 equation solving.",
  guide: [
    {
      id: "sequences-series-sigma",
      heading: "Standard Form, Arithmetic & Geometric Sequences, Sigma & Infinite Series",
      level: "SL",
      discovery: {
        problem:
          "Suppose a bouncing ball dropped from {{8 m}} rebounds to {{3/4}} of its previous height on every bounce. It bounces infinitely many times in theory — yet its total vertical distance is completely finite. How can adding infinitely many positive numbers give a finite answer?",
        idea:
          "Write out the partial sum {{S_n = u_1 + u_1 r + u_1 r^2 + … + u_1 r^(n-1)}}, multiply the whole line by {{r}}, and subtract! Almost every term telescopes away, leaving {{S_n(1 - r) = u_1(1 - r^n)}}. Whenever {{|r| < 1}}, {{r^n → 0}} as {{n → ∞}}, collapsing the infinite tail cleanly to {{S_∞ = u_1 / (1 - r)}}.",
      },
      body: `### 1. Standard Form (Scientific Notation)
Every positive real number can be written uniquely in **standard form** as {{a * 10^k}}, where **{{1 <= a < 10}}** and **{{k ∈ ℤ}}**.
- Multiplying or dividing in standard form uses index laws: {{(a * 10^m)(b * 10^n) = (ab) * 10^(m+n)}} — always re-normalise if {{ab >= 10}} or {{ab < 1}}.
- On the **TI-Nspire CX**, calculator display \`4.2E-5\` MUST be written in exam papers as **{{4.2 * 10^(-5)}}**, never as \`4.2E-5\`.

### 2. Arithmetic Sequences & Series (Constant Difference {{d}})
An **arithmetic sequence** changes by adding a constant common difference {{d = u_(n+1) - u_n}}:
- **General term:** {{u_n = u_1 + (n - 1)d}}
- **Sum of the first {{n}} terms:** {{S_n = (n/2)(2u_1 + (n - 1)d) = (n/2)(u_1 + u_n)}}
- **Three consecutive terms {{a, b, c}}** are arithmetic if and only if **{{2b = a + c}}** (the arithmetic mean property).

### 3. Geometric Sequences & Series (Constant Ratio {{r}})
A **geometric sequence** changes by multiplying by a constant non-zero common ratio {{r = u_(n+1) / u_n}}:
- **General term:** {{u_n = u_1 r^(n-1)}}
- **Finite sum ({{r != 1}}):** {{S_n = u_1(r^n - 1)/(r - 1) = u_1(1 - r^n)/(1 - r)}}
- **Three consecutive non-zero terms {{a, b, c}}** are geometric if and only if **{{b^2 = ac}}** (beware: solving for {{r}} from {{r^2 = k}} gives TWO possible values, {{±sqrt(k)}}!).

### 4. Sigma Notation & Recovery of {{u_n}} from {{S_n}}
The sum {{∑_(k=m)^n f(k)}} adds {{f(k)}} for every integer from {{k = m}} to {{k = n}}.
- **Term count trap:** From {{k = m}} to {{k = n}}, there are **{{n - m + 1}}** terms, NOT {{n - m}}!
- **Universal recovery identity** (true for *any* sequence, not only arithmetic or geometric):
    {{u_1 = S_1}}   and   {{u_n = S_n - S_(n-1)}}  for {{n >= 2}}

### 5. Convergent Infinite Geometric Series
An infinite geometric series {{∑_(k=1)^∞ u_1 r^(k-1)}} **converges** to a finite limit if and only if **{{|r| < 1}}** (equivalently {{ -1 < r < 1 }}):
    {{S_∞ = u_1 / (1 - r)}}
If {{|r| >= 1}} (with {{u_1 != 0}}), the partial sums do not settle to a finite limit and the series **diverges**.

> **TI-Nspire CX Paper 2 tip:** Use the sigma template (\`∑\`) in the Calculator app to verify finite sums, or define {{S(n)}} and use \`nSolve\` / Graph intersection to find the least integer {{n}} exceeding a threshold.`,
      diagram: SVG_SEQ,
      diagramCaption:
        "Left: an arithmetic sequence grows linearly with constant step +d. Right: a geometric sequence with |r| < 1 has shrinking terms uₙ whose partial sums Sₙ climb asymptotically towards S∞ = u₁/(1 − r).",
      workedExamples: [
        {
          title: "Arithmetic Series & Least n Exceeding a Threshold",
          problem:
            "An arithmetic sequence has {{u_3 = 11}} and {{u_8 = 31}}. Find {{u_1}}, {{d}}, and the least positive integer {{n}} such that {{S_n > 600}}.",
          steps: [
            "Express the two given terms using {{u_n = u_1 + (n - 1)d}}: {{u_1 + 2d = 11}} and {{u_1 + 7d = 31}}.",
            "Subtract the first equation from the second: {{5d = 20 ⇒ d = 4}}.",
            "Substitute back: {{u_1 = 11 - 2(4) = 3}}.",
            "Form the partial sum: {{S_n = (n/2)[2(3) + 4(n - 1)] = (n/2)(4n + 2) = 2n^2 + n}}.",
            "Solve {{2n^2 + n > 600 ⇒ 2n^2 + n - 600 > 0}}. Positive root is {{n = (-1 + sqrt(4801))/4 ≈ 17.07}}.",
            "Check boundary integers: {{S_17 = 17(35) = 595 <= 600}} and {{S_18 = 18(37) = 666 > 600}}.",
          ],
          answer: "{{u_1 = 3}}, {{d = 4}}, and least {{n = 18}}.",
          yourTurn: {
            question: "An arithmetic sequence has {{u_1 = 5}} and {{u_6 = 25}}. Calculate {{S_12}}.",
            answer: { type: "number", value: 324 },
            solution:
              "{{u_6 = u_1 + 5d ⇒ 25 = 5 + 5d ⇒ d = 4}}. Then {{S_12 = (12/2)[2(5) + 11(4)] = 6(10 + 44) = 6 * 54 = 324}}.",
          },
        },
        {
          title: "Alternating Infinite Geometric Series in Sigma Notation",
          problem: "Evaluate the exact sum {{∑_(k=1)^∞ 12(-2/3)^(k-1)}}.",
          steps: [
            "Identify the first term by setting {{k = 1}}: {{u_1 = 12(-2/3)^0 = 12}}.",
            "Identify the common ratio: {{r = -2/3}}.",
            "Check convergence: {{|r| = |-2/3| = 2/3 < 1}}, so the infinite series converges.",
            "Apply {{S_∞ = u_1 / (1 - r) = 12 / (1 - (-2/3)) = 12 / (5/3) = 36/5}}.",
          ],
          answer: "{{36/5}} (or {{7.2}}).",
          yourTurn: {
            question: "Find the exact sum to infinity of the geometric series {{18 + 6 + 2 + …}}.",
            answer: { type: "number", value: 27 },
            solution:
              "{{u_1 = 18}} and {{r = 6/18 = 1/3}}. Since {{|r| < 1}}, {{S_∞ = 18 / (1 - 1/3) = 18 / (2/3) = 27}}.",
          },
        },
        {
          title: "Convergence Interval & Standard Form",
          problem:
            "A geometric series has first term {{2.4 * 10^5}} and common ratio {{r = 2x - 1}}. Find the values of {{x}} for which {{S_∞}} exists, and when {{x = 0.7}}, write {{S_∞}} in standard form.",
          steps: [
            "For convergence, require {{|r| < 1 ⇒ -1 < 2x - 1 < 1}}.",
            "Add {{1}} throughout: {{0 < 2x < 2 ⇒ 0 < x < 1}}.",
            "Substitute {{x = 0.7}}: {{r = 2(0.7) - 1 = 0.4}} (which satisfies {{|r| < 1}}).",
            "Compute {{S_∞ = (2.4 * 10^5) / (1 - 0.4) = (2.4 * 10^5) / 0.6 = 4 * 10^5}}.",
          ],
          answer: "Converges for {{0 < x < 1}}; when {{x = 0.7}}, {{S_∞ = 4 * 10^5}}.",
        },
      ],
      keyPoints: [
        "Standard form {{a * 10^k}} requires {{1 <= a < 10}} and {{k ∈ ℤ}}; never write calculator `E` notation on an IB script.",
        "Always check whether a sequence is arithmetic ({{u_2 - u_1 = u_3 - u_2}}) or geometric ({{u_2/u_1 = u_3/u_2}}) before choosing a formula.",
        "From {{k = m}} to {{k = n}}, the number of summed terms is {{n - m + 1}}.",
        "For ANY series, {{u_n = S_n - S_(n-1)}} ({{n >= 2}}) and {{u_1 = S_1}}.",
        "Infinite geometric sum {{S_∞ = u_1/(1 - r)}} is valid ONLY when {{|r| < 1}} — always state and check this condition explicitly.",
      ],
      whyItWorks:
        "Gauss's pairing trick proves the arithmetic sum formula in two lines: write {{S_n}} forwards and backwards, add column-by-column to get {{n}} identical pairs of {{u_1 + u_n}}, then halve. For geometric sums, multiplying {{S_n}} by {{r}} shifts every power up by one so subtracting {{S_n - r S_n}} annihilates all middle terms, leaving only the head {{u_1}} and the tail {{u_1 r^n}}.",
      strategies: [
        "When given two non-adjacent terms of an AP, subtract them to isolate {{d}} directly; for a GP, divide them to isolate {{r^(m-k)}}.",
        "If an index in sigma notation starts at {{k = 0}} or {{k = 3}}, always write out the first two and last terms explicitly to read off {{u_1}}, {{d}} or {{r}}, and the exact term count.",
        "In a bouncing-ball problem, remember the initial drop happens ONCE while every rebound travels BOTH up and down!",
      ],
      thinkDeeper:
        "Can a sequence be simultaneously arithmetic AND geometric? Solve {{2b = a + c}} together with {{b^2 = ac}} to discover that {{(a - c)^2 = 0}}, forcing every constant sequence ({{d = 0, r = 1}}) — and nothing else!",
    },
    {
      id: "exponents-logarithms-proof",
      heading: "Rational Exponents, Laws of Logarithms & Simple Deductive Proof",
      level: "SL",
      discovery: {
        problem:
          "How can we make sense of {{8^(2/3)}} or solve {{3^x = 50}} without guessing? Why does multiplying two powers turn into ADDING exponents?",
        idea:
          "Logarithms are simply the inverse machine to exponentiation: {{log_a(x)}} asks 'what power of {{a}} produces {{x}}?' Because {{a^p * a^q = a^(p+q)}}, translating products into their exponents automatically turns multiplication into addition, division into subtraction, and powers into scalar multiples!",
      },
      body: `### 1. Integer & Rational Exponents
For {{a > 0}} and rational indices {{p/q}} ({{p ∈ ℤ, q ∈ ℤ^+}}):
- {{a^0 = 1}},   {{a^(-n) = 1 / a^n}},   {{a^(p/q) = (a^(1/q))^p = (root_q(a))^p}}
- Always take the **root first** when evaluating by hand: {{27^(2/3) = (cbrt(27))^2 = 3^2 = 9}}.
- Never distribute powers across sums: {{(a + b)^(1/2) != a^(1/2) + b^(1/2)}}.

### 2. Definition & Laws of Logarithms
For base {{a > 0, a != 1}} and argument {{x > 0}}:
    {{y = log_a(x)  ⇔  a^y = x}}
Special bases: **common logarithm** {{log(x) = log_10(x)}} and **natural logarithm** {{ln(x) = log_e(x)}} (where {{e ≈ 2.71828…}}).

| Law | Identity (for {{x, y > 0}}) | Common Pitfall to Avoid |
| --- | --- | --- |
| Product law | {{log_a(xy) = log_a(x) + log_a(y)}} | Does NOT simplify {{log_a(x + y)}}! |
| Quotient law | {{log_a(x/y) = log_a(x) - log_a(y)}} | NOT {{log_a(x) / log_a(y)}}! |
| Power law | {{log_a(x^k) = k log_a(x)}} | Only applies when {{k}} is on the argument, not {{(log_a x)^k}} |
| Identity / Zero | {{log_a(a) = 1}}, {{log_a(1) = 0}} | {{log_a(0)}} and {{log_a(-2)}} are not defined in {{ℝ}} |
| Inverse cancellation | {{a^(log_a x) = x}}, {{log_a(a^x) = x}} | Bases must match before cancelling |
| Change of base | {{log_a(x) = log_b(x) / log_b(a) = ln(x) / ln(a)}} | Useful when an equation mixes bases like {{log_2}} and {{log_4}} |

### 3. Solving Exponential & Logarithmic Equations
- **Same base:** Rewrite both sides with a common base (e.g. {{8^x = 4^(x+1) ⇒ 2^(3x) = 2^(2x+2) ⇒ x = 2}}).
- **Different bases (Paper 1 exact):** Take {{ln}} (or {{log_10}}) of both sides, bring exponents down, group {{x}} terms, and factorise {{x}} out.
- **Hidden quadratic:** Substitutions like {{u = e^x}} or {{u = 2^x}} turn {{2^(2x) - 5(2^x) + 4 = 0}} into {{u^2 - 5u + 4 = 0}} (remember {{u > 0}} strictly!).
- **Log equations:** Combine into a single logarithm per side, exponentiate, and **ALWAYS check every root against the original domain** (every log argument must stay strictly positive!).
- **TI-Nspire CX (Paper 2):** Graph {{y = LHS}} and {{y = RHS}} and use \`Menu → Analyze Graph → Intersection\`, giving answers to **3 significant figures** unless exact form is requested.

### 4. Simple Deductive Algebraic Proofs
In an IB **"Show that"** or **"Prove that"** question:
- **Start strictly from ONE side** (usually the more complicated LHS) and transform it step-by-step until it equals the RHS — NEVER assume the statement is already true and manipulate both sides simultaneously!
- For **number-theory parity / divisibility proofs**, define integer variables explicitly (e.g. "Let {{n ∈ ℤ}}; then an odd integer is {{2n + 1}}"), expand carefully, and **factor out the target divisor** to conclude cleanly.`,
      diagram: SVG_LOGS,
      diagramCaption:
        "y = logₐ(x) is the reflection of y = aˣ across the line y = x. Swapping domain and range explains why logₐ(x) is strictly defined only for x > 0 and has vertical asymptote x = 0.",
      workedExamples: [
        {
          title: "Logarithmic Equation with Domain Check (Paper 1)",
          problem: "Solve {{log_2(x + 3) + log_2(x - 1) = 5}} for {{x ∈ ℝ}}.",
          steps: [
            "State domain restrictions first: {{x + 3 > 0}} and {{x - 1 > 0}}, so we require {{x > 1}}.",
            "Apply the product law: {{log_2((x + 3)(x - 1)) = 5}}.",
            "Rewrite in exponential form: {{(x + 3)(x - 1) = 2^5 = 32}}.",
            "Expand and rearrange: {{x^2 + 2x - 3 = 32 ⇒ x^2 + 2x - 35 = 0}}.",
            "Factorise: {{(x + 7)(x - 5) = 0 ⇒ x = 5}} or {{x = -7}}.",
            "Check domain: {{x = -7}} fails {{x > 1}} (gives logarithms of negative numbers), so reject {{x = -7}}.",
          ],
          answer: "{{x = 5}}.",
          yourTurn: {
            question: "Solve {{log_3(x + 2) + log_3(x - 4) = 3}} for {{x ∈ ℝ}}.",
            answer: { type: "number", value: 7 },
            solution:
              "Domain requires {{x > 4}}. Combining logs: {{(x + 2)(x - 4) = 3^3 = 27 ⇒ x^2 - 2x - 35 = 0 ⇒ (x - 7)(x + 5) = 0}}. Reject {{x = -5}} since {{x > 4}}, giving {{x = 7}}.",
          },
        },
        {
          title: "Change of Base in a Mixed-Base Equation",
          problem: "Find the exact value of {{x}} satisfying {{log_4(x) + log_2(x) = 9}}.",
          steps: [
            "Notice {{4 = 2^2}}, so convert {{log_4(x)}} to base {{2}}: {{log_4(x) = log_2(x) / log_2(4) = (1/2) log_2(x)}}.",
            "Substitute into the equation: {{(1/2) log_2(x) + log_2(x) = 9 ⇒ (3/2) log_2(x) = 9}}.",
            "Multiply by {{2/3}}: {{log_2(x) = 6}}.",
            "Exponentiate: {{x = 2^6 = 64}} (valid since {{64 > 0}}).",
          ],
          answer: "{{x = 64}}.",
          yourTurn: {
            question: "Evaluate {{log_8(32)}} as an exact fraction in simplest form.",
            answer: { type: "fraction", n: 5, d: 3, simplest: true },
            solution: "Change to base {{2}}: {{log_8(32) = log_2(32) / log_2(8) = 5/3}}.",
          },
        },
        {
          title: "Simple Deductive Algebraic Proof",
          problem:
            "Prove that the sum of the squares of any two consecutive odd integers is always {{2}} more than a multiple of {{8}}.",
          steps: [
            "Let {{n ∈ ℤ}}. Any two consecutive odd integers can be written as {{2n - 1}} and {{2n + 1}}.",
            "Compute the sum of their squares: {{(2n - 1)^2 + (2n + 1)^2 = (4n^2 - 4n + 1) + (4n^2 + 4n + 1)}}.",
            "Collect like terms: {{= 8n^2 + 2}}.",
            "Since {{n ∈ ℤ}}, {{n^2 ∈ ℤ}}, so {{8n^2}} is a multiple of {{8}}.",
            "Therefore {{8n^2 + 2}} is always {{2}} more than a multiple of {{8}}.",
          ],
          answer: "{{(2n - 1)^2 + (2n + 1)^2 = 8n^2 + 2}}, which is {{2}} more than a multiple of {{8}} for all {{n ∈ ℤ}}.",
        },
      ],
      keyPoints: [
        "Every logarithmic law flows directly from index laws via the equivalence {{a^y = x ⇔ y = log_a(x)}}.",
        "Change of base {{log_a(b) = ln(b)/ln(a)}} also yields the useful reciprocal identity {{log_a(b) = 1 / log_b(a)}}.",
        "Always reject solutions that make ANY original logarithm argument {{<= 0}} or any exponential substitution {{a^x <= 0}}.",
        "In deductive proofs, work strictly one-sided (LHS → RHS) or factor explicitly after defining integer variables like {{n ∈ ℤ}}; testing numerical examples NEVER constitutes a proof.",
      ],
      whyItWorks:
        "Let {{p = log_a(x)}} and {{q = log_a(y)}}, so {{x = a^p}} and {{y = a^q}}. Then {{xy = a^p * a^q = a^(p+q)}}, which by definition says {{log_a(xy) = p + q = log_a(x) + log_a(y)}}. Similarly, writing {{b = a^c}} gives {{log_d(b) = c log_d(a)}}, dividing immediately into the change-of-base formula {{c = log_d(b) / log_d(a)}}.",
      strategies: [
        "When an equation contains {{log_a(x)}} and {{log_(a^k)(x)}}, immediately replace {{log_(a^k)(x)}} with {{(1/k) log_a(x)}}.",
        "For symmetric consecutive integers in proofs, choose {{2n - 1, 2n + 1}} (for odds) or {{n - 1, n, n + 1}} so cross-terms cancel cleanly.",
        "To eliminate a stubborn denominator in an exponential equation like {{e^x - 6e^(-x) = 1}}, multiply every term by {{e^x}} to reveal a quadratic in {{e^x}}.",
      ],
      thinkDeeper:
        "Can we prove {{log_2(3)}} is irrational with a 3-line deductive argument? Suppose {{log_2(3) = p/q}} with positive integers {{p, q}}. Then {{2^p = 3^q}} — impossible because the left side is even while the right side is odd!",
    },
    {
      id: "binomial-counting-hl",
      heading: "Binomial Theorem (n ∈ ℕ) & [HL] Counting Principles / Generalised Binomial",
      level: "SL",
      discovery: {
        problem:
          "Expand {{(a + b)^5}} by multiplying five brackets {{(a + b)(a + b)(a + b)(a + b)(a + b)}}. To form an {{a^3 b^2}} term, how many different ways can you pick {{b}} from 2 of the 5 brackets and {{a}} from the remaining 3?",
        idea:
          "Choosing 2 brackets out of 5 to contribute {{b}} is literally the combination count {{5C2 = 10}}! That single combinatorial insight unifies Pascal's triangle, the Binomial Theorem for natural {{n}}, and HL counting principles.",
      },
      body: `### 1. Binomial Coefficients & Pascal's Triangle (SL)
For integers {{0 <= r <= n}}:
    {{nCr = n! / (r!(n - r)!)}}   with {{0! = 1}}, {{nC0 = nCn = 1}}, and symmetry {{nCr = nC(n-r)}}.
- **Pascal's identity:** {{(n-1)C(r-1) + (n-1)Cr = nCr}} builds every row of Pascal's triangle from the row above.

### 2. The Binomial Theorem for {{n ∈ ℕ}} (SL)
    {{(a + b)^n = ∑_(r=0)^n nCr * a^(n-r) * b^r}}
- There are **{{n + 1}}** terms in total.
- **General term (the {{(r+1)}}th term):** {{T_(r+1) = nCr * a^(n-r) * b^r}}.
- **Term independent of {{x}} (constant term):** Combine all powers of {{x}} in {{T_(r+1)}} and set the net exponent of {{x}} equal to {{0}} to find {{r}} (must be an integer with {{0 <= r <= n}}!).
- Keep negative signs **inside** the brackets of {{b}}: in {{(2x - 3)^5}}, use {{b = -3}}, so every odd {{r}} carries a minus sign.

### 3. [HL] Counting Principles: Permutations & Combinations
- **Multiplication principle:** If independent choices have {{m}} and {{n}} options, there are {{m * n}} combined outcomes.
- **Permutations (order matters):** Choosing and arranging {{r}} distinct objects from {{n}}:
    {{nPr = n! / (n - r)!}}
- **Combinations (order does NOT matter):** Selecting a subset of {{r}} objects from {{n}}:
    {{nCr = n! / (r!(n - r)!) = nPr / r!}}
- **Standard HL restriction techniques:**
  1. **Together (Block method):** Glue the required items into one super-item, arrange all items/blocks, then multiply by internal permutations of the block.
  2. **Never together (Complement or Gap method):** For *two* objects, subtract "together" from total: {{Total - Together}}. For *three or more* objects that must all be separated, use the **Gap method** (place the other objects first, then slot the restricted ones into the gaps — complement fails for ≥3 objects because it only prevents ALL 3 being adjacent!).
  3. **"At least one" restrictions:** Almost always faster via **complementary counting**: {{Total - (None)}}.
  4. **Indistinguishable objects:** Arranging {{n}} objects with identical repeats {{p, q, …}} gives {{n! / (p! q! …)}}.

### 4. [HL] Generalised Binomial Expansion for {{q ∈ ℚ}}
When the exponent {{q}} is negative or fractional (not a positive integer), the expansion **never terminates**:
    {{(1 + x)^q = 1 + qx + (q(q - 1)/2!) x^2 + (q(q - 1)(q - 2)/3!) x^3 + …}}
- **Strict validity condition:** Converges if and only if **{{|x| < 1}}**.
- **Crucial first step for {{(a + bx)^q}}:** Always factor out {{a^q}} FIRST so the leading term inside the bracket is **{{1}}**:
    {{(a + bx)^q = a^q (1 + (b/a)x)^q}},   valid for **{{|(b/a)x| < 1 ⇔ |x| < |a/b|}}**.`,
      diagram: SVG_BINOMIAL,
      diagramCaption:
        "Left: Pascal's triangle builds each entry as the sum of the two entries above it. Right: contrast the finite SL expansion (n ∈ ℕ) with the infinite HL rational binomial expansion (valid strictly for |x| < 1).",
      workedExamples: [
        {
          title: "SL — Finding the Term Independent of x",
          problem: "Find the term independent of {{x}} in the expansion of {{(2x^2 - 1/x)^6}}.",
          steps: [
            "Write the general term {{T_(r+1) = 6Cr * (2x^2)^(6-r) * (-x^(-1))^r}}.",
            "Separate the numerical coefficient from the power of {{x}}: {{6Cr * 2^(6-r) * (-1)^r * x^(12 - 2r - r)}}.",
            "Simplify the exponent of {{x}}: {{12 - 3r}}.",
            "For the term independent of {{x}}, set {{12 - 3r = 0 ⇒ r = 4}} (valid since {{0 <= 4 <= 6}}).",
            "Evaluate the coefficient at {{r = 4}}: {{6C4 * 2^2 * (-1)^4 = 15 * 4 * 1 = 60}}.",
          ],
          answer: "{{60}}.",
          yourTurn: {
            question: "Find the coefficient of {{x^3}} in the expansion of {{(2 + 3x)^5}}.",
            answer: { type: "number", value: 1080 },
            solution:
              "General term: {{5Cr * 2^(5-r) * (3x)^r}}. Set {{r = 3}}: {{5C3 * 2^2 * 3^3 = 10 * 4 * 27 = 1080}}.",
          },
        },
        {
          title: "[HL] Arrangements with Adjacent Restriction",
          problem:
            "Seven students, including Maya and Liam, stand in a line for a photograph. Find the number of arrangements in which Maya and Liam do NOT stand next to each other.",
          steps: [
            "Total unrestricted arrangements of 7 distinct students: {{7! = 5040}}.",
            "Count the unwanted arrangements where Maya and Liam ARE adjacent: treat `{Maya, Liam}` as 1 block, giving 6 items to arrange in {{6!}} ways, multiplied by {{2!}} ways to order Maya and Liam inside the block: {{6! * 2! = 720 * 2 = 1440}}.",
            "Subtract from the total: {{5040 - 1440 = 3600}}.",
          ],
          answer: "{{3600}} arrangements.",
          yourTurn: {
            question:
              "[HL] A 4-person committee is chosen from 5 Year 12 students and 3 Year 13 students. How many committees contain at least 1 Year 13 student?",
            answer: { type: "number", value: 65 },
            solution:
              "Use complementary counting: total committees {{8C4 = 70}} minus committees with zero Year 13 students {{5C4 = 5}}, giving {{70 - 5 = 65}}.",
          },
        },
        {
          title: "[HL] Generalised Binomial Expansion of (4 − x)^(−1/2)",
          problem:
            "Expand {{1 / sqrt(4 - x)}} in ascending powers of {{x}} up to and including the {{x^2}} term, and state the range of values of {{x}} for which the expansion is valid.",
          steps: [
            "Rewrite with a rational index and factor out {{4^(-1/2)}} so the bracket begins with {{1}}: {{(4 - x)^(-1/2) = 4^(-1/2)(1 - x/4)^(-1/2) = (1/2)(1 - x/4)^(-1/2)}}.",
            "Apply {{(1 + u)^q = 1 + qu + (q(q - 1)/2!)u^2 + …}} with {{q = -1/2}} and {{u = -x/4}}.",
            "{{(1 - x/4)^(-1/2) = 1 + (-1/2)(-x/4) + [(-1/2)(-3/2)/2](-x/4)^2 + … = 1 + x/8 + (3/8)(x^2/16) + … = 1 + x/8 + 3x^2/128 + …}}.",
            "Multiply through by {{1/2}}: {{1/2 + x/16 + 3x^2/256 + …}}.",
            "Validity condition: {{|-x/4| < 1 ⇒ |x| < 4}} (i.e. {{-4 < x < 4}}).",
          ],
          answer: "{{1/2 + x/16 + 3x^2/256}}, valid for {{|x| < 4}}.",
        },
      ],
      keyPoints: [
        "In {{(a + b)^n}}, the {{(r+1)}}th term is {{nCr * a^(n-r) * b^r}} — always check whether the question asks for the **coefficient** (number only) or the **term** (includes {{x^k}}).",
        "[HL] Use {{nPr}} when positions/roles are distinct (order matters) and {{nCr}} when selecting an unordered group.",
        "[HL] For ≥3 separated objects, use the **gap method**, NOT {{Total - AllTogether}}.",
        "[HL] Before applying the generalised binomial formula to {{(a + bx)^q}}, ALWAYS factor out {{a^q}} to get {{a^q(1 + (b/a)x)^q}} and check {{|(b/a)x| < 1}}.",
      ],
      whyItWorks:
        "Why does {{nCr = nPr / r!}}? Forming an ordered list of {{r}} distinct objects can be split into two steps: first choose the unordered set of {{r}} objects ({{nCr}} ways), then arrange those {{r}} chosen objects ({{r!}} ways). Dividing out the {{r!}} internal permutations removes overcounting. For rational {{q}}, the coefficients {{q(q-1)…(q-r+1)/r!}} are precisely the Maclaurin derivatives {{f^(r)(0)/r!}} of {{(1 + x)^q}}, which you will meet again in Topic 5B!",
      strategies: [
        "When multiplying a short polynomial by a binomial expansion, e.g. {{(1 - 2x)(2 + x)^5}}, expand ONLY the powers of {{x}} you actually need to hit the target power!",
        "If an HL counting problem uses the words 'at least' or 'at most', compare the number of direct cases against the complement and pick whichever has fewer cases.",
        "Always check the sign of every term in {{(1 - kx)^(-n)}}: when BOTH the exponent and the inner term are negative, ALL coefficients turn out positive!",
      ],
      thinkDeeper:
        "Substitute {{a = 1, b = 1}} into {{(a + b)^n}} to prove {{∑_(r=0)^n nCr = 2^n}} (the total number of subsets of an {{n}}-element set). What happens when you substitute {{a = 1, b = -1}} instead?",
    },
    {
      id: "partial-fractions-hl",
      heading: "[HL] Algebraic Partial Fractions Decomposition",
      level: "HL",
      discovery: {
        problem:
          "Adding {{2/(x - 1) + 3/(x + 2)}} into a single fraction {{(5x + 1)/((x - 1)(x + 2))}} is routine GCSE algebra. Now reverse the arrow: how can you split a complicated rational function back into simple fractions so you can expand it with the generalised binomial theorem or integrate it in seconds?",
        idea:
          "Write an algebraic identity with unknown constants {{A, B, …}} over each irreducible factor of the denominator, clear the denominator to get a polynomial identity true for ALL {{x}}, and pick strategic root values of {{x}} (or equate coefficients of like powers) to pin down every constant uniquely.",
      },
      body: `### 1. Proper vs Improper Rational Expressions (Step 0!)
A rational function {{P(x) / Q(x)}} is **proper** if **{{deg(P) < deg(Q)}}**.
- If {{deg(P) >= deg(Q)}} (improper), you MUST perform **polynomial long division** (or algebraic manipulation) FIRST to write:
    {{P(x) / Q(x) = Quotient(x) + Remainder(x) / Q(x)}}
  before decomposing the proper remainder!

### 2. The Three IB HL Partial Fraction Templates
Once {{P(x)/Q(x)}} is proper and {{Q(x)}} is completely factorised over {{ℝ}}:

| Denominator Factor Structure | Partial Fractions Template | Key Method |
| --- | --- | --- |
| Distinct linear: {{(ax + b)(cx + d)}} | {{A/(ax + b) + B/(cx + d)}} | Substitute each linear root (cover-up) |
| Repeated linear: {{(x - a)(x - b)^2}} | {{A/(x - a) + B/(x - b) + C/(x - b)^2}} | Substitute {{x = a, x = b}}, then compare {{x^2}} or substitute {{x = 0}} |
| Irreducible quadratic: {{(x - a)(x^2 + bx + c)}} ({{b^2 - 4c < 0}}) | {{A/(x - a) + (Bx + C)/(x^2 + bx + c)}} | Substitute {{x = a}}, then equate coefficients of {{x^2}}, {{x}}, and constant |

### 3. Finding the Constants Cleanly
Multiply both sides of the identity by the full denominator {{Q(x)}} to obtain a polynomial identity ({{≡}}) that holds for **every** real value of {{x}}:
1. **Strategic substitution:** Plug in every linear root (even though the original fraction is not defined there, the cleared polynomial identity holds everywhere by continuity!). Each linear root knocks out almost all terms immediately.
2. **Equating coefficients:** Compare coefficients of the highest power ({{x^2}} or {{x^3}}) and the constant term ({{x = 0}}) to recover the remaining constants with minimal arithmetic.
3. **Always do a 5-second sanity check:** Plug in one fresh test value (like {{x = 0}} or {{x = 2}}) into both the original fraction and your decomposed answer to verify they match!

### 4. Connecting Directly to HL Binomial Expansions & Calculus
In HL exams, partial fractions are frequently Part (a) of a two-part question:
- **Link to Topic 1A:** Split {{f(x)}} into {{A/(1 - px) + B/(1 + qx)}}, expand each piece using {{(1 + u)^(-1)}}, add coefficients, and take the **narrower** convergence interval (the intersection of both validity domains!).
- **Link to Topic 5B:** Split {{f(x)}} so each piece integrates cleanly to {{ln|ax + b|}}, {{(x - b)^(-1)}}, or {{arctan(x/c)}}.`,
      diagram: SVG_PARTIAL,
      diagramCaption:
        "Decision workflow for HL partial fractions: check properness first, then match the factorised denominator to its exact numerator template.",
      workedExamples: [
        {
          title: "[HL] Distinct Linear Factors",
          problem: "Express {{(5x + 1) / ((x - 1)(x + 2))}} in partial fractions.",
          steps: [
            "Check properness: numerator degree {{1 < 2}} (denominator degree), so it is proper.",
            "Set up the identity: {{(5x + 1)/((x - 1)(x + 2)) ≡ A/(x - 1) + B/(x + 2)}}.",
            "Multiply through by {{(x - 1)(x + 2)}}: {{5x + 1 ≡ A(x + 2) + B(x - 1)}}.",
            "Substitute {{x = 1}}: {{5(1) + 1 = A(3) + 0 ⇒ 6 = 3A ⇒ A = 2}}.",
            "Substitute {{x = -2}}: {{5(-2) + 1 = 0 + B(-3) ⇒ -9 = -3B ⇒ B = 3}}.",
          ],
          answer: "{{2/(x - 1) + 3/(x + 2)}}.",
          yourTurn: {
            question:
              "[HL] Find the constants {{A}} and {{B}} (in the order {{A, B}}) such that {{(7x - 5)/((x + 1)(x - 2)) ≡ A/(x + 1) + B/(x - 2)}}.",
            answer: { type: "list", values: [4, 3], ordered: true },
            solution:
              "Multiply through: {{7x - 5 ≡ A(x - 2) + B(x + 1)}}. Setting {{x = -1}} gives {{-12 = -3A ⇒ A = 4}}. Setting {{x = 2}} gives {{9 = 3B ⇒ B = 3}}.",
          },
        },
        {
          title: "[HL] Repeated Linear Factor",
          problem: "Decompose {{(3x^2 - x + 4) / ((x + 1)(x - 1)^2)}} into partial fractions.",
          steps: [
            "Check properness: degree {{2 < 3}} — proper.",
            "Include BOTH {{(x - 1)}} and {{(x - 1)^2}}: {{≡ A/(x + 1) + B/(x - 1) + C/(x - 1)^2}}.",
            "Clear denominators: {{3x^2 - x + 4 ≡ A(x - 1)^2 + B(x + 1)(x - 1) + C(x + 1)}}.",
            "Substitute {{x = -1}}: {{3 + 1 + 4 = A(-2)^2 ⇒ 8 = 4A ⇒ A = 2}}.",
            "Substitute {{x = 1}}: {{3 - 1 + 4 = C(2) ⇒ 6 = 2C ⇒ C = 3}}.",
            "Compare coefficients of {{x^2}}: {{3 = A + B ⇒ 3 = 2 + B ⇒ B = 1}}.",
          ],
          answer: "{{2/(x + 1) + 1/(x - 1) + 3/(x - 1)^2}}.",
        },
        {
          title: "[HL] Irreducible Quadratic Factor",
          problem: "Express {{(4x^2 - 3x + 8) / ((x - 1)(x^2 + 2))}} in partial fractions.",
          steps: [
            "Check {{x^2 + 2}}: discriminant {{0^2 - 4(1)(2) = -8 < 0}}, so it is irreducible over {{ℝ}}.",
            "Set up a linear numerator over the quadratic: {{≡ A/(x - 1) + (Bx + C)/(x^2 + 2)}}.",
            "Clear denominators: {{4x^2 - 3x + 8 ≡ A(x^2 + 2) + (Bx + C)(x - 1)}}.",
            "Substitute {{x = 1}}: {{4 - 3 + 8 = 3A ⇒ 9 = 3A ⇒ A = 3}}.",
            "Compare coefficients of {{x^2}}: {{4 = A + B ⇒ 4 = 3 + B ⇒ B = 1}}.",
            "Substitute {{x = 0}} (constant terms): {{8 = 2A - C ⇒ 8 = 6 - C ⇒ C = -2}}.",
            "Quick check on {{x}} term: {{-B + C = -1 - 2 = -3}}, matching LHS!",
          ],
          answer: "{{3/(x - 1) + (x - 2)/(x^2 + 2)}}.",
        },
      ],
      keyPoints: [
        "ALWAYS check {{deg(numerator) < deg(denominator)}} first; if equal or larger, divide out a polynomial quotient before decomposing.",
        "A repeated linear factor {{(ax + b)^2}} needs TWO terms: {{B/(ax + b) + C/(ax + b)^2}} (omitting the single power is the #1 HL error!).",
        "An irreducible quadratic factor {{ax^2 + bx + c}} (with {{b^2 - 4ac < 0}}) ALWAYS requires a linear numerator {{Bx + C}}.",
        "When combining partial fractions with HL binomial expansions, the overall interval of validity is the INTERSECTION (narrower range) of the individual expansions.",
      ],
      whyItWorks:
        "Count the degrees of freedom! A proper numerator over a degree-{{n}} denominator has {{n}} arbitrary coefficients (degree {{n - 1}} down to constant). Every distinct linear factor contributes 1 constant, a squared linear factor contributes 2 constants, and an irreducible quadratic contributes 2 constants ({{B}} and {{C}}) — so the total number of unknowns ALWAYS matches the denominator degree {{n}}, guaranteeing a unique linear system.",
      strategies: [
        "Use strategic substitution for every real linear root FIRST, then equate the leading coefficient (highest power of {{x}}) and the constant term ({{x = 0}}) — this almost never requires solving a 3×3 simultaneous system!",
        "If the original fraction is improper with equal degrees, e.g. {{(2x^2 + 3x + 1)/((x - 1)(x + 2))}}, spot the leading quotient immediately ({{2}}) and write {{2 + A/(x - 1) + B/(x + 2)}} directly!",
        "Double-check your final decomposition by plugging in one simple non-root number such as {{x = 0}} or {{x = 2}}.",
      ],
      thinkDeeper:
        "Notice how partial fractions turn a rational telescoping series like {{∑_(k=1)^n 1/(k(k + 1)) = ∑_(k=1)^n (1/k - 1/(k + 1))}} into {{1 - 1/(n + 1)}} instantly — connecting Section 4 right back to Section 1!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "State the two conditions for standard form {{a * 10^k}}.",
        back: "{{1 <= a < 10}} and {{k ∈ ℤ}} (never leave calculator `E` notation).",
        level: "SL",
      },
      {
        front: "State the {{n}}th term and sum of {{n}} terms of an arithmetic sequence.",
        back: "{{u_n = u_1 + (n - 1)d}} and {{S_n = (n/2)(2u_1 + (n - 1)d) = (n/2)(u_1 + u_n)}}.",
        level: "SL",
      },
      {
        front: "State the {{n}}th term and finite sum of a geometric sequence ({{r != 1}}).",
        back: "{{u_n = u_1 r^(n-1)}} and {{S_n = u_1(r^n - 1)/(r - 1) = u_1(1 - r^n)/(1 - r)}}.",
        level: "SL",
      },
      {
        front: "When does an infinite geometric series converge, and what is {{S_∞}}?",
        back: "Converges if and only if {{|r| < 1}} ({{-1 < r < 1}}), with {{S_∞ = u_1 / (1 - r)}}.",
        level: "SL",
      },
      {
        front: "How do you recover {{u_n}} from a given formula for {{S_n}}?",
        back: "{{u_1 = S_1}}, and {{u_n = S_n - S_(n-1)}} for all {{n >= 2}}.",
        level: "SL",
      },
      {
        front: "How many terms are in the sum {{∑_(k=m)^n f(k)}}?",
        back: "There are {{n - m + 1}} terms (inclusive of both endpoints {{m}} and {{n}}).",
        level: "SL",
      },
      {
        front: "State the three core laws of logarithms (for {{x, y > 0, a > 0, a != 1}}).",
        back: "{{log_a(xy) = log_a x + log_a y}}, {{log_a(x/y) = log_a x - log_a y}}, and {{log_a(x^k) = k log_a x}}.",
        level: "SL",
      },
      {
        front: "State the change-of-base formula for logarithms.",
        back: "{{log_a(x) = log_b(x) / log_b(a) = ln(x) / ln(a)}} (also implies {{log_a(b) = 1 / log_b(a)}}).",
        level: "SL",
      },
      {
        front: "What is the golden rule of a deductive algebraic proof ('Show that LHS = RHS')?",
        back: "Start strictly from ONE side (usually LHS) and transform algebraically to reach the other side — never assume the identity is true and manipulate both sides simultaneously.",
        level: "SL",
      },
      {
        front: "Write the general {{(r+1)}}th term of the binomial expansion {{(a + b)^n}} ({{n ∈ ℕ}}).",
        back: "{{T_(r+1) = nCr * a^(n-r) * b^r}}, where {{nCr = n! / (r!(n - r)!)}} and {{0 <= r <= n}}.",
        level: "SL",
      },
      {
        front: "When three terms {{a, b, c}} are arithmetic vs geometric, what equations link them?",
        back: "Arithmetic: {{2b = a + c}} (constant difference). Geometric: {{b^2 = ac}} (constant ratio, {{a, b, c != 0}}).",
        level: "SL",
      },
      {
        front: "[HL] Distinguish permutations {{nPr}} from combinations {{nCr}}.",
        back: "{{nPr = n! / (n - r)!}} counts ORDERED arrangements; {{nCr = n! / (r!(n - r)!)}} counts UNORDERED selections.",
        level: "HL",
      },
      {
        front: "[HL] State the generalised binomial expansion of {{(1 + x)^q}} for {{q ∈ ℚ}} and its validity.",
        back: "{{1 + qx + (q(q-1)/2!)x^2 + (q(q-1)(q-2)/3!)x^3 + …}}, convergent strictly for {{|x| < 1}}.",
        level: "HL",
      },
      {
        front: "[HL] How do you start expanding {{(a + bx)^q}} when {{q}} is negative or fractional?",
        back: "Factor out {{a^q}} FIRST: {{a^q(1 + (b/a)x)^q}}, which is valid for {{|(b/a)x| < 1 ⇔ |x| < |a/b|}}.",
        level: "HL",
      },
      {
        front: "[HL] State the partial fractions template for a repeated linear denominator {{(x - a)(x - b)^2}}.",
        back: "{{A/(x - a) + B/(x - b) + C/(x - b)^2}} (assuming the rational expression is proper).",
        level: "HL",
      },
      {
        front: "[HL] State the partial fractions template for an irreducible quadratic factor {{(x - a)(x^2 + c)}} ({{c > 0}}).",
        back: "{{A/(x - a) + (Bx + C)/(x^2 + c)}} — the irreducible quadratic ALWAYS needs a linear numerator {{Bx + C}}.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Identify arithmetic ({{d}} constant) vs geometric ({{r}} constant) sequences immediately and verify {{|r| < 1}} before using {{S_∞ = u_1/(1 - r)}}.",
      "Always write out the first two terms of any sigma sum to confirm {{u_1}}, {{d}} or {{r}}, and the exact term count {{n - m + 1}}.",
      "Use {{u_n = S_n - S_(n-1)}} ({{n >= 2}}) and {{u_1 = S_1}} whenever a problem defines a series via a formula for {{S_n}}.",
      "Convert seamlessly between {{a^y = x}} and {{y = log_a(x)}}, and check domain restrictions ({{argument > 0}}) on every logarithmic equation.",
      "Change bases cleanly using {{log_a(x) = ln(x)/ln(a)}} — especially {{log_(a^k)(x) = (1/k) log_a(x)}}.",
      "Never assume the result in a 'Show that' or deductive proof; define integer variables ({{n ∈ ℤ}}) and work strictly one-sided.",
      "Use the general binomial term {{T_(r+1) = nCr * a^(n-r) * b^r}} to target a specific power of {{x}} without expanding the entire bracket.",
      "[HL] Select the right counting method: block method for 'together', gap method for ≥3 separated objects, and complementary counting for 'at least one'.",
      "[HL] Factor out {{a^q}} before applying the generalised binomial expansion to {{(a + bx)^q}}, and intersect validity ranges when adding expansions.",
      "[HL] Verify {{deg(numerator) < deg(denominator)}} before partial fractions, and match distinct, repeated linear, and irreducible quadratic templates accurately.",
    ],
    misconceptions: [
      {
        wrong: "{{log_a(x + y) = log_a(x) + log_a(y)}} and {{log_a(x) / log_a(y) = log_a(x - y)}}.",
        right: "Logarithms turn PRODUCTS into sums ({{log_a(xy) = log_a x + log_a y}}) and QUOTIENTS into differences ({{log_a(x/y) = log_a x - log_a y}}). Neither {{log_a(x + y)}} nor {{log_a(x)/log_a(y)}} simplifies that way.",
        level: "SL",
      },
      {
        wrong: "The sum {{∑_(k=3)^10 u_k}} has {{10 - 3 = 7}} terms.",
        right: "Inclusive counting gives {{10 - 3 + 1 = 8}} terms ({{k = 3, 4, 5, 6, 7, 8, 9, 10}}).",
        level: "SL",
      },
      {
        wrong: "If {{r^2 = 1/4}} in a geometric sequence, then {{r = 1/2}} only.",
        right: "Unless the question states all terms are positive, {{r = ±1/2}} are BOTH valid common ratios, producing two different sequences and two different sums!",
        level: "SL",
      },
      {
        wrong: "In {{(2 - 3x)^5}}, the {{r = 3}} term is {{5C3 * 2^2 * 3x^3}}.",
        right: "You MUST raise the entire factor {{(-3x)}} to the power {{3}}: {{5C3 * 2^2 * (-3x)^3 = 10 * 4 * (-27x^3) = -1080x^3}}.",
        level: "SL",
      },
      {
        wrong: "Testing {{n = 1, 2, 3, 4}} and showing all four work proves a statement for all integers {{n}}.",
        right: "Examples only illustrate a pattern; a deductive proof requires general algebraic manipulation with arbitrary {{n ∈ ℤ}}.",
        level: "SL",
      },
      {
        wrong: "Every root found after removing logarithms from {{log_a(f(x)) + log_a(g(x)) = c}} is a valid solution.",
        right: "Combining logs into {{log_a(f(x)g(x))}} can create extraneous roots where BOTH {{f(x) < 0}} and {{g(x) < 0}} (their product is positive, yet the original logs are not defined!).",
        level: "SL",
      },
      {
        wrong: "[HL] To keep 3 people separated in a row of 7, compute {{7! - 5! * 3!}}.",
        right: "{{5! * 3!}} only removes arrangements where ALL 3 sit together; it misses cases where 2 of the 3 sit together! Use the **gap method** instead: {{4! * 5P3 = 1440}}.",
        level: "HL",
      },
      {
        wrong: "[HL] The partial fraction decomposition of {{(x + 3)/((x - 1)(x + 2)^2)}} is {{A/(x - 1) + B/(x + 2)^2}}.",
        right: "You MUST include the single-power term {{(x + 2)}} too: {{A/(x - 1) + B/(x + 2) + C/(x + 2)^2}}.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing calculator scientific notation like `3.45E-6` on an IB script instead of {{3.45 * 10^(-6)}} — loses the final accuracy mark (A1).",
      "Forgetting to check {{|r| < 1}} when solving for an unknown ratio {{r}} in an infinite geometric series problem, keeping a root like {{r = 2}} where {{S_∞}} does not exist.",
      "Confusing the **coefficient** of {{x^k}} (a pure number, e.g. {{-1080}}) with the **term** in {{x^k}} (includes the power, e.g. {{-1080x^3}}).",
      "Rounding intermediate values on Paper 2 (TI-Nspire CX) before the final step, causing the 3 s.f. final answer to drift by 1 in the last digit — store exact values in variables!",
      "Manipulating both sides of an equation in a 'Show that' proof instead of working cleanly from LHS to RHS.",
      "Dropping the minus sign or forgetting to raise the constant inside {{(ax + b)^n}} to the power {{n - r}} or {{r}}.",
      "[HL] Applying {{(1 + x)^q}} directly to {{(2 + x)^(-1)}} without factoring out {{2^(-1)}} first, or stating validity as {{|x| < 1}} instead of {{|x| < 2}}.",
      "[HL] Attempting partial fractions on an improper fraction like {{(x^2 + 1)/((x - 1)(x + 2))}} without dividing out the constant quotient {{1}} first.",
    ],
    mnemonics: [
      {
        topic: "Logarithm Equivalence",
        device: "B-E-A (Base stays Base, Exponent goes Alone)",
        explanation:
          "In {{log_a(b) = y ⇔ a^y = b}}, the base {{a}} stays the base, and the logarithm itself IS the exponent {{y}}.",
        level: "SL",
      },
      {
        topic: "Binomial General Term",
        device: "Choose — Power Down — Power Up (C-D-U)",
        explanation:
          "For {{T_(r+1) = nCr * a^(n-r) * b^r}}: **C**hoose {{nCr}}, first term powers **D**own ({{n - r}}), second term powers **U**p ({{r}}), and the two exponents always sum to {{n}}.",
        level: "SL",
      },
      {
        topic: "[HL] Permutations vs Combinations",
        device: "P = Position matters, C = Committee (order doesn't)",
        explanation:
          "If swapping two chosen people creates a different outcome (president vs treasurer, podium order), use {{nPr}}; if they form an equal committee/subset, use {{nCr}}.",
        level: "HL",
      },
      {
        topic: "[HL] Partial Fractions Checklist",
        device: "P-F-T-S (Proper → Factor → Template → Sub & Compare)",
        explanation:
          "Check **P**roperness (divide if {{deg(P) >= deg(Q)}}), **F**actor the denominator completely, write the exact **T**emplate (repeated & quadratic rules), then **S**ubstitute roots and compare coefficients.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Earthquake Magnitudes & Decibel Acoustics",
        detail:
          "Both the moment-magnitude seismic scale and sound intensity in decibels ({{L = 10 log_10(I / I_0)}}) use base-10 logarithms to compress trillion-fold energy ranges into compact numbers.",
        emoji: "🌊",
      },
      {
        title: "Radioactive Half-Life & Carbon Dating",
        detail:
          "Isotope decay {{N(t) = N_0 e^(-λt)}} forms a geometric sequence over equal time intervals; archaeologists solve exponential equations with natural logarithms to date ancient artefacts.",
        emoji: "☢️",
      },
      {
        title: "Fractals & Infinite Geometric Geometry",
        detail:
          "The Koch snowflake and Sierpiński triangle add infinitely many scaled triangles whose areas form a convergent geometric series ({{|r| < 1}}) — finite enclosed area inside an infinite perimeter!",
        emoji: "❄️",
      },
      {
        title: "Cryptography, Passwords & Network Routing [HL]",
        detail:
          "Permutations and combinations quantify brute-force keyspace sizes and the number of shortest lattice paths through data-centre switching networks.",
        emoji: "🔐",
      },
      {
        title: "Control Systems & Laplace Transforms [HL]",
        detail:
          "Aerospace and robotics engineers decompose rational transfer functions into partial fractions so complex coupled dynamics split into simple independent exponential and oscillatory modes.",
        emoji: "🛰️",
      },
    ],
    videos: [
      {
        title: "IB Maths AA — Arithmetic & Geometric Sequences and Infinite Series",
        channel: "Revision Village / IB Maths AA",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+arithmetic+geometric+sequences+infinite+series",
      },
      {
        title: "IB Maths AA — Laws of Logarithms & Exponential Equations (Paper 1)",
        channel: "OSC / IB Maths AA",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+laws+of+logarithms+change+of+base+equations",
      },
      {
        title: "IB Maths AA — Binomial Theorem & Constant Term Problems",
        channel: "Sirius Revision / IB Maths AA",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+binomial+theorem+term+independent+of+x",
      },
      {
        title: "IB Maths AA HL — Permutations, Combinations & Generalised Binomial Expansion",
        channel: "IB Maths AA HL",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+permutations+combinations+generalized+binomial",
      },
      {
        title: "IB Maths AA HL — Partial Fractions (Repeated Linear & Irreducible Quadratic)",
        channel: "IB Maths AA HL",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+partial+fractions+repeated+quadratic",
      },
    ],
    formulas: [
      {
        name: "Arithmetic sequence nth term",
        formula: "{{u_n = u_1 + (n - 1)d}}",
        note: "In IB Formula Booklet (Topic 1.2)",
        level: "SL",
      },
      {
        name: "Arithmetic series sum of n terms",
        formula: "{{S_n = (n/2)(2u_1 + (n - 1)d) = (n/2)(u_1 + u_n)}}",
        note: "In IB Formula Booklet (Topic 1.2)",
        level: "SL",
      },
      {
        name: "Geometric sequence nth term",
        formula: "{{u_n = u_1 r^(n-1)}}",
        note: "In IB Formula Booklet (Topic 1.3)",
        level: "SL",
      },
      {
        name: "Geometric series finite sum",
        formula: "{{S_n = u_1(r^n - 1)/(r - 1) = u_1(1 - r^n)/(1 - r)}}   ({{r != 1}})",
        note: "In IB Formula Booklet (Topic 1.3)",
        level: "SL",
      },
      {
        name: "Infinite geometric series sum",
        formula: "{{S_∞ = u_1 / (1 - r)}}   ({{|r| < 1}})",
        note: "In IB Formula Booklet (Topic 1.8)",
        level: "SL",
      },
      {
        name: "Recovering a term from partial sums",
        formula: "{{u_1 = S_1}},   {{u_n = S_n - S_(n-1)}}   ({{n >= 2}})",
        note: "Not in booklet — memorise!",
        level: "SL",
      },
      {
        name: "Logarithm–exponent equivalence",
        formula: "{{a^x = b  ⇔  x = log_a(b)}}   ({{a > 0, a != 1, b > 0}})",
        note: "In IB Formula Booklet (Topic 1.5)",
        level: "SL",
      },
      {
        name: "Laws of logarithms",
        formula: "{{log_a(xy) = log_a x + log_a y}},   {{log_a(x/y) = log_a x - log_a y}},   {{log_a(x^m) = m log_a x}}",
        note: "In IB Formula Booklet (Topic 1.7)",
        level: "SL",
      },
      {
        name: "Change of base of a logarithm",
        formula: "{{log_a(x) = log_b(x) / log_b(a)}}",
        note: "In IB Formula Booklet (Topic 1.7)",
        level: "SL",
      },
      {
        name: "Binomial theorem (n ∈ ℕ)",
        formula: "{{(a + b)^n = a^n + nC1 * a^(n-1)b + … + nCr * a^(n-r)b^r + … + b^n}}",
        note: "In IB Formula Booklet (Topic 1.9)",
        level: "SL",
      },
      {
        name: "Binomial coefficient (combinations)",
        formula: "{{nCr = n! / (r!(n - r)!)}}",
        note: "In IB Formula Booklet (Topic 1.9 / AHL 1.10)",
        level: "SL",
      },
      {
        name: "[HL] Permutations",
        formula: "{{nPr = n! / (n - r)!}}",
        note: "In IB Formula Booklet (AHL 1.10)",
        level: "HL",
      },
      {
        name: "[HL] Generalised binomial expansion (q ∈ ℚ)",
        formula: "{{(1 + x)^q = 1 + qx + (q(q-1)/2!)x^2 + (q(q-1)(q-2)/3!)x^3 + …}}   ({{|x| < 1}})",
        note: "In IB Formula Booklet (AHL 1.10) — factor out a^q first for (a + bx)^q!",
        level: "HL",
      },
      {
        name: "[HL] Repeated linear partial fractions",
        formula: "{{P(x) / ((x - a)(x - b)^2) ≡ A/(x - a) + B/(x - b) + C/(x - b)^2}}",
        note: "Not in booklet — memorise (AHL 1.11)!",
        level: "HL",
      },
      {
        name: "[HL] Irreducible quadratic partial fractions",
        formula: "{{P(x) / ((x - a)(x^2 + bx + c)) ≡ A/(x - a) + (Bx + C)/(x^2 + bx + c)}}",
        note: "Not in booklet — memorise (AHL 1.11)!",
        level: "HL",
      },
    ],
  },
};
