import React from "react";
import Image from "next/image";

interface TerminalWindowProps {
  /** Nome do ficheiro exibido ao centro da barra superior (ex: "PortfolioController.java") */
  fileName?: string;
  /** Conteúdo interno da janela */
  children: React.ReactNode;
  /** Classes adicionais de estilização */
  className?: string;
}

export default function TerminalWindow({
  fileName = "untitled",
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`group/window relative w-full animate-fade-in-up rounded-2xl border-2 border-[#2e2a24] bg-gradient-to-b from-terminal-window via-[#211d19] to-[#1a1815] shadow-2xl overflow-hidden transition-all duration-500 hover:border-terminal-neon/50 hover:shadow-lantern ${className}`}
    >
      {/* Brilho subtil de lanterna mágica no topo da moldura de madeira */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal-lantern/40 to-transparent opacity-70 group-hover/window:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />

      {/* Barra superior estilo diário de inventora / dispositivo antigo com magia digital */}
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 px-3.5 sm:px-5 py-3 bg-terminal-header/95 border-b border-[#2e2a24] select-none relative">
        {/* Três Susuwatari (bolinhas de fuligem) no canto superior esquerdo */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <Image
            src="/icons/soot-sprite-1.png"
            alt="Susuwatari 1"
            width={16}
            height={16}
            className="w-4 h-4 object-contain transition-transform duration-300 group-hover/window:scale-110"
          />
          <Image
            src="/icons/soot-sprite-2.png"
            alt="Susuwatari 2"
            width={16}
            height={16}
            className="w-4 h-4 object-contain transition-transform duration-300 group-hover/window:scale-110"
          />
          <Image
            src="/icons/soot-sprite-3.png"
            alt="Susuwatari 3"
            width={16}
            height={16}
            className="w-4 h-4 object-contain transition-transform duration-300 group-hover/window:scale-110"
          />
        </div>

        {/* Nome do ficheiro centralizado */}
        {fileName ? (
          <span className="text-center text-[11px] sm:text-sm font-mono text-terminal-cream/90 group-hover/window:text-terminal-lanternSoft group-hover/window:text-glow-lantern transition-colors break-all sm:truncate px-1">
            {fileName}
          </span>
        ) : (
          <span />
        )}

        {/* Espaçador simétrico para manter o título centrado */}
        <div className="w-12 sm:w-16 shrink-0" aria-hidden="true" />
      </div>

      {/* Corpo da janela do editor */}
      <div className="relative p-4 sm:p-6 font-mono text-terminal-text">
        {children}
      </div>
    </div>
  );
}
