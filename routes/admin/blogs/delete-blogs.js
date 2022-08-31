const express = require("express");
let app = express.Router();
// JWT TOKEN Verify
const jwt = require("jsonwebtoken");
const { connection } = require("../../../db/config");
const { Delete } = require("../../../db/crud/delete");
// ENVIRONMENT VARIABLES
require("dotenv").config();

app.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const token = req.headers.authorization.split(" ")[1];
    // Authentication
    jwt.verify(token, process.env.JWT_SECRET);

    // Execution
    Delete(connection, "blogs", req.body);
    return res.json({
      status: "ok",
      message: "Deleted Blog Successfully.",
    });
  } catch (errors) {
    console.log(errors);
    if (errors) return { status: "error", error: errors };
  }
});

module.exports = app;
