import React from "react";
import { CustomizationsContext } from "../Customizations/CustomizationsProvider";

function ColorPicker({ of, children }) {
  const { xColor, setXColor, oColor, setOColor } = React.useContext(
    CustomizationsContext
  );

  const id = React.useId();
  const handleChange = (event) => {
    if (of === "X") {
      setXColor(event.target.value);
    } else {
      setOColor(event.target.value);
    }
  };

  return (
    <div>
      <label htmlFor={`color-picker-${id}`}>{children}</label>
      <input
        type='color'
        className='color-picker'
        id={`color-picker-${id}`}
        onChange={handleChange}
        value={of === "X" ? xColor : oColor}
      />{" "}
    </div>
  );
}

export default ColorPicker;
