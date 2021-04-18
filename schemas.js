const Joi = require("joi");
module.exports.portfolioSchema = Joi.object({
  port: Joi.object({
    title: Joi.string().required(),
    subtitle: Joi.string().required(),
    url: Joi.string().required(),
  }).required(),
  deleteImages: Joi.array(),
});

module.exports.infromationSchema = Joi.object({
  information: Joi.object({
    description: Joi.string().required(),
  }).required(),
});
