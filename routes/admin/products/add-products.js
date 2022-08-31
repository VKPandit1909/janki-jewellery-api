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
  const {product_variation} = req.body;
  console.log(JSON.parse(product_variation));
  try {
    const token = req.headers.authorization.split(" ")[1];
    // Authentication
    jwt.verify(token, process.env.JWT_SECRET);

    // Execution
    const product_data = req.body;
    product_data.date = dformat;
    // product_data.product_variation = JSON.parse(product_variation);
    console.log(product_data);
    Insert(connection, "products", product_data);
    return res.json({
      status: "ok",
      message: "Added Product Successfully.",
    });
  } catch (errors) {
    console.log(errors);
    if (errors) return { status: "error", error: errors };
  }
});

module.exports = app;
