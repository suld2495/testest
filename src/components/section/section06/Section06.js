import useBackgrund from '../../../hooks/useBackground';
import styled from './section.module.css';

export default function Section01() {
  const [height, backgroundImage] = useBackgrund('1057px', {
    pc: 'url(/images/bg04.jpg)',
    mobile: 'url(/images/mobile/bg04_m.jpg)',
    mobileHeight: 1384
  });

  return (
    <section className={styled.section}>
      <div className={styled.background} style={{ backgroundImage, height }}></div>
      <div className={styled.text}>
        <div className={styled.title}>
          <img className="title_img" src="/images/title03.png" alt='EVENT2' />
        </div>
        <div className={styled.subtext}>
          <p>대한민국 야구, 화이팅!</p>
          <p>대한민국 야구 대표팀 진출 단계별 추가 보상 지급!</p>
        </div>
        <img className={styled.pc} src='/images/step.png' alt='사전예약' />
        <img className={styled.mobile} src='/images/mobile/step_m.png' alt='사전예약' />
        <div className={styled.notice}>
          <p>EVENT.3 보상은 사전예약 종료후 <br />쿠폰 코드에 반영되어 나갑니다.</p>
        </div>
      </div>
    </section>
  )
}