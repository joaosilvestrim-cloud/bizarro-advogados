"use client";

import { useEffect, useRef, useState } from "react";
import HeroIllustration from "./HeroIllustration";

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, target, duration]);
  return count;
}

const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const c1 = useCountUp(10,  1600, statsVisible);
  const c2 = useCountUp(500, 2000, statsVisible);

  const anim = (delay: number, dir: "up" | "left" | "right" = "up"): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible
      ? "none"
      : dir === "left"  ? "translateX(-24px)"
      : dir === "right" ? "translateX(24px)"
      : "translateY(28px)",
    transition: `opacity 0.8s ${EASING} ${delay}ms, transform 0.8s ${EASING} ${delay}ms`,
  });

  return (
    <section
      id="inicio"
      style={{ position: "relative", width: "100%", minHeight: "100vh", background: "#060E1A", display: "flex", alignItems: "center", overflow: "hidden" }}
    >
      {/* Atmospheric gradient */}
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 30% 50%, rgba(17,34,64,0.9) 0%, transparent 70%)", pointerEvents: "none", zIndex: 2 }} />

      {/* Dot grid */}
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.14) 1px, transparent 1px)", backgroundSize: "48px 48px", opacity: 0.35, pointerEvents: "none", zIndex: 1 }} />

      {/* Illustration (sits behind content) */}
      <HeroIllustration />

      {/* Left vertical rule */}
      <div aria-hidden style={{ position: "absolute", left: "2.5rem", top: 0, bottom: 0, width: "1px", background: "linear-gradient(180deg,transparent,rgba(201,168,76,0.25) 25%,rgba(201,168,76,0.25) 75%,transparent)", zIndex: 2 }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "9rem 5rem 7rem", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "4rem" }}>

        {/* ── Text column ── */}
        <div>
          {/* Label line */}
          <div style={{ ...anim(0, "left"), display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            <div style={{ width: "32px", height: "1px", background: "#C9A84C", transformOrigin: "left", animation: visible ? "lineGrow 0.6s 0.1s ease both" : undefined }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 600 }}>
              Escritório de Advocacia
            </span>
          </div>

          {/* Heading */}
          <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, lineHeight: 1.02, margin: "0 0 0.5rem" }}>
            <span style={{ display: "block", fontSize: "clamp(3.5rem,5.5vw,6.5rem)", color: "#fff", ...anim(100) }}>
              Excelência
            </span>
            <span style={{ display: "block", fontSize: "clamp(3.5rem,5.5vw,6.5rem)", fontStyle: "italic", ...anim(200),
              background: "linear-gradient(135deg,#C9A84C 0%,#E8C96E 50%,#A07830 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Jurídica
            </span>
            <span style={{ display: "block", fontSize: "clamp(1.75rem,2.8vw,3.2rem)", fontWeight: 300, color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em", marginTop: "0.4rem", ...anim(300) }}>
              com Propósito
            </span>
          </h1>

          {/* Divider */}
          <div style={{ ...anim(380), display: "flex", alignItems: "center", gap: "0.75rem", margin: "2rem 0" }}>
            <div style={{ width: "64px", height: "1px", background: "linear-gradient(90deg,#C9A84C,transparent)" }} />
            <div style={{ width: "5px", height: "5px", background: "#C9A84C", transform: "rotate(45deg)", animation: "glow 3s ease-in-out infinite" }} />
          </div>

          {/* Subtitle */}
          <p style={{ ...anim(460), color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.95rem,1.3vw,1.1rem)", lineHeight: 1.85, maxWidth: "520px", fontWeight: 300, marginBottom: "3rem" }}>
            Mais de uma década protegendo os interesses dos nossos clientes com
            estratégia, ética e comprometimento. Soluções jurídicas precisas para
            empresas e pessoas em São Bernardo do Campo – SP.
          </p>

          {/* CTAs */}
          <div style={{ ...anim(560), display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="#servicos" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2.25rem", background: "#C9A84C", color: "#060E1A", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", borderRadius: "6px", transition: `background 0.25s ${EASING}, transform 0.25s ${EASING}, box-shadow 0.25s ${EASING}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#E8C96E"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(201,168,76,0.35)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#C9A84C"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              Nossas Especialidades <span>→</span>
            </a>
            <a href="#escritorio" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2.25rem", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 300, textDecoration: "none", borderRadius: "6px", transition: `border-color 0.25s ${EASING}, color 0.25s ${EASING}, transform 0.25s ${EASING}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C9A84C"; (e.currentTarget as HTMLElement).style.color = "#C9A84C"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              Sobre o Escritório
            </a>
          </div>
        </div>

        {/* ── Stats panel ── */}
        <div ref={statsRef} style={{ ...anim(300, "right"), display: "flex", flexDirection: "column", border: "1px solid rgba(201,168,76,0.2)", minWidth: "200px", background: "rgba(6,14,26,0.6)", backdropFilter: "blur(12px)" }}>
          {[
            { count: `${c1}+`, label: "Anos de\nAtuação" },
            { count: `${c2}+`, label: "Casos\nResolvidos" },
            { count: "4", label: "Áreas de\nEspecialização" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "2rem 2.25rem", borderBottom: i < 2 ? "1px solid rgba(201,168,76,0.12)" : "none", textAlign: "center", transition: `background 0.3s ${EASING}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.06)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "2.75rem", fontWeight: 700, lineHeight: 1, marginBottom: "0.5rem", background: "linear-gradient(135deg,#C9A84C,#E8C96E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", overflow: "hidden" }}>
                {s.count}
              </p>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", lineHeight: 1.55, whiteSpace: "pre-line" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ ...anim(800), position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", zIndex: 10 }}>
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(180deg,transparent,rgba(201,168,76,0.5))", animation: "float 2.5s ease-in-out infinite" }} />
        <span style={{ fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.18)" }}>Scroll</span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #inicio > div:last-of-type { grid-template-columns: 1fr !important; padding: 7rem 1.75rem 5rem !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
