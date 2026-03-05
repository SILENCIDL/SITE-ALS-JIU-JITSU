import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Heart, Shield, Target, Users, CheckCircle2, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "A Escola | ALS Jiu-Jitsu",
  description:
    "Conheça a história, os instrutores e a estrutura da ALS Escola de Jiu-Jitsu. Uma instituição de excelência construída sobre tradição, técnica e comunidade.",
};

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#0e1012] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0C3C78]/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F33535]/5 rounded-full blur-3xl" />
      </div>
      <div className="container-site relative z-10">
        <p className="section-label mb-3">Conheça a ALS</p>
        <h1 className="heading-display text-5xl md:text-7xl text-white mb-5">
          A Escola
          <span className="block text-[#0C3C78]">Que Forma</span>
          <span className="block text-[#F33535]">Campeões</span>
        </h1>
        <p className="text-[#eae8e8]/60 text-lg max-w-2xl leading-relaxed">
          Uma história construída tatame por tatame, faixa por faixa. Conheça quem somos, o que acreditamos
          e por que centenas de alunos escolhem a ALS como seu lar marcial.
        </p>
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section id="historia" className="py-24 bg-[#161819] scroll-mt-20">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Nossa História</p>
            <h2 className="heading-display text-4xl md:text-5xl text-white mb-6">
              De um Tatame
              <span className="block text-[#F33535]">Para um Movimento</span>
            </h2>
            <div className="space-y-5 text-[#eae8e8]/65 leading-relaxed">
              <p>
                A ALS Escola de Jiu-Jitsu nasceu de uma convicção simples e poderosa: o Jiu-Jitsu Brasileiro
                transforma vidas. Fundada pelo Professor Alexandre Silva após mais de duas décadas de prática
                e competição, a escola foi concebida para ser um polo de excelência técnica acessível a todos.
              </p>
              <p>
                Nos primeiros anos, a ALS operava em um espaço modesto com uma única turma. A filosofia,
                porém, sempre foi de alto padrão: professores certificados, metodologia estruturada e um
                ambiente de respeito absoluto. A reputação construída boca a boca transformou aquele espaço
                inicial numa das academias de referência da cidade.
              </p>
              <p>
                Hoje, com mais de 800 alunos ativos, programas para todas as idades e níveis, e uma sala de
                campeões que inclui titulados em campeonatos nacionais e internacionais, a ALS mantém a mesma
                chama que a originou: a paixão por ensinar e transformar através do tatame.
              </p>
              <p>
                O projeto social da ALS oferece bolsas integrais para jovens em situação de vulnerabilidade,
                combinando alto rendimento esportivo com impacto social real. Acreditamos que um campeão
                no tatame deve ser um cidadão exemplar fora dele.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/8">
              {[
                { value: "2009", label: "Fundação" },
                { value: "15+", label: "Anos de Tradição" },
                { value: "50+", label: "Bolsas Sociais" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-[#F33535]">{stat.value}</div>
                  <div className="text-xs text-[#eae8e8]/50 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#F33535] via-[#0C3C78] to-transparent" />
            <div className="space-y-8 pl-10">
              {[
                {
                  year: "2009",
                  title: "Fundação da ALS",
                  desc: "Prof. Alexandre Silva abre as portas com 30 alunos e a missão de levar o Jiu-Jitsu de excelência para todos.",
                },
                {
                  year: "2012",
                  title: "Primeiro Título Nacional",
                  desc: "Alunos da ALS conquistam os primeiros títulos em campeonatos nacionais da IBJJF, consolidando a metodologia.",
                },
                {
                  year: "2015",
                  title: "Projeto Social ALS",
                  desc: "Lançamento do programa de bolsas integrais para jovens em situação de vulnerabilidade social.",
                },
                {
                  year: "2018",
                  title: "Nova Sede",
                  desc: "Inauguração das atuais instalações com 600m², 4 tatames certificados e academia integrada.",
                },
                {
                  year: "2021",
                  title: "ALS Online",
                  desc: "Lançamento da plataforma digital de ensino, levando a metodologia ALS para alunos do mundo inteiro.",
                },
                {
                  year: "2024",
                  title: "800+ Alunos Ativos",
                  desc: "Marco histórico de alunos ativos, confirmando a ALS como referência regional e polo de formação.",
                },
              ].map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-10 top-1 w-3 h-3 rounded-full bg-[#F33535] border-2 border-[#161819]" />
                  <span className="text-xs font-bold text-[#F33535] uppercase tracking-widest">{item.year}</span>
                  <h3 className="font-bold text-white mt-0.5 mb-1">{item.title}</h3>
                  <p className="text-sm text-[#eae8e8]/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstructorsSection() {
  const instructors = [
    {
      name: "Prof. Alexandre Silva",
      belt: "Faixa Preta — 4° Grau",
      role: "Fundador & Head Coach",
      lineage: "Linhagem: Mitsuyo Maeda → Hélio Gracie → Rolls Gracie → Romero Cavalcanti (Jacaré) → Alexandre Silva",
      bio: `Com mais de 20 anos de tatame e formado pela Alliance, o Prof. Alexandre Silva combina um histórico competitivo excepcional com uma vocação pedagógica rara. Campeão brasileiro por equipe em múltiplas ocasiões, tornou-se referência não apenas por suas conquistas, mas pela capacidade de adaptar técnicas de alto nível para praticantes de todos os perfis.

Sua metodologia é reconhecida por acelerar o desenvolvimento técnico sem sacrificar a segurança dos alunos. Cada aula é estruturada com objetivos claros, progressão lógica e feedbacks individuais — uma raridade no mercado brasileiro.`,
      achievements: [
        "Campeão Brasileiro CBJJ — 3x",
        "Medalhista Pan-Americano IBJJF",
        "Graduado pela Alliance",
        "Formação em Educação Física (FASM)",
        "Certificação IBJJF de Árbitro",
      ],
      specialties: ["Guarda Aberta", "Leg Locks", "Berimbolo", "Competição IBJJF"],
    },
    {
      name: "Prof. Lucas Ramos",
      belt: "Faixa Preta — 2° Grau",
      role: "Coordenador Técnico & Professor Kids",
      lineage: "Linhagem: Carlos Gracie → Carlson Gracie → Ricardo Libório → Lucas Ramos",
      bio: `Formado em Educação Física com especialização em desenvolvimento motor infantil, o Prof. Lucas Ramos é uma referência nacional no ensino do Jiu-Jitsu para crianças e adolescentes. Com mais de 200 alunos graduados no programa Kids, desenvolveu um currículo exclusivo que adapta as demandas técnicas da arte marcial à psicologia do desenvolvimento infanto-juvenil.

Suas aulas são marcadas pela criatividade pedagógica: cada técnica é apresentada através de desafios e jogos que mantêm as crianças engajadas enquanto absorvem os fundamentos do BJJ sem perceber o esforço.`,
      achievements: [
        "Campeão mundial Kids (como atleta)",
        "Mais de 200 alunos graduados",
        "Pós-graduação em Desenvolvimento Motor",
        "Curso Anti-Bullying (certificado internacional)",
        "10+ anos de docência infantil",
      ],
      specialties: ["Kids & Teens (4–15 anos)", "Pedagogia Marcial", "Fundamentos", "Desenvolvimento Motor"],
    },
    {
      name: "Prof.ª Renata Viana",
      belt: "Faixa Preta — 1° Grau",
      role: "Coordenadora do Programa Feminino",
      lineage: "Linhagem: Hélio Gracie → Rickson Gracie → Maurição → Renata Viana",
      bio: `Pioneira no movimento feminino do BJJ no Brasil, a Prof.ª Renata Viana iniciou sua jornada quando o Jiu-Jitsu feminino ainda era considerado exceção. Medalhista em campeonatos mundiais, transformou sua vivência atlética numa missão: criar um ambiente seguro e poderoso para mulheres que desejam aprender a se defender e descobrir força que nunca souberam que tinham.

O programa feminino que ela coordena é reconhecido como modelo nacional, com turmas que crescem continuamente através do boca a boca entre alunas que se tornam embaixadoras orgulhosas da escola.`,
      achievements: [
        "Medalhista Mundial IBJJF — Feminino",
        "Medalhista Pan-Americana IBJJF — Feminino",
        "Fundadora do movimento #BJJParaTodas",
        "Palestrante sobre empoderamento feminino",
        "8+ anos de docência exclusiva feminina",
      ],
      specialties: ["Programa Feminino", "Autodefesa Feminina", "Competição", "Empoderamento"],
    },
    {
      name: "Prof. Diego Monteiro",
      belt: "Faixa Preta — 1° Grau",
      role: "Professor Avançado & No-Gi",
      lineage: "Linhagem: Oswaldo Alves → Guto Campos → Diego Monteiro",
      bio: `Especialista em No-Gi e Submission Grappling, o Prof. Diego Monteiro vivenciou a explosão do grappling moderno de dentro para fora. Com influências do wrestling americano, judô olímpico e Jiu-Jitsu, seu estilo de ensino é dinâmico e contemporâneo.

Responsável por preparar os atletas da ALS para competições de alto nível, incluindo eventos de MMA e Submission Wrestling, Diego combina análise técnica aprofundada com drill de alta repetição para acelerar a fixação de padrões motores complexos.`,
      achievements: [
        "Campeão ADCC Trials Sul-Americano",
        "Medalhista Copa Pódio — No-Gi",
        "Faixa preta de Judô (Kodokan)",
        "Treinador de lutadores profissionais de MMA",
        "Certificação em Wrestling (USA Wrestling)",
      ],
      specialties: ["No-Gi / Submission", "Wrestling", "MMA Ground Game", "Pro Training"],
    },
  ];

  return (
    <section id="instrutores" className="py-24 bg-[#0e1012] scroll-mt-20">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Corpo Docente</p>
          <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
            Instrutores de
            <span className="block text-[#0C3C78]">Classe Mundial</span>
          </h2>
          <p className="text-[#eae8e8]/55 max-w-xl mx-auto leading-relaxed">
            A linhagem importa. Na ALS, você aprende com professores que carregam o legado das maiores
            equipes do mundo e a paixão por transferir esse conhecimento.
          </p>
        </div>

        <div className="space-y-8">
          {instructors.map((inst, idx) => (
            <div
              key={inst.name}
              className={`card-dark overflow-hidden grid grid-cols-1 lg:grid-cols-3 ${
                idx % 2 === 1 ? "lg:grid-flow-col" : ""
              }`}
            >
              {/* Color accent column */}
              <div className="lg:col-span-1 bg-gradient-to-br from-[#233039] to-[#161819] p-8 flex flex-col">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F33535]/20 to-[#0C3C78]/30 border border-white/8 flex items-center justify-center mb-5">
                  <span className="text-3xl font-black text-white">{inst.name.split(" ")[1][0]}</span>
                </div>
                <h3 className="text-xl font-black text-white mb-1">{inst.name}</h3>
                <span className="text-sm font-bold text-[#F33535] mb-1">{inst.belt}</span>
                <p className="text-xs text-[#eae8e8]/50 mb-6">{inst.role}</p>
                <div className="space-y-1.5 mb-6">
                  {inst.achievements.map((a) => (
                    <div key={a} className="flex items-start gap-2">
                      <Award size={12} className="text-[#F33535] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-[#eae8e8]/60">{a}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
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

              {/* Bio column */}
              <div className="lg:col-span-2 p-8">
                <p className="text-xs text-[#0C3C78] font-bold uppercase tracking-widest mb-5 leading-relaxed">
                  {inst.lineage}
                </p>
                <div className="space-y-4 text-[#eae8e8]/65 text-sm leading-relaxed">
                  {inst.bio.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
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

function StructureSection() {
  const features = [
    {
      icon: Target,
      title: "4 Tatames Certificados IBJJF",
      desc: "Tatames de alta densidade homologados pela International Brazilian Jiu-Jitsu Federation para treino e competição.",
    },
    {
      icon: Shield,
      title: "600m² de Área de Treino",
      desc: "Espaço amplo e ventilado que permite turmas dinâmicas sem aglomeração, priorizando a segurança e o conforto.",
    },
    {
      icon: Users,
      title: "Academia de Musculação Integrada",
      desc: "Sala de força e condicionamento específica para atletas de jiu-jitsu, com equipamentos de alta performance.",
    },
    {
      icon: Heart,
      title: "Sala de Análise de Vídeo",
      desc: "Tecnologia a serviço do desenvolvimento técnico. Analisamos o jogo de cada atleta com câmeras e software dedicado.",
    },
    {
      icon: Award,
      title: "Vestiários Completos + Sauna",
      desc: "Infraestrutura completa com armários individuais, chuveiros quentes, sauna seca e área de relaxamento.",
    },
    {
      icon: CheckCircle2,
      title: "Estacionamento Gratuito",
      desc: "Facilidade de acesso com estacionamento privativo para todos os alunos, sem custo adicional.",
    },
  ];

  return (
    <section id="estrutura" className="py-24 bg-[#161819] scroll-mt-20">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Estrutura Física</p>
          <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
            Infraestrutura
            <span className="block text-[#F33535]">de Alto Nível</span>
          </h2>
          <p className="text-[#eae8e8]/55 max-w-xl mx-auto leading-relaxed">
            Para treinar no mais alto nível, o ambiente precisa estar à altura. A ALS investe
            continuamente numa estrutura que suporta tanto o iniciante como o atleta profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card-dark p-7 group">
              <div className="w-12 h-12 rounded-lg bg-[#0C3C78]/15 flex items-center justify-center mb-5 group-hover:bg-[#0C3C78]/25 transition-colors">
                <f.icon size={22} className="text-[#0C3C78]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-[#eae8e8]/55 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      symbol: "道",
      reading: "Dō",
      title: "O Caminho",
      description:
        "O Jiu-Jitsu é uma jornada sem fim. Valorizamos o processo acima do resultado, o crescimento diário acima do troféu momentâneo. Cada aula é uma oportunidade de se tornar um pouco melhor.",
    },
    {
      symbol: "礼",
      reading: "Rei",
      title: "Respeito",
      description:
        "No tatame e fora dele. Respeitamos nossos mestres, nossos colegas de treino e a arte que praticamos. O protocolo do dojo é a expressão física de um código de conduta que carregamos para a vida.",
    },
    {
      symbol: "忍",
      reading: "Nin",
      title: "Perseverança",
      description:
        "Todo grande praticante conheceu a vontade de desistir. A ALS acredita que a persistência no tatame é o treino mais importante de todos — mais valioso do que qualquer técnica.",
    },
    {
      symbol: "仁",
      reading: "Jin",
      title: "Humanidade",
      description:
        "A força técnica adquirida no Jiu-Jitsu deve ser usada para proteger, nunca para destruir. Formamos atletas que são também cidadãos responsáveis, empáticos e solidários.",
    },
  ];

  return (
    <section id="valores" className="py-24 bg-[#0e1012] scroll-mt-20">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Filosofia e Valores</p>
          <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
            Os Pilares que
            <span className="block text-[#0C3C78]">Nos Sustentam</span>
          </h2>
          <p className="text-[#eae8e8]/55 max-w-xl mx-auto leading-relaxed">
            O Jiu-Jitsu é mais do que técnica. É uma filosofia de vida que a ALS abraça e transmite
            a cada aluno que entra no nosso tatame.
          </p>
        </div>

        {/* Quote */}
        <div className="bg-[#233039] rounded-xl p-8 md:p-12 mb-14 text-center relative overflow-hidden">
          <Quote size={48} className="text-[#F33535]/20 absolute top-6 left-6" />
          <Quote size={48} className="text-[#F33535]/20 absolute bottom-6 right-6 rotate-180" />
          <blockquote className="text-2xl md:text-3xl font-black text-white leading-tight max-w-3xl mx-auto mb-4">
            "A água não tem forma própria — adapta-se a qualquer recipiente. Seja como a água."
          </blockquote>
          <cite className="text-[#eae8e8]/50 text-sm font-medium">
            — Filosofia do Jiu-Jitsu Brasileiro
          </cite>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="card-dark p-7 text-center group">
              <div className="text-6xl font-black text-[#F33535]/20 group-hover:text-[#F33535]/35 transition-colors mb-2">
                {v.symbol}
              </div>
              <div className="text-xs text-[#F33535] font-bold uppercase tracking-widest mb-2">
                {v.reading}
              </div>
              <h3 className="font-black text-white text-lg mb-3">{v.title}</h3>
              <p className="text-sm text-[#eae8e8]/55 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="py-20 bg-[#161819]">
      <div className="container-site text-center">
        <p className="section-label mb-3">Próximo Passo</p>
        <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
          Agora Você Nos Conhece.
          <span className="block text-[#F33535]">Venha Nos Visitar.</span>
        </h2>
        <p className="text-[#eae8e8]/60 max-w-xl mx-auto leading-relaxed mb-10">
          Uma aula experimental gratuita vale mais do que todas as palavras desta página.
          Agende, venha, e sinta a diferença de treinar num lugar feito para o seu desenvolvimento.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/comece-agora" className="btn-primary text-base px-8 py-4">
            Agendar Aula Gratuita <ArrowRight size={18} />
          </Link>
          <Link href="/programas" className="btn-secondary text-base px-8 py-4">
            Ver Programas de Treino
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function SobrePage() {
  return (
    <>
      <PageHero />
      <HistorySection />
      <InstructorsSection />
      <StructureSection />
      <ValuesSection />
      <AboutCTA />
    </>
  );
}
