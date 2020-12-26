const Joi = require("joi");

const validPet = (_petObj) => {
  let schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    type: Joi.string().min(2).max(50).required(),
    age: Joi.number(),
    weight: Joi.number().min(1).max(200),
    gender: Joi.string(),
    activityLevel: Joi.number().min(1).max(10).required(),
    foodLevel: Joi.number().min(1).max(10).required(),
    dayPlan: Joi.string().min(2).required(),
    dayPlanLevel:Joi.number().min(1).max(10).required(),
    hobbies: Joi.string().max(50),
    bio: Joi.string(),
    img:Joi.string(),
  })
  return schema.validate(_petObj);
}
exports.validPet = validPet;

const validEditPet = (_petObj) => {
  let schema = Joi.object({
    id:Joi.string(),
    name: Joi.string().min(2).max(50).required(),
    type: Joi.string().min(2).max(50).required(),
    age: Joi.number(),
    weight: Joi.number().min(1).max(200),
    gender: Joi.string(),
    activityLevel: Joi.number().min(1).max(10).required(),
    foodLevel: Joi.number().min(1).max(10).required(),
    dayPlan: Joi.string().min(2).required(),
    dayPlanLevel:Joi.number().min(1).max(10).required(),
    hobbies: Joi.string().max(50),
    bio: Joi.string(),
    img:Joi.string(),
    currDayPlanLevel:Joi.number(),
    currActivityLevel:Joi.number(),
    currFoodLevel:Joi.number()
  })
  return schema.validate(_petObj);
}
exports.validEditPet = validEditPet;
