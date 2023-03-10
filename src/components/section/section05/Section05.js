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
          <img className={styled.pc} src="/images/event02_txt01.png" alt='?????? ????????? ?????? ??? ?????? ??????!' />
          <img className={styled.mobile} src="/images/mobile/event02_txt01_m.png" alt='?????? ????????? ?????? ??? ?????? ??????!' />
          <h2>9UP ?????? ??????<span>NOW!</span></h2>
          <p>???????????? ?????? ?????? ??? 9UP???<br className={styled.mobile} /> ????????? ?????????????????? ????????????.</p>
          <p>(?????? ???????????? ????????????<br className={styled.mobile} /> ????????? ????????? ????????????.)</p>
        </div>
        <div className={styled.reward}>
          <ul>
            <li>
              <img className={styled.pc}  src='/images/present03_01.png' alt='??????' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="1" />
              <img className={styled.mobile}  src='/images/mobile/present03_m01.png' alt='??????' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="1" />
            </li>
            <li>
              <img className={styled.pc}  src='/images/present03_02.png' alt='??????' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="2" />
              <img className={styled.mobile}  src='/images/mobile/present03_m02.png' alt='??????' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="3" />
            </li>
            <li>
              <img className={styled.pc}  src='/images/present03_03.png' alt='??????' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="3" />
              <img className={styled.mobile}  src='/images/mobile/present03_m04.png' alt='??????' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-index="3" />
            </li>
          </ul>
          { popup.visible && <ItemBox title={popup.title} content={popup.content} position={popup.position} ref={popupRef} onClose={handleClosePopup} />}
        </div>
        <div className={styled.download}>
          <Button background='#1fb0c5' border><a href={GOOGLE_APP_URL} className={styled.download_text}>?????????????????? ??????</a></Button>
        </div>
        <div className={styled.link}>
          <div><a href={GOOGLE_APP_URL}><img src="/images/googleplay.png" alt="??????"/></a></div>
          <div><a href={IOS_APP_URL}><img src="/images/appstore.png" alt="??????"/></a></div>
        </div>
      </div>
    </section>
  )
}