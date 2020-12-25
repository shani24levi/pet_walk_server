const { number } = require("joi");
const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:2,
    maxlength:50
  },
  type:{
    type:String,
    required:true,
    minlength:2,
    maxlength:50
  },
  img:{
    type:String,
  },
  age:{
    type:Number,
  },
  weight:{
    type:Number,
  },
  gender:{
    type:String,
    required:true
  },
  activityLevel:{
    type:String,
    required:true
  },
  foodLevel:{
    type:String,
    required:true
  },
  dayPlan:{
    type:String,
    required:true
  },
  dayPlanLevel:{
    type:Number,
    default: 0
  },
  hobbies:{
    type:String
  },
  user_id:{
    type:String,
    required:true
  }
})
const petModel = mongoose.model("pets",petSchema);
exports.petModel = petModel;
