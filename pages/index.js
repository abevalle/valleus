import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainNav from './navbar.js';
import About from './about.js'
import HeroUnit from './heroUnit'

export default function Home() {
  return (
    <div className={styles.container}>
    <MainNav/>
    <HeroUnit></HeroUnit>
    <About/>
    </div>
  )
}
