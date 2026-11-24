// ---------------------------------------------------------------------------
// Central subject configuration for Year 12–13 IB Diploma Mathematics: Analysis & Approaches.
// Provisional: aligned to published FA2029 subject brief; full guide due Feb 2027.
// ---------------------------------------------------------------------------
import type { IBCommandTerm, IBLevel, Strand } from "./types.ts";

export interface VaultQuickCard {
  title: string;
  badge: string;
  level?: IBLevel;
  lines: string[];
}

export interface ExamTip {
  icon: string;
  title: string;
  text: string;
}

export interface CommandTermDef {
  term: IBCommandTerm;
  ao: "AO1" | "AO2" | "AO3";
  meaning: string;
  examTip: string;
}

export interface ExamPaperMeta {
  id: string;
  expectedCount: number;
  level: IBLevel;
  paperType: string;
}

export const SUBJECT = {
  storageKey: "y12mathsaa",
  cookieName: "y12mathsaa_session",
  shortName: "IB Maths AA",
  fullName: "Year 12–13 IB Diploma Maths: Analysis & Approaches (SL/HL)",
  shortTitle: "IB DP Maths AA",
  badge: "IB DP Maths AA · FA2029 Brief (Provisional)",
  groupLabel: "Group 5 · Mathematics",
  icon: "∫",
  themeColorLight: "#4338ca",
  themeColorDark: "#141038",
  provisionalBanner: "Provisional: aligned to FA2029 subject brief; full guide due Feb 2027" as string | null,
  tutorName: "Professor Euler",
  tutorEmoji: "∫",
  tutorScope: "IB Diploma Mathematics: Analysis & Approaches (SL & HL, FA2029 Subject Brief)",
  tutorSystemPrompt: `You are Professor Euler, a warm, rigorous IB Diploma Mathematics: Analysis & Approaches (SL & HL — Provisional: aligned to FA2029 subject brief; full guide due Feb 2027) tutor inside Vanishree's Year 12–13 revision hub at Tanglin Trust School, Singapore.

How you teach (Art of Problem Solving discovery style, aligned strictly to the published IBO FA2029 Maths AA Subject Brief):
- If the learner asks about a question they are working on, do NOT dump the full solution immediately. Ask one sharp guiding question or offer only the next algebraic/geometric nudge (e.g. "Before applying L'Hôpital's rule, did you verify the limit gives an indeterminate \`0/0\` or \`∞/∞\` form?", "Notice \`Show that\` forbids working backwards from the given result — start from the LHS!"), then stop and let them reason.
- Only give a full worked solution if they explicitly ask for it or the context says they have already answered.
- Respect the **FA2029 Maths AA Subject Brief** strictly:
  1. **Excluded FA2029 cuts:** Do NOT drill financial compound-interest apps (former SL 1.4), bivariate correlation/regression (former SL 4.4/4.10), proof by counterexample (former AHL 1.15), or Euler's method (former AHL 5.18).
  2. **External papers:** Paper 1 (Non-GDC: SL 1h 30m 75m 40% / HL 2h 100m 30%), Paper 2 (GDC TI-Nspire CX: SL 1h 30m 75m 40% / HL 2h 100m 30%), HL Paper 3 (1h 50m 20%, 2 extended inquiry investigations).
  3. **Unified SL/HL Inquiry-Process IA (20 marks, 20%):** Identical criteria at SL and HL — A Problem specification (4), B Abstraction (6), C Computation (4), D Interpretation (6).
- Double-check every sign, domain restriction, exact value (\`π\`, \`√\`, \`ln\`), integration constant \`+ C\`, and 3 s.f. GDC rounding before replying.

Style:
- Concise: usually 2–6 sentences. British spelling. Warm, clear, mathematical.
- You may use **bold**, inline \`code\`, and simple "- " bullet lists.

Safety and scope:
- Only help with IB Diploma Mathematics AA, TI-Nspire CX GDC workflows, proof, and the Maths Exploration IA. For anything else, kindly steer back to Maths AA.
- Never ask for or repeat personal information.`,
  vaultTitle: "IB Maths AA Formula Booklet & TI-Nspire CX Vault",
  vaultShort: "Formula Vault",
  vaultIcon: "∫",
  vaultBlurb: "Provisional FA2029 Formula Booklet mirror (omitting FA2029 cuts: finance, bivariate & Euler's method), 'Not in booklet — must memorise' callouts, and TI-Nspire CX GDC workflows.",
  vaultSearchPlaceholder: "Filter e.g. De Moivre, cross product, Bayes, L'Hôpital, Maclaurin, TI-Nspire…",
  examTitle: "IB Maths AA Mock Papers (P1 Non-GDC, P2 GDC & HL P3 Inquiry)",
  examShort: "Mock Papers",
  examBlurb: "Aligned to the FA2029 Subject Brief: Paper 1 SL (75m, Non-GDC), Paper 1 HL (100m, Non-GDC), Paper 2 (GDC TI-Nspire CX), and HL Paper 3 (1h / 50m Inquiry).",
  iaNavLabel: "Inquiry IA",
  iaTitle: "IB Maths AA Mathematical Exploration (Unified FA2029 Inquiry IA)",
  cramBanner: "FA2029 Exam Savers: Give exact answers (π, √, ln) on Paper 1 (Non-GDC) and 3 s.f. on Paper 2 (TI-Nspire CX); NEVER skip '+ C' on indefinite integrals; check ambiguous sine rule & log domains; and verify 'Show that' proofs forward only!",
  searchPlaceholder: "Search, e.g. “induction”, “De Moivre”, “planes”, “Bayes”, “Maclaurin” or “ODE”",
  sitcomSeriesName: "IB Maths AA Studio (Phase C)",
  sitcomBlurb: "Narrated IB Maths AA episodes and vertical Proof Shorts will arrive in Phase C once the Year 9 video batch finishes rendering.",
} as const;

export const EXAM_PAPERS_META: readonly ExamPaperMeta[] = [
  { id: "exam-p1-sl", expectedCount: 15, level: "SL", paperType: "Paper 1 (SL · Non-GDC · 1h 30m · 75m)" },
  { id: "exam-p1-hl", expectedCount: 15, level: "HL", paperType: "Paper 1 (HL · Non-GDC · 2h · 100m)" },
  { id: "exam-p2", expectedCount: 15, level: "SL", paperType: "Paper 2 (SL & HL · TI-Nspire CX GDC)" },
  { id: "exam-p3-hl", expectedCount: 15, level: "HL", paperType: "Paper 3 (HL Only · 1h · 50m Inquiry)" },
] as const;

export const STRAND_STYLES_MAP: Record<Strand, { slug: string; text: string; bg: string; soft: string; border: string }> = {
  "Topic 1: Number & Algebra": { slug: "topic-1", text: "text-s-number", bg: "bg-s-number", soft: "bg-s-number/15", border: "border-s-number" },
  "Topic 2: Functions": { slug: "topic-2", text: "text-s-ratio", bg: "bg-s-ratio", soft: "bg-s-ratio/15", border: "border-s-ratio" },
  "Topic 3: Geometry & Trigonometry": { slug: "topic-3", text: "text-s-algebra", bg: "bg-s-algebra", soft: "bg-s-algebra/15", border: "border-s-algebra" },
  "Topic 4: Statistics & Probability": { slug: "topic-4", text: "text-s-geometry", bg: "bg-s-geometry", soft: "bg-s-geometry/15", border: "border-s-geometry" },
  "Topic 5: Calculus": { slug: "topic-5", text: "text-s-stats", bg: "bg-s-stats", soft: "bg-s-stats/15", border: "border-s-stats" },
};

export const VAULT_QUICK_CARDS: readonly VaultQuickCard[] = [
  {
    title: "1. FA2029 Syllabus Scope & Excluded Legacy Cuts",
    badge: "FA2029 Brief",
    level: "SL",
    lines: [
      "**Excluded in FA2029 (do NOT waste time revising!):** Financial compound-interest apps (former SL 1.4), bivariate correlation `r` & regression (former SL 4.4/4.10), proof by counterexample (former AHL 1.15), and Euler's method (former AHL 5.18).",
      "**External Papers:** SL P1/P2 **75m each** (1h 30m, 40% each) · HL P1/P2 **100m each** (2h, 30% each) · HL P3 **50m** (1h, 20%).",
      "**Re-alignment Reminder:** Provisional alignment to published FA2029 Subject Brief — full formula booklet re-verified after Feb 2027 guide launch.",
    ],
  },
  {
    title: "2. Not in Formula Booklet — MUST Memorise!",
    badge: "Paper 1 Non-GDC",
    level: "SL",
    lines: [
      "**Exact Trig Table:** `sin/cos/tan` of `0, π/6, π/4, π/3, π/2` and ASTC signs across all 4 quadrants.",
      "**Log Change & Special Values:** `ln 1 = 0`, `ln e = 1`, `e^(ln x) = x`, and domain restrictions (`x > 0` for `ln x`).",
      "**Calculus Essentials:** `d/dx(ln x) = 1/x`, `∫ 1/x dx = ln|x| + C`, second-derivative concavity test, and **[HL]** `d/dx(arcsin x)`, `d/dx(arctan x)`, LIATE parts order.",
    ],
  },
  {
    title: "3. TI-Nspire CX GDC High-ROI Workflows (Paper 2 & P3)",
    badge: "GDC Required",
    level: "SL",
    lines: [
      "**Roots / Intersections:** Graph both curves → `Menu → 6 Analyze Graph → 1 Zero` or `4 Intersection` (or `nSolve` with bounds!).",
      "**Distributions:** `Menu → 5 Probability → 5 Distributions → binomPdf / binomCdf / normCdf / invNorm` (check lower/upper bounds carefully!).",
      "**Numerical Calculus & 3×3 Systems [HL]:** `Menu → 4 Calculus → Numerical Derivative / Integral`; `Menu → 7 Matrix → 5 rref(` for 3×3 systems.",
      "**Accuracy Rule:** Keep full GDC precision during intermediate steps and round FINAL answers to **3 significant figures** (unless exact or specified).",
    ],
  },
  {
    title: "4. HL High-Yield Identities & Convergence Rules",
    badge: "HL Only",
    level: "HL",
    lines: [
      "**De Moivre & Roots:** `[r cis θ]^n = r^n cis(nθ)`; `n`th roots sit evenly spaced by `2π/n` on a circle of radius `r^(1/n)`.",
      "**3D Planes & Distances:** Acute line–plane angle `sin α = |b · n| / (|b||n|)`; point-to-plane distance `|ax₀ + by₀ + cz₀ − d| / √(a² + b² + c²)`.",
      "**First-Order ODEs:** Integrating factor for `dy/dx + P(x)y = Q(x)` is `μ(x) = e^(∫ P(x) dx)` → `d/dx(μy) = μQ(x)`.",
      "**Maclaurin Series:** Remember intervals of convergence — `ln(1+x)` converges on `(-1, 1]`, `(1+x)^p` on `|x| < 1`.",
    ],
  },
];

export const EXAM_TIPS: readonly ExamTip[] = [
  {
    icon: "🚫",
    title: "Paper 1 (Non-GDC): Exact Values Only",
    text: "Never convert `π/3`, `√3/2`, or `ln 5` into decimal approximations on Paper 1! Leave answers in simplified exact form and check domain restrictions (e.g. rejecting negative roots inside `ln x`).",
  },
  {
    icon: "📱",
    title: "Paper 2 (TI-Nspire CX): Sketch + 3 s.f. Rule",
    text: "Always check RAD vs DEG mode before any trig question! On Paper 2, write the equation/integral you entered into your TI-Nspire CX (M1 method mark) and round final answers cleanly to **3 significant figures**.",
  },
  {
    icon: "🧭",
    title: "HL Paper 3 (1h · 50m): Follow the Inquiry Scaffolding",
    text: "Every part of an HL Paper 3 investigation builds on the previous part! Watch for `'Hence'` (you MUST use your prior result!) and carry forward exact patterns from `n = 1, 2, 3` into general conjectures and induction proofs.",
  },
  {
    icon: "⚖️",
    title: "'Show that' Means Zero Working Backwards",
    text: "When an IB Maths AA question says **Show that**, the given answer is a safety net for later parts — NEVER substitute it in or manipulate both sides simultaneously. Work strictly forward from premises to conclusion.",
  },
];

export const IB_COMMAND_TERMS: readonly CommandTermDef[] = [
  { term: "Write down", ao: "AO1", meaning: "Obtain the answer(s), usually by extracting information; little or no calculation is required.", examTip: "1–2 marks max — if you are doing 6 lines of algebra, you missed a direct shortcut!" },
  { term: "State", ao: "AO1", meaning: "Give a specific name, value, or brief answer without explanation or calculation.", examTip: "Be concise and include exact domain/notation (e.g. `x ≠ 3`)." },
  { term: "Find", ao: "AO2", meaning: "Obtain an answer showing relevant stages in the working.", examTip: "Show every key substitution and step so you secure method (M) marks even if an arithmetic slip happens." },
  { term: "Calculate", ao: "AO2", meaning: "Obtain a numerical answer showing the relevant stages in the working.", examTip: "Use full GDC precision internally, then round the final value to 3 s.f. (Paper 2/3) or exact form (Paper 1)." },
  { term: "Determine", ao: "AO2", meaning: "Obtain the only possible answer.", examTip: "Check for extraneous roots (log domains, modulus, ambiguous sine case) so only valid solution(s) survive." },
  { term: "Solve", ao: "AO2", meaning: "Obtain the answer(s) using algebraic and/or numerical and/or graphical methods.", examTip: "Check the required domain interval (e.g. `0 ≤ x ≤ 2π`) and list EVERY valid solution." },
  { term: "Sketch", ao: "AO2", meaning: "Represent by a labelled graph giving key features accurately in relative position.", examTip: "Label ALL intercepts, asymptotes (with equations!), local extrema, and endpoints clearly." },
  { term: "Show that", ao: "AO3", meaning: "Obtain the required result without using the given result itself (no working backwards).", examTip: "Start cleanly from LHS or given definitions and arrive explicitly at the exact printed expression." },
  { term: "Hence", ao: "AO3", meaning: "Use the preceding work to obtain the required result (mandatory method!).", examTip: "An alternative valid method that ignores the previous part earns ZERO method marks on 'Hence'!" },
  { term: "Deduce", ao: "AO3", meaning: "Reach a conclusion directly from the information or results already given.", examTip: "Link explicitly to the prior step in 1–3 crisp lines." },
  { term: "Prove", ao: "AO3", meaning: "Use a sequence of logical steps to obtain the required result in a formal way.", examTip: "For induction: Base case → Assumption (n = k) → Inductive step (n = k + 1) → Explicit concluding sentence!" },
  { term: "Verify", ao: "AO2", meaning: "Provide evidence that validates a given result (substitution IS allowed here).", examTip: "Unlike 'Show that', direct substitution into both sides is completely valid for 'Verify'." },
];
