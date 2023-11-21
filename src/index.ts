type SnailCharacter = number | "blank";

// y ↑
// x ->
export type Snail = SnailCharacter[][];

type Direction = "left" | "right" | "bottom" | "up";

type Coordinates = {
  x: number;
  y: number;
};

const mapNewDirection: Record<Direction, Direction> = {
  right: "bottom",
  bottom: "left",
  left: "up",
  up: "right",
};

const getElement = (snail: Snail, coordinates: Coordinates) => {
  return snail[coordinates.y][coordinates.x];
};

const getBottomElementCoordinates = (coordinates: Coordinates) => ({
  x: coordinates.x,
  y: coordinates.y + 1,
});

export const appendToBottom = (snail: Snail, coordinates: Coordinates, n: number) => {
  const bottomElementCoordinates = getBottomElementCoordinates(coordinates);

  if (snail[bottomElementCoordinates.y]) {
    const updatedLine = snail[bottomElementCoordinates.y].map((element, index) => {
      if (index === bottomElementCoordinates.x) {
        return n;
      }
      return element;
    });

    return snail.map((line, index) => {
      if (index === bottomElementCoordinates.y) {
        return updatedLine;
      }
      return line;
    });
  }

  const newLine = snail[0].map((element, index) => {
    if (index === coordinates.x) {
      return n;
    }
    return "blank";
  });
  return [...snail, newLine];
};

const incrementSnail = ({
  currentCoordinates, // O;1
  currentDirection, // "right"
  n, //"3"
  snail, // [[1,2]]
}: {
  snail: Snail;
  n: number;
  currentDirection: Direction;
  currentCoordinates: Coordinates;
}): { snail: Snail; direction: Direction; coordinates: Coordinates } => {
  const newSnail = [...snail];
  const newDirection = mapNewDirection[currentDirection];

  if (newDirection === "right") {
    newSnail[currentCoordinates.y].push(n);

    return {
      direction: n === 1 ? "up" : newDirection,
      snail: newSnail,
      coordinates: {
        x: newSnail[currentCoordinates.y].length + 1,
        y: currentCoordinates.y,
      },
    };
  }

  if (newDirection === "bottom") {
    newSnail[1].push("blank");
    newSnail[1].push(n);

    return {
      direction: n === 1 ? "up" : newDirection,
      snail: newSnail,
      coordinates: {
        //1,2
        x: currentCoordinates.x,
        y: currentCoordinates.y + 1,
      },
    };
  }
};

const snailRec = ({
  currentCoordinates,
  currentDirection,
  iteration,
  n,
  snail,
}: {
  n: number;
  snail: Snail;
  iteration: number;
  currentDirection: Direction;
  currentCoordinates: Coordinates;
}): Snail => {
  if (iteration === n) {
    return snail;
  }
  const {
    snail: newSnail,
    direction: newDirection,
    coordinates: newCoordinates,
  } = incrementSnail({ snail, n: iteration + 1, currentDirection, currentCoordinates });
  return snailRec({
    n,
    snail: newSnail,
    iteration: iteration + 1,
    currentDirection: newDirection,
    currentCoordinates: newCoordinates,
  });
};

export const snail = (n: number): Snail => {
  return snailRec({ n, snail: [[]], iteration: 0, currentDirection: "up", currentCoordinates: { x: 0, y: 0 } });
};
