const express = require("express");
const router = express.Router();
const services = require("../controllers/services");
const catchAsync = require("../utils/catchAsync");
const { serviceSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, validateService } = require("../middleware");

const Service = require("../models/service");

router.get("/neu", isLoggedIn, services.renderNewService);

router.post(
  "/",
  isLoggedIn,
  validateService,
  catchAsync(services.createService)
);

router.get("/:id/edit", isLoggedIn, catchAsync(services.renderEditService));

router.put(
  "/:id",
  isLoggedIn,
  validateService,
  catchAsync(services.updateService)
);

module.exports = router;
