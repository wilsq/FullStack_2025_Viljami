const express = require("express");
const PORT = 3000;
const path = require("path");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

// Express Static from "public"
app.use(express.static(path.join(__dirname, "public")));

app.post("/submit", (request, response) => {
  response.json({ message: "Data received!", data: request.body });
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
