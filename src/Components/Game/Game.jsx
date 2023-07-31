import React from "react";
import { GameContext } from "./GameProvider";
import Board from "../Board";
import Title from "../Title/Title";
import ResetButton from "../ResetButton/ResetButton";
import Confetti from "react-confetti";

export default function Game() {
  const { gameStatus, nextMove, winner, resetGame, confettiActivated } =
    React.useContext(GameContext);

  return (
    <>
      <section>
        <fieldset className='game'>
          <Title>
            {gameStatus === "Idle" && `Let's get this started!`}
            {gameStatus === "Playing" && `Next turn goes to: ${nextMove}`}
            {gameStatus === "Winner" && `And the winner is ${winner}!!!`}
            {gameStatus === "Tie" && `Looks like we have a tie!`}
          </Title>

          <Board></Board>
          {confettiActivated && (
            <Confetti tweenDuration={3000} recycle={winner ? true : false} />
          )}
        </fieldset>

        <ResetButton reset={resetGame} />
      </section>
    </>
  );
}
