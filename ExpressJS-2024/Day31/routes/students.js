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

module.exports = router;
