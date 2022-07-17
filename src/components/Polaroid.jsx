import React from 'react';
import styles from '../styles/Polaroid.module.css';
import ProgressiveImg from './ProgressiveImg';

const Polaroid = ({ src, alt, placeholderSrc, onClick = undefined, tabIndex = undefined }) => {
  return (
    <button className={styles.Polaroid} onClick={onClick} tabIndex={tabIndex}>
      <ProgressiveImg
        src={src}
        placeholderSrc={placeholderSrc}
        alt={alt}
        className={styles['Polaroid__image']}
        width="390"
        height="240"
      />
    </button>
  );
};

export default Polaroid;
