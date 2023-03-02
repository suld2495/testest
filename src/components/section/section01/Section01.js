import React from 'react';
import { GOOGLE_APP_URL, IOS_APP_URL } from '../../../config';
import useBackgrund from '../../../hooks/useBackground';
import styled from './section.module.css';

export default function Section01() {
  const [height, backgroundImage] = useBackgrund('971px', {
    pc: 'url(/images/mainimg.jpg)',
    mobile: 'url(/images/mobile/mainimg_m.jpg)',
    mobileHeight: 825
  });

  return (
    <section className={styled.section}>
      <div className={styled.background} style={{ backgroundImage, height }}></div>
      <div className={styled.text}>
        <div className={styled.title}><img src="/images/txt01.png" alt='하루 10분 투자로 완성되는 KBO 프로야구 매니지먼트 게임' /></div>
        <div className={styled.bottom}>
          <div className={styled.link}>
            <div><a href={GOOGLE_APP_URL}><img src="/images/googleplay.png" alt="구글"/></a></div>
            <div><a href={IOS_APP_URL}><img src="/images/appstore.png" alt="애플"/></a></div>
          </div>
          <div className={styled.subtitle}>
            <img src="/images/start.png" alt="사전예약 시작" />
          </div>
        </div>
      </div>
    </section>
  )
}