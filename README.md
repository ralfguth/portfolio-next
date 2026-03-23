# Ralf Guth — Portfólio

Site pessoal e portfólio profissional. Desenvolvido com Next.js, React e TypeScript.

## Visão geral

Site de apresentação profissional com foco em comunicar experiência em desenvolvimento backend, arquitetura de software e tecnologias do ecossistema Java.

### Páginas

- **Home** — apresentação, stack de tecnologias, áreas de atuação, experiência e links externos
- **Sobre** — resumo profissional, trajetória, foco técnico, princípios de trabalho e contato

## Stack

- **Next.js 14** — framework React com Pages Router
- **React 18** — biblioteca de UI
- **TypeScript** — tipagem estática
- **CSS Modules** — estilos com escopo por componente
- **react-icons** — ícones de tecnologias (Simple Icons e Feather Icons)

## Estrutura do projeto

```
src/
├── components/
│   ├── home/          # Hero, Stack, Areas, Experience, ExternalLinks
│   └── layout/        # Header, Footer, Layout
├── data/              # Dados estáticos (profile, stack)
├── pages/             # Rotas (index, about, _app)
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
- Seção de stack com grupos de tecnologias
- Presença de textos, links e elementos principais

## CI/CD

### GitHub Actions

O workflow `.github/workflows/ci.yml` roda automaticamente em:

- Push para `main` e branches `feature/**`
- Pull requests para `main`

Etapas: instalar dependências → rodar testes → executar build.

### Deploy

O deploy acontece automaticamente ao fazer push para a branch `main`.

## Decisões técnicas

### Modernização

- **Next.js 12 → 14**: atualização para versão estável moderna, mantendo Pages Router por compatibilidade
- **TypeScript**: migração completa dos componentes e dados, com tipagem estrita mas pragmática
- **Estrutura src/**: organização padrão do Next.js com separação clara entre componentes, dados, estilos e testes

### Migração para TypeScript

- Todos os componentes migrados de `.js`/`.jsx` para `.tsx`
- Dados e tipos em `.ts`
- Props tipadas em todos os componentes
- Interfaces locais e simples, sem abstrações excessivas
- Tipagem estrita habilitada no `tsconfig.json`

### Testes

- Jest configurado via `next/jest` para integração nativa com Next.js
- Testes focados em comportamento visível (textos, links, navegação)
- Sem snapshot tests — testes baseados em queries semânticas
- Setup mínimo com mock do `next/router`

### Animações

- Todas as animações feitas exclusivamente com CSS (`@keyframes`, `transition`)
- Fade-in e slide-up em entrada de seções
- Hover states em cards, links e itens de stack
- Respeita `prefers-reduced-motion` para acessibilidade

### Estilo visual

- Design escuro, minimalista e técnico
- CSS Modules para escopo de estilos
- Variáveis CSS para consistência (cores, fontes, transições)
- Layout responsivo com breakpoint em 640px
