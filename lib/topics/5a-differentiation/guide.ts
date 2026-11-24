import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "5a-differentiation",
  title: "Topic 5A: Limits, Differentiation, Curve Sketching & Optimization",
  strand: "Topic 5: Calculus",
  icon: "d/dx",
  level: "SL",
  summary:
    "Master limits, differentiation rules, tangents and normals, stationary and inflection analysis, optimization, kinematics, and [HL] first principles, L'Hôpital's rule, implicit differentiation, related rates, and inverse-trig derivatives.",
  intro:
    "Calculus turns static algebra into the mathematics of motion and change. By zooming in on a smooth curve until a tiny arc behaves like a straight line, differentiation unlocks instantaneous rates of change, optimal designs, and the complete geometry of graphs — from Paper 1 exact radian work to Paper 2 TI-Nspire CX modelling and HL analytical proofs.",
  guide: [
    // =========================================================================
    // SECTION 1: limits-rules-tangents (SL)
    // =========================================================================
    {
      id: "limits-rules-tangents",
      heading: "Informal Limits, Differentiation Rules, Tangents & Normals",
      level: "SL",
      discovery: {
        problem:
          "A drone climbs vertically with height {{s(t) = 5t^2}} metres after {{t}} seconds. Between {{t = 2}} and {{t = 2 + h}}, its average speed is {{(5(2 + h)^2 - 20)/h}}. Direct substitution of {{h = 0}} produces {{0/0}}, which is indeterminate — yet the drone clearly has an exact speedometer reading at {{t = 2}}. Simplify the fraction for {{h != 0}} and see what value it approaches as {{h -> 0}}.",
        idea:
          "Expanding gives {{(20 + 20h + 5h^2 - 20)/h = (20h + 5h^2)/h = 20 + 5h}} for every {{h != 0}}. As the time gap {{h}} shrinks towards {{0}}, the average speed {{20 + 5h}} locks smoothly onto {{20}} m s⁻¹. Geometrically, the secant chord joining {{t = 2}} and {{t = 2 + h}} pivots into the unique tangent line at {{t = 2}}!",
      },
      body:
        "### Informal Limits and Gradient of a Curve\n" +
        "The **limit** {{lim_(x -> a) f(x) = L}} describes the value {{f(x)}} approaches as {{x}} gets arbitrarily close to {{a}} from both sides — regardless of whether {{f(a)}} is defined. For a smooth curve {{y = f(x)}}, the **derivative** {{f'(x)}} (also written {{dy/dx}}) is the limiting gradient of the secant chord between {{(x, f(x))}} and {{(x + h, f(x + h))}} as {{h -> 0}}.\n\n" +
        "### Standard SL Derivatives (Radians Mandatory!)\n" +
        "- **Power rule:** {{d/dx (x^n) = n x^(n - 1)}} for any real {{n}} (rewrite roots and reciprocals as fractional or negative powers first, e.g. {{1/sqrt(x) = x^(-1/2)}}).\n" +
        "- **Exponential & logarithm:** {{d/dx (e^x) = e^x}} and {{d/dx (ln x) = 1/x}} (for {{x > 0}}).\n" +
        "- **Trigonometric (x in radians only):** {{d/dx (sin x) = cos x}} and {{d/dx (cos x) = -sin x}}.\n" +
        "- **Linearity:** {{d/dx [a f(x) + b g(x)] = a f'(x) + b g'(x)}}, and the derivative of any constant is {{0}}.\n\n" +
        "### Chain, Product and Quotient Rules\n" +
        "- **Chain rule** (nested composite {{y = f(g(x))}}): {{dy/dx = (dy/du)(du/dx) = f'(g(x)) * g'(x)}}. Differentiate the outer shell, keep the inside untouched, then multiply by the derivative of the inside.\n" +
        "- **Product rule** ({{y = u(x) v(x)}}): {{d/dx (uv) = u' v + u v'}}.\n" +
        "- **Quotient rule** ({{y = u(x)/v(x)}}): {{d/dx (u/v) = (u' v - u v')/v^2}}. Always put the denominator's unchanged factor first in the numerator (`v u' − u v'`) so the minus sign never flips!\n\n" +
        "### Equations of Tangents and Normals\n" +
        "At a point {{P(x_0, y_0)}} on {{y = f(x)}}, the tangent gradient is {{m_T = f'(x_0)}} and the tangent equation is {{y - y_0 = m_T (x - x_0)}}. The **normal** is perpendicular to the tangent at {{P}}: provided {{m_T != 0}}, its gradient is the negative reciprocal {{m_N = -1/m_T}}, giving {{y - y_0 = (-1/m_T)(x - x_0)}}. If {{m_T = 0}} (horizontal tangent), the normal is the vertical line {{x = x_0}}.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" role="img" aria-label="Secant chords converging to the tangent line at point P on a smooth curve, with the perpendicular normal line shown">' +
        '<rect width="560" height="300" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<line x1="56" y1="252" x2="520" y2="252" stroke="#64748b" stroke-width="1.6"/>' +
        '<line x1="80" y1="274" x2="80" y2="26" stroke="#64748b" stroke-width="1.6"/>' +
        '<polygon points="520,252 511,247 511,257" fill="#64748b"/>' +
        '<polygon points="80,26 75,35 85,35" fill="#64748b"/>' +
        '<text x="525" y="256" font-family="sans-serif" font-size="13" font-weight="700" fill="#334155">x</text>' +
        '<text x="66" y="34" font-family="sans-serif" font-size="13" font-weight="700" fill="#334155">y</text>' +
        '<path d="M 90 236 Q 220 220, 320 154 T 490 40" fill="none" stroke="#1e293b" stroke-width="2.8"/>' +
        '<text x="456" y="42" font-family="sans-serif" font-size="13" font-weight="700" fill="#1e293b">y = f(x)</text>' +
        '<line x1="170" y1="234" x2="462" y2="62" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="6 4"/>' +
        '<line x1="164" y1="244" x2="405" y2="108" stroke="#0891b2" stroke-width="1.8" stroke-dasharray="5 3"/>' +
        '<line x1="115" y1="262" x2="430" y2="112" stroke="#4f46e5" stroke-width="2.6"/>' +
        '<line x1="172" y1="68" x2="310" y2="274" stroke="#e11d48" stroke-width="2.2" stroke-dasharray="7 4"/>' +
        '<path d="M 248 188 L 258 202 L 244 210" fill="none" stroke="#e11d48" stroke-width="1.5"/>' +
        '<circle cx="236" cy="204" r="5.5" fill="#4f46e5" stroke="#ffffff" stroke-width="1.5"/>' +
        '<circle cx="332" cy="148" r="4.5" fill="#0891b2"/>' +
        '<circle cx="412" cy="91" r="4.5" fill="#94a3b8"/>' +
        '<text x="200" y="226" font-family="sans-serif" font-size="12" font-weight="700" fill="#4f46e5">P(x₀, y₀)</text>' +
        '<text x="342" y="156" font-family="sans-serif" font-size="12" font-weight="600" fill="#0891b2">Q₂ (h small)</text>' +
        '<text x="420" y="96" font-family="sans-serif" font-size="12" font-weight="600" fill="#64748b">Q₁ (h larger)</text>' +
        '<text x="380" y="138" font-family="sans-serif" font-size="12" font-weight="700" fill="#4f46e5">Tangent: m_T = f′(x₀)</text>' +
        '<text x="108" y="88" font-family="sans-serif" font-size="12" font-weight="700" fill="#e11d48">Normal: m_N = −1 / m_T</text>' +
        '<text x="108" y="105" font-family="sans-serif" font-size="11" fill="#e11d48">(90° to tangent at P)</text>' +
        '<path d="M 404 82 Q 368 100, 340 135" fill="none" stroke="#0891b2" stroke-width="1.5"/>' +
        '<polygon points="340,135 349,131 344,124" fill="#0891b2"/>' +
        '<text x="320" y="72" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#0891b2">h → 0</text>' +
        '</svg>',
      diagramCaption:
        "As Q slides down the curve towards P (h → 0), secant chords rotate into the tangent line with gradient m_T = f′(x₀), while the normal cuts across perpendicularly at gradient m_N = −1/m_T.",
      workedExamples: [
        {
          title: "Product + Chain Rule Combined",
          problem: "Find {{f'(x)}} for {{f(x) = x^2 e^(3x - 1)}}, and hence find the exact value of {{f'(1/3)}}.",
          steps: [
            "Identify a product {{u(x) v(x)}} with {{u = x^2}} and {{v = e^(3x - 1)}}.",
            "Differentiate each factor: {{u' = 2x}} and, by the chain rule, {{v' = 3 e^(3x - 1)}}.",
            "Apply the product rule {{f'(x) = u' v + u v' = 2x e^(3x - 1) + 3x^2 e^(3x - 1)}}.",
            "Factor out the common exponential: {{f'(x) = x(2 + 3x) e^(3x - 1)}}.",
            "Substitute {{x = 1/3}}: {{3(1/3) - 1 = 0}}, so {{e^0 = 1}} and {{f'(1/3) = (1/3)(2 + 1)(1) = 1}}.",
          ],
          answer: "{{f'(x) = x(2 + 3x)e^(3x - 1)}} and {{f'(1/3) = 1}}",
          yourTurn: {
            question: "Find {{g'(2)}} given {{g(x) = (2x - 1)^3}}.",
            answer: { type: "number", value: 54 },
            solution:
              "By the chain rule, {{g'(x) = 3(2x - 1)^2 * 2 = 6(2x - 1)^2}}. At {{x = 2}}, {{g'(2) = 6(3)^2 = 54}}.",
          },
        },
        {
          title: "Quotient Rule at a Point",
          problem: "Given {{y = (3x - 2)/(x^2 + 1)}}, find {{dy/dx}} and evaluate it at {{x = 1}}.",
          steps: [
            "Set {{u = 3x - 2}} (so {{u' = 3}}) and {{v = x^2 + 1}} (so {{v' = 2x}}).",
            "Apply the quotient rule: {{dy/dx = (u' v - u v')/v^2 = (3(x^2 + 1) - (3x - 2)(2x))/(x^2 + 1)^2}}.",
            "Expand the numerator carefully: {{3x^2 + 3 - (6x^2 - 4x) = -3x^2 + 4x + 3}}.",
            "Substitute {{x = 1}}: {{(-3 + 4 + 3)/(1 + 1)^2 = 4/4 = 1}}.",
          ],
          answer: "{{dy/dx = (-3x^2 + 4x + 3)/(x^2 + 1)^2}}, and at {{x = 1}}, {{dy/dx = 1}}",
        },
        {
          title: "Equations of Tangent and Normal",
          problem: "Find the equations of the tangent and normal to {{y = ln(2x - 3)}} at the point where {{x = 2}}.",
          steps: [
            "Find the y-coordinate: {{y_0 = ln(2(2) - 3) = ln 1 = 0}}, so the point is {{(2, 0)}}.",
            "Differentiate using the chain rule: {{dy/dx = 2/(2x - 3)}}.",
            "Evaluate the tangent gradient at {{x = 2}}: {{m_T = 2/(4 - 3) = 2}}.",
            "Tangent equation: {{y - 0 = 2(x - 2)}} ⇒ {{y = 2x - 4}}.",
            "Normal gradient: {{m_N = -1/2}}, so the normal equation is {{y - 0 = (-1/2)(x - 2)}} ⇒ {{y = (-1/2)x + 1}}.",
          ],
          answer: "Tangent: {{y = 2x - 4}}; Normal: {{y = (-1/2)x + 1}}",
          yourTurn: {
            question: "Find the exact gradient of the normal to {{y = x^3 - 4x}} at {{x = 2}}. Give your answer as a simplified fraction.",
            answer: { type: "fraction", n: -1, d: 8, simplest: true },
            solution:
              "{{dy/dx = 3x^2 - 4}}. At {{x = 2}}, {{m_T = 3(4) - 4 = 8}}, so the normal gradient is {{m_N = -1/8}}.",
          },
        },
      ],
      keyPoints: [
        "Always rewrite roots and negative powers ({{sqrt(x) = x^(1/2)}}, {{1/x^2 = x^(-2)}}) before applying the power rule.",
        "Trigonometric derivatives {{d/dx(sin x) = cos x}} and {{d/dx(cos x) = -sin x}} hold ONLY when {{x}} is measured in radians.",
        "Never simplify {{d/dx(u v)}} to {{u' v'}} — the product rule always has TWO terms: {{u' v + u v'}}.",
        "Factorising out common exponentials or powers immediately after product/quotient differentiation makes finding roots of {{f'(x) = 0}} vastly easier.",
        "The normal gradient is {{m_N = -1/m_T}} evaluated at the specific point {{x_0}} — NEVER leave {{x}} inside {{m}} when writing the straight-line equation!",
      ],
      whyItWorks:
        "Why does the product rule equal {{u' v + u v'}} instead of {{u' v'}}? Picture a rectangle of width {{u}} and height {{v}} whose area is {{A = uv}}. When {{x}} increases by a tiny {{dx}}, width grows by {{du}} and height grows by {{dv}}. The area grows by two thin strips ({{v du + u dv}}) plus a minuscule corner {{du * dv}}. Dividing by {{dx}} and taking {{dx -> 0}} kills the tiny corner term ({{(du/dx) * dv -> 0}}), leaving {{dA/dx = u' v + u v'}}.",
      strategies: [
        "Scan the outer structure FIRST before differentiating: is the top-level operation a sum, a product, a quotient, or a composite function?",
        "If a quotient has a single-term denominator like {{(3x^2 - 5)/x}}, split it into {{3x - 5x^(-1)}} instead of slogging through the quotient rule.",
        "On Paper 1 (Non-GDC), substitute {{x_0}} straight into {{f'(x)}} BEFORE expanding messy numerators if the question only asks for the gradient at a point.",
        "Check your normal line: multiply {{m_T * m_N}} — you must get {{-1}}, and verify both lines pass through {{(x_0, y_0)}}.",
      ],
      thinkDeeper:
        "What would {{d/dx(sin x°)}} be if {{x}} were measured in degrees? Since {{x° = (pi/180)x}} radians, the chain rule produces {{(pi/180) cos((pi/180)x)}}. That awkward factor {{pi/180}} is the exact reason all of calculus lives in radians!",
    },

    // =========================================================================
    // SECTION 2: curve-sketching-optimization-kinematics (SL)
    // =========================================================================
    {
      id: "curve-sketching-optimization-kinematics",
      heading: "Stationary Points, Concavity, Inflection, Optimization & Kinematics",
      level: "SL",
      discovery: {
        problem:
          "Compare three curves at {{x = 0}}: {{f(x) = x^3}}, {{g(x) = x^4}}, and {{h(x) = -x^4}}. All three satisfy BOTH {{y'(0) = 0}} AND {{y''(0) = 0}}! Sketch them mentally: which one has a local minimum at {{x = 0}}, which has a local maximum, and which has a stationary point of inflection?",
        idea:
          "For {{g(x) = x^4}}, {{g''(x) = 12x^2 >= 0}} on both sides of {{0}} — concavity never switches, so {{(0, 0)}} is a local minimum! For {{h(x) = -x^4}}, {{(0, 0)}} is a local maximum. Only {{f(x) = x^3}} has {{f''(x) = 6x}} changing sign from negative to positive across {{0}}, giving a true point of inflection. Moral: {{f''(c) = 0}} is NEVER enough on its own!",
      },
      body:
        "### Monotonicity and Stationary Points\n" +
        "- **Increasing** on an interval where {{f'(x) > 0}}; **decreasing** where {{f'(x) < 0}}.\n" +
        "- A **stationary point** occurs wherever {{f'(c) = 0}} (horizontal tangent).\n" +
        "- **First Derivative Sign Test (always decisive):** around {{x = c}}, if {{f'}} changes `+ → −` it is a **local maximum**; if `− → +` it is a **local minimum**; if `+ → +` or `− → −` it is a **stationary point of inflection**.\n" +
        "- **Second Derivative Test (fast shortcut):** at {{f'(c) = 0}}, {{f''(c) < 0}} ⇒ local maximum (concave down), {{f''(c) > 0}} ⇒ local minimum (concave up), and {{f''(c) = 0}} is **inconclusive** (fall back to the first-derivative sign chart!).\n\n" +
        "### Concavity and Points of Inflection\n" +
        "The second derivative {{f''(x)}} measures the rate of change of the gradient:\n" +
        "- {{f''(x) > 0}}: **concave up** (gradient increasing; curve lies above its tangents).\n" +
        "- {{f''(x) < 0}}: **concave down** (gradient decreasing; curve lies below its tangents).\n" +
        "- A **point of inflection** occurs at {{x = c}} if and only if the curve is continuous at {{c}} AND **{{f''(x)}} changes sign** across {{x = c}}. For smooth functions, solve {{f''(c) = 0}} to find candidates, then explicitly verify the sign change!\n\n" +
        "### Optimization Modelling\n" +
        "To maximise or minimise a real-world quantity {{Q}} (area, volume, cost, distance): (1) express {{Q}} in terms of a single variable {{x}} using the constraint equation and note the physical domain; (2) solve {{dQ/dx = 0}} within the valid domain; (3) **justify** that your critical point gives a maximum or minimum using {{d^2 Q/dx^2}} or a sign chart (and check domain endpoints on closed intervals!).\n\n" +
        "### Straight-Line Kinematics\n" +
        "For displacement {{s(t)}} from a fixed origin {{O}}: velocity {{v(t) = ds/dt = s'(t)}} and acceleration {{a(t) = dv/dt = d^2 s/dt^2 = s''(t)}}.\n" +
        "- **At instantaneous rest:** {{v(t) = 0}}.\n" +
        "- **Changes direction:** {{v(t)}} changes sign across a zero.\n" +
        "- **Speeding up** (speed {{|v|}} increasing) when {{v(t)}} and {{a(t)}} have the **same sign** ({{v * a > 0}}); **slowing down** when {{v}} and {{a}} have **opposite signs** ({{v * a < 0}}).",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 360" role="img" aria-label="Vertically aligned graphs of f(x), f prime of x, and f double prime of x for a cubic showing local maximum, point of inflection, and local minimum">' +
        '<rect width="560" height="360" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<line x1="200" y1="22" x2="200" y2="342" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 4"/>' +
        '<line x1="290" y1="22" x2="290" y2="342" stroke="#d97706" stroke-width="1.3" stroke-dasharray="4 4"/>' +
        '<line x1="380" y1="22" x2="380" y2="342" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 4"/>' +
        '<text x="200" y="16" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#475569">x = −1 (Max)</text>' +
        '<text x="290" y="16" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309">x = 0 (Inflection)</text>' +
        '<text x="380" y="16" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#475569">x = 1 (Min)</text>' +
        '<rect x="70" y="26" width="440" height="96" rx="8" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<line x1="78" y1="74" x2="502" y2="74" stroke="#cbd5e1" stroke-width="1.2"/>' +
        '<path d="M 122 118 C 150 56, 178 40, 200 40 C 235 40, 260 62, 290 74 C 320 86, 345 108, 380 108 C 402 108, 430 92, 458 30" fill="none" stroke="#4f46e5" stroke-width="2.6"/>' +
        '<circle cx="200" cy="40" r="4.5" fill="#4f46e5"/>' +
        '<circle cx="290" cy="74" r="4.5" fill="#d97706"/>' +
        '<circle cx="380" cy="108" r="4.5" fill="#4f46e5"/>' +
        '<text x="18" y="70" font-family="sans-serif" font-size="13" font-weight="800" fill="#4f46e5">f(x)</text>' +
        '<text x="18" y="86" font-family="sans-serif" font-size="10.5" fill="#64748b">Curve</text>' +
        '<text x="148" y="64" font-family="sans-serif" font-size="10.5" fill="#4f46e5">↗ inc</text>' +
        '<text x="296" y="62" font-family="sans-serif" font-size="10.5" fill="#dc2626">↘ dec</text>' +
        '<text x="424" y="96" font-family="sans-serif" font-size="10.5" fill="#4f46e5">↗ inc</text>' +
        '<rect x="70" y="136" width="440" height="96" rx="8" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<line x1="78" y1="184" x2="502" y2="184" stroke="#94a3b8" stroke-width="1.3"/>' +
        '<path d="M 140 140 Q 290 288, 440 140" fill="none" stroke="#0891b2" stroke-width="2.6"/>' +
        '<circle cx="200" cy="184" r="4.5" fill="#0891b2"/>' +
        '<circle cx="290" cy="214" r="4.5" fill="#d97706"/>' +
        '<circle cx="380" cy="184" r="4.5" fill="#0891b2"/>' +
        '<text x="18" y="180" font-family="sans-serif" font-size="13" font-weight="800" fill="#0891b2">f′(x)</text>' +
        '<text x="18" y="196" font-family="sans-serif" font-size="10.5" fill="#64748b">Gradient</text>' +
        '<text x="155" y="170" font-family="sans-serif" font-size="11" font-weight="700" fill="#16a34a">f′ &gt; 0 (+)</text>' +
        '<text x="290" y="174" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">f′ &lt; 0 (−)</text>' +
        '<text x="415" y="170" font-family="sans-serif" font-size="11" font-weight="700" fill="#16a34a">f′ &gt; 0 (+)</text>' +
        '<rect x="70" y="246" width="440" height="96" rx="8" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<line x1="78" y1="294" x2="502" y2="294" stroke="#94a3b8" stroke-width="1.3"/>' +
        '<line x1="120" y1="334" x2="460" y2="254" stroke="#d97706" stroke-width="2.6"/>' +
        '<circle cx="290" cy="294" r="5" fill="#d97706"/>' +
        '<text x="18" y="290" font-family="sans-serif" font-size="13" font-weight="800" fill="#d97706">f″(x)</text>' +
        '<text x="18" y="306" font-family="sans-serif" font-size="10.5" fill="#64748b">Concavity</text>' +
        '<text x="185" y="284" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">f″ &lt; 0 (concave down ∩)</text>' +
        '<text x="405" y="314" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#16a34a">f″ &gt; 0 (concave up ∪)</text>' +
        '</svg>',
      diagramCaption:
        "Vertical alignment of f(x) = x³ − 3x, f′(x) = 3x² − 3, and f″(x) = 6x: roots of f′ locate turning points, while the sign change of f″ at x = 0 pinpoints the point of inflection.",
      workedExamples: [
        {
          title: "Stationary Points & Verified Point of Inflection",
          problem:
            "For {{f(x) = x^3 - 6x^2 + 9x + 2}}, find and classify all stationary points, and find the coordinates of the point of inflection.",
          steps: [
            "Compute {{f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)}} and {{f''(x) = 6x - 12}}.",
            "Set {{f'(x) = 0}} ⇒ {{x = 1}} or {{x = 3}}.",
            "At {{x = 1}}: {{f(1) = 1 - 6 + 9 + 2 = 6}} and {{f''(1) = -6 < 0}} ⇒ local maximum at {{(1, 6)}}.",
            "At {{x = 3}}: {{f(3) = 27 - 54 + 27 + 2 = 2}} and {{f''(3) = 6 > 0}} ⇒ local minimum at {{(3, 2)}}.",
            "Set {{f''(x) = 0}} ⇒ {{6x - 12 = 0}} ⇒ {{x = 2}}. Check sign change: for {{x < 2}}, {{f''(x) < 0}}; for {{x > 2}}, {{f''(x) > 0}}. Since {{f''(x)}} changes sign at {{x = 2}}, {{(2, 4)}} is a point of inflection.",
          ],
          answer: "Local max {{(1, 6)}}, local min {{(3, 2)}}, point of inflection {{(2, 4)}}",
          yourTurn: {
            question: "Find the x-coordinate of the point of inflection of {{f(x) = 2x^3 - 12x^2 + 5x - 1}}.",
            answer: { type: "number", value: 2 },
            solution:
              "{{f'(x) = 6x^2 - 24x + 5}} and {{f''(x) = 12x - 24 = 12(x - 2)}}. Since {{f''(x)}} changes from negative to positive across {{x = 2}}, the inflection point is at {{x = 2}}.",
          },
        },
        {
          title: "Optimization: Minimum Surface Area of a Cylinder",
          problem:
            "A closed right-circular cylinder has fixed volume {{128 pi}} cm³. Show that its total surface area is {{A(r) = 2 pi r^2 + (256 pi)/r}} and find the radius {{r}} that minimises {{A}}.",
          steps: [
            "Volume constraint: {{pi r^2 h = 128 pi}} ⇒ {{h = 128/r^2}} (with {{r > 0}}).",
            "Substitute into total surface area: {{A = 2 pi r^2 + 2 pi r h = 2 pi r^2 + 2 pi r (128/r^2) = 2 pi r^2 + 256 pi r^(-1)}}.",
            "Differentiate with respect to {{r}}: {{dA/dr = 4 pi r - 256 pi r^(-2)}}.",
            "Set {{dA/dr = 0}}: {{4 pi r = (256 pi)/r^2}} ⇒ {{r^3 = 64}} ⇒ {{r = 4}} cm.",
            "Verify minimum: {{d^2 A/dr^2 = 4 pi + 512 pi r^(-3)}}. At {{r = 4}}, {{d^2 A/dr^2 = 4 pi + 8 pi = 12 pi > 0}} (in fact {{> 0}} for all {{r > 0}}), confirming a global minimum at {{r = 4}} cm.",
          ],
          answer: "{{r = 4}} cm (giving height {{h = 8}} cm and minimum area {{96 pi}} cm²)",
        },
        {
          title: "Kinematics: Direction Changes & Speeding Up",
          problem:
            "A particle moves along a straight line with displacement {{s(t) = t^3 - 6t^2 + 9t}} metres for {{t >= 0}}. Find when it is at rest and the intervals during which it is speeding up.",
          steps: [
            "Velocity: {{v(t) = s'(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)}}. Instantaneous rest occurs when {{v(t) = 0}}, i.e. {{t = 1}} s and {{t = 3}} s.",
            "Acceleration: {{a(t) = v'(t) = 6t - 12 = 6(t - 2)}}, which is zero at {{t = 2}} s.",
            "Sign table for {{v(t)}}: {{+}} on {{[0, 1)}}, {{-}} on {{(1, 3)}}, {{+}} on {{(3, ∞)}}.",
            "Sign table for {{a(t)}}: {{-}} on {{[0, 2)}}, {{+}} on {{(2, ∞)}}.",
            "Speeding up requires {{v(t)}} and {{a(t)}} to share the same sign: both negative on {{1 < t < 2}}, and both positive on {{t > 3}}.",
          ],
          answer: "At rest at {{t = 1}} s and {{t = 3}} s; speeding up for {{1 < t < 2}} and {{t > 3}}",
          yourTurn: {
            question: "A particle has displacement {{s(t) = 2t^3 - 9t^2 + 12t}} metres. Find its acceleration (in m s⁻²) at {{t = 4}} s.",
            answer: { type: "number", value: 30 },
            solution:
              "{{v(t) = 6t^2 - 18t + 12}}, so {{a(t) = 12t - 18}}. At {{t = 4}}, {{a(4) = 12(4) - 18 = 30}} m s⁻².",
          },
        },
      ],
      keyPoints: [
        "Solving {{f''(c) = 0}} only finds CANDIDATE inflection points — you MUST show a sign change in {{f''(x)}} to earn full IB reasoning marks.",
        "If {{f'(c) = 0}} and {{f''(c) = 0}}, the second derivative test is INCONCLUSIVE; switch immediately to a first-derivative sign table.",
        "Every optimization solution requires explicit verification (e.g. {{d^2 Q/dx^2 > 0}} for a min, or checking closed-interval endpoints) — never stop after solving {{dQ/dx = 0}}!",
        "Negative acceleration does NOT automatically mean slowing down: if {{v < 0}} and {{a < 0}}, the particle accelerates faster in the negative direction, so its speed {{|v|}} increases.",
        "For any cubic {{f(x) = a x^3 + b x^2 + c x + d}}, the unique point of inflection sits at {{x = -b/(3a)}}, right at the midpoint between its two turning points (if they exist).",
      ],
      whyItWorks:
        "Why does {{f''(c) < 0}} guarantee a local maximum when {{f'(c) = 0}}? Because {{f''}} is the derivative of {{f'}}. Having {{f''(c) < 0}} means the slope {{f'(x)}} is strictly decreasing as {{x}} passes through {{c}}. Since {{f'(c) = 0}}, the slope must be positive just before {{c}} (climbing up) and negative just after {{c}} (going down) — forming a peak!",
      strategies: [
        "When reading a given graph of {{f'(x)}} (classic IB Paper 1 trap!), ask first: 'Am I looking at {{f}} or {{f'}}?' Zeros of {{f'}} are turning points of {{f}}, and turning points of {{f'}} are inflection points of {{f}}!",
        "In optimization, always write the constraint and the objective function side by side, eliminate the unwanted variable cleanly, and double-check units.",
        "On Paper 2 (TI-Nspire CX), graph {{f'(x)}} and use `Menu → 6 Analyze Graph → 1 Zero` to locate complicated turning points accurately to 3 s.f., then inspect sign changes visually.",
        "In kinematics, distinguish displacement {{s(t)}} from distance travelled: if {{v(t)}} changes sign on an interval, the particle reversed direction.",
      ],
      thinkDeeper:
        "Can a point of inflection have a NON-zero gradient? Yes! On {{f(x) = x^3 - 3x}}, the inflection point at {{(0, 0)}} has gradient {{f'(0) = -3}} — the steepest downward slope anywhere on the curve. A point of inflection is simply a local extremum of the gradient {{f'(x)}}.",
    },

    // =========================================================================
    // SECTION 3: first-principles-lhopital-hl (HL)
    // =========================================================================
    {
      id: "first-principles-lhopital-hl",
      heading: "[HL] First Principles, Continuity/Differentiability & L'Hôpital's Rule",
      level: "HL",
      discovery: {
        problem:
          "Evaluate {{lim_(x -> 0) (1 - cos x)/x^2}}. Plugging in {{x = 0}} gives {{0/0}}. Differentiating top and bottom once yields {{lim_(x -> 0) (sin x)/(2x)}}, which is STILL {{0/0}}! What happens if we differentiate top and bottom one more time — and why did the original limit converge to that exact constant?",
        idea:
          "Differentiating a second time produces {{lim_(x -> 0) (cos x)/2 = 1/2}}. Visually, near {{x = 0}} both {{1 - cos x}} and {{x^2}} flatten out to zero value AND zero slope, so their ratio is controlled by their curvatures (second derivatives): {{(1 - cos x) ≈ (1/2)x^2}}!",
      },
      body:
        "### Differentiation from First Principles [HL]\n" +
        "By definition, the derivative of {{f(x)}} is:\n" +
        "{{f'(x) = lim_(h -> 0) (f(x + h) - f(x))/h}}\n" +
        "To eliminate the {{0/0}} indeterminacy cleanly without L'Hôpital (never use L'Hôpital inside a first-principles proof — that is circular!), match the algebraic tool to the function:\n" +
        "- **Polynomials:** expand {{(x + h)^n}}, cancel {{f(x)}}, divide every term by {{h}}, then take {{h -> 0}}.\n" +
        "- **Rational functions (e.g. {{1/(ax + b)}}):** combine the two fractions over a common denominator so {{h}} cancels cleanly.\n" +
        "- **Square roots (e.g. {{sqrt(x)}}):** multiply numerator and denominator by the conjugate {{sqrt(x + h) + sqrt(x)}}.\n" +
        "- **Trig ({{sin x, cos x}}):** apply compound-angle identities and the standard limits {{lim_(h -> 0) (sin h)/h = 1}} and {{lim_(h -> 0) (cos h - 1)/h = 0}}.\n\n" +
        "### Continuity vs Differentiability [HL]\n" +
        "A function {{f}} is **continuous** at {{x = a}} if {{lim_(x -> a^-) f(x) = lim_(x -> a^+) f(x) = f(a)}}. It is **differentiable** at {{x = a}} if the two-sided difference-quotient limit exists — which for piecewise smooth joins requires TWO conditions:\n" +
        "1. **Continuity at the join:** left value = right value = {{f(a)}}.\n" +
        "2. **Matching gradients:** left derivative {{f'_-(a)}} = right derivative {{f'_+(a)}}.\n" +
        "Crucial theorem: **differentiable ⇒ continuous**, but **continuous ⇏ differentiable** (e.g. {{f(x) = |x|}} is continuous at {{0}} yet has a sharp corner with left slope {{-1}} and right slope {{+1}}).\n\n" +
        "### L'Hôpital's Rule [HL]\n" +
        "If {{lim_(x -> a) f(x)/g(x)}} gives an indeterminate form **{{0/0}}** or **{{∞/∞}}** (where {{a}} may be finite or {{±∞}}), and {{f, g}} are differentiable near {{a}} with {{g'(x) != 0}}, then:\n" +
        "{{lim_(x -> a) f(x)/g(x) = lim_(x -> a) (f'(x))/(g'(x))}}\n" +
        "provided the limit on the right exists (or is {{±∞}}). If the new fraction is still {{0/0}} or {{∞/∞}}, verify the indeterminate form again and re-apply L'Hôpital! For {{0 * ∞}} forms (such as {{x ln x}} as {{x -> 0^+}}), rewrite as a quotient {{(ln x)/(1/x)}} first.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 230" role="img" aria-label="Three panels comparing a smooth differentiable join, a continuous sharp corner that is not differentiable, and a jump discontinuity">' +
        '<rect width="560" height="230" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<rect x="16" y="18" width="166" height="194" rx="10" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="99" y="38" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="800" fill="#16a34a">1. Smooth Join</text>' +
        '<line x1="30" y1="162" x2="168" y2="162" stroke="#cbd5e1" stroke-width="1.2"/>' +
        '<line x1="99" y1="54" x2="99" y2="174" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3 3"/>' +
        '<path d="M 38 148 Q 70 116, 99 108 T 160 66" fill="none" stroke="#16a34a" stroke-width="2.6"/>' +
        '<line x1="56" y1="126" x2="142" y2="90" stroke="#4f46e5" stroke-width="1.6" stroke-dasharray="5 3"/>' +
        '<circle cx="99" cy="108" r="4.5" fill="#16a34a"/>' +
        '<text x="99" y="190" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#334155">Continuous ✓</text>' +
        '<text x="99" y="204" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#16a34a">Differentiable ✓ (f′₋ = f′₊)</text>' +
        '<rect x="197" y="18" width="166" height="194" rx="10" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="280" y="38" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="800" fill="#d97706">2. Sharp Corner</text>' +
        '<line x1="211" y1="162" x2="349" y2="162" stroke="#cbd5e1" stroke-width="1.2"/>' +
        '<line x1="280" y1="54" x2="280" y2="174" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3 3"/>' +
        '<polyline points="222,74 280,142 338,74" fill="none" stroke="#d97706" stroke-width="2.6"/>' +
        '<circle cx="280" cy="142" r="4.5" fill="#d97706"/>' +
        '<text x="242" y="128" font-family="sans-serif" font-size="10" fill="#b45309">m = −1</text>' +
        '<text x="296" y="128" font-family="sans-serif" font-size="10" fill="#b45309">m = +1</text>' +
        '<text x="280" y="190" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#334155">Continuous ✓</text>' +
        '<text x="280" y="204" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#dc2626">Differentiable ✗ (f′₋ ≠ f′₊)</text>' +
        '<rect x="378" y="18" width="166" height="194" rx="10" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="461" y="38" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="800" fill="#dc2626">3. Jump Break</text>' +
        '<line x1="392" y1="162" x2="530" y2="162" stroke="#cbd5e1" stroke-width="1.2"/>' +
        '<line x1="461" y1="54" x2="461" y2="174" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3 3"/>' +
        '<path d="M 400 144 Q 430 132, 461 128" fill="none" stroke="#dc2626" stroke-width="2.6"/>' +
        '<path d="M 461 84 Q 492 76, 522 64" fill="none" stroke="#dc2626" stroke-width="2.6"/>' +
        '<circle cx="461" cy="128" r="4.5" fill="#dc2626"/>' +
        '<circle cx="461" cy="84" r="4.5" fill="#ffffff" stroke="#dc2626" stroke-width="2.2"/>' +
        '<text x="461" y="190" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#dc2626">Continuous ✗</text>' +
        '<text x="461" y="204" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#dc2626">Differentiable ✗</text>' +
        '</svg>',
      diagramCaption:
        "Continuity is necessary but not sufficient for differentiability: a smooth join matches both height and slope, a sharp corner breaks only slope, and a jump breaks both.",
      workedExamples: [
        {
          title: "First Principles via Conjugate Rationalisation [HL]",
          problem: "Differentiate {{f(x) = sqrt(x)}} ({{x > 0}}) from first principles.",
          steps: [
            "Write the difference quotient: {{f'(x) = lim_(h -> 0) (sqrt(x + h) - sqrt(x))/h}}.",
            "Multiply numerator and denominator by the conjugate {{sqrt(x + h) + sqrt(x)}}:",
            "{{f'(x) = lim_(h -> 0) ((x + h) - x)/(h(sqrt(x + h) + sqrt(x))) = lim_(h -> 0) h/(h(sqrt(x + h) + sqrt(x)))}}.",
            "Cancel {{h != 0}}: {{f'(x) = lim_(h -> 0) 1/(sqrt(x + h) + sqrt(x))}}.",
            "Take the limit as {{h -> 0}}: {{f'(x) = 1/(sqrt(x) + sqrt(x)) = 1/(2 sqrt(x))}}.",
          ],
          answer: "{{f'(x) = 1/(2 sqrt(x))}}",
        },
        {
          title: "Piecewise Continuity & Differentiability [HL]",
          problem:
            "Find constants {{a}} and {{b}} such that {{f(x) = a x^2 + b x}} for {{x <= 1}} and {{f(x) = 3x + 2}} for {{x > 1}} is differentiable at {{x = 1}}.",
          steps: [
            "Differentiability at {{x = 1}} first requires continuity: {{lim_(x -> 1^-) f(x) = lim_(x -> 1^+) f(x)}}.",
            "Equate branch values at {{x = 1}}: {{a(1)^2 + b(1) = 3(1) + 2}} ⇒ {{a + b = 5}}.",
            "Next equate left and right derivatives at {{x = 1}}: {{f'_-(x) = 2ax + b}} and {{f'_+(x) = 3}}.",
            "At {{x = 1}}: {{2a + b = 3}}.",
            "Subtract {{a + b = 5}} from {{2a + b = 3}} ⇒ {{a = -2}}, and hence {{b = 7}}.",
          ],
          answer: "{{a = -2}}, {{b = 7}}",
          yourTurn: {
            question:
              "Find the value of {{k}} so that {{g(x) = x^2 + 2x}} for {{x <= 1}} and {{g(x) = k x - 1}} for {{x > 1}} is differentiable at {{x = 1}}.",
            answer: { type: "number", value: 4 },
            solution:
              "Continuity at {{x = 1}} gives {{1 + 2 = k - 1}} ⇒ {{k = 4}}. Check gradients: {{g'_-(1) = 2(1) + 2 = 4}} and {{g'_+(1) = k = 4}} — both match!",
          },
        },
        {
          title: "Repeated L'Hôpital's Rule [HL]",
          problem: "Evaluate {{lim_(x -> 0) (e^(2x) - 1 - 2x)/x^2}}.",
          steps: [
            "Check indeterminate form at {{x = 0}}: numerator {{e^0 - 1 - 0 = 0}}, denominator {{0^2 = 0}} ⇒ {{0/0}} form, so L'Hôpital's rule applies.",
            "Differentiate numerator and denominator separately: {{lim_(x -> 0) (2 e^(2x) - 2)/(2x)}}.",
            "Check form again at {{x = 0}}: numerator {{2 - 2 = 0}}, denominator {{0}} ⇒ still {{0/0}}, so apply L'Hôpital a second time.",
            "Differentiate again: {{lim_(x -> 0) (4 e^(2x))/2 = (4 * 1)/2 = 2}}.",
          ],
          answer: "{{2}}",
          yourTurn: {
            question: "Use L'Hôpital's rule to evaluate {{lim_(x -> 0) (1 - cos(4x))/x^2}}.",
            answer: { type: "number", value: 8 },
            solution:
              "Form {{0/0}} ⇒ {{lim_(x -> 0) (4 sin(4x))/(2x)}}. Still {{0/0}} ⇒ {{lim_(x -> 0) (16 cos(4x))/2 = 16/2 = 8}}.",
          },
        },
      ],
      keyPoints: [
        "Keep writing {{lim_(h -> 0)}} on EVERY line of a first-principles proof until the exact step you substitute {{h = 0}} — dropping it early costs an IB communication mark!",
        "Never apply the quotient rule when using L'Hôpital's rule: differentiate numerator and denominator INDEPENDENTLY ({{f'(x)/g'(x)}}).",
        "Always check and STATE the indeterminate form (`0/0` or `∞/∞`) BEFORE every application of L'Hôpital's rule.",
        "For piecewise differentiability, matching derivatives alone is NOT enough — two parallel lines with a vertical jump have equal slopes yet fail continuity!",
        "To handle {{0 * ∞}} limits like {{lim_(x -> 0^+) x^2 ln x}}, push the polynomial to the denominator as {{(ln x)/x^(-2)}} (leaving {{ln x}} on top so differentiating it simplifies to {{1/x}}!).",
      ],
      whyItWorks:
        "Why does L'Hôpital's rule work for {{0/0}}? Near {{x = a}}, linear tangent approximations say {{f(x) ≈ f(a) + f'(a)(x - a)}} and {{g(x) ≈ g(a) + g'(a)(x - a)}}. Since {{f(a) = g(a) = 0}}, the constant terms vanish and the ratio {{f(x)/g(x)}} collapses to {{(f'(a)(x - a))/(g'(a)(x - a)) = f'(a)/g'(a)}} — the ratio of the two speeds leaving zero!",
      strategies: [
        "Before reaching for L'Hôpital, ALWAYS test direct substitution first! If the fraction evaluates to {{3/2}} or {{0/5 = 0}}, applying L'Hôpital will destroy your answer.",
        "In {{0 * ∞}} limits with {{ln x}} or {{e^(-x)}}, test which factor simplifies better when moved to the denominator: keep {{ln x}} on top and send {{x^n}} downstairs as {{x^(-n)}}.",
        "For first-principles trig proofs, memorise {{sin(x + h) - sin x = sin x (cos h - 1) + cos x sin h}} so you split cleanly into the two known standard limits.",
        "If an IB question explicitly says 'from first principles', using power/chain shortcuts scores ZERO marks — show the difference quotient and algebraic cancellation.",
      ],
      thinkDeeper:
        "What happens if you apply L'Hôpital blindly to {{lim_(x -> 1) (x^2 + 1)/(x + 1)}}? Direct substitution immediately gives {{2/2 = 1}}, because it is NOT indeterminate. Blindly differentiating top and bottom gives {{2x/1 -> 2}} — completely wrong!",
    },

    // =========================================================================
    // SECTION 4: implicit-related-rates-trig-hl (HL)
    // =========================================================================
    {
      id: "implicit-related-rates-trig-hl",
      heading: "[HL] Implicit Differentiation, Related Rates & Extended Derivatives",
      level: "HL",
      discovery: {
        problem:
          "The circle {{x^2 + y^2 = 25}} cannot be written as a single function {{y = f(x)}}, yet it clearly has a tangent at {{(3, 4)}}. Differentiate EVERY term of {{x^2 + y^2 = 25}} with respect to {{x}}, treating {{y}} as an unknown function of {{x}} via the chain rule. How does the resulting gradient compare with the radius slope from {{(0, 0)}} to {{(3, 4)}}?",
        idea:
          "Differentiating gives {{2x + 2y (dy/dx) = 0}}, so {{dy/dx = -x/y}}. At {{(3, 4)}}, the tangent gradient is {{-3/4}}, while the radius gradient is {{4/3}} — their product is {{-1}}, proving in two lines of calculus that a circle's tangent is perpendicular to its radius!",
      },
      body:
        "### Implicit Differentiation [HL]\n" +
        "When {{x}} and {{y}} are intertwined in an equation {{F(x, y) = c}}, differentiate both sides with respect to {{x}}:\n" +
        "- Any pure {{x}}-term differentiates normally.\n" +
        "- Any {{y}}-term requires the **chain rule**: {{d/dx [g(y)] = g'(y) * (dy/dx)}} (e.g. {{d/dx(y^3) = 3y^2 (dy/dx)}}, {{d/dx(sin y) = cos y (dy/dx)}}).\n" +
        "- Any mixed product like {{x^2 y}} requires the **product rule**: {{2xy + x^2 (dy/dx)}}.\n" +
        "To find a numerical gradient at {{(x_0, y_0)}}, you may substitute {{x_0}} and {{y_0}} immediately after differentiating to avoid algebraic errors. For {{d^2 y/dx^2}}, differentiate the implicit relation a second time and substitute your expression (or value) for {{dy/dx}}.\n\n" +
        "### Related Rates of Change [HL]\n" +
        "When two or more quantities change together over time {{t}} (water filling a cone, a ladder sliding down a wall, an angle tracking a rocket):\n" +
        "1. Draw a labelled diagram and identify the **given rate** (e.g. {{dV/dt}}) and **target rate** (e.g. {{dh/dt}}), paying close attention to signs (decreasing ⇒ negative rate!).\n" +
        "2. Write a **general** geometric equation linking the variables (Pythagoras, similar triangles, trig ratio, volume/area formula) — keep moving quantities as variables!\n" +
        "3. Differentiate implicitly with respect to {{t}} using the chain rule.\n" +
        "4. **Only AFTER differentiating**, substitute the snapshot numbers to solve for the unknown rate.\n\n" +
        "### Extended HL Derivatives\n" +
        "- **Reciprocal & tangent trig (radians):** {{d/dx(tan x) = sec^2 x}}, {{d/dx(sec x) = sec x tan x}}, {{d/dx(csc x) = -csc x cot x}}, {{d/dx(cot x) = -csc^2 x}}.\n" +
        "- **General base exponentials & logs ({{a > 0, a != 1}}):** {{d/dx(a^x) = a^x ln a}} and {{d/dx(log_a x) = 1/(x ln a)}}.\n" +
        "- **Inverse trig functions:** {{d/dx(arcsin x) = 1/sqrt(1 - x^2)}}, {{d/dx(arccos x) = -1/sqrt(1 - x^2)}}, and {{d/dx(arctan x) = 1/(1 + x^2)}}.\n" +
        "Remember the chain rule whenever the argument is a function {{u(x)}}, e.g. {{d/dx(arctan(kx)) = k/(1 + k^2 x^2)}}.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 250" role="img" aria-label="Two related rates diagrams: an inverted conical water tank using similar triangles and a sliding ladder forming a right triangle against a wall">' +
        '<rect width="560" height="250" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<rect x="16" y="16" width="256" height="218" rx="10" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="144" y="36" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="800" fill="#0891b2">Conical Tank (Similar Triangles)</text>' +
        '<polygon points="84,126 204,126 144,202" fill="#bae6fd" opacity="0.75"/>' +
        '<ellipse cx="144" cy="126" rx="60" ry="11" fill="#7dd3fc" stroke="#0284c7" stroke-width="1.5"/>' +
        '<line x1="62" y1="68" x2="144" y2="202" stroke="#1e293b" stroke-width="2.2"/>' +
        '<line x1="226" y1="68" x2="144" y2="202" stroke="#1e293b" stroke-width="2.2"/>' +
        '<ellipse cx="144" cy="68" rx="82" ry="14" fill="none" stroke="#1e293b" stroke-width="2"/>' +
        '<line x1="144" y1="68" x2="144" y2="202" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4 3"/>' +
        '<line x1="144" y1="68" x2="226" y2="68" stroke="#4f46e5" stroke-width="1.8"/>' +
        '<line x1="144" y1="126" x2="204" y2="126" stroke="#0284c7" stroke-width="2"/>' +
        '<text x="184" y="62" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#4f46e5">R</text>' +
        '<text x="174" y="121" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#0284c7">r(t)</text>' +
        '<text x="131" y="168" text-anchor="end" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#0284c7">h(t)</text>' +
        '<text x="52" y="138" text-anchor="end" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#4f46e5">H</text>' +
        '<text x="144" y="222" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#334155">r / h = R / H  ⇒  V = (π/3) r² h</text>' +
        '<rect x="288" y="16" width="256" height="218" rx="10" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="416" y="36" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="800" fill="#4f46e5">Sliding Ladder (Pythagoras &amp; Angle)</text>' +
        '<line x1="336" y1="54" x2="336" y2="194" stroke="#334155" stroke-width="3"/>' +
        '<line x1="336" y1="194" x2="520" y2="194" stroke="#334155" stroke-width="3"/>' +
        '<rect x="336" y="182" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1.4"/>' +
        '<line x1="336" y1="78" x2="486" y2="194" stroke="#e11d48" stroke-width="3.2"/>' +
        '<circle cx="336" cy="78" r="4" fill="#e11d48"/>' +
        '<circle cx="486" cy="194" r="4" fill="#e11d48"/>' +
        '<path d="M 454 194 A 32 32 0 0 1 462 175" fill="none" stroke="#4f46e5" stroke-width="1.8"/>' +
        '<text x="444" y="185" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#4f46e5">θ(t)</text>' +
        '<text x="424" y="128" font-family="sans-serif" font-size="12" font-weight="700" fill="#e11d48">L (const)</text>' +
        '<text x="326" y="138" text-anchor="end" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#334155">y(t)</text>' +
        '<text x="410" y="210" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#334155">x(t)</text>' +
        '<text x="348" y="96" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#dc2626">dy/dt &lt; 0 ↓</text>' +
        '<text x="488" y="184" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#16a34a">dx/dt &gt; 0 →</text>' +
        '<text x="416" y="226" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#334155">x² + y² = L²  ⇒  x(dx/dt) + y(dy/dt) = 0</text>' +
        '</svg>',
      diagramCaption:
        "Two classic HL related-rates templates: eliminate r via similar triangles before differentiating cone volume, and keep L constant while differentiating x² + y² = L² with respect to t.",
      workedExamples: [
        {
          title: "Implicit Differentiation at a Point [HL]",
          problem: "Find the exact gradient {{dy/dx}} of the curve {{x^2 + xy + y^2 = 7}} at the point {{(1, 2)}}.",
          steps: [
            "Differentiate each term with respect to {{x}}, using the product rule on {{xy}} and the chain rule on {{y^2}}:",
            "{{2x + (1 * y + x * dy/dx) + 2y (dy/dx) = 0}}.",
            "Substitute {{x = 1}} and {{y = 2}} immediately: {{2(1) + 2 + 1(dy/dx) + 2(2)(dy/dx) = 0}}.",
            "Simplify: {{4 + 5(dy/dx) = 0}} ⇒ {{dy/dx = -4/5}}.",
          ],
          answer: "{{dy/dx = -4/5}}",
          yourTurn: {
            question: "Find {{dy/dx}} at the point {{(2, 1)}} on the curve {{x^2 - 2xy + 3y^2 = 3}}.",
            answer: { type: "number", value: -1 },
            solution:
              "Differentiating implicitly: {{2x - 2y - 2x(dy/dx) + 6y(dy/dx) = 0}}. At {{(2, 1)}}: {{4 - 2 - 4(dy/dx) + 6(dy/dx) = 0}} ⇒ {{2 + 2(dy/dx) = 0}} ⇒ {{dy/dx = -1}}.",
          },
        },
        {
          title: "Related Rates: Filling a Conical Tank [HL]",
          problem:
            "Water is poured into an inverted right-circular cone of top radius {{3}} m and height {{6}} m at a constant rate of {{2 pi}} m³ min⁻¹. Find the rate at which the water depth {{h}} is rising when {{h = 4}} m.",
          steps: [
            "By similar triangles, {{r/h = 3/6 = 1/2}}, so {{r = h/2}}.",
            "Express water volume solely in terms of {{h}}: {{V = (1/3) pi r^2 h = (1/3) pi (h/2)^2 h = (pi/12) h^3}}.",
            "Differentiate with respect to time {{t}}: {{dV/dt = (pi/4) h^2 (dh/dt)}}.",
            "Now substitute {{dV/dt = 2 pi}} and {{h = 4}}: {{2 pi = (pi/4)(16)(dh/dt) = 4 pi (dh/dt)}}.",
            "Solve for {{dh/dt}}: {{dh/dt = (2 pi)/(4 pi) = 1/2}} m min⁻¹.",
          ],
          answer: "{{dh/dt = 1/2}} m min⁻¹ ({{0.5}} m min⁻¹)",
        },
        {
          title: "Deriving and Applying Inverse-Trig Derivatives [HL]",
          problem:
            "Prove implicitly that {{d/dx(arcsin x) = 1/sqrt(1 - x^2)}} for {{-1 < x < 1}}, and differentiate {{f(x) = arctan(2x) + 3^x}}.",
          steps: [
            "Let {{y = arcsin x}}, where {{-pi/2 <= y <= pi/2}}, so {{sin y = x}}.",
            "Differentiate implicitly with respect to {{x}}: {{cos y (dy/dx) = 1}} ⇒ {{dy/dx = 1/(cos y)}}.",
            "On {{(-pi/2, pi/2)}}, {{cos y > 0}}, so {{cos y = +sqrt(1 - sin^2 y) = sqrt(1 - x^2)}}, giving {{d/dx(arcsin x) = 1/sqrt(1 - x^2)}}.",
            "For {{f(x) = arctan(2x) + 3^x}}, apply the chain rule to {{arctan(2x)}} and the base-{{a}} rule to {{3^x}}:",
            "{{f'(x) = 2/(1 + (2x)^2) + 3^x ln 3 = 2/(1 + 4x^2) + 3^x ln 3}}.",
          ],
          answer: "{{f'(x) = 2/(1 + 4x^2) + 3^x ln 3}}",
          yourTurn: {
            question: "Evaluate {{f'(1/2)}} given {{f(x) = arctan(2x)}}.",
            answer: { type: "number", value: 1 },
            solution:
              "{{f'(x) = 2/(1 + 4x^2)}}. Substituting {{x = 1/2}} gives {{2/(1 + 4(1/4)) = 2/2 = 1}}.",
          },
        },
      ],
      keyPoints: [
        "In implicit differentiation, EVERY term containing {{y}} spawns a {{dy/dx}} factor — and remember that the derivative of a constant on the RHS is {{0}}, NOT the constant itself!",
        "In related rates, NEVER plug in the instantaneous values ({{h = 4}}, {{x = 3}}, etc.) before differentiating — doing so turns variables into constants whose derivatives vanish!",
        "Pay ruthless attention to signs in related rates: 'leaking', 'shrinking', or 'sliding down' means the rate is NEGATIVE.",
        "Watch the negative signs on co-functions: {{cos, cot, csc, arccos}} ALL have negative derivatives.",
        "Rewrite {{a^x = e^(x ln a)}} and {{log_a x = (ln x)/(ln a)}} if you ever forget the general-base derivative rules during Paper 1.",
      ],
      whyItWorks:
        "Why does {{d/dx(a^x) = a^x ln a}} carry an extra {{ln a}} factor? Rewrite {{a = e^(ln a)}}, so {{a^x = e^((ln a) x)}}. Applying the chain rule multiplies by the derivative of the exponent {{(ln a) x}}, giving {{(ln a) e^((ln a) x) = a^x ln a}}. Notice that {{e}} is the unique base where {{ln e = 1}}, making {{e^x}} its own derivative!",
      strategies: [
        "When an IB question asks for the numerical tangent slope to an implicit curve at {{(x_0, y_0)}}, plug in {{x_0, y_0}} straight after differentiating — skipping algebraic isolation of {{dy/dx}} prevents sign slips.",
        "For cone related-rates problems, ALWAYS reduce {{V}} to a single variable using similar triangles ({{r/h = R/H}}) BEFORE differentiating, unless both {{dr/dt}} and {{dh/dt}} are explicitly involved.",
        "For {{d/dx(arctan(g(x)))}}, square the ENTIRE inside argument {{[g(x)]^2}} in the denominator and place {{g'(x)}} on top.",
        "If asked to find where an implicit curve has a horizontal tangent, set {{dy/dx = 0}} (numerator = 0) AND substitute back into the ORIGINAL curve equation to find valid coordinates.",
      ],
      thinkDeeper:
        "Where does an implicit curve have a VERTICAL tangent? Wherever the denominator of {{dy/dx}} equals zero (while the numerator is non-zero)! For {{x^2 + y^2 = 25}}, {{dy/dx = -x/y}} blows up at {{y = 0}}, pinpointing the vertical tangents at {{(5, 0)}} and {{(-5, 0)}}.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "State the power, exponential, logarithm, and basic trig derivatives (SL).",
        back: "{{d/dx(x^n) = n x^(n-1)}}, {{d/dx(e^x) = e^x}}, {{d/dx(ln x) = 1/x}}, {{d/dx(sin x) = cos x}}, {{d/dx(cos x) = -sin x}} (radians only!).",
        level: "SL",
      },
      {
        front: "State the Chain Rule, Product Rule, and Quotient Rule.",
        back: "Chain: {{d/dx[f(g(x))] = f'(g(x)) g'(x)}}. Product: {{(uv)' = u'v + uv'}}. Quotient: {{(u/v)' = (u'v - uv')/v^2}}.",
        level: "SL",
      },
      {
        front: "How are the tangent gradient {{m_T}} and normal gradient {{m_N}} related at {{(x_0, y_0)}}?",
        back: "{{m_T = f'(x_0)}} and {{m_N = -1/m_T}} (for {{m_T != 0}}). If {{m_T = 0}}, the tangent is {{y = y_0}} and the normal is the vertical line {{x = x_0}}.",
        level: "SL",
      },
      {
        front: "What is the Second Derivative Test for a stationary point {{f'(c) = 0}}, and when does it fail?",
        back: "{{f''(c) < 0}} ⇒ local max; {{f''(c) > 0}} ⇒ local min; {{f''(c) = 0}} is INCONCLUSIVE — use a first-derivative sign chart instead!",
        level: "SL",
      },
      {
        front: "What is the exact condition for a point of inflection at {{x = c}}?",
        back: "The curve is continuous at {{c}} AND **{{f''(x)}} changes sign** across {{x = c}}. Merely having {{f''(c) = 0}} (like {{y = x^4}} at {{0}}) is NOT sufficient!",
        level: "SL",
      },
      {
        front: "In kinematics, how do you know when a particle is speeding up vs slowing down?",
        back: "Speeding up when velocity {{v(t)}} and acceleration {{a(t)}} have the **same sign** ({{v * a > 0}}); slowing down when they have **opposite signs** ({{v * a < 0}}).",
        level: "SL",
      },
      {
        front: "How do you identify local extrema and inflection points of {{f}} from a graph of {{f'(x)}}?",
        back: "Zeros of {{f'}} where {{f'}} crosses the x-axis give local extrema of {{f}}; local extrema (turning points) of {{f'}} give points of inflection of {{f}}.",
        level: "SL",
      },
      {
        front: "What must you always include after solving {{dQ/dx = 0}} in an IB optimization question?",
        back: "An explicit justification that the stationary point yields the required maximum or minimum (via {{d^2 Q/dx^2}}, a sign chart of {{dQ/dx}}, and closed-domain endpoint checks).",
        level: "SL",
      },
      {
        front: "[HL] State the definition of the derivative from first principles.",
        back: "{{f'(x) = lim_(h -> 0) (f(x + h) - f(x))/h}}, provided this two-sided limit exists.",
        level: "HL",
      },
      {
        front: "[HL] What two conditions make a piecewise function differentiable at a join {{x = a}}?",
        back: "(1) Continuity: {{lim_(x -> a^-) f(x) = lim_(x -> a^+) f(x) = f(a)}}; AND (2) Matching gradients: {{f'_-(a) = f'_+(a)}}.",
        level: "HL",
      },
      {
        front: "[HL] When is L'Hôpital's rule valid, and how do you handle a {{0 * ∞}} limit?",
        back: "Valid ONLY for indeterminate forms {{0/0}} or {{∞/∞}} (state this before EVERY application!). Rewrite {{0 * ∞}} as {{f/(1/g)}} first.",
        level: "HL",
      },
      {
        front: "[HL] Differentiate {{tan x}}, {{sec x}}, {{csc x}}, and {{cot x}}.",
        back: "{{d/dx(tan x) = sec^2 x}}, {{d/dx(sec x) = sec x tan x}}, {{d/dx(csc x) = -csc x cot x}}, {{d/dx(cot x) = -csc^2 x}}.",
        level: "HL",
      },
      {
        front: "[HL] Differentiate {{a^x}} and {{log_a x}} (for {{a > 0, a != 1}}).",
        back: "{{d/dx(a^x) = a^x ln a}} and {{d/dx(log_a x) = 1/(x ln a)}}.",
        level: "HL",
      },
      {
        front: "[HL] Differentiate {{arcsin x}}, {{arccos x}}, and {{arctan x}}.",
        back: "{{d/dx(arcsin x) = 1/sqrt(1 - x^2)}}, {{d/dx(arccos x) = -1/sqrt(1 - x^2)}}, {{d/dx(arctan x) = 1/(1 + x^2)}}.",
        level: "HL",
      },
      {
        front: "[HL] Differentiate {{x^2 y + y^3 = 10}} implicitly with respect to {{x}}.",
        back: "{{2xy + x^2 (dy/dx) + 3y^2 (dy/dx) = 0}} ⇒ {{dy/dx = (-2xy)/(x^2 + 3y^2)}}.",
        level: "HL",
      },
      {
        front: "[HL] What is the golden rule of timing in a related-rates problem?",
        back: "Differentiate the general geometric relation with respect to {{t}} FIRST, and ONLY substitute the instantaneous numerical values AFTER differentiating!",
        level: "HL",
      },
    ],
    mustKnow: [
      "All calculus trigonometric differentiation requires angles strictly in **radians** (check RAD mode on TI-Nspire CX before Paper 2!).",
      "For {{y = f(g(x))}}, NEVER forget the inner derivative factor {{g'(x)}} — especially on {{e^(kx)}}, {{ln(ax + b)}}, and {{sin(kx)}}.",
      "A stationary point requires {{f'(c) = 0}}; a point of inflection requires **{{f''(x)}} changing sign** across {{c}} (not merely {{f''(c) = 0}}).",
      "When {{f'(c) = 0}} and {{f''(c) = 0}}, the second derivative test fails — switch immediately to the first-derivative sign test.",
      "Speeding up occurs when {{v(t)}} and {{a(t)}} share the same sign ({{v * a > 0}}); slowing down when they have opposite signs ({{v * a < 0}}).",
      "In optimization, eliminate extra variables using the constraint, check physical domain bounds, and justify max/min explicitly.",
      "[HL] Differentiability implies continuity, but continuity does NOT imply differentiability (sharp corners and vertical cusps).",
      "[HL] L'Hôpital's rule differentiates numerator and denominator SEPARATELY and ONLY applies to {{0/0}} or {{∞/∞}} indeterminate forms.",
      "[HL] In implicit differentiation, apply the chain rule to every {{y}}-term and the product rule to every {{xy}} mixed term, and remember {{d/dx(constant) = 0}}.",
      "[HL] In related rates, encode decreasing quantities with a NEGATIVE rate and substitute snapshot numbers strictly AFTER differentiating with respect to {{t}}.",
    ],
    misconceptions: [
      {
        wrong: "If {{f''(c) = 0}}, then {{(c, f(c))}} must be a point of inflection.",
        right: "False! For {{f(x) = x^4}}, {{f''(0) = 0}} yet {{f''(x) = 12x^2 >= 0}} never changes sign, so {{(0, 0)}} is a local minimum. You MUST verify a sign change in {{f''(x)}}.",
        level: "SL",
      },
      {
        wrong: "The derivative of a product {{u * v}} is {{u' * v'}}.",
        right: "Never! You must apply the product rule {{(uv)' = u'v + uv'}} — e.g. {{d/dx(x sin x) = sin x + x cos x}}, not {{cos x}}.",
        level: "SL",
      },
      {
        wrong: "Negative acceleration {{a(t) < 0}} always means the particle is slowing down.",
        right: "Only if {{v(t) > 0}}! If {{v(t) < 0}} and {{a(t) < 0}}, both point in the negative direction, so the particle's speed {{|v|}} is INCREASING.",
        level: "SL",
      },
      {
        wrong: "The equation of the tangent to {{y = x^3}} at {{x = 2}} is {{y - 8 = 3x^2 (x - 2)}}.",
        right: "A tangent is a STRAIGHT line with a constant numerical slope! Evaluate {{f'(2) = 12}} first to get {{y - 8 = 12(x - 2)}}, i.e. {{y = 12x - 16}}.",
        level: "SL",
      },
      {
        wrong: "[HL] If a function is continuous at {{x = a}}, it is differentiable at {{x = a}}.",
        right: "The implication runs the opposite way: differentiable ⇒ continuous. Functions like {{|x|}} and {{x^(2/3)}} are continuous at {{0}} yet fail to be differentiable there.",
        level: "HL",
      },
      {
        wrong: "[HL] L'Hôpital's rule can be applied to any rational limit {{lim f(x)/g(x)}}.",
        right: "Applying L'Hôpital when direct substitution is NOT {{0/0}} or {{∞/∞}} gives a completely wrong answer! Always verify indeterminacy first.",
        level: "HL",
      },
      {
        wrong: "[HL] Differentiating {{x^2 + y^2 = 25}} implicitly gives {{2x + 2y (dy/dx) = 25}}.",
        right: "The derivative of the constant {{25}} is {{0}}! Writing {{25}} on the right-hand side ruins the gradient completely.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Leaving the TI-Nspire CX in DEGREE mode on Paper 2 when finding turning points or gradients of trig functions — all calculus requires RAD mode!",
      "Reversing the quotient rule numerator to {{(u v' - u' v)/v^2}}, flipping the sign of the entire derivative.",
      "Reading a given graph of {{f'(x)}} as if it were {{f(x)}} — mistaking turning points of {{f'}} for turning points of {{f}} instead of points of inflection.",
      "Dropping the justification step in an optimization question (e.g. failing to check {{d^2 V/dx^2 < 0}} or endpoints), forfeiting the final reasoning mark (R1).",
      "Forgetting the chain rule factor on {{d/dx(ln(3x - 1)) = 3/(3x - 1)}} or {{d/dx(sin(2x)) = 2 cos(2x)}}.",
      "[HL] Using L'Hôpital's rule inside a 'from first principles' question — that is circular logic and earns zero marks.",
      "[HL] Substituting numerical values (like {{h = 4}}) into a related-rates formula BEFORE differentiating with respect to {{t}}, making every derivative collapse to zero.",
      "[HL] Writing {{d/dx(arctan(3x)) = 1/(1 + 3x^2)}} instead of {{3/(1 + 9x^2)}} — forgetting BOTH the chain factor {{3}} AND squaring the coefficient {{3^2 = 9}}.",
    ],
    mnemonics: [
      {
        topic: "Quotient Rule",
        device: "Lo-D-Hi minus Hi-D-Lo, square the bottom and away we go!",
        explanation: "For {{u/v}} ('Hi / Lo'), {{(v u' - u v')/v^2}} puts the denominator {{v}} ('Lo') first so you never invert the subtraction sign.",
        level: "SL",
      },
      {
        topic: "Concavity Sign",
        device: "f″ Positive = Cup (∪), f″ Negative = Frown (∩)",
        explanation: "Positive second derivative holds water like a smile/cup (concave up ⇒ local minimum at a stationary point); negative second derivative sheds water like a frown (concave down ⇒ local maximum).",
        level: "SL",
      },
      {
        topic: "Negative Co-Function Derivatives",
        device: "Every 'Co-' gets a Minus!",
        explanation: "{{cos x}}, {{cot x}}, {{csc x}}, and {{arccos x}} all start with 'c' and ALL produce negative derivatives — while {{sin, tan, sec, arcsin, arctan}} are positive.",
        level: "HL",
      },
      {
        topic: "Related Rates Workflow",
        device: "D–E–D–S: Diagram → Equation → Differentiate (w.r.t. t) → Substitute",
        explanation: "Following D–E–D–S in strict order makes it impossible to plug in snapshot numbers too early before taking {{d/dt}}.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Aerospace Rocket Staging & Max-Q",
        emoji: "🚀",
        detail: "Flight computers track altitude {{s(t)}}, velocity {{v(t)}}, and aerodynamic pressure {{q(t) = (1/2) ρ(h) v^2}} using derivatives to throttle engines right through the local maximum ('Max-Q') where structural stress peaks.",
      },
      {
        title: "Sustainable Packaging Optimization",
        emoji: "📦",
        detail: "Beverage manufacturers minimise aluminium sheet area {{A(r) = 2 pi r^2 + 2V/r}} for a fixed 330 mL volume — saving thousands of tonnes of metal globally every year using {{dA/dr = 0}}.",
      },
      {
        title: "Epidemic Inflection Points",
        emoji: "📈",
        detail: "Public-health modellers watch the point of inflection ({{I''(t) = 0}} with sign change `+ → −`) of cumulative infection curves: that exact day marks when daily new cases {{I'(t)}} finally peak and begin falling.",
      },
      {
        title: "Radar & Autonomous Vehicle Tracking [HL]",
        emoji: "📡",
        detail: "Roadside LiDAR measures distance {{r(t)}} and angle {{θ(t)}} to oncoming vehicles, converting angular rate {{dθ/dt}} into true ground speed {{dx/dt}} in real time via related rates.",
      },
      {
        title: "Lens Curvature & Optics",
        emoji: "🔭",
        detail: "Optical engineers calculate normal lines ({{m_N = -1/m_T}}) along parabolic mirrors and implicit glass surfaces so incoming parallel rays reflect cleanly onto a single focal point.",
      },
    ],
    videos: [
      {
        title: "IB Maths AA — Chain, Product & Quotient Rules Explained",
        channel: "Revision Village / YouTube Search",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+chain+product+quotient+rule+differentiation",
      },
      {
        title: "Curve Sketching: Connecting f, f′, and f″ Visually",
        channel: "3Blue1Brown / Essence of Calculus",
        url: "https://www.youtube.com/results?search_query=3Blue1Brown+essence+of+calculus+derivative+paradox",
      },
      {
        title: "IB Maths AA HL — L'Hôpital's Rule & First Principles Proofs",
        channel: "OSC / YouTube Search",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+L+Hopital+rule+first+principles+differentiation",
      },
      {
        title: "IB Maths AA HL — Implicit Differentiation & Related Rates",
        channel: "Professor Leonard / YouTube Search",
        url: "https://www.youtube.com/results?search_query=IB+Maths+AA+HL+implicit+differentiation+related+rates+cone",
      },
    ],
    formulas: [
      {
        name: "Power Rule",
        formula: "{{d/dx (x^n) = n x^(n - 1)}}",
        note: "Formula Booklet (SL 5.3)",
        level: "SL",
      },
      {
        name: "Exponential & Natural Log Derivatives",
        formula: "{{d/dx (e^x) = e^x}},  {{d/dx (ln x) = 1/x}}",
        note: "Formula Booklet (SL 5.6) — domain {{x > 0}} for {{ln x}}",
        level: "SL",
      },
      {
        name: "Sine & Cosine Derivatives",
        formula: "{{d/dx (sin x) = cos x}},  {{d/dx (cos x) = -sin x}}",
        note: "Formula Booklet (SL 5.6) — radians ONLY!",
        level: "SL",
      },
      {
        name: "Chain Rule",
        formula: "{{dy/dx = (dy/du)(du/dx)}}",
        note: "Formula Booklet (SL 5.6)",
        level: "SL",
      },
      {
        name: "Product Rule",
        formula: "{{d/dx (uv) = u (dv/dx) + v (du/dx)}}",
        note: "Formula Booklet (SL 5.6)",
        level: "SL",
      },
      {
        name: "Quotient Rule",
        formula: "{{d/dx (u/v) = (v (du/dx) - u (dv/dx))/v^2}}",
        note: "Formula Booklet (SL 5.6)",
        level: "SL",
      },
      {
        name: "Tangent & Normal Lines at (x₀, y₀)",
        formula: "{{y - y_0 = m_T (x - x_0)}},  {{m_N = -1/m_T}}",
        note: "Not in booklet — must memorise! (SL 5.4)",
        level: "SL",
      },
      {
        name: "Kinematics Links",
        formula: "{{v = ds/dt}},  {{a = dv/dt = d^2 s/dt^2}}",
        note: "Formula Booklet (SL 5.9)",
        level: "SL",
      },
      {
        name: "Differentiation from First Principles",
        formula: "{{f'(x) = lim_(h -> 0) (f(x + h) - f(x))/h}}",
        note: "Not in booklet — must memorise! (AHL 5.12)",
        level: "HL",
      },
      {
        name: "L'Hôpital's Rule",
        formula: "{{lim_(x -> a) f(x)/g(x) = lim_(x -> a) (f'(x))/(g'(x))}}",
        note: "Not in booklet — ONLY for {{0/0}} or {{∞/∞}} (AHL 5.13)",
        level: "HL",
      },
      {
        name: "Tangent & Reciprocal Trig Derivatives",
        formula: "{{d/dx(tan x) = sec^2 x}}, {{d/dx(sec x) = sec x tan x}}, {{d/dx(csc x) = -csc x cot x}}, {{d/dx(cot x) = -csc^2 x}}",
        note: "Formula Booklet (AHL 5.15)",
        level: "HL",
      },
      {
        name: "General Exponential & Log Derivatives",
        formula: "{{d/dx (a^x) = a^x ln a}},  {{d/dx (log_a x) = 1/(x ln a)}}",
        note: "Formula Booklet (AHL 5.15)",
        level: "HL",
      },
      {
        name: "Inverse Trig Derivatives",
        formula: "{{d/dx(arcsin x) = 1/sqrt(1 - x^2)}}, {{d/dx(arccos x) = -1/sqrt(1 - x^2)}}, {{d/dx(arctan x) = 1/(1 + x^2)}}",
        note: "Formula Booklet (AHL 5.15)",
        level: "HL",
      },
      {
        name: "Acceleration in Terms of Displacement",
        formula: "{{a = v (dv/ds)}}",
        note: "Formula Booklet (AHL 5.9 / chain rule {{dv/dt = (dv/ds)(ds/dt)}})",
        level: "HL",
      },
    ],
  },
};
