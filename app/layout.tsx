import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Lora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sara Magalhães | Software Engineer",
  description:
    "Portfólio de Sara Magalhães, Software Engineer com experiência em desenvolvimento Full-Stack, construção de interfaces modernas com React e Next.js, e arquitetura de APIs RESTful escaláveis.",
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg?v=2",
  },
  openGraph: {
    title: "Sara Magalhães | Software Engineer",
    description:
      "Desenvolvimento Full-Stack com foco em React, Next.js, Python, Django e APIs RESTful de alta performance.",
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Sara Magalhães | Software Engineer Portfolio",
      },
    ],
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${lora.variable} dark scroll-smooth`}
    >
      <body className="bg-terminal-bg text-terminal-text font-mono antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
