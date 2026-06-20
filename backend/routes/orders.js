const router = require("express").Router()

const Order =
require("../models/Order")

const generateTracking =
require("../utils/generateTracking")

router.post("/", async(req,res)=>{

  const trackingCode =
  generateTracking()

  const order =
  await Order.create({

    ...req.body,

    trackingCode

  })

  res.json(order)

})

router.get("/:id", async(req,res)=>{

  const order =
  await Order.findById(
    req.params.id
  )

  res.json(order)

})

module.exports = router
