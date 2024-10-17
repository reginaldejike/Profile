import React from "react";
import "../scss/Button.scss";

const Button = ({ color, textColor, text, margin }) => {
  return (
    <button
      className="btn"
      style={{
        background: color,
        color: textColor,
        margin: margin,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
