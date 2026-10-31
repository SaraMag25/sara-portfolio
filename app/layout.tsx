import type { Metadata } from "next";
import { JetBrains_Mono, Lora } from "next/font/google";
import "./globals.css";

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
    "Portefólio de Sara Magalhães, Software Engineer com experiência em desenvolvimento Full-Stack, construção de interfaces modernas com React e Next.js, e arquitetura de APIs RESTful escaláveis.",
  openGraph: {
    title: "Sara Magalhães | Software Engineer",
    description:
      "Desenvolvimento Full-Stack com foco em React, Next.js, Python, Django e APIs RESTful de alta performance.",
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: "/og-preview.png", // Imagem de preview para partilha em redes sociais (og:image)
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
      lang="pt"
      className={`${jetbrainsMono.variable} ${lora.variable} dark scroll-smooth`}
    >
      <body className="bg-terminal-bg text-terminal-text font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
