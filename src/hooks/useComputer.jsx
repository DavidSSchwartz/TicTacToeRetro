import React from "react";
import { lines } from "../constants/constants";

const useComputer = (nextMove, selections, lastSpaceFilled, gameStatus) => {
  const [computersNextMove, setComputersNextMove] = React.useState();
  //'Easy','Medium','Hard'
  const [computerDifficulty, setComputerDifficulty] = React.useState("Easy");

  React.useEffect(() => {
    if (gameStatus === "Idle") {
      setComputersNextMove(null);
    }
  }, [gameStatus]);

  React.useEffect(() => {
    if (nextMove === "O") {
      setComputersNextMove(
        playComputersTurn(selections, lastSpaceFilled, computerDifficulty)
      );
    }
  }, [nextMove]);
  return [computersNextMove, setComputerDifficulty, computerDifficulty];
};

const playComputersTurn = (takenSpaces, latestMove, computerDifficulty) => {
  if (computerDifficulty === "Hard") {
    //hard mode

    //deflect double trap of first move being in center by filling in a (randomly chosen) corner spot 
    if (Object.keys(takenSpaces).length === 1) {
      const cornerSpaces = [0, 2, 6, 8];
      return cornerSpaces[Math.floor(Math.random() * 4)];
    }

    let playerMoves = Object.fromEntries(
      Object.entries(takenSpaces).filter(([key, value]) => value === "X")
    );
    let computerMoves = Object.fromEntries(
      Object.entries(takenSpaces).filter(([key, value]) => value === "O")
    );

    //offensive- try to win
    for (let i = 0; i < lines.length; i++) {
      const [first, second, third] = lines[i];
      if (
        computerMoves[first] &&
        computerMoves[second] &&
        !takenSpaces[third]
      ) {
        return third;
      } else if (
        computerMoves[second] &&
        computerMoves[third] &&
        !takenSpaces[first]
      ) {
        return first;
      } else if (
        computerMoves[first] &&
        computerMoves[third] &&
        !takenSpaces[second]
      ) {
        return second;
      }
    }

    //defensive-make sure x doesnt win
    for (let i = 0; i < lines.length; i++) {
      const [first, second, third] = lines[i];
      if (playerMoves[first] && playerMoves[second] && !takenSpaces[third]) {
        return third;
      } else if (
        playerMoves[second] &&
        playerMoves[third] &&
        !takenSpaces[first]
      ) {
        return first;
      } else if (
        playerMoves[first] &&
        playerMoves[third] &&
        !takenSpaces[second]
      ) {
        return second;
      }
    }
  } else if (computerDifficulty === "Easy") {
    // easy mode
    for (let i = 0; i < lines.length; i++) {
      const [first, second, third] = lines[i];
      if (
        latestMove === first ||
        latestMove === second ||
        latestMove === third
      ) {
        if (latestMove !== first && !takenSpaces[first]) {
          return first;
        } else if (latestMove !== second && !takenSpaces[second]) {
          return second;
        } else if (latestMove !== third && !takenSpaces[third]) {
          return third;
        }
      }
    }
  }
  //shuffled is medium mode
  let shuffledLines = shuffle(lines);

  //medium mode
  for (let i = 0; i < lines.length; i++) {
    const [sfirst, ssecond, sthird] = shuffledLines[i];
    const [first, second, third] = shuffle([sfirst, ssecond, sthird]);
    if (latestMove === first || latestMove === second || latestMove === third) {
      if (latestMove !== first && !takenSpaces[first]) {
        return first;
      } else if (latestMove !== second && !takenSpaces[second]) {
        return second;
      } else if (latestMove !== third && !takenSpaces[third]) {
        return third;
      }
    }
  }

  //back up- enter any available space
  for (let i = 0; i < lines.length; i++) {
    const [first, second, third] = lines[i];
    if (takenSpaces[first] || takenSpaces[second] || takenSpaces[third]) {
      if (!takenSpaces[first]) {
        return first;
      } else if (!takenSpaces[second]) {
        return second;
      } else {
        return third;
      }
    }
  }
};

// const loopThroughLines = (action) => {
//   for (let i = 0; i < lines.length; i++) {
//     const [first, second, third] = lines[i];
//     action([first, second, third]);
//     console.log(action([first, second, third]))
//   }
// };

// const completeThirdInARow = (individualMoves, allMoves) => {
//   return ([first, second, third]) => {
//     if (individualMoves[first] && individualMoves[second] && !allMoves[third]) {
//       return third;
//     } else if (
//       individualMoves[second] &&
//       individualMoves[third] &&
//       !allMoves[first]
//     ) {
//       return first;
//     } else if (
//       individualMoves[first] &&
//       individualMoves[third] &&
//       !allMoves[second]
//     ) {
//       return second;
//     }
//   };
// };

const shuffle = (unshuffled) => {
  let shuffled = unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffled;
};

export default useComputer;
