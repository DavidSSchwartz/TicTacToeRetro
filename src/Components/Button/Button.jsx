import React from "react";

function Button({ children, ...delegated }) {
  return <button {...delegated}>{children}</button>;
}

export default Button;
