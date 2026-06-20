const AuditLog =
require("../models/AuditLog")

module.exports =
async(req,res,next)=>{

  try{

    if(req.user){

      await AuditLog.create({

        userId:req.user.id,

        action:req.method,

        module:req.originalUrl,

        ipAddress:req.ip

      })

    }

  }catch(err){
    console.log(err.message)
  }

  next()

}
