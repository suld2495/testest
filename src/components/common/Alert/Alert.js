import React from 'react';
import { Context } from '../../../App';
import usePopup from '../../../hooks/usePopup';
import styled from './alert.module.css';

export default function Alert({ children, width = '100%' }) {
  const context = React.useContext(Context);
  const { closePopup } = usePopup();

  const style = {
    width
  };

  if (!context.popup) {
    return null;
  }

  return (
    <div className={styled.alert_box}>
      <div className={styled.alert} style={style}>
        <div onClick={closePopup} className={styled.close}></div>
        <div className={styled.content}>{children}</div>
        <div onClick={closePopup} className={styled.confirm}>확인</div>
      </div>
    </div>
  )
}