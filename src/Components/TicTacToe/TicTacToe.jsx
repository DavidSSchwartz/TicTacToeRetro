import React from "react";
import WelcomePage from "../WelcomePage";
import Game from "../Game";
import Customizations from "../Customizations";
import { GameContext } from "../Game/GameProvider";
import ReturnToHome from "../ReturnToHome";

function TicTacToe() {
  const { gameMode } = React.useContext(GameContext);

  return (
    <div
      className='central-container'
      style={{ backgroundColor: !gameMode ? "#fff" : "#aceaff" }}
    >
      <div className='flex'>
        {!gameMode && <WelcomePage />}
        {gameMode && (
          <>
            <ReturnToHome />
            <Game />
            <Customizations />
          </>
        )}
      </div>
    </div>
  );
}

export default TicTacToe;
