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
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="noticias" className="w-full bg-[#0A1628] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={ref} className="fade-up mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.4em] text-[#C9A84C] uppercase font-medium mb-3">
                Publicações
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Notícias &amp; <br />
                <span className="italic text-[#C9A84C]">Artigos</span>
              </h2>
            </div>
            <a
              href="#noticias"
              className="self-start md:self-end text-[11px] tracking-[0.2em] uppercase text-white/35 hover:text-[#C9A84C] transition-colors flex items-center gap-1.5"
            >
              Ver todas <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="gold-line mt-8" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {news.map((item, i) => (
            <article
              key={i}
              className="border border-white/8 p-7 hover:border-[#C9A84C]/35 transition-colors duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C] font-semibold">
                  {item.category}
                </span>
                <span className="text-[11px] text-white/25">{item.date}</span>
              </div>
              <h3
                className="text-base font-bold text-white mb-3 leading-snug group-hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">{item.excerpt}</p>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Ler mais <ArrowUpRight size={11} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
