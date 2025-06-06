const express = require("express"),
    router = express.Router()
const postsService = require("../BL/posts.service")
router.get("/", async (req, res) => {
    try {
     const userId = req.query.userId
        if (!userId) {
            return res.status(400).send("userId parameter is required")
        }
        const posts = await postsService.getPosts({ userId, title: req.query.title})
        res.send(posts)
    } catch (error) {
        res.status(400).send("username or password are incorrect")
    }
})
router.post("/add-post", async (req, res) => {
    try {
        const { userId, title, body } = req.body
        res.send(await postsService.createNewPost({ userId, title, body }))
    } catch (error) {
        res.status(400).send(error.message || "Error creating post")
    }
})

module.exports = router