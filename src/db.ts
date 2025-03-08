import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
text:{
    type:String,
    required:true
},
dis:{
    type:String,
    default:""
},
iscompleted:{
    type:Boolean,
    default:false
}
},{timestamps:true})
const usermodel=mongoose.model('myuser',UserSchema)

export default usermodel