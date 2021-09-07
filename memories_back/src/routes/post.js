const express = require("express")
const {getPosts,createPosts, updatPosts} =require("../controller/posts")
const router = express.Router()

router.get("/",getPosts)
router.post("/",createPosts)
router.patch("/:id",updatPosts)

module.exports=router