const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

function useraInput(rl, operation) {
  rl.question("enter first number \n", (firstNumber) => {
    let fn = Number(firstNumber);

    rl.question("enter Second number \n", (SecondNumber) => {
      let sn = Number(SecondNumber);
      if (operation == 1) {
        console.log("the addition is", sn + fn);
      } else if (operation == 2) {
        console.log("the subtraction is", fn - sn);
      } else if (operation == 3) {
        console.log("the multiplication is", fn * sn);
      } else if (operation == 4) {
        console.log("the divison is", fn / sn);
      } else {
        console.log("Please try again");
      }
      //   rl.close();
      Calculator(); //Dont exit from code to do operation
    });
  });
}
function Calculator() {
  rl.question(
    "wahat operation you want to do [add-1], [sub-2], [mul-3], [div-4] \n",
    (operation) => {
      useraInput(rl, Number(operation));
    }
  );
}

Calculator();
