import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
  res.send('Get All Subjects');
});

route.post('/create', (req, res) => {
  res.send('Create Subjects');
});

route.put('/update', (req, res) => {
  res.send('Update Subjects');
});

route.delete('/delete', (req, res) => {
  res.send('Delete Subjects');
});

export default route;
