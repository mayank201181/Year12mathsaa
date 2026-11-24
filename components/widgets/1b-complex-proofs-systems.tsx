"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

function gcdInt(a: number, b: number): number {
  let x = Math.abs(Math.round(a));
  let y = Math.abs(Math.round(b));
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

function formatPiFraction(num: number, den: number): string {
  if (num === 0) return "0";
  const g = gcdInt(num, den);
  const n = num / g;
  const d = den / g;
  const sign = n < 0 ? "−" : "";
  const an = Math.abs(n);
  if (d === 1) return an === 1 ? `${sign}π` : `${sign}${an}π`;
  return an === 1 ? `${sign}π/${d}` : `${sign}${an}π/${d}`;
}

function formatFrac(num: number, den: number): string {
  if (den === 0) return "undefined";
  if (num === 0) return "0";
  const sign = num * den < 0 ? "−" : "";
  const an = Math.abs(num);
  const ad = Math.abs(den);
  const g = gcdInt(an, ad);
  const sn = an / g;
  const sd = ad / g;
  return sd === 1 ? `${sign}${sn}` : `${sign}${sn}/${sd}`;
}

function fmtNum(v: number, dp = 2): string {
  const rounded = Math.abs(v) < 1e-9 ? 0 : Number(v.toFixed(dp));
  return rounded < 0 ? `−${Math.abs(rounded).toFixed(dp)}` : rounded.toFixed(dp);
}

function wrapPrincipalRadians(angle: number): number {
  let a = ((angle + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
  if (a <= -Math.PI + 1e-9) a = Math.PI;
  return a;
}

// =============================================================================
// WIDGET 1: Argand Plane & De Moivre nth-Root Visualizer
// =============================================================================
function ArgandDeMoivreRoots() {
  const [r, setR] = useState(4);
  const [thetaTwelfths, setThetaTwelfths] = useState(8); // 8*pi/12 = 2pi/3
  const [n, setN] = useState(4);
  const [scaleMode, setScaleMode] = useState<"true" | "zoom">("true");

  const theta = (thetaTwelfths * Math.PI) / 12;
  const rootMod = Math.pow(r, 1 / n);

  const zX = r * Math.cos(theta);
  const zY = r * Math.sin(theta);

  const roots = Array.from({ length: n }, (_, k) => {
    const rawAng = (theta + 2 * k * Math.PI) / n;
    const princ = wrapPrincipalRadians(rawAng);
    const x = rootMod * Math.cos(rawAng);
    const y = rootMod * Math.sin(rawAng);
    const rawNum = thetaTwelfths + 24 * k;
    const den = 12 * n;
    // Wrap numerator strictly into (-den, den]
    const period = 2 * den;
    let wrappedNum = ((rawNum % period) + period) % period;
    if (wrappedNum > den) wrappedNum -= period;
    return {
      k,
      x,
      y,
      angleRad: princ,
      angleLabel: formatPiFraction(wrappedNum, den),
    };
  });

  const sumX = roots.reduce((acc, pt) => acc + pt.x, 0);
  const sumY = roots.reduce((acc, pt) => acc + pt.y, 0);

  // SVG coordinate projection (viewBox 340 x 340, centre 170, 170)
  const size = 340;
  const cx = 170;
  const cy = 170;
  const plotRadius = 126;
  const maxCoord = scaleMode === "zoom" ? Math.max(1.5, rootMod * 1.45) : Math.max(4, r * 1.18, rootMod * 1.35);
  const scale = plotRadius / maxCoord;
  const toX = (x: number) => cx + x * scale;
  const toY = (y: number) => cy - y * scale;

  const zFits = r <= maxCoord * 1.02;
  const zDrawR = zFits ? r : maxCoord * 0.98;
  const zPx = toX(zDrawR * Math.cos(theta));
  const zPy = toY(zDrawR * Math.sin(theta));
  const rootCircleR = rootMod * scale;

  const polyPoints = roots.map((pt) => `${toX(pt.x).toFixed(1)},${toY(pt.y).toFixed(1)}`).join(" ");
  const thetaLabel = formatPiFraction(thetaTwelfths, 12);
  const spacingLabel = formatPiFraction(2, n);
  const spacingDeg = (360 / n).toFixed(n === 7 ? 1 : 0);

  // Grid ring values
  const gridStep = maxCoord <= 3 ? 1 : maxCoord <= 8 ? 2 : 4;
  const gridRings: number[] = [];
  for (let g = gridStep; g <= maxCoord + 1e-6; g += gridStep) gridRings.push(g);

  return (
    <WidgetFrame
      title="Argand Plane & De Moivre nth-Root Visualizer"
      tryThis={[
        "Set {{r = 16}}, {{theta = pi}}, and {{n = 4}} to verify all four roots of {{z^4 = -16}} form a square of radius 2.",
        "Keep {{r = 8}} and {{theta = 0}} while stepping {{n}} from 2 to 8 — watch the regular {{n}}-gon rotate and check that Σ {{w_k = 0}} every time!",
        "Switch to **Zoom on Roots** when {{r}} is large to inspect the angular step {{2pi/n}} up close.",
      ]}
      caption={
        <>
          Solving <strong>z^{n} = {r} e^(i({thetaLabel}))</strong> gives <strong>{n}</strong> distinct roots on the
          circle of radius <strong>{r}^(1/{n}) ≈ {fmtNum(rootMod, 3)}</strong>, equally spaced by{" "}
          <strong>{spacingLabel}</strong> ({spacingDeg}°).{" "}
          {n >= 3
            ? `Their vertices form a regular ${n}-gon centred at the origin, so their vector sum cancels identically to 0.`
            : "The two square roots sit diametrically opposite across the origin (180° apart), so w₀ + w₁ = 0."}
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start">
        {/* Controls & Readouts */}
        <div className="space-y-4">
          <div className="space-y-3 rounded-xl border border-line bg-surface-2/60 p-3">
            <Slider
              label="Modulus r = |z|"
              value={r}
              min={1}
              max={16}
              step={1}
              onChange={setR}
              format={(v) => String(v)}
            />
            <Slider
              label="Principal argument θ = arg(z)"
              value={thetaTwelfths}
              min={-11}
              max={12}
              step={1}
              onChange={setThetaTwelfths}
              format={(v) => `${formatPiFraction(v, 12)} (${v * 15}°)`}
            />
            <Stepper label="Root order n (zⁿ = w)" value={n} min={2} max={8} step={1} onChange={setN} />
            <div className="pt-1">
              <Segmented
                label="Plot scale"
                value={scaleMode}
                onChange={setScaleMode}
                options={[
                  { value: "true", label: "True Scale" },
                  { value: "zoom", label: "Zoom on Roots" },
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Readout label="Root Radius r^(1/n)" value={fmtNum(rootMod, 3)} tone="brand" />
            <Readout label="Spacing 2π/n" value={`${spacingLabel} (${spacingDeg}°)`} tone="ink" />
            <Readout label="z (Cartesian)" value={`${fmtNum(zX, 2)} ${zY >= 0 ? "+" : "−"} ${Math.abs(zY).toFixed(2)}i`} tone="ink" />
            <Readout label="Sum Σ wₖ" value={`${fmtNum(sumX, 2)} + ${fmtNum(sumY, 2)}i`} tone="good" />
          </div>

          <div className="max-h-44 overflow-y-auto rounded-xl border border-line bg-surface p-2.5 text-xs">
            <div className="mb-1.5 font-bold uppercase tracking-wide text-ink-2">
              All {n} Roots (principal arg ∈ (−π, π])
            </div>
            <div className="space-y-1 font-mono tabular-nums">
              {roots.map((pt) => (
                <div key={pt.k} className="flex items-center justify-between gap-2 rounded bg-surface-2/60 px-2 py-1">
                  <span className="font-bold text-brand">w{pt.k}</span>
                  <span className="text-ink-2">arg = {pt.angleLabel}</span>
                  <span className="text-ink">
                    {fmtNum(pt.x, 2)} {pt.y >= 0 ? "+" : "−"} {Math.abs(pt.y).toFixed(2)}i
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live SVG Argand Plane */}
        <div className="flex flex-col items-center">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="w-full max-w-[340px] rounded-xl border border-line bg-surface"
            role="img"
            aria-label={`Argand diagram showing complex number z with modulus ${r} and argument ${thetaLabel}, together with its ${n} distinct ${n}th roots forming a regular ${n}-gon of radius ${fmtNum(rootMod, 2)}`}
          >
            {/* Concentric reference rings */}
            {gridRings.map((g) => (
              <g key={g}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={g * scale}
                  fill="none"
                  className="stroke-line"
                  strokeWidth={1}
                  strokeDasharray="2 3"
                />
                <text x={cx + g * scale + 3} y={cy + 12} fontSize={9} className="fill-ink-2">
                  {g}
                </text>
              </g>
            ))}

            {/* Axes */}
            <line x1={16} y1={cy} x2={size - 16} y2={cy} className="stroke-ink-2" strokeWidth={1.4} />
            <line x1={cx} y1={16} x2={cx} y2={size - 16} className="stroke-ink-2" strokeWidth={1.4} />
            <text x={size - 32} y={cy - 6} fontSize={11} fontWeight={700} className="fill-ink-2">
              Re
            </text>
            <text x={cx + 7} y={26} fontSize={11} fontWeight={700} className="fill-ink-2">
              Im
            </text>

            {/* Target z vector */}
            <line
              x1={cx}
              y1={cy}
              x2={zPx}
              y2={zPy}
              stroke="var(--accent)"
              strokeWidth={2}
              strokeDasharray={zFits ? "5 3" : "3 3"}
            />
            <circle cx={zPx} cy={zPy} r={zFits ? 5.5 : 4} fill="var(--accent)" />
            <text
              x={zPx + (Math.cos(theta) >= 0 ? 8 : -24)}
              y={zPy + (Math.sin(theta) >= 0 ? -8 : 14)}
              fontSize={11}
              fontWeight={700}
              fill="var(--accent)"
            >
              {zFits ? "z" : "→ z"}
            </text>

            {/* Root circle */}
            <circle
              cx={cx}
              cy={cy}
              r={rootCircleR}
              fill="none"
              stroke="var(--brand)"
              strokeWidth={1.4}
              strokeDasharray="5 4"
            />

            {/* Regular n-gon */}
            {n >= 3 ? (
              <polygon
                points={polyPoints}
                fill="var(--brand-soft)"
                fillOpacity={0.45}
                stroke="var(--brand)"
                strokeWidth={2}
              />
            ) : (
              <line
                x1={toX(roots[0].x)}
                y1={toY(roots[0].y)}
                x2={toX(roots[1].x)}
                y2={toY(roots[1].y)}
                stroke="var(--brand)"
                strokeWidth={2.2}
              />
            )}

            {/* Spokes & root nodes */}
            {roots.map((pt) => {
              const px = toX(pt.x);
              const py = toY(pt.y);
              const labelDist = rootCircleR + 14;
              const lx = cx + labelDist * Math.cos(pt.angleRad);
              const ly = cy - labelDist * Math.sin(pt.angleRad);
              return (
                <g key={pt.k}>
                  <line
                    x1={cx}
                    y1={cy}
                    x2={px}
                    y2={py}
                    stroke="var(--brand)"
                    strokeWidth={1.1}
                    strokeOpacity={0.5}
                  />
                  <circle cx={px} cy={py} r={5} fill={pt.k === 0 ? "var(--bad)" : "var(--brand)"} />
                  <text
                    x={lx}
                    y={ly + 3.5}
                    fontSize={10.5}
                    fontWeight={700}
                    textAnchor="middle"
                    fill={pt.k === 0 ? "var(--bad)" : "var(--brand)"}
                  >
                    w{pt.k}
                  </text>
                </g>
              );
            })}
          </svg>
          <p className="mt-2 text-center text-xs text-ink-2">
            Teal dot = target <strong className="text-ink">z</strong> • Orange dot = principal first root{" "}
            <strong className="text-ink">w₀ (θ/n)</strong> • Indigo polygon = all {n} roots
          </p>
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: 3×3 Linear System Consistency Inspector
// =============================================================================
function LinearSystem3x3Inspector() {
  // System:
  //   x +  y +  z = 3
  //   x + 2y + 3z = 5
  //  2x + 3y + kz = m
  // Row reduction:
  //   R2 <- R2 - R1:  [0, 1, 2     | 2    ]
  //   R3 <- R3 - 2R1: [0, 1, k - 2 | m - 6]
  //   R3 <- R3 - R2:  [0, 0, k - 4 | m - 8]
  const [k, setK] = useState(5);
  const [m, setM] = useState(10);

  const p = k - 4;
  const q = m - 8;

  const regime: "unique" | "infinite" | "inconsistent" =
    p !== 0 ? "unique" : q === 0 ? "infinite" : "inconsistent";

  // Exact rational coordinates when unique:
  // z = q / p; y = 2 - 2z = (2p - 2q) / p; x = 1 + z = (p + q) / p
  const xStr = regime === "unique" ? formatFrac(p + q, p) : regime === "infinite" ? "1 + t" : "—";
  const yStr = regime === "unique" ? formatFrac(2 * p - 2 * q, p) : regime === "infinite" ? "2 − 2t" : "—";
  const zStr = regime === "unique" ? formatFrac(q, p) : regime === "infinite" ? "t" : "—";

  const regimeBadge =
    regime === "unique"
      ? { label: "Unique Solution (Point)", tone: "good" as const, color: "var(--good)", soft: "var(--good-soft)" }
      : regime === "infinite"
        ? { label: "Infinite Solutions (Line)", tone: "brand" as const, color: "var(--brand)", soft: "var(--brand-soft)" }
        : { label: "Inconsistent (No Solution)", tone: "bad" as const, color: "var(--bad)", soft: "var(--bad-soft)" };

  const applyPreset = (preset: "unique" | "infinite" | "inconsistent") => {
    if (preset === "unique") {
      setK(5);
      setM(10);
    } else if (preset === "infinite") {
      setK(4);
      setM(8);
    } else {
      setK(4);
      setM(11);
    }
  };

  return (
    <WidgetFrame
      title="3×3 Linear System Consistency Inspector"
      tryThis={[
        "Slide {{k}} to **4** with {{m = 8}} — watch Row 3 collapse to {{[0, 0, 0 | 0]}} and the 3 planes open into a sheaf along a parametric line.",
        "Keep {{k = 4}} and move {{m}} away from 8 — Row 3 becomes {{0z = m - 8 ≠ 0}} (a triangular prism with no common point!).",
        "Set {{k = 6, m = 12}} and verify the back-substituted solution {{(x, y, z) = (3, -2, 2)}} in all three original equations.",
      ]}
      caption={
        regime === "unique" ? (
          <>
            Because the bottom pivot <strong>k − 4 = {p} ≠ 0</strong>, the matrix has full rank (det A = {p}). Back-substitution
            locks onto the single intersection point <strong>({xStr}, {yStr}, {zStr})</strong>.
          </>
        ) : regime === "infinite" ? (
          <>
            At <strong>k = 4</strong> and <strong>m = 8</strong>, Row 3 vanishes completely (<strong>0z = 0</strong>),
            freeing parameter <strong>z = t ∈ ℝ</strong>. The three planes meet in a sheaf along the line{" "}
            <strong>(x, y, z) = (1 + t, 2 − 2t, t)</strong>.
          </>
        ) : (
          <>
            At <strong>k = 4</strong> and <strong>m = {m} ≠ 8</strong>, Row 3 reads{" "}
            <strong>0z = {q}</strong> — an impossible contradiction! No two planes are parallel, yet their normals are
            coplanar (n₃ = n₁ + n₂), so they enclose a hollow <strong>triangular prism</strong> with no common point.
          </>
        )
      }
    >
      <div className="space-y-4">
        {/* Preset buttons & Sliders */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-line bg-surface-2/60 p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Quick Regime Presets</div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => applyPreset("unique")}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition ${regime === "unique" ? "bg-good-soft text-good ring-1 ring-good" : "bg-surface text-ink-2 hover:text-ink"}`}
              >
                Unique (k=5, m=10)
              </button>
              <button
                type="button"
                onClick={() => applyPreset("infinite")}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition ${regime === "infinite" ? "bg-brand-soft text-brand ring-1 ring-brand" : "bg-surface text-ink-2 hover:text-ink"}`}
              >
                Infinite Line (k=4, m=8)
              </button>
              <button
                type="button"
                onClick={() => applyPreset("inconsistent")}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition ${regime === "inconsistent" ? "bg-bad-soft text-bad ring-1 ring-bad" : "bg-surface text-ink-2 hover:text-ink"}`}
              >
                Inconsistent (k=4, m=11)
              </button>
            </div>
            <Slider label="Coefficient parameter k" value={k} min={-2} max={8} step={1} onChange={setK} />
            <Slider label="RHS constant m" value={m} min={2} max={14} step={1} onChange={setM} />
          </div>

          {/* Live 3D Geometry Schematic */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-line bg-surface p-3">
            <svg
              viewBox="0 0 300 170"
              className="w-full max-w-[300px]"
              role="img"
              aria-label={`3D plane intersection geometry schematic showing ${regimeBadge.label}`}
            >
              <rect x={0} y={0} width={300} height={170} rx={10} fill="var(--surface-2)" />
              {regime === "unique" ? (
                <g>
                  <polygon points="72,102 150,74 228,102 150,130" fill="var(--good-soft)" fillOpacity={0.75} stroke="var(--good)" strokeWidth={1.6} />
                  <polygon points="104,34 196,34 196,118 104,118" fill="var(--brand-soft)" fillOpacity={0.45} stroke="var(--brand)" strokeWidth={1.6} />
                  <polygon points="150,26 218,56 218,136 150,106" fill="var(--accent-soft)" fillOpacity={0.45} stroke="var(--accent)" strokeWidth={1.6} />
                  <circle cx={150} cy={96} r={6} fill="var(--bad)" />
                  <text x={150} y={154} fontSize={11} fontWeight={700} textAnchor="middle" fill="var(--good)">
                    Unique point ({xStr}, {yStr}, {zStr})
                  </text>
                </g>
              ) : regime === "infinite" ? (
                <g>
                  <polygon points="150,36 78,56 78,124 150,104" fill="var(--brand-soft)" fillOpacity={0.65} stroke="var(--brand)" strokeWidth={1.6} />
                  <polygon points="150,36 222,56 222,124 150,104" fill="var(--accent-soft)" fillOpacity={0.65} stroke="var(--accent)" strokeWidth={1.6} />
                  <polygon points="150,36 202,22 202,90 150,104" fill="var(--good-soft)" fillOpacity={0.55} stroke="var(--good)" strokeWidth={1.6} />
                  <line x1={150} y1={24} x2={150} y2={132} stroke="var(--bad)" strokeWidth={3.2} />
                  <text x={150} y={154} fontSize={11} fontWeight={700} textAnchor="middle" fill="var(--brand)">
                    Sheaf of 3 planes: line (1 + t, 2 − 2t, t)
                  </text>
                </g>
              ) : (
                <g>
                  <polygon points="106,50 186,32 214,82 134,100" fill="var(--brand-soft)" fillOpacity={0.55} stroke="var(--brand)" strokeWidth={1.6} />
                  <polygon points="106,50 134,100 116,132 88,82" fill="var(--accent-soft)" fillOpacity={0.55} stroke="var(--accent)" strokeWidth={1.6} />
                  <polygon points="134,100 214,82 196,114 116,132" fill="var(--bad-soft)" fillOpacity={0.65} stroke="var(--bad)" strokeWidth={1.6} />
                  <text x={150} y={154} fontSize={11} fontWeight={700} textAnchor="middle" fill="var(--bad)">
                    Triangular prism: 0z = {q} (no common point)
                  </text>
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Live Step-by-Step Row Reduction */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="overflow-x-auto rounded-xl border border-line bg-surface p-3 text-xs">
            <div className="mb-1.5 font-bold text-ink">1. Original System</div>
            <div className="space-y-1 font-mono tabular-nums text-ink-2">
              <div>[ 1,  1,  1 |  3 ]</div>
              <div>[ 1,  2,  3 |  5 ]</div>
              <div>[ 2,  3, {String(k).padStart(2, " ")} | {String(m).padStart(2, " ")} ]</div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-line bg-surface p-3 text-xs">
            <div className="mb-1.5 font-bold text-ink">2. R₂−R₁, R₃−2R₁</div>
            <div className="space-y-1 font-mono tabular-nums text-ink-2">
              <div>[ 1,  1,  1 |  3 ]</div>
              <div>[ 0,  1,  2 |  2 ]</div>
              <div>[ 0,  1, {String(k - 2).padStart(2, " ")} | {String(m - 6).padStart(2, " ")} ]</div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-line bg-surface p-3 text-xs">
            <div className="mb-1.5 font-bold text-ink">3. Row-Echelon (R₃−R₂)</div>
            <div className="space-y-1 font-mono tabular-nums text-ink-2">
              <div>[ 1,  1,  1 |  3 ]</div>
              <div>[ 0,  1,  2 |  2 ]</div>
              <div
                className="rounded px-1 py-0.5 font-bold"
                style={{ backgroundColor: regimeBadge.soft, color: regimeBadge.color }}
              >
                [ 0,  0, {String(p).padStart(2, " ")} | {String(q).padStart(2, " ")} ]
              </div>
            </div>
          </div>
        </div>

        {/* Summary Readouts */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Consistency Regime" value={regimeBadge.label} tone={regimeBadge.tone} />
          <Readout label="Bottom Row (k−4)z = m−8" value={`${p}z = ${q}`} tone={regimeBadge.tone} />
          <Readout
            label={regime === "infinite" ? "Parametric Line (t ∈ ℝ)" : "Solution (x, y, z)"}
            value={regime === "inconsistent" ? "∅ (no solution)" : `(${xStr}, ${yStr}, ${zStr})`}
            tone={regimeBadge.tone}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "argand-demoivre-roots",
    title: "Argand Plane & De Moivre nth-Root Visualizer",
    blurb: "Vary modulus r, principal argument θ, and root order n to see all nth roots form a regular n-gon on the Argand plane.",
    Component: ArgandDeMoivreRoots,
  },
  {
    id: "linear-system-3x3-inspector",
    title: "3×3 Linear System Consistency Inspector",
    blurb: "Adjust parameters k and m in a 3×3 augmented matrix to watch Gaussian elimination switch between unique, infinite-line, and inconsistent regimes.",
    Component: LinearSystem3x3Inspector,
  },
];

export default widgets;
