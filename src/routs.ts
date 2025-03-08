import express ,{Request,Response} from "express";
import db from './db'
const routes=express.Router()

routes.post('/add',async(req,res)=>{
    try {
       const dbuser=new db(req.body)
       
          await dbuser.save()
       
       res.status(200).json({
        message:"Added succsessfully"
       })
        
    } catch (error:any) {
        res.status(500).json({
            error:error.message
        })
    }
})

routes.get('/get',async(req,res)=>{
 try{
    const data=await db.find()
    res.status(200).json(data)
 }
 catch(error){
    res.status(500).json({
        error
    })
 }
})
routes.post('/update/:id',async(req,res)=>{
    try{
        const {id}=req.params
      const val=req.body
      const data=await db.findByIdAndUpdate(id,req.body,{new:true})
      res.status(200).json({
        data
      })
    }
    catch(error){
        res.status(500).json({
            error
        })
    }
})
routes.post('/delete/:id',async(req,res)=>{
    try {
        const {id}=req.params
      const user=  await db.findByIdAndDelete(id)
      res.status(200).json({
        data:user
      })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})
export default routes