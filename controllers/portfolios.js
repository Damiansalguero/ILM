const Portfolio = require("../models/portfolio");
const { portfolioSchema } = require("../schemas.js");
const { cloudinary } = require("../cloudinary");

module.exports.renderNew = (req, res) => {
  res.render("portfolioposts/new");
};
