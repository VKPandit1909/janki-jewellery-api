const express = require("express");
let app = express.Router();
// JWT TOKEN Verify
const jwt = require("jsonwebtoken");
const { connection } = require("../../../../db/config");
const { Update } = require("../../../../db/crud/update");
// ENVIRONMENT VARIABLES
require("dotenv").config();

app.get("/status", async (req, res) => {
  console.log(req.body);
  try {
    const token = req.headers.authorization.split(" ")[1];
    // Authentication
    jwt.verify(token, process.env.JWT_SECRET);
    // Execution
    connection.query(
      "SELECT id as 'key', status FROM tidio",
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

app.post("/update", async (req, res) => {
  console.log(req.body);
  try {
    const token = req.headers.authorization.split(" ")[1];
    // Authentication
    jwt.verify(token, process.env.JWT_SECRET);

    // Execution
    Update(connection, "tidio", req.body, { id: 1 });
    return res.json({
      status: "ok",
      message: "Updated Status Successfully.",
    });
  } catch (errors) {
    console.log(errors);
    if (errors) return { status: "error", error: errors };
  }
});

module.exports = app;
