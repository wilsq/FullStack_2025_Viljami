const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  let message = "Tämä on tekstiä!";
  let isLoggedIn = true;

  let user = [
    { name: "Viljami", hobby: "football", birth_year: 1940 },
    { name: "Jooseppi", hobby: "fishing", birth_year: 1670 },
    { name: "Alma", hobby: "hiking", birth_year: 1734 },
  ];

  res.render("pages/index", {
    message: message,
    user: user,
    isLoggedIn,
  });
});

module.exports = router;
