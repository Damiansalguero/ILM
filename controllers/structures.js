const Structure = require("../models/structure");
const { structureSchema } = require("../schemas.js");

module.exports.renderNewStructure = (req, res) => {
  res.render("structureposts/new");
};

module.exports.createStructure = async (req, res, next) => {
  const structure = await new Structure(req.body.structure);
  // port.author = req.user._id;
  await structure.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich erstellt !");
  res.redirect("/infrastruktur");
};

module.exports.renderEditStructure = async (req, res) => {
  const { id } = req.params;
  const structure = await Structure.findById(req.params.id);
  res.render("structureposts/edit", { structure });
};

module.exports.updateStructure = async (req, res) => {
  const { id } = req.params;
  const structure = await Structure.findByIdAndUpdate(id, {
    ...req.body.structure,
  });
  await structure.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich aktualisiert !");
  res.redirect("/infrastruktur");
};
