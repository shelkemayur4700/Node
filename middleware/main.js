const express = require("express");
const app = express();
const { first, second } = require("./middleware");
const { appLevel, appLevel2, Uppercase } = require("./applevelmiddleware");
// app level middlewares

app.use(express.json(), Uppercase, appLevel, appLevel2);

const server = () => {
  //route level middleware
  app.post("/data", first, second, (req, res, next) => {
    res.send(req.body);
  });
  app.listen("8090", () => {
    console.log("server running on port 8090");
  });
};

server();
