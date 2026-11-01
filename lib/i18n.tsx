"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "pt" | "en";

const STORAGE_KEY = "portfolio-lang";

export const dictionary = {
  pt: {
    nav: {
      hero: "Início",
      articles: "Artigos",
      projects: "Projetos",
      contact: "Contato",
      switchTo: "Switch to English",
    },
    hero: {
      greeting: "Olá, Mundo!",
      role: "Engenheira de Computação",
      bio: "Olá! Sou estudante de Engenharia de Computação na UFC e adoro dar vida a ideias através do código. Gosto de construir desde a lógica por trás dos sistemas até interfaces leves e intuitivas que as pessoas realmente gostem de usar. Fique à vontade para explorar o meu cantinho e conversar comigo!",
      viewCv: "Ver Currículo",
      cvUrl: "/cv-sara-magalhaes.pdf",
      photoAlt: "Sara Magalhães - Engenheira de Computação",
    },
    apiMock: {
      execute: "Executar",
      executing: "Executando...",
      ready: "Pronto para executar",
      loading: "Consultando o servidor...",
      response: "Resposta (200 OK)",
      idleBefore: "Clique em",
      idleAfter: "para enviar uma requisição GET para",
      loadingMsg: "Executando requisição no servidor...",
      course: "Engenharia de Computação @ UFC",
    },
    sections: {
      articlesSubtitle: "Pesquisa científica e publicações acadêmicas",
      projectsSubtitle: "Seleção de projetos e arquiteturas desenvolvidas",
      contactSubtitle:
        "Envie uma mensagem diretamente para a minha caixa de entrada",
    },
    project: {
      viewSource: "Ver Código",
      readArticle: "Ler Artigo",
      image: "imagem",
      prevImage: "Imagem anterior",
      nextImage: "Próxima imagem",
      goToImage: "Ir para imagem",
    },
    contact: {
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "voce@exemplo.com",
      messagePlaceholder: "Escreva sua mensagem aqui...",
      send: "Enviar Requisição",
      sending: "Enviando...",
      success: "Status 200: Mensagem enviada com sucesso.",
      errorGeneric: "Não foi possível enviar a mensagem. Tente novamente.",
    },
    footer: {
      status: "transformando ideias em código",
      jellyfish: "Água-viva bioluminescente",
    },
  },
  en: {
    nav: {
      hero: "Home",
      articles: "Articles",
      projects: "Projects",
      contact: "Contact",
      switchTo: "Mudar para Português",
    },
    hero: {
      greeting: "Hello, World!",
      role: "Computer Engineer",
      bio: "Hi! I'm a Computer Engineering student at UFC (Federal University of Ceará) and I love bringing ideas to life through code. I enjoy building everything from the logic behind systems to lightweight, intuitive interfaces that people genuinely enjoy using. Feel free to explore my little corner and get in touch!",
      viewCv: "View CV",
      cvUrl: "/cv-sara-magalhaes-en.pdf",
      photoAlt: "Sara Magalhães - Computer Engineer",
    },
    apiMock: {
      execute: "Run",
      executing: "Running...",
      ready: "Ready to run",
      loading: "Querying the server...",
      response: "Response (200 OK)",
      idleBefore: "Click",
      idleAfter: "to send a GET request to",
      loadingMsg: "Running request on the server...",
      course: "Computer Engineering @ UFC",
    },
    sections: {
      articlesSubtitle: "Scientific research and academic publications",
      projectsSubtitle: "A selection of projects and architectures I've built",
      contactSubtitle: "Send a message straight to my inbox",
    },
    project: {
      viewSource: "View Source",
      readArticle: "Read Paper",
      image: "image",
      prevImage: "Previous image",
      nextImage: "Next image",
      goToImage: "Go to image",
    },
    contact: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Your API request here...",
      send: "POST Request",
      sending: "Sending...",
      success: "Status 200: Message delivered successfully.",
      errorGeneric: "Could not send your message. Please try again.",
    },
    footer: {
      status: "turning ideas into code",
      jellyfish: "Bioluminescent jellyfish",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Lang];

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en") {
      setLangState(stored);
    } else if (!navigator.language.toLowerCase().startsWith("pt")) {
      setLangState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "pt" ? "en" : "pt");
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t: dictionary[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
