import React from 'react';

export default function useBackgrund(defaultheight, bg) {
  const [height, setHeight] = React.useState(defaultheight);
  const [backgroundImage, setBackgroundImage] = React.useState(() => (
    window.outerWidth <= 800 ? bg.mobile : bg.pc
  ));

  React.useEffect(() => {
    const resize = () => {
      setBackgroundImage(window.outerWidth <= 800 ? bg.mobile : bg.pc);

      if (window.outerWidth > 800) {
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