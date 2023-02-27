import Link from '../common/Link/Link';
import styles from './menu.module.css'

export default function Menu() {
  const menuList = [["사전예약"], ["커뮤니티"], ["쿠폰입력", "http://9up.aceproject.co.kr/coupon "], ["미디어"]];
  return (
    <ul className={styles.menu}>
      {menuList.map(([menu, link]) => (
        <li key={menu}><Link href={link || ''} color="#fff">{menu}</Link></li>
      ))}
    </ul>
  )
}