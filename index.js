const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");
// Make this immutable?
const bondaries = input.shift().split("/");

const parse = input => {
  let bot = "";
  const inputReducer = (accumalator, current) => {
    switch (current.split(" ").length) {
      case 1:
        return (accumalator += `${bot}: ${current} \n`);
      case 3:
        bot = current;
        return accumalator;
    }
  };

  return input.reduce(inputReducer, "");
};

const output = parse(input);

console.log(output);
