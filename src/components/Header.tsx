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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A1628]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      {!scrolled && (
        <div className="hidden md:flex items-center justify-end gap-6 px-8 py-2 border-b border-white/10 text-xs text-white/60">
          <a
            href="tel:+551143374200"
            className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors"
          >
            <Phone size={12} />
            (11) 4337-4200
          </a>
          <a
            href="mailto:sidnei@bizarro.adv.br"
            className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors"
          >
            <Mail size={12} />
            sidnei@bizarro.adv.br
          </a>
        </div>
      )}

      {/* Main nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-none group">
          <span
            className="text-2xl font-bold tracking-[0.15em] text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            BIZARRO
          </span>
          <span className="text-[10px] tracking-[0.3em] text-[#C9A84C] uppercase font-light">
            Advogados Associados
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wider text-white/80 hover:text-[#C9A84C] transition-colors duration-300 animated-underline uppercase font-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contato"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-[#C9A84C] text-[#C9A84C] text-xs tracking-widest uppercase font-medium hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-300"
        >
          Consulta
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1628]/98 backdrop-blur-md border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm tracking-widest text-white/80 hover:text-[#C9A84C] transition-colors uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3 text-sm text-white/60">
            <a href="tel:+551143374200" className="flex items-center gap-2">
              <Phone size={14} className="text-[#C9A84C]" />
              (11) 4337-4200
            </a>
            <a href="mailto:sidnei@bizarro.adv.br" className="flex items-center gap-2">
              <Mail size={14} className="text-[#C9A84C]" />
              sidnei@bizarro.adv.br
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
