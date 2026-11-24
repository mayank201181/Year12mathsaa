import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook: "Rotate {{y = 1/x}} from {{x = 1}} to infinity around the {{x}}-axis and you build **Gabriel's Horn**: a trumpet that holds only {{pi}} cubic units of paint inside—yet has an infinite surface area, so no finite amount of paint can coat its outside!",
  didYouKnow: [
    "Gottfried Wilhelm Leibniz introduced the integral symbol ∫ in 1675 as a stretched letter **S** for the Latin *summa* ('sum'), capturing the idea of summing infinitely many infinitesimal slices.",
    "Evaluating the Maclaurin series of {{ln(1 + x)}} at {{x = 1}} proves the classic alternating harmonic identity {{ln 2 = 1 - 1/2 + 1/3 - 1/4 + ...}}—yet converging so slowly that you need 500 terms just for 3 decimal places!",
    "Evaluating {{arctan x = x - x^3/3 + x^5/5 - ...}} at {{x = 1}} yields the Madhava–Gregory–Leibniz formula {{pi/4 = 1 - 1/3 + 1/5 - 1/7 + ...}}, first discovered by Madhava of Sangamagrama in Kerala around 1400 CE—nearly 300 years before Europe!",
    "The Gaussian bell curve {{e^(-x^2)}} has no elementary antiderivative, yet integrating its Maclaurin series {{1 - x^2 + x^4/2! - x^6/3! + ...}} term by term lets statisticians calculate Normal probabilities to any accuracy.",
    "The hollow washer formula {{V = pi}}∫{{(R^2 - r^2) dx}} is one of the most popular foundations for IB Mathematics AA Internal Assessments (IAs)—modelling everything from violin bodies and ceramic pottery to Formula 1 air intakes.",
  ],
  activities: [
    {
      title: "Model a Real Bottle or Vase with Volumes of Revolution",
      emoji: "🏺",
      materials: ["A curved drinking bottle or vase", "Ruler & smartphone camera", "Graphing software (Desmos or TI-Nspire CX)", "Measuring jug with water"],
      steps: [
        "Photograph the bottle side-on from a distance (to minimise perspective distortion) next to a ruler, and lay its symmetry axis along the {{x}}-axis.",
        "Record {{10–12}} coordinate pairs {{(x_i, r_i)}} along the outer profile and fit a piecewise quadratic or cubic curve {{y = f(x)}}.",
        "Compute the predicted internal volume using {{V = pi}}∫{{[f(x)]^2 dx}} (adjusting for wall thickness if known).",
        "Fill the real bottle with water, pour into a measuring jug, and calculate your percentage error!",
      ],
      maths: "Connects disk-method integration {{V = pi}}∫{{y^2 dx}}, piecewise curve modelling, and real experimental error analysis—a classic IB Math AA IA prototype.",
    },
    {
      title: "Newton's Law of Cooling: Separable ODE Kitchen Lab",
      emoji: "☕",
      materials: ["Mug of hot water or tea", "Digital thermometer", "Stopwatch", "TI-Nspire CX or spreadsheet"],
      steps: [
        "Measure the ambient room temperature {{T_a}} and initial drink temperature {{T_0}} at {{t = 0}}.",
        "Record the temperature {{T(t)}} every {{60}} seconds for {{15}} minutes.",
        "Solve the separable ODE {{dT/dt = -k(T - T_a)}} analytically to get {{ln(T - T_a) = ln(T_0 - T_a) - kt}}.",
        "Plot {{ln(T - T_a)}} against {{t}}: the slope of the straight line gives {{-k}}, testing how closely real heat loss follows a first-order ODE!",
      ],
      maths: "Demonstrates separation of variables, exponential decay boundary conditions, and linearising exponential models via logarithms.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Gabriel's Horn: Infinite Area, Finite Volume {{V = pi}}",
      svg: `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gabriel's Horn formed by rotating y equals 1 over x for x at least 1 around the x-axis">
  <rect x="0" y="0" width="460" height="200" rx="12" fill="var(--surface-2)" />
  <line x1="32" y1="100" x2="432" y2="100" stroke="var(--ink-2)" stroke-width="1.4" stroke-dasharray="4 4" />
  <line x1="66" y1="18" x2="66" y2="184" stroke="var(--ink-2)" stroke-width="1.4" />
  <path d="M 106 32 C 148 76, 224 88, 418 94 L 418 106 C 224 112, 148 124, 106 168 Z" fill="var(--brand)" fill-opacity="0.16" />
  <ellipse cx="106" cy="100" rx="14" ry="68" fill="var(--brand)" fill-opacity="0.24" stroke="var(--brand)" stroke-width="2" />
  <ellipse cx="180" cy="100" rx="8" ry="26" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3" />
  <ellipse cx="280" cy="100" rx="5" ry="13" fill="none" stroke="var(--accent)" stroke-width="1.4" stroke-dasharray="3 3" />
  <path d="M 106 32 C 148 76, 224 88, 418 94" fill="none" stroke="var(--brand)" stroke-width="2.6" />
  <path d="M 106 168 C 148 124, 224 112, 418 106" fill="none" stroke="var(--brand)" stroke-width="2" stroke-dasharray="5 3" />
  <text x="106" y="186" font-size="11" text-anchor="middle" font-weight="700" fill="var(--ink)">x = 1</text>
  <text x="412" y="122" font-size="11" text-anchor="end" font-weight="700" fill="var(--ink-2)">x → ∞</text>
  <rect x="210" y="14" width="234" height="52" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.2" />
  <text x="222" y="34" font-size="11" font-weight="700" fill="var(--brand)">Cross-section area: ∫₁^∞ (1/x) dx = ∞</text>
  <text x="222" y="54" font-size="11" font-weight="700" fill="var(--good)">Volume of revolution: π∫₁^∞ (1/x²) dx = π</text>
</svg>`,
      caption:
        "Squaring {{1/x}} to {{1/x^2}} makes the disk slices shrink fast enough that the infinite horn has exact finite volume {{V = pi}}.",
    },
    {
      title: "[HL] First-Order ODE Strategy Map",
      svg: `<svg viewBox="0 0 460 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision flowchart for selecting an analytical first-order ODE method">
  <rect x="0" y="0" width="460" height="215" rx="12" fill="var(--surface-2)" />
  <rect x="136" y="12" width="188" height="34" rx="8" fill="var(--brand)" />
  <text x="230" y="34" font-size="12" text-anchor="middle" font-weight="800" fill="var(--brand-ink)">First-Order ODE: dy/dx = F(x, y)</text>
  <line x1="230" y1="46" x2="230" y2="66" stroke="var(--ink-2)" stroke-width="1.6" />
  <line x1="64" y1="66" x2="396" y2="66" stroke="var(--ink-2)" stroke-width="1.6" />
  <line x1="64" y1="66" x2="64" y2="86" stroke="var(--ink-2)" stroke-width="1.6" />
  <line x1="175" y1="66" x2="175" y2="86" stroke="var(--ink-2)" stroke-width="1.6" />
  <line x1="286" y1="66" x2="286" y2="86" stroke="var(--ink-2)" stroke-width="1.6" />
  <line x1="396" y1="66" x2="396" y2="86" stroke="var(--ink-2)" stroke-width="1.6" />
  <rect x="14" y="86" width="100" height="114" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.6" />
  <text x="64" y="106" font-size="11" text-anchor="middle" font-weight="800" fill="var(--good)">Separable</text>
  <text x="64" y="126" font-size="10" text-anchor="middle" fill="var(--ink)">g(x) · h(y)</text>
  <text x="64" y="148" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">Split y to LHS,</text>
  <text x="64" y="162" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">x to RHS &amp;</text>
  <text x="64" y="176" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">integrate (+C)</text>
  <rect x="125" y="86" width="100" height="114" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.6" />
  <text x="175" y="106" font-size="11" text-anchor="middle" font-weight="800" fill="var(--brand)">Linear</text>
  <text x="175" y="126" font-size="10" text-anchor="middle" fill="var(--ink)">y' + P(x)y = Q</text>
  <text x="175" y="148" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">Make coeff of y'</text>
  <text x="175" y="162" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">equal 1; use</text>
  <text x="175" y="176" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">μ = e^(∫P dx)</text>
  <rect x="236" y="86" width="100" height="114" rx="8" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.6" />
  <text x="286" y="106" font-size="11" text-anchor="middle" font-weight="800" fill="var(--accent)">Homogeneous</text>
  <text x="286" y="126" font-size="10" text-anchor="middle" fill="var(--ink)">F(y/x)</text>
  <text x="286" y="148" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">Set y = vx,</text>
  <text x="286" y="162" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">y' = v + xv',</text>
  <text x="286" y="176" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">then separate</text>
  <rect x="346" y="86" width="100" height="114" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.6" />
  <text x="396" y="106" font-size="11" text-anchor="middle" font-weight="800" fill="var(--bad)">Maclaurin</text>
  <text x="396" y="126" font-size="10" text-anchor="middle" fill="var(--ink)">Near x = 0</text>
  <text x="396" y="148" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">Differentiate</text>
  <text x="396" y="162" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">implicitly &amp;</text>
  <text x="396" y="176" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">divide by n!</text>
</svg>`,
      caption:
        "Every IB Maths AA HL FA2029 differential equation fits one of these four analytical pathways—scan left to right to pick the cleanest method first.",
    },
  ],
  history: {
    title: "Colin Maclaurin, Brook Taylor & the Power of Infinite Polynomials",
    story:
      "In 1715, English mathematician Brook Taylor published a remarkable theorem showing how any sufficiently smooth curve could be rebuilt around a point {{a}} from its derivatives alone. Twenty-seven years later, Scottish prodigy Colin Maclaurin—who had earned his university degree at 14 and became a mathematics professor at Aberdeen at 19—featured the special case centred at {{a = 0}} prominently in his *Treatise of Fluxions* (1742) to defend Isaac Newton's calculus against philosophical critics. Although Maclaurin generously credited Taylor by name, the zero-centred expansion caught on so quickly across Europe that textbooks named it after Maclaurin—giving engineers and physicists a universal bridge between transcendental functions, differential equations, and high-speed digital computation.",
  },
};
