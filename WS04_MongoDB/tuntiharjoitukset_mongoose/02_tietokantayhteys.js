// Otetaan moduuli käyttöön
require("dotenv").config();
const mongoose = require("mongoose");

// Määritellään yhteysosoite

const uri = process.env.MONGODB_URI

main().catch(err => console.log(err));

/* Luodaan yhteys tietokantaan */
async function main() {
    await mongoose.connect(
        uri);
    console.log("Yhteys on muodostettu!");
    await new Promise(resolve => setTimeout(resolve, 3000));
    mongoose.connection.close();
    console.log("Yhteys on suljettu!");

}