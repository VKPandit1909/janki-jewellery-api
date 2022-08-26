const express = require('express');
let app = express.Router();

// Product Files
const AddProduct = require("./add-products");
const ViewProducts = require("./view-products");

app.use("/add",AddProduct);
app.use("/view", ViewProducts);

module.exports = app;