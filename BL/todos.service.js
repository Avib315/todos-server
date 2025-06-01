/** @format */

const controller = require("../DL/controllers/todos.controller");

const createNewTodo = async (data = {}) => {
  if (!data.userId || !data.todoTask) {
    throw new Error("userId and todoTask are required fields");
  }
  return await controller.create(data);
};
const getTodos = async (filter) => {
  if (!filter || !filter.userId) {
    throw new Error("userId is required to get todos");
  }
  return await controller.readMany(filter);
};
const updateTodo = async (data) => {};
const deleteTodo = async (data) => {};

module.exports = { createNewTodo, getTodos, updateTodo, deleteTodo };
