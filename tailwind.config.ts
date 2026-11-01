import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "var(--font-inter)",
        "Inter",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "sans-serif",
      ],
      mono: [
        "var(--font-jetbrains-mono)",
        "JetBrains Mono",
        "Fira Code",
        "Consolas",
        "monospace",
      ],
      serif: [
        "var(--font-lora)",
        "Lora",
        "Georgia",
        "Cambria",
        "serif",
      ],
    },
    extend: {
      colors: {
        terminal: {
          bg: "#0e2231",         // Mistura profunda de azul-noturno com verde-floresta Ghibli
          earth: "#11293b",      // Azul-petróleo escuro
          window: "#132d42",     // Fundo das janelas em azul-oceano escuro
          header: "#183852",     // Barra superior em azul-marinho suave
          border: "#28536b",     // Borda azul-esverdeada (teal/sky)
          text: "#f4fbf7",       // Branco suave
          cream: "#d5f5e3",      // Tom suave esverdeado/azulado claro
          muted: "#94a3b8",      // Azul-ardósia suave para metadados
          neon: "#86efac",       // Verde-folha vibrante Ghibli
          green: "#7ccf35",      // Verde terminal clássico
          neonHover: "#38bdf8",  // Azul-celeste luminoso no hover
          lantern: "#38bdf8",    // Azul-ciano bioluminescente
          lanternSoft: "#7dd3fc",// Luz azul-celeste suave
          dot: {
            red: "#f87171",
            yellow: "#38bdf8",
            green: "#86efac",
          },
        },
      },
      boxShadow: {
        lantern: "0 0 20px rgba(56, 189, 248, 0.3), 0 0 8px rgba(134, 239, 172, 0.25)",
        "lantern-lg": "0 0 30px rgba(56, 189, 248, 0.45), 0 0 14px rgba(134, 239, 172, 0.35)",
        leaf: "0 0 18px rgba(134, 239, 172, 0.3)",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        floatParticle: {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translateY(-12px) translateX(6px) rotate(12deg)",
            opacity: "0.95",
          },
        },
        swayLeaf: {
          "0%, 100%": {
            transform: "rotate(-6deg) scale(1)",
          },
          "50%": {
            transform: "rotate(8deg) scale(1.08)",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 4px rgba(253, 224, 71, 0.4))",
          },
          "50%": {
            filter: "drop-shadow(0 0 10px rgba(253, 224, 71, 0.85))",
          },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float-particle": "floatParticle 3.2s ease-in-out infinite",
        "float-particle-slow": "floatParticle 4.5s ease-in-out infinite 0.8s",
        "sway-leaf": "swayLeaf 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
