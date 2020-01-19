const makeBotObject = require("./index");

test("makeBotObject returns object", () => {
  expect(makeBotObject("0 0 N")).toStrictEqual({
    x: 0,
    y: 0,
    orientation: "N",
    status: ""
  });
});
