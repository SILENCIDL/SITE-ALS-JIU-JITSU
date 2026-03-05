import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ALS Escola de Jiu-Jitsu | Fundamentos, Avançado, Kids & Teens",
  description:
    "A ALS Escola de Jiu-Jitsu forma campeões dentro e fora do tatame. Programas para todos os níveis: Iniciantes, Avançado, Kids & Teens, Feminino e No-Gi. Agende sua aula experimental gratuita.",
  keywords:
    "jiu-jitsu, bjj, academia de jiu-jitsu, aulas de jiu-jitsu, jiu-jitsu kids, jiu-jitsu feminino, defesa pessoal, no-gi, submission grappling",
  openGraph: {
    title: "ALS Escola de Jiu-Jitsu",
    description:
      "Formando campeões dentro e fora do tatame. Técnica, disciplina e comunidade.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#161819] text-[#eae8e8] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
