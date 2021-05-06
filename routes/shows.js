const express = require("express");
const router = express.Router();
const shows = require("../controllers/shows");
const catchAsync = require("../utils/catchAsync");

router.get("/", shows.renderLanding);
router.get("/home", shows.rendermain);
router.post("/home", catchAsync(shows.createKontakt));
router.get("/managed-services", shows.renderManagedservices);
router.get("/wlan", shows.renderWlan);
router.get("/it-security", shows.renderSecurity);
router.get("/infrastruktur", shows.renderStructure);
router.get("/schulungen", shows.renderSeminar);
router.get("/dienstleistungen", shows.renderLeistung);
router.get("/karriere", shows.renderKarriere);
router.get("/impressum", shows.renderImpressum);

module.exports = router;
