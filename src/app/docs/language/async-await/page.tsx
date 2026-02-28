import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Concurrency (Async/Await) | Nova" };

export default function AsyncAwaitPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-nova-purple/10 text-nova-purple border border-nova-purple/20">
            v0.4.1
          </span>
        </div>
        <p className="text-xs font-mono text-nova-dim mb-2">
          Language Reference
        </p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          Concurrency
        </h1>
        <p className="text-nova-dim">
          Nova supports non-blocking operations via `spawn` and `await`.
        </p>
      </div>

      <h2>spawn()</h2>
      <p>
        The `spawn` function takes a callback and executes it in a background
        thread, returning a Future object.
      </p>
      <CodeBlock
        code={`var task = spawn(func() {\n    // Simulate heavy work\n    return "Data Loaded"\n});`}
        filename="spawn.nv"
      />

      <h2>await</h2>
      <p>
        The `await` keyword pauses execution (without blocking the entire
        engine) until the Future is resolved.
      </p>
      <CodeBlock
        code={`print "Waiting..."\nvar result = await task\nprint result // Out: Data Loaded`}
        filename="await.nv"
      />

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs/language/error-handling"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← Exception Handling
        </Link>
        <Link
          href="/docs/language/arrays"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          Arrays & Objects →
        </Link>
      </div>
    </div>
  );
}
