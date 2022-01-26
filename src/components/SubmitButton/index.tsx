import React from 'react';
import styles from './styles.module.scss'
import Image from 'next/image'

// import { Container } from './styles';

interface ButtonProps{
  loading: boolean
  onClick: () => void;
}

const SubmitButton: React.FC<ButtonProps> = ({loading = false, onClick}) => {
  return (
  <div className={styles.buttonContainer}>
    <button onClick={() => onClick()} className={styles.submitButton} type="button">
      {loading ? 
        (<Image layout='fill' className={styles.loader} src="/loading.svg" alt="loading"/>) 
        : 
        (<span>lets go!</span>)
      }
    </button>
    
  </div>
  );
}

export default SubmitButton;