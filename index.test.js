const makeBotObject = require("./index").makeBotObject;
const commandBot = require("./index").commandBot;

const testBot = {
  x: 1,
  y: 1,
  orientation: "E",
  status: ""
};

test("makeBotObject returns correct bot object", () => {
  expect(makeBotObject("1 1 E")).toStrictEqual(testBot);
});

test("commandBot applies commands to bot", () => {
  expect(commandBot(testBot, ["R", "F", "R", "F", "R", "F", "R", "F"])).toBe(
    "1 1 E \n"
  );
});
