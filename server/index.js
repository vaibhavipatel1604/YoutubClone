import express  from "express";
import mongoose from "mongoose";
import dontenv from "dotenv";
import userRoutes from './routes/user.js'
import videoRoutes from './routes/video.js'
import commentsRoutes from './routes/comments.js'
import cors from 'cors'
import bodyParser from "body-parser";
import path from 'path'

dontenv.config()

const app=express()
app.use(cors())

app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))

app.get('/', (req,res)=>{
    res.send("hello")
})

app.use(bodyParser.json())
app.use('/user',userRoutes)
app.use('/video',videoRoutes)
app.use('/comment',commentsRoutes)

app.use('/uploads',express.static(path.join('uploads')))

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server Runing on the PORT ${PORT}`)
})

const DB_URL = process.env.CONNECTION_URL
mongoose.connect(DB_URL,{useNewUrlParser: true,useUniFiedTopology: true}).then(()=>{
    console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})