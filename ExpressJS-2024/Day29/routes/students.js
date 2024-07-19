const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.send('Get All Students');
});

route.get('/:id', (req, res) => {
  let id = req.params.id;
  res.send(`Get One Student ID ${id}`);
});

route.post('/create', (req, res) => {
  res.send('Create Students');
});

route.put('/update', (req, res) => {
  res.send('Update Students');
});

route.put('/:id/edit', (req, res) => {
  res.send(`Edit Student ID ${req.params.id}`);
});

route.delete('/delete', (req, res) => {
  res.send('Delete Students');
});

route.get('*', (req, res) => {
  res.send(`URL Not Found <a href="/">Home</a>`);
});
module.exports = route;
