const express = require("express");
const router = express.Router();
const shows = require("../controllers/shows");
const catchAsync = require("../utils/catchAsync");

router.get("/", shows.renderLanding);
router.get("/managed-services", shows.renderManagedservices);
router.get("/home", shows.rendermain);
router.get("/impressum", shows.renderImpressum);
router.post("/home", catchAsync(shows.createKontakt));

module.exports = router;
