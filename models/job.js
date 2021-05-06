const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title: String,
  date: String,
  description: String,
  location: String,
});

module.exports = mongoose.model("Job", JobSchema);
