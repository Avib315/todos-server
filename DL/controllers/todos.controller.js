const pool = require('../db'); // Adjust path to your db.js file
// CRUD
async function create({ userId, todoTask, isCompleted }) {
  try {
    const query =
      "INSERT INTO todos (user_id, title, completed) VALUES (?, ?, ?)";
    const [result] = await pool.execute(query, [userId, todoTask, isCompleted]);

    return {
      success: true,
      id: result.insertId,
      message: "Todo task created successfully",
    };
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Failed to create todo task");
  }
}
async function readOne(filter) {
  // get one todo
}
async function readMany(filter) {
  // get todos
}
async function update(id, data) {
  // update todos
}
async function deleteById(id) {
  // delete todo
}

module.exports = { create, readOne, readMany, update, deleteById };
