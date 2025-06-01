/** @format */

const express = require("express"),
  router = express.Router();
const todosService = require("../BL/todos.service");
router.get("/", async (req, res) => {
  try {
    const userId = req.query.userId;
    const isCompleted = req.query.isCompleted;
    const taskName = req.query.taskName;
    if (!userId) {
      return res.status(400).send("userId parameter is required");
    }
    const todos = await todosService.getTodos({ userId ,isCompleted, taskName});
    res.send(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching todos");
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
