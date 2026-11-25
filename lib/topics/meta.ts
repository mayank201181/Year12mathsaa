// ---------------------------------------------------------------------------
// Topic registry for Year 12–13 IB Diploma Mathematics: Analysis & Approaches
// (SL & HL — Provisional: aligned to FA2029 subject brief; full guide due Feb 2027).
//
// FA2029 Cuts STRICTLY EXCLUDED:
//  - Financial applications (former SL 1.4)
//  - Bivariate data / Pearson r / linear regression (former SL 4.4 & SL 4.10)
//  - Proof by counterexample (former AHL 1.15)
//  - Euler's method for ODEs (former AHL 5.18)
// ---------------------------------------------------------------------------
import type { IBLevel, Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  level?: IBLevel;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Which IB Diploma year normally finishes this topic (1 = DP1 / Year 12, 2 = DP2 / Year 13). */
  dpYear: 1 | 2;
  /** Teaching/revision order used when ?dp=2 is active (DP2 first, then DP1). */
  dpOrder: number;
  level: IBLevel;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Topic 1: Number & Algebra",
  "Topic 2: Functions",
  "Topic 3: Geometry & Trigonometry",
  "Topic 4: Statistics & Probability",
  "Topic 5: Calculus",
];

export const TOPIC_META: TopicMeta[] = [
  // ===================== TOPIC 1: NUMBER & ALGEBRA =========================
  {
    id: "1a-number-algebra-core",
    title: "Topic 1A: Sequences, Series, Exponents, Logs & Binomial",
    strand: "Topic 1: Number & Algebra",
    icon: "∑",
    dpYear: 1,
    dpOrder: 5,
    level: "SL",
    curriculum: "IB Maths AA FA2029 Brief — Topic 1 Core (SL 1.1–1.3, 1.5–1.9; AHL 1.10–1.11; FA2029 cut: financial apps excluded)",
    sections: [
      {
        id: "sequences-series-sigma",
        heading: "Standard Form, Arithmetic & Geometric Sequences, Sigma & Infinite Series",
        level: "SL",
        covers: "Scientific notation (a × 10^k), arithmetic sequences/series (u_n, S_n), geometric sequences/series, sigma notation, and convergent infinite geometric series (|r| < 1, S_∞ = u_1 / (1 − r)). (Note: financial compound-interest apps removed in FA2029.)",
      },
      {
        id: "exponents-logarithms-proof",
        heading: "Rational Exponents, Laws of Logarithms & Simple Deductive Proof",
        level: "SL",
        covers: "Integer & rational exponents, natural & base-a logarithms, log laws & change of base, solving exponential/log equations (non-GDC and TI-Nspire CX), and simple algebraic deductive proofs (LHS = RHS).",
      },
      {
        id: "binomial-counting-hl",
        heading: "Binomial Theorem (n ∈ ℕ) & [HL] Counting Principles / Generalized Binomial",
        level: "SL",
        covers: "Pascal's triangle, nCr, expanding (a + b)^n for natural n; [HL] permutations nPr, combinations with restrictions, and the generalized binomial expansion (1 + x)^q for rational/negative q (|x| < 1).",
      },
      {
        id: "partial-fractions-hl",
        heading: "[HL] Algebraic Partial Fractions Decomposition",
        level: "HL",
        covers: "Decomposing proper rational expressions into linear distinct, repeated linear, and irreducible quadratic partial fractions (preparing directly for HL binomial expansions and integration).",
      },
    ],
  },
  {
    id: "1b-complex-proofs-systems",
    title: "Topic 1B: Complex Numbers, Formal Proof & Linear Systems (HL)",
    strand: "Topic 1: Number & Algebra",
    icon: "ℂ",
    dpYear: 2,
    dpOrder: 1,
    level: "HL",
    curriculum: "IB Maths AA FA2029 Brief — Topic 1 HL (AHL 1.12–1.16; FA2029 cut: proof by counterexample excluded)",
    sections: [
      {
        id: "complex-cartesian-argand",
        heading: "[HL] Complex Numbers, Argand Diagrams & Conjugates",
        level: "HL",
        covers: "Cartesian form z = a + bi, arithmetic, complex conjugates z*, modulus |z|, principal argument arg(z) ∈ (−π, π], Argand plane geometry & loci.",
      },
      {
        id: "polar-euler-demoivre",
        heading: "[HL] Polar & Euler Form, De Moivre's Theorem & nth Roots",
        level: "HL",
        covers: "Converting between Cartesian, modulus-argument r(cos θ + i sin θ) = r cis θ, and Euler form r e^(iθ); De Moivre's theorem for powers, trig multiple-angle identities, complex polynomial conjugate roots, and geometric nth roots of complex numbers.",
      },
      {
        id: "induction-contradiction",
        heading: "[HL] Proof by Mathematical Induction & Proof by Contradiction",
        level: "HL",
        covers: "Rigorous weak mathematical induction (summations, divisibility, inequalities, derivatives, De Moivre's theorem) and proof by contradiction (e.g. irrationality of √2, infinitude of primes). (FA2029 cut: proof by counterexample removed.)",
      },
      {
        id: "linear-systems-3x3",
        heading: "[HL] 3×3 Systems of Linear Equations & Row Reduction",
        level: "HL",
        covers: "Gaussian elimination / row-echelon reduction of 3×3 systems with parameters, distinguishing unique solutions, infinitely many solutions (parametric line), and inconsistent systems geometrically.",
      },
    ],
  },

  // ===================== TOPIC 2: FUNCTIONS ================================
  {
    id: "2-functions",
    title: "Topic 2: Functions, Quadratics, Rationals & Polynomials",
    strand: "Topic 2: Functions",
    icon: "ƒ",
    dpYear: 1,
    dpOrder: 6,
    level: "SL",
    curriculum: "IB Maths AA FA2029 Brief — Topic 2 (SL 2.1–2.11 & AHL 2.12–2.16)",
    sections: [
      {
        id: "functions-inverse-transforms",
        heading: "Functions, Domain/Range, Composites, Inverses & Graph Transformations",
        level: "SL",
        covers: "Straight lines, domain/range, composite functions (f ∘ g), one-to-one & inverse functions (reflection in y = x), GDC graph features (TI-Nspire CX roots/extrema/intersections), and translations, reflections & stretches a f(bx + c) + d.",
      },
      {
        id: "quadratics-exponentials-rationals",
        heading: "Quadratics, Discriminant, Exponentials, Logs & Linear Rationals",
        level: "SL",
        covers: "Vertex/factorised/standard quadratic forms, discriminant Δ = b² − 4ac, quadratic inequalities, rational functions (ax + b)/(cx + d) with vertical/horizontal asymptotes, exponential & logarithmic curves and function modelling.",
      },
      {
        id: "polynomials-vieta-rationals-hl",
        heading: "[HL] Polynomials, Factor/Remainder Theorems, Vieta & Oblique Asymptotes",
        level: "HL",
        covers: "Polynomial long/synthetic division, factor & remainder theorems, sum and product of roots of polynomials (Vieta's formulas), and higher rational functions (ax² + bx + c)/(dx + e) and (ax + b)/(cx² + dx + e) with oblique asymptotes.",
      },
      {
        id: "modulus-reciprocal-even-odd-hl",
        heading: "[HL] Odd/Even Functions, Restricted Inverses, Modulus & Reciprocal Graphs",
        level: "HL",
        covers: "Odd/even parity, self-inverse functions, domain restriction to make many-to-one functions invertible, transformations |f(x)|, f(|x|), 1/f(x), [f(x)]², and solving rational, polynomial & modulus inequalities.",
      },
    ],
  },

  // ===================== TOPIC 3: GEOMETRY & TRIGONOMETRY ==================
  {
    id: "3a-geometry-trig",
    title: "Topic 3A: 3D Geometry, Circular Measure & Trigonometry",
    strand: "Topic 3: Geometry & Trigonometry",
    icon: "△",
    dpYear: 1,
    dpOrder: 7,
    level: "SL",
    curriculum: "IB Maths AA FA2029 Brief — Topic 3 Core & Trig Extensions (SL 3.1–3.8 & AHL 3.9–3.11)",
    sections: [
      {
        id: "3d-geometry-sine-cosine",
        heading: "3D Geometry, Sine & Cosine Rules, Ambiguous Case & Bearings",
        level: "SL",
        covers: "3D distance, midpoint, surface area & volume of pyramids/cones/spheres, line-plane angles, sine rule (including ambiguous case!), cosine rule, triangle area ½ab sin C, angles of elevation/depression & true bearings.",
      },
      {
        id: "radians-unit-circle-exact",
        heading: "Radians, Arcs, Sectors, Unit Circle & Exact Special Angles",
        level: "SL",
        covers: "Radian measure, arc length l = rθ, sector area A = ½r²θ, exact trig ratios for 0, π/6, π/4, π/3, π/2 across all 4 quadrants (ASTC / non-GDC mastery!).",
      },
      {
        id: "trig-identities-graphs-equations",
        heading: "Pythagorean & Double-Angle Identities, Sinusoidal Graphs & Equations",
        level: "SL",
        covers: "sin²θ + cos²θ = 1, sin 2θ = 2 sin θ cos θ, cos 2θ forms, sinusoidal modelling a sin(b(x − c)) + d (amplitude, period 2π/b, phase shift), and solving trigonometric equations on bounded domains.",
      },
      {
        id: "reciprocal-inverse-compound-hl",
        heading: "[HL] Reciprocal & Inverse Trig, Compound-Angle & Tangent Identities",
        level: "HL",
        covers: "sec θ, csc θ, cot θ, Pythagorean variants (1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ), restricted domains/ranges of arcsin, arccos, arctan, compound-angle formulas sin(A ± B), cos(A ± B), tan(A ± B), double-angle tan 2θ & trig proofs.",
      },
    ],
  },
  {
    id: "3b-vectors-planes",
    title: "Topic 3B: 3D Vectors, Lines & Planes (HL)",
    strand: "Topic 3: Geometry & Trigonometry",
    icon: "↗",
    dpYear: 2,
    dpOrder: 2,
    level: "HL",
    curriculum: "IB Maths AA FA2029 Brief — Topic 3 HL Vectors (AHL 3.12–3.18)",
    sections: [
      {
        id: "vectors-dot-product",
        heading: "[HL] 3D Vectors, Unit Vectors, Geometric Proofs & Dot Product",
        level: "HL",
        covers: "Position & displacement vectors, magnitude & unit vectors, collinearity & vector geometry proofs, scalar (dot) product v · w = |v||w| cos θ, perpendicularity & acute angle between vectors.",
      },
      {
        id: "vector-lines-skew",
        heading: "[HL] Vector, Parametric & Cartesian Equations of 3D Lines",
        level: "HL",
        covers: "r = a + λb, parametric & symmetric Cartesian forms, kinematics constant-velocity vector paths, and classifying pairs of 3D lines as coincident, parallel, intersecting, or skew.",
      },
      {
        id: "cross-product-planes",
        heading: "[HL] Vector (Cross) Product, Areas & Equations of Planes",
        level: "HL",
        covers: "Cross product v × w (normal vector, right-hand rule), parallelogram area |v × w| & triangle area ½|v × w|, vector r = a + λb + μc, normal r · n = a · n, and Cartesian ax + by + cz = d equations of planes.",
      },
      {
        id: "intersections-angles-distances",
        heading: "[HL] Line–Plane & 3-Plane Intersections, Angles & Shortest Distances",
        level: "HL",
        covers: "Line–plane intersection & acute angle (arcsin of |b · n|/(|b||n|)), dihedral angle between two planes, line of intersection of two planes, 3-plane geometric configurations, and shortest perpendicular distance (point-to-line, point-to-plane, skew lines).",
      },
    ],
  },

  // ===================== TOPIC 4: STATISTICS & PROBABILITY =================
  {
    id: "4-stats-probability",
    title: "Topic 4: Descriptive Statistics, Probability & Distributions",
    strand: "Topic 4: Statistics & Probability",
    icon: "📊",
    dpYear: 2,
    dpOrder: 3,
    level: "SL",
    curriculum: "IB Maths AA FA2029 Brief — Topic 4 (SL 4.1–4.3, 4.5–4.9, 4.11–4.12 & AHL 4.13–4.14; FA2029 cut: bivariate correlation/regression excluded)",
    sections: [
      {
        id: "descriptive-stats-sampling",
        heading: "Sampling, Histograms, Box Plots, Outliers, Variance & Standard Deviation",
        level: "SL",
        covers: "Populations & sampling methods (simple random, systematic, stratified, quota, convenience), cumulative frequency, quartiles/IQR, 1.5×IQR outlier fence, mean/median/mode, variance σ² & standard deviation σ, and linear data coding effects. (FA2029 cut: bivariate r & regression excluded.)",
      },
      {
        id: "probability-conditional-bayes",
        heading: "Combined & Conditional Probability, Independence & [HL] Bayes' Theorem",
        level: "SL",
        covers: "Venn diagrams, tree diagrams, P(A ∪ B), mutually exclusive vs independent events, conditional probability P(A | B) = P(A ∩ B)/P(B); [HL] Bayes' theorem for up to 3 mutually exclusive events.",
      },
      {
        id: "discrete-binomial-normal",
        heading: "Discrete RVs, Binomial B(n, p), Normal Distribution & Inverse Normal",
        level: "SL",
        covers: "Discrete probability distributions & E(X), fair games, Binomial B(n, p) mean np & variance np(1 − p) (TI-Nspire CX binomPdf/binomCdf), Normal N(μ, σ²), z-score standardisation & inverse normal to solve for unknown μ or σ.",
      },
      {
        id: "continuous-rvs-pdf-cdf-hl",
        heading: "[HL] Continuous Random Variables (PDFs, CDFs, Mean, Median, Mode & Variance)",
        level: "HL",
        covers: "Probability density functions ∫ f(x) dx = 1, cumulative distribution functions F(x), computing E(X), Var(X) = E(X²) − [E(X)]², median (∫ f(x) dx = 0.5), mode (max f(x)), and linear transformations E(aX + b), Var(aX + b) = a² Var(X).",
      },
    ],
  },

  // ===================== TOPIC 5: CALCULUS =================================
  {
    id: "5a-differentiation",
    title: "Topic 5A: Limits, Differentiation, Curve Sketching & Optimization",
    strand: "Topic 5: Calculus",
    icon: "d/dx",
    dpYear: 1,
    dpOrder: 8,
    level: "SL",
    curriculum: "IB Maths AA FA2029 Brief — Topic 5 Differentiation (SL 5.1–5.4, 5.6–5.9 & AHL 5.12–5.14)",
    sections: [
      {
        id: "limits-rules-tangents",
        heading: "Informal Limits, Differentiation Rules, Tangents & Normals",
        level: "SL",
        covers: "Informal limits & gradient interpretation, power rule, derivatives of e^x, ln x, sin x, cos x, chain/product/quotient rules, and equations of tangent and normal lines.",
      },
      {
        id: "curve-sketching-optimization-kinematics",
        heading: "Stationary Points, Concavity, Inflection, Optimization & Kinematics",
        level: "SL",
        covers: "Increasing/decreasing intervals (f' > 0), local extrema via 1st & 2nd derivative tests, concavity (f'' > 0) & points of inflection (sign change in f''), real-world optimization, and displacement–velocity–acceleration kinematics.",
      },
      {
        id: "first-principles-lhopital-hl",
        heading: "[HL] First Principles, Continuity/Differentiability & L'Hôpital's Rule",
        level: "HL",
        covers: "Differentiation from first principles f'(x) = lim_{h→0} [f(x+h)−f(x)]/h, continuity vs differentiability at piecewise joins, and L'Hôpital's rule for 0/0 and ∞/∞ indeterminate limits (including repeated applications).",
      },
      {
        id: "implicit-related-rates-trig-hl",
        heading: "[HL] Implicit Differentiation, Related Rates & Extended Derivatives",
        level: "HL",
        covers: "Implicit differentiation of non-explicit curves, connected related-rates problems (cones, shadows, angles), and derivatives of tan x, sec x, csc x, cot x, a^x, log_a x, arcsin x, arccos x, and arctan x.",
      },
    ],
  },
  {
    id: "5b-integration-des-maclaurin",
    title: "Topic 5B: Integration, Volumes, Differential Equations & Maclaurin",
    strand: "Topic 5: Calculus",
    icon: "∫",
    dpYear: 2,
    dpOrder: 4,
    level: "SL",
    curriculum: "IB Maths AA FA2029 Brief — Topic 5 Integration, ODEs & Series (SL 5.5, 5.10–5.11 & AHL 5.15–5.17, 5.19; FA2029 cut: Euler's method excluded)",
    sections: [
      {
        id: "integration-areas-kinematics",
        heading: "Antiderivatives, Simple Substitution, Definite Integrals & Areas",
        level: "SL",
        covers: "Indefinite integration of x^n, 1/x, e^x, sin x, cos x, boundary conditions, inspection & simple u-substitution, definite integrals, signed area vs total area between curves, and total distance vs displacement in kinematics.",
      },
      {
        id: "advanced-integration-volumes-hl",
        heading: "[HL] Integration by Parts, Partial Fractions, Inverse-Trig & Volumes of Revolution",
        level: "HL",
        covers: "Integration by substitution (including trig substitutions), integration by parts (LIATE, repeated & cyclic e^x sin x), partial fractions integration, ∫ 1/(a² + x²) dx & ∫ 1/√(a² − x²) dx, and volumes of revolution about x- and y-axes (π∫y² dx & π∫x² dy).",
      },
      {
        id: "differential-equations-hl",
        heading: "[HL] First-Order ODEs: Separation, Homogeneous (y = vx) & Integrating Factor",
        level: "HL",
        covers: "Slope fields & exact analytical solutions of first-order ODEs via separation of variables, homogeneous substitutions y = vx, and linear integrating factor μ(x) = e^(∫P(x)dx). (FA2029 cut: Euler's method removed.)",
      },
      {
        id: "maclaurin-series-hl",
        heading: "[HL] Maclaurin Series Expansions & Series Solutions of ODEs",
        level: "HL",
        covers: "Constructing Maclaurin polynomials from f^(n)(0)/n!, standard expansions for e^x, sin x, cos x, ln(1 + x), (1 + x)^p, arctan x, combining expansions via substitution/differentiation/integration/multiplication, and deriving series solutions to ODEs.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
