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
        className={`btn ${computerDifficulty === "Easy" && "selected"}`}
        onClick={() => setComputerDifficulty("Easy")}
      >
        Easy
      </Button>
      <Button
        className={`btn ${computerDifficulty === "Medium" && "selected"}`}
        onClick={() => setComputerDifficulty("Medium")}
      >
        Medium
      </Button>
      <Button
        className={`btn ${computerDifficulty === "Hard" && "selected"}`}
        onClick={() => setComputerDifficulty("Hard")}
      >
        Hard
      </Button>
    </div>
  );
}

export default ComputerDifficultyButtons;
