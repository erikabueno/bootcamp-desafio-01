const express = require('express');
const server = express();

// constants

const REQUEST = 'This request took';
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

server.use(express.json());

// middlewares

server.use((req, res, next) => { 
  console.time(REQUEST);
  console.log(`[ ${req.method} ] ${req.url} - Status code: ${res.statusCode}`);
  next();
  console.timeEnd(REQUEST);
});

// routes

server.post('/projects', (req, res) => { 
  const project = req.body;
  projects.push(project);
  return res.json(projects);
});

server.get('/projects', (req, res) => { 
  return res.json(projects);
});

server.put('/projects/:id', (req, res) => { 
  const id = req.params.id;
  const title = req.body.title;
  const project = projects.find(proj => proj.id == id);
  project.title = title;
  return res.json(project); 
});

server.delete('/projects/:id', (req, res) => { 
  const index = projects.findIndex(proj => proj.id == id);
  projects.splice(index, 1);
  return res.send();
});

server.post('/projects/:id/tasks', (req, res) => { 
  const id = req.params.id;
  const newTask = req.body.title;
  const project = projects.find(proj => proj.id == id);
  project.tasks.push(newTask);
  return res.json(project);
});

server.listen(3333);