const fs = require("fs");

/*
fs.readFile("./data.txt", "utf-8", (error, result) => {
  console.log(error);
  console.log(result);
});

fs.writeFile("./todo.txt", "hello writing in file", (error, res) => {
  console.log(error);
  console.log(res); //it gives undefined res but it creates file by name you provided.
});
*/
//but write file will replace old content in your file
//if you want to keep old content then you have to use appendFile
/*
fs.appendFile("./todo.txt", "i am appended in file \n ", (error, res) => {
  console.log(error);
  console.log(res);
});
*/

// we have to take input from user and write it in file

const readline = require("readline");

const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

rl.question("please enter your data to store in file \n", (data) => {
  console.log(data);
  /*
  fs.writeFile("./todo.txt", `${data}`, (err, res) => {
    console.log(err);
    console.log(res);
  });
  */
  //write operstion working fine lets try appendfile
  fs.appendFile("./todo.txt", `${data}`, (err, res) => {
    console.log(err);
    console.log(res);
  });
});
