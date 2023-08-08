import React from "react";
import BoardSpace from "../BoardSpace";
import { range } from "../../util";
import { GameContext } from "../Game/GameProvider";

const Board = () => {
  const { gameStatus, winnerStreakStyles } = React.useContext(GameContext);

  return (
    <>
      <div
        className={`board-container`}
        style={{ width: '175px', height: '175px' }}
      >
        {range(9).map((num) => (
          <BoardSpace
            key={num}
            index={num}
            disabled={!["Idle", "Playing"].includes(gameStatus)}
          ></BoardSpace>
        ))}
        {winnerStreakStyles && (
          <div className='winner-streak' style={winnerStreakStyles}></div>
        )}
      </div>
    </>
  );
};

export default Board;
