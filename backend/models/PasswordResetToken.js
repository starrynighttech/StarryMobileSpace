const mongoose = require("mongoose")

const PasswordResetTokenSchema =
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
  "PasswordResetToken",
  PasswordResetTokenSchema
)
