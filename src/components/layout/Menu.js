import useScroll from '../../hooks/useScroll';
import Link from '../common/Link/Link';
import styles from './menu.module.css'

export default function Menu({ mobile, closePopup }) {
  useScroll(mobile);
  const menuList = [
    ["사전예약"], 
    ["커뮤니티", "https://game.naver.com/lounge/9UP_Collectable"], 
    ["쿠폰입력", "http://9up.aceproject.co.kr/coupon "], 
    ["미디어", "https://www.youtube.com/@9up8"]
  ];
  return (
    <div className={`${styles.menubox} ${mobile ? styles.show : ''}`}>
      <div onClick={closePopup} className={styles.close}></div>
      <div className={styles.logo}><img src='/images/logo_top.png' alt="logo" /></div>
      <ul className={styles.menu}>
        {menuList.map(([menu, link]) => (
          <li key={menu}><Link href={link || ''} color="#fff">{menu}</Link></li>
        ))}
      </ul>
    </div>
  )
}