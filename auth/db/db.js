const USERS = [];

const createUser = (userData) => {
  let existing = USERS.find((ele) => ele.username == userData.username);
  if (existing) {
    return false;
  }
  USERS.push(userData);
  return true;
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
