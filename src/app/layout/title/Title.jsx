import React from 'react';
import styles from '../style.css';

function Title() {
  return (
    <h1 className={styles.title}>
      <span className={styles.red}>Real </span>
      <span className={styles.blue}>Board </span>
      <span className={styles.green}>Games</span>
    </h1>
  );
}

export default Title;
