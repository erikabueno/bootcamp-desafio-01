const express = require('express');
const server = express();

server.use(express.json());

// middlewares

// routes

/* POST /projects: A rota deve receber id e title dentro corpo de cadastrar um 
novo projeto dentro de um array no seguinte formato: 
{ id: "1", title: 'Novo projeto', tasks: [] }; 
Certifique-se de enviar tanto o ID quanto o título do projeto no formato 
string com àspas duplas. */

server.post();

/*
GET /projects: Rota que lista todos projetos e suas tarefas;
*/

server.get();

/* PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id 
presente nos parâmetros da rota; */

server.put();

/* DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos 
parâmetros da rota; */

server.delete();

/* POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma 
nova tarefa no array de tarefas de um projeto específico escolhido através do id 
presente nos parâmetros da rota; */

server.post();

server.listen(3333);