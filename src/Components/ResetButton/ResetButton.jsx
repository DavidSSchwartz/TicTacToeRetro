import React from 'react';
import Button from '../Button/Button';

function ResetButton({reset, className = ''}) {
  return <Button className={`button-30 game-btn reset-btn ${className}`} onClick={reset}>Reset</Button>;
}

export default ResetButton;
