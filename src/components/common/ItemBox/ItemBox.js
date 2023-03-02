import styled from './itembox.module.css';
import React from 'react';

const ItemBox = React.forwardRef(({ title, content, position, onClose }, ref) => {
  const [left, top] = position;
  return (
    <div className={styled.itembox} style={{ left, top }} ref={ref} onMouseLeave={() => onClose(false)}>
      <h1>{title}<div className={styled.close} onClick={() => onClose(true)}></div></h1>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
})

export default ItemBox;