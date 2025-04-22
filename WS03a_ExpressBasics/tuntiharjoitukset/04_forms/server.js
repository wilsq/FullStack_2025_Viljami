// ladataan tarvittavat modulit

var express = require("express");
var app = express();
var fs = require("fs");
const dotenv = require("dotenv").config();
const PORT = dotenv.parsed.PORT00 || 3000;
const path = require("path");
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// luo juurireitti, joka palauttaa selaimeen index.html tiedoston sisällön
app.get("/", function (req, res) {
  res.render("/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

// luo reitti, joka palauttaa selaimeen etusivu.html tiedoston sisällön
app.get("/etusivu", function (req, res) {
  //console.log('Tervetuloa etusivulle!');
  console.log("Login ok. Polku : " + __dirname + "/public/etusivu");
  res.sendFile(__dirname + "/public/etusivu.html");
});

app.post("/kirjaudu", function (req, res) {
  console.log("Serveri " + req.body.pass);
  if (req.body.pass == "demo") {
    res.redirect("/etusivu");
    console.log("Login ok");
  } else {
    res.redirect("/");
    console.log("Login failed");
  }
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/about-data", (req, res) => {
  const filePath = path.join(__dirname, "data", "tekstidata.txt");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(data);
  });
});

app.get("/services", function (req, res) {
  res.sendFile(__dirname + "/public/services.html");
});

app.get("/services-data", (req, res) => {
  const filePath = path.join(__dirname, "data", "JSONdata.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(data);
  });
});

// lisätään GET polku (route) joka hakee /public/adduser.html tiedoston ja lähettää sen selaimeen
app.get("/adduser", function (req, res) {
  res.sendFile(__dirname + "/public/adduser.html");
});

// lisätään POST polku (route) joka hakee tiedot ja tallentaa ne JSONdata.json tiedostoon.
app.post("/adduser", function (req, res) {
  // Load the existing data from a file and assign to an array (lista)
  const data = require(__dirname + "/data/JSONdata.json");
  if (!req.body.name || !req.body.email || !req.body.company) {
    res.status(400).send("Please enter the required data");
    return;
  } else {

  //luodaan uusi henkilö...
  const nimi = req.body.name;
  const email = req.body.email;
  const company = req.body.company;
  const date =
    new Date().getDate() +
    "/" +
    (1 + parseInt(new Date().getMonth())) +
    "/" +
    new Date().getFullYear();
  //...ja pusketaan uusi käyttäjä listan (tiedoston) viimeiseksi
  data.push({
    Name: nimi,
    Company: company,
    Email: email,
    Date: date,
  });

  // Convert the JSON object to a string format
  var jsonStr = JSON.stringify(data);

  // Write data to a file
  fs.writeFile(__dirname + "/data/JSONdata.json", jsonStr, (err) => {
    if (err) throw err;
    console.log("tiedot tallennettu...");
  });
  //  res.send("Saved the data to a file. Browse to the /details to see the contents of the file");
  res.redirect("/etusivu");
}
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", function (req, res) {
  //res.send('Cant find the requested page', 404);
  res.sendFile(__dirname + "/public/error.html");
});

// käynnistetään palvelin kuuntelemaan valittua porttia
app.listen(PORT, function () {
  console.log("Example 02 app listening on port: " + PORT);
});
