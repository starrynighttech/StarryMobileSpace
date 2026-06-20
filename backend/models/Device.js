const mongoose =
require("mongoose")

const DeviceSchema =
new mongoose.Schema({

  userId:String,

  deviceId:String,

  deviceName:String,

  lastSeen:Date

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Device",
  DeviceSchema
)
