const express = require("express"),
    router = express.Router()
router.get("/", async (req, res) => {
    try {
     res.send("Working")
    } catch (error) {
        res.status(400).send("username or password are incorrect")
    }
})

module.exports = router