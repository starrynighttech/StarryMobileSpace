const { v4: uuid } =
require("uuid")

module.exports = () => {

  return (
    "DN-" +
    uuid()
      .substring(0,8)
      .toUpperCase()
  )

}
