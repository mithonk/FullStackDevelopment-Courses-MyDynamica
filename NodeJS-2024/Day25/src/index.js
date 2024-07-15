// console.log('Test NodeJS');
/*
import http from 'http';

const hostname = '127.0.0.1';
const PORT = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome Node Server');
});

server.listen(PORT, hostname, () => {
  console.log(`Server is running ${hostname}:${PORT}`);
});
*/

var http = require('http');
http
  .createServer(function (request, response) {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('Hello World <h1>Mitho NK</h1>');
  })
  .listen(5000);

console.log('Server running at http://127.0.0.1:5000/');
