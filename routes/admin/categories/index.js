const express = require('express');
let app = express.Router();

// Product Files
const AddCategory = require("./add-category");
const ViewCategories = require("./view-categories");

app.use("/add",AddCategory);
app.use("/view", ViewCategories);

module.exports = app;