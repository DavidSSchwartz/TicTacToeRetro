import React from 'react';
import Button from '../Button';
import { GameContext } from '../Game/GameProvider';

function ComputerDifficultyButtons() {
  const {setComputerDifficulty} = React.useContext(GameContext);

  return <div>
    <Button onClick={()=>setComputerDifficulty('Easy')}>Easy</Button>
    <Button onClick={()=>setComputerDifficulty('Medium')}>Medium</Button>
    <Button onClick={()=>setComputerDifficulty('Hard')}>Hard</Button>
  </div>;
}

export default ComputerDifficultyButtons;
