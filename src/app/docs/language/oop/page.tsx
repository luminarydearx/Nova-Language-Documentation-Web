import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OOP (Classes & Interfaces) | Nova",
};

export default function OOPPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-nova-cyan/10 text-nova-cyan border border-nova-cyan/20">
            v0.4.0
          </span>
        </div>
        <p className="text-xs font-mono text-nova-dim mb-2">
          Language Reference
        </p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          Object Oriented Programming
        </h1>
        <p className="text-nova-dim">
          Nova features a powerful OOP system with classes, interfaces, abstract
          members, and visibility modifiers.
        </p>
      </div>

      <h2>Classes</h2>
      <p>
        Classes are blueprints for creating objects with data (fields) and
        behaviors (methods).
      </p>
      <CodeBlock
        code={`class User {\n    private var id: string;\n    public var name: string;\n\n    func init(id: string, name: string) {\n        this.id = id;\n        this.name = name;\n    }\n\n    public func getId(): string {\n        return this.id;\n    }\n}`}
        filename="class.nv"
      />

      <h2>Inheritance</h2>
      <CodeBlock
        code={`class Admin extends User {\n    func deletePost(id) {\n        print "Deleting post: " + str(id)\n    }\n}`}
        filename="inheritance.nv"
      />

      <h2>Interfaces & Abstract</h2>
      <p>
        Interfaces define a contract that classes must implement. Abstract
        methods define requirements without bodies.
      </p>
      <CodeBlock
        code={`interface IPrintable {\n    func printInfo(): void;\n}\n\nabstract class Device implements IPrintable {\n    abstract func turnOn(): void;\n}`}
        filename="interface.nv"
      />

      <h2>Visibility Modifiers</h2>
      <ul>
        <li>
          <code>public</code>: Accessible from anywhere (default).
        </li>
        <li>
          <code>private</code>: Accessible only within the same class.
        </li>
        <li>
          <code>protected</code>: Accessible within the same class and its
          subclasses.
        </li>
      </ul>

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs/language/functions"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← Functions
        </Link>
        <Link
          href="/docs/language/data-structures"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          Structs & Enums →
        </Link>
      </div>
    </div>
  );
}
