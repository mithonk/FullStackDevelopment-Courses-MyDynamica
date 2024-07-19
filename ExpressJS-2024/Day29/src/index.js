const express = require('express');
const students = require('./../routes/students.js');
const grades = require('./../routes/grades.js');
const subjects = require('./../routes/subjects.js');

const app = express();

app.use('/students', students);
app.use('/grades', grades);
app.use('/subjects', subjects);

app.get('/', (req, res)=>{
  res.send(`This is Home Page`)
})

app.listen(3000, () => {
  console.log('Server is running');
});
