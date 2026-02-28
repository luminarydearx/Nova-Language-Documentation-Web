import CodeBlock from "@/components/CodeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pattern Matching - Nova" };

export default function MatchDocs() {
  return (
    <div className="doc-prose animate-fade-up">
      <h1>Pattern Matching</h1>
      <p>
        Nova supports modern pattern matching via the <code>match</code>{" "}
        expression. It is more powerful than a traditional switch statement as
        it returns a value.
      </p>

      <h2>Basic Syntax</h2>
      <CodeBlock
        code={`var result = match (x) {\n    1 -> "One",\n    2 -> "Two",\n    else -> "Many"\n};`}
        language="nova"
      />

      <h2>Use in Functions</h2>
      <p>
        Pattern matching is often used to simplify complex conditional logic in
        functions.
      </p>
      <CodeBlock
        code={`func describeNum(n) {\n    return match (n) {\n        0 -> "Empty",\n        1 -> "Unity",\n        100 -> "Century",\n        else -> "Just a number"\n    }\n}\n\nprint describeNum(1); // Prints "Unity"`}
        language="nova"
      />

      <h2>Comparison with If-Else</h2>
      <p>
        Pattern matching is more concise when comparing a single value against
        multiple literal constants.
      </p>
    </div>
  );
}
