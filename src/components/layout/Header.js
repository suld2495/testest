import Menu from "./Menu";
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}><img src='/images/logo_top.png' alt="logo" /></div>
      <Menu />
    </header>
  )
}