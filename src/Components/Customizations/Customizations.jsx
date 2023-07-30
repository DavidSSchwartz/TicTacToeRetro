import React from "react";
import Title from "../Title";
import ColorPicker from "../ColorPicker";
import ResetButton from "../ResetButton";
import { CustomizationsContext } from "./CustomizationsProvider";
import Button from "../Button";

function Customizations() {
  const {
    resetCustomizations,
    changeGameSize,
    maxSizeReached,
    minSizeReached,
  } = React.useContext(CustomizationsContext);

  return (
    <section>
      <fieldset>
        <Title>Let's spice it up a bit!</Title>
        <ColorPicker of='X'>X Color</ColorPicker>
        <ColorPicker of='O'>O Color</ColorPicker>
        <Button
          onClick={() => changeGameSize("enlarge")}
          disabled={maxSizeReached}
        >
          Enlarge Board
        </Button>
        {maxSizeReached && (
          <label style={{ color: "red" }}> Maximum board size reached!!</label>
        )}
        <Button
          onClick={() => changeGameSize("shrink")}
          disabled={minSizeReached}
        >
          Shrink Board
        </Button>
        {minSizeReached && (
          <label style={{ color: "red" }}> Minumum board size reached!!</label>
        )}
      </fieldset>
      <ResetButton reset={resetCustomizations} />
    </section>
  );
}

export default Customizations;
