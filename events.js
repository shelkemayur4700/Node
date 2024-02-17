const EventEmitter = require("events");
const fs = require("fs/promises");

const eventEmitterObject = new EventEmitter();

// listening event after emiting
// eventEmitterObject.on("65cd7230bd089c479bee45e2", (data) => {
//   console.log("ID exists", data);
//   // write file should be done here
// });

// //performingm operation on data
// fs.readFile("./names.txt", "utf-8").then((data) => {
//   if (data.includes("65cd7230bd089c479bee45e2")) {
//     //emiting event
//     eventEmitterObject.emit("65cd7230bd089c479bee45e2");
//   }
// });

eventEmitterObject.on("65cd7230bd089c479bee45e2", (data) => {
  fs.writeFile("./text.text", data).then((res) => {
    console.log("written in file");
  });
});

fs.readFile("./names.txt", "utf-8").then((data) => {
  let filtered = JSON.parse(data).filter(
    (d) => d._id == "65cd7230bd089c479bee45e2"
  );
  eventEmitterObject.emit("65cd7230bd089c479bee45e2", JSON.stringify(filtered));
});
