//haetaan express moduuli
const express = require("express");
//haetaan axios moduuli
const axios = require("axios");
// luodaan express-instanssi
const app = express();
// haetaan movies.js router
const movies = require('./routes/movies');

//haetaan PORT ympäristömuuttuja .env tiedostosta
const PORT = process.env.PORT05 || 3005;

// käytetään movies.js routeria

app.use('/', movies);

// kuunnellaan porttia ja tulostetaan konsoliin viesti
app.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT);
});
