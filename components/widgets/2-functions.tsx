"use client";

import { useId, useMemo, useState } from "react";
import { M, PlaneGrid, Readout, Segmented, Slider, WidgetFrame, makePlane, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Shared SVG plotting helpers
// ---------------------------------------------------------------------------
function fmtNum(v: number, dp = 2): string {
  if (!Number.isFinite(v)) return "—";
  const rounded = Math.abs(v) < 1e-9 ? 0 : +v.toFixed(dp);
  return rounded < 0 ? `−${Math.abs(rounded)}` : String(rounded);
}

function fmtSigned(v: number, dp = 2): string {
  const rounded = Math.abs(v) < 1e-9 ? 0 : +v.toFixed(dp);
  if (rounded === 0) return "";
  return rounded > 0 ? ` + ${rounded}` : ` − ${Math.abs(rounded)}`;
}

function fmtLinear(m: number, q: number): string {
  const rm = Math.abs(m) < 1e-9 ? 0 : +m.toFixed(2);
  const rq = Math.abs(q) < 1e-9 ? 0 : +q.toFixed(2);
  if (rm === 0) return fmtNum(rq);
  const mPart = rm === 1 ? "x" : rm === -1 ? "−x" : `${fmtNum(rm)}x`;
  if (rq === 0) return mPart;
  return `${mPart}${rq > 0 ? ` + ${rq}` : ` − ${Math.abs(rq)}`}`;
}

/**
 * Sample a function y = fn(x) across [xMin, xMax] into disjoint SVG path strings,
 * breaking cleanly across vertical asymptotes or steep jumps.
 */
function buildCurvePaths(
  fn: (x: number) => number,
  plane: ReturnType<typeof makePlane>,
  samples = 360,
): string[] {
  const { xMin, xMax, yMin, yMax, px, py } = plane;
  const yPad = (yMax - yMin) * 0.45;
  const yLow = yMin - yPad;
  const yHigh = yMax + yPad;
  const jumpThreshold = (yMax - yMin) * 0.75;
  const paths: string[] = [];
  let current: string[] = [];
  let prevY: number | null = null;

  for (let i = 0; i <= samples; i++) {
    const x = xMin + ((xMax - xMin) * i) / samples;
    const y = fn(x);
    const valid = Number.isFinite(y) && y >= yLow && y <= yHigh;
    if (!valid) {
      if (current.length >= 2) paths.push(current.join(" "));
      current = [];
      prevY = null;
      continue;
    }
    if (prevY !== null && Math.abs(y - prevY) > jumpThreshold) {
      if (current.length >= 2) paths.push(current.join(" "));
      current = [];
    }
    const cmd = current.length === 0 ? "M" : "L";
    current.push(`${cmd} ${px(x).toFixed(1)} ${py(y).toFixed(1)}`);
    prevY = y;
  }
  if (current.length >= 2) paths.push(current.join(" "));
  return paths;
}

// ===========================================================================
// WIDGET 1: Live Graph Transformation Sandbox (SL + HL)
// ===========================================================================
type BaseFnKey = "parabola" | "cubic" | "exp";
type HlMode = "none" | "abs-out" | "abs-in" | "recip" | "square";

const BASE_FNS: Record<
  BaseFnKey,
  { label: string; formula: string; fn: (x: number) => number; anchor: [number, number] }
> = {
  parabola: {
    label: "x² − 2x − 2",
    formula: "x^2 - 2x - 2",
    fn: (x) => x * x - 2 * x - 2,
    anchor: [1, -3],
  },
  cubic: {
    label: "¼x³ − 1.5x",
    formula: "0.25x^3 - 1.5x",
    fn: (x) => 0.25 * x * x * x - 1.5 * x,
    anchor: [2, -1],
  },
  exp: {
    label: "2ˣ⁻¹ − 2",
    formula: "2^(x - 1) - 2",
    fn: (x) => Math.pow(2, x - 1) - 2,
    anchor: [2, 0],
  },
};

function TransformSandbox() {
  const clipId = useId();
  const [baseKey, setBaseKey] = useState<BaseFnKey>("parabola");
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [hlMode, setHlMode] = useState<HlMode>("none");

  const plane = useMemo(
    () => makePlane({ width: 460, height: 320, xMin: -6, xMax: 6, yMin: -6, yMax: 6, pad: 28 }),
    [],
  );

  const base = BASE_FNS[baseKey];

  const { parentPaths, transformedPaths, asymXs, invariantPts, anchorImg } = useMemo(() => {
    const g = (x: number) => a * base.fn(b * x + c) + d;
    const h = (x: number) => {
      if (hlMode === "none") return g(x);
      if (hlMode === "abs-out") return Math.abs(g(x));
      if (hlMode === "abs-in") return g(Math.abs(x));
      if (hlMode === "square") {
        const val = g(x);
        return val * val;
      }
      const denom = g(x);
      if (Math.abs(denom) < 1e-4) return NaN;
      return 1 / denom;
    };

    const pPaths = buildCurvePaths(base.fn, plane, 260);
    const tPaths = buildCurvePaths(h, plane, 420);

    // Detect real zeros of g(x) for vertical asymptotes in 1/g(x) mode, plus y = ±1 invariants
    const zeros: number[] = [];
    const invs: Array<[number, number]> = [];
    if (hlMode === "recip") {
      const steps = 400;
      let prevX = plane.xMin;
      let prevV = g(prevX);
      for (let i = 1; i <= steps; i++) {
        const x = plane.xMin + ((plane.xMax - plane.xMin) * i) / steps;
        const v = g(x);
        if (Number.isFinite(prevV) && Number.isFinite(v)) {
          if (Math.abs(v) < 1e-5) {
            zeros.push(x);
          } else if (prevV * v < 0) {
            const root = prevX + ((x - prevX) * Math.abs(prevV)) / (Math.abs(prevV) + Math.abs(v));
            zeros.push(root);
          }
          for (const target of [-1, 1]) {
            const d1 = prevV - target;
            const d2 = v - target;
            if (d1 * d2 <= 0 && Math.abs(d1 - d2) > 1e-9) {
              const rx = prevX + ((x - prevX) * Math.abs(d1)) / (Math.abs(d1) + Math.abs(d2));
              if (invs.every(([ix]) => Math.abs(ix - rx) > 0.12)) invs.push([rx, target]);
            }
          }
        }
        prevX = x;
        prevV = v;
      }
    }

    let img: [number, number] | null = null;
    if (Math.abs(b) > 1e-9) {
      const xNew = (base.anchor[0] - c) / b;
      const yBase = a * base.anchor[1] + d;
      const yNew =
        hlMode === "none"
          ? yBase
          : hlMode === "abs-out"
            ? Math.abs(yBase)
            : hlMode === "square"
              ? yBase * yBase
              : hlMode === "recip"
                ? Math.abs(yBase) > 1e-5
                  ? 1 / yBase
                  : NaN
                : NaN;
      if (hlMode !== "abs-in" && Number.isFinite(yNew)) {
        img = [xNew, yNew];
      }
    }

    return {
      parentPaths: pPaths,
      transformedPaths: tPaths,
      asymXs: zeros,
      invariantPts: invs,
      anchorImg: img,
    };
  }, [a, b, c, d, base, hlMode, plane]);

  const horizShift = Math.abs(b) > 1e-9 ? -c / b : NaN;

  const reset = () => {
    setA(1);
    setB(1);
    setC(0);
    setD(0);
    setHlMode("none");
  };

  const innerFormula =
    Math.abs(b) < 1e-9
      ? fmtNum(c)
      : `${b === 1 ? "" : b === -1 ? "−" : fmtNum(b)}x${fmtSigned(c)}`;

  const gLabel = `${a === 1 ? "" : a === -1 ? "−" : `${fmtNum(a)}·`}f(${innerFormula})${fmtSigned(d)}`;
  const activeLabel =
    hlMode === "none"
      ? `y = ${gLabel}`
      : hlMode === "abs-out"
        ? `y = |${gLabel}|`
        : hlMode === "abs-in"
          ? `y = g(|x|)`
          : hlMode === "recip"
            ? `y = 1 / (${gLabel})`
            : `y = [${gLabel}]²`;

  const modeNote =
    hlMode === "none"
      ? Math.abs(b) < 1e-9
        ? "Because b = 0, bx + c is constant, collapsing the graph to a flat horizontal line."
        : `Factoring bx + c = ${fmtNum(b)}(x${fmtSigned(c / b)}) shows a horizontal stretch by 1/${fmtNum(Math.abs(b))} and horizontal translation by ${fmtNum(horizShift)} units.`
      : hlMode === "abs-out"
        ? "|g(x)| reflects every negative branch (y < 0) upward across the x-axis, creating sharp corners at simple zeros."
        : hlMode === "abs-in"
          ? "g(|x|) erases the x < 0 half and mirrors the x ≥ 0 half across the y-axis, guaranteeing an even function."
          : hlMode === "recip"
            ? "1/g(x) turns zeros of g into dashed vertical asymptotes, keeps y = ±1 invariant (orange dots), and flips local minima ↔ local maxima!"
            : "[g(x)]² turns every simple zero into a smooth tangent minimum on the x-axis, shrinking outputs inside (0, 1) and amplifying outputs above 1.";

  return (
    <WidgetFrame
      title="Live Graph Transformation Sandbox (SL + HL)"
      tryThis={[
        "Set {{b = 2, c = -6}}: confirm the vertex shifts right by {{3}} units (not {{6}}) because {{2x - 6 = 2(x - 3)}}!",
        "Switch to **[HL] 1/g(x)** on {{x^2 - 2x - 2}}: watch zeros become vertical asymptotes and the vertex {{(1, -3)}} flip to a local maximum at {{(1, -1/3)}}.",
        "Compare **|g(x)|** vs **g(|x|)** vs **[g(x)]²** to see cusps, y-axis mirroring, and smooth tangent zeros.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="font-bold text-ink">
            Active curve: <span className="text-brand">{activeLabel}</span> (dashed grey: parent{" "}
            <M>{`f(x) = ${base.formula}`}</M>)
          </div>
          <div>{modeNote}</div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Base function"
            value={baseKey}
            onChange={setBaseKey}
            options={[
              { value: "parabola", label: BASE_FNS.parabola.label },
              { value: "cubic", label: BASE_FNS.cubic.label },
              { value: "exp", label: BASE_FNS.exp.label },
            ]}
          />
          <button type="button" className="btn btn-secondary btn-sm" onClick={reset}>
            Reset
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-ink-2">HL Mode:</span>
          <Segmented
            label="HL graph transformation mode"
            value={hlMode}
            onChange={setHlMode}
            options={[
              { value: "none", label: "g(x)" },
              { value: "abs-out", label: "|g(x)|" },
              { value: "abs-in", label: "g(|x|)" },
              { value: "recip", label: "1/g(x)" },
              { value: "square", label: "[g(x)]²" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <svg
              viewBox={`0 0 ${plane.width} ${plane.height}`}
              role="img"
              aria-label={`Interactive coordinate graph plotting ${activeLabel} against parent curve f(x)`}
              className="mx-auto block h-auto w-full max-w-[460px] rounded-xl border border-line bg-surface"
            >
              <defs>
                <clipPath id={clipId}>
                  <rect
                    x={plane.pad}
                    y={plane.pad}
                    width={plane.width - 2 * plane.pad}
                    height={plane.height - 2 * plane.pad}
                  />
                </clipPath>
              </defs>
              <PlaneGrid plane={plane} step={1} />
              <g clipPath={`url(#${clipId})`}>
                {/* Reference y = ±1 lines in reciprocal mode */}
                {hlMode === "recip" ? (
                  <>
                    <line
                      x1={plane.px(plane.xMin)}
                      x2={plane.px(plane.xMax)}
                      y1={plane.py(1)}
                      y2={plane.py(1)}
                      className="stroke-warn"
                      strokeOpacity={0.45}
                      strokeWidth={1.1}
                      strokeDasharray="3,3"
                    />
                    <line
                      x1={plane.px(plane.xMin)}
                      x2={plane.px(plane.xMax)}
                      y1={plane.py(-1)}
                      y2={plane.py(-1)}
                      className="stroke-warn"
                      strokeOpacity={0.45}
                      strokeWidth={1.1}
                      strokeDasharray="3,3"
                    />
                  </>
                ) : null}

                {/* Vertical asymptotes in 1/g(x) mode */}
                {asymXs.map((rx, idx) => (
                  <line
                    key={`va-${idx}`}
                    x1={plane.px(rx)}
                    x2={plane.px(rx)}
                    y1={plane.py(plane.yMin)}
                    y2={plane.py(plane.yMax)}
                    className="stroke-bad"
                    strokeWidth={1.6}
                    strokeDasharray="6,4"
                  />
                ))}

                {/* Parent curve dashed */}
                {parentPaths.map((dStr, idx) => (
                  <path
                    key={`p-${idx}`}
                    d={dStr}
                    fill="none"
                    className="stroke-ink-2"
                    strokeOpacity={0.45}
                    strokeWidth={1.8}
                    strokeDasharray="5,4"
                  />
                ))}

                {/* Transformed curve solid */}
                {transformedPaths.map((dStr, idx) => (
                  <path
                    key={`t-${idx}`}
                    d={dStr}
                    fill="none"
                    className="stroke-brand"
                    strokeWidth={2.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}

                {/* Invariant points y = ±1 in 1/g(x) mode */}
                {invariantPts.map(([ix, iy], idx) => (
                  <circle key={`inv-${idx}`} cx={plane.px(ix)} cy={plane.py(iy)} r={4.2} className="fill-bad" />
                ))}

                {/* Anchor point on parent + image */}
                <circle
                  cx={plane.px(base.anchor[0])}
                  cy={plane.py(base.anchor[1])}
                  r={4}
                  className="fill-ink-2"
                  fillOpacity={0.6}
                />
                {anchorImg &&
                anchorImg[0] >= plane.xMin &&
                anchorImg[0] <= plane.xMax &&
                anchorImg[1] >= plane.yMin &&
                anchorImg[1] <= plane.yMax ? (
                  <circle
                    cx={plane.px(anchorImg[0])}
                    cy={plane.py(anchorImg[1])}
                    r={5}
                    className="fill-accent stroke-surface"
                    strokeWidth={1.5}
                  />
                ) : null}
              </g>
            </svg>
          </div>

          <div className="space-y-3 md:col-span-5">
            <Slider label="Vertical scale a" value={a} min={-3} max={3} step={0.5} onChange={setA} format={(v) => fmtNum(v, 1)} />
            <Slider label="Horizontal factor b" value={b} min={-3} max={3} step={0.5} onChange={setB} format={(v) => fmtNum(v, 1)} />
            <Slider label="Inner constant c" value={c} min={-4} max={4} step={0.5} onChange={setC} format={(v) => fmtNum(v, 1)} />
            <Slider label="Vertical shift d" value={d} min={-4} max={4} step={0.5} onChange={setD} format={(v) => fmtNum(v, 1)} />

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Readout
                label="Horiz. shift (−c/b)"
                value={Number.isFinite(horizShift) ? fmtNum(horizShift) : "flat"}
                tone="brand"
              />
              <Readout
                label="Anchor image"
                value={anchorImg ? `(${fmtNum(anchorImg[0], 1)}, ${fmtNum(anchorImg[1], 1)})` : "mirrored"}
                tone="ink"
              />
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// WIDGET 2: Discriminant & Rational Asymptote Explorer (SL + HL)
// ===========================================================================
type ExplorerMode = "quadratic" | "linear-rat" | "oblique-hl";

function DiscriminantAsymptoteExplorer() {
  const clipId = useId();
  const [mode, setMode] = useState<ExplorerMode>("quadratic");

  // Quadratic parameters: a x^2 + b x + c
  const [qa, setQa] = useState(1);
  const [qb, setQb] = useState(-2);
  const [qc, setQc] = useState(-3);

  // Linear rational parameters: (ra x + rb) / (rc x + rd)
  const [ra, setRa] = useState(2);
  const [rb, setRb] = useState(3);
  const [rc, setRc] = useState(1);
  const [rd, setRd] = useState(-2);

  // HL Oblique rational parameters: (oa x^2 + ob x + oc) / (x - op)
  const [oa, setOa] = useState(1);
  const [ob, setOb] = useState(-2);
  const [oc, setOc] = useState(2);
  const [op, setOp] = useState(1);

  const plane = useMemo(
    () => makePlane({ width: 460, height: 320, xMin: -6, xMax: 6, yMin: -6, yMax: 6, pad: 28 }),
    [],
  );

  // Derived data for Quadratic
  const quadData = useMemo(() => {
    const fn = (x: number) => qa * x * x + qb * x + qc;
    const paths = buildCurvePaths(fn, plane, 300);
    const isDegenerate = Math.abs(qa) < 1e-9;
    const disc = qb * qb - 4 * qa * qc;
    const h = isDegenerate ? NaN : -qb / (2 * qa);
    const k = isDegenerate ? NaN : fn(h);
    const roots: number[] = [];
    if (!isDegenerate) {
      if (Math.abs(disc) < 1e-9) roots.push(h);
      else if (disc > 0) {
        const s = Math.sqrt(disc);
        roots.push((-qb - s) / (2 * qa), (-qb + s) / (2 * qa));
      }
    } else if (Math.abs(qb) > 1e-9) {
      roots.push(-qc / qb);
    }
    return { paths, isDegenerate, disc, h, k, roots };
  }, [qa, qb, qc, plane]);

  // Derived data for SL Linear Rational
  const linRatData = useMemo(() => {
    const denZero = Math.abs(rc) < 1e-9;
    const hole = !denZero && Math.abs(ra * rd - rb * rc) < 1e-9;
    const va = denZero ? NaN : -rd / rc;
    const ha = denZero ? NaN : ra / rc;
    const selfInverse = !denZero && !hole && Math.abs(ra + rd) < 1e-9;
    const fn = (x: number) => {
      const den = rc * x + rd;
      if (Math.abs(den) < 1e-4) return NaN;
      return (ra * x + rb) / den;
    };
    const paths = buildCurvePaths(fn, plane, 420);
    const xInt = Math.abs(ra) > 1e-9 && !hole ? -rb / ra : NaN;
    const yInt = Math.abs(rd) > 1e-9 ? rb / rd : NaN;
    return { paths, denZero, hole, va, ha, selfInverse, xInt, yInt };
  }, [ra, rb, rc, rd, plane]);

  // Derived data for HL Oblique Rational (oa x^2 + ob x + oc)/(x - op)
  const obliqueData = useMemo(() => {
    // Exact synthetic division by (x - op):
    // oa x^2 + ob x + oc = (oa x + (ob + oa*op))(x - op) + (oa*op^2 + ob*op + oc)
    const m = oa;
    const q = ob + oa * op;
    const rem = oa * op * op + ob * op + oc;
    const isHole = Math.abs(rem) < 1e-9;
    const isQuadraticNum = Math.abs(oa) > 1e-9;
    const fn = (x: number) => {
      const den = x - op;
      if (Math.abs(den) < 1e-4) return NaN;
      return (oa * x * x + ob * x + oc) / den;
    };
    const paths = buildCurvePaths(fn, plane, 440);
    // Extrema when oa * rem > 0: x = op ± sqrt(rem / oa)
    const extrema: Array<{ x: number; y: number; kind: "min" | "max" }> = [];
    if (isQuadraticNum && !isHole && oa * rem > 0) {
      const step = Math.sqrt(rem / oa);
      const x1 = op - step;
      const x2 = op + step;
      const y1 = fn(x1);
      const y2 = fn(x2);
      extrema.push({ x: x1, y: y1, kind: oa > 0 ? "max" : "min" });
      extrema.push({ x: x2, y: y2, kind: oa > 0 ? "min" : "max" });
    }
    return { paths, m, q, rem, isHole, isQuadraticNum, extrema };
  }, [oa, ob, oc, op, plane]);

  const captionNode =
    mode === "quadratic" ? (
      quadData.isDegenerate ? (
        <div>
          <strong>Degenerate linear case (a = 0):</strong> The quadratic collapses to the straight line{" "}
          <span className="font-bold text-brand">y = {fmtLinear(qb, qc)}</span> — remember to check{" "}
          <M>{"a = 0"}</M> separately in IB parameter questions!
        </div>
      ) : (
        <div>
          Vertex form:{" "}
          <strong className="text-brand">
            y = {fmtNum(qa)}(x{fmtSigned(-quadData.h)})²{fmtSigned(quadData.k)}
          </strong>
          .{" "}
          {quadData.disc > 1e-9
            ? `Δ = ${fmtNum(quadData.disc)} > 0 gives 2 distinct real roots at x = ${fmtNum(quadData.roots[0])} and x = ${fmtNum(quadData.roots[1])}.`
            : Math.abs(quadData.disc) <= 1e-9
              ? `Δ = 0 gives 1 repeated root: the parabola is tangent to the x-axis at (${fmtNum(quadData.h)}, 0).`
              : `Δ = ${fmtNum(quadData.disc)} < 0 gives 0 real roots — the parabola stays strictly ${qa > 0 ? "above" : "below"} the x-axis.`}
        </div>
      )
    ) : mode === "linear-rat" ? (
      linRatData.denZero ? (
        <div>
          With <strong>c = 0</strong>, the denominator is constant ({fmtNum(rd)}), so the function is linear rather than a hyperbola.
        </div>
      ) : linRatData.hole ? (
        <div>
          <strong>Removable hole!</strong> Because <M>{"ad - bc = 0"}</M>, numerator and denominator share a factor, leaving a horizontal line{" "}
          <span className="font-bold text-brand">y = {fmtNum(linRatData.ha)}</span> with a hole at{" "}
          <span className="font-bold text-bad">x = {fmtNum(linRatData.va)}</span>.
        </div>
      ) : (
        <div>
          Asymptotes meet at{" "}
          <strong className="text-brand">
            ({fmtNum(linRatData.va)}, {fmtNum(linRatData.ha)})
          </strong>
          .{" "}
          {linRatData.selfInverse
            ? "Because a + d = 0, that centre lies ON y = x — making this curve strictly SELF-INVERSE (f(f(x)) = x)!"
            : "Set a + d = 0 (for example a = 2, d = −2) to align the asymptote centre onto y = x and make f self-inverse."}
        </div>
      )
    ) : obliqueData.isHole ? (
      <div>
        <strong>Removable hole (Remainder R = 0)!</strong> Because{" "}
        <M>{op === 0 ? "x" : op > 0 ? `(x - ${op})` : `(x + ${-op})`}</M> divides the numerator exactly, there is NO vertical or oblique asymptote — just the line{" "}
        <strong className="text-brand">y = {fmtLinear(obliqueData.m, obliqueData.q)}</strong> missing x = {fmtNum(op)}.
      </div>
    ) : (
      <div>
        Polynomial division:{" "}
        <strong className="text-brand">
          f(x) = {fmtLinear(obliqueData.m, obliqueData.q)}
          {obliqueData.rem >= 0 ? ` + ${fmtNum(obliqueData.rem)}` : ` − ${fmtNum(Math.abs(obliqueData.rem))}`}/(x
          {fmtSigned(-op)})
        </strong>
        .{" "}
        {obliqueData.extrema.length === 2
          ? `Because a·R > 0, there are 2 turning points leaving a forbidden gap between y = ${fmtNum(Math.min(obliqueData.extrema[0].y, obliqueData.extrema[1].y))} and y = ${fmtNum(Math.max(obliqueData.extrema[0].y, obliqueData.extrema[1].y))}.`
          : "Because a·R ≤ 0, there are NO turning points and the range is all real numbers ℝ!"}
      </div>
    );

  return (
    <WidgetFrame
      title="Discriminant & Rational Asymptote Explorer (SL + HL)"
      tryThis={[
        "**Quadratic:** Keep {{a = 1, b = -2}} and slide {{c}} past {{1}} to watch {{Δ}} cross from positive to {{0}} (tangent) to negative.",
        "**SL Rational:** Set {{a = 2, d = -2}} to watch the asymptote centre land on {{y = x}} (self-inverse!).",
        "**[HL] Oblique:** Flip the sign of {{c}} so the remainder {{R}} changes sign — watch the turning points and range gap vanish!",
      ]}
      caption={captionNode}
    >
      <div className="space-y-4">
        <Segmented
          label="Explorer mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "quadratic", label: "Quadratic & Δ" },
            { value: "linear-rat", label: "SL Linear Rational" },
            { value: "oblique-hl", label: "[HL] Oblique Asymptote" },
          ]}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <svg
              viewBox={`0 0 ${plane.width} ${plane.height}`}
              role="img"
              aria-label={`Interactive graph in ${mode} mode`}
              className="mx-auto block h-auto w-full max-w-[460px] rounded-xl border border-line bg-surface"
            >
              <defs>
                <clipPath id={clipId}>
                  <rect
                    x={plane.pad}
                    y={plane.pad}
                    width={plane.width - 2 * plane.pad}
                    height={plane.height - 2 * plane.pad}
                  />
                </clipPath>
              </defs>
              <PlaneGrid plane={plane} step={1} />
              <g clipPath={`url(#${clipId})`}>
                {mode === "quadratic" ? (
                  <>
                    {!quadData.isDegenerate ? (
                      <line
                        x1={plane.px(quadData.h)}
                        x2={plane.px(quadData.h)}
                        y1={plane.py(plane.yMin)}
                        y2={plane.py(plane.yMax)}
                        className="stroke-accent"
                        strokeWidth={1.4}
                        strokeDasharray="5,4"
                      />
                    ) : null}
                    {quadData.paths.map((dStr, idx) => (
                      <path key={`q-${idx}`} d={dStr} fill="none" className="stroke-brand" strokeWidth={2.8} />
                    ))}
                    {!quadData.isDegenerate ? (
                      <circle cx={plane.px(quadData.h)} cy={plane.py(quadData.k)} r={5} className="fill-accent" />
                    ) : null}
                    {quadData.roots.map((rx, idx) => (
                      <circle key={`qr-${idx}`} cx={plane.px(rx)} cy={plane.py(0)} r={4.5} className="fill-good" />
                    ))}
                  </>
                ) : mode === "linear-rat" ? (
                  <>
                    {/* Mirror line y = x */}
                    <line
                      x1={plane.px(plane.xMin)}
                      y1={plane.py(plane.xMin)}
                      x2={plane.px(plane.xMax)}
                      y2={plane.py(plane.xMax)}
                      className={linRatData.selfInverse ? "stroke-good" : "stroke-ink-2"}
                      strokeOpacity={linRatData.selfInverse ? 0.75 : 0.3}
                      strokeWidth={linRatData.selfInverse ? 1.8 : 1.2}
                      strokeDasharray="6,4"
                    />
                    {!linRatData.denZero && !linRatData.hole ? (
                      <>
                        <line
                          x1={plane.px(linRatData.va)}
                          x2={plane.px(linRatData.va)}
                          y1={plane.py(plane.yMin)}
                          y2={plane.py(plane.yMax)}
                          className="stroke-bad"
                          strokeWidth={1.6}
                          strokeDasharray="6,4"
                        />
                        <line
                          x1={plane.px(plane.xMin)}
                          x2={plane.px(plane.xMax)}
                          y1={plane.py(linRatData.ha)}
                          y2={plane.py(linRatData.ha)}
                          className="stroke-accent"
                          strokeWidth={1.6}
                          strokeDasharray="6,4"
                        />
                      </>
                    ) : null}
                    {linRatData.paths.map((dStr, idx) => (
                      <path key={`lr-${idx}`} d={dStr} fill="none" className="stroke-brand" strokeWidth={2.7} />
                    ))}
                    {linRatData.hole && Number.isFinite(linRatData.va) ? (
                      <circle
                        cx={plane.px(linRatData.va)}
                        cy={plane.py(linRatData.ha)}
                        r={5}
                        className="fill-surface stroke-bad"
                        strokeWidth={2.2}
                      />
                    ) : null}
                    {Number.isFinite(linRatData.xInt) ? (
                      <circle cx={plane.px(linRatData.xInt)} cy={plane.py(0)} r={4} className="fill-good" />
                    ) : null}
                    {Number.isFinite(linRatData.yInt) ? (
                      <circle cx={plane.px(0)} cy={plane.py(linRatData.yInt)} r={4} className="fill-brand" />
                    ) : null}
                  </>
                ) : (
                  <>
                    {/* HL Oblique Rational */}
                    {!obliqueData.isHole ? (
                      <>
                        <line
                          x1={plane.px(op)}
                          x2={plane.px(op)}
                          y1={plane.py(plane.yMin)}
                          y2={plane.py(plane.yMax)}
                          className="stroke-bad"
                          strokeWidth={1.6}
                          strokeDasharray="6,4"
                        />
                        <line
                          x1={plane.px(plane.xMin)}
                          y1={plane.py(obliqueData.m * plane.xMin + obliqueData.q)}
                          x2={plane.px(plane.xMax)}
                          y2={plane.py(obliqueData.m * plane.xMax + obliqueData.q)}
                          className="stroke-accent"
                          strokeWidth={1.7}
                          strokeDasharray="6,4"
                        />
                      </>
                    ) : null}
                    {obliqueData.paths.map((dStr, idx) => (
                      <path key={`ob-${idx}`} d={dStr} fill="none" className="stroke-brand" strokeWidth={2.7} />
                    ))}
                    {obliqueData.isHole ? (
                      <circle
                        cx={plane.px(op)}
                        cy={plane.py(obliqueData.m * op + obliqueData.q)}
                        r={5.2}
                        className="fill-surface stroke-bad"
                        strokeWidth={2.2}
                      />
                    ) : null}
                    {obliqueData.extrema.map((pt, idx) => (
                      <circle key={`ex-${idx}`} cx={plane.px(pt.x)} cy={plane.py(pt.y)} r={4.8} className="fill-good" />
                    ))}
                  </>
                )}
              </g>
            </svg>
          </div>

          <div className="space-y-3 md:col-span-5">
            {mode === "quadratic" ? (
              <>
                <Slider label="a (x² coeff)" value={qa} min={-3} max={3} step={0.5} onChange={setQa} format={(v) => fmtNum(v, 1)} />
                <Slider label="b (x coeff)" value={qb} min={-6} max={6} step={1} onChange={setQb} format={(v) => fmtNum(v, 0)} />
                <Slider label="c (constant)" value={qc} min={-6} max={6} step={1} onChange={setQc} format={(v) => fmtNum(v, 0)} />
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Readout
                    label="Discriminant Δ"
                    value={quadData.isDegenerate ? "Linear" : fmtNum(quadData.disc)}
                    tone={quadData.isDegenerate ? "ink" : quadData.disc > 1e-9 ? "good" : Math.abs(quadData.disc) <= 1e-9 ? "brand" : "bad"}
                  />
                  <Readout
                    label="Vertex (h, k)"
                    value={quadData.isDegenerate ? "None" : `(${fmtNum(quadData.h)}, ${fmtNum(quadData.k)})`}
                    tone="brand"
                  />
                </div>
              </>
            ) : mode === "linear-rat" ? (
              <>
                <Slider label="Numerator a (x)" value={ra} min={-4} max={4} step={1} onChange={setRa} format={(v) => fmtNum(v, 0)} />
                <Slider label="Numerator b" value={rb} min={-6} max={6} step={1} onChange={setRb} format={(v) => fmtNum(v, 0)} />
                <Slider label="Denominator c (x)" value={rc} min={-3} max={3} step={1} onChange={setRc} format={(v) => fmtNum(v, 0)} />
                <Slider label="Denominator d" value={rd} min={-6} max={6} step={1} onChange={setRd} format={(v) => fmtNum(v, 0)} />
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Readout
                    label="Vertical Asymp."
                    value={linRatData.denZero || linRatData.hole ? "None" : `x = ${fmtNum(linRatData.va)}`}
                    tone="bad"
                  />
                  <Readout
                    label="Horizontal Asymp."
                    value={linRatData.denZero || linRatData.hole ? "None" : `y = ${fmtNum(linRatData.ha)}`}
                    tone="brand"
                  />
                  <Readout
                    label="Self-Inverse?"
                    value={linRatData.selfInverse ? "Yes (a+d=0)" : "No"}
                    tone={linRatData.selfInverse ? "good" : "ink"}
                  />
                  <Readout
                    label="y-intercept"
                    value={Number.isFinite(linRatData.yInt) ? `(0, ${fmtNum(linRatData.yInt)})` : "None"}
                    tone="ink"
                  />
                </div>
              </>
            ) : (
              <>
                <Slider label="Numerator a (x²)" value={oa} min={-2} max={2} step={0.5} onChange={setOa} format={(v) => fmtNum(v, 1)} />
                <Slider label="Numerator b (x)" value={ob} min={-6} max={6} step={1} onChange={setOb} format={(v) => fmtNum(v, 0)} />
                <Slider label="Numerator c" value={oc} min={-6} max={6} step={1} onChange={setOc} format={(v) => fmtNum(v, 0)} />
                <Slider label="Pole p in (x − p)" value={op} min={-3} max={3} step={0.5} onChange={setOp} format={(v) => fmtNum(v, 1)} />
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Readout label="Vertical Asymp." value={obliqueData.isHole ? "Hole!" : `x = ${fmtNum(op)}`} tone="bad" />
                  <Readout
                    label="Oblique Asymp."
                    value={obliqueData.isHole ? "None" : `y = ${fmtLinear(obliqueData.m, obliqueData.q)}`}
                    tone="brand"
                  />
                  <Readout
                    label="Remainder R"
                    value={fmtNum(obliqueData.rem)}
                    tone={obliqueData.isHole ? "bad" : "ink"}
                  />
                  <Readout
                    label="Turning Points"
                    value={obliqueData.extrema.length === 2 ? "2 (Range Gap)" : "0 (Range = ℝ)"}
                    tone={obliqueData.extrema.length === 2 ? "good" : "ink"}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "transform-sandbox",
    title: "Live Graph Transformation Sandbox",
    blurb: "Drag a, b, c, d on y = a f(bx + c) + d and toggle HL modes |g(x)|, g(|x|), 1/g(x), and [g(x)]².",
    Component: TransformSandbox,
  },
  {
    id: "discriminant-asymptote-explorer",
    title: "Discriminant & Rational Asymptote Explorer",
    blurb: "Explore quadratic discriminants, SL linear rational hyperbolas, and HL oblique asymptotes live.",
    Component: DiscriminantAsymptoteExplorer,
  },
];

export default widgets;
