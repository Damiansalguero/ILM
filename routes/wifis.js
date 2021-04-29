const express = require("express");
const router = express.Router();
const wifis = require("../controllers/wifis");
const catchAsync = require("../utils/catchAsync");
const { wifiSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, validateWifi } = require("../middleware");
const Wifi = require("../models/wifi");

router.get("/neu", isLoggedIn, wifis.renderNewWifi);

router.post("/", isLoggedIn, validateWifi, catchAsync(wifis.createWifi));

router.get("/:id/edit", isLoggedIn, catchAsync(wifis.renderEditWifi));

router.put("/:id", isLoggedIn, validateWifi, catchAsync(wifis.updateWifi));

module.exports = router;
