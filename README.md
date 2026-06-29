# 🚀 Desafio Técnico QA - Cypress

## 📋 Sobre o projeto

Este projeto foi desenvolvido como parte de um desafio técnico para a posição de Analista de Qualidade (QA).

O objetivo é demonstrar conhecimentos em automação de testes Web e API utilizando Cypress, JavaScript e Cucumber (BDD), aplicando boas práticas como Page Object Model (POM), organização por funcionalidades e escrita de cenários em Gherkin.

O projeto contempla a automação de testes funcionais para a aplicação Automation Exercise, bem como a validação de uma API pública do Trello.

## 🛠️ Tecnologias utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **JavaScript** – Linguagem de programação utilizada para implementação dos testes.
- **Cypress** – Framework utilizado para automação de testes Web e API.
- **Cucumber** – Framework utilizado para implementação da metodologia BDD.
- **Gherkin** – Linguagem utilizada para escrita dos cenários de teste.
- **Node.js** – Ambiente de execução do JavaScript.
- **Page Object Model (POM)** – Padrão de organização para reutilização e manutenção do código.

## 📂 Estrutura do projeto

O projeto foi organizado seguindo boas práticas de automação de testes, utilizando o padrão **Page Object Model (POM)** para separar regras de negócio, elementos da interface e implementação dos testes.

A estrutura está organizada da seguinte forma:

```text
desafio-qa-cypress/
│
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       ├── login.feature
│   │       ├── carrinho.feature
│   │       └── trello_api.feature
│   │
│   ├── fixtures/
│   │   ├── usuario.json
│   │   └── example.json
│   │
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── ProductsPage.js
│   │   └── CartPage.js
│   │
│   └── support/
│       ├── step_definitions/
│       │   ├── login.js
│       │   ├── busca.js
│       │   ├── carrinho.js
│       │   └── trello_api.js
│       │
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

## 📁 Estrutura das pastas

| Pasta | Descrição |
| :----- | :-------- |
| **e2e/features** | Arquivos `.feature` contendo os cenários escritos em Gherkin. |
| **pages** | Implementação do padrão **Page Object Model (POM)**, centralizando elementos e ações das páginas. |
| **support/step_definitions** | Implementação dos passos (*steps*) utilizados pelos cenários BDD. |
| **fixtures** | Massa de dados utilizada durante os testes. |
| **support** | Configurações globais, comandos customizados e inicialização do Cypress. |

## ✅ Pré-requisitos

Antes de executar o projeto, certifique-se de possuir os seguintes softwares instalados:

- Node.js (versão 18 ou superior)
- npm (instalado juntamente com o Node.js)
- Git
- Visual Studio Code (opcional)
- Google Chrome ou Microsoft Edge

## ⚙️ Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd desafio-qa-cypress
```

Instale as dependências:

```bash
npm install
```

## ▶️ Execução dos testes

Para abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

Para executar todos os testes em modo headless:

```bash
npm run cy:run
```

## 🧪 Cenários automatizados

### 🌐 Web

- **Login:** realiza autenticação utilizando um usuário válido.
- **Busca de produtos:** pesquisa produtos disponíveis na aplicação.
- **Adicionar produto ao carrinho:** adiciona um produto ao carrinho de compras.
- **Validação do carrinho:** verifica se os produtos adicionados estão presentes na tela de pagamento.

### 🔗 API

- **GET Trello:** realiza uma requisição GET para a API pública do Trello.
- **Status Code:** valida que a resposta retorna HTTP 200.
- **Campo `list.name`:** valida e exibe o valor retornado pela estrutura `list`.

## ✅ Resultados esperados

Ao executar os testes, o Cypress deverá:

- Executar todos os cenários Web.
- Executar o cenário de validação da API do Trello.
- Exibir os resultados de sucesso ou falha no Test Runner.
- Gerar evidências na pasta `videos` quando configurado.

## 📐 Boas práticas adotadas

- Page Object Model (POM)
- Escrita de cenários em BDD utilizando Gherkin
- Separação entre Features, Step Definitions e Page Objects
- Reutilização de código
- Organização por funcionalidades

## 👩‍💻 Autor

**Julia Caetano Mizael dos Santos**

- LinkedIn: https://www.linkedin.com/in/julia-mizael
- E-mail: julia.mizaeldosantos@gmail.com