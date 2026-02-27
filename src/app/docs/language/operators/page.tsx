import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Operators | Nova" };

export default function OperatorsPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <p className="text-xs font-mono text-nova-dim mb-2">
          Language Reference
        </p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          Operators
        </h1>
        <p className="text-nova-dim">
          All operators available in Nova, with precedence rules.
        </p>
      </div>

      <h2>Arithmetic Operators</h2>
      <CodeBlock
        code={`var a = 10\nvar b = 3\n\nprint a + b   // 13   addition\nprint a - b   // 7    subtraction\nprint a * b   // 30   multiplication\nprint a / b   // 3    integer division (if both ints)\nprint a % b   // 1    modulo (remainder)\n\n// Float division\nvar fa = 10.0\nvar fb = 3.0\nprint fa / fb  // 3.3333333333333335`}
        filename="arithmetic.nv"
      />

      <div className="not-prose overflow-x-auto mb-6">
        <table className="nova-table">
          <thead>
            <tr>
              <th>Op</th>
              <th>Name</th>
              <th>Example</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["+", "Addition", "10 + 3", "13"],
              ["-", "Subtraction", "10 - 3", "7"],
              ["*", "Multiplication", "10 * 3", "30"],
              ["/", "Division", "10 / 3", "3 (int)"],
              ["%", "Modulo", "10 % 3", "1"],
              ["**", "Power (lexed)", "2 ** 8", "Phase 2"],
            ].map(([op, name, ex, res]) => (
              <tr key={op}>
                <td className="font-mono text-nova-cyan font-bold">{op}</td>
                <td className="text-nova-dim text-sm">{name}</td>
                <td className="font-mono text-nova-dim text-sm">{ex}</td>
                <td className="font-mono text-nova-green text-sm">{res}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Comparison Operators</h2>
      <p>
        All comparison operators return a boolean (<code>true</code> or{" "}
        <code>false</code>):
      </p>
      <CodeBlock
        code={`var x = 10\nvar y = 20\n\nprint x == y   // false  equal\nprint x != y   // true   not equal\nprint x < y    // true   less than\nprint x <= 10  // true   less or equal\nprint y > x    // true   greater than\nprint y >= 20  // true   greater or equal\n\n// Works on strings too\nprint "nova" == "nova"   // true\nprint "nova" == "lua"    // false`}
        filename="comparison.nv"
      />

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs/language/control-flow"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← Control Flow
        </Link>
        <Link
          href="/docs/examples"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          Examples →
        </Link>
      </div>
    </div>
  );
}
