require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const helmet = require("helmet")

const authRoutes = require("./routes/auth")
const productRoutes = require("./routes/products")
const orderRoutes = require("./routes/orders")
const paymentRoutes = require("./routes/payments")

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/payments", paymentRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected")
})

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running")
})
