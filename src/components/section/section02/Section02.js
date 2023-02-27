import useBackgrund from '../../../hooks/useBackground';
import usePopup from '../../../hooks/usePopup';
import AlertNotice from '../../common/Alert/template/AlertNotice';
import styled from './section.module.css';

export default function Section01() {
  const { openPopup } = usePopup();
  const [height, backgroundImage] = useBackgrund('970px', {
    pc: 'url(/images/bg01.jpg)',
    mobile: 'url(/images/mobile/bg01_m.jpg)',
    mobileHeight: 1350
  });

  const notice = () => {
    openPopup(<AlertNotice />);
  };

  return (
    <section className={styled.section}>
      <div className={styled.background} style={{ backgroundImage, height }}></div>
      <div className={`${styled.text} title`}>
        <div className={styled.title}>
          <p className={styled.mobile}>~ 03월 23일 전 까지</p>
          <img className="title_img" src="/images/title01.png" alt='사전 등록' />
          <p onClick={notice} className={styled.mobile}>*유의사항</p>
          <div className={styled.pc}>
            <span>~ 03월 23일 전 까지</span>
            <span onClick={notice}>*유의사항</span>
          </div>
        </div>
        <div className={styled.list}>
          <ul>
            <li>
              <span className={styled.pc}>EVENT 1.</span>
              <img className={styled.pc} src='/images/event01.png' alt='사전예약 보상 획득!' />
              <img className={styled.mobile} src='/images/mobile/event01_m.png' alt='사전예약 보상 획득!' />
            </li>
            <li>
              <span className={styled.pc}>EVENT 2.</span>
              <img className={styled.pc} src='/images/event02.png' alt='9UP 프로야구 접속 시 증정!' />
              <img className={styled.mobile} src='/images/mobile/event02_m.png' alt='9UP 프로야구 접속 시 증정!' />
            </li>
            <li>
              <span className={styled.pc}>EVENT 3.</span>
              <img className={styled.pc} src='/images/event03.png' alt='대한민국 야구, 화이팅!' />
              <img className={styled.mobile} src='/images/mobile/event03_m.png' alt='대한민국 야구, 화이팅!' />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}