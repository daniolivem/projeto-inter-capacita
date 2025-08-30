# Fluxo de Pull Requests

## Processo de Code Review

1. **Criação do Pull Request**
   - PR deve ser criado da branch do usuário para `develop`
   - Título deve seguir o padrão: `feat/fix/docs(escopo): descrição`
   - Descrição deve conter:
     - O que foi feito
     - Como testar
     - Screenshots (se aplicável)

2. **Revisão**
   - Mínimo de 2 aprovações necessárias
   - Daniely (lead) deve ser sempre uma das revisoras
   - Líder da área (Kaio/Carlos) deve ser outro revisor

3. **Testes**
   - PR merged para `develop` vai para ambiente de staging
   - Testes automatizados devem passar
   - Testes manuais devem ser realizados
   - Bugs encontrados devem ser corrigidos na branch original

4. **Deploy para Produção**
   - Após testes em staging, `develop` é merged para `main`
   - Deploy é feito automaticamente
   - Monitoramento por 24h após deploy

## Checklist do PR

- [ ] Código segue os padrões do projeto
- [ ] Testes automatizados foram adicionados
- [ ] Documentação foi atualizada
- [ ] Não há conflitos com `develop`
- [ ] Build passa sem erros
- [ ] Testes manuais realizados
- [ ] Screenshots adicionados (se aplicável)

## Template do PR

```markdown
## Descrição
[Descreva as alterações feitas]

## Tipo de alteração
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Como testar
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

## Screenshots
[Se aplicável]

## Observações
[Informações adicionais]
```
