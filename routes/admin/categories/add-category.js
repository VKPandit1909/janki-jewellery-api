const express = require("express");
let app = express.Router();
const conn = require("../../../db/config");
const { Insert } = require("../../../db/crud/insert");
const dformat = require("../../../db/timestamp");

app.post("/", async (req, res) => {
  console.log(req.body);
  const { category_name, priority_order, category_banner } = req.body;

  try {
    const category_data = {
      category_name: category_name,
      priority_order: priority_order,
      category_banner: category_banner,
      date: dformat,
    };

    Insert(conn, "categories", category_data);
    return res.json({
      status: "ok",
      message: "Added Category Successfully.",
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

module.exports = app;
