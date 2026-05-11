"use client";

export default function Hero() {
  return (
    <section id="inicio" style={{ position: "relative", width: "100%", minHeight: "100vh", background: "#060E1A", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>

      {/* Diagonal gold stripe */}
      <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: "45%", height: "100%", background: "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.04) 100%)", pointerEvents: "none" }} />

      {/* Subtle dot grid */}
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)", backgroundSize: "48px 48px", opacity: 0.35, pointerEvents: "none" }} />

      {/* Left vertical accent */}
      <div aria-hidden style={{ position: "absolute", left: "2.5rem", top: 0, bottom: 0, width: "1px", background: "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent 100%)", pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "8rem 5rem 6rem", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "4rem" }}>

        {/* Left: text */}
        <div>
          {/* Pre-label */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            <div style={{ width: "32px", height: "1px", background: "#C9A84C" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600 }}>
              Escritório de Advocacia
            </span>
          </div>

          {/* Heading */}
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, lineHeight: 1.02, margin: 0, color: "#fff" }}>
            <span style={{ display: "block", fontSize: "clamp(3.5rem,5.5vw,6.5rem)" }}>Excelência</span>
            <span style={{ display: "block", fontSize: "clamp(3.5rem,5.5vw,6.5rem)", fontStyle: "italic", background: "linear-gradient(135deg,#C9A84C 0%,#E8C96E 50%,#A07830 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Jurídica</span>
            <span style={{ display: "block", fontSize: "clamp(1.75rem,2.8vw,3.2rem)", fontWeight: 300, color: "rgba(255,255,255,0.6)", letterSpacing: "0.04em", marginTop: "0.5rem" }}>com Propósito</span>
          </h1>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "2.5rem 0" }}>
            <div style={{ width: "64px", height: "1px", background: "linear-gradient(90deg,#C9A84C,transparent)" }} />
            <div style={{ width: "5px", height: "5px", background: "#C9A84C", transform: "rotate(45deg)" }} />
          </div>

          {/* Subtitle */}
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.95rem,1.3vw,1.1rem)", lineHeight: 1.8, maxWidth: "520px", fontWeight: 300, marginBottom: "3rem" }}>
            Mais de uma década protegendo os interesses dos nossos clientes com
            estratégia, ética e comprometimento. Soluções jurídicas precisas para
            empresas e pessoas em São Bernardo do Campo – SP.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="#servicos" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2.25rem", background: "#C9A84C", color: "#060E1A", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>
              Nossas Especialidades
              <span style={{ fontSize: "1rem" }}>→</span>
            </a>
            <a href="#escritorio" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2.25rem", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 300, textDecoration: "none" }}>
              Sobre o Escritório
            </a>
          </div>
        </div>

        {/* Right: stats panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0", border: "1px solid rgba(201,168,76,0.2)", minWidth: "200px" }}>
          {[
            { n: "10+", l: "Anos de\nAtuação" },
            { n: "500+", l: "Casos\nResolvidos" },
            { n: "4", l: "Áreas de\nEspecialização" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "2rem 2.25rem", borderBottom: i < 2 ? "1px solid rgba(201,168,76,0.15)" : "none", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2.75rem", fontWeight: 700, lineHeight: 1, marginBottom: "0.5rem", background: "linear-gradient(135deg,#C9A84C,#E8C96E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.n}</p>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", lineHeight: 1.5, whiteSpace: "pre-line" }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(180deg,transparent,rgba(201,168,76,0.6))" }} />
        <span style={{ fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>Scroll</span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #inicio > div[style*="grid"] { grid-template-columns: 1fr !important; padding: 7rem 1.75rem 5rem !important; }
          #inicio > div[style*="grid"] > div:last-child { flex-direction: row !important; border: none !important; border-top: 1px solid rgba(201,168,76,0.2) !important; }
        }
      `}</style>
    </section>
  );
}
