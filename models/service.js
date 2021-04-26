const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  description: String,
});

module.exports = mongoose.model("Service", ServiceSchema);
