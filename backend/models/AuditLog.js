const mongoose = require("mongoose")

const AuditLogSchema =
new mongoose.Schema({

  userId:String,

  action:String,

  module:String,

  ipAddress:String,

  metadata:Object

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "AuditLog",
  AuditLogSchema
)
