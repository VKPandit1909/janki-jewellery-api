const express = require("express");
let app = express.Router();
var bcrypt = require("bcryptjs");
const { Insert } = require("../../../db/crud/insert");
const { connection } = require('../../../db/config');
const dformat = require("../../../db/timestamp");

app.post("/", async (req, res) => {
  console.log(req.body);
  const { name, email, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);
  try {
    const user_data = {
      name: name,
      password: password,
      email: email,

      date: dformat,
    };
    connection.query(
      "SELECT * FROM users WHERE ?",
      { email: email },
      function (err, result) {
        // if (err) return res.json({ status: "error", error: err.code });
        if (result.length > 0) {
          return res.json({ status: "error", error: "User exists" });
        } else {
          Insert(connection, "users", user_data);
          return res.json({
            status: "ok",
            message: "Admin Created Successfully.",
          });
        }
      }
    );
  } catch (errors) {
    console.log(errors);
    if (errors) return { status: "error", error: errors };
  }
});

module.exports = app;
