const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StructureSchema = new Schema({
  description: String,
});

module.exports = mongoose.model("Structure", StructureSchema);
