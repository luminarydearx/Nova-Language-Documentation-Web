import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Getting Started | Nova" };

export default function GettingStartedPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <p className="text-xs font-mono text-nova-dim mb-2">Introduction</p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          Getting Started
        </h1>
        <p className="text-nova-dim text-base">
          Get Nova installed and running your first program in minutes.
        </p>
      </div>

      <h2 id="prerequisites">Prerequisites</h2>
      <p>Before installing Nova, make sure you have the following installed:</p>
      <ul>
        <li>
          <strong>JDK 21</strong> — Nova is built on Java 21 (download from{" "}
          <a href="https://adoptium.net" target="_blank">
            Adoptium
          </a>
          )
        </li>
        <li>
          <strong>Git Bash</strong> or any bash terminal on Windows (or any
          terminal on Mac/Linux)
        </li>
        <li>
          <strong>Gradle Wrapper</strong> — included in the project (no global
          install needed)
        </li>
      </ul>

      <p>Verify your Java version:</p>
      <CodeBlock
        code={`java --version\n# Should show: openjdk 21.x.x`}
        language="bash"
        filename="terminal"
      />

      <h2 id="install">Installation</h2>

      <h3>Step 1 — Clone or download the source</h3>
      <CodeBlock
        code={`git clone https://github.com/luminar-dev/nova-lang.git\ncd nova-lang`}
        language="bash"
        filename="terminal"
      />

      <h3>Step 2 — Build the distribution</h3>
      <p>
        The Gradle wrapper will automatically download Gradle 8.7 on first run
        (~130MB).
      </p>
      <CodeBlock
        code={`./gradlew installDist`}
        language="bash"
        filename="terminal"
      />
      <p>On success you'll see:</p>
      <CodeBlock
        code={`> Task :installDist\n  ✦ nv script created\n  ✦ nv.bat created\n\nBUILD SUCCESSFUL in 12s`}
        language="bash"
        filename="output"
      />

      <h3>Step 3 — Add Nova to your PATH</h3>
      <CodeBlock
        code={`# Git Bash / bash\nexport PATH="$PATH:$(pwd)/build/install/nova/bin"\n\n# To make permanent, add this to your ~/.bashrc or ~/.bash_profile\necho 'export PATH="$PATH:/path/to/nova-lang/build/install/nova/bin"' >> ~/.bashrc`}
        language="bash"
        filename="terminal"
      />

      <h3>Step 4 — Verify both commands work</h3>
      <CodeBlock
        code={`nova version\nnv version`}
        language="bash"
        filename="terminal"
      />

      <h3>Your First Program</h3>
      <p>
        Create a file called <code>hello.nv</code>:
      </p>
      <CodeBlock
        code={`// ✦ My first Nova program\nconst AUTHOR = "Luminar"\nvar x = 10 + 32\n\nprint "Hello from Nova!"\nprint "Built by: " + AUTHOR\nprint "The answer: " + x\nprint x > 40`}
        filename="hello.nv"
      />

      <h3>Run it</h3>
      <CodeBlock
        code={`nova run hello.nv\n# or use the shorter alias:\nnv run hello.nv`}
        language="bash"
        filename="terminal"
      />

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← What is Nova?
        </Link>
        <Link
          href="/docs/cli"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          CLI Reference →
        </Link>
      </div>
    </div>
  );
}
