const { portfolioSchema } = require("./schemas.js");
const ExpressError = require("./utils/ExpressError");

//////////////////PASSPORT////////////////////
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash("error", "Du musst eingeloggt sein, um diese Seite zu sehen");
    return res.redirect("/login");
  }
  next();
};

//////////// PORTFOLIO MIDDLEWARE ///////
module.exports.validatePortfolio = (req, res, next) => {
  const { error } = portfolioSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

//////////// INFORMATION MIDDLEWARE ///////
module.exports.validateInformation = (req, res, next) => {
  const { error } = infromationSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};
