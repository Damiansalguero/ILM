const express = require("express");
const router = express.Router();
const seminars = require("../controllers/seminars");
const catchAsync = require("../utils/catchAsync");
const { seminarSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, validateSeminar } = require("../middleware");
const Seminar = require("../models/seminar");

router.get("/neu", isLoggedIn, seminars.renderNewSeminar);

router.post(
  "/",
  isLoggedIn,
  validateSeminar,
  catchAsync(seminars.createSeminar)
);

router.get("/:id/edit", isLoggedIn, catchAsync(seminars.renderEditSeminar));

router.put(
  "/:id",
  isLoggedIn,
  validateSeminar,
  catchAsync(seminars.updateSeminar)
);

module.exports = router;
