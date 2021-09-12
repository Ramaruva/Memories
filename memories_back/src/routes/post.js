const express = require("express")

const {getPosts,createPosts, updatPosts, deletePosts} =require("../controller/posts")

const router = express.Router()

router.get("/",getPosts)
router.post("/",createPosts)
router.patch("/:id",updatPosts)
router.delete("/:id",deletePosts)

module.exports=router