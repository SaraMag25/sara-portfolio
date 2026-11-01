import React from "react";
import Image from "next/image";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  imagePath: string;
  techStack: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    title: "[WIP] Em Construção — Projeto 01",
    description:
      "Descrição detalhada do projeto full-stack, arquitetura adotada e principais desafios técnicos resolvidos (será adicionado nos próximos commits).",
    repoUrl: "https://github.com/SaraMag25",
    imagePath: "Em breve: screenshot do projeto",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Em breve..."],
  },
  {
    id: "02",
    title: "[WIP] Em Construção — Projeto 02",
    description:
      "Documentação e link do repositório deste projeto serão adicionados nas próximas atualizações do portefólio.",
    repoUrl: "https://github.com/SaraMag25",
    imagePath: "Em breve: screenshot do projeto",
    techStack: ["Python", "Django", "REST API", "Em breve..."],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 space-y-10 animate-fade-in-up"
    >
      {/* Cabeçalho da Secção com ícone Ghibli personalizado */}
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
          Secção em construção — projetos reais serão adicionados em breve
        </p>
      </div>

      {/* Lista de Projetos (Vertical em Mobile <768px, Lado-a-Lado em Desktop >=768px) */}
      <div className="space-y-8 sm:space-y-10">
        {PROJECTS_DATA.map((project, index) => (
          <article
            key={project.id}
            className="group/card relative w-full animate-fade-in-up flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-center p-5 sm:p-7 rounded-2xl border-2 border-[#2e2a24] bg-gradient-to-br from-terminal-window via-[#211d19] to-terminal-bg/90 hover:border-terminal-neon/50 hover:shadow-lantern transition-all duration-500 overflow-hidden"
          >
            {/* Imagem em cima no Mobile; alterna esquerda/direita apenas em >=768px (md:) */}
            <div
              className={`w-full md:col-span-5 ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <div className="aspect-video w-full rounded-xl bg-terminal-bg/90 border border-[#2e2a24] flex flex-col items-center justify-center text-terminal-muted text-xs p-4 overflow-hidden relative group text-center shadow-inner">
                <span className="text-terminal-neon font-bold mb-1 break-all group-hover:scale-105 group-hover:text-terminal-lanternSoft transition-all duration-300">
                  {project.imagePath}
                </span>
                <span className="text-terminal-cream/60">1280 x 720</span>
              </div>
            </div>

            {/* Informações Técnicas em baixo no Mobile; lado oposto em >=768px (md:) */}
            <div
              className={`w-full md:col-span-7 space-y-3 sm:space-y-4 ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <div className="flex items-center gap-2 text-xs text-terminal-lantern font-mono text-glow-lantern">
                <span>#{project.id}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-terminal-text group-hover/card:text-terminal-lanternSoft transition-colors">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-terminal-cream/85 leading-relaxed">
                {project.description}
              </p>

              {/* Tecnologias separadas de forma limpa */}
              <p className="text-xs sm:text-sm text-terminal-neon font-mono pt-1 break-words">
                {project.techStack.join(" • ")}
              </p>

              {/* Link do Repositório */}
              <div className="pt-2">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-terminal-text underline decoration-terminal-lantern/70 underline-offset-4 hover:text-terminal-lanternSoft hover:decoration-terminal-lantern transition-colors"
                >
                  <span>View Repository -&gt;</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
