# Gerenciador de Produtos e Categorias

Este é um projeto de API REST para gerenciar produtos e categorias de produtos. Ele oferece rotas para realizar operações CRUD nas categorias e nos produtos, além de uma rota para calcular o valor das parcelas de um produto com base na tabela de juros mensais.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- CRUD de Categorias:
  - Criar uma nova categoria;
  - Ler informações de uma categoria específica;
  - Atualizar os dados de uma categoria existente;
  - Excluir uma categoria.

- CRUD de Produtos:
  - Criar um novo produto associado a uma categoria;
  - Ler informações de um produto específico;
  - Atualizar os dados de um produto existente;
  - Excluir um produto.

- Cálculo das Parcelas:
  - Calcular o valor das parcelas de um produto com base na tabela de juros mensais.

## Rotas Disponíveis

A API oferece as seguintes rotas:

### Categorias

- `POST /categories`: Cria uma nova categoria.
- `GET /categories/:categoryId`: Retorna os dados de uma categoria específica.
- `PUT /categories/:categoryId`: Atualiza os dados de uma categoria existente.
- `DELETE /categories/:categoryId`: Exclui uma categoria.

### Produtos

- `POST /products`: Cria um novo produto associado a uma categoria.
- `GET /products/:productId`: Retorna os dados de um produto específico.
- `PUT /products/:productId`: Atualiza os dados de um produto existente.
- `DELETE /products/:productId`: Exclui um produto.

### Parcelas

- `POST /products/:productId/parcelas`: Calcula o valor das parcelas de um produto com base na tabela de juros mensais.

## Pré-requisitos

Antes de executar o projeto, verifique se você possui os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- Node.js (versão >=17.2.0)
- Yarn (gerenciador de pacotes do Node.js)

## Como Baixar e Instalar

1. Faça o clone deste repositório para o seu ambiente local.
2. Acesse a pasta do projeto: `cd gen-api`.
3. Instale as dependências do projeto executando o comando: `yarn`.

## Como Executar

Após a conclusão da instalação, você pode iniciar o servidor executando o seguinte comando na pasta do projeto: `yarn dev`.

O servidor será iniciado e estará ouvindo na porta X. Você pode acessar a API através da URL `http://localhost:X`.

## Tecnologias Utilizadas

- Node.js: Ambiente de tempo de execução JavaScript para o servidor.
- Express: Framework web para criar a API REST.
- MongoDB: Banco de dados NoSQL utilizado para armazenar as informações dos produtos e categorias.
- TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript.

## Contribuição

Se você deseja contribuir com este projeto, sinta-se à vontade para enviar Pull Requests com melhorias, correções de bugs ou novas funcionalidades. Vamos adorar receber sua contribuição! 

## Débito Técnico (TO-DO)

- Testes Unitários que mirem em uma cobertura de pelo menos 70%.
- Finalizar validação das rotas com Joi.
- Verificar um problema com injeção de dependências que creio que seja do meu ambiente de desenvolvimento porém ainda não tive tempo de explorar.
- Utilizar o Swagger para 
