import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Documentation | Nova" };

export default function DocsPage() {
  return (
    <div className="doc-prose animate-fade-up">
      {/* Header */}
      <div className="mb-10 pb-8 border-b border-nova-border">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-nova-cyan/10 text-nova-cyan border border-nova-cyan/20">
            v0.2.0
          </span>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-nova-purple/10 text-nova-purple border border-nova-purple/20">
            Phase 1
          </span>
        </div>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          Nova Documentation
        </h1>
        <p className="text-nova-dim text-base leading-relaxed max-w-2xl">
          Welcome to the official documentation for <strong>Nova</strong> — a
          modern, space-themed programming language built on Java 21. Created by{" "}
          <span className="text-nova-purple font-semibold">Luminar</span>.
        </p>
      </div>

      {/* Quick navigation cards */}
      <h2>Quick Navigation</h2>
      <div className="grid sm:grid-cols-2 gap-3 not-prose mb-10">
        {[
          {
            icon: "⚡",
            title: "Getting Started",
            href: "/docs/getting-started",
            desc: "Install Nova, set up your environment, and run your first program.",
            color: "cyan",
          },
          {
            icon: "⌨",
            title: "CLI Reference",
            href: "/docs/cli",
            desc: "Complete guide to nova run, nova version, nova help and the nv alias.",
            color: "purple",
          },
          {
            icon: "◈",
            title: "Language Reference",
            href: "/docs/language/variables",
            desc: "Variables, functions, control flow, operators — the full language.",
            color: "gold",
          },
          {
            icon: "◎",
            title: "Examples",
            href: "/docs/examples",
            desc: "Real Nova programs demonstrating syntax and features.",
            color: "green",
          },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`group block p-5 rounded-xl border bg-nova-card transition-all shadow-card hover:shadow-nova
              ${card.color === "cyan" ? "border-nova-border hover:border-nova-cyan/40" : ""}
              ${card.color === "purple" ? "border-nova-border hover:border-nova-purple/40" : ""}
              ${card.color === "gold" ? "border-nova-border hover:border-nova-gold/40" : ""}
              ${card.color === "green" ? "border-nova-border hover:border-nova-green/40" : ""}
            `}
          >
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0 mt-0.5">{card.icon}</span>
              <div>
                <h3
                  className={`font-display text-sm font-bold mb-1 tracking-wide transition-colors
                  ${card.color === "cyan" ? "text-nova-white group-hover:text-nova-cyan" : ""}
                  ${card.color === "purple" ? "text-nova-white group-hover:text-nova-purple" : ""}
                  ${card.color === "gold" ? "text-nova-white group-hover:text-nova-gold" : ""}
                  ${card.color === "green" ? "text-nova-white group-hover:text-nova-green" : ""}
                `}
                >
                  {card.title}
                </h3>
                <p className="text-xs text-nova-dim leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* What is Nova */}
      <h2>What is Nova?</h2>
      <p>
        Nova is a dynamically-typed, interpreted programming language designed
        to be expressive, clean, and fun to write. It runs on the{" "}
        <strong>Java Virtual Machine (JVM)</strong> using a tree-walking
        interpreter and is built entirely with modern Java 21 features including
        Records, Sealed interfaces, and Pattern Matching switch expressions.
      </p>

      <h2>The Nova Runtime & Execution Philosophy</h2>
      <p>
        Nova is fundamentally built as an interpreted language targeting the JVM
        21, leveraging advanced Java features. Rather than compiling directly to
        JVM bytecode, it employs a sophisticated
        <strong>recursive-descent tree-walking evaluator</strong> pattern,
        bridging high-level dynamic execution with underlying JVM performance.
      </p>

      <h3>1. Lexical Analysis & Tokenization</h3>
      <p>
        The Nova compiler translates UTF-8 source strings into a sequential
        token stream. This phase performs basic syntax validation and emits a
        structural mapping without constructing any operational tree.
      </p>

      <h3>2. AST Construction & Parser Design</h3>
      <p>
        The parser utilizes Prätt Parsing (Top-Down Operator Precedence) to
        resolve left-recursion and accurately map Nova's precedence rules into
        an Abstract Syntax Tree (AST). It models everything from unary/binary
        operators to complex control structures like loops, conditionals, and
        higher-order function compositions.
      </p>

      <h3>3. Environment & Memory Model</h3>
      <p>
        Memory assignment and variable lookups are handled via hierarchical
        symbol environments maps heavily relying on the JVM's optimized Garbage
        Collector. Rather than allocating pointers manually, each lexical scope
        constructs an environment hierarchy ensuring data behaves securely
        without implicit memory leaks.
      </p>

      <h3>4. Polymorphic Interpreter</h3>
      <p>
        During execution, Nova recursively traverses the AST, dispatching nodes
        through Java 21 Pattern Matching. This provides a highly encapsulated
        runtime space allowing dynamic type coercion and native standard-library
        invocation simultaneously.
      </p>

      <div className="not-prose flex flex-wrap items-center gap-2 my-4 font-mono text-sm">
        {[
          "Source File",
          "Lexer",
          "Tokens",
          "Parser",
          "Abstract Syntax Tree",
          "Environment Resolver",
          "Interpreter",
          "Console Output",
        ].map((step, i, arr) => (
          <div key={step} className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg border border-nova-border bg-nova-card text-nova-dim text-xs">
              {step}
            </span>
            {i < arr.length - 1 && (
              <span className="text-nova-cyan text-xs">→</span>
            )}
          </div>
        ))}
      </div>

      <h2>Use Cases & Utility (Why Nova?)</h2>
      <ul>
        <li>
          <strong>Embedded Scripting:</strong> Easily embed the Nova interpreter
          inside Java 21 applications. It's intended to be a safe scripting
          layer allowing external configuration or dynamic logic without
          recompiling the host application.
        </li>
        <li>
          <strong>Expressivity & Prototyping:</strong> Nova prioritizes human
          readability, removing heavy verbosity commonly found in strictly-typed
          backend languages. With functions as first-class citizens, closures,
          and dynamic list and map structures, it makes iterating concepts
          extremely fast.
        </li>
        <li>
          <strong>Compiler Theory Playground:</strong> As a standalone codebase
          built without complex compiler-compiler tooling like ANTLR or Yacc,
          Nova acts as a pure, easily decipherable example of interpreting
          languages manually.
        </li>
      </ul>

      {/* Next steps */}
      <h2>Next Steps</h2>
      <ul>
        <li>
          Follow the{" "}
          <Link href="/docs/getting-started">Getting Started guide</Link> to
          install Nova
        </li>
        <li>
          Read the{" "}
          <Link href="/docs/language/variables">Language Reference</Link> to
          learn Nova syntax
        </li>
        <li>
          Browse the <Link href="/docs/examples">Examples</Link> to see Nova in
          action
        </li>
        <li>
          Install the <Link href="/docs/about#vscode">VS Code Extension</Link>{" "}
          for syntax highlighting
        </li>
      </ul>
    </div>
  );
}
