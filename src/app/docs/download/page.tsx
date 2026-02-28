import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Download Nova | v0.4.1" };

export default function DownloadPage() {
  const platforms = [
    {
      name: "Windows",
      icon: "🪟",
      ext: ".zip",
      tag: "Recommended",
      instructions:
        "Extract to a folder and add 'bin' to your Environment PATH.",
      download: "/downloads/nova-v0.4.1-windows.zip",
    },
    {
      name: "Linux",
      icon: "🐧",
      ext: ".tar.gz",
      tag: "x64 / ARM",
      instructions: "Extract and symlink 'bin/nova' to /usr/local/bin.",
      download: "/downloads/nova-v0.4.1-linux.tar.gz",
    },
    {
      name: "macOS",
      icon: "🍎",
      ext: ".zip",
      tag: "Apple Silicon / Intel",
      instructions:
        "Extract, then run 'xattr -d com.apple.quarantine bin/nova' to allow execution.",
      download: "/downloads/nova-v0.4.1-macos.zip",
    },
  ];

  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-nova-cyan/10 text-nova-cyan border border-nova-cyan/20">
            v0.4.1
          </span>
          <span className="text-xs font-mono text-nova-dim">
            Latest Stable Candidate
          </span>
        </div>
        <h1 className="font-display text-4xl font-black text-nova-white tracking-wider mb-3">
          Download Nova
        </h1>
        <p className="text-nova-dim text-lg">
          Pick the right package for your cosmic development environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 not-prose">
        {platforms.map((p) => (
          <div
            key={p.name}
            className="p-5 rounded-xl border border-nova-border bg-nova-deep/40 hover:border-nova-cyan/40 transition-all flex flex-col group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">
                {p.icon}
              </span>
              {p.tag && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-nova-border text-nova-white uppercase tracking-tighter">
                  {p.tag}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-nova-white mb-1">{p.name}</h3>
            <p className="text-xs text-nova-dim mb-4 leading-relaxed">
              {p.instructions}
            </p>
            <a
              href={p.download}
              className="mt-auto w-full py-2.5 rounded-lg bg-nova-white text-nova-black font-bold text-sm text-center hover:bg-nova-cyan transition-colors"
            >
              Download {p.ext}
            </a>
          </div>
        ))}
      </div>

      <h2>One-Click Install (Windows)</h2>
      <p>
        Want to skip the manual setup? Use our PowerShell installer that
        automatically handles the Environment PATH for you.
      </p>
      <CodeBlock
        code={`irm install.novalang.dev | iex`}
        language="powershell"
        filename="PowerShell (Admin)"
      />

      <h2>Verify Installation</h2>
      <p>After installing, restart your terminal and type:</p>
      <CodeBlock
        code={`nova version\nnv version`}
        language="bash"
        filename="terminal"
      />

      <div className="not-prose flex gap-3 mt-12 pt-8 border-t border-nova-border">
        <Link
          href="/docs"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← What is Nova?
        </Link>
        <Link
          href="/docs/getting-started"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          Getting Started →
        </Link>
      </div>
    </div>
  );
}
