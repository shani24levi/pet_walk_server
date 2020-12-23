const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {String,required:true},
  email: {String,required:true},
  pass: {String,required:true},
  date_time: {
    type: Date, default: Date.now
  },
  rule:{
    type:String, default:"regular"
  }
});
const userModel = mongoose.model("users",userSchema);
exports.userModel = userModel;
