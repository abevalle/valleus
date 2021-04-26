import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainNav from './navbar.js';
import About from './about.js'
import HeroUnit from './heroUnit'
import Services from './services'
import Footer from './footer'
import Tcx from './3cx'

export default function Home() {
  return (
    <div>
    <MainNav/>
    <HeroUnit></HeroUnit>
    <About/>
    <Services/>
    <Footer/>

    </div>
  )
}
