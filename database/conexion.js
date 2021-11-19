var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "6iAGfENjU1",
  password: "aRS7tIw9jo",
  port: '3306',
database: '6iAGfENjU1'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;