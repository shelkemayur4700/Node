const fs = require("fs");
// const stream = require("stream");

//stream.Transform.

// Read stream -->

const readstream = fs.createReadStream("./data.json");
readstream.on("data", (data) => {
  console.log(data.toString());

  // Can you transform this data --->
});

// Write stream

//const writeStream=fs.createWriteStream("./dataTransfer.txt")

//readstream.pipe(writeStream);

// duplex stream

// transform stream

/*

fs.readFile("./largedata.txt","utf-8").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
*/

// so read the file take the name out of the data and write the data in another file
