const router = require("express").Router()

const Category =
require("../models/Category")

router.get("/", async(req,res)=>{

  const categories =
  await Category.find()

  res.json(categories)

})

router.post("/", async(req,res)=>{

  const category =
  await Category.create(
    req.body
  )

  res.status(201).json(category)

})

module.exports = router
