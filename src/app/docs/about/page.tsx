import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Nova" };

export default function AboutPage() {
  return (
    <div className="doc-prose animate-fade-up">
      <div className="mb-8 pb-6 border-b border-nova-border">
        <p className="text-xs font-mono text-nova-dim mb-2">About</p>
        <h1 className="font-display text-3xl font-black text-nova-white tracking-wider mb-3">
          About Nova
        </h1>
        <p className="text-nova-dim">
          The story, the creator, and what&apos;s next.
        </p>
      </div>

      <h2>What is Nova?</h2>
      <p>
        Nova is an interpreted, dynamically-typed programming language with a
        space and cosmic aesthetic identity. It was designed from scratch as a
        full-stack language project — from lexer to interpreter — with ambitions
        to grow into a multi-target compile language supporting WebAssembly,
        Android (APK), and server-side execution.
      </p>

      <h2>Built by Luminar</h2>

      <div className="not-prose my-6 p-6 rounded-xl border border-nova-purple/30 bg-nova-purple/5">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-20 h-20 rounded-full border-2 border-nova-purple/50 bg-nova-card flex items-center justify-center shrink-0 shadow-purple">
            <span className="text-4xl">◉</span>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-nova-white tracking-wider mb-1">
              LUMINAR
            </h3>
            <p className="text-nova-dim text-xs font-mono mb-3">
              Anonymous Developer · Language Architect · Space Enthusiast
            </p>
            <p className="text-nova-dim text-sm leading-relaxed mb-4">
              Luminar is the creator and sole architect of Nova. A developer
              passionate about language design, compiler construction, and the
              aesthetics of space and cosmic themes.
            </p>
          </div>
        </div>
      </div>

      <div className="not-prose flex gap-3 mt-8 pt-8 border-t border-nova-border">
        <Link
          href="/docs/examples"
          className="text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          ← Examples
        </Link>
        <Link
          href="/docs"
          className="ml-auto text-xs font-mono text-nova-dim hover:text-nova-cyan transition-colors"
        >
          Back to Docs Home →
        </Link>
      </div>
    </div>
  );
}
