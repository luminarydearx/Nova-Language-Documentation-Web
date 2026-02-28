import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Exception Handling | Nova" };

export default function ErrorHandlingPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-nova-red/10 text-nova-red border border-nova-red/20">
            v0.4.0
          </span>
        </div>
        <p className="text-xs font-mono text-nova-dim mb-2">
          Language Reference
        </p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          Exception Handling
        </h1>
        <p className="text-nova-dim">
          Handle runtime errors gracefully using try, catch, finally, and throw.
        </p>
      </div>

      <h2>Try-Catch-Finally</h2>
      <p>Used to wrap code that might fail and define cleanup logic.</p>
      <CodeBlock
        code={`try {\n    print "Starting operation"\n    throw "Secret Error"\n} catch (e) {\n    print "Caught: " + str(e)\n} finally {\n    print "Cleanup done"\n}`}
        filename="try-catch.nv"
      />

      <h2>Throw</h2>
      <p>Throw values to trigger an exception anywhere in your code.</p>
      <CodeBlock
        code={`func validate(x) {\n    if (x < 0) throw "Negative value not allowed"\n}`}
        filename="throw.nv"
      />

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs/language/data-structures"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← Structs & Enums
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
