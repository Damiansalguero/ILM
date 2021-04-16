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

module.exports.renderEditPortfolio = async (req, res) => {
  const { id } = req.params;
  const port = await Portfolio.findById(req.params.id);
  res.render("portfolioposts/edit", { port });
};

module.exports.updatePortfolio = async (req, res) => {
  const { id } = req.params;
  const port = await Portfolio.findByIdAndUpdate(id, {
    ...req.body.port,
  });
  const imgs = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));
  port.images.push(...imgs);
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await port.updateOne({
      $pull: { images: { filename: { $in: req.body.deleteImages } } },
    });
  }
  await port.save();
  req.flash(
    "success",
    "Der Portfolio Eintrag wurde erfolgreich aktualisiert !"
  );
  res.redirect("/home");
};
