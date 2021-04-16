const Portfolio = require("../models/portfolio");
const { portfolioSchema } = require("../schemas.js");
const { cloudinary } = require("../cloudinary");

module.exports.renderNew = (req, res) => {
  res.render("portfolioposts/new");
};

module.exports.createPortfolio = async (req, res, next) => {
  const port = await new Portfolio(req.body.port);
  port.images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));
  // port.author = req.user._id;
  await port.save();
  console.log(req.body, req.files);
  res.send("POST ROUTE WORKED");
  // req.flash("success", "Der Eintrag wurde erfolgreich erstellt !");
  // res.redirect("/home");
};
