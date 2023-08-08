import React from "react";
import { GameContext } from "../Game/GameProvider";
import Button from "../Button";
import { CustomizationsContext } from "../Customizations/CustomizationsProvider";

const BoardSpace = ({ index, ...delegated }) => {
  const [value, setValue] = React.useState("");
  const { nextMove, gameStatus, selectSpace, computersNextMove } =
    React.useContext(GameContext);

  const { xColor, oColor, player1Char, player2Char } = React.useContext(
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
      selectSpace("O", index, player2Char);
    }
  }, [computersNextMove]);

  const handleClick = () => {
    //prevent double clicking
    if (value !== "") {
      return;
    }

    setValue(nextMove);
    selectSpace(nextMove, index, player1Char);
  };
  return (
    <Button
      className='board-space'
      onClick={handleClick}
      style={{
        color: value === "X" ? xColor : oColor,
        width: 175 / 3,
        height: 175 / 3,
        fontSize: "1.75rem",
      }}
      {...delegated}
    >
      {value === "X" && player1Char}
      {value === "O" && player2Char}
    </Button>
  );
};

export default BoardSpace;
