import React from 'react';
import Title from '../title/Title';
import styles from '../style.css';

const title = 'Real Board Games';

function App() {
  return (
    <div className={styles.center}>
      <Title text={title} />
    </div>
  );
}

export default App;
