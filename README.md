# Matrícula API
Aplicação de conceitos de Nodejs no desenvolvimento de uma aplicação de matrículas

## Requisitos

    [mongo](https://www.mongodb.com/)
    [node](https://nodejs.org/en/)
    [docker-compose](https://docs.docker.com/compose/install/)

## Como rodar
    yarn install
    service mongod start
    yarn dev

## Endpoints

### GET 
#### /disciplinas
Retorna todas as disciplinas cadastradas no banco de dados

#### /disciplinas/< id >
Retorna todas as disciplinas cadastradas com o codigo informado

### POST
#### /disciplinas
Cadastra uma nova disciplina

### Put
#### /disciplinas/ < id >
Altera os dados de uma disciplina já cadastrada

### DELETE
#### /disciplinas/ < id >
Delete uma disciplina informando seu código



