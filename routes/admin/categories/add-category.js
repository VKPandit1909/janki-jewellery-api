const express = require("express");
let app = express.Router();
const { Insert } = require("../../../db/crud/insert");
const dformat = require("../../../db/timestamp");
// JWT TOKEN Verify
const jwt = require("jsonwebtoken");
const { connection } = require("../../../db/config");
const fileUploads = require("../../fileUpload");
// ENVIRONMENT VARIABLES
require("dotenv").config();

app.post("/", fileUploads, async (req, res) => {
  console.log(req.body);
  // console.log(req.file); for single file
  console.log(req.files); //for multiple files
  const { title, priority, banner } = req.body;

  try {
    const token = req.headers.authorization.split(" ")[1];
    // Authentication
    jwt.verify(token, process.env.JWT_SECRET);

    // Execution
    const category_data = {
      category_title: title,
      category_priority: priority,
      category_banner: req.files[0].filename,
      date: dformat,
    };
    Insert(connection, "categories", category_data);
    return res.json({
      status: "ok",
      message: "Added Category Successfully.",
    });
  } catch (errors) {
    console.log(errors);
    if (errors) return { status: "error", error: errors };
  }
});

module.exports = app;
