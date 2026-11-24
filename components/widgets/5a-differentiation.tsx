"use client";

import { useState } from "react";
import { PlaneGrid, Readout, Segmented, Slider, WidgetFrame, makePlane, type WidgetDef } from "./kit";

type CurveKey = "cubic" | "quartic" | "trig";

interface CurveSpec {
  key: CurveKey;
  label: string;
  formula: string;
  f: (x: number) => number;
  fp: (x: number) => number;
  fpp: (x: number) => number;
  yMin: number;
  yMax: number;
  dMin: number;
  dMax: number;
}

const CURVES: Record<CurveKey, CurveSpec> = {
  cubic: {
    key: "cubic",
    label: "x³ − 3x",
    formula: "f(x) = x³ − 3x,  f′(x) = 3x² − 3,  f″(x) = 6x",
    f: (x) => x * x * x - 3 * x,
    fp: (x) => 3 * x * x - 3,
    fpp: (x) => 6 * x,
    yMin: -4.5,
    yMax: 4.5,
    dMin: -12,
    dMax: 12,
  },
  quartic: {
    key: "quartic",
    label: "¼x⁴ (f″=0 trap!)",
    formula: "f(x) = ¼x⁴,  f′(x) = x³,  f″(x) = 3x²",
    f: (x) => 0.25 * x * x * x * x,
    fp: (x) => x * x * x,
    fpp: (x) => 3 * x * x,
    yMin: -1,
    yMax: 5.5,
    dMin: -10,
    dMax: 14,
  },
  trig: {
    key: "trig",
    label: "2 sin(x)",
    formula: "f(x) = 2 sin(x),  f′(x) = 2 cos(x),  f″(x) = −2 sin(x)",
    f: (x) => 2 * Math.sin(x),
    fp: (x) => 2 * Math.cos(x),
    fpp: (x) => -2 * Math.sin(x),
    yMin: -3,
    yMax: 3,
    dMin: -3,
    dMax: 3,
  },
};

function samplePath(
  fn: (x: number) => number,
  plane: ReturnType<typeof makePlane>,
  steps = 160,
): string {
  const parts: string[] = [];
  const { xMin, xMax, yMin, yMax, px, py } = plane;
  let penDown = false;
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    const y = fn(x);
    if (!Number.isFinite(y) || y < yMin - 2 || y > yMax + 2) {
      penDown = false;
      continue;
    }
    const clampedY = Math.max(yMin, Math.min(yMax, y));
    parts.push(`${penDown ? "L" : "M"} ${px(x).toFixed(1)} ${py(clampedY).toFixed(1)}`);
    penDown = true;
  }
  return parts.join(" ");
}

function fmtSigned(n: number, dp = 2): string {
  const clean = Math.abs(n) < 5e-4 ? 0 : n;
  const abs = Math.abs(clean).toFixed(dp);
  return clean < 0 ? `−${abs}` : abs;
}

function SecantConcavityWidget() {
  const [curveKey, setCurveKey] = useState<CurveKey>("cubic");
  const [x0, setX0] = useState<number>(-0.5);
  const [h, setH] = useState<number>(0.9);

  const curve = CURVES[curveKey];
  const xMin = -2.4;
  const xMax = 2.4;

  const topPlane = makePlane({
    width: 520,
    height: 220,
    xMin,
    xMax,
    yMin: curve.yMin,
    yMax: curve.yMax,
    pad: 26,
  });

  const botPlane = makePlane({
    width: 520,
    height: 160,
    xMin,
    xMax,
    yMin: curve.dMin,
    yMax: curve.dMax,
    pad: 26,
  });

  const y0 = curve.f(x0);
  const x1 = x0 + h;
  const y1 = curve.f(x1);
  const mSec = (y1 - y0) / h;
  const mTan = curve.fp(x0);
  const curv = curve.fpp(x0);

  // Detect stationary points & genuine inflection points (sign change in f'')
  const eps = 0.08;
  const nearZeroFp = Math.abs(mTan) < 0.14;
  const nearZeroFpp = Math.abs(curv) < 0.25;
  const fppLeft = curve.fpp(x0 - eps);
  const fppRight = curve.fpp(x0 + eps);
  const fppChangesSign = fppLeft * fppRight < 0;
  const fpLeft = curve.fp(x0 - eps);
  const fpRight = curve.fp(x0 + eps);

  let status = "";
  let statusTone: "brand" | "good" | "bad" | "ink" = "brand";
  if (nearZeroFp) {
    if (fpLeft > 0 && fpRight < 0) {
      status = "Local Maximum (f′: + → −)";
      statusTone = "good";
    } else if (fpLeft < 0 && fpRight > 0) {
      status = nearZeroFpp ? "Flat Local Min (f″=0, NOT inflection!)" : "Local Minimum (f′: − → +)";
      statusTone = "good";
    } else {
      status = "Stationary Point of Inflection";
      statusTone = "brand";
    }
  } else if (nearZeroFpp && fppChangesSign) {
    status = "Point of Inflection (f″ changes sign!)";
    statusTone = "good";
  } else {
    const mono = mTan > 0 ? "Increasing" : "Decreasing";
    const conc = curv > 0 ? "Concave Up ∪" : "Concave Down ∩";
    status = `${mono} · ${conc}`;
    statusTone = "ink";
  }

  // Tangent and secant line segments clipped nicely around P
  const span = 1.35;
  const tanX1 = Math.max(xMin, x0 - span);
  const tanX2 = Math.min(xMax, x0 + span);
  const tanY1 = y0 + mTan * (tanX1 - x0);
  const tanY2 = y0 + mTan * (tanX2 - x0);

  const secX1 = Math.max(xMin, Math.min(x0, x1) - 0.5);
  const secX2 = Math.min(xMax, Math.max(x0, x1) + 0.5);
  const secY1 = y0 + mSec * (secX1 - x0);
  const secY2 = y0 + mSec * (secX2 - x0);

  const fPath = samplePath(curve.f, topPlane);
  const fpPath = samplePath(curve.fp, botPlane);
  const fppPath = samplePath(curve.fpp, botPlane);

  const clampY = (y: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, y));

  return (
    <WidgetFrame
      title="Secant-to-Tangent & f / f′ / f″ Concavity Explorer"
      tryThis={[
        "On {{x^3 - 3x}}, slide {{x_0}} to {{-1}}, {{0}}, and {{1}} to watch roots of {{f'}} align with turning points and the zero of {{f''}} align with the point of inflection.",
        "Shrink step {{h}} from {{1.50}} down to {{0.05}} and watch the dashed secant chord lock onto the solid tangent line.",
        "Switch to {{(1/4)x^4}} and park {{x_0 = 0}}: both {{f'(0) = 0}} and {{f''(0) = 0}}, yet concavity stays positive — proving why {{f'' = 0}} alone is NOT an inflection point!",
      ]}
      caption={
        <span>
          <strong>{curve.formula}.</strong> At <strong>x₀ = {fmtSigned(x0)}</strong>, the secant slope (gap h = {h.toFixed(2)}) is{" "}
          <strong>{fmtSigned(mSec, 3)}</strong>, approaching the exact tangent gradient <strong>f′(x₀) = {fmtSigned(mTan, 3)}</strong>{" "}
          (difference {Math.abs(mSec - mTan).toFixed(3)}). Status: <strong>{status}</strong>.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Choose function"
            value={curveKey}
            onChange={(k) => {
              setCurveKey(k);
              setX0(k === "quartic" ? 0 : -0.5);
            }}
            options={[
              { value: "cubic", label: CURVES.cubic.label },
              { value: "quartic", label: CURVES.quartic.label },
              { value: "trig", label: CURVES.trig.label },
            ]}
          />
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setH(0.05)}
              className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-xs font-bold text-ink hover:border-brand hover:text-brand"
            >
              Snap h → 0.05
            </button>
            <button
              type="button"
              onClick={() => setX0(curveKey === "trig" ? 1.55 : curveKey === "cubic" ? -1 : 0)}
              className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-xs font-bold text-ink hover:border-brand hover:text-brand"
            >
              Jump to key point
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider label="Point x₀" value={x0} min={-2} max={2} step={0.05} onChange={setX0} format={(v) => fmtSigned(v, 2)} />
          <Slider label="Secant step h" value={h} min={0.05} max={1.5} step={0.05} onChange={setH} format={(v) => v.toFixed(2)} />
        </div>

        <div className="space-y-2">
          <svg
            viewBox={`0 0 ${topPlane.width} ${topPlane.height}`}
            role="img"
            aria-label="Graph of f(x) with live secant line and tangent line at x0"
            className="h-auto w-full rounded-xl border border-line bg-surface"
          >
            <defs>
              <clipPath id="top-plot-clip">
                <rect
                  x={topPlane.pad}
                  y={topPlane.pad}
                  width={topPlane.width - 2 * topPlane.pad}
                  height={topPlane.height - 2 * topPlane.pad}
                />
              </clipPath>
            </defs>
            <PlaneGrid plane={topPlane} step={1} />
            <g clipPath="url(#top-plot-clip)">
              <line
                x1={topPlane.px(x0)}
                x2={topPlane.px(x0)}
                y1={topPlane.pad}
                y2={topPlane.height - topPlane.pad}
                stroke="#94a3b8"
                strokeWidth={1.2}
                strokeDasharray="4 4"
              />
              <path d={fPath} fill="none" stroke="#1e293b" strokeWidth={2.6} />
              {/* Δx / Δy secant triangle */}
              {x1 <= xMax + 0.5 ? (
                <g opacity={0.75}>
                  <line
                    x1={topPlane.px(x0)}
                    y1={topPlane.py(clampY(y0, curve.yMin - 1, curve.yMax + 1))}
                    x2={topPlane.px(x1)}
                    y2={topPlane.py(clampY(y0, curve.yMin - 1, curve.yMax + 1))}
                    stroke="#0891b2"
                    strokeWidth={1.3}
                    strokeDasharray="3 3"
                  />
                  <line
                    x1={topPlane.px(x1)}
                    y1={topPlane.py(clampY(y0, curve.yMin - 1, curve.yMax + 1))}
                    x2={topPlane.px(x1)}
                    y2={topPlane.py(clampY(y1, curve.yMin - 1, curve.yMax + 1))}
                    stroke="#0891b2"
                    strokeWidth={1.3}
                    strokeDasharray="3 3"
                  />
                </g>
              ) : null}
              {/* Secant line */}
              <line
                x1={topPlane.px(secX1)}
                y1={topPlane.py(secY1)}
                x2={topPlane.px(secX2)}
                y2={topPlane.py(secY2)}
                stroke="#0891b2"
                strokeWidth={2}
                strokeDasharray="6 4"
              />
              {/* Exact tangent line */}
              <line
                x1={topPlane.px(tanX1)}
                y1={topPlane.py(tanY1)}
                x2={topPlane.px(tanX2)}
                y2={topPlane.py(tanY2)}
                stroke="#4f46e5"
                strokeWidth={2.4}
              />
              {/* Point Q(x0 + h) */}
              {x1 >= xMin && x1 <= xMax && y1 >= curve.yMin && y1 <= curve.yMax ? (
                <circle cx={topPlane.px(x1)} cy={topPlane.py(y1)} r={4.5} fill="#0891b2" stroke="#ffffff" strokeWidth={1.5} />
              ) : null}
              {/* Point P(x0) */}
              <circle
                cx={topPlane.px(x0)}
                cy={topPlane.py(clampY(y0, curve.yMin, curve.yMax))}
                r={5.5}
                fill="#4f46e5"
                stroke="#ffffff"
                strokeWidth={1.8}
              />
            </g>
            <text x={34} y={20} fontSize={11} fontWeight={700} fill="#1e293b">
              f(x) — Solid: Tangent (f′) · Dashed: Secant (Δy/h)
            </text>
          </svg>

          <svg
            viewBox={`0 0 ${botPlane.width} ${botPlane.height}`}
            role="img"
            aria-label="Synchronized graphs of first derivative f prime and second derivative f double prime"
            className="h-auto w-full rounded-xl border border-line bg-surface"
          >
            <defs>
              <clipPath id="bot-plot-clip">
                <rect
                  x={botPlane.pad}
                  y={botPlane.pad}
                  width={botPlane.width - 2 * botPlane.pad}
                  height={botPlane.height - 2 * botPlane.pad}
                />
              </clipPath>
            </defs>
            <PlaneGrid plane={botPlane} step={curveKey === "trig" ? 1 : 4} labels={false} />
            <g clipPath="url(#bot-plot-clip)">
              <line
                x1={botPlane.px(x0)}
                x2={botPlane.px(x0)}
                y1={botPlane.pad}
                y2={botPlane.height - botPlane.pad}
                stroke="#94a3b8"
                strokeWidth={1.4}
                strokeDasharray="4 4"
              />
              <path d={fpPath} fill="none" stroke="#0891b2" strokeWidth={2.4} />
              <path d={fppPath} fill="none" stroke="#d97706" strokeWidth={2.2} strokeDasharray="5 3" />
              <circle
                cx={botPlane.px(x0)}
                cy={botPlane.py(clampY(mTan, curve.dMin, curve.dMax))}
                r={4.5}
                fill="#0891b2"
                stroke="#ffffff"
                strokeWidth={1.4}
              />
              <circle
                cx={botPlane.px(x0)}
                cy={botPlane.py(clampY(curv, curve.dMin, curve.dMax))}
                r={4.5}
                fill="#d97706"
                stroke="#ffffff"
                strokeWidth={1.4}
              />
            </g>
            <text x={34} y={20} fontSize={11} fontWeight={700} fill="#0891b2">
              Solid teal: f′(x)
            </text>
            <text x={150} y={20} fontSize={11} fontWeight={700} fill="#b45309">
              Dashed amber: f″(x)
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Secant Δy/h" value={fmtSigned(mSec, 3)} tone="ink" />
          <Readout label="Tangent f′(x₀)" value={fmtSigned(mTan, 3)} tone="brand" />
          <Readout label="Concavity f″(x₀)" value={fmtSigned(curv, 3)} tone={curv >= 0 ? "good" : "bad"} />
          <Readout label="Feature" value={<span className="text-sm leading-tight">{status}</span>} tone={statusTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

type OptMode = "box" | "cylinder";

function OptimizationBuilderWidget() {
  const [mode, setMode] = useState<OptMode>("box");
  const [cutX, setCutX] = useState<number>(1.2);
  const [rad, setRad] = useState<number>(2.6);

  // Box: 12 x 12 sheet, V(x) = x(12 - 2x)^2, optimal x* = 2, V* = 128
  const boxSide = 12;
  const boxV = (x: number) => x * (boxSide - 2 * x) * (boxSide - 2 * x);
  const boxVp = (x: number) => 12 * (x - 2) * (x - 6);
  const boxCurV = boxV(cutX);
  const boxCurVp = boxVp(cutX);
  const boxOptX = 2;
  const boxOptV = 128;

  // Cylinder: fixed V = 128*pi (~402.12 cm^3), h = 128 / r^2, A(r) = 2*pi*r^2 + 256*pi/r
  // Optimal r* = 4, h* = 8 (= 2r*), A* = 96*pi (~301.59 cm^2)
  const cylA = (r: number) => 2 * Math.PI * r * r + (256 * Math.PI) / r;
  const cylAp = (r: number) => 4 * Math.PI * r - (256 * Math.PI) / (r * r);
  const cylH = (r: number) => 128 / (r * r);
  const cylCurA = cylA(rad);
  const cylCurAp = cylAp(rad);
  const cylCurH = cylH(rad);
  const cylOptR = 4;
  const cylOptA = 96 * Math.PI;

  const isBox = mode === "box";
  const nearOpt = isBox ? Math.abs(cutX - boxOptX) < 0.08 : Math.abs(rad - cylOptR) < 0.11;

  // Objective graph plane
  const plotPlane = makePlane({
    width: 290,
    height: 220,
    xMin: isBox ? 0 : 1.2,
    xMax: isBox ? 6 : 8.2,
    yMin: isBox ? 0 : 250,
    yMax: isBox ? 150 : 760,
    pad: 30,
  });

  const objFn = isBox ? boxV : cylA;
  const curVar = isBox ? cutX : rad;
  const curVal = isBox ? boxCurV : cylCurA;
  const curSlope = isBox ? boxCurVp : cylCurAp;
  const optVar = isBox ? boxOptX : cylOptR;
  const optVal = isBox ? boxOptV : cylOptA;

  const objPath = samplePath(objFn, plotPlane, 140);
  const tanHalf = isBox ? 1.1 : 1.2;
  const tx1 = Math.max(plotPlane.xMin, curVar - tanHalf);
  const tx2 = Math.min(plotPlane.xMax, curVar + tanHalf);
  const ty1 = curVal + curSlope * (tx1 - curVar);
  const ty2 = curVal + curSlope * (tx2 - curVar);

  // Blueprint / 2D cylinder scale
  const sheetPx = 156;
  const sheetOriginX = 67;
  const sheetOriginY = 32;
  const cutPx = (cutX / boxSide) * sheetPx;

  // Cylinder visual scaled cleanly inside 290x220
  const cylMaxW = 160;
  const cylDrawW = Math.min(cylMaxW, rad * 18);
  const cylDrawH = Math.min(138, Math.max(16, cylCurH * 8.5));
  const cylCx = 145;
  const cylBotY = 186;
  const cylTopY = cylBotY - cylDrawH;

  return (
    <WidgetFrame
      title="Optimization Builder: Open Box (Max Volume) & Cylinder (Min Area)"
      tryThis={[
        "In **Open Box** mode, slide corner cut {{x}} until the tangent line on {{V(x)}} turns completely flat ({{dV/dx = 0}}): verify it locks onto {{x = 2}} cm and {{V = 128}} cm³.",
        "Switch to **Closed Cylinder** (fixed {{V = 128 pi}} cm³) and drag radius {{r}} to minimise metal area {{A(r)}}: notice how at {{dA/dr = 0}} the optimal height equals the diameter ({{h = 2r = 8}} cm)!",
      ]}
      caption={
        isBox ? (
          <span>
            <strong>Open Box from 12 × 12 cm sheet:</strong> Base = {(12 - 2 * cutX).toFixed(1)} × {(12 - 2 * cutX).toFixed(1)} cm, height ={" "}
            {cutX.toFixed(2)} cm, volume <strong>V = {boxCurV.toFixed(1)} cm³</strong> ({((boxCurV / boxOptV) * 100).toFixed(1)}% of max).
            {nearOpt ? " Exact analytical peak reached: dV/dx = 0 at x = 2 cm!" : " Move x in the direction of the tangent slope to climb toward dV/dx = 0."}
          </span>
        ) : (
          <span>
            <strong>Closed Cylinder (V = 128π cm³):</strong> Radius r = {rad.toFixed(2)} cm, height h = {cylCurH.toFixed(2)} cm, aspect ratio{" "}
            <strong>h / r = {(cylCurH / rad).toFixed(2)}</strong>.
            {nearOpt ? " Exact minimum reached: dA/dr = 0 at r = 4 cm, h = 8 cm = 2r!" : " Slide r toward dA/dr = 0 to eliminate excess lid or wall metal."}
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Choose optimization model"
            value={mode}
            onChange={setMode}
            options={[
              { value: "box", label: "Open Box (Max V)" },
              { value: "cylinder", label: "Closed Cylinder (Min A)" },
            ]}
          />
          <button
            type="button"
            onClick={() => (isBox ? setCutX(boxOptX) : setRad(cylOptR))}
            className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-xs font-bold text-ink hover:border-brand hover:text-brand"
          >
            Jump to exact optimum ({isBox ? "x = 2" : "r = 4"})
          </button>
        </div>

        {isBox ? (
          <Slider
            label="Corner cut-out side x (cm)"
            value={cutX}
            min={0.2}
            max={5.8}
            step={0.05}
            onChange={setCutX}
            format={(v) => `${v.toFixed(2)} cm`}
          />
        ) : (
          <Slider
            label="Cylinder base radius r (cm)"
            value={rad}
            min={1.6}
            max={7.8}
            step={0.05}
            onChange={setRad}
            format={(v) => `${v.toFixed(2)} cm`}
          />
        )}

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* Left SVG: Physical Blueprint / Silhouette */}
          <svg
            viewBox="0 0 290 220"
            role="img"
            aria-label={isBox ? "12 by 12 cm square sheet with corner cut-outs of side x" : "Cross section of closed cylinder showing live radius and height"}
            className="h-auto w-full rounded-xl border border-line bg-surface"
          >
            {isBox ? (
              <g>
                <text x={145} y={20} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#334155">
                  12 × 12 cm Cardboard Net (cut x = {cutX.toFixed(2)} cm)
                </text>
                {/* Full sheet */}
                <rect
                  x={sheetOriginX}
                  y={sheetOriginY}
                  width={sheetPx}
                  height={sheetPx}
                  fill="#e0e7ff"
                  stroke="#4f46e5"
                  strokeWidth={2}
                />
                {/* Inner folded base */}
                <rect
                  x={sheetOriginX + cutPx}
                  y={sheetOriginY + cutPx}
                  width={Math.max(0, sheetPx - 2 * cutPx)}
                  height={Math.max(0, sheetPx - 2 * cutPx)}
                  fill="#c7d2fe"
                  stroke="#4338ca"
                  strokeWidth={1.6}
                  strokeDasharray="4 3"
                />
                {/* Four corner cuts */}
                {[
                  [sheetOriginX, sheetOriginY],
                  [sheetOriginX + sheetPx - cutPx, sheetOriginY],
                  [sheetOriginX, sheetOriginY + sheetPx - cutPx],
                  [sheetOriginX + sheetPx - cutPx, sheetOriginY + sheetPx - cutPx],
                ].map(([cx, cy], idx) => (
                  <rect
                    key={idx}
                    x={cx}
                    y={cy}
                    width={cutPx}
                    height={cutPx}
                    fill="#fecdd3"
                    stroke="#e11d48"
                    strokeWidth={1.5}
                  />
                ))}
                <text x={145} y={sheetOriginY + sheetPx / 2 + 4} textAnchor="middle" fontSize={11} fontWeight={700} fill="#312e81">
                  Base {(12 - 2 * cutX).toFixed(1)} × {(12 - 2 * cutX).toFixed(1)}
                </text>
                <text x={145} y={208} textAnchor="middle" fontSize={10.5} fill="#64748b">
                  Pink corners removed · Fold flaps up to height x
                </text>
              </g>
            ) : (
              <g>
                <text x={145} y={20} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#334155">
                  Closed Can (V = 128π cm³ fixed)
                </text>
                {/* Cylinder body */}
                <rect
                  x={cylCx - cylDrawW / 2}
                  y={cylTopY}
                  width={cylDrawW}
                  height={cylDrawH}
                  fill="#cffafe"
                  stroke="#0891b2"
                  strokeWidth={2}
                />
                <ellipse
                  cx={cylCx}
                  cy={cylBotY}
                  rx={cylDrawW / 2}
                  ry={Math.min(13, cylDrawW * 0.14)}
                  fill="#a5f3fc"
                  stroke="#0891b2"
                  strokeWidth={2}
                />
                <ellipse
                  cx={cylCx}
                  cy={cylTopY}
                  rx={cylDrawW / 2}
                  ry={Math.min(13, cylDrawW * 0.14)}
                  fill="#ecfeff"
                  stroke="#0891b2"
                  strokeWidth={2}
                />
                {/* Radius marker */}
                <line x1={cylCx} y1={cylTopY} x2={cylCx + cylDrawW / 2} y2={cylTopY} stroke="#4f46e5" strokeWidth={2} />
                <text x={cylCx + cylDrawW / 4} y={cylTopY - 8} textAnchor="middle" fontSize={11} fontWeight={700} fill="#4f46e5">
                  r = {rad.toFixed(1)}
                </text>
                {/* Height label */}
                <text x={cylCx + cylDrawW / 2 + 8} y={cylTopY + cylDrawH / 2 + 4} fontSize={11} fontWeight={700} fill="#0e7490">
                  h = {cylCurH.toFixed(1)}
                </text>
                <text x={145} y={212} textAnchor="middle" fontSize={10.5} fill={nearOpt ? "#16a34a" : "#64748b"} fontWeight={nearOpt ? 700 : 400}>
                  {nearOpt ? "Optimal square profile: h = 2r = 8.0 cm!" : `Diameter 2r = ${(2 * rad).toFixed(1)} cm vs h = ${cylCurH.toFixed(1)} cm`}
                </text>
              </g>
            )}
          </svg>

          {/* Right SVG: Live Objective Curve + Tangent Line */}
          <svg
            viewBox={`0 0 ${plotPlane.width} ${plotPlane.height}`}
            role="img"
            aria-label={isBox ? "Volume curve V(x) showing live tangent slope and analytical maximum at x = 2" : "Surface area curve A(r) showing live tangent slope and analytical minimum at r = 4"}
            className="h-auto w-full rounded-xl border border-line bg-surface"
          >
            <defs>
              <clipPath id="opt-plot-clip">
                <rect
                  x={plotPlane.pad}
                  y={plotPlane.pad}
                  width={plotPlane.width - 2 * plotPlane.pad}
                  height={plotPlane.height - 2 * plotPlane.pad}
                />
              </clipPath>
            </defs>
            <PlaneGrid plane={plotPlane} step={isBox ? 2 : 2} labels={false} />
            <g clipPath="url(#opt-plot-clip)">
              {/* Analytical optimum dashed drop-line */}
              <line
                x1={plotPlane.px(optVar)}
                x2={plotPlane.px(optVar)}
                y1={plotPlane.pad}
                y2={plotPlane.height - plotPlane.pad}
                stroke="#16a34a"
                strokeWidth={1.3}
                strokeDasharray="4 4"
              />
              {/* Curve */}
              <path d={objPath} fill="none" stroke="#1e293b" strokeWidth={2.5} />
              {/* Tangent line at current variable */}
              <line
                x1={plotPlane.px(tx1)}
                y1={plotPlane.py(ty1)}
                x2={plotPlane.px(tx2)}
                y2={plotPlane.py(ty2)}
                stroke={nearOpt ? "#16a34a" : "#4f46e5"}
                strokeWidth={2.4}
              />
              {/* Optimum point marker */}
              <circle cx={plotPlane.px(optVar)} cy={plotPlane.py(optVal)} r={4.5} fill="#ffffff" stroke="#16a34a" strokeWidth={2.2} />
              {/* Live point marker */}
              <circle
                cx={plotPlane.px(curVar)}
                cy={plotPlane.py(Math.max(plotPlane.yMin, Math.min(plotPlane.yMax, curVal)))}
                r={5.5}
                fill={nearOpt ? "#16a34a" : "#4f46e5"}
                stroke="#ffffff"
                strokeWidth={1.6}
              />
            </g>
            <text x={34} y={20} fontSize={11} fontWeight={700} fill="#334155">
              {isBox ? "V(x) = x(12 − 2x)²  ·  Peak at x = 2" : "A(r) = 2πr² + 256π/r  ·  Min at r = 4"}
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label={isBox ? "Cut x" : "Radius r"} value={`${curVar.toFixed(2)} cm`} tone="ink" />
          <Readout
            label={isBox ? "Volume V(x)" : "Area A(r)"}
            value={isBox ? `${boxCurV.toFixed(1)} cm³` : `${cylCurA.toFixed(1)} cm²`}
            tone={nearOpt ? "good" : "brand"}
          />
          <Readout
            label={isBox ? "Slope dV/dx" : "Slope dA/dr"}
            value={fmtSigned(curSlope, 1)}
            tone={Math.abs(curSlope) < 6 ? "good" : "ink"}
          />
          <Readout
            label="Analytical Target"
            value={isBox ? "128.0 cm³ (x=2)" : "301.6 cm² (r=4)"}
            tone={nearOpt ? "good" : "ink"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "secant-tangent-concavity",
    title: "Secant-to-Tangent & f / f′ / f″ Concavity Plotter",
    blurb: "Slide x₀ and shrink h → 0 to see the secant lock onto the tangent while synchronized f′ and f″ graphs flag turning points, inflections, and the x⁴ trap.",
    Component: SecantConcavityWidget,
  },
  {
    id: "optimization-box-cylinder",
    title: "Optimization Box & Cylinder Builder",
    blurb: "Vary the box corner cut-out or cylinder radius to watch the tangent line flatten out to slope 0 right at the exact analytical optimum.",
    Component: OptimizationBuilderWidget,
  },
];

export default widgets;
