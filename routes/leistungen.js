const express = require("express");
const router = express.Router();
const leistungen = require("../controllers/leistungen");
const catchAsync = require("../utils/catchAsync");
const { leistungSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, validateLeistung } = require("../middleware");
const Leistung = require("../models/leistung");

router.get("/neu", isLoggedIn, leistungen.renderNewLeistung);

router.post(
  "/",
  isLoggedIn,
  validateLeistung,
  catchAsync(leistungen.createLeistung)
);

router.get("/:id/edit", isLoggedIn, catchAsync(leistungen.renderEditLeistung));

router.put(
  "/:id",
  isLoggedIn,
  validateLeistung,
  catchAsync(leistungen.updateLeistung)
);

module.exports = router;
