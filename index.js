const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const { handleDisconnect } = require("./db/restartConnection");
const conn = require("./db/config");

// ENVIRONMENT VARIABLES
require("dotenv").config();

// Importing Main Routing
const home = require("./routes/home");
const adminAuth = require("./routes/admin/auth/index");
const adminCategory = require("./routes/admin/categories/index");
const adminProducts = require("./routes/admin/products/index");

// express app
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

conn.on("error", function (err) {
  console.log("db error", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    // Connection to the MySQL server is usually
    handleDisconnect(); // lost due to either server restart, or a
  } else {
    // connnection idle timeout (the wait_timeout
    throw err; // server variable configures this)
  }
});

// Main Routing
app.use("/", home);
app.use("/admin", adminAuth);
app.use("/admin/categories", adminCategory);
app.use("/admin/products", adminProducts);

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
  res
    .status(404)
    .send({
      status: "error",
      error: "Cannot " + req.method + " Method " + req.path,
    });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
