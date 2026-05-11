"use client";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const E = "cubic-bezier(0.22, 1, 0.36, 1)";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    io.observe(el); return () => io.disconnect();
  }, [threshold]);
  return [ref, vis] as const;
}

function a(vis: boolean, delay: number, dir: "up" | "left" | "right" | "scale" = "up"): React.CSSProperties {
  return {
    opacity: vis ? 1 : 0,
    transform: vis ? "none"
      : dir === "left"  ? "translateX(-28px)"
      : dir === "right" ? "translateX(28px)"
      : dir === "scale" ? "scale(0.94) translateY(16px)"
      : "translateY(28px)",
    transition: `opacity 0.85s ${E} ${delay}ms, transform 0.85s ${E} ${delay}ms`,
  };
}

const W: React.CSSProperties = { maxWidth: "1280px", margin: "0 auto", padding: "0 5rem" };

export default function About() {
  const [whoRef, whoVis] = useInView();
  const [missionRef, missionVis] = useInView();
  const [philRef, philVis] = useInView();

  const missionCards = [
    "Empresas precisam ser cada vez mais competitivas em seu segmento",
    "Competitividade exige foco no objeto-fim do negócio: produção e vendas",
    "As demais áreas seguem o fluxo inevitável da terceirização",
    "Soluções personalizadas desprezando totalmente a ideologia dos 'pacotes'",
  ];

  const philCards = [
    { n: "01", t: "Participação efetiva para o engrandecimento da sociedade e da Nação" },
    { n: "02", t: "Transparência e Clareza devem orientar nossas atitudes perante os clientes" },
    { n: "03", t: "Ética e profissionalismo são fatores indispensáveis na conduta de nossos diretores" },
    { n: "04", t: "Respeito, Incentivo e Participação é o mínimo que nossos colaboradores merecem" },
  ];

  return (
    <section id="escritorio" style={{ width: "100%", background: "#F7F5F0", overflow: "hidden" }}>
      <div style={{ height: "3px", background: "linear-gradient(90deg,#060E1A 0%,#C9A84C 40%,#E8C96E 60%,#060E1A 100%)" }} />

      {/* ── Quem Somos ── */}
      <div ref={whoRef} style={{ ...W, paddingTop: "7rem", paddingBottom: "7rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7rem", alignItems: "center" }}>

          {/* Left — staggered text */}
          <div>
            <div style={a(whoVis, 0, "left")}>
              <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>
                Escritório de Advocacia
              </p>
            </div>
            <div style={a(whoVis, 80, "left")}>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.75rem,3.5vw,4rem)", fontWeight: 700, color: "#060E1A", lineHeight: 1.08, marginBottom: "2rem" }}>
                Quem <span style={{ fontStyle: "italic", color: "#C9A84C" }}>Somos</span>
              </h2>
            </div>
            <div style={{ ...a(whoVis, 160), overflow: "hidden" }}>
              <div style={{
                width: whoVis ? "48px" : "0px", height: "2px",
                background: "linear-gradient(90deg,#C9A84C,#E8C96E)",
                marginBottom: "2rem",
                transition: `width 0.7s ${E} 160ms`,
              }} />
            </div>
            <div style={a(whoVis, 240)}>
              <p style={{ color: "rgba(6,14,26,0.65)", lineHeight: 1.85, fontSize: "15px", marginBottom: "1rem" }}>
                O <strong style={{ color: "#060E1A" }}>Bizarro Advogados Associados</strong> está
                localizado em São Bernardo do Campo, ABC — São Paulo. Criamos uma organização de
                serviços jurídicos com profissionais do mais alto nível de profissionalização, com
                visão de futuro e objetivo claro.
              </p>
            </div>
            <div style={a(whoVis, 320)}>
              <p style={{ color: "rgba(6,14,26,0.65)", lineHeight: 1.85, fontSize: "15px", marginBottom: "2.5rem" }}>
                Investimos em pesquisa e desenvolvimento de técnicas capazes de dar respostas
                inovadoras em ambientes em constante mutação, com o objetivo principal de garantir
                o lucro e o sucesso de nossos parceiros.
              </p>
            </div>
            <div style={a(whoVis, 400)}>
              <blockquote style={{ borderLeft: "2px solid #C9A84C", paddingLeft: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", color: "rgba(6,14,26,0.5)", fontSize: "1.05rem", lineHeight: 1.65 }}>
                  "É preciso encontrar os valores que sejam a essência do negócio e o conduzam até o futuro"
                </p>
              </blockquote>
            </div>
          </div>

          {/* Right — decorative block with scale-in */}
          <div style={{ ...a(whoVis, 200, "scale"), position: "relative" }}>
            {/* Animated outer frame */}
            <div style={{
              position: "absolute", top: "-20px", left: "-20px", right: "20px", bottom: "20px",
              border: "1px solid rgba(201,168,76,0.25)",
              opacity: whoVis ? 1 : 0,
              transition: `opacity 1s ${E} 350ms`,
            }} />
            {/* Main block */}
            <div style={{
              position: "relative", background: "#060E1A", aspectRatio: "4/5",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              overflow: "hidden", padding: "3rem",
            }}>
              <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.12) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

              {/* Animated ring */}
              <div aria-hidden style={{
                position: "absolute", inset: "15%", borderRadius: "50%",
                border: "1px solid rgba(201,168,76,0.08)",
                animation: "orbit 40s linear infinite",
              }} />

              <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <p style={{
                  fontFamily: "var(--font-playfair)", fontSize: "6rem", fontWeight: 700, lineHeight: 1,
                  background: "linear-gradient(135deg,#C9A84C,#E8C96E)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  animation: whoVis ? "scaleIn 0.9s cubic-bezier(0.22,1,0.36,1) 400ms both" : "none",
                }}>Bz</p>
                <div style={{
                  width: whoVis ? "40px" : "0px", height: "1px", background: "#C9A84C",
                  margin: "1.25rem auto 1.25rem",
                  transition: `width 0.6s ${E} 600ms`,
                }} />
                <p style={{
                  color: "rgba(255,255,255,0.25)", fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase",
                  opacity: whoVis ? 1 : 0, transition: `opacity 0.6s ${E} 700ms`,
                }}>Desde 2010</p>
              </div>

              <div style={{ position: "absolute", bottom: 0, right: 0, width: "80px", height: "80px", background: "rgba(201,168,76,0.08)", borderTop: "1px solid rgba(201,168,76,0.2)", borderLeft: "1px solid rgba(201,168,76,0.2)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Missão ── */}
      <div style={{ background: "#060E1A", overflow: "hidden" }}>
        <div ref={missionRef} style={{ ...W, paddingTop: "6rem", paddingBottom: "6rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", alignItems: "start" }}>

            <div>
              <div style={a(missionVis, 0, "left")}>
                <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>Nosso Propósito</p>
              </div>
              <div style={a(missionVis, 80, "left")}>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.25rem,3vw,3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
                  Nossa{" "}<span style={{ fontStyle: "italic", color: "#C9A84C" }}>Missão</span>
                </h3>
              </div>
              <div style={{ margin: "2rem 0", overflow: "hidden" }}>
                <div style={{
                  width: missionVis ? "40px" : "0px", height: "1px", background: "#C9A84C",
                  transition: `width 0.6s ${E} 160ms`,
                }} />
              </div>
              <div style={a(missionVis, 200, "left")}>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", lineHeight: 1.8, letterSpacing: "0.05em" }}>
                  CONTRIBUIR COM O DESENVOLVIMENTO EMPRESARIAL
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(201,168,76,0.12)" }}>
              {missionCards.map((t, i) => (
                <div key={i} style={{
                  ...a(missionVis, i * 100),
                  background: "#0A1628", padding: "2rem",
                  display: "flex", gap: "1rem", alignItems: "flex-start",
                  transition: `opacity 0.85s ${E} ${i * 100}ms, transform 0.85s ${E} ${i * 100}ms, background 0.3s ease`,
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#112240"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#0A1628"; }}
                >
                  <CheckCircle2 size={16} style={{
                    color: "#C9A84C", flexShrink: 0, marginTop: "2px",
                    transition: "transform 0.3s ease",
                  }} />
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7 }}>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Filosofia ── */}
      <div ref={philRef} style={{ ...W, paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "6rem", alignItems: "start" }}>
          <div>
            <div style={a(philVis, 0, "left")}>
              <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>Valores</p>
            </div>
            <div style={a(philVis, 80, "left")}>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.25rem,3vw,3rem)", fontWeight: 700, color: "#060E1A", lineHeight: 1.1 }}>
                Nossa{" "}<span style={{ fontStyle: "italic", color: "#C9A84C" }}>Filosofia</span>
              </h3>
            </div>
            <div style={{ margin: "2rem 0" }}>
              <div style={{
                width: philVis ? "40px" : "0px", height: "1px", background: "#C9A84C",
                transition: `width 0.6s ${E} 160ms`,
              }} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {philCards.map((p, i) => (
              <div key={p.n} style={{
                ...a(philVis, i * 110),
                background: "#fff", padding: "2rem",
                boxShadow: "0 1px 0 rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
                position: "relative", overflow: "hidden",
                cursor: "default",
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 32px rgba(6,14,26,0.12), 0 0 0 1px rgba(201,168,76,0.2)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = philVis ? "none" : "translateY(28px)";
                  el.style.boxShadow = "0 1px 0 rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)";
                }}
              >
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "4rem", fontWeight: 700, color: "rgba(6,14,26,0.05)", lineHeight: 1, marginBottom: "1rem", userSelect: "none" }}>{p.n}</p>
                <p style={{ color: "rgba(6,14,26,0.65)", fontSize: "14px", lineHeight: 1.75 }}>{p.t}</p>
                <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "linear-gradient(180deg,#C9A84C,#E8C96E)" }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...a(philVis, 500), maxWidth: "640px", margin: "4rem auto 0", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", color: "rgba(6,14,26,0.35)", fontSize: "1rem" }}>
            "Não fortalecerás a dignidade e o ânimo, se subtraires aos homens a iniciativa e a liberdade."
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #escritorio > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          #escritorio > div > div[style*="grid-template-columns: 1fr 2fr"] { grid-template-columns: 1fr !important; }
          #escritorio > div > div[style*="grid-template-columns: 1fr 3fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          #escritorio div[style*="grid-template-columns: 1fr 1fr"]:not([style*="gap: 7rem"]) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
