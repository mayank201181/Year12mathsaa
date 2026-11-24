import type { TopicExtras } from "../types.ts";

const PYRAMID_ANGLES_SVG = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3D square-based pyramid showing the difference between slant-edge angle VAO along half-diagonal AO and face-to-base angle VMO along perpendicular OM">
  <rect x="0" y="0" width="460" height="230" fill="#ffffff"/>
  <!-- Square base in perspective -->
  <polygon points="85,175 265,175 340,120 160,120" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
  <!-- Base centre O = (212.5, 147.5) and midpoint M of front edge AB = (175, 175) -->
  <!-- Base half-diagonal OA (to front-left A=85,175) and OM (to M=175,175) -->
  <line x1="212" y1="148" x2="85" y2="175" stroke="#4338ca" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="212" y1="148" x2="175" y2="175" stroke="#0d9488" stroke-width="2.2" stroke-dasharray="4,3"/>
  <!-- Apex V directly above O at (212, 34) -->
  <line x1="212" y1="34" x2="212" y2="148" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
  <!-- Pyramid edges -->
  <line x1="212" y1="34" x2="85" y2="175" stroke="#4338ca" stroke-width="2.8"/>
  <line x1="212" y1="34" x2="265" y2="175" stroke="#334155" stroke-width="2"/>
  <line x1="212" y1="34" x2="340" y2="120" stroke="#334155" stroke-width="2"/>
  <line x1="212" y1="34" x2="160" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <!-- Slant height VM -->
  <line x1="212" y1="34" x2="175" y2="175" stroke="#0d9488" stroke-width="2.6"/>
  <!-- Right angle mark at O -->
  <polyline points="203,148 203,139 212,139" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <!-- Vertices -->
  <circle cx="212" cy="34" r="4" fill="#dc2626"/>
  <circle cx="212" cy="148" r="3.5" fill="#dc2626"/>
  <circle cx="85" cy="175" r="3.5" fill="#4338ca"/>
  <circle cx="175" cy="175" r="3.5" fill="#0d9488"/>
  <!-- Labels -->
  <text x="208" y="24" font-size="13" font-weight="800" fill="#dc2626">V</text>
  <text x="219" y="152" font-size="12" font-weight="800" fill="#dc2626">O</text>
  <text x="70" y="182" font-size="13" font-weight="800" fill="#4338ca">A</text>
  <text x="270" y="182" font-size="13" font-weight="700" fill="#334155">B</text>
  <text x="346" y="124" font-size="13" font-weight="700" fill="#334155">C</text>
  <text x="145" y="118" font-size="13" font-weight="700" fill="#64748b">D</text>
  <text x="169" y="193" font-size="12" font-weight="800" fill="#0d9488">M</text>
  <text x="218" y="96" font-size="11.5" font-weight="700" fill="#dc2626">h = VO</text>
  <!-- Legend card -->
  <rect x="292" y="18" width="154" height="82" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="302" y="38" font-size="11.5" font-weight="800" fill="#4338ca">Edge-to-base: ∠VAO</text>
  <text x="302" y="54" font-size="11" fill="#334155">tan(∠VAO) = h / (½s√2)</text>
  <text x="302" y="74" font-size="11.5" font-weight="800" fill="#0d9488">Face-to-base: ∠VMO</text>
  <text x="302" y="90" font-size="11" fill="#334155">tan(∠VMO) = h / (½s)</text>
</svg>`;

const SPECIAL_TRIANGLES_SVG = `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The two exact special right triangles: 30-60-90 with sides 1, root 3, 2 and 45-45-90 with sides 1, 1, root 2">
  <rect x="0" y="0" width="460" height="210" fill="#ffffff"/>
  <!-- Left triangle: 30-60-90 (half equilateral of side 2) -->
  <polygon points="48,170 208,170 48,78" fill="#eef2ff" stroke="#4338ca" stroke-width="2.5"/>
  <rect x="48" y="156" width="14" height="14" fill="none" stroke="#4338ca" stroke-width="1.5"/>
  <text x="32" y="128" font-size="13" font-weight="800" fill="#4338ca">1</text>
  <text x="122" y="190" font-size="13" font-weight="800" fill="#4338ca">√3</text>
  <text x="134" y="114" font-size="13" font-weight="800" fill="#4338ca">2</text>
  <text x="56" y="108" font-size="11.5" font-weight="700" fill="#312e81">π/3 (60°)</text>
  <text x="148" y="164" font-size="11.5" font-weight="700" fill="#312e81">π/6 (30°)</text>
  <text x="125" y="34" font-size="13" font-weight="800" text-anchor="middle" fill="#312e81">Half Equilateral (1 : √3 : 2)</text>
  <!-- Right triangle: 45-45-90 -->
  <polygon points="280,170 400,170 280,50" fill="#f0fdfa" stroke="#0d9488" stroke-width="2.5"/>
  <rect x="280" y="156" width="14" height="14" fill="none" stroke="#0d9488" stroke-width="1.5"/>
  <text x="264" y="116" font-size="13" font-weight="800" fill="#0f766e">1</text>
  <text x="336" y="190" font-size="13" font-weight="800" fill="#0f766e">1</text>
  <text x="348" y="104" font-size="13" font-weight="800" fill="#0f766e">√2</text>
  <text x="288" y="88" font-size="11.5" font-weight="700" fill="#0f766e">π/4 (45°)</text>
  <text x="344" y="164" font-size="11.5" font-weight="700" fill="#0f766e">π/4 (45°)</text>
  <text x="345" y="34" font-size="13" font-weight="800" text-anchor="middle" fill="#0f766e">Isosceles Right (1 : 1 : √2)</text>
</svg>`;

export const extras: TopicExtras = {
  hook:
    "Every time a container ship rounds Singapore's Southern Islands, a Ferris wheel capsule sweeps overhead at Marina Bay, or a satellite locks onto your phone's coordinates, the same core toolkit is at work: 3D triangles, radian arcs, and sinusoidal waves.",
  didYouKnow: [
    "Around 240 BCE, Eratosthenes measured Earth's circumference to within 2% using nothing more than shadows in Alexandria and Syene and the arc-length relation l = rθ!",
    "The word 'sine' comes from a famous chain of translations: Sanskrit ardha-jya ('half-chord') was shortened to jya, transcribed into Arabic as jiba (written without vowels as jb), misread by medieval European translators as jaib ('bay' or 'fold'), and translated into Latin as sinus!",
    "Before John Napier invented logarithms in 1614, European astronomers multiplied giant 8-digit numbers by hand using the HL compound-angle identity cos A cos B = ½[cos(A − B) + cos(A + B)] — a technique called prosthaphaeresis.",
    "One radian is approximately 57.2958° — the exact angle where an arc matches its radius — and it is the ONLY angle unit in which the derivative of sin x is cos x without a messy π/180 scaling factor.",
    "The ambiguous case of the sine rule (two valid triangles from SSA) is a real engineering hazard in radio range-finding and sonar triangulation: a single distance ring intersects a bearing line twice unless an extra sensor breaks the tie!",
  ],
  activities: [
    {
      title: "Measure a Building Using Double Elevation Angles",
      emoji: "📐",
      materials: [
        "Protractor, drinking straw, tape, string, and a small washer (DIY clinometer)",
        "Measuring tape (or paced baseline distance of 10–15 m)",
        "TI-Nspire CX or scientific calculator in Degree mode",
      ],
      steps: [
        "Stand on flat ground facing a tall flagpole or school block and sight its top through the straw; record your elevation angle α and your eye height h₀.",
        "Walk directly backwards in a straight line by a measured distance d (say 10 m) and sight the top again; record the smaller elevation angle β.",
        "Use right-triangle trigonometry to show the height above eye level is H = d / (cot β − cot α) = (d tan α tan β) / (tan α − tan β).",
        "Add your eye height h₀ and compare your estimate against a second baseline distance — an excellent warm-up idea for an IB Maths AA Internal Assessment!",
      ],
      maths:
        "Combines angles of elevation, simultaneous right-triangle equations, and the HL reciprocal cotangent form H = d / (cot β − cot α).",
    },
    {
      title: "Sinusoidal Tidal Curve Fit for the Singapore Strait",
      emoji: "🌊",
      materials: [
        "Hourly tide height data from NEA Singapore (or any coastal harbour) over 24 hours",
        "TI-Nspire CX Lists & Spreadsheet + Data & Statistics pages",
      ],
      steps: [
        "Record the highest tide H_max, lowest tide H_min, the time t_max of the first high tide, and the time interval T between consecutive high tides (~12.42 hours).",
        "Compute initial parameters by hand: d = (H_max + H_min)/2, a = (H_max − H_min)/2, b = 2π / T, and phase shift c = t_max.",
        "Plot your hand-crafted model y = a cos(b(t − c)) + d against the real scatter data and observe where diurnal inequality causes the second peak to differ.",
        "Extension (HL): add a second 24.84-hour harmonic term to see how Fourier superposition sharpens the fit!",
      ],
      maths:
        "Applies sinusoidal parameter extraction (a, b, c, d), radian frequency b = 2π/T, and residuals analysis.",
    },
  ],
  bonusDiagrams: [
    {
      title: "3D Pyramid Pitfall: Slant-Edge Angle vs Face-to-Base Angle",
      svg: PYRAMID_ANGLES_SVG,
      caption:
        "Always identify the correct horizontal projection! Edge VA projects onto half-diagonal AO = ½ s√2, whereas triangular face VAB slopes down to base midpoint M along apothem OM = ½ s — so ∠VMO is ALWAYS steeper than ∠VAO.",
    },
    {
      title: "Paper 1 Non-GDC Lifesavers: The Two Special Right Triangles",
      svg: SPECIAL_TRIANGLES_SVG,
      caption:
        "Never blank on exact values in Paper 1: split an equilateral triangle of side 2 to recover 30°/60° (π/6, π/3) and bisect a unit square to recover 45° (π/4).",
    },
  ],
  history: {
    title: "From Alexandria's Chords to Āryabhaṭa's Half-Chords & Euler's Unit Circle",
    story:
      "Trigonometry began as an astronomer's tool for tracking planets across the night sky. In the 2nd century BCE, Greek astronomer Hipparchus of Nicaea compiled the first trigonometric table — not of sines, but of full chord lengths subtended by central angles in a circle. Six centuries later, Indian mathematician-astronomer Āryabhaṭa (476–550 CE) made a transformative leap: he tabulated half-chords (ardha-jya), which are literally our modern sine function! Islamic Golden Age mathematicians including al-Khwarizmi, al-Battani, and Abu al-Wafa then introduced cosine, tangent, secant, cosecant, and cotangent, along with spherical sine laws and early compound-angle identities. Finally, in 1748, Leonhard Euler unified every ratio onto a circle of radius 1 and defined angles naturally in radians, turning geometry's tables of lengths into the smooth periodic functions that power modern calculus, physics, and engineering.",
  },
};
