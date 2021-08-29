const { Mongoose } = require("mongoose")
const postMessage= require("../models/postsMessages")

const getPosts =async(req,res)=>
{
   try {
        const posts = await postMessage.find()
        return res.status(200).json(posts)
   } catch (error) {
       return res.status(404).json({message:error.message})
   }
}
const createPosts =async(req,res)=>
{
    try {
        const newposts= await postMessage.create(req.body)
        return res.status(200).json(newposts)
    } catch (error) {
        return res.status(409).json({message:error.message})
    }
}

const updatePosts =async(req,res)=>
{
    const {id:_id}=req.params
    const post=req.body
     try {
          const updated= await postMessage.findByIdAndUpdate(_id,post,{new:true})
          res.status(200).json(updated)
     } catch (error) {
        return res.status(409).json({message:error.message})
     }
}
module.exports={
    getPosts,
    createPosts,
    updatePosts
}