const express = require("express");
let app = express.Router();
const conn = require("../../../db/config");
// JWT TOKEN Verify
const jwt = require("jsonwebtoken");
// ENVIRONMENT VARIABLES
require("dotenv").config();

app.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // Authentication
    jwt.verify(token, process.env.JWT_SECRET);

    // Execution
    conn.query("SELECT * FROM categories", function (err, results) {
      if (err) return res.json({ status: "error", error: err.code });
      const result = Object.values(JSON.parse(JSON.stringify(results)));
      return res.json({
        status: "ok",
        data: result,
      });
    });
  } catch (error) {
    console.log(error);
    return res.json({ status: "error", error: error.code });
  }
});

module.exports = app;
