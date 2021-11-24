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
          <label htmlFor="action">Action</label><br/>
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
        <p className={styles.filterTitle}>Launch Year</p>
        <div className={styles.row}>
          <input type="checkbox" id="action" name="fav_language" value="HTML"/>
          <label htmlFor="action">Action</label><br/>
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
      
    </div>
  );
}

export default Filters;