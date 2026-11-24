import type { Drill, Rng } from "./types.ts";
import { br, clean, gcd, num, poly, simplify } from "./helpers.ts";

type Vec3 = [number, number, number];

function dot(u: Vec3, v: Vec3): number {
  return u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
}

function cross(u: Vec3, v: Vec3): Vec3 {
  return [
    u[1] * v[2] - u[2] * v[1],
    u[2] * v[0] - u[0] * v[2],
    u[0] * v[1] - u[1] * v[0],
  ];
}

function add(u: Vec3, v: Vec3): Vec3 {
  return [u[0] + v[0], u[1] + v[1], u[2] + v[2]];
}

function sub(u: Vec3, v: Vec3): Vec3 {
  return [u[0] - v[0], u[1] - v[1], u[2] - v[2]];
}

function scale(k: number, u: Vec3): Vec3 {
  return [k * u[0], k * u[1], k * u[2]];
}

function isZero(u: Vec3): boolean {
  return u[0] === 0 && u[1] === 0 && u[2] === 0;
}

function vecStr(v: Vec3): string {
  return `(${num(v[0])}, ${num(v[1])}, ${num(v[2])})`;
}

function planeLHS(n: Vec3): string {
  return poly([
    [n[0], "x"],
    [n[1], "y"],
    [n[2], "z"],
  ]);
}

const PERMS: readonly [number, number, number][] = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 0, 1],
  [2, 1, 0],
];

/** Apply a random signed permutation of the 3 coordinate axes (preserves norms & angles). */
function randomSignedPerm(rng: Rng): (v: Vec3) => Vec3 {
  const p = rng.pick(PERMS);
  const s0 = rng.bool() ? 1 : -1;
  const s1 = rng.bool() ? 1 : -1;
  const s2 = rng.bool() ? 1 : -1;
  return (v: Vec3) => [s0 * v[p[0]], s1 * v[p[1]], s2 * v[p[2]]];
}

/** Base pairs (u0, v0) whose cross product u0 × v0 has an exact integer Pythagorean-quadruple norm. */
const EXACT_CROSS_BASES: readonly { u: Vec3; v: Vec3; norm: number }[] = [
  { u: [2, -1, 0], v: [0, 1, -1], norm: 3 }, // u × v = (1, 2, 2)
  { u: [1, 0, 0], v: [0, 4, -3], norm: 5 }, // u × v = (0, 3, 4)
  { u: [3, -2, 0], v: [0, 2, -1], norm: 7 }, // u × v = (2, 3, 6)
  { u: [4, -1, 0], v: [0, 2, -1], norm: 9 }, // u × v = (1, 4, 8)
  { u: [1, -1, 0], v: [3, 4, -4], norm: 9 }, // u × v = (4, 4, 7)
  { u: [3, -1, 0], v: [0, 3, -2], norm: 11 }, // u × v = (2, 6, 9)
  { u: [4, -3, 0], v: [0, 3, -1], norm: 13 }, // u × v = (3, 4, 12)
];

/** Pythagorean quadruple normal vectors with exact integer lengths. */
const PYTHAG_NORMALS: readonly { n: Vec3; len: number }[] = [
  { n: [1, 2, 2], len: 3 },
  { n: [0, 3, 4], len: 5 },
  { n: [2, 3, 6], len: 7 },
  { n: [1, 4, 8], len: 9 },
  { n: [4, 4, 7], len: 9 },
  { n: [2, 6, 9], len: 11 },
  { n: [3, 4, 12], len: 13 },
  { n: [0, 5, 12], len: 13 },
];

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: 3D Dot Product & Perpendicularity Parameter (Section 1)
  // ===========================================================================
  {
    id: "3b-vectors-planes.dot-perpendicular",
    topicId: "3b-vectors-planes",
    title: "3D Dot Product & Perpendicularity Parameter",
    level: 1,
    ibLevel: "HL",
    guideRef: "vectors-dot-product",
    generate(rng, tier) {
      if (tier === 1) {
        const u: Vec3 = [rng.nonZero(-6, 6), rng.int(-6, 6), rng.nonZero(-6, 6)];
        const v: Vec3 = [rng.nonZero(-6, 6), rng.nonZero(-6, 6), rng.int(-6, 6)];
        const ans = dot(u, v);
        const traps = [];
        if (ans !== 0) {
          traps.push({
            spec: { type: "number" as const, value: -ans },
            feedback: "Check the signs on your negative products when summing u₁v₁ + u₂v₂ + u₃v₃.",
          });
        }
        return {
          prompt: `Compute the scalar (dot) product **u** · **v** for **u** = ${vecStr(u)} and **v** = ${vecStr(v)}.`,
          answer: { type: "number", value: ans },
          traps,
          hint: "Multiply corresponding x-, y-, and z-components, then add all three products.",
          solution: [
            `**u** · **v** = ${br(u[0])} × ${br(v[0])} + ${br(u[1])} × ${br(v[1])} + ${br(u[2])} × ${br(v[2])}.`,
            `**u** · **v** = ${num(u[0] * v[0])} + ${br(u[1] * v[1])} + ${br(u[2] * v[2])} = ${num(ans)}.`,
          ],
        };
      }

      if (tier === 2) {
        // Find integer k so u ⊥ v, with k placed at slot pos ∈ {0, 1, 2} of v
        const pos = rng.int(0, 2);
        let c = rng.nonZero(-4, 4);
        let a1 = 1, b1 = 1, a2 = 1, b2 = 1;
        let k = rng.nonZero(-7, 7);
        let found = false;
        for (let tries = 0; tries < 60; tries++) {
          c = rng.nonZero(-4, 4);
          a1 = rng.nonZero(-6, 6);
          b1 = rng.nonZero(-6, 6);
          a2 = rng.nonZero(-6, 6);
          b2 = rng.nonZero(-6, 6);
          const s = a1 * b1 + a2 * b2;
          if (s !== 0 && s % c === 0 && Math.abs(s / c) <= 9) {
            k = -s / c;
            found = true;
            break;
          }
        }
        if (!found) {
          c = rng.pick([-2, -1, 1, 2]);
          k = rng.nonZero(-5, 5);
          a1 = rng.nonZero(-4, 4);
          b1 = rng.nonZero(-4, 4);
          a2 = 1;
          b2 = -c * k - a1 * b1;
        }
        const u: Vec3 = [0, 0, 0];
        const vStrParts: [string, string, string] = ["", "", ""];
        const otherSlots = [0, 1, 2].filter((i) => i !== pos);
        u[pos] = c;
        u[otherSlots[0]] = a1;
        u[otherSlots[1]] = a2;
        vStrParts[pos] = "k";
        vStrParts[otherSlots[0]] = num(b1);
        vStrParts[otherSlots[1]] = num(b2);
        const vLabel = `(${vStrParts[0]}, ${vStrParts[1]}, ${vStrParts[2]})`;
        const rest = a1 * b1 + a2 * b2;
        return {
          prompt: `Find the exact integer value of k such that the 3D vectors **u** = ${vecStr(u)} and **v** = ${vLabel} are perpendicular.`,
          answer: { type: "number", value: k },
          traps:
            k !== 0
              ? [
                  {
                    spec: { type: "number", value: -k },
                    feedback: "Watch the sign when moving the constant term across the equals sign.",
                  },
                ]
              : undefined,
          hint: "Two non-zero vectors are perpendicular iff **u** · **v** = 0.",
          solution: [
            `Set **u** · **v** = 0: ${num(c)}k + ${br(a1)}×${br(b1)} + ${br(a2)}×${br(b2)} = 0.`,
            `${num(c)}k + ${br(rest)} = 0 ⇒ ${num(c)}k = ${num(-rest)}.`,
            `k = ${num(-rest)} ÷ ${br(c)} = ${num(k)}.`,
          ],
        };
      }

      // Tier 3: Find integer k such that (u + k v) is perpendicular to w
      let v: Vec3 = [1, 0, 1];
      let w: Vec3 = [2, -1, 1];
      let vw = 3;
      for (let tries = 0; tries < 60; tries++) {
        const candV: Vec3 = [rng.int(-3, 3), rng.int(-3, 3), rng.int(-3, 3)];
        const candW: Vec3 = [rng.nonZero(-4, 4), rng.nonZero(-4, 4), rng.nonZero(-4, 4)];
        const d = dot(candV, candW);
        if (!isZero(candV) && Math.abs(d) >= 2 && Math.abs(d) <= 6) {
          v = candV;
          w = candW;
          vw = d;
          break;
        }
      }
      const k = rng.nonZero(-5, 5);
      const targetUW = -k * vw;
      // Construct u with dot(u, w) = targetUW
      let u: Vec3 = [1, 1, 1];
      let built = false;
      for (let tries = 0; tries < 80; tries++) {
        const u0 = rng.int(-5, 5);
        const u1 = rng.int(-5, 5);
        const rem = targetUW - u0 * w[0] - u1 * w[1];
        if (rem % w[2] === 0 && Math.abs(rem / w[2]) <= 7) {
          u = [u0, u1, rem / w[2]];
          if (!isZero(u)) {
            built = true;
            break;
          }
        }
      }
      if (!built) {
        // Guaranteed fallback with w[2] = 1
        w = [w[0], w[1], 1];
        vw = dot(v, w);
        if (vw === 0) {
          v = [v[0], v[1], v[2] + 1];
          vw = dot(v, w);
        }
        const u0 = rng.int(-3, 3);
        const u1 = rng.int(-3, 3);
        u = [u0, u1, -k * vw - u0 * w[0] - u1 * w[1]];
      }
      const uw = dot(u, w);
      return {
        prompt: `Given **u** = ${vecStr(u)}, **v** = ${vecStr(v)}, and **w** = ${vecStr(w)}, find the exact integer value of k such that (**u** + k**v**) is perpendicular to **w**.`,
        answer: { type: "number", value: k },
        traps: [
          {
            spec: { type: "number", value: -k },
            feedback: "Check the sign: u · w + k(v · w) = 0 gives k = −(u · w) / (v · w).",
          },
        ],
        hint: "Use distributivity: (**u** + k**v**) · **w** = **u** · **w** + k(**v** · **w**) = 0.",
        solution: [
          `Compute **u** · **w** = ${num(uw)} and **v** · **w** = ${num(vw)}.`,
          `Set **u** · **w** + k(**v** · **w**) = 0 ⇒ ${num(uw)} + ${br(vw)}k = 0.`,
          `k = ${num(-uw)} ÷ ${br(vw)} = ${num(k)}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: Classifying Pairs of 3D Vector Lines (Section 2)
  // ===========================================================================
  {
    id: "3b-vectors-planes.classify-3d-lines",
    topicId: "3b-vectors-planes",
    title: "Classify 3D Line Pairs (Parallel, Coincident, Intersecting, Skew)",
    level: 2,
    ibLevel: "HL",
    guideRef: "vector-lines-skew",
    generate(rng, tier) {
      const kind = rng.pick(["coincident", "parallel", "intersecting", "skew"] as const);
      const maxC = tier === 1 ? 3 : tier === 2 ? 4 : 5;
      const a1: Vec3 = [rng.int(-maxC, maxC), rng.int(-maxC, maxC), rng.int(-maxC, maxC)];
      let b1: Vec3 = [rng.nonZero(-maxC, maxC), rng.int(-maxC, maxC), rng.nonZero(-maxC, maxC)];
      if (isZero(b1)) b1 = [1, -1, 2];

      let a2: Vec3 = [0, 0, 0];
      let b2: Vec3 = [0, 0, 0];
      let solution: string[] = [];

      if (kind === "coincident") {
        const s = tier === 1 ? rng.pick([-2, 2]) : rng.pick([-3, -2, 2, 3]);
        const shift = rng.nonZero(-2, 2);
        b2 = scale(s, b1);
        a2 = add(a1, scale(shift, b1));
        solution = [
          `Compare directions: **b**₂ = ${vecStr(b2)} = ${num(s)} × ${vecStr(b1)}, so the lines are parallel.`,
          `Test if **a**₂ = ${vecStr(a2)} lies on L₁: **a**₂ − **a**₁ = ${vecStr(sub(a2, a1))} = ${num(shift)}**b**₁ (satisfied at λ = ${num(shift)}).`,
          "Since they are parallel and share a point, the lines are **coincident**.",
        ];
      } else if (kind === "parallel") {
        const s = tier === 1 ? rng.pick([-2, 2]) : rng.pick([-3, -2, 2, 3]);
        b2 = scale(s, b1);
        let offset: Vec3 = [1, 0, 0];
        for (let tries = 0; tries < 40; tries++) {
          const cand: Vec3 = [rng.int(-3, 3), rng.int(-3, 3), rng.int(-3, 3)];
          if (!isZero(cross(cand, b1))) {
            offset = cand;
            break;
          }
        }
        if (isZero(cross(offset, b1))) offset = [0, 1, 0];
        a2 = add(a1, offset);
        solution = [
          `Compare directions: **b**₂ = ${vecStr(b2)} = ${num(s)} × ${vecStr(b1)}, so the lines have parallel directions.`,
          `Test if **a**₂ = ${vecStr(a2)} lies on L₁: **a**₂ − **a**₁ = ${vecStr(offset)}, which is NOT a scalar multiple of **b**₁ = ${vecStr(b1)}.`,
          "Therefore the lines are **parallel** (and distinct).",
        ];
      } else {
        // Non-parallel directions b1 and b2
        b2 = [1, 0, -1];
        for (let tries = 0; tries < 50; tries++) {
          const cand: Vec3 = [rng.int(-maxC, maxC), rng.nonZero(-maxC, maxC), rng.int(-maxC, maxC)];
          if (!isZero(cross(b1, cand))) {
            b2 = cand;
            break;
          }
        }
        if (isZero(cross(b1, b2))) b2 = [b1[1], -b1[0], b1[2] + 1];
        const n = cross(b1, b2);
        const lam0 = rng.nonZero(-2, 2);
        const mu0 = rng.nonZero(-2, 2);
        const P = add(a1, scale(lam0, b1));
        if (kind === "intersecting") {
          a2 = sub(P, scale(mu0, b2));
          solution = [
            `Directions **b**₁ = ${vecStr(b1)} and **b**₂ = ${vecStr(b2)} are not scalar multiples (not parallel).`,
            `Solving **a**₁ + λ**b**₁ = **a**₂ + μ**b**₂ gives λ = ${num(lam0)} and μ = ${num(mu0)}.`,
            `All three coordinates match at the unique point ${vecStr(P)}, so the lines are **intersecting**.`,
          ];
        } else {
          // Skew: offset from an intersecting configuration by a vector w with w · (b1 × b2) ≠ 0
          let bump: Vec3 = [0, 0, 1];
          for (let tries = 0; tries < 40; tries++) {
            const cand: Vec3 = [rng.int(-2, 2), rng.int(-2, 2), rng.int(-2, 2)];
            if (dot(cand, n) !== 0) {
              bump = cand;
              break;
            }
          }
          if (dot(bump, n) === 0) bump = n;
          a2 = add(sub(P, scale(mu0, b2)), bump);
          const triple = dot(sub(a2, a1), n);
          solution = [
            `Directions **b**₁ = ${vecStr(b1)} and **b**₂ = ${vecStr(b2)} are not scalar multiples (not parallel).`,
            `Check coplanarity via (**a**₂ − **a**₁) · (**b**₁ × **b**₂) = ${vecStr(sub(a2, a1))} · ${vecStr(n)} = ${num(triple)} ≠ 0 (equivalently, solving x and y gives a contradiction in z).`,
            "Since they are neither parallel nor intersecting, the lines are **skew**.",
          ];
        }
      }

      const acceptMap: Record<typeof kind, string[]> = {
        coincident: ["coincident", "same line", "identical", "coincident lines"],
        parallel: ["parallel", "parallel and distinct", "distinct parallel", "parallel lines"],
        intersecting: ["intersecting", "intersect", "intersecting lines"],
        skew: ["skew", "skew lines"],
      };

      return {
        prompt: `Classify the pair of 3D lines L₁: **r** = ${vecStr(a1)} + λ${vecStr(b1)} and L₂: **r** = ${vecStr(a2)} + μ${vecStr(b2)}. Type one word: **coincident**, **parallel**, **intersecting**, or **skew**.`,
        answer: { type: "text", accept: acceptMap[kind] },
        hint: "First check if **b**₂ is a scalar multiple of **b**₁ (separates coincident/parallel from intersecting/skew). Then test a point or check all three coordinate equations.",
        solution,
      };
    },
  },

  // ===========================================================================
  // DRILL 3: Cross-Product Parallelogram & Triangle Area (Section 3)
  // ===========================================================================
  {
    id: "3b-vectors-planes.cross-product-area",
    topicId: "3b-vectors-planes",
    title: "Cross-Product Parallelogram & Triangle Areas in 3D",
    level: 2,
    ibLevel: "HL",
    guideRef: "cross-product-planes",
    generate(rng, tier) {
      const base = rng.pick(EXACT_CROSS_BASES);
      const perm = randomSignedPerm(rng);
      const u0 = perm(base.u);
      const v0 = perm(base.v);
      const scaleV = tier === 1 ? 1 : rng.pick([1, 2]);
      const shearK = tier === 1 ? rng.int(-1, 1) : rng.nonZero(-2, 2);
      const u = u0;
      const v = add(scale(scaleV, v0), scale(shearK, u0));
      const cp = cross(u, v);
      const norm = scaleV * base.norm; // Exact because |u0 × (s v0 + k u0)| = |s| |u0 × v0|

      if (tier === 1) {
        return {
          prompt: `Find the exact area of the parallelogram spanned by **u** = ${vecStr(u)} and **v** = ${vecStr(v)}.`,
          answer: { type: "number", value: norm },
          traps: [
            {
              spec: { type: "number", value: clean(norm / 2) },
              feedback: "Parallelogram area is |u × v| — do NOT divide by 2 (only triangles use ½).",
            },
          ],
          hint: "Parallelogram area equals |**u** × **v**|.",
          solution: [
            `Compute **u** × **v** = ${vecStr(cp)}.`,
            `Parallelogram area = |**u** × **v**| = {{sqrt(${cp[0] * cp[0]} + ${cp[1] * cp[1]} + ${cp[2] * cp[2]}) = ${norm}}}.`,
          ],
        };
      }

      const triArea = clean(norm / 2);
      if (tier === 2) {
        return {
          prompt: `Find the exact area of the triangle with adjacent edge vectors **u** = ${vecStr(u)} and **v** = ${vecStr(v)}. Give your answer as an exact decimal or fraction.`,
          answer: { type: "number", value: triArea },
          traps: [
            {
              spec: { type: "number", value: norm },
              feedback: `${num(norm)} is the parallelogram area |u × v| — remember to multiply by ½ for a triangle!`,
            },
          ],
          hint: "Triangle area equals {{(1/2) |u × v|}}.",
          solution: [
            `Compute **u** × **v** = ${vecStr(cp)}.`,
            `|**u** × **v**| = {{sqrt(${cp[0] * cp[0]} + ${cp[1] * cp[1]} + ${cp[2] * cp[2]}) = ${norm}}}.`,
            `Triangle area = {{(1/2) * ${norm} = ${num(triArea)}}}.`,
          ],
        };
      }

      // Tier 3: 3D vertex coordinates A, B, C
      const A: Vec3 = [rng.int(-3, 3), rng.int(-3, 3), rng.int(-3, 3)];
      const B = add(A, u);
      const C = add(A, v);
      return {
        prompt: `Find the exact area of triangle ABC with 3D vertices A${vecStr(A)}, B${vecStr(B)}, and C${vecStr(C)}. Give your answer as an exact decimal or fraction.`,
        answer: { type: "number", value: triArea },
        traps: [
          {
            spec: { type: "number", value: norm },
            feedback: `${num(norm)} is |AB × AC| (the parallelogram area) — multiply by ½ for triangle ABC.`,
          },
        ],
        hint: "Form edge vectors **AB** = B − A and **AC** = C − A, then compute {{(1/2) |AB × AC|}}.",
        solution: [
          `**AB** = ${vecStr(u)} and **AC** = ${vecStr(v)}.`,
          `**AB** × **AC** = ${vecStr(cp)}, with |**AB** × **AC**| = ${norm}.`,
          `Area of △ABC = {{(1/2) * ${norm} = ${num(triArea)}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4: Cartesian Equation of a Plane (d = a · n) (Section 3)
  // ===========================================================================
  {
    id: "3b-vectors-planes.cartesian-plane-d",
    topicId: "3b-vectors-planes",
    title: "Cartesian Plane Equation Constant d = a · n",
    level: 1,
    ibLevel: "HL",
    guideRef: "cross-product-planes",
    generate(rng, tier) {
      if (tier === 1) {
        const n: Vec3 = [rng.nonZero(-5, 5), rng.nonZero(-5, 5), rng.nonZero(-5, 5)];
        const A: Vec3 = [rng.int(-5, 5), rng.int(-5, 5), rng.int(-5, 5)];
        const d = dot(A, n);
        const lhs = planeLHS(n);
        return {
          prompt: `A plane has normal vector **n** = ${vecStr(n)} and passes through A${vecStr(A)}. Find the exact integer constant d in its Cartesian equation {{${lhs} = d}}.`,
          answer: { type: "number", value: d },
          traps:
            d !== 0
              ? [
                  {
                    spec: { type: "number", value: -d },
                    feedback: "Remember r · n = a · n (d is on the right-hand side, NOT −d).",
                  },
                ]
              : undefined,
          hint: "Substitute the coordinates of A directly into ax + by + cz to compute d = **a** · **n**.",
          solution: [
            `Use d = **a** · **n** = ${br(n[0])}×${br(A[0])} + ${br(n[1])}×${br(A[1])} + ${br(n[2])}×${br(A[2])}.`,
            `d = ${num(n[0] * A[0])} + ${br(n[1] * A[1])} + ${br(n[2] * A[2])} = ${num(d)}.`,
          ],
        };
      }

      if (tier === 2) {
        const n: Vec3 = [rng.nonZero(1, 5), rng.nonZero(-5, 5), rng.nonZero(-5, 5)];
        const P: Vec3 = [rng.int(-4, 4), rng.int(-4, 4), rng.int(-4, 4)];
        const d = dot(P, n);
        let dOld = d + rng.nonZero(-8, 8);
        if (dOld === d) dOld = d + 3;
        const lhs = planeLHS(n);
        return {
          prompt: `A plane passes through P${vecStr(P)} and is parallel to {{${lhs} = ${num(dOld)}}}. Find the exact integer constant d in its equation {{${lhs} = d}}.`,
          answer: { type: "number", value: d },
          traps: [
            {
              spec: { type: "number", value: dOld },
              feedback: `${num(dOld)} is the constant for the original plane — substitute the new point P to find the parallel plane's d.`,
            },
          ],
          hint: "Parallel planes share the exact same normal vector (a, b, c); substitute P into the left-hand side.",
          solution: [
            `A parallel plane keeps the same normal **n** = ${vecStr(n)}.`,
            `Substitute P${vecStr(P)}: d = ${br(n[0])}×${br(P[0])} + ${br(n[1])}×${br(P[1])} + ${br(n[2])}×${br(P[2])} = ${num(d)}.`,
          ],
        };
      }

      // Tier 3: From vector equation r = a + λb + μc, find unique d when x-coefficient equals p > 0
      let b: Vec3 = [1, 2, -1];
      let c: Vec3 = [0, 1, 2];
      let nRaw: Vec3 = [5, -2, 1];
      for (let tries = 0; tries < 50; tries++) {
        const cb: Vec3 = [rng.int(-3, 3), rng.nonZero(-3, 3), rng.int(-3, 3)];
        const cc: Vec3 = [rng.nonZero(-3, 3), rng.int(-3, 3), rng.nonZero(-3, 3)];
        const cn = cross(cb, cc);
        if (cn[0] !== 0 && !isZero(cn)) {
          b = cb;
          c = cc;
          nRaw = cn;
          break;
        }
      }
      const g = gcd(gcd(Math.abs(nRaw[0]), Math.abs(nRaw[1])), Math.abs(nRaw[2])) || 1;
      const sign = nRaw[0] < 0 ? -1 : 1;
      const n: Vec3 = [(sign * nRaw[0]) / g, (sign * nRaw[1]) / g, (sign * nRaw[2]) / g];
      const A: Vec3 = [rng.int(-4, 4), rng.int(-4, 4), rng.int(-4, 4)];
      const d = dot(A, n);
      return {
        prompt: `A plane has vector equation **r** = ${vecStr(A)} + λ${vecStr(b)} + μ${vecStr(c)}. When written in Cartesian form with x-coefficient equal to ${n[0]} (i.e. ${n[0]}x + βy + γz = d), find the exact integer value of d.`,
        answer: { type: "number", value: d },
        hint: `Compute **n** = **b** × **c**, rescale **n** so its x-component is ${n[0]}, then compute d = **a** · **n**.`,
        solution: [
          `Compute **b** × **c** = ${vecStr(nRaw)}.`,
          `Scale so the x-component is ${n[0]}: **n** = ${vecStr(n)}.`,
          `Substitute A${vecStr(A)}: d = **a** · **n** = ${br(n[0])}×${br(A[0])} + ${br(n[1])}×${br(A[1])} + ${br(n[2])}×${br(A[2])} = ${num(d)}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 5: Shortest Distance from Point to Plane & Parallel Planes (Section 4)
  // ===========================================================================
  {
    id: "3b-vectors-planes.point-to-plane-distance",
    topicId: "3b-vectors-planes",
    title: "Shortest Distance: Point to Plane & Parallel Planes",
    level: 3,
    ibLevel: "HL",
    guideRef: "intersections-angles-distances",
    generate(rng, tier) {
      const pyth = rng.pick(PYTHAG_NORMALS);
      const perm = randomSignedPerm(rng);
      let n = perm(pyth.n);
      // Keep first non-zero coefficient positive for tidy Cartesian formatting
      const firstNZ = n.find((x) => x !== 0) ?? 1;
      if (firstNZ < 0) n = scale(-1, n);
      const len = pyth.len;
      const lhs = planeLHS(n);

      if (tier === 1) {
        const P: Vec3 = [rng.int(-4, 4), rng.int(-4, 4), rng.int(-4, 4)];
        const dist = rng.int(1, 6);
        const side = rng.bool() ? 1 : -1;
        const nDotP = dot(n, P);
        const d = nDotP - side * dist * len;
        return {
          prompt: `Find the exact shortest perpendicular distance from the point P${vecStr(P)} to the plane {{${lhs} = ${num(d)}}}.`,
          answer: { type: "number", value: dist },
          traps: [
            {
              spec: { type: "number", value: dist * len },
              feedback: `Remember to divide by |n| = ${len} in the point-to-plane distance formula!`,
            },
          ],
          hint: "Apply {{D = |a x_0 + b y_0 + c z_0 - d| / sqrt(a^2 + b^2 + c^2)}}.",
          solution: [
            `Normal **n** = ${vecStr(n)} has magnitude |**n**| = {{sqrt(${n[0] * n[0]} + ${n[1] * n[1]} + ${n[2] * n[2]}) = ${len}}}.`,
            `Numerator = |${num(nDotP)} − ${br(d)}| = ${dist * len}.`,
            `Shortest distance D = ${dist * len} ÷ ${len} = ${dist}.`,
          ],
        };
      }

      if (tier === 2) {
        const P: Vec3 = [rng.int(-5, 5), rng.int(-5, 5), rng.int(-5, 5)];
        const nDotP = dot(n, P);
        // Pick a non-zero offset not divisible by len so answer is always a genuine simplified fraction
        let rem = rng.int(1, 2 * len - 1);
        if (rem % len === 0) rem += 1;
        const side = rng.bool() ? 1 : -1;
        const d = nDotP - side * rem;
        const [sn, sd] = simplify(rem, len);
        return {
          prompt: `Find the exact shortest perpendicular distance from P${vecStr(P)} to the plane {{${lhs} = ${num(d)}}}. Give your answer as a simplified fraction a/b.`,
          answer: { type: "fraction", n: sn, d: sd, simplest: true },
          traps: [
            {
              spec: { type: "number", value: rem },
              feedback: `You forgot to divide by |n| = ${len}.`,
            },
          ],
          hint: `Evaluate |**n** · **p** − d| and divide by |**n**| = ${len}, simplifying if possible.`,
          solution: [
            `|**n**| = {{sqrt(${n[0] * n[0]} + ${n[1] * n[1]} + ${n[2] * n[2]}) = ${len}}}.`,
            `|**n** · **p** − d| = |${num(nDotP)} − ${br(d)}| = ${rem}.`,
            `D = {{${rem}/${len}}}${sn !== rem ? ` = {{${sn}/${sd}}}` : ""}.`,
          ],
        };
      }

      // Tier 3: Distance between two parallel planes where the second is scaled by s ∈ {-3, -2, 2, 3}
      const d1 = rng.int(-12, 12);
      const dist = rng.int(1, 6);
      const side = rng.bool() ? 1 : -1;
      const d2Norm = d1 + side * dist * len;
      const mult = rng.pick([-3, -2, 2, 3]);
      const n2 = scale(mult, n);
      const d2 = mult * d2Norm;
      const lhs2 = planeLHS(n2);
      const unscaledWrong = clean(Math.abs(d2 - d1) / len);
      const traps =
        Math.abs(unscaledWrong - dist) > 1e-6 && Number.isInteger(unscaledWrong)
          ? [
              {
                spec: { type: "number" as const, value: unscaledWrong },
                feedback: `Divide the second plane by ${num(mult)} FIRST so both planes share the same normal before subtracting constants!`,
              },
            ]
          : undefined;
      return {
        prompt: `Find the exact shortest distance between the parallel planes {{${lhs} = ${num(d1)}}} and {{${lhs2} = ${num(d2)}}}.`,
        answer: { type: "number", value: dist },
        traps,
        hint: `First divide the second equation by ${num(mult)} so both planes share the identical normal ${vecStr(n)}, then compute {{|d_1 - d_2| / |n|}}.`,
        solution: [
          `Divide the second plane by ${num(mult)} to match normal **n** = ${vecStr(n)}: {{${lhs} = ${num(d2Norm)}}}.`,
          `|**n**| = ${len}.`,
          `Shortest distance D = |${num(d2Norm)} − ${br(d1)}| ÷ ${len} = ${dist * len} ÷ ${len} = ${dist}.`,
        ],
      };
    },
  },
];
