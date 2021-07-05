const Joi = require("joi");
module.exports.portfolioSchema = Joi.object({
  port: Joi.object({
    title: Joi.string().required(),
    subtitle: Joi.string().required(),
    url: Joi.string().required(),
  }).required(),
  deleteImages: Joi.array(),
});

module.exports.serviceSchema = Joi.object({
  service: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    textone: Joi.string().required(),
    texttwo: Joi.string().required(),
  }).required(),
});

module.exports.wifiSchema = Joi.object({
  wifi: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    textone: Joi.string().required(),
    texttwo: Joi.string().required(),
  }).required(),
});

module.exports.securitySchema = Joi.object({
  security: Joi.object({
    description: Joi.string().required(),
  }).required(),
});

module.exports.structureSchema = Joi.object({
  structure: Joi.object({
    description: Joi.string().required(),
  }).required(),
});

module.exports.seminarSchema = Joi.object({
  seminar: Joi.object({
    description: Joi.string().required(),
  }).required(),
});

module.exports.leistungSchema = Joi.object({
  leistung: Joi.object({
    description: Joi.string().required(),
  }).required(),
});

module.exports.jobSchema = Joi.object({
  job: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.string().optional().allow(""),
    location: Joi.string().optional().allow(""),
  }).required(),
});
