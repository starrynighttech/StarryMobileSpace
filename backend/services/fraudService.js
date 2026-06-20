const FraudEvent =
require("../models/FraudEvent")

async function flagFraud(
  userId,
  reason
){

  await FraudEvent.create({

    userId,

    type:"fraud",

    severity:"high",

    description:reason

  })

}

module.exports = {
  flagFraud
}
