const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: String,
  filename: String,
});

// ImageSchema.virtual("thumbnail").get(function () {
//   return this.url.replace("/upload", "/upload/h_300");
// });

const PortfolioSchema = new Schema({
  title: String,
  subtitle: String,
  images: [ImageSchema],
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
