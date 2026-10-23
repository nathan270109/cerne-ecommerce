# Cerne E-commerce

Front-end de uma loja virtual de móveis de madeira, feito com Angular 22. Projeto de portfólio, sem back-end.

O catálogo vem de um arquivo JSON local, lido por um `ProductService`. Se um dia houver uma API, só esse serviço precisa mudar.

## Status

Em desenvolvimento. Até agora o projeto foi criado e configurado. As funcionalidades abaixo estão sendo implementadas em etapas, com commits pequenos no padrão Conventional Commits.

## Escopo

- Home com destaques
- Listagem com busca, filtro por categoria e ordenação por preço
- Página de detalhe do produto
- Carrinho com persistência em `localStorage`
- Checkout simulado com formulário validado e página de confirmação
- Estados de carregamento, lista vazia e erro, mais página 404

## Stack

- Angular 22, componentes standalone e rotas com lazy loading
- TypeScript em modo strict
- Signals para o estado do carrinho, sem NgRx
- SCSS, sem biblioteca de UI
- Vitest para testes unitários

## Como rodar

Requer Node.js 22 ou superior.

```bash
git clone https://github.com/<seu-usuario>/cerne-ecommerce.git
cd cerne-ecommerce
npm install
ng serve
```

A aplicação abre em `http://localhost:4200`.

Outros comandos:

```bash
ng test     # testes unitários
ng build    # build de produção
```

## Roadmap

- [x] Criação do projeto
- [ ] Lint, formatação e estrutura de pastas
- [ ] Modelos de dados e catálogo
- [ ] Listagem, busca e filtros
- [ ] Detalhe do produto
- [ ] Carrinho
- [ ] Checkout
- [ ] Acessibilidade e performance
- [ ] Deploy
