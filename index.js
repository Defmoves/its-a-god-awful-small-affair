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

const commandBot = (bot, commands) => {
  return `${JSON.stringify(bot)}: ${JSON.stringify(commands)} \n`;
};

const parse = input => {
  let bot = "";
  const inputReducer = (accumalator, current) => {
    switch (current.split(" ").length) {
      case 1:
        const botObject = makeBotObject(bot);
        const commands = current.split("");
        return (accumalator += commandBot(botObject, commands));
      case 3:
        bot = current;
        return accumalator;
    }
  };

  return input.reduce(inputReducer, "");
};

const output = parse(input);

console.log(output);
