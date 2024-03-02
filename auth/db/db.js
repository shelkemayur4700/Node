const USERS = [];

const createUser = (userData) => {
  USERS.push(userData);
};

const getAllUsers = () => {
  return USERS;
};

const getUserByUsername = (username) => {
  return USERS.find((ele) => ele.username == username);
};

module.exports = {
  getAllUsers,
  getUserByUsername,
  createUser,
};
