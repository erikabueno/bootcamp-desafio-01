const express = require('express');
const server = express();

server.use(express.json());

// mock de projetos

const projects = [{
  id: "0",
  title: 'Projeto Zero',
  tasks: [
    'Tarefa 1',
    'Tarefa 2',
    'Tarefa 3'
  ]
},{
  id: "1",
  title: 'Projeto Um',
  tasks: [
    'Tarefa Inicial',
    'Tarefa Pendente',
    'Tarefa da Semana'
  ]
}];

// middlewares

// routes

server.post('/projects', (req, res) => { 
  const project = req.body;
  projects.push(project);
  return res.json(projects);
});

server.get('/projects', (req, res) => { 
  return res.json(projects);
});

/* PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id 
presente nos parâmetros da rota; */

// server.put();

/* DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos 
parâmetros da rota; */

// server.delete();

/* POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma 
nova tarefa no array de tarefas de um projeto específico escolhido através do id 
presente nos parâmetros da rota; */

// server.post();

server.listen(3333);