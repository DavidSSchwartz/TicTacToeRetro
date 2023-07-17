import React from "react";

export const GameContext = React.createContext();

const MAX_NUMBER_OF_SPACES = 9;

const GameProvider = ({ children }) => {
  const [winner, setWinner] = React.useState("");
  //'Idle','Playing','Winner','Tie'
  const [gameStatus, setGameStatus] = React.useState("Idle");
  const [selectedSpaces, setSelectedSpaces] = React.useState({});
  const [nextMove, setNextMove] = React.useState("X");

  const selectSpace = (value, index) => {
    const updatedSpaces = { ...selectedSpaces, [index]: value };
    const winner = calculateWinner(updatedSpaces);

    if (winner) {
      setWinner(value);
      setGameStatus("Winner");
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
      return squares[first];
  }
};
