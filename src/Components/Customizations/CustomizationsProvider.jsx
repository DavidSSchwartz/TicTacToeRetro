import React from "react";

export const CustomizationsContext = React.createContext();

const CustomizationsProvider = ({ children }) => {
  const [xColor, setXColor] = React.useState("");
  const [oColor, setOColor] = React.useState("");
  const [player1Char, setPlayer1Char] = React.useState("X");
  const [player2Char, setPlayer2Char] = React.useState("O");

  const resetCustomizations = () => {
    setXColor("");
    setOColor("");
  };

  return (
    <CustomizationsContext.Provider
      value={{
        xColor,
        setXColor,
        oColor,
        setOColor,
        resetCustomizations,
        player1Char,
        player2Char,
        setPlayer1Char,
        setPlayer2Char,
      }}
    >
      {children}
    </CustomizationsContext.Provider>
  );
};

export default CustomizationsProvider;
