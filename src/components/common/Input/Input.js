import styles from './input.module.css';

export default function Input({ label = '', onChange, value, button ='', placeholder, disabled }) {
  return (
    <div className={`${styles.input} input ${disabled ? styles.disabled : ''}`}>
      <div>
        <div className={styles.label}>{label}</div>
        <div className={styles.inputbox}><input onChange={onChange} value={value} placeholder={placeholder} disabled={disabled}/></div>
      </div>
      {button}
    </div>
  )
}