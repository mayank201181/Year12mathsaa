import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "5b-integration-des-maclaurin",
  title: "Topic 5B: Integration, Volumes, Differential Equations & Maclaurin",
  strand: "Topic 5: Calculus",
  icon: "∫",
  level: "SL",
  summary:
    "Reverse differentiation to compute areas, displacements, and volumes of revolution, solve first-order differential equations analytically, and approximate functions and ODEs with Maclaurin series.",
  intro:
    "Integration turns local rates of change back into accumulated totals—from the distance travelled by a sprint cyclist to the exact volume of a rocket nose cone. In the SL core you master antiderivatives, simple substitution, definite integrals, signed versus total area, and kinematics. At HL, integration deepens into by-parts, partial fractions, inverse-trig substitutions, volumes of revolution, exact analytical first-order differential equations (separation, homogeneous substitution, and integrating factors), and Maclaurin power series.",
  guide: [
    // =========================================================================
    // SECTION 1 (SL): Antiderivatives, Simple Substitution, Definite Integrals & Areas
    // =========================================================================
    {
      id: "integration-areas-kinematics",
      heading: "Antiderivatives, Simple Substitution, Definite Integrals & Areas",
      level: "SL",
      discovery: {
        problem:
          "A particle moves along a straight line with velocity {{v(t) = 2t - 4}} m s⁻¹ from {{t = 0}} to {{t = 4}} seconds. Its displacement is {{0}} metres—yet it definitely moved! How far did it actually travel, and why did the raw definite integral vanish?",
        idea:
          "Between {{t = 0}} and {{t = 2}}, velocity is negative (moving backwards {{4}} m); between {{t = 2}} and {{t = 4}}, velocity is positive (moving forwards {{4}} m). Definite integrals compute **signed** accumulation, so negative and positive regions cancel out. Splitting the integral at every root of {{v(t) = 0}} and taking absolute values gives the true total distance of {{8}} m.",
      },
      body: `### Indefinite Integration & Boundary Conditions
Integration is the reverse of differentiation. If {{F'(x) = f(x)}}, then every antiderivative of {{f(x)}} has the form {{F(x) + C}}, where {{C}} is the constant of integration. Because differentiating any constant yields {{0}}, an indefinite integral represents a **vertical family of parallel curves**; a single boundary condition {{(x_0, y_0)}} pins down the unique value of {{C}}.

| Function {{f(x)}} | Indefinite Integral | Key Condition |
| --- | --- | --- |
| {{x^n}} | {{x^(n+1)/(n+1) + C}} | {{n != -1}} |
| {{1/x}} | {{ln|x| + C}} | {{x != 0}} |
| {{e^(ax+b)}} | {{(1/a) e^(ax+b) + C}} | {{a != 0}} |
| {{sin(ax+b)}} | {{-(1/a) cos(ax+b) + C}} | {{a != 0}} (radians) |
| {{cos(ax+b)}} | {{(1/a) sin(ax+b) + C}} | {{a != 0}} (radians) |

### Inspection & Simple {{u}}-Substitution
When an integrand contains a composite function multiplied by a constant multiple of the inner derivative, reverse the chain rule directly:
- **By inspection:** recognise patterns like {{f'(x)/f(x)}} integrating to {{ln|f(x)| + C}}, or {{f'(x) [f(x)]^n}} integrating to {{[f(x)]^(n+1)/(n+1) + C}}.
- **By {{u}}-substitution:** let {{u = g(x)}}, differentiate to get {{du/dx = g'(x)}} (so {{du = g'(x) dx}}), rewrite the entire integral in terms of {{u}}, integrate, and substitute back—or, for a definite integral, **transform the limits** from {{x = a, b}} to {{u = g(a), g(b)}} so you never have to substitute back.

### Definite Integrals, Signed Area & Area Between Curves
By the **Fundamental Theorem of Calculus**, if {{F'(x) = f(x)}} on {{[a, b]}}, then the definite integral is {{F(b) - F(a)}} (the constant {{C}} always cancels).
- **Signed area:** regions above the {{x}}-axis contribute positively; regions below contribute negatively.
- **Total geometric area** between {{y = f(x)}} and the {{x}}-axis on {{[a, b]}}: find every {{x}}-intercept {{c}} inside {{(a, b)}}, split the integral at each root, and sum the magnitudes of each sub-integral—equivalent to integrating {{|f(x)|}}.
- **Area between two curves** {{y = f(x)}} and {{y = g(x)}}: find all intersection points by solving {{f(x) = g(x)}}, determine which curve is on top in each interval, and integrate **top minus bottom**: {{(y_"top" - y_"bottom")}}.

### Kinematics: Displacement vs Total Distance
Velocity is the derivative of displacement ({{v = ds/dt}}), and acceleration is the derivative of velocity ({{a = dv/dt}}). Reversing these:
- **Net displacement** from {{t_1}} to {{t_2}} is the signed definite integral of {{v(t)}}.
- **Total distance travelled** from {{t_1}} to {{t_2}} is the definite integral of speed {{|v(t)|}} (split at every instant where {{v(t) = 0}} and the particle changes direction, or enter \`fnInt(abs(v(t)), t, t1, t2)\` directly on your TI-Nspire CX in Paper 2).`,
      diagram: `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of signed definite integral versus total geometric area for a curve crossing the x-axis">
  <rect x="0" y="0" width="460" height="220" rx="12" fill="var(--surface-2)" />
  <line x1="36" y1="120" x2="430" y2="120" stroke="var(--ink-2)" stroke-width="1.6" />
  <line x1="70" y1="24" x2="70" y2="196" stroke="var(--ink-2)" stroke-width="1.6" />
  <polygon points="430,120 422,116 422,124" fill="var(--ink-2)" />
  <polygon points="70,24 66,32 74,32" fill="var(--ink-2)" />
  <text x="434" y="124" font-size="12" font-weight="700" fill="var(--ink)">x</text>
  <text x="76" y="30" font-size="12" font-weight="700" fill="var(--ink)">y</text>
  <path d="M 100 120 Q 170 28 240 120 L 240 120 Z" fill="var(--good)" fill-opacity="0.24" />
  <path d="M 240 120 Q 310 198 380 120 L 380 120 Z" fill="var(--bad)" fill-opacity="0.24" />
  <path d="M 82 146 Q 170 28 240 120 Q 310 198 398 92" fill="none" stroke="var(--brand)" stroke-width="2.8" stroke-linecap="round" />
  <circle cx="100" cy="120" r="4" fill="var(--brand)" />
  <circle cx="240" cy="120" r="4" fill="var(--brand)" />
  <circle cx="380" cy="120" r="4" fill="var(--brand)" />
  <text x="100" y="138" font-size="11" text-anchor="middle" font-weight="700" fill="var(--ink)">a</text>
  <text x="240" y="108" font-size="11" text-anchor="middle" font-weight="700" fill="var(--ink)">c (root)</text>
  <text x="380" y="138" font-size="11" text-anchor="middle" font-weight="700" fill="var(--ink)">b</text>
  <text x="170" y="96" font-size="13" text-anchor="middle" font-weight="800" fill="var(--good)">+A₁</text>
  <text x="310" y="150" font-size="13" text-anchor="middle" font-weight="800" fill="var(--bad)">−A₂</text>
  <rect x="200" y="14" width="244" height="50" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2" />
  <text x="212" y="34" font-size="11" font-weight="700" fill="var(--ink)">Signed integral (a → b):  A₁ − A₂</text>
  <text x="212" y="53" font-size="11" font-weight="700" fill="var(--brand)">Total geometric area:  A₁ + A₂ = ∫|f(x)| dx</text>
</svg>`,
      diagramCaption:
        "Regions above the {{x}}-axis contribute positively ({{+A_1}}) and regions below contribute negatively ({{-A_2}}). Always split at the root {{c}} to compute total area or total distance.",
      workedExamples: [
        {
          title: "Boundary Condition with Substitution",
          problem:
            "A curve has gradient {{f'(x) = 6x(x^2 + 1)^2}} and passes through {{(0, 5)}}. Find the exact equation of {{f(x)}}.",
          steps: [
            "Recognise the inner function {{u = x^2 + 1}}, whose derivative is {{du/dx = 2x}}, so {{6x dx = 3 du}}.",
            "Rewrite and integrate: the antiderivative of {{3u^2}} with respect to {{u}} is {{u^3 + C}}.",
            "Substitute back {{u = x^2 + 1}}: {{f(x) = (x^2 + 1)^3 + C}}.",
            "Apply the boundary condition {{f(0) = 5}}: {{(0^2 + 1)^3 + C = 5}}, so {{1 + C = 5}} and {{C = 4}}.",
            "Quick check by differentiating: {{f'(x) = 3(x^2 + 1)^2 * 2x = 6x(x^2 + 1)^2}} and {{f(0) = 5}}.",
          ],
          answer: "{{f(x) = (x^2 + 1)^3 + 4}}",
          yourTurn: {
            question:
              "Given {{g'(x) = 6x^2 - 4x + 1}} and {{g(1) = 4}}, find the exact value of {{g(2)}}.",
            answer: { type: "number", value: 13 },
            solution:
              "Integrate term by term: {{g(x) = 2x^3 - 2x^2 + x + C}}. Substitute {{g(1) = 4}}: {{2 - 2 + 1 + C = 4}}, so {{C = 3}}. Thus {{g(2) = 2(8) - 2(4) + 2 + 3 = 13}}.",
          },
        },
        {
          title: "Kinematics: Displacement vs Total Distance",
          problem:
            "A particle moves in a straight line with velocity {{v(t) = t^2 - 4t + 3}} m s⁻¹ for {{0 <= t <= 4}}. Find (a) its net displacement and (b) its total distance travelled over the {{4}} seconds.",
          steps: [
            "Find the antiderivative {{F(t) = t^3/3 - 2t^2 + 3t}}.",
            "For (a) net displacement, evaluate {{F(4) - F(0) = (64/3 - 32 + 12) - 0 = 64/3 - 20 = 4/3}} m.",
            "For (b) total distance, find where {{v(t) = 0}}: {{(t - 1)(t - 3) = 0}}, giving turning instants {{t = 1}} and {{t = 3}} inside {{[0, 4]}}.",
            "Compute {{F(0) = 0}}, {{F(1) = 1/3 - 2 + 3 = 4/3}}, {{F(3) = 9 - 18 + 9 = 0}}, and {{F(4) = 4/3}}.",
            "Sum the magnitudes over each interval: {{|4/3 - 0| + |0 - 4/3| + |4/3 - 0| = 4/3 + 4/3 + 4/3 = 4}} m.",
          ],
          answer: "Displacement {{= 4/3}} m; total distance {{= 4}} m",
          yourTurn: {
            question:
              "Find the exact total geometric area between {{y = x^2 - 4}} and the {{x}}-axis from {{x = 0}} to {{x = 3}}. Give your answer as an improper fraction.",
            answer: { type: "fraction", n: 23, d: 3, simplest: true },
            solution:
              "The curve crosses the {{x}}-axis at {{x = 2}} inside {{[0, 3]}}. With {{F(x) = x^3/3 - 4x}}, {{F(0) = 0}}, {{F(2) = -16/3}}, and {{F(3) = -3}}. Total area {{= |-16/3 - 0| + |-3 - (-16/3)| = 16/3 + 7/3 = 23/3}}.",
          },
        },
      ],
      keyPoints: [
        "Always include {{+ C}} in every indefinite integral; never drop it until a boundary condition determines its value.",
        "For {{1/x}}, the antiderivative is {{ln|x| + C}}—and in general, {{f'(x)/f(x)}} integrates to {{ln|f(x)| + C}}.",
        "When using {{u}}-substitution on a definite integral, immediately change the limits from {{x}} to {{u}}.",
        "Total geometric area and total kinematics distance require splitting the interval at every sign-change root inside {{(a, b)}}.",
        "Area between two curves is always the integral of **(upper curve − lower curve)** between consecutive intersection points.",
      ],
      whyItWorks:
        "A definite integral is the limit of Riemann sums {{sum f(x_i) Delta x}} as rectangle widths {{Delta x -> 0}}. Because each thin rectangle has signed height {{f(x_i)}} and positive width {{Delta x}}, rectangles below the axis have negative signed area. The Fundamental Theorem of Calculus links the instantaneous rate of change of accumulated area {{A'(x) = f(x)}} directly to antiderivatives, turning an infinite sum into a single subtraction {{F(b) - F(a)}}.",
      strategies: [
        "Always differentiate your antiderivative mentally to verify signs and chain-rule factors before moving on.",
        "Sketch a rough sign chart of {{f(x)}} or {{v(t)}} before computing total area or total distance so no root is missed.",
        "For definite integrals involving trig functions, check that your TI-Nspire CX is in **Radians** mode.",
      ],
      thinkDeeper:
        "If {{f(x)}} is an odd function ({{f(-x) = -f(x)}}), its integral over any symmetric interval {{[-a, a]}} is always {{0}}, whereas if {{f(x)}} is even ({{f(-x) = f(x)}}), the integral over {{[-a, a]}} equals twice the integral over {{[0, a]}}. Using parity symmetry can cut Paper 1 algebra in half!",
    },

    // =========================================================================
    // SECTION 2 (HL): Advanced Integration & Volumes of Revolution
    // =========================================================================
    {
      id: "advanced-integration-volumes-hl",
      heading: "[HL] Integration by Parts, Partial Fractions, Inverse-Trig & Volumes of Revolution",
      level: "HL",
      discovery: {
        problem:
          "You know how to integrate {{x e^(x^2)}} by substitution because {{2x}} is the derivative of {{x^2}}. Why does substitution stall completely on {{x e^x}}, and how can we turn the Product Rule backwards to crack it?",
        idea:
          "Differentiating {{u v}} gives {{(uv)' = u'v + uv'}}. Rearranging and integrating yields **Integration by Parts**: choosing {{u = x}} knocks its power down to {{1}} when differentiated, leaving a trivial exponential integral!",
      },
      body: `### Integration by Parts (IBP)
Reversing the product rule gives:
    ∫ u (dv/dx) dx = u v − ∫ v (du/dx) dx

Choose {{u}} using **LIATE** (Logarithmic → Inverse trig → Algebraic → Trigonometric → Exponential):
- **Single pass:** e.g. {{x e^(ax)}}, {{x sin(ax)}}, or {{ln x}} (written as {{1 * ln x}} with {{u = ln x, dv = dx}}).
- **Repeated IBP:** for {{x^2 e^x}} or {{x^2 cos x}}, apply IBP twice, differentiating the polynomial down to a constant.
- **Cyclic ("boomerang") IBP:** for {{e^(ax) sin(bx)}} or {{e^(ax) cos(bx)}}, apply IBP twice with the same choice of {{u}} type; the original integral {{I}} reappears on the right with a negative sign—collect like {{I}} terms and divide!

### Partial Fractions & Inverse-Trig Integrals
- **Partial fractions:** when integrating a proper rational function {{P(x)/Q(x)}} (if improper, perform polynomial division first!), split into linear or repeated-linear fractions so each piece integrates to {{ln|ax + b|}} or a power {{(ax + b)^(-k)}}.
- **Standard HL inverse-trig integrals** (in the IB Formula Booklet):
  - Integral of {{1/(a^2 + x^2)}} is {{(1/a) arctan(x/a) + C}}
  - Integral of {{1/sqrt(a^2 - x^2)}} is {{arcsin(x/a) + C}} (for {{|x| < a}})
- **Completing the square:** expressions like {{1/(x^2 + 4x + 13) = 1/((x+2)^2 + 3^2)}} reduce straight to the {{arctan}} template.
- **Trig substitutions:** use {{x = a sin theta}} for {{sqrt(a^2 - x^2)}} and {{x = a tan theta}} for {{a^2 + x^2}}, remembering to substitute {{dx}} AND transform limits to {{theta}}.

### Volumes of Revolution (Disk & Washer Method)
Rotating a region {{2pi}} radians (a full turn) around an axis slices the solid into thin circular disks:
- **About the {{x}}-axis** (radius {{y}}, thickness {{dx}}): {{V = pi}} times the integral from {{a}} to {{b}} of {{y^2 dx}}.
- **About the {{y}}-axis** (radius {{x}}, thickness {{dy}}): {{V = pi}} times the integral from {{c}} to {{d}} of {{x^2 dy}} (rearrange to express {{x^2}} in terms of {{y}}, and use **{{y}}-limits**!).
- **Washer (ring) between two curves** about the {{x}}-axis: {{V = pi}} times the integral of {{(y_"outer"^2 - y_"inner"^2) dx}}—**never** {{(y_"outer" - y_"inner")^2}}!`,
      diagram: `<svg viewBox="0 0 460 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Volume of revolution solid showing a thin circular disk slice of radius y and thickness dx rotated about the x-axis">
  <rect x="0" y="0" width="460" height="225" rx="12" fill="var(--surface-2)" />
  <line x1="36" y1="120" x2="430" y2="120" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="5 4" />
  <line x1="76" y1="22" x2="76" y2="206" stroke="var(--ink-2)" stroke-width="1.5" />
  <text x="434" y="124" font-size="12" font-weight="700" fill="var(--ink)">x</text>
  <text x="82" y="28" font-size="12" font-weight="700" fill="var(--ink)">y</text>
  <path d="M 110 92 Q 210 56 360 44 L 360 196 Q 210 184 110 148 Z" fill="var(--brand)" fill-opacity="0.12" />
  <ellipse cx="110" cy="120" rx="11" ry="28" fill="var(--brand)" fill-opacity="0.18" stroke="var(--brand)" stroke-width="1.5" />
  <ellipse cx="360" cy="120" rx="22" ry="76" fill="var(--brand)" fill-opacity="0.12" stroke="var(--brand)" stroke-width="1.8" />
  <path d="M 110 92 Q 210 56 360 44" fill="none" stroke="var(--brand)" stroke-width="2.6" />
  <path d="M 110 148 Q 210 184 360 196" fill="none" stroke="var(--brand)" stroke-width="1.8" stroke-dasharray="4 3" />
  <rect x="226" y="62" width="18" height="116" fill="var(--accent)" fill-opacity="0.30" />
  <ellipse cx="226" cy="120" rx="15" ry="58" fill="var(--accent)" fill-opacity="0.28" stroke="var(--accent)" stroke-width="2" />
  <ellipse cx="244" cy="120" rx="15" ry="58" fill="var(--accent)" fill-opacity="0.40" stroke="var(--accent)" stroke-width="2" />
  <line x1="244" y1="120" x2="244" y2="62" stroke="var(--ink)" stroke-width="2" />
  <text x="262" y="95" font-size="12" font-weight="800" fill="var(--ink)">r = f(x)</text>
  <text x="235" y="196" font-size="11" text-anchor="middle" font-weight="700" fill="var(--accent)">dx</text>
  <text x="110" y="166" font-size="11" text-anchor="middle" font-weight="700" fill="var(--ink)">a</text>
  <text x="360" y="212" font-size="11" text-anchor="middle" font-weight="700" fill="var(--ink)">b</text>
  <rect x="14" y="10" width="212" height="36" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2" />
  <text x="24" y="33" font-size="11" font-weight="700" fill="var(--ink)">Thin disk volume: dV = π [f(x)]² dx</text>
</svg>`,
      diagramCaption:
        "Each cross-section perpendicular to the {{x}}-axis is a disk of radius {{y = f(x)}} and thickness {{dx}}, giving {{dV = pi y^2 dx}}.",
      workedExamples: [
        {
          title: "Definite Integration by Parts",
          problem: "Find the exact value of the definite integral of {{x e^(2x)}} from {{x = 0}} to {{x = 1}}.",
          steps: [
            "Using LIATE, set {{u = x}} (Algebraic) and {{dv/dx = e^(2x)}} (Exponential).",
            "Differentiate and integrate: {{du/dx = 1}} and {{v = (1/2) e^(2x)}}.",
            "Apply IBP: {{[(1/2) x e^(2x)]}} from {{0}} to {{1}}, minus {{(1/2)}} times the integral of {{e^(2x)}} from {{0}} to {{1}}.",
            "Evaluate the remaining integral: {{[(1/2) x e^(2x) - (1/4) e^(2x)]}} from {{0}} to {{1}}.",
            "Substitute limits: {{(e^2/2 - e^2/4) - (0 - 1/4) = e^2/4 + 1/4 = (e^2 + 1)/4}}.",
          ],
          answer: "{{(e^2 + 1)/4}}",
          yourTurn: {
            question: "Evaluate the exact definite integral of {{ln x}} from {{x = 1}} to {{x = e}}.",
            answer: { type: "number", value: 1 },
            solution:
              "Set {{u = ln x}}, {{dv/dx = 1}} so {{du/dx = 1/x}}, {{v = x}}. Then the antiderivative is {{x ln x - x}}. Evaluating from {{1}} to {{e}} gives {{(e * 1 - e) - (1 * 0 - 1) = 0 - (-1) = 1}}.",
          },
        },
        {
          title: "Inverse-Trig Integral & Volume of Revolution",
          problem:
            "The region bounded by {{y = 1/sqrt(4 + x^2)}}, the {{x}}-axis, {{x = 0}}, and {{x = 2}} is rotated {{2pi}} radians about the {{x}}-axis. Find the exact volume generated.",
          steps: [
            "Write the disk-method formula: {{V = pi}} times the integral from {{0}} to {{2}} of {{y^2 dx}}.",
            "Square {{y}}: {{y^2 = 1/(4 + x^2) = 1/(2^2 + x^2)}}.",
            "Apply the standard inverse-tangent integral with {{a = 2}}: antiderivative is {{(1/2) arctan(x/2)}}.",
            "Evaluate between {{x = 0}} and {{x = 2}}: {{V = pi * [(1/2) arctan(2/2) - (1/2) arctan(0)]}}.",
            "Since {{arctan(1) = pi/4}} and {{arctan(0) = 0}}, {{V = (pi/2)(pi/4) = pi^2/8}}.",
          ],
          answer: "{{pi^2/8}}",
          yourTurn: {
            question:
              "The region bounded by {{y = sqrt(x)}}, the {{y}}-axis, and the line {{y = 2}} is rotated {{2pi}} radians about the **{{y}}-axis**. Find the exact value of {{V/pi}} as an improper fraction.",
            answer: { type: "fraction", n: 32, d: 5, simplest: true },
            solution:
              "For rotation about the {{y}}-axis, express {{x}} in terms of {{y}}: {{x = y^2}}, so {{x^2 = y^4}}. Then {{V/pi}} is the integral of {{y^4 dy}} from {{y = 0}} to {{y = 2}}, which equals {{[y^5/5]_0^2 = 32/5}}.",
          },
        },
      ],
      keyPoints: [
        "Follow **LIATE** when choosing {{u}} for integration by parts; for {{ln x}} or {{arctan x}} alone, take {{dv/dx = 1}}.",
        "Always check whether a rational integrand is proper before partial fractions; if degree(top) ≥ degree(bottom), divide first.",
        "Recognise {{1/(a^2 + x^2)}} → {{(1/a) arctan(x/a)}} and {{1/sqrt(a^2 - x^2)}} → {{arcsin(x/a)}} immediately—notice the missing {{1/a}} factor on {{arcsin}}!",
        "For volumes about the {{y}}-axis, rewrite the equation as {{x^2 = g(y)}} and convert BOTH limits to {{y}}-values.",
        "For a hollow washer between outer radius {{R}} and inner radius {{r}}, integrate {{R^2 - r^2}}, NOT {{(R - r)^2}}.",
      ],
      whyItWorks:
        "Integration by parts is literally the Product Rule integrated from {{a}} to {{b}}: the total change in the area of a rectangle {{u(x) v(x)}} equals the sum of horizontal strips {{v du}} and vertical strips {{u dv}}. Similarly, the disk formula {{V = pi}}∫{{y^2 dx}} sums cylindrical wafers of base area {{pi r^2}} and height {{dx}}; as {{dx -> 0}}, the stepped stack converges to the exact smooth solid of revolution.",
      strategies: [
        "Before reaching for integration by parts or partial fractions, pause for 3 seconds: could a simple {{u}}-substitution (like {{u = denominator}}) solve it in two lines?",
        "For cyclic IBP (e.g. {{e^x cos x}}), label the target integral {{I}} on line 1 and keep track of minus signs carefully inside brackets.",
        "Double-check volume integrals by estimating the bounding cylinder {{pi R^2 h}}—your exact volume MUST be strictly smaller than the enclosing cylinder.",
      ],
      thinkDeeper:
        "When you integrate {{1/x}} from {{1}} to {{∞}}, the area is infinite (since {{ln x -> ∞}}), yet rotating {{y = 1/x}} for {{x >= 1}} about the {{x}}-axis gives a finite volume {{V = pi}} (Gabriel's Horn) because {{1/x^2}} shrinks fast enough to converge!",
    },

    // =========================================================================
    // SECTION 3 (HL): First-Order ODEs (Analytical Methods — FA2029)
    // =========================================================================
    {
      id: "differential-equations-hl",
      heading: "[HL] First-Order ODEs: Separation, Homogeneous (y = vx) & Integrating Factor",
      level: "HL",
      discovery: {
        problem:
          "How can you solve {{dy/dx + (2/x)y = 4x}} when {{x}} and {{y}} cannot be separated onto opposite sides? Look closely at the left-hand side if you multiply the entire equation by {{x^2}}: {{x^2 (dy/dx) + 2xy}}!",
        idea:
          "Multiplying by {{x^2}} turns the left-hand side into an **exact Product Rule derivative**: {{d/dx(x^2 y) = 4x^3}}! That magic multiplier {{mu(x) = e^(int P(x) dx)}}—the **integrating factor**—works for EVERY linear first-order differential equation.",
      },
      body: `### Slope Fields & Particular Solutions
A first-order ordinary differential equation (ODE) {{dy/dx = F(x, y)}} assigns a gradient to every point {{(x, y)}} in the plane. Plotting short line segments with slope {{F(x, y)}} produces a **slope field** (direction field). Solution curves glide tangent to these segments: the **general solution** is a one-parameter family containing constant {{C}}, and an initial condition {{y(x_0) = y_0}} selects the unique **particular solution**.

### Method 1: Separation of Variables
When the ODE can be factored into {{dy/dx = g(x) h(y)}}:
1. Separate all {{y}}-terms onto the LHS and all {{x}}-terms onto the RHS: {{(1/h(y)) dy = g(x) dx}}.
2. Integrate both sides, adding a single constant {{+ C}} on the {{x}}-side.
3. Apply any initial condition immediately (often cleanest before solving explicitly for {{y}}!).
4. Check for lost constant solutions where {{h(y) = 0}} (e.g. {{y = 0}} in exponential or logistic growth).

### Method 2: Homogeneous First-Order ODEs ({{y = vx}})
An ODE is **homogeneous** if {{dy/dx}} can be written purely as a function of the ratio {{y/x}} (every term in numerator and denominator has the same total degree in {{x}} and {{y}}).
1. Substitute {{y = vx}}, where {{v}} is a function of {{x}}.
2. By the Product Rule, {{dy/dx = v + x (dv/dx)}}.
3. Substitute both into the ODE; {{v}} will simplify so the equation becomes **separable** in {{v}} and {{x}}!
4. Integrate, substitute back {{v = y/x}}, and apply the initial condition.

### Method 3: Linear ODEs via Integrating Factor
Write any linear first-order ODE in **standard form** (coefficient of {{dy/dx}} MUST be {{1}}!):
    dy/dx + P(x) y = Q(x)
1. Compute the **integrating factor** {{mu(x) = e^(I(x))}}, where {{I(x)}} is an antiderivative of {{P(x)}} (omit {{+ C}} here—any constant multiple cancels out).
2. Multiply every term of the standard-form equation by {{mu(x)}}. The LHS automatically collapses to the exact derivative {{d/dx [mu(x) y]}}.
3. Integrate both sides with respect to {{x}}: {{mu(x) y =}} integral of {{mu(x) Q(x) dx + C}}.
4. Divide by {{mu(x)}} to isolate {{y(x)}} and apply any initial condition.`,
      diagram: `<svg viewBox="0 0 460 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Slope field for a first-order differential equation showing tangent segments and two particular solution curves">
  <rect x="0" y="0" width="460" height="225" rx="12" fill="var(--surface-2)" />
  <line x1="40" y1="184" x2="430" y2="184" stroke="var(--ink-2)" stroke-width="1.5" />
  <line x1="88" y1="20" x2="88" y2="204" stroke="var(--ink-2)" stroke-width="1.5" />
  <text x="434" y="188" font-size="12" font-weight="700" fill="var(--ink)">x</text>
  <text x="94" y="28" font-size="12" font-weight="700" fill="var(--ink)">y</text>
  <g stroke="var(--ink-2)" stroke-width="1.3" stroke-opacity="0.55" stroke-linecap="round">
    <line x1="114" y1="168" x2="128" y2="162" /><line x1="164" y1="168" x2="178" y2="162" /><line x1="214" y1="168" x2="228" y2="162" /><line x1="264" y1="168" x2="278" y2="162" /><line x1="314" y1="168" x2="328" y2="162" /><line x1="364" y1="168" x2="378" y2="162" />
    <line x1="114" y1="138" x2="128" y2="128" /><line x1="164" y1="138" x2="178" y2="128" /><line x1="214" y1="138" x2="228" y2="128" /><line x1="264" y1="138" x2="278" y2="128" /><line x1="314" y1="138" x2="328" y2="128" /><line x1="364" y1="138" x2="378" y2="128" />
    <line x1="115" y1="108" x2="127" y2="94" /><line x1="165" y1="108" x2="177" y2="94" /><line x1="215" y1="108" x2="227" y2="94" /><line x1="265" y1="108" x2="277" y2="94" /><line x1="315" y1="108" x2="327" y2="94" /><line x1="365" y1="108" x2="377" y2="94" />
    <line x1="116" y1="76" x2="126" y2="58" /><line x1="166" y1="76" x2="176" y2="58" /><line x1="216" y1="76" x2="226" y2="58" /><line x1="266" y1="76" x2="276" y2="58" /><line x1="316" y1="76" x2="326" y2="58" /><line x1="366" y1="76" x2="376" y2="58" />
  </g>
  <path d="M 88 156 C 170 144, 240 112, 310 34" fill="none" stroke="var(--brand)" stroke-width="2.8" />
  <path d="M 88 172 C 190 165, 290 138, 395 54" fill="none" stroke="var(--accent)" stroke-width="2.6" stroke-dasharray="6 4" />
  <circle cx="88" cy="156" r="4.5" fill="var(--brand)" />
  <circle cx="88" cy="172" r="4.5" fill="var(--accent)" />
  <rect x="218" y="14" width="226" height="48" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2" />
  <text x="230" y="33" font-size="11" font-weight="700" fill="var(--brand)">— Curve 1: initial condition y(0) = y₁</text>
  <text x="230" y="51" font-size="11" font-weight="700" fill="var(--accent)">--- Curve 2: initial condition y(0) = y₂</text>
</svg>`,
      diagramCaption:
        "A slope field displays the local gradient {{dy/dx = F(x, y)}} at each point. Every initial condition threads a unique particular solution curve tangent to the segments.",
      workedExamples: [
        {
          title: "Homogeneous ODE via {{y = vx}}",
          problem:
            "Solve the differential equation {{dy/dx = (x^2 + y^2)/(xy)}} for {{x > 0, y > 0}}, given that {{y = 2}} when {{x = 1}}.",
          steps: [
            "Divide numerator and denominator by {{x^2}}: {{dy/dx = (1 + (y/x)^2)/(y/x)}}, confirming the ODE is homogeneous.",
            "Substitute {{y = vx}} and {{dy/dx = v + x (dv/dx)}}: {{v + x (dv/dx) = 1/v + v}}.",
            "Cancel {{v}} from both sides to get {{x (dv/dx) = 1/v}}, then separate variables: {{v dv = (1/x) dx}}.",
            "Integrate both sides: {{v^2/2 = ln x + C}}. Substitute {{v = y/x}}: {{y^2/(2x^2) = ln x + C}}.",
            "Apply {{x = 1, y = 2}}: {{4/2 = ln 1 + C}}, giving {{C = 2}}. Hence {{y^2 = 2x^2(ln x + 2)}} and {{y = x sqrt(2 ln x + 4)}} (taking the positive root since {{y > 0}}).",
          ],
          answer: "{{y = x sqrt(2 ln x + 4)}}",
        },
        {
          title: "Linear ODE via Integrating Factor",
          problem:
            "Solve {{x (dy/dx) + 2y = 4x^2}} ({{x > 0}}) subject to {{y(1) = 3}}.",
          steps: [
            "Divide by {{x}} to reach standard form: {{dy/dx + (2/x) y = 4x}}, so {{P(x) = 2/x}} and {{Q(x) = 4x}}.",
            "Compute the integrating factor: {{mu(x) = e^(2 ln x) = x^2}} (since {{x > 0}}).",
            "Multiply the standard form by {{x^2}}: {{x^2 (dy/dx) + 2xy = 4x^3}}, which is {{d/dx(x^2 y) = 4x^3}}.",
            "Integrate both sides: {{x^2 y = x^4 + C}}.",
            "Use {{y(1) = 3}}: {{1 * 3 = 1 + C}}, so {{C = 2}}. Divide by {{x^2}} to get {{y = x^2 + 2/x^2}}.",
          ],
          answer: "{{y = x^2 + 2/x^2}}",
          yourTurn: {
            question:
              "Solve {{dy/dx + (1/x) y = 3x}} ({{x > 0}}) with {{y(1) = 5}}, and find the exact value of {{y(2)}}.",
            answer: { type: "number", value: 6 },
            solution:
              "Here {{P(x) = 1/x}}, so {{mu(x) = e^(ln x) = x}}. Multiplying gives {{d/dx(xy) = 3x^2}}, hence {{xy = x^3 + C}}. At {{x = 1, y = 5}}, {{5 = 1 + C}} so {{C = 4}}. Thus {{y = x^2 + 4/x}}, and {{y(2) = 4 + 2 = 6}}.",
          },
        },
      ],
      keyPoints: [
        "Before choosing an integrating factor, ALWAYS divide through so the coefficient of {{dy/dx}} is {{1}}.",
        "Simplify {{e^(k ln x)}} directly to {{x^k}} (for {{x > 0}}) and {{e^(-ln x)}} to {{1/x}}—never leave exponentials of logs unsimplified.",
        "In a homogeneous ODE, setting {{y = vx}} ALWAYS replaces {{dy/dx}} by {{v + x (dv/dx)}} (do not forget the {{v}} term from the Product Rule!).",
        "Add {{+ C}} immediately after integrating—never AFTER dividing by the integrating factor {{mu(x)}}!",
        "Check every particular solution in 10 seconds by plugging {{y}} and {{dy/dx}} back into the original ODE and verifying the initial condition.",
      ],
      whyItWorks:
        "If we multiply {{dy/dx + P(x)y = Q(x)}} by an unknown function {{mu(x)}}, we want the LHS {{mu y' + mu P y}} to match the Product Rule {{(mu y)' = mu y' + mu' y}}. Equating coefficients gives {{mu'/mu = P(x)}}, whose separable solution is {{ln|mu| =}}∫{{P(x) dx}}, or {{mu(x) = e^(int P(x) dx)}}. Thus the integrating factor is itself born from separation of variables!",
      strategies: [
        "Use a 3-step decision tree on any 1st-order ODE: (1) Can it separate directly? (2) Is it linear in {{y}} and {{y'}}? (Use integrating factor.) (3) Are numerator and denominator homogeneous in {{x, y}}? (Use {{y = vx}}.)",
        "When separating {{dy/y = k dx}}, writing the constant as {{ln A}} yields {{y = A e^(kx)}} cleanly without awkward {{e^C}} exponents.",
        "Watch domain signs: {{e^(ln|x|) = |x|}}; IB questions usually state {{x > 0}} so you can write {{x}} cleanly.",
      ],
      thinkDeeper:
        "Notice how homogeneous ODEs are scale-invariant: stretching both {{x}} and {{y}} by any factor {{k}} leaves {{y/x}}—and therefore the slope {{dy/dx}}—completely unchanged. Geometrically, every ray from the origin cuts all solution curves at the exact same angle!",
    },

    // =========================================================================
    // SECTION 4 (HL): Maclaurin Series Expansions & Series Solutions of ODEs
    // =========================================================================
    {
      id: "maclaurin-series-hl",
      heading: "[HL] Maclaurin Series Expansions & Series Solutions of ODEs",
      level: "HL",
      discovery: {
        problem:
          "How does your calculator compute {{sin(0.2)}} or {{e^(0.1)}} to 10 decimal places when its processor can only add, subtract, multiply, and divide?",
        idea:
          "Build a polynomial {{P_N(x)}} that matches not only the function's value {{f(0)}}, but also its slope {{f'(0)}}, curvature {{f''(0)}}, and every higher derivative {{f^(n)(0)}} at {{x = 0}}. Dividing the {{n}}th derivative by {{n!}} guarantees that differentiating {{x^n}} {{n}} times lands cleanly on {{f^(n)(0)}}!",
      },
      body: `### The Maclaurin Series Formula
If {{f}} is infinitely differentiable at {{x = 0}}, its **Maclaurin series** is:
    f(x) = f(0) + f'(0) x + f''(0) x²/2! + f'''(0) x³/3! + … + f^(n)(0) xⁿ/n! + …

### Standard IB Formula Booklet Maclaurin Expansions
Memorise the first few terms AND the **interval of validity** of each standard series:

| Function | Maclaurin Expansion | Valid for |
| --- | --- | --- |
| {{e^x}} | {{1 + x + x^2/2! + x^3/3! + ...}} | all {{x in R}} |
| {{sin x}} | {{x - x^3/3! + x^5/5! - ...}} | all {{x in R}} |
| {{cos x}} | {{1 - x^2/2! + x^4/4! - ...}} | all {{x in R}} |
| {{ln(1 + x)}} | {{x - x^2/2 + x^3/3 - x^4/4 + ...}} | {{-1 < x <= 1}} |
| {{arctan x}} | {{x - x^3/3 + x^5/5 - ...}} | {{-1 <= x <= 1}} |
| {{(1 + x)^p}} | {{1 + px + p(p-1)x^2/2! + p(p-1)(p-2)x^3/3! + ...}} | {{|x| < 1}} (for non-integer {{p}}) |

### Combining Known Series (Fast Exam Shortcuts!)
Instead of computing messy 4th and 5th derivatives from scratch, build new series from the standard table by:
- **Substitution:** replace {{x}} by {{2x}}, {{-x^2}}, or {{x - x^2/2}} (e.g. {{e^(-x^2) = 1 - x^2 + x^4/2 - ...}}).
- **Algebraic multiplication / division:** expand each factor up to the required degree {{N}} and collect only terms with degree {{<= N}}.
- **Term-by-term differentiation or integration:** integrating {{1/(1 + x^2) = 1 - x^2 + x^4 - ...}} immediately produces {{arctan x = x - x^3/3 + x^5/5 - ...}}; integrating {{1/(1 + x)}} produces {{ln(1 + x)}}!

### Maclaurin Series Solutions of ODEs
Even when an ODE like {{dy/dx = y^2 + x}} has no elementary closed-form solution, you can still find its Maclaurin polynomial!
1. Read {{y(0)}} from the initial condition.
2. Plug {{x = 0}} and {{y(0)}} directly into the ODE to get {{y'(0)}}.
3. Differentiate the ODE **implicitly** with respect to {{x}} to express {{y''}} in terms of {{x, y, y'}}, then evaluate {{y''(0)}}.
4. Repeat to obtain {{y'''(0)}}, {{y^(4)(0)}}, etc., and assemble {{y(x) = y(0) + y'(0)x + y''(0)x^2/2! + y'''(0)x^3/3! + ...}}.`,
      diagram: `<svg viewBox="0 0 460 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maclaurin polynomials P1, P3, and P5 progressively hugging sin x around the origin">
  <rect x="0" y="0" width="460" height="225" rx="12" fill="var(--surface-2)" />
  <line x1="28" y1="116" x2="432" y2="116" stroke="var(--ink-2)" stroke-width="1.4" />
  <line x1="230" y1="18" x2="230" y2="210" stroke="var(--ink-2)" stroke-width="1.4" />
  <text x="436" y="120" font-size="11" font-weight="700" fill="var(--ink)">x</text>
  <text x="236" y="26" font-size="11" font-weight="700" fill="var(--ink)">y</text>
  <line x1="158" y1="202" x2="302" y2="30" stroke="var(--bad)" stroke-width="1.8" stroke-dasharray="5 4" />
  <path d="M 102 32 C 138 148, 178 186, 230 116 C 282 46, 322 84, 358 200" fill="none" stroke="var(--accent)" stroke-width="2.1" stroke-dasharray="8 4" />
  <path d="M 52 178 C 94 218, 148 188, 230 116 C 312 44, 366 14, 408 54" fill="none" stroke="var(--brand)" stroke-width="3" />
  <circle cx="230" cy="116" r="4" fill="var(--ink)" />
  <rect x="14" y="12" width="186" height="62" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2" />
  <text x="24" y="30" font-size="11" font-weight="700" fill="var(--brand)">— True curve: y = sin x</text>
  <text x="24" y="47" font-size="11" font-weight="700" fill="var(--bad)">--- P₁(x) = x (tangent line)</text>
  <text x="24" y="64" font-size="11" font-weight="700" fill="var(--accent)">- - P₃(x) = x − x³/6</text>
</svg>`,
      diagramCaption:
        "Higher-degree Maclaurin polynomials match more derivatives at {{x = 0}}, hugging {{y = sin x}} accurately across a wider interval.",
      workedExamples: [
        {
          title: "Multiplying Standard Maclaurin Series",
          problem:
            "Using standard Maclaurin series, find the expansion of {{e^x cos x}} up to and including the term in {{x^3}}.",
          steps: [
            "Write each factor up to {{x^3}}: {{e^x = 1 + x + x^2/2 + x^3/6 + ...}} and {{cos x = 1 - x^2/2 + ...}}.",
            "Multiply and discard any term with power strictly greater than {{3}}.",
            "Constant term: {{1 * 1 = 1}}. Term in {{x}}: {{x * 1 = x}}.",
            "Term in {{x^2}}: {{(x^2/2)(1) + (1)(-x^2/2) = 0}}.",
            "Term in {{x^3}}: {{(x^3/6)(1) + (x)(-x^2/2) = (1/6 - 1/2)x^3 = -(1/3)x^3}}.",
          ],
          answer: "{{1 + x - x^3/3}}",
        },
        {
          title: "Maclaurin Series Solution of a Nonlinear ODE",
          problem:
            "Given {{dy/dx = y^2 + x}} with {{y(0) = 1}}, find the Maclaurin polynomial of {{y(x)}} up to the term in {{x^3}}.",
          steps: [
            "Initial value: {{y(0) = 1}}.",
            "Substitute {{x = 0, y = 1}} into the ODE: {{y'(0) = 1^2 + 0 = 1}}.",
            "Differentiate implicitly with respect to {{x}}: {{y'' = 2y y' + 1}}, so {{y''(0) = 2(1)(1) + 1 = 3}}.",
            "Differentiate again using the Product Rule: {{y''' = 2(y')^2 + 2y y''}}, so {{y'''(0) = 2(1)^2 + 2(1)(3) = 8}}.",
            "Assemble {{y(x) = 1 + 1*x + (3/2!)x^2 + (8/3!)x^3 = 1 + x + (3/2)x^2 + (4/3)x^3}}.",
          ],
          answer: "{{1 + x + (3/2)x^2 + (4/3)x^3}}",
          yourTurn: {
            question:
              "Given {{dy/dx = x + 2y}} with {{y(0) = 1}}, find the exact coefficient of {{x^3}} in the Maclaurin series of {{y(x)}} as a simplified fraction.",
            answer: { type: "fraction", n: 5, d: 3, simplest: true },
            solution:
              "{{y(0) = 1}}, {{y'(0) = 0 + 2(1) = 2}}. Differentiating: {{y'' = 1 + 2y'}} gives {{y''(0) = 1 + 4 = 5}}; {{y''' = 2y''}} gives {{y'''(0) = 10}}. The coefficient of {{x^3}} is {{y'''(0)/3! = 10/6 = 5/3}}.",
          },
        },
      ],
      keyPoints: [
        "Every term in a Maclaurin series is divided by {{n!}}—do not confuse {{f^(n)(0)}} with the coefficient {{f^(n)(0)/n!}}.",
        "Notice {{ln(1 + x)}} and {{arctan x}} have plain denominators {{n}}, NOT {{n!}}, because they come from integrating geometric series.",
        "Parity shortcut: even functions ({{cos x}}, {{e^(-x^2)}}) have ONLY even powers; odd functions ({{sin x}}, {{arctan x}}) have ONLY odd powers.",
        "To expand {{ln(2 + x)}}, ALWAYS factor out {{2}} first: {{ln(2 + x) = ln 2 + ln(1 + x/2)}}.",
        "For ODE Maclaurin solutions, apply the Product and Chain Rules carefully when differentiating {{y}} implicitly with respect to {{x}}.",
      ],
      whyItWorks:
        "If a smooth function equals a power series {{c_0 + c_1 x + c_2 x^2 + c_3 x^3 + ...}}, differentiating {{n}} times kills all terms below {{x^n}}, multiplies {{c_n}} by {{n(n-1)...1 = n!}}, and leaves powers of {{x}} on every higher term. Evaluating at {{x = 0}} wipes out every higher term, forcing {{c_n = f^(n)(0)/n!}} uniquely.",
      strategies: [
        "For composite functions like {{e^(sin x)}}, expand the outer series first in terms of {{u = sin x}}, substitute {{u = x - x^3/6 + ...}}, and truncate anything beyond the target degree immediately.",
        "Maclaurin series also crack tricky HL limits (like {{(sin x - x)/x^3}} as {{x -> 0}}) in one line without repeated L'Hôpital's Rule!",
        "Verify an ODE Maclaurin polynomial by substituting your polynomial back into both sides of the ODE and checking that coefficients match up to degree {{N - 1}}.",
      ],
      thinkDeeper:
        "Why does the Maclaurin series of {{1/(1 + x^2)}} stop converging at {{|x| = 1}} even though {{1/(1 + x^2)}} is completely smooth on the entire real line? Because in the complex plane it blows up at {{z = i}} and {{z = -i}}, which sit at distance {{1}} from the origin!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the indefinite integral of {{f'(x)/f(x)}}?",
        back: "{{ln|f(x)| + C}}. Always check whether the numerator is a constant multiple of the derivative of the denominator before trying harder techniques.",
        level: "SL",
      },
      {
        front: "How do net displacement and total distance differ when integrating velocity {{v(t)}} over {{[t_1, t_2]}}?",
        back: "Net displacement is the signed definite integral of {{v(t)}}; total distance is the integral of speed {{|v(t)|}}, found by splitting at every sign-change root of {{v(t) = 0}}.",
        level: "SL",
      },
      {
        front: "What is the formula for the area enclosed between an upper curve {{y = f(x)}} and a lower curve {{y = g(x)}} from {{x = a}} to {{x = b}}?",
        back: "Integrate {{[f(x) - g(x)] dx}} from {{a}} to {{b}} (split at any intersection point where the curves swap positions).",
        level: "SL",
      },
      {
        front: "What must you remember to do when using {{u}}-substitution on a definite integral?",
        back: "Convert BOTH limits of integration from {{x = a, b}} to {{u = g(a), g(b)}} (or substitute back into {{x}} before applying the original {{x}}-limits).",
        level: "SL",
      },
      {
        front: "What is the indefinite integral of {{e^(ax + b)}} and {{cos(ax + b)}}?",
        back: "{{(1/a) e^(ax + b) + C}} and {{(1/a) sin(ax + b) + C}} (for {{a != 0}} and radians).",
        level: "SL",
      },
      {
        front: "If {{f(x)}} is an odd function, what is the definite integral of {{f(x)}} from {{-a}} to {{a}}?",
        back: "{{0}} — the signed areas on {{[-a, 0]}} and {{[0, a]}} are equal in magnitude and opposite in sign.",
        level: "SL",
      },
      {
        front: "State the Integration by Parts formula and the LIATE priority order for choosing {{u}}.",
        back: "∫ {{u (dv/dx) dx = uv -}} ∫ {{v (du/dx) dx}}. **LIATE**: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.",
        level: "HL",
      },
      {
        front: "What are the two standard HL inverse-trig integrals for {{1/(a^2 + x^2)}} and {{1/sqrt(a^2 - x^2)}}?",
        back: "{{(1/a) arctan(x/a) + C}} and {{arcsin(x/a) + C}} (note: {{arctan}} has the {{1/a}} factor outside, {{arcsin}} does NOT!).",
        level: "HL",
      },
      {
        front: "State the volume of revolution formulas about the {{x}}-axis and about the {{y}}-axis.",
        back: "About {{x}}-axis: {{V = pi}}∫{{_a^b y^2 dx}}. About {{y}}-axis: {{V = pi}}∫{{_c^d x^2 dy}} (using {{y}}-limits {{c, d}}).",
        level: "HL",
      },
      {
        front: "How do you transform a homogeneous first-order ODE {{dy/dx = F(y/x)}} into a separable ODE?",
        back: "Substitute {{y = vx}} and {{dy/dx = v + x (dv/dx)}}. Simplify to isolate {{x (dv/dx) = F(v) - v}}, then separate {{v}} and {{x}}.",
        level: "HL",
      },
      {
        front: "State the standard form of a linear first-order ODE and its integrating factor {{mu(x)}}.",
        back: "Standard form: {{dy/dx + P(x)y = Q(x)}} (coefficient of {{dy/dx}} must be {{1}}). Integrating factor: {{mu(x) = e^(int P(x) dx)}}, turning the LHS into {{d/dx[mu(x) y]}}.",
        level: "HL",
      },
      {
        front: "State the Maclaurin series up to {{x^4}} for {{e^x}}, {{sin x}}, and {{cos x}}.",
        back: "{{e^x = 1 + x + x^2/2 + x^3/6 + x^4/24}}; {{sin x = x - x^3/6 + ...}}; {{cos x = 1 - x^2/2 + x^4/24 - ...}} (all valid for all real {{x}}).",
        level: "HL",
      },
      {
        front: "State the Maclaurin series for {{ln(1 + x)}} and {{arctan x}} up to degree {{4}} or {{5}}, with their validity intervals.",
        back: "{{ln(1 + x) = x - x^2/2 + x^3/3 - x^4/4 + ...}} ({{-1 < x <= 1}}); {{arctan x = x - x^3/3 + x^5/5 - ...}} ({{-1 <= x <= 1}}).",
        level: "HL",
      },
      {
        front: "How do you expand {{ln(a + bx)}} as a Maclaurin series when {{a != 1}}?",
        back: "Factor out {{a}} first: {{ln(a + bx) = ln a + ln(1 + (b/a)x)}}, then apply the standard {{ln(1 + u)}} series with {{u = (b/a)x}}.",
        level: "HL",
      },
      {
        front: "In a Maclaurin series, how is the coefficient of {{x^n}} related to the {{n}}th derivative at {{x = 0}}?",
        back: "The coefficient of {{x^n}} is {{f^(n)(0) / n!}} — never forget to divide by {{n!}}.",
        level: "HL",
      },
      {
        front: "What is the hollow washer volume formula when rotating the region between {{y = f(x)}} (outer) and {{y = g(x)}} (inner) about the {{x}}-axis?",
        back: "{{V = pi}}∫{{_a^b ([f(x)]^2 - [g(x)]^2) dx}} — subtract the squares, NEVER square the difference!",
        level: "HL",
      },
    ],
    mustKnow: [
      "Always include {{+ C}} for indefinite integrals, and substitute boundary conditions immediately after integrating.",
      "Definite integrals measure signed accumulation; total geometric area and total distance require splitting at every root where the integrand changes sign.",
      "Reverse chain rule / {{u}}-substitution handles any integrand of the form {{k g'(x) f(g(x))}}; change limits for definite integrals.",
      "[HL] Integration by parts uses **LIATE** for {{u}}; cyclic integrals like {{e^x sin x}} require applying IBP twice and solving algebraically for {{I}}.",
      "[HL] Partial fractions require a proper rational function first; use polynomial division if degree(numerator) ≥ degree(denominator).",
      "[HL] Volumes of revolution square the radius BEFORE subtracting: {{pi}}∫{{(R^2 - r^2) dx}} about {{x}}-axis, or {{pi}}∫{{x^2 dy}} about {{y}}-axis.",
      "[HL] First-order ODE toolkit: (1) separation of variables, (2) homogeneous {{y = vx}} with {{dy/dx = v + x dv/dx}}, (3) linear integrating factor {{mu(x) = e^(int P(x) dx)}} in standard form.",
      "[HL] Maclaurin series {{sum f^(n)(0) x^n / n!}} can be combined by substitution, multiplication, differentiation, and integration, and used to construct series solutions of ODEs.",
      "[HL] Standard Maclaurin series for {{ln(1 + x)}} and {{(1 + x)^p}} require a leading {{1}} inside the bracket—factor out constants before expanding.",
      "Always verify answers quickly: differentiate antiderivatives, check ODE solutions against the original equation, and check Maclaurin polynomials at {{x = 0}}.",
    ],
    misconceptions: [
      {
        wrong: "The definite integral of {{f(x)}} from {{a}} to {{b}} always equals the geometric area between the curve and the {{x}}-axis.",
        right: "Only when {{f(x) >= 0}} throughout {{[a, b]}}. Wherever {{f(x) < 0}}, the definite integral returns a negative value, so you must split at roots and take absolute values.",
        level: "SL",
      },
      {
        wrong: "The integral of {{1/(2x + 3)}} is {{ln|2x + 3| + C}}.",
        right: "By the reverse chain rule, you must divide by the inner derivative {{2}}, giving {{(1/2) ln|2x + 3| + C}}.",
        level: "SL",
      },
      {
        wrong: "The volume generated by rotating the region between {{y = f(x)}} and {{y = g(x)}} about the {{x}}-axis is {{pi}}∫{{(f(x) - g(x))^2 dx}}.",
        right: "That rotates the difference rather than subtracting the inner solid from the outer solid! The true washer volume is {{pi}}∫{{([f(x)]^2 - [g(x)]^2) dx}}.",
        level: "HL",
      },
      {
        wrong: "The integral of {{1/sqrt(a^2 - x^2)}} is {{(1/a) arcsin(x/a) + C}}.",
        right: "There is NO {{1/a}} factor in front of {{arcsin(x/a)}}! Only {{(1/a) arctan(x/a)}} carries the leading {{1/a}}.",
        level: "HL",
      },
      {
        wrong: "In an integrating-factor ODE {{mu(x) y = F(x) + C}}, you can divide by {{mu(x)}} first and add {{+ C}} at the very end.",
        right: "Adding {{+ C}} at the end gives the wrong function {{F(x)/mu(x) + C}} instead of {{(F(x) + C)/mu(x)}}! Always include {{+ C}} the moment you integrate.",
        level: "HL",
      },
      {
        wrong: "For a homogeneous ODE with {{y = vx}}, {{dy/dx}} equals {{x (dv/dx)}}.",
        right: "Both {{v}} and {{x}} depend on {{x}}, so the Product Rule gives {{dy/dx = v + x (dv/dx)}}.",
        level: "HL",
      },
      {
        wrong: "The Maclaurin series for {{ln(1 + x)}} has factorial denominators {{x - x^2/2! + x^3/3! - ...}}.",
        right: "No! {{ln(1 + x) = x - x^2/2 + x^3/3 - x^4/4 + ...}} has plain integer denominators {{n}}, because the {{(n - 1)!}} from differentiating cancels with {{n!}}.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Forgetting to switch the TI-Nspire CX to **Radians** before evaluating trigonometric definite integrals in Paper 2.",
      "Dropping the factor of {{pi}} in a volume of revolution answer, or integrating {{y}} instead of {{y^2}}.",
      "Using {{x}}-limits when integrating {{x^2 dy}} for a volume of revolution about the {{y}}-axis.",
      "Forgetting to divide through by the leading coefficient {{a(x)}} of {{dy/dx}} before finding {{P(x)}} for the integrating factor.",
      "Computing the {{n}}th derivative {{f^(n)(0)}} correctly in an ODE Maclaurin question but forgetting to divide by {{n!}} when writing the series.",
      "Expanding {{(4 + x)^(1/2)}} directly with the binomial series instead of factoring out {{4^(1/2) = 2}} first to obtain {{2(1 + x/4)^(1/2)}}.",
      "Forgetting to split a kinematics velocity integral at roots of {{v(t) = 0}} when asked for **total distance** rather than displacement.",
      "Substituting {{u = g(x)}} in a definite integral but keeping the original {{x}}-limits on the {{u}}-integral.",
    ],
    mnemonics: [
      {
        topic: "Integration by Parts",
        device: "LIATE (Logs, Inverse trig, Algebraic, Trig, Exponential)",
        explanation:
          "Pick {{u}} from whichever family comes FIRST in LIATE, and assign the remaining factor to {{dv/dx}}. This guarantees {{du/dx}} gets simpler while {{dv}} stays integrable.",
        level: "HL",
      },
      {
        topic: "Inverse-Trig Integrals",
        device: "ArcTAN takes a '1/a' TAN; ArcSIN stays SINgle",
        explanation:
          "{{1/(a^2 + x^2)}} integrates to {{(1/a) arctan(x/a)}} (carries {{1/a}}), whereas {{1/sqrt(a^2 - x^2)}} integrates to {{arcsin(x/a)}} with no {{1/a}} outside.",
        level: "HL",
      },
      {
        topic: "Volumes of Revolution",
        device: "Square First, Subtract Second, Multiply by Pi",
        explanation:
          "Washer volume is {{pi}}∫{{(R^2 - r^2) dx}}—never {{(R - r)^2}}, and never forget the {{pi}}!",
        level: "HL",
      },
      {
        topic: "Linear ODE Standard Form",
        device: "1-P-Mu-Product-C (Standardise, Read P, Build μ, Collapse Product, Add +C Before Dividing)",
        explanation:
          "Make the coefficient of {{dy/dx}} equal {{1}}, read off {{P(x)}}, form {{mu = e^(int P dx)}}, rewrite LHS as {{(mu y)'}}, integrate with {{+ C}}, and only then divide by {{mu}}.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Aerospace Rocket Nozzle Design",
        emoji: "🚀",
        detail:
          "Engineers compute internal propellant volumes and mass centres of axisymmetric rocket nozzles using volumes of revolution {{pi}}∫{{r(x)^2 dx}}.",
      },
      {
        title: "Pharmacokinetics & IV Drip Dosing",
        emoji: "💉",
        detail:
          "Drug concentration {{C(t)}} under constant intravenous infusion and first-order kidney clearance obeys the linear ODE {{dC/dt + kC = R}}, solved directly by an integrating factor {{e^(kt)}}.",
      },
      {
        title: "Singapore MRT Braking & Distance Telemetry",
        emoji: "🚇",
        detail:
          "Onboard train computers integrate measured accelerometer and tachometer readings {{v(t)}} to track exact stopping distance and platform alignment.",
      },
      {
        title: "Scientific Calculators & Graphics Chips",
        emoji: "💻",
        detail:
          "Microprocessors evaluate {{sin x}}, {{cos x}}, {{e^x}}, and {{ln(1 + x)}} in nanoseconds using range reduction followed by high-accuracy polynomial (Maclaurin/Chebyshev) approximations.",
      },
      {
        title: "Electrical RC & RL Circuits",
        emoji: "⚡",
        detail:
          "Current {{I(t)}} in an RL circuit with alternating voltage satisfies {{L (dI/dt) + RI = V_0 sin(omega t)}}, combining both integrating factors and cyclic integration by parts!",
      },
    ],
    videos: [
      {
        title: "Integration by Parts, Substitution & Volumes of Revolution — IB Maths AA HL",
        channel: "Revision Village / YouTube Search",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+integration+by+parts+volumes+of+revolution",
      },
      {
        title: "First-Order Differential Equations: Separation, Homogeneous & Integrating Factor",
        channel: "OSC / YouTube Search",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+differential+equations+homogeneous+integrating+factor",
      },
      {
        title: "Maclaurin Series & Series Solutions of Differential Equations — IB AA HL",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+Maclaurin+series+differential+equations",
      },
      {
        title: "3Blue1Brown: Essence of Calculus — Integration & Taylor Series",
        channel: "3Blue1Brown / YouTube Search",
        url: "https://www.youtube.com/results?search_query=3Blue1Brown+essence+of+calculus+integration+Taylor+series",
      },
    ],
    formulas: [
      {
        name: "Power Rule for Integration",
        formula: "{{int x^n dx = x^(n+1)/(n+1) + C}} ({{n != -1}})",
        note: "IB Booklet SL 5.5",
        level: "SL",
      },
      {
        name: "Logarithmic Integral",
        formula: "{{int (1/x) dx = ln|x| + C}}; {{int (f'(x)/f(x)) dx = ln|f(x)| + C}}",
        note: "IB Booklet SL 5.5 / 5.10",
        level: "SL",
      },
      {
        name: "Exponential & Trig Integrals",
        formula: "{{int e^x dx = e^x + C}}; {{int sin x dx = -cos x + C}}; {{int cos x dx = sin x + C}}",
        note: "IB Booklet SL 5.5 (radians)",
        level: "SL",
      },
      {
        name: "Kinematics Displacement & Distance",
        formula: "Displacement {{= int v(t) dt}}; Total distance {{= int |v(t)| dt}}",
        note: "IB Booklet SL 5.9 / 5.11",
        level: "SL",
      },
      {
        name: "Integration by Parts",
        formula: "{{int u (dv/dx) dx = uv - int v (du/dx) dx}}",
        note: "IB Booklet AHL 5.16",
        level: "HL",
      },
      {
        name: "Inverse-Tangent Integral",
        formula: "{{int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C}}",
        note: "IB Booklet AHL 5.15",
        level: "HL",
      },
      {
        name: "Inverse-Sine Integral",
        formula: "{{int 1/sqrt(a^2 - x^2) dx = arcsin(x/a) + C}} ({{|x| < a}})",
        note: "IB Booklet AHL 5.15",
        level: "HL",
      },
      {
        name: "Volumes of Revolution",
        formula: "About {{x}}-axis: {{V = pi int y^2 dx}}; about {{y}}-axis: {{V = pi int x^2 dy}}",
        note: "IB Booklet AHL 5.17",
        level: "HL",
      },
      {
        name: "Homogeneous ODE Substitution",
        formula: "{{y = vx}}, {{dy/dx = v + x (dv/dx)}}",
        note: "IB Booklet AHL 5.18",
        level: "HL",
      },
      {
        name: "Integrating Factor for Linear ODE",
        formula: "For {{dy/dx + P(x)y = Q(x)}}, {{mu(x) = e^(int P(x) dx)}} and {{d/dx[mu(x)y] = mu(x)Q(x)}}",
        note: "IB Booklet AHL 5.18",
        level: "HL",
      },
      {
        name: "General Maclaurin Series",
        formula: "{{f(x) = f(0) + f'(0)x + f''(0)x^2/2! + f'''(0)x^3/3! + ...}}",
        note: "IB Booklet AHL 5.19",
        level: "HL",
      },
      {
        name: "Standard Maclaurin: {{e^x}}, {{sin x}}, {{cos x}}",
        formula: "{{e^x = 1 + x + x^2/2! + ...}}; {{sin x = x - x^3/3! + ...}}; {{cos x = 1 - x^2/2! + ...}}",
        note: "Valid for all {{x in R}}",
        level: "HL",
      },
      {
        name: "Standard Maclaurin: {{ln(1 + x)}} & {{arctan x}}",
        formula: "{{ln(1+x) = x - x^2/2 + x^3/3 - ...}} ({{-1 < x <= 1}}); {{arctan x = x - x^3/3 + x^5/5 - ...}} ({{|x| <= 1}})",
        note: "Plain integer denominators (no factorials!)",
        level: "HL",
      },
      {
        name: "Generalized Binomial / Maclaurin",
        formula: "{{(1 + x)^p = 1 + px + p(p-1)x^2/2! + p(p-1)(p-2)x^3/3! + ...}} ({{|x| < 1}})",
        note: "IB Booklet AHL 1.10 / 5.19",
        level: "HL",
      },
    ],
  },
};
