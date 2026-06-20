const router =
require("express").Router()

const AdCampaign =
require("../models/AdCampaign")

router.post("/campaign",
async(req,res)=>{

  const campaign =
  await AdCampaign.create(
    req.body
  )

  res.status(201).json(
    campaign
  )

})

router.get("/campaigns",
async(req,res)=>{

  const campaigns =
  await AdCampaign.find()

  res.json(
    campaigns
  )

})

module.exports = router
