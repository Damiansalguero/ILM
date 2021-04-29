const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SecuritySchema = new Schema({
  description: String,
});

module.exports = mongoose.model("Security", SecuritySchema);
