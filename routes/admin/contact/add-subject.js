const express = require("express");
let app = express.Router();
const { Insert } = require("../../../db/crud/insert");
const dformat = require("../../../db/timestamp");
// JWT TOKEN Verify
const jwt = require("jsonwebtoken");
const { connection } = require("../../../db/config");
// ENVIRONMENT VARIABLES
require("dotenv").config();

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const token = req.headers.authorization.split(" ")[1];
    // Authentication
    jwt.verify(token, process.env.JWT_SECRET);

    // Execution
    const subject_data = {
      subject: req.body.subject,
      date: dformat
    }
    Insert(connection, "contact_subjects", subject_data);
    return res.json({
      status: "ok",
      message: "Added Subject Successfully.",
    });
  } catch (errors) {
    console.log(errors);
    if (errors) return { status: "error", error: errors };
  }
});

module.exports = app;
