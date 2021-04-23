const Portfolio = require("../models/portfolio");
const Information = require("../models/information");
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

module.exports.renderInformation = async (req, res) => {
  const information = await Information.findOne({});
  res.render("information", { information });
};

module.exports.renderImpressum = (req, res) => {
  res.render("impressum");
  // res.render("test");
};
