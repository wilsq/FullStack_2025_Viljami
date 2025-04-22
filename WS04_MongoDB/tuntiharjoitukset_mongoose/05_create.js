// Otetaan moduuli käyttöön
require("dotenv").config();
var mongoose = require("mongoose");
const Opiskelija = require("./modules/opiskelija");
// Määritellään yhteysosoite

const uri = process.env.MONGODB_URI;

const uri1 = uri + "local_library";

// Luodaan yhteys
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri1);

  /* Luodaan uusi opiskelija olio ja tulostetaan sen nimi konsoliin ja tallennetaan tietokantaan*/
  const tupu = new Opiskelija({
    name: "Jenna",
    email: "Jenna@laurea.fi",
    age: 250,
    group: "Koodarit",
  });
  console.log(tupu.name);
  await tupu.save();
  /* Luodaan kaksi uutta opiskelija oliota ja toinen tallennetaan tietokantaan ja toinen kutsuu methodia*/
  const hupu = new Opiskelija({
    name: "Mikael",
    email: "mikael@laurea.fi",
    age: 2501,
    group: "Koodarit",
  });

  await hupu.save();
  const aku = new Opiskelija({
    name: "Santeri",
    email: "Santeri@laurea.fi",
    age: 231,
    group: "Sählärit",
  });
  aku.osaa();
  await aku.save();

  mongoose.connection.close();
  console.log("Yhteys on suljettu!");
}
