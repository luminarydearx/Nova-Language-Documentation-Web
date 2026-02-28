import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-nova-border bg-nova-deep/50 mt-auto">
      <div className="max-w-screen-2xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/icon_nova.png" alt="Nova Logo" className="w-6 h-6" />
              <span className="font-display font-bold text-nova-white tracking-wider">
                NOVA
              </span>
            </div>
            <p className="text-xs text-nova-dim leading-relaxed">
              A modern, space-themed programming language built for the cosmos.
            </p>
            <p className="text-xs text-nova-dim mt-3 italic">
              "The universe compiles in Nova."
            </p>
          </div>

          {/* Docs */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-nova-dim mb-3">
              Docs
            </h4>
            <ul className="space-y-2">
              {[
                ["Getting Started", "/docs/getting-started"],
                ["CLI Reference", "/docs/cli"],
                ["Variables", "/docs/language/variables"],
                ["Functions", "/docs/language/functions"],
                ["Examples", "/docs/examples"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-nova-dim hover:text-nova-cyan transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Language */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-nova-dim mb-3">
              Language
            </h4>
            <ul className="space-y-2">
              {[
                ["Variables & Constants", "/docs/language/variables"],
                ["Functions", "/docs/language/functions"],
                ["Control Flow", "/docs/language/control-flow"],
                ["Operators", "/docs/language/operators"],
                ["About Nova", "/docs/about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-nova-dim hover:text-nova-cyan transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-nova-dim mb-3">
              Project
            </h4>
            <ul className="space-y-2">
              {[
                ["GitHub", "https://github.com/luminarydearx/Nova-Language"],
                ["VS Code Extension", "https://marketplace.visualstudio.com"],
                [
                  "Report a Bug",
                  "https://github.com/luminarydearx/Nova-Language/issues",
                ],
                ["Roadmap", "/docs/about#roadmap"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-xs text-nova-dim hover:text-nova-cyan transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-nova-border gap-3">
          <p className="text-xs text-nova-border font-mono">
            © 2025 Nova Language · Built by{" "}
            <span className="text-nova-purple font-semibold">Luminar</span> ·
            MIT License
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-nova-border">v0.4.1</span>
            <span className="text-xs font-mono text-nova-border">Phase 1</span>
            <span className="w-1.5 h-1.5 rounded-full bg-nova-green animate-pulse" />
            <span className="text-xs font-mono text-nova-green">active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
