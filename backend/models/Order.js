const mongoose = require("mongoose")

const OrderSchema =
new mongoose.Schema({

  userId:String,

  items:Array,

  total:Number,

  paymentStatus:{
    type:String,
    default:"pending"
  },

  status:{
    type:String,
    default:"processing"
  },

  trackingCode:String

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Order",
  OrderSchema
)
