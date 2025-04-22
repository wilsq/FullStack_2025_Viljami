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
    const filter = { name: 'Aku Ankka' };
    await Opiskelija.deleteOne(filter);
    const opiskelija = await Opiskelija.findOne(filter);

    if (opiskelija) {
        console.log("Joku meni pahasti pieleen...");
    } else {
        console.log("Opiskelijaa " + filter.name + " ei löytynyt!");
    }
    console.log(opiskelija);
    mongoose.connection.close();
    console.log("Yhteys on suljettu!");
};