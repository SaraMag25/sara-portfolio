"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectData {
  id: string;
  title: string;
  techStack: string[];
  description: React.ReactNode;
  repoUrl: string;
  repoLabel?: string;
  secondaryRepoUrl?: string;
  secondaryRepoLabel?: string;
  images: string[];
}

const PROJECTS: ProjectData[] = [
  {
    id: "erp-lesc",
    title: "SISTEMA ERP LESC",
    techStack: ["React", "Next.js", "Zod", "Tailwind"],
    description: (
      <>
        Sistema utilizado no{" "}
        <strong className="text-white font-semibold">
          LESC (Laboratório de Engenharia de Sistemas de Computação) da UFC
        </strong>
        . É uma plataforma interna de gestão de projetos, membros e relatórios,
        desenhada especificamente para gerir o fluxo operacional, financeiro e
        de bolsas (como as da EMBRAPII e fundações de apoio), automatizando o
        controlo de presenças, alocação de pessoal e validação de recibos de
        pagamento.
      </>
    ),
    repoUrl: "https://github.com/LESC-lab/erp-lesc-interface-react",
    images: ["/erp-lesc-1.png?v=6", "/erp-lesc-2.png?v=6"],
  },
  {
    id: "assidui",
    title: "SISTEMA ASSIDUI",
    techStack: [
      "Python",
      "Django",
      "Django REST",
      "React Native",
      "PostgreSQL",
    ],
    description: (
      <>
        O Assidui é um sistema integrado utilizado por uma{" "}
        <strong className="text-white font-semibold">
          escola em Fortaleza
        </strong>
        , desenvolvido para digitalizar e automatizar o gerenciamento de
        assiduidade escolar. Substituiu os processos manuais de chamada por um
        fluxo rápido e confiável, ajudando bastante o dia a dia da escola no
        controlo e acompanhamento da frequência dos alunos.
      </>
    ),
    repoUrl: "https://github.com/assidui",
    images: ["/assidui-1.png?v=6", "/assidui-2.png?v=6"],
  },
  {
    id: "controle-residuos",
    title: "APP DESCARTE DE RESÍDUOS",
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Android Studio",
      "Android",
      "REST API",
    ],
    description: (
      <>
        O <strong className="text-white font-semibold">EcoCiclo</strong> é um
        aplicativo voltado à gestão consciente e organização do descarte de
        resíduos recicláveis e orgânicos. Criado na{" "}
        <strong className="text-white font-semibold">
          Residência em TIC (Capacita Brasil / iRede)
        </strong>
        , permite que os utilizadores registem os seus descartes diários por
        categoria (papel, plástico, vidro, orgânico e eletrónico), acompanhem o
        volume total reciclado a cada mês, criem novas categorias personalizadas
        e consultem todo o histórico de coletas.
      </>
    ),
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
    title: "MONITORAME",
    techStack: ["React", "Next.js", "Tailwind CSS", "REST API"],
    description: (
      <>
        Plataforma de{" "}
        <strong className="text-white font-semibold">
          inteligência e análise de dados públicos municipais
        </strong>{" "}
        focada em compras governamentais. Ajuda empresas, fornecedores e
        gestores a descobrir oportunidades de licitações na sua região, explorar
        indicadores financeiros por município, período e perfil de fornecedor, e
        comparar cenários de despesas públicas com transparência.
      </>
    ),
    repoUrl: "https://github.com/Amontada-Valley-Codes/monitoraME",
    repoLabel: "Front-end",
    secondaryRepoUrl:
      "https://github.com/Amontada-Valley-Codes/backend-monitoraME",
    secondaryRepoLabel: "Back-end",
    images: ["/monitorame-1.png?v=6", "/monitorame-2.png?v=6"],
  },
];

function ProjectCard({ project }: { project: ProjectData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = project;

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      {/* Coluna da Imagem (Maior destaque - 7 colunas) */}
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
                alt={`${project.title} - imagem ${idx + 1}`}
                className={`w-full h-auto block shrink-0 rounded-lg transition-opacity duration-700 ease-in-out ${
                  currentIndex === idx ? "opacity-100" : "opacity-40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Botões SVG e Dots exibidos apenas se houver mais de 1 imagem */}
        {images.length > 1 && (
          <>
            {/* Botão Anterior (SVG) */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Imagem anterior"
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

            {/* Botão Seguinte (SVG) */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Imagem seguinte"
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

            {/* Indicadores (Dots) */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir para imagem ${idx + 1}`}
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

      {/* Coluna de Texto (5 colunas) */}
      <div
        className="lg:col-span-5 flex flex-col items-start"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        <h3
          className="text-2xl lg:text-3xl font-bold text-terminal-text tracking-tight uppercase"
          style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
        >
          {project.title}
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
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-3">
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
            {project.repoLabel ?? "View Source"}
          </a>

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
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 space-y-12 animate-fade-in-up"
    >
      {/* Cabeçalho da Secção */}
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
          Seleção de projetos e arquiteturas desenvolvidas
        </p>
      </div>

      {/* Lista de Projetos Empilhados com Espaçamento Amplo (space-y-24) */}
      <div className="space-y-24">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
