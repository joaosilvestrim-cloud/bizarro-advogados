"use client";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

function Rev({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => el.classList.add("visible"), delay); }, { threshold: 0.07 });
    io.observe(el); return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-up" style={style}>{children}</div>;
}

const W: React.CSSProperties = { maxWidth: "1280px", margin: "0 auto", padding: "0 5rem" };

export default function About() {
  return (
    <section id="escritorio" style={{ width: "100%", background: "#F7F5F0", overflow: "hidden" }}>
      <div style={{ height: "3px", background: "linear-gradient(90deg,#060E1A 0%,#C9A84C 40%,#E8C96E 60%,#060E1A 100%)" }} />

      {/* ── Quem Somos ── */}
      <div style={{ ...W, paddingTop: "7rem", paddingBottom: "7rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7rem", alignItems: "center" }}>

          {/* Left */}
          <Rev>
            <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>
              Escritório de Advocacia
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.75rem,3.5vw,4rem)", fontWeight: 700, color: "#060E1A", lineHeight: 1.08, marginBottom: "2rem" }}>
              Quem <span style={{ fontStyle: "italic", color: "#C9A84C" }}>Somos</span>
            </h2>
            <div style={{ width: "48px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#E8C96E)", marginBottom: "2rem" }} />
            <p style={{ color: "rgba(6,14,26,0.65)", lineHeight: 1.85, fontSize: "15px", marginBottom: "1rem" }}>
              O <strong style={{ color: "#060E1A" }}>Bizarro Advogados Associados</strong> está
              localizado em São Bernardo do Campo, ABC — São Paulo. Criamos uma organização de
              serviços jurídicos com profissionais do mais alto nível de profissionalização, com
              visão de futuro e objetivo claro.
            </p>
            <p style={{ color: "rgba(6,14,26,0.65)", lineHeight: 1.85, fontSize: "15px", marginBottom: "2.5rem" }}>
              Investimos em pesquisa e desenvolvimento de técnicas capazes de dar respostas
              inovadoras em ambientes em constante mutação, com o objetivo principal de garantir
              o lucro e o sucesso de nossos parceiros.
            </p>
            <blockquote style={{ borderLeft: "2px solid #C9A84C", paddingLeft: "1.5rem" }}>
              <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", color: "rgba(6,14,26,0.5)", fontSize: "1.05rem", lineHeight: 1.65 }}>
                "É preciso encontrar os valores que sejam a essência do negócio e o conduzam até o futuro"
              </p>
            </blockquote>
          </Rev>

          {/* Right: decorative block */}
          <Rev delay={150} style={{ position: "relative" }}>
            {/* Frame */}
            <div style={{ position: "absolute", top: "-20px", left: "-20px", right: "20px", bottom: "20px", border: "1px solid rgba(201,168,76,0.25)" }} />
            {/* Main block */}
            <div style={{ position: "relative", background: "#060E1A", aspectRatio: "4/5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "3rem" }}>
              <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.12) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "6rem", fontWeight: 700, lineHeight: 1, background: "linear-gradient(135deg,#C9A84C,#E8C96E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Bz</p>
                <div style={{ width: "40px", height: "1px", background: "#C9A84C", margin: "1.25rem auto 1.25rem" }} />
                <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase" }}>Desde 2010</p>
              </div>
              {/* Corner accent */}
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "80px", height: "80px", background: "rgba(201,168,76,0.08)", borderTop: "1px solid rgba(201,168,76,0.2)", borderLeft: "1px solid rgba(201,168,76,0.2)" }} />
            </div>
          </Rev>
        </div>
      </div>

      {/* ── Missão ── */}
      <div style={{ background: "#060E1A", overflow: "hidden" }}>
        <div style={{ ...W, paddingTop: "6rem", paddingBottom: "6rem" }}>
          <Rev>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>Nosso Propósito</p>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.25rem,3vw,3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
                  Nossa{" "}<span style={{ fontStyle: "italic", color: "#C9A84C" }}>Missão</span>
                </h3>
                <div style={{ width: "40px", height: "1px", background: "#C9A84C", margin: "2rem 0" }} />
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", lineHeight: 1.8, letterSpacing: "0.05em" }}>
                  CONTRIBUIR COM O DESENVOLVIMENTO EMPRESARIAL
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(201,168,76,0.12)" }}>
                {[
                  "Empresas precisam ser cada vez mais competitivas em seu segmento",
                  "Competitividade exige foco no objeto-fim do negócio: produção e vendas",
                  "As demais áreas seguem o fluxo inevitável da terceirização",
                  "Soluções personalizadas desprezando totalmente a ideologia dos 'pacotes'",
                ].map((t, i) => (
                  <div key={i} style={{ background: "#0A1628", padding: "2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <CheckCircle2 size={16} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7 }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </Rev>
        </div>
      </div>

      {/* ── Filosofia ── */}
      <div style={{ ...W, paddingTop: "6rem", paddingBottom: "6rem" }}>
        <Rev>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "6rem", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>Valores</p>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.25rem,3vw,3rem)", fontWeight: 700, color: "#060E1A", lineHeight: 1.1 }}>
                Nossa{" "}<span style={{ fontStyle: "italic", color: "#C9A84C" }}>Filosofia</span>
              </h3>
              <div style={{ width: "40px", height: "1px", background: "#C9A84C", margin: "2rem 0" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[
                { n: "01", t: "Participação efetiva para o engrandecimento da sociedade e da Nação" },
                { n: "02", t: "Transparência e Clareza devem orientar nossas atitudes perante os clientes" },
                { n: "03", t: "Ética e profissionalismo são fatores indispensáveis na conduta de nossos diretores" },
                { n: "04", t: "Respeito, Incentivo e Participação é o mínimo que nossos colaboradores merecem" },
              ].map((p) => (
                <div key={p.n} style={{ background: "#fff", padding: "2rem", boxShadow: "0 1px 0 rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden" }}>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: "4rem", fontWeight: 700, color: "rgba(6,14,26,0.05)", lineHeight: 1, marginBottom: "1rem", userSelect: "none" }}>{p.n}</p>
                  <p style={{ color: "rgba(6,14,26,0.65)", fontSize: "14px", lineHeight: 1.75 }}>{p.t}</p>
                  <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "linear-gradient(180deg,#C9A84C,#E8C96E)" }} />
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", color: "rgba(6,14,26,0.35)", fontSize: "1rem", textAlign: "center", marginTop: "4rem", maxWidth: "640px", margin: "4rem auto 0" }}>
            "Não fortalecerás a dignidade e o ânimo, se subtraires aos homens a iniciativa e a liberdade."
          </p>
        </Rev>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #escritorio .about-grid { grid-template-columns: 1fr !important; }
          #escritorio .mission-grid { grid-template-columns: 1fr !important; }
          #escritorio .phil-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          #escritorio .mission-inner { grid-template-columns: 1fr !important; }
          #escritorio .phil-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
