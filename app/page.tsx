import Image from "next/image";
import Navbar from "@/components/Navbar";
import TerminalWindow from "@/components/TerminalWindow";
import HeroApiMock from "@/components/HeroApiMock";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-terminal-bg text-terminal-text font-mono selection:bg-terminal-lantern selection:text-terminal-earth">
      {/* Cabeçalho Global (Tabs estilo VS Code + Ghibli) */}
      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-24 sm:space-y-28">
        {/* ================= SECÇÃO HERO (INÍCIO) ================= */}
        <section
          id="hero"
          className="scroll-mt-24 animate-fade-in-up grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center"
        >
          {/* Lado Esquerdo: Perfil, Foto, Bio e Botões */}
          <div className="w-full md:col-span-6 space-y-6">
            {/* Fotografia de Perfil Estilizada (Escala de cinzas que ganha cor no hover) */}
            <div className="relative w-64 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#2e2a24] bg-terminal-window group hover:border-terminal-neon transition-all duration-500 shadow-2xl hover:shadow-lantern">
              {/* Etiqueta de ficheiro de imagem estilo terminal */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-terminal-earth/85 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] text-terminal-cream font-mono border border-[#2e2a24] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/icons/totoro.png"
                  alt="Totoro"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 object-contain"
                />
                <span>sara.jpeg</span>
              </div>

              {/* A Imagem de Perfil em cores naturais */}
              <Image
                src="/sara.jpeg"
                alt="Sara Magalhães - Software Engineer"
                fill
                priority
                className="object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 288px"
              />

              {/* Overlay subtil para harmonizar com o fundo escuro */}
              <div className="absolute inset-0 bg-terminal-bg/10 group-hover:bg-transparent transition-all duration-500 pointer-events-none" />

              {/* Cursor de terminal a piscar no canto inferior direito */}
              <div className="absolute bottom-3 right-3 z-20 w-2.5 h-4 rounded-sm bg-terminal-neon animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="space-y-2">
              <p className="text-terminal-neon text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2 text-glow-leaf">
                <span>// Hello, World!</span>
              </p>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-terminal-text tracking-tight">
                Sara Magalhães
              </h1>
              <p className="text-lg sm:text-2xl text-terminal-cream/90 font-serif italic">
                Software Engineer
              </p>
            </div>

            <p className="text-terminal-cream/80 text-sm sm:text-base leading-relaxed max-w-xl">
              Engenheira de Software apaixonada por construir sistemas robustos
              de ponta a ponta. Foco em arquiteturas limpas, APIs escaláveis e
              interfaces rápidas que unem a precisão do terminal a uma atmosfera
              humana e encantadora.
            </p>

            {/* Três botões: View CV (TODO: adicionar PDF), GitHub, LinkedIn */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#hero"
                title="TODO: Adicionar cv-sara-magalhaes.pdf na pasta public/"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-terminal-neon to-terminal-lanternSoft text-terminal-earth font-bold text-xs sm:text-sm shadow-lantern hover:shadow-lantern-lg hover:scale-[1.02] transition-all duration-300"
              >
                View CV (Em breve)
              </a>
              <a
                href="https://github.com/SaraMag25"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl border border-[#2e2a24] bg-terminal-window text-terminal-text text-xs sm:text-sm hover:border-terminal-neon hover:text-terminal-neon hover:shadow-leaf transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl border border-[#2e2a24] bg-terminal-window text-terminal-text text-xs sm:text-sm hover:border-terminal-lantern hover:text-terminal-lanternSoft hover:shadow-lantern transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Lado Direito: Componente Interativo de Mock da API (100% largura em mobile) */}
          <div className="w-full md:col-span-6">
            <HeroApiMock />
          </div>
        </section>

        {/* ================= SECÇÃO DE PROJETOS ================= */}
        <Projects />

        {/* ================= SECÇÃO DE CONTACTOS ================= */}
        <section
          id="contact"
          className="scroll-mt-20 animate-fade-in-up space-y-8 w-full max-w-3xl mx-auto"
        >
          <div className="group/contact space-y-2 inline-block">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-terminal-text flex items-center gap-2.5">
              <Image
                src="/icons/jiji.png"
                alt="Jiji icon"
                width={20}
                height={20}
                className="w-5 h-5 object-contain shrink-0 transition-transform duration-300 group-hover/contact:-translate-y-0.5"
              />
              <span className="font-mono text-terminal-neon text-glow-leaf">
                ~/
              </span>
              <span>Contact.sh</span>
            </h2>
            <p className="text-sm text-terminal-cream/75 font-mono">
              // Envie uma requisição diretamente para a minha caixa de entrada
            </p>
          </div>

          <TerminalWindow fileName="ContactController.java">
            <ContactForm />
          </TerminalWindow>
        </section>
      </main>

      {/* Rodapé com Estilo de Terminal + Ghibli */}
      <Footer />
    </div>
  );
}
