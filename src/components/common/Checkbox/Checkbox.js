import styles from './checkbox.module.css';

export default function Checkbox({ value, onChange, children, name, color }) {
  return (
    <div className={styles.checkbox}>
      <label>
        <div className={styles.inputbox}><input style={{ backgroundColor: color }} type='checkbox' name={name} checked={value} onChange={onChange} /></div>
        <div>{children}</div>
      </label>
    </div>
  )
}