"use client";
import Link from "next/link";
import { useState } from "react";
import { VERSION } from "@/lib/navigation";
import GoogleTranslate from "@/components/GoogleTranslate";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14">
      {/* Glass backdrop */}
      <div className="absolute inset-0 bg-nova-black/80 backdrop-blur-md border-b border-nova-border" />

      <div className="relative flex items-center justify-between h-full px-4 md:px-6 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-7 h-7 flex items-center justify-center">
            <div className="absolute inset-0 bg-nova-cyan/10 rounded-lg group-hover:bg-nova-cyan/20 transition-colors" />
            <img
              src="/icon_nova.png"
              alt="Nova Logo"
              className="w-5 h-5 relative z-10"
            />
          </div>
          <span className="font-display font-bold text-lg text-nova-white tracking-wider group-hover:text-nova-cyan transition-colors">
            NOVA
          </span>
          <span className="hidden sm:flex items-center text-[10px] font-mono px-1.5 py-0.5 rounded border border-nova-cyan/30 text-nova-cyan bg-nova-cyan/5">
            v{VERSION}
          </span>
        </Link>

        {/* Center nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: "Docs", href: "/docs" },
            { label: "Language", href: "/docs/language/variables" },
            { label: "CLI", href: "/docs/cli" },
            { label: "Examples", href: "/docs/examples" },
            { label: "About", href: "/docs/about" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-nova-dim hover:text-nova-white transition-colors rounded-md hover:bg-nova-border/50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <GoogleTranslate />
          <a
            href="https://github.com/dearlyfebrianos/Nova-Language"
            target="_blank"
            rel="noopener"
            className="hidden sm:flex items-center gap-1.5 text-sm text-nova-dim hover:text-nova-white transition-colors"
          >
            <GitHubIcon />
            <span className="hidden md:block">GitHub</span>
          </a>
          <Link
            href="/docs/getting-started"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-nova-cyan text-nova-black font-bold hover:bg-nova-cyan/80 transition-colors shadow-nova"
          >
            Get Started →
          </Link>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 text-nova-dim hover:text-nova-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-nova-deep border-b border-nova-border">
          {[
            { label: "Docs", href: "/docs" },
            { label: "Getting Started", href: "/docs/getting-started" },
            { label: "CLI", href: "/docs/cli" },
            { label: "Language", href: "/docs/language/variables" },
            { label: "Examples", href: "/docs/examples" },
            { label: "About", href: "/docs/about" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm text-nova-dim hover:text-nova-white hover:bg-nova-border/30 border-b border-nova-border/50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
