import mongoose from "mongoose"; 


const formSchema = new mongoose.Schema({
    date:{
        type: Date,
        default:Date.now()
    },
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    },
    filename:{
        type:String,
        required:true
    }


})

const Form =  mongoose.models.Form || mongoose.model('Form',formSchema)

export default Form