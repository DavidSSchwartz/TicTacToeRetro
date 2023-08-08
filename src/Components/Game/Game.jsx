import React from "react";
import { GameContext } from "./GameProvider";
import Board from "../Board";
import Title from "../Title";
import ResetButton from "../ResetButton";
import Confetti from "react-confetti";
import ThreeDX from "../ThreeDBoard";
import ComputerDifficultyButtons from "../ComputerDifficultyButtons";

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
          <ThreeDX />
          {confettiActivated && (
            <Confetti
              tweenDuration={3000}
              recycle={winner ? true : false}
              // drawShape={(ctx) => {
              //   ctx.beginPath();
              //   ctx.font = "30px Arial";
              //   ctx.strokeText(winner || nextMove, 10, 50);
              // }}
            />
          )}
        </fieldset>
        <ComputerDifficultyButtons />
        <ResetButton reset={resetGame} />
      </section>
    </>
  );
}
