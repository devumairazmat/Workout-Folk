const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router();
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// Get all Workouts
router.get("/", getWorkouts);

// Get a Single Workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// Delete a  Workout
router.delete("/:id", deleteWorkout);

// Update a new Workout
router.patch("/:id", updateWorkout);
module.exports = router;
