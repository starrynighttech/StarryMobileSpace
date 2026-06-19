const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  fullName: String,

  email: {
    type: String,
    unique: true
  },

  password: String,

  role: {
    type: String,
    default: "user"
  },

  referralCode: String,

  referredBy: String,

  walletBalance: {
    type: Number,
    default: 0
  }

}, {
  timestamps: true
})

module.exports = mongoose.model("User", UserSchema)
