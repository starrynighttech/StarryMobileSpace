function validateReward(
  amount
){

  if(amount > 50){
    return false
  }

  return true
}

module.exports = {
  validateReward
}
