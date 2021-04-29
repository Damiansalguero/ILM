const express = require("express");
const router = express.Router();
const securities = require("../controllers/securities");
const catchAsync = require("../utils/catchAsync");
const { securitySchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, validateSecurity } = require("../middleware");
const Security = require("../models/security");

router.get("/neu", isLoggedIn, securities.renderNewSecurity);

router.post(
  "/",
  isLoggedIn,
  validateSecurity,
  catchAsync(securities.createSecurity)
);

router.get("/:id/edit", isLoggedIn, catchAsync(securities.renderEditSecurity));

router.put(
  "/:id",
  isLoggedIn,
  validateSecurity,
  catchAsync(securities.updateSecurity)
);

module.exports = router;
