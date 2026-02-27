import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FEATURES = [
  {
    icon: "⚡",
    title: "Fast & Lightweight",
    desc: "Tree-walking interpreter built on JVM 21. Zero dependencies, instant startup.",
  },
  {
    icon: "◈",
    title: "Clean Syntax",
    desc: "Expressive, readable syntax. Familiar if you know any modern language.",
  },
  {
    icon: "✦",
    title: "Cosmic Identity",
    desc: "Space-themed language designed by Luminar with a distinct personality.",
  },
  {
    icon: "⌨",
    title: "Great Tooling",
    desc: "VS Code extension with syntax highlighting, snippets, and a run button.",
  },
  {
    icon: "◉",
    title: "Java 21 Powered",
    desc: "Built with Records, Sealed types, and Pattern Matching switch expressions.",
  },
  {
    icon: "◎",
    title: "Dual Commands",
    desc: "Use `nova run` or `nv run` — both work identically.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-nova-black">
      <Navbar />

      {/* Hero */}
      <main className="flex-1 pt-14">
        <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-4">
          {/* Background effects */}
          <div className="absolute inset-0 bg-grid-nova bg-[size:32px_32px] opacity-100" />
          <div className="absolute inset-0 bg-radial-nova" />
          <div className="absolute inset-0 bg-radial-purple" />

          {/* Floating stars */}
          <Stars />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-nova-cyan/30 bg-nova-cyan/5 mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-nova-cyan animate-pulse" />
              <span className="text-xs font-mono text-nova-cyan">
                v0.2.0 · Phase 1 · Core Interpreter
              </span>
            </div>

            {/* Supernova Explosion Logo */}
            <div className="relative flex justify-center items-center h-48 w-48 mx-auto mb-10 animate-float">
              {/* Outer blast wave */}
              <div className="absolute inset-[-20px] rounded-full blur-[30px] bg-nova-purple/30 animate-supernova-pulse" />
              {/* Expanding ring 1 */}
              <div className="absolute inset-4 rounded-full border border-nova-cyan animate-supernova-ring-1" />
              {/* Expanding ring 2 */}
              <div className="absolute inset-8 rounded-full border border-nova-purple animate-supernova-ring-2" />
              {/* Core pulse */}
              <div className="absolute inset-6 rounded-full bg-nova-cyan/20 blur-xl animate-supernova-pulse" />

              {/* The Nova Logo centered and pulsing heavily */}
              <img
                src="/icon_nova.png"
                alt="Nova Logo"
                className="w-32 h-32 relative z-10 animate-supernova-core rounded-full shadow-nova-lg"
              />
            </div>

            {/* Title */}
            <h1
              className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-wider mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-nova-white glow-cyan">NOVA</span>
            </h1>

            <p className="text-nova-dim text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
              A{" "}
              <span className="text-nova-cyan font-medium">
                modern, space-themed
              </span>{" "}
              programming language. Clean syntax, expressive semantics, built on{" "}
              <span className="text-nova-purple font-medium">Java 21</span>.
            </p>
            <p className="font-mono text-sm text-nova-border mb-10 italic">
              "The universe compiles in Nova."
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
              <Link
                href="/docs/getting-started"
                className="px-6 py-3 bg-nova-cyan text-nova-black font-bold font-mono text-sm rounded-lg hover:bg-nova-cyan/80 transition-all shadow-nova hover:shadow-nova-lg"
              >
                Get Started →
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 border border-nova-border text-nova-dim hover:text-nova-white hover:border-nova-cyan/40 font-mono text-sm rounded-lg transition-all"
              >
                Read Docs
              </Link>
              <a
                href="https://github.com/luminarydearx/Nova-Language"
                target="_blank"
                rel="noopener"
                className="px-6 py-3 border border-nova-border text-nova-dim hover:text-nova-white font-mono text-sm rounded-lg transition-all flex items-center gap-2"
              >
                <GitHubIcon /> GitHub
              </a>
            </div>

            {/* Quick code preview */}
            <div className="relative max-w-lg mx-auto">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-nova-cyan/30 via-nova-purple/20 to-nova-cyan/30 animate-glow-pulse" />
              <div className="relative bg-nova-card border border-nova-border rounded-xl overflow-hidden shadow-card">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-nova-border bg-nova-deep">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <span className="ml-2 font-mono text-xs text-nova-dim">
                    hello.nv
                  </span>
                </div>
                <pre className="p-5 text-left text-sm font-mono leading-7 overflow-x-auto text-nova-white">
                  <code>
                    <span className="token-comment">
                      // ✦ Your first Nova program{"\n"}
                    </span>
                    <span className="token-keyword">const </span>
                    <span className="token-plain">GREETING = </span>
                    <span className="token-string">"Hello, Nova!"</span>
                    <span className="token-plain">{"\n"}</span>
                    <span className="token-keyword">var </span>
                    <span className="token-plain">x = 10 + 32{"\n\n"}</span>
                    <span className="token-builtin">print </span>
                    <span className="token-plain">GREETING{"\n"}</span>
                    <span className="token-builtin">print </span>
                    <span className="token-string">"The answer is: "</span>
                    <span className="token-plain"> + x{"\n"}</span>
                    <span className="token-builtin">print </span>
                    <span className="token-plain">x {" > "} 40</span>
                  </code>
                </pre>
                <div className="px-4 py-2 bg-nova-black/50 border-t border-nova-border font-mono text-xs text-nova-dim flex items-center gap-2">
                  <span className="text-nova-green">$</span>
                  <span>nova run hello.nv</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-20 bg-nova-deep/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-center text-nova-white mb-2 tracking-wider">
              WHY NOVA?
            </h2>
            <p className="text-center text-nova-dim text-sm mb-12">
              Everything you need to start building with Nova
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="group p-5 rounded-xl bg-nova-card border border-nova-border hover:border-nova-cyan/30 transition-all shadow-card hover:shadow-nova"
                >
                  <span className="text-2xl mb-3 block">{f.icon}</span>
                  <h3 className="font-display text-sm font-bold text-nova-white mb-2 tracking-wide group-hover:text-nova-cyan transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs text-nova-dim leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Install section */}
        <section className="px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-nova-white mb-2 tracking-wider">
              QUICK INSTALL
            </h2>
            <p className="text-nova-dim text-sm mb-10">
              Up and running in 3 commands
            </p>
            <div className="space-y-3 text-left">
              {[
                {
                  step: "01",
                  comment: "# Build from source",
                  cmd: "./gradlew installDist",
                },
                {
                  step: "02",
                  comment: "# Add to PATH (Git Bash / bash)",
                  cmd: 'export PATH="$PATH:$(pwd)/build/install/nova/bin"',
                },
                {
                  step: "03",
                  comment: "# Run your first file",
                  cmd: "nova run hello.nv",
                },
              ].map(({ step, comment, cmd }) => (
                <div
                  key={step}
                  className="flex gap-4 p-4 rounded-lg bg-nova-card border border-nova-border font-mono text-sm"
                >
                  <span className="text-nova-cyan/40 text-xs self-start mt-1 shrink-0">
                    {step}
                  </span>
                  <div>
                    <div className="text-nova-dim text-xs mb-1">{comment}</div>
                    <div className="text-nova-green">{cmd}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 mt-8 text-nova-cyan font-mono text-sm hover:underline"
            >
              Full installation guide →
            </Link>
          </div>
        </section>

        {/* Built by */}
        <section className="px-4 py-16 bg-nova-deep/40 border-t border-nova-border">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-nova-dim text-xs font-mono uppercase tracking-widest mb-4">
              Built by
            </p>
            <div className="inline-flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full border-2 border-nova-purple/50 bg-nova-card flex items-center justify-center shadow-purple">
                <span className="text-2xl">◉</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-nova-white tracking-wider">
                  LUMINAR
                </h3>
                <p className="text-nova-dim text-xs mt-1">
                  Anonymous Developer · Space Enthusiast · Language Architect
                </p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://github.com/luminar-dev"
                  className="text-xs text-nova-dim hover:text-nova-cyan font-mono transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Stars() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 5,
    dur: 2 + Math.random() * 4,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-nova-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
