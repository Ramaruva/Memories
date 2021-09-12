const express = require("express");

const {
  getPosts,
  createPosts,
  updatPosts,
  deletePosts,
  likePosts,
} = require("../controller/posts");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatPosts);
router.delete("/:id", deletePosts);
router.patch("/:id/likePost", likePosts);
module.exports = router;
