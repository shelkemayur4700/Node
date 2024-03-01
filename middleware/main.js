const express = require("express");
const app = express();
const { first, second } = require("./middleware");
const { appLevel, appLevel2, Uppercase } = require("./applevelmiddleware");
// app level middlewares

app.use(express.json(), Uppercase, appLevel, appLevel2);

const server = () => {
  //route level middleware
  app.post("/data", first, second, (req, res, next) => {
    //req.send("")   // if you send any info must be in double quote not in single bcz it consider it as char
    // res.send("data",req.body);
    // You can only send one response and if you want to send two then the second one is status code
    // res.send(req.body, 200);
    res.send(req.body);
  });
  app.listen("8090", () => {
    console.log("server running on port 8090");
  });
};

server();
