const mongoose = require("mongoose");

const socialSchema = new mongoose.Schema({
  img:{
    type:String,
    required:true,
  },
  date_time: {
    type: Date, default: Date.now
  },
  title:{
    type:String,
    minlength:2,
    maxlength:50
  },
  type:{
    type:String,
    minlength:2,
    maxlength:50
  },
  pet_id:{ 
    type:String
  },
  user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'users'}
})
const socialModel = mongoose.model("socialnetworks",socialSchema);
exports.socialModel = socialModel;