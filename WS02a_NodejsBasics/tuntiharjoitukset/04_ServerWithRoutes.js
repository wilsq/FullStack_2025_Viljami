const http = require("http");

const hostname = "127.0.0.1";
const port = 3004;

//create a server object:

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/HTML; charset=utf-8");
  if (req.url === "/helloworld") {
    res.write("<table border = 2><tr><td>" + req.url + "</td></tr></table>");
  } else if (req.url === "/") {
    res.write("<h1> Tervetuloa Node.js -sovellukseen! </h1>");
    //lisää kuva etusivulle...
    res.write("<img src= 'https://www.w3schools.com/w3images/lights.jpg' alt='Lights' style='width:50%'>");
  } else {
    res.write("<strong> Hakemaasi sivua ei löydy! </strong>");
  }
  res.end(); //end the response
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
