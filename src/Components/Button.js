import React from 'react';
import '../css/Button.css';

const Button = ({ color, textColor, text }) => {
  return (
    <button className='btn' style={{ background: color, color: textColor }}>
      {text}
    </button>
  );
};

export default Button;
