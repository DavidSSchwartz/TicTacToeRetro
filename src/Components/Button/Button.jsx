import React from "react";

function Button({ children, ...delegated }) {
  return <button className="btn" {...delegated}>{children}</button>;
}

export default Button;
