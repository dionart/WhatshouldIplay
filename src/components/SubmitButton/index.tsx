import React from 'react';
import {CgSpinnerTwo} from 'react-icons/cg'
import styles from './styles.module.scss'

// import { Container } from './styles';

interface ButtonProps{
  isLoading: boolean
}

const SubmitButton: React.FC<ButtonProps> = ({isLoading = false}) => {
  return (
  <div className={styles.buttonContainer}>
    <button className={styles.submitButton} type="button">
      {isLoading ? 
        (<img className={styles.loader} src="/loading.svg" alt="loading"/>) 
        : 
        (<span>let's go!</span>)
      }
    </button>
    
  </div>
  );
}

export default SubmitButton;