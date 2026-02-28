import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Variables & Constants | Nova" };

export default function VariablesPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <p className="text-xs font-mono text-nova-dim mb-2">
          Language Reference
        </p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          Variables & Constants
        </h1>
        <p className="text-nova-dim">
          Declaring, assigning, and working with data in Nova.
        </p>
      </div>

      <h2>var — Mutable Variable</h2>
      <p>
        Use <code>var</code> to declare a variable that can be reassigned.
      </p>
      <CodeBlock
        code={`var name = "Nova"\nvar count = 0\nvar pi = 3.14159\nvar active = true\nvar nothing = null`}
        filename="variables.nv"
      />

      <h3>Reassigning variables</h3>
      <CodeBlock
        code={`var score = 0\nscore = score + 10\nscore = score + 5\nprint score   // 15`}
        filename="reassign.nv"
      />

      <h2>const — Immutable Constant</h2>
      <p>
        Use <code>const</code> for values that should not change. By convention,
        use <code>UPPER_SNAKE_CASE</code> for constants.
      </p>
      <CodeBlock
        code={`const VERSION = "0.4.1"\nconst MAX_RETRIES = 3\nconst PI = 3.14159265\nconst AUTHOR = "Luminar"\n\nprint VERSION   // 0.4.1\nprint PI        // 3.14159265`}
        filename="constants.nv"
      />

      <h2>Data Types</h2>
      <p>
        Nova is dynamically typed. The type of a variable is determined by its
        value at runtime.
      </p>

      <div className="not-prose overflow-x-auto mb-6">
        <table className="nova-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Example</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Integer", "var x = 42", "Whole numbers (stored as Long)"],
              ["Float", "var f = 3.14", "Decimal numbers (stored as Double)"],
              ["String", 'var s = "hello"', "Text, single or double quotes"],
              ["Boolean", "var b = true", "true or false"],
              ["Null", "var n = null", "Absence of value"],
            ].map(([type, ex, desc]) => (
              <tr key={type}>
                <td className="font-mono text-nova-purple text-sm">{type}</td>
                <td className="font-mono text-nova-cyan text-sm">{ex}</td>
                <td className="text-nova-dim text-sm">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs/cli"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← CLI Reference
        </Link>
        <Link
          href="/docs/language/functions"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          Functions →
        </Link>
      </div>
    </div>
  );
}
