const Joi = require("joi");

const validPet = (_petObj) => {
  let schema = Joi.object({
    id: Joi.any(),
    name: Joi.string().min(2).max(50).required(),
    type: Joi.string().min(2).max(50).required(),
    age: Joi.number().required(),
    weight: Joi.number().min(1).max(200),
    gender: Joi.string().min(1).max(50),
    activityLevel: Joi.string().min(1).max(50).required(),
    foodLevel: Joi.string().min(1).max(50).required(),
    hobbies: Joi.string().min(1).max(50),
  })
  return schema.validate(_petObj);
}

exports.validPet = validPet;