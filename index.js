const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");
// Make this immutable?
const bondaries = input.shift().split("/");

const parse = input => {
  return input;
};

const output = parse(input);

console.log(output);
