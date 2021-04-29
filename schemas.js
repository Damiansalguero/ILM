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
    description: Joi.string().required(),
  }).required(),
});

module.exports.wifiSchema = Joi.object({
  wifi: Joi.object({
    description: Joi.string().required(),
  }).required(),
});

module.exports.securitySchema = Joi.object({
  security: Joi.object({
    description: Joi.string().required(),
  }).required(),
});
