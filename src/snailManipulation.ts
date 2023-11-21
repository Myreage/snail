import { snail } from ".";

type SnailCharacter = number | "blank";
// y ↑
// x ->
export type Snail = SnailCharacter[][];

export type Coordinates = {
  x: number;
  y: number;
};

const getBottomElementCoordinates = (coordinates: Coordinates) => ({
  x: coordinates.x,
  y: coordinates.y + 1,
});

const getRightElementCoordinates = (coordinates: Coordinates) => ({
  x: coordinates.x + 1,
  y: coordinates.y,
});

const getLeftElementCoordinates = (coordinates: Coordinates) => ({
  x: coordinates.x - 1,
  y: coordinates.y,
});

const appendToEndOfLine = (snail: Snail, lineIndex: number, n: number): Snail => {
  const newSnail = snail.map((line, index) => {
    if (index === lineIndex) {
      return [...line, n];
    }
    return [...line, "blank" as const];
  });

  return newSnail;
};

const appendToBeginningOfLine = (snail: Snail, lineIndex: number, n: number): Snail => {
  const newSnail = snail.map((line, index) => {
    if (index === lineIndex) {
      return [n, ...line];
    }
    return ["blank" as const, ...line];
  });

  return newSnail;
};

const writeNumber = (snail: Snail, coordinates: Coordinates, n: number): Snail => {
  const updatedLine = snail[coordinates.y].map((element, index) => {
    if (index === coordinates.x) {
      return n;
    }
    return element;
  });

  const updatedSnail = snail.map((line, index) => {
    if (index === coordinates.y) {
      return updatedLine;
    }
    return line;
  });

  return updatedSnail;
};

const appendToNewLine = (snail: Snail, n: number): Snail => {
  const lineLength = snail[0].length;

  const newLine = snail[0].map((element, index) => {
    if (index + 1 === lineLength) {
      return n;
    }
    return "blank";
  });
  return [...snail, newLine];
};

export const appendToRight = (snail: Snail, coordinates: Coordinates, n: number) => {
  const rightElementCoordinates = getRightElementCoordinates(coordinates);

  if (rightElementCoordinates.x > snail[0].length - 1) {
    const newSnail = appendToEndOfLine(snail, rightElementCoordinates.y, n);
    return newSnail;
  }

  const updatedSnail = writeNumber(snail, rightElementCoordinates, n);

  return updatedSnail;
};

export const appendToLeft = (snail: Snail, coordinates: Coordinates, n: number) => {
  const leftElementCoordinates = getLeftElementCoordinates(coordinates);

  if (leftElementCoordinates.x === -1) {
    return appendToBeginningOfLine(snail, leftElementCoordinates.y, n);
  }

  const updatedSnail = writeNumber(snail, leftElementCoordinates, n);

  return updatedSnail;
};

export const appendToBottom = (snail: Snail, coordinates: Coordinates, n: number) => {
  const bottomElementCoordinates = getBottomElementCoordinates(coordinates);
  const bottomLine = snail[bottomElementCoordinates.y];

  if (bottomLine) {
    return writeNumber(snail, bottomElementCoordinates, n);
  }

  return appendToNewLine(snail, n);
};
