"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "A Escola",
    href: "/sobre",
    children: [
      { label: "Nossa História", href: "/sobre#historia" },
      { label: "Instrutores", href: "/sobre#instrutores" },
      { label: "Estrutura", href: "/sobre#estrutura" },
      { label: "Valores", href: "/sobre#valores" },
    ],
  },
  {
    label: "Programas",
    href: "/programas",
    children: [
      { label: "Iniciantes (Fundamentos)", href: "/programas#iniciantes" },
      { label: "Avançado", href: "/programas#avancado" },
      { label: "Kids & Teens", href: "/programas#kids" },
      { label: "Feminino", href: "/programas#feminino" },
      { label: "No-Gi (Submission)", href: "/programas#no-gi" },
      { label: "Defesa Pessoal", href: "/programas#defesa" },
    ],
  },
  { label: "Horários", href: "/horarios" },
  {
    label: "Ecossistema",
    href: "/ecossistema",
    children: [
      { label: "Loja ALS", href: "/ecossistema#loja" },
      { label: "ALS Online", href: "/ecossistema#online" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0e1012]/95 backdrop-blur-md border-b border-white/5 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-site">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <div className="absolute inset-0 bg-[#F33535] rounded-sm rotate-45 group-hover:rotate-[50deg] transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-sm md:text-base tracking-tighter z-10">
                  ALS
                </span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-base md:text-lg tracking-tight uppercase">
                ALS
              </span>
              <span className="text-[#eae8e8]/60 text-[0.6rem] md:text-xs tracking-[0.2em] uppercase">
                Escola de Jiu-Jitsu
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                {link.children ? (
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[#eae8e8]/80 hover:text-white uppercase tracking-wide transition-colors"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-sm font-semibold text-[#eae8e8]/80 hover:text-white uppercase tracking-wide transition-colors"
                  >
                    {link.label}
                  </Link>
                )}

                {link.children && (
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      activeDropdown === link.label
                        ? "opacity-100 pointer-events-auto translate-y-0"
                        : "opacity-0 pointer-events-none -translate-y-2"
                    }`}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-[#161819] border border-white/8 rounded-lg shadow-2xl min-w-[210px] py-1.5 overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-[#eae8e8]/70 hover:text-white hover:bg-[#233039] transition-colors border-l-2 border-transparent hover:border-[#F33535]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/5511999999999?text=Ola!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2.5 px-4"
            >
              WhatsApp
            </a>
            <Link href="/comece-agora" className="btn-primary text-xs py-2.5 px-5">
              Aula Gratis
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0e1012] border-t border-white/5 px-5 pb-6">
          <ul className="py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 text-sm font-bold text-[#eae8e8]/80 uppercase tracking-wider"
                      onClick={() => toggleDropdown(link.label)}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === link.label && (
                      <ul className="pl-4 pb-2 space-y-1 border-l border-[#F33535]/30">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block py-2 text-sm text-[#eae8e8]/60 hover:text-white transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 text-sm font-bold text-[#eae8e8]/80 uppercase tracking-wider hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
            <Link
              href="/comece-agora"
              className="btn-primary w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Agendar Aula Experimental Gratuita
            </Link>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center text-center"
              onClick={() => setMobileOpen(false)}
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
