const express = require('express');

const route = express.Router();

route.get('/:id/:name', (req, res) => {
  let id = req.params.id;
  let name = req.params.name;
  res.send(`ID : ${id}   ,  Name : ${name}`);
});

route.get('/', (req, res) => {
  res.send('Get All Grades');
});

route.post('/create', (req, res) => {
  res.send('Create Grades');
});

route.put('/update', (req, res) => {
  res.send('Update Grades');
});

route.delete('/delete', (req, res) => {
  res.send('Delete Grades');
});

module.exports = route;
