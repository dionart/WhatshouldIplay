import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Gif from '../assets/Gaming.gif';
import styles from './home.module.scss'
import Filters from '../components/Filters'
import SubmitButton from '../components/SubmitButton'
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div style={{position: 'relative'}}>
      <div className={styles.absolute}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f3f4f5" fillOpacity="1" d="M0,128L205.7,192L411.4,160L617.1,96L822.9,128L1028.6,160L1234.3,192L1440,64L1440,0L1234.3,0L1028.6,0L822.9,0L617.1,0L411.4,0L205.7,0L0,0Z"></path>
        </svg>
      </div>
      <div className={styles.contentContainer}>
        <div>
          <h1 className={styles.mainTitle}>What should I play ?</h1>

          <div className={styles.center}>
            <span className={styles.gameSubtitle}>Tired of playing <span className={styles.gameName} > </span> again?</span>
            <p className={styles.subtitle}>Find any game based on simple filters and a huge library at your disposal.</p>
          </div>
        
          <Filters/>
          <div className={styles.buttonContainer}>
            <SubmitButton isLoading={false}/>
          </div>
        </div>
        <div>
          <Image className={styles.gamingGif} src={Gif} alt="this slowpoke moves"/>
        </div>
        
       
      </div>
      <Footer/>
    </div>
    
  )
}

export default Home
