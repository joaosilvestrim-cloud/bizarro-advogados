"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

function useReveal() {
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
  return ref;
}

const missionPoints = [
  "Empresas precisam ser cada vez mais competitivas em seu segmento",
  "Competitividade exige foco no objeto-fim do negócio: produção e vendas",
  "As demais áreas seguem o fluxo inevitável da terceirização",
  "Soluções personalizadas desprezando totalmente a ideologia dos 'pacotes'",
];

const philosophyPoints = [
  { n: "01", text: "Participação efetiva para o engrandecimento da sociedade e da Nação" },
  { n: "02", text: "Transparência e Clareza devem orientar nossas atitudes perante os clientes" },
  { n: "03", text: "Ética e profissionalismo são fatores indispensáveis na conduta de nossos diretores" },
  { n: "04", text: "Respeito, Incentivo e Participação é o mínimo que nossos colaboradores merecem" },
];

const containerStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 2rem",
};

export default function About() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  return (
    <section id="escritorio" style={{ width: "100%", background: "#F5F3EE", overflow: "hidden" }}>
      {/* Top rule */}
      <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />

      {/* ── Who we are ── */}
      <div style={{ ...containerStyle, paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div ref={r1} className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "4rem", alignItems: "center" }}>
          {/* Text */}
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.4em", color: "#C9A84C", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>
              Escritório de Advocacia
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem,4vw,3.5rem)", fontWeight: 700, color: "#0A1628", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Quem <br />
              <span style={{ fontStyle: "italic", color: "#C9A84C" }}>Somos</span>
            </h2>
            <div style={{ width: "48px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#E8C96E)", marginBottom: "1.75rem" }} />
            <p style={{ color: "rgba(10,22,40,0.65)", lineHeight: 1.75, fontSize: "15px", marginBottom: "1rem" }}>
              O <strong style={{ color: "#0A1628", fontWeight: 600 }}>Bizarro Advogados Associados</strong> está
              localizado em São Bernardo do Campo, ABC — São Paulo. Criamos uma organização de serviços
              jurídicos que reúne profissionais do mais alto nível, com visão de futuro e objetivo claro.
            </p>
            <p style={{ color: "rgba(10,22,40,0.65)", lineHeight: 1.75, fontSize: "15px" }}>
              Investimos em pesquisa e desenvolvimento de técnicas capazes de dar respostas inovadoras
              em ambientes em constante mutação, sempre com foco no lucro e no sucesso de nossos parceiros.
            </p>
            <blockquote style={{ marginTop: "2rem", paddingLeft: "1rem", borderLeft: "2px solid #C9A84C" }}>
              <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", color: "rgba(10,22,40,0.55)", fontSize: "1rem" }}>
                "É preciso encontrar os valores que sejam a essência do negócio e o conduzam até o futuro"
              </p>
            </blockquote>
          </div>

          {/* Visual */}
          <div style={{ position: "relative", maxWidth: "360px" }}>
            <div style={{ position: "absolute", top: "-12px", left: "-12px", right: "12px", bottom: "-12px", border: "1px solid rgba(201,168,76,0.2)", pointerEvents: "none" }} />
            <div style={{ background: "#0A1628", aspectRatio: "3/4", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
              <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "5rem", fontWeight: 700, background: "linear-gradient(135deg,#C9A84C,#E8C96E,#A07830)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1, marginBottom: "0.75rem" }}>Bz</p>
                <div style={{ height: "1px", width: "48px", background: "#C9A84C", margin: "0 auto 0.75rem" }} />
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase" }}>Desde 2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mission ── */}
      <div style={{ background: "#0A1628", padding: "5rem 0", overflow: "hidden" }}>
        <div style={containerStyle}>
          <div ref={r2} className="fade-up">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.4em", color: "#C9A84C", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>Nosso Propósito</p>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem,3.5vw,2.75rem)", fontWeight: 700, color: "#fff" }}>
                Nossa <span style={{ fontStyle: "italic", color: "#C9A84C" }}>Missão</span>
              </h3>
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "0.5rem" }}>
                Contribuir com o desenvolvimento empresarial
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "0.75rem" }}>
              {missionPoints.map((pt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1.25rem 1.5rem", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <CheckCircle2 size={16} style={{ color: "#C9A84C", marginTop: "2px", flexShrink: 0 }} />
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.65 }}>{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Philosophy ── */}
      <div style={{ padding: "5rem 0", overflow: "hidden" }}>
        <div style={containerStyle}>
          <div ref={r3} className="fade-up">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.4em", color: "#C9A84C", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>Valores</p>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem,3.5vw,2.75rem)", fontWeight: 700, color: "#0A1628" }}>
                Nossa <span style={{ fontStyle: "italic", color: "#C9A84C" }}>Filosofia</span>
              </h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "1.25rem" }}>
              {philosophyPoints.map((pt) => (
                <div key={pt.n} style={{ background: "#fff", padding: "2rem 1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", borderTop: "2px solid transparent" }} className="philosophy-card">
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: "3.5rem", fontWeight: 700, color: "#F5F3EE", lineHeight: 1, marginBottom: "1rem" }}>{pt.n}</p>
                  <p style={{ color: "rgba(10,22,40,0.65)", fontSize: "14px", lineHeight: 1.65 }}>{pt.text}</p>
                </div>
              ))}
            </div>
            <blockquote style={{ marginTop: "3.5rem", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", color: "rgba(10,22,40,0.4)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                "Não fortalecerás a dignidade e o ânimo, se subtraires aos homens a iniciativa e a liberdade."
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />
    </section>
  );
}
