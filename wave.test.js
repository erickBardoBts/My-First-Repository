const wave = require("./wavejs");

describe("Test on data type", () => {
    test("Output data Type", () => {
        const twoWords = "twoWords"
        expect(Array.isArray(wave(twoWords))).toBe(true)
    });

});