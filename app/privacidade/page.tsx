import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | ALS Jiu-Jitsu",
};

export default function PrivacidadePage() {
  return (
    <section className="pt-32 pb-20 bg-[#0e1012]">
      <div className="container-site max-w-3xl">
        <p className="section-label mb-3">Legal</p>
        <h1 className="heading-display text-4xl text-white mb-8">Política de Privacidade</h1>
        <div className="prose prose-sm max-w-none text-[#eae8e8]/65 space-y-6 leading-relaxed">
          <p>
            A ALS Escola de Jiu-Jitsu está comprometida com a proteção de seus dados pessoais, em conformidade
            com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).
          </p>
          <h2 className="text-white font-bold text-lg mt-8">Dados Coletados</h2>
          <p>
            Coletamos informações fornecidas voluntariamente através de formulários de contato: nome, e-mail,
            telefone e informações sobre objetivos de treinamento. Esses dados são utilizados exclusivamente
            para fins de agendamento e comunicação comercial relacionada aos nossos serviços.
          </p>
          <h2 className="text-white font-bold text-lg mt-8">Uso das Informações</h2>
          <p>
            Suas informações são usadas para: agendamento de aulas experimentais, envio de informações sobre
            programas e eventos da ALS, e comunicação operacional. Não vendemos nem compartilhamos seus dados
            com terceiros sem seu consentimento.
          </p>
          <h2 className="text-white font-bold text-lg mt-8">Seus Direitos</h2>
          <p>
            De acordo com a LGPD, você tem direito de acessar, corrigir, excluir ou portabilizar seus dados.
            Para exercer esses direitos, entre em contato através do e-mail: privacidade@alsjiujitsu.com.br
          </p>
          <h2 className="text-white font-bold text-lg mt-8">Contato</h2>
          <p>
            Dúvidas sobre esta política: contato@alsjiujitsu.com.br
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
