<div align="center">

# 🌿 Sara Magalhães — Portfólio Pessoal

[![Deploy com Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://sara-portfolio-nine-zeta.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js%2014-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<p align="center">
  <strong>Portfólio moderno unindo a estética de terminal/editor de código à atmosfera acolhedora do Studio Ghibli.</strong>
</p>

[🌐 **Visitar Projeto Online**](https://sara-portfolio-nine-zeta.vercel.app/) • [📄 **Currículo (PDF)**](https://sara-portfolio-nine-zeta.vercel.app/cv-sara-magalhaes.pdf)

</div>

---

## ✨ Sobre o Projeto

Este projeto foi desenvolvido para apresentar minha trajetória, pesquisas e projetos práticos como graduanda em **Engenharia de Computação na UFC (Universidade Federal do Ceará)**. 

A interface combina:
- 💻 **Tema Terminal & Code Editor:** Abas inspiradas em editores de código (`page.tsx`, `Articles.md`, `Projects.md`, `Contact.sh`), janelas estilizadas e simulação interativa de requisições API.
- 🎨 **Atmosfera Studio Ghibli:** Paleta de tons escuros aconchegantes com toques bioluminescentes, ícones em pixel art (Totoro, Calcifer, Susuwatari/Soot Sprites e águas-vivas no rodapé).
- 🌐 **Internacionalização Dinâmica (i18n):** Suporte nativo completo a **Português (PT-BR)** e **Inglês (EN)** com detecção automática do navegador e persistência da escolha do usuário.

---

## 🚀 Funcionalidades Principais

- **Alternância de Idioma (PT / EN):** Tradução instantânea de toda a interface, biografia, projetos e formulários, além de servir o currículo no idioma correspondente.
- **Hero Interativo (`PortfolioController.py`):** Simula uma requisição `GET api/cv/profile` retornando a resposta JSON com minhas stacks e formação acadêmica.
- **Seção de Artigos e Pesquisa:** Destaque para pesquisa em **Edge AI / Visão Computacional (YOLO12n)** voltada ao monitoramento inteligente de pragas agrícolas sem agrotóxicos, com acesso ao PDF do paper científico.
- **Carrossel de Projetos Reais:** Exibição detalhada de sistemas em produção e MVPs:
  - **Sistema ERP LESC:** Gestão interna de laboratório de pesquisa (React, Next.js, Zod, Tailwind).
  - **Sistema Assidui:** Gestão automatizada de frequência escolar em Fortaleza (Django, REST, React Native, PostgreSQL).
  - **App EcoCiclo:** Gestão consciente de resíduos recicláveis para Android (Kotlin, Jetpack Compose).
  - **MonitoraME:** Inteligência e análise de licitações públicas municipais (Next.js, Tailwind, REST API).
- **Formulário de Contato com Envio Real:** Integração completa via rota de API Next.js com o serviço **Resend**, com validação de dados, escape contra injeção e resposta instantânea na caixa de entrada.
- **SEO & Open Graph:** Imagem de card gerada exclusivamente para compartilhamento em redes sociais (`og-preview.png`), `sitemap.xml` dinâmico e `robots.txt`.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Tipografia:** JetBrains Mono, Inter e Lora
- **E-mails Transacionais:** [Resend SDK](https://resend.com/)
- **Ícones & Arte:** Pixel Art temático Studio Ghibli
- **Hospedagem & CI/CD:** [Vercel](https://vercel.com/)

---

## 💻 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SaraMag25/sara-portfolio.git
   cd sara-portfolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz baseado no `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Preencha com sua chave da Resend:
   ```env
   RESEND_API_KEY=sua_chave_aqui
   CONTACT_TO_EMAIL=seu_email@exemplo.com
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 👩‍💻 Autora

**Sara Magalhães**  
*Graduanda em Engenharia de Computação — Universidade Federal do Ceará (UFC)*

- 💼 **LinkedIn:** [linkedin.com/in/sarasousamagalhaes](https://www.linkedin.com/in/sarasousamagalhaes)
- 🐙 **GitHub:** [github.com/SaraMag25](https://github.com/SaraMag25)
- 📧 **Contato:** [saradesousamagalhaes@gmail.com](mailto:saradesousamagalhaes@gmail.com)

---

<div align="center">
  <sub>Feito com carinho e código ✨</sub>
</div>
