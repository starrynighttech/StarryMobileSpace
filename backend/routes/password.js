const router =
require("express").Router()

const bcrypt =
require("bcryptjs")

const User =
require("../models/User")

router.post("/reset",
async(req,res)=>{

  const {
    email,
    password
  } = req.body

  const user =
  await User.findOne({email})

  if(!user){

    return res.status(404).json({
      message:"User not found"
    })

  }

  const hashed =
  await bcrypt.hash(
    password,
    10
  )

  user.password = hashed

  await user.save()

  res.json({
    message:
    "Password updated"
  })

})

module.exports = router
