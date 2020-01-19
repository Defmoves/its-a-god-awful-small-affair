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
  const commandBotReducer = (bot, command) => {
    // Orientation
    switch (command) {
      case "L":
        switch (bot.orientation) {
          case "N":
            bot.orientation = "W";
            break;
          case "E":
            bot.orientation = "N";
            break;
          case "S":
            bot.orientation = "E";
            break;
          case "W":
            bot.orientation = "S";
            break;
        }
        break;
      case "R":
        switch (bot.orientation) {
          case "N":
            bot.orientation = "E";
            break;
          case "E":
            bot.orientation = "S";
            break;
          case "S":
            bot.orientation = "W";
            break;
          case "W":
            bot.orientation = "N";
            break;
        }
        break;
    }
    return bot;
  };

  const finalBot = commands.reduce(commandBotReducer, bot);
  return `${finalBot.x} ${finalBot.y} ${finalBot.orientation}\n`;
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
fs.writeFileSync("output.txt", output);
console.log(output);
