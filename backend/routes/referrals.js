const router =
require("express").Router()

const Referral =
require("../models/Referral")

router.post("/", async(req,res)=>{

  const referral =
  await Referral.create(req.body)

  res.status(201).json(referral)

})

router.get("/:userId", async(req,res)=>{

  const referrals =
  await Referral.find({
    referrerId:req.params.userId
  })

  res.json(referrals)

})

module.exports = router
