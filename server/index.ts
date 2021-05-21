import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

//middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

//Route
app.get("/",(req,res)=>{
  res.json({msg:"you are a rich"})
})

//MongoDb
import './config/database'

//server listening
const port = process.env.PORT || 5000
app.listen(port,()=>{
  console.log("server is running in",port)
})