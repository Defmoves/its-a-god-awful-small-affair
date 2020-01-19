const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");
// Make this immutable?
const bondaries = input.shift().split("/");

console.log(bondaries);
console.log(input);
