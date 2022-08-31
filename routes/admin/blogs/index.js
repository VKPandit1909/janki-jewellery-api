const express = require('express');
let app = express.Router();

// Product Files
const AddBlog = require("./add-blogs");
const ViewBlogs = require("./view-blogs");
const DeleteBlog = require("./delete-blogs");

app.use("/add",AddBlog);
app.use("/view", ViewBlogs);
app.use("/delete", DeleteBlog);

module.exports = app;