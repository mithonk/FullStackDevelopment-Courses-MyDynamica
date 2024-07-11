const { readFile } = require('fs');
readFile('./book/chapter1.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

module.exports = { readFile };
