import React from "react";
import { CustomizationsContext } from "../Customizations/CustomizationsProvider";

function TextInput({ children, ...delegated }) {
  const [value, setValue] = React.useState("");
  const id = React.useId();
  const { resetTextInput, setResetTextInput } = React.useContext(
    CustomizationsContext
  );

  React.useEffect(() => {
    if (resetTextInput === true) {
      setValue("");
    }
    return setResetTextInput(false);
  }, [resetTextInput]);

  return (
    <div className='text-input-container'>
      <label htmlFor={`text-input-${id}`}>{children}</label>
      <input
        className='text-input'
        id={`text-input-${id}`}
        value={value}
        {...delegated}
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </div>
  );
}

export default TextInput;
