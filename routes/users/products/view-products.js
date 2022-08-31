const express = require("express");
let app = express.Router();

const { connection } = require("../../../db/config");


app.get("/", async (req, res) => {
  try {
    // Execution
    connection.query("SELECT * FROM products", function (err, results) {
      if (err) return res.json({ status: "error", error: err.code });
      const result = Object.values(JSON.parse(JSON.stringify(results)));
      return res.json({
        status: "ok",
        data: result,
      });
    });
  } catch (errors) {
    console.log(errors);
    if (errors) return { status: "error", error: errors };
  }
});

module.exports = app;
