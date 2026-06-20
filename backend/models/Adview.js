const mongoose =
require("mongoose")

const AdViewSchema =
new mongoose.Schema({

  campaignId:String,

  userId:String,

  rewardPaid:{
    type:Boolean,
    default:false
  }

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "AdView",
  AdViewSchema
)
