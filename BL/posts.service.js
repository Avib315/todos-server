/** @format */

const controller = require("../DL/controllers/posts.controller");

const createNewPost = async (data = {}) => {
  if (!data.userId || !data.title || !data.body) {
    throw new Error("userId and title and body are required fields");
  }
  return await controller.create(data);
};
const getPosts = async (filter) => {
  if (!filter || !filter.userId) {
    throw new Error("userId is required to get todos");
  }
  return await controller.readMany(filter);
};
const updateTodo = async (data) => {};
const deleteTodo = async (data) => {};

module.exports = { createNewPost, getPosts, updateTodo, deleteTodo };
