import Link from "next/link";
import {
  ArrowRight,
  Star,
  Shield,
  Target,
  Users,
  Clock,
  Award,
  ChevronRight,
  CheckCircle2,
  Play,
  Flame,
} from "lucide-react";

// ── HERO ──────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0e1012]">
      {/* Background abstract shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0C3C78]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F33535]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#0C3C78]/10 rounded-full blur-2xl" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-site relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-[#F33535]/10 border border-[#F33535]/20 rounded-full">
            <Flame size={14} className="text-[#F33535]" />
            <span className="text-xs font-bold text-[#F33535] uppercase tracking-widest">
              Aula Experimental Gratuita
            </span>
          </div>

          <h1 className="heading-display text-5xl md:text-7xl lg:text-8xl text-white mb-6">
            Forje o
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F33535] to-[#E42F45]">
              Campeão
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-black text-[#eae8e8]/80 mt-2">
              Que Existe em Você
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#eae8e8]/65 leading-relaxed max-w-2xl mb-10">
            A ALS Escola de Jiu-Jitsu combina técnica de alto rendimento com um ambiente acolhedor.
            Programas para todas as idades e níveis — do iniciante absoluto ao atleta de competição.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link href="/comece-agora" className="btn-primary text-base px-7 py-4">
              Agendar Aula Gratuita
              <ArrowRight size={18} />
            </Link>
            <Link href="/programas" className="btn-secondary text-base px-7 py-4">
              Ver Programas
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/8">
            {[
              { value: "15+", label: "Anos de Tradição" },
              { value: "800+", label: "Alunos Ativos" },
              { value: "200+", label: "Títulos Conquistados" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-[#eae8e8]/50 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative side element */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-2/5 items-center justify-center">
        <div className="relative w-full h-full">
          {/* Edge blend gradients — below the visual content */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1012] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0e1012] to-transparent z-10" />
          {/* Placeholder visual element — above the gradients */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 border-2 border-[#F33535]/40 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-8 border border-[#0C3C78]/50 rounded-full animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
              <div className="absolute inset-16 border border-white/15 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-[#F33535]/20 rounded-full flex items-center justify-center border border-[#F33535]/50">
                  <span className="text-5xl font-black text-white">ALS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// ── BENEFITS ──────────────────────────────────────────────────────────────────

function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Defesa Pessoal Real",
      description:
        "Aprenda técnicas testadas em combate que funcionam independente de força física ou tamanho.",
    },
    {
      icon: Target,
      title: "Foco e Disciplina",
      description:
        "O tatame treina a mente tanto quanto o corpo. Desenvolva concentração e determinação inabaláveis.",
    },
    {
      icon: Users,
      title: "Comunidade Verdadeira",
      description:
        "Mais do que uma academia, somos uma família. Um ambiente de suporte, respeito e crescimento mútuo.",
    },
    {
      icon: Flame,
      title: "Condicionamento Total",
      description:
        "Cardio, força funcional, flexibilidade e coordenação num treino que nunca é igual ao anterior.",
    },
    {
      icon: Award,
      title: "Progressão Clara",
      description:
        "Sistema de faixas estruturado que celebra cada conquista e mantém a motivação sempre alta.",
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description:
        "Aulas de manhã, tarde e noite, seis dias por semana. A prática se encaixa na sua rotina.",
    },
  ];

  return (
    <section className="py-24 bg-[#161819]">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Por que o Jiu-Jitsu?</p>
          <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
            Transformação Que Vai
            <span className="block text-[#0C3C78]">Além do Tatame</span>
          </h2>
          <p className="text-[#eae8e8]/60 max-w-xl mx-auto leading-relaxed">
            O Jiu-Jitsu Brasileiro é mais do que uma arte marcial. É uma filosofia de vida que transforma
            praticantes de todas as idades e condicionamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card-dark p-7 group">
              <div className="w-12 h-12 rounded-lg bg-[#F33535]/10 flex items-center justify-center mb-5 group-hover:bg-[#F33535]/20 transition-colors">
                <benefit.icon size={22} className="text-[#F33535]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-[#eae8e8]/55 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROGRAMS PREVIEW ──────────────────────────────────────────────────────────

function ProgramsPreviewSection() {
  const programs = [
    {
      tag: "Ideal para Iniciantes",
      title: "Fundamentos",
      description:
        "Comece sua jornada sem experiência prévia. Ambiente seguro, sem sparring intenso nos primeiros meses. Foco em posicionamento, mecânica corporal e autodefesa essencial.",
      color: "from-[#0C3C78] to-[#161819]",
      badgeColor: "bg-[#0C3C78]/80",
      href: "/programas#iniciantes",
      highlights: ["Sem necessidade de experiência", "Sparring introdutório gradual", "Turmas reduzidas"],
    },
    {
      tag: "Faixa Azul ao Preta",
      title: "Avançado & Pro Training",
      description:
        "Para praticantes com base sólida. Preparação para competições IBJJF, sparring de alta intensidade e desenvolvimento de jogo individual com metodologia de alto rendimento.",
      color: "from-[#B42B3F] to-[#161819]",
      badgeColor: "bg-[#B42B3F]/80",
      href: "/programas#avancado",
      highlights: ["Treino de competição", "Análise tática individual", "Sparring com faixas pretas"],
    },
    {
      tag: "4 a 15 anos",
      title: "Kids & Teens",
      description:
        "Desenvolvimento motor, disciplina e caráter. Metodologia pedagógica que combate o bullying e desenvolve confiança, respeito e trabalho em equipe de forma lúdica.",
      color: "from-[#233039] to-[#161819]",
      badgeColor: "bg-[#233039]",
      href: "/programas#kids",
      highlights: ["Ambiente lúdico e seguro", "Anti-bullying comprovado", "Graduação progressiva"],
    },
    {
      tag: "Exclusivo",
      title: "Feminino",
      description:
        "Turmas exclusivamente femininas para máximo conforto e segurança. Empoderamento, autodefesa e comunidade de mulheres que se apoiam dentro e fora do tatame.",
      color: "from-[#0c0958] to-[#161819]",
      badgeColor: "bg-[#0c0958]",
      href: "/programas#feminino",
      highlights: ["Turmas 100% femininas", "Foco em autodefesa prática", "Comunidade acolhedora"],
    },
  ];

  return (
    <section className="py-24 bg-[#0e1012]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-3">Programas de Treino</p>
            <h2 className="heading-display text-4xl md:text-5xl text-white">
              Existe um Lugar
              <span className="block text-[#F33535]">Para Você Aqui</span>
            </h2>
          </div>
          <Link
            href="/programas"
            className="flex items-center gap-2 text-sm font-bold text-[#eae8e8]/60 hover:text-white uppercase tracking-wider transition-colors whitespace-nowrap"
          >
            Ver Todos os Programas
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group relative overflow-hidden rounded-xl bg-[#233039] border border-white/5 hover:border-[#F33535]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-40`} />
              <div className="relative p-7">
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-widest text-white/70 ${program.badgeColor} px-3 py-1 rounded-full mb-4`}
                >
                  {program.tag}
                </span>
                <h3 className="heading-display text-3xl text-white mb-3">{program.title}</h3>
                <p className="text-[#eae8e8]/60 text-sm leading-relaxed mb-5">{program.description}</p>
                <ul className="space-y-1.5 mb-6">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[#eae8e8]/70">
                      <CheckCircle2 size={14} className="text-[#F33535] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="flex items-center gap-2 text-sm font-bold text-[#F33535] group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SOCIAL PROOF ──────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ricardo Mendonça",
      role: "Aluno há 3 anos — Faixa Azul",
      quote:
        "Comecei com 42 anos sem nunca ter feito luta. O ambiente de respeito e a paciência dos professores transformaram minha relação com o meu próprio corpo. Emagreci 18kg e nunca me senti tão confiante.",
      rating: 5,
    },
    {
      name: "Camila Ferreira",
      role: "Programa Feminino — Faixa Roxa",
      quote:
        "As turmas femininas me deram a segurança que precisava para entrar nesse mundo. Hoje compito em campeonatos e a ALS me preparou para isso com técnica e muita seriedade.",
      rating: 5,
    },
    {
      name: "Marcos & Sofia Alves",
      role: "Pais — Kids Program",
      quote:
        "Nossa filha de 8 anos chegou com timidez extrema e problemas de bullying na escola. Em 6 meses, a transformação foi completa. Ela é outra criança: assertiva, respeitosa e feliz.",
      rating: 5,
    },
    {
      name: "Felipe Cunha",
      role: "Programa Avançado — Faixa Marrom",
      quote:
        "Já treinei em várias academias. A qualidade técnica do Pro Training aqui é de nível internacional. Os professores têm metodologia séria e sempre evoluindo. Onde eu quero estar.",
      rating: 5,
    },
    {
      name: "Ana Paula Rodrigues",
      role: "Iniciantes — Faixa Branca",
      quote:
        "Tinha muito medo de começar uma luta. Mas a ALS tem um jeito de acolher que você não encontra em outro lugar. Dois meses e já sinto diferença no meu condicionamento e autoestima.",
      rating: 5,
    },
    {
      name: "Thiago Oliveira",
      role: "No-Gi / Submission — Faixa Roxa",
      quote:
        "As aulas de No-Gi são cinematográficas. Mistura de wrestling, judo e jiu-jitsu com professores que entendem as nuances do jogo moderno. Melhor do que qualquer instrutional que comprei online.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#161819]">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Depoimentos</p>
          <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
            Vidas Transformadas
            <span className="block text-[#0C3C78]">No Nosso Tatame</span>
          </h2>
          <p className="text-[#eae8e8]/55 max-w-lg mx-auto leading-relaxed">
            Histórias reais de alunos que encontraram mais do que um esporte — encontraram uma comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-dark p-6">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#F33535] fill-[#F33535]"
                  />
                ))}
              </div>
              <blockquote className="text-[#eae8e8]/70 text-sm leading-relaxed mb-5">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F33535] to-[#0C3C78] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{t.name[0]}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-[#eae8e8]/45">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FREE CLASS CTA ─────────────────────────────────────────────────────────────

function FreeClassCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#B42B3F] via-[#F33535] to-[#0C3C78] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)",
          }}
        />
      </div>
      <div className="container-site relative z-10 text-center">
        <p className="text-white/70 text-sm font-bold uppercase tracking-[0.25em] mb-4">
          Sem Compromisso — Sem Cartão
        </p>
        <h2 className="heading-display text-4xl md:text-6xl text-white mb-5">
          Sua Primeira Aula
          <span className="block">é 100% Gratuita</span>
        </h2>
        <p className="text-white/75 text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Venha conhecer o nosso ambiente, nossos professores e experimentar o Jiu-Jitsu sem nenhum
          compromisso financeiro. Acreditamos que uma aula fala mais do que mil palavras.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/comece-agora"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#B42B3F] font-bold text-base uppercase tracking-wider px-8 py-4 rounded-md hover:bg-[#eae8e8] transition-colors"
          >
            Agendar Agora
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/5511999999999?text=Ola!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold text-base uppercase tracking-wider px-8 py-4 rounded-md border-2 border-white/40 hover:border-white/80 hover:bg-white/10 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ── INSTRUCTORS PREVIEW ────────────────────────────────────────────────────────

function InstructorsPreview() {
  const instructors = [
    {
      name: "Prof. Alexandre Silva",
      belt: "Faixa Preta — 4° Grau",
      role: "Fundador & Head Coach",
      bio: "Mais de 20 anos de tatame. Campeão brasileiro por equipe e formado pela Alliance. Sua metodologia equilibra alto rendimento com pedagogia acessível a todos.",
      specialties: ["Guarda Aberta", "Leg Locks", "Competição IBJJF"],
    },
    {
      name: "Prof. Lucas Ramos",
      belt: "Faixa Preta — 2° Grau",
      role: "Coordenador Técnico & Kids",
      bio: "Especialista em jiu-jitsu infantil com formação em Educação Física. Mais de 200 alunos graduados no programa Kids. Referência em desenvolvimento motor na arte suave.",
      specialties: ["Kids & Teens", "Pedagogia Marcial", "Fundamentos"],
    },
    {
      name: "Prof.ª Renata Viana",
      belt: "Faixa Preta — 1° Grau",
      role: "Coordenadora do Programa Feminino",
      bio: "Pioneira no cenário feminino do BJJ no Brasil. Medalhista mundial e referência em empoderamento feminino através das artes marciais. Cria guerreiras dentro e fora do tatame.",
      specialties: ["Programa Feminino", "Autodefesa", "Competição Feminina"],
    },
  ];

  return (
    <section className="py-24 bg-[#0e1012]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-3">Nossos Professores</p>
            <h2 className="heading-display text-4xl md:text-5xl text-white">
              Aprenda com
              <span className="block text-[#0C3C78]">os Melhores</span>
            </h2>
          </div>
          <Link
            href="/sobre#instrutores"
            className="flex items-center gap-2 text-sm font-bold text-[#eae8e8]/60 hover:text-white uppercase tracking-wider transition-colors whitespace-nowrap"
          >
            Ver Todos os Instrutores
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instructors.map((inst) => (
            <div key={inst.name} className="card-dark overflow-hidden group">
              {/* Color banner */}
              <div className="h-2 bg-gradient-to-r from-[#F33535] to-[#0C3C78]" />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F33535]/20 to-[#0C3C78]/20 border border-white/8 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-black text-white">{inst.name.split(" ")[1][0]}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white leading-tight">{inst.name}</h3>
                    <span className="text-xs text-[#F33535] font-semibold">{inst.belt}</span>
                    <div className="text-xs text-[#eae8e8]/50 mt-0.5">{inst.role}</div>
                  </div>
                </div>
                <p className="text-[#eae8e8]/60 text-sm leading-relaxed mb-4">{inst.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {inst.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 bg-[#0C3C78]/20 text-[#eae8e8]/60 rounded-full border border-[#0C3C78]/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SCHEDULE PREVIEW ──────────────────────────────────────────────────────────

function SchedulePreview() {
  const schedule = [
    { time: "06:00 – 07:30", class: "Fundamentos", type: "iniciantes" },
    { time: "07:30 – 09:00", class: "Avançado / Pro Training", type: "avancado" },
    { time: "10:00 – 11:00", class: "Kids (4–10 anos)", type: "kids" },
    { time: "11:00 – 12:00", class: "Teens (11–15 anos)", type: "kids" },
    { time: "12:00 – 13:00", class: "Almoço — Fundamentos", type: "iniciantes" },
    { time: "18:00 – 19:00", class: "Feminino (Todos os níveis)", type: "feminino" },
    { time: "19:00 – 20:30", class: "Fundamentos", type: "iniciantes" },
    { time: "20:30 – 22:00", class: "Avançado + No-Gi", type: "avancado" },
  ];

  const typeColors: Record<string, string> = {
    iniciantes: "bg-[#0C3C78]/20 text-[#4a90d9] border-[#0C3C78]/30",
    avancado: "bg-[#F33535]/10 text-[#F33535] border-[#F33535]/20",
    kids: "bg-emerald-900/20 text-emerald-400 border-emerald-800/30",
    feminino: "bg-purple-900/20 text-purple-300 border-purple-800/30",
  };

  return (
    <section className="py-24 bg-[#161819]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="section-label mb-3">Grade de Horários</p>
            <h2 className="heading-display text-4xl md:text-5xl text-white">
              Treine no Seu
              <span className="block text-[#F33535]">Melhor Horário</span>
            </h2>
          </div>
          <Link
            href="/horarios"
            className="flex items-center gap-2 text-sm font-bold text-[#eae8e8]/60 hover:text-white uppercase tracking-wider transition-colors whitespace-nowrap"
          >
            Grade Completa
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="bg-[#0e1012] rounded-xl border border-white/5 overflow-hidden">
          <div className="p-4 bg-[#233039]/50 border-b border-white/5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#eae8e8]/50">
              Horários de Segunda a Sexta
            </span>
          </div>
          <div className="divide-y divide-white/5">
            {schedule.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-5 py-4 hover:bg-white/2 transition-colors group"
              >
                <span className="text-sm font-mono font-bold text-[#eae8e8]/60 w-28 flex-shrink-0 group-hover:text-white transition-colors">
                  {item.time}
                </span>
                <span className="text-sm font-semibold text-[#eae8e8]/85 flex-1">{item.class}</span>
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${typeColors[item.type]}`}
                >
                  {item.type === "avancado"
                    ? "Avançado"
                    : item.type === "iniciantes"
                    ? "Iniciantes"
                    : item.type === "feminino"
                    ? "Feminino"
                    : "Kids"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-[#eae8e8]/35 mt-3 text-center">
          * Horários de sábado disponíveis na grade completa. Sujeito a alterações.
        </p>
      </div>
    </section>
  );
}

// ── VIDEO PLACEHOLDER ─────────────────────────────────────────────────────────

function VideoSection() {
  return (
    <section className="py-20 bg-[#0e1012]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">A ALS em Ação</p>
            <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
              Conheça Nossa
              <span className="block text-[#F33535]">Estrutura</span>
            </h2>
            <p className="text-[#eae8e8]/60 leading-relaxed mb-6">
              Tatames oficiais de alta densidade, vestiários completos, academia de musculação integrada
              e salas climatizadas. Um ambiente projetado para a máxima performance e conforto dos nossos alunos.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "600m² de área de treinamento",
                "4 tatames de judo certificados (IBJJF)",
                "Academia de musculação e funcional",
                "Vestiários completos com sauna",
                "Sala de análise de vídeo",
                "Estacionamento gratuito",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#eae8e8]/70">
                  <CheckCircle2 size={16} className="text-[#0C3C78] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/sobre#estrutura" className="btn-blue">
              Tour Virtual da Academia
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Video placeholder */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-[#233039] border border-white/8 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F33535]/20 to-[#0C3C78]/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-18 h-18 rounded-full bg-[#F33535]/90 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-2xl shadow-[#F33535]/30">
                <Play size={30} className="text-white ml-1" fill="white" />
              </div>
              <p className="text-white/80 font-semibold text-sm tracking-wide">Assista ao Tour da ALS</p>
              <p className="text-white/40 text-xs mt-1">2:34 min</p>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="h-1 bg-white/10 rounded-full">
                <div className="h-full w-0 bg-[#F33535] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ProgramsPreviewSection />
      <InstructorsPreview />
      <TestimonialsSection />
      <SchedulePreview />
      <VideoSection />
      <FreeClassCTA />
    </>
  );
}
