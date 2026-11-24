"use client";

import { useMemo, useState } from "react";
import { M, PlaneGrid, Readout, Segmented, Slider, WidgetFrame, makePlane, type WidgetDef } from "./kit";

// ============================================================================
// WIDGET 1: Riemann Sum, Area & Volume of Revolution Visualizer
// ============================================================================

type CurveKey = "quad" | "sqrt" | "frustum" | "wave";
type RuleKey = "left" | "mid" | "right";
type ViewKey = "area" | "volume";

interface CurveSpec {
  id: CurveKey;
  label: string;
  formula: string;
  f: (x: number) => number;
  exactArea: number;
  exactAreaText: string;
  exactVolOverPi: number;
  exactVolText: string;
}

const CURVES: Record<CurveKey, CurveSpec> = {
  quad: {
    id: "quad",
    label: "x²/2",
    formula: "y = x^2/2",
    f: (x) => (x * x) / 2,
    exactArea: 4 / 3,
    exactAreaText: "4/3",
    exactVolOverPi: 8 / 5,
    exactVolText: "8pi/5",
  },
  sqrt: {
    id: "sqrt",
    label: "√x",
    formula: "y = sqrt(x)",
    f: (x) => Math.sqrt(Math.max(0, x)),
    exactArea: (4 * Math.SQRT2) / 3,
    exactAreaText: "(4 sqrt(2))/3",
    exactVolOverPi: 2,
    exactVolText: "2pi",
  },
  frustum: {
    id: "frustum",
    label: "0.75x + 0.5",
    formula: "y = 0.75x + 0.5",
    f: (x) => 0.75 * x + 0.5,
    exactArea: 2.5,
    exactAreaText: "5/2",
    exactVolOverPi: 3.5,
    exactVolText: "7pi/2",
  },
  wave: {
    id: "wave",
    label: "1 + 0.6 sin(πx/2)",
    formula: "y = 1 + 0.6 sin(pi x / 2)",
    f: (x) => 1 + 0.6 * Math.sin((Math.PI * x) / 2),
    exactArea: 2 + 2.4 / Math.PI,
    exactAreaText: "2 + 2.4/pi",
    exactVolOverPi: 2.36 + 4.8 / Math.PI,
    exactVolText: "(2.36 + 4.8/pi)pi",
  },
};

function RiemannVolumeWidget() {
  const [curveKey, setCurveKey] = useState<CurveKey>("quad");
  const [view, setView] = useState<ViewKey>("volume");
  const [rule, setRule] = useState<RuleKey>("mid");
  const [n, setN] = useState<number>(8);

  const curve = CURVES[curveKey];
  const a = 0;
  const b = 2;

  const { slices, riemannArea, diskVolOverPi, upperPath, lowerPath, areaFillPath } = useMemo(() => {
    const dx = (b - a) / n;
    const sliceList: { x0: number; x1: number; xs: number; h: number }[] = [];
    let areaSum = 0;
    let volSum = 0;
    for (let i = 0; i < n; i++) {
      const x0 = a + i * dx;
      const x1 = x0 + dx;
      const xs = rule === "left" ? x0 : rule === "right" ? x1 : (x0 + x1) / 2;
      const h = curve.f(xs);
      sliceList.push({ x0, x1, xs, h });
      areaSum += h * dx;
      volSum += h * h * dx;
    }

    const plane2d = makePlane({ width: 440, height: 240, xMin: -0.25, xMax: 2.35, yMin: -0.35, yMax: 2.35, pad: 26 });
    const plane3d = makePlane({ width: 440, height: 240, xMin: -0.25, xMax: 2.35, yMin: -2.35, yMax: 2.35, pad: 26 });
    const pl = view === "volume" ? plane3d : plane2d;

    const samples = 80;
    const ptsUpper: string[] = [];
    const ptsLower: string[] = [];
    for (let i = 0; i <= samples; i++) {
      const x = a + ((b - a) * i) / samples;
      const y = curve.f(x);
      ptsUpper.push(`${i === 0 ? "M" : "L"} ${pl.px(x).toFixed(1)} ${pl.py(y).toFixed(1)}`);
      ptsLower.push(`${i === 0 ? "M" : "L"} ${pl.px(x).toFixed(1)} ${pl.py(-y).toFixed(1)}`);
    }
    const fill = `${ptsUpper.join(" ")} L ${pl.px(b).toFixed(1)} ${pl.py(0).toFixed(1)} L ${pl.px(a).toFixed(1)} ${pl.py(0).toFixed(1)} Z`;

    return {
      slices: sliceList,
      riemannArea: areaSum,
      diskVolOverPi: volSum,
      upperPath: ptsUpper.join(" "),
      lowerPath: ptsLower.join(" "),
      areaFillPath: fill,
    };
  }, [curve, n, rule, view]);

  const plane = useMemo(
    () =>
      view === "volume"
        ? makePlane({ width: 440, height: 240, xMin: -0.25, xMax: 2.35, yMin: -2.35, yMax: 2.35, pad: 26 })
        : makePlane({ width: 440, height: 240, xMin: -0.25, xMax: 2.35, yMin: -0.35, yMax: 2.35, pad: 26 }),
    [view],
  );

  const areaErrPct = Math.abs((riemannArea - curve.exactArea) / curve.exactArea) * 100;
  const volErrPct = Math.abs((diskVolOverPi - curve.exactVolOverPi) / curve.exactVolOverPi) * 100;
  const rxFactor = 0.24;

  return (
    <WidgetFrame
      title="Riemann Sum, Area & Volume of Revolution Visualizer"
      tryThis={[
        "Switch between **2D Area** and **3D Volume Disks** and drag {{n}} from {{2}} up to {{32}} to watch the stepped stack converge to the exact solid.",
        "Compare **Left**, **Midpoint**, and **Right** sums on {{y = x^2/2}} — notice why **Midpoint** beats Left/Right even at small {{n}}!",
        "Check {{y = sqrt(x)}} on {{[0, 2]}}: the exact volume about the {{x}}-axis is {{2pi}} regardless of the square root!",
      ]}
      caption={
        <span>
          Integrating <M>{curve.formula}</M> over <M>{"[0, 2]"}</M> with <strong>{n}</strong> {rule} slices gives area{" "}
          <strong>{riemannArea.toFixed(4)}</strong> (error {areaErrPct.toFixed(2)}%) and revolution volume{" "}
          <strong>{diskVolOverPi.toFixed(4)}π</strong> ≈ {(diskVolOverPi * Math.PI).toFixed(3)} (exact{" "}
          <M>{curve.exactVolText}</M>, error {volErrPct.toFixed(2)}%).
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Segmented
            label="Choose curve"
            value={curveKey}
            onChange={setCurveKey}
            options={[
              { value: "quad", label: "x²/2" },
              { value: "sqrt", label: "√x" },
              { value: "frustum", label: "0.75x + 0.5" },
              { value: "wave", label: "1 + 0.6 sin" },
            ]}
          />
          <Segmented
            label="View mode"
            value={view}
            onChange={setView}
            options={[
              { value: "area", label: "2D Area" },
              { value: "volume", label: "3D Volume Disks" },
            ]}
          />
          <Segmented
            label="Sample point rule"
            value={rule}
            onChange={setRule}
            options={[
              { value: "left", label: "Left" },
              { value: "mid", label: "Midpoint" },
              { value: "right", label: "Right" },
            ]}
          />
        </div>

        <Slider
          label="Number of slices n"
          value={n}
          min={2}
          max={32}
          step={1}
          onChange={setN}
          format={(v) => `${v} slices (Δx = ${(2 / v).toFixed(3)})`}
        />

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 440 240"
            className="h-auto w-full"
            role="img"
            aria-label={`Interactive ${view === "volume" ? "volume of revolution disk" : "Riemann sum area"} plot for ${curve.label} with ${n} ${rule} slices`}
          >
            <PlaneGrid plane={plane} step={1} labels />

            {view === "area" ? (
              <g>
                <path d={areaFillPath} fill="var(--brand)" fillOpacity={0.12} />
                {slices.map((s, idx) => {
                  const xLeft = plane.px(s.x0);
                  const xRight = plane.px(s.x1);
                  const yTop = plane.py(s.h);
                  const yZero = plane.py(0);
                  return (
                    <g key={idx}>
                      <rect
                        x={xLeft}
                        y={Math.min(yTop, yZero)}
                        width={Math.max(1, xRight - xLeft)}
                        height={Math.abs(yZero - yTop)}
                        fill="var(--accent)"
                        fillOpacity={0.28}
                        stroke="var(--accent)"
                        strokeWidth={1.1}
                      />
                      <circle cx={plane.px(s.xs)} cy={yTop} r={n <= 16 ? 2.6 : 1.7} fill="var(--brand)" />
                    </g>
                  );
                })}
                <path d={upperPath} fill="none" stroke="var(--brand)" strokeWidth={2.8} strokeLinecap="round" />
              </g>
            ) : (
              <g>
                {slices.map((s, idx) => {
                  const xLeft = plane.px(s.x0);
                  const xRight = plane.px(s.x1);
                  const yMid = plane.py(0);
                  const ry = Math.max(0.5, Math.abs(plane.py(s.h) - yMid));
                  const rx = Math.min(18, ry * rxFactor);
                  return (
                    <g key={idx}>
                      <ellipse
                        cx={xLeft}
                        cy={yMid}
                        rx={rx}
                        ry={ry}
                        fill="var(--accent)"
                        fillOpacity={0.14}
                        stroke="var(--accent)"
                        strokeOpacity={0.55}
                        strokeWidth={0.9}
                      />
                      <rect
                        x={xLeft}
                        y={yMid - ry}
                        width={Math.max(1, xRight - xLeft)}
                        height={2 * ry}
                        fill="var(--accent)"
                        fillOpacity={0.22}
                        stroke="var(--accent)"
                        strokeWidth={0.85}
                      />
                      <ellipse
                        cx={xRight}
                        cy={yMid}
                        rx={rx}
                        ry={ry}
                        fill="var(--accent)"
                        fillOpacity={0.3}
                        stroke="var(--accent)"
                        strokeWidth={1.1}
                      />
                    </g>
                  );
                })}
                <path d={upperPath} fill="none" stroke="var(--brand)" strokeWidth={2.6} strokeLinecap="round" />
                <path d={lowerPath} fill="none" stroke="var(--brand)" strokeWidth={1.8} strokeDasharray="5 3" strokeLinecap="round" />
                <line
                  x1={plane.px(-0.2)}
                  x2={plane.px(2.3)}
                  y1={plane.py(0)}
                  y2={plane.py(0)}
                  stroke="var(--ink)"
                  strokeWidth={1.4}
                  strokeDasharray="4 4"
                />
              </g>
            )}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Riemann Area" value={riemannArea.toFixed(4)} tone="ink" />
          <Readout label="Exact Area" value={curve.exactArea.toFixed(4)} tone="good" />
          <Readout label="Disk Sum V/π" value={`${diskVolOverPi.toFixed(4)}π`} tone="brand" />
          <Readout label="Exact V = π∫y²dx" value={`${curve.exactVolOverPi.toFixed(4)}π`} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: [HL] Maclaurin Polynomial Approximation Slider
// ============================================================================

type MaclaurinKey = "sin" | "cos" | "exp" | "ln1px";

interface MaclaurinSpec {
  id: MaclaurinKey;
  label: string;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  probeMin: number;
  probeMax: number;
  defaultProbe: number;
  f: (x: number) => number;
  coeff: (k: number) => number;
  intervalNote: string;
}

const FACTORIALS = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
const SUB_DIGITS = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];

const MACLAURIN_FUNCS: Record<MaclaurinKey, MaclaurinSpec> = {
  sin: {
    id: "sin",
    label: "sin x",
    xMin: -4.5,
    xMax: 4.5,
    yMin: -2.6,
    yMax: 2.6,
    probeMin: -3.2,
    probeMax: 3.2,
    defaultProbe: 1.5,
    f: (x) => Math.sin(x),
    coeff: (k) => (k % 2 === 1 ? (((k - 1) / 2) % 2 === 0 ? 1 : -1) / FACTORIALS[k] : 0),
    intervalNote: "Converges for all real x ∈ ℝ",
  },
  cos: {
    id: "cos",
    label: "cos x",
    xMin: -4.5,
    xMax: 4.5,
    yMin: -2.6,
    yMax: 2.6,
    probeMin: -3.2,
    probeMax: 3.2,
    defaultProbe: 1.5,
    f: (x) => Math.cos(x),
    coeff: (k) => (k % 2 === 0 ? ((k / 2) % 2 === 0 ? 1 : -1) / FACTORIALS[k] : 0),
    intervalNote: "Converges for all real x ∈ ℝ",
  },
  exp: {
    id: "exp",
    label: "eˣ",
    xMin: -3.0,
    xMax: 3.0,
    yMin: -1.5,
    yMax: 8.5,
    probeMin: -2.2,
    probeMax: 2.2,
    defaultProbe: 1.5,
    f: (x) => Math.exp(x),
    coeff: (k) => 1 / FACTORIALS[k],
    intervalNote: "Converges for all real x ∈ ℝ",
  },
  ln1px: {
    id: "ln1px",
    label: "ln(1 + x)",
    xMin: -1.5,
    xMax: 2.5,
    yMin: -2.6,
    yMax: 2.2,
    probeMin: -0.8,
    probeMax: 1.8,
    defaultProbe: 0.7,
    f: (x) => (x > -1 ? Math.log(1 + x) : NaN),
    coeff: (k) => (k === 0 ? 0 : (k % 2 === 1 ? 1 : -1) / k),
    intervalNote: "Converges ONLY for −1 < x ≤ 1 (diverges for x > 1!)",
  },
};

function evalMaclaurin(spec: MaclaurinSpec, degree: number, x: number): number {
  let sum = 0;
  let xp = 1;
  for (let k = 0; k <= degree; k++) {
    sum += spec.coeff(k) * xp;
    xp *= x;
  }
  return sum;
}

function formatMaclaurinFormula(fnKey: MaclaurinKey, degree: number): string {
  const parts: string[] = [];
  for (let k = 0; k <= degree; k++) {
    if (fnKey === "sin") {
      if (k % 2 === 0) continue;
      const sign = ((k - 1) / 2) % 2 === 0 ? "+" : "-";
      const term = k === 1 ? "x" : `x^${k}/(${k}!)`;
      parts.push(parts.length === 0 ? term : `${sign} ${term}`);
    } else if (fnKey === "cos") {
      if (k % 2 === 1) continue;
      const sign = (k / 2) % 2 === 0 ? "+" : "-";
      const term = k === 0 ? "1" : `x^${k}/(${k}!)`;
      parts.push(parts.length === 0 ? term : `${sign} ${term}`);
    } else if (fnKey === "exp") {
      const term = k === 0 ? "1" : k === 1 ? "x" : `x^${k}/(${k}!)`;
      parts.push(parts.length === 0 ? term : `+ ${term}`);
    } else {
      if (k === 0) continue;
      const sign = k % 2 === 1 ? "+" : "-";
      const term = k === 1 ? "x" : `x^${k}/${k}`;
      parts.push(parts.length === 0 ? term : `${sign} ${term}`);
    }
  }
  return parts.join(" ");
}

function buildClippedPath(
  fn: (x: number) => number,
  plane: ReturnType<typeof makePlane>,
  xStart: number,
  xEnd: number,
  steps = 160,
): string {
  const segs: string[] = [];
  let penDown = false;
  const yPad = (plane.yMax - plane.yMin) * 0.25;
  for (let i = 0; i <= steps; i++) {
    const x = xStart + ((xEnd - xStart) * i) / steps;
    const y = fn(x);
    if (!Number.isFinite(y) || y < plane.yMin - yPad || y > plane.yMax + yPad) {
      penDown = false;
      continue;
    }
    const clampedY = Math.max(plane.yMin, Math.min(plane.yMax, y));
    segs.push(`${penDown ? "L" : "M"} ${plane.px(x).toFixed(1)} ${plane.py(clampedY).toFixed(1)}`);
    penDown = true;
  }
  return segs.join(" ");
}

function MaclaurinExplorerWidget() {
  const [fnKey, setFnKey] = useState<MaclaurinKey>("sin");
  const [degree, setDegree] = useState<number>(3);
  const [probeX, setProbeX] = useState<number>(1.5);

  const spec = MACLAURIN_FUNCS[fnKey];
  const clampedProbe = Math.max(spec.probeMin, Math.min(spec.probeMax, probeX));

  const handleFuncChange = (next: MaclaurinKey) => {
    setFnKey(next);
    setProbeX(MACLAURIN_FUNCS[next].defaultProbe);
  };

  const plane = useMemo(
    () =>
      makePlane({
        width: 440,
        height: 240,
        xMin: spec.xMin,
        xMax: spec.xMax,
        yMin: spec.yMin,
        yMax: spec.yMax,
        pad: 26,
      }),
    [spec],
  );

  const { truePath, polyPath, trueVal, approxVal, absErr, formulaStr } = useMemo(() => {
    const tStart = fnKey === "ln1px" ? -0.96 : spec.xMin;
    const tPath = buildClippedPath(spec.f, plane, tStart, spec.xMax, 180);
    const pPath = buildClippedPath((x) => evalMaclaurin(spec, degree, x), plane, spec.xMin, spec.xMax, 180);
    const tv = spec.f(clampedProbe);
    const av = evalMaclaurin(spec, degree, clampedProbe);
    return {
      truePath: tPath,
      polyPath: pPath,
      trueVal: tv,
      approxVal: av,
      absErr: Math.abs(tv - av),
      formulaStr: formatMaclaurinFormula(fnKey, degree),
    };
  }, [fnKey, spec, degree, plane, clampedProbe]);

  const probeInBounds =
    Number.isFinite(approxVal) && approxVal >= spec.yMin && approxVal <= spec.yMax;
  const outsideConvergence = fnKey === "ln1px" && clampedProbe > 1;

  return (
    <WidgetFrame
      title="[HL] Maclaurin Polynomial Approximation Slider"
      tryThis={[
        "Start on {{sin x}} at degree {{N = 1}} (the tangent line {{y = x}}) and slide up to {{N = 9}}: notice why even degrees don't change {{sin x}}!",
        "Switch to {{ln(1 + x)}} and drag the probe {{x_0}} past {{x = 1}} (e.g. {{x_0 = 1.5}}): watch the error **explode** as {{N}} grows outside the convergence interval {{(-1, 1]}}!",
        "Compare {{e^x}} at {{x_0 = 1.5}} for {{N = 3}} vs {{N = 7}} to see how quickly factorial denominators crush the error.",
      ]}
      caption={
        <div className="space-y-1">
          <div>
            <strong>
              <M>{`P_${degree}(x) = ${formulaStr}`}</M>
            </strong>
          </div>
          <div className="text-ink-2">
            {spec.intervalNote}
            {outsideConvergence
              ? " — Right now x₀ > 1 sits OUTSIDE the radius of convergence, so higher degrees diverge!"
              : ""}
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Choose function"
          value={fnKey}
          onChange={handleFuncChange}
          options={[
            { value: "sin", label: "sin x" },
            { value: "cos", label: "cos x" },
            { value: "exp", label: "eˣ" },
            { value: "ln1px", label: "ln(1 + x)" },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Maclaurin degree N"
            value={degree}
            min={1}
            max={9}
            step={1}
            onChange={setDegree}
            format={(v) => `N = ${v}`}
          />
          <Slider
            label="Test point x₀"
            value={clampedProbe}
            min={spec.probeMin}
            max={spec.probeMax}
            step={0.1}
            onChange={setProbeX}
            format={(v) => `x₀ = ${v.toFixed(1)}`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 440 240"
            className="h-auto w-full"
            role="img"
            aria-label={`Maclaurin polynomial of degree ${degree} approximating ${spec.label}`}
          >
            {fnKey === "ln1px" ? (
              <g>
                <rect
                  x={plane.px(-1)}
                  y={plane.py(spec.yMax)}
                  width={plane.px(1) - plane.px(-1)}
                  height={plane.py(spec.yMin) - plane.py(spec.yMax)}
                  fill="var(--good)"
                  fillOpacity={0.1}
                />
                <line
                  x1={plane.px(-1)}
                  x2={plane.px(-1)}
                  y1={plane.py(spec.yMin)}
                  y2={plane.py(spec.yMax)}
                  stroke="var(--bad)"
                  strokeWidth={1.4}
                  strokeDasharray="4 3"
                />
                <line
                  x1={plane.px(1)}
                  x2={plane.px(1)}
                  y1={plane.py(spec.yMin)}
                  y2={plane.py(spec.yMax)}
                  stroke="var(--good)"
                  strokeWidth={1.4}
                  strokeDasharray="4 3"
                />
                <text x={plane.px(0)} y={plane.py(spec.yMax) + 14} fontSize={10} textAnchor="middle" fontWeight={700} fill="var(--good)">
                  converges on (−1, 1]
                </text>
              </g>
            ) : null}

            <PlaneGrid plane={plane} step={1} labels />

            <line
              x1={plane.px(clampedProbe)}
              x2={plane.px(clampedProbe)}
              y1={plane.py(spec.yMin)}
              y2={plane.py(spec.yMax)}
              stroke="var(--ink-2)"
              strokeOpacity={0.35}
              strokeWidth={1.2}
              strokeDasharray="3 3"
            />

            <path d={truePath} fill="none" stroke="var(--brand)" strokeWidth={2.8} strokeLinecap="round" />
            <path d={polyPath} fill="none" stroke="var(--accent)" strokeWidth={2.4} strokeDasharray="6 3" strokeLinecap="round" />

            {Number.isFinite(trueVal) && trueVal >= spec.yMin && trueVal <= spec.yMax ? (
              <circle cx={plane.px(clampedProbe)} cy={plane.py(trueVal)} r={4.5} fill="var(--brand)" />
            ) : null}
            {probeInBounds ? (
              <circle cx={plane.px(clampedProbe)} cy={plane.py(approxVal)} r={4.5} fill="var(--accent)" stroke="var(--surface)" strokeWidth={1.5} />
            ) : null}

            <g transform="translate(12, 10)">
              <rect x={0} y={0} width={144} height={40} rx={7} fill="var(--surface)" fillOpacity={0.92} stroke="var(--line)" strokeWidth={1} />
              <line x1={10} y1={14} x2={28} y2={14} stroke="var(--brand)" strokeWidth={2.8} />
              <text x={34} y={18} fontSize={10.5} fontWeight={700} fill="var(--ink)">
                True {spec.label}
              </text>
              <line x1={10} y1={30} x2={28} y2={30} stroke="var(--accent)" strokeWidth={2.4} strokeDasharray="5 2" />
              <text x={34} y={34} fontSize={10.5} fontWeight={700} fill="var(--ink)">
                Maclaurin P{SUB_DIGITS[degree]}(x)
              </text>
            </g>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Degree N" value={`N = ${degree}`} tone="ink" />
          <Readout label={`True f(${clampedProbe.toFixed(1)})`} value={trueVal.toFixed(4)} tone="brand" />
          <Readout label={`Approx P${SUB_DIGITS[degree]}`} value={Math.abs(approxVal) > 999 ? "diverging" : approxVal.toFixed(4)} tone={outsideConvergence ? "bad" : "ink"} />
          <Readout
            label="Abs Error"
            value={absErr < 0.0001 ? "< 0.0001" : absErr > 999 ? "> 999" : absErr.toFixed(4)}
            tone={outsideConvergence || absErr > 0.5 ? "bad" : absErr < 0.02 ? "good" : "brand"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "riemann-volume-revolution",
    title: "Riemann Sum, Area & Volume of Revolution Visualizer",
    blurb: "Adjust slice count n and switch between 2D Riemann rectangles and 3D cylindrical disks rotated around the x-axis.",
    Component: RiemannVolumeWidget,
  },
  {
    id: "maclaurin-polynomial-explorer",
    title: "[HL] Maclaurin Polynomial Approximation Slider",
    blurb: "Slide degree N = 1..9 on sin x, cos x, eˣ, and ln(1 + x) to watch Maclaurin polynomials hug—or diverge from—the true curve.",
    Component: MaclaurinExplorerWidget,
  },
];

export default widgets;
