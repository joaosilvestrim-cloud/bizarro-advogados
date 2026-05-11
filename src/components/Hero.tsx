"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.classList.add("visible");
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0A1628] overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glow blobs */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(30,58,95,0.5) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="fade-up relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 text-center"
      >
        {/* Label */}
        <p className="inline-block mb-8 px-4 py-1.5 border border-[#C9A84C]/40 text-[#C9A84C] text-[11px] tracking-[0.35em] uppercase font-medium">
          Advocacia Especializada
        </p>

        {/* Heading */}
        <h1
          className="text-[clamp(3rem,8vw,6rem)] font-bold text-white leading-[1] mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Excelência
        </h1>
        <h1
          className="text-[clamp(3rem,8vw,6rem)] font-bold italic text-gold-gradient leading-[1] mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Jurídica
        </h1>
        <h2
          className="text-[clamp(1.5rem,4vw,3rem)] font-light text-white/80 tracking-wide mb-10"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          com Propósito
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]" />
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </div>

        {/* Subtitle */}
        <p className="text-white/55 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-light">
          Mais de uma década protegendo os interesses dos nossos clientes com
          estratégia, ética e comprometimento. Soluções jurídicas precisas para
          empresas e pessoas em São Bernardo do Campo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#servicos"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C9A84C] text-[#0A1628] text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#E8C96E] transition-colors duration-200"
          >
            Nossas Especialidades →
          </a>
          <a
            href="#escritorio"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/25 text-white/75 text-[11px] tracking-[0.2em] uppercase font-light hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-200"
          >
            Sobre o Escritório
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-10 pt-10 border-t border-white/10">
          {[
            { n: "10+", label: "Anos de Atuação" },
            { n: "500+", label: "Casos Resolvidos" },
            { n: "4", label: "Áreas de Especialização" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-3xl font-bold text-gold-gradient"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.n}
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/35 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#escritorio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 hover:text-[#C9A84C] transition-colors"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
