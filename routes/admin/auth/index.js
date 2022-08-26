const express = require('express');
let app = express.Router();

// Auth Files
const Login = require("./login");
const CreateAdmin = require("./create-admins");
const ChangePassword = require("./change-password");

app.use("/login",Login);
app.use("/create", CreateAdmin);
app.use("/change-password", ChangePassword);

module.exports = app;