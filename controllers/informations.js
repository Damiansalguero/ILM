const Information = require("../models/information");
const { infromationSchema } = require("../schemas.js");

module.exports.renderNewInformation = (req, res) => {
  res.render("informationsposts/new");
};

module.exports.createInformation = async (req, res, next) => {
  const information = await new Information(req.body.information);
  // port.author = req.user._id;
  await information.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich erstellt !");
  res.redirect("/informationssicherheit");
};

module.exports.renderEditInformation = async (req, res) => {
  const { id } = req.params;
  const information = await Information.findById(req.params.id);
  res.render("informationsposts/edit", { information });
};

module.exports.updateInformation = async (req, res) => {
  const { id } = req.params;
  const information = await Information.findByIdAndUpdate(id, {
    ...req.body.information,
  });
  await information.save();
  req.flash("success", "Der Eintrag wurde erfolgreich aktualisiert !");
  res.redirect("/informationssicherheit");
};
