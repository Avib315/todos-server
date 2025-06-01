/** @format */

const pool = require("../db"); // Adjust path to your db.js file
// CRUD
async function create({ userId, title, body }) {
  try {
    const query =
      "INSERT INTO posts (user_id, title, body) VALUES (?, ?, ?)";
    const [result] = await pool.execute(query, [userId, title, body]);

    return {
      success: true,
      id: result.insertId,
      message: "post created successfully",
    };
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post");
  }
}
async function readMany({ userId, title }) {
  try {
    let query = "SELECT * FROM posts WHERE user_id = ?";
    let params = [userId];

    // מערך של תנאים נוספים
    const conditions = [];

    if (title && title.trim() !== "") {
      conditions.push("title LIKE ?");
      params.push(`%${title}%`);
    }

    // הוספת כל התנאים לשאילתה
    if (conditions.length > 0) {
      query += " AND " + conditions.join(" AND ");
    }

    const [result] = await pool.execute(query, params);

    return {
      success: true,
      data: result,
      message: "posts tasks loaded successfully",
    };
  } catch (error) {
    throw new Error("Failed to read todos");
  }
}
async function readOne(filter) {
  // get one todo
}
async function update(id, data) {
  // update todos
}
async function deleteById(id) {
  // delete todo
}

module.exports = { create, readOne, readMany, update, deleteById };
