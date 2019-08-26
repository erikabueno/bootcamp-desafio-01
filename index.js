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

let requests = 0;

server.use(express.json());

// middlewares

server.use((req, res, next) => { 
  console.time(REQUEST);
  console.log(`[ ${req.method} ] ${req.url} - Status code: ${res.statusCode}`);
  next();
  console.timeEnd(REQUEST);
});

function checkProject(req, res, next) { 
  const id = req.params.id;
  const project = projects.find(proj => proj.id == id);
  if (!project) { 
    return res.status(400).json({ error: 'Projeto não encontrado'});
  }
  return next();
}

function countRequests(req, res, next) { 
  requests++;
  console.log(`Number of requests so far: ${requests}.`);
  return next();
}

// routes

server.post('/projects', countRequests, (req, res) => { 
  const project = req.body;
  projects.push(project);
  return res.json(projects);
});

server.get('/projects', countRequests, (req, res) => { 
  return res.json(projects);
});

server.put('/projects/:id', countRequests, checkProject, (req, res) => { 
  const id = req.params.id;
  const title = req.body.title;
  const project = projects.find(proj => proj.id == id);
  project.title = title;
  return res.json(project); 
});

server.delete('/projects/:id', countRequests, checkProject, (req, res) => { 
  const index = projects.findIndex(proj => proj.id == id);
  projects.splice(index, 1);
  return res.send();
});

server.post('/projects/:id/tasks', countRequests, checkProject, (req, res) => { 
  const id = req.params.id;
  const newTask = req.body.title;
  const project = projects.find(proj => proj.id == id);
  project.tasks.push(newTask);
  return res.json(project);
});

server.listen(3333);