const express = require("express");
const router = express.Router();
const shows = require("../controllers/shows");
const catchAsync = require("../utils/catchAsync");

router.get("/", shows.renderLanding);
router.get("/home", shows.rendermain);

module.exports = router;
