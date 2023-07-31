import React from "react";

export const GameContext = React.createContext();

const MAX_NUMBER_OF_SPACES = 9;

const GameProvider = ({ children }) => {
  const [winner, setWinner] = React.useState("");
  //'Idle','Playing','Winner','Tie'
  const [gameStatus, setGameStatus] = React.useState("Idle");
  const [selectedSpaces, setSelectedSpaces] = React.useState({});
  const [nextMove, setNextMove] = React.useState("X");
  const [winnerStreakStyles, setWinnerStreakStyles] = React.useState(null);

  const selectSpace = (value, index) => {
    const updatedSpaces = { ...selectedSpaces, [index]: value };
    const winner = calculateWinner(updatedSpaces);

    if (winner) {
      setWinner(value);
      setGameStatus("Winner");
      setWinnerStreakStyles(configureWinnerStreak(winner));
    } else if (Object.keys(updatedSpaces).length === MAX_NUMBER_OF_SPACES) {
      setGameStatus("Tie");
    } else if (Object.keys(updatedSpaces).length >= 0) {
      setGameStatus("Playing");
      setSelectedSpaces(updatedSpaces);
      setNextMove(value === "X" ? "O" : "X");
    }
  };
  
  const resetGame = () => {
    setNextMove("X");
    setSelectedSpaces({});
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
