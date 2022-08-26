const express = require("express");
let app = express.Router();
var bcrypt = require("bcryptjs");
const { Insert } = require("../../../db/crud/insert");
const conn = require("../../../db/config");
const dformat = require("../../../db/timestamp");

app.post("/", async (req, res) => {
  console.log(req.body);
  const { name, username, type, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);
  try {
    const admin_data = {
      username: username,
      password: password,
      fullname: name,
      type: type,
      date: dformat,
    };
    conn.query(
      "SELECT * FROM admin_users WHERE ?",
      { username: username },
      function (err, result) {
        if (err) return res.json({ status: "error", error: err.code });
        if (result.length > 0) {
          return res.json({ status: "error", error: "User exists" });
        } else {
          Insert(conn, "admin_users", admin_data);
          return res.json({
            status: "ok",
            message: "Admin Created Successfully.",
          });
        }
      }
    );
  } catch (errors) {
    console.log(errors);
    if (errors) return({status: "error", error: errors});
  }
});

module.exports = app;
