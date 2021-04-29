const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WifiSchema = new Schema({
  description: String,
});

module.exports = mongoose.model("Wifi", WifiSchema);
