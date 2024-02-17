const http = require("http"); // We brought http module
const { eventemitterObj, eventemitterObj2 } = require("./events");
const url = require("url");
const fs = require("fs");

// You can publish the name of npm package
function getQueryObjects(query) {
  const splittedData = query.split("&");
  const obj = {};

  splittedData.forEach((element) => {
    let individualData = element.split("=");
    obj[individualData[0]] = individualData[1];
    //  obj.push({key:individualData[0],value:individualData[1]});
  });
  return obj;
}

const requestHandler = (request, response) => {
  //what method request has
  eventemitterObj.emit("request", request.url);
  const parsedObject = url.parse(request.url);
  const pathname = parsedObject.pathname;

  if (pathname == "/") {
    response.write("Hello people");
    response.end();
  } else if (pathname == "/data") {
    // We can check here for the method

    if (request.method == "GET") {
      // ----->
      let requestdata = [];

      // only applicable when your request body has data

      request.on("data", (chunk) => {   //.on event listner
        requestdata.push(chunk);
        // console.log("Request with data Came----")

        // console.log("Request Data From User",chunk.toString());
      });

      // this would be called when request is finished completely
      request.on("end", () => {
        // here you can process the data
        // and the appropriate place to send the response
        // [].concat([2,3,4])==[2,3,4]
        // console.log("Request finished----")
        requestdata = Buffer.concat(requestdata).toString();

        // We can add response headers in our response object here to convewrt the data into json
        //response.setHeader("Content-Type","application/json")

        fs.readFile("./dog.jpg", (err, data) => {
          // console.log(data);

          if (!err) {
            response.setHeader("Content-Type", "image/jpeg");
            response.write(data);
            response.end();
          }
        });
      });
    } else if (request.method == "POST") {
      let requestdata = [];

      request.on("data", (chunk) => {
        requestdata.push(chunk);
        // console.log("Request with data Came----")

        // console.log("Request Data From User",chunk.toString());
      });

      request.on("end", () => {
        requestdata = Buffer.concat(requestdata).toString();

        response.setHeader("Content-Type", "application/json");
        response.write(requestdata);
        response.end();
      });
    }
  }
  ///---code here
};

// User --->sending reuqeust --->request object http process will emit the data event --->

const port = 8080;

const server = http.createServer(requestHandler); // We called http .CreateServer to create an http server

server.listen(port, (err) => {
  if (err) {
    console.log("There is a problem in starting the server");
  } else {
    console.log("Server started on port", port);
  }
});

// this gets executed before any request cames
server.on("request", () => {
  console.log("Request Came----");
});

// You have to create a route --->
// and when that route gets hit you have to emit an event
// and you have to log the request into a file
