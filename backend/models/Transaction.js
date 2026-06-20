const mongoose = require("mongoose")

const TransactionSchema =
new mongoose.Schema({

  userId:{
    type:String,
    required:true
  },

  type:{
    type:String,
    enum:[
      "deposit",
      "withdrawal",
      "reward",
      "purchase"
    ]
  },

  amount:Number,

  reference:String,

  status:{
    type:String,
    default:"completed"
  }

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Transaction",
  TransactionSchema
)
