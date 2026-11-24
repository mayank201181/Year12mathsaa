import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Every time a fighter jet banks over Marina Bay, a 3D game engine lights a polygon, or two flights cross Singapore's busy airways at different altitudes without colliding, the same two HL vector tools are running under the hood: dot products measuring alignment and cross products manufacturing perpendicular plane normals!",
  didYouKnow: [
    "A true binary vector cross product (taking two vectors and returning a perpendicular vector of length |u||v| sin θ) exists ONLY in 3 dimensions and 7 dimensions — a deep theorem linked to normed division algebras (quaternions and octonions)!",
    "Modern GPU ray-tracers execute billions of line–plane intersection tests per second using the exact scalar substitution you practise in IB HL Topic 3B: solving (a + λb) · n = d for λ.",
    "In commercial aviation, TCAS (Traffic Collision Avoidance System) treats aircraft as constant-velocity 3D vector lines r(t) = r₀ + t v and computes both the time of closest approach and minimum skew separation in real time.",
    "Crystallographers label atomic lattice planes using Miller indices (h, k, l), which are literally the integer components of the plane's normal vector n — and X-ray Bragg diffraction depends directly on the parallel-plane distance formula d = 1 / |n|!",
    "The cross product is NOT associative: in general, (u × v) × w ≠ u × (v × w). For example, (i × i) × j = 0, whereas i × (i × j) = i × k = −j!",
  ],
  activities: [
    {
      title: "Classroom Skew-Line & Common Perpendicular Lab",
      emoji: "📐",
      materials: [
        "Two straight rulers or long pencils",
        "One short pencil or drinking straw (for the common perpendicular)",
        "A corner of a desk or room as origin O(0, 0, 0)",
      ],
      steps: [
        "Hold Ruler 1 flat along the front edge of the desk (parallel to the x-axis, height z = 0).",
        "Hold Ruler 2 hovering 20 cm above the desk, rotated parallel to the y-axis (z = 20 cm).",
        "Notice the two rulers are neither parallel nor touching — they are SKEW and perpendicular at the same time!",
        "Place the short straw straight vertically between them at the unique crossing of their shadows: verify it meets BOTH rulers at 90°.",
        "Tilt Ruler 2 at 45° in the horizontal plane and check whether the shortest vertical distance between the two parallel planes changes.",
      ],
      maths:
        "Even when you rotate Ruler 2 in the plane z = 20 cm, the cross product **b**₁ × **b**₂ always points along the vertical z-axis! That is why the shortest distance between ANY two skew lines equals the perpendicular distance between the unique pair of parallel planes containing them: {{D = |(a_2 - a_1) · (b_1 × b_2)| / |b_1 × b_2|}}.",
    },
    {
      title: "Folded-Card Normal & Line–Plane Complement Demo",
      emoji: "📄",
      materials: [
        "One index card or folded sheet of A4 paper (the plane Π)",
        "One pen stuck straight up at 90° through the card (normal n)",
        "A second tilted pen touching the base of the first pen (line L)",
      ],
      steps: [
        "Stand the normal pen straight up (90°) from the flat index card.",
        "Rest the tip of the second pen (line L) at the base of the normal pen, tilted gently at roughly 20° above the card.",
        "Observe the large angle θ ≈ 70° between the two pens (line L and normal n) versus the small angle α ≈ 20° between the tilted pen and its shadow on the card.",
        "Now tilt line L steeper toward the normal pen: watch θ shrink toward 0° while α grows toward 90°, always satisfying α + θ = 90°.",
      ],
      maths:
        "Because the dot product measures the angle θ between the two vectors you feed it (**b** and **n**), {{cos θ = |b · n| / (|b| |n|)}} finds the angle to the NORMAL pen, not the card! Since α = 90° − θ, {{sin α = cos θ = |b · n| / (|b| |n|)}} gives the true line–plane angle immediately.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Three-Plane Intersections: Unique Point, Sheaf & Triangular Prism",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 215" role="img" aria-label="Three geometric configurations of three planes in 3D space: unique point intersection, sheaf sharing one common line, and triangular prism with no common point">
  <rect x="0" y="0" width="460" height="215" rx="12" fill="#f8fafc"/>
  <!-- Panel 1: Unique Point (Room Corner) -->
  <text x="78" y="22" font-size="11.5" font-weight="700" text-anchor="middle" fill="#0f172a">1. Unique Point</text>
  <polygon points="32,148 78,122 124,148 78,174" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.3"/>
  <polygon points="32,148 78,122 78,54 32,80" fill="#dcfce7" fill-opacity="0.85" stroke="#10b981" stroke-width="1.3"/>
  <polygon points="124,148 78,122 78,54 124,80" fill="#fef3c7" fill-opacity="0.85" stroke="#f59e0b" stroke-width="1.3"/>
  <circle cx="78" cy="122" r="4.5" fill="#dc2626"/>
  <text x="78" y="194" font-size="10" text-anchor="middle" fill="#475569">det ≠ 0 (1 solution)</text>
  <line x1="154" y1="18" x2="154" y2="202" stroke="#e2e8f0" stroke-width="1.2"/>
  <!-- Panel 2: Sheaf of Planes (Open Book) -->
  <text x="230" y="22" font-size="11.5" font-weight="700" text-anchor="middle" fill="#0f172a">2. Sheaf (Common Line)</text>
  <polygon points="230,60 176,84 176,158 230,134" fill="#dbeafe" fill-opacity="0.85" stroke="#3b82f6" stroke-width="1.3"/>
  <polygon points="230,60 286,80 286,154 230,134" fill="#dcfce7" fill-opacity="0.85" stroke="#10b981" stroke-width="1.3"/>
  <polygon points="230,60 256,102 256,176 230,134" fill="#fef3c7" fill-opacity="0.8" stroke="#f59e0b" stroke-width="1.3"/>
  <line x1="230" y1="48" x2="230" y2="168" stroke="#dc2626" stroke-width="2.8"/>
  <text x="230" y="194" font-size="10" text-anchor="middle" fill="#475569">0 = 0 (∞ line of solutions)</text>
  <line x1="306" y1="18" x2="306" y2="202" stroke="#e2e8f0" stroke-width="1.2"/>
  <!-- Panel 3: Triangular Prism -->
  <text x="382" y="22" font-size="11.5" font-weight="700" text-anchor="middle" fill="#0f172a">3. Triangular Prism</text>
  <polygon points="346,144 416,144 434,116 364,116" fill="#dbeafe" fill-opacity="0.7" stroke="#3b82f6" stroke-width="1.3"/>
  <polygon points="346,144 380,68 398,44 364,116" fill="#dcfce7" fill-opacity="0.7" stroke="#10b981" stroke-width="1.3"/>
  <polygon points="416,144 380,68 398,44 434,116" fill="#fef3c7" fill-opacity="0.7" stroke="#f59e0b" stroke-width="1.3"/>
  <line x1="346" y1="144" x2="364" y2="116" stroke="#dc2626" stroke-width="2.2"/>
  <line x1="416" y1="144" x2="434" y2="116" stroke="#dc2626" stroke-width="2.2"/>
  <line x1="380" y1="68" x2="398" y2="44" stroke="#dc2626" stroke-width="2.2"/>
  <text x="382" y="194" font-size="10" text-anchor="middle" fill="#475569">0 = k ≠ 0 (no common point)</text>
</svg>`,
      caption:
        "All three cases when no two plane normals are parallel: unique vertex (det ≠ 0), sheaf sharing a common red spine (consistent 0 = 0), and triangular prism with three parallel pairwise lines (inconsistent 0 = k ≠ 0).",
    },
    {
      title: "Right-Hand Rule & Cyclic Cross Products of Standard Unit Vectors",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 195" role="img" aria-label="Cyclic circle diagram of i, j, k unit vectors showing i x j = k clockwise and reversing sign counter-clockwise">
  <rect x="0" y="0" width="460" height="195" rx="12" fill="#f8fafc"/>
  <text x="230" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#0f172a">Cyclic Cross Products: i, j, k</text>
  <!-- Cycle circle centered at (130, 112), r=52 -->
  <circle cx="130" cy="112" r="52" fill="none" stroke="#93c5fd" stroke-width="2" stroke-dasharray="5,4"/>
  <!-- Clockwise arrow hints -->
  <polygon points="169,75 162,70 164,79" fill="#2563eb"/>
  <polygon points="169,149 175,141 166,142" fill="#2563eb"/>
  <polygon points="79,105 74,114 83,114" fill="#2563eb"/>
  <!-- Nodes i, j, k -->
  <circle cx="130" cy="60" r="18" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="130" y="65" font-size="14" font-weight="700" text-anchor="middle" fill="#1d4ed8">i</text>
  <circle cx="176" cy="138" r="18" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
  <text x="176" y="143" font-size="14" font-weight="700" text-anchor="middle" fill="#047857">j</text>
  <circle cx="84" cy="138" r="18" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="84" y="143" font-size="14" font-weight="700" text-anchor="middle" fill="#b45309">k</text>
  <text x="130" y="116" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">+ clockwise</text>
  <!-- Rules summary on right -->
  <text x="242" y="64" font-size="11.5" font-weight="700" fill="#047857">Positive cyclic order:</text>
  <text x="242" y="84" font-size="11.5" fill="#334155">i × j = k,   j × k = i,   k × i = j</text>
  <text x="242" y="114" font-size="11.5" font-weight="700" fill="#b91c1c">Reversed (anti-commutative):</text>
  <text x="242" y="134" font-size="11.5" fill="#334155">j × i = −k,  k × j = −i,  i × k = −j</text>
  <text x="242" y="164" font-size="11.5" font-weight="700" fill="#475569">Self cross product: i × i = j × j = k × k = 0</text>
</svg>`,
      caption:
        "Follow the cycle clockwise (i → j → k → i) for positive cross products; move counter-clockwise and pick up a minus sign.",
    },
  ],
  history: {
    title: "The Quaternion War That Split Into the Dot and Cross Products",
    story:
      "In October 1843, Irish mathematician William Rowan Hamilton spent ten years trying to multiply 3D vectors the way complex numbers multiply in 2D. While walking along the Royal Canal in Dublin, he realised 3 dimensions were not enough — he needed 4D 'quaternions' a + bi + cj + dk satisfying i² = j² = k² = ijk = −1, and famously carved the formula into Broom Bridge with his pocketknife! When you multiply two pure 3D quaternions (0 + v₁i + v₂j + v₃k)(0 + w₁i + w₂j + w₃k), the real part is −(**v** · **w**) and the imaginary part is **v** × **w**! In the 1880s, American physicist Josiah Willard Gibbs and British electrical engineer Oliver Heaviside sparked a fierce academic feud ('the Quaternion War') by splitting Hamilton's quaternion product apart into two separate tools — the dot product and the cross product — giving physicists and IB Maths HL students the crisp vector algebra we use today.",
  },
};
