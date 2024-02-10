// use of command line argument

const express = require("express");

const app = express();

let port = process.argv[2];

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
