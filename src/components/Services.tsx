"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, FileText, Building2, TrendingDown, Landmark } from "lucide-react";

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

const svcs = [
  {
    Icon: FileText,
    title: "Contratos",
    desc: "Elaboração, análise e revisão estratégica de contratos empresariais e civis, com foco em segurança jurídica, prevenção de riscos e proteção dos interesses do cliente. Atuamos de forma personalizada para garantir relações comerciais mais seguras, transparentes e sustentáveis.",
    items: [
      "Contratos bancários e renegociação de obrigações financeiras",
      "Estruturação de parcerias comerciais e sociedades em SPE",
      "Contratos de representação comercial e distribuição",
      "Compromissos de compra e venda de bens e ativos",
      "Franquias empresariais e contratos de licenciamento",
      "Contratos de confidencialidade e não concorrência",
      "Cessão de direitos, créditos e ativos empresariais",
      "Revisão contratual e mitigação de riscos jurídicos",
      "Assessoria preventiva em negociações estratégicas",
    ],
  },
  {
    Icon: TrendingDown,
    title: "Recuperação Judicial e Falência",
    desc: "Assessoria jurídica especializada em reestruturação empresarial, recuperação judicial e defesa em ações falimentares, atuando de forma estratégica para preservação da atividade empresarial, proteção patrimonial e reorganização financeira.",
    items: [
      "Estudo de viabilidade econômica e jurídica para recuperação judicial",
      "Estruturação e acompanhamento de plano de recuperação empresarial",
      "Habilitação, impugnação e defesa de créditos",
      "Defesa em ações de falência para empresas e sócios",
      "Negociação com credores e reestruturação de passivos",
      "Atuação em medidas de preservação patrimonial",
      "Assessoria em processos de insolvência e crise empresarial",
      "Acompanhamento completo em procedimentos judiciais e administrativos",
    ],
  },
  {
    Icon: Building2,
    title: "Direito Imobiliário",
    desc: "Atuação jurídica completa em negócios e operações imobiliárias, oferecendo segurança, transparência e redução de riscos em transações patrimoniais e relações contratuais.",
    items: [
      "Assessoria em financiamento imobiliário",
      "Compra, venda e regularização de imóveis",
      "Estruturação de hipotecas e garantias reais",
      "Due diligence e análise de risco imobiliário",
      "Contratos de locação residencial e comercial",
      "Ações de despejo, cobrança e revisional de aluguel",
      "Ações renovatórias de contratos comerciais",
      "Regularização documental e registral de imóveis",
      "Atuação em processos administrativos perante Cartórios de Registro de Imóveis",
      "Consultoria preventiva para investidores e incorporadoras",
    ],
  },
  {
    Icon: Landmark,
    title: "Direito Tributário",
    desc: "Planejamento tributário estratégico e defesa fiscal voltados à redução de riscos e otimização da carga tributária, sempre com atuação alinhada à legislação vigente e às necessidades do negócio.",
    items: [
      "Compensação e recuperação de créditos tributários",
      "Defesas administrativas e judiciais em matéria tributária",
      "Contestação de cobranças indevidas de tributos",
      "Planejamento tributário empresarial e societário",
      "Enquadramento fiscal e revisão de regime tributário",
      "Negociação e viabilização de parcelamentos fiscais",
      "Regularização de passivos tributários",
      "Consultoria preventiva para redução de contingências fiscais",
      "Acompanhamento de fiscalizações e autuações tributárias",
    ],
  },
];

function Card({ svc, idx, vis }: { svc: typeof svcs[0]; idx: number; vis: boolean }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { Icon } = svc;

  const cardStyle: React.CSSProperties = {
    opacity: vis ? 1 : 0,
    transform: vis ? "none" : "translateY(32px)",
    transition: `opacity 0.85s ${E} ${idx * 110}ms, transform 0.85s ${E} ${idx * 110}ms, box-shadow 0.35s ${E}`,
    background: "#fff",
    border: "1px solid rgba(6,14,26,0.08)",
    position: "relative",
    overflow: "hidden",
    boxShadow: hovered ? "0 16px 40px rgba(6,14,26,0.1)" : "none",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gold top bar — grows on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg,#C9A84C,#E8C96E)",
        transformOrigin: "left",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transition: `transform 0.45s ${E}`,
      }} />

      <div style={{ padding: "2.5rem" }}>
        {/* Ghost number */}
        <span style={{
          position: "absolute", top: "1.5rem", right: "1.75rem",
          fontFamily: "var(--font-playfair)", fontSize: "5rem", fontWeight: 700,
          color: "rgba(6,14,26,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none",
          transition: `color 0.3s ${E}`,
          ...(hovered ? { color: "rgba(201,168,76,0.07)" } : {}),
        }}>
          {String(idx + 1).padStart(2, "0")}
        </span>

        {/* Icon box */}
        <div style={{
          width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.06)",
          marginBottom: "1.5rem",
          transition: `background 0.3s ${E}, border-color 0.3s ${E}, transform 0.35s ${E}`,
          transform: hovered ? "scale(1.08) rotate(3deg)" : "scale(1) rotate(0deg)",
          ...(hovered ? { background: "rgba(201,168,76,0.12)", borderColor: "rgba(201,168,76,0.6)" } : {}),
        }}>
          <Icon size={20} style={{ color: "#C9A84C" }} />
        </div>

        <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 700, color: "#060E1A", marginBottom: "0.75rem", lineHeight: 1.3 }}>{svc.title}</h3>
        <p style={{ color: "rgba(6,14,26,0.55)", fontSize: "14px", lineHeight: 1.75, marginBottom: "1.75rem" }}>{svc.desc}</p>

        <button
          onClick={() => setOpen(v => !v)}
          style={{
            display: "flex", alignItems: "center", gap: "0.4rem",
            background: "none", border: "none", cursor: "pointer",
            fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#C9A84C", fontWeight: 700, padding: 0,
            transition: `gap 0.3s ${E}`,
          }}
        >
          {open ? "Fechar" : "Ver serviços"}
          <ChevronDown size={13} style={{
            transition: `transform 0.4s ${E}`,
            transform: open ? "rotate(180deg)" : "rotate(0)",
          }} />
        </button>

        <div style={{ maxHeight: open ? "600px" : "0", overflow: "hidden", transition: `max-height 0.5s ${E}` }}>
          <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(6,14,26,0.07)", marginTop: "1.5rem" }}>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {svc.items.map((it, i) => (
                <li key={i} style={{
                  display: "flex", gap: "0.75rem", alignItems: "flex-start",
                  fontSize: "14px", color: "rgba(6,14,26,0.65)",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateX(-8px)",
                  transition: `opacity 0.4s ${E} ${i * 40}ms, transform 0.4s ${E} ${i * 40}ms`,
                }}>
                  <span style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px", fontSize: "12px" }}>—</span>
                  {it}
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
  const [headRef, headVis] = useInView();
  const [cardsRef, cardsVis] = useInView(0.05);

  return (
    <section id="servicos" style={{ width: "100%", background: "#F7F5F0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "7rem 5rem" }}>

        {/* Header */}
        <div ref={headRef} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: "4rem" }}>
          <div style={{
            opacity: headVis ? 1 : 0, transform: headVis ? "none" : "translateY(20px)",
            transition: `opacity 0.8s ${E}, transform 0.8s ${E}`,
          }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>Especialidades</p>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", width: "100%", gap: "2rem", flexWrap: "wrap" }}>
            <div style={{
              opacity: headVis ? 1 : 0, transform: headVis ? "none" : "translateY(24px)",
              transition: `opacity 0.8s ${E} 80ms, transform 0.8s ${E} 80ms`,
            }}>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem,3.5vw,4rem)", fontWeight: 700, color: "#060E1A", lineHeight: 1.05 }}>
                Serviços de <span style={{ fontStyle: "italic", color: "#C9A84C" }}>Advocacia</span>
              </h2>
            </div>
            <div style={{
              opacity: headVis ? 1 : 0, transform: headVis ? "none" : "translateX(16px)",
              transition: `opacity 0.8s ${E} 160ms, transform 0.8s ${E} 160ms`,
            }}>
              <p style={{ color: "rgba(6,14,26,0.45)", fontSize: "14px", maxWidth: "280px", lineHeight: 1.7, textAlign: "right" }}>
                Soluções personalizadas nas principais áreas do direito empresarial e tributário.
              </p>
            </div>
          </div>
          <div style={{
            width: headVis ? "48px" : "0px", height: "2px",
            background: "linear-gradient(90deg,#C9A84C,#E8C96E)", marginTop: "2rem",
            transition: `width 0.7s ${E} 240ms`,
          }} />
        </div>

        {/* Cards */}
        <div ref={cardsRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,480px), 1fr))", gap: "1.5rem" }}>
          {svcs.map((s, i) => <Card key={i} svc={s} idx={i} vis={cardsVis} />)}
        </div>

        {/* Footer CTA */}
        <div style={{
          marginTop: "4rem", textAlign: "center",
          opacity: cardsVis ? 1 : 0, transform: cardsVis ? "none" : "translateY(20px)",
          transition: `opacity 0.8s ${E} 500ms, transform 0.8s ${E} 500ms`,
        }}>
          <p style={{ color: "rgba(6,14,26,0.4)", fontSize: "14px", marginBottom: "1.5rem" }}>Não encontrou o que procurava? Entre em contato.</p>
          <a href="#contato"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2.5rem", background: "#060E1A", color: "#fff", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", transition: `background 0.3s ${E}, transform 0.3s ${E}, box-shadow 0.3s ${E}` }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#0A1628"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 8px 24px rgba(6,14,26,0.25)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#060E1A"; el.style.transform = "none"; el.style.boxShadow = "none"; }}
          >
            Fale Conosco <span style={{ transition: `transform 0.3s ${E}` }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
