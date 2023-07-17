import React from "react";
import BoardSpace from "../BoardSpace";
import { range } from "../../util";
import { GameContext } from "../Game/GameProvider";

const Board = () => {
    const { gameStatus } = React.useContext(GameContext);
  
    return (
      <>
        {range(9).map((num) => (
          <BoardSpace
            key={num}
            index={num}
            disabled={!["Idle", "Playing"].includes(gameStatus)}
          ></BoardSpace>
        ))}
      </>
    );
  };

export default Board;
