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
          bg: "#08090c",
          earth: "#0d0f14",
          window: "#12151e",
          header: "#181c26",
          border: "#262c3a",
          text: "#faf7f2",
          cream: "#efe4d2",
          muted: "#94a3b8",
          neon: "#60a5fa",
          green: "#3b82f6",
          neonHover: "#93c5fd",
          lantern: "#fbbf24",
          lanternSoft: "#93c5fd",
          rose: "#fb7185",
          dot: {
            red: "#fb7185",
            yellow: "#fbbf24",
            green: "#60a5fa",
          },
        },
      },
      boxShadow: {
        lantern: "0 0 20px rgba(96, 165, 250, 0.28), 0 0 8px rgba(251, 191, 36, 0.15)",
        "lantern-lg": "0 0 30px rgba(96, 165, 250, 0.42), 0 0 14px rgba(251, 191, 36, 0.22)",
        leaf: "0 0 18px rgba(96, 165, 250, 0.28)",
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
