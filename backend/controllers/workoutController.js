const Workout = require("../models/workoutModel");

// Get all Workouts
const getWorkouts = async (req, res) => {};

// Get a Single Workout
const getWorkout = async (req, res) => {};

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
