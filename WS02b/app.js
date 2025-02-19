const axios = require("axios");

const API_URL = "https://jsonplaceholder.typicode.com/users";

axios
  .get(API_URL)
  .then((Response) => {
    console.log("Vastaus:", Response.data);
  })
  .catch((error) => {
    console.error("Virhe haettaessa dataa:", error.message);
  });
