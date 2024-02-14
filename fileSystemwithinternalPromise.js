const fs = require("fs/promises");

fs.readFile("./data.json", "utf-8")
  .then((data) => {
    // console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

fs.writeFile("./data.log", "writing from internal promise")
  .then((data) => {
    console.log("file written");
  })
  .catch((err) => {
    console.log(err);
  });

fs.appendFile("./data.log", " \n again writing from internal promise \n")
  .then((data) => {
    console.log("file written");
  })
  .catch((err) => {
    console.log(err);
  });

fs.unlink("./data.txt")
  .then((data) => {
    console.log("file deleted");
  })
  .catch((err) => {
    console.log(err);
  });
