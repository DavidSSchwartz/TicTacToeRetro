import React from "react";
import { GameContext } from "./GameProvider";
import Board from "../Board";
import Title from "../Title";
import ResetButton from "../ResetButton";
import Confetti from "react-confetti";
// import ThreeDX from "../ThreeDBoard";
import ComputerDifficultyButtons from "../ComputerDifficultyButtons";

export default function Game() {
  const [backgroundColor, setBackgroundColor] = React.useState("green");

  const { gameStatus, nextMove, winner, resetGame, confettiActivated,computerDifficulty } =
    React.useContext(GameContext);

    React.useEffect(() => {
      if (computerDifficulty === "Easy") {
        setBackgroundColor("green");
      } else if (computerDifficulty === "Medium") {
        setBackgroundColor("yellow");
      } else {
        setBackgroundColor("red");
      }
    }, [computerDifficulty]);
  return (
    <>
      <section>
        <fieldset className='game'  style={{ boxShadow: ` 1px 1px 5px ${backgroundColor}` }}>
          <Title>
            {gameStatus === "Idle" && `Let's get this started!`}
            {/* dont need this line if playing against computer */}
            {/* instead have  {gameStatus === "Playing" && `And the game is on!!!`}  */}
            {gameStatus === "Playing" && `Next turn goes to: ${nextMove}`}
            {gameStatus === "Winner" && `And the winner is ${winner}!!!`}
            {gameStatus === "Tie" && `Looks like we have a tie!`}
          </Title>

          <Board></Board>
          {/* <ThreeDX /> */}
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
        <div className="btns-container">
        <ComputerDifficultyButtons />
        <ResetButton reset={resetGame} />
        </div>
      </section>
    </>
  );
}
