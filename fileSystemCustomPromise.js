const fs = require("fs");

// Custom promise For readfile

function fsreadfilePromise() {
  return new Promise((res, rej) => {
    fs.readFile("./data.json", "utf-8", function (err, result) {
      if (err) {
        rej(err);
        // console.log(err)
      } else {
        res(result);
        // console.log(result);
      }
    });
  });
}

fsreadfilePromise();

function WriteFile(fileName, data) {
  return new Promise((rej, res) => {
    fs.writeFile(fileName, data, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
}

WriteFile("sample.txt", "HELLO SAMPLE")
  .then((data) => {
    console.log("File written sucessfully");
  })
  .catch((err) => {
    console.log(err);
  });

fsreadfilePromise()
  .then((data) => {
    console.log("Resolvedd----");
    console.log(data);
  })
  .catch((err) => {
    console.log("Rejected------");

    console.log(err);
  });
