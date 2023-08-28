import React from 'react';
import Button from '../Button/Button';

function ResetButton({reset, className}) {
  return <Button className={`btn reset-btn ${className}`} onClick={reset}>Reset</Button>;
}

export default ResetButton;
