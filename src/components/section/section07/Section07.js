
import React, { useCallback } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from './section.module.css';
import { Carousel } from 'react-responsive-carousel';

const BACKGROUND_HEIGHT = 640;

const getBackground = () => {
  if (window.outerWidth > BACKGROUND_HEIGHT) {
    return 'url(/images/bg05.jpg)'
  }

  return 'url(/images/mobile/bg05_m.jpg)'
};

export default function Section01() {
  const [backgroundImage, setBackgroundImage] = React.useState(getBackground);

  const resize = useCallback(() => {
    setBackgroundImage(getBackground);
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  return (
    <section className={styled.section} style={{ backgroundImage }}>
      <div className={styled.text}>
        <div className={styled.title}>
          <img src="/images/title04.png" alt='EVENT2' />
        </div>
        <div className={styled.content}>
          <a className={styled.youtube}>
            <iframe src="https://www.youtube.com/embed/0RRo0ssGBkM?controls=0" title="YouTube video player" allowFullScreen></iframe>
          </a>
          <div className={styled.container}>
            <Carousel
              renderArrowPrev={(clickHandler) => <div className={`${styled.arrow} ${styled.prev}`} onClick={clickHandler}><img src='/images/arrow_left.png' alt='왼쪽 화살표' /></div>}
              renderArrowNext={(clickHandler) => <div className={`${styled.arrow} ${styled.next}`} onClick={clickHandler}><img src='/images/arrow_right.png' alt='오른쪽 화살표' /></div>}
              showArrows={true} showStatus={false}  showThumbs={false} emulateTouch autoPlay infiniteLoop>
              <div><img src='/images/intro01.png' alt='소개' /></div>
              <div><img src='/images/intro02.png' alt='소개' /></div>
              <div><img src='/images/intro03.png' alt='소개' /></div>
              <div><img src='/images/intro04.png' alt='소개' /></div>
              <div><img src='/images/intro05.png' alt='소개' /></div>
              <div><img src='/images/intro06.png' alt='소개' /></div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}