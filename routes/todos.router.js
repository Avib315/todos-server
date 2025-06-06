/** @format */

const express = require("express"),
  router = express.Router();
const todosService = require("../BL/todos.service");
router.get("/", async (req, res) => {
  try {
    const userId = req.query.userId;
    const isCompleted = req.query.isCompleted;
    const taskName = req.query.title;
    const id = req.query.id;
    if (!userId) {
      return res.status(400).send("userId parameter is required");
    }
    const todos = await todosService.getTodos({ userId ,isCompleted, taskName , id});
    res.send(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching todos");
  }
});
router.post("/add-task", async (req, res) => {
  try {
    const { userId, title, completed } = req.body;
    res.send(todosService.createNewTodo({ userId, todoTask:title, isCompleted:completed }));
  } catch (error) {
    res.status(400).send("username or password are incorrect");
  }
});
// avi?isAge=20
// avi/15
router.put("/update-task/:id", async (req, res) => {
  try {
      const taskId = req.params.id;
    const { userId, title, completed , } = req.body;
    res.send(todosService.updateTodo({ userId, todoTask:title, isCompleted:completed , id: taskId }));
  } catch (error) {
    res.status(400).send("username or password are incorrect");
  }
});
router.delete("/delete-task/:id", async (req, res) => {
  try {
      const taskId = req.params.id;
    res.send(todosService.deleteTodo({ id: taskId }));
  } catch (error) {
    res.status(400).send("username or password are incorrect");
  }
});

module.exports = router;
