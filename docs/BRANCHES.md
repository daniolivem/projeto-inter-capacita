# Estratégia de Branches - Projeto Capacita Hardware

## Branches Principais

### `main` (produção)
- Branch principal que contém o código em produção
- Sempre estável e pronta para deploy
- Só recebe merges da `develop` após testes completos em staging
- Cada merge representa uma versão estável do sistema

### `develop` (staging/homologação)
- Branch de integração e testes
- Ambiente de staging usa esta branch
- Recebe todas as features através de Pull Requests
- Base para criação das branches de desenvolvimento

## Organização das Branches por Desenvolvedor

### Time Backend

**Kaio (Backend Lead)**
- Prefixo: `feature/kaio/*`
- Responsabilidades:
  - Arquitetura do backend
  - Sistema de autenticação
  - APIs de segurança
- Exemplo: `feature/kaio/auth-setup`

**Antônio (Backend Dev)**
- Prefixo: `feature/antonio/*`
- Responsabilidades:
  - APIs de produtos
  - Sistema de carrinho
  - APIs de pedidos
- Exemplo: `feature/antonio/products-api`

### Time Frontend

**Carlos (Frontend Lead)**
- Prefixo: `feature/carlos/*`
- Responsabilidades:
  - Arquitetura do frontend
  - Componentes base
  - Sistema de rotas
- Exemplo: `feature/carlos/ui-components`

**Maycon (Frontend Dev)**
- Prefixo: `feature/maycon/*`
- Responsabilidades:
  - Páginas principais
  - Lista de produtos
  - Carrinho
- Exemplo: `feature/maycon/product-list`

**Anderson (Frontend Dev)**
- Prefixo: `feature/anderson/*`
- Responsabilidades:
  - Checkout
  - Perfil do usuário
  - Responsividade
- Exemplo: `feature/anderson/checkout-page`

## Fluxo de Trabalho

### 1. Desenvolvimento de Features
```bash
# Criar nova branch de feature
git checkout develop
git pull origin develop
git checkout -b feature/seu-nome/nome-da-feature

# Desenvolvimento e commits
git add .
git commit -m "feat(escopo): descrição da alteração"
git push origin feature/seu-nome/nome-da-feature
```

### 2. Processo de Pull Request
1. Criar PR da sua branch para `develop`
2. Solicitar review:
   - Daniely (lead técnico)
   - Líder da área (Kaio/Carlos)
3. Após aprovação, PR é merged para `develop`
4. Testes são realizados em staging

### 3. Deploy em Produção
1. Após testes bem-sucedidos em staging
2. PR é criado de `develop` para `main`
3. Review final pela Daniely
4. Merge e deploy em produção

## Padrões

### Nomenclatura de Branches
- Features: `feature/nome-dev/descricao-feature`
- Hotfix: `hotfix/descricao-do-fix`
- Release: `release/vX.Y.Z`

### Commits
```
feat(escopo): adiciona nova funcionalidade
fix(escopo): corrige bug específico
docs(escopo): atualiza documentação
style(escopo): ajusta formatação
refactor(escopo): refatora código existente
test(escopo): adiciona/modifica testes
chore(escopo): atualiza tarefas gerais
```

## Proteções de Branch

### `main`
- Requer PR para receber alterações
- Mínimo de 2 aprovações
- Testes em staging obrigatórios
- Apenas merges de `develop`

### `develop`
- Requer PR para receber alterações
- Review obrigatório da Daniely
- Review do líder da área
- CI/CD deve passar

### Branches de Feature
- Push direto permitido
- PR obrigatório para merge em `develop`
