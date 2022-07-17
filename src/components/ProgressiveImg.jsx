import React, { useState, useEffect } from 'react';
import styles from '../styles/ProgressiveImg.module.css';

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  const customClass = placeholderSrc && imgSrc === placeholderSrc ? 'loading' : 'loaded';

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ''}
      className={`${styles.image} ${styles[{ customClass }]}`}
    />
  );
};

export default ProgressiveImg;
