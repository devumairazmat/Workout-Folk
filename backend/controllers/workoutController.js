const { json } = require("express");
const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// Get all Workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// Get a Single Workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};
// POST a new workout

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  // add doc to DB
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a  Workout

// Update a new Workout

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
};
