"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Scale } from "lucide-react";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#1E3A5F]/60 blur-[100px] pointer-events-none" />

      {/* Decorative vertical lines */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent hidden md:block" />
      <div className="absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent hidden md:block" />

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/5 rounded-none">
          <Scale size={14} className="text-[#C9A84C]" />
          <span className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase">
            Advocacia Especializada
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Excelência
          <br />
          <span className="text-gold-gradient italic">Jurídica</span>
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">
            com Propósito
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <div className="w-2 h-2 rotate-45 border border-[#C9A84C]" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </div>

        {/* Subtitle */}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          Mais de uma década protegendo os interesses dos nossos clientes com
          estratégia, ética e comprometimento. Soluções jurídicas precisas para
          empresas e pessoas em São Bernardo do Campo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#servicos"
            className="group px-8 py-4 bg-[#C9A84C] text-[#0A1628] text-sm tracking-widest uppercase font-semibold hover:bg-[#E8C96E] transition-all duration-300 flex items-center gap-2"
          >
            Nossas Especialidades
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#escritorio"
            className="px-8 py-4 border border-white/20 text-white/80 text-sm tracking-widest uppercase font-light hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
          >
            Sobre o Escritório
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12 mt-20 pt-12 border-t border-white/10">
          {[
            { number: "10+", label: "Anos de Atuação" },
            { number: "500+", label: "Casos Resolvidos" },
            { number: "4", label: "Áreas de Especialização" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-bold text-gold-gradient mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.number}
              </div>
              <div className="text-xs tracking-widest text-white/40 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#escritorio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#C9A84C] transition-colors group"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
