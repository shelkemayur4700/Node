const eventEmitter = require("events");
const fs = require("fs/promises");

const eventEmitterObject = new eventEmitter();
eventEmitterObject.on("request", (data) => {
  //   console.log("event listened");
  fs.appendFile("./serverData.text", `the request url from  ${data} came \n`)
    .then((res) => {
      // console.log("written in file");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = eventEmitterObject;
