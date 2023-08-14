const { add, isEven } = require("../app");

test("Should return correct addtional number", () => {
  expect(add(2, 3)).toEqual(5);
  expect(add(3, 5)).toEqual(8);
  expect(add(10, 65)).toEqual(75);
});

test("isEven shuld return true", () => {
  expect(isEven(10)).toBe(true);
  expect(isEven(14)).toBe(true);
  expect(isEven(136)).toBe(true);
});

test("isEven shuld return false", () => {
  expect(isEven(3)).toBe(false);
  expect(isEven(47)).toBe(false);
  expect(isEven(137)).toBe(false);
});

test("isEven shuld throw an error", () => {
  expect(() => {
    isEven("10");
  }).toThrow();
});
