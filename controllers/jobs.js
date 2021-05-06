const Job = require("../models/job");
const { jobSchema } = require("../schemas.js");

module.exports.renderNewJob = (req, res) => {
  res.render("jobposts/new");
};

module.exports.createJob = async (req, res, next) => {
  const job = await new Job(req.body.job);
  await job.save();
  // req.flash("success", "Der Jobpost wurde erfolgreich erstellt !");
  // res.redirect("/karriere");
  res.send("WORKED!!!!");
};

module.exports.renderEditJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(req.params.id);
  res.render("jobposts/edit", { job });
};

module.exports.showJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    req.flash("error", "Dieser Eintrag existiert nicht mehr !");
    return res.redirect("/karriere");
  }

  res.render("jobposts/show", { job });
};

module.exports.updateJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndUpdate(id, {
    ...req.body.job,
  });
  await job.save();
  req.flash("success", "Der Jobpost wurde erfolgreich aktualisiert !");
  res.redirect("/karriere");
};

module.exports.deleteJob = async (req, res) => {
  const { id } = req.params;
  await Job.findByIdAndDelete(id);
  req.flash("success", "Der Jobpost wurde erfolgreich gelöscht!");
  res.redirect("/karriere");
};
