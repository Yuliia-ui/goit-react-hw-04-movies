import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

import styles from '../Navigation/Navigation.module.css';

const Navigation = () => (
  <ul className={styles.listMenu}>
    <li className={styles.listItem}>
      <NavLink
        exact
        to={routes.homePage}
        className={styles.NavLink}
        activeClassName={styles.LinkActive}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.listItem}>
      <NavLink
        to={routes.movies}
        className={styles.NavLink}
        activeClassName={styles.LinkActive}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
