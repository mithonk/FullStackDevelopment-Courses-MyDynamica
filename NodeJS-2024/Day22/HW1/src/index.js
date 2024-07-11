// console.log('Test');

// const { readFile } = require('./read.js');
// const { readFile } = require('fs');

const fs = require('node:fs');
const path = require('node:path');

fs.readFile(
  path.join(__dirname, 'book', 'chapter1.txt'),
  'utf8',
  (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  }
);

console.log(path.join(__dirname, 'book', 'chapter1.txt'));
console.log(path.join(__dirname));
