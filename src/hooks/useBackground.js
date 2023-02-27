import React from 'react';

const HEIGHT = 800;

export default function useBackgrund(defaultheight, bg) {
  const [height, setHeight] = React.useState(defaultheight);
  const [backgroundImage, setBackgroundImage] = React.useState(() => (
    window.outerWidth <= HEIGHT ? bg.mobile : bg.pc
  ));

  React.useEffect(() => {
    const resize = () => {
      setBackgroundImage(window.outerWidth <= HEIGHT ? bg.mobile : bg.pc);

      if (window.outerWidth > HEIGHT) {
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