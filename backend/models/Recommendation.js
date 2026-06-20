const mongoose = require("mongoose")

const RecommendationSchema =
new mongoose.Schema({

  userId:String,

  productId:String,

  score:Number

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Recommendation",
  RecommendationSchema
)
