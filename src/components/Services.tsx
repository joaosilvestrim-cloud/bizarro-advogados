"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, FileText, Building2, TrendingDown, Landmark } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Contratos",
    description:
      "Elaboração e revisão de contratos empresariais com segurança jurídica e foco nos seus interesses.",
    items: [
      "Contratos bancários",
      "Parcerias comerciais / SPE",
      "Representação comercial",
      "Compromissos de compra e venda",
      "Franquia empresarial",
      "Contrato de não-concorrência",
      "Cessão de direitos",
    ],
  },
  {
    icon: TrendingDown,
    title: "Recuperação Judicial e Falência",
    description:
      "Assessoria completa em processos de reestruturação empresarial e defesa em ações falimentares.",
    items: [
      "Estudo de viabilidade econômica e jurídica do plano de recuperação",
      "Habilitação e defesa de crédito",
      "Defesa em ação de falência – empresa e sócios",
    ],
  },
  {
    icon: Building2,
    title: "Direito Imobiliário",
    description:
      "Assessoria jurídica em transações imobiliárias, minimizando riscos e garantindo segurança.",
    items: [
      "Financiamento imobiliário",
      "Compra e venda de imóveis",
      "Hipoteca e garantias reais",
      "Análise de risco em aquisição imobiliária",
      "Locação e despejo",
      "Ação renovatória e revisional",
      "Processo administrativo perante Cartório de Registro de Imóveis",
    ],
  },
  {
    icon: Landmark,
    title: "Direito Tributário",
    description:
      "Planejamento e defesa tributária para reduzir a carga fiscal dentro da legalidade.",
    items: [
      "Compensação de crédito tributário",
      "Defesas administrativas e judiciais",
      "Contra cobrança indevida de tributos",
      "Planejamento tributário e enquadramento fiscal",
      "Viabilização de parcelamentos e quitação de dívidas tributárias",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="group relative bg-white border border-[#E8E4DC] hover:border-[#C9A84C]/40 transition-all duration-500"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top accent line */}
      <div className="h-0.5 w-0 bg-gradient-to-r from-[#C9A84C] to-[#E8C96E] group-hover:w-full transition-all duration-500" />

      <div className="p-8">
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center border border-[#C9A84C]/30 bg-[#C9A84C]/5 mb-6 group-hover:bg-[#C9A84C]/10 transition-colors">
          <Icon size={20} className="text-[#C9A84C]" />
        </div>

        {/* Number */}
        <span
          className="text-[80px] font-bold text-[#F5F3EE] leading-none absolute top-4 right-6 select-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3
          className="text-xl font-bold text-[#0A1628] mb-3 relative z-10"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {service.title}
        </h3>

        <p className="text-[#0A1628]/60 text-sm leading-relaxed mb-6 relative z-10">
          {service.description}
        </p>

        {/* Accordion toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#C9A84C] hover:text-[#A07830] transition-colors font-medium relative z-10"
        >
          {open ? "Fechar" : "Ver serviços"}
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Expanded list */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            open ? "max-h-96 mt-6" : "max-h-0"
          }`}
        >
          <div className="border-t border-[#E8E4DC] pt-5">
            <ul className="space-y-2">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#0A1628]/70">
                  <span className="text-[#C9A84C] mt-1 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="relative bg-[#F5F3EE] py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent hidden md:block ml-12" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          ref={ref}
          className="mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-xs tracking-[0.4em] text-[#C9A84C] uppercase font-medium">
                Especialidades
              </span>
              <h2
                className="mt-3 text-4xl md:text-5xl font-bold text-[#0A1628] leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Serviços de
                <br />
                <span className="italic text-[#C9A84C]">Advocacia</span>
              </h2>
            </div>
            <p className="text-[#0A1628]/50 text-sm max-w-xs leading-relaxed md:text-right">
              Atuamos nas principais áreas do direito empresarial e tributário, com soluções
              personalizadas para cada cliente.
            </p>
          </div>
          <div className="gold-line mt-8" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#0A1628]/50 text-sm mb-6">
            Não encontrou o que procurava? Entre em contato e descubra como podemos ajudar.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A1628] text-white text-sm tracking-widest uppercase font-light hover:bg-[#112240] transition-colors"
          >
            Fale Conosco
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
