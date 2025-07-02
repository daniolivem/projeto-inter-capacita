Aqui está uma versão consolidada e sem duplicidades do seu README.md, pronta para copiar e colar no GitHub:

```markdown
# 🔧 Projeto E-commerce - Tecnobits

_"Poder para o seu setup."_

Este projeto faz parte do módulo intermediário do Capacita Brasil e será desenvolvido em equipe por 6 membros. O objetivo é criar um **Frontend React completo** para uma loja virtual de componentes de hardware.

---

## 📊 Visão Geral do Projeto

### 🎯 Objetivo

Desenvolver uma loja virtual completa e moderna especializada em componentes de hardware para computadores, proporcionando uma experiência de compra intuitiva e profissional.

### 🎮 Conceito da Loja

A **Tecnobits** é uma loja especializada em hardware para gamers, entusiastas e profissionais de TI. Oferecemos desde componentes básicos até configurações high-end para quem busca **"Poder para o seu setup"**.

---

## 🎯 Requisitos Mínimos Obrigatórios

- ✅ **Frontend em React** para página de E-commerce
- 📦 **Mínimo 100 produtos** com descrição, preço e fotos
- 🛒 **Carrinho de compras** que calcula preço total com quantidades
- 🔄 **Finalização de compra** completa
- 🌐 **Mínimo 3 páginas dinâmicas** com rotas específicas:
  - 🏠 Página Inicial
  - 📄 Detalhes do Produto  
  - 🛒 Carrinho de Compras

### ✨ Funcionalidades Extras

- 📑 **Listagem de Produtos** com filtros avançados
- 🔐 **Sistema de Login/Cadastro** completo
- 💳 **Checkout e Finalização** profissional
- ✅ **Confirmação de Compra** detalhada
- 🚫 **Página 404** para rotas inexistentes

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React 19.1.0 + Vite 7.0.0
- **Estilização:** CSS puro
- **Roteamento:** React Router DOM
- **Estado Global:** Context API (carrinho, autenticação)
- **Controle de Qualidade:** ESLint + Prettier
- **Versionamento:** Git & GitHub
- **Deploy:** (A definir - Vercel/Netlify)

---

## 🗺️ Mapa de Rotas da Aplicação

| Rota           | Componente                | Responsável | Descrição                                  |
| -------------- | ------------------------ | ----------- | ------------------------------------------ |
| `/`            | HomePage                 | Dani        | Página inicial com produtos em destaque    |
| `/products`    | ProductListingPage       | Carlos      | Listagem completa com filtros              |
| `/product/:id` | ProductViewPage          | Gaabe       | Detalhes específicos do produto            |
| `/cart`        | ShoppingCartPage         | Carlos      | Carrinho de compras com cálculos           |
| `/checkout`    | PageFinalizarCompra      | May         | Processo de finalização                    |
| `/success`     | BuySuccess               | May         | Confirmação de compra realizada            |
| `/login`       | LoginPage                | Gaabe       | Autenticação de usuário                    |
| `/register`    | FormCreatePage           | Vini        | Cadastro de novo usuário                   |
| `/account`     | CreateAccountInitialPage | Anderson    | Perfil e dados do usuário                  |
| `/*`           | CategoriaPage (404)      | Dani        | Página de erro para rotas inválidas        |

---

## 👥 Equipe e Responsabilidades

| Membro    | Responsabilidade Principal                                  |
| --------- | ---------------------------------------------------------- |
| Dani      | ProductListing + Section + HomePage + Categorias (404)     |
| May       | ProductOptions + Input + PageFinalizarCompra + BuySuccess  |
| Gaabe     | Header + Logo + ProductViewPage + LoginPage                |
| Carlos    | FilterGroup + Buttons + ProductListingPage + ShoppingCart  |
| Vini      | Footer + ProductCard + FormCreatePage                      |
| Anderson  | CustomSelect + Gallery + CreateAccountInitialPage          |

> Todos podem revisar e ajudar nas tarefas uns dos outros via Pull Request!

---

## 🗂 Estrutura de Pastas

```bash
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Logo/
│   ├── ProductListing/
│   ├── ProductCard/
│   ├── ProductOptions/
│   ├── BuyBox/
│   ├── Section/
│   ├── FilterGroup/
│   ├── CategoryFilter/
│   ├── Gallery/
│   ├── CustomSelect/
│   ├── Input/
│   └── Buttons/
├── pages/
│   ├── HomePage/
│   ├── ProductListingPage/
│   ├── ProductViewPage/
│   ├── ShoppingCartPage/
│   ├── LoginPage/
│   ├── FormCreatePage/
│   ├── CreateAccountInitialPage/
│   ├── PageFinalizarCompra/
│   ├── BuySuccess/
│   └── CategoriaPage/
├── data/
│   └── products.json
├── contexts/
│   └── CartContext.jsx
├── App.jsx
└── main.jsx
```

---

## 💾 Catálogo de Produtos (100+ Itens)

- **Processadores (25)**
- **Placas de Vídeo (20)**
- **Motherboards (15)**
- **Memória RAM (15)**
- **Armazenamento (10)**
- **Fontes (8)**
- **Refrigeração (5)**
- **Gabinetes (2)**

_Total: 100+ produtos com descrição, preços e especificações_

---

## 🎨 Design System e Paleta de Cores

- **Base:** `#2D2D36`
- **Profissional:** `#23395B`
- **Destaque:** `#4B5B9D`
- **Neutro:** `#A9B3B3`
- **Fundo:** `#D9D9D9`
- **Success:** `#00C851`
- **Warning:** `#FFB000`
- **Error:** `#FF3547`
- **Text:** `#2D2D36` / `#23395B`

### Tipografia

- `Roboto-700` para títulos e preços
- `Roboto-500` para especificações e labels
- `Roboto-400` para textos descritivos
- `Roboto Mono` para códigos de produto

---

## 🧠 Dicas Técnicas para Hardware E-commerce

- Usar `react-router-dom` para navegação
- Implementar `Context API` para carrinho e autenticação
- Usar `props.children` em componentes de layout
- Preferência por componentes funcionais com hooks
- Filtros por especificações, recomendação de compatíveis, comparador de produtos, calculadora de PSU

---

## 📋 Regras de Colaboração

- Criar sempre uma **branch por funcionalidade** (ex: `feat/product-card`)
- Após concluir, **criar um Pull Request** e marcar a equipe para revisão
- Nunca trabalhar direto na branch `main`
- Usar commits descritivos seguindo [Conventional Commits](https://www.conventionalcommits.org/)

---

## ✅ Status do Projeto

| Parte                          | Responsável | Status         |
| ------------------------------ | ----------- | -------------- |
| Header + Logo                  | Gaabe       | ⬜️ Pendente    |
| Footer + ProductCard           | Vini        | ⬜️ Pendente    |
| HomePage + ProductListing      | Dani        | ⬜️ Pendente    |
| ProductViewPage + LoginPage    | Gaabe       | ⬜️ Pendente    |
| FilterGroup + Buttons          | Carlos      | ⬜️ Pendente    |
| ProductListingPage + Cart      | Carlos      | ⬜️ Pendente    |
| ProductOptions + Input         | May         | ⬜️ Pendente    |
| Finalizar Compra + BuySuccess  | May         | ⬜️ Pendente    |
| CustomSelect + Gallery         | Anderson    | ⬜️ Pendente    |
| CreateAccountInitialPage       | Anderson    | ⬜️ Pendente    |
| FormCreatePage                 | Vini        | ⬜️ Pendente    |
| Section + Categorias (404)     | Dani        | ⬜️ Pendente    |

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (16+)
- npm ou yarn
- Git

### Instalação e Execução

```bash
git clone https://github.com/daniolivem/projeto-inter-capacita.git
cd projeto-inter-capacita
npm install
npm start
```
Acesse em [http://localhost:5173](http://localhost:5173)

---

## 📚 Recursos Úteis

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com/)

---

## 🤝 Contribuição

1. **Fork** o projeto
2. Crie sua **feature branch** (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'feat: adiciona MinhaFeature'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto é desenvolvido para fins educacionais como parte do curso de FullStack do Capacita Brasil.

---

## 🔧 **Tecnobits - _"Poder para o seu setup."_**
```
