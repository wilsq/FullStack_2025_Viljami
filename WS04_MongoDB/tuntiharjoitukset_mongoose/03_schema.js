// Otetaan moduuli käyttöön
require("dotenv").config();
const mongoose = require("mongoose");

const Kitten = require("./modules/model");
// Määritellään yhteysosoite

const uri = process.env.MONGODB_URI;

// Luodaan yhteys

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri)
    console.log("Yhteys on muodostettu!");
    /* Luodaan uusi kitten olio ja tulostetaan sen nimi konsoliin */
    const silence = new Kitten({ name: 'Musti' });
    console.log(silence.name); // 'Musti'
    const fluffy = new Kitten({ name: 'EMT' });
    const turbo = new Kitten();
    fluffy.speak(); // "Meow name is Fluffy"
    silence.speak();
    turbo.speak();
    mongoose.connection.close();
    console.log("Yhteys on suljettu!");
}