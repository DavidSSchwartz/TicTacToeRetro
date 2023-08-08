import React from "react";
import Title from "../Title";
import ColorPicker from "../ColorPicker";
import ResetButton from "../ResetButton";
import { CustomizationsContext } from "./CustomizationsProvider";
import Button from "../Button";

function Customizations() {
  const {
    resetCustomizations,
  } = React.useContext(CustomizationsContext);

  return (
    <section>
      <fieldset>
        <Title>Let's spice it up a bit!</Title>
        <ColorPicker of='X'>X Color</ColorPicker>
        <ColorPicker of='O'>O Color</ColorPicker>
      </fieldset>
      <ResetButton reset={resetCustomizations} />
    </section>
  );
}

export default Customizations;
