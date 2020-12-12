const Joi = require("joi");

//Validation for adding image to sicial
const validSocial = (_socialObj) => {
    let schema = Joi.object({
        img: Joi.string().required(),
        title: Joi.string().min(2).max(50),
        type: Joi.string().min(2).max(50),
        pet_id: Joi.any()
    })
    return schema.validate(_socialObj);
}
exports.validSocial = validSocial;

//Validation for editing image to sicial
const validEditSocial = (_socialObj) => {
    let schema = Joi.object({
        id: Joi.any().required(),
        img: Joi.string().required(),
        title: Joi.string().min(2).max(50),
        type: Joi.string().min(2).max(50),
        pet_id: Joi.any()
    })
    return schema.validate(_socialObj);
}
exports.validEditSocial = validEditSocial;
