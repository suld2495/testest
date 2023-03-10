import { GOOGLE_APP_URL, IOS_APP_URL } from '../../../config';
import useBackgrund from '../../../hooks/useBackground';
import Button from '../../common/Button/Button';
import ItemBox from '../../common/ItemBox/ItemBox';
import styled from './section.module.css';
import React from 'react';
import { rewardData } from '../../../config/RewardData';

export default function Section05() {
  const [popupNone, setPopupNone] = React.useState(false);
  const popupRef = React.useRef();
  const initPopup = {
    visible: false,
    title: '',
    content: [],
    position: [0, 0]
  };
  const [popup, setPopup] = React.useState(initPopup);
  const [height, backgroundImage] = useBackgrund('1195px', {
    pc: 'url(/images/bg03.jpg)',
    mobile: 'url(/images/mobile/bg03_m.jpg)',
    mobileHeight: 1706
  });

  const handleMouseOver = ({ target }) => {
    const { index } = target.dataset;

    if (popupNone || !index) {
      return;
    }

    let position = [target.offsetLeft + target.getBoundingClientRect().width / 2, target.offsetTop + 100];

    if (window.outerWidth <= 640) {
      position[0] = '50%';
    } else if (window.outerWidth < 1000) {
      position[0] = target.offsetLeft - 20;
    }

    setPopup({
      visible: true,
      position: position,
      ...rewardData[Number(index) - 1]
    });
  };

  
  const handleMouseOut = (e) => {
    const { clientX, clientY } = e;
    const rect = popupRef.current?.getBoundingClientRect();

    if (rect 
        && rect.x <= clientX && clientX <= rect.x + rect.width
        && rect.y <= clientY && clientY <= rect.y + rect.height) {
      return;
    }

    setPopup({ ...initPopup})
    setPopupNone(false);
  };

  const handleClosePopup = (check) => {
    setPopupNone(check);
    setPopup({ ...initPopup})
  }

  return (
    <section className={styled.section}>
      <div className={styled.background} style={{ backgroundImage, height }}></div>
      <div className={styled.text}>
        <div className={styled.title}>
          <img className="title_img" src="/images/title05.png" alt='EVENT2' />
        </div>
        <div className={styled.subtext}>
          <img className={styled.pc} src="/images/event02_txt01.png" alt='지금 아니면 받을 수 없는 혜택!' />
          <img className={styled.mobile} src="/images/mobile/event02_txt01_m.png" alt='지금 아니면 받을 수 없는 혜택!' />
          <h2>9UP 접속 보상<span>NOW!</span></h2>
          <p>사전예약 신청 기간 중 9UP에<br className={styled.mobile} /> 접속한 유저분들에게 드립니다.</p>
          <p>(보상 꾸러미를 클릭하면<br className={styled.mobile} /> 꾸러미 내용이 나옵니다.)</p>
        </div>
        <div className={styled.reward}>
          <ul>
            <li>
              <img className={styled.pc}  src='/images/present03_01.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="1" />
              <img className={styled.mobile}  src='/images/mobile/present03_m01.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="1" />
            </li>
            <li>
              <img className={styled.pc}  src='/images/present03_02.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="2" />
              <img className={styled.mobile}  src='/images/mobile/present03_m02.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="3" />
            </li>
            <li>
              <img className={styled.pc}  src='/images/present03_03.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="3" />
              <img className={styled.mobile}  src='/images/mobile/present03_m04.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="3" />
            </li>
          </ul>
          { popup.visible && <ItemBox title={popup.title} content={popup.content} position={popup.position} ref={popupRef} onClose={handleClosePopup} />}
        </div>
        <div className={styled.download}>
          <Button background='#1fb0c5' border><a href={GOOGLE_APP_URL} className={styled.download_text}>다운로드하러 가기</a></Button>
        </div>
        <div className={styled.link}>
          <div><a href={GOOGLE_APP_URL}><img src="/images/googleplay.png" alt="구글"/></a></div>
          <div><a href={IOS_APP_URL}><img src="/images/appstore.png" alt="애플"/></a></div>
        </div>
      </div>
    </section>
  )
}