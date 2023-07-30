import React from 'react';

const useErrors = (boardDimensions) => {
  const [maxSizeReached, setMaxSizeReached] = React.useState(false);
  const [minSizeReached, setMinSizeReached] = React.useState(false);

  React.useEffect(() => {
    if (boardDimensions === "475px") {
      setMaxSizeReached(true);
    } else {
      setMaxSizeReached(false);
    }
    if (boardDimensions === "75px") {
      setMinSizeReached(true);
    } else {
      setMinSizeReached(false);
    }
  }, [boardDimensions]);
  
  return [minSizeReached, maxSizeReached];
};

export default useErrors;