const express = require('express');
let app = express.Router();

// Product Files
const AddProduct = require("./add-products");
const ViewProducts = require("./view-products");
const AddAttribute = require("./attributes/add-attribute");
const ViewAttributes = require("./attributes/view-attribute");
const DeleteAttributes = require("./attributes/delete-attribute");
const DistinctAttributes = require("./get-distinct-attributes");
const AttributesValues = require("./get-attribute-values");

app.use("/add",AddProduct);
app.use("/view", ViewProducts);
app.use("/attributes/add",AddAttribute);
app.use("/attributes/view", ViewAttributes);
app.use("/attributes/delete", DeleteAttributes);
app.use("/attributes/distinct", DistinctAttributes);
app.use("/attributes/values", AttributesValues);

module.exports = app;