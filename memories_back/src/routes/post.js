const express = require("express")
const {getPosts,createPosts, updatePosts} =require("../controller/posts")
const router = express.Router()

router.get("/",getPosts)
router.post("/",createPosts)
router.patch("/:id",updatePosts)

module.exports=router