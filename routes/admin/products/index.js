const express = require('express');
let app = express.Router();

// Product Files
const AddProduct = require("./add-products");
const ViewProducts = require("./view-products");
const AddAttribute = require("./attributes/add-attribute");
const ViewAttributes = require("./attributes/view-attribute");

app.use("/add",AddProduct);
app.use("/view", ViewProducts);
app.use("/attributes/add",AddAttribute);
app.use("/attributes/view", ViewAttributes);

module.exports = app;