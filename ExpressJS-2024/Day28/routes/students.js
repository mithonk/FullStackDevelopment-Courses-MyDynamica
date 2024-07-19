const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.send('Get All Students');
});

route.post('/create', (req, res) => {
  res.send('Create Students');
});

route.put('/update', (req, res) => {
  res.send('Update Students');
});

route.delete('/delete', (req, res) => {
  res.send('Delete Students');
});

module.exports = route;
