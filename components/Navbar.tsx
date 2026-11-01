"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

interface EditorTab {
  id: "hero" | "articles" | "projects" | "contact";
  fileName: string;
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
    href: "#hero",
    iconSrc: "/icons/totoro.png",
    iconAlt: "Totoro icon",
    badgeColor: "text-terminal-lantern",
    badgeText: "TSX",
  },
  {
    id: "articles",
    fileName: "Articles.md",
    href: "#articles",
    iconSrc: "/icons/calcifer.png",
    iconAlt: "Calcifer icon",
    badgeColor: "text-terminal-lantern",
    badgeText: "MD",
  },
  {
    id: "projects",
    fileName: "Projects.md",
    href: "#projects",
    iconSrc: "/icons/leaf.png",
    iconAlt: "Leaf icon",
    badgeColor: "text-terminal-neon",
    badgeText: "MD",
  },
  {
    id: "contact",
    fileName: "Contact.sh",
    href: "#contact",
    iconSrc: "/icons/jiji.png",
    iconAlt: "Jiji icon",
    badgeColor: "text-terminal-lanternSoft",
    badgeText: "SH",
  },
];

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<EditorTab["id"]>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const contactEl = document.getElementById("contact");
      const projectsEl = document.getElementById("projects");
      const articlesEl = document.getElementById("articles");

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      const triggerLine = window.innerHeight * 0.4;

      if (
        isAtBottom ||
        (contactEl && contactEl.getBoundingClientRect().top <= triggerLine)
      ) {
        setActiveTab("contact");
      } else if (
        projectsEl &&
        projectsEl.getBoundingClientRect().top <= triggerLine
      ) {
        setActiveTab("projects");
      } else if (
        articlesEl &&
        articlesEl.getBoundingClientRect().top <= triggerLine
      ) {
        setActiveTab("articles");
      } else {
        setActiveTab("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between">
        <nav
          aria-label="Editor Tabs Navigation"
          className="flex-1 min-w-0 flex items-center overflow-x-auto no-scrollbar"
        >
          <div className="flex items-center gap-2 pr-2.5 sm:pr-4 py-3 text-xs text-terminal-cream/85 border-r border-terminal-border select-none shrink-0">
            <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded bg-terminal-window border border-terminal-border font-mono font-bold text-terminal-neon text-glow-leaf">
              &gt;_
            </span>
            <span className="hidden md:inline">sara-portfolio</span>
          </div>

          <ul className="flex items-stretch flex-nowrap">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <li key={tab.id} className="shrink-0">
                  <a
                    href={tab.href}
                    onClick={(e) => handleTabClick(e, tab)}
                    title={t.nav[tab.id]}
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-3 text-xs sm:text-sm border-r border-terminal-border transition-all whitespace-nowrap ${
                      isActive
                        ? "bg-terminal-window text-terminal-text border-t-2 border-t-terminal-neon font-bold shadow-lantern"
                        : "bg-terminal-bg/80 text-terminal-cream/70 border-t-2 border-t-transparent hover:bg-terminal-window/70 hover:text-terminal-text"
                    }`}
                  >
                    <Image
                      src={tab.iconSrc}
                      alt={tab.iconAlt}
                      width={16}
                      height={16}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain shrink-0"
                    />
                    <span
                      className={`text-[9px] sm:text-[10px] font-bold ${tab.badgeColor}`}
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

        {/* Botão de idioma fixo na barra, sempre visível mesmo com scroll das abas no mobile */}
        <div className="pl-2 shrink-0 py-2">
          <button
            type="button"
            onClick={toggleLang}
            title={t.nav.switchTo}
            aria-label={t.nav.switchTo}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg border border-terminal-border bg-terminal-window text-[11px] sm:text-xs font-bold hover:border-terminal-neon hover:shadow-leaf transition-all shadow-sm"
          >
            <span
              className={
                lang === "pt"
                  ? "text-terminal-neon text-glow-leaf"
                  : "text-terminal-cream/50"
              }
            >
              PT
            </span>
            <span className="text-terminal-border" aria-hidden="true">
              |
            </span>
            <span
              className={
                lang === "en"
                  ? "text-terminal-neon text-glow-leaf"
                  : "text-terminal-cream/50"
              }
            >
              EN
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
