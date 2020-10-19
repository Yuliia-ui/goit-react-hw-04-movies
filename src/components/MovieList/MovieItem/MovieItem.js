import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../routes';
import styles from '../MovieItem/MovieItem.module.css';

export default function MovieItem({ id, poster_path, title, location }) {
  return (
    <li className={styles.MovieItem}>
      <Link
        className={styles.ItemLink}
        to={{
          pathname: `${routes.MoviePage}/${id}`,
          state: { from: location },
        }}
      >
        <img className={styles.ItemMovieImg} src={poster_path} alt={title} />
        <h3 className={styles.ItemMovieTitle}>{title}</h3>
      </Link>
    </li>
  );
}
