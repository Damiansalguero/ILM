const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeminarSchema = new Schema({
  title: String,
  description: String,
  textone: String,
  texttwo: String,
});

module.exports = mongoose.model("Seminar", SeminarSchema);
