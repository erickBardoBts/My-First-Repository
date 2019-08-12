const {
    nextBigger,
    nextBigger2
} = require("./nextBigger")

describe("Data types input-output.", ()=>{
  test("Input is a number integer", () => {
    expect(typeof 12345).toBe("number")
  });
  test("If string number still can work with it", () => {
    expect(nextBigger2("12345")).toBe(12354)
  });
  test("If input is float number", () => {
    expect(nextBigger2("12345.485")).toBe(12354)
  });
});