const solve = require("./consCombo")

describe("Data types", () => {
  test("Input data type is String", () => {
    expect(typeof "zodiac").toBe('string')
  });
  test("Input is not a String Number", () => {
    expect(+"zodiac").toBe(NaN)
  });
  test("No spaces inside Input", () => {
    let word = "zodiac"
    expect(word.includes(" ")).toBe(false)
  });
  test("If input contains spaces", () => {
    let wordSpace = "this is a test"
    expect(wordSpace.includes(" ")).toBe(true)
  });
  test("Output is a number", () => {
    expect(typeof solve("zodiac")).toBe('number')
  });
});

describe("Testing program", () => {
  test("Score on 'zodiac' word", () => {
    expect(solve("zodiac")).toBe(26)
  });
  test("Score on 'strength' word", () => {
    expect(solve("strength")).toBe(57)
  });
  test("Score on some other input", () => {
    expect(solve("chruschtschov")).toBe(80)
  });
  test("Score on 'catchphrase' word", () => {
    expect(solve("catchphrase")).toBe(73)
  });
});