const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");
// Make this immutable?
const bondaries = input.shift().split("/");

const makeBotObject = botString => {
  const botArray = botString.split(" ");
  return {
    x: botArray[0],
    y: botArray[1],
    orientation: botArray[2]
  };
};

const parse = input => {
  let bot = "";
  const inputReducer = (accumalator, current) => {
    switch (current.split(" ").length) {
      case 1:
        const botObject = makeBotObject(bot);
        return (accumalator += `${JSON.stringify(botObject)}: ${current} \n`);
      case 3:
        bot = current;
        return accumalator;
    }
  };

  return input.reduce(inputReducer, "");
};

const output = parse(input);

console.log(output);
