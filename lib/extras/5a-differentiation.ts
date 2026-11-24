import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "How can a speed camera measure your exact speed at a single frozen millisecond — when distance travelled in zero time is zero, and {{0/0}} is meaningless? Differentiation was invented to crack that exact paradox, and today it powers everything from rocket staging to AI gradient descent.",
  didYouKnow: [
    "L'Hôpital's rule was actually discovered by **Johann Bernoulli** in 1694! The wealthy Marquis de L'Hôpital paid Bernoulli a generous annual salary to teach him calculus and give him exclusive publishing rights — so when L'Hôpital printed the first calculus textbook in 1696, the rule took his name forever.",
    "Every modern large language model and neural network trains using **backpropagation** — which is nothing more than the **Chain Rule** applied millions of times in a row to find the steepest downhill direction of a loss curve!",
    "The classic 330 mL soda can is taller than the mathematically 'minimum-metal' cylinder ({{h = 2r}}). Why? The thick press-formed top lid costs roughly 3× as much aluminium per square centimetre as the ultra-thin side wall — adding that cost weight into {{dC/dr = 0}} predicts the exact sleek proportions you hold in your hand!",
    "In 1872, Karl Weierstrass shocked the mathematical world by constructing a fractal curve that is **continuous at every single point** on the real line yet **differentiable nowhere** — an infinite jagged skyline of sharp corners at every zoom level.",
    "The derivative of {{e^x}} is {{e^x}} itself, making {{e ≈ 2.71828}} the unique growth base whose instantaneous growth rate at every moment equals its current size.",
  ],
  activities: [
    {
      title: "Fold the Maximum-Volume Cardboard Box",
      emoji: "📦",
      materials: [
        "Three identical sheets of A4 or 18 cm × 18 cm square card",
        "Ruler, scissors, sticky tape, and dried rice or lentils for measuring volume",
      ],
      steps: [
        "Take an 18 cm × 18 cm square sheet. Using calculus, predict the corner cut-out {{x}} that maximises {{V(x) = x(18 - 2x)^2}} (solve {{V'(x) = 0}} on {{0 < x < 9}}).",
        "Cut squares of side {{x = 2}} cm from Sheet 1, {{x = 3}} cm (your calculus optimum!) from Sheet 2, and {{x = 5}} cm from Sheet 3, then fold and tape all three open-top boxes.",
        "Fill your {{x = 3}} cm box level to the brim with rice, then pour that exact rice into the {{x = 2}} cm and {{x = 5}} cm boxes to watch them overflow!",
      ],
      maths:
        "{{V(x) = 4x^3 - 72x^2 + 324x}} ⇒ {{V'(x) = 12(x - 3)(x - 9) = 0}} ⇒ optimal cut {{x = 3}} cm giving {{V(3) = 3 * 12^2 = 432}} cm³, beating both {{V(2) = 392}} cm³ and {{V(5) = 320}} cm³!",
    },
    {
      title: "The Derivative-to-Curve Detective Challenge",
      emoji: "🕵️",
      materials: [
        "Grid paper and two coloured pens (blue for {{f}}, orange for {{f'}})",
        "A partner or your TI-Nspire CX graphing page",
      ],
      steps: [
        "Draw a smooth curve {{y = f'(x)}} (the DERIVATIVE, not {{f}}!) with two x-intercepts and one turning point.",
        "Hand only the {{f'(x)}} sketch to a partner and challenge them to mark directly below it where the hidden original curve {{f(x)}} has a local max, a local min, and a point of inflection.",
        "Check together: x-intercepts of {{f'}} map to turning points of {{f}}, and turning points of {{f'}} map to points of inflection of {{f}}!",
      ],
      maths:
        "Switching between {{f}}, {{f'}}, and {{f''}} graphs is one of the highest-yield IB Paper 1 skills: sign of {{f'}} controls rise/fall of {{f}}, while slope of {{f'}} (= {{f''}}) controls concavity of {{f}}.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Why f″(0) = 0 Alone Never Guarantees Inflection: x³ vs x⁴",
      svg:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 210" role="img" aria-label="Comparison of y = x cubed having a stationary inflection point at the origin versus y = x to the fourth having a flat local minimum at the origin">' +
        '<rect width="540" height="210" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<rect x="16" y="16" width="246" height="178" rx="10" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="139" y="36" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="800" fill="#4f46e5">f(x) = x³  (Inflection ✓)</text>' +
        '<line x1="36" y1="110" x2="242" y2="110" stroke="#94a3b8" stroke-width="1.2"/>' +
        '<line x1="139" y1="48" x2="139" y2="162" stroke="#94a3b8" stroke-width="1.2"/>' +
        '<path d="M 64 156 C 98 152, 118 110, 139 110 C 160 110, 180 68, 214 64" fill="none" stroke="#4f46e5" stroke-width="2.8"/>' +
        '<circle cx="139" cy="110" r="4.5" fill="#d97706"/>' +
        '<text x="86" y="142" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#dc2626">f″ = 6x &lt; 0</text>' +
        '<text x="160" y="92" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#16a34a">f″ = 6x &gt; 0</text>' +
        '<text x="139" y="182" text-anchor="middle" font-family="sans-serif" font-size="10.5" fill="#334155">f″ changes sign (− → +) at x = 0</text>' +
        '<rect x="278" y="16" width="246" height="178" rx="10" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="401" y="36" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="800" fill="#0891b2">g(x) = x⁴  (Local Min, NOT Inflection ✗)</text>' +
        '<line x1="298" y1="142" x2="504" y2="142" stroke="#94a3b8" stroke-width="1.2"/>' +
        '<line x1="401" y1="48" x2="401" y2="162" stroke="#94a3b8" stroke-width="1.2"/>' +
        '<path d="M 328 60 C 350 132, 372 142, 401 142 C 430 142, 452 132, 474 60" fill="none" stroke="#0891b2" stroke-width="2.8"/>' +
        '<circle cx="401" cy="142" r="4.5" fill="#0891b2"/>' +
        '<text x="328" y="122" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#16a34a">g″ = 12x² &gt; 0</text>' +
        '<text x="418" y="122" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#16a34a">g″ = 12x² &gt; 0</text>' +
        '<text x="401" y="182" text-anchor="middle" font-family="sans-serif" font-size="10.5" fill="#334155">g″(0) = 0, but stays (+ → +): NO sign change!</text>' +
        '</svg>',
      caption:
        "Both curves satisfy y′(0) = 0 and y″(0) = 0, yet only x³ flips concavity across zero — always verify a sign change in f″ before declaring an inflection point!",
    },
  ],
  history: {
    title: "Newton's Fluxions vs Leibniz's dy/dx — The Greatest Priority War in Mathematics",
    story:
      "In the plague summer of 1665–66, a 23-year-old **Isaac Newton** retreated from Cambridge to his family farm in Woolsthorpe and developed his 'method of fluxions' to explain planetary orbits — writing time derivatives with dots ({{ẋ}}). A decade later in Paris, **Gottfried Wilhelm Leibniz** independently discovered calculus from geometric tangents and areas, publishing first in 1684 with the brilliantly expressive notation **{{dy/dx}}** and **{{∫}}** that makes the chain rule {{(dy/du)(du/dx)}} look like cancelling fractions! A bitter priority dispute erupted across Europe, dividing British and continental mathematicians for a century. Today we celebrate both pioneers: Newton's physics intuition and Leibniz's notation (plus Cauchy and Weierstrass's 19th-century rigorous limit foundations) form the exact IB Maths AA calculus you master today.",
  },
};
