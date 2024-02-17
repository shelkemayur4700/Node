const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  const readstream = fs.createReadStream("./largedata.txt");
  console.log(readstream);
  readstream.pipe(res); // you can stream the data reading from file and you can pass it to the out put response
});

app.listen("8090", () => {
  console.log("Server running on port " + 8090);
});
