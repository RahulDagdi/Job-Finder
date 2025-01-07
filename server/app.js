import express from 'express'
import dotenv from 'dotenv'

import dbConnect from './db/connect.js'

dotenv.config();
dbConnect()

const app = express ();



app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
    })


