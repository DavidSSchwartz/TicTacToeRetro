import React from "react";
import Button from "../Button";
import "./SplashScreen.css";
import Clouds from "../Clouds";
import GrassAnimation from "../GrassAnimation/GrassAnimation";
import { GameContext } from "../Game/GameProvider";

const TIC_TAC_TOE_TEXT = "TicTacToe";

function SplashScreen() {
  const { setGameMode } = React.useContext(GameContext);

  return (
    <>
      <Clouds />
      <div className='splash-screen-container'>
        <div className={`board-container board-container-splash`}>
          {TIC_TAC_TOE_TEXT.split("").map((letter, index) => (
            <Button className='board-space board-space-splash' key={index}>
              <span
                className='splash-text'
                style={{ animationDelay: 0.5 + index / 5 + "s" }}
              >
                {letter}
              </span>
            </Button>
          ))}
        </div>
      </div>
      <GrassAnimation />
      <div className='button-container'>
        <button
          className='button-30 game-mode-select-btn'
          role='button'
          onClick={() => setGameMode("Player")}
        >
          Play Against A Friend
        </button>
        <button
          className='button-30 game-mode-select-btn'
          role='button'
          onClick={() => setGameMode("Computer")}
        >
          Play Against The Computer
        </button>
      </div>
    </>
  );
}

export default SplashScreen;
