const Leistung = require("../models/leistung");
const { leistungSchema } = require("../schemas.js");

module.exports.renderNewLeistung = (req, res) => {
  res.render("leistungposts/new");
};

module.exports.createLeistung = async (req, res, next) => {
  const leistung = await new Leistung(req.body.leistung);
  // port.author = req.user._id;
  await leistung.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich erstellt !");
  res.redirect("/dienstleistungen");
};

module.exports.renderEditLeistung = async (req, res) => {
  const { id } = req.params;
  const leistung = await Leistung.findById(req.params.id);
  res.render("leistungposts/edit", { leistung });
};

module.exports.updateLeistung = async (req, res) => {
  const { id } = req.params;
  const leistung = await Leistung.findByIdAndUpdate(id, {
    ...req.body.leistung,
  });
  await leistung.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich aktualisiert !");
  res.redirect("/dienstleistungen");
};
