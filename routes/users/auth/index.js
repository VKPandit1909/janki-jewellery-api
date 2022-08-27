const express = require("express");
let app = express.Router();

// Auth Files
const Login = require("./login");
const Register = require("./register");
const UserDetails = require("./userData");

app.use("/login", Login);
app.use("/register", Register);
app.use("/user-details", UserDetails);

module.exports = app;
