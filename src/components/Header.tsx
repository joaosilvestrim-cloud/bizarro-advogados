"use client";
import { useState, useEffect } from "react";
import { BzMenu, BzClose, BzPhone } from "./BzIcons";

const links = [
  { l: "Início", h: "#inicio" },
  { l: "Escritório", h: "#escritorio" },
  { l: "Serviços", h: "#servicos" },
  { l: "Notícias", h: "#noticias" },
  { l: "Contato", h: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg = scrolled
    ? "rgba(6,14,26,0.97)"
    : "linear-gradient(180deg,rgba(6,14,26,0.85) 0%,transparent 100%)";

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: navBg, backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none", transition: "all 0.4s ease" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: scrolled ? "72px" : "84px", transition: "height 0.3s ease" }}>

        {/* Logo */}
        <a href="#inicio" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="Bizarro Advogados Associados"
            style={{ height: scrolled ? "90px" : "110px", width: "auto", maxWidth: "300px", objectFit: "contain", margin: "-16px 0", transition: "height 0.3s ease" }}
          />
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
          {links.map((l) => (
            <a key={l.h} href={l.h} className="nav-link" style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 400, transition: "color 0.25s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >{l.l}</a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="hidden-mobile">
          <a href="tel:+551143374200" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            <BzPhone size={12} color="#C9A84C" />
            (11) 4337-4200
          </a>
          <a href="#contato" style={{ padding: "0.55rem 1.4rem", border: "1px solid #C9A84C", color: "#C9A84C", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", borderRadius: "6px", transition: "all 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#C9A84C"; (e.currentTarget as HTMLElement).style.color = "#0A1628"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#C9A84C"; }}
          >Consulta</a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(v => !v)} style={{ display: "none", background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "0.25rem" }} className="show-mobile">
          {open ? <BzClose size={22} color="#fff" /> : <BzMenu size={22} color="#fff" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#060E1A", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "1.5rem 2.5rem 2rem" }}>
          {links.map((l) => (
            <a key={l.h} href={l.h} onClick={() => setOpen(false)} style={{ display: "block", padding: "0.75rem 0", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              {l.l}
            </a>
          ))}
          <a href="#contato" style={{ display: "inline-block", marginTop: "1.5rem", padding: "0.75rem 2rem", background: "#C9A84C", color: "#0A1628", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", borderRadius: "6px" }}>
            Consulta
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
