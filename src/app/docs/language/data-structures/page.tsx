import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Structs & Enums | Nova" };

export default function DataStructuresPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-nova-yellow/10 text-nova-yellow border border-nova-yellow/20">
            v0.4.0
          </span>
        </div>
        <p className="text-xs font-mono text-nova-dim mb-2">
          Language Reference
        </p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          Structs & Enums
        </h1>
        <p className="text-nova-dim">
          Data structures for organizing related values efficiently.
        </p>
      </div>

      <h2>Structs</h2>
      <p>
        Structs are lightweight data containers with fixed fields and types.
      </p>
      <CodeBlock
        code={`struct Point {\n    x: int;\n    y: int;\n}\n\nvar p = new Point(10, 20);\nprint "Point: " + str(p); // Point { x: 10, y: 20 }\np.x += 100;\nprint p.x; // 110`}
        filename="struct.nv"
      />

      <h2>Enums</h2>
      <p>Enums define a named set of constants with inherent ordinals.</p>
      <CodeBlock
        code={`enum Color { RED, GREEN, BLUE }\n\nvar c = Color.GREEN;\nprint c; // Color.GREEN\nprint c.name; // GREEN\nprint c.ordinal; // 1`}
        filename="enum.nv"
      />

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs/language/oop"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← OOP
        </Link>
        <Link
          href="/docs/language/error-handling"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          Exception Handling →
        </Link>
      </div>
    </div>
  );
}
