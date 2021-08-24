const {Schema,model} =require("mongoose")

const postSchema = Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const postMessage = model('postMessage',postSchema)
module.exports=postMessage