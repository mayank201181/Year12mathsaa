// ---------------------------------------------------------------------------
// 60-second Fluency Sprint: quick-fire IB Maths AA recall across Topics 1–5
// (FA2029 Subject Brief — sequences/logs/binomial, functions/discriminant,
// exact trig/radians/vectors, stats/probability & differentiation/integration).
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./drills/types.ts";
import type { AnswerSpec, IBLevel, Strand, Trap } from "./types.ts";
import { displayAnswer } from "./answerCheck.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "t1" | "t2" | "t3" | "t4" | "t5" | "mixed";
/** A mode tied to one strand (everything except "mixed"). */
export type SprintStrandMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["t1", "t2", "t3", "t4", "t5", "mixed"];

/** Which strand each mode draws from. */
export const SPRINT_MODE_STRAND: Record<SprintStrandMode, Strand> = {
  t1: "Topic 1: Number & Algebra",
  t2: "Topic 2: Functions",
  t3: "Topic 3: Geometry & Trigonometry",
  t4: "Topic 4: Statistics & Probability",
  t5: "Topic 5: Calculus",
};

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

/** Highest drill level used (1 = basics, 2 = core) — sprint items must be quick. */
export const SPRINT_MAX_LEVEL = 2;
/** Generation tier used for every sprint item (friendly numbers, core facts). */
export const SPRINT_TIER = 1;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  /** Two sample prompts (plain text). */
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  t1: {
    label: "T1: Number & Algebra",
    icon: "∑",
    description: "Arithmetic/geometric series, log laws, binomial coefficients & complex modulus/argument [HL].",
    example: "Sum to infinity of u₁ = 12, r = 1/3 · Evaluate log₂(32)",
  },
  t2: {
    label: "T2: Functions",
    icon: "ƒ",
    description: "Composites, inverses, quadratic discriminant, asymptotes & remainder theorem [HL].",
    example: "Vertical asymptote of (2x+1)/(x−4) · Discriminant of 2x² − 6x + 5",
  },
  t3: {
    label: "T3: Geometry & Trig",
    icon: "△",
    description: "Exact special trig values (Non-GDC), radians, arc/sector & 3D dot product [HL].",
    example: "Exact value of cos(π/3) · Dot product of (2, −1, 3) and (4, 5, −1)",
  },
  t4: {
    label: "T4: Stats & Probability",
    icon: "📊",
    description: "IQR/variance coding, conditional probability, Binomial mean/variance & z-scores.",
    example: "Mean of B(40, 0.25) · P(A ∪ B) for independent events",
  },
  t5: {
    label: "T5: Calculus",
    icon: "∫",
    description: "Power/chain/product derivatives, tangent gradients, definite integrals & Maclaurin terms [HL].",
    example: "Derivative of (3x + 1)⁴ at x = 0 · Definite integral ∫₀² 3x² dx",
  },
  mixed: {
    label: "Full Maths AA Mixed",
    icon: "🎲",
    description: "Topics 1–5 interleaved — rapid Paper 1 Non-GDC fluency across the FA2029 course.",
    example: "Logs, quadratics, exact trig, probability & calculus in 60 seconds",
  },
};

export interface SprintItem {
  /** Identity for repeat-avoidance, retries and the missed list. */
  key: string;
  /** Question shown to the learner (markdown-lite + {{maths}}). */
  prompt: string;
  /** How the answer is checked (lib/answerCheck.ts). */
  answer: AnswerSpec;
  /** The correct answer as display text (may contain {{maths}}). */
  answerText: string;
  /** Predictable wrong answers with targeted feedback (from the drill). */
  traps?: Trap[];
  /** Optional inline SVG from the drill. */
  diagram?: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

/** Personal-best key in ProgressDoc.bests. */
export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

/** Idempotency key for the once-per-mode-per-day star award. */
export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

/** Stars for a sprint score: 1 per 5 correct, at most 5. */
export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const STRAND_OF_TOPIC = new Map<string, Strand>(TOPIC_META.map((t) => [t.id, t.strand]));
const LEVEL_OF_TOPIC = new Map<string, IBLevel>(TOPIC_META.map((t) => [t.id, t.level]));

/** The strand a topic belongs to (undefined for an unknown topic). */
export function strandOfTopic(topicId: string): Strand | undefined {
  return STRAND_OF_TOPIC.get(topicId);
}

/** The drills a mode draws from: level 1–2, in the mode's strand ("mixed": any known topic), respecting SL/HL. */
export function sprintPool(mode: SprintMode, drills: readonly Drill[], ibLevel: IBLevel = "HL"): Drill[] {
  return drills.filter((d) => {
    if (d.level > SPRINT_MAX_LEVEL) return false;
    const strand = strandOfTopic(d.topicId);
    if (!strand) return false;
    const drillLevel = d.ibLevel ?? LEVEL_OF_TOPIC.get(d.topicId) ?? "SL";
    if (ibLevel === "SL" && drillLevel === "HL") return false;
    return mode === "mixed" || strand === SPRINT_MODE_STRAND[mode];
  });
}

/** Number of drills each mode can draw from (0 = not available yet). */
export function sprintPoolSizes(drills: readonly Drill[], ibLevel: IBLevel = "HL"): Record<SprintMode, number> {
  const out = {} as Record<SprintMode, number>;
  for (const m of SPRINT_MODES) out[m] = sprintPool(m, drills, ibLevel).length;
  return out;
}

/** Build a sprint item from one drill, or null if the drill fails or gives an unusable item. */
function itemFrom(drill: Drill, rng: Rng): SprintItem | null {
  try {
    const it = drill.generate(rng, SPRINT_TIER);
    const prompt = typeof it?.prompt === "string" ? it.prompt.trim() : "";
    if (!prompt || !it.answer) return null;
    const answerText = displayAnswer(it.answer);
    if (!answerText) return null;
    return {
      key: `${drill.id}::${prompt}::${answerText}`,
      prompt,
      answer: it.answer,
      answerText,
      traps: it.traps?.length ? it.traps : undefined,
      diagram: it.diagram || undefined,
      drillId: drill.id,
      topicId: drill.topicId,
    };
  } catch {
    return null;
  }
}

/**
 * One quick item from a pool of drills. Topics are picked evenly first (so a
 * topic with many drills doesn't crowd out the rest), then a drill within it.
 * Items without a diagram are preferred — they're quicker to read.
 */
export function sprintItem(pool: readonly Drill[], rng: Rng): SprintItem | null {
  if (!pool.length) return null;
  const byTopic = new Map<string, Drill[]>();
  for (const d of pool) {
    const list = byTopic.get(d.topicId);
    if (list) list.push(d);
    else byTopic.set(d.topicId, [d]);
  }
  const topics = [...byTopic.values()];
  let withDiagram: SprintItem | null = null;
  for (let i = 0; i < 12; i++) {
    const drill = rng.pick(rng.pick(topics));
    const item = itemFrom(drill, rng);
    if (!item) continue;
    if (!item.diagram) return item;
    withDiagram ??= item;
  }
  if (withDiagram) return withDiagram;
  for (const d of pool) {
    const item = itemFrom(d, rng);
    if (item) return item;
  }
  return null;
}
