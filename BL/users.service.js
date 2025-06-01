const controller = require("../DL/controller/users.controller")


const createUser = async (data = {}) => {
    data.password = await hashPassword(data.password)
    return await controller.create(data)
}
const getUser = async (filter, isPopulate) => {
    return await controller.readOne(filter, isPopulate)
}
const login = async (filter = {}) => {
    const loginPassword = filter.password;
    try {
   
    } catch (error) {
        console.error("Error during login:", error);
        return false;
    }
};

module.exports = { createUser, getUser, login, getManyUsers, updateUserInfo, deleteUser }