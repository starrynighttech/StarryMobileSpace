const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({

  userId:String,

  type:String,

  amount:Number,

  description:String

},{
  timestamps:true
})

module.exports = mongoose.model(
  "Transaction",
  TransactionSchema
)
