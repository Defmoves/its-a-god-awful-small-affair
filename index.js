const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");
// Make this immutable?
const boundaries = input.shift().split(" ");
const boundaryX = boundaries[0];
const boundaryY = boundaries[1];

const makeBotObject = botString => {
  const botArray = botString.split(" ");
  return {
    x: Number(botArray[0]),
    y: Number(botArray[1]),
    orientation: botArray[2],
    status: ""
  };
};

const commandBot = (bot, commands) => {
  const commandBotReducer = (bot, command) => {
    // lost bots don't move, this is a no-op
    if (bot.status === "LOST") {
      return bot;
    }

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
      // Movement
      case "F":
        switch (bot.orientation) {
          case "N":
            const north = bot.y + 1;
            if (north > boundaryY) {
              bot.status = "LOST";
            } else {
              bot.y = north;
            }
            break;
          case "E":
            const east = bot.x + 1;
            if (east > boundaryX) {
              bot.status = "LOST";
            } else {
              bot.x = east;
            }
            break;
          case "S":
            const south = bot.y - 1;
            if (south < 0) {
              bot.status = "LOST";
            } else {
              bot.y = south;
            }
            break;
          case "W":
            const west = bot.x - 1;
            if (west < 0) {
              bot.status = "LOST";
            } else {
              bot.x = west;
            }
            break;
        }
        break;
    }
    return bot;
  };

  const finalBot = commands.reduce(commandBotReducer, bot);
  return `${finalBot.x} ${finalBot.y} ${finalBot.orientation} ${finalBot.status}\n`;
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
