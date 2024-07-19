// import { error } from 'console';
// import express from 'express';
// import fs from 'fs';
// import path from 'path';

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  var path = './../public/home.html';
  fs.readFile(__dirname + path, (error, page) => {
    if (error) {
      res.status(404).send(`Sorry, We can not found that!`);
    } else {
      res.set('Content-Type', 'text/html');
      res.send(Buffer.from(page));
    }
  });
});

app.get('/about', (req, res) => {
  var path = './../public/about.html';
  fs.readFile(__dirname + path, (error, page) => {
    if (error) {
      res.status(404).send(`Sorry, We can not found that!`);
    } else {
      res.set('Content-Type', 'text/html');
      res.send(Buffer.from(page));
    }
  });
});

app.get('/contact', (req, res) => {
  var path = './../public/contact.html';
  fs.readFile(__dirname + path, (error, page) => {
    if (error) {
      res.status(404).send(`Sorry, We can not found that!`);
    } else {
      res.set('Content-Type', 'text/html');
      res.send(Buffer.from(page));
    }
  });
});

app.listen(5000, () => {
  console.log(`Server is running`);
});
