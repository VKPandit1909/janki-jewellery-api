const express = require('express');
let app = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const conn = require("./../../../db/config");

// ENVIRONMENT VARIABLES
require("dotenv").config();

app.post('/', async (req, res) => {
    const { username, password } = req.body;
    conn.query("SELECT * FROM admin_users WHERE ?", {username: username}, function(err, results) {
      if(err) return res.json({ status: "error", error: "Invalid username/password" });
      if(results.length == 1) {
        const result = Object.values(JSON.parse(JSON.stringify(results)));
        console.log(result, result[0].id);
        if (bcrypt.compareSync(password, result[0].password)) {
          // console.log(process.env.JWT_SECRET);
          const token = jwt.sign(
            {
              id: result[0].id,
              username: result[0].username,
            },
            process.env.JWT_SECRET
          );
          return res.json({ status: "ok", data: token });
        } else {
          return res.json({ status: "error", error: "Invalid username/password" });
        }
      } else {
        return res.json({ status: "error", error: "Invalid username/password" });
      }
    });    
});

module.exports = app