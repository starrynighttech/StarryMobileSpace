const router =
require("express").Router()

const Payout =
require("../models/Payout")

router.post("/request",
async(req,res)=>{

  const payout =
  await Payout.create(req.body)

  res.status(201).json(payout)

})

module.exports = router
