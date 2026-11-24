import type { TopicExtras } from "../types.ts";

const SVG_UNIT_SQUARE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 220" role="img" aria-label="Geometric visual proof that one half plus one quarter plus one eighth plus infinitely many halves equals one">
  <rect width="460" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <rect x="26" y="20" width="180" height="180" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
  <rect x="26" y="20" width="90" height="180" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="71" y="116" font-family="system-ui, sans-serif" font-size="17" font-weight="700" text-anchor="middle" fill="#1d4ed8">1/2</text>
  <rect x="116" y="20" width="90" height="90" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="161" y="70" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle" fill="#6d28d9">1/4</text>
  <rect x="116" y="110" width="45" height="90" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.5"/>
  <text x="138" y="160" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#0f766e">1/8</text>
  <rect x="161" y="110" width="45" height="45" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="183" y="137" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#b45309">1/16</text>
  <rect x="161" y="155" width="22.5" height="45" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
  <rect x="183.5" y="155" width="22.5" height="22.5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1"/>
  <text x="195" y="194" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">…</text>
  <text x="232" y="54" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e293b">Proof Without Words</text>
  <text x="232" y="82" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#2563eb">1/2 + 1/4 + 1/8 + 1/16 + … = 1</text>
  <text x="232" y="110" font-family="system-ui, sans-serif" font-size="11.5" fill="#334155">Each step halves the remaining</text>
  <text x="232" y="128" font-family="system-ui, sans-serif" font-size="11.5" fill="#334155">empty corner of the 1 × 1 square.</text>
  <text x="232" y="156" font-family="system-ui, sans-serif" font-size="11.5" fill="#0f766e">u₁ = 1/2,  r = 1/2  (|r| &lt; 1)</text>
  <text x="232" y="178" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f766e">S∞ = (1/2) / (1 − 1/2) = 1</text>
</svg>`;

const SVG_PASCAL_FIB = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 220" role="img" aria-label="Shallow diagonals of Pascal's triangle summing to Fibonacci numbers">
  <rect width="480" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="240" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#1e293b">Hidden Fibonacci Diagonals Inside Pascal's Triangle</text>
  <line x1="60" y1="54" x2="108" y2="54" stroke="#93c5fd" stroke-width="2" stroke-dasharray="3 3"/>
  <line x1="60" y1="82" x2="152" y2="68" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="3 3"/>
  <line x1="60" y1="110" x2="196" y2="82" stroke="#5eead4" stroke-width="2" stroke-dasharray="3 3"/>
  <line x1="60" y1="138" x2="240" y2="96" stroke="#fcd34d" stroke-width="2.5"/>
  <line x1="60" y1="166" x2="284" y2="110" stroke="#fca5a5" stroke-width="2.5"/>
  <text x="66" y="58" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">1</text>
  <text x="66" y="86" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">1</text>
  <text x="114" y="86" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">1</text>
  <text x="66" y="114" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">1</text>
  <text x="114" y="114" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">2</text>
  <text x="162" y="114" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">1</text>
  <text x="66" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#b45309">1</text>
  <text x="114" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">3</text>
  <text x="162" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">3</text>
  <text x="210" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">1</text>
  <text x="66" y="170" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626">1</text>
  <text x="114" y="170" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">4</text>
  <text x="162" y="170" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">6</text>
  <text x="210" y="170" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">4</text>
  <text x="258" y="170" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">1</text>
  <text x="66" y="198" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">1</text>
  <text x="114" y="198" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">5</text>
  <text x="162" y="198" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">10</text>
  <text x="210" y="198" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">10</text>
  <text x="258" y="198" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">5</text>
  <text x="306" y="198" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">1</text>
  <rect x="336" y="44" width="126" height="154" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="399" y="66" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#1e293b">Diagonal Sums</text>
  <text x="350" y="88" font-family="system-ui, sans-serif" font-size="11.5" fill="#2563eb">1 → 1</text>
  <text x="350" y="108" font-family="system-ui, sans-serif" font-size="11.5" fill="#6d28d9">1 → 1</text>
  <text x="350" y="128" font-family="system-ui, sans-serif" font-size="11.5" fill="#0f766e">1 + 1 → 2</text>
  <text x="350" y="148" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#b45309">1 + 2 → 3</text>
  <text x="350" y="168" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#dc2626">1 + 3 + 1 → 5</text>
  <text x="350" y="188" font-family="system-ui, sans-serif" font-size="11.5" fill="#334155">1 + 4 + 3 → 8</text>
</svg>`;

export const extras: TopicExtras = {
  hook: "Legend has it that a nine-year-old Carl Friedrich Gauss summed all the integers from 1 to 100 in seconds while his classmates laboured for an hour — and centuries earlier, John Napier doubled the working lifespan of astronomers by turning monstrous multiplications into simple additions with logarithms.",
  didYouKnow: [
    "Before pocket calculators existed, engineers sent Apollo astronauts to the Moon using **slide rules** — wooden and plastic rulers etched on a logarithmic scale so sliding two lengths together physically added {{log x + log y = log(xy)}}!",
    "The harmonic series {{1 + 1/2 + 1/3 + 1/4 + …}} has terms that shrink to {{0}}, yet its sum diverges to infinity — proving that {{u_n → 0}} is necessary for convergence, but NOT sufficient (unlike geometric series with {{|r| < 1}}).",
    "Every row of Pascal's triangle sums to a power of {{2}} ({{∑_(r=0)^n nCr = 2^n}}), and colouring all odd entries in Pascal's triangle magically draws the **Sierpiński fractal triangle**!",
    "Isaac Newton discovered the **generalised binomial theorem** for fractional and negative exponents at age 22 during the 1665 Cambridge plague lockdown — letting him approximate {{π}} to 15 decimal places by hand!",
    "There are {{52! ≈ 8.07 * 10^67}} ways to shuffle a standard deck of 52 cards — far more than the number of atoms on Earth — so every genuinely shuffled deck almost certainly creates an ordering that has never existed before in human history.",
  ],
  activities: [
    {
      title: "Build a Paper Logarithmic Slide Rule",
      emoji: "📏",
      materials: ["Two strips of graph paper (25 cm long)", "Ruler", "TI-Nspire CX or calculator", "Fine pen"],
      steps: [
        "On both strips, mark `1` at {{0 cm}} (since {{log_10(1) = 0}}) and `10` at {{20 cm}} (so each unit of {{log_10}} equals {{20 cm}}).",
        "Compute {{20 * log_10(k)}} for {{k = 2, 3, 4, 5, 6, 7, 8, 9}} and label those tick marks on both strips.",
        "Slide the `1` mark of the top strip to sit directly above `2` on the bottom strip.",
        "Read underneath `3` and `4` on the top strip: they align directly above `6` and `8` on the bottom strip!",
      ],
      maths:
        "Because physical distance is proportional to {{log_10(x)}}, laying length {{log_10(a)}} end-to-end with {{log_10(b)}} places the pointer at {{log_10(a) + log_10(b) = log_10(ab)}} — turning multiplication into physical addition.",
    },
    {
      title: "Paper-Strip Infinite Geometric Sum",
      emoji: "✂️",
      materials: ["One A4 sheet of paper", "Scissors", "Coloured markers"],
      steps: [
        "Cut the sheet cleanly in half: place one half in Pile A (area {{1/2}}).",
        "Cut the remaining piece in half: place one quarter in Pile A (total {{1/2 + 1/4 = 3/4}}).",
        "Repeat for {{1/8}}, {{1/16}}, {{1/32}}, and {{1/64}}, noting how tiny the leftover scrap becomes.",
        "Now try cutting into thirds instead, placing {{1/3}} in Pile A and {{1/3}} in Pile B while splitting the final {{1/3}} repeatedly — watch Pile A converge to {{1/2}} ({{(1/3)/(1 - 1/3) = 1/2}})!",
      ],
      maths:
        "Splitting a unit sheet into {{k}} equal strips, keeping {{1}} strip, and recycling {{1}} strip demonstrates {{∑_(n=1)^∞ (1/k)^n = 1 / (k - 1)}} tangibly.",
    },
    {
      title: "Pascal's Hockey-Stick Identity Hunt",
      emoji: "🏒",
      materials: ["Blank grid paper", "Highlighter"],
      steps: [
        "Write Pascal's triangle left-aligned down to row {{n = 8}}.",
        "Start at any `1` on the right edge (say {{2C2 = 1}}) and highlight downwards along the diagonal: {{2C2 + 3C2 + 4C2 + 5C2}}.",
        "Check the sum ({{1 + 3 + 6 + 10 = 20}}) and look at the single entry directly down-and-left of your last highlighted number: {{6C3 = 20}}!",
        "Try proving why this works in two lines using Pascal's identity {{(n-1)C(r-1) + (n-1)Cr = nCr}} repeatedly!",
      ],
      maths:
        "The **Hockey-Stick Identity** {{∑_(i=r)^n iCr = (n + 1)C(r + 1)}} explains why sums of natural numbers give triangular numbers ({{(n+1)C2}}) and sums of triangular numbers give tetrahedral numbers ({{(n+1)C3}}).",
    },
  ],
  bonusDiagrams: [
    {
      title: "Unit-Square Visual Proof of S∞ = 1",
      svg: SVG_UNIT_SQUARE,
      caption:
        "Each rectangle fills exactly half of the remaining white space, visually proving {{1/2 + 1/4 + 1/8 + … = 1}}.",
    },
    {
      title: "Fibonacci Numbers Hiding in Pascal's Triangle",
      svg: SVG_PASCAL_FIB,
      caption:
        "Summing binomial coefficients along shallow rising diagonals yields the Fibonacci sequence {{1, 1, 2, 3, 5, 8, 13, …}}.",
    },
  ],
  history: {
    title: "Napier's Bones, Euler's Number e, and the Birth of Partial Fractions",
    story:
      "In 1614, Scottish mathematician John Napier published *Mirifici Logarithmorum Canonis Descriptio* after 20 years of hand calculation, introducing logarithms so astronomers like Johannes Kepler could compute planetary orbits in hours instead of months. A century later, Leonhard Euler linked logarithms to the constant {{e}}, formalised sigma notation ({{∑}}), and perfected **partial fractions** in his 1748 *Introductio in Analysin Infinitorum* to expand rational functions into infinite power series — unifying all four sections of Topic 1A into a single toolkit that still powers modern IB AA HL mathematics.",
  },
};
