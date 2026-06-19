const mongoose = require("mongoose")

const WalletSchema = new mongoose.Schema({
  userId: String,

  balance: {
    type: Number,
    default: 0
  }
},{
  timestamps:true
})

module.exports = mongoose.model("Wallet", WalletSchema)
