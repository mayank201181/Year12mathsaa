"use client";
import { useMemo, useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type Vec3 = [number, number, number];

function dot3(u: Vec3, v: Vec3): number {
  return u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
}

function cross3(u: Vec3, v: Vec3): Vec3 {
  return [
    u[1] * v[2] - u[2] * v[1],
    u[2] * v[0] - u[0] * v[2],
    u[0] * v[1] - u[1] * v[0],
  ];
}

function normSq3(u: Vec3): number {
  return u[0] * u[0] + u[1] * u[1] + u[2] * u[2];
}

function fmtSigned(n: number): string {
  return n < 0 ? `−${Math.abs(n)}` : `${n}`;
}

function fmtVec(v: Vec3): string {
  return `(${fmtSigned(v[0])}, ${fmtSigned(v[1])}, ${fmtSigned(v[2])})`;
}

function fmtPlaneEq(n: Vec3, d: number): string {
  const parts: string[] = [];
  const vars = ["x", "y", "z"] as const;
  for (let i = 0; i < 3; i++) {
    const c = n[i];
    if (c === 0) continue;
    const absC = Math.abs(c);
    const term = absC === 1 ? vars[i] : `${absC}${vars[i]}`;
    if (parts.length === 0) {
      parts.push(c < 0 ? `−${term}` : term);
    } else {
      parts.push(c < 0 ? `− ${term}` : `+ ${term}`);
    }
  }
  const lhs = parts.length ? parts.join(" ") : "0";
  return `${lhs} = ${fmtSigned(d)}`;
}

function fmtRoot(sq: number): string {
  const root = Math.sqrt(sq);
  const rounded = Math.round(root);
  if (rounded * rounded === sq) return `${rounded}`;
  return `√${sq} ≈ ${root.toFixed(2)}`;
}

// =============================================================================
// WIDGET 1: 3D Vector Dot/Cross Product & Plane Normal Visualizer
// =============================================================================
type VectorPreset = "pythag" | "ortho" | "parallel" | "oblique";

const VECTOR_PRESETS: Record<VectorPreset, { u: Vec3; v: Vec3 }> = {
  pythag: { u: [2, -1, 0], v: [0, 1, -1] }, // u × v = (1, 2, 2), |u × v| = 3
  ortho: { u: [2, 1, -1], v: [1, -1, 1] }, // u · v = 0
  parallel: { u: [1, 2, -1], v: [-2, -4, 2] }, // u × v = (0, 0, 0)
  oblique: { u: [3, 0, 1], v: [1, 2, 1] },
};

function DotCrossVisualizer() {
  const [preset, setPreset] = useState<VectorPreset>("pythag");
  const [u, setU] = useState<Vec3>(VECTOR_PRESETS.pythag.u);
  const [v, setV] = useState<Vec3>(VECTOR_PRESETS.pythag.v);
  const [yawDeg, setYawDeg] = useState<number>(36);

  const applyPreset = (p: VectorPreset) => {
    setPreset(p);
    setU(VECTOR_PRESETS[p].u);
    setV(VECTOR_PRESETS[p].v);
  };

  const setUComp = (idx: 0 | 1 | 2, val: number) => {
    setU((prev) => {
      const next: Vec3 = [...prev];
      next[idx] = val;
      return next;
    });
  };

  const setVComp = (idx: 0 | 1 | 2, val: number) => {
    setV((prev) => {
      const next: Vec3 = [...prev];
      next[idx] = val;
      return next;
    });
  };

  const math = useMemo(() => {
    const dp = dot3(u, v);
    const cp = cross3(u, v);
    const uSq = normSq3(u);
    const vSq = normSq3(v);
    const cpSq = normSq3(cp);
    const uLen = Math.sqrt(uSq);
    const vLen = Math.sqrt(vSq);
    const cpLen = Math.sqrt(cpSq);
    const denom = uLen * vLen;
    const cosTheta = denom > 1e-9 ? Math.max(-1, Math.min(1, dp / denom)) : NaN;
    const thetaRad = Number.isFinite(cosTheta) ? Math.acos(cosTheta) : NaN;
    const thetaDeg = Number.isFinite(thetaRad) ? (thetaRad * 180) / Math.PI : NaN;
    const isZeroInput = uSq === 0 || vSq === 0;
    const isPerp = !isZeroInput && dp === 0;
    const isParallel = !isZeroInput && cpSq === 0;
    return { dp, cp, uSq, vSq, cpSq, uLen, vLen, cpLen, thetaRad, thetaDeg, isZeroInput, isPerp, isParallel };
  }, [u, v]);

  // 3D orthographic projection onto SVG (420 × 280) centered at (210, 152)
  const proj = useMemo(() => {
    const yaw = (yawDeg * Math.PI) / 180;
    const pitch = (24 * Math.PI) / 180;
    const cy = Math.cos(yaw);
    const sy = Math.sin(yaw);
    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);

    // Scale normal vector gently if very large so it stays inside the SVG frame
    const rawNLen = Math.sqrt(normSq3(math.cp));
    const nScale = rawNLen > 3.6 ? 3.6 / rawNLen : 1;
    const nDisp: Vec3 = [math.cp[0] * nScale, math.cp[1] * nScale, math.cp[2] * nScale];
    const sumUV: Vec3 = [u[0] + v[0], u[1] + v[1], u[2] + v[2]];

    const maxExtent = Math.max(
      4,
      ...u.map(Math.abs),
      ...v.map(Math.abs),
      ...sumUV.map(Math.abs),
      ...nDisp.map(Math.abs),
    );
    const pxPerUnit = 92 / maxExtent;
    const cx = 210;
    const cy0 = 152;

    const to2D = (pt: Vec3): [number, number] => {
      // Right-handed: x forward-left, y right, z up
      const rx = -pt[0] * sy + pt[1] * cy;
      const ry = pt[0] * cy + pt[1] * sy;
      const sx = cx + rx * pxPerUnit;
      const sy2 = cy0 - (pt[2] * cp - ry * sp) * pxPerUnit;
      return [Number(sx.toFixed(1)), Number(sy2.toFixed(1))];
    };

    return {
      O: to2D([0, 0, 0]),
      X: to2D([4, 0, 0]),
      Y: to2D([0, 4, 0]),
      Z: to2D([0, 0, 4]),
      U: to2D(u),
      V: to2D(v),
      UV: to2D(sumUV),
      N: to2D(nDisp),
      nScaled: nScale < 0.999,
      to2D,
    };
  }, [u, v, math.cp, yawDeg]);

  // Build subtle z = 0 reference grid lines
  const gridLines = useMemo(() => {
    const segs: { k: string; a: [number, number]; b: [number, number] }[] = [];
    for (let g = -3; g <= 3; g++) {
      segs.push({ k: `gx${g}`, a: proj.to2D([g, -3, 0]), b: proj.to2D([g, 3, 0]) });
      segs.push({ k: `gy${g}`, a: proj.to2D([-3, g, 0]), b: proj.to2D([3, g, 0]) });
    }
    return segs;
  }, [proj]);

  const caption = math.isZeroInput ? (
    <span>Set at least one non-zero component in both <strong>u</strong> and <strong>v</strong> to measure the angle and cross product.</span>
  ) : math.isParallel ? (
    <span>
      <strong>Parallel vectors!</strong> Because <strong>v</strong> is a scalar multiple of <strong>u</strong>, the parallelogram collapses to area <strong>0</strong> and{" "}
      <strong>u × v = (0, 0, 0)</strong> defines no unique plane normal.
    </span>
  ) : (
    <span>
      {math.isPerp ? (
        <><strong>Perpendicular!</strong> Because <strong>u · v = 0</strong>, θ = 90° and the parallelogram is a rectangle of area |<strong>u</strong>||<strong>v</strong>|. </>
      ) : null}
      The normal <strong>n = u × v = {fmtVec(math.cp)}</strong> is perpendicular to both <strong>u</strong> and <strong>v</strong> (verify: <strong>u · n = 0</strong> and{" "}
      <strong>v · n = 0</strong>). The plane through the origin spanned by <strong>u</strong> and <strong>v</strong> has Cartesian equation{" "}
      <strong>{fmtPlaneEq(math.cp, 0)}</strong>.
    </span>
  );

  return (
    <WidgetFrame
      title="3D Vector Dot/Cross Product & Plane Normal Visualizer"
      tryThis={[
        "Start with **Pythagorean Normal** — verify |u × v| = 3 exactly and check that u · (u × v) = 0.",
        "Adjust u and v until **u · v = 0** (perpendicular) — watch θ lock onto 90.0°.",
        "Make v a multiple of u (e.g. **Parallel**) — watch the shaded parallelogram area and u × v vanish to 0.",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Vector preset"
            value={preset}
            onChange={applyPreset}
            options={[
              { value: "pythag", label: "Pythagorean Normal" },
              { value: "ortho", label: "Orthogonal (⊥)" },
              { value: "parallel", label: "Parallel (∥)" },
              { value: "oblique", label: "Oblique" },
            ]}
          />
        </div>

        {/* Live 3D Isometric SVG Projection */}
        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 420 280"
            role="img"
            aria-label="Interactive 3D projection showing vectors u, v, their shaded parallelogram, and cross product normal u cross v"
            className="mx-auto block h-auto w-full max-w-md"
          >
            <defs>
              <marker id="arr-u" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L7,3 L0,6 Z" fill="#2563eb" />
              </marker>
              <marker id="arr-v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L7,3 L0,6 Z" fill="#059669" />
              </marker>
              <marker id="arr-n" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L7,3 L0,6 Z" fill="#dc2626" />
              </marker>
            </defs>

            {/* Subtle z = 0 ground grid */}
            {gridLines.map((g) => (
              <line
                key={g.k}
                x1={g.a[0]}
                y1={g.a[1]}
                x2={g.b[0]}
                y2={g.b[1]}
                stroke="#cbd5e1"
                strokeWidth={0.7}
                strokeOpacity={0.55}
              />
            ))}

            {/* 3D Coordinate Axes */}
            <line x1={proj.O[0]} y1={proj.O[1]} x2={proj.X[0]} y2={proj.X[1]} stroke="#64748b" strokeWidth={1.3} />
            <text x={proj.X[0] - 8} y={proj.X[1] + 12} fontSize={11} fontWeight={700} fill="#475569">x</text>
            <line x1={proj.O[0]} y1={proj.O[1]} x2={proj.Y[0]} y2={proj.Y[1]} stroke="#64748b" strokeWidth={1.3} />
            <text x={proj.Y[0] + 6} y={proj.Y[1] + 4} fontSize={11} fontWeight={700} fill="#475569">y</text>
            <line x1={proj.O[0]} y1={proj.O[1]} x2={proj.Z[0]} y2={proj.Z[1]} stroke="#64748b" strokeWidth={1.3} />
            <text x={proj.Z[0] + 5} y={proj.Z[1] + 4} fontSize={11} fontWeight={700} fill="#475569">z</text>

            {/* Parallelogram spanned by u and v + triangle split diagonal */}
            {!math.isZeroInput && !math.isParallel ? (
              <g>
                <polygon
                  points={`${proj.O[0]},${proj.O[1]} ${proj.U[0]},${proj.U[1]} ${proj.UV[0]},${proj.UV[1]} ${proj.V[0]},${proj.V[1]}`}
                  fill="#93c5fd"
                  fillOpacity={0.38}
                  stroke="#3b82f6"
                  strokeWidth={1.1}
                  strokeDasharray="4,3"
                />
                <line
                  x1={proj.U[0]}
                  y1={proj.U[1]}
                  x2={proj.V[0]}
                  y2={proj.V[1]}
                  stroke="#0f766e"
                  strokeWidth={1.1}
                  strokeDasharray="3,3"
                />
              </g>
            ) : null}

            {/* Vector u (blue) */}
            {math.uSq > 0 ? (
              <g>
                <line
                  x1={proj.O[0]}
                  y1={proj.O[1]}
                  x2={proj.U[0]}
                  y2={proj.U[1]}
                  stroke="#2563eb"
                  strokeWidth={2.8}
                  markerEnd="url(#arr-u)"
                />
                <text x={proj.U[0] + 6} y={proj.U[1] - 4} fontSize={12} fontWeight={800} fill="#1d4ed8">u</text>
              </g>
            ) : null}

            {/* Vector v (emerald) */}
            {math.vSq > 0 ? (
              <g>
                <line
                  x1={proj.O[0]}
                  y1={proj.O[1]}
                  x2={proj.V[0]}
                  y2={proj.V[1]}
                  stroke="#059669"
                  strokeWidth={2.8}
                  markerEnd="url(#arr-v)"
                />
                <text x={proj.V[0] + 6} y={proj.V[1] + 12} fontSize={12} fontWeight={800} fill="#047857">v</text>
              </g>
            ) : null}

            {/* Cross product normal n = u × v (red) */}
            {math.cpSq > 0 ? (
              <g>
                <line
                  x1={proj.O[0]}
                  y1={proj.O[1]}
                  x2={proj.N[0]}
                  y2={proj.N[1]}
                  stroke="#dc2626"
                  strokeWidth={2.8}
                  markerEnd="url(#arr-n)"
                />
                <text x={proj.N[0] + 6} y={proj.N[1] - 4} fontSize={12} fontWeight={800} fill="#b91c1c">
                  u × v{proj.nScaled ? " (scaled)" : ""}
                </text>
              </g>
            ) : null}

            <circle cx={proj.O[0]} cy={proj.O[1]} r={3.5} fill="#0f172a" />
          </svg>
        </div>

        {/* Camera yaw rotation */}
        <Slider
          label="Rotate 3D view (azimuth)"
          value={yawDeg}
          min={-180}
          max={180}
          step={4}
          onChange={setYawDeg}
          format={(deg) => `${deg}°`}
        />

        {/* Component steppers for u and v (responsive 1→2 cols, zero overflow at 390px) */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-blue-600">
              Vector u = {fmtVec(u)}
            </div>
            <Stepper label="u_x" value={u[0]} min={-4} max={4} onChange={(val) => setUComp(0, val)} />
            <Stepper label="u_y" value={u[1]} min={-4} max={4} onChange={(val) => setUComp(1, val)} />
            <Stepper label="u_z" value={u[2]} min={-4} max={4} onChange={(val) => setUComp(2, val)} />
          </div>
          <div className="space-y-2 rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-emerald-600">
              Vector v = {fmtVec(v)}
            </div>
            <Stepper label="v_x" value={v[0]} min={-4} max={4} onChange={(val) => setVComp(0, val)} />
            <Stepper label="v_y" value={v[1]} min={-4} max={4} onChange={(val) => setVComp(1, val)} />
            <Stepper label="v_z" value={v[2]} min={-4} max={4} onChange={(val) => setVComp(2, val)} />
          </div>
        </div>

        {/* Live Readouts */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout
            label="Dot product u · v"
            value={math.isPerp ? "0 (⊥)" : fmtSigned(math.dp)}
            tone={math.isPerp ? "good" : "brand"}
          />
          <Readout
            label="Cross u × v"
            value={math.isParallel ? "(0, 0, 0) (∥)" : fmtVec(math.cp)}
            tone={math.isParallel ? "bad" : "ink"}
          />
          <Readout
            label="Parallelogram |u×v|"
            value={math.cpSq === 0 ? "0" : fmtRoot(math.cpSq)}
            tone="brand"
          />
          <Readout
            label="Triangle ½|u×v|"
            value={math.cpSq === 0 ? "0" : `${(math.cpLen / 2).toFixed(2)}`}
            tone="good"
          />
        </div>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <Readout
            label="Angle θ between u & v"
            value={
              Number.isFinite(math.thetaDeg)
                ? `${math.thetaDeg.toFixed(1)}° (${math.thetaRad.toFixed(2)} rad)`
                : "Undefined"
            }
            tone={math.isPerp ? "good" : "ink"}
          />
          <Readout
            label="Spanning plane (through O)"
            value={math.cpSq > 0 ? fmtPlaneEq(math.cp, 0) : "Not unique (collinear)"}
            tone="ink"
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Line–Plane Angle & Shortest Distance Lab
// =============================================================================
type NormalPreset = "n122" | "n236" | "n001" | "n101";

const NORMAL_PRESETS: Record<NormalPreset, { label: string; n: Vec3; d: number; b: Vec3; p: Vec3 }> = {
  n122: { label: "n=(1,2,2)", n: [1, 2, 2], d: 6, b: [2, -1, 2], p: [4, 2, 3] },
  n236: { label: "n=(2,3,6)", n: [2, 3, 6], d: 14, b: [2, 1, -2], p: [3, 4, 2] },
  n001: { label: "n=(0,0,1)", n: [0, 0, 1], d: 0, b: [3, 0, 2], p: [1, 0, 3] },
  n101: { label: "n=(1,0,1)", n: [1, 0, 1], d: 4, b: [1, 1, 0], p: [4, 1, 2] },
};

function LinePlaneAngleLab() {
  const [nPreset, setNPreset] = useState<NormalPreset>("n122");
  const [n, setN] = useState<Vec3>(NORMAL_PRESETS.n122.n);
  const [dConst, setDConst] = useState<number>(NORMAL_PRESETS.n122.d);
  const [b, setB] = useState<Vec3>(NORMAL_PRESETS.n122.b);
  const [p, setP] = useState<Vec3>(NORMAL_PRESETS.n122.p);

  const chooseNormalPreset = (key: NormalPreset) => {
    setNPreset(key);
    setN(NORMAL_PRESETS[key].n);
    setDConst(NORMAL_PRESETS[key].d);
    setB(NORMAL_PRESETS[key].b);
    setP(NORMAL_PRESETS[key].p);
  };

  const setBComp = (idx: 0 | 1 | 2, val: number) => {
    setB((prev) => {
      const next: Vec3 = [...prev];
      next[idx] = val;
      return next;
    });
  };

  const setPComp = (idx: 0 | 1 | 2, val: number) => {
    setP((prev) => {
      const next: Vec3 = [...prev];
      next[idx] = val;
      return next;
    });
  };

  const calc = useMemo(() => {
    const bLen = Math.sqrt(normSq3(b));
    const nLen = Math.sqrt(normSq3(n));
    const bn = dot3(b, n);
    const ratio = bLen > 1e-9 && nLen > 1e-9 ? Math.min(1, Math.abs(bn) / (bLen * nLen)) : NaN;
    const alphaRad = Number.isFinite(ratio) ? Math.asin(ratio) : NaN;
    const alphaDeg = Number.isFinite(alphaRad) ? (alphaRad * 180) / Math.PI : NaN;
    const thetaDeg = Number.isFinite(alphaDeg) ? 90 - alphaDeg : NaN;

    const signedOffset = dot3(n, p) - dConst;
    const dist = nLen > 1e-9 ? Math.abs(signedOffset) / nLen : NaN;

    let status: "pierces" | "parallel" | "inside" | "invalid" = "pierces";
    if (bLen < 1e-9) status = "invalid";
    else if (bn === 0 && signedOffset === 0) status = "inside";
    else if (bn === 0) status = "parallel";
    else status = "pierces";

    return { bLen, nLen, bn, ratio, alphaRad, alphaDeg, thetaDeg, signedOffset, dist, status };
  }, [b, n, p, dConst]);

  // Cross-section SVG geometry showing the vertical plane containing line L and normal n
  const geom = useMemo(() => {
    const Ix = 152;
    const Iy = 192;
    const alpha = Number.isFinite(calc.alphaRad) ? calc.alphaRad : 0;
    const clampedD = Number.isFinite(calc.dist) ? Math.min(4.5, calc.dist) : 0;
    const heightPx = Math.max(0, clampedD * 22);

    // Line direction above plane at angle alpha from horizontal projection
    const rayLen = 152;
    const dx = Math.cos(alpha) * rayLen;
    const dy = Math.sin(alpha) * rayLen;
    const Lx2 = Ix + dx;
    const Ly2 = Iy - dy;
    const Lx1 = Ix - dx * 0.32;
    const Ly1 = Iy + dy * 0.32;

    // Point P sits at height heightPx above the plane (or along the ray when piercing)
    let Px = 284;
    let Py = Iy - heightPx;
    if (calc.status === "pierces" && Math.sin(alpha) > 0.12 && heightPx > 8) {
      const run = Math.min(170, Math.max(26, heightPx / Math.tan(alpha)));
      Px = Ix + run;
      Py = Iy - run * Math.tan(alpha);
    } else if (calc.status === "pierces" && heightPx <= 8) {
      Px = Ix;
      Py = Iy;
    }

    // Arc endpoints for alpha (between horizontal projection and ray) and theta (between normal and ray)
    const rA = 46;
    const rT = 36;
    const aEndX = Ix + rA * Math.cos(alpha);
    const aEndY = Iy - rA * Math.sin(alpha);
    const tEndX = Ix + rT * Math.cos(alpha);
    const tEndY = Iy - rT * Math.sin(alpha);

    return { Ix, Iy, Lx1, Ly1, Lx2, Ly2, Px, Py, heightPx, rA, rT, aEndX, aEndY, tEndX, tEndY, alpha };
  }, [calc.alphaRad, calc.dist, calc.status]);

  const statusText =
    calc.status === "invalid"
      ? "Set a non-zero line direction b"
      : calc.status === "inside"
        ? "Line lies IN plane (b · n = 0 & P ∈ Π)"
        : calc.status === "parallel"
          ? "Parallel to plane (b · n = 0, P ∉ Π)"
          : "Line pierces plane at 1 point";

  return (
    <WidgetFrame
      title="Line–Plane Angle & Shortest Distance Lab"
      tryThis={[
        "Compare **θ (angle with normal, arccos)** and **α (angle with plane, arcsin)** — notice they ALWAYS add to 90.0°!",
        "Make **b · n = 0** (for example set b = (2, −1, 0) with n = (1, 2, 2)) — watch α drop to 0° as the line becomes parallel to Π.",
        "Change the plane constant **d** or point **P** — notice the shortest distance D changes while the acute angle α stays untouched!",
      ]}
      caption={
        <span>
          Because the dot product compares line direction <strong>b = {fmtVec(b)}</strong> against the plane{" "}
          <strong>normal n = {fmtVec(n)}</strong>, <M>{"cos θ = |b · n| / (|b| |n|)"}</M> gives the angle to the{" "}
          <em>normal</em> ({Number.isFinite(calc.thetaDeg) ? `${calc.thetaDeg.toFixed(1)}°` : "—"}). Subtracting from 90° gives the true{" "}
          <strong>line–plane angle</strong>{" "}
          <strong>α = arcsin(|b · n| / (|b||n|)) = {Number.isFinite(calc.alphaDeg) ? `${calc.alphaDeg.toFixed(1)}°` : "—"}</strong>!
          Plane equation: <strong>{fmtPlaneEq(n, dConst)}</strong>.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Plane normal preset"
            value={nPreset}
            onChange={chooseNormalPreset}
            options={[
              { value: "n122", label: NORMAL_PRESETS.n122.label },
              { value: "n236", label: NORMAL_PRESETS.n236.label },
              { value: "n001", label: NORMAL_PRESETS.n001.label },
              { value: "n101", label: NORMAL_PRESETS.n101.label },
            ]}
          />
          <span className="rounded-lg bg-surface-2 px-2.5 py-1 text-xs font-bold text-ink-2">{statusText}</span>
        </div>

        {/* Live Cross-Section Diagram */}
        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 420 265"
            role="img"
            aria-label="Live line-plane cross section illustrating complementary angles theta with the normal and alpha with the plane plus perpendicular distance D"
            className="mx-auto block h-auto w-full max-w-md"
          >
            {/* Perspective plane slab Pi */}
            <polygon
              points="34,224 334,224 396,158 96,158"
              fill="#dbeafe"
              fillOpacity={0.62}
              stroke="#60a5fa"
              strokeWidth={1.6}
            />
            <text x={358} y={176} fontSize={12} fontWeight={800} fill="#1d4ed8">Π</text>

            {/* Projection line inside plane */}
            <line
              x1={68}
              y1={geom.Iy}
              x2={342}
              y2={geom.Iy}
              stroke="#64748b"
              strokeWidth={1.4}
              strokeDasharray="5,3"
            />

            {/* Normal vector n at I */}
            <line x1={geom.Ix} y1={geom.Iy} x2={geom.Ix} y2={58} stroke="#dc2626" strokeWidth={2.4} />
            <polygon points={`${geom.Ix},52 ${geom.Ix - 5},62 ${geom.Ix + 5},62`} fill="#dc2626" />
            <text x={geom.Ix - 16} y={70} fontSize={12} fontWeight={800} fill="#b91c1c">n</text>
            <rect x={geom.Ix} y={geom.Iy - 11} width={11} height={11} fill="none" stroke="#dc2626" strokeWidth={1.3} />

            {/* Line L */}
            {calc.status === "parallel" || calc.status === "inside" ? (
              <g>
                <line
                  x1={76}
                  y1={geom.Iy - geom.heightPx}
                  x2={336}
                  y2={geom.Iy - geom.heightPx}
                  stroke="#2563eb"
                  strokeWidth={2.8}
                />
                <text x={206} y={geom.Iy - geom.heightPx - 8} fontSize={11.5} fontWeight={800} textAnchor="middle" fill="#1d4ed8">
                  Line L ({calc.status === "inside" ? "lies in Π, α = 0°" : "parallel to Π, α = 0°"})
                </text>
              </g>
            ) : calc.status === "pierces" ? (
              <g>
                {/* Below-plane dashed segment */}
                <line
                  x1={geom.Lx1}
                  y1={geom.Ly1}
                  x2={geom.Ix}
                  y2={geom.Iy}
                  stroke="#2563eb"
                  strokeWidth={2}
                  strokeDasharray="4,3"
                />
                {/* Above-plane solid ray */}
                <line x1={geom.Ix} y1={geom.Iy} x2={geom.Lx2} y2={geom.Ly2} stroke="#2563eb" strokeWidth={2.8} />
                <circle cx={geom.Ix} cy={geom.Iy} r={3.8} fill="#1d4ed8" />
                <text x={geom.Ix - 12} y={geom.Iy + 15} fontSize={11} fontWeight={700} fill="#1d4ed8">I</text>

                {/* Angle alpha arc (amber) between plane projection and line L */}
                {calc.alphaDeg > 3 ? (
                  <path
                    d={`M ${geom.Ix + geom.rA},${geom.Iy} A ${geom.rA},${geom.rA} 0 0,0 ${geom.aEndX.toFixed(1)},${geom.aEndY.toFixed(1)}`}
                    fill="none"
                    stroke="#d97706"
                    strokeWidth={2.4}
                  />
                ) : null}
                <text x={geom.Ix + 54} y={geom.Iy - 8} fontSize={11.5} fontWeight={800} fill="#b45309">
                  α = {calc.alphaDeg.toFixed(1)}°
                </text>

                {/* Angle theta arc (red) between normal n and line L */}
                {calc.thetaDeg > 3 ? (
                  <path
                    d={`M ${geom.Ix},${geom.Iy - geom.rT} A ${geom.rT},${geom.rT} 0 0,1 ${geom.tEndX.toFixed(1)},${geom.tEndY.toFixed(1)}`}
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth={2.2}
                  />
                ) : null}
                <text x={geom.Ix + 9} y={geom.Iy - 44} fontSize={11} fontWeight={800} fill="#b91c1c">
                  θ = {calc.thetaDeg.toFixed(1)}°
                </text>
              </g>
            ) : null}

            {/* Point P and perpendicular foot F showing shortest distance D */}
            {calc.status !== "invalid" ? (
              <g>
                {geom.heightPx > 2 ? (
                  <>
                    <line x1={geom.Px} y1={geom.Py} x2={geom.Px} y2={geom.Iy} stroke="#059669" strokeWidth={2.3} />
                    <rect x={geom.Px - 10} y={geom.Iy - 10} width={10} height={10} fill="none" stroke="#059669" strokeWidth={1.3} />
                    <text x={geom.Px + 8} y={(geom.Py + geom.Iy) / 2 + 4} fontSize={11} fontWeight={800} fill="#047857">
                      D = {calc.dist.toFixed(2)}
                    </text>
                  </>
                ) : null}
                <circle cx={geom.Px} cy={geom.Py} r={4.2} fill="#0f172a" />
                <text x={geom.Px + 7} y={geom.Py - 5} fontSize={11.5} fontWeight={800} fill="#0f172a">P</text>
                <circle cx={geom.Px} cy={geom.Iy} r={3.5} fill="#059669" />
                <text x={geom.Px + 7} y={geom.Iy + 14} fontSize={11} fontWeight={700} fill="#047857">F</text>
              </g>
            ) : null}

            <text x={210} y={252} fontSize={11} fontWeight={700} textAnchor="middle" fill="#334155">
              α + θ = 90°  ⇒  sin α = cos θ = |b · n| / (|b| |n|)
            </text>
          </svg>
        </div>

        {/* Plane constant d slider */}
        <Slider
          label={`Plane constant d in ${fmtPlaneEq(n, dConst)}`}
          value={dConst}
          min={-15}
          max={25}
          step={1}
          onChange={setDConst}
          format={(val) => fmtSigned(val)}
        />

        {/* Line direction b and Point P steppers */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-blue-600">
              Line direction b = {fmtVec(b)}
            </div>
            <Stepper label="b_x" value={b[0]} min={-4} max={4} onChange={(val) => setBComp(0, val)} />
            <Stepper label="b_y" value={b[1]} min={-4} max={4} onChange={(val) => setBComp(1, val)} />
            <Stepper label="b_z" value={b[2]} min={-4} max={4} onChange={(val) => setBComp(2, val)} />
          </div>
          <div className="space-y-2 rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-emerald-600">
              Point P = {fmtVec(p)}
            </div>
            <Stepper label="x₀" value={p[0]} min={-5} max={5} onChange={(val) => setPComp(0, val)} />
            <Stepper label="y₀" value={p[1]} min={-5} max={5} onChange={(val) => setPComp(1, val)} />
            <Stepper label="z₀" value={p[2]} min={-5} max={5} onChange={(val) => setPComp(2, val)} />
          </div>
        </div>

        {/* Live Readouts */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout
            label="|b · n| / (|b||n|)"
            value={Number.isFinite(calc.ratio) ? calc.ratio.toFixed(3) : "—"}
            tone="ink"
          />
          <Readout
            label="Angle w/ Normal θ"
            value={Number.isFinite(calc.thetaDeg) ? `${calc.thetaDeg.toFixed(1)}°` : "—"}
            tone="bad"
          />
          <Readout
            label="Line–Plane Angle α"
            value={Number.isFinite(calc.alphaDeg) ? `${calc.alphaDeg.toFixed(1)}°` : "—"}
            tone="good"
          />
          <Readout
            label="Shortest Dist D"
            value={Number.isFinite(calc.dist) ? calc.dist.toFixed(2) : "—"}
            tone="brand"
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "dot-cross-plane-normal",
    title: "3D Vector Dot/Cross Product & Plane Normal Visualizer",
    blurb: "Adjust 3D components of u and v to see the live isometric projection, u · v, u × v, parallelogram/triangle area, and angle θ.",
    Component: DotCrossVisualizer,
  },
  {
    id: "line-plane-angle-distance",
    title: "Line–Plane Angle & Shortest Distance Lab",
    blurb: "Explore why line–plane acute angle α uses arcsin(|b · n|/(|b||n|)) instead of arccos, alongside live point-to-plane shortest distance D.",
    Component: LinePlaneAngleLab,
  },
];

export default widgets;
