import React from 'react';

import styles from './styles.module.scss';

const Filters: React.FC = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <p className={styles.filterTitle}>Genre</p>  
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label className="label" htmlFor="action">Action</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">Adventure</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">Horror</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">FPS</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">Survival</label><br/>
        </div>
      </div>
      <div className={styles.form}>
        <p className={styles.filterTitle}>Score</p>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">Awful</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">Bad</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">Normal</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">Good</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">Perfect</label><br/>
        </div>
      </div>
      <div className={styles.form}>
        <p className={styles.filterTitle}>Launch Year</p>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">2000 ~ 2005</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">2005 ~ 2010</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">2010 ~ 2015</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">2015 ~ 2020</label><br/>
        </div>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">2020 ~ Now</label><br/>
        </div>
      </div>
      
    </div>
  );
}

export default Filters;