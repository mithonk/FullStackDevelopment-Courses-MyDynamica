import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
  res.send('Get All Sudents');
});

route.post('/create', (req, res) => {
  res.send('Create Sudents');
});

route.put('/update', (req, res) => {
  res.send('Update Sudents');
});

route.delete('/delete', (req, res) => {
  res.send('Delete Sudents');
});

export default route;
