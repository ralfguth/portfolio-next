# Ralf Guth — Portfólio

Site pessoal e portfólio profissional. Desenvolvido com Next.js, React e TypeScript.

## Visão geral

Site de apresentação profissional com foco em comunicar experiência em desenvolvimento backend, arquitetura de software e tecnologias do ecossistema Java.

### Páginas

- **Home** — apresentação, tecnologias, áreas de atuação, experiência, formação e links externos
- **Sobre** — resumo profissional, trajetória, foco técnico, princípios de trabalho e contato

## Stack

- **Next.js 16** — framework React com Pages Router
- **React 18** — biblioteca de UI
- **TypeScript** — tipagem estática
- **CSS Modules** — estilos com escopo por componente
- **react-icons** — ícones de tecnologias (Simple Icons e Feather Icons)

## Estrutura do projeto

```
src/
├── components/
│   ├── home/          # Hero, Stack, Areas, Experience, Education, ExternalLinks
│   └── layout/        # Header, Footer, Layout, LanguageSwitch, ThemeToggle
├── contexts/          # ThemeContext (dark/light), LanguageContext (PT/EN)
├── data/              # Dados estáticos (profile, stack, translations)
├── hooks/             # useScrollReveal, useActiveSection
├── pages/             # Rotas (index, about, _app, _document)
├── styles/            # CSS Modules e globals
├── types/             # Interfaces TypeScript
└── __tests__/         # Testes unitários
```

## Como rodar localmente

```bash
npm install
npm run dev
```

O site estará disponível em `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Testes

```bash
npm test              # executa todos os testes
npm run test:watch    # modo watch
```

### Stack de testes

- **Jest 30** — test runner
- **React Testing Library** — testes de componentes
- **@testing-library/jest-dom** — matchers adicionais

### O que é testado

- Renderização da home e da página about
- Header e navegação
- Seção de tecnologias com grupos
- Presença de textos, links e elementos principais

## CI/CD

### GitHub Actions

O workflow `.github/workflows/ci.yml` roda automaticamente em:

- Push para `main` e branches `feature/**`
- Pull requests para `main`

Etapas: instalar dependências → rodar testes → executar build.

### Deploy

O deploy acontece automaticamente ao fazer push para a branch `main`.

## Funcionalidades

### Internacionalização (i18n)

- Suporte a Português e Inglês
- Troca de idioma via botão no header
- Todos os textos centralizados em `src/data/translations.ts`

### Temas

- Tema claro (padrão) e escuro
- Toggle no header com persistência via localStorage
- Script anti-flash no `_document.tsx` para evitar piscar o tema errado no carregamento

### Animações e scroll reveal

- **Scroll reveal** — elementos aparecem ao entrar na viewport via Intersection Observer (`useScrollReveal` hook)
- **Hero animado** — stagger por elemento com easing exponencial, terminal CSS com linhas que "digitam" sequencialmente e flutuação sutil
- **Timeline** — experiência profissional com linha vertical, dots e pulsação no cargo atual
- **Micro-interações** — underline animado em links, hover com cores por plataforma nos links externos, dot verde pulsante na formação em andamento
- Respeita `prefers-reduced-motion` para acessibilidade

### Navegação

- Header sticky com sombra progressiva ao rolar
- Indicador da seção ativa no nav via Intersection Observer (`useActiveSection` hook)
- Menu mobile com transição suave (max-height + opacity)
- Scroll suave para âncoras de seção

## Decisões técnicas

### Design system

- **Design tokens** — escala tipográfica (`--font-size-xs` a `--font-size-4xl`), espaçamento (`--space-xs` a `--space-3xl`) e cores semânticas como variáveis CSS
- **Duas paletas completas** — dark e light com variáveis para accent, gradientes, superfícies e glows
- **CSS Modules** — escopo de estilos por componente, keyframes locais para evitar colisão
- **Layout responsivo** — breakpoint em 640px, mobile-first

### Modernização

- **Next.js 16**: versão moderna com Turbopack, mantendo Pages Router
- **TypeScript**: migração completa com tipagem estrita
- **Estrutura src/**: organização com separação entre componentes, dados, hooks, estilos e testes

### Testes

- Jest configurado via `next/jest` para integração nativa com Next.js
- Testes focados em comportamento visível (textos, links, navegação)
- Sem snapshot tests — testes baseados em queries semânticas
- Mocks de `matchMedia` e `IntersectionObserver` no jest setup para ambiente jsdom
