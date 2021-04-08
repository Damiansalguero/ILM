const User = require("../models/user");

module.exports.renderRegister = (req, res) => {
  res.render("users/register");
};

module.exports.registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash(
        "success",
        "Ihre Registrierung wurde erfolgreich abgeschlossen. Willkommen, " +
          user.username
      );
      res.redirect("/home");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.send("DIDN' T WORK");
    // res.redirect("/admin/register");
  }
};

module.exports.renderLogin = (req, res) => {
  res.render("users/login");
};

module.exports.loginRedirect = (req, res) => {
  req.flash("success", "Willkommen zurück !");
  const redirectUrl = req.session.returnTo || "/home";
  delete req.session.returnTo;
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logout();
  req.flash("info", "Sie sind jetzt ausgeloggt !");
  res.redirect("/home");
};
