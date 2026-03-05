import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Shield,
  Star,
  Zap,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Programas de Treino | ALS Jiu-Jitsu",
  description:
    "Programas de Jiu-Jitsu para todos os níveis e idades: Iniciantes, Avançado, Kids & Teens, Feminino, No-Gi e Defesa Pessoal. Encontre o programa ideal para você na ALS.",
};

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#0e1012] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F33535]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0C3C78]/8 rounded-full blur-3xl" />
      </div>
      <div className="container-site relative z-10">
        <p className="section-label mb-3">Programas de Treino</p>
        <h1 className="heading-display text-5xl md:text-7xl text-white mb-5">
          Existe um Programa
          <span className="block text-[#F33535]">Para Você</span>
        </h1>
        <p className="text-[#eae8e8]/60 text-lg max-w-2xl leading-relaxed mb-8">
          Da primeira aula ao tatame de competição, a ALS tem uma estrutura pedagógica pensada para
          acolher iniciantes com segurança e desafiar atletas experientes ao seu máximo potencial.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Iniciantes", href: "#iniciantes" },
            { label: "Avançado", href: "#avancado" },
            { label: "Kids & Teens", href: "#kids" },
            { label: "Feminino", href: "#feminino" },
            { label: "No-Gi", href: "#no-gi" },
            { label: "Defesa Pessoal", href: "#defesa" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold px-4 py-2 rounded-full bg-[#233039] text-[#eae8e8]/70 hover:bg-[#F33535]/10 hover:text-[#F33535] border border-white/8 hover:border-[#F33535]/30 transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProgramProps {
  id: string;
  icon: React.ReactNode;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  description: string[];
  forWho: string;
  highlights: string[];
  expectations: string[];
  accentColor: string;
  reverse?: boolean;
}

function ProgramBlock({
  id,
  icon,
  tag,
  tagColor,
  title,
  subtitle,
  description,
  forWho,
  highlights,
  expectations,
  accentColor,
  reverse,
}: ProgramProps) {
  return (
    <section
      id={id}
      className={`py-20 scroll-mt-20 ${reverse ? "bg-[#0e1012]" : "bg-[#161819]"}`}
    >
      <div className="container-site">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className={reverse ? "lg:order-2" : ""}>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${tagColor}`}>
              {icon}
              {tag}
            </div>
            <h2 className="heading-display text-4xl md:text-5xl text-white mb-2">{title}</h2>
            <p className={`text-lg font-bold mb-6 ${accentColor}`}>{subtitle}</p>

            <div className="space-y-4 text-[#eae8e8]/65 text-sm leading-relaxed mb-8">
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="bg-[#233039] rounded-lg p-5 mb-6 border-l-4 border-[#F33535]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F33535] mb-2">
                Para quem é este programa?
              </p>
              <p className="text-sm text-[#eae8e8]/75 leading-relaxed">{forWho}</p>
            </div>

            <Link href="/comece-agora" className="btn-primary">
              Começar Neste Programa
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={reverse ? "lg:order-1" : ""}>
            <div className="space-y-4">
              <div className="card-dark p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#eae8e8]/60 mb-4">
                  O que você aprenderá
                </h3>
                <ul className="space-y-2.5">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-[#eae8e8]/75">
                      <CheckCircle2 size={15} className="text-[#F33535] mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-dark p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#eae8e8]/60 mb-4">
                  O que esperar nas aulas
                </h3>
                <ul className="space-y-2.5">
                  {expectations.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-sm text-[#eae8e8]/75">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0C3C78] mt-1.5 flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeltSystemSection() {
  const belts = [
    { name: "Faixa Branca", color: "bg-white", textColor: "text-gray-900", time: "0–2 anos", desc: "Fundamentos, posições e defesa básica." },
    { name: "Faixa Azul", color: "bg-blue-600", textColor: "text-white", time: "2–4 anos", desc: "Jogo completo em desenvolvimento, competição inicial." },
    { name: "Faixa Roxa", color: "bg-purple-700", textColor: "text-white", time: "4–6 anos", desc: "Técnica refinada, jogo pessoal definido." },
    { name: "Faixa Marrom", color: "bg-amber-800", textColor: "text-white", time: "6–8 anos", desc: "Proficiência avançada, instrutor em formação." },
    { name: "Faixa Preta", color: "bg-gray-900 border border-white/20", textColor: "text-white", time: "8+ anos", desc: "Maestria técnica e pedagógica. Uma jornada de vida." },
  ];

  return (
    <section className="py-20 bg-[#161819]">
      <div className="container-site">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Progressão</p>
          <h2 className="heading-display text-4xl text-white mb-4">
            O Sistema de <span className="text-[#F33535]">Faixas</span>
          </h2>
          <p className="text-[#eae8e8]/55 max-w-lg mx-auto leading-relaxed">
            Cada faixa representa anos de dedicação, suor e crescimento pessoal. Na ALS, as graduações são
            conquistadas com rigor e celebradas com orgulho.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-center items-stretch max-w-4xl mx-auto">
          {belts.map((belt, i) => (
            <div
              key={belt.name}
              className="flex-1 card-dark p-5 flex flex-col items-center text-center group"
            >
              <div className={`w-full h-2 rounded-full ${belt.color} mb-4 shadow-lg`} />
              <div className="text-2xl font-black text-white mb-1">{i + 1}°</div>
              <div className="font-bold text-white text-sm mb-1">{belt.name.replace("Faixa ", "")}</div>
              <div className="text-xs text-[#F33535] font-semibold mb-2">{belt.time}</div>
              <p className="text-xs text-[#eae8e8]/50 leading-relaxed">{belt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsCTA() {
  return (
    <section className="py-20 bg-[#0e1012]">
      <div className="container-site text-center">
        <p className="section-label mb-3">Dúvidas?</p>
        <h2 className="heading-display text-4xl text-white mb-4">
          Não Sabe Por Onde <span className="text-[#F33535]">Começar?</span>
        </h2>
        <p className="text-[#eae8e8]/60 max-w-xl mx-auto leading-relaxed mb-10">
          Agende uma conversa gratuita com um de nossos consultores. Analisaremos seu perfil, objetivos
          e indicaremos o programa ideal para você começar com o pé direito.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/comece-agora" className="btn-primary text-base px-8 py-4">
            Falar com um Consultor
            <ArrowRight size={18} />
          </Link>
          <Link href="/horarios" className="btn-secondary text-base px-8 py-4">
            Ver Grade de Horários
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ProgramasPage() {
  return (
    <>
      <PageHero />

      <ProgramBlock
        id="iniciantes"
        icon={<Star size={12} />}
        tag="Sem Experiência Necessária"
        tagColor="bg-[#0C3C78]/20 text-[#4a90d9] border border-[#0C3C78]/30"
        title="Fundamentos"
        subtitle="A porta de entrada para a arte suave"
        description={[
          "O Programa de Fundamentos foi projetado especificamente para quem nunca pisou num tatame de Jiu-Jitsu — ou para praticantes que desejam consolidar as bases do jogo. Aqui, o foco absoluto é na sua segurança, conforto e progressão gradual.",
          "Nos primeiros três meses, o sparring (treino ao vivo) é introduzido de forma extremamente controlada e orientada. Você aprenderá a cair com segurança, as posições fundamentais do BJJ, saídas básicas de situações de desvantagem e os primeiros ataques de finalização.",
          "Nossas turmas de Fundamentos são mantidas em tamanho reduzido para que cada aluno receba atenção individualizada. Os professores são treinados para identificar e mitigar medos e inseguranças comuns aos iniciantes, criando um ambiente onde perguntas são sempre bem-vindas.",
        ]}
        forWho="Adultos sem nenhuma experiência em artes marciais, pessoas retornando ao jiu-jitsu após longo hiato, praticantes de outras artes marciais que querem aprender o jogo de chão, ou qualquer pessoa que deseje começar de forma segura e estruturada."
        highlights={[
          "Quedas seguras (Ukemi) e movimentação básica no solo",
          "Posições fundamentais: montada, guarda, passagem de guarda",
          "Defesa pessoal aplicada: saídas de estrangulamentos e agarrões",
          "Primeiras finalizações: kimura, americana, triângulo básico",
          "Conceitos de hierarquia de posições e controle",
          "Filosofia e etiqueta do dojo (regras do tatame)",
        ]}
        expectations={[
          "Aulas de 60–90 minutos com aquecimento, técnica e prática orientada",
          "Sparring introdutório controlado a partir do 3º mês",
          "Feedback individual após cada sessão técnica",
          "Turmas com máximo de 20 alunos para atenção personalizada",
          "Ambiente de respeito absoluto — nenhuma humilhação é tolerada",
          "Gradação por graus de faixa branca a cada 3–4 meses de progresso",
        ]}
        accentColor="text-[#0C3C78]"
      />

      <ProgramBlock
        id="avancado"
        icon={<Target size={12} />}
        tag="Faixa Azul ao Preta"
        tagColor="bg-[#F33535]/10 text-[#F33535] border border-[#F33535]/20"
        title="Avançado & Pro Training"
        subtitle="Para os que buscam a excelência sem teto"
        description={[
          "O Programa Avançado é voltado para praticantes com base sólida (faixa azul ou equivalente técnico) que desejam elevar seu jogo a um nível superior. Aqui, a metodologia combina análise técnica aprofundada, drilling de alta repetição e sparring de intensidade progressiva.",
          "As aulas seguem um currículo estruturado semestral que aborda os grandes sistemas de guarda modernos (X-Guard, De La Riva, Spider, Lapela), Leg Locks (heel hooks, kneebars, footlocks), wrestling e sistema de passagem de guarda de pressão e dinâmica.",
          "Para os atletas em preparação para competição (IBJJF, CBJJ, Nationals), existe o módulo Pro Training — sessões de alta intensidade conduzidas pelo Prof. Alexandre e Prof. Diego, com análise de vídeo, plano tático individual e preparação física integrada.",
        ]}
        forWho="Praticantes com faixa azul ou superior, atletas em preparação ativa para competições, praticantes que já dominam os fundamentos e querem desenvolvimento técnico acelerado, ou profissionais de MMA que desejam aprimorar o jogo de chão."
        highlights={[
          "Sistemas completos de guarda aberta e fechada",
          "Leg Lock System — do básico ao heel hook de alto grau",
          "Inversões e transições: berimbolo, kiss of the dragon",
          "Metajogo de competição: pontuação estratégica IBJJF",
          "Wrestling e takedowns para jiu-jitsu",
          "Análise de vídeo do próprio jogo",
        ]}
        expectations={[
          "Sessões de 90–120 minutos de alta intensidade",
          "Sparring com faixas pretas e marrons semanalmente",
          "Drilling intensivo de movimentos complexos",
          "Preparação física integrada ao tatame",
          "Análise tática individual mensalmente",
          "Feedback pós-competição detalhado",
        ]}
        accentColor="text-[#F33535]"
        reverse
      />

      <ProgramBlock
        id="kids"
        icon={<Users size={12} />}
        tag="4 a 15 anos"
        tagColor="bg-emerald-900/20 text-emerald-400 border border-emerald-800/30"
        title="Kids & Teens"
        subtitle="Campeões começam aqui"
        description={[
          "O Programa Kids & Teens da ALS é construído sobre uma convicção pedagógica clara: crianças aprendem Jiu-Jitsu melhor quando a aula parece uma brincadeira estruturada. Através de jogos motores, desafios e dinâmicas em grupo, as técnicas são absorvidas de forma natural e duradoura.",
          "O currículo foi desenvolvido pelo Prof. Lucas Ramos em parceria com profissionais de Educação Física especializados em desenvolvimento motor infantil. Cada faixa etária (4–7, 8–11, 12–15) tem um módulo pedagógico específico, respeitando as janelas de desenvolvimento cognitivo e motor.",
          "Além das técnicas, o programa aborda explicitamente o anti-bullying — ensinando às crianças como reconhecer situações de intimidação, como reagir com assertividade (verbalmente primeiro, fisicamente apenas como último recurso) e como construir a confiança necessária para não serem alvos.",
        ]}
        forWho="Crianças a partir de 4 anos sem nenhuma experiência prévia, crianças com dificuldades de concentração ou disciplina (o jiu-jitsu demonstrou resultados excepcionais nesse contexto), adolescentes buscando condicionamento físico, autodefesa ou competição, e pais que buscam um ambiente de formação de caráter."
        highlights={[
          "Quedas seguras adaptadas ao corpo infantil",
          "Escapes de situações de bullying físico",
          "Fundamentos de guarda, montada e raspagens",
          "Primeiras finalizações seguras (kimura, americana)",
          "Disciplina e etiqueta marcial (respeito, hierarquia)",
          "Trabalho em equipe e gestão de frustrações",
        ]}
        expectations={[
          "Aulas de 45–60 min com ratio professor:aluno máximo de 1:8",
          "Separação por faixa etária para desenvolvimento adequado",
          "Comunicação mensal com os pais sobre progresso",
          "Eventos de graduação celebrados com a família",
          "Ambiente de zero tolerância a qualquer forma de violência",
          "Participação em competições kids acompanhada pelos professores",
        ]}
        accentColor="text-emerald-400"
      />

      <ProgramBlock
        id="feminino"
        icon={<Heart size={12} />}
        tag="Turmas 100% Femininas"
        tagColor="bg-purple-900/20 text-purple-300 border border-purple-800/30"
        title="Feminino"
        subtitle="Força, técnica e irmandade"
        description={[
          "O Programa Feminino da ALS foi criado para remover qualquer barreira de entrada que uma mulher possa sentir ao considerar aprender Jiu-Jitsu. Turmas 100% femininas, conduzidas pela Prof.ª Renata Viana, garantem que o ambiente de aprendizado seja sempre seguro, respeitoso e empoderador.",
          "A metodologia parte de um pressuposto fundamental: toda mulher pode aprender a neutralizar qualquer agressão física através da técnica, independente do tamanho ou força do agressor. Esse princípio — a inteligência sobre a força bruta — é o cerne filosófico do programa.",
          "Além do aspecto técnico, o programa cultiva intencionalmente uma comunidade. Alunas se tornam parceiras de treino, eventualmente amigas e, frequentemente, embaixadoras da escola — trazendo outras mulheres de seu círculo social para experimentar a transformação que elas próprias viveram.",
        ]}
        forWho="Mulheres de qualquer idade e condicionamento físico, sem nenhuma experiência prévia em artes marciais. Especialmente indicado para mulheres que já consideraram artes marciais mas se sentiram intimidadas pelo ambiente misto, mulheres com histórico de violência que buscam empoderamento, e atletas de outros esportes buscando complemento de treino."
        highlights={[
          "Autodefesa prática contra agressores maiores e mais fortes",
          "Posições e finalizações com aplicação em situações reais",
          "Desenvolvimento de confiança corporal e assertividade",
          "Condicionamento físico holístico: força, flexibilidade e cardio",
          "Estratégias de guarda para mulheres (guarda fechada, X-guard)",
          "Preparação para competição IBJJF feminina",
        ]}
        expectations={[
          "Turmas exclusivamente femininas em todos os horários",
          "Ritmo de progressão respeitoso e sem pressão",
          "Eventos exclusivos: workshops, semanas temáticas",
          "Planos familiares para mãe e filha treinando juntas",
          "Rede de suporte entre alunas (grupos e eventos)",
          "Opcional: preparação para competição e self-defense intensivo",
        ]}
        accentColor="text-purple-300"
        reverse
      />

      <ProgramBlock
        id="no-gi"
        icon={<Zap size={12} />}
        tag="Sem Kimono"
        tagColor="bg-amber-900/20 text-amber-300 border border-amber-800/30"
        title="No-Gi / Submission Grappling"
        subtitle="O jiu-jitsu do século XXI"
        description={[
          "O Submission Grappling (No-Gi) é o segmento de crescimento mais acelerado nas artes marciais modernas. Impulsionado pela popularidade do ADCC (Abu Dhabi Combat Club), pelo sucesso do MMA e por eventos como o Combat Jiu-Jitsu, o No-Gi é hoje praticado por milhões de atletas no mundo.",
          "Na ALS, o programa No-Gi é conduzido pelo Prof. Diego Monteiro, especialista com histórico em wrestling, judô e grappling. O currículo combina o jiu-jitsu tradicional com influências do wrestling americano (double leg, sprawl, cradle), técnicas de leg lock modernas e o sistema de neck cranks aprovados em competições específicas.",
          "O No-Gi é essencial para lutadores de MMA, atletas que competem no ADCC ou Copa Pódio No-Gi, e praticantes que desejam desenvolver um jogo mais dinâmico e explosivo, sem a dependência do grip no kimono.",
        ]}
        forWho="Praticantes de jiu-jitsu com base em kimono que querem expandir o jogo, lutadores de MMA que precisam fortalecer o ground game, atletas de wrestling, judô ou sambo em transição para o grappling, e qualquer praticante que queira um treino mais dinâmico e intenso."
        highlights={[
          "Leg Locks completos: heel hook, knee bar, toe hold",
          "Wrestling e takedowns: double leg, single leg, ankle pick",
          "Guillotine system e defesas de queda",
          "Body lock game e transições rápidas",
          "Adaptação do jiu-jitsu de kimono para No-Gi",
          "Regras e estratégias para ADCC e outros eventos",
        ]}
        expectations={[
          "Treinos com rashguard e shorts — sem kimono",
          "Intensidade alta, ritmo de sparring dinâmico",
          "Drilling de técnicas de wrestling adaptado",
          "Análise de combates de referências mundiais (Gordon Ryan, Craig Jones)",
          "Preparação específica para competições de Submission",
          "Integração com o programa de MMA da academia",
        ]}
        accentColor="text-amber-300"
      />

      <ProgramBlock
        id="defesa"
        icon={<Shield size={12} />}
        tag="Aplicação Prática"
        tagColor="bg-red-950/30 text-[#F33535] border border-[#F33535]/25"
        title="Defesa Pessoal"
        subtitle="Técnicas que funcionam na rua"
        description={[
          "O curso de Defesa Pessoal da ALS foi desenvolvido para pessoas que buscam segurança prática no cotidiano — não necessariamente o esporte competitivo. O currículo é baseado nas situações de risco mais comuns e testadas no mundo real: abordagens, tentativas de roubo, agressões físicas e o espaço de conflito próximo.",
          "A metodologia parte da premissa que a melhor defesa é a consciência situacional e a prevenção. Contudo, quando o confronto físico é inevitável, o praticante estará equipado com reflexos condicionados para neutralizar ameaças de forma eficiente e proporcional.",
          "Este programa pode ser realizado em paralelo com qualquer outro da escola ou como curso standalone para quem não tem interesse no aspecto esportivo do jiu-jitsu, mas valoriza a capacidade de se proteger.",
        ]}
        forWho="Executivos e profissionais que transitam em ambientes de risco, mulheres em busca de empoderamento e capacidade de reação, pais que querem ensinar segurança pessoal para filhos adolescentes, profissionais de segurança privada, e qualquer pessoa que queira desenvolver a confiança de saber se defender."
        highlights={[
          "Defesa contra estrangulamentos em pé e no chão",
          "Neutralização de agarrões por trás e pela frente",
          "Defesa contra socos e chutes básicos",
          "Projeções de judô aplicadas à autodefesa",
          "Cenários de múltiplos agressores (princípios básicos)",
          "Consciência situacional e prevenção de conflitos",
        ]}
        expectations={[
          "Módulos de 8 semanas com certificado de conclusão",
          "Sessões práticas em cenários simulados de risco",
          "Nenhum objetivo de competição — foco 100% em aplicação",
          "Disponível como curso avulso ou integrado à mensalidade",
          "Turmas específicas para grupos corporativos",
          "Conteúdo adaptado para diferentes perfis e condicionamentos",
        ]}
        accentColor="text-[#F33535]"
        reverse
      />

      <BeltSystemSection />
      <ProgramsCTA />
    </>
  );
}
