const express = require('express');
let app = express.Router();

// Product Files
const AddCategory = require("./add-category");
const ViewCategories = require("./view-categories");
const DeleteCategory = require("./delete-category");

app.use("/add",AddCategory);
app.use("/view", ViewCategories);
app.use("/delete", DeleteCategory);

module.exports = app;