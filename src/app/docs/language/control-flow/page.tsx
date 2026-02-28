import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Control Flow | Nova" };

export default function ControlFlowPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-nova-green/10 text-nova-green border border-nova-green/20">
            ✅ v0.2.0
          </span>
        </div>
        <p className="text-xs font-mono text-nova-dim mb-2">
          Language Reference
        </p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          Control Flow
        </h1>
        <p className="text-nova-dim">
          Conditionals, loops, and branching — all fully supported in v0.2.0.
        </p>
      </div>

      <h2>if / else if / else</h2>
      <CodeBlock
        code={`var score = 85\n\nif score >= 90 {\n    print "Grade: A"\n} else if score >= 80 {\n    print "Grade: B"\n} else if score >= 70 {\n    print "Grade: C"\n} else {\n    print "Grade: F"\n}\n// Output: Grade: B`}
        filename="if-else.nv"
      />

      <h2>while loop</h2>
      <CodeBlock
        code={`var count = 0\n\nwhile count < 5 {\n    print count\n    count = count + 1\n}\n// 0  1  2  3  4`}
        filename="while.nv"
      />

      <h2>do-while loop</h2>
      <CodeBlock
        code={`var count = 0\n\ndo {\n    count = count + 1\n} while (count < 3)\nprint count // 3`}
        filename="do-while.nv"
      />

      <h2>for loop — Range</h2>
      <p>
        The <code>..</code> operator creates a range from start (inclusive) to
        end (exclusive):
      </p>
      <CodeBlock
        code={`// Basic range\nfor i in 0..5 {\n    print i\n}\n// 0  1  2  3  4`}
        filename="for-range.nv"
      />

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs/language/functions"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← Functions
        </Link>
        <Link
          href="/docs/language/arrays"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          Arrays →
        </Link>
      </div>
    </div>
  );
}
