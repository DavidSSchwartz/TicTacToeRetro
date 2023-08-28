import React from "react";
import { GameContext } from "../Game/GameProvider";
import { CustomizationsContext } from "../Customizations/CustomizationsProvider";

function ReturnToHome() {
  const { setGameMode, resetGame } = React.useContext(GameContext);
  const { resetCustomizations } = React.useContext(CustomizationsContext);

  const resetAll = () => {
    setGameMode(null);
    resetGame();
    resetCustomizations();
  };
  
  return <button onClick={resetAll}>Return to Welcome Screen</button>;
}

export default ReturnToHome;
