import { GOOGLE_APP_URL, IOS_APP_URL } from '../../../config';
import useBackgrund from '../../../hooks/useBackground';
import Button from '../../common/Button/Button';
import ItemBox from '../../common/ItemBox/ItemBox';
import styled from './section.module.css';
import React from 'react';

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
  const [height, backgroundImage] = useBackgrund('1315px', {
    pc: 'url(/images/bg03.jpg)',
    mobile: 'url(/images/mobile/bg03_m.jpg)',
    mobileHeight: 1706
  });

  const handleMouseOver = ({ target }) => {
    console.log(1);

    if (popupNone) {
      return;
    }

    setPopup({
      visible: true,
      title: '안녕하세요',
      content: ['테스트입니다', '어서오세요'],
      position: [target.offsetLeft - 100, target.offsetTop + 50]
    });
  };

  
  const handleMouseOut = (e) => {
    const { clientX, clientY } = e;
    const rect = popupRef.current?.getBoundingClientRect();

    if (window.outerWidth < 850) {
      return;
    }

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
              <img className={styled.pc}  src='/images/present03_01.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
              <img className={styled.mobile}  src='/images/mobile/present03_m01.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
            </li>
            <li>
              <img className={styled.pc}  src='/images/present03_02.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
              <img className={styled.mobile}  src='/images/mobile/present03_m02.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
            </li>
            <li>
              <img className={styled.pc}  src='/images/present03_03.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
              <img className={styled.mobile}  src='/images/mobile/present03_m04.png' alt='보상' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
            </li>
          </ul>
          { popup.visible && <ItemBox title={popup.title} content={popup.content} position={popup.position} ref={popupRef} onClose={handleClosePopup} />}
        </div>
        <div className={styled.download}>
          <h3>{'<9UP 프로야구>'}</h3>
          <Button background='#1fb0c5' border><span className={styled.download_text}>다운로드하러 가기</span></Button>
        </div>
        <div className={styled.link}>
          <div><a href={GOOGLE_APP_URL}><img src="/images/googleplay.png" alt="구글"/></a></div>
          <div><a href={IOS_APP_URL}><img src="/images/appstore.png" alt="애플"/></a></div>
        </div>
      </div>
    </section>
  )
}