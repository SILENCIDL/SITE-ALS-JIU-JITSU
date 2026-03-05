import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Play,
  Star,
  Shield,
  Zap,
  Globe,
  Lock,
  CheckCircle2,
  Trophy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ecossistema ALS — Loja & E-learning | ALS Jiu-Jitsu",
  description:
    "Loja oficial ALS com kimonos, rashguards e acessórios. Plataforma ALS Online com vídeo-aulas exclusivas, técnicas e instructionals dos nossos professores.",
};

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#0e1012] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#233039]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F33535]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#0C3C78]/8 rounded-full blur-2xl" />
      </div>
      <div className="container-site relative z-10">
        <p className="section-label mb-3">Ecossistema ALS</p>
        <h1 className="heading-display text-5xl md:text-7xl text-white mb-5">
          Viva o
          <span className="block text-[#F33535]">Jiu-Jitsu</span>
          <span className="block text-[#0C3C78]">Além do Tatame</span>
        </h1>
        <p className="text-[#eae8e8]/60 text-lg max-w-2xl leading-relaxed mb-8">
          A ALS vai além das aulas. Produtos que carregam nossa identidade e conhecimento que você
          pode acessar de qualquer lugar do mundo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#loja" className="btn-primary">
            Visitar a Loja
            <ShoppingBag size={16} />
          </a>
          <a href="#online" className="btn-blue">
            ALS Online
            <Play size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ShopSection() {
  const categories = [
    {
      title: "Kimonos (Gi)",
      desc: "Kimonos ALS confeccionados com tecido premium aprovado para competição IBJJF. Disponíveis em todas as graduações com bordados exclusivos.",
      badge: "Best Seller",
      badgeColor: "bg-[#F33535] text-white",
      items: ["Kimono Competition — A1/A2/A3/A4", "Kimono Training — Todas as graduações", "Kimono Kids — M0 ao M4", "Kimono Feminino — F0 ao F4"],
      priceRange: "R$ 280 – R$ 580",
    },
    {
      title: "No-Gi (Rashguards & Shorts)",
      desc: "Rashguards de compressão com proteção UV, secagem ultrarrápida e design ALS em preto, vermelho e azul. Shorts de luta com shorts internos e bermuda de nylon.",
      badge: "Novo",
      badgeColor: "bg-[#0C3C78] text-white",
      items: ["Rashguard Manga Longa — Todas faixas", "Rashguard Manga Curta", "Fight Shorts — 3 modelos", "Spats de compressão"],
      priceRange: "R$ 120 – R$ 220",
    },
    {
      title: "Lifestyle & Acessórios",
      desc: "Vista a identidade ALS no seu dia a dia. Coleção casual que celebra a cultura do Jiu-Jitsu com a estética da academia.",
      badge: "Coleção Nova",
      badgeColor: "bg-[#233039] text-[#eae8e8]",
      items: ["Camisetas ALS — Algodão Premium", "Mochila de tatame", "Protetor bucal com case", "Acessórios de cuidado pós-treino"],
      priceRange: "R$ 45 – R$ 380",
    },
  ];

  return (
    <section id="loja" className="py-24 bg-[#161819] scroll-mt-20">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Loja ALS</p>
          <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
            Vista as Cores
            <span className="block text-[#F33535]">da ALS</span>
          </h2>
          <p className="text-[#eae8e8]/55 max-w-xl mx-auto leading-relaxed">
            Produtos oficiais com a identidade visual da escola. Cada compra fortalece a comunidade
            e carrega a marca ALS para onde você for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => (
            <div key={cat.title} className="card-dark overflow-hidden group flex flex-col">
              {/* Visual placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#233039] to-[#0e1012] relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F33535]/10 to-[#0C3C78]/10" />
                <ShoppingBag size={40} className="text-white/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black text-white/10 uppercase">{cat.title.split(" ")[0]}</div>
                  </div>
                </div>
                <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${cat.badgeColor}`}>
                  {cat.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-black text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-[#eae8e8]/55 leading-relaxed mb-4">{cat.desc}</p>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#eae8e8]/60">
                      <div className="w-1 h-1 rounded-full bg-[#F33535] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-white/6">
                  <span className="text-sm font-bold text-[#F33535]">{cat.priceRange}</span>
                  <button className="text-xs font-bold uppercase tracking-wider text-[#eae8e8]/60 hover:text-white flex items-center gap-1 transition-colors">
                    Ver produtos <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shop benefits */}
        <div className="bg-[#0e1012] rounded-xl p-7 border border-white/5">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#eae8e8]/50 mb-5">
            Benefícios da Loja ALS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Shield, title: "Qualidade Certificada", desc: "Todos os kimonos são aprovados para competição IBJJF" },
              { icon: Star, title: "Desconto para Alunos", desc: "Alunos matriculados têm 20% de desconto em toda a loja" },
              { icon: Globe, title: "Entrega Nacional", desc: "Envio para todo o Brasil com rastreamento" },
              { icon: Zap, title: "Personalização", desc: "Kimonos com nome bordado sob encomenda em 7 dias" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F33535]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={15} className="text-[#F33535]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-0.5">{title}</div>
                  <div className="text-xs text-[#eae8e8]/50 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ElearningSection() {
  const plans = [
    {
      name: "Área do Aluno",
      price: "Incluso",
      desc: "na mensalidade",
      highlight: false,
      features: [
        "Acesso às aulas da semana gravadas",
        "Revisão de técnicas ministradas em aula",
        "Biblioteca de fundamentos (Faixa Branca)",
        "Dicas de aquecimento e prevenção de lesões",
        "Acesso exclusivo para alunos ativos",
        "Novos conteúdos toda semana",
      ],
      cta: "Já sou aluno",
      ctaHref: "/comece-agora",
    },
    {
      name: "ALS Online Plus",
      price: "R$ 97",
      desc: "/mês",
      highlight: true,
      features: [
        "Tudo da Área do Aluno",
        "Biblioteca completa de técnicas (todos os níveis)",
        "Instructionals exclusivos dos professores",
        "Semana de No-Gi (conteúdo mensal novo)",
        "Módulo de Defesa Pessoal completo",
        "Download para ver offline",
        "Acesso para qualquer pessoa (sem ser aluno)",
      ],
      cta: "Assinar Agora",
      ctaHref: "/comece-agora",
    },
    {
      name: "ALS Masterclass",
      price: "R$ 297",
      desc: "acesso vitalício",
      highlight: false,
      features: [
        "Curso completo gravado do Prof. Alexandre",
        "Sistema de guarda aberta de A a Z",
        "Leg Lock system completo",
        "Mais de 120 aulas em vídeo",
        "Atualizado periodicamente",
        "Certificado de conclusão digital",
        "Acesso por 1 dispositivo simultâneo",
      ],
      cta: "Comprar Acesso",
      ctaHref: "/comece-agora",
    },
  ];

  const contentModules = [
    {
      icon: "🥋",
      title: "Fundamentos Completos",
      desc: "Do primeiro dia até a faixa azul. Posições, movimentos e primeiras finalizações em ordem pedagógica.",
      count: "48 aulas",
    },
    {
      icon: "🎯",
      title: "Guarda Aberta Avançada",
      desc: "De La Riva, X-Guard, Spider, Lapela. Sistemas completos com entradas, varridas e back takes.",
      count: "36 aulas",
    },
    {
      icon: "⚡",
      title: "Leg Locks Modernos",
      desc: "Do footlock ao heel hook de alto grau. Sistema de ashi garami e posicionamento no ashi.",
      count: "28 aulas",
    },
    {
      icon: "🤼",
      title: "Wrestling & Takedowns",
      desc: "Double leg, single leg, guard pulls táticos e sistemas de queda adaptados ao Jiu-Jitsu.",
      count: "22 aulas",
    },
    {
      icon: "🛡️",
      title: "Defesa Pessoal Real",
      desc: "Técnicas testadas em situações reais. Saídas de estrangulamentos, agarrões e projeções básicas.",
      count: "18 aulas",
    },
    {
      icon: "👧",
      title: "Kids Curriculum",
      desc: "Todo o currículo do programa infantil, acessível para pais reforçarem o aprendizado em casa.",
      count: "32 aulas",
    },
  ];

  return (
    <section id="online" className="py-24 bg-[#0e1012] scroll-mt-20">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="section-label mb-3">ALS Online</p>
          <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
            O Conhecimento ALS
            <span className="block text-[#0C3C78]">Onde Você Estiver</span>
          </h2>
          <p className="text-[#eae8e8]/55 max-w-xl mx-auto leading-relaxed">
            Plataforma de vídeo-aulas que complementa o treino presencial e leva a metodologia ALS
            para alunos de qualquer lugar do mundo.
          </p>
        </div>

        {/* Content modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {contentModules.map((mod) => (
            <div key={mod.title} className="card-dark p-6 group">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{mod.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-white text-sm">{mod.title}</h3>
                    <span className="text-xs text-[#F33535] font-bold">{mod.count}</span>
                  </div>
                  <p className="text-xs text-[#eae8e8]/55 leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-7 flex flex-col relative ${
                plan.highlight
                  ? "border-[#F33535]/50 bg-gradient-to-b from-[#F33535]/8 to-[#161819]"
                  : "border-white/8 bg-[#161819]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-black uppercase tracking-widest bg-[#F33535] text-white px-4 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-black text-white text-lg mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">{plan.price}</span>
                  <span className="text-sm text-[#eae8e8]/50">{plan.desc}</span>
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#eae8e8]/70">
                    <CheckCircle2
                      size={14}
                      className={`flex-shrink-0 mt-0.5 ${plan.highlight ? "text-[#F33535]" : "text-[#0C3C78]"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaHref}
                className={plan.highlight ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Platform features */}
        <div className="bg-[#161819] rounded-xl border border-white/5 p-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#eae8e8]/50 mb-6">
            Tecnologia da Plataforma
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Play, title: "Multi-ângulo", desc: "Técnicas filmadas de 2–3 ângulos diferentes para compreensão total" },
              { icon: Lock, title: "Conteúdo Exclusivo", desc: "Sem algoritmos ou distração. Foco total na evolução técnica" },
              { icon: Globe, title: "Acesso Global", desc: "Funciona em qualquer dispositivo, em qualquer lugar do mundo" },
              { icon: Trophy, title: "Ranking de Progresso", desc: "Acompanhe sua evolução com badges e conquistas desbloqueáveis" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0C3C78]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={15} className="text-[#0C3C78]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-0.5">{title}</div>
                  <div className="text-xs text-[#eae8e8]/50 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcossistemaTestimonials() {
  const testimonials = [
    {
      name: "Carlos Medeiros",
      role: "ALS Online Plus — Faixa Roxa",
      quote: "Moro em outra cidade e treino numa academia menor. Usar o ALS Online como suplemento técnico foi divisor de águas. Qualidade de instrução incomparável.",
    },
    {
      name: "Patricia Nunes",
      role: "Aluna + Loja ALS",
      quote: "O kimono que comprei na loja é incrível. Tecido pesado, bordado impecável e passou na fiscalização do Pan-Americano sem problema. Compensa cada centavo.",
    },
  ];

  return (
    <section className="py-16 bg-[#161819]">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="card-dark p-6">
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={12} className="text-[#F33535] fill-[#F33535]" />
                ))}
              </div>
              <p className="text-sm text-[#eae8e8]/65 italic leading-relaxed mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-2 pt-3 border-t border-white/6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F33535] to-[#0C3C78] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{t.name[0]}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-[#eae8e8]/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcossistemaCTA() {
  return (
    <section className="py-20 bg-[#0e1012]">
      <div className="container-site text-center">
        <h2 className="heading-display text-4xl text-white mb-4">
          Pronto para entrar no
          <span className="block text-[#F33535]">Ecossistema ALS?</span>
        </h2>
        <p className="text-[#eae8e8]/60 max-w-lg mx-auto leading-relaxed mb-10">
          Comece pelo tatame. Complemente com o online. Vista a marca. A ALS é um estilo de vida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/comece-agora" className="btn-primary text-base px-8 py-4">
            Agendar Aula Gratuita
            <ArrowRight size={18} />
          </Link>
          <a href="#loja" className="btn-secondary text-base px-8 py-4">
            Explorar a Loja
          </a>
        </div>
      </div>
    </section>
  );
}

export default function EcossistemaPage() {
  return (
    <>
      <PageHero />
      <ShopSection />
      <ElearningSection />
      <EcossistemaTestimonials />
      <EcossistemaCTA />
    </>
  );
}
