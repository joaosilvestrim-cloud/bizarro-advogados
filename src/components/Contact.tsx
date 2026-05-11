"use client";

import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const info = [
  { icon: Phone, label: "Telefone", value: "(11) 4337-4200", href: "tel:+551143374200" },
  { icon: Mail, label: "E-mail", value: "sidnei@bizarro.adv.br", href: "mailto:sidnei@bizarro.adv.br" },
  { icon: MapPin, label: "Endereço", value: "Al. Dona Tereza Cristina, 372\nJardim Nova Petropolis\nSão Bernardo do Campo – SP", href: null },
  { icon: Clock, label: "Atendimento", value: "Segunda a Sexta\n09h – 18h", href: null },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="contato" style={{ width: "100%", background: "#0A1628", overflow: "hidden" }}>
      {/* Header strip */}
      <div style={{ background: "#C9A84C", padding: "0.6rem 0", textAlign: "center" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#0A1628", fontWeight: 700 }}>
          Fale Conosco
        </p>
      </div>

      <div
        ref={ref}
        className="fade-up"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2.5rem" }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Contato &amp;{" "}
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg,#C9A84C,#E8C96E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Localização
            </span>
          </h2>
          <div style={{ width: "48px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#E8C96E)", margin: "1.5rem auto 0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,480px),1fr))", gap: "3rem", alignItems: "start" }}>
          {/* ── Form ── */}
          <div style={{ background: "#F5F3EE", padding: "3rem" }}>
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
                      id={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      style={{ width: "100%", padding: "0.85rem 1rem", background: "#fff", border: "1px solid rgba(10,22,40,0.12)", fontSize: "14px", color: "#0A1628", outline: "none", boxSizing: "border-box" }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="email" style={{ display: "block", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(10,22,40,0.45)", marginBottom: "0.5rem", fontWeight: 600 }}>
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  style={{ width: "100%", padding: "0.85rem 1rem", background: "#fff", border: "1px solid rgba(10,22,40,0.12)", fontSize: "14px", color: "#0A1628", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label htmlFor="assunto" style={{ display: "block", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(10,22,40,0.45)", marginBottom: "0.5rem", fontWeight: 600 }}>
                  Área de interesse
                </label>
                <select
                  id="assunto"
                  style={{ width: "100%", padding: "0.85rem 1rem", background: "#fff", border: "1px solid rgba(10,22,40,0.12)", fontSize: "14px", color: "#0A1628", outline: "none", appearance: "none", boxSizing: "border-box", cursor: "pointer" }}
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
                  id="msg"
                  rows={4}
                  placeholder="Descreva brevemente como podemos ajudar..."
                  style={{ width: "100%", padding: "0.85rem 1rem", background: "#fff", border: "1px solid rgba(10,22,40,0.12)", fontSize: "14px", color: "#0A1628", outline: "none", resize: "none", boxSizing: "border-box" }}
                />
              </div>

              <button
                type="submit"
                style={{ padding: "1rem 2rem", background: "#0A1628", color: "#fff", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
              >
                Enviar Mensagem →
              </button>
            </form>
          </div>

          {/* ── Info ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(201,168,76,0.15)" }}>
            {info.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", padding: "1.75rem 2rem", background: "#112240" }}>
                  <div style={{ width: "42px", height: "42px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.06)" }}>
                    <Icon size={16} style={{ color: "#C9A84C" }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "0.35rem", fontWeight: 600 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: "15px", color: "#fff", fontWeight: 500, lineHeight: 1.55, whiteSpace: "pre-line" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={i} href={item.href} style={{ display: "block", textDecoration: "none" }}>{inner}</a>
              ) : (
                <div key={i}>{inner}</div>
              );
            })}

            {/* Map block */}
            <div style={{ position: "relative", height: "160px", background: "#0d1e35", overflow: "hidden" }}>
              <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <MapPin size={20} style={{ color: "#C9A84C" }} />
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase" }}>São Bernardo do Campo</p>
                <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px" }}>ABC Paulista – SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
