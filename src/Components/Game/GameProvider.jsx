import React from "react";

export const GameContext = React.createContext();

const MAX_NUMBER_OF_SPACES = 9;

const GameProvider = ({ children }) => {
  const [winner, setWinner] = React.useState("");
  //'Idle','Playing','Winner','Tie'
  const [gameStatus, setGameStatus] = React.useState("Idle");
  const [selectedSpaces, setSelectedSpaces] = React.useState([]);
  const [selections, setSelections] = React.useState({});
  const [nextMove, setNextMove] = React.useState("X");
  const [winnerStreakStyles, setWinnerStreakStyles] = React.useState(null);
  const [confettiActivated, setConfettiActivated] = React.useState(false);
  const [computersNextMove, setComputersNextMove] = React.useState();

  const selectSpace = (value, index) => {
    const updatedSelections = { ...selections, [index]: value };
    //clean up
    setSelectedSpaces([...selectedSpaces, index]);

    const winner = calculateWinner(updatedSelections);
    if (winner) {
      setWinner(value);
      setGameStatus("Winner");
      setWinnerStreakStyles(configureWinnerStreak(winner));
      setConfettiActivated(true);
    } else if (Object.keys(updatedSelections).length === MAX_NUMBER_OF_SPACES) {
      setGameStatus("Tie");
    } else if (Object.keys(updatedSelections).length >= 0) {
      setGameStatus("Playing");
      setSelections(updatedSelections);
      setNextMove(value === "X" ? "O" : "X");

      if (value === "X") {
        setComputersNextMove(playComputersTurn(updatedSelections, index));
      }
    }
  };

  const resetGame = () => {
    setNextMove("X");
    setSelections({});
    setGameStatus("Idle");
    if (winner) {
      setWinner("");
      setWinnerStreakStyles(null);
    }
  };

  return (
    <GameContext.Provider
      value={{
        winner,
        gameStatus,
        nextMove,
        selectSpace,
        resetGame,
        winnerStreakStyles,
        confettiActivated,
        selectedSpaces,
        computersNextMove,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (squares) => {
  for (let i = 0; i < lines.length; i++) {
    const [first, second, third] = lines[i];
    if (
      squares[first] &&
      squares[first] === squares[second] &&
      squares[second] === squares[third]
    )
      return lines[i];
  }
};

const configureWinnerStreak = (winningLine) => {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].toString() === winningLine.toString()) {
      if (i < 3) {
        const styles = { transform: "rotate(90deg)", left: "48%" };
        if (i === 0) {
          return { ...styles, top: "-34%" };
        } else if (i === 1) {
          return { ...styles, top: "0" };
        } else if (i === 2) {
          return { ...styles, top: "34%" };
        }
      }
      if (i === 3) {
        return { left: "15%" };
      } else if (i === 4) {
        return { left: "49%" };
      } else if (i === 5) {
        return { right: "15%" };
      } else if (i === 6) {
        return { transform: "rotate(-45deg)", left: "49%" };
      } else if (i === 7) {
        return { transform: "rotate(45deg)", right: "49%" };
      }
    }
  }
};

const playComputersTurn = (takenSpaces, latestMove) => {
  //hard mode
  let playerMoves = Object.fromEntries(
    Object.entries(takenSpaces).filter(([key, value]) => value === "X")
  );
  let computerMoves = Object.fromEntries(
    Object.entries(takenSpaces).filter(([key, value]) => value === "O")
  );

  //offensive- try to win
  for (let i = 0; i < lines.length; i++) {
    const [first, second, third] = lines[i];
    console.log(computerMoves, takenSpaces);
    if (computerMoves[first] && computerMoves[second] && !takenSpaces[third]) {
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

  //shuffled is medium mode
  let shuffledLines = shuffle(lines);
  for (let i = 0; i < lines.length; i++) {
    //medium mode
    const [sfirst, ssecond, sthird] = shuffledLines[i];
    const [first, second, third] = shuffle([sfirst, ssecond, sthird]);
    // easy mode
    // const [first, second, third] = lines[i]
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

const shuffle = (unshuffled) => {
  let shuffled = unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffled;
};
