const http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, {
      "Content-Type": "text/plain",
    });
    if (request.url === "/") {
      response.write("Hello World!");
    } else if (request.url === "/about") {
      response.write("About Page");
    } else if (request.url === "/contact") {
      response.write("Contact Page");
    }
    response.end();
  })
  .listen(3000);

console.log("Server started on http://localhost:3000/");
