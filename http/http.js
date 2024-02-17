const http = require("http");
const url = require("url"); //to get url data
const eventEmitterObject = require("./events"); //imported module
//function to get query prarmeter
function getQueryObjects(query) {
  const splittedData = query.split("&");
  const obj = {};

  splittedData.forEach((ele) => {
    let individualData = ele.split("=");
    obj[individualData[0]] = individualData[1];
    // console.log("obj", obj);
    return obj;
  });
  // console.log(splittedData);
}
const requestHandler = (request, response) => {
  console.log(request.url);
  eventEmitterObject.emit("request", request.url);

  const parsedObject = url.parse(request.url);

  if (parsedObject.pathname == "/") {
    response.write("Hello People");
    response.end();
  } else if (parsedObject.pathname == "/data") {
    console.log(getQueryObjects(parsedObject.query)); //we pass query to function which return query parameter in form of objects

    response.write("Hello Data");
    response.end();
  } else if (parsedObject.pathname == "/Login") {
    // console.log("Login route");
    // console.log(request.connection);
    response.end();
  }
};
const port = 80;
const server = http.createServer(requestHandler);
server.listen(port, (error) => {
  if (error) {
    console.log("Issue in starting server");
  } else {
    console.log("server started on port", port);
  }
});
