// console.log('Welcome');

const { error } = require('console');
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  var path = './../public/home.html';
  fs.readFile(__dirname + path, (error, page) => {
    if (error) {
      res.status(404).send('Sorry, We can not find that!');
    } else {
      res.set('Content-Type', 'text/html');
      res.send(Buffer.from(page));
    }
  });
  //   res.send('hello world');
});

app.get('/about', (req, res) => {
  var path = './../public/about.html';
  fs.readFile(__dirname + path, (error, page) => {
    if (error) {
      res.status(404).send('Sorry, We can not find that!');
    } else {
      res.set('Content-Type', 'text/html');
      res.send(Buffer.from(page));
    }
  });
  //   res.send('This is About Page');
});

app.get('/contact', (req, res) => {
  var path = './../public/contact.html';
  fs.readFile(__dirname + path, (error, page) => {
    if (error) {
      res.status(404).send('Sorry, We con not found thst!');
    } else {
      res.set('Content-Type', 'text/html');
      res.send(Buffer.from(page));
    }
  });
  //   res.send('This is Contact Page');
});

app.get('/photo', (req, res) => {
  res.status(500).json({ error: 'Message' });
  //   res.download(__dirname + '/../photos/img1.jpg');
  //   res.set('Content-Type', 'text/html');
  //   res.json({ user: 'Leo' });
  /*
  var path = './../public/photo.html';
  fs.readFile(__dirname + path, (error, page) => {
    if (error) {
      res.status(404).send('Sorry, We can not found that!');
    } else {
      res.set('Content-Type', 'text/html');
      res.send(Buffer.from(page));
    }
  });
  */
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
