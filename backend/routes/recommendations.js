const router =
require("express").Router()

const Product =
require("../models/Product")

router.get("/:userId",
async(req,res)=>{

  const products =
  await Product.find()
  .limit(10)

  res.json(products)

})

module.exports = router
