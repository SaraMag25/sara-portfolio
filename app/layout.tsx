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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sara-portfolio-nine-zeta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sara Magalhães | Computer Engineering",
  description:
    "Portfólio de Sara Magalhães, graduanda em Engenharia de Computação na UFC, com experiência em desenvolvimento Full-Stack, Edge AI e Visão Computacional.",
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg?v=2",
  },
  openGraph: {
    title: "Sara Magalhães | Computer Engineering",
    description:
      "Graduanda em Engenharia de Computação @ UFC. Desenvolvimento Full-Stack, Edge AI e Visão Computacional.",
    url: siteUrl,
    siteName: "Sara Magalhães | Portfolio",
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
  twitter: {
    card: "summary_large_image",
    title: "Sara Magalhães | Computer Engineering",
    description:
      "Graduanda em Engenharia de Computação @ UFC. Desenvolvimento Full-Stack, Edge AI e Visão Computacional.",
    images: ["/og-preview.png"],
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
