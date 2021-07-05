const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  title: String,
  description: String,
  textone: String,
  texttwo: String,
});

module.exports = mongoose.model("Service", ServiceSchema);
