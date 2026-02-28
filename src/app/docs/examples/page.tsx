import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Examples | Nova" };

export default function ExamplesPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <p className="text-xs font-mono text-nova-dim mb-2">Examples</p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          Examples
        </h1>
        <p className="text-nova-dim">
          Real Nova v0.4.1 programs you can copy and run.
        </p>
      </div>

      <h2 id="hello">Hello World</h2>
      <CodeBlock
        code={`print "Hello, World!"
print "✦ Nova v0.4.1"`}
        filename="01_hello.nv"
      />

      <h2 id="math">Math & Variables</h2>
      <CodeBlock
        code={`const PI = 3.14159
var radius = 7
var area   = PI * radius * radius

print "Circle area (r=7): " + area

var result = ((100 - 58) * 2) + (3 * 3)
print "Result: " + result

// Using math built-ins
print abs(-42)         // 42
print max(10, 20)      // 20
print min(10, 20)      // 10
print sqrt(144)        // 12.0
print floor(3.9)       // 3
print ceil(3.1)        // 4`}
        filename="02_math.nv"
      />

      <h2 id="functions">Functions</h2>
      <CodeBlock
        code={`// Basic function
func greet(name) {
    print "Hello, " + name + "!"
}

// Function with return
func add(a, b) {
    return a + b
}

// Recursive
func factorial(n) {
    if n <= 1 { return 1 }
    return n * factorial(n - 1)
}

greet("Nova")
greet("Luminar")
print add(10, 32)
print factorial(6)    // 720`}
        filename="03_functions.nv"
      />

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs/language/operators"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← Operators
        </Link>
        <Link
          href="/docs/about"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          About Nova →
        </Link>
      </div>
    </div>
  );
}
