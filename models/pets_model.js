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
