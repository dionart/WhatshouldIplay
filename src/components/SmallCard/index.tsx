import React from 'react';

import styles from './styles.module.scss';

const SmallCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src="https://images.hdqwalls.com/download/gta-v-blitzplay-ap-1360x768.jpg"/>
      <div>
        <h1 className={styles.cardTitle}>Grand Theft Auto</h1>
        <p className={styles.cardSubtitle}>Grand Theft Auto é uma série de jogos eletrônicos criada por David Jones e Mike Dailly, sendo posteriormente gerenciada pelos irmãos Dan e Sam Houser, Leslie Benzies e Aaron Garbut. A maioria dos jogos foi desenvolvida pela Rockstar North e publicada pela Rockstar Games.</p>
      </div>
    </div>
  );
}

export default SmallCard;