const express = require("express");
const router = express.Router();
const structures = require("../controllers/structures");
const catchAsync = require("../utils/catchAsync");
const { structureSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, validateStructure } = require("../middleware");
const Structure = require("../models/structure");

router.get("/neu", isLoggedIn, structures.renderNewStructure);

router.post(
  "/",
  isLoggedIn,
  validateStructure,
  catchAsync(structures.createStructure)
);

router.get("/:id/edit", isLoggedIn, catchAsync(structures.renderEditStructure));

router.put(
  "/:id",
  isLoggedIn,
  validateStructure,
  catchAsync(structures.updateStructure)
);

module.exports = router;
