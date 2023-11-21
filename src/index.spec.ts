import { Snail, appendToBottom, snail } from ".";

describe("Snail", () => {
  // 1
  it("n=1", () => {
    const result = snail(1);
    const expected: Snail = [[1]];
    expect(result).toEqual(expected);
  });

  // 1 2
  it("n=2", () => {
    const result = snail(2);
    const expected: Snail = [[1, 2]];
    expect(result).toEqual(expected);
  });

  // 1 2
  //   3
  it("n=3", () => {
    const result = snail(3);
    const expected: Snail = [
      [1, 2],
      ["blank", 3],
    ];
    expect(result).toEqual(expected);
  });
});

describe("Append to bottom", () => {
  it.only("append to 1 snail", () => {
    const snail: Snail = [[1]];
    const expected: Snail = [[1], [2]];
    const result = appendToBottom(snail, { x: 0, y: 0 }, 2);
    expect(result).toEqual(expected);
  });

  it.only("append to 2 snail", () => {
    const snail: Snail = [[1, 2]];
    const expected: Snail = [
      [1, 2],
      ["blank", 3],
    ];
    const result = appendToBottom(snail, { x: 1, y: 0 }, 3);
    expect(result).toEqual(expected);
  });

  it.only("append to 10 snail", () => {
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
