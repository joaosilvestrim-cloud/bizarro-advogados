"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const E = "cubic-bezier(0.22, 1, 0.36, 1)";

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    io.observe(el); return () => io.disconnect();
  }, [threshold]);
  return [ref, vis] as const;
}

const news = [
  { date: "15 Abr 2026", cat: "Direito Tributário", title: "Novas regras de compensação de crédito tributário em 2026", text: "A Receita Federal publicou novas diretrizes que impactam diretamente empresas que buscam compensar créditos tributários. Saiba como se preparar." },
  { date: "02 Mar 2026", cat: "Direito Trabalhista", title: "Reforma trabalhista: o que mudou para 2026 e como proteger sua empresa", text: "As alterações legislativas trazem novos desafios para a gestão de RH. Nossos especialistas explicam o que é fundamental para a conformidade." },
  { date: "18 Fev 2026", cat: "Contratos", title: "A importância da cláusula de não-concorrência em contratos empresariais", text: "Entenda como uma cláusula bem redigida pode proteger o seu negócio de concorrência desleal e como garantir sua validade jurídica." },
];

function NewsCard({ n, idx, vis }: { n: typeof news[0]; idx: number; vis: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(32px)",
        transition: `opacity 0.85s ${E} ${idx * 120}ms, transform 0.85s ${E} ${idx * 120}ms, background 0.3s ease`,
        background: hovered ? "#112240" : "#0A1628",
        padding: "2.5rem",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover gold left accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "2px", height: "100%",
        background: "linear-gradient(180deg,#C9A84C,#E8C96E)",
        transform: hovered ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top",
        transition: `transform 0.4s ${E}`,
      }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <span style={{
          fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase",
          color: "#C9A84C", fontWeight: 700,
          transition: `letter-spacing 0.3s ${E}`,
          ...(hovered ? { letterSpacing: "0.38em" } : {}),
        }}>{n.cat}</span>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>{n.date}</span>
      </div>

      <h3 style={{
        fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 700,
        color: hovered ? "#fff" : "rgba(255,255,255,0.9)",
        lineHeight: 1.4, marginBottom: "1rem",
        transition: `color 0.3s ease`,
      }}>{n.title}</h3>

      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.75, marginBottom: "2rem" }}>{n.text}</p>

      <div style={{
        display: "flex", alignItems: "center", gap: "0.4rem",
        fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C",
      }}>
        Ler mais
        <ArrowUpRight size={12} style={{
          transition: `transform 0.3s ${E}`,
          transform: hovered ? "translate(3px,-3px)" : "translate(0,0)",
        }} />
      </div>
    </article>
  );
}

export default function NewsSection() {
  const [headRef, headVis] = useInView();
  const [cardsRef, cardsVis] = useInView(0.05);

  return (
    <section id="noticias" style={{ width: "100%", background: "#060E1A", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "7rem 5rem" }}>

        {/* Header */}
        <div ref={headRef} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "4rem" }}>
          <div>
            <div style={{
              opacity: headVis ? 1 : 0, transform: headVis ? "none" : "translateX(-20px)",
              transition: `opacity 0.8s ${E}, transform 0.8s ${E}`,
            }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>Publicações</p>
            </div>
            <div style={{
              opacity: headVis ? 1 : 0, transform: headVis ? "none" : "translateX(-20px)",
              transition: `opacity 0.8s ${E} 80ms, transform 0.8s ${E} 80ms`,
            }}>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem,3.5vw,4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.05 }}>
                Notícias &amp; <span style={{ fontStyle: "italic", color: "#C9A84C" }}>Artigos</span>
              </h2>
            </div>
          </div>

          <div style={{
            opacity: headVis ? 1 : 0, transform: headVis ? "none" : "translateX(16px)",
            transition: `opacity 0.8s ${E} 160ms, transform 0.8s ${E} 160ms`,
          }}>
            <a href="#noticias"
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: `color 0.3s ease` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#C9A84C"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)"; }}
            >
              Ver todas <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Animated divider */}
        <div style={{
          width: headVis ? "48px" : "0px", height: "2px",
          background: "linear-gradient(90deg,#C9A84C,#E8C96E)", marginBottom: "4rem",
          transition: `width 0.7s ${E} 240ms`,
        }} />

        {/* Cards */}
        <div ref={cardsRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,320px), 1fr))", gap: "1px", background: "rgba(201,168,76,0.1)" }}>
          {news.map((n, i) => (
            <NewsCard key={i} n={n} idx={i} vis={cardsVis} />
          ))}
        </div>
      </div>
    </section>
  );
}
