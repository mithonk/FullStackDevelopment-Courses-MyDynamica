import express from 'express';
import students from './../routes/students.js';
import grades from './../routes/grades.js';
import subjects from './../routes/subjects.js';

const app = express();

app.use('/students', students);
app.use('/grades', grades);
app.use('/subjects', subjects);

app.listen(3000, () => {
  console.log(`Server is running`);
});
