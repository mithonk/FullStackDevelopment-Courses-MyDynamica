// console.log('Test NodeJS');
/*
function test1() {
  setTimeout(() => {
    console.log('This is Test 1');
    test2();
  }, 2000);
}

function test2() {
  setTimeout(() => {
    console.log('This is Test 2');
    test3();
  }, 5000);
}

function test3() {
  console.log('This is Test 3');
}

test1();
// test2();
// test3();
*/

/*
setTimeout(() => {
  console.log('Function 1');
  setTimeout(() => {
    console.log('Function 2');
    setTimeout(() => {
      console.log('Function 3');
    }, 6000);
  }, 4000);
}, 2000);
*/

/*
var fs = require('fs');

fs.readFile('./src/input.txt', function (err, data) {
  if (err) return console.error(err);

  console.log(data.toString());
});
*/

/*

const fs = require('fs');

fs.promises
  .readFile('./src/input.txt', 'utf8')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
*/
/*
let myPromises = new Promise((resolve, reject) => {
  if (false) {
    resolve();
  } else {
    reject();
  }
});

myPromises
  .then((data) => {
    console.log('Sucess');
  })
  .catch((Error) => {
    console.log('Fail');
  });
*/
/*
//User Define Promises


let myPromises = new Promise((resolve, reject) => {
  if (false) {
    resolve('Tamil Nila');
  } else {
    reject(new Error('No Data'));
  }
});

myPromises
  .then((data) => {
    console.log(data);
  })
  .catch((Error) => {
    console.log(Error);
    console.log(`Name1 : ${Error.name}`);
    console.log(`Message1 : ${Error.message}`);
    console.log(`Stack1 : ${Error.stack}`);
  });
*/

// console.log('Test');

const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users';

axios
  .get(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
