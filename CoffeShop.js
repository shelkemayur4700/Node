const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

// function A(){

// }
rl.question(
  "Welcome to coffe shop Choose Your coffe [1-Black Coffe] [2-Coffe] ",
  (Coffe) => {
    if (Number(Coffe) == 1) {
      rl.question("how many Coffe you want ? ", (quantity) => {
        setTimeout(() => {
          console.log("Your Black-Coffe Is Prepairing...");
        }, 2000);
        console.log(`you have to pay ${quantity * 100}`);
        rl.close();
      });
    } else if (Number(Coffe) == 2) {
      rl.question("how many Coffe you want ? ", (quantity) => {
        console.log("no of coffes", quantity * 200);
      });
      setTimeout(() => {
        console.log("Your Coffe Is Prepairing...");
      }, 2000);
    }
  }
);
