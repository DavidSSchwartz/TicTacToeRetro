import React from "react";
import useErrors from "../../hooks/useErrors";

export const CustomizationsContext = React.createContext();

const CustomizationsProvider = ({ children }) => {
  const [xColor, setXColor] = React.useState("");
  const [oColor, setOColor] = React.useState("");
  const [boardDimensions, setBoardDimensions] = React.useState("175px");
  const [letterSize, setLetterSize] = React.useState("1.75rem");
  const [minSizeReached, maxSizeReached] = useErrors(boardDimensions);

  const changeGameSize = (type) => {
    if (type === "enlarge") {
      setBoardDimensions(
        (prevDimensions) => `${parseInt(prevDimensions) + 25}px`
      );
      setLetterSize((prevSize) => `${parseFloat(prevSize) + 0.25}rem`);
    } else {
      setBoardDimensions(
        (prevDimensions) => `${parseInt(prevDimensions) - 25}px`
      );
      setLetterSize((prevSize) => `${parseFloat(prevSize) - 0.25}rem`);
    }
  };

  const resetCustomizations = () => {
    setXColor("");
    setOColor("");
    setBoardDimensions("150px");
    setLetterSize("1.5rem");
  };

  return (
    <CustomizationsContext.Provider
      value={{
        xColor,
        setXColor,
        oColor,
        setOColor,
        resetCustomizations,
        changeGameSize,
        boardDimensions,
        letterSize,
        maxSizeReached,
        minSizeReached,
      }}
    >
      {children}
    </CustomizationsContext.Provider>
  );
};

export default CustomizationsProvider;
