const pool = require("../db");

// CRUD
async function create({username , password , email , fullname , address}) {
// user create model
}
async function readOneUser(filter) {
    try {

        const { username } = filter;
        const query = "SELECT * FROM users WHERE username = ?"; 
        const [result] = await pool.execute(query, [username]);       
        return result[0] || null; // Return the first user or null if not found
    } catch (error) {
        throw new Error("Failed to read user");
    }

}
async function readPassword({userId}) {

try {
    const query = "SELECT password_hash FROM users_passwords WHERE user_id = ? LIMIT 1";
    const [result] = await pool.execute(query, [userId]);
    if (result.length === 0) {
        throw new Error("User not found");
    }
    return result[0].password_hash || null; // Return the password hash or null if not found
} catch (error) {
    throw new Error("Failed to read user password");    
}
}

module.exports = { create, readOneUser,readPassword}