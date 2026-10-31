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
        "var(--font-jetbrains-mono)",
        "JetBrains Mono",
        "Fira Code",
        "Consolas",
        "monospace",
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
          bg: "#1a2421",         // Verde-floresta muito escuro e caloroso
          earth: "#1e1b18",      // Terra-escuro / madeira antiga
          window: "#1e1b18",     // Fundo de madeira/diário antigo das janelas
          header: "#26211c",     // Barra superior estilo madeira/ferro antigo
          border: "#2e2a24",     // Borda orgânica de madeira escura / papel antigo
          text: "#fdf6e2",       // Creme suave principal
          cream: "#f5e6c4",      // Pergaminho / creme quente secundário
          muted: "#94a3b8",      // Tom suave para metadados e comentários
          neon: "#86efac",       // Verde-folha vibrante e natural
          green: "#86efac",      // Alias para verde-folha
          neonHover: "#a7f3d0",  // Verde-folha suave iluminado no hover
          lantern: "#fde047",    // Amarelo/laranja caloroso de lanterna mágica
          lanternSoft: "#fef08a",// Brilho suave de lanterna
          dot: {
            red: "#f87171",      // Coral orgânico suave
            yellow: "#fde047",   // Luz de lanterna
            green: "#86efac",    // Verde-folha
          },
        },
      },
      boxShadow: {
        lantern: "0 0 18px rgba(253, 224, 71, 0.28), 0 0 6px rgba(134, 239, 172, 0.18)",
        "lantern-lg": "0 0 28px rgba(253, 224, 71, 0.38), 0 0 12px rgba(134, 239, 172, 0.25)",
        leaf: "0 0 16px rgba(134, 239, 172, 0.25)",
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
