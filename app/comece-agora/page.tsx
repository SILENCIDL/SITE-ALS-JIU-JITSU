"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5;

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  goals: string[];
  program: string;
  preferredTime: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  experience: "",
  goals: [],
  program: "",
  preferredTime: "",
  message: "",
};

const experienceOptions = [
  { value: "none", label: "Nunca pratiquei", desc: "Primeiro contato com jiu-jitsu" },
  { value: "beginner", label: "Menos de 6 meses", desc: "Já fiz algumas aulas" },
  { value: "intermediate", label: "6 meses a 2 anos", desc: "Tenho uma base" },
  { value: "advanced", label: "2 a 5 anos", desc: "Praticante experiente" },
  { value: "expert", label: "5+ anos", desc: "Faixa roxa ou superior" },
];

const goalOptions = [
  { value: "weightloss", label: "Perda de Peso", icon: "🔥" },
  { value: "selfdefense", label: "Defesa Pessoal", icon: "🛡️" },
  { value: "competition", label: "Competição", icon: "🏆" },
  { value: "fitness", label: "Condicionamento Físico", icon: "💪" },
  { value: "confidence", label: "Autoconfiança", icon: "⭐" },
  { value: "social", label: "Socialização / Comunidade", icon: "🤝" },
  { value: "discipline", label: "Disciplina (para filho/a)", icon: "🎯" },
  { value: "stress", label: "Alívio de Estresse", icon: "🧘" },
];

const programOptions = [
  { value: "iniciantes", label: "Iniciantes / Fundamentos", desc: "Para quem está começando" },
  { value: "avancado", label: "Avançado / Pro Training", desc: "Faixa azul ou superior" },
  { value: "kids", label: "Kids & Teens", desc: "4 a 15 anos" },
  { value: "feminino", label: "Feminino", desc: "Turmas exclusivamente femininas" },
  { value: "no-gi", label: "No-Gi / Submission", desc: "Sem kimono" },
  { value: "defesa", label: "Defesa Pessoal", desc: "Aplicação prática" },
  { value: "unsure", label: "Não sei ainda", desc: "Me ajude a decidir" },
];

const timeOptions = [
  { value: "morning", label: "Manhã (06:00 – 10:00)" },
  { value: "lunch", label: "Almoço (12:00 – 14:00)" },
  { value: "afternoon", label: "Tarde (14:00 – 18:00)" },
  { value: "evening", label: "Noite (18:00 – 22:00)" },
  { value: "flexible", label: "Horário Flexível" },
  { value: "saturday", label: "Sábado" },
];

function StepIndicator({ current, total }: { current: Step; total: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`rounded-full transition-all duration-300 ${
              i + 1 < current
                ? "w-6 h-6 bg-[#F33535] flex items-center justify-center"
                : i + 1 === current
                ? "w-6 h-6 bg-[#F33535] ring-2 ring-[#F33535]/30"
                : "w-2 h-2 bg-white/15"
            }`}
          >
            {i + 1 < current && (
              <CheckCircle2 size={12} className="text-white" />
            )}
          </div>
          {i < total - 1 && (
            <div
              className={`h-px transition-all duration-300 ${
                i + 1 < current ? "bg-[#F33535] w-8" : "bg-white/15 w-8"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function ComeceAgoraPage() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleGoal = (value: string) => {
    setForm((f) => ({
      ...f,
      goals: f.goals.includes(value)
        ? f.goals.filter((g) => g !== value)
        : [...f.goals, value],
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const canNext = (): boolean => {
    if (step === 1) return form.name.trim().length > 1 && form.email.includes("@");
    if (step === 2) return form.experience !== "";
    if (step === 3) return form.goals.length > 0;
    if (step === 4) return form.program !== "" && form.preferredTime !== "";
    return true;
  };

  const stepLabels = ["Identificação", "Experiência", "Objetivos", "Programa", "Confirmação"];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0e1012] flex items-center justify-center pt-20">
        <div className="container-site max-w-xl text-center py-20">
          <div className="w-20 h-20 rounded-full bg-[#F33535]/10 border-2 border-[#F33535]/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-[#F33535]" />
          </div>
          <h2 className="heading-display text-4xl text-white mb-4">
            Solicitação Confirmada!
          </h2>
          <p className="text-[#eae8e8]/65 leading-relaxed mb-8">
            Olá, <strong className="text-white">{form.name.split(" ")[0]}</strong>! Recebemos sua solicitação e
            entraremos em contato em até{" "}
            <strong className="text-[#F33535]">2 horas</strong> para confirmar o agendamento da sua aula
            experimental gratuita.
          </p>
          <div className="bg-[#233039] rounded-xl p-6 text-left mb-8 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#eae8e8]/50">Nome</span>
              <span className="text-white font-medium">{form.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#eae8e8]/50">E-mail</span>
              <span className="text-white font-medium">{form.email}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#eae8e8]/50">Programa</span>
              <span className="text-white font-medium">
                {programOptions.find((p) => p.value === form.program)?.label ?? form.program}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#eae8e8]/50">Horário preferido</span>
              <span className="text-white font-medium">
                {timeOptions.find((t) => t.value === form.preferredTime)?.label ?? form.preferredTime}
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/5511999999999?text=Oi!%20Sou%20${encodeURIComponent(form.name)}%20e%20acabei%20de%20preencher%20o%20formulario%20para%20a%20aula%20experimental.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Confirmar pelo WhatsApp
              <ArrowRight size={16} />
            </a>
            <Link href="/" className="btn-secondary">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-10 bg-[#0e1012] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F33535]/5 to-[#0C3C78]/5" />
        </div>
        <div className="container-site relative z-10">
          <div className="max-w-2xl">
            <p className="section-label mb-3">Comece Agora</p>
            <h1 className="heading-display text-4xl md:text-6xl text-white mb-4">
              Sua Primeira Aula
              <span className="block text-[#F33535]">é Gratuita</span>
            </h1>
            <p className="text-[#eae8e8]/60 leading-relaxed">
              Responda 5 perguntas rápidas. Nosso time usará suas respostas para preparar a melhor
              experiência de primeira aula possível para você.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-10 bg-[#0e1012] min-h-[60vh]">
        <div className="container-site max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <StepIndicator current={step} total={5} />
              <span className="text-xs text-[#eae8e8]/40 font-mono">
                {step} / 5
              </span>
            </div>
            <div className="flex gap-2">
              {stepLabels.map((label, i) => (
                <span
                  key={label}
                  className={`text-xs font-semibold transition-colors ${
                    i + 1 === step
                      ? "text-[#F33535]"
                      : i + 1 < step
                      ? "text-[#eae8e8]/50"
                      : "text-[#eae8e8]/20"
                  }`}
                >
                  {i === 0 ? label : `• ${label}`}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#161819] border border-white/8 rounded-2xl p-7 md:p-10">
            {/* Step 1: Identity */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-black text-white mb-1">Quem é você?</h2>
                <p className="text-[#eae8e8]/55 text-sm mb-8">
                  Precisamos de alguns dados básicos para o agendamento.
                </p>
                <div className="space-y-5">
                  <div>
                    <label className="form-label">
                      <User size={12} className="inline mr-1" />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Seu nome completo"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">
                      <Mail size={12} className="inline mr-1" />
                      E-mail *
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">
                      <Phone size={12} className="inline mr-1" />
                      Celular / WhatsApp
                    </label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="(11) 99999-9999"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    <p className="text-xs text-[#eae8e8]/30 mt-1.5">
                      Usado para confirmação rápida pelo WhatsApp. Opcional.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Experience */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-black text-white mb-1">Qual é sua experiência?</h2>
                <p className="text-[#eae8e8]/55 text-sm mb-8">
                  Isso nos ajuda a colocar você na turma certa desde o primeiro dia.
                </p>
                <div className="space-y-3">
                  {experienceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setForm({ ...form, experience: opt.value })}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        form.experience === opt.value
                          ? "border-[#F33535] bg-[#F33535]/10"
                          : "border-white/8 bg-[#233039]/30 hover:border-white/20"
                      }`}
                    >
                      <div className="font-bold text-white text-sm">{opt.label}</div>
                      <div className="text-xs text-[#eae8e8]/50 mt-0.5">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Goals */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-black text-white mb-1">Quais são seus objetivos?</h2>
                <p className="text-[#eae8e8]/55 text-sm mb-8">
                  Selecione todos que se aplicam. Isso personaliza sua jornada na ALS.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {goalOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => toggleGoal(opt.value)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        form.goals.includes(opt.value)
                          ? "border-[#F33535] bg-[#F33535]/10"
                          : "border-white/8 bg-[#233039]/30 hover:border-white/20"
                      }`}
                    >
                      <div className="text-xl mb-1">{opt.icon}</div>
                      <div className="font-semibold text-white text-xs">{opt.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Program + Time */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-black text-white mb-1">Programa e horário</h2>
                <p className="text-[#eae8e8]/55 text-sm mb-8">
                  Qual programa você tem interesse e qual é o melhor horário para você?
                </p>
                <div className="mb-7">
                  <label className="form-label mb-3 block">Programa de interesse *</label>
                  <div className="space-y-2">
                    {programOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setForm({ ...form, program: opt.value })}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                          form.program === opt.value
                            ? "border-[#F33535] bg-[#F33535]/10"
                            : "border-white/8 bg-[#233039]/30 hover:border-white/20"
                        }`}
                      >
                        <div>
                          <div className="font-bold text-white text-sm">{opt.label}</div>
                          <div className="text-xs text-[#eae8e8]/50">{opt.desc}</div>
                        </div>
                        {form.program === opt.value && (
                          <CheckCircle2 size={16} className="text-[#F33535] flex-shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="form-label mb-3 block">Horário preferido *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setForm({ ...form, preferredTime: opt.value })}
                        className={`text-left p-3 rounded-xl border text-sm font-semibold transition-all ${
                          form.preferredTime === opt.value
                            ? "border-[#F33535] bg-[#F33535]/10 text-white"
                            : "border-white/8 bg-[#233039]/30 text-[#eae8e8]/70 hover:border-white/20"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Review */}
            {step === 5 && (
              <div>
                <h2 className="text-2xl font-black text-white mb-1">Tudo certo!</h2>
                <p className="text-[#eae8e8]/55 text-sm mb-8">
                  Revise suas informações antes de confirmar o agendamento.
                </p>
                <div className="bg-[#233039] rounded-xl p-5 space-y-4 mb-6">
                  {[
                    { label: "Nome", value: form.name },
                    { label: "E-mail", value: form.email },
                    { label: "Celular", value: form.phone || "Não informado" },
                    {
                      label: "Experiência",
                      value: experienceOptions.find((o) => o.value === form.experience)?.label,
                    },
                    {
                      label: "Objetivos",
                      value: form.goals
                        .map((g) => goalOptions.find((o) => o.value === g)?.label)
                        .join(", "),
                    },
                    {
                      label: "Programa",
                      value: programOptions.find((o) => o.value === form.program)?.label,
                    },
                    {
                      label: "Horário",
                      value: timeOptions.find((o) => o.value === form.preferredTime)?.label,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-4 text-sm">
                      <span className="text-[#eae8e8]/50 flex-shrink-0">{item.label}</span>
                      <span className="text-white font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <label className="form-label">
                    <MessageSquare size={12} className="inline mr-1" />
                    Mensagem adicional (opcional)
                  </label>
                  <textarea
                    className="form-input resize-none"
                    rows={3}
                    placeholder="Alguma dúvida ou informação adicional que queira compartilhar?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <p className="text-xs text-[#eae8e8]/35 mt-4 leading-relaxed">
                  Ao enviar, você concorda com nossa{" "}
                  <Link href="/privacidade" className="text-[#0C3C78] hover:underline">
                    Política de Privacidade
                  </Link>
                  . Não enviamos spam. Seus dados são usados exclusivamente para o agendamento.
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-7 border-t border-white/8">
              {step > 1 ? (
                <button
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  className="flex items-center gap-2 text-sm font-semibold text-[#eae8e8]/60 hover:text-white transition-colors"
                >
                  <ArrowLeft size={16} />
                  Voltar
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  onClick={() => setStep((s) => (s + 1) as Step)}
                  disabled={!canNext()}
                  className={`btn-primary ${!canNext() ? "opacity-40 cursor-not-allowed hover:transform-none hover:shadow-none" : ""}`}
                >
                  Próximo
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="btn-primary min-w-[200px] justify-center"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </div>
                  ) : (
                    <>
                      Confirmar Agendamento
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* WhatsApp alternative */}
          <div className="mt-8 text-center">
            <p className="text-sm text-[#eae8e8]/40 mb-3">Prefere falar diretamente?</p>
            <a
              href="https://wa.me/5511999999999?text=Ola!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20na%20ALS%20Jiu-Jitsu."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-lg px-5 py-3 text-sm font-semibold hover:bg-[#25D366]/20 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar pelo WhatsApp Agora
            </a>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 bg-[#0e1012] border-t border-white/5">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: "🎯",
                title: "Sem Pressão de Vendas",
                desc: "A aula experimental é realmente gratuita. Nenhum compromisso de matrícula.",
              },
              {
                icon: "⚡",
                title: "Resposta em até 2h",
                desc: "Nossa equipe confirma o agendamento rapidamente, inclusive no WhatsApp.",
              },
              {
                icon: "🛡️",
                title: "Ambiente Seguro",
                desc: "Professores certificados e protocolos de segurança em todos os treinos.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-[#eae8e8]/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
