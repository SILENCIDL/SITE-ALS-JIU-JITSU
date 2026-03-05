import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  escola: [
    { label: "Nossa História", href: "/sobre#historia" },
    { label: "Instrutores", href: "/sobre#instrutores" },
    { label: "Estrutura", href: "/sobre#estrutura" },
    { label: "Valores e Filosofia", href: "/sobre#valores" },
  ],
  programas: [
    { label: "Iniciantes", href: "/programas#iniciantes" },
    { label: "Avançado", href: "/programas#avancado" },
    { label: "Kids & Teens", href: "/programas#kids" },
    { label: "Feminino", href: "/programas#feminino" },
    { label: "No-Gi / Submission", href: "/programas#no-gi" },
  ],
  ecossistema: [
    { label: "Grade de Horários", href: "/horarios" },
    { label: "Loja ALS", href: "/ecossistema#loja" },
    { label: "ALS Online", href: "/ecossistema#online" },
    { label: "Aula Gratuita", href: "/comece-agora" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0e1012] border-t border-white/5">
      {/* Main footer content */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-[#F33535] rounded-sm rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black text-sm z-10">ALS</span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-xl tracking-tight uppercase">ALS</span>
                <span className="text-[#eae8e8]/50 text-xs tracking-[0.2em] uppercase">
                  Escola de Jiu-Jitsu
                </span>
              </div>
            </Link>
            <p className="text-[#eae8e8]/55 text-sm leading-relaxed max-w-xs mb-6">
              Formando campeões dentro e fora do tatame. Tradição, técnica e comunidade desde a nossa fundação.
            </p>
            <div className="space-y-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-[#eae8e8]/55 hover:text-[#eae8e8] transition-colors group"
              >
                <MapPin size={16} className="text-[#F33535] mt-0.5 flex-shrink-0" />
                <span>Rua das Artes Marciais, 123<br />Bela Vista, São Paulo - SP</span>
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-sm text-[#eae8e8]/55 hover:text-[#eae8e8] transition-colors"
              >
                <Phone size={16} className="text-[#F33535] flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </a>
              <a
                href="mailto:contato@alsjiujitsu.com.br"
                className="flex items-center gap-3 text-sm text-[#eae8e8]/55 hover:text-[#eae8e8] transition-colors"
              >
                <Mail size={16} className="text-[#F33535] flex-shrink-0" />
                <span>contato@alsjiujitsu.com.br</span>
              </a>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#233039] text-[#eae8e8]/60 hover:bg-[#F33535] hover:text-white transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#F33535] mb-4">
              A Escola
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.escola.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#eae8e8]/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#F33535] mb-4">
              Programas
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.programas.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#eae8e8]/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#F33535] mb-4">
              Comunidade
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.ecossistema.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#eae8e8]/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* WhatsApp CTA */}
            <div className="mt-6">
              <a
                href="https://wa.me/5511999999999?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20a%20ALS%20Jiu-Jitsu."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-[#25D366]/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#eae8e8]/35">
            © {new Date().getFullYear()} ALS Escola de Jiu-Jitsu. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacidade" className="text-xs text-[#eae8e8]/35 hover:text-[#eae8e8]/70 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-xs text-[#eae8e8]/35 hover:text-[#eae8e8]/70 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
