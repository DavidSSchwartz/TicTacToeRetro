import React from "react";

export const CustomizationsContext = React.createContext();

const CustomizationsProvider = ({ children }) => {
  const [xColor, setXColor] = React.useState("");
  const [oColor, setOColor] = React.useState("");

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
      }}
    >
      {children}
    </CustomizationsContext.Provider>
  );
};

export default CustomizationsProvider;
