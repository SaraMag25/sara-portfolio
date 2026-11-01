"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage, type Lang } from "@/lib/i18n";

type Localized<T> = Record<Lang, T>;

interface ProjectData {
  id: string;
  title: Localized<string>;
  techStack: string[];
  description: Localized<React.ReactNode>;
  repoUrl?: string;
  repoLabel?: string;
  secondaryRepoUrl?: string;
  secondaryRepoLabel?: string;
  articleUrl?: string;
  images: string[];
}

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-white font-semibold">{children}</strong>
);

const ARTICLE: ProjectData = {
  id: "deteccao-pragas",
  title: {
    pt: "DETECÇÃO DE INSETOS PRAGA (EDGE AI)",
    en: "PEST INSECT DETECTION (EDGE AI)",
  },
  techStack: [
    "Python",
    "YOLO12n",
    "Deep Learning",
    "Computer Vision",
    "Edge AI",
  ],
  description: {
    pt: (
      <>
        Pesquisa científica e artigo desenvolvido na <B>UFC</B> voltado à{" "}
        <B>identificação automatizada de pragas agrícolas</B> com Visão
        Computacional. O projeto alia o uso de armadilhas no campo, um método de
        controle alternativo que <B>reduz o uso de agrotóxicos</B>, a uma
        inteligência artificial leve capaz de identificar os insetos capturados
        automaticamente, substituindo a contagem manual lenta e ajudando no
        monitoramento sustentável das lavouras.
      </>
    ),
    en: (
      <>
        Scientific research and paper developed at <B>UFC</B> focused on the{" "}
        <B>automated identification of agricultural pests</B> using Computer
        Vision. The project combines field traps, an alternative control method
        that <B>reduces pesticide use</B>, with a lightweight AI model capable of
        automatically identifying the captured insects, replacing slow manual
        counting and supporting sustainable crop monitoring.
      </>
    ),
  },
  articleUrl: "/artigo-pragas.pdf",
  images: [
    "/pragas-1.jpg",
    "/pragas-2.png",
    "/pragas-3.png",
    "/pragas-4.png",
  ],
};

const PROJECTS: ProjectData[] = [
  {
    id: "erp-lesc",
    title: { pt: "SISTEMA ERP LESC", en: "LESC ERP SYSTEM" },
    techStack: ["React", "Next.js", "Zod", "Tailwind"],
    description: {
      pt: (
        <>
          Sistema utilizado no{" "}
          <B>LESC (Laboratório de Engenharia de Sistemas de Computação) da UFC</B>
          . É uma plataforma interna de gestão de projetos, membros e
          relatórios, projetada especificamente para gerenciar o fluxo
          operacional, financeiro e de bolsas (como as da EMBRAPII e fundações
          de apoio), automatizando o controle de presenças, a alocação de
          pessoal e a validação de recibos de pagamento.
        </>
      ),
      en: (
        <>
          System used at{" "}
          <B>
            LESC (Computer Systems Engineering Laboratory) at UFC
          </B>
          . It is an internal platform for managing projects, members and
          reports, designed specifically to handle operational, financial and
          scholarship workflows (such as EMBRAPII and research foundation
          grants), automating attendance tracking, staff allocation and payment
          receipt validation.
        </>
      ),
    },
    repoUrl: "https://github.com/LESC-lab/erp-lesc-interface-react",
    images: ["/erp-lesc-1.png?v=6", "/erp-lesc-2.png?v=6"],
  },
  {
    id: "assidui",
    title: { pt: "SISTEMA ASSIDUI", en: "ASSIDUI SYSTEM" },
    techStack: [
      "Python",
      "Django",
      "Django REST",
      "React Native",
      "PostgreSQL",
    ],
    description: {
      pt: (
        <>
          O Assidui é um sistema integrado utilizado por uma{" "}
          <B>escola em Fortaleza</B>, desenvolvido para digitalizar e
          automatizar o gerenciamento de frequência escolar. Substituiu os
          processos manuais de chamada por um fluxo rápido e confiável, ajudando
          bastante o dia a dia da escola no controle e acompanhamento da
          frequência dos alunos.
        </>
      ),
      en: (
        <>
          Assidui is an integrated system used by a{" "}
          <B>school in Fortaleza, Brazil</B>, built to digitize and automate
          student attendance management. It replaced manual roll calls with a
          fast and reliable workflow, greatly improving the school&apos;s daily
          routine for tracking and monitoring student attendance.
        </>
      ),
    },
    repoUrl: "https://github.com/assidui",
    images: ["/assidui-1.png?v=6", "/assidui-2.png?v=6"],
  },
  {
    id: "controle-residuos",
    title: { pt: "APP DESCARTE DE RESÍDUOS", en: "WASTE DISPOSAL APP" },
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Android Studio",
      "Android",
      "REST API",
    ],
    description: {
      pt: (
        <>
          O <B>EcoCiclo</B> é um aplicativo voltado à gestão consciente e
          organização do descarte de resíduos recicláveis e orgânicos. Criado na{" "}
          <B>Residência em TIC (Capacita Brasil / iRede)</B>, permite que os
          usuários registrem seus descartes diários por categoria (papel,
          plástico, vidro, orgânico e eletrônico), acompanhem o volume total
          reciclado a cada mês, criem novas categorias personalizadas e
          consultem todo o histórico de coletas.
        </>
      ),
      en: (
        <>
          <B>EcoCiclo</B> is an app for the mindful management and organization
          of recyclable and organic waste disposal. Built during the{" "}
          <B>ICT Residency program (Capacita Brasil / iRede)</B>, it lets users
          log their daily disposals by category (paper, plastic, glass, organic
          and electronic), track the total volume recycled each month, create
          custom categories and browse their full collection history.
        </>
      ),
    },
    repoUrl:
      "https://github.com/Capacita-Irede-C1/c1-mvp-controle-residuos-android",
    images: [
      "/residuos-1.png?v=6",
      "/residuos-2.png?v=6",
      "/residuos-3.png?v=6",
      "/residuos-4.png?v=6",
      "/residuos-5.png?v=6",
      "/residuos-6.png?v=6",
    ],
  },
  {
    id: "monitorame",
    title: { pt: "MONITORAME", en: "MONITORAME" },
    techStack: ["React", "Next.js", "Tailwind CSS", "REST API"],
    description: {
      pt: (
        <>
          Plataforma de{" "}
          <B>inteligência e análise de dados públicos municipais</B> focada em
          compras governamentais. Ajuda empresas, fornecedores e gestores a
          descobrir oportunidades de licitações na sua região, explorar
          indicadores financeiros por município, período e perfil de
          fornecedor, e comparar cenários de despesas públicas com
          transparência.
        </>
      ),
      en: (
        <>
          A <B>municipal public data intelligence and analytics</B> platform
          focused on government procurement. It helps companies, suppliers and
          public managers discover bidding opportunities in their region,
          explore financial indicators by municipality, period and supplier
          profile, and compare public spending scenarios transparently.
        </>
      ),
    },
    repoUrl: "https://github.com/Amontada-Valley-Codes/monitoraME",
    repoLabel: "Front-end",
    secondaryRepoUrl:
      "https://github.com/Amontada-Valley-Codes/backend-monitoraME",
    secondaryRepoLabel: "Back-end",
    images: ["/monitorame-1.png?v=6", "/monitorame-2.png?v=6"],
  },
];

function ProjectCard({ project }: { project: ProjectData }) {
  const { lang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = project;
  const title = project.title[lang];

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      <div className="lg:col-span-7 relative group rounded-lg overflow-hidden shadow-2xl">
        <div className="relative w-full overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`${title} - ${t.project.image} ${idx + 1}`}
                className={`w-full h-auto block shrink-0 rounded-lg transition-opacity duration-700 ease-in-out ${
                  currentIndex === idx ? "opacity-100" : "opacity-40"
                }`}
              />
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label={t.project.prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-terminal-bg/85 hover:bg-terminal-header border border-terminal-neon/35 text-terminal-text flex items-center justify-center transition-colors shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label={t.project.nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-terminal-bg/85 hover:bg-terminal-header border border-terminal-neon/35 text-terminal-text flex items-center justify-center transition-colors shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`${t.project.goToImage} ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentIndex === idx
                      ? "w-5 bg-gradient-to-r from-terminal-green via-terminal-neon to-terminal-lantern scale-110"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div
        className="lg:col-span-5 flex flex-col items-start"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        <h3
          className="text-2xl lg:text-3xl font-bold text-terminal-text tracking-tight uppercase"
          style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
        >
          {title}
        </h3>

        <p className="font-mono text-sm text-terminal-cream my-4 tracking-wide">
          {project.techStack.map((tech, idx) => (
            <React.Fragment key={tech}>
              {tech}
              {idx < project.techStack.length - 1 && (
                <span className="text-terminal-neon mx-1">//</span>
              )}
            </React.Fragment>
          ))}
        </p>

        <p
          className="text-terminal-cream/85 text-base lg:text-[17px] leading-relaxed font-normal mb-7"
          style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
        >
          {project.description[lang]}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-md border border-terminal-border bg-terminal-window/80 hover:bg-terminal-header hover:border-terminal-neon text-sm font-semibold text-white shadow-leaf transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              {project.repoLabel ?? t.project.viewSource}
            </a>
          )}

          {project.secondaryRepoUrl && (
            <a
              href={project.secondaryRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-md border border-terminal-border bg-terminal-window/80 hover:bg-terminal-header hover:border-terminal-neon text-sm font-semibold text-white shadow-leaf transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              {project.secondaryRepoLabel ?? "Back-end"}
            </a>
          )}

          {project.articleUrl && (
            <a
              href={project.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-md border border-terminal-border bg-terminal-window/80 hover:bg-terminal-header hover:border-terminal-neon text-sm font-semibold text-white shadow-leaf transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
              {t.project.readArticle}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <div className="space-y-24 sm:space-y-28">
      <section
        id="articles"
        className="scroll-mt-20 space-y-12 animate-fade-in-up"
      >
        <div className="group/title space-y-2 inline-block">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-terminal-text flex items-center gap-2.5">
            <Image
              src="/icons/calcifer.png"
              alt="Calcifer icon"
              width={20}
              height={20}
              className="w-5 h-5 object-contain shrink-0 transition-transform duration-300 group-hover/title:scale-110"
            />
            <span className="font-mono text-terminal-neon text-glow-leaf">
              ~/
            </span>
            <span>Articles.md</span>
          </h2>
          <p className="text-sm text-terminal-cream/75 font-mono">
            {t.sections.articlesSubtitle}
          </p>
        </div>

        <div className="space-y-24">
          <ProjectCard project={ARTICLE} />
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-20 space-y-12 animate-fade-in-up"
      >
        <div className="group/title space-y-2 inline-block">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-terminal-text flex items-center gap-2.5">
            <Image
              src="/icons/leaf.png"
              alt="Leaf icon"
              width={20}
              height={20}
              className="w-5 h-5 object-contain shrink-0 transition-transform duration-300 group-hover/title:rotate-12 group-hover/title:scale-110"
            />
            <span className="font-mono text-terminal-neon text-glow-leaf">
              ~/
            </span>
            <span>Projects.md</span>
          </h2>
          <p className="text-sm text-terminal-cream/75 font-mono">
            {t.sections.projectsSubtitle}
          </p>
        </div>

        <div className="space-y-24">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
