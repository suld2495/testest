import React from 'react';

const BACKGROUND_HEIGHT = 800;

export default function useBackgrund(defaultheight, bg) {
  const [height, setHeight] = React.useState(() => {
    if (window.outerWidth > BACKGROUND_HEIGHT) {
      return defaultheight;
    }
    
    return bg.mobileHeight * window.outerWidth / 640 + 'px';
  });
  const [backgroundImage, setBackgroundImage] = React.useState(() => (
    window.outerWidth <= BACKGROUND_HEIGHT ? bg.mobile : bg.pc
  ));

  React.useEffect(() => {
    const resize = () => {
      setBackgroundImage(window.outerWidth <= BACKGROUND_HEIGHT ? bg.mobile : bg.pc);

      if (window.outerWidth > BACKGROUND_HEIGHT) {
        setHeight(defaultheight);
        return;
      }
      
      setHeight(bg.mobileHeight * window.outerWidth / 640 + 'px');
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  });

  return [height, backgroundImage]
}