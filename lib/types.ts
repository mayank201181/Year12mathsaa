// ---------------------------------------------------------------------------
// Content data model for Year 12–13 IB Diploma Mathematics: Analysis & Approaches
// (SL & HL — Provisional: aligned to FA2029 subject brief; full guide due Feb 2027).
// ---------------------------------------------------------------------------

export type IBLevel = "SL" | "HL";

export type Strand =
  | "Topic 1: Number & Algebra"
  | "Topic 2: Functions"
  | "Topic 3: Geometry & Trigonometry"
  | "Topic 4: Statistics & Probability"
  | "Topic 5: Calculus";

export type Difficulty = "warmup" | "core" | "challenge";

export type IBCommandTerm =
  | "Define"
  | "Draw"
  | "Label"
  | "List"
  | "Measure"
  | "State"
  | "Annotate"
  | "Apply"
  | "Calculate"
  | "Describe"
  | "Distinguish"
  | "Estimate"
  | "Identify"
  | "Outline"
  | "Analyse"
  | "Comment"
  | "Compare"
  | "Compare and contrast"
  | "Construct"
  | "Deduce"
  | "Derive"
  | "Design"
  | "Determine"
  | "Discuss"
  | "Evaluate"
  | "Examine"
  | "Explain"
  | "Find"
  | "Hence"
  | "Integrate"
  | "Interpret"
  | "Justify"
  | "Predict"
  | "Prove"
  | "Show that"
  | "Sketch"
  | "Solve"
  | "Suggest"
  | "Verify"
  | "Write down";

export interface Discovery {
  problem: string;
  idea: string;
}

export interface SolutionMethod {
  label: string;
  steps: string[];
}

export interface MarkBand {
  band: string;
  marks: [number, number];
  descriptor: string;
  indicators?: string[];
}

export type AnswerSpec =
  | {
      type: "number";
      value: number;
      tolerance?: number;
      allowFraction?: boolean;
      standardForm?: boolean;
      display?: string;
    }
  | {
      type: "fraction";
      n: number;
      d: number;
      simplest?: boolean;
      form?: "any" | "mixed" | "improper";
      allowDecimal?: boolean;
      display?: string;
    }
  | {
      type: "list";
      values: number[];
      ordered?: boolean;
      tolerance?: number;
      display?: string;
    }
  | {
      type: "ratio";
      parts: number[];
      simplest?: boolean;
      display?: string;
    }
  | {
      type: "expression";
      expr: string;
      form?: "any" | "factorised" | "expanded" | "simplified";
      display?: string;
    }
  | {
      type: "text";
      accept: string[];
      display?: string;
    };

interface QuestionBase {
  id: string;
  question: string;
  diagram?: string;
  difficulty: Difficulty;
  level?: IBLevel;
  commandTerm?: IBCommandTerm;
  guideRef?: string;
  hints: string[];
  strategy?: string;
  topicId?: string;
}

export interface MCQ extends QuestionBase {
  kind: "mcq";
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface Trap {
  spec: AnswerSpec;
  feedback: string;
}

export interface ShortQ extends QuestionBase {
  kind: "short";
  answer: AnswerSpec;
  traps?: Trap[];
  solution: string[];
  solutions?: SolutionMethod[];
  commonError?: string;
}

export interface MarkPoint {
  point: string;
  keywords: string[];
}

export interface WrittenQ extends QuestionBase {
  kind: "written";
  marks: number;
  modelAnswer: string;
  markScheme: MarkPoint[];
  markbands?: MarkBand[];
  commonError?: string;
  solutions?: SolutionMethod[];
}

export type Question = MCQ | ShortQ | WrittenQ;

export interface Paper {
  id: string;
  title: string;
  level?: IBLevel;
  questions: Question[];
}

export interface WorkedExample {
  title?: string;
  problem: string;
  steps: string[];
  answer: string;
  yourTurn?: {
    question: string;
    answer: AnswerSpec;
    solution: string;
  };
}

export interface GuideSection {
  id: string;
  heading: string;
  level?: IBLevel;
  discovery?: Discovery;
  body: string;
  diagram?: string;
  diagramCaption?: string;
  workedExamples?: WorkedExample[];
  keyPoints?: string[];
  whyItWorks?: string;
  strategies?: string[];
  thinkDeeper?: string;
}

export interface Flashcard {
  front: string;
  back: string;
  level?: IBLevel;
}

export interface Misconception {
  wrong: string;
  right: string;
  level?: IBLevel;
}

export interface Mnemonic {
  topic: string;
  device: string;
  explanation: string;
  level?: IBLevel;
}

export interface RealWorld {
  title: string;
  detail: string;
  emoji?: string;
}

export interface VideoLink {
  title: string;
  channel: string;
  url: string;
}

export interface FormulaFact {
  name: string;
  formula: string;
  note?: string;
  level?: IBLevel;
}

export interface LearnSmart {
  flashcards: Flashcard[];
  mustKnow: string[];
  misconceptions: Misconception[];
  examMistakes: string[];
  mnemonics: Mnemonic[];
  realWorld: RealWorld[];
  videos: VideoLink[];
  formulas: FormulaFact[];
}

export interface TopicGuide {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  level?: IBLevel;
  summary: string;
  intro: string;
  guide: GuideSection[];
  learn: LearnSmart;
}

export interface TopicPractice {
  quiz: Question[];
  papers: Paper[];
  challenge: Question[];
}

export interface Topic extends TopicGuide {
  quiz: Question[];
  mcqPapers: Paper[];
  practicePapers: Paper[];
  challenge: Question[];
  stretch?: boolean;
}

export interface ExamPaper extends Paper {
  calculator: boolean;
  minutes: number;
  paperType?: string;
}

export interface Activity {
  title: string;
  emoji: string;
  materials: string[];
  steps: string[];
  maths: string;
}

export interface BonusDiagram {
  title: string;
  svg: string;
  caption?: string;
}

export interface TopicExtras {
  hook?: string;
  didYouKnow?: string[];
  activities?: Activity[];
  bonusDiagrams?: BonusDiagram[];
  history?: { title: string; story: string };
}

export type QuestionSource = "quiz" | "mcq" | "practice" | "challenge" | "exam";

export interface IndexedQuestion {
  qid: string;
  topicId: string;
  source: QuestionSource;
  paperId?: string;
  question: Question;
}
