/** @format */

const express = require("express"),
  router = express.Router();
const todosService = require("../BL/todos.service");
router.get("/", async (req, res) => {
  try {
    res.send("Working");
  } catch (error) {
    res.status(400).send("username or password are incorrect");
  }
});
router.post("/add-task", async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { userId, todoTask, isCompleted } = req.body;
    res.send(todosService.createNewTodo({ userId, todoTask, isCompleted }));
  } catch (error) {
    res.status(400).send("username or password are incorrect");
  }
});

module.exports = router;
