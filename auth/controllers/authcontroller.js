const { createUser } = require("../db/db");

const signup = (req, res, next) => {
  const user = req.body;
  let result = createUser(user);
  if (result) {
    res.json({
      status: "Success",
      message: "User Created",
    });
  } else {
    //throw will stops the all process and showing stack strace(error in console)
    //any may excit the server
    // throw new Error("Eroooooooooooooor");

    //if you invoken  next like this anywhere in code
    //it will just hit error middleware
    next(new Error("User Already Exists!"));
  }
};
// ------------------login------------
// const signup = (req, res) => {
//   const user = req.body;
//   createUser(user);
//   res.json({
//     status: "Success",
//     message: "User Created",
//   });
// };

module.exports = { signup };
