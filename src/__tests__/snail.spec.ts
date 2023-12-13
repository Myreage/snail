import { printSnail } from "../printSnail";
import { snail } from "../snail";
import { Snail, appendToBottom, appendToLeft, appendToRight, appendToTop } from "../snailManipulation";

describe("Snail", () => {
  it("n=2", () => {
    const result = snail(2);
    const expected: Snail = [[1, 2]];
    expect(result).toEqual(expected);
  });

  it("n=3", () => {
    const result = snail(3);
    const expected: Snail = [
      [1, 2],
      ["blank", 3],
    ];
    expect(result).toEqual(expected);
  });

  it("n=4", () => {
    const result = snail(4);
    const expected: Snail = [
      [1, 2],
      [4, 3],
    ];
    expect(result).toEqual(expected);
  });

  it("n=5", () => {
    const result = snail(5);
    const expected: Snail = [
      ["blank", 1, 2],
      [5, 4, 3],
    ];
    expect(result).toEqual(expected);
  });

  it("n=6", () => {
    const result = snail(6);
    const expected: Snail = [
      [6, 1, 2],
      [5, 4, 3],
    ];
    expect(result).toEqual(expected);
  });
  it("n=7", () => {
    const result = snail(7);
    const expected: Snail = [
      [7, "blank", "blank"],
      [6, 1, 2],
      [5, 4, 3],
    ];
    expect(result).toEqual(expected);
  });
  it("n=8", () => {
    const result = snail(8);
    const expected: Snail = [
      [7, 8, "blank"],
      [6, 1, 2],
      [5, 4, 3],
    ];
    expect(result).toEqual(expected);
  });
});
