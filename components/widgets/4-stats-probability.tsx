"use client";
import { useMemo, useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Pure numerical helpers (Normal PDF/CDF via Abramowitz & Stegun 7.1.26,
// exact Binomial PMF/CDF)
// ---------------------------------------------------------------------------
function erfApprox(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const poly =
    (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t) *
    Math.exp(-ax * ax);
  return sign * (1 - poly);
}

function stdNormalCdf(z: number): number {
  return 0.5 * (1 + erfApprox(z / Math.SQRT2));
}

function stdNormalPdf(z: number): number {
  return Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
}

function binomPmf(n: number, p: number, k: number): number {
  if (k < 0 || k > n) return 0;
  let coeff = 1;
  const r = Math.min(k, n - k);
  for (let i = 1; i <= r; i++) {
    coeff = (coeff * (n - r + i)) / i;
  }
  return coeff * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

function fmt(x: number, dp = 3): string {
  return Number(x.toFixed(dp)).toString();
}

// ---------------------------------------------------------------------------
// WIDGET 1: Interactive Normal & Binomial Distribution Shading Lab
// ---------------------------------------------------------------------------
type DistMode = "normal" | "binomial";
type TailMode = "between" | "left" | "right";

function NormalBinomialLab() {
  const [dist, setDist] = useState<DistMode>("normal");

  // Normal state (bounds stored in z-units so dragging μ or σ never clips them)
  const [mu, setMu] = useState(70);
  const [sigma, setSigma] = useState(10);
  const [tail, setTail] = useState<TailMode>("between");
  const [zA, setZA] = useState(-1);
  const [zB, setZB] = useState(1.5);

  // Binomial state
  const [n, setN] = useState(12);
  const [p, setP] = useState(0.35);
  const [bLo, setBLo] = useState(3);
  const [bHi, setBHi] = useState(6);

  const loK = Math.min(Math.min(bLo, bHi), n);
  const hiK = Math.min(Math.max(bLo, bHi), n);

  // Normal geometry & probability
  const normalData = useMemo(() => {
    const zLo = Math.min(zA, zB);
    const zHi = Math.max(zA, zB);
    const xA = mu + zLo * sigma;
    const xB = mu + zHi * sigma;

    let prob = 0;
    let tiSyntax = "";
    let labelExpr = "";
    if (tail === "between") {
      prob = stdNormalCdf(zHi) - stdNormalCdf(zLo);
      tiSyntax = `normCdf(${fmt(xA, 2)}, ${fmt(xB, 2)}, ${mu}, ${sigma})`;
      labelExpr = `P(${fmt(xA, 1)} ≤ X ≤ ${fmt(xB, 1)})`;
    } else if (tail === "left") {
      prob = stdNormalCdf(zB);
      const xbSingle = mu + zB * sigma;
      tiSyntax = `normCdf(-9E99, ${fmt(xbSingle, 2)}, ${mu}, ${sigma})`;
      labelExpr = `P(X ≤ ${fmt(xbSingle, 1)})`;
    } else {
      prob = 1 - stdNormalCdf(zA);
      const xaSingle = mu + zA * sigma;
      tiSyntax = `normCdf(${fmt(xaSingle, 2)}, 9E99, ${mu}, ${sigma})`;
      labelExpr = `P(X ≥ ${fmt(xaSingle, 1)})`;
    }

    const W = 520;
    const H = 225;
    const padL = 28;
    const padR = 28;
    const baseY = 176;
    const peakH = 138;
    const zMin = -3.6;
    const zMax = 3.6;
    const sx = (z: number) => padL + ((z - zMin) / (zMax - zMin)) * (W - padL - padR);
    const sy = (z: number) => baseY - (stdNormalPdf(z) / stdNormalPdf(0)) * peakH;

    const steps = 120;
    const curvePts: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const z = zMin + (i / steps) * (zMax - zMin);
      curvePts.push(`${i === 0 ? "M" : "L"} ${sx(z).toFixed(1)} ${sy(z).toFixed(1)}`);
    }

    const shadeStart = tail === "left" ? zMin : tail === "right" ? zA : zLo;
    const shadeEnd = tail === "left" ? zB : tail === "right" ? zMax : zHi;
    const shadePts: string[] = [`M ${sx(shadeStart).toFixed(1)} ${baseY}`];
    const shadeSteps = 80;
    for (let i = 0; i <= shadeSteps; i++) {
      const z = shadeStart + (i / shadeSteps) * (shadeEnd - shadeStart);
      shadePts.push(`L ${sx(z).toFixed(1)} ${sy(z).toFixed(1)}`);
    }
    shadePts.push(`L ${sx(shadeEnd).toFixed(1)} ${baseY} Z`);

    return {
      zLo,
      zHi,
      xA,
      xB,
      prob,
      tiSyntax,
      labelExpr,
      curvePath: curvePts.join(" "),
      shadePath: shadePts.join(" "),
      sx,
      sy,
      baseY,
      W,
      H,
    };
  }, [mu, sigma, tail, zA, zB]);

  // Binomial geometry & probability
  const binomData = useMemo(() => {
    const bars: Array<{ k: number; pmf: number; active: boolean }> = [];
    let maxP = 0;
    let sumP = 0;
    for (let k = 0; k <= n; k++) {
      const pmf = binomPmf(n, p, k);
      const active = k >= loK && k <= hiK;
      if (pmf > maxP) maxP = pmf;
      if (active) sumP += pmf;
      bars.push({ k, pmf, active });
    }
    const mean = n * p;
    const sd = Math.sqrt(n * p * (1 - p));
    const tiSyntax =
      loK === hiK
        ? `binomPdf(${n}, ${p}, ${loK})`
        : `binomCdf(${n}, ${p}, ${loK}, ${hiK})`;
    const complementNote =
      hiK === n && loK > 0
        ? `  (= 1 − binomCdf(${n}, ${p}, 0, ${loK - 1}))`
        : "";
    return { bars, maxP: Math.max(maxP, 0.05), sumP, mean, sd, tiSyntax, complementNote };
  }, [n, p, loK, hiK]);

  return (
    <WidgetFrame
      title="Interactive Normal & Binomial Distribution Shading Lab"
      tryThis={[
        "In **Normal** mode, set {{z_a = -1}} and {{z_b = +1}} to verify the `68.3%` rule — notice `P` stays constant as you change `μ` or `σ`!",
        "Switch to **Binomial** mode, set `n = 20, p = 0.5`, and watch the bars sculpt a symmetric Normal bell shape!",
        "Compare `P(X ≥ 6)` (`lo = 6, hi = n`) with its TI-Nspire CX complement `1 − binomCdf(n, p, 0, 5)`.",
      ]}
      caption={
        dist === "normal" ? (
          <span>
            Standardising <M>{"Z = (X - μ) / σ"}</M> maps every Normal distribution onto <M>{"N(0, 1)"}</M>. Remember: in exam notation <M>{"N(μ, σ^2)"}</M>, the second number is <strong>variance</strong> ({fmt(sigma * sigma, 2)}), whereas TI-Nspire CX asks for <strong>standard deviation</strong> ({sigma}).
          </span>
        ) : (
          <span>
            For discrete <M>{`X ~ B(${n}, ${p})`}</M>, expected value is <M>{`np = ${fmt(binomData.mean, 2)}`}</M> and variance is <M>{`np(1 - p) = ${fmt(n * p * (1 - p), 2)}`}</M>. Always check inclusive vs strict inequalities before entering bounds into <code>binomCdf</code>!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Choose probability distribution"
            value={dist}
            onChange={setDist}
            options={[
              { value: "normal", label: "Normal N(μ, σ²)" },
              { value: "binomial", label: "Binomial B(n, p)" },
            ]}
          />
          {dist === "normal" ? (
            <Segmented
              label="Shaded region"
              value={tail}
              onChange={setTail}
              options={[
                { value: "between", label: "a ≤ X ≤ b" },
                { value: "left", label: "X ≤ b" },
                { value: "right", label: "X ≥ a" },
              ]}
            />
          ) : null}
        </div>

        {dist === "normal" ? (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Slider label="Mean μ" value={mu} min={40} max={120} step={1} onChange={setMu} />
              <Slider label="Standard deviation σ" value={sigma} min={2} max={20} step={0.5} onChange={setSigma} />
              {tail !== "left" ? (
                <Slider
                  label={tail === "right" ? "Lower bound a" : "Bound a"}
                  value={zA}
                  min={-3.2}
                  max={3.2}
                  step={0.05}
                  onChange={setZA}
                  format={(v) => `${fmt(mu + v * sigma, 1)} (z = ${v >= 0 ? "+" : ""}${v.toFixed(2)})`}
                />
              ) : null}
              {tail !== "right" ? (
                <Slider
                  label={tail === "left" ? "Upper bound b" : "Bound b"}
                  value={zB}
                  min={-3.2}
                  max={3.2}
                  step={0.05}
                  onChange={setZB}
                  format={(v) => `${fmt(mu + v * sigma, 1)} (z = ${v >= 0 ? "+" : ""}${v.toFixed(2)})`}
                />
              ) : null}
            </div>

            <div className="rounded-xl border border-line bg-surface-2/40 p-2">
              <svg
                viewBox="0 0 520 225"
                className="h-auto w-full"
                role="img"
                aria-label={`Normal curve N(${mu}, ${sigma}^2) with shaded probability ${normalData.prob.toFixed(4)}`}
              >
                <path d={normalData.shadePath} className="fill-brand/30" />
                <path d={normalData.curvePath} fill="none" className="stroke-brand" strokeWidth={2.6} />
                <line x1={20} y1={normalData.baseY} x2={500} y2={normalData.baseY} className="stroke-ink-2" strokeWidth={1.5} />
                <line
                  x1={normalData.sx(0)}
                  y1={36}
                  x2={normalData.sx(0)}
                  y2={normalData.baseY}
                  className="stroke-ink-2"
                  strokeWidth={1.3}
                  strokeDasharray="4,3"
                />
                {[-3, -2, -1, 0, 1, 2, 3].map((k) => {
                  const xPos = normalData.sx(k);
                  const val = mu + k * sigma;
                  return (
                    <g key={k}>
                      <line x1={xPos} y1={normalData.baseY} x2={xPos} y2={normalData.baseY + 5} className="stroke-ink-2" strokeWidth={1.2} />
                      <text x={xPos} y={normalData.baseY + 18} fontSize={10.5} textAnchor="middle" className={k === 0 ? "fill-ink font-bold" : "fill-ink-2"}>
                        {fmt(val, 1)}
                      </text>
                      <text x={xPos} y={normalData.baseY + 32} fontSize={9.5} textAnchor="middle" className="fill-ink-2">
                        {k === 0 ? "μ" : `${k > 0 ? "+" : ""}${k}σ`}
                      </text>
                    </g>
                  );
                })}
                {tail !== "left" ? (
                  <line
                    x1={normalData.sx(tail === "right" ? zA : normalData.zLo)}
                    y1={normalData.sy(tail === "right" ? zA : normalData.zLo)}
                    x2={normalData.sx(tail === "right" ? zA : normalData.zLo)}
                    y2={normalData.baseY}
                    className="stroke-brand"
                    strokeWidth={2}
                  />
                ) : null}
                {tail !== "right" ? (
                  <line
                    x1={normalData.sx(tail === "left" ? zB : normalData.zHi)}
                    y1={normalData.sy(tail === "left" ? zB : normalData.zHi)}
                    x2={normalData.sx(tail === "left" ? zB : normalData.zHi)}
                    y2={normalData.baseY}
                    className="stroke-brand"
                    strokeWidth={2}
                  />
                ) : null}
                <text x={260} y={24} fontSize={12} fontWeight={800} textAnchor="middle" className="fill-ink">
                  {normalData.labelExpr} = {normalData.prob.toFixed(4)}
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              <Readout label="Probability (4 d.p.)" value={normalData.prob.toFixed(4)} tone="brand" />
              <Readout
                label="z-Score(s)"
                value={
                  tail === "between"
                    ? `${normalData.zLo.toFixed(2)} to ${normalData.zHi.toFixed(2)}`
                    : tail === "left"
                      ? `z = ${zB.toFixed(2)}`
                      : `z = ${zA.toFixed(2)}`
                }
                tone="ink"
              />
              <Readout label="Variance σ²" value={fmt(sigma * sigma, 2)} tone="good" />
            </div>

            <div className="rounded-xl border border-line bg-surface-2 px-3 py-2 text-xs sm:text-sm">
              <span className="font-bold text-ink-2">TI-Nspire CX: </span>
              <code className="font-mono font-bold text-brand break-all">{normalData.tiSyntax}</code>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Stepper
                label="Trials n"
                value={n}
                min={2}
                max={24}
                step={1}
                onChange={(nextN) => {
                  setN(nextN);
                  if (bLo > nextN) setBLo(nextN);
                  if (bHi > nextN) setBHi(nextN);
                }}
              />
              <Slider
                label="Success probability p"
                value={p}
                min={0.05}
                max={0.95}
                step={0.05}
                onChange={setP}
                format={(v) => v.toFixed(2)}
              />
              <Slider label="Lower k (inclusive)" value={loK} min={0} max={n} step={1} onChange={setBLo} />
              <Slider label="Upper k (inclusive)" value={hiK} min={0} max={n} step={1} onChange={setBHi} />
            </div>

            <div className="rounded-xl border border-line bg-surface-2/40 p-2">
              <svg
                viewBox="0 0 520 225"
                className="h-auto w-full"
                role="img"
                aria-label={`Binomial B(${n}, ${p}) bar chart with shaded probability ${binomData.sumP.toFixed(4)}`}
              >
                <line x1={30} y1={182} x2={496} y2={182} className="stroke-ink-2" strokeWidth={1.5} />
                {binomData.bars.map((bar) => {
                  const slotW = (490 - 36) / (n + 1);
                  const barW = Math.max(6, slotW * 0.72);
                  const x = 36 + bar.k * slotW + (slotW - barW) / 2;
                  const h = (bar.pmf / binomData.maxP) * 136;
                  const y = 182 - h;
                  const showLabel = n <= 14 || bar.k % 2 === 0 || bar.k === n;
                  return (
                    <g key={bar.k}>
                      <rect
                        x={x}
                        y={y}
                        width={barW}
                        height={Math.max(1, h)}
                        rx={2}
                        className={bar.active ? "fill-brand stroke-brand" : "fill-line stroke-ink-2/40"}
                        strokeWidth={0.8}
                      />
                      {showLabel ? (
                        <text x={x + barW / 2} y={198} fontSize={9.5} textAnchor="middle" className={bar.active ? "fill-brand font-bold" : "fill-ink-2"}>
                          {bar.k}
                        </text>
                      ) : null}
                    </g>
                  );
                })}
                {(() => {
                  const slotW = (490 - 36) / (n + 1);
                  const meanX = 36 + (binomData.mean + 0.5) * slotW;
                  return (
                    <g>
                      <line x1={meanX} y1={34} x2={meanX} y2={182} className="stroke-accent" strokeWidth={2} strokeDasharray="4,3" />
                      <text x={meanX} y={26} fontSize={10.5} fontWeight={700} textAnchor="middle" className="fill-accent">
                        E(X) = {fmt(binomData.mean, 2)}
                      </text>
                    </g>
                  );
                })()}
                <text x={260} y={216} fontSize={11} fontWeight={700} textAnchor="middle" className="fill-ink">
                  {loK === hiK ? `P(X = ${loK})` : `P(${loK} ≤ X ≤ ${hiK})`} = {binomData.sumP.toFixed(4)}
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              <Readout
                label={loK === hiK ? `P(X = ${loK})` : `P(${loK} ≤ X ≤ ${hiK})`}
                value={binomData.sumP.toFixed(4)}
                tone="brand"
              />
              <Readout label="Mean E(X) = np" value={fmt(binomData.mean, 2)} tone="good" />
              <Readout label="SD √(np(1−p))" value={fmt(binomData.sd, 3)} tone="ink" />
            </div>

            <div className="rounded-xl border border-line bg-surface-2 px-3 py-2 text-xs sm:text-sm">
              <span className="font-bold text-ink-2">TI-Nspire CX: </span>
              <code className="font-mono font-bold text-brand break-all">
                {binomData.tiSyntax}
                {binomData.complementNote}
              </code>
            </div>
          </>
        )}
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// WIDGET 2: [HL] Bayes' Theorem & Continuous PDF Explorer
// ---------------------------------------------------------------------------
type HlTab = "bayes" | "pdf";
type PdfFamily = "linear" | "arch" | "decay";

function BayesContinuousPdfExplorer() {
  const [tab, setTab] = useState<HlTab>("bayes");

  // Bayes state (percentages)
  const [prevPct, setPrevPct] = useState(2);
  const [sensPct, setSensPct] = useState(95);
  const [fprPct, setFprPct] = useState(5);

  // Continuous PDF state
  const [family, setFamily] = useState<PdfFamily>("linear");
  const [upperB, setUpperB] = useState(4);
  const [qFrac, setQFrac] = useState(0.5);

  const bayes = useMemo(() => {
    const pD = prevPct / 100;
    const pPosGivenD = sensPct / 100;
    const pPosGivenNotD = fprPct / 100;
    const tp = pD * pPosGivenD;
    const fn = pD * (1 - pPosGivenD);
    const fp = (1 - pD) * pPosGivenNotD;
    const tn = (1 - pD) * (1 - pPosGivenNotD);
    const pPos = tp + fp;
    const posterior = pPos > 0 ? tp / pPos : 0;

    // Natural frequencies out of 10,000 people
    const pop = 10000;
    return {
      pD,
      tp,
      fn,
      fp,
      tn,
      pPos,
      posterior,
      tpCount: Math.round(tp * pop),
      fpCount: Math.round(fp * pop),
      fnCount: Math.round(fn * pop),
      tnCount: Math.round(tn * pop),
    };
  }, [prevPct, sensPct, fprPct]);

  const pdfInfo = useMemo(() => {
    const b = upperB;
    const t = qFrac * b;
    let kText = "";
    let formulaText = "";
    let evalF: (x: number) => number;
    let cdfVal = 0;
    let mean = 0;
    let median = 0;
    let mode = 0;
    let variance = 0;
    let maxDensity = 1;

    if (family === "linear") {
      const k = 2 / (b * b);
      kText = `2/${b * b} (${k.toFixed(4)})`;
      formulaText = `f(x) = (2/${b * b}) x`;
      evalF = (x) => k * x;
      cdfVal = Math.pow(t / b, 2);
      mean = (2 * b) / 3;
      median = b / Math.SQRT2;
      mode = b;
      variance = (b * b) / 18;
      maxDensity = k * b;
    } else if (family === "arch") {
      const k = 6 / (b * b * b);
      kText = `6/${b * b * b} (${k.toFixed(4)})`;
      formulaText = `f(x) = (6/${b * b * b}) x(${b} − x)`;
      evalF = (x) => k * x * (b - x);
      const u = t / b;
      cdfVal = 3 * u * u - 2 * u * u * u;
      mean = b / 2;
      median = b / 2;
      mode = b / 2;
      variance = (b * b) / 20;
      maxDensity = k * (b / 2) * (b / 2);
    } else {
      const k = 3 / (b * b * b);
      kText = `3/${b * b * b} (${k.toFixed(4)})`;
      formulaText = `f(x) = (3/${b * b * b}) (${b} − x)²`;
      evalF = (x) => k * (b - x) * (b - x);
      const u = t / b;
      cdfVal = 1 - Math.pow(1 - u, 3);
      mean = b / 4;
      median = b * (1 - Math.cbrt(0.5));
      mode = 0;
      variance = (3 * b * b) / 80;
      maxDensity = k * b * b;
    }

    const padL = 42;
    const padR = 24;
    const baseY = 176;
    const topY = 34;
    const plotW = 520 - padL - padR;
    const plotH = baseY - topY;
    const px = (x: number) => padL + (x / b) * plotW;
    const py = (y: number) => baseY - (y / (maxDensity * 1.12)) * plotH;

    const curvePts: string[] = [];
    const steps = 90;
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * b;
      curvePts.push(`${i === 0 ? "M" : "L"} ${px(x).toFixed(1)} ${py(evalF(x)).toFixed(1)}`);
    }

    const shadePts: string[] = [`M ${px(0).toFixed(1)} ${baseY}`];
    const sSteps = 60;
    for (let i = 0; i <= sSteps; i++) {
      const x = (i / sSteps) * t;
      shadePts.push(`L ${px(x).toFixed(1)} ${py(evalF(x)).toFixed(1)}`);
    }
    shadePts.push(`L ${px(t).toFixed(1)} ${baseY} Z`);

    return {
      t,
      kText,
      formulaText,
      cdfVal,
      mean,
      median,
      mode,
      variance,
      px,
      py,
      baseY,
      curvePath: curvePts.join(" "),
      shadePath: shadePts.join(" "),
    };
  }, [family, upperB, qFrac]);

  // Eikosogram widths (keep rare disease visually legible >= 12px while labeling exact %)
  const mosaicW = 220;
  const mosaicH = 148;
  const dWidth = Math.max(14, Math.min(mosaicW - 14, bayes.pD * mosaicW));
  const notDWidth = mosaicW - dWidth;
  const tpH = (sensPct / 100) * mosaicH;
  const fpH = (fprPct / 100) * mosaicH;

  return (
    <WidgetFrame
      title="[HL] Bayes' Theorem & Continuous PDF Explorer"
      tryThis={[
        "In **Bayes** mode, keep sensitivity at `95%` and false-positive rate at `5%`, then drag prevalence `P(D)` from `1%` up to `25%` — watch why the base rate transforms `P(D | +)`!",
        "Switch to **Continuous PDF** mode and test **Linear**, **Arch**, and **Decay**: watch when the **Mode** hits a boundary endpoint (`0` or `b`) instead of a stationary point!",
        "Drag `t` until `F(t) = 0.500` — confirm that `t` lands directly on the **Median**, NOT the Mean when the PDF is skewed!",
      ]}
      caption={
        tab === "bayes" ? (
          <span>
            Out of <strong>10,000</strong> tested people, <strong>{bayes.tpCount}</strong> are true positives and <strong>{bayes.fpCount}</strong> are false positives — so <M>{"P(D | +)"}</M> = {bayes.tpCount} / ({bayes.tpCount} + {bayes.fpCount}) = <strong>{(bayes.posterior * 100).toFixed(1)}%</strong>.
          </span>
        ) : (
          <span>
            Active PDF: <strong>{pdfInfo.formulaText}</strong> on [0, {upperB}]. Total area under the curve is always 1; shading up to <code>t = {pdfInfo.t.toFixed(2)}</code> gives the cumulative distribution value <M>{"F(t) = P(X <= t)"}</M>.
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="HL Probability tool"
            value={tab}
            onChange={setTab}
            options={[
              { value: "bayes", label: "[HL] Bayes' Theorem Grid" },
              { value: "pdf", label: "[HL] Continuous PDF & CDF" },
            ]}
          />
          {tab === "pdf" ? (
            <Segmented
              label="PDF family"
              value={family}
              onChange={setFamily}
              options={[
                { value: "linear", label: "kx (ramp)" },
                { value: "arch", label: "kx(b−x) (arch)" },
                { value: "decay", label: "k(b−x)² (skew)" },
              ]}
            />
          ) : null}
        </div>

        {tab === "bayes" ? (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Slider
                label="Prior prevalence P(D)"
                value={prevPct}
                min={0.5}
                max={50}
                step={0.5}
                onChange={setPrevPct}
                format={(v) => `${v.toFixed(1)}%`}
              />
              <Slider
                label="Sensitivity P(+ | D)"
                value={sensPct}
                min={50}
                max={99}
                step={1}
                onChange={setSensPct}
                format={(v) => `${v}%`}
              />
              <Slider
                label="False positive P(+ | D′)"
                value={fprPct}
                min={1}
                max={30}
                step={1}
                onChange={setFprPct}
                format={(v) => `${v}%`}
              />
            </div>

            <div className="rounded-xl border border-line bg-surface-2/40 p-2">
              <svg
                viewBox="0 0 520 220"
                className="h-auto w-full"
                role="img"
                aria-label={`Bayes frequency diagram showing posterior probability ${(bayes.posterior * 100).toFixed(1)} percent`}
              >
                {/* Left: Eikosogram proportional unit square */}
                <text x={135} y={20} fontSize={11.5} fontWeight={800} textAnchor="middle" className="fill-ink">
                  Population Area Split (10,000 people)
                </text>
                {/* Disease column */}
                <rect x={25} y={32} width={dWidth} height={tpH} className="fill-good" />
                <rect x={25} y={32 + tpH} width={dWidth} height={mosaicH - tpH} className="fill-good/25" />
                {/* Healthy column */}
                <rect x={25 + dWidth} y={32} width={notDWidth} height={fpH} className="fill-bad" />
                <rect x={25 + dWidth} y={32 + fpH} width={notDWidth} height={mosaicH - fpH} className="fill-line/70" />
                <rect x={25} y={32} width={mosaicW} height={mosaicH} fill="none" className="stroke-ink-2" strokeWidth={1.5} />
                <line x1={25 + dWidth} y1={32} x2={25 + dWidth} y2={32 + mosaicH} className="stroke-surface" strokeWidth={1.5} />
                <text x={25 + dWidth / 2} y={196} fontSize={10} fontWeight={700} textAnchor="middle" className="fill-good">
                  D ({prevPct}%)
                </text>
                <text x={25 + dWidth + notDWidth / 2} y={196} fontSize={10} fontWeight={700} textAnchor="middle" className="fill-ink-2">
                  Healthy D′ ({(100 - prevPct).toFixed(1)}%)
                </text>

                {/* Right: Conditioning zoom on Positive tests only */}
                <text x={392} y={20} fontSize={11.5} fontWeight={800} textAnchor="middle" className="fill-ink">
                  Given Positive (+): {bayes.tpCount + bayes.fpCount} people
                </text>
                <rect x={282} y={56} width={220} height={44} rx={8} className="fill-bad/25 stroke-line" strokeWidth={1.2} />
                <rect
                  x={282}
                  y={56}
                  width={Math.min(220, Math.max(2, 220 * bayes.posterior))}
                  height={44}
                  rx={6}
                  className="fill-good"
                />
                <rect
                  x={282 + Math.min(220, Math.max(2, 220 * bayes.posterior))}
                  y={56}
                  width={Math.max(0, 220 - Math.min(220, Math.max(2, 220 * bayes.posterior)))}
                  height={44}
                  rx={4}
                  className="fill-bad"
                />
                <text x={392} y={122} fontSize={12.5} fontWeight={800} textAnchor="middle" className="fill-brand">
                  P(D | +) = {(bayes.posterior * 100).toFixed(1)}%
                </text>
                {/* Legend */}
                <rect x={282} y={138} width={12} height={12} rx={2} className="fill-good" />
                <text x={300} y={148} fontSize={10.5} className="fill-ink">
                  True Positive (TP): {bayes.tpCount}
                </text>
                <rect x={282} y={158} width={12} height={12} rx={2} className="fill-bad" />
                <text x={300} y={168} fontSize={10.5} className="fill-ink">
                  False Positive (FP): {bayes.fpCount}
                </text>
                <rect x={282} y={178} width={12} height={12} rx={2} className="fill-line" />
                <text x={300} y={188} fontSize={10.5} className="fill-ink-2">
                  Negative (−): {bayes.fnCount + bayes.tnCount} (ignored given +)
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Readout label="Posterior P(D | +)" value={`${(bayes.posterior * 100).toFixed(1)}%`} tone="brand" />
              <Readout label="Total Pos P(+)" value={bayes.pPos.toFixed(4)} tone="ink" />
              <Readout label="True Pos / 10k" value={bayes.tpCount} tone="good" />
              <Readout label="False Pos / 10k" value={bayes.fpCount} tone="bad" />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Stepper label="Upper bound b" value={upperB} min={2} max={8} step={1} onChange={setUpperB} />
              <Slider
                label="Query threshold t"
                value={qFrac}
                min={0}
                max={1}
                step={0.02}
                onChange={setQFrac}
                format={(v) => `t = ${(v * upperB).toFixed(2)}`}
              />
            </div>

            <div className="rounded-xl border border-line bg-surface-2/40 p-2">
              <svg
                viewBox="0 0 520 220"
                className="h-auto w-full"
                role="img"
                aria-label={`Continuous PDF ${pdfInfo.formulaText} shaded up to t = ${pdfInfo.t.toFixed(2)}`}
              >
                <path d={pdfInfo.shadePath} className="fill-brand/30" />
                <path d={pdfInfo.curvePath} fill="none" className="stroke-brand" strokeWidth={2.6} />
                <line x1={36} y1={pdfInfo.baseY} x2={500} y2={pdfInfo.baseY} className="stroke-ink-2" strokeWidth={1.5} />
                <line x1={pdfInfo.px(0)} y1={24} x2={pdfInfo.px(0)} y2={pdfInfo.baseY} className="stroke-ink-2" strokeWidth={1.4} />

                {/* Mean marker */}
                <line x1={pdfInfo.px(pdfInfo.mean)} y1={32} x2={pdfInfo.px(pdfInfo.mean)} y2={pdfInfo.baseY} className="stroke-accent" strokeWidth={1.8} strokeDasharray="4,3" />
                {/* Median marker */}
                <line x1={pdfInfo.px(pdfInfo.median)} y1={32} x2={pdfInfo.px(pdfInfo.median)} y2={pdfInfo.baseY} className="stroke-good" strokeWidth={1.8} strokeDasharray="2,3" />
                {/* Query threshold t */}
                <line x1={pdfInfo.px(pdfInfo.t)} y1={28} x2={pdfInfo.px(pdfInfo.t)} y2={pdfInfo.baseY} className="stroke-brand" strokeWidth={2.2} />

                <text x={pdfInfo.px(0)} y={194} fontSize={10.5} textAnchor="middle" className="fill-ink-2">0</text>
                <text x={pdfInfo.px(upperB / 2)} y={194} fontSize={10.5} textAnchor="middle" className="fill-ink-2">{fmt(upperB / 2, 1)}</text>
                <text x={pdfInfo.px(upperB)} y={194} fontSize={10.5} textAnchor="middle" className="fill-ink-2">{upperB}</text>

                <text x={270} y={20} fontSize={11.5} fontWeight={800} textAnchor="middle" className="fill-ink">
                  F({pdfInfo.t.toFixed(2)}) = P(X ≤ {pdfInfo.t.toFixed(2)}) = {pdfInfo.cdfVal.toFixed(3)}
                </text>
                <text x={270} y={212} fontSize={10.5} fontWeight={700} textAnchor="middle" className="fill-ink-2">
                  Teal dashed = Mean ({pdfInfo.mean.toFixed(2)})  ·  Green dotted = Median ({pdfInfo.median.toFixed(2)})  ·  Mode = {pdfInfo.mode.toFixed(2)}
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Readout label="Constant k" value={pdfInfo.kText.split(" ")[0]} tone="ink" />
              <Readout label="F(t) = P(X ≤ t)" value={pdfInfo.cdfVal.toFixed(3)} tone="brand" />
              <Readout label="Mean E(X)" value={pdfInfo.mean.toFixed(3)} tone="good" />
              <Readout label="Variance Var(X)" value={pdfInfo.variance.toFixed(3)} tone="ink" />
            </div>
          </>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "normal-binomial-lab",
    title: "Normal & Binomial Distribution Shading Lab",
    blurb: "Explore Normal N(μ, σ²) z-scores & shaded probabilities vs Binomial B(n, p) bar plots with live TI-Nspire CX syntax.",
    Component: NormalBinomialLab,
  },
  {
    id: "bayes-continuous-pdf-hl",
    title: "[HL] Bayes' Theorem & Continuous PDF Explorer",
    blurb: "Visualise the base-rate fallacy with a live Bayes area grid, then compare Mean, Median, Mode & CDF across HL continuous PDFs.",
    Component: BayesContinuousPdfExplorer,
  },
];

export default widgets;
