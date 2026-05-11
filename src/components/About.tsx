"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const missionPoints = [
  "Empresas precisam ser cada vez mais competitivas em seu segmento",
  "Competitividade exige foco no objeto-fim do negócio: produção e vendas",
  "As demais áreas seguem o fluxo inevitável da terceirização",
  "Soluções personalizadas desprezando totalmente a ideologia dos 'pacotes'",
];

const philosophyPoints = [
  "Participação efetiva para o engrandecimento da sociedade e da Nação",
  "Transparência e Clareza perante nossos clientes",
  "Ética e profissionalismo indispensáveis na conduta de nossos diretores",
  "Respeito, Incentivo e Participação para nossos colaboradores",
];

function useReveal() {
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

  return ref;
}

export default function About() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  return (
    <section id="escritorio" className="relative bg-[#F5F3EE] overflow-hidden">
      {/* Top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Intro block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div
          ref={ref1}
          className="grid md:grid-cols-2 gap-16 items-center opacity-0 translate-y-8 transition-all duration-700"
        >
          {/* Text */}
          <div>
            <span className="text-xs tracking-[0.4em] text-[#C9A84C] uppercase font-medium">
              Escritório de Advocacia
            </span>
            <h2
              className="mt-3 text-4xl md:text-5xl font-bold text-[#0A1628] leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Quem
              <br />
              <span className="italic text-[#C9A84C]">Somos</span>
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-[#0A1628]/70 leading-relaxed mb-4 text-base">
              O <strong className="text-[#0A1628]">Bizarro Advogados Associados</strong> está
              localizado em São Bernardo do Campo, ABC — São Paulo. Criamos uma organização de
              serviços jurídicos que reúne profissionais do mais alto nível, com visão de futuro e
              objetivo claro.
            </p>
            <p className="text-[#0A1628]/70 leading-relaxed text-base">
              Investimos em pesquisa e desenvolvimento de técnicas capazes de dar respostas
              inovadoras em ambientes em constante mutação, sempre com foco no lucro e no sucesso
              de nossos parceiros.
            </p>

            {/* Quote */}
            <blockquote className="mt-8 pl-5 border-l-2 border-[#C9A84C]">
              <p
                className="italic text-[#0A1628]/60 text-lg"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                "É preciso encontrar os valores que sejam a essência do negócio e o conduzam até
                o futuro"
              </p>
            </blockquote>
          </div>

          {/* Image / visual */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C9A84C]/20" />
            <div className="relative bg-[#0A1628] aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <div
                    className="text-7xl font-bold text-gold-gradient mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Bz
                  </div>
                  <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-4" />
                  <p className="text-white/40 text-xs tracking-[0.3em] uppercase">
                    Desde 2010
                  </p>
                </div>
              </div>
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#C9A84C]/10" />
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-[#0A1628] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={ref2}
            className="opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="text-center mb-14">
              <span className="text-xs tracking-[0.4em] text-[#C9A84C] uppercase font-medium">
                Nosso Propósito
              </span>
              <h3
                className="mt-3 text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Nossa <span className="italic text-[#C9A84C]">Missão</span>
              </h3>
              <p className="mt-2 text-xs tracking-widest text-white/30 uppercase">
                Contribuir com o desenvolvimento empresarial
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {missionPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 border border-white/5 hover:border-[#C9A84C]/30 transition-colors group"
                >
                  <CheckCircle2 size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={ref3}
            className="opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="text-center mb-14">
              <span className="text-xs tracking-[0.4em] text-[#C9A84C] uppercase font-medium">
                Valores
              </span>
              <h3
                className="mt-3 text-3xl md:text-4xl font-bold text-[#0A1628]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Nossa <span className="italic text-[#C9A84C]">Filosofia</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {philosophyPoints.map((point, i) => (
                <div
                  key={i}
                  className="relative p-8 bg-white shadow-sm hover:shadow-md transition-shadow border-t-2 border-transparent hover:border-[#C9A84C] group"
                >
                  <div className="text-4xl font-bold text-[#C9A84C]/10 group-hover:text-[#C9A84C]/20 transition-colors mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}>
                    0{i + 1}
                  </div>
                  <p className="text-[#0A1628]/70 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <blockquote className="mt-16 text-center">
              <p
                className="italic text-[#0A1628]/50 text-xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                "Não fortalecerás a dignidade e o ânimo, se subtraires aos homens a iniciativa e
                a liberdade."
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
    </section>
  );
}
