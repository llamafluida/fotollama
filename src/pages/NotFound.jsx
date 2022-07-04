import React from 'react';
import styles from '../styles/NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <p className={styles['NotFound__message']}>
        <span className={styles['NotFound__message--big']}>404 | </span>No se encontró la página
      </p>
    </div>
  );
};

export default NotFound;
