const first = function (req, res, next) {
  // you can do lot of things with your request and response

  // res.send("hi from middleware");
  next(); // this next will pass the req and response object to the next middleware in the chain
};

const second = function (req, res, next) {
  // you can do lot of things with your request and response

  // res.send("hi from middleware");
  next(); // this next will pass the req and response object to the next middleware in the chain
};

module.exports = {
  first,
  second,
};
