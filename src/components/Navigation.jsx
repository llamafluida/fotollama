import React from 'react';
import folders from '../utils/folders';
import { Link } from 'react-router-dom';

const Navigation = ({ tabIndex = undefined, styles }) => {
  return (
    <>
      {folders.map((folder, key) => (
        <Link
          key={`Link-${key}`}
          to={`/${folder}`}
          tabIndex={tabIndex}
          className={`${styles['Header__anchor']}`}
        >
          {folder.split('-').join(' ')}
        </Link>
      ))}
    </>
  );
};

export default Navigation;
