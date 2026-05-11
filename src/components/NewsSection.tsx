"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const news = [
  { date: "15 Abr 2026", cat: "Direito Tributário", title: "Novas regras de compensação de crédito tributário em 2026", text: "A Receita Federal publicou novas diretrizes que impactam diretamente empresas que buscam compensar créditos tributários. Saiba como se preparar." },
  { date: "02 Mar 2026", cat: "Direito Trabalhista", title: "Reforma trabalhista: o que mudou para 2026 e como proteger sua empresa", text: "As alterações legislativas trazem novos desafios para a gestão de RH. Nossos especialistas explicam o que é fundamental para a conformidade." },
  { date: "18 Fev 2026", cat: "Contratos", title: "A importância da cláusula de não-concorrência em contratos empresariais", text: "Entenda como uma cláusula bem redigida pode proteger o seu negócio de concorrência desleal e como garantir sua validade jurídica." },
];

export default function NewsSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.05 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section id="noticias" style={{ width: "100%", background: "#060E1A", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "7rem 5rem" }}>
        <div ref={ref} className="fade-up">
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "4rem" }}>
            <div>
              <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>Publicações</p>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem,3.5vw,4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.05 }}>
                Notícias &amp; <span style={{ fontStyle: "italic", color: "#C9A84C" }}>Artigos</span>
              </h2>
            </div>
            <a href="#noticias" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>
              Ver todas <ArrowUpRight size={13} />
            </a>
          </div>
          <div style={{ width: "48px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#E8C96E)", marginBottom: "4rem" }} />

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,320px), 1fr))", gap: "1px", background: "rgba(201,168,76,0.1)" }}>
            {news.map((n, i) => (
              <article key={i} style={{ background: "#0A1628", padding: "2.5rem", cursor: "pointer", transition: "background 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#112240"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#0A1628"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 700 }}>{n.cat}</span>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>{n.date}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>{n.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.75, marginBottom: "2rem" }}>{n.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C" }}>
                  Ler mais <ArrowUpRight size={12} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
