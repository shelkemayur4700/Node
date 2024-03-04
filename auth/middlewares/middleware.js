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

module.exports = {
  errorMiddleware,
};
