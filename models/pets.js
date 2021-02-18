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
    default: "https://icon-library.com/images/dog-icon/dog-icon-16.jpg"
  },
  age:{
    type:Number,
  },
  weight:{
    type:Number,
  },
  gender:{
    type:String,
  },
  activityLevel:{
    type:Number,
    required:true
  },
  foodLevel:{
    type:Number,
    required:true
  },
  dayPlan:{
    type:String,
    required:true
  },
  dayPlanLevel:{
    type:Number,
    required:true
  },
//for maintain the dog's present values ​​and change according to the user 
  currDayPlanLevel:{
    type:Number,
    default: 0
  },  
  currActivityLevel:{
    type:Number,
    default: 0
  },  
  currFoodLevel:{
    type:Number,
    default: 0
  },

  hobbies:{
    type:String
  },
  bio:{
    type:String
  },
  user_id:{
    type:String,
    required:true
  }
})
const petModel = mongoose.model("pets",petSchema);
exports.petModel = petModel;
