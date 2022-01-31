import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Gif from '../assets/Gaming.gif';
import styles from './home.module.scss'
import Filters from '../components/Filters'
import SubmitButton from '../components/SubmitButton'
import Footer from '../components/Footer';
import api from '../services/api';
import { useEffect, useState } from 'react';

function range(start: number, end: number) {
  var ans = [];
  for (let i = start; i <= end; i++) {
      ans.push(i);
  }
  return ans;
}

const ratingsMap : any ={
  'Awful': range(0, 20),
  'Bad': range(20, 40),
  'Meh': range(40, 60),
  'Normal': range(60, 80),
  'Good': range(80, 100),
}

const platformMap : any = {
  'PC': 4,
  'PS5': 187,
  'XBOX ONE': 1,
  'PS4': 18,
  'XBOX Series X': 186,
  'Nintendo Switch': 7
}

const Home: NextPage = () => {
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [platform, setPlatform] = useState(null);
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState<any>([]);
 
  useEffect(() => {
    // console.log('aaaa', ratingsMap['Bad'][0])
    // console.log('aaaa', ratingsMap['Bad'][ratingsMap['Bad'].length -1 ])
    console.log('env', String(process.env.NEXT_PUBLIC_API_URL))
  }, [])
  

  const Teste = async () => {
    setLoading(true);
    console.log(rating);
    console.log(platform);
    console.log(genre);
    try {
      const res = await api.get(`/games?key=71961a03f67842dc90d6f7504b0fe8e4&genres=${genre.toLowerCase()}&platforms=${platform}`);
      console.log('res', res);
      console.log('range', ratingsMap['Normal']);
      res.data.results.map((item: any)  => {
        console.log('nota', item.metacritic);
        if(rating && (item.metacritic > rating[0] && item.metacritic < rating[20])){
          setGames([...games, item])
        }
      })
      console.log(games);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

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

          <div className={styles.row}>
            <Filters onSelect={(s) => setGenre(s)} title='Genre' options={['Action', 'Adventure', 'Shooter', 'Strategy', 'Indie', 'RPG']} />
            <Filters onSelect={(s) => setRating(ratingsMap[s])} title='Rating' options={['Awful', 'Bad', 'Meh', 'Normal', 'Good']} />
            <Filters onSelect={(s) => setPlatform(platformMap[s])} title='Platform' options={['PC', 'PS5', 'XBOX Series X', 'PS4', 'XBOX ONE', 'Nintendo Switch']} />
          </div>

          <div className={styles.buttonContainer}>
            <SubmitButton loading={loading} onClick={() => Teste()}/>
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
