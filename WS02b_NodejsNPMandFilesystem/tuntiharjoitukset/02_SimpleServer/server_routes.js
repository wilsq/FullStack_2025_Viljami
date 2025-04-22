const http = require("http");
const fs = require("fs");
require('dotenv').config();

const PORT = process.env.PORT || 8081 ;
console.log(process.env.PORT);


const server = http.createServer((req, res) => {
    if (req.url === "/") {  // check the URL of the current request
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Oletkohan saapunut palvelimen juureen.");
        res.end();
    }
    else if (req.url === "/helloworld") {  // check the URL of the current request
        res.writeHead(200, { "Content-Type": "text/html" });
        const html = fs.readFileSync('frontpage.html');
        res.write(html);
        res.end();
    } 
    else if (req.url === "/json") {  // check the URL of the current request
        res.writeHead(200, { "Content-Type": "text/json" });
        const json = require('./data.json');
        res.write(JSON.stringify(json));
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 Not Found");
        res.end();
    }
});

server.listen(PORT, () => {
    console.log("Server running at http://localhost : " + PORT);
}
);

