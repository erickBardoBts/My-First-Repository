const fivedice = require("./fivedice")

describe("Data types", () => {
  const input = [1,1,1,1,1]
  const fiveDice = fivedice([1,1,1,1,1]);
  test("Input is array", () =>{
    expect(Array.isArray(input)).toBe(true)
  });

  test("Array element is number", () => {
    expect(typeof input[0]).toBe("number")
  });

  test("Output is number data type", () => {
    expect(typeof fiveDice).toBe("number")
  });  
});

describe("Testing with array fill with 1s", () => {
  test("Trying all input as 1s", () => {
    expect(fivedice([1,1,1,1,1])).toEqual(1200)
  });
  test("Testing with 2s ", () => {
    expect(fivedice([2,2,2,2,2])).toEqual(200)
  });
  test("Testing with 3s", () => {
    expect(fivedice([3,3,3,3,3])).toEqual(300)
  });
  test("Testing with 4s", () => {
    expect(fivedice([4,4,4,4,4])).toEqual(400)
  });
  test("Testing with 5s", () => {
    expect(fivedice([5,5,5,5,5])).toEqual(600)
  });
  test("Testing with 6s", () => {
    expect(fivedice([6,6,6,6,6])).toEqual(600)
  });
});

describe("Random inputs.", () =>{
  test("Test no.1", () => {
    expect(fivedice([5,1,3,4,1])).toEqual(250)
  });
  test("Test no.2", () => {
    expect(fivedice([1,1,4,3,5])).toEqual(250)
  });
  test("Test no.3", () => {
    expect(fivedice([2,4,4,5,4])).toEqual(450)
  });
  test("Test no.4", () => {
    expect(fivedice([3,3,3,5,1])).toEqual(450)
  });
  test("Test no.5", () => {
    expect(fivedice([1,1,1,1,5])).toEqual(1150)
  });
});