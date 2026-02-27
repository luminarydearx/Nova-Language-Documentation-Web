"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function ComingSoonContent() {
  const searchParams = useSearchParams();
  const feature = searchParams.get("feature") || "Fitur Kosmik";

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-up">
      {/* Supernova Explosion Logo Wrapper */}
      <div className="relative flex justify-center items-center h-48 w-48 mx-auto mb-10 animate-float">
        <div className="absolute inset-[-20px] rounded-full blur-[30px] bg-nova-purple/30 animate-supernova-pulse" />
        <div className="absolute inset-4 rounded-full border border-nova-cyan animate-supernova-ring-1" />
        <div className="absolute inset-8 rounded-full border border-nova-purple animate-supernova-ring-2" />
        <div className="absolute inset-6 rounded-full bg-nova-cyan/20 blur-xl animate-supernova-pulse" />

        <img
          src="/icon_nova.png"
          alt="Nova Logo"
          className="w-32 h-32 relative z-10 animate-supernova-core rounded-full shadow-nova-lg"
        />
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-nova-purple/30 bg-nova-purple/10 mb-6">
        <span className="w-2 h-2 rounded-full bg-nova-purple animate-ping" />
        <span className="text-xs font-mono text-nova-purple uppercase tracking-[0.2em] ml-1">
          Coming Soon
        </span>
      </div>

      <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-nova-white mb-6 tracking-wider">
        <span className="text-nova-cyan drop-shadow-[0_0_15px_rgba(0,245,255,0.4)]">
          {feature}
        </span>
      </h1>

      <p className="text-nova-dim text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
        <span className="text-nova-white font-semibold font-mono">
          Sedang dalam tahap pengembangan.
        </span>
        <br />
        <br />
        Bagian <span className="text-nova-purple font-mono">
          "{feature}"
        </span>{" "}
        sedang dibangun dan dirakit dalam siklus kosmik kami. Segera hadir pada
        pembaruan dokumentasi berikutnya!
      </p>

      <Link
        href="/docs"
        className="inline-flex items-center gap-3 px-8 py-3.5 border border-nova-border bg-nova-card hover:bg-nova-cyan/10 hover:border-nova-cyan/50 text-nova-white font-mono text-sm rounded-xl transition-all shadow-card hover:shadow-nova group"
      >
        <ArrowLeft className="w-4 h-4 text-nova-dim group-hover:text-nova-cyan transition-colors" />
        Kembali ke Dokumentasi
      </Link>
    </div>
  );
}

export default function ComingSoonPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
          <div className="w-10 h-10 border-2 border-nova-border border-t-nova-cyan rounded-full animate-spin" />
          <span className="text-nova-dim font-mono text-xs animate-pulse">
            Memuat Transmisi...
          </span>
        </div>
      }
    >
      <ComingSoonContent />
    </Suspense>
  );
}
