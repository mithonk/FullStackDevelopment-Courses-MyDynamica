const express = require('express');
const connection = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  var SQLQuery = 'select * from students';
  connection.query(SQLQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.get('/:id', (req, res, next) => {
  var { id } = req.params;
  var SQLQuery = 'select * from students where id = ?';
  connection.query(SQLQuery, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.delete('/:id', (req, res, next) => {
  var { id } = req.params;
  var SQLQuery = 'DELETE from students where id = ?';
  connection.query(SQLQuery, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.post('/', (req, res, next) => {
  // var { first_name, last_name, gender } = req.body;
  var fname = req.body.first_name;
  var lname = req.body.last_name;
  var gender = req.body.gender;
  var SQLQuery =
    'INSERT INTO `students`( `first_name`, `last_name`, `gender`) VALUES (?,?,?)';
  connection.query(SQLQuery, [fname, lname, gender], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.put('/:id', (req, res, next) => {
  var { id } = req.params;
  // var { first_name, last_name, gender } = req.body;
  var fname = req.body.first_name;
  var lname = req.body.last_name;
  var gender = req.body.gender;
  var SQLQuery =
    'UPDATE `students` SET `first_name`= ?,`last_name`= ?,`gender`= ? WHERE id = ?';
  connection.query(SQLQuery, [fname, lname, gender, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
