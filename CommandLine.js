// Global object in node js  ---> window object

// console.log(JSON.stringify(Object.getOwnPropertyNames(globalThis)));
// below statement is about upper line
// This will print all global variables avilable in node js
// and you can use them without importing them you can use them without importing
// node js enviornment knows them already

// console.log(process);  // this will print all the objects in process

// console.log(process.argv); //argv ==> argument vector and vector is like array in js so it is vector in c
//it returns array of 2 string one is current directory and node program directory

//  you can use it as command line argument as well
// we give command in terminal and pass argumet to command ==> command line argument

// e.g of command line argument
// node CommandLine.js mayur
// output :  [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\code\\NODE\\NODE\\CommandLine.js',
//     'mayur'
//   ]

// console.log(process.argv[2]);
// console.log(process.argv.slice(2, 5));

// use :
// function sum() {
//   return a + b;
// }
// let a = Number(process.argv[2]); //you have to convert it into a number
// let b = Number(process.argv[3]);

// let result = sum(a, b);

// console.log(result);
// command => node CommandLine.js 5, 5  and output=> 10



//command line using YARGS package
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(argv)

//e.g of command => PS D:\code\NODE\NODE> node CommandLine.js --name=mayur --job=Software
// output =>   { _: [], name: 'mayur', job: 'Software', '$0': 'CommandLine.js' }  



