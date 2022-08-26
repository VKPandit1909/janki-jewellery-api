const express = require("express");
let app = express.Router();
const conn = require("../../../db/config");

app.get("/", async (req, res) => {
  try {
    conn.query("SELECT * FROM categories", function (err, results) {
      if (err) return res.json({ status: "error", error: err.code });
      const result = Object.values(JSON.parse(JSON.stringify(results)));
      return res.json({
        status: "ok",
        data: result,
      });
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports = app;
