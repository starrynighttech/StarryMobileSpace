const router =
require("express").Router()

const User =
require("../models/User")

const VerificationToken =
require("../models/VerificationToken")

router.get("/:token",
async(req,res)=>{

  const token =
  await VerificationToken.findOne({

    token:req.params.token,

    used:false

  })

  if(!token){

    return res.status(400).json({
      message:"Invalid token"
    })

  }

  await User.findByIdAndUpdate(
    token.userId,
    {
      verified:true
    }
  )

  token.used = true

  await token.save()

  res.json({
    message:
    "Email verified"
  })

})

module.exports = router
