"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter, Clock } from "lucide-react";

const DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"] as const;
type Day = (typeof DAYS)[number];

type ClassType = "iniciantes" | "avancado" | "kids" | "feminino" | "no-gi" | "defesa";

interface ClassEntry {
  time: string;
  endTime: string;
  name: string;
  type: ClassType;
  instructor: string;
  duration: number;
  days: Day[];
}

const classes: ClassEntry[] = [
  {
    time: "06:00",
    endTime: "07:30",
    name: "Fundamentos — Manhã",
    type: "iniciantes",
    instructor: "Prof. Alexandre",
    duration: 90,
    days: ["Segunda", "Quarta", "Sexta"],
  },
  {
    time: "06:00",
    endTime: "07:30",
    name: "Avançado — Manhã",
    type: "avancado",
    instructor: "Prof. Diego",
    duration: 90,
    days: ["Terça", "Quinta"],
  },
  {
    time: "07:30",
    endTime: "09:00",
    name: "Pro Training",
    type: "avancado",
    instructor: "Prof. Alexandre + Prof. Diego",
    duration: 90,
    days: ["Segunda", "Quarta", "Sexta"],
  },
  {
    time: "10:00",
    endTime: "11:00",
    name: "Kids (4–10 anos)",
    type: "kids",
    instructor: "Prof. Lucas",
    duration: 60,
    days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
  },
  {
    time: "11:00",
    endTime: "12:00",
    name: "Teens (11–15 anos)",
    type: "kids",
    instructor: "Prof. Lucas",
    duration: 60,
    days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
  },
  {
    time: "12:00",
    endTime: "13:00",
    name: "Fundamentos — Almoço",
    type: "iniciantes",
    instructor: "Prof. Lucas",
    duration: 60,
    days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
  },
  {
    time: "17:00",
    endTime: "18:00",
    name: "Kids — Tarde",
    type: "kids",
    instructor: "Prof. Lucas",
    duration: 60,
    days: ["Terça", "Quinta"],
  },
  {
    time: "18:00",
    endTime: "19:00",
    name: "Feminino — Todos os Níveis",
    type: "feminino",
    instructor: "Prof.ª Renata",
    duration: 60,
    days: ["Segunda", "Quarta", "Sexta"],
  },
  {
    time: "18:00",
    endTime: "19:30",
    name: "Defesa Pessoal",
    type: "defesa",
    instructor: "Prof. Alexandre",
    duration: 90,
    days: ["Terça", "Quinta"],
  },
  {
    time: "19:00",
    endTime: "20:30",
    name: "Fundamentos — Noite",
    type: "iniciantes",
    instructor: "Prof. Lucas",
    duration: 90,
    days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
  },
  {
    time: "20:30",
    endTime: "22:00",
    name: "Avançado — Noite",
    type: "avancado",
    instructor: "Prof. Alexandre",
    duration: 90,
    days: ["Segunda", "Quarta", "Sexta"],
  },
  {
    time: "20:30",
    endTime: "22:00",
    name: "No-Gi / Submission",
    type: "no-gi",
    instructor: "Prof. Diego",
    duration: 90,
    days: ["Terça", "Quinta"],
  },
  {
    time: "09:00",
    endTime: "10:30",
    name: "Fundamentos — Sábado",
    type: "iniciantes",
    instructor: "Prof. Lucas",
    duration: 90,
    days: ["Sábado"],
  },
  {
    time: "10:30",
    endTime: "12:30",
    name: "Avançado + Pro Training — Sábado",
    type: "avancado",
    instructor: "Prof. Alexandre",
    duration: 120,
    days: ["Sábado"],
  },
  {
    time: "10:00",
    endTime: "11:00",
    name: "Kids — Sábado",
    type: "kids",
    instructor: "Prof. Lucas",
    duration: 60,
    days: ["Sábado"],
  },
  {
    time: "09:00",
    endTime: "10:00",
    name: "Feminino — Sábado",
    type: "feminino",
    instructor: "Prof.ª Renata",
    duration: 60,
    days: ["Sábado"],
  },
  {
    time: "09:00",
    endTime: "10:00",
    name: "No-Gi — Sábado",
    type: "no-gi",
    instructor: "Prof. Diego",
    duration: 60,
    days: ["Sábado"],
  },
];

const typeConfig: Record<ClassType, { label: string; color: string; dot: string }> = {
  iniciantes: {
    label: "Iniciantes",
    color: "bg-[#0C3C78]/20 text-[#4a90d9] border-[#0C3C78]/30",
    dot: "bg-[#0C3C78]",
  },
  avancado: {
    label: "Avançado",
    color: "bg-[#F33535]/10 text-[#F33535] border-[#F33535]/20",
    dot: "bg-[#F33535]",
  },
  kids: {
    label: "Kids",
    color: "bg-emerald-900/20 text-emerald-400 border-emerald-800/30",
    dot: "bg-emerald-400",
  },
  feminino: {
    label: "Feminino",
    color: "bg-purple-900/20 text-purple-300 border-purple-800/30",
    dot: "bg-purple-400",
  },
  "no-gi": {
    label: "No-Gi",
    color: "bg-amber-900/20 text-amber-300 border-amber-800/30",
    dot: "bg-amber-400",
  },
  defesa: {
    label: "Defesa Pessoal",
    color: "bg-gray-800/50 text-gray-300 border-gray-700/40",
    dot: "bg-gray-400",
  },
};

export default function HorariosPage() {
  const [selectedDay, setSelectedDay] = useState<Day | "Todos">("Todos");
  const [selectedType, setSelectedType] = useState<ClassType | "Todos">("Todos");

  const filteredClasses = classes.filter((c) => {
    const dayMatch = selectedDay === "Todos" || c.days.includes(selectedDay as Day);
    const typeMatch = selectedType === "Todos" || c.type === selectedType;
    return dayMatch && typeMatch;
  });

  const sortedClasses = [...filteredClasses].sort((a, b) => {
    if (a.time < b.time) return -1;
    if (a.time > b.time) return 1;
    return 0;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#0e1012] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#233039]/30 to-transparent" />
        </div>
        <div className="container-site relative z-10">
          <p className="section-label mb-3">Grade de Horários</p>
          <h1 className="heading-display text-5xl md:text-7xl text-white mb-4">
            Treine no Seu
            <span className="block text-[#F33535]">Melhor Horário</span>
          </h1>
          <p className="text-[#eae8e8]/60 text-lg max-w-2xl leading-relaxed">
            Aulas de segunda a sábado, manhã, tarde e noite. Encontre o horário que encaixa
            perfeitamente na sua rotina.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-40 bg-[#0e1012]/95 backdrop-blur-md border-b border-white/5 py-4">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Day filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide flex-1">
              <Filter size={14} className="text-[#eae8e8]/40 flex-shrink-0" />
              {(["Todos", ...DAYS] as const).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day as Day | "Todos")}
                  className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border flex-shrink-0 transition-all ${
                    selectedDay === day
                      ? "bg-[#F33535] text-white border-[#F33535]"
                      : "bg-transparent text-[#eae8e8]/60 border-white/10 hover:border-white/25"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Type filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {(["Todos", "iniciantes", "avancado", "kids", "feminino", "no-gi", "defesa"] as const).map(
                (type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type as ClassType | "Todos")}
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border flex-shrink-0 transition-all ${
                      selectedType === type
                        ? type === "Todos"
                          ? "bg-[#eae8e8] text-[#161819] border-[#eae8e8]"
                          : `${typeConfig[type as ClassType].color} border-opacity-100`
                        : "bg-transparent text-[#eae8e8]/50 border-white/10 hover:border-white/20"
                    }`}
                  >
                    {type === "Todos" ? "Todos" : typeConfig[type as ClassType].label}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-12 bg-[#161819] min-h-[60vh]">
        <div className="container-site">
          {sortedClasses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#eae8e8]/40 text-lg">Nenhuma aula encontrada para os filtros selecionados.</p>
              <button
                onClick={() => { setSelectedDay("Todos"); setSelectedType("Todos"); }}
                className="mt-4 text-sm text-[#F33535] hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Summary count */}
              <p className="text-xs text-[#eae8e8]/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Clock size={13} />
                {sortedClasses.length} {sortedClasses.length === 1 ? "aula encontrada" : "aulas encontradas"}
              </p>

              {sortedClasses.map((cls, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 bg-[#0e1012] hover:bg-[#233039]/40 border border-white/5 hover:border-[#F33535]/20 rounded-xl px-5 py-4 transition-all"
                >
                  {/* Time */}
                  <div className="sm:w-36 flex-shrink-0">
                    <span className="text-base font-mono font-bold text-white">{cls.time}</span>
                    <span className="text-[#eae8e8]/40 text-sm font-mono"> – {cls.endTime}</span>
                  </div>

                  {/* Color dot + Name */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${typeConfig[cls.type].dot}`} />
                    <div>
                      <div className="font-semibold text-white text-sm">{cls.name}</div>
                      <div className="text-xs text-[#eae8e8]/45 mt-0.5">{cls.instructor}</div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="sm:w-24 text-center">
                    <span className="text-xs text-[#eae8e8]/45">{cls.duration} min</span>
                  </div>

                  {/* Type badge */}
                  <div className="sm:w-36 flex justify-start sm:justify-end">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${typeConfig[cls.type].color}`}
                    >
                      {typeConfig[cls.type].label}
                    </span>
                  </div>

                  {/* Days (when showing all days) */}
                  {selectedDay === "Todos" && (
                    <div className="sm:w-48 flex flex-wrap gap-1 justify-start sm:justify-end">
                      {cls.days.map((d) => (
                        <span
                          key={d}
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-[#eae8e8]/45"
                        >
                          {d.slice(0, 3)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Legend */}
      <section className="py-10 bg-[#0e1012] border-t border-white/5">
        <div className="container-site">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {Object.entries(typeConfig).map(([type, config]) => (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${config.dot}`} />
                <span className="text-xs text-[#eae8e8]/55">{config.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#eae8e8]/30">
            * Horários sujeitos a alterações em feriados e eventos especiais. Verifique com a recepção.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#161819]">
        <div className="container-site text-center">
          <h2 className="heading-display text-3xl md:text-4xl text-white mb-4">
            Encontrou seu horário?
          </h2>
          <p className="text-[#eae8e8]/60 mb-8 max-w-lg mx-auto">
            Agende sua primeira aula experimental gratuitamente. Sem compromisso, sem pagamento antecipado.
          </p>
          <Link href="/comece-agora" className="btn-primary text-base px-8 py-4">
            Agendar Aula Gratuita
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
