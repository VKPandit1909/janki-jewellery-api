const express = require("express");
let app = express.Router();
// JWT TOKEN Verify
const jwt = require("jsonwebtoken");
const { connection } = require("../../../db/config");
// ENVIRONMENT VARIABLES
require("dotenv").config();

app.get("/", async (req, res) => {
    console.log(connection);
  try {
    const token = req.headers.authorization.split(" ")[1];
    // Authentication
    jwt.verify(token, process.env.JWT_SECRET);

    // Execution
    connection.query(
      "SELECT *,id as 'key' FROM contact_subjects",
      function (err, results) {
        console.log(results);
        if (err) return res.json({ status: "error", error: err.code });
        const result = Object.values(JSON.parse(JSON.stringify(results)));
        return res.json({
          status: "ok",
          data: result,
        });
      }
    );
  } catch (errors) {
    console.log(errors);
    if (errors) return { status: "error", error: errors };
  }
});

module.exports = app;
