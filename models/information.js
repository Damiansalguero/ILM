const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InformationSchema = new Schema({
  description: String,
});

module.exports = mongoose.model("Information", InformationSchema);
