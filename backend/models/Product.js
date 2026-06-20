const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },

  price: {
    type: Number,
    required: true
  },

  stock: {
    type: Number,
    default: 0
  },

  featured: {
    type: Boolean,
    default: false
  },

  image: String,

  gallery: [String]

},{
  timestamps:true
})

module.exports =
mongoose.model(
  "Product",
  ProductSchema
)
