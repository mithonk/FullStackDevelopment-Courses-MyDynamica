var express = require('express');
var router = express.Router();

router.get('/get', (req, res) => {
  res.render('students-get');
});

router.post('/post', (req, res) => {
  res.render('students-post');
});

router.put('/put', (req, res) => {
  res.render('students-put');
});

router.delete('/delete', (req, res) => {
  res.render('students-delete');
});
module.exports = router;
