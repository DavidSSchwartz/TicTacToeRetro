import React from "react";
import TextInput from "../TextInput";

function CustomizationsTextInput({ setCharacter, defaultVal }) {
  return (
    <>
      <TextInput
        onBlur={(event) => {
          if (event.target.value === "") {
            setCharacter(defaultVal);
          } else {
            setCharacter(event.target.value);
          }
        }}
        maxLength='3'
        placeholder={defaultVal}
      ></TextInput>
    </>
  );
}

export default CustomizationsTextInput;
