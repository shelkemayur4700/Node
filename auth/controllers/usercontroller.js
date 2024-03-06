const { getAllUsers } = require("../db/db");

const getuserData = (req, res) => {
  const users = getAllUsers();

  res.json({
    message: "Success",
    data: users,
  });
};

module.exports = {
  getuserData,
};
