import React from 'react';
import Button from '../Button/Button';

function ResetButton({reset}) {
  return <Button onClick={reset}>Reset</Button>;
}

export default ResetButton;
