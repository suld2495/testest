import useBackgrund from '../../../hooks/useBackground';
import styled from './section.module.css';

export default function Section03() {
  const [height, backgroundImage] = useBackgrund('1497px', {
    pc: 'url(/images/bg02.jpg)',
    mobile: 'url(/images/mobile/bg02_m.jpg)',
    mobileHeight: 1517
  });

  return (
    <section className={styled.section}>
      <div className={styled.background} style={{ backgroundImage, height }}></div>
      <div className={styled.text}>
        <div className={styled.title}>
          <img className="title_img" src="/images/title02.png" alt='사전 등록' />
        </div>
        <div className={styled.subtext}>
          <p>사전예약 신청하고<br className={styled.mobile} /> 원하는 선수를 획득하자!</p>
          <p>사전예약 신청 기간 : <br /> 23년 3월 6일 ~ 23년 3월 27일</p>
        </div>
        <div className={styled.wish}>
          <img className={styled.pc} src='/images/present01.png' alt='위시팩 구매권' />
          <img className={styled.mobile} src='/images/mobile/present01_m.png' alt='위시팩 구매권' />
          <img src='/images/event01_txt01.png' alt='WISH 팩 증정!' />
          <img src='/images/present02.png' alt='WISH 팩' />
          <img className={styled.pc} src='/images/event01_txt02.png' alt='총 100장의 KBO 선수 카드 획득 찬스' />
          <img className={styled.mobile} src='/images/mobile/event01_txt02_m.png' alt='총 100장의 KBO 선수 카드 획득 찬스' />
        </div>
        
      </div>
    </section>
  )
}