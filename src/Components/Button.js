import React from 'react';
import '../css/Button.css';

const Button = ({ color, textColor, text, margin }) => {
  return (
    <button
      className='btn'
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
