const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || user.password !== req.body.password) {
    return res.status(400).send({ message: "Invalid credentials" });
  }
  res.send(user);
});

router.get("/all", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get("/search", async (req, res) => {
  const { skill, location, hackathon } = req.query;
  const filter = {
    ...(skill && { skills: { $in: [skill] } }),
    ...(location && { location }),
    ...(hackathon && { hackathons: { $in: [hackathon] } }),
  };
  const users = await User.find(filter);
  res.send(users);
});

module.exports = router;