require("dotenv").config();
var mongoose = require("mongoose");
const Opiskelija = require("./modules/opiskelija");
// Määritellään yhteysosoite

const uri = process.env.MONGODB_URI;
const uri1 = uri + "local_library"; // Opiskelijat database



// Luodaan yhteys

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri1);
    console.log("Yhteys on muodostettu!");
    const filter = { group: 'Koodarit' };
    const update = { group: 'Sählärit' };
    const updated = await Opiskelija.updateMany(filter, update, { new: true });
    if (updated) {
        console.log("Opiskelijoiden " + updated.group + " ryhmä on päivitetty!");
    } else {
        console.log("Opiskelijaa ei löytynyt!");
    }
    console.log(updated);
    mongoose.connection.close();
    console.log("Yhteys on suljettu!");
};