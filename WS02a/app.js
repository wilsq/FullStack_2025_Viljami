console.log("Hello, Node.js!");

const { addition, subtraction } = require("./math");

const { upperCase, reverseString } = require("./stringUtils");

const { currentDate, formatDate } = require("./dateUtils");

console.log(
  addition(2, 3),
  subtraction(10, 2),
  upperCase("viljami"),
  reverseString("viljami"),
  currentDate(),
  formatDate()
);
