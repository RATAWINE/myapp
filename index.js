const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const cors = require("cors") 
const databaseConnect = require("./config/database")
const userRoutes = require("./routes/auth")



//CONFIG DOTENV
dotenv.config({
    path : 'config/config.env'
})
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE","PATCH"]
  }))

app.get("/", (req, res)=>{
    res.send("<h1>First application in the azure</h1>")
})

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api", userRoutes)

const PORT = process.env.PORT || 5000


databaseConnect()
app.listen(PORT, ()=>{
    console.log("Server started running...")
})