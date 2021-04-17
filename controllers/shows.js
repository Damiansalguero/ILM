const Portfolio = require("../models/portfolio");
const { cloudinary } = require("../cloudinary");

module.exports.renderLanding = (req, res) => {
  res.render("landing");
  // res.render("test");
};

module.exports.rendermain = async (req, res) => {
  const ports = await Portfolio.find({});
  res.render("main", { ports });
  // res.render("test");
};

module.exports.renderInformation = (req, res) => {
  res.render("information");
};
