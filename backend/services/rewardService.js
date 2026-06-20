const Wallet =
require("../models/Wallet")

async function addReward(
  userId,
  amount
){

  const wallet =
  await Wallet.findOne({
    userId
  })

  if(!wallet) return

  wallet.balance += amount
  wallet.totalEarned += amount

  await wallet.save()
}

module.exports = {
  addReward
}
