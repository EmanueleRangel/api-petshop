# PetShop API 

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Sobre

API REST desenvolvida em **Node.js** com **Express**, durante a aula JavaScript para backend da plataforma Alura. A aplicação gerencia o sistema de 
fornecedores de um Pet Shop através de um **CRUD** (lista, cria, atualiza e deleta) e faz conexão com o banco MySQL utilizando o 
ORM **Sequelize**.

### Métodos

- Get: lista todos os fornecedores, fazendo uma filtragem para não mostrar dados desnecessários ou sensíveis como informações de contato
- Post: insere um novo fornecedor na base de dados
- Get (id): retorna um fornecedor especificado pelo id, trazendo também as informações completas
- Put (id): atualiza um fornecedor especificado pelo id 
- Delete (id): deleta um fornecedor especificado pelo id 

Além disso, também foi feito **tratamento de erros** de forma personalizada, retornando o erro específico para o cliente e o seu respectivo
status code e a API pode ser considerada "bilíngue" já que aceita e processa dados tanto no formato **json** quanto no formato **xml**

## Tecnologias utilizadas
- Node.js
- Express
- Sequelize
- MySQL

## Autor

LinkedIn: https://www.linkedin.com/in/emanuele-rangel-7b50971b8/

e-mail: emanuele.rangel52@gmail.com
