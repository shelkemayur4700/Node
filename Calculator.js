const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

// console.log(argv);

function calculator(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      console.log("Unknown fruit");
  }
}

let operator = argv.operator; //you have to convert it into a number
let a = Number(argv.a); //you have to convert it into a number
let b = Number(argv.b); //you have to convert it into a number

let result = calculator(operator, a, b);

console.log(result);
