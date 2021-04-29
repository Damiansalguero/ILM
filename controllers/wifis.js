const Wifi = require("../models/wifi");
const { wifiSchema } = require("../schemas.js");

module.exports.renderNewWifi = (req, res) => {
  res.render("wlanposts/new");
};

module.exports.createWifi = async (req, res, next) => {
  const wifi = await new Wifi(req.body.wifi);
  // port.author = req.user._id;
  await wifi.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich erstellt !");
  res.redirect("/wlan");
};

module.exports.renderEditWifi = async (req, res) => {
  const { id } = req.params;
  const wifi = await Wifi.findById(req.params.id);
  res.render("wlanposts/edit", { wifi });
};

module.exports.updateWifi = async (req, res) => {
  const { id } = req.params;
  const wifi = await Wifi.findByIdAndUpdate(id, {
    ...req.body.wifi,
  });
  await wifi.save();
  // req.flash("success", "Der Eintrag wurde erfolgreich aktualisiert !");
  res.redirect("/wlan");
};
