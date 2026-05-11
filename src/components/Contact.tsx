"use client";

import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 4337-4200",
    href: "tel:+551143374200",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "sidnei@bizarro.adv.br",
    href: "mailto:sidnei@bizarro.adv.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Al. Dona Tereza Cristina, 372\nJardim Nova Petropolis\nSão Bernardo do Campo – SP",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Atendimento",
    value: "Segunda a Sexta\n09h – 18h",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" className="relative bg-[#F5F3EE] py-24 overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent absolute top-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.4em] text-[#C9A84C] uppercase font-medium">
              Fale Conosco
            </span>
            <h2
              className="mt-3 text-4xl md:text-5xl font-bold text-[#0A1628]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contato &amp;
              <br />
              <span className="italic text-[#C9A84C]">Localização</span>
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: form */}
            <div className="bg-white p-10 shadow-sm">
              <h3
                className="text-xl font-bold text-[#0A1628] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Envie uma mensagem
              </h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-[#0A1628]/50 block mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full border border-[#E8E4DC] px-4 py-3 text-sm text-[#0A1628] bg-transparent focus:outline-none focus:border-[#C9A84C] transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-[#0A1628]/50 block mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-[#E8E4DC] px-4 py-3 text-sm text-[#0A1628] bg-transparent focus:outline-none focus:border-[#C9A84C] transition-colors"
                      placeholder="(11) 00000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-[#0A1628]/50 block mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full border border-[#E8E4DC] px-4 py-3 text-sm text-[#0A1628] bg-transparent focus:outline-none focus:border-[#C9A84C] transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-[#0A1628]/50 block mb-2">
                    Assunto
                  </label>
                  <select className="w-full border border-[#E8E4DC] px-4 py-3 text-sm text-[#0A1628] bg-transparent focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none">
                    <option value="">Selecione uma área</option>
                    <option>Contratos</option>
                    <option>Recuperação Judicial</option>
                    <option>Direito Imobiliário</option>
                    <option>Direito Tributário</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-[#0A1628]/50 block mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-[#E8E4DC] px-4 py-3 text-sm text-[#0A1628] bg-transparent focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                    placeholder="Descreva brevemente como podemos ajudar..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#0A1628] text-white text-sm tracking-widest uppercase font-medium hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Enviar Mensagem
                  <ArrowUpRight size={16} />
                </button>
              </form>
            </div>

            {/* Right: contact info */}
            <div className="flex flex-col justify-between">
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-6 bg-white hover:border-[#C9A84C]/30 border border-transparent transition-colors group">
                      <div className="w-10 h-10 flex items-center justify-center border border-[#C9A84C]/30 shrink-0 group-hover:bg-[#C9A84C]/10 transition-colors">
                        <Icon size={16} className="text-[#C9A84C]" />
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase text-[#0A1628]/40 mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm text-[#0A1628] font-medium whitespace-pre-line leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={i}>{content}</div>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div className="relative h-48 bg-[#0A1628] overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <MapPin size={24} className="text-[#C9A84C] mx-auto mb-2" />
                    <p className="text-white/60 text-xs tracking-widest uppercase">
                      São Bernardo do Campo
                    </p>
                    <p className="text-white/30 text-xs mt-1">ABC Paulista – SP</p>
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
