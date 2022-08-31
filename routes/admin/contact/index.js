const express = require('express');
let app = express.Router();

// Product Files
const AddSubject = require("./add-subject");
const ViewSubject = require("./view-subject");
const DeleteSubject = require("./delete-subject");
const Tidio = require("./tidio/index");

app.use("/subject/add",AddSubject);
app.use("/subject/view", ViewSubject);
app.use("/subject/delete", DeleteSubject);
app.use("/tidio", Tidio);

module.exports = app;