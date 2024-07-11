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
/*
import { readFile } from 'fs';
import { join } from 'path';

readFile('./src/my-file/student.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

fs.readFile(
  path.join(_dirname, 'my-file', 'student.txt'),
  'utf8',
  (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  }
);

console.log(path.join(_dirname, 'my-file', 'student.txt'));
