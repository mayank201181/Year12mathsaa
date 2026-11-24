// ---------------------------------------------------------------------------
// Internal Assessment (IA) Guidance — IB Diploma Mathematics: Analysis & Approaches
// Provisional: aligned to published FA2029 subject brief; full guide due Feb 2027.
//
// FA2029 Unified Inquiry-Process IA (20 marks · 20% · IDENTICAL criteria at SL & HL):
//   A: Problem specification (4) · B: Abstraction (6) · C: Computation (4) · D: Interpretation (6)
// ---------------------------------------------------------------------------

export interface IaCriterionBand {
  marks: string;
  descriptor: string;
}

export interface IaCriterion {
  code: string;
  name: string;
  maxMarks: number;
  summary: string;
  topBandMustHave: string[];
  bands: IaCriterionBand[];
}

export interface IaMilestone {
  phase: string;
  timing: string;
  tasks: string[];
}

export interface IaSectionGuide {
  heading: string;
  targetWords: string;
  whatToInclude: string;
}

export const IA_GUIDE = {
  title: "IB Maths AA Exploration IA (Unified FA2029 Inquiry Process)",
  subtitle: "Provisional: aligned to FA2029 subject brief (full guide due Feb 2027) · SL & HL IDENTICAL Criteria · 20 marks · 20%",
  hoursNote: "Under the published FA2029 Subject Brief, the Maths AA Exploration IA is rebuilt around the 4-stage Mathematical Inquiry Process and uses the EXACT SAME 4 criteria (20 marks total) at both SL and HL (while expecting HL-level mathematical depth for HL candidates). Tanglin launches the Maths IA in Term 3 of Year 12 (DP1).",
  wordLimit: 0,
  totalMarks: 20,
  weightSL: "20%",
  weightHL: "20%",
  keyChanges2025: [
    "**Provisional Notice (FA2029 Subject Brief):** Criteria A–D below reflect the published FA2029 Mathematical Inquiry Process brief (A Problem specification 4 · B Abstraction 6 · C Computation 4 · D Interpretation 6). Final exact markband prose will be locked in once the full IBO guide publishes in February 2027.",
    "**Unified SL & HL Criteria (NEW in FA2029!):** Gone is the old 2021 split between Criterion E (SL) and Criterion E (HL) — both SL and HL are now assessed through the exact same 4 Inquiry-Process stages, scaled to the sophistication of the course level taken.",
    "**4-Stage Mathematical Inquiry Cycle:** (1) **Problem specification** (define a genuine mathematical question & scope) → (2) **Abstraction** (translate into variables, assumptions, models & mathematical structure) → (3) **Computation** (execute accurate analytical/GDC mathematics cleanly) → (4) **Interpretation** (evaluate results, sensitivity, limitations & iterate/refine the model!).",
    "**Avoid Retired FA2029 Cuts:** Do NOT centre your Exploration around simple bivariate linear regression or basic compound-interest tables — choose rich calculus, differential equations, functions/modelling, probability distributions, geometry/vectors, or pure-maths inquiry!",
  ],
  criteria: [
    {
      code: "A",
      name: "Problem Specification",
      maxMarks: 4,
      summary: "Frames a clear, focused, personally authentic mathematical problem, defines scope and purpose, and plans a coherent inquiry pathway.",
      topBandMustHave: [
        "Articulates a razor-sharp, mathematically rich aim (avoid vague 'I want to explore calculus in music' — specify the exact curve, optimisation, ODE, or theorem!).",
        "Shows genuine personal curiosity and clearly outlines how the investigation will progress.",
        "Explicitly states boundary conditions and what lies inside vs outside the inquiry scope.",
      ],
      bands: [
        { marks: "4", descriptor: "Clear, focused, well-motivated mathematical problem with sharp scope and purposeful inquiry framing." },
        { marks: "3", descriptor: "Clear mathematical aim and reasonable framing, with minor gaps in focus or justification." },
        { marks: "1–2", descriptor: "Broad, descriptive, or loosely defined aim lacking clear mathematical direction." },
      ],
    },
    {
      code: "B",
      name: "Abstraction",
      maxMarks: 6,
      summary: "Translates the problem into rigorous mathematical representations: variables, definitions, simplifying assumptions, models, notation, and clear mathematical communication.",
      topBandMustHave: [
        "Every variable, domain restriction, parameter, and simplifying assumption is explicitly defined using formal IB mathematical notation (zero calculator syntax like `^` or `1.2E-4` in prose!).",
        "Justifies WHY a specific mathematical model/structure (e.g. separable ODE, sinusoidal function, volume of revolution, continuous PDF, 3D vector plane) fits the problem.",
        "Clean, labelled graphs/diagrams (Desmos / GeoGebra / TI-Nspire CX) integrated seamlessly into the logical flow.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Sophisticated, well-justified mathematical abstraction; assumptions, notation, representations, and logical structure are consistently clear and appropriate to SL/HL level." },
        { marks: "3–4", descriptor: "Sound mathematical modelling and communication with occasional gaps in justifying assumptions or notation precision." },
        { marks: "1–2", descriptor: "Elementary or poorly justified abstraction; unclear variables, unstated assumptions, or weak mathematical presentation." },
      ],
    },
    {
      code: "C",
      name: "Computation",
      maxMarks: 4,
      summary: "Executes accurate, thorough, level-appropriate analytical and/or technological (TI-Nspire CX / software) mathematical calculations and proofs.",
      topBandMustHave: [
        "Mathematics is genuinely commensurate with the level of the course (SL core or HL AHL — e.g. integration by parts, integrating-factor ODEs, Maclaurin series, 3D vector planes, or Bayes/continuous PDFs at HL).",
        "Every algebraic step, differentiation/integration, boundary condition, and GDC/software computation is accurate, verified, and clearly shown (avoiding repetitive 20-row copy-paste tables!).",
        "Demonstrates true understanding — explains key non-trivial transformations rather than dumping black-box software output.",
      ],
      bands: [
        { marks: "4", descriptor: "Thorough, accurate, level-commensurate mathematics demonstrating deep understanding across analytical and/or GDC computation." },
        { marks: "3", descriptor: "Mostly accurate, relevant mathematics with minor arithmetic slips or slightly uneven depth." },
        { marks: "1–2", descriptor: "Elementary calculations, frequent errors, or unverified black-box technology outputs." },
      ],
    },
    {
      code: "D",
      name: "Interpretation",
      maxMarks: 6,
      summary: "Critically interprets mathematical results in context, evaluates assumptions, sensitivity & limitations, and iterates/extends the inquiry with genuine mathematical reflection.",
      topBandMustHave: [
        "Interprets exact numerical/analytical findings directly back to the original question — never stops at 'therefore x = 4.37'.",
        "Tests **model validity & sensitivity**: checks residuals, boundary extremes, parameter perturbations, or compares Model 1 against a refined Model 2 (closing the Inquiry Cycle!).",
        "Evaluates concrete mathematical limitations (not generic fluff like 'human error'!) and proposes specific, mathematically grounded extensions.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Substantial, insightful interpretation and critical evaluation of results, assumptions, and limitations; demonstrates iterative refinement and deep mathematical reflection." },
        { marks: "3–4", descriptor: "Meaningful interpretation and relevant reflection on limitations, though evaluation stays partly surface-level or lacks iterative refinement." },
        { marks: "1–2", descriptor: "Limited or superficial interpretation; generic concluding remarks disconnected from the mathematics." },
      ],
    },
  ] as IaCriterion[],
  exemplarStructure: [
    {
      heading: "1. Problem Specification & Inquiry Aim (~1.5 pages)",
      targetWords: "Crit A (4m)",
      whatToInclude: "Personal hook, sharp mathematical inquiry question, explicit scope/boundaries, and brief roadmap of the mathematical methods you will deploy.",
    },
    {
      heading: "2. Abstraction, Variables & Model Formulation (~3 pages)",
      targetWords: "Crit B (6m)",
      whatToInclude: "Define all variables with units/domains, state & justify simplifying assumptions, derive your starting mathematical model/equations, and include crisp labelled diagrams.",
    },
    {
      heading: "3. Computation, Derivation & Model Execution (~5–6 pages)",
      targetWords: "Crit C (4m)",
      whatToInclude: "Carry out level-appropriate analytical derivations (calculus, ODEs, vectors, probability, proof) paired with clearly explained TI-Nspire CX / GeoGebra verification. Keep raw tables concise (put bulk data in an appendix!).",
    },
    {
      heading: "4. Interpretation, Sensitivity & Iterative Refinement (~3–4 pages)",
      targetWords: "Crit D (6m)",
      whatToInclude: "Translate results back to context, test accuracy against real/known values, expose where Model 1 breaks down, build & compare a refined Model 2 (true Inquiry Cycle!), and reflect critically on mathematical limitations.",
    },
  ] as IaSectionGuide[],
  milestones: [
    {
      phase: "1. Topic Vetting & Inquiry Question (DP1 Term 3)",
      timing: "Apr – Jun 2028 (Tanglin IA Launch)",
      tasks: [
        "Brainstorm 3 candidate questions anchored in FA2029 SL/HL topics (calculus/ODEs, volumes, vectors, probability distributions, complex/Maclaurin, optimization — avoiding retired finance/bivariate cuts!).",
        "Confirm sufficient level-appropriate maths depth with your teacher before collecting data or drafting.",
      ],
    },
    {
      phase: "2. Abstraction, Computation & First Full Draft",
      timing: "Summer 2028 – DP2 Term 4",
      tasks: [
        "Complete all derivations, TI-Nspire CX / GeoGebra plots, and at least one iterative model refinement (Model 1 → Model 2).",
        "Submit full draft (typically ~12–20 cleanly typeset pages in LaTeX/Word equation editor) for your single formal teacher feedback round.",
      ],
    },
    {
      phase: "3. Final Polish & Notation Hygiene",
      timing: "DP2 Term 4 (Nov/Dec 2028)",
      tasks: [
        "Purge every piece of raw computer notation (`*`, `^`, `E-3`), verify all 3 s.f. vs exact values, check every axis label and citation, and confirm Crit D reflection is woven throughout.",
      ],
    },
  ] as IaMilestone[],
  moderatorTraps: [
    "Writing a textbook summary ('The history of Euler's number') with zero genuine inquiry problem or iterative mathematical investigation.",
    "Choosing a topic relying on FA2029-removed content (basic compound interest or elementary linear regression scatterplots) or below DP course level.",
    "Using raw keyboard/calculator syntax (`x^2`, `3*x`, `2.5E-4`, `normCdf(...)`) instead of proper typeset mathematical notation (`x²`, `3x`, `2.5 × 10⁻⁴`).",
    "Dumping unverified black-box software output without showing you understand the underlying mathematical computation.",
    "Treating Criterion D (Interpretation — 6/20 marks!) as a 3-sentence afterthought blaming 'human measurement error' instead of interrogating mathematical assumptions and refining the model.",
  ],
  checklist: [
    "My Exploration follows all 4 FA2029 Inquiry stages: Problem Specification (A), Abstraction (B), Computation (C), and Interpretation (D).",
    "Zero reliance on FA2029-excluded legacy topics (no elementary financial tables, no bivariate correlation/regression, no Euler's method).",
    "Every variable, domain restriction, assumption, and graph axis is explicitly defined in proper typeset mathematical notation.",
    "Mathematical complexity is genuinely commensurate with my level (SL or HL) and every key step is justified, not black-boxed.",
    "My Interpretation section tests limitations mathematically, checks sensitivity/error, and includes at least one genuine model refinement or extension.",
    "Re-check against the final Feb 2027 IBO Maths AA Guide once published before submitting the final DP2 Exploration.",
  ],
};
