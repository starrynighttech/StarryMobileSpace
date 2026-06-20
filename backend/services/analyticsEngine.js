const User =
require("../models/User")

const Order =
require("../models/Order")

async function generateReport(){

  const users =
  await User.countDocuments()

  const orders =
  await Order.countDocuments()

  return {
    users,
    orders
  }

}

module.exports = {
  generateReport
}
