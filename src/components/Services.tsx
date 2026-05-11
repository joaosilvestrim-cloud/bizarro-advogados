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
  svc,
  idx,
}: {
  svc: (typeof services)[0];
  idx: number;
}) {
  const [open, setOpen] = useState(false);
  const Icon = svc.icon;

  return (
    <div className="relative bg-white border border-[#E8E4DC] hover:border-[#C9A84C]/50 transition-colors duration-300 group overflow-hidden">
      {/* Hover top line */}
      <div className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#C9A84C] to-[#E8C96E] group-hover:w-full transition-all duration-500" />

      <div className="p-8">
        {/* Number - decorative, behind */}
        <span
          aria-hidden
          className="absolute bottom-4 right-5 text-8xl font-bold text-[#F5F3EE] leading-none select-none pointer-events-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {String(idx + 1).padStart(2, "0")}
        </span>

        {/* Icon */}
        <div className="relative z-10 w-11 h-11 flex items-center justify-center border border-[#C9A84C]/30 bg-[#C9A84C]/5 mb-5 group-hover:bg-[#C9A84C]/15 transition-colors">
          <Icon size={18} className="text-[#C9A84C]" />
        </div>

        {/* Title */}
        <h3
          className="relative z-10 text-lg font-bold text-[#0A1628] mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {svc.title}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-[#0A1628]/55 text-sm leading-relaxed mb-5">
          {svc.description}
        </p>

        {/* Toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-[#C9A84C] hover:text-[#A07830] transition-colors font-semibold"
        >
          {open ? "Fechar" : "Ver serviços"}
          <ChevronDown
            size={13}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Expanded */}
        <div
          className={`overflow-hidden transition-all duration-400 ${
            open ? "max-h-80 mt-5" : "max-h-0"
          }`}
        >
          <div className="border-t border-[#E8E4DC] pt-4">
            <ul className="space-y-2">
              {svc.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#0A1628]/65">
                  <span className="text-[#C9A84C] shrink-0 mt-px">—</span>
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
    <section id="servicos" className="w-full bg-[#F5F3EE] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={ref} className="fade-up mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.4em] text-[#C9A84C] uppercase font-medium mb-3">
                Especialidades
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#0A1628] leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Serviços de <br />
                <span className="italic text-[#C9A84C]">Advocacia</span>
              </h2>
            </div>
            <p className="text-[#0A1628]/45 text-sm max-w-56 leading-relaxed md:text-right">
              Soluções personalizadas nas principais áreas do direito empresarial e tributário.
            </p>
          </div>
          <div className="gold-line mt-8" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((svc, i) => (
            <ServiceCard key={i} svc={svc} idx={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#0A1628]/40 text-sm mb-5">
            Não encontrou o que procurava? Entre em contato.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0A1628] text-white text-[11px] tracking-[0.2em] uppercase hover:bg-[#112240] transition-colors"
          >
            Fale Conosco →
          </a>
        </div>
      </div>
    </section>
  );
}
