import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#2e2a24] bg-terminal-window/90 font-mono text-xs text-terminal-cream/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Lado Esquerdo: Estado simulado do Git */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Image
            src="/icons/leaf.png"
            alt="Leaf"
            width={14}
            height={14}
            className="w-3.5 h-3.5 object-contain shrink-0"
          />
          <span>
            git branch: <strong className="text-terminal-text">main</strong> |
            status: <span className="text-terminal-neon">clean</span>
          </span>
        </div>

        {/* Lado Direito: Links para GitHub e LinkedIn */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/SaraMag25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terminal-lanternSoft transition-colors"
          >
            GitHub
          </a>
          <span className="text-terminal-border" aria-hidden="true">
            /
          </span>
          <a
            href="https://www.linkedin.com/in/sarasousamagalhaes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terminal-lanternSoft transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
