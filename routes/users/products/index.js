const express = require("express");
let app = express.Router();

// Product Files

const ViewProducts = require("./view-products");
const ViewSingleProduct = require("./view-single-product");

app.use("/view", ViewProducts);
app.use("/single", ViewSingleProduct);

module.exports = app;
