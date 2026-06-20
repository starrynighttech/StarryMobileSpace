const router =
require("express").Router()

const Reward =
require("../models/Reward")

router.get("/:userId",
async(req,res)=>{

  const rewards =
  await Reward.find({
    userId:req.params.userId
  })

  res.json(rewards)

})

module.exports = router
