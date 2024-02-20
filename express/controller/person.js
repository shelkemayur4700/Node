const data = require("../db");
// -----------GET
const get = (req, res) => {
  //sending respnse
  //res.send() //test data
  //res.json()//formates data into JSON
  //res.sendFile()//send files
  res.json(data); //sending res
};

// ----------------CREATE
const create = (req, res) => {
  console.log(req.body);
  const reqData = req.body;
  reqData.id = uuidv4();
  data.push(reqData);
  res.json({
    message: "Success",
  });
};

// --------UPDATE
const update = (req, res) => {
  // console.log(req.body);
  const reqData = req.body;
  //filter out all data except that one we want to update
  const filtered = data.filter((ele) => ele.id != reqData.id); //remove old data of that id
  //push updated data into filtered data that dosn't contain oldone
  filtered.push(reqData);
  // AGAIN ASSIGN REMAING OLD DATA
  data = filtered;
  res.json({
    message: "Success",
  });
};

// ------------delete
const Delete = (req, res) => {
  console.log(req.body);
  const reqData = req.body;
  //filter out all data except that one we want to update
  const filtered = data.filter((ele) => ele.id != reqData.id); //remove  data of that id
  //ASSIGN REMOVED DATA AGAIN
  data = filtered;
  res.json({
    message: "Success",
  });
};

module.exports = {
  get,
  create,
  update,
  Delete,
};
