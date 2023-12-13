import {
  Coordinates,
  Snail,
  SnailCharacter,
  appendToBottom,
  appendToLeft,
  appendToRight,
  appendToTop,
  getBottomElementCoordinates,
  getLeftElementCoordinates,
  getRightElementCoordinates,
  getTopElementCoordinates,
} from "./snailManipulation";

type Direction = "left" | "right" | "bottom" | "up";

const mapNewDirection: Record<Direction, Direction> = {
  right: "bottom",
  bottom: "left",
  left: "up",
  up: "right",
};

const getNeighbourElementCoordinatesFunctionMap: Record<
  Direction,
  (coordinates: Coordinates) => {
    x: number;
    y: number;
  }
> = {
  bottom: getBottomElementCoordinates,
  left: getLeftElementCoordinates,
  right: getRightElementCoordinates,
  up: getTopElementCoordinates,
};

const appendFunctionMap: Record<Direction, (snail: Snail, coordinates: Coordinates, n: number) => Snail> = {
  bottom: appendToBottom,
  left: appendToLeft,
  right: appendToRight,
  up: appendToTop,
};

const getNeighbourElement = (
  coordinates: Coordinates,
  direction: Direction,
  snail: Snail
): SnailCharacter | undefined => {
  const neighbourElementCoordinates = getNeighbourElementCoordinatesFunctionMap[direction](coordinates);

  return snail[neighbourElementCoordinates.y]?.[neighbourElementCoordinates.x];
};

const computeNextDirection = ({
  currentDirection,
  currentCoordinates,
  snail,
}: {
  currentDirection: Direction;
  currentCoordinates: Coordinates;
  snail: Snail;
}): Direction => {
  const turnDirection = mapNewDirection[currentDirection];
  const turnDirectionNeighbourElement = getNeighbourElement(currentCoordinates, turnDirection, snail);
  const isItPossibleToTurn = turnDirectionNeighbourElement === "blank" || turnDirectionNeighbourElement === undefined;
  const newDirection = isItPossibleToTurn ? turnDirection : currentDirection;

  return newDirection;
};

const incrementSnail = ({
  currentCoordinates,
  currentDirection,
  n,
  snail,
}: {
  snail: Snail;
  n: number;
  currentDirection: Direction;
  currentCoordinates: Coordinates;
}): { snail: Snail; currentDirection: Direction; currentCoordinates: Coordinates } => {
  const newDirection = computeNextDirection({ currentDirection, currentCoordinates, snail });

  const newSnail = appendFunctionMap[newDirection](snail, currentCoordinates, n);
  const newCoordinates = getNeighbourElementCoordinatesFunctionMap[newDirection](currentCoordinates);

  return {
    currentDirection: newDirection,
    snail: newSnail,
    currentCoordinates: {
      x: Math.max(newCoordinates.x, 0),
      y: Math.max(newCoordinates.y, 0),
    },
  };
};

const snailRec = ({
  currentCoordinates,
  currentDirection,
  iterationCount: iteration,
  n,
  snail,
}: {
  n: number;
  snail: Snail;
  iterationCount: number;
  currentDirection: Direction;
  currentCoordinates: Coordinates;
}): Snail => {
  if (iteration === n) {
    return snail;
  }
  const {
    snail: newSnail,
    currentDirection: newDirection,
    currentCoordinates: newCoordinates,
  } = incrementSnail({ snail, n: iteration + 1, currentDirection, currentCoordinates });

  return snailRec({
    n,
    snail: newSnail,
    iterationCount: iteration + 1,
    currentDirection: newDirection,
    currentCoordinates: newCoordinates,
  });
};

export const snail = (n: number): Snail => {
  return snailRec({ n, snail: [[1]], iterationCount: 1, currentDirection: "up", currentCoordinates: { x: 0, y: 0 } });
};
