import React from 'react';
import folders from '../utils/folders';
import { NavLink } from 'react-router-dom';

const Navigation = ({ tabIndex = undefined, styles }) => {
  return (
    <>
      {folders.map((folder, key) => (
        <NavLink
          key={`Link-${key}`}
          to={`/${folder}`}
          tabIndex={tabIndex}
          className={({ isActive }) =>
            [styles['Header__anchor'], isActive ? styles.active : null].filter(Boolean).join(' ')
          }
        >
          {folder.split('-').join(' ')}
        </NavLink>
      ))}
    </>
  );
};

export default Navigation;
