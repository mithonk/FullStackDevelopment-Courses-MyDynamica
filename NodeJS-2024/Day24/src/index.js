// console.log('Test NodeJS');

const fs = require('fs');
const axios = require('axios');
const { error } = require('console');

fs.promises.readFile('./book/input.txt', 'utf8').then((err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
