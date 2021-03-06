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

const updatPosts =async(req,res)=>
{
    try {
          const {id:_id}=req.params
          const post=req.body
          const update= await postMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
          return res.status(200).json(update)
    } catch (error) {
        return res.status(409).json({message:error.message})
    }

}
const deletePosts =async(req,res)=>
{
    try {
          const {id}=req.params
          await postMessage.findByIdAndDelete(id)
          return res.status(200).json({message:"Deleted Successfully"})
    } catch (error) {
        return res.status(409).json({message:error.message})
    }
}
const likePosts =async(req,res)=>
{
    try {
          const {id}=req.params
          const posts= await postMessage.findById(id)
          const update = await postMessage.findByIdAndUpdate(id,{likeCount:posts.likeCount+1},{new:true})
          return res.status(200).json(update)
    } catch (error) {
        return res.status(409).json({message:error.message})
    }
}
module.exports={
    getPosts,
    createPosts,
    updatPosts,
    deletePosts,
    likePosts
}