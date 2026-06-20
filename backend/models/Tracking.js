const mongoose = require("mongoose")

const TrackingSchema =
new mongoose.Schema({

  internalCode:{
    type:String,
    unique:true
  },

  courierCode:String,

  orderId:String,

  status:{
    type:String,
    default:"Processing"
  },

  currentLocation:String,

  estimatedDelivery:Date

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Tracking",
  TrackingSchema
)
