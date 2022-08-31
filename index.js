const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
var multer = require("multer");

// ENVIRONMENT VARIABLES
require("dotenv").config();

// Importing Main Routing
const home = require("./routes/home");
const adminAuth = require("./routes/admin/auth/index");
const adminDashboard = require("./routes/admin/dashboard/index");
const adminCategory = require("./routes/admin/categories/index");
const adminProducts = require("./routes/admin/products/index");
const adminCustomers = require("./routes/admin/customers/index");
const adminBlogs = require("./routes/admin/blogs/index");
const adminContact = require("./routes/admin/contact/index");
const userAuth = require("./routes/users/auth/index");
const userProduct = require("./routes/users/products/index");

// express app
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // for parsing application/json
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Main Routing
app.use("/", home);
// Admin Routes
app.use("/admin", adminAuth);
app.use("/admin/dashboard", adminDashboard);
app.use("/admin/categories", adminCategory);
app.use("/admin/products", adminProducts);
app.use("/admin/customers", adminCustomers);
app.use("/admin/blogs", adminBlogs);
app.use("/admin/contact", adminContact);
app.use("/user/products", userProduct);

// Retrieve Image check
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
// Upload Check
// const upload = require("./routes/fileUpload/index copy");
// app.use("/admins", upload);

// User Routes
app.use("/user", userAuth);

// app.get('/', (req, res) => {
//     res.send(mongoUri);
//     console.log(process);
//     // res.sendFile('index.html', {root: __dirname});
// });

app.use((req, res) => {
  console.log("New Request Made");
  console.log("Host", req.hostname);
  console.log("Path", req.path);
  console.log("Method", req.method);
  res.status(404).send({
    status: "error",
    error: "Cannot " + req.method + " Method " + req.path,
  });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
