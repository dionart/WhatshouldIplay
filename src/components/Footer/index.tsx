import React from 'react';

import styles from './styles.module.scss';
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from "react-icons/fa";

const Footer: React.FC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <a href="https://www.linkedin.com/in/dionart/">
          <FaLinkedin size={30} color='#1F5077'/>
        </a>
        <a href="https://github.com/dionart">
          <FaGithubSquare size={30} color='#1F5077'/>
        </a>
        <a href = "mailto: arthurdaao@hotmail.com">
          <FaEnvelopeSquare size={30} color='#1F5077'/>
        </a>
      </div>

    </div>
  );
}

export default Footer;