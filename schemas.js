const Joi = require("joi");
module.exports.portfolioSchema = Joi.object({
  port: Joi.object({
    title: Joi.string().required(),
    subtitle: Joi.string().required(),
  }).required(),
  deleteImages: Joi.array(),
});
