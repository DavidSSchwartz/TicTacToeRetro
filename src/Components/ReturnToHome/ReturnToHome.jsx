import React from "react";
import { GameContext } from "../Game/GameProvider";
import { CustomizationsContext } from "../Customizations/CustomizationsProvider";
import ReturnSVG from "../../assets/ReturnSVG.jsx";

function ReturnToHome() {
  const { setGameMode, resetGame } = React.useContext(GameContext);
  const { resetCustomizations } = React.useContext(CustomizationsContext);

  const resetAll = () => {
    setGameMode(null);
    resetGame();
    resetCustomizations();
  };

  return (
    <button className='button-30 return-home-btn' onClick={resetAll}>
   
      <ReturnSVG /> 
      <span>Return to Welcome Screen</span>
      
    </button>
  );
}

export default ReturnToHome;
