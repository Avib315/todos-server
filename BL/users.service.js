/** @format */

const controller = require("../DL/controllers/users.controller");
const { hashPassword, comparePassword } = require("../utils/password.utils");

const createUser = async (data = {}) => {
  data.password = await hashPassword(data.password);
  return await controller.create(data);
};
const getUser = async (filter, isPopulate) => {
  return await controller.readOne(filter, isPopulate);
};
const login = async (filter = {}) => {
  try {
    if (!filter.username || !filter.password) {
      throw new Error("Username and password are required");
    }
    const user = await controller.readOneUser({username:filter.username}, false);
    if (!user) {
        throw new Error("User not found");
    }
    const loginPassword = filter.password;
 

    const dbPassword = await controller.readPassword({ userId: user.id });
    if (!dbPassword) {
      throw new Error("Password not found for user");
    }

    const isPasswordValid = await comparePassword(loginPassword, dbPassword);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    return user;
  } catch (error) {
    console.error("Error during login:", error);
    return false;
  }
};

module.exports = { createUser, getUser, login };
