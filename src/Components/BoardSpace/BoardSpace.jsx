import React from "react";
import { GameContext } from "../Game/GameProvider";
import Button from "../Button";
import { CustomizationsContext } from "../Customizations/CustomizationsProvider";

const BoardSpace = ({ index, ...delegated }) => {
  const [value, setValue] = React.useState("");
  const { nextMove, gameStatus, selectSpace, computersNextMove } =
    React.useContext(GameContext);

  const { xColor, oColor, boardDimensions, letterSize } = React.useContext(
    CustomizationsContext
  );

  React.useEffect(() => {
    if (gameStatus === "Idle") {
      setValue("");
    }
  }, [gameStatus]);

  React.useEffect(() => {
    if (index === computersNextMove) {
      setValue("O");
      selectSpace("O", index);
    }
  }, [computersNextMove]);

  const handleClick = () => {
    //prevent double clicking
    if (value !== "") {
      return;
    }

    setValue(nextMove);
    selectSpace(nextMove, index);
  };
  return (
    <Button
      className='board-space'
      onClick={handleClick}
      style={{
        color: value === "X" ? xColor : oColor,
        width: parseInt(boardDimensions) / 3,
        height: parseInt(boardDimensions) / 3,
        fontSize: letterSize,
      }}
      {...delegated}
    >
      {value}
    </Button>
  );
};

export default BoardSpace;
