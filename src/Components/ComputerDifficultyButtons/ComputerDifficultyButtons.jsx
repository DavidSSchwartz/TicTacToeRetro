import React from "react";
import Button from "../Button";
import { GameContext } from "../Game/GameProvider";
import "./ComputerDifficultyButtons.css";

function ComputerDifficultyButtons() {
  const { setComputerDifficulty, computerDifficulty } =
    React.useContext(GameContext);

  return (
    <div className='cdb-btn-container'>
      <Button
        className={`button-30 ${computerDifficulty === "Easy" && "selected"} game-btn`}
        onClick={() => setComputerDifficulty("Easy")}
      >
        Easy
      </Button>
      <Button
        className={`button-30 ${computerDifficulty === "Medium" && "selected"} game-btn`}
        onClick={() => setComputerDifficulty("Medium")}
      >
        Medium
      </Button>
      <Button
        className={`button-30 ${computerDifficulty === "Hard" && "selected"} game-btn`}
        onClick={() => setComputerDifficulty("Hard")}
      >
        Hard
      </Button>
    </div>
  );
}

export default ComputerDifficultyButtons;
