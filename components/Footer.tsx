import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-terminal-border bg-terminal-window/90 font-mono text-xs text-terminal-cream/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/jellyfish-1.png"
              alt="Água-viva bioluminescente azul"
              width={22}
              height={22}
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain animate-float-particle drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
            />
            <Image
              src="/icons/jellyfish-2.png"
              alt="Água-viva bioluminescente verde-água"
              width={20}
              height={20}
              className="w-5 h-5 object-contain animate-float-particle-slow drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"
            />
            <Image
              src="/icons/jellyfish-1.png"
              alt="Água-viva bioluminescente azul pequena"
              width={18}
              height={18}
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain animate-pulse drop-shadow-[0_0_8px_rgba(125,211,252,0.85)]"
            />
          </div>

          <span className="text-terminal-cream/85">
            status:{" "}
            <strong className="text-terminal-neon font-normal">
              transformando ideias em código
            </strong>
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/SaraMag25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terminal-neon transition-colors"
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
            className="hover:text-terminal-neon transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
