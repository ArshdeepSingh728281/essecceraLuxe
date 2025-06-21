import mongoose from "mongoose"; 


const pageSchema = new mongoose.Schema({
    date:{
        type: Date,
        default:Date.now()
    },
    pagename:{
        type:String,
        required:true
    },
    data:{
        type:Object,
        required:true
    }

})

const Page =  mongoose.models.Page || mongoose.model('Page',pageSchema)

export default Page