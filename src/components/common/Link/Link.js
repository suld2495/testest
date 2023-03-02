import { Link as L } from 'react-router-dom'
import styles from './link.module.css';

export default function Link({ href, children, color }) {
  return (
    <L className={styles.link} to={href} style={{ color: color || '#111'  }}>{children}</L>
  )
}