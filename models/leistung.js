const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeistungSchema = new Schema({
  description: String,
});

module.exports = mongoose.model("Leistung", LeistungSchema);
