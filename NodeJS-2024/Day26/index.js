// console.log('Welcome to NodeJS')
/*
const http = require('http');

const server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;
  if (url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end(`<h1>This is Home Page</h1> URL : ${url} Method : ${method}`);

    res.write('<html>');
    res.write('<head><title>My Name</title></head>');
    res.write(
      '<body><form action = "/save" method = "POST">Enter Firstname <input type="text" name="fname" /> <input type="submit"/> </form>  </body>'
    );
    res.write('</html>');
    return res.end();
  } else if (url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>This is About Page</h1> URL : ${url} Method : ${method}`);
  } else if (url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>This is Contact Page</h1> URL : ${url} Method : ${method}`);
  } else if (url == '/save' && method == 'POST') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`Save Page`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`Page not Found URL : ${url} Method : ${method}`);
  }
});

server.listen(3000, () => {
  console.log(`Server is running...`);
});
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;
  if (url == '/') {
    var path = '/public/home.html';
    fs.readFile(__dirname + path, (error, page) => {
      if (error) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`Page not Found`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(page);
        res.end();
      }
    });
  } else if (url == '/about') {
    var path = '/public/about.html';
    fs.readFile(__dirname + path, (error, page) => {
      if (error) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`Page not Found`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(page);
        res.end();
      }
    });
  } else if (url == '/contact') {
    var path = '/public/contact.html';
    fs.readFile(__dirname + path, (error, page) => {
      if (error) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`Page not Found`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(page);
        res.end();
      }
    });
  } else if (url == '/save' && method == 'POST') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`Save Page`);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Page not Found URL : ${url} Method : ${method}`);
  }
});

server.listen(3000, () => {
  console.log(`Server is running...`);
});
