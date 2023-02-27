import Menu from "./Menu";
import styles from './header.module.css';
import { Helmet } from "react-helmet";
import { URL } from "../../config";

export default function Header() {
  return (
    <header className={styles.header}>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta http-equiv="pragram" content="no-cache" />
        <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="expires" content="0" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="title" content="9UP 프로야구" />
        <meta name="description" content="진정한 야덕을 위한 KBO 덕질 플랫폼, 9UP 프로야구!" />
        <meta name="keywords" content="9up, 라인업, 나인업, 컬렉터블, 프로야구, kbo, 한국야구, 야구게임, 야구카드, 시뮬레이션, 스포츠, 야구, 매니지먼트, 매니징, 야구응원가, kbo프로야구, 비더레전드, 컴프야, 컴프매, 넷프야, 마구마구" />
        <meta property="image" content={URL} />
        <meta property="og:url" class="fb_url" content="" />
        <meta property="og:site_name" content="9UP 프로야구" />
        <meta property="og:title" class="fb_title" content="9UP 프로야구" />
        <meta property="og:type" content="website" />
        <meta property="og:keywords" content="9UP 프로야구" />
        <meta property="og:description" content="진정한 야덕을 위한 KBO 덕질 플랫폼, 9UP 프로야구!" />
        <meta property="og:image" content={URL} />
        <meta property="og:image:width" content="680" />
        <meta property="og:image:height" content="356" />
      </Helmet>
      <div className={styles.logo}><img src='/images/logo_top.png' alt="logo" /></div>
      <Menu />
    </header>
  )
}