const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'express_db',
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Database Connection Successful!');
  }
});

module.exports = connection;
