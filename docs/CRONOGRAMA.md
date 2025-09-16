## 🎯 CRONOGRAMA INTEGRADO - EQUIPE HARDWARE
### **Projeto E-commerce | Entrega: 23/09/2025**

---

## 🎯 ESTRUTURA DE LIDERANÇA DA EQUIPE

### **Daniely Mélo - Fullstack Leader:**
- **Arquitetura geral** do sistema (frontend + backend) - OK
- **Coordenação** entre front e back - OK
- **Code review** e padrões de qualidade - OK
- **Gerenciamento** de prazos e entregas - OK
- **Sistema de autenticação e autorização (JWT)** - OK
- **APIs de usuários e segurança (CRUD Admin & Perfil)** - OK
- **Implementação do sistema de login simples** - OK
- **Refatoração do Backend (CJS para ESM)** - OK
- **Script de Seed do Banco de Dados** - OK
- **Integração e Depuração do Frontend (Login & Perfil)** - OK


### **Estrutura Hierárquica:**
```
Daniely (Fullstack Leader)
├── Kaio (Líder Backend) → Antônio (Dev Backend)
└── Carlos (Líder Frontend) → Maycon + Anderson (Devs Frontend)
```

---

## 👥 DIVISÃO DETALHADA DE RESPONSABILIDADES

### **📋 SPRINT PLANNING & ORGANIZAÇÃO**
**Kaio (Líder Back) + Carlos (Líder Front)**
- Planejamento semanal das sprints
- Definição de prioridades técnicas
- Estimativas de tempo realistas
- Relatórios de progresso para Daniely

### **🔧 BACKEND - Time Kaio (Líder)**


**Kaio Vinícius** - Líder Backend
- Arquitetura do backend e decisões técnicas
- Configuração inicial (Express, Prisma, PostgreSQL)
- Implementação e controle de perfis (cliente/vendedor)
- Implementação do cancelamento de vendas (cliente e vendedor)
- Controle de estoque e restrição de adicionar ao carrinho sem estoque
- Opção de adicionar produtos ao estoque pelo vendedor
- APIs de pedidos e histórico
- **Reporta para:** Daniely


**Antônio Gabriel** - Dev Backend
- APIs de produtos e categorias (CRUD)
- Sistema de carrinho de compras
- Integração com banco de dados
- Cadastro de vendedor e cliente (vendedor restrito ao admin)
- Cadastro de produto (com fotos, preço, descrição, título)
- Gravação de vendas no banco de dados
- Listagem de vendas (vendedor vê todas, cliente vê só as próprias, admin vê ambos)
- **Reporta para:** Kaio

### **🎨 FRONTEND - Time Carlos (Líder)**

**Carlos Otacílio** - Líder Frontend
- Arquitetura do frontend e padrões
- Sistema de roteamento e navegação
- Gerenciamento de estado (Context/Redux)
- Integração com APIs do backend
- Garantir que o site tenha vários produtos para teste/apresentação
- Implementar responsividade total do site (multi-telas)
- Suporte aos devs front quando necessário.
- **Reporta para:** Daniely

**Maycon Andrade** - Dev Frontend
- Implementar carrinho de compras (armazenar produtos, calcular preço)
- Checkout e finalização de compra
- Páginas principais (Home, Produtos, Carrinho)
- Sistema de autenticação no frontend
- Implementar cadastro de produto (com upload de fotos)
- Implementar cancelamento de vendas (cliente e vendedor)
- Garantir responsividade total do site (multi-telas)
- **Reporta para:** Carlos

**Anderson Guimarães** - Dev Frontend
- Páginas de produto individual
- Responsividade e otimizações
- Implementar páginas de cadastro de vendedor, cliente e produto (restrito ao vendedor)
- Implementar página de redirecionamento após cadastro do vendedor
- Implementar listagem de compras do cliente
- Implementar listagem de vendas do vendedor
- Implementar responsividade total do site (multi-telas)
- **Reporta para:** Carlos

---

**TODA EQUIPE:**
```
DIA 21/09: Integração final + Deploy
DIA 22/09: Testes + Documentação + Demo
DIA 23/09: ENTREGA FINAL 🎯
```

---

## 📊 FERRAMENTAS DE GESTÃO

### **Git Flow Simplificado:**
```
main (produção)
├── develop (integração)
├── feature/auth-system (Kaio)
├── feature/products-api (Antônio)
├── feature/product-catalog (Carlos)
├── feature/shopping-cart (Maycon)
└── feature/checkout-flow (Anderson)
```

### **Comunicação Multi-Canal:**
- **WhatsApp Grupo:** Updates urgentes + motivação
- **Discord:** Dúvidas técnicas + pair programming, daily meetings + retrospectivas
- **GitHub:** Code review + documentação

---

### **🔍 GARANTIA DE QUALIDADE:**
- Code review final de features importantes
- Validação de fluxos end-to-end
- Aprovação de mudanças arquiteturais
- Sign-off para deploy em produção

---

```

### **⚠️ RED FLAGS (Parar tudo e resolver):**
- 🚨 **Build quebrado** há mais de 2h
- 🚨 **API down** em staging há mais de 1h  
- 🚨 **Merge conflict** não resolvido há mais de 4h
- 🚨 **Dev sem comunicação** há mais de 6h
- 🚨 **Blocker crítico** sem owner definido

---

## 🎯 CHECKPOINTS OBRIGATÓRIOS

### **📅 MILESTONE 1 - 06/09 (Semana 1):**
**🎯 Demo Friday:**
- ✅ **Backend:** Usuário consegue se registrar e fazer login
- ✅ **Frontend:** Login/logout funcional com redirecionamento
- ✅ **Integração:** Fluxo de autenticação end-to-end
- ✅ **Deploy:** Ambiente de staging funcionando

### **📅 MILESTONE 2 - 13/09 (Semana 2):**
**🎯 Demo Friday:**
- ✅ **Backend:** APIs de produtos retornando dados reais
- ✅ **Frontend:** Catálogo navegável com carrinho
- ✅ **Integração:** Usuário consegue adicionar produtos ao carrinho
- ✅ **Performance:** Páginas carregando em < 2s

### **📅 MILESTONE 3 - 20/09 (Semana 3):**
**🎯 Demo Friday:**
- ✅ **Backend:** Sistema completo de pedidos
- ✅ **Frontend:** Checkout completo funcionando
- ✅ **Integração:** Fluxo completo de compra (login → produtos → carrinho → checkout)
- ✅ **Quality:** Responsivo em todos os dispositivos

### **📅 MILESTONE FINAL - 23/09:**
**🎯 ENTREGA OFICIAL:**
- 🎯 **E-commerce 100% funcional**
- 🎯 **Deploy em produção estável**
- 🎯 **Documentação completa**
- 🎯 **Demo preparada para apresentação**

---


