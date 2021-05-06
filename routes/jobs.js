const express = require("express");
const router = express.Router();
const jobs = require("../controllers/jobs");
const catchAsync = require("../utils/catchAsync");
const { jobSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, validateJob } = require("../middleware");

const Job = require("../models/job");

router.get("/neu", jobs.renderNewJob);

router.post(
  "/",

  validateJob,
  catchAsync(jobs.createJob)
);

router.get("/:id", catchAsync(jobs.showJob));

router.get("/:id/edit", isLoggedIn, catchAsync(jobs.renderEditJob));

router.put("/:id", isLoggedIn, validateJob, catchAsync(jobs.updateJob));

router.delete("/:id", catchAsync(jobs.deleteJob));

module.exports = router;
