const express = require("express");

// dotenv

require("dotenv").config();

// Mongo Data Base

const mongoose = require("mongoose");

const workoutRoutes = require("./routes/Workout");

// Express App

const app = express();

// Middleware

app.use(express.json());

app.use(function (req, res, next) {
  console.log(req.path, req.method);
  next();
});

// Route

app.use("/api/workouts", workoutRoutes);

// Connect To Db

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connecting to DB & App listening on port" + process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
