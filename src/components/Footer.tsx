import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Escritório de Advocacia", href: "#escritorio" },
  { label: "Serviços de Advocacia", href: "#servicos" },
  { label: "Notícias", href: "#noticias" },
  { label: "Contato e Localização", href: "#contato" },
];

const services = [
  "Contratos",
  "Recuperação Judicial e Falência",
  "Direito Imobiliário",
  "Direito Tributário",
  "Direitos Trabalhistas",
  "Serviços Tributários",
];

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] text-white/60">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <p
                className="text-2xl font-bold tracking-[0.15em] text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                BIZARRO
              </p>
              <p className="text-[10px] tracking-[0.3em] text-[#C9A84C] uppercase font-light">
                Advogados Associados
              </p>
            </div>
            <div className="gold-line mb-5" />
            <p className="text-xs leading-relaxed mb-6">
              Excelência jurídica com propósito. Protegendo os seus interesses com estratégia,
              ética e comprometimento.
            </p>
            <div className="space-y-2 text-xs">
              <a href="tel:+551143374200" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
                <Phone size={12} className="text-[#C9A84C]" />
                (11) 4337-4200
              </a>
              <a href="mailto:sidnei@bizarro.adv.br" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
                <Mail size={12} className="text-[#C9A84C]" />
                sidnei@bizarro.adv.br
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={12} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span>Al. Dona Tereza Cristina, 372<br />Jardim Nova Petropolis<br />São Bernardo do Campo – SP</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5 font-medium">
              Páginas
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs hover:text-[#C9A84C] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#C9A84C]/0 group-hover:text-[#C9A84C] transition-colors">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5 font-medium">
              Especialidades
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-xs hover:text-[#C9A84C] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#C9A84C]/0 group-hover:text-[#C9A84C] transition-colors">›</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5 font-medium">
              Consulta Jurídica
            </h4>
            <p className="text-xs leading-relaxed mb-6">
              Agende uma consulta e descubra como podemos proteger seus interesses com soluções
              personalizadas e eficazes.
            </p>
            <a
              href="#contato"
              className="inline-block px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-xs tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-300"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[10px] tracking-wider uppercase">
          <p>© {new Date().getFullYear()} Bizarro e Associados. Todos os direitos reservados.</p>
          <p className="text-white/20">OAB/SP</p>
        </div>
      </div>
    </footer>
  );
}
