import React from 'react';
import { GameContext } from "../Game/GameProvider";
import Button from '../Button';

const BoardSpace = ({ index, ...delegated }) => {
  const [value, setValue] = React.useState("");
  const { nextMove, gameStatus, selectSpace } = React.useContext(GameContext);

  React.useEffect(() => {
    if (gameStatus === "Idle") {
      setValue("");
    }
  }, [gameStatus]);

  const handleClick = () => {
    //prevent double clicking
    if (value !== "") {
      return;
    }

    setValue(nextMove);
    selectSpace(nextMove, index);
  };

  return (
    <Button className='square' onClick={handleClick} {...delegated}>
      {value}
    </Button>
  );
};

  export default BoardSpace;