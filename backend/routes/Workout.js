const express = require("express");

const router = express.Router();

// Get all Workouts
router.get("/", (req, res) => {
  res.json({ msg: "Get All Workouts" });
});

// Get a Single Workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get Signle Workout" });
});

// Post a new Workout
router.post("/", (req, res) => {
  res.json({ msg: "Post a new Workout" });
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
