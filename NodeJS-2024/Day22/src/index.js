// console.log('Welcome to NodeJS');

// import { x } from './student.js';
// console.log(x);

// import { readFile } from './read.js';
/*
import { readFile } from 'fs';

readFile('./src/my-file/student.txt', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
  */

import { readFile } from 'fs';
import { join } from 'path';

readFile('./src/my-file/student.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
