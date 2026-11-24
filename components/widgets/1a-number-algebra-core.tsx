"use client";
import { useMemo, useState } from "react";
import {
  M,
  PlaneGrid,
  Readout,
  Segmented,
  Slider,
  Stepper,
  WidgetFrame,
  makePlane,
  type WidgetDef,
} from "./kit";

function fmtVal(n: number): string {
  if (!Number.isFinite(n)) return "—";
  if (Math.abs(n) >= 10000) return n.toExponential(2);
  const rounded = Math.round(n * 1000) / 1000;
  return rounded < 0 ? `−${Math.abs(rounded)}` : `${rounded}`;
}

function nCr(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  const k = Math.min(r, n - r);
  const nums = Array.from({ length: k }, (_, i) => i + 1);
  return Math.round(nums.reduce((acc, i) => (acc * (n - k + i)) / i, 1));
}

function GeometricConvergenceExplorer() {
  const [u1, setU1] = useState(4);
  const [r, setR] = useState(0.6);
  const [terms, setTerms] = useState(10);

  const data = useMemo(() => {
    const converges = Math.abs(r) < 1 - 1e-9;
    const sInf = converges ? u1 / (1 - r) : null;
    const items = Array.from({ length: terms }, (_, idx) => {
      const k = idx + 1;
      const uk = u1 * Math.pow(r, idx);
      const sk = Math.abs(r - 1) < 1e-9 ? u1 * k : (u1 * (1 - Math.pow(r, k))) / (1 - r);
      return { k, uk, sk };
    });

    const finiteYs = [
      0,
      ...items.map((it) => it.uk),
      ...items.map((it) => it.sk),
      ...(sInf !== null ? [sInf] : []),
    ].filter((v) => Number.isFinite(v));

    const rawMin = Math.min(...finiteYs);
    const rawMax = Math.max(...finiteYs);
    const span = Math.max(1, rawMax - rawMin);
    const yMin = rawMin - span * 0.14;
    const yMax = rawMax + span * 0.14;

    return { converges, sInf, items, yMin, yMax };
  }, [u1, r, terms]);

  const W = 560;
  const H = 250;
  const padL = 48;
  const padR = 18;
  const padT = 22;
  const padB = 34;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const yToPx = (y: number) => padT + ((data.yMax - y) / (data.yMax - data.yMin)) * plotH;
  const zeroY = yToPx(0);
  const stepX = plotW / terms;
  const barW = Math.max(10, Math.min(26, stepX * 0.52));

  const last = data.items[data.items.length - 1];
  const polyPoints = data.items
    .map((it, idx) => `${(padL + (idx + 0.5) * stepX).toFixed(1)},${yToPx(it.sk).toFixed(1)}`)
    .join(" ");

  return (
    <WidgetFrame
      title="Geometric Sequence & Infinite Series Convergence Explorer"
      tryThis={[
        "Set {{r = 0.5}} and watch the violet partial sums {{S_n}} climb asymptotically towards the red dashed line {{S_∞}}.",
        "Slide {{r}} to a negative fraction like {{-0.7}} — notice how the bars alternate sign while {{S_n}} spirals tightly onto {{S_∞}}!",
        "Push {{r}} past {{1}} or below {{-1}} to see why {{S_∞}} fails to exist when {{|r| >= 1}}.",
      ]}
      caption={
        data.converges && data.sInf !== null ? (
          <span>
            Because <M>{"|r| < 1"}</M>, the individual terms <M>{"u_n → 0"}</M> and the partial sums converge to{" "}
            <strong>
              <M>{"S_∞ = u_1 / (1 - r)"}</M> = {fmtVal(data.sInf)}
            </strong>
            . After {terms} terms, the remaining tail error is{" "}
            <strong className="tabular-nums">{fmtVal(Math.abs(data.sInf - last.sk))}</strong>.
          </span>
        ) : (
          <span>
            Since <M>{"|r| >= 1"}</M> (and <M>{"u_1 != 0"}</M>), the terms do not decay to zero: the series{" "}
            <strong className="text-bad">diverges</strong> and has no finite sum to infinity.
          </span>
        )
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Slider
          label={
            <span>
              First term <M>{"u_1"}</M>
            </span>
          }
          value={u1}
          min={-6}
          max={6}
          step={0.5}
          onChange={(v) => setU1(v === 0 ? 0.5 : v)}
          format={(v) => fmtVal(v)}
        />
        <Slider
          label={
            <span>
              Common ratio <M>{"r"}</M>
            </span>
          }
          value={r}
          min={-1.35}
          max={1.35}
          step={0.05}
          onChange={setR}
          format={(v) => fmtVal(v)}
        />
      </div>

      <div className="mt-3 max-w-xs">
        <Stepper label="Number of terms N" value={terms} min={4} max={14} onChange={setTerms} />
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Bar chart of geometric terms and line plot of partial sums"
        >
          {/* Horizontal reference ticks */}
          {[data.yMax, (data.yMax + data.yMin) / 2, data.yMin].map((val, idx) => {
            const py = yToPx(val);
            return (
              <g key={`tick-${idx}`}>
                <line x1={padL} x2={W - padR} y1={py} y2={py} className="stroke-line" strokeWidth={1} />
                <text x={padL - 6} y={py + 3} fontSize={9.5} textAnchor="end" className="fill-ink-2">
                  {fmtVal(val)}
                </text>
              </g>
            );
          })}

          {/* Zero axis */}
          <line x1={padL} x2={W - padR} y1={zeroY} y2={zeroY} className="stroke-ink-2" strokeWidth={1.4} />
          <line x1={padL} x2={padL} y1={padT} y2={H - padB} className="stroke-ink-2" strokeWidth={1.4} />

          {/* S_infinity asymptote */}
          {data.converges && data.sInf !== null ? (
            <g>
              <line
                x1={padL}
                x2={W - padR}
                y1={yToPx(data.sInf)}
                y2={yToPx(data.sInf)}
                stroke="#dc2626"
                strokeWidth={1.8}
                strokeDasharray="6 4"
              />
              <text
                x={W - padR - 4}
                y={Math.max(padT + 10, yToPx(data.sInf) - 5)}
                fontSize={10.5}
                fontWeight={700}
                textAnchor="end"
                fill="#dc2626"
              >
                S∞ = {fmtVal(data.sInf)}
              </text>
            </g>
          ) : null}

          {/* Term bars u_k */}
          {data.items.map((it, idx) => {
            const cx = padL + (idx + 0.5) * stepX;
            const yTop = it.uk >= 0 ? yToPx(it.uk) : zeroY;
            const barH = Math.max(1.5, Math.abs(yToPx(it.uk) - zeroY));
            return (
              <g key={`bar-${it.k}`}>
                <rect
                  x={cx - barW / 2}
                  y={yTop}
                  width={barW}
                  height={barH}
                  rx={3}
                  fill={it.uk >= 0 ? "#93c5fd" : "#fcd34d"}
                  stroke={it.uk >= 0 ? "#2563eb" : "#d97706"}
                  strokeWidth={1.2}
                />
                <text x={cx} y={H - 12} fontSize={9.5} textAnchor="middle" className="fill-ink-2">
                  {it.k}
                </text>
              </g>
            );
          })}

          {/* Partial sum polyline S_k */}
          <polyline points={polyPoints} fill="none" stroke="#7c3aed" strokeWidth={2.4} />
          {data.items.map((it, idx) => {
            const cx = padL + (idx + 0.5) * stepX;
            return <circle key={`pt-${it.k}`} cx={cx} cy={yToPx(it.sk)} r={3.8} fill="#7c3aed" />;
          })}
        </svg>

        <div className="mt-2 flex flex-wrap items-center gap-4 px-2 text-xs font-semibold text-ink-2">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-400" />
            Terms uₙ (blue +, amber −)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-violet-600" />
            Partial sums Sₙ
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-0.5 w-4 border-t-2 border-dashed border-red-600" />
            Limit S∞ (|r| &lt; 1)
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <Readout label={`Term u_${terms}`} value={fmtVal(last.uk)} tone="ink" />
        <Readout label={`Partial sum S_${terms}`} value={fmtVal(last.sk)} tone="brand" />
        <Readout
          label="Sum to ∞"
          value={data.converges && data.sInf !== null ? fmtVal(data.sInf) : "Diverges"}
          tone={data.converges ? "good" : "bad"}
        />
        <Readout
          label="|r| test"
          value={data.converges ? "|r| < 1 ✓" : "|r| ≥ 1 ✗"}
          tone={data.converges ? "good" : "bad"}
        />
      </div>
    </WidgetFrame>
  );
}

function LogBinomialLab() {
  const [mode, setMode] = useState<"logs" | "binomial">("logs");

  // Log mode state
  const [base, setBase] = useState(2);
  const [mVal, setMVal] = useState(4);
  const [nVal, setNVal] = useState(2);
  const [kExp, setKExp] = useState(3);

  // Binomial mode state
  const [nPow, setNPow] = useState(5);
  const [rIdx, setRIdx] = useState(2);
  const [aCoef, setACoef] = useState(2);
  const [bCoef, setBCoef] = useState(-1);

  const safeR = Math.min(rIdx, nPow);

  const logStats = useMemo(() => {
    const lnA = Math.log(base);
    const logM = Math.log(mVal) / lnA;
    const logN = Math.log(nVal) / lnA;
    const logProd = Math.log(mVal * nVal) / lnA;
    const logQuot = Math.log(mVal / nVal) / lnA;
    const logPow = Math.log(Math.pow(mVal, kExp)) / lnA;
    return { logM, logN, logProd, logQuot, logPow };
  }, [base, mVal, nVal, kExp]);

  const plane = useMemo(
    () => makePlane({ width: 380, height: 240, xMin: -2, xMax: 10, yMin: -3, yMax: 6, pad: 24 }),
    [],
  );

  const curvePaths = useMemo(() => {
    const lnA = Math.log(base);
    const logPts: string[] = [];
    for (let i = 0; i <= 90; i++) {
      const x = 0.08 + (i / 90) * (plane.xMax - 0.08);
      const y = Math.log(x) / lnA;
      if (y >= plane.yMin && y <= plane.yMax) {
        logPts.push(`${logPts.length === 0 ? "M" : "L"}${plane.px(x).toFixed(1)} ${plane.py(y).toFixed(1)}`);
      }
    }
    const expPts: string[] = [];
    for (let i = 0; i <= 90; i++) {
      const x = plane.xMin + (i / 90) * (plane.xMax - plane.xMin);
      const y = Math.pow(base, x);
      if (y >= plane.yMin && y <= plane.yMax) {
        expPts.push(`${expPts.length === 0 ? "M" : "L"}${plane.px(x).toFixed(1)} ${plane.py(y).toFixed(1)}`);
      }
    }
    return { logPath: logPts.join(" "), expPath: expPts.join(" ") };
  }, [base, plane]);

  const binomStats = useMemo(() => {
    const comb = nCr(nPow, safeR);
    const aPart = Math.pow(aCoef, nPow - safeR);
    const bPart = Math.pow(bCoef, safeR);
    const fullCoeff = comb * aPart * bPart;
    const rows = Array.from({ length: 8 }, (_, row) =>
      Array.from({ length: row + 1 }, (_, col) => ({
        row,
        col,
        val: nCr(row, col),
      })),
    );
    return { comb, aPart, bPart, fullCoeff, rows };
  }, [nPow, safeR, aCoef, bCoef]);

  const showReflected =
    logStats.logM >= plane.xMin &&
    logStats.logM <= plane.xMax &&
    mVal >= plane.yMin &&
    mVal <= plane.yMax;

  return (
    <WidgetFrame
      title="Logarithm Laws & Binomial Coefficient Lab"
      tryThis={
        mode === "logs"
          ? [
              "Change base {{a}} and watch {{y = log_a(x)}} reflect {{y = a^x}} symmetrically across {{y = x}}.",
              "Set {{a = 2, M = 8, N = 2}} to verify exact integer values for all four logarithm laws simultaneously.",
            ]
          : [
              "Click any circle in Pascal's triangle to inspect {{nCr}} and see the two blue parent entries above it add up to it!",
              "Set {{b = -1}} and step {{r}} from {{0}} to {{n}} to watch the signs of the binomial coefficients alternate.",
            ]
      }
      caption={
        mode === "logs" ? (
          <span>
            Change-of-base check: <M>{`log_${base}(${mVal}) = ln(${mVal}) / ln(${base})`}</M> ={" "}
            <strong className="tabular-nums">{logStats.logM.toFixed(4)}</strong>. Notice how products become sums and
            quotients become differences regardless of base <M>{"a"}</M>.
          </span>
        ) : (
          <span>
            Selected term <M>{`T_${safeR + 1}`}</M> in{" "}
            <M>{`(${aCoef} ${bCoef < 0 ? "-" : "+"} ${Math.abs(bCoef)}x)^${nPow}`}</M>:{" "}
            <M>{`${nPow}C${safeR} * (${aCoef})^${nPow - safeR} * (${bCoef}x)^${safeR}`}</M> ={" "}
            <strong>
              {fmtVal(binomStats.fullCoeff)}
              {safeR === 0 ? "" : safeR === 1 ? "x" : `x^${safeR}`}
            </strong>
            .
          </span>
        )
      }
    >
      <div className="mb-4">
        <Segmented
          label="Lab mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "logs", label: "Logarithm Laws & Curves" },
            { value: "binomial", label: "Pascal & Binomial Term" },
          ]}
        />
      </div>

      {mode === "logs" ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Stepper label="Base a" value={base} min={2} max={10} onChange={setBase} />
            <Stepper label="Exponent k" value={kExp} min={-2} max={4} onChange={setKExp} />
            <Slider label="Argument M" value={mVal} min={0.5} max={10} step={0.5} onChange={setMVal} />
            <Slider label="Argument N" value={nVal} min={0.5} max={8} step={0.5} onChange={setNVal} />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
              <svg
                viewBox={`0 0 ${plane.width} ${plane.height}`}
                className="h-auto w-full"
                role="img"
                aria-label="Graphs of y equals a to the x and y equals log base a of x"
              >
                <PlaneGrid plane={plane} step={2} />
                <line
                  x1={plane.px(-2)}
                  y1={plane.py(-2)}
                  x2={plane.px(6)}
                  y2={plane.py(6)}
                  stroke="#94a3b8"
                  strokeWidth={1.3}
                  strokeDasharray="4 4"
                />
                {curvePaths.expPath ? (
                  <path d={curvePaths.expPath} fill="none" stroke="#2563eb" strokeWidth={2.2} />
                ) : null}
                {curvePaths.logPath ? (
                  <path d={curvePaths.logPath} fill="none" stroke="#0f766e" strokeWidth={2.4} />
                ) : null}
                {showReflected ? (
                  <line
                    x1={plane.px(mVal)}
                    y1={plane.py(logStats.logM)}
                    x2={plane.px(logStats.logM)}
                    y2={plane.py(mVal)}
                    stroke="#7c3aed"
                    strokeWidth={1.3}
                    strokeDasharray="3 3"
                  />
                ) : null}
                <circle cx={plane.px(mVal)} cy={plane.py(logStats.logM)} r={4.5} fill="#0f766e" />
                {showReflected ? (
                  <circle cx={plane.px(logStats.logM)} cy={plane.py(mVal)} r={4.5} fill="#2563eb" />
                ) : null}
              </svg>
              <div className="mt-1 flex flex-wrap gap-3 px-2 text-xs font-semibold text-ink-2">
                <span className="text-blue-600">Blue: y = {base}ˣ</span>
                <span className="text-teal-700">Teal: y = log_{base}(x)</span>
                <span className="text-slate-500">Dashed: y = x</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <Readout
                label="Product law: log(M·N)"
                value={logStats.logProd.toFixed(3)}
                tone="brand"
              />
              <Readout
                label="log(M) + log(N)"
                value={(logStats.logM + logStats.logN).toFixed(3)}
                tone="good"
              />
              <Readout
                label="Quotient: log(M/N)"
                value={logStats.logQuot.toFixed(3)}
                tone="brand"
              />
              <Readout
                label="log(M) − log(N)"
                value={(logStats.logM - logStats.logN).toFixed(3)}
                tone="good"
              />
              <Readout
                label={`Power: log(M^${kExp})`}
                value={logStats.logPow.toFixed(3)}
                tone="brand"
              />
              <Readout
                label={`${kExp} · log(M)`}
                value={(kExp * logStats.logM).toFixed(3)}
                tone="good"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Stepper
              label="Power n"
              value={nPow}
              min={1}
              max={7}
              onChange={(v) => {
                setNPow(v);
                if (rIdx > v) setRIdx(v);
              }}
            />
            <Stepper label="Index r" value={safeR} min={0} max={nPow} onChange={setRIdx} />
            <Stepper
              label="First term a"
              value={aCoef}
              min={-3}
              max={3}
              onChange={(v) => setACoef(v === 0 ? 1 : v)}
            />
            <Stepper
              label="x-coefficient b"
              value={bCoef}
              min={-3}
              max={3}
              onChange={(v) => setBCoef(v === 0 ? 1 : v)}
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
            <svg
              viewBox="0 0 460 250"
              className="h-auto w-full"
              role="img"
              aria-label="Interactive Pascal's triangle up to row 7"
            >
              {binomStats.rows.map((cells, row) => {
                const cy = 22 + row * 30;
                const spacing = 46;
                const startX = 230 - (row * spacing) / 2;
                return (
                  <g key={`row-${row}`}>
                    <text x={14} y={cy + 4} fontSize={10} fontWeight={600} className="fill-ink-2">
                      n={row}
                    </text>
                    {cells.map((cell) => {
                      const cx = startX + cell.col * spacing;
                      const isTarget = cell.row === nPow && cell.col === safeR;
                      const isParent =
                        cell.row === nPow - 1 &&
                        safeR > 0 &&
                        safeR < nPow &&
                        (cell.col === safeR - 1 || cell.col === safeR);
                      const fill = isTarget ? "#ede9fe" : isParent ? "#dbeafe" : "#ffffff";
                      const stroke = isTarget ? "#7c3aed" : isParent ? "#2563eb" : "#94a3b8";
                      const textFill = isTarget ? "#6d28d9" : isParent ? "#1d4ed8" : "#1e293b";
                      return (
                        <g
                          key={`cell-${cell.row}-${cell.col}`}
                          onClick={() => {
                            setNPow(Math.max(1, cell.row));
                            setRIdx(cell.row === 0 ? 0 : cell.col);
                          }}
                          className="cursor-pointer"
                        >
                          <circle cx={cx} cy={cy} r={13} fill={fill} stroke={stroke} strokeWidth={isTarget || isParent ? 2 : 1.1} />
                          <text
                            x={cx}
                            y={cy + 4}
                            fontSize={11}
                            fontWeight={700}
                            textAnchor="middle"
                            fill={textFill}
                          >
                            {cell.val}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            <Readout label={`${nPow}C${safeR}`} value={binomStats.comb} tone="brand" />
            <Readout label={`a^(${nPow - safeR})`} value={fmtVal(binomStats.aPart)} tone="ink" />
            <Readout label={`b^${safeR}`} value={fmtVal(binomStats.bPart)} tone="ink" />
            <Readout
              label={`Coeff of x^${safeR}`}
              value={fmtVal(binomStats.fullCoeff)}
              tone="good"
            />
          </div>
        </div>
      )}
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "geometric-series-convergence",
    title: "Geometric Sequence & Infinite Series Convergence Explorer",
    blurb: "Drag u₁ and r to see terms uₙ, partial sums Sₙ, and the limit S∞ = u₁/(1 − r) in real time.",
    Component: GeometricConvergenceExplorer,
  },
  {
    id: "log-binomial-lab",
    title: "Logarithm Laws & Binomial Coefficient Lab",
    blurb: "Explore log laws & inverse curves y = logₐ(x) vs y = aˣ, or click Pascal's triangle to build binomial terms.",
    Component: LogBinomialLab,
  },
];

export default widgets;
