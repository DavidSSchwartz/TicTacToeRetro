import React from "react";
import Title from "../Title";
import ColorPicker from "../ColorPicker";
import ResetButton from "../ResetButton";
import { CustomizationsContext } from "./CustomizationsProvider";
import TextInput from "../TextInput";
import "./Customizations.css";
import CustomizationsTextInput from "../CustomizationsTextInput/CustomizationsTextInput";

function Customizations() {
  const { resetCustomizations, setPlayer1Char, setPlayer2Char} =
    React.useContext(CustomizationsContext);

  return (
    <section className='customizations-container'>
      <fieldset className='customizations flex-column'>
        <Title>Spice it up a bit!</Title>
        <span className='margin-top'>Color:</span>
        <div className='customizations margin-left'>
          <ColorPicker of='X'>Player 1</ColorPicker>
          <ColorPicker of='O'>Player 2</ColorPicker>
        </div>
        <div className='customizations flex-column'>
          <div className='flex flex-column'>
            Alternate <span>character for:</span>
          </div>
          <div className='customizations margin-left'>
            <CustomizationsTextInput setCharacter={setPlayer1Char} defaultVal={'X'}/>
            <CustomizationsTextInput setCharacter={setPlayer2Char} defaultVal={'O'} />
          </div>
        </div>
        <ResetButton
          reset={resetCustomizations}
          className='customizations-reset'
        />
      </fieldset>
    </section>
  );
}

export default Customizations;
