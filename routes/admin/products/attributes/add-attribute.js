const express = require("express");
let app = express.Router();
const { Insert } = require("../../../../db/crud/insert");
const dformat = require("../../../../db/timestamp");
// JWT TOKEN Verify
const jwt = require("jsonwebtoken");
const { connection } = require("../../../../db/config");
// ENVIRONMENT VARIABLES
require("dotenv").config();

app.post("/", async (req, res) => {
  console.log(req.body);
  const { title, type, value } = req.body;

  try {
    const token = req.headers.authorization.split(" ")[1];
    // Authentication
    jwt.verify(token, process.env.JWT_SECRET);

    // Execution
    const attribute_data = {
      attribute_title: title,
      attribute_type: type,
      attribute_value: value,
      date: dformat,
    };
    Insert(connection, "attributes", attribute_data);
    return res.json({
      status: "ok",
      message: "Added Attribute Successfully.",
    });
  } catch (errors) {
    console.log(errors);
    if (errors) return { status: "error", error: errors };
  }
});

module.exports = app;
