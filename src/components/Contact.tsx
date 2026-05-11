"use client";

import { useEffect, useRef, useState } from "react";
import { BzPhone, BzMail, BzMapPin, BzClock } from "./BzIcons";

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

const info = [
  { icon: BzPhone, label: "Telefone", value: "(11) 4337-4200", href: "tel:+551143374200" },
  { icon: BzMail, label: "E-mail", value: "sidnei@bizarro.adv.br", href: "mailto:sidnei@bizarro.adv.br" },
  { icon: BzMapPin, label: "Endereço", value: "Rua Mediterrâneo, nº 290 — Salas 116/118\nJardim do Mar\nSão Bernardo do Campo – SP", href: "https://maps.app.goo.gl/EUUYWGcLPmG74b2KA" },
  { icon: BzClock, label: "Atendimento", value: "Segunda a Sexta\n09h – 18h", href: null },
];

function InfoRow({ item, idx, vis }: { item: typeof info[0]; idx: number; vis: boolean }) {
  const [hov, setHov] = useState(false);
  const Icon = item.icon;

  const inner = (
    <div
      style={{
        display: "flex", alignItems: "flex-start", gap: "1.25rem",
        padding: "1.75rem 2rem",
        background: hov ? "#162b4a" : "#112240",
        transition: `background 0.3s ${E}`,
      }}
      onMouseEnter={() => item.href && setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        width: "42px", height: "42px", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${hov ? "rgba(201,168,76,0.6)" : "rgba(201,168,76,0.3)"}`,
        background: hov ? "rgba(201,168,76,0.12)" : "rgba(201,168,76,0.06)",
        borderRadius: "8px",
        transition: `all 0.3s ${E}`,
        transform: hov ? "scale(1.08)" : "scale(1)",
      }}>
        <Icon size={16} style={{ color: "#C9A84C" }} />
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "0.35rem", fontWeight: 600 }}>
          {item.label}
        </p>
        <p style={{ fontSize: "15px", color: hov ? "#fff" : "rgba(255,255,255,0.9)", fontWeight: 500, lineHeight: 1.55, whiteSpace: "pre-line", transition: `color 0.3s ease` }}>
          {item.value}
        </p>
      </div>
    </div>
  );

  return (
    <div style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateX(28px)",
      transition: `opacity 0.85s ${E} ${idx * 100}ms, transform 0.85s ${E} ${idx * 100}ms`,
    }}>
      {item.href
        ? <a href={item.href} style={{ display: "block", textDecoration: "none" }}>{inner}</a>
        : inner}
    </div>
  );
}

export default function Contact() {
  const [headRef, headVis] = useInView();
  const [formRef, formVis] = useInView(0.05);
  const [infoRef, infoVis] = useInView(0.05);
  const [btnHov, setBtnHov] = useState(false);

  return (
    <section id="contato" style={{ width: "100%", background: "#0A1628", overflow: "hidden" }}>
      {/* Header strip */}
      <div style={{ background: "#C9A84C", padding: "0.6rem 0", textAlign: "center" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#0A1628", fontWeight: 700 }}>
          Fale Conosco
        </p>
      </div>

      <div ref={headRef} style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2.5rem 3rem" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{
            opacity: headVis ? 1 : 0, transform: headVis ? "none" : "translateY(24px)",
            transition: `opacity 0.85s ${E}, transform 0.85s ${E}`,
          }}>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
              Contato &amp;{" "}
              <span style={{ fontStyle: "italic", background: "linear-gradient(135deg,#C9A84C,#E8C96E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Localização
              </span>
            </h2>
          </div>
          <div style={{
            width: headVis ? "48px" : "0px", height: "2px",
            background: "linear-gradient(90deg,#C9A84C,#E8C96E)",
            margin: "1.5rem auto 0",
            transition: `width 0.7s ${E} 160ms`,
          }} />
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem 5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,480px),1fr))", gap: "3rem", alignItems: "start" }}>

          {/* ── Form ── */}
          <div
            ref={formRef}
            style={{
              opacity: formVis ? 1 : 0,
              transform: formVis ? "none" : "translateX(-32px)",
              transition: `opacity 0.9s ${E}, transform 0.9s ${E}`,
              background: "#F5F3EE", padding: "3rem",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 700, color: "#0A1628", marginBottom: "0.5rem" }}>
              Envie uma mensagem
            </h3>
            <p style={{ color: "rgba(10,22,40,0.5)", fontSize: "14px", marginBottom: "2rem", lineHeight: 1.6 }}>
              Preencha o formulário e entraremos em contato em até 24 horas úteis.
            </p>

            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { id: "nome", label: "Nome completo", type: "text", placeholder: "Seu nome" },
                  { id: "tel", label: "Telefone", type: "tel", placeholder: "(11) 00000-0000" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} style={{ display: "block", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(10,22,40,0.45)", marginBottom: "0.5rem", fontWeight: 600 }}>
                      {f.label}
                    </label>
                    <input
                      id={f.id} type={f.type} placeholder={f.placeholder}
                      className="field-input"
                      style={{ width: "100%", padding: "0.85rem 1rem", background: "#fff", border: "1px solid rgba(10,22,40,0.12)", borderRadius: "6px", fontSize: "14px", color: "#0A1628", outline: "none", boxSizing: "border-box", transition: `border-color 0.25s ease, box-shadow 0.25s ease` }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="email" style={{ display: "block", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(10,22,40,0.45)", marginBottom: "0.5rem", fontWeight: 600 }}>
                  E-mail
                </label>
                <input
                  id="email" type="email" placeholder="seu@email.com"
                  className="field-input"
                  style={{ width: "100%", padding: "0.85rem 1rem", background: "#fff", border: "1px solid rgba(10,22,40,0.12)", borderRadius: "6px", fontSize: "14px", color: "#0A1628", outline: "none", boxSizing: "border-box", transition: `border-color 0.25s ease, box-shadow 0.25s ease` }}
                />
              </div>

              <div>
                <label htmlFor="assunto" style={{ display: "block", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(10,22,40,0.45)", marginBottom: "0.5rem", fontWeight: 600 }}>
                  Área de interesse
                </label>
                <select
                  id="assunto"
                  className="field-input"
                  style={{ width: "100%", padding: "0.85rem 1rem", background: "#fff", border: "1px solid rgba(10,22,40,0.12)", borderRadius: "6px", fontSize: "14px", color: "#0A1628", outline: "none", appearance: "none", boxSizing: "border-box", cursor: "pointer", transition: `border-color 0.25s ease, box-shadow 0.25s ease` }}
                >
                  <option value="">Selecione uma área</option>
                  <option>Contratos</option>
                  <option>Recuperação Judicial e Falência</option>
                  <option>Direito Imobiliário</option>
                  <option>Direito Tributário</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="msg" style={{ display: "block", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(10,22,40,0.45)", marginBottom: "0.5rem", fontWeight: 600 }}>
                  Mensagem
                </label>
                <textarea
                  id="msg" rows={4}
                  placeholder="Descreva brevemente como podemos ajudar..."
                  className="field-input"
                  style={{ width: "100%", padding: "0.85rem 1rem", background: "#fff", border: "1px solid rgba(10,22,40,0.12)", borderRadius: "6px", fontSize: "14px", color: "#0A1628", outline: "none", resize: "none", boxSizing: "border-box", transition: `border-color 0.25s ease, box-shadow 0.25s ease` }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "1rem 2rem",
                  background: btnHov ? "#C9A84C" : "#0A1628",
                  color: btnHov ? "#0A1628" : "#fff",
                  fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700,
                  border: "none", cursor: "pointer", borderRadius: "6px",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  transition: `background 0.3s ${E}, color 0.3s ${E}, transform 0.3s ${E}, box-shadow 0.3s ${E}`,
                  transform: btnHov ? "translateY(-2px)" : "none",
                  boxShadow: btnHov ? "0 8px 24px rgba(201,168,76,0.3)" : "none",
                }}
                onMouseEnter={() => setBtnHov(true)}
                onMouseLeave={() => setBtnHov(false)}
              >
                Enviar Mensagem →
              </button>
            </form>
          </div>

          {/* ── Info ── */}
          <div
            ref={infoRef}
            style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(201,168,76,0.15)" }}
          >
            {info.map((item, i) => (
              <InfoRow key={i} item={item} idx={i} vis={infoVis} />
            ))}

            {/* Map block */}
            <div style={{
              opacity: infoVis ? 1 : 0,
              transform: infoVis ? "none" : "translateX(28px)",
              transition: `opacity 0.85s ${E} 400ms, transform 0.85s ${E} 400ms`,
            }}>
              <a
                href="https://maps.app.goo.gl/EUUYWGcLPmG74b2KA"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", position: "relative", height: "160px", background: "#0d1e35", overflow: "hidden", textDecoration: "none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#112240"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#0d1e35"; }}
              >
                <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                  <BzMapPin size={20} color="#C9A84C" style={{ animation: "float 3s ease-in-out infinite" }} />
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase" }}>Ver no Google Maps</p>
                  <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px" }}>Rua Mediterrâneo, 290 — São Bernardo do Campo</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
