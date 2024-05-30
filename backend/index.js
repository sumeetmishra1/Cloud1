import express from "express"
import { authRouter } from "./Routes/authApi"
const app = express()

app.use('/user',authRouter)

app.listen(8001,()=>{
    console.log("Running on 8001")
})