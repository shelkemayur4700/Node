const fs = require("fs");

const file = fs.readFileSync("./data.json", "utf-8");
//This is Synchronous
// console.log(file);

/*
This is asynchronous
fs.readFile("./data.json","utf-8",(err,data)=>{
    console.log(data);
})
*/

fs.writeFileSync("./fg.log", "I am Sync");

fs.appendFileSync("./fg.log", "ADDED IN SYNC AGAIN");

fs.unlinkSync("./fg.log");
console.log("I will be printed After the file reading is done");
