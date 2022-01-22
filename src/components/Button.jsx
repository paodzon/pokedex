import React from 'react';
import './Button.css';

function Button({children ,onClickBtn}) {
  return <button onClick={(e) => onClickBtn(e)}>{children}</button>;
}

export default Button;
