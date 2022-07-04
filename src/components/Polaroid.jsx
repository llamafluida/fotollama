import React from 'react';
import styles from '../styles/Polaroid.module.css';

const Polaroid = ({ src, alt, onClick = undefined, tabIndex = undefined }) => {
  return (
    <button className={styles.Polaroid} onClick={onClick} tabIndex={tabIndex}>
      <img src={src} alt={alt} className={styles['Polaroid__image']} />
    </button>
  );
};

export default Polaroid;
