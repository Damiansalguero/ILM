const Security = require("../models/security");
const { securitySchema } = require("../schemas.js");

module.exports.renderNewSecurity = (req, res) => {
  res.render("securityposts/new");
};

module.exports.createSecurity = async (req, res, next) => {
  const security = await new Security(req.body.security);
  // port.author = req.user._id;
  await security.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich erstellt !");
  res.redirect("/it-security");
};

module.exports.renderEditSecurity = async (req, res) => {
  const { id } = req.params;
  const security = await Security.findById(req.params.id);
  res.render("securityposts/edit", { security });
};

module.exports.updateSecurity = async (req, res) => {
  const { id } = req.params;
  const security = await Security.findByIdAndUpdate(id, {
    ...req.body.security,
  });
  await security.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich aktualisiert !");
  res.redirect("/it-security");
};
