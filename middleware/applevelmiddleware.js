const appLevel = (req, res, next) => {
  //   console.log("I am app level middleware");
  next();
};

const appLevel2 = (req, res, next) => {
  //   console.log("I am app level 2 middleware");
  next();
};

const Uppercase = (req, res, next) => {
  console.log("REQUEST", req.body);
  const obj = req.body;

  let newArray = Object.entries(obj).map((ele) => {
    let temp = ele[1].toLowerCase();
    return [ele[0], temp];
  });
  console.log(newArray);
  let newObj = Object.fromEntries(newArray);
  console.log("response object",newObj);
  req.body = newObj;
  next();
};
module.exports = {
  appLevel,
  appLevel2,
  Uppercase,
};
