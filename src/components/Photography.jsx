import React from 'react';

import styles from '../styles/Photography.module.css';

const Photography = ({ src, alt }) => {
  return (
    <div className={styles.Photography}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Photography;
