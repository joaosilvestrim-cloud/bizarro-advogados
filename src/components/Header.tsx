"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Notícias", href: "#noticias" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-400 ${
        scrolled
          ? "bg-[#0A1628]/96 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      {/* Top info bar */}
      {!scrolled && (
        <div className="hidden md:flex items-center justify-end gap-6 px-8 lg:px-16 py-2 border-b border-white/8 text-[11px] text-white/50">
          <a href="tel:+551143374200" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors">
            <Phone size={11} /> (11) 4337-4200
          </a>
          <a href="mailto:sidnei@bizarro.adv.br" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors">
            <Mail size={11} /> sidnei@bizarro.adv.br
          </a>
        </div>
      )}

      {/* Main nav row */}
      <div className="flex items-center justify-between px-6 md:px-8 lg:px-16 py-4">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-none shrink-0">
          <span
            className="text-xl font-bold tracking-[0.12em] text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            BIZARRO
          </span>
          <span className="text-[9px] tracking-[0.28em] text-[#C9A84C] uppercase font-light">
            Advogados Associados
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.18em] uppercase text-white/70 hover:text-[#C9A84C] transition-colors duration-200 font-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center px-5 py-2 border border-[#C9A84C] text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-200 shrink-0"
        >
          Consulta
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-white/8 px-6 py-6">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm tracking-widest uppercase text-white/70 hover:text-[#C9A84C] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-5 border-t border-white/8 flex flex-col gap-2 text-xs text-white/45">
            <a href="tel:+551143374200" className="flex items-center gap-2">
              <Phone size={12} className="text-[#C9A84C]" /> (11) 4337-4200
            </a>
            <a href="mailto:sidnei@bizarro.adv.br" className="flex items-center gap-2">
              <Mail size={12} className="text-[#C9A84C]" /> sidnei@bizarro.adv.br
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
