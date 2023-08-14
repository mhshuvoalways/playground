const { getWords } = require("../getWords");

test("should throw an error if it is not a string", () => {
  expect(() => getWords(10)).toThrow();
  expect(() => getWords(false)).toThrow();
  expect(() => getWords(true)).toThrow();
  expect(() => getWords([])).toThrow();
  expect(() => getWords({})).toThrow();
});

test("should return the same string if the argument is a word", () => {
  expect(getWords("Shuvo")).toBe("Shuvo");
  expect(getWords("VSCode")).toBe("VSCode");
});

test("should return the array of string", () => {
  const words = getWords("mh shuvo");
  expect(words).toHaveLength(2);
  expect(words).toContain("shuvo");
});
