import { useEffect, useState } from 'react';

export const useResizeListener = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const updateSize = () => {
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);
  };

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return { screenWidth, screenHeight };
};
