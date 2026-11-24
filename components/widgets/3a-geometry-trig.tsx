"use client";

import { useMemo, useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Helpers for exact radian & surd labels (multiples of 15° = pi/12)
// ---------------------------------------------------------------------------
function gcdInt(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x || 1;
}

function formatPiFrac(num: number, den: number): string {
  if (num === 0) return "0";
  const g = gcdInt(num, den);
  const n = num / g;
  const d = den / g;
  const sign = n < 0 ? "−" : "";
  const absN = Math.abs(n);
  const top = absN === 1 ? "π" : `${absN}π`;
  return d === 1 ? `${sign}${top}` : `${sign}${top}/${d}`;
}

interface ExactAngleInfo {
  sinLabel: string;
  cosLabel: string;
  tanLabel: string;
}

const EXACT_30_45: Record<number, ExactAngleInfo> = {
  0: { sinLabel: "0", cosLabel: "1", tanLabel: "0" },
  30: { sinLabel: "1/2", cosLabel: "√3/2", tanLabel: "√3/3" },
  45: { sinLabel: "√2/2", cosLabel: "√2/2", tanLabel: "1" },
  60: { sinLabel: "√3/2", cosLabel: "1/2", tanLabel: "√3" },
  90: { sinLabel: "1", cosLabel: "0", tanLabel: "undef." },
  120: { sinLabel: "√3/2", cosLabel: "−1/2", tanLabel: "−√3" },
  135: { sinLabel: "√2/2", cosLabel: "−√2/2", tanLabel: "−1" },
  150: { sinLabel: "1/2", cosLabel: "−√3/2", tanLabel: "−√3/3" },
  180: { sinLabel: "0", cosLabel: "−1", tanLabel: "0" },
  210: { sinLabel: "−1/2", cosLabel: "−√3/2", tanLabel: "√3/3" },
  225: { sinLabel: "−√2/2", cosLabel: "−√2/2", tanLabel: "1" },
  240: { sinLabel: "−√3/2", cosLabel: "−1/2", tanLabel: "√3" },
  270: { sinLabel: "−1", cosLabel: "0", tanLabel: "undef." },
  300: { sinLabel: "−√3/2", cosLabel: "1/2", tanLabel: "−√3" },
  315: { sinLabel: "−√2/2", cosLabel: "√2/2", tanLabel: "−1" },
  330: { sinLabel: "−1/2", cosLabel: "√3/2", tanLabel: "−√3/3" },
  360: { sinLabel: "0", cosLabel: "1", tanLabel: "0" },
};

function quadrantLabel(deg: number): string {
  const d = ((deg % 360) + 360) % 360;
  if (d === 0 || d === 90 || d === 180 || d === 270) return "Axis";
  if (d < 90) return "Q1 (All +)";
  if (d < 180) return "Q2 (Sin +)";
  if (d < 270) return "Q3 (Tan +)";
  return "Q4 (Cos +)";
}

function fmtSigned(n: number): string {
  const r = Number(n.toFixed(2));
  return r < 0 ? `−${Math.abs(r)}` : String(r);
}

// ---------------------------------------------------------------------------
// Widget 1: Interactive Unit Circle & Sinusoidal Wave Modeller
// ---------------------------------------------------------------------------
function UnitCircleWaveWidget() {
  const [deg, setDeg] = useState(60);
  const [waveFn, setWaveFn] = useState<"sin" | "cos">("sin");
  const [amp, setAmp] = useState(1.5);
  const [freq, setFreq] = useState(1);
  const [shiftSteps, setShiftSteps] = useState(0); // multiples of pi/6
  const [midline, setMidline] = useState(0);

  const theta = (deg * Math.PI) / 180;
  const shiftRad = (shiftSteps * Math.PI) / 6;
  const cosT = Math.cos(theta);
  const sinT = Math.sin(theta);

  const exact = EXACT_30_45[deg];
  const sinDisp = exact ? exact.sinLabel : fmtSigned(sinT);
  const cosDisp = exact ? exact.cosLabel : fmtSigned(cosT);
  const tanDisp = exact
    ? exact.tanLabel
    : Math.abs(cosT) < 1e-6
      ? "undef."
      : fmtSigned(sinT / cosT);

  const radLabel = formatPiFrac(deg, 180);
  const periodLabel = useMemo(() => {
    const den = Math.round(freq * 2); // freq is multiple of 0.5 -> T = 2pi / (den/2) = 4pi / den
    return formatPiFrac(4, den);
  }, [freq]);

  const evalWave = (x: number): number => {
    const arg = freq * (x - shiftRad);
    return amp * (waveFn === "sin" ? Math.sin(arg) : Math.cos(arg)) + midline;
  };

  // Build wave polyline over [0, 2pi]
  const wavePath = useMemo(() => {
    const wLeft = 34;
    const wRight = 286;
    const wTop = 18;
    const wBot = 202;
    const yMin = -5;
    const yMax = 5;
    const mapX = (x: number) => wLeft + (x / (2 * Math.PI)) * (wRight - wLeft);
    const mapY = (y: number) => wBot - ((y - yMin) / (yMax - yMin)) * (wBot - wTop);
    const pts: string[] = [];
    const steps = 160;
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * 2 * Math.PI;
      const y = amp * (waveFn === "sin" ? Math.sin(freq * (x - shiftRad)) : Math.cos(freq * (x - shiftRad))) + midline;
      const clampedY = Math.max(yMin, Math.min(yMax, y));
      pts.push(`${i === 0 ? "M" : "L"}${mapX(x).toFixed(1)},${mapY(clampedY).toFixed(1)}`);
    }
    return pts.join(" ");
  }, [amp, freq, shiftRad, midline, waveFn]);

  // Unit circle coordinates (viewBox 220 x 220, center 110,110, r = 74)
  const cx = 110;
  const cy = 110;
  const r = 74;
  const px = cx + r * cosT;
  const py = cy - r * sinT;

  // Wave viewBox coordinates (300 x 220)
  const wLeft = 34;
  const wRight = 286;
  const wTop = 18;
  const wBot = 202;
  const yMin = -5;
  const yMax = 5;
  const mapX = (x: number) => wLeft + (x / (2 * Math.PI)) * (wRight - wLeft);
  const mapY = (y: number) => wBot - ((y - yMin) / (yMax - yMin)) * (wBot - wTop);

  const curY = evalWave(theta);
  const dotX = mapX(theta);
  const dotY = mapY(Math.max(yMin, Math.min(yMax, curY)));
  const midY = mapY(midline);
  const maxVal = Number((midline + Math.abs(amp)).toFixed(2));
  const minVal = Number((midline - Math.abs(amp)).toFixed(2));

  const shiftLabel = formatPiFrac(shiftSteps, 6);
  const eqInside =
    shiftSteps === 0
      ? freq === 1
        ? "x"
        : `${freq}x`
      : freq === 1
        ? `(x ${shiftSteps > 0 ? "−" : "+"} ${formatPiFrac(Math.abs(shiftSteps), 6)})`
        : `${freq}(x ${shiftSteps > 0 ? "−" : "+"} ${formatPiFrac(Math.abs(shiftSteps), 6)})`;
  const eqMid = midline === 0 ? "" : midline > 0 ? ` + ${midline}` : ` − ${Math.abs(midline)}`;
  const eqDisplay = `y = ${fmtSigned(amp)} ${waveFn}(${eqInside})${eqMid}`;

  const quickAngles = [
    { deg: 30, label: "π/6" },
    { deg: 45, label: "π/4" },
    { deg: 60, label: "π/3" },
    { deg: 120, label: "2π/3" },
    { deg: 225, label: "5π/4" },
    { deg: 300, label: "5π/3" },
  ];

  return (
    <WidgetFrame
      title="Interactive Unit Circle & Sinusoidal Wave Modeller"
      tryThis={[
        "Move θ across all four quadrants to verify ASTC signs and exact coordinates {{(cos theta, sin theta)}}.",
        "Double frequency b from 1 to 2 and watch the period halve from {{2pi}} to {{pi}}.",
        "Set {{a = -2}}, {{b = 1}}, {{d = 1}} with cosine — where do the new maximum and minimum land?",
      ]}
      caption={
        <div className="space-y-1">
          <div className="font-bold text-ink">
            Current wave: <span className="text-brand">{eqDisplay}</span>
          </div>
          <div className="text-ink-2">
            At θ = <strong>{radLabel}</strong> ({deg}°, {quadrantLabel(deg)}), the unit circle gives{" "}
            <span className="font-semibold text-ink">
              cos θ = {cosDisp}, sin θ = {sinDisp}, tan θ = {tanDisp}
            </span>
            , and the transformed wave value is <strong>f({radLabel}) = {fmtSigned(curY)}</strong>.
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Left: Unit Circle SVG */}
        <div className="rounded-xl border border-line bg-surface-2/50 p-2">
          <div className="mb-1 text-center text-xs font-bold uppercase tracking-wide text-ink-2">
            Unit Circle: P(cos θ, sin θ)
          </div>
          <svg
            viewBox="0 0 220 220"
            className="mx-auto block h-auto w-full max-w-[260px]"
            role="img"
            aria-label={`Unit circle at angle ${deg} degrees with coordinates cosine ${cosDisp} and sine ${sinDisp}`}
          >
            {/* Axes */}
            <line x1={18} y1={cy} x2={202} y2={cy} className="stroke-line" strokeWidth={1.5} />
            <line x1={cx} y1={18} x2={cx} y2={202} className="stroke-line" strokeWidth={1.5} />
            {/* Circle */}
            <circle cx={cx} cy={cy} r={r} fill="none" className="stroke-ink-2/60" strokeWidth={2} />
            {/* Quadrant letters */}
            <text x={160} y={66} fontSize={11} fontWeight={800} className="fill-ink-2/70">A</text>
            <text x={52} y={66} fontSize={11} fontWeight={800} className="fill-ink-2/70">S</text>
            <text x={52} y={162} fontSize={11} fontWeight={800} className="fill-ink-2/70">T</text>
            <text x={160} y={162} fontSize={11} fontWeight={800} className="fill-ink-2/70">C</text>
            {/* Reference right triangle legs */}
            <line x1={cx} y1={cy} x2={px} y2={cy} className="stroke-accent" strokeWidth={3} />
            <line x1={px} y1={cy} x2={px} y2={py} className="stroke-brand" strokeWidth={3} />
            {/* Radius vector */}
            <line x1={cx} y1={cy} x2={px} y2={py} className="stroke-ink" strokeWidth={2.2} />
            {/* Angle arc */}
            {deg > 0 && deg < 360 ? (
              <path
                d={`M ${cx + 20} ${cy} A 20 20 0 ${deg > 180 ? 1 : 0} 0 ${(cx + 20 * cosT).toFixed(1)} ${(cy - 20 * sinT).toFixed(1)}`}
                fill="none"
                className="stroke-s-geometry"
                strokeWidth={2}
              />
            ) : null}
            {/* Point P */}
            <circle cx={px} cy={py} r={5.5} className="fill-brand stroke-surface" strokeWidth={2} />
            {/* Axis ticks */}
            <text x={190} y={cy - 5} fontSize={10} className="fill-ink-2">1</text>
            <text x={cx + 5} y={30} fontSize={10} className="fill-ink-2">1</text>
            <text x={20} y={cy - 5} fontSize={10} className="fill-ink-2">−1</text>
            <text x={cx + 5} y={196} fontSize={10} className="fill-ink-2">−1</text>
          </svg>
        </div>

        {/* Right: Sinusoidal Wave SVG */}
        <div className="rounded-xl border border-line bg-surface-2/50 p-2">
          <div className="mb-1 text-center text-xs font-bold uppercase tracking-wide text-ink-2">
            Wave: {eqDisplay}
          </div>
          <svg
            viewBox="0 0 300 220"
            className="mx-auto block h-auto w-full max-w-[340px]"
            role="img"
            aria-label={`Graph of ${eqDisplay} from 0 to 2 pi with point marked at x = ${radLabel}`}
          >
            {/* Horizontal grid lines y = -4..4 */}
            {[-4, -2, 0, 2, 4].map((yv) => (
              <g key={yv}>
                <line x1={wLeft} y1={mapY(yv)} x2={wRight} y2={mapY(yv)} className={yv === 0 ? "stroke-ink-2/60" : "stroke-line"} strokeWidth={yv === 0 ? 1.5 : 1} />
                <text x={wLeft - 6} y={mapY(yv) + 3.5} fontSize={9.5} textAnchor="end" className="fill-ink-2">
                  {yv}
                </text>
              </g>
            ))}
            {/* Vertical x ticks: 0, pi/2, pi, 3pi/2, 2pi */}
            {[
              { x: 0, label: "0" },
              { x: Math.PI / 2, label: "π/2" },
              { x: Math.PI, label: "π" },
              { x: (3 * Math.PI) / 2, label: "3π/2" },
              { x: 2 * Math.PI, label: "2π" },
            ].map((t) => (
              <g key={t.label}>
                <line x1={mapX(t.x)} y1={wTop} x2={mapX(t.x)} y2={wBot} className={t.x === 0 ? "stroke-ink-2/60" : "stroke-line"} strokeWidth={t.x === 0 ? 1.5 : 1} />
                <text x={mapX(t.x)} y={wBot + 13} fontSize={9.5} textAnchor="middle" className="fill-ink-2">
                  {t.label}
                </text>
              </g>
            ))}
            {/* Principal axis y = d */}
            <line x1={wLeft} y1={midY} x2={wRight} y2={midY} className="stroke-accent" strokeWidth={1.6} strokeDasharray="5,4" />
            {/* Wave curve */}
            <path d={wavePath} fill="none" className="stroke-brand" strokeWidth={2.6} />
            {/* Vertical drop from current angle x = theta */}
            <line x1={dotX} y1={midY} x2={dotX} y2={dotY} className="stroke-s-geometry" strokeWidth={2} strokeDasharray="3,2" />
            <circle cx={dotX} cy={dotY} r={5.5} className="fill-s-geometry stroke-surface" strokeWidth={2} />
          </svg>
        </div>
      </div>

      {/* Angle quick-jump buttons */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Jump to θ:</span>
        {quickAngles.map((q) => (
          <button
            key={q.deg}
            type="button"
            onClick={() => setDeg(q.deg)}
            className={`chip cursor-pointer transition ${deg === q.deg ? "border-brand bg-brand-soft text-brand" : "hover:bg-brand-soft/60"}`}
          >
            {q.label}
          </button>
        ))}
      </div>

      {/* Sliders & toggle */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-3">
          <Slider
            label="Angle θ (unit circle & wave x)"
            value={deg}
            min={0}
            max={360}
            step={15}
            onChange={setDeg}
            format={(v) => `${formatPiFrac(v, 180)} (${v}°)`}
          />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold text-ink-2">Base function</span>
            <Segmented
              label="Trigonometric wave function"
              value={waveFn}
              onChange={setWaveFn}
              options={[
                { value: "sin", label: "a sin(b(x − c)) + d" },
                { value: "cos", label: "a cos(b(x − c)) + d" },
              ]}
            />
          </div>
          <Slider
            label="Vertical scale a"
            value={amp}
            min={-3}
            max={3}
            step={0.5}
            onChange={setAmp}
            format={(v) => fmtSigned(v)}
          />
        </div>
        <div className="space-y-3">
          <Slider
            label="Frequency factor b"
            value={freq}
            min={0.5}
            max={3}
            step={0.5}
            onChange={setFreq}
            format={(v) => `${v} (T = ${periodLabel})`}
          />
          <Slider
            label="Phase shift c (right)"
            value={shiftSteps}
            min={-3}
            max={3}
            step={1}
            onChange={setShiftSteps}
            format={() => shiftLabel}
          />
          <Slider
            label="Principal axis d"
            value={midline}
            min={-2}
            max={2}
            step={0.5}
            onChange={setMidline}
            format={(v) => `y = ${fmtSigned(v)}`}
          />
        </div>
      </div>

      {/* Live readouts */}
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <Readout label="Exact (cos θ, sin θ)" value={`(${cosDisp}, ${sinDisp})`} tone="brand" />
        <Readout label="Exact tan θ" value={tanDisp} tone="ink" />
        <Readout label="Period T = 2π/b" value={periodLabel} tone="good" />
        <Readout label="Range [min, max]" value={`[${fmtSigned(minVal)}, ${fmtSigned(maxVal)}]`} tone="ink" />
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Ambiguous-Case Sine Rule Explorer
// ---------------------------------------------------------------------------
interface TriangleSolution {
  bDeg: number;
  cDeg: number;
  sideC: number;
  area: number;
}

const EPS = 1e-4;

function AmbiguousSineRuleWidget() {
  const [angleA, setAngleA] = useState(30);
  const [sideB, setSideB] = useState(10);
  const [sideA, setSideA] = useState(7);

  const aRad = (angleA * Math.PI) / 180;
  const h = sideB * Math.sin(aRad);

  const solutions = useMemo<TriangleSolution[]>(() => {
    const out: TriangleSolution[] = [];
    if (angleA >= 90) {
      // Obtuse or right A: unique triangle iff a > b
      if (sideA > sideB + EPS) {
        const sinB = (sideB * Math.sin(aRad)) / sideA;
        if (sinB <= 1) {
          const bDeg = (Math.asin(Math.min(1, sinB)) * 180) / Math.PI;
          const cDeg = 180 - angleA - bDeg;
          const sideC = (sideA * Math.sin((cDeg * Math.PI) / 180)) / Math.sin(aRad);
          out.push({ bDeg, cDeg, sideC, area: 0.5 * sideB * sideC * Math.sin(aRad) });
        }
      }
      return out;
    }

    // Acute A
    if (sideA < h - EPS) return out;
    if (Math.abs(sideA - h) <= EPS) {
      const bDeg = 90;
      const cDeg = 90 - angleA;
      const sideC = sideB * Math.cos(aRad);
      out.push({ bDeg, cDeg, sideC, area: 0.5 * sideC * h });
      return out;
    }

    const sinB = Math.min(1, (sideB * Math.sin(aRad)) / sideA);
    const b1 = (Math.asin(sinB) * 180) / Math.PI;
    const c1 = 180 - angleA - b1;
    if (c1 > EPS) {
      const sideC1 = (sideA * Math.sin((c1 * Math.PI) / 180)) / Math.sin(aRad);
      out.push({ bDeg: b1, cDeg: c1, sideC: sideC1, area: 0.5 * sideB * sideC1 * Math.sin(aRad) });
    }
    if (sideA < sideB - EPS) {
      const b2 = 180 - b1;
      const c2 = 180 - angleA - b2;
      if (c2 > EPS) {
        const sideC2 = (sideA * Math.sin((c2 * Math.PI) / 180)) / Math.sin(aRad);
        out.push({ bDeg: b2, cDeg: c2, sideC: sideC2, area: 0.5 * sideB * sideC2 * Math.sin(aRad) });
      }
    }
    return out;
  }, [angleA, sideA, sideB, aRad, h]);

  // Map geometric coordinates into SVG viewBox 440 x 235
  // Vertex A sits at (Ax, baseY); C sits at (Ax + b cos A, baseY - b sin A)
  const baseY = 195;
  const cxWorld = sideB * Math.cos(aRad);
  const cyWorld = sideB * Math.sin(aRad);
  const maxX = Math.max(cxWorld + sideA + 1.5, sideB + 4, 14);
  const minX = Math.min(0, cxWorld - sideA - 1, -2);
  const spanX = Math.max(maxX - minX, 14);
  const spanY = Math.max(cyWorld + 2.5, sideA * 0.5 + 3, 10);
  const scale = Math.min(390 / spanX, 165 / spanY);
  const originX = 28 - minX * scale;

  const toX = (x: number) => originX + x * scale;
  const toY = (y: number) => baseY - y * scale;

  const ax = toX(0);
  const cx = toX(cxWorld);
  const cy = toY(cyWorld);
  const arcR = sideA * scale;

  const countTone: "bad" | "good" | "brand" =
    solutions.length === 0 ? "bad" : solutions.length === 2 ? "brand" : "good";

  const statusMsg =
    angleA >= 90
      ? solutions.length === 0
        ? `Because ∠A = ${angleA}° is not acute, side a must exceed side b = ${sideB} — currently a = ${sideA} ≤ b, so 0 triangles exist.`
        : `Because ∠A = ${angleA}° ≥ 90° and a = ${sideA} > b = ${sideB}, exactly 1 unique triangle exists.`
      : solutions.length === 0
        ? `Since a = ${sideA} < h = b sin A ≈ ${h.toFixed(2)}, the swinging side cannot reach the base ray — 0 triangles exist.`
        : Math.abs(sideA - h) <= EPS
          ? `Exact tangency! Since a = h = b sin A = ${h.toFixed(2)}, the arc kisses the base ray at 90° — 1 right-angled triangle.`
          : solutions.length === 2
            ? `Ambiguous case! Because h ≈ ${h.toFixed(2)} < a = ${sideA} < b = ${sideB}, the arc cuts the base ray twice: acute ∠B₁ = ${solutions[0].bDeg.toFixed(1)}° and obtuse ∠B₂ = ${solutions[1].bDeg.toFixed(1)}° (= 180° − ∠B₁).`
            : `Since a = ${sideA} ≥ b = ${sideB}, the second arc intersection falls behind vertex A (invalid), leaving 1 unique triangle with ∠B = ${solutions[0].bDeg.toFixed(1)}°.`;

  return (
    <WidgetFrame
      title="Ambiguous-Case Sine Rule Explorer (SSA)"
      tryThis={[
        "Fix {{∠A = 30°}} and {{b = 10}}, then slide {{a}} smoothly from 3 up to 12 — watch the count jump 0 → 1 → 2 → 1!",
        "In the 2-triangle regime, verify that {{∠B_1 + ∠B_2 = 180°}} and notice the isosceles triangle formed by the two arms of length {{a}}.",
        "Switch {{∠A}} to an obtuse angle (e.g. 110°) — can the ambiguous 2-triangle case EVER happen when ∠A ≥ 90°?",
      ]}
      caption={
        <div className="space-y-1">
          <div className="font-bold text-ink">{statusMsg}</div>
          <div className="text-xs text-ink-2">
            Rule summary (for acute A): <M>{"a < b sin A"}</M> → 0 triangles · <M>{"a = b sin A"}</M> → 1 right triangle ·{" "}
            <M>{"b sin A < a < b"}</M> → 2 triangles · <M>{"a >= b"}</M> → 1 triangle.
          </div>
        </div>
      }
    >
      {/* Presets */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        <button
          type="button"
          className="chip cursor-pointer hover:bg-brand-soft"
          onClick={() => {
            setAngleA(30);
            setSideB(10);
            setSideA(3.5);
          }}
        >
          0 triangles (a &lt; h)
        </button>
        <button
          type="button"
          className="chip cursor-pointer hover:bg-brand-soft"
          onClick={() => {
            setAngleA(30);
            setSideB(10);
            setSideA(5);
          }}
        >
          1 right triangle (a = h)
        </button>
        <button
          type="button"
          className="chip cursor-pointer hover:bg-brand-soft"
          onClick={() => {
            setAngleA(30);
            setSideB(10);
            setSideA(7);
          }}
        >
          2 triangles (h &lt; a &lt; b)
        </button>
        <button
          type="button"
          className="chip cursor-pointer hover:bg-brand-soft"
          onClick={() => {
            setAngleA(30);
            setSideB(10);
            setSideA(12);
          }}
        >
          1 unique (a ≥ b)
        </button>
      </div>

      {/* Live geometric SVG */}
      <div className="rounded-xl border border-line bg-surface-2/50 p-2">
        <svg
          viewBox="0 0 440 235"
          className="mx-auto block h-auto w-full max-w-[520px]"
          role="img"
          aria-label={`Ambiguous case sine rule diagram for angle A ${angleA} degrees, side b ${sideB}, side a ${sideA}, showing ${solutions.length} valid triangle${solutions.length === 1 ? "" : "s"}`}
        >
          {/* Base ray extending right from A */}
          <line x1={12} y1={baseY} x2={ax} y2={baseY} className="stroke-line" strokeWidth={1.5} strokeDasharray="3,4" />
          <line x1={ax} y1={baseY} x2={428} y2={baseY} className="stroke-ink-2" strokeWidth={2} strokeDasharray="6,4" />

          {/* Shaded triangle(s) */}
          {solutions.length === 2 ? (
            <polygon
              points={`${cx.toFixed(1)},${cy.toFixed(1)} ${toX(solutions[0].sideC).toFixed(1)},${baseY} ${toX(solutions[1].sideC).toFixed(1)},${baseY}`}
              className="fill-brand-soft/60"
            />
          ) : null}

          {/* Full swing circle (dashed, light) */}
          <circle
            cx={cx}
            cy={cy}
            r={arcR}
            fill="none"
            className="stroke-s-geometry/65"
            strokeWidth={1.8}
            strokeDasharray="5,4"
          />

          {/* Altitude h = b sin A (for acute A) */}
          {angleA < 90 ? (
            <g>
              <line x1={cx} y1={cy} x2={cx} y2={baseY} className="stroke-accent" strokeWidth={1.6} strokeDasharray="4,3" />
              <rect x={cx} y={baseY - 9} width={9} height={9} fill="none" className="stroke-accent" strokeWidth={1.2} />
              <text x={cx + 5} y={(cy + baseY) / 2} fontSize={10.5} fontWeight={700} className="fill-accent">
                h = {h.toFixed(1)}
              </text>
            </g>
          ) : null}

          {/* Fixed side b = AC */}
          <line x1={ax} y1={baseY} x2={cx} y2={cy} className="stroke-brand" strokeWidth={3} />
          <text x={(ax + cx) / 2 - 14} y={(baseY + cy) / 2 - 6} fontSize={12} fontWeight={800} className="fill-brand">
            b = {sideB}
          </text>

          {/* Valid solution arms CB1 (and CB2) */}
          {solutions.map((sol, idx) => {
            const bx = toX(sol.sideC);
            const isSecond = idx === 1;
            return (
              <g key={idx}>
                <line
                  x1={ax}
                  y1={baseY}
                  x2={bx}
                  y2={baseY}
                  className={isSecond ? "stroke-accent" : "stroke-ink"}
                  strokeWidth={2.4}
                />
                <line
                  x1={cx}
                  y1={cy}
                  x2={bx}
                  y2={baseY}
                  className={isSecond ? "stroke-accent" : "stroke-s-geometry"}
                  strokeWidth={2.8}
                />
                <circle
                  cx={bx}
                  cy={baseY}
                  r={5}
                  className={isSecond ? "fill-accent stroke-surface" : "fill-s-geometry stroke-surface"}
                  strokeWidth={1.8}
                />
                <text
                  x={bx}
                  y={baseY + 17}
                  fontSize={11.5}
                  fontWeight={800}
                  textAnchor="middle"
                  className={isSecond ? "fill-accent" : "fill-s-geometry"}
                >
                  {solutions.length === 2 ? (isSecond ? "B₂" : "B₁") : "B"} ({sol.bDeg.toFixed(0)}°)
                </text>
              </g>
            );
          })}

          {/* Vertices A and C */}
          <circle cx={ax} cy={baseY} r={4.5} className="fill-ink" />
          <circle cx={cx} cy={cy} r={4.5} className="fill-brand" />
          <text x={ax - 12} y={baseY + 16} fontSize={12.5} fontWeight={800} className="fill-ink">
            A ({angleA}°)
          </text>
          <text x={cx} y={cy - 10} fontSize={12.5} fontWeight={800} textAnchor="middle" className="fill-brand">
            C
          </text>
        </svg>
      </div>

      {/* Sliders */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Slider
          label="Angle A"
          value={angleA}
          min={15}
          max={120}
          step={5}
          onChange={setAngleA}
          format={(v) => `${v}°`}
        />
        <Slider
          label="Adjacent side b"
          value={sideB}
          min={6}
          max={14}
          step={0.5}
          onChange={setSideB}
        />
        <Slider
          label="Opposite side a"
          value={sideA}
          min={1}
          max={16}
          step={0.5}
          onChange={setSideA}
        />
      </div>

      {/* Readouts */}
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <Readout label="Valid Triangles" value={solutions.length} tone={countTone} />
        <Readout label="Altitude h = b sin A" value={h.toFixed(2)} tone="ink" />
        <Readout
          label="Angle B₁ (primary)"
          value={solutions[0] ? `${solutions[0].bDeg.toFixed(1)}°` : "None"}
          tone={solutions[0] ? "good" : "bad"}
        />
        <Readout
          label="Angle B₂ (obtuse)"
          value={solutions[1] ? `${solutions[1].bDeg.toFixed(1)}°` : "—"}
          tone={solutions[1] ? "brand" : "ink"}
        />
      </div>

      {/* Detailed side/area comparison when 1 or 2 solutions exist */}
      {solutions.length > 0 ? (
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {solutions.map((s, idx) => (
            <div key={idx} className="rounded-xl border border-line bg-surface px-3 py-2 text-xs text-ink-2">
              <span className="font-extrabold text-ink">
                Triangle {solutions.length === 2 ? idx + 1 : ""}:{" "}
              </span>
              ∠B = <strong>{s.bDeg.toFixed(1)}°</strong>, ∠C = <strong>{s.cDeg.toFixed(1)}°</strong>, side c ={" "}
              <strong>{s.sideC.toFixed(2)}</strong>, Area = <strong>{s.area.toFixed(2)}</strong>
            </div>
          ))}
        </div>
      ) : null}
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "unit-circle-wave",
    title: "Unit Circle & Sinusoidal Wave Modeller",
    blurb:
      "Sync an angle {{theta}} on the unit circle with exact coordinates {{(cos theta, sin theta)}} and explore amplitude, frequency {{b}}, phase shift {{c}}, and midline {{d}} on {{y = a sin(b(x - c)) + d}}.",
    Component: UnitCircleWaveWidget,
  },
  {
    id: "ambiguous-sine-rule",
    title: "Ambiguous-Case Sine Rule Explorer",
    blurb:
      "Vary angle {{A}} and opposite side {{a}} against altitude {{h = b sin A}} to watch 0, 1, or 2 distinct triangles form live in geometry.",
    Component: AmbiguousSineRuleWidget,
  },
];

export default widgets;
