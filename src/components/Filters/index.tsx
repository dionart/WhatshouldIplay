import React from 'react';

import styles from './styles.module.scss';

interface FilterProps{
  title: string;
  options: string[];
  onSelect: (name: string) => void;
}

const Filters: React.FC<FilterProps> = ({title, options, onSelect}) => {
  console.log(options);
  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <p className={styles.filterTitle}>{title}</p> 
        {options.map((option, index) => (
            <div key={index} className={styles.row}>
              <input type="checkbox" onChange={(e) => onSelect(e.target.name)} id={String(index)} name={option} value="HTML"/>
              <label className="label" htmlFor={option}>{option}</label><br/>
            </div>
          ))
        }
      </div>

    </div>
  );
}

export default Filters;