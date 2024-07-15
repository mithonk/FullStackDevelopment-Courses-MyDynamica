// console.log('Test NodeJS');

const fs = require('fs');
const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users/';

/*
fs.promises
  .readFile('./book/input.txt', 'utf8')
  .then((data) => {
    console.log(data);
    axios
      .get(url + data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
*/
/*
const getUser = async () => {
  try {
    let getUserId = await fs.promises.readFile('./book/input.txt', 'utf8');
    console.log(getUserId);

    let userIdInfo = await axios.get(url + getUserId);
    console.log(userIdInfo);
  } catch (err) {
    console.error(err);
  }
};

getUser();
*/
function calculate() {
  console.log('calculate');
}

async function getName() {
  console.log('My Name');
  return Promise.resolve('success');
}

/*
getName().then((data) => {
  console.log(data);
});
*/

/*
function display() {
  getName();
}

display();
*/

/*
async function display() {
  let data = await getName();
  let getUserId = await fs.promises.readFile('./book/input.txt', 'utf8');
  console.log(data);
}

display();
*/

/*
async function display() {
  let data = await getName();
  console.log(data);
}

display();
calculate();
*/

async function display() {
  let data = await getName();
  return Promise.resolve(data);
}

// display().then(() => {
//   console.log();
// });

// display();
// calculate();

display().then((data) => {
  console.log(data);
  calculate();
});
