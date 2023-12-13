import { Snail, appendToBottom, appendToRight, appendToLeft, appendToTop } from "../snailManipulation";

describe("Append to bottom", () => {
  it("append to 2 snail", () => {
    const snail: Snail = [[1, 2]];
    const expected: Snail = [
      [1, 2],
      ["blank", 3],
    ];
    const result = appendToBottom(snail, { x: 1, y: 0 }, 3);
    expect(result).toEqual(expected);
  });

  it("append to 10 snail", () => {
    const snail: Snail = [
      [7, 8, 9, 10],
      [6, 1, 2, "blank"],
      [5, 4, 3, "blank"],
    ];
    const expected: Snail = [
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, "blank"],
    ];
    const result = appendToBottom(snail, { x: 3, y: 0 }, 11);
    expect(result).toEqual(expected);
  });
});

describe("Append to right", () => {
  it("append to 1 snail", () => {
    const snail: Snail = [[1]];
    const expected: Snail = [[1, 2]];
    const result = appendToRight(snail, { x: 0, y: 0 }, 2);
    expect(result).toEqual(expected);
  });
  it("append to 7 snail", () => {
    const snail: Snail = [
      [7, "blank", "blank"],
      [6, 1, 2],
      [5, 4, 3],
    ];
    const expected: Snail = [
      [7, 8, "blank"],
      [6, 1, 2],
      [5, 4, 3],
    ];
    const result = appendToRight(snail, { x: 0, y: 0 }, 8);
    expect(result).toEqual(expected);
  });
  it("append to 9 snail", () => {
    const snail: Snail = [
      [7, 8, 9],
      [6, 1, 2],
      [5, 4, 3],
    ];
    const expected: Snail = [
      [7, 8, 9, 10],
      [6, 1, 2, "blank"],
      [5, 4, 3, "blank"],
    ];
    const result = appendToRight(snail, { x: 2, y: 0 }, 10);
    expect(result).toEqual(expected);
  });
});

describe("Append to left", () => {
  it("append to 3 snail", () => {
    const snail: Snail = [
      [1, 2],
      ["blank", 3],
    ];
    const expected: Snail = [
      [1, 2],
      [4, 3],
    ];
    const result = appendToLeft(snail, { x: 1, y: 1 }, 4);
    expect(result).toEqual(expected);
  });
  it("append to 4 snail", () => {
    const snail: Snail = [
      [1, 2],
      [4, 3],
    ];
    const expected: Snail = [
      ["blank", 1, 2],
      [5, 4, 3],
    ];
    const result = appendToLeft(snail, { x: 0, y: 1 }, 5);
    expect(result).toEqual(expected);
  });
});

describe("Append to top", () => {
  it("append to 5 snail", () => {
    const snail: Snail = [
      ["blank", 1, 2],
      [5, 4, 3],
    ];
    const expected: Snail = [
      [6, 1, 2],
      [5, 4, 3],
    ];
    const result = appendToTop(snail, { x: 0, y: 1 }, 6);
    expect(result).toEqual(expected);
  });
  it("append to 6 snail", () => {
    const snail: Snail = [
      [6, 1, 2],
      [5, 4, 3],
    ];
    const expected: Snail = [
      [7, "blank", "blank"],
      [6, 1, 2],
      [5, 4, 3],
    ];
    const result = appendToTop(snail, { x: 0, y: 0 }, 7);
    expect(result).toEqual(expected);
  });
});
