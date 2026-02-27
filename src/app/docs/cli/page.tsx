import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "CLI Reference | Nova" };

export default function CLIPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <p className="text-xs font-mono text-nova-dim mb-2">CLI Reference</p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          CLI Reference
        </h1>
        <p className="text-nova-dim">
          Complete guide to the Nova command-line interface.
        </p>
      </div>

      <h2>Overview</h2>
      <p>Nova provides two command names that behave identically:</p>
      <CodeBlock
        code={`nova <command> [options]\nnv   <command> [options]   # short alias, same as nova`}
        language="bash"
        filename="usage"
        showLineNumbers={false}
      />

      <div className="not-prose overflow-x-auto mb-8">
        <table className="nova-table">
          <thead>
            <tr>
              <th>Command</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["nova run <file>", "Execute a .nv or .nova source file"],
              ["nova version", "Show version, JVM info, and platform"],
              ["nova help", "Show help with ASCII logo"],
              ["nova repl", "Interactive shell (Phase 2 — coming soon)"],
            ].map(([cmd, desc]) => (
              <tr key={cmd}>
                <td className="font-mono text-nova-cyan text-sm">{cmd}</td>
                <td className="text-nova-dim text-sm">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="run">nova run</h2>
      <p>Executes a Nova source file. This is the primary command.</p>
      <CodeBlock
        code={`nova run <file.nv | file.nova>\nnv run <file.nv | file.nova>`}
        language="bash"
        filename="syntax"
        showLineNumbers={false}
      />

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs/getting-started"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← Getting Started
        </Link>
        <Link
          href="/docs/language/variables"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          Language Reference →
        </Link>
      </div>
    </div>
  );
}
