var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('students', { title: 'Students', name: 'Mithursan' });
});

router.get('/:id', (req, res) => {
  res.render('student', { id: req.params.id });
});
module.exports = router;
