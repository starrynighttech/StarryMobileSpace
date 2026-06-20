const router =
require("express").Router()

const Notification =
require("../models/Notification")

router.get("/:userId",
async(req,res)=>{

  const notifications =
  await Notification.find({
    userId:req.params.userId
  })

  res.json(notifications)

})

module.exports = router
