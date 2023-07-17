import React from "react";
import { GameContext } from "./GameProvider";
import Board from "../Board";
import Button from "../Button";
import Title from "../Title/Title";

export default function Game() {
  const { gameStatus, nextMove, winner, resetGame } =
    React.useContext(GameContext);

  return (
    <>
      <fieldset className='game'>
        <Title>
          {gameStatus === "Idle" && `Let's get this started!`}
          {gameStatus === "Playing" && `Next turn goes to: ${nextMove}`}
          {gameStatus === "Winner" && `And the winner is ${winner}!!!`}
          {gameStatus === "Tie" && `Looks like we have a tie!`}
        </Title>

        <div className='container'>
          <Board></Board>
        </div>
      </fieldset>
      
      <Button onClick={resetGame}>Reset</Button>
    </>
  );
}
