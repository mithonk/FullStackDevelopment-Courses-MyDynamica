import express from 'express';

const route = express.Router();

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

export default route;
