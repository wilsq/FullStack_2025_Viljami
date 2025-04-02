const express = require("express");
const PORT = 3000;
const path = require("path");
const app = express();
const fs = require("fs");

const bodyParser = require("body-parser");
const { isUtf8 } = require("buffer");

const logRequest = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const customHeader = (req, res, next) => {
  if (!req.headers["X-Custom-Header"]) {
    return res.status(400).json({ error: "Missing X-Custom Header" });
  }
  next();
};

app.use(logRequest);

app.use(bodyParser.urlencoded({ extended: true }));

// Express Static from "public"
app.use(express.static(path.join(__dirname, "public")));

app.post("/submit", (request, response) => {
  response.json({ message: "Data received!", data: request.body });
});

app.get("/about", customHeader, (req, res) => {
  res.send("X-Custom-Header");
});

app.get("/list", (req, res) => {
  const filePath = path.join(__dirname, "data", "teksti.txt");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(data);
  });
});

app.get("/json", (req, res) => {
  const filePath = path.join(__dirname, "data", "jsondata.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(data);
  });
});

app.post("/add", (req, res) => {
  const data = require(__dirname + "/data/jsondata.json");
  if (!req.body.name || !req.body.email) {
    res.status(400).send("Please enter the required data");
    return;
  } else {
    const nimi = req.body.name;
    const email = req.body.email;

    data.push({ Name: nimi, Email: email });

    let jsonStr = JSON.stringify(data);

    fs.writeFile(__dirname + "/data/jsondata.json", jsonStr, (err) => {
      if (err) throw err;
      console.log("tiedot tallennettu!");
    });
  }
});

// app.get("/", function (request, response) {
//   response.send("Hello World!");
// });

// app.get("/about", function (request, response) {
//   response.send("About Page");
// });

// app.get("/contact", function (request, response) {
//   response.send("Contact Page");
// });

// app.get("/services", function (request, response) {
//   response.send("Services Page");
// });

// app.get("*", (request, response) => {
//   response.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.listen(PORT, function () {
  console.log("App.js listening on port: " + PORT);
});
