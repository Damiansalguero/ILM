const express = require("express");
const router = express.Router();
const shows = require("../controllers/shows");
const catchAsync = require("../utils/catchAsync");
module.exports = router;

router.get("/", shows.renderLanding);
