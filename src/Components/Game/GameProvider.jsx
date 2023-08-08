import React from "react";
import useComputer from "../../hooks/useComputer";
import useWinnerEffects from "../../hooks/useWinnerEffects";
import { lines } from "../../constants/constants";
export const GameContext = React.createContext();

const MAX_NUMBER_OF_SPACES = 9;

const GameProvider = ({ children }) => {
  //'Idle','Playing','Winner','Tie'
  const [gameStatus, setGameStatus] = React.useState("Idle");
  const [selections, setSelections] = React.useState({});
  const [nextMove, setNextMove] = React.useState("X");
  const [winner, setWinner] = React.useState("");
  const [winningLine, setWinningLine] = React.useState([]);
  const [lastSpaceFilled, setLastSpaceFilled] = React.useState(null);

  const [winnerStreakStyles, confettiActivated] = useWinnerEffects(
    winningLine,
    gameStatus
  );

  const [computersNextMove, setComputerDifficulty] = useComputer(
    nextMove,
    selections,
    lastSpaceFilled,
    gameStatus
  );

  const selectSpace = (value, index, player) => {
    const updatedSelections = { ...selections, [index]: value };

    const winningLine = calculateWinner(updatedSelections);
    if (winningLine) {
      setWinner(player);
      setWinningLine(winningLine);
      setGameStatus("Winner");
    } else if (Object.keys(updatedSelections).length === MAX_NUMBER_OF_SPACES) {
      setGameStatus("Tie");
    } else if (Object.keys(updatedSelections).length >= 0) {
      handleContinuePlay(updatedSelections, value, index);
    }
  };

  const handleContinuePlay = (updatedSelections, value, index) => {
    setGameStatus("Playing");
    setSelections(updatedSelections);
    setNextMove(value === "X" ? "O" : "X");
    setLastSpaceFilled(index);
  };

  const resetGame = () => {
    setNextMove("X");
    setSelections({});
    setGameStatus("Idle");
    if (winner) {
      setWinner("");
      setWinningLine([]);
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
        computersNextMove,
        setComputerDifficulty,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

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

//clean up computer- make hook
//documentation for computer
//easy,medium, and hard buttons

//start styling
//entrance screen, maybe some sort of animation
//choose "play against a friend" "play against a computer"
//add sound
// customiztion- take out growing board, add in replacing character inputs
