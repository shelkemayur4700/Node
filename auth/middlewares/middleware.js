const bcrypt = require("bcrypt");
const { getUserByUsername } = require("../db/db");
//its a very special middleware, it takes four arguments
// then express automatically knows it is error middleware
//4 arguments only you hve to pass to middleware
const errorMiddleware = (err, req, res, next) => {
  //we will send error from here
  res.json({
    message: "Failed",
    error: err.toString(),
  });
};

//this will be route level middleware
const encryptPassword = (req, res, next) => {
  //more no of rounds you have more secure password is and more time it takes.
  //so use it minimum. like 10
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    console.log(hash);
    next();
  });
};
// -----------SIGN IN------------
const checkPassword = (req, res, next) => {
  const user = getUserByUsername(req.body.username);
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      //this is not working properly when we pass wrong password
      if (result) {
        next(new Error("Please enter correct username and password  "));
      } else {
        next();
      }
      console.log(result);
    });
  } else {
    next(new Error());
  }
};

module.exports = {
  errorMiddleware,
  encryptPassword,
  checkPassword,
};
