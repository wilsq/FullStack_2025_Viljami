require("dotenv").config();
var mongoose = require("mongoose");
const Opiskelija = require("./modules/opiskelija");
// Määritellään yhteysosoite
const uri = process.env.MONGODB_URI + "local_library";


// Luodaan yhteys

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri); 
    console.log("Yhteys on muodostettu!");
    
    // Haetaan kaikki opiskelijat
    const opiskelijat = await Opiskelija.find();
    console.log(typeof opiskelijat)
    if(opiskelijat.length === 0) {
        console.log("Tietokannassa ei ole opiskelijoita!");
    } else {
        console.log("Kaikki opiskelijat:");
        console.log(opiskelijat);
    }
    mongoose.connection.close();
    console.log("Yhteys on suljettu!");
};