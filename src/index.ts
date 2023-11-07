type SnailCharacter = number | "blank";

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

// example

// 7  8  9  10
// 6  1  2
// 5  4  3
//
// ↑ y
//  → x

// tourner à droite:
// - si dernier elt ligne: passer en dessous
// - si premier elt ligne: passer au dessus
// - sinon: passer a l'elt suivant dans la liste

// [
//     [1,2]
// ]

// [
//     [1,2],
//     ["blank", 3]
// ]
const appendToBottom = (snail: Snail, coordinates: Coordinates, n: number) => {
  const newBottomLine = coordinates.y - 1 > 0 ? [...snail[coordinates.y - 1]] : [];
  // rajouter l'elt à la fin si la liste existe
  // fill avec des blanks si besoin
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
}): { snail: Snail; direction: Direction; coordinates: Coordinates } => {
  const newSnail = [...snail];
  const newDirection = mapNewDirection[currentDirection];

  if (newDirection === "right") {
    newSnail[currentCoordinates.y].push(n);
  }

  return {
    direction: n === 1 ? "up" : newDirection,
    snail: newSnail,
    coordinates: {
      x: newSnail[currentCoordinates.y].length + 1,
      y: currentCoordinates.y,
    },
  };
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
