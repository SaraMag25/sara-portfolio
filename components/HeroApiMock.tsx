"use client";

import React, { useState } from "react";
import Image from "next/image";
import TerminalWindow from "@/components/TerminalWindow";

export default function HeroApiMock() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleExecute() {
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  }

  return (
    <TerminalWindow fileName="PortfolioController.java">
      <div className="space-y-4">
        {/* Barra do Endpoint GET + Botão Invoque com ícone do Calcifer */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 p-2.5 rounded-xl bg-terminal-bg/90 border border-terminal-border">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm overflow-x-auto">
            <span className="px-2.5 py-0.5 rounded-md bg-terminal-neon/15 text-terminal-neon font-bold border border-terminal-neon/30 shadow-leaf">
              GET
            </span>
            <code className="text-terminal-cream whitespace-nowrap">
              api/cv/profile
            </code>
          </div>

          <button
            type="button"
            onClick={handleExecute}
            disabled={status === "loading"}
            className="group/btn relative px-4 py-1.5 rounded-lg bg-gradient-to-r from-terminal-neon to-terminal-lanternSoft text-terminal-earth font-bold text-xs shadow-lantern hover:shadow-lantern-lg hover:scale-[1.03] transition-all duration-300 shrink-0 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-1.5"
          >
            <span>{status === "loading" ? "Invocando..." : "Invoque"}</span>
            <Image
              src="/icons/calcifer.png"
              alt="Calcifer"
              width={16}
              height={16}
              className="w-4 h-4 object-contain group-hover/btn:animate-pulse"
            />
          </button>
        </div>

        {/* Área de Resposta da API */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-terminal-muted">
            <span>
              {status === "success"
                ? "// Response (200 OK)"
                : status === "loading"
                ? "// A consultar o servidor..."
                : "// Pronto para invocar"}
            </span>
            <span className="text-terminal-lantern text-glow-lantern">
              application/json
            </span>
          </div>

          <div className="p-4 rounded-xl bg-terminal-bg/85 border border-terminal-border text-xs sm:text-sm overflow-x-auto leading-relaxed min-h-[230px] flex items-center">
            {status === "idle" && (
              <p className="text-terminal-cream/80">
                &gt; Clique em{" "}
                <span className="text-terminal-lantern font-bold text-glow-lantern">
                  Invoque
                </span>{" "}
                para enviar uma requisição GET a{" "}
                <code className="text-terminal-neon">api/cv/profile</code>...
              </p>
            )}

            {status === "loading" && (
              <div className="flex items-center gap-2 text-terminal-lantern animate-pulse text-glow-lantern">
                <Image
                  src="/icons/calcifer.png"
                  alt="Calcifer"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain animate-pulse"
                />
                <span>&gt; Invocando dados do servidor...</span>
              </div>
            )}

            {status === "success" && (
              <pre className="w-full animate-fade-in-up font-mono">
                <code>
                  <span className="text-terminal-muted">{"{\n"}</span>
                  {"  "}
                  <span className="text-terminal-neon">&quot;name&quot;</span>
                  <span className="text-terminal-muted">: </span>
                  <span className="text-terminal-lanternSoft">
                    &quot;Sara Magalhães&quot;
                  </span>
                  <span className="text-terminal-muted">{",\n"}</span>
                  {"  "}
                  <span className="text-terminal-neon">&quot;course&quot;</span>
                  <span className="text-terminal-muted">: </span>
                  <span className="text-terminal-lanternSoft">
                    &quot;Computer Engineering @ UFC&quot;
                  </span>
                  <span className="text-terminal-muted">{",\n"}</span>
                  {"  "}
                  <span className="text-terminal-neon">&quot;skills&quot;</span>
                  <span className="text-terminal-muted">: [\n</span>
                  {"    "}
                  <span className="text-terminal-cream">&quot;Python&quot;</span>
                  <span className="text-terminal-muted">, </span>
                  <span className="text-terminal-cream">&quot;React&quot;</span>
                  <span className="text-terminal-muted">, </span>
                  <span className="text-terminal-cream">&quot;Next.js&quot;</span>
                  <span className="text-terminal-muted">, </span>
                  <span className="text-terminal-cream">&quot;Django&quot;</span>
                  <span className="text-terminal-muted">, </span>
                  <span className="text-terminal-cream">&quot;C/C++&quot;</span>
                  {"\n  "}
                  <span className="text-terminal-muted">{"]"}</span>
                  <span className="text-terminal-muted">{",\n"}</span>
                  {"  "}
                  <span className="text-terminal-neon">
                    &quot;Open to work&quot;
                  </span>
                  <span className="text-terminal-muted">: </span>
                  <span className="text-terminal-lantern font-bold text-glow-lantern">
                    true
                  </span>
                  {"\n"}
                  <span className="text-terminal-muted">{"}"}</span>
                </code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </TerminalWindow>
  );
}
