const {
  portfolioSchema,
  serviceSchema,
  wifiSchema,
  securitySchema,
  structureSchema,
  seminarSchema,
} = require("./schemas.js");
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
module.exports.validateService = (req, res, next) => {
  const { error } = serviceSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

//////////// WIFI MIDDLEWARE ///////
module.exports.validateWifi = (req, res, next) => {
  const { error } = wifiSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

//////////// SECURITY MIDDLEWARE ///////
module.exports.validateSecurity = (req, res, next) => {
  const { error } = securitySchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

//////////// SECURITY MIDDLEWARE ///////
module.exports.validateStructure = (req, res, next) => {
  const { error } = structureSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

//////////// SEMINAR MIDDLEWARE ///////
module.exports.validateSeminar = (req, res, next) => {
  const { error } = seminarSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};
