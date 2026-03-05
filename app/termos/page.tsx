import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | ALS Jiu-Jitsu",
};

export default function TermosPage() {
  return (
    <section className="pt-32 pb-20 bg-[#0e1012]">
      <div className="container-site max-w-3xl">
        <p className="section-label mb-3">Legal</p>
        <h1 className="heading-display text-4xl text-white mb-8">Termos de Uso</h1>
        <div className="prose prose-sm max-w-none text-[#eae8e8]/65 space-y-6 leading-relaxed">
          <p>
            Ao acessar e utilizar o site e os serviços da ALS Escola de Jiu-Jitsu, você concorda com os
            seguintes termos e condições.
          </p>
          <h2 className="text-white font-bold text-lg mt-8">Aulas Experimentais</h2>
          <p>
            A aula experimental gratuita é oferecida uma única vez por pessoa. A ALS reserva-se o direito
            de recusar agendamentos que não atendam aos critérios mínimos de elegibilidade ou que demonstrem
            má-fé no processo de agendamento.
          </p>
          <h2 className="text-white font-bold text-lg mt-8">Responsabilidade</h2>
          <p>
            A prática de artes marciais envolve risco inerente de lesões. Ao se matricular, o aluno ou seu
            responsável legal assina um Termo de Responsabilidade específico reconhecendo os riscos da prática
            e isentando a ALS de responsabilidade por lesões decorrentes de negligência do próprio praticante.
          </p>
          <h2 className="text-white font-bold text-lg mt-8">Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do site e da plataforma ALS Online é de propriedade exclusiva da ALS Escola de
            Jiu-Jitsu. A reprodução, distribuição ou uso comercial não autorizados são proibidos e sujeitos
            às penalidades previstas em lei.
          </p>
          <h2 className="text-white font-bold text-lg mt-8">Cancelamentos e Reembolsos</h2>
          <p>
            Políticas de cancelamento de matrícula e reembolso estão detalhadas no contrato de prestação de
            serviços assinado no momento da matrícula. Para esclarecimentos, entre em contato com a secretaria.
          </p>
          <h2 className="text-white font-bold text-lg mt-8">Contato</h2>
          <p>
            Dúvidas sobre estes termos: contato@alsjiujitsu.com.br
          </p>
        </div>
        <div className="mt-12">
          <Link href="/" className="btn-secondary">
            Voltar ao Início
          </Link>
        </div>
      </div>
    </section>
  );
}
