"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add("visible"), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A1628",
        overflow: "hidden",
      }}
    >
      {/* Grid bg */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.035,
          backgroundImage:
            "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          pointerEvents: "none",
        }}
      />

      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "860px",
          margin: "0 auto",
          padding: "6rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            marginBottom: "2rem",
            padding: "0.4rem 1.25rem",
            border: "1px solid rgba(201,168,76,0.4)",
            fontSize: "11px",
            letterSpacing: "0.35em",
            color: "#C9A84C",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Advocacia Especializada
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(3.5rem,7vw,6rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1,
            margin: 0,
          }}
        >
          Excelência
        </h1>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(3.5rem,7vw,6rem)",
            fontWeight: 700,
            fontStyle: "italic",
            background: "linear-gradient(135deg,#C9A84C 0%,#E8C96E 50%,#A07830 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
            margin: "0.15rem 0",
          }}
        >
          Jurídica
        </h1>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.75rem,3.5vw,3rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.05em",
            margin: "0 0 2rem",
          }}
        >
          com Propósito
        </h2>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          <div style={{ height: "1px", width: "56px", background: "linear-gradient(90deg,transparent,#C9A84C)" }} />
          <div style={{ width: "6px", height: "6px", transform: "rotate(45deg)", background: "#C9A84C" }} />
          <div style={{ height: "1px", width: "56px", background: "linear-gradient(270deg,transparent,#C9A84C)" }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "clamp(0.9rem,1.5vw,1.1rem)",
            lineHeight: 1.75,
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            fontWeight: 300,
          }}
        >
          Mais de uma década protegendo os interesses dos nossos clientes com
          estratégia, ética e comprometimento. Soluções jurídicas precisas para
          empresas e pessoas em São Bernardo do Campo.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3.5rem",
          }}
        >
          <a
            href="#servicos"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              background: "#C9A84C",
              color: "#0A1628",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Nossas Especialidades →
          </a>
          <a
            href="#escritorio"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.75)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 300,
              textDecoration: "none",
            }}
          >
            Sobre o Escritório
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "3rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {[
            { n: "10+", label: "Anos de Atuação" },
            { n: "500+", label: "Casos Resolvidos" },
            { n: "4", label: "Áreas de Especialização" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "2rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg,#C9A84C,#E8C96E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  margin: 0,
                }}
              >
                {s.n}
              </p>
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginTop: "0.25rem",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <a
        href="#escritorio"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.35rem",
          color: "rgba(255,255,255,0.2)",
          textDecoration: "none",
        }}
      >
        <span style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
