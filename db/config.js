var mysql = require("mysql");

// Database Connectivity
var conn = mysql.createConnection({
  host: "162.214.80.31",
  port: "3306",
  user: "idgvhtmy_admin",
  password: "#Lz*(+oaExW%",
  database: "idgvhtmy_janki",
  charset: "utf8mb4",
});
conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = conn;
