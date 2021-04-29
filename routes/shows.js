const express = require("express");
const router = express.Router();
const shows = require("../controllers/shows");
const catchAsync = require("../utils/catchAsync");

router.get("/", shows.renderLanding);
router.get("/home", shows.rendermain);
router.get("/managed-services", shows.renderManagedservices);
router.get("/wlan", shows.renderWlan);
router.get("/infrastruktur", shows.renderStructure);
router.get("/it-security", shows.renderSecurity);
router.get("/impressum", shows.renderImpressum);
router.post("/home", catchAsync(shows.createKontakt));

module.exports = router;
