import React from "react";
import Title from "../Title";
import ColorPicker from "../ColorPicker";
import ResetButton from "../ResetButton";
import { CustomizationsContext } from "./CustomizationsProvider";
import TextInput from "../TextInput/TextInput";

function Customizations() {
  const { resetCustomizations, setPlayer1Char, setPlayer2Char } =
    React.useContext(CustomizationsContext);

  return (
    <section>
      <fieldset>
        <Title>Let's spice it up a bit!</Title>
        <ColorPicker of='X'>X Color</ColorPicker>
        <ColorPicker of='O'>O Color</ColorPicker>
        <TextInput
          onBlur={(event) => {
            if (event.target.value === "") {
              setPlayer1Char("X");
            } else {
              setPlayer1Char(event.target.value);
            }
          }}
          maxLength='3'
          placeHolder='X'
        >
          Insert alternative character for
        </TextInput>
        <TextInput
          onBlur={(event) => {
            if (event.target.value === "") {
              setPlayer2Char("O");
            } else {
              setPlayer2Char(event.target.value);
            }
          }}
          maxLength='3'
          placeHolder='O'
        >
          Insert alternative character for
        </TextInput>
      </fieldset>
      <ResetButton reset={resetCustomizations} />
    </section>
  );
}

export default Customizations;
