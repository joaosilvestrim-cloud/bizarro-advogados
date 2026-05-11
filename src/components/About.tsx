"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
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

export default function About() {
  const r1 = useReveal(0);
  const r2 = useReveal(0);
  const r3 = useReveal(0);

  return (
    <section id="escritorio" className="w-full bg-[#F5F3EE] overflow-hidden">
      {/* Top rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* ── Who we are ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <div ref={r1} className="fade-up grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="min-w-0">
            <p className="text-[11px] tracking-[0.4em] text-[#C9A84C] uppercase font-medium mb-3">
              Escritório de Advocacia
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A1628] leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Quem <br />
              <span className="italic text-[#C9A84C]">Somos</span>
            </h2>
            <div className="gold-line mb-7" />
            <p className="text-[#0A1628]/65 leading-relaxed mb-4 text-[15px]">
              O{" "}
              <strong className="text-[#0A1628] font-semibold">
                Bizarro Advogados Associados
              </strong>{" "}
              está localizado em São Bernardo do Campo, ABC — São Paulo. Criamos
              uma organização de serviços jurídicos que reúne profissionais do
              mais alto nível, com visão de futuro e objetivo claro.
            </p>
            <p className="text-[#0A1628]/65 leading-relaxed text-[15px]">
              Investimos em pesquisa e desenvolvimento de técnicas capazes de
              dar respostas inovadoras em ambientes em constante mutação, sempre
              com foco no lucro e no sucesso de nossos parceiros.
            </p>
            <blockquote className="mt-8 pl-4 border-l-2 border-[#C9A84C]">
              <p
                className="italic text-[#0A1628]/55 text-base"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                "É preciso encontrar os valores que sejam a essência do negócio
                e o conduzam até o futuro"
              </p>
            </blockquote>
          </div>

          {/* Visual block */}
          <div className="relative w-full max-w-sm mx-auto md:mx-0">
            {/* Border accent */}
            <div className="absolute -top-3 -left-3 w-full h-full border border-[#C9A84C]/20 pointer-events-none" />
            {/* Card */}
            <div className="relative bg-[#0A1628] aspect-[3/4] flex items-center justify-center overflow-hidden">
              {/* grid bg */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              <div className="relative z-10 text-center px-8">
                <p
                  className="text-7xl font-bold text-gold-gradient mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Bz
                </p>
                <div className="h-px w-12 bg-[#C9A84C] mx-auto mb-3" />
                <p className="text-white/30 text-[10px] tracking-[0.35em] uppercase">
                  Desde 2010
                </p>
              </div>
            </div>
            {/* Bottom accent */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#C9A84C]/10 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ── Mission ── */}
      <div className="bg-[#0A1628] py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div ref={r2} className="fade-up">
            <div className="text-center mb-12">
              <p className="text-[11px] tracking-[0.4em] text-[#C9A84C] uppercase font-medium mb-3">
                Nosso Propósito
              </p>
              <h3
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Nossa{" "}
                <span className="italic text-[#C9A84C]">Missão</span>
              </h3>
              <p className="text-white/30 text-[10px] tracking-widest uppercase mt-2">
                Contribuir com o desenvolvimento empresarial
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {missionPoints.map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-5 border border-white/8 hover:border-[#C9A84C]/30 transition-colors"
                >
                  <CheckCircle2
                    size={16}
                    className="text-[#C9A84C] mt-0.5 shrink-0"
                  />
                  <p className="text-white/65 text-sm leading-relaxed">{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Philosophy ── */}
      <div className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div ref={r3} className="fade-up">
            <div className="text-center mb-12">
              <p className="text-[11px] tracking-[0.4em] text-[#C9A84C] uppercase font-medium mb-3">
                Valores
              </p>
              <h3
                className="text-3xl md:text-4xl font-bold text-[#0A1628]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Nossa{" "}
                <span className="italic text-[#C9A84C]">Filosofia</span>
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {philosophyPoints.map((pt) => (
                <div
                  key={pt.n}
                  className="bg-white p-7 border-t-2 border-transparent hover:border-[#C9A84C] transition-colors duration-300 shadow-sm"
                >
                  <p
                    className="text-5xl font-bold text-[#F5F3EE] mb-4 leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {pt.n}
                  </p>
                  <p className="text-[#0A1628]/65 text-sm leading-relaxed">
                    {pt.text}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="mt-14 text-center">
              <p
                className="italic text-[#0A1628]/40 text-lg max-w-xl mx-auto"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                "Não fortalecerás a dignidade e o ânimo, se subtraires aos
                homens a iniciativa e a liberdade."
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
    </section>
  );
}
