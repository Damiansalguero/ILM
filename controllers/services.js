const Service = require("../models/service");
const { serviceSchema } = require("../schemas.js");

module.exports.renderNewService = (req, res) => {
  res.render("serviceposts/new");
};

module.exports.createService = async (req, res, next) => {
  const service = await new Service(req.body.service);
  // port.author = req.user._id;
  await service.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich erstellt !");
  res.redirect("/managed-services");
};

module.exports.renderEditService = async (req, res) => {
  const { id } = req.params;
  const service = await Service.findById(req.params.id);
  res.render("serviceposts/edit", { service });
};

module.exports.updateService = async (req, res) => {
  const { id } = req.params;
  const service = await Service.findByIdAndUpdate(id, {
    ...req.body.service,
  });
  await service.save();
  req.flash("success", "Der Eintrag wurde erfolgreich aktualisiert !");
  res.redirect("/managed-services");
};
