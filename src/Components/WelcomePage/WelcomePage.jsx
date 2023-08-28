import React from "react";
import { GameContext } from "../Game/GameProvider";

function WelcomePage() {
  const {setGameMode} = React.useContext(GameContext);

  return (
    <div>
      welcome gif
      <button onClick={()=>setGameMode('Player')}>Play Against A Friend</button>
      <button onClick={()=>setGameMode('Computer')}>Play Against The Computer</button>
    </div>
  );
}

export default WelcomePage;
