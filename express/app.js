const express = require("express");
const cors = require("cors");
const personRouter = require("./routes/person");
const { v4: uuidv4 } = require("uuid");
const data = require("./db");

//created app using express obj
const app = express();
const port = 8080;
// --------------------MIDDLEWARES---------------
//this is app level  middleware to share data between differernt origins
//origin ==> host:port
app.use(cors());

//Middleware to parse JSON data coming from frontend to Backend
app.use(express.json());
// -------------------------ROUTES------------------------
app.use("/api", personRouter);
//.listen listens the app on specified  port
app.listen(port, (err) => {
  if (!err) {
    console.log("server running on port", 8080);
  } else {
    console.log(err);
  }
});
