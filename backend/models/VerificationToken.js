const mongoose = require("mongoose")

const VerificationTokenSchema =
new mongoose.Schema({

  userId:String,

  token:String,

  used:{
    type:Boolean,
    default:false
  }

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "VerificationToken",
  VerificationTokenSchema
)
