const express = require("express");
const router = express.Router();
const informations = require("../controllers/informations");
const catchAsync = require("../utils/catchAsync");
const { infromationSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, validateInformation } = require("../middleware");

const Information = require("../models/information");

router.get("/neu", isLoggedIn, informations.renderNewInformation);

router.post(
  "/",
  isLoggedIn,
  validateInformation,
  catchAsync(informations.createInformation)
);

router.get(
  "/:id/edit",
  isLoggedIn,
  catchAsync(informations.renderEditInformation)
);

router.put(
  "/:id",
  isLoggedIn,
  validateInformation,
  catchAsync(informations.updateInformation)
);

module.exports = router;
