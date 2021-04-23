const express = require("express");
const router = express.Router();
const shows = require("../controllers/shows");
const catchAsync = require("../utils/catchAsync");

router.get("/", shows.renderLanding);
router.get("/informationssicherheit", shows.renderInformation);
router.get("/home", shows.rendermain);
router.get("/impressum", shows.renderImpressum);

module.exports = router;
