const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router();

// Get all Workouts
router.get("/", (req, res) => {
  res.json({ msg: "Get All Workouts" });
});

// Get a Single Workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get Signle Workout" });
});

// POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a new Workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a  Workout" });
});

// Update a new Workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update Single Workout" });
});
module.exports = router;
