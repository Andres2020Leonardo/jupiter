var mysql = require('mysql2');


const con = mysql.createPool({
  host: "remotemysql.com",
  user: "6iAGfENjU1",
  password: "aRS7tIw9jo",
  port: '3306',
  database: '6iAGfENjU1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = con;