"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const news = [
  {
    date: "15 Abr 2026",
    category: "Direito Tributário",
    title: "Novas regras de compensação de crédito tributário em 2026",
    excerpt:
      "A Receita Federal publicou novas diretrizes que impactam diretamente empresas que buscam compensar créditos tributários. Saiba como se preparar.",
  },
  {
    date: "02 Mar 2026",
    category: "Direito Trabalhista",
    title: "Reforma trabalhista: o que mudou para 2026 e como proteger sua empresa",
    excerpt:
      "As alterações legislativas trazem novos desafios para a gestão de RH. Nossos especialistas explicam o que é fundamental para a conformidade.",
  },
  {
    date: "18 Fev 2026",
    category: "Contratos",
    title: "A importância da cláusula de não-concorrência em contratos empresariais",
    excerpt:
      "Entenda como uma cláusula bem redigida pode proteger o seu negócio de concorrência desleal e como garantir sua validade jurídica.",
  },
];

export default function NewsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="noticias" className="bg-[#0A1628] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          ref={ref}
          className="mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-xs tracking-[0.4em] text-[#C9A84C] uppercase font-medium">
                Publicações
              </span>
              <h2
                className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Notícias &amp;
                <br />
                <span className="italic text-[#C9A84C]">Artigos</span>
              </h2>
            </div>
            <a
              href="#noticias"
              className="text-sm tracking-widest uppercase text-white/40 hover:text-[#C9A84C] transition-colors flex items-center gap-2"
            >
              Ver todas
              <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="gold-line mt-8" />
        </div>

        {/* News cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <article
              key={i}
              className="group border border-white/5 p-8 hover:border-[#C9A84C]/30 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-widest uppercase text-[#C9A84C] font-medium">
                  {item.category}
                </span>
                <span className="text-xs text-white/30">{item.date}</span>
              </div>

              <h3
                className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {item.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">
                Ler mais
                <ArrowUpRight size={12} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
