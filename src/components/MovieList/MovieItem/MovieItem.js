import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../routes';

import styles from './MovieItem.module.css';

const MoviesItem = ({ id, poster_path, title, location }) => {
  return (
    <li className={styles.MovieItem}>
      <Link
        className={styles.ItemLink}
        to={{
          pathname: `${routes.movies}/${id}`,
          state: { from: location },
        }}
      >
        <img className={styles.ItemMovieImg} src={poster_path} alt={title} />
        <h3 className={styles.ItemMovieTitle}>{title}</h3>
      </Link>
    </li>
  );
};

export default MoviesItem;
