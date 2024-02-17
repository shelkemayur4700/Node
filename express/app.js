const express = require("express");
const cors = require("cors");
const data = [
  {
    id: 101,
    name: "John Doe",
    age: 25,
    address: "123 Main St",
    place: "New York",
  },
  {
    id: 202,
    name: "Alice Smith",
    age: 30,
    address: "456 Elm St",
    place: "Los Angeles",
  },
  {
    id: 303,
    name: "Bob Johnson",
    age: 40,
    address: "789 Oak St",
    place: "Chicago",
  },
  {
    id: 404,
    name: "Emily Brown",
    age: 35,
    address: "987 Maple St",
    place: "Houston",
  },
];

//created app using express obj
const app = express();
const port = 8080;

app.use(cors()); //this is app level  middleware
//Creating Routes here
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Routes for person domain
app.get("/person", (req, res) => {
  //sending respnse
  //res.send() //test data
  //res.json()//formates data into JSON
  //res.sendFile()//send files
  res.json(data); //sending res
});
//.listen listens the app on specified  port
app.listen(port, (err) => {
  if (!err) {
    console.log("server running on port", 8080);
  } else {
    console.log(err);
  }
});
