import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Functions | Nova" };

export default function FunctionsPage() {
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
          Functions
        </h1>
        <p className="text-nova-dim">
          Declaring, calling, and composing functions in Nova.
        </p>
      </div>

      <h2>Basic Function</h2>
      <p>
        Use <code>func</code> to declare a function. No return type annotation
        is required (Nova is dynamically typed), but you can add{" "}
        <code>-&gt; type</code> as documentation.
      </p>
      <CodeBlock
        code={`func greet(name) {\n    print "Hello, " + name + "!"\n}\n\ngreet("Nova")      // Hello, Nova!\ngreet("Luminar")   // Hello, Luminar!`}
        filename="basic.nv"
      />

      <h2>Return Values</h2>
      <CodeBlock
        code={`func add(a, b) {\n    return a + b\n}\n\nfunc multiply(a, b) -> int {\n    return a * b\n}\n\nvar sum = add(10, 32)\nprint sum                    // 42\n\nprint multiply(6, 7)         // 42`}
        filename="return.nv"
      />

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs/language/variables"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← Variables
        </Link>
        <Link
          href="/docs/language/control-flow"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          Control Flow →
        </Link>
      </div>
    </div>
  );
}
