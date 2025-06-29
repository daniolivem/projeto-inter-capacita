# E-commerce de Hardware - Frontend React

Bem-vindos ao projeto de frontend do nosso e-commerce de hardware! Este README servirá como o ponto de partida e guia principal para o desenvolvimento da aplicação em React. Nosso objetivo é construir uma interface de usuário intuitiva e responsiva para apresentar uma variedade de 100 produtos de hardware.

-----

## Visão Geral do Projeto

Este é um projeto **apenas de frontend**, o que significa que focaremos exclusivamente na interface do usuário (UI) e na experiência do usuário (UX). A comunicação com a "API" será simulada por meio de dados em arquivos JSON locais.

**Tecnologias Principais:**

  * **React 19.1.0:** ✅ Biblioteca para construção da interface de usuário.
  * **Vite 7.0.0:** ✅ Ferramenta de build rápida e moderna.
  * **ESLint:** ✅ Linting de código para manter qualidade.
  * **React Router DOM:** 📋 Para gerenciamento de rotas e navegação (a instalar).
  * **Context API:** 📋 Para gerenciamento de estado global (a implementar).
  * **CSS Modules:** 📋 Para modularização do CSS (a configurar).
  * **Git e GitHub:** ✅ Para controle de versão e colaboração.

**Legenda:** ✅ Configurado | 📋 Pendente

-----

## Estrutura do Projeto (Planejada)

A organização do código é fundamental para a colaboração eficiente. Seguiremos a seguinte estrutura de pastas conforme o projeto evolui:

```
src/
├── assets/                  # Imagens, ícones, fontes (✅ criado)
│   ├── images/              # (📋 a criar)
│   ├── icons/               # (📋 a criar)
│   └── fonts/               # (📋 a criar)
├── components/              # Componentes reutilizáveis (📋 a criar)
│   ├── Button/
│   │   └── Button.jsx
│   │   └── Button.module.css
│   └── ProductCard/
│       └── ProductCard.jsx
│       └── ProductCard.module.css
├── contexts/                # Context API para estado global (📋 a criar)
│   └── CartContext.jsx
├── pages/                   # Componentes de página (📋 a criar)
│   ├── Home/
│   │   └── Home.jsx
│   │   └── Home.module.css
│   └── ProductDetail/
│       └── ProductDetail.jsx
│       └── ProductDetail.module.css
├── data/                    # Arquivos JSON mockados (📋 a criar)
│   └── products.json
├── hooks/                   # Custom Hooks (📋 a criar)
│   └── useCart.js
├── services/                # Simulação de API (📋 a criar)
│   └── products.js
├── utils/                   # Funções utilitárias (📋 a criar)
│   └── helpers.js
├── App.jsx                  # Componente raiz (✅ criado)
├── main.jsx                 # Ponto de entrada (✅ criado)
├── routes.jsx               # Definição das rotas (📋 a criar)
└── styles/                  # Estilos globais (📋 a criar)
    ├── global.css
    └── variables.css
```

**Legenda:** ✅ Criado | 📋 A criar

-----

## Divisão de Responsabilidades e Componentes

Para otimizar nosso trabalho em equipe, dividiremos as responsabilidades com base nos componentes e páginas do projeto. A comunicação constante é crucial para evitar retrabalho e garantir a integração.

**Páginas Principais:**

  * **Página Inicial (Homepage):** Layout geral, destaque de produtos, categorias.
  * **Página de Produto (Product Detail Page):** Exibição detalhada de um produto, informações e botão "Adicionar ao Carrinho".
  * **Página de Listagem de Produtos (Product Listing Page):** Exibição de todos os produtos/filtrados, opções de filtro e ordenação.
  * **Página de Carrinho (Cart Page):** Itens no carrinho, resumo da compra.
  * **Página de Checkout (Checkout Page):** Formulários de endereço e pagamento, finalização do pedido.
  * **Páginas Institucionais:** Contato, Sobre, Políticas, etc.

**Componentes Reutilizáveis:**

  * **Header e Footer:** Elementos de navegação e informações gerais do site.
  * **Card de Produto:** Componente reutilizável para exibir produtos em listagens.
  * **Componentes de UI:** Botões, inputs, modais, loaders, dropdowns.
  * **Sistema de Filtros e Ordenação:** Lógica e UI para filtrar e ordenar produtos.
  * **Galeria de Imagens:** Componente para visualização de múltiplas imagens de um produto.

**Gerenciamento de Estado (Context API):**

  * **Contexto do Carrinho:** Gerenciamento dos itens adicionados ao carrinho, quantidade, total.
  * **Contexto de Autenticação (se aplicável):** Gerenciamento de estado de login/usuário (mesmo que mockado).

-----

## Estado Atual do Projeto

**Status:** ✅ Projeto inicial configurado com Vite + React

**Estrutura atual:**
```
projeto-inter-capacita/
├── public/                  # Arquivos públicos estáticos
├── src/                     # Código fonte da aplicação
│   ├── assets/              # Imagens e recursos (react.svg)
│   ├── App.jsx              # Componente principal da aplicação
│   ├── App.css              # Estilos do componente App
│   ├── main.jsx             # Ponto de entrada da aplicação
│   └── index.css            # Estilos globais
├── package.json             # Dependências e scripts do projeto
├── vite.config.js           # Configuração do Vite
├── eslint.config.js         # Configuração do ESLint
└── README.md                # Este arquivo
```

**Dependências instaladas:**
- React 19.1.0
- React DOM 19.1.0
- Vite 7.0.0 (ferramenta de build)
- ESLint (linting de código)

## Como Começar

1.  **Instale as Dependências (se necessário):**
    ```bash
    npm install
    ```

2.  **Inicie o Servidor de Desenvolvimento:**
    ```bash
    npm start
    ```
    Isso abrirá a aplicação no seu navegador padrão em `http://localhost:5173`.

-----

## Fluxo de Trabalho (Git)

Seguiremos o fluxo **Git Flow Simplificado**:

1.  **Crie uma nova branch para sua feature/tarefa:**

    ```bash
    git checkout -b feature/nome-da-sua-feature
    ```

    Exemplos: `feature/product-card`, `feature/home-page-layout`, `fix/cart-bug`.

2.  **Desenvolva sua feature:** Faça suas alterações e commits regularmente.

    ```bash
    git add .
    git commit -m "feat: Adiciona componente ProductCard"
    ```

3.  **Mantenha sua branch atualizada com a `main`:**

    ```bash
    git pull origin main
    ```

    Resolva quaisquer conflitos de merge que possam surgir.

4.  **Envie sua branch para o GitHub:**

    ```bash
    git push origin feature/nome-da-sua-feature
    ```

5.  **Abra um Pull Request (PR):** No GitHub, crie um Pull Request da sua branch para a branch `main`.

      * Descreva as mudanças que você fez.
      * **Solicite uma revisão de código** de um ou mais colegas de equipe.

6.  **Revisão de Código:** Seu código será revisado. Faça as alterações solicitadas, se houver.

7.  **Merge:** Após a aprovação, seu PR será mesclado na branch `main`.

-----

## Convenções de Código

  * **Nomeclatura:**
      * **Componentes:** PascalCase (Ex: `ProductCard.jsx`, `HomePage.jsx`).
      * **Arquivos CSS Modules:** `Componente.module.css` (Ex: `ProductCard.module.css`).
      * **Variáveis/Funções:** camelCase.
      * **Pastas:** kebab-case ou lowercase.
  * **Estilo:** Manteremos um estilo de código consistente. Usaremos ferramentas como **ESLint** e **Prettier** para ajudar a aplicar as regras automaticamente.
  * **Commits:** Mensagens claras e concisas, seguindo o padrão Conventional Commits (Ex: `feat: adiciona funcionalidade X`, `fix: corrige bug Y`).

-----

## Comunicação

A comunicação é a chave para o sucesso do projeto. Utilize nosso canal de comunicação (WhatsApp/Discord/Slack) para:

  * **Reuniões Diárias (Stand-ups):** Compartilhar o que você fez, o que fará e quaisquer bloqueios.
  * **Dúvidas e Ajuda:** Peça ajuda se estiver travado.
  * **Discussões:** Discutir decisões de design ou implementação.

-----

## Próximos Passos

Para dar continuidade ao desenvolvimento do e-commerce, sugerimos a seguinte ordem de implementação:

### 📋 Fase 1 - Configuração Base
1. **Instalar React Router DOM:** `npm install react-router-dom`
2. **Criar estrutura de pastas** conforme planejado acima
3. **Configurar roteamento básico** (Home, Products, Cart, etc.)
4. **Criar componentes base** (Header, Footer, Layout)

### 📋 Fase 2 - Dados e Serviços  
1. **Criar arquivo de dados mockados** (`src/data/products.json`)
2. **Implementar serviços** para buscar produtos
3. **Criar Context API** para gerenciamento de estado
4. **Implementar hook customizado** para carrinho

### 📋 Fase 3 - Componentes e Páginas
1. **Desenvolver ProductCard** (componente reutilizável)
2. **Criar páginas principais** (Home, ProductList, ProductDetail, Cart)
3. **Implementar sistema de filtros** e busca
4. **Adicionar responsividade** com CSS

### 📋 Fase 4 - Funcionalidades Avançadas
1. **Implementar carrinho de compras** completo
2. **Criar formulário de checkout**
3. **Adicionar validações** de formulário
4. **Implementar persistência** no localStorage
