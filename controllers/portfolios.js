const Portfolio = require("../models/portfolio");
const { portfolioSchema } = require("../schemas.js");
const { cloudinary } = require("../cloudinary");

module.exports.renderNew = (req, res) => {
  res.render("portfolioposts/new");
};

module.exports.createPortfolio = async (req, res, next) => {
  const portfolio = await new Portfolio(req.body.portfolio);
  portfolio.images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));
  portfolio.author = req.user._id;
  await portfolio.save();
  console.log(portfolio);
  // req.flash("success", "Der Eintrag wurde erfolgreich erstellt !");
  res.redirect("/home");
};
