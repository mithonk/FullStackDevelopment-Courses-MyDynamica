// console.log('Welcome to NodeJS');

import axios from 'axios';
import http from 'http';
import { userInfo } from 'os';

const url = 'https://jsonplaceholder.typicode.com/users';

/*
axios
  .get(url)
  .then((data) => {
    console.log(data);
  })
  .catch((Error) => {
    console.log(Error);
  });
*/

const getData = async () => {
  try {
    let userInfo = await axios.get(url);
    // console.log(userInfo);
  } catch (error) {
    console.error(error);
  }
};



const hostname = '127.0.0.1';
const PORT = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(userInfo);
});

server.listen(PORT, hostname, () => {
  console.log(`Server is running....${hostname}:${PORT}`);
});
