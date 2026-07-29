const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD Application is Running!");
});

module.exports = app;