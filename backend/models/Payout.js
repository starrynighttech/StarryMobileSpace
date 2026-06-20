const mongoose =
require("mongoose")

const PayoutSchema =
new mongoose.Schema({

  userId:String,

  amount:Number,

  method:String,

  status:{
    type:String,
    default:"pending"
  }

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Payout",
  PayoutSchema
)
