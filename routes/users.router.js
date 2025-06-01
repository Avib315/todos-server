const express = require("express"),
    router = express.Router()
    service = require("../BL/user.service")
router.post("/register", async (req, res) => {
    try {
        res.send(await service.createUser(req.body))

    } catch (error) {
        
    }
})
router.get("/login", async (req, res) => {
    try {
        res.send(await service.getUser())
    } catch (error) {
        res.status(400).send("username or password are incorrect")
    }
})