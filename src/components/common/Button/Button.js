import styles from './button.module.css';

export default function Button({ children, onClick, width, border, fontSize, background }) {
  const style = {};
  width && (style.width = width);
  fontSize && (style.fontSize = fontSize)
  background && (style.background = background)

  return (
    <div className={styles.button} onClick={onClick} style={style}>
      <div className={border ? '' : styles.border_none}>{children}</div>
    </div>
  )
}