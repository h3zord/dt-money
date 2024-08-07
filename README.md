<h1 align="center">Boas-vindas ao repositório do DT Money!</h1>

<div align="center"><img src="public/logo-app.svg"/></div>

<h2 align="center">
  <a href="https://app-dt-money.vercel.app" target="_blank">
    Conheça o DT Money!
  </a>
</h2>

## Demonstração

<div align="center">

</div>

<br/>

## O que foi desenvolvido?

<strong>DT Money</strong> é uma aplicação para controle de gastos. A página principal apresenta três cards: entradas, saídas e saldo total. Todas as transações são exibidas em uma tabela, contendo descrição, valor, categoria e data do registro. O usuário pode manipular as transações, filtrando por descrição, excluindo ou adicionando novas transações ao preencher as informações no formulário.

O projeto foi desenvolvido utilizando Vite (versão 5.3.4) e React (versão 18.3.1) em conjunto com TypeScript. Todas as transações cadastradas estão armazenadas no localstorage do navegador. A estilização foi feita com a biblioteca Styled Components. Outras bibliotecas e ferramentas utilizadas incluem: React Hook Form e Zod para lidar com formulários e validações, Radix UI, Framer Motion, Phosphor Icons, ESLint e Git para controle de versão.

<strong>➜ Por questões visuais, a tabela de gastos já vem pré-preenchida caso não exista nenhuma transação cadastrada.</strong>

<strong>➜ A responsividade deste projeto está em desenvolvimento.</strong>

## Linguagens e ferramentas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Phosphor Icons](https://phosphoricons.com/)
- [ESLint](https://eslint.org/)
- [Git](https://git-scm.com/)

## Instalação e execução

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/dt-money.git
```

### 2 - Entre no repositório
```
cd dt-money
```

### 3 - Instale as dependências:
Caso utilize o npm
```
npm install
```
Caso utilize o yarn
```
yarn install
```

### 4 - Inicie o projeto:
Caso utilize o npm
```
npm run dev
```
Caso utilize o yarn
```
yarn run dev
```

<strong>Vite irá executar a aplicação na porta padrão 5173.</strong>
<br/>
➜ http://localhost:5173