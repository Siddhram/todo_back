import  Express  from "express";
import routs from './routs'
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv'

const app=Express();
dotenv.config()
app.use(cors())
app.use(Express.json())

mongoose.connect(process.env.MONGOURL!).then(()=>{
    console.log('mongodb connected');
    
}).catch(()=>{
    console.log('mongodb disconnected');
    
})
app.use('/route',routs)
app.listen(3000,()=>{
    console.log('server on');
})