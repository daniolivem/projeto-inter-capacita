# 🔧 Projeto E-commerce - Tecnobits
### _"Poder para o seu setup."_

Este projeto faz parte do curso de Front-End e será desenvolvido em equipe por 6 membros. A aplicação é uma loja virtual de componentes de hardware feita em **React** com **Vite**, seguindo os requisitos da escola.

---

## 👥 Equipe

| Membro | Nome         | Responsabilidade Principal                                      |
| ------ | ------------ | --------------------------------------------------------------- |
| 👤 1   | **Dani**     | ProductListing + Section + HomePage + Categorias (404)         |
| 👤 2   | **May**      | ProductOptions + Input + PageFinalizarCompra + BuySuccess      |
| 👤 3   | **Gaabe**    | Header + Logo + ProductViewPage + LoginPage                    |
| 👤 4   | **Carlos**   | FilterGroup + Buttons + ProductListingPage + ShoppingCartPage  |
| 👤 5   | **Vini**     | Footer + ProductCard + FormCreatePage                          |
| 👤 6   | **Anderson** | CustomSelect + Gallery + CreateAccountInitialPage              |

> Observação: todos podem revisar e ajudar nas tarefas uns dos outros via Pull Request!

---

## 🗂 Estrutura de pastas

```bash
src/
├── assets/               # Imagens de produtos e ícones
│   ├── images/
│   │   ├── motherboards/
│   │   ├── processors/
│   │   ├── graphics-cards/
│   │   ├── memory/
│   │   └── storage/
│   └── icons/
├── components/           # Componentes reutilizáveis
│   ├── Header/           # Gaabe
│   ├── Footer/           # Vini
│   ├── Logo/             # Gaabe
│   ├── ProductListing/   # Dani
│   ├── ProductCard/      # Vini
│   ├── ProductOptions/   # May
│   ├── BuyBox/
│   ├── Section/          # Dani
│   ├── FilterGroup/      # Carlos
│   ├── CategoryFilter/
│   ├── Gallery/          # Anderson
│   ├── CustomSelect/     # Anderson
│   ├── Input/            # May
│   └── Buttons/          # Carlos
├── pages/                # Páginas
│   ├── HomePage/         # Dani
│   ├── ProductListingPage/  # Carlos
│   ├── ProductViewPage/  # Gaabe
│   ├── ShoppingCartPage/ # Carlos
│   ├── LoginPage/        # Gaabe
│   ├── FormCreatePage/   # Vini
│   ├── CreateAccountInitialPage/  # Anderson
│   ├── PageFinalizarCompra/       # May
│   ├── BuySuccess/       # May
│   └── CategoriaPage/    # Dani (404)
├── data/                 # Dados mockados
│   └── products.json     # Produtos de hardware
├── contexts/             # Gerenciamento de estado
│   └── CartContext.jsx
├── App.jsx
└── main.jsx
```

---

## 📋 Regras de colaboração

- Criar sempre uma **branch por funcionalidade**:
  - Ex: `feat/homepage-slide`, `feat/header-nav`, `feat/product-card`
- Após concluir, **criar um Pull Request** e marcar a equipe para revisão.
- Nunca trabalhar direto na branch `main`.

---

## 🔄 Repartição de Tarefas

### 👤 **Dani** - HomePage + Componentes de Listagem

📁 Diretório: `src/pages/HomePage` + `src/components/`

**Responsável por:**
- Componente `<ProductListing />` (listagem de produtos)
- Componente `<Section />` (seções reutilizáveis)
- Página `HomePage` (página inicial)
- Página de Categorias + 404 (página não encontrada)

---

### 👤 **May** - Finalização de Compra + Inputs

📁 Diretório: `src/pages/` + `src/components/`

**Responsável por:**
- Componente `<ProductOptions />` (opções de produto)
- Componente `<Input />` (campos de entrada)
- Página `PageFinalizarCompra` (checkout)
- Página `BuySuccess` (confirmação de compra)

---

### 👤 **Gaabe** - Header + Visualização de Produto

📁 Diretório: `src/components/Header` + `src/pages/`

**Responsável por:**
- Componente `<Header />` (cabeçalho principal)
- Componente `<Logo />` (logotipo da Tecnobits)
- Página `ProductViewPage` (detalhes do produto)
- Página `LoginPage` (autenticação)

---

### 👤 **Carlos** - Filtros + Carrinho

📁 Diretório: `src/components/` + `src/pages/`

**Responsável por:**
- Componente `<FilterGroup />` (grupo de filtros)
- Componente `<Buttons />` (botões reutilizáveis)
- Página `ProductListingPage` (listagem com filtros)
- Página `ShoppingCartPage` (carrinho de compras)

---

### 👤 **Vini** - Footer + Cards

📁 Diretório: `src/components/` + `src/pages/`

**Responsável por:**
- Componente `<Footer />` (rodapé)
- Componente `<ProductCard />` (card de produto)
- Página `FormCreatePage` (formulário de criação)

---

### 👤 **Anderson** - Seleção + Galeria

📁 Diretório: `src/components/` + `src/pages/`

**Responsável por:**
- Componente `<CustomSelect />` (select personalizado)
- Componente `<Gallery />` (galeria de imagens)
- Página `CreateAccountInitialPage` (criação de conta)

---

## � Categorias de Hardware

A loja trabalhará com as seguintes categorias principais:

- **🔧 Processadores:** Intel Core, AMD Ryzen
- **🎮 Placas de Vídeo:** NVIDIA GeForce, AMD Radeon
- **🔌 Motherboards:** Gaming, Office, Workstation
- **💾 Memória RAM:** DDR4, DDR5, Gaming
- **💿 Armazenamento:** SSD, HDD, NVMe
- **⚡ Fontes:** Modular, Semi-modular, 80+ Gold
- **❄️ Refrigeração:** Air coolers, Liquid cooling
- **📦 Gabinetes:** Mid tower, Full tower, Mini-ITX
- **🔗 Periféricos:** Teclados, Mouses, Monitores

## �💅 Estilo e cores

Utilizar a paleta focada em tecnologia:

- Primary: `#00D4FF` (Azul tech)
- Secondary: `#FF6B35` (Laranja energia)
- Tertiary: `#1A1A2E` (Azul escuro)
- Background: `#16213E` (Azul profundo)
- Success: `#00C851` (Verde confirmação)
- Warning: `#FFB000` (Amarelo alerta)
- Error: `#FF3547` (Vermelho erro)
- Text: `#FFFFFF` / `#E0E6ED` (Textos claros)

## ✒️ Fontes e weights

Utilizar a fonte `Roboto` (ideal para tech):

- `Roboto-700` para títulos e preços
- `Roboto-500` para especificações e labels
- `Roboto-400` para textos descritivos
- `Roboto Mono` para códigos de produto

---

## 🧠 Dicas técnicas para Tecnobits

- Usar `react-router-dom` para rotas
- Usar `props.children` nos componentes de layout
- Usar `NavLink` para navegação com destaque na rota atual
- Preferência por componentes funcionais com hooks
- Reutilizar componentes com base em props
- **Específico para hardware:**
  - Implementar filtros por especificações (socket, memória, etc.)
  - Criar sistema de compatibilidade entre componentes
  - Adicionar comparador de produtos
  - Incluir calculadora de PSU (fonte de alimentação)

---

## ✅ Status do projeto

| Parte                          | Responsável | Status                                    |
| ------------------------------ | ----------- | ----------------------------------------- |
| Header + Logo                  | **Gaabe**   | ⬜️ Pendente                              |
| Footer + ProductCard           | **Vini**    | ⬜️ Pendente                              |
| HomePage + ProductListing      | **Dani**    | ⬜️ Pendente                              |
| ProductViewPage + LoginPage    | **Gaabe**   | ⬜️ Pendente                              |
| FilterGroup + Buttons          | **Carlos**  | ⬜️ Pendente                              |
| ProductListingPage + Cart      | **Carlos**  | ⬜️ Pendente                              |
| ProductOptions + Input         | **May**     | ⬜️ Pendente                              |
| Finalizar Compra + BuySuccess  | **May**     | ⬜️ Pendente                              |
| CustomSelect + Gallery         | **Anderson**| ⬜️ Pendente                              |
| CreateAccountInitialPage       | **Anderson**| ⬜️ Pendente                              |
| FormCreatePage                 | **Vini**    | ⬜️ Pendente                              |
| Section + Categorias (404)     | **Dani**    | ⬜️ Pendente                              |

---

## 📌 Como rodar o projeto

```bash
git clone https://github.com/SEU-USUARIO/tecnobits.git
cd tecnobits
npm install
npm start
```

---

> 🔧 Qualquer dúvida sobre compatibilidade de hardware ou sugestão técnica, converse com o time no grupo da equipe e atualize o progresso com Pull Requests! 

## 🚀 **Tecnobits - _"Poder para o seu setup."_**
### Vamos construir a melhor loja de hardware! 💻
