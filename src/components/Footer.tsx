import { Phone, Mail, MapPin } from "lucide-react";

const pages = [
  { label: "Início", href: "#inicio" },
  { label: "Escritório de Advocacia", href: "#escritorio" },
  { label: "Serviços de Advocacia", href: "#servicos" },
  { label: "Notícias", href: "#noticias" },
  { label: "Contato e Localização", href: "#contato" },
];

const specialties = [
  "Contratos",
  "Recuperação Judicial e Falência",
  "Direito Imobiliário",
  "Direito Tributário",
  "Direitos Trabalhistas",
  "Serviços Tributários",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#060E1A] text-white/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p
              className="text-xl font-bold tracking-[0.12em] text-white mb-0.5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              BIZARRO
            </p>
            <p className="text-[9px] tracking-[0.28em] text-[#C9A84C] uppercase font-light mb-4">
              Advogados Associados
            </p>
            <div className="gold-line mb-5" />
            <p className="text-[13px] leading-relaxed mb-6">
              Excelência jurídica com propósito. Protegendo os seus interesses
              com estratégia, ética e comprometimento.
            </p>
            <div className="space-y-2 text-[13px]">
              <a href="tel:+551143374200" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
                <Phone size={12} className="text-[#C9A84C] shrink-0" />
                (11) 4337-4200
              </a>
              <a href="mailto:sidnei@bizarro.adv.br" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors break-all">
                <Mail size={12} className="text-[#C9A84C] shrink-0" />
                sidnei@bizarro.adv.br
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={12} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <span>Al. Dona Tereza Cristina, 372<br />Jardim Nova Petropolis<br />São Bernardo do Campo – SP</span>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#C9A84C] mb-5 font-medium">
              Páginas
            </h4>
            <ul className="space-y-3">
              {pages.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    className="text-[13px] hover:text-[#C9A84C] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#C9A84C] mb-5 font-medium">
              Especialidades
            </h4>
            <ul className="space-y-3">
              {specialties.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-[13px] hover:text-[#C9A84C] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#C9A84C] mb-5 font-medium">
              Consulta Jurídica
            </h4>
            <p className="text-[13px] leading-relaxed mb-6">
              Agende uma consulta e descubra como podemos proteger seus
              interesses com soluções personalizadas.
            </p>
            <a
              href="#contato"
              className="inline-block px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-200"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[10px] tracking-wider uppercase text-white/25">
          <p>© {new Date().getFullYear()} Bizarro e Associados. Todos os direitos reservados.</p>
          <p>OAB/SP</p>
        </div>
      </div>
    </footer>
  );
}
