const express = require("express");
let app = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { connection } = require('../../../db/config');

app.use(express.json());
// ENVIRONMENT VARIABLES
require("dotenv").config();

app.post("/", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    console.log(user);
    connection.query(
      "SELECT * FROM users WHERE ?",
      { email: user.email },
      function (err, results) {
        return res.json({ status: "ok", data: results });
      }
    );
  } catch (error) {
    return res.json({ status: "error", data: error });
  }
});

module.exports = app;
