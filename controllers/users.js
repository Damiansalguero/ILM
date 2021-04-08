const User = require("../models/user");

module.exports.renderRegister = (req, res) => {
  res.render("users/register");
};

module.exports.registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    //login() method makes sure a user gets logged in right after register
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
    res.redirect("/admin/register");
  }
};

module.exports.renderLogin = (req, res) => {
  res.render("users/login");
};

module.exports.loginRedirect = (req, res) => {
  req.flash("success", "Willkommen zurück !");
  const redirectUrl = req.session.returnTo || "/";
  delete req.session.returnTo;
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logout();
  req.flash("info", "Sie sind jetzt ausgeloggt !");
  res.redirect("/");
};
