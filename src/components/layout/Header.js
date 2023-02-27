import Menu from "./Menu";
import styles from './header.module.css';
import { Helmet } from "react-helmet";
import { THUMNAIL, URL } from "../../config";

export default function Header() {
  const title = "9UP 프로야구";
  const description = "진정한 야덕을 위한 KBO 덕질 플랫폼, 9UP 프로야구!";

  return (
    <header className={styles.header}>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta http-equiv="pragram" content="no-cache" />
        <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="expires" content="0" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content="9up, 라인업, 나인업, 컬렉터블, 프로야구, kbo, 한국야구, 야구게임, 야구카드, 시뮬레이션, 스포츠, 야구, 매니지먼트, 매니징, 야구응원가, kbo프로야구, 비더레전드, 컴프야, 컴프매, 넷프야, 마구마구" />
        <meta property="image" content={THUMNAIL} />
        <meta property="og:url" class="fb_url" content={URL} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" class="fb_title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:keywords" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={THUMNAIL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <div className={styles.logo}><img src='/images/logo_top.png' alt="logo" /></div>
      <Menu />
    </header>
  )
}