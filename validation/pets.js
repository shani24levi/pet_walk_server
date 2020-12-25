const Joi = require("joi");

const validPet = (_petObj) => {
  let schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    type: Joi.string().min(2).max(50).required(),
    age: Joi.number().required(),
    weight: Joi.number().min(1).max(200),
    gender: Joi.string().min(1).max(50).required(),
    activityLevel: Joi.string().min(1).max(50).required(),
    foodLevel: Joi.string().min(1).max(50).required(),
    dayPlan: Joi.string().min(1).max(100).required(),
    hobbies: Joi.string().min(1).max(50),
    img:Joi.string()

  })
  return schema.validate(_petObj);
}
exports.validPet = validPet;


const validEditPet = (_petObj) => {
  let schema = Joi.object({
    id: Joi.any().required(),  //id of pet item 
    name: Joi.string().min(2).max(50),
    type: Joi.string().min(2).max(50),
    age: Joi.number().required(),
    weight: Joi.number().min(1).max(200),
    gender: Joi.string().min(1).max(50),
    activityLevel: Joi.string().min(1).max(50),
    foodLevel: Joi.string().min(1).max(50),
    dayPlan: Joi.string().min(1).max(100),
    hobbies: Joi.string().min(1).max(50),
    img:Joi.string()
  })
  return schema.validate(_petObj);
}

exports.validEditPet = validEditPet;