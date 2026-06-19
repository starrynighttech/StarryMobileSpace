const router = require("express").Router()

const Wallet =
require("../models/Wallet")

router.get("/:userId", async (req, res) => {

  let wallet =
  await Wallet.findOne({
    userId: req.params.userId
  })

  if (!wallet) {

    wallet =
    await Wallet.create({
      userId: req.params.userId,
      balance: 0
    })

  }

  res.json(wallet)

})

module.exports = router
