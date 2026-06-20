const socketIO =
require("socket.io")

function initializeSocket(
  server
){

  const io =
  socketIO(server,{

    cors:{
      origin:"*"
    }

  })

  io.on(
    "connection",
    socket=>{

      console.log(
        "Client Connected"
      )

    }
  )

  return io
}

module.exports =
initializeSocket
