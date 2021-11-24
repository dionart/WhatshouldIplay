import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'
import Filters from '../components/Filters'
import SubmitButton from '../components/SubmitButton'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.contentContainer}>
        
        <h1 className={styles.mainTitle}>What should I play ?</h1>
        <p className={styles.subtitle}>Find any game based on simple filters and a huge library at your disposal.</p>

        <Filters/>
        <SubmitButton isLoading={false}/>
       
      </div>
    </>
    
  )
}

export default Home
