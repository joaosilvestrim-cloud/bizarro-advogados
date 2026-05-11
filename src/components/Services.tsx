"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, FileText, Building2, TrendingDown, Landmark } from "lucide-react";

const svcs = [
  { Icon: FileText, title: "Contratos", desc: "Elaboração e revisão de contratos empresariais com segurança jurídica e foco nos seus interesses.", items: ["Contratos bancários", "Parcerias comerciais / SPE", "Representação comercial", "Compromissos de compra e venda", "Franquia empresarial", "Contrato de não-concorrência", "Cessão de direitos"] },
  { Icon: TrendingDown, title: "Recuperação Judicial e Falência", desc: "Assessoria completa em processos de reestruturação empresarial e defesa em ações falimentares.", items: ["Estudo de viabilidade econômica e jurídica do plano de recuperação", "Habilitação e defesa de crédito", "Defesa em ação de falência – empresa e sócios"] },
  { Icon: Building2, title: "Direito Imobiliário", desc: "Assessoria jurídica em transações imobiliárias, minimizando riscos e garantindo segurança.", items: ["Financiamento imobiliário", "Compra e venda de imóveis", "Hipoteca e garantias reais", "Análise de risco em aquisição imobiliária", "Locação e despejo", "Ação renovatória e revisional", "Processo administrativo perante Cartório de Registro de Imóveis"] },
  { Icon: Landmark, title: "Direito Tributário", desc: "Planejamento e defesa tributária para reduzir a carga fiscal dentro da legalidade.", items: ["Compensação de crédito tributário", "Defesas administrativas e judiciais", "Contra cobrança indevida de tributos", "Planejamento tributário e enquadramento fiscal", "Viabilização de parcelamentos e quitação de dívidas tributárias"] },
];

function Card({ svc, idx }: { svc: typeof svcs[0]; idx: number }) {
  const [open, setOpen] = useState(false);
  const { Icon } = svc;
  return (
    <div style={{ background: "#fff", border: "1px solid rgba(6,14,26,0.08)", position: "relative", overflow: "hidden", transition: "box-shadow 0.3s" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(6,14,26,0.1)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
    >
      {/* Gold top bar on hover — managed via CSS */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,#C9A84C,#E8C96E)" }} />

      <div style={{ padding: "2.5rem" }}>
        {/* Number */}
        <span style={{ position: "absolute", top: "1.5rem", right: "1.75rem", fontFamily: "var(--font-playfair)", fontSize: "5rem", fontWeight: 700, color: "rgba(6,14,26,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          {String(idx + 1).padStart(2, "0")}
        </span>

        {/* Icon */}
        <div style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.06)", marginBottom: "1.5rem" }}>
          <Icon size={20} style={{ color: "#C9A84C" }} />
        </div>

        <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 700, color: "#060E1A", marginBottom: "0.75rem", lineHeight: 1.3 }}>{svc.title}</h3>
        <p style={{ color: "rgba(6,14,26,0.55)", fontSize: "14px", lineHeight: 1.75, marginBottom: "1.75rem" }}>{svc.desc}</p>

        <button onClick={() => setOpen(v => !v)} style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "none", border: "none", cursor: "pointer", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 700, padding: 0 }}>
          {open ? "Fechar" : "Ver serviços"}
          <ChevronDown size={13} style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0)" }} />
        </button>

        <div style={{ maxHeight: open ? "400px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}>
          <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(6,14,26,0.07)", marginTop: "1.5rem" }}>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {svc.items.map((it, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "14px", color: "rgba(6,14,26,0.65)" }}>
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
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.05 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section id="servicos" style={{ width: "100%", background: "#F7F5F0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "7rem 5rem" }}>
        <div ref={ref} className="fade-up" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: "4rem" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>Especialidades</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", width: "100%", gap: "2rem", flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem,3.5vw,4rem)", fontWeight: 700, color: "#060E1A", lineHeight: 1.05 }}>
              Serviços de <span style={{ fontStyle: "italic", color: "#C9A84C" }}>Advocacia</span>
            </h2>
            <p style={{ color: "rgba(6,14,26,0.45)", fontSize: "14px", maxWidth: "280px", lineHeight: 1.7, textAlign: "right" }}>
              Soluções personalizadas nas principais áreas do direito empresarial e tributário.
            </p>
          </div>
          <div style={{ width: "48px", height: "2px", background: "linear-gradient(90deg,#C9A84C,#E8C96E)", marginTop: "2rem" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,480px), 1fr))", gap: "1.5rem" }}>
          {svcs.map((s, i) => <Card key={i} svc={s} idx={i} />)}
        </div>

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <p style={{ color: "rgba(6,14,26,0.4)", fontSize: "14px", marginBottom: "1.5rem" }}>Não encontrou o que procurava? Entre em contato.</p>
          <a href="#contato" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2.5rem", background: "#060E1A", color: "#fff", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>
            Fale Conosco →
          </a>
        </div>
      </div>
    </section>
  );
}
