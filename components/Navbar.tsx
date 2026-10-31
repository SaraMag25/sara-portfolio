"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface EditorTab {
  id: "hero" | "projects" | "contact";
  fileName: string;
  label: string;
  href: string;
  iconSrc: string;
  iconAlt: string;
  badgeColor: string;
  badgeText: string;
}

const TABS: EditorTab[] = [
  {
    id: "hero",
    fileName: "page.tsx",
    label: "Início",
    href: "#hero",
    iconSrc: "/icons/totoro.png",
    iconAlt: "Totoro icon",
    badgeColor: "text-terminal-lantern",
    badgeText: "TSX",
  },
  {
    id: "projects",
    fileName: "Projects.md",
    label: "Projetos",
    href: "#projects",
    iconSrc: "/icons/leaf.png",
    iconAlt: "Leaf icon",
    badgeColor: "text-terminal-neon",
    badgeText: "MD",
  },
  {
    id: "contact",
    fileName: "Contact.sh",
    label: "Contactos",
    href: "#contact",
    iconSrc: "/icons/jiji.png",
    iconAlt: "Jiji icon",
    badgeColor: "text-terminal-lanternSoft",
    badgeText: "SH",
  },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<EditorTab["id"]>("hero");

  // Atualiza a aba ativa automaticamente conforme o utilizador faz scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      const contactEl = document.getElementById("contact");
      const projectsEl = document.getElementById("projects");

      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActiveTab("contact");
      } else if (projectsEl && scrollPosition >= projectsEl.offsetTop) {
        setActiveTab("projects");
      } else {
        setActiveTab("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleTabClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    tab: EditorTab
  ) {
    event.preventDefault();
    setActiveTab(tab.id);

    const target = document.getElementById(tab.id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-terminal-bg/95 backdrop-blur-md border-b border-terminal-border font-mono">
      <nav
        aria-label="Editor Tabs Navigation"
        className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center overflow-x-auto no-scrollbar"
      >
        {/* Indicador lateral de workspace (visível em desktop) */}
        <div className="hidden md:flex items-center gap-2 pr-4 py-3 text-xs text-terminal-cream/85 border-r border-[#2e2a24] select-none shrink-0">
          <Image
            src="/icons/totoro.png"
            alt="Totoro"
            width={16}
            height={16}
            className="w-4 h-4 object-contain shrink-0"
          />
          <span>sara-portfolio</span>
        </div>

        {/* Abas de ficheiros estilo VS Code com ícones Ghibli */}
        <ul className="flex items-stretch w-full md:w-auto">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <li key={tab.id} className="flex-1 sm:flex-initial">
                <a
                  href={tab.href}
                  onClick={(e) => handleTabClick(e, tab)}
                  title={tab.label}
                  className={`flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-5 py-3 text-xs sm:text-sm border-r border-[#2e2a24] transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-terminal-window text-terminal-text border-t-2 border-t-terminal-lantern font-bold shadow-lantern"
                      : "bg-terminal-bg/80 text-terminal-cream/70 border-t-2 border-t-transparent hover:bg-terminal-window/70 hover:text-terminal-text"
                  }`}
                >
                  <Image
                    src={tab.iconSrc}
                    alt={tab.iconAlt}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain shrink-0"
                  />
                  <span
                    className={`text-[10px] font-bold ${tab.badgeColor}`}
                    aria-hidden="true"
                  >
                    {tab.badgeText}
                  </span>
                  <span>{tab.fileName}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
