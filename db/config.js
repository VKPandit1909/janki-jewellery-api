var mysql = require("mysql");

var mysql = require('mysql');
var pool  = mysql.createPool({
  host: "162.214.80.31",
  port: "3306",
  user: "idgvhtmy_admin",
  password: "#Lz*(+oaExW%",
  database: "idgvhtmy_janki",
  charset: "utf8mb4",
});

pool.getConnection(function(err, connection) {
  //   connection.query( 'SELECT something FROM sometable', function(err, rows) {

  //     console.log(pool._freeConnections.indexOf(connection)); // -1

  //     connection.release();

  //     console.log(pool._freeConnections.indexOf(connection)); // 0

  //  });
  connection.release();
});

var connection = pool;
module.exports.connection = connection;
module.exports.pool = pool;