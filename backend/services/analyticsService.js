const User =
require("../models/User")

const Order =
require("../models/Order")

async function getStats(){

  const users =
  await User.countDocuments()

  const orders =
  await Order.countDocuments()

  const revenueOrders =
  await Order.find({
    paymentStatus:"paid"
  })

  const revenue =
  revenueOrders.reduce(
    (sum,item)=>
      sum + item.total,
    0
  )

  return {
    users,
    orders,
    revenue
  }

}

module.exports = {
  getStats
}
