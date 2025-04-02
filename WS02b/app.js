const axios = require("axios");
const fs = require("fs");

const API_URL = "https://jsonplaceholder.typicode.com/users";

axios
  .get(API_URL)
  .then((Response) => {
    console.log("Vastaus:", Response.data);
  })
  .catch((error) => {
    console.error("Virhe haettaessa dataa:", error.message);
  });

fs.readFile("./example.txt", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data.toString());
  }
});

const message = "Tähän myös jotain tekstiä. fs.writeFile --- ";

fs.writeFile("./output.txt", message, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File written succesfully!");
  }
});

fs.appendFile("./output.txt", "Tähän tulee fs.appendFile", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("appendFile succesfully!");
  }
});

fs.unlink("./temp.txt", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("temp.txt file is deleted!!");
  }
});

fs.mkdir("./testDir", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("New testDir created !!");
  }

  fs.rmdir("./testDir", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("testDir remove succesfully!");
    }
  });
});

fs.watch("./watch.txt", (eventType, filename) => {
  console.log(`Event type: ${eventType}`);
  console.log(`filename: ${filename}`);

  if (filename) {
    console.log("Watch.txt file is modified !!");
  } else {
    console.log("Tuntematon muutos havaittu!");
  }
});
