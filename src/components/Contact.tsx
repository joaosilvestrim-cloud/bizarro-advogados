"use client";

import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const contactInfo = [
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
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" className="w-full bg-[#F5F3EE] py-24 overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-24 -mt-24" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={ref} className="fade-up">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.4em] text-[#C9A84C] uppercase font-medium mb-3">
              Fale Conosco
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A1628]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contato &amp; <br />
              <span className="italic text-[#C9A84C]">Localização</span>
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white p-8 md:p-10 shadow-sm">
              <h3
                className="text-xl font-bold text-[#0A1628] mb-7"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Envie uma mensagem
              </h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-[#0A1628]/45 mb-1.5">Nome</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full border border-[#E0DCD5] px-4 py-3 text-sm text-[#0A1628] bg-transparent focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-[#0A1628]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-[#0A1628]/45 mb-1.5">Telefone</label>
                    <input
                      type="tel"
                      placeholder="(11) 00000-0000"
                      className="w-full border border-[#E0DCD5] px-4 py-3 text-sm text-[#0A1628] bg-transparent focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-[#0A1628]/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#0A1628]/45 mb-1.5">E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full border border-[#E0DCD5] px-4 py-3 text-sm text-[#0A1628] bg-transparent focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-[#0A1628]/30"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#0A1628]/45 mb-1.5">Assunto</label>
                  <select className="w-full border border-[#E0DCD5] px-4 py-3 text-sm text-[#0A1628]/70 bg-white focus:outline-none focus:border-[#C9A84C] transition-colors">
                    <option value="">Selecione uma área</option>
                    <option>Contratos</option>
                    <option>Recuperação Judicial</option>
                    <option>Direito Imobiliário</option>
                    <option>Direito Tributário</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#0A1628]/45 mb-1.5">Mensagem</label>
                  <textarea
                    rows={4}
                    placeholder="Descreva brevemente como podemos ajudar..."
                    className="w-full border border-[#E0DCD5] px-4 py-3 text-sm text-[#0A1628] bg-transparent focus:outline-none focus:border-[#C9A84C] transition-colors resize-none placeholder:text-[#0A1628]/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0A1628] text-white text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#C9A84C] hover:text-[#0A1628] transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Enviar Mensagem <ArrowUpRight size={14} />
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-start gap-4 p-5 bg-white border border-transparent hover:border-[#C9A84C]/30 transition-colors group">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-[#C9A84C]/25 group-hover:bg-[#C9A84C]/10 transition-colors">
                      <Icon size={15} className="text-[#C9A84C]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] tracking-[0.25em] uppercase text-[#0A1628]/35 mb-1">{item.label}</p>
                      <p className="text-sm text-[#0A1628] font-medium whitespace-pre-line leading-relaxed break-words">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} className="block">{inner}</a>
                ) : (
                  <div key={i}>{inner}</div>
                );
              })}

              {/* Map placeholder */}
              <div className="relative h-40 bg-[#0A1628] overflow-hidden mt-1">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <MapPin size={22} className="text-[#C9A84C] mx-auto mb-2" />
                    <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase">São Bernardo do Campo</p>
                    <p className="text-white/25 text-[10px] mt-0.5">ABC Paulista – SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
