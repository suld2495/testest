
import React from 'react';
import useBackgrund from '../../../hooks/useBackground';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from './section.module.css';
import { Carousel } from 'react-responsive-carousel';

export default function Section01() {
  const [height, backgroundImage] = useBackgrund('1681px', {
    pc: 'url(/images/bg05.jpg)',
    mobile: 'url(/images/mobile/bg05_m.jpg)',
    mobileHeight: 1131
  });

  return (
    <section className={styled.section}>
      <div className={styled.background} style={{ backgroundImage, height }}></div>
      <div className={styled.text}>
        <div className={styled.title}>
          <img src="/images/title04.png" alt='EVENT2' />
        </div>
        <div className={styled.content}>
          <a href='https://www.youtube.com/watch?v=0RRo0ssGBkM' className={styled.youtube}><img src="/images/youtube.jpg" alt='유튜브' /></a>
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