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
module.exports={
    getPosts,
    createPosts
}