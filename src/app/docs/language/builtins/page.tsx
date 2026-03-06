import CodeBlock from "@/components/CodeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Built-in Objects - Nova" };

export default function BuiltinsDocs() {
  return (
    <div className="doc-prose animate-fade-up">
      <h1>Built-in Objects</h1>
      <p>
        Nova v0.5.7 provides powerful namespace objects for common operations.
      </p>

      <h2>Math</h2>
      <CodeBlock
        code={`print Math.PI        // 3.14159...\nprint Math.E         // 2.71828...\nprint Math.abs(-42)  // 42\nprint Math.floor(3.7)  // 3\nprint Math.ceil(3.2)   // 4\nprint Math.round(3.5)  // 4\nprint Math.sqrt(16)    // 4\nprint Math.pow(2, 10)  // 1024\nprint Math.min(5, 3)   // 3\nprint Math.max(5, 3)   // 5\nprint Math.random()    // 0.0 - 1.0\nprint Math.sin(Math.PI / 2)  // 1.0\nprint Math.cos(0)      // 1.0\nprint Math.log(Math.E) // 1.0`}
        language="nova"
      />

      <h2>JSON</h2>
      <CodeBlock
        code={`var data = {"name": "Nova", "version": 5}\nvar jsonStr = JSON.stringify(data)\nprint jsonStr  // {"name":"Nova","version":5}\n\nvar parsed = JSON.parse("42")\nprint parsed  // 42`}
        language="nova"
      />

      <h2>Date</h2>
      <CodeBlock
        code={`print Date.now()     // Unix timestamp (ms)\nprint Date.year()    // 2026\nprint Date.month()   // 3\nprint Date.day()     // 6\nprint Date.format()  // "2026-03-06 16:23:44"\nprint Date.format(Date.now(), "dd/MM/yyyy")`}
        language="nova"
      />

      <h2>System Functions</h2>
      <CodeBlock
        code={`// File I/O\nwriteFile("data.txt", "Hello Nova!")\nvar content = readFile("data.txt")\n\n// Console input\nvar name = readLine("Enter name: ")\n\n// Utilities\nprint time()      // Current timestamp\nprint typeOf(42)  // "Double"\nprint len([1,2,3]) // 3\nsleep(1000)       // Wait 1 second\nexit(0)           // Exit program`}
        language="nova"
      />
    </div>
  );
}
