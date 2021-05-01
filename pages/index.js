import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 id={styles.valleus}>ValleUS</h1>
      <div>
        <svg id={styles.logo} width="60vh" viewBox="0 0 526 547" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="263" cy="263" r="257" stroke="white" strokeWidth="12"/>
          <path d="M377.489 130.2L287.889 399C283.089 411.267 274.556 417.4 262.289 417.4C249.489 417.4 240.689 411.267 235.889 399L147.489 130.2H205.089L262.289 315.8L319.489 130.2H377.489Z" fill="white"/>f
        </svg>
      </div>
      <h1 style={{textAlign: 'center', color: '#FFF'}}>Coming Soon!</h1>
    </div>
  )
}
