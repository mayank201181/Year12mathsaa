import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "1a-number-algebra-core-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "sequences-series-sigma",
      question:
        "Calculate {{(7.2 * 10^5) / (9.0 * 10^8)}}, giving your answer in standard form {{a * 10^k}} where {{1 <= a < 10}} and {{k ∈ ℤ}}.",
      answer: { type: "number", value: 0.0008, standardForm: true, display: "{{8 * 10^(-4)}}" },
      hints: [
        "Divide {{7.2 / 9.0 = 0.8}} and subtract exponents {{5 - 8 = -3}}.",
        "Rewrite {{0.8 * 10^(-3)}} so the mantissa lies between {{1}} and {{10}}.",
      ],
      traps: [
        {
          spec: { type: "number", value: 8e-2, standardForm: true },
          feedback: "Re-normalising {{0.8 = 8 * 10^(-1)}} decreases the exponent from {{-3}} to {{-4}}, not {{-2}}.",
        },
      ],
      solution: [
        "Divide mantissas and powers of {{10}} separately: {{(7.2 / 9.0) * 10^(5 - 8) = 0.8 * 10^(-3)}}.",
        "Normalise the mantissa: {{0.8 * 10^(-3) = (8 * 10^(-1)) * 10^(-3) = 8 * 10^(-4)}}.",
      ],
    },
    {
      id: "1a-number-algebra-core-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Find",
      guideRef: "sequences-series-sigma",
      question: "An arithmetic sequence has first term {{u_1 = 14}} and common difference {{d = -3}}. Which term equals {{-40}}?",
      options: ["{{n = 19}}", "{{n = 18}}", "{{n = 20}}", "{{n = 17}}"],
      answerIndex: 0,
      hints: [
        "Set {{14 + (n - 1)(-3) = -40}}.",
        "Remember to add {{1}} after finding {{n - 1}}.",
      ],
      explanation:
        "Solving {{14 - 3(n - 1) = -40}} gives {{-3(n - 1) = -54 ⇒ n - 1 = 18 ⇒ n = 19}}.",
    },
    {
      id: "1a-number-algebra-core-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "sequences-series-sigma",
      question: "Calculate the exact sum to infinity of the geometric series {{45 - 15 + 5 - …}}, giving your answer as an exact fraction in simplest form.",
      answer: { type: "fraction", n: 135, d: 4, simplest: true, allowDecimal: true },
      hints: [
        "Find {{r = u_2 / u_1 = -15 / 45 = -1/3}} and verify {{|r| < 1}}.",
        "Substitute into {{S_∞ = u_1 / (1 - r)}}, watching the double minus sign in {{1 - (-1/3)}}.",
      ],
      traps: [
        {
          spec: { type: "fraction", n: 135, d: 2, allowDecimal: true },
          feedback: "Check the sign of {{r}}: {{1 - (-1/3) = 4/3}}, not {{2/3}}.",
        },
      ],
      solution: [
        "First term {{u_1 = 45}} and common ratio {{r = -15 / 45 = -1/3}}.",
        "Since {{|-1/3| < 1}}, {{S_∞ = 45 / (1 - (-1/3)) = 45 / (4/3) = 135/4}}.",
      ],
    },
    {
      id: "1a-number-algebra-core-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "exponents-logarithms-proof",
      question: "Evaluate {{(27/64)^(-2/3)}} exactly.",
      options: ["{{9/16}}", "{{16/9}}", "{{-16/9}}", "{{8/9}}"],
      answerIndex: 1,
      hints: [
        "Invert the fraction because the exponent is negative.",
        "Take the cube root first, then square the result.",
      ],
      explanation:
        "{{(27/64)^(-2/3) = (64/27)^(2/3) = ((64/27)^(1/3))^2 = (4/3)^2 = 16/9}}.",
    },
    {
      id: "1a-number-algebra-core-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Solve",
      guideRef: "exponents-logarithms-proof",
      question: "Solve {{log_2(3x - 5) = 4}} for {{x}}.",
      answer: { type: "number", value: 7 },
      hints: [
        "Rewrite the logarithmic equation in exponential form: {{3x - 5 = 2^4}}.",
        "Solve the linear equation and check {{3x - 5 > 0}}.",
      ],
      solution: [
        "Convert to exponential form: {{3x - 5 = 2^4 = 16}}.",
        "Solve: {{3x = 21 ⇒ x = 7}} (valid since {{3(7) - 5 = 16 > 0}}).",
      ],
    },
    {
      id: "1a-number-algebra-core-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "exponents-logarithms-proof",
      question: "Evaluate {{2 log_3(6) - log_3(4)}} as an exact integer.",
      options: ["{{3}}", "{{9}}", "{{2}}", "{{4}}"],
      answerIndex: 2,
      hints: [
        "Move the coefficient {{2}} inside as a power: {{2 log_3(6) = log_3(6^2)}}.",
        "Use the quotient law to combine into a single base-{{3}} logarithm.",
      ],
      explanation:
        "{{2 log_3(6) - log_3(4) = log_3(36) - log_3(4) = log_3(36/4) = log_3(9) = 2}}.",
    },
    {
      id: "1a-number-algebra-core-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Find",
      guideRef: "binomial-counting-hl",
      question: "Find the coefficient of {{x^3}} in the expansion of {{(2 - x)^6}}.",
      answer: { type: "number", value: -160 },
      hints: [
        "Use {{T_(r+1) = 6Cr * 2^(6 - r) * (-x)^r}} with {{r = 3}}.",
        "Remember {{(-1)^3 = -1}} gives a negative coefficient.",
      ],
      traps: [
        {
          spec: { type: "number", value: 160 },
          feedback: "Watch the sign: {{(-x)^3}} carries a negative sign, giving {{-160}}.",
        },
      ],
      solution: [
        "With {{r = 3}}, the term is {{6C3 * 2^3 * (-x)^3 = 20 * 8 * (-x^3) = -160x^3}}.",
        "The coefficient of {{x^3}} is {{-160}}.",
      ],
    },
    {
      id: "1a-number-algebra-core-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "binomial-counting-hl",
      question: "[HL] Five distinct books are arranged on a shelf. In how many ways can they be ordered if two specific books must sit adjacent to each other?",
      options: ["{{24}}", "{{60}}", "{{120}}", "{{48}}"],
      answerIndex: 3,
      hints: [
        "Treat the two adjacent books as a single block, leaving {{4}} items to arrange.",
        "Multiply by {{2!}} for the two ways to order the books inside the block.",
      ],
      explanation:
        "Arranging the {{3}} single books and {{1}} block gives {{4! = 24}} orders, and the two books in the block can swap in {{2! = 2}} ways, giving {{24 * 2 = 48}}.",
    },
    {
      id: "1a-number-algebra-core-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "binomial-counting-hl",
      question: "[HL] Find the coefficient of {{x^2}} in the generalised binomial expansion of {{(1 + 4x)^(-1/2)}} for {{|x| < 1/4}}.",
      answer: { type: "number", value: 6 },
      hints: [
        "Use the quadratic term {{(q(q - 1)/2!)u^2}} with {{q = -1/2}} and {{u = 4x}}.",
        "Compute {{((-1/2)(-3/2)/2) * 4^2}}.",
      ],
      solution: [
        "With {{q = -1/2}} and {{u = 4x}}, the {{x^2}} term is {{((-1/2)(-3/2)/2)(4x)^2}}.",
        "Simplifying gives {{(3/8) * 16x^2 = 6x^2}}, so the coefficient is {{6}}.",
      ],
    },
    {
      id: "1a-number-algebra-core-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Find",
      guideRef: "partial-fractions-hl",
      question:
        "[HL] Find the constants {{A}} and {{B}} (enter in the order {{A, B}}) such that {{(5x - 11)/((x - 1)(x - 3)) ≡ A/(x - 1) + B/(x - 3)}}.",
      answer: { type: "list", values: [3, 2], ordered: true },
      hints: [
        "Clear denominators: {{5x - 11 ≡ A(x - 3) + B(x - 1)}}.",
        "Substitute {{x = 1}} to isolate {{A}}, then substitute {{x = 3}} to isolate {{B}}.",
      ],
      solution: [
        "Multiply by {{(x - 1)(x - 3)}}: {{5x - 11 ≡ A(x - 3) + B(x - 1)}}.",
        "Set {{x = 1}}: {{-6 = -2A ⇒ A = 3}}. Set {{x = 3}}: {{4 = 2B ⇒ B = 2}}.",
      ],
    },
  ],
  papers: [
    {
      id: "1a-number-algebra-core-p1",
      title: "Practice Paper 1 — Non-Calculator Exact Methods (SL/HL)",
      level: "SL",
      questions: [
        {
          id: "1a-number-algebra-core-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Find",
          guideRef: "sequences-series-sigma",
          question: "In an arithmetic sequence, {{u_4 = 19}} and {{u_11 = 54}}. Find the first term {{u_1}}.",
          answer: { type: "number", value: 4 },
          hints: [
            "Subtract {{u_4}} from {{u_11}} to obtain {{7d}}.",
            "Substitute {{d}} back into {{u_1 + 3d = 19}}.",
          ],
          solution: [
            "{{u_11 - u_4 = 7d = 54 - 19 = 35 ⇒ d = 5}}.",
            "{{u_1 = u_4 - 3d = 19 - 15 = 4}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "sequences-series-sigma",
          question: "Calculate the exact value of {{∑_(k=1)^20 (4k - 7)}}.",
          answer: { type: "number", value: 700 },
          hints: [
            "Find the first term ({{k = 1}}) and the twentieth term ({{k = 20}}).",
            "Apply {{S_n = (n/2)(u_1 + u_n)}} with {{n = 20}}.",
          ],
          solution: [
            "This is an arithmetic series with {{u_1 = 4(1) - 7 = -3}}, {{u_20 = 4(20) - 7 = 73}}, and {{n = 20}}.",
            "{{S_20 = (20/2)(-3 + 73) = 10 * 70 = 700}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "sequences-series-sigma",
          question: "A geometric sequence has first term {{u_1 = 3}} and common ratio {{r = -2}}. Calculate the exact sum of the first {{6}} terms, {{S_6}}.",
          answer: { type: "number", value: -63 },
          hints: [
            "Use {{S_n = u_1(1 - r^n)/(1 - r)}} with {{u_1 = 3}}, {{r = -2}}, and {{n = 6}}.",
            "Note that {{(-2)^6 = +64}} and {{1 - (-2) = 3}}.",
          ],
          traps: [
            {
              spec: { type: "number", value: 65 },
              feedback: "Remember {{(-2)^6 = +64}}, not {{-64}}.",
            },
          ],
          solution: [
            "{{S_6 = 3(1 - (-2)^6) / (1 - (-2)) = 3(1 - 64) / 3 = -63}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "sequences-series-sigma",
          question:
            "Using an infinite geometric series, express the recurring decimal {{0.272727…}} as an exact fraction in simplest form.",
          answer: { type: "fraction", n: 3, d: 11, simplest: true },
          hints: [
            "Write {{0.272727… = 27/100 + 27/10000 + 27/1000000 + …}}.",
            "Apply {{S_∞ = u_1 / (1 - r)}} with {{u_1 = 27/100}} and {{r = 1/100}}, then simplify fully.",
          ],
          solution: [
            "Identify {{u_1 = 27/100}} and {{r = 1/100}} (with {{|r| < 1}}).",
            "{{S_∞ = (27/100) / (1 - 1/100) = (27/100) / (99/100) = 27/99 = 3/11}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "exponents-logarithms-proof",
          question: "Evaluate {{log_4(32) - log_9(1/27)}} exactly without a calculator.",
          answer: { type: "number", value: 4 },
          hints: [
            "Convert {{log_4(32)}} to base {{2}} and {{log_9(1/27)}} to base {{3}}.",
            "Subtract carefully: subtracting a negative fraction adds its magnitude.",
          ],
          traps: [
            {
              spec: { type: "number", value: 1 },
              feedback: "Watch the sign of {{log_9(1/27) = -3/2}}: {{5/2 - (-3/2) = 4}}, not {{1}}.",
            },
          ],
          solution: [
            "{{log_4(32) = log_2(32) / log_2(4) = 5/2}}.",
            "{{log_9(1/27) = log_3(3^(-3)) / log_3(3^2) = -3/2}}.",
            "Subtract: {{5/2 - (-3/2) = 8/2 = 4}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Solve",
          guideRef: "exponents-logarithms-proof",
          question: "Solve {{log_5(x + 6) + log_5(x + 2) = 1}} for {{x ∈ ℝ}}.",
          answer: { type: "number", value: -1 },
          hints: [
            "State the domain restriction first: both {{x + 6 > 0}} and {{x + 2 > 0}} require {{x > -2}}.",
            "Combine using the product law, solve the quadratic, and reject any extraneous root.",
          ],
          solution: [
            "Domain requires {{x > -2}}.",
            "Combine logs: {{log_5((x + 6)(x + 2)) = 1 ⇒ (x + 6)(x + 2) = 5}}.",
            "Expand: {{x^2 + 8x + 12 = 5 ⇒ x^2 + 8x + 7 = 0 ⇒ (x + 7)(x + 1) = 0}}.",
            "Reject {{x = -7}} (violates {{x > -2}}), leaving the unique solution {{x = -1}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Solve",
          guideRef: "exponents-logarithms-proof",
          question: "Solve {{log_8(x) + log_2(x) = 8}} exactly for {{x}}.",
          answer: { type: "number", value: 64 },
          hints: [
            "Rewrite {{log_8(x)}} in base {{2}} using {{log_2(8) = 3}}.",
            "Combine {{(1/3) log_2(x) + log_2(x)}} into a single multiple of {{log_2(x)}}.",
          ],
          solution: [
            "Change base: {{log_8(x) = log_2(x) / log_2(8) = (1/3) log_2(x)}}.",
            "Then {{(4/3) log_2(x) = 8 ⇒ log_2(x) = 6 ⇒ x = 2^6 = 64}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "binomial-counting-hl",
          question:
            "Find the term independent of {{x}} in the expansion of {{(3x - 1/(2x^2))^6}}, giving your answer as an exact fraction in simplest form.",
          answer: { type: "fraction", n: 1215, d: 4, simplest: true, allowDecimal: true },
          hints: [
            "Write the general term {{6Cr * (3x)^(6 - r) * (-1/2 x^(-2))^r}} and simplify the exponent of {{x}} to {{6 - 3r}}.",
            "Set {{6 - 3r = 0}} to obtain {{r = 2}}, then evaluate {{6C2 * 3^4 * (-1/2)^2}}.",
          ],
          solution: [
            "General term: {{6Cr * 3^(6 - r) * (-1/2)^r * x^(6 - 3r)}}.",
            "For the constant term, {{6 - 3r = 0 ⇒ r = 2}}.",
            "Evaluate: {{6C2 * 3^4 * (-1/2)^2 = 15 * 81 * (1/4) = 1215/4}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "binomial-counting-hl",
          question: "Find the coefficient of {{x^3}} in the expansion of {{(1 + 2x)(1 - x)^6}}.",
          answer: { type: "number", value: 10 },
          hints: [
            "Find the {{x^2}} and {{x^3}} coefficients of {{(1 - x)^6}} using {{6C2}} and {{-6C3}}.",
            "Combine {{1 * (x^3 coeff) + 2 * (x^2 coeff)}}.",
          ],
          solution: [
            "In {{(1 - x)^6}}, the {{x^2}} term is {{6C2(-x)^2 = 15x^2}} and the {{x^3}} term is {{6C3(-x)^3 = -20x^3}}.",
            "Multiplying by {{(1 + 2x)}} gives the {{x^3}} coefficient {{1(-20) + 2(15) = -20 + 30 = 10}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "partial-fractions-hl",
          question:
            "[HL] Find the constants {{A}} and {{B}} (enter in the order {{A, B}}) such that {{(11x + 2)/((2x - 1)(x + 2)) ≡ A/(2x - 1) + B/(x + 2)}}.",
          answer: { type: "list", values: [3, 4], ordered: true },
          hints: [
            "Multiply through by {{(2x - 1)(x + 2)}}: {{11x + 2 ≡ A(x + 2) + B(2x - 1)}}.",
            "Substitute {{x = 1/2}} to find {{A}}, and {{x = -2}} to find {{B}}.",
          ],
          solution: [
            "Clear denominators: {{11x + 2 ≡ A(x + 2) + B(2x - 1)}}.",
            "Set {{x = 1/2}}: {{15/2 = (5/2)A ⇒ A = 3}}. Set {{x = -2}}: {{-20 = -5B ⇒ B = 4}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Prove",
          guideRef: "exponents-logarithms-proof",
          marks: 4,
          question:
            "Prove deductively that for every integer {{n}}, the expression {{(n + 1)^3 - n^3}} is always {{1}} more than a multiple of {{6}}.",
          hints: [
            "Expand {{(n + 1)^3}} using the binomial theorem and subtract {{n^3}}.",
            "Factor {{3n}} out of the remaining non-constant terms and consider the parity of {{n(n + 1)}}.",
          ],
          modelAnswer:
            "Expanding the cube gives {{(n + 1)^3 - n^3 = (n^3 + 3n^2 + 3n + 1) - n^3 = 3n^2 + 3n + 1}}. Factorising yields {{3n(n + 1) + 1}}. Since {{n}} and {{n + 1}} are two consecutive integers, one of them must be even, so {{n(n + 1) = 2k}} for some integer {{k}}. Substituting gives {{3(2k) + 1 = 6k + 1}}, which is always {{1}} more than a multiple of {{6}} for every {{n ∈ ℤ}}.",
          markScheme: [
            {
              point: "Expand {{(n + 1)^3}} accurately and cancel {{n^3}} to obtain {{3n^2 + 3n + 1}}.",
              keywords: ["3n^2 + 3n + 1", "3n2 + 3n + 1"],
            },
            {
              point: "Factorise cleanly to {{3n(n + 1) + 1}}.",
              keywords: ["3n(n + 1) + 1", "3n(n+1) + 1", "3n(n+1)+1"],
            },
            {
              point: "Justify that {{n(n + 1)}} is even (product of two consecutive integers, so {{n(n + 1) = 2k}}).",
              keywords: ["consecutive integers", "even", "2k"],
            },
            {
              point: "Conclude {{6k + 1}}, proving the expression is always 1 more than a multiple of 6.",
              keywords: ["6k + 1", "6k+1"],
            },
          ],
          commonError:
            "Testing specific values like {{n = 1, 2, 3}} instead of giving a general algebraic proof for arbitrary {{n ∈ ℤ}}.",
        },
        {
          id: "1a-number-algebra-core-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Show that",
          guideRef: "sequences-series-sigma",
          marks: 5,
          question:
            "The first three terms of a geometric sequence with common ratio {{r != 1}} are {{u_1, u_2, u_3}} (with {{u_1 != 0}}). Given that {{u_1, u_3, u_2}} (in that exact order) form three consecutive terms of an arithmetic sequence:\n(a) Show that {{2r^2 - r - 1 = 0}}.\n(b) Hence find the exact value of {{r}}, and given {{u_1 = 16}}, calculate the sum to infinity {{S_∞}}.",
          hints: [
            "Write {{u_2 = u_1 r}} and {{u_3 = u_1 r^2}}, then use the arithmetic mean condition {{2u_3 = u_1 + u_2}}.",
            "Divide by {{u_1 != 0}}, factorise the quadratic, reject {{r = 1}}, and check {{|r| < 1}} before finding {{S_∞}}.",
          ],
          modelAnswer:
            "(a) Writing {{u_2 = u_1 r}} and {{u_3 = u_1 r^2}}, the arithmetic condition gives {{2u_3 = u_1 + u_2}}, so {{2u_1 r^2 = u_1 + u_1 r}}. Dividing through by {{u_1 != 0}} yields {{2r^2 = 1 + r}}, hence {{2r^2 - r - 1 = 0}}.\n(b) Factorising gives {{(2r + 1)(r - 1) = 0}}, so {{r = -1/2}} or {{r = 1}}. Since {{r != 1}}, we obtain {{r = -1/2}}. Because {{|-1/2| < 1}}, the infinite series converges with {{S_∞ = 16 / (1 - (-1/2)) = 16 / (3/2) = 32/3}}.",
          markScheme: [
            {
              point: "Apply the arithmetic condition {{2u_3 = u_1 + u_2}} with {{u_2 = u_1 r}} and {{u_3 = u_1 r^2}}.",
              keywords: ["2u_1 r^2", "2u1r^2", "2r^2 = 1 + r"],
            },
            {
              point: "Divide through by {{u_1}} (justifying {{u_1 != 0}}) to obtain {{2r^2 - r - 1 = 0}}.",
              keywords: ["dividing through by u_1", "divide by u_1", "2r^2 = 1 + r"],
            },
            {
              point: "Factorise correctly to {{(2r + 1)(r - 1) = 0}}.",
              keywords: ["(2r + 1)(r - 1)", "(2r+1)(r-1)"],
            },
            {
              point: "Reject {{r = 1}} to deduce {{r = -1/2}} and note {{|r| < 1}}.",
              keywords: ["r = -1/2", "-1/2"],
            },
            {
              point: "Evaluate {{S_∞ = 16 / (3/2) = 32/3}}.",
              keywords: ["32/3"],
            },
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Solve",
          guideRef: "exponents-logarithms-proof",
          marks: 6,
          question:
            "(a) Solve {{3^(2x) - 10(3^x) + 9 = 0}} for {{x ∈ ℝ}}.\n(b) Solve {{log_2(y) - log_4(y + 3) = 1}} for {{y > 0}}.",
          hints: [
            "In part (a), substitute {{u = 3^x}} to form a quadratic in {{u}}.",
            "In part (b), use change of base to write {{log_4(y + 3) = (1/2) log_2(y + 3)}}, then multiply by {{2}}.",
            "Check your roots in part (b) against the strict condition {{y > 0}}.",
          ],
          modelAnswer:
            "(a) Let {{u = 3^x > 0}}. The equation becomes {{u^2 - 10u + 9 = 0}}, which factorises as {{(u - 1)(u - 9) = 0}}. Hence {{3^x = 1}} or {{3^x = 9}}, giving {{x = 0}} and {{x = 2}}.\n(b) Using base {{2}}, rewrite the second term as {{(1/2) log_2(y + 3)}}. Multiplying through by {{2}} gives {{2 log_2(y) - log_2(y + 3) = 2}}, so {{log_2(y^2 / (y + 3)) = 2}}. Exponentiating yields {{y^2 / (y + 3) = 4 ⇒ y^2 - 4y - 12 = 0 ⇒ (y - 6)(y + 2) = 0}}. Reject {{y = -2}} since {{y > 0}}, leaving the unique solution {{y = 6}}.",
          markScheme: [
            {
              point: "Substitute {{u = 3^x}} and factorise {{(u - 1)(u - 9) = 0}}.",
              keywords: ["(u - 1)(u - 9)", "(u-1)(u-9)"],
            },
            {
              point: "Solve for both exact roots {{x = 0}} and {{x = 2}}.",
              keywords: ["x = 0 and x = 2", "x = 2"],
            },
            {
              point: "Apply change of base {{log_4(y + 3) = (1/2) log_2(y + 3)}}.",
              keywords: ["(1/2) log_2", "1/2 log_2", "log_2(y + 3) / 2"],
            },
            {
              point: "Combine logarithms and exponentiate to {{y^2 - 4y - 12 = 0}}.",
              keywords: ["y^2 - 4y - 12", "y^2 / (y + 3)"],
            },
            {
              point: "Factorise to {{(y - 6)(y + 2) = 0}}.",
              keywords: ["(y - 6)(y + 2)", "(y-6)(y+2)"],
            },
            {
              point: "Reject extraneous root {{y = -2}} and state {{y = 6}}.",
              keywords: ["reject y = -2", "y = 6"],
            },
          ],
          markbands: [
            {
              band: "0–2",
              marks: [0, 2],
              descriptor: "Attempts substitution or change of base with algebraic slips and incomplete roots.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Solves one part completely or reaches both quadratics with an unchecked extraneous root.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Full exact solutions to both equations with clean change of base and explicit domain rejection.",
            },
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "binomial-counting-hl",
          marks: 5,
          question:
            "Consider the binomial expansion of {{(2x + k/x)^6}}, where {{k}} is a non-zero real constant.\n(a) Write down and simplify the general term {{T_(r+1)}}.\n(b) Given that the coefficient of {{x^2}} is {{960}}, find all possible values of {{k}}.\n(c) Using the positive value of {{k}}, find the term independent of {{x}}.",
          hints: [
            "Simplify the power of {{x}} in {{6Cr * (2x)^(6 - r) * (k x^(-1))^r}} to {{6 - 2r}}.",
            "Equate {{6 - 2r = 2}} for part (b) and remember taking a square root yields both {{+}} and {{-}} values of {{k}}.",
          ],
          modelAnswer:
            "(a) {{T_(r+1) = 6Cr * (2x)^(6 - r) * (k x^(-1))^r = 6Cr * 2^(6 - r) * k^r * x^(6 - 2r)}}.\n(b) Set {{6 - 2r = 2 ⇒ r = 2}}. The {{x^2}} coefficient is {{6C2 * 2^4 * k^2 = 15 * 16 * k^2 = 240k^2}}. Solving {{240k^2 = 960}} gives {{k^2 = 4}}, so {{k = 2}} or {{k = -2}} (i.e. {{k = ±2}}).\n(c) For the constant term, set {{6 - 2r = 0 ⇒ r = 3}}. With {{k = 2}}, the constant term is {{6C3 * 2^3 * 2^3 = 20 * 8 * 8 = 1280}}.",
          markScheme: [
            {
              point: "Write simplified general term with power {{x^(6 - 2r)}}.",
              keywords: ["6 - 2r", "6-2r"],
            },
            {
              point: "Identify {{r = 2}} for the {{x^2}} term.",
              keywords: ["r = 2"],
            },
            {
              point: "Form {{240k^2 = 960}} (hence {{k^2 = 4}}).",
              keywords: ["240k^2", "k^2 = 4"],
            },
            {
              point: "Find both real values {{k = ±2}}.",
              keywords: ["k = ±2", "k = 2 or k = -2", "k = 2 and k = -2", "k = -2"],
            },
            {
              point: "Use {{r = 3}} and {{k = 2}} to compute the constant term {{1280}}.",
              keywords: ["1280"],
            },
          ],
        },
        {
          id: "1a-number-algebra-core-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Find",
          guideRef: "partial-fractions-hl",
          marks: 6,
          question:
            "[HL] Consider the improper rational function {{f(x) = (2x^3 - 3x^2 - 2x + 9) / (x^2 - x - 2)}}.\n(a) Express {{f(x)}} in the form {{px + q + A/(x - 2) + B/(x + 1)}}, finding exact values for {{p, q, A, B}}.\n(b) Verify your decomposition numerically at {{x = 0}}.",
          hints: [
            "Perform polynomial long division of {{2x^3 - 3x^2 - 2x + 9}} by {{x^2 - x - 2}} first.",
            "Factorise {{x^2 - x - 2 = (x - 2)(x + 1)}} and decompose the proper remainder into partial fractions.",
          ],
          modelAnswer:
            "(a) Dividing {{2x^3 - 3x^2 - 2x + 9}} by {{x^2 - x - 2}} gives quotient {{2x - 1}} and remainder {{x + 7}}, so {{f(x) = 2x - 1 + (x + 7)/((x - 2)(x + 1))}}. Setting {{(x + 7)/((x - 2)(x + 1)) ≡ A/(x - 2) + B/(x + 1)}} and clearing denominators gives {{x + 7 ≡ A(x + 1) + B(x - 2)}}. Setting {{x = 2}} gives {{9 = 3A ⇒ A = 3}}. Setting {{x = -1}} gives {{6 = -3B ⇒ B = -2}}. Thus {{f(x) = 2x - 1 + 3/(x - 2) - 2/(x + 1)}}.\n(b) At {{x = 0}}: original {{f(0) = 9 / (-2) = -9/2}}, and decomposed form gives {{-1 + 3/(-2) - 2/1 = -1 - 3/2 - 2 = -9/2}}, confirming equality.",
          markScheme: [
            {
              point: "Divide polynomials to obtain linear quotient {{2x - 1}}.",
              keywords: ["2x - 1", "2x-1"],
            },
            {
              point: "Obtain exact linear remainder {{x + 7}}.",
              keywords: ["x + 7", "x+7"],
            },
            {
              point: "Clear denominators on the remainder to write {{x + 7 ≡ A(x + 1) + B(x - 2)}}.",
              keywords: ["a(x + 1) + b(x - 2)", "a(x+1)+b(x-2)"],
            },
            {
              point: "Substitute {{x = 2}} to find {{A = 3}}.",
              keywords: ["a = 3"],
            },
            {
              point: "Substitute {{x = -1}} to find {{B = -2}}.",
              keywords: ["b = -2"],
            },
            {
              point: "Verify both forms equal {{-9/2}} (or {{-4.5}}) at {{x = 0}}.",
              keywords: ["-9/2", "-4.5"],
            },
          ],
          markbands: [
            {
              band: "0–2",
              marks: [0, 2],
              descriptor: "Recognises improper fraction and starts polynomial division or factorises denominator.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Finds correct quotient and remainder but makes an arithmetic error solving for A or B.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Complete, exact decomposition and clear numerical verification at x = 0.",
            },
          ],
        },
      ],
    },
    {
      id: "1a-number-algebra-core-p2",
      title: "Practice Paper 2 — GDC Applications & HL Extensions",
      level: "HL",
      questions: [
        {
          id: "1a-number-algebra-core-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Solve",
          guideRef: "exponents-logarithms-proof",
          question: "Solve {{3^x = 20}} for {{x}}, giving your answer correct to {{3}} significant figures.",
          answer: { type: "number", value: 2.73, tolerance: 0.01 },
          hints: [
            "Take natural logarithms of both sides: {{x = ln(20) / ln(3)}}.",
            "Evaluate on your GDC and round to 3 significant figures.",
          ],
          solution: [
            "{{x = ln(20) / ln(3) ≈ 2.72683… ≈ 2.73}} (3 s.f.).",
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "sequences-series-sigma",
          question:
            "A geometric sequence has first term {{u_1 = 5}} and common ratio {{r = 1.15}}. Find the least positive integer {{n}} such that {{S_n > 500}}.",
          answer: { type: "number", value: 20 },
          hints: [
            "Substitute into {{S_n = 5(1.15^n - 1) / (1.15 - 1) > 500}}.",
            "Isolate {{1.15^n > 16}} and take logarithms (or intersect on your TI-Nspire CX).",
          ],
          solution: [
            "{{5(1.15^n - 1) / 0.15 > 500 ⇒ 1.15^n - 1 > 15 ⇒ 1.15^n > 16}}.",
            "{{n > ln(16) / ln(1.15) ≈ 19.84}}, so the least integer is {{n = 20}} (check: {{S_19 ≈ 441.1}}, {{S_20 ≈ 512.2}}).",
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "exponents-logarithms-proof",
          question:
            "Sound intensity level is given by {{L = 10 log_10(I / I_0)}} dB, where {{I_0 = 10^(-12)}} W m⁻². An auditorium measures {{L = 86}} dB. Calculate the intensity {{I}} in standard form {{a * 10^k}} correct to {{3}} significant figures.",
          answer: {
            type: "number",
            value: 3.98e-4,
            tolerance: 2e-6,
            standardForm: true,
            display: "{{3.98 * 10^(-4)}}",
          },
          hints: [
            "Divide by {{10}} to get {{log_10(I / 10^(-12)) = 8.6}}.",
            "Exponentiate base {{10}}: {{I = 10^(8.6) * 10^(-12) = 10^(-3.4)}}.",
          ],
          solution: [
            "{{86 = 10 log_10(I / 10^(-12)) ⇒ log_10(I / 10^(-12)) = 8.6}}.",
            "{{I = 10^(-12) * 10^(8.6) = 10^(-3.4) ≈ 3.981 * 10^(-4) ≈ 3.98 * 10^(-4)}} W m⁻² (3 s.f.).",
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Solve",
          guideRef: "exponents-logarithms-proof",
          question: "Using your GDC, solve {{e^x = 5 - 2x}} for {{x ∈ ℝ}}, giving your answer correct to {{3}} significant figures.",
          answer: { type: "number", value: 1.06, tolerance: 0.01 },
          hints: [
            "Graph {{y_1 = e^x}} and {{y_2 = 5 - 2x}} on your TI-Nspire CX.",
            "Use `Analyze Graph → Intersection` to locate the unique crossing point.",
          ],
          solution: [
            "Graphing {{y = e^x}} (strictly increasing) and {{y = 5 - 2x}} (strictly decreasing) reveals a unique intersection at {{x ≈ 1.0587…}}.",
            "Rounding to {{3}} significant figures gives {{x = 1.06}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Find",
          guideRef: "binomial-counting-hl",
          question: "Find the coefficient of {{x^5}} in the binomial expansion of {{(2x - 1)^9}}.",
          answer: { type: "number", value: 4032 },
          hints: [
            "In {{9Cr * (2x)^(9 - r) * (-1)^r}}, set {{9 - r = 5}} to find {{r = 4}}.",
            "Evaluate {{9C4 * 2^5 * (-1)^4}}.",
          ],
          solution: [
            "With {{r = 4}}, the term is {{9C4 * (2x)^5 * (-1)^4 = 126 * 32x^5 = 4032x^5}}.",
            "The coefficient of {{x^5}} is {{4032}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "binomial-counting-hl",
          question:
            "[HL] Eight athletes, including Priya and Noah, are assigned to {{8}} numbered running lanes. Calculate the number of assignments in which Priya and Noah occupy the two outermost lanes (lanes {{1}} and {{8}}).",
          answer: { type: "number", value: 1440 },
          hints: [
            "Place Priya and Noah into lanes {{1}} and {{8}} first ({{2!}} ways).",
            "Arrange the remaining {{6}} athletes into the middle {{6}} lanes ({{6!}} ways).",
          ],
          solution: [
            "Outermost lanes for Priya and Noah: {{2! = 2}} ways.",
            "Remaining {{6}} lanes: {{6! = 720}} ways. Total: {{2 * 720 = 1440}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "binomial-counting-hl",
          question:
            "[HL] A {{6}}-person science olympiad team is chosen from {{10}} students, including twins Alex and Ben who will not serve on the team together. Calculate the number of valid teams.",
          answer: { type: "number", value: 140 },
          hints: [
            "Use complementary counting: subtract invalid teams containing BOTH Alex and Ben from all {{10C6}} teams.",
            "If both Alex and Ben are already chosen, how many ways remain to pick the other {{4}} members from the remaining {{8}} students?",
          ],
          solution: [
            "Total unrestricted teams: {{10C6 = 210}}.",
            "Invalid teams with both Alex and Ben: {{8C4 = 70}}.",
            "Valid teams: {{210 - 70 = 140}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "binomial-counting-hl",
          question:
            "[HL] Find the exact coefficient of {{x^3}} in the generalised binomial expansion of {{(1 + 2x)^(-1/2)}} for {{|x| < 1/2}}, expressed as a fraction in simplest form.",
          answer: { type: "fraction", n: -5, d: 2, simplest: true, allowDecimal: true },
          hints: [
            "Use {{(q(q - 1)(q - 2)/3!) u^3}} with {{q = -1/2}} and {{u = 2x}}.",
            "Multiply {{(-1/2)(-3/2)(-5/2) / 6 = -5/16}} by {{2^3 = 8}}.",
          ],
          solution: [
            "The {{x^3}} term is {{[(-1/2)(-3/2)(-5/2) / 6] * (2x)^3 = (-15/48) * 8x^3 = (-5/16) * 8x^3 = -(5/2)x^3}}.",
            "Hence the coefficient is {{-5/2}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "partial-fractions-hl",
          question:
            "[HL] Find the constants {{A, B, C}} (enter in the order {{A, B, C}}) such that {{(4x^2 - 3x + 5)/((x + 2)(x - 1)^2) ≡ A/(x + 2) + B/(x - 1) + C/(x - 1)^2}}.",
          answer: { type: "list", values: [3, 1, 2], ordered: true },
          hints: [
            "Clear denominators: {{4x^2 - 3x + 5 ≡ A(x - 1)^2 + B(x + 2)(x - 1) + C(x + 2)}}.",
            "Substitute {{x = -2}} for {{A}}, {{x = 1}} for {{C}}, and equate {{x^2}} coefficients for {{B}}.",
          ],
          solution: [
            "Set {{x = -2}}: {{16 + 6 + 5 = 27 = 9A ⇒ A = 3}}.",
            "Set {{x = 1}}: {{4 - 3 + 5 = 6 = 3C ⇒ C = 2}}.",
            "Equate {{x^2}} coefficients: {{4 = A + B = 3 + B ⇒ B = 1}}. Hence {{A = 3, B = 1, C = 2}}.",
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "sequences-series-sigma",
          marks: 5,
          question:
            "An arithmetic sequence has first term {{u_1 = 8}} and sum of the first {{10}} terms {{S_10 = 215}}.\n(a) Find the common difference {{d}}.\n(b) A geometric sequence of positive terms has first term {{g_1 = 8}} and third term {{g_3 = u_5}}, where {{u_5}} is the fifth term of the arithmetic sequence. Calculate {{g_10}} correct to {{3}} significant figures.",
          hints: [
            "Substitute {{u_1 = 8}} and {{n = 10}} into {{S_n = (n/2)(2u_1 + (n - 1)d)}}.",
            "Compute {{u_5}}, solve {{8r^2 = u_5}} taking the positive root for {{r}}, then evaluate {{g_10 = 8r^9}} without rounding intermediate values.",
          ],
          modelAnswer:
            "(a) Using {{S_10 = 5(2(8) + 9d) = 215}}, we obtain {{16 + 9d = 43 ⇒ 9d = 27 ⇒ d = 3}}.\n(b) The fifth arithmetic term is {{u_5 = 8 + 4(3) = 20}}. Setting {{g_3 = 8r^2 = 20}} gives {{r^2 = 2.5}}, and since all terms are positive, {{r = sqrt(2.5)}}. Therefore {{g_10 = 8(sqrt(2.5))^9 = 8 * (2.5)^(4.5) ≈ 494.11 ≈ 494}} (3 s.f.).",
          markScheme: [
            {
              point: "Substitute into arithmetic sum formula to get {{5(16 + 9d) = 215}} (or {{16 + 9d = 43}}).",
              keywords: ["16 + 9d = 43", "5(16 + 9d)", "9d = 27"],
            },
            {
              point: "Solve accurately for {{d = 3}}.",
              keywords: ["d = 3"],
            },
            {
              point: "Calculate {{u_5 = 20}}.",
              keywords: ["= 20", "u_5 = 20", "u5 = 20"],
            },
            {
              point: "Solve {{8r^2 = 20}} for the positive ratio {{r = sqrt(2.5)}}.",
              keywords: ["sqrt(2.5)", "r^2 = 2.5", "1.58"],
            },
            {
              point: "Evaluate {{g_10 = 8(sqrt(2.5))^9 ≈ 494}} (3 s.f.).",
              keywords: ["494"],
            },
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "exponents-logarithms-proof",
          marks: 6,
          question:
            "A medical radioisotope decays according to {{M(t) = 120 e^(-kt)}}, where {{M(t)}} is the remaining mass in milligrams after {{t}} hours. After {{6}} hours, {{75}} mg remains.\n(a) Find the exact decay constant {{k}} in terms of natural logarithms, and write {{k}} correct to {{4}} significant figures.\n(b) Calculate the half-life of the isotope correct to {{3}} significant figures.\n(c) Calculate the time {{t}} until the remaining mass falls to {{15}} mg, correct to {{3}} significant figures.",
          hints: [
            "Substitute {{t = 6, M = 75}} to isolate {{e^(-6k) = 5/8}}, then take natural logarithms.",
            "Keep the exact value of {{k}} stored on your TI-Nspire CX when computing parts (b) and (c)!",
            "Notice that {{15 / 120 = 1/8 = (1/2)^3}} — a great sanity check on part (c)!",
          ],
          modelAnswer:
            "(a) Setting {{75 = 120 e^(-6k)}} gives {{e^(-6k) = 75/120 = 5/8}}. Taking natural logarithms: {{-6k = ln(5/8) ⇒ k = (1/6) ln(8/5) = ln(1.6) / 6 ≈ 0.07833}} (4 s.f.).\n(b) For the half-life, {{e^(-kt) = 1/2 ⇒ t = ln(2) / k = 6 ln(2) / ln(1.6) ≈ 8.8486 ≈ 8.85}} hours (3 s.f.).\n(c) Setting {{15 = 120 e^(-kt)}} gives {{e^(-kt) = 1/8 = (1/2)^3}}, so {{t = ln(8) / k = 3 * 8.8486 ≈ 26.5}} hours (3 s.f.).",
          markScheme: [
            {
              point: "Form {{e^(-6k) = 75/120 = 5/8}}.",
              keywords: ["5/8", "75/120"],
            },
            {
              point: "Obtain exact {{k = (1/6) ln(8/5)}} (or {{-ln(5/8)/6}}).",
              keywords: ["ln(8/5)", "ln(1.6)", "-ln(5/8)"],
            },
            {
              point: "Evaluate {{k ≈ 0.07833}} (4 s.f.).",
              keywords: ["0.07833"],
            },
            {
              point: "Set up half-life equation {{t = ln(2) / k}}.",
              keywords: ["ln(2) / k", "ln(2)/k", "ln 2 / k"],
            },
            {
              point: "Find half-life {{8.85}} hours (3 s.f.).",
              keywords: ["8.85"],
            },
            {
              point: "Solve for {{15}} mg using unrounded {{k}} to obtain {{26.5}} hours (3 s.f.).",
              keywords: ["26.5"],
            },
          ],
          markbands: [
            {
              band: "0–2",
              marks: [0, 2],
              descriptor: "Substitutes boundary data into exponential model but makes logarithm or sign errors.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Finds k accurately and sets up half-life equation, with minor premature-rounding drift.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Exact k in logarithmic form and fully accurate 3 s.f. values using unrounded intermediate storage.",
            },
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "binomial-counting-hl",
          marks: 5,
          question:
            "[HL] A robotics club has {{7}} Year 12 students and {{5}} Year 13 students.\n(a) In how many ways can the club elect a Captain, Vice-Captain, and Secretary (three distinct roles) from all {{12}} members?\n(b) A competition team of {{5}} students must include at least {{2}} Year 12 students AND at least {{2}} Year 13 students. Calculate the number of valid teams.",
          hints: [
            "Distinct titled roles mean order matters ({{nPr}}); an unordered team uses combinations ({{nCr}}).",
            "List the only two possible year-group splits of {{5}} students satisfying both 'at least 2' conditions.",
          ],
          modelAnswer:
            "(a) Because the three roles are distinct, order matters: {{12P3 = 12 * 11 * 10 = 1320}} ways.\n(b) The only valid compositions for a 5-student team with at least 2 from each year group are:\n- 3 Year 12 and 2 Year 13: {{7C3 * 5C2 = 35 * 10 = 350}} teams.\n- 2 Year 12 and 3 Year 13: {{7C2 * 5C3 = 21 * 10 = 210}} teams.\nAdding these mutually exclusive cases gives {{350 + 210 = 560}} valid teams.",
          markScheme: [
            {
              point: "Recognise permutations {{12P3}} for three distinct titled positions.",
              keywords: ["12p3", "12 * 11 * 10"],
            },
            {
              point: "Evaluate part (a) as {{1320}}.",
              keywords: ["1320"],
            },
            {
              point: "Calculate the (3 Year 12, 2 Year 13) case: {{7C3 * 5C2 = 350}}.",
              keywords: ["350", "7c3"],
            },
            {
              point: "Calculate the (2 Year 12, 3 Year 13) case: {{7C2 * 5C3 = 210}}.",
              keywords: ["210", "7c2"],
            },
            {
              point: "Sum the two disjoint cases to obtain {{560}}.",
              keywords: ["560"],
            },
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "binomial-counting-hl",
          marks: 6,
          question:
            "[HL] (a) Expand {{sqrt(4 - x)}} in ascending powers of {{x}} up to and including the {{x^3}} term, stating the range of values of {{x}} for which the expansion is valid.\n(b) By substituting {{x = 1/4}}, use your cubic expansion to obtain an exact rational approximation for {{sqrt(15)}}, and compare its decimal value (to {{5}} decimal places) with your GDC value for {{sqrt(15)}}.",
          hints: [
            "Factor out {{sqrt(4) = 2}} first: {{2(1 - x/4)^(1/2)}}.",
            "Notice that at {{x = 1/4}}, {{sqrt(4 - 1/4) = sqrt(15/4) = sqrt(15) / 2}}, so remember to multiply your series sum by {{2}}!",
          ],
          modelAnswer:
            "(a) Rewrite {{sqrt(4 - x) = 2(1 - x/4)^(1/2)}}. Applying the generalised binomial expansion with {{q = 1/2}} and {{u = -x/4}} gives {{2[1 + (1/2)(-x/4) + ((1/2)(-1/2)/2)(-x/4)^2 + ((1/2)(-1/2)(-3/2)/6)(-x/4)^3 + …] = 2[1 - x/8 - x^2/128 - x^3/1024 + …] = 2 - x/4 - x^2/64 - x^3/512}}. This expansion is valid for {{|-x/4| < 1}}, i.e. {{|x| < 4}}.\n(b) Since {{|1/4| < 4}}, substitute {{x = 1/4}}: LHS is {{sqrt(15/4) = sqrt(15)/2}}, and RHS is {{2 - 1/16 - 1/1024 - 1/32768 = 63455/32768}}. Multiplying by {{2}} gives {{sqrt(15) ≈ 63455/16384 ≈ 3.87299}} (5 d.p.), compared with the GDC value {{3.87298}} (5 d.p.) — accurate to within {{3 * 10^(-6)}}.",
          markScheme: [
            {
              point: "Factor out {{2}} to write {{2(1 - x/4)^(1/2)}}.",
              keywords: ["2(1 - x/4)^(1/2)", "2(1 - x/4)"],
            },
            {
              point: "Compute linear and quadratic terms accurately: {{2 - x/4 - x^2/64}}.",
              keywords: ["x^2/64", "x^2 / 64"],
            },
            {
              point: "Compute the exact cubic term {{-x^3/512}}.",
              keywords: ["x^3/512", "x^3 / 512"],
            },
            {
              point: "State exact validity interval {{|x| < 4}}.",
              keywords: ["|x| < 4", "-4 < x < 4"],
            },
            {
              point: "Link {{sqrt(4 - 1/4) = sqrt(15)/2}} and obtain rational approximation {{63455/16384}}.",
              keywords: ["63455/16384", "63455 / 16384"],
            },
            {
              point: "Compare decimal value {{3.87299}} against GDC {{3.87298}} to 5 decimal places.",
              keywords: ["3.87299", "3.87298"],
            },
          ],
          markbands: [
            {
              band: "0–2",
              marks: [0, 2],
              descriptor: "Factors out 2 and finds initial terms, with sign/fraction errors or missing validity range.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurate cubic expansion and validity interval, with an arithmetic slip during substitution.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Exact cubic expansion, validity condition, rational approximation, and accurate 5 d.p. comparison.",
            },
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Find",
          guideRef: "partial-fractions-hl",
          marks: 6,
          question:
            "[HL] (a) Express {{(5x^2 - 5x + 10) / ((x - 2)(x^2 + 1))}} in partial fractions of the form {{A/(x - 2) + (Bx + C)/(x^2 + 1)}}.\n(b) Verify your result at {{x = 1}}, and briefly explain why {{x^2 + 1}} cannot be factorised further over {{ℝ}}.",
          hints: [
            "Clear denominators to write {{5x^2 - 5x + 10 ≡ A(x^2 + 1) + (Bx + C)(x - 2)}}.",
            "Substitute {{x = 2}} for {{A}}, equate {{x^2}} coefficients for {{B}}, and set {{x = 0}} for {{C}}.",
          ],
          modelAnswer:
            "(a) Clearing denominators gives {{5x^2 - 5x + 10 ≡ A(x^2 + 1) + (Bx + C)(x - 2)}}. Setting {{x = 2}} yields {{20 - 10 + 10 = 5A ⇒ 20 = 5A ⇒ A = 4}}. Comparing {{x^2}} coefficients gives {{5 = A + B = 4 + B ⇒ B = 1}}. Setting {{x = 0}} gives {{10 = A - 2C = 4 - 2C ⇒ C = -3}}. Thus the decomposition is {{4/(x - 2) + (x - 3)/(x^2 + 1)}}.\n(b) At {{x = 1}}: original equals {{(5 - 5 + 10)/((-1)(2)) = -5}}, and decomposed form equals {{4/(-1) + (1 - 3)/2 = -4 - 1 = -5}}, confirming equality. The quadratic {{x^2 + 1}} has negative discriminant {{0^2 - 4(1)(1) = -4 < 0}} and therefore has no real roots, so it is irreducible over {{ℝ}}.",
          markScheme: [
            {
              point: "Clear denominators accurately: {{5x^2 - 5x + 10 ≡ A(x^2 + 1) + (Bx + C)(x - 2)}}.",
              keywords: ["a(x^2 + 1)", "a(x^2+1)"],
            },
            {
              point: "Substitute {{x = 2}} to find {{A = 4}}.",
              keywords: ["a = 4"],
            },
            {
              point: "Compare {{x^2}} coefficients to find {{B = 1}}.",
              keywords: ["b = 1"],
            },
            {
              point: "Substitute {{x = 0}} (or compare linear terms) to find {{C = -3}}.",
              keywords: ["c = -3"],
            },
            {
              point: "Verify both forms equal {{-5}} at {{x = 1}}.",
              keywords: ["-5"],
            },
            {
              point: "Justify irreducibility via negative discriminant ({{-4 < 0}}) / no real roots.",
              keywords: ["discriminant", "no real roots", "irreducible"],
            },
          ],
          markbands: [
            {
              band: "0–2",
              marks: [0, 2],
              descriptor: "Sets up cleared polynomial identity and finds A only.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Finds A, B, and C correctly with missing or incomplete verification/justification.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "All constants exact, verified cleanly at x = 1, and clear irreducibility justification.",
            },
          ],
        },
        {
          id: "1a-number-algebra-core-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Hence",
          guideRef: "partial-fractions-hl",
          marks: 7,
          question:
            "[HL] Consider {{f(x) = (5 - x) / ((1 + x)(2 - x))}}.\n(a) Express {{f(x)}} in partial fractions.\n(b) Hence expand {{f(x)}} in ascending powers of {{x}} up to and including the {{x^2}} term.\n(c) State the exact set of values of {{x}} for which your expansion is valid.",
          hints: [
            "Decompose into {{A/(1 + x) + B/(2 - x)}} first.",
            "Remember to factor out {{2^(-1) = 1/2}} from {{(2 - x)^(-1)}} before expanding!",
            "For part (c), take the intersection (narrower interval) of the two convergence intervals.",
          ],
          modelAnswer:
            "(a) Write {{(5 - x)/((1 + x)(2 - x)) ≡ A/(1 + x) + B/(2 - x)}}, so {{5 - x ≡ A(2 - x) + B(1 + x)}}. Setting {{x = -1}} gives {{6 = 3A ⇒ A = 2}}; setting {{x = 2}} gives {{3 = 3B ⇒ B = 1}}. Hence {{f(x) = 2/(1 + x) + 1/(2 - x)}}.\n(b) Expand each term up to {{x^2}}:\n- {{2(1 + x)^(-1) = 2(1 - x + x^2 - …) = 2 - 2x + 2x^2}} (valid for {{|x| < 1}}).\n- {{(2 - x)^(-1) = (1/2)(1 - x/2)^(-1) = (1/2)(1 + x/2 + x^2/4 + …) = 1/2 + x/4 + x^2/8}} (valid for {{|x| < 2}}).\nAdding like powers gives {{f(x) = 5/2 - (7/4)x + (17/8)x^2}}.\n(c) Both series converge simultaneously if and only if {{|x| < 1}} (i.e. {{-1 < x < 1}}).",
          markScheme: [
            {
              point: "Clear denominators to obtain {{5 - x ≡ A(2 - x) + B(1 + x)}}.",
              keywords: ["a(2 - x) + b(1 + x)", "a(2-x)+b(1+x)"],
            },
            {
              point: "Find {{A = 2}} and {{B = 1}}, giving {{2/(1 + x) + 1/(2 - x)}}.",
              keywords: ["2/(1 + x)", "2/(1+x)"],
            },
            {
              point: "Expand {{2(1 + x)^(-1)}} to {{2 - 2x + 2x^2}}.",
              keywords: ["2 - 2x + 2x^2", "2-2x+2x^2"],
            },
            {
              point: "Factor out {{1/2}} and expand {{(2 - x)^(-1)}} to {{1/2 + x/4 + x^2/8}}.",
              keywords: ["1/2 + x/4 + x^2/8", "x^2/8"],
            },
            {
              point: "Combine constant and linear terms to {{5/2 - (7/4)x}}.",
              keywords: ["- (7/4)x", "-(7/4)x", "-7/4", "-7x/4"],
            },
            {
              point: "Combine quadratic terms to {{(17/8)x^2}}.",
              keywords: ["17/8", "(17/8)x^2"],
            },
            {
              point: "Intersect {{|x| < 1}} and {{|x| < 2}} to state validity {{|x| < 1}}.",
              keywords: ["|x| < 1", "-1 < x < 1"],
            },
          ],
          markbands: [
            {
              band: "0–2",
              marks: [0, 2],
              descriptor: "Finds partial fractions accurately or attempts expansion with structural errors.",
            },
            {
              band: "3–5",
              marks: [3, 5],
              descriptor: "Correct partial fractions and expansions with one arithmetic or validity-interval slip.",
            },
            {
              band: "6–7",
              marks: [6, 7],
              descriptor: "Fully exact partial fractions, quadratic series expansion, and justified intersected validity domain.",
            },
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "1a-number-algebra-core-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Find",
      guideRef: "sequences-series-sigma",
      question:
        "The sum of the first {{n}} terms of a sequence is {{S_n = 4(1 - (1/3)^n)}} for all {{n ∈ ℤ^+}}. Find the exact value of {{u_4}} as a fraction in simplest form.",
      answer: { type: "fraction", n: 8, d: 81, simplest: true },
      hints: [
        "Apply {{u_4 = S_4 - S_3}}.",
        "Notice the constant {{4}} cancels cleanly, leaving {{4((1/3)^3 - (1/3)^4)}}.",
      ],
      solution: [
        "{{u_4 = S_4 - S_3 = 4(1 - 1/81) - 4(1 - 1/27) = 4(1/27 - 1/81)}}.",
        "Simplify: {{4(3/81 - 1/81) = 4(2/81) = 8/81}}.",
      ],
    },
    {
      id: "1a-number-algebra-core-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Solve",
      guideRef: "exponents-logarithms-proof",
      question:
        "Given that {{log_2(x) + log_2(y) = 7}} and {{log_2(x) - log_2(y) = 3}}, find the exact value of {{x + y}}.",
      answer: { type: "number", value: 36 },
      hints: [
        "Treat {{log_2(x)}} and {{log_2(y)}} as two simultaneous unknowns: add and subtract the equations.",
        "Convert back to {{x}} and {{y}} using powers of {{2}}, then sum them.",
      ],
      solution: [
        "Adding the two equations gives {{2 log_2(x) = 10 ⇒ log_2(x) = 5 ⇒ x = 32}}.",
        "Subtracting gives {{2 log_2(y) = 4 ⇒ log_2(y) = 2 ⇒ y = 4}}.",
        "Therefore {{x + y = 32 + 4 = 36}}.",
      ],
    },
    {
      id: "1a-number-algebra-core-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "binomial-counting-hl",
      question:
        "[HL] Calculate how many {{5}}-digit even integers strictly greater than {{50000}} can be formed from the digits {{{1, 3, 4, 5, 7, 8}}} with no repeated digits.",
      answer: { type: "number", value: 120 },
      hints: [
        "Split into two disjoint cases based on the units (last) digit: either {{4}} or {{8}}.",
        "Notice why {{8}} must be split off: using {{8}} as the last digit reduces the choices for the first digit ({{5, 7, 8}}) from {{3}} to {{2}}!",
      ],
      solution: [
        "Case 1 (last digit is {{4}}): first digit from {{{5, 7, 8}}} ({{3}} ways), middle {{3}} digits from remaining {{4}} ({{4P3 = 24}} ways) → {{3 * 24 = 72}}.",
        "Case 2 (last digit is {{8}}): first digit from {{{5, 7}}} ({{2}} ways), middle {{3}} digits from remaining {{4}} ({{4P3 = 24}} ways) → {{2 * 24 = 48}}.",
        "Total: {{72 + 48 = 120}}.",
      ],
    },
    {
      id: "1a-number-algebra-core-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Show that",
      guideRef: "sequences-series-sigma",
      marks: 6,
      question:
        "A square {{Q_1}} has side length {{12}} cm. A second square {{Q_2}} is inscribed inside {{Q_1}} by joining the midpoints of its four sides, and the process continues indefinitely to produce squares {{Q_1, Q_2, Q_3, …}}.\n(a) Show that the side lengths form a geometric sequence with common ratio {{1 / sqrt(2)}}.\n(b) Find the exact total perimeter of all infinitely many squares in the form {{a + b sqrt(2)}} cm.\n(c) Find the exact total area of all infinitely many squares.",
      hints: [
        "Apply Pythagoras to the corner right-angled triangle with two legs of length {{s/2}}.",
        "For part (b), use {{P_1 = 48}} and rationalise the denominator of {{48 / (1 - 1/sqrt(2))}}.",
        "For part (c), remember that scaling lengths by {{1/sqrt(2)}} scales areas by {{(1/sqrt(2))^2 = 1/2}}.",
      ],
      modelAnswer:
        "(a) Joining the midpoints of a square of side {{s}} creates corner right-angled triangles with legs {{s/2}} and {{s/2}}. By Pythagoras, the next side length is {{sqrt((s/2)^2 + (s/2)^2) = sqrt(s^2/2) = s / sqrt(2)}}. Hence the side lengths form a geometric sequence with common ratio {{r = 1 / sqrt(2)}} (satisfying {{|r| < 1}}).\n(b) The perimeters have {{P_1 = 4(12) = 48}} cm and {{r = 1/sqrt(2)}}. Thus {{P_∞ = 48 / (1 - 1/sqrt(2)) = 48 sqrt(2) / (sqrt(2) - 1) = 48 sqrt(2)(sqrt(2) + 1)}}, giving {{96 + 48 sqrt(2)}} as the exact total perimeter.\n(c) The areas have {{A_1 = 12^2 = 144}} cm² and common ratio {{(1/sqrt(2))^2 = 1/2}}. Thus {{A_∞ = 144 / (1 - 1/2) = 288}} cm².",
      markScheme: [
        {
          point: "Apply Pythagoras to half-sides {{s/2}} and {{s/2}} to derive {{s / sqrt(2)}}.",
          keywords: ["(s/2)^2", "pythagoras", "sqrt(s^2/2)"],
        },
        {
          point: "Justify geometric convergence via {{|r| < 1}}.",
          keywords: ["|r| < 1", "converges"],
        },
        {
          point: "Set up the infinite perimeter sum {{48 / (1 - 1/sqrt(2))}}.",
          keywords: ["48 / (1 - 1/sqrt(2))", "48/(1 - 1/sqrt(2))", "48 sqrt(2)"],
        },
        {
          point: "Rationalise the denominator accurately to obtain {{96 + 48 sqrt(2)}}.",
          keywords: ["96 + 48 sqrt(2)", "96 + 48sqrt(2)", "96 + 48√2"],
        },
        {
          point: "Identify initial area {{144}} and area ratio {{1/2}}.",
          keywords: ["144 / (1 - 1/2)", "144/(1 - 1/2)", "ratio 1/2"],
        },
        {
          point: "Calculate exact total area {{288}} cm².",
          keywords: ["288"],
        },
      ],
      markbands: [
        {
          band: "0–2",
          marks: [0, 2],
          descriptor: "Finds ratio via Pythagoras or sets up one infinite sum with algebraic errors.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Completes parts (a) and (c) cleanly but fails to rationalise part (b).",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Rigorous geometric derivation, exact rationalised perimeter, and exact total area.",
        },
      ],
    },
    {
      id: "1a-number-algebra-core-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Prove",
      guideRef: "exponents-logarithms-proof",
      marks: 6,
      question:
        "Let {{a, b, c}} be positive real numbers not equal to {{1}}, and let {{x > 0, x != 1}}. Given that {{log_a(x), log_b(x), log_c(x)}} form three consecutive terms of a geometric sequence:\n(a) Show that {{(ln b)^2 = (ln a)(ln c)}}.\n(b) Given {{a = 2}} and {{c = 16}}, find ALL possible exact values of {{b}}.\n(c) Prove that {{log_a(b) = log_b(c)}}.",
      hints: [
        "Apply the geometric mean condition {{[log_b(x)]^2 = log_a(x) * log_c(x)}} and convert every logarithm to natural logs.",
        "In part (b), taking the square root of {{(ln b)^2 = 4(ln 2)^2}} yields TWO signs ({{±2 ln 2}})!",
        "In part (c), divide {{(ln b)^2 = (ln a)(ln c)}} by {{(ln a)(ln b)}} and apply change of base in reverse.",
      ],
      modelAnswer:
        "(a) Since the three terms are geometric, {{[log_b(x)]^2 = log_a(x) * log_c(x)}}. By change of base, write each ratio as {{ln x / ln a}}, {{ln x / ln b}}, and {{ln x / ln c}}, yielding {{(ln x / ln b)^2 = (ln x / ln a)(ln x / ln c)}}. Since {{x != 1}}, {{(ln x)^2 != 0}}, so we cancel {{(ln x)^2}} and invert both sides to obtain {{(ln b)^2 = (ln a)(ln c)}}.\n(b) Substituting the given values gives {{(ln b)^2 = (ln 2)(4 ln 2) = 4(ln 2)^2}}. Taking square roots yields {{ln b = ±2 ln 2}}, so {{b = 2^2 = 4}} or {{b = 2^(-2) = 1/4}} (i.e. {{0.25}}).\n(c) Since {{a, b != 1}}, {{ln a != 0}} and {{ln b != 0}}. Dividing the identity from part (a) by {{(ln a)(ln b)}} gives the quotient equality {{(ln b)/(ln a)}} equals {{(ln c)/(ln b)}}, which by change of base proves {{log_a(b) = log_b(c)}}.",
      markScheme: [
        {
          point: "Write geometric condition {{[log_b(x)]^2 = log_a(x) * log_c(x)}}.",
          keywords: ["[log_b(x)]^2", "(log_b(x))^2", "log_b(x)^2"],
        },
        {
          point: "Rewrite all three terms via change of base using {{ln x}}.",
          keywords: ["ln x / ln b", "ln(x)/ln(b)", "ln x / ln a"],
        },
        {
          point: "Justify cancelling {{(ln x)^2 != 0}} and rearrange to {{(ln b)^2 = (ln a)(ln c)}}.",
          keywords: ["(ln x)^2", "cancel"],
        },
        {
          point: "Substitute {{a = 2, c = 16}} to form {{(ln b)^2 = 4(ln 2)^2}} and get {{b = 4}}.",
          keywords: ["4(ln 2)^2", "b = 4"],
        },
        {
          point: "Include the negative square root {{-2 ln 2}} to obtain the second solution {{b = 1/4}}.",
          keywords: ["= 1/4", "b = 1/4", "0.25"],
        },
        {
          point: "Divide by {{(ln a)(ln b)}} to obtain {{(ln b)/(ln a) = (ln c)/(ln b)}} and conclude {{log_a(b) = log_b(c)}}.",
          keywords: ["(ln b)/(ln a)", "ln b / ln a", "ln(b)/ln(a)"],
        },
      ],
      markbands: [
        {
          band: "0–2",
          marks: [0, 2],
          descriptor: "Applies geometric mean and change of base with incomplete justification.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Completes part (a) and finds b = 4, overlooking b = 1/4 or omitting part (c).",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Rigorous proofs in parts (a) and (c) plus both exact solutions b = 4 and b = 1/4.",
        },
      ],
    },
    {
      id: "1a-number-algebra-core-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Show that",
      guideRef: "binomial-counting-hl",
      marks: 6,
      question:
        "In the expansion of {{(1 + x)^n}}, where {{n ∈ ℤ^+}} and {{n >= 3}}, the coefficients of {{x}}, {{x^2}}, and {{x^3}} form three consecutive terms of an arithmetic sequence.\n(a) Show that {{n^3 - 9n^2 + 14n = 0}}.\n(b) Hence deduce the unique valid value of {{n}}.\n(c) For this value of {{n}}, find the coefficient of {{x^3}} in {{(2 - x)(1 + x)^n}}.",
      hints: [
        "Express {{nC1, nC2, nC3}} explicitly in terms of {{n}} and apply {{2(nC2) = nC1 + nC3}}.",
        "Multiply every term by {{6}} to clear denominators cleanly before expanding.",
        "In part (c), remember to combine BOTH contributions to {{x^3}}.",
      ],
      modelAnswer:
        "(a) The coefficients are {{nC1 = n}}, {{nC2 = n(n - 1)/2}}, and {{nC3 = n(n - 1)(n - 2)/6}}. The arithmetic condition {{2(nC2) = nC1 + nC3}} gives {{n(n - 1) = n + n(n - 1)(n - 2)/6}}. Multiplying by {{6}} yields {{6n(n - 1) = 6n + n(n^2 - 3n + 2)}}, so {{6n^2 - 6n = n^3 - 3n^2 + 8n}}, which rearranges to {{n^3 - 9n^2 + 14n = 0}}.\n(b) Factorising gives {{n(n - 2)(n - 7) = 0}}, so {{n = 0, 2, 7}}. Since {{n >= 3}}, the unique valid value is {{n = 7}}.\n(c) With {{n = 7}}, the {{x^3}} coefficient in {{(2 - x)(1 + x)^7}} is {{2(7C3) - 1(7C2) = 2(35) - 21 = 70 - 21 = 49}}.",
      markScheme: [
        {
          point: "Write {{nC1, nC2, nC3}} explicitly including {{n(n - 1)(n - 2)/6}}.",
          keywords: ["n(n - 1)(n - 2)/6", "n(n-1)(n-2)/6"],
        },
        {
          point: "Apply arithmetic condition and clear denominators to {{6n(n - 1) = 6n + n(n^2 - 3n + 2)}}.",
          keywords: ["6n(n - 1)", "n(n - 1) = n +"],
        },
        {
          point: "Expand intermediate sides {{6n^2 - 6n = n^3 - 3n^2 + 8n}} to reach the given cubic.",
          keywords: ["n^3 - 3n^2 + 8n", "6n^2 - 6n"],
        },
        {
          point: "Factorise fully to {{n(n - 2)(n - 7) = 0}}.",
          keywords: ["n(n - 2)(n - 7)", "n(n-2)(n-7)"],
        },
        {
          point: "Reject {{n = 0}} and {{n = 2}} using {{n >= 3}} to conclude {{n = 7}}.",
          keywords: ["n = 7"],
        },
        {
          point: "Evaluate {{2(35) - 21 = 49}} for part (c).",
          keywords: ["= 49", "49"],
        },
      ],
      markbands: [
        {
          band: "0–2",
          marks: [0, 2],
          descriptor: "Expresses binomial coefficients in terms of n and sets up arithmetic condition.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Derives the cubic and finds n = 7, with an error in part (c).",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Clean algebraic derivation of the cubic, full root filtering, and exact final coefficient 49.",
        },
      ],
    },
    {
      id: "1a-number-algebra-core-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "binomial-counting-hl",
      marks: 7,
      question:
        "[HL] A recital programme consists of {{4}} distinct piano pieces, {{3}} distinct violin pieces, and {{2}} distinct cello pieces.\n(a) In how many ways can all {{9}} pieces be ordered if pieces for the same instrument must be played consecutively?\n(b) In how many ways can all {{9}} pieces be ordered if NO two piano pieces are played consecutively?\n(c) A shortened selection chooses {{5}} of the {{9}} pieces (order ignored). Calculate how many selections contain at least one piece from every instrument.",
      hints: [
        "Part (a): use the block method (3 blocks + internal orders inside each block).",
        "Part (b): use the gap method — arrange the {{5}} non-piano pieces first to create {{6}} gaps, then slot in the {{4}} piano pieces.",
        "Part (c): subtract selections missing piano, missing violin, or missing cello from {{9C5}} (check whether any selection can miss two instruments!).",
      ],
      modelAnswer:
        "(a) Group the three instrument blocks in {{3! = 6}} orders, then order pieces internally in {{4! * 3! * 2!}} ways: {{3! * 4! * 3! * 2! = 6 * 24 * 6 * 2 = 1728}}.\n(b) Arrange the {{5}} non-piano pieces first in {{5! = 120}} ways, creating {{6}} gaps. Place the {{4}} distinct piano pieces into {{4}} of the {{6}} gaps in {{6P4 = 360}} ways. Total: {{120 * 360 = 43200}}.\n(c) Total unordered selections: {{9C5 = 126}}. Because no single instrument has {{5}} pieces, a selection can miss at most one instrument. Subtract selections missing piano ({{5C5 = 1}}), missing violin ({{6C5 = 6}}), and missing cello ({{7C5 = 21}}): {{126 - (1 + 6 + 21) = 126 - 28 = 98}}.",
      markScheme: [
        {
          point: "Apply block method {{3! * 4! * 3! * 2!}} in part (a).",
          keywords: ["3! * 4! * 3! * 2!", "4! * 3! * 2!"],
        },
        {
          point: "Evaluate part (a) as {{1728}}.",
          keywords: ["1728"],
        },
        {
          point: "Arrange the {{5}} non-piano pieces in {{5! = 120}} ways, creating {{6}} gaps.",
          keywords: ["5! = 120", "6 gaps"],
        },
        {
          point: "Place the {{4}} piano pieces into gaps in {{6P4 = 360}} ways.",
          keywords: ["6p4", "360"],
        },
        {
          point: "Evaluate part (b) as {{43200}}.",
          keywords: ["43200", "43 200", "43,200"],
        },
        {
          point: "Use valid complement {{126 - (1 + 6 + 21)}} (or enumerate all 5 valid splits).",
          keywords: ["126 - 28", "7c5", "24 + 36 + 18 + 8 + 12"],
        },
        {
          point: "Obtain exact part (c) count {{98}}.",
          keywords: ["= 98", "98"],
        },
      ],
      markbands: [
        {
          band: "0–2",
          marks: [0, 2],
          descriptor: "Solves part (a) correctly or applies a partial counting strategy with overcounting.",
        },
        {
          band: "3–5",
          marks: [3, 5],
          descriptor: "Completes two parts accurately (e.g. block and gap methods) with a slip in case enumeration.",
        },
        {
          band: "6–7",
          marks: [6, 7],
          descriptor: "All three counting principles applied flawlessly with clear justification and exact totals.",
        },
      ],
    },
    {
      id: "1a-number-algebra-core-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Hence",
      guideRef: "partial-fractions-hl",
      marks: 8,
      question:
        "[HL] Consider {{g(x) = (2 - 6x + 10x^2) / ((1 + x)(1 - 2x)^2)}}.\n(a) Express {{g(x)}} in partial fractions of the form {{A/(1 + x) + B/(1 - 2x) + C/(1 - 2x)^2}}.\n(b) Hence expand {{g(x)}} in ascending powers of {{x}} up to and including the {{x^2}} term, showing that the linear {{x}} term vanishes, and state the exact range of validity.",
      hints: [
        "Clear denominators: {{2 - 6x + 10x^2 ≡ A(1 - 2x)^2 + B(1 + x)(1 - 2x) + C(1 + x)}}.",
        "Substitute {{x = -1}} for {{A}}, {{x = 1/2}} for {{C}}, and equate {{x^2}} coefficients for {{B}}.",
        "Expand each of {{(1 + x)^(-1)}}, {{(1 - 2x)^(-1)}}, and {{(1 - 2x)^(-2)}} carefully up to {{x^2}}, then intersect their validity intervals.",
      ],
      modelAnswer:
        "(a) Clearing denominators produces the polynomial identity {{2 - 6x + 10x^2 ≡ A(1 - 2x)^2 + B(1 + x)(1 - 2x) + C(1 + x)}}. Setting {{x = -1}} gives {{2 + 6 + 10 = 9A ⇒ 18 = 9A ⇒ A = 2}}. Setting {{x = 1/2}} gives {{2 - 3 + 5/2 = (3/2)C ⇒ 3/2 = (3/2)C ⇒ C = 1}}. Comparing {{x^2}} coefficients gives {{10 = 4A - 2B = 8 - 2B ⇒ B = -1}}. Hence {{g(x) = 2/(1 + x) - 1/(1 - 2x) + 1/(1 - 2x)^2}}.\n(b) Expanding each piece up to {{x^2}}:\n- {{2(1 + x)^(-1) = 2 - 2x + 2x^2}} (valid for {{|x| < 1}}).\n- {{-(1 - 2x)^(-1) = -(1 + 2x + 4x^2) = -1 - 2x - 4x^2}} (valid for {{|x| < 1/2}}).\n- {{(1 - 2x)^(-2) = 1 + (-2)(-2x) + ((-2)(-3)/2)(-2x)^2 = 1 + 4x + 12x^2}} (valid for {{|x| < 1/2}}).\nSumming like powers: constant {{2 - 1 + 1 = 2}}, linear {{(-2 - 2 + 4)x = 0x}}, quadratic {{(2 - 4 + 12)x^2 = 10x^2}}, giving {{g(x) = 2 + 10x^2}}. Intersecting {{|x| < 1}} and {{|x| < 1/2}} gives exact validity {{|x| < 1/2}}.",
      markScheme: [
        {
          point: "Clear denominators accurately: {{A(1 - 2x)^2 + B(1 + x)(1 - 2x) + C(1 + x)}}.",
          keywords: ["polynomial identity", "4a - 2b", "a(1 - 2x)^2", "a(1-2x)^2"],
        },
        {
          point: "Substitute {{x = -1}} to find {{A = 2}}.",
          keywords: ["a = 2"],
        },
        {
          point: "Substitute {{x = 1/2}} to find {{C = 1}}.",
          keywords: ["c = 1"],
        },
        {
          point: "Compare coefficients to find {{B = -1}}.",
          keywords: ["b = -1"],
        },
        {
          point: "Expand {{2(1 + x)^(-1) = 2 - 2x + 2x^2}} and {{-(1 - 2x)^(-1) = -1 - 2x - 4x^2}}.",
          keywords: ["2 - 2x + 2x^2", "-1 - 2x - 4x^2"],
        },
        {
          point: "Expand {{(1 - 2x)^(-2) = 1 + 4x + 12x^2}}.",
          keywords: ["1 + 4x + 12x^2", "12x^2"],
        },
        {
          point: "Sum terms to obtain {{2 + 10x^2}} (verifying the {{x}} term cancels to {{0}}).",
          keywords: ["2 + 10x^2", "2+10x^2"],
        },
        {
          point: "Intersect convergence ranges to state exact validity {{|x| < 1/2}}.",
          keywords: ["|x| < 1/2", "-1/2 < x < 1/2"],
        },
      ],
      markbands: [
        {
          band: "0–2",
          marks: [0, 2],
          descriptor: "Sets up repeated-linear partial fractions identity and finds one or two constants.",
        },
        {
          band: "3–5",
          marks: [3, 5],
          descriptor: "Completes partial fractions and expands at least two terms accurately.",
        },
        {
          band: "6–8",
          marks: [6, 8],
          descriptor: "Fully exact decomposition, all three binomial series, clean cancellation to 2 + 10x², and exact validity |x| < 1/2.",
        },
      ],
    },
  ],
};
