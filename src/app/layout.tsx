import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bizarro Advogados Associados | Advocacia Premium em São Bernardo do Campo",
  description:
    "Escritório de advocacia especializado em Direito Tributário, Trabalhista, Contratos, Direito Imobiliário e Recuperação Judicial. Localizado em São Bernardo do Campo - SP.",
  keywords:
    "advogado, advocacia, direito tributário, direito trabalhista, contratos, direito imobiliário, São Bernardo do Campo, ABC paulista",
  openGraph: {
    title: "Bizarro Advogados Associados",
    description: "Excelência jurídica com credibilidade e resultados.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-[#0A1628] antialiased">
        {children}
      </body>
    </html>
  );
}
