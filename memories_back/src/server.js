const express = require("express")
const bodyParser=require("body-parser")
const mongoose = require("mongoose")
const cors= require("cors")
const connect = require("./config/db")
const app=express()
const postRoutes= require("./routes/post")
require("dotenv").config();

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
app.use("/posts",postRoutes)
const PORT=process.env.PORT||5000
const start =async()=>
{
  await connect()
   app.listen(PORT,async()=>{
       console.log(`server running at : ${PORT}`)
   })
}

module.exports=start
