const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeminarSchema = new Schema({
  description: String,
});

module.exports = mongoose.model("Seminar", SeminarSchema);
