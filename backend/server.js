const express = require("express");
require("dotenv").config();

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

// Request

app.listen(process.env.PORT, () => {
  console.log("App listening on port" + process.env.PORT);
});
