const config = require('../config');
const mysql = require('mysql');

// var connect = mysql.createConnection({
//   host : config.host,
//   port : config.port,
//   user : config.user,
//   password : config.password,
//   database : config.database
// });

// make bunch of DB connection availabke instead of just one
var connect = mysql.createPool({
  host : config.host,
  port : config.port,
  user : config.user,
  password : config.password,
  database : config.database,
  connectionLimit: 20,
  queueLimit: 100,
  waitForConnection : true
});

module.exports = connect;
