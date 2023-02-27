import React from 'react';
import { Context } from '../App';

export default function usePopup() {
  const context = React.useContext(Context);

  const openPopup = (popupContent) => {
    context.changePopup(true);
    context.setPopupContent(popupContent);
  };

  const closePopup = () => {
    context.changePopup(false);
  };

  return {
    openPopup,
    closePopup
  }
};