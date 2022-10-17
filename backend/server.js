const express = require("express");
require("dotenv").config();

// Express App
const app = express();

// Middleware
app.use(function (req, res, next) {
  console.log(req.path, req.method);
  next();
});

// Route
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to App" });
});

// Request

app.listen(process.env.PORT, () => {
  console.log("App listening on port" + process.env.PORT);
});
