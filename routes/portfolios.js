const express = require("express");
const router = express.Router();
const portfolios = require("../controllers/portfolios");
const catchAsync = require("../utils/catchAsync");
const { portfolioSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, validatePortfolio } = require("../middleware");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });

const Portfolio = require("../models/portfolio");

router.get("/neu", portfolios.renderNew);

router.post("/", validatePortfolio, catchAsync(portfolios.createPortfolio));

router.get("/:id", catchAsync(portfolios.showPortfolio));

router.get("/:id/edit", isLoggedIn, catchAsync(portfolios.renderEdit));

router.put(
  "/:id",
  isLoggedIn,
  validatePortfolio,
  catchAsync(portfolios.updatePortfolio)
);

router.delete("/:id", catchAsync(portfolios.deletePortfolio));

module.exports = router;
