const controller = require("../DL/controllers/todos.controller")


const createNewTodo = async (data = {}) => {
    return await controller.create(data)
}
const getTodos = async (filter) => {
    return await controller.readOne()
}
const updateTodo = async (data) => {

};
const deleteTodo = async (data) => {

};

module.exports = { createNewTodo, getTodos, updateTodo, deleteTodo }