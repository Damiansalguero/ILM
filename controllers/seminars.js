const Seminar = require("../models/seminar");
const { seminarSchema } = require("../schemas.js");

module.exports.renderNewSeminar = (req, res) => {
  res.render("seminarposts/new");
};

module.exports.createSeminar = async (req, res, next) => {
  const seminar = await new Seminar(req.body.seminar);
  // port.author = req.user._id;
  await seminar.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich erstellt !");
  res.redirect("/schulungen");
};

module.exports.renderEditSeminar = async (req, res) => {
  const { id } = req.params;
  const seminar = await Seminar.findById(req.params.id);
  res.render("seminarposts/edit", { seminar });
};

module.exports.updateSeminar = async (req, res) => {
  const { id } = req.params;
  const seminar = await Seminar.findByIdAndUpdate(id, {
    ...req.body.seminar,
  });
  await seminar.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich aktualisiert !");
  res.redirect("/schulungen");
};
