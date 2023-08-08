import React from "react";
import { lines } from "../constants/constants";

const useWinnerEffects = (winner, gameStatus) => {
  const [winnerStreakStyles, setWinnerStreakStyles] = React.useState(null);
  const [confettiActivated, setConfettiActivated] = React.useState(false);

  React.useEffect(() => {
    if (gameStatus === "Idle") {
      setWinnerStreakStyles(null);
    }
  }, [gameStatus]);

  React.useEffect(() => {
    if (winner.length > 0) {
      setWinnerStreakStyles(configureWinnerStreak(winner));
      setConfettiActivated(true);
    }
  }, [winner]);

  return [winnerStreakStyles, confettiActivated];
};

const configureWinnerStreak = (winningLine) => {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].toString() === winningLine.toString()) {
      if (i < 3) {
        const styles = { transform: "rotate(90deg)", left: "48%" };
        if (i === 0) {
          return { ...styles, top: "-34%" };
        } else if (i === 1) {
          return { ...styles, top: "0" };
        } else if (i === 2) {
          return { ...styles, top: "34%" };
        }
      }
      if (i === 3) {
        return { left: "15%" };
      } else if (i === 4) {
        return { left: "49%" };
      } else if (i === 5) {
        return { right: "15%" };
      } else if (i === 6) {
        return { transform: "rotate(-45deg)", left: "49%" };
      } else if (i === 7) {
        return { transform: "rotate(45deg)", right: "49%" };
      }
    }
  }
};

export default useWinnerEffects;
