"use client";
import { Phone, Mail, MapPin } from "lucide-react";

const pages = [
  ["Início", "#inicio"], ["Escritório de Advocacia", "#escritorio"],
  ["Serviços de Advocacia", "#servicos"], ["Notícias", "#noticias"],
  ["Contato e Localização", "#contato"],
];
const specs = ["Contratos", "Recuperação Judicial e Falência", "Direito Imobiliário", "Direito Tributário", "Direitos Trabalhistas", "Serviços Tributários"];

export default function Footer() {
  return (
    <footer style={{ width: "100%", background: "#030913", color: "rgba(255,255,255,0.45)", overflow: "hidden" }}>
      {/* Top gold rule */}
      <div style={{ height: "2px", background: "linear-gradient(90deg,transparent,#C9A84C 30%,#E8C96E 50%,#C9A84C 70%,transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 5rem 4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: "4rem" }}>

          {/* Brand */}
          <div>
            <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "0.12em", color: "#fff" }}>BIZARRO</p>
            <p style={{ fontSize: "9px", letterSpacing: "0.38em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500, marginBottom: "1.5rem" }}>Advogados Associados</p>
            <div style={{ width: "40px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <p style={{ fontSize: "13px", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "260px" }}>
              Excelência jurídica com propósito. Protegendo os seus interesses com estratégia, ética e comprometimento.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { Icon: Phone, t: "(11) 4337-4200", h: "tel:+551143374200" },
                { Icon: Mail, t: "sidnei@bizarro.adv.br", h: "mailto:sidnei@bizarro.adv.br" },
                { Icon: MapPin, t: "Rua Mediterrâneo, nº 290 — Salas 116/118\nJardim do Mar\nSão Bernardo do Campo – SP", h: "https://maps.app.goo.gl/EUUYWGcLPmG74b2KA" },
              ].map(({ Icon, t, h }, i) => {
                const inner = (
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "12px" }}>
                    <Icon size={12} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ lineHeight: 1.65, whiteSpace: "pre-line" }}>{t}</span>
                  </div>
                );
                return h ? <a key={i} href={h} style={{ color: "inherit", textDecoration: "none" }}>{inner}</a> : <div key={i}>{inner}</div>;
              })}
            </div>
          </div>

          {/* Pages */}
          <div>
            <p style={{ fontSize: "9px", letterSpacing: "0.38em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1.5rem" }}>Páginas</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {pages.map(([l, h]) => (
                <li key={h}><a href={h} style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#C9A84C"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}
                >
                  <span style={{ color: "#C9A84C", fontSize: "10px" }}>›</span> {l}
                </a></li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <p style={{ fontSize: "9px", letterSpacing: "0.38em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1.5rem" }}>Especialidades</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {specs.map((s) => (
                <li key={s}><a href="#servicos" style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#C9A84C"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}
                >
                  <span style={{ color: "#C9A84C", fontSize: "10px" }}>›</span> {s}
                </a></li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p style={{ fontSize: "9px", letterSpacing: "0.38em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1.5rem" }}>Consulta Jurídica</p>
            <p style={{ fontSize: "13px", lineHeight: 1.8, marginBottom: "2rem" }}>
              Agende uma consulta e descubra como podemos proteger seus interesses com soluções personalizadas e eficazes.
            </p>
            <a href="#contato" style={{ display: "inline-block", padding: "0.85rem 1.75rem", border: "1px solid #C9A84C", color: "#C9A84C", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#C9A84C"; (e.currentTarget as HTMLElement).style.color = "#060E1A"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#C9A84C"; }}
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1.25rem 5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem", fontSize: "11px", letterSpacing: "0.08em", color: "rgba(255,255,255,0.18)" }}>
          <span>© {new Date().getFullYear()} Bizarro e Associados. Todos os direitos reservados.</span>
          <span>OAB/SP</span>
        </div>
      </div>
    </footer>
  );
}
