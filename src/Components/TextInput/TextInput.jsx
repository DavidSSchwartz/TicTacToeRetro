import React from "react";

function TextInput({ defaultValue = "", children, ...delegated }) {
  const [value, setValue] = React.useState(defaultValue);
  const id = React.useId();

  return (
    <>
      <label htmlFor={`text-input-${id}`}>{children}</label>
      <input
        id={`text-input-${id}`}
        {...delegated}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></input>
    </>
  );
}

export default TextInput;
