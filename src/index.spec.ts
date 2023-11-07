import { Snail, snail } from ".";

it("n=1", () => {
  const result = snail(1);
  const expected: Snail = [[1]];
  expect(result).toEqual(expected);
});

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
