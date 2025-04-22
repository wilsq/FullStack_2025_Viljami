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
    await Opiskelija.deleteMany(filter);
    const opiskelija = await Opiskelija.find(filter);

    if (opiskelija.length > 0) {
        console.log("Joku meni pahasti pieleen...");
    } else {
        console.log("Opiskelijat, joiden ryhmä on " + filter.group + " on poistettu");
    }
    mongoose.connection.close();
    console.log("Yhteys on suljettu!");
};

