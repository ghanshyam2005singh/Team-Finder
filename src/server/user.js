const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String, // frontend, backend, designer
  skills: [String],
  location: String,
  hackathons: [String],
  bio: String,
});

module.exports = mongoose.model("User", userSchema);