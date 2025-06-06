/** @format */

const express = require("express"),
  router = express.Router(),
  service = require("../BL/users.service");
router.get("/", async (req, res) => {
  try {
    const {username} = req.query;

    res.send(await service.getUser(username));
  } catch (error) {}
});
router.post("/register", async (req, res) => {
  try {
    res.send(await service.createUser(req.body));
  } catch (error) {}
});
router.put("/login", async (req, res) => {
  try {
    const data = await service.login(req.body);
    if (data) {
      res.send({
        isLogin: true,
        user: data,
      });
    }
  } catch (error) {
    res.status(400).send("username or password are incorrect");
  }
});

module.exports = router;
